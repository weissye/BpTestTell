//@provengo summon rest
// === Auto-generated interfaces for github ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/user/repos";
  var description = "Create repository " + name + " for authenticated user " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 400, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allow_auto_merge": allow_auto_merge, "allow_merge_commit": allow_merge_commit, "allow_rebase_merge": allow_rebase_merge, "allow_squash_merge": allow_squash_merge, "auto_init": auto_init, "delete_branch_on_merge": delete_branch_on_merge, "description": description, "direction": direction, "gitignore_template": gitignore_template, "has_discussions": has_discussions, "has_downloads": has_downloads, "has_issues": has_issues, "has_projects": has_projects, "has_wiki": has_wiki, "homepage": homepage, "is_template": is_template, "license_template": license_template, "merge_commit_message": merge_commit_message, "merge_commit_title": merge_commit_title, "name": name, "new_name": new_name, "new_owner": new_owner, "owner": owner, "page": page, "per-page": per_page, "private": _private, "ref": ref, "repo": repo, "sort": sort, "squash_merge_commit_message": squash_merge_commit_message, "squash_merge_commit_title": squash_merge_commit_title, "team_id": team_id, "team_ids": team_ids, "type": type, "username": username}) });
}

function listUserRepositories(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/users/" + username + "/repos";
  var description = "List repositories for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function transferRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo + "/transfer";
  var description = "Transfer repository " + owner + "/" + repo + " to new owner " + new_owner + " " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allow_auto_merge": allow_auto_merge, "allow_merge_commit": allow_merge_commit, "allow_rebase_merge": allow_rebase_merge, "allow_squash_merge": allow_squash_merge, "auto_init": auto_init, "delete_branch_on_merge": delete_branch_on_merge, "description": description, "direction": direction, "gitignore_template": gitignore_template, "has_discussions": has_discussions, "has_downloads": has_downloads, "has_issues": has_issues, "has_projects": has_projects, "has_wiki": has_wiki, "homepage": homepage, "is_template": is_template, "license_template": license_template, "merge_commit_message": merge_commit_message, "merge_commit_title": merge_commit_title, "name": name, "new_name": new_name, "new_owner": new_owner, "owner": owner, "page": page, "per-page": per_page, "private": _private, "ref": ref, "repo": repo, "sort": sort, "squash_merge_commit_message": squash_merge_commit_message, "squash_merge_commit_title": squash_merge_commit_title, "team_id": team_id, "team_ids": team_ids, "type": type, "username": username}) });
}

function deleteRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Delete repository " + owner + "/" + repo + " " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 307, 403, 404, 409] });
}

function getTopReferralPaths(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo + "/traffic/popular/paths";
  var description = "Get top referral paths for repository " + owner + "/" + repo + " " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

function getTopReferralSources(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo + "/traffic/popular/referrers";
  var description = "Get top referral sources for repository " + owner + "/" + repo + " " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

function enableVulnerabilityAlerts(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo + "/vulnerability-alerts";
  var description = "Enable vulnerability alerts for repository " + owner + "/" + repo + " " + username;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allow_auto_merge": allow_auto_merge, "allow_merge_commit": allow_merge_commit, "allow_rebase_merge": allow_rebase_merge, "allow_squash_merge": allow_squash_merge, "auto_init": auto_init, "delete_branch_on_merge": delete_branch_on_merge, "description": description, "direction": direction, "gitignore_template": gitignore_template, "has_discussions": has_discussions, "has_downloads": has_downloads, "has_issues": has_issues, "has_projects": has_projects, "has_wiki": has_wiki, "homepage": homepage, "is_template": is_template, "license_template": license_template, "merge_commit_message": merge_commit_message, "merge_commit_title": merge_commit_title, "name": name, "new_name": new_name, "new_owner": new_owner, "owner": owner, "page": page, "per-page": per_page, "private": _private, "ref": ref, "repo": repo, "sort": sort, "squash_merge_commit_message": squash_merge_commit_message, "squash_merge_commit_title": squash_merge_commit_title, "team_id": team_id, "team_ids": team_ids, "type": type, "username": username}) });
}

function disableVulnerabilityAlerts(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo + "/vulnerability-alerts";
  var description = "Disable vulnerability alerts for repository " + owner + "/" + repo + " " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function checkVulnerabilityAlerts(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo + "/vulnerability-alerts";
  var description = "Check if vulnerability alerts are enabled for repository " + owner + "/" + repo + " " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function downloadZipballArchive(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo + "/zipball/" + ref;
  var description = "Download zipball archive for repository " + owner + "/" + repo + " at ref " + ref + " " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [302] });
}

function tryToAddExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/user/repos";
  var description = "Try Add Existing Repository " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/users/" + username + "/repos";
  var description = "Verify Repository " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Repository found");
}

function verifyRepositoryDoesNotExist(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/users/" + username + "/repos";
  var description = "Verify Repository " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Repository not found");
}

function tryToDeleteANonExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Verify negative delete for Repository";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  return bp.EventSet("Delete Repository", function(e) {
      return e.name === "Done: " + "Delete repository " + owner + "/" + repo;
  });
}

function waitForRepositoryAdded(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username) {
  waitFor(matchSuccess("Create repository " + name + " for authenticated user"));
}

function matchAnyRepositoryAdded() {
  return bp.EventSet("Any Repository Added", function(e) {
      return e.name.startsWith("Done: Create repository ");
  });
}

function createRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  var url = "/orgs/" + org + "/rulesets";
  var description = "Create ruleset " + name + " in organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bypass_actors": bypass_actors, "conditions": conditions, "enforcement": enforcement, "name": name, "org": org, "rules": rules, "ruleset_id": ruleset_id, "target": target}) });
}

function getRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Get ruleset " + ruleset_id + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 500] });
}

function updateRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Update ruleset " + ruleset_id + " in organization " + org + " with name " + name;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bypass_actors": bypass_actors, "conditions": conditions, "enforcement": enforcement, "name": name, "org": org, "rules": rules, "ruleset_id": ruleset_id, "target": target}) });
}

function deleteRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Delete ruleset " + ruleset_id + " in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 500] });
}

function tryToAddExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  var url = "/orgs/" + org + "/rulesets";
  var description = "Try Add Existing Ruleset " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Verify Ruleset " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Ruleset found");
}

function verifyRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Verify Ruleset " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Ruleset not found");
}

function tryToDeleteANonExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Verify negative delete for Ruleset";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  return bp.EventSet("Delete Ruleset", function(e) {
      return e.name === "Done: " + "Delete ruleset " + ruleset_id + " in organization " + org;
  });
}

function waitForRulesetAdded(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target) {
  waitFor(matchSuccess("Create ruleset " + name + " in organization " + org));
}

function matchAnyRulesetAdded() {
  return bp.EventSet("Any Ruleset Added", function(e) {
      return e.name.startsWith("Done: Create ruleset ");
  });
}

function getRuleSuite(org, rule_suite_id) {
  var url = "/orgs/" + org + "/rulesets/rule-suites/" + rule_suite_id;
  var description = "Get rule suite " + rule_suite_id + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 500] });
}

function listRuleSuites(org, rule_suite_id) {
  var url = "/orgs/" + org + "/rulesets/rule-suites";
  var description = "List rule suites in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 500] });
}

function verifyRuleSuiteExists(org, rule_suite_id) {
  var url = "/orgs/" + org + "/rulesets/rule-suites/" + rule_suite_id;
  var description = "Verify RuleSuite " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RuleSuite found");
}

function verifyRuleSuiteDoesNotExist(org, rule_suite_id) {
  var url = "/orgs/" + org + "/rulesets/rule-suites/" + rule_suite_id;
  var description = "Verify RuleSuite " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RuleSuite not found");
}

function matchAnyRuleSuiteAdded() {
  return bp.EventSet("Any RuleSuite Added", function(e) {
      return e.name.startsWith("Done: Create RuleSuite");
  });
}

function createAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/repos/" + owner + "/" + repo + "/attestations";
  var description = "Create attestation in repository " + owner + "/" + repo + " " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attestation_id": attestation_id, "attestation_ids": attestation_ids, "bundle": bundle, "org": org, "owner": owner, "pagination_after": pagination_after, "pagination_before": pagination_before, "per_page": per_page, "predicate_type": predicate_type, "repo": repo, "subject_digest": subject_digest, "subject_digests": subject_digests, "username": username}) });
}

function listAttestations(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/users/" + username + "/attestations/" + subject_digest;
  var description = "List attestations for user " + username + " with subject_digest " + subject_digest;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 204, 404] });
}

function listAttestationsBulk(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/orgs/" + org + "/attestations/bulk-list";
  var description = "List attestations by bulk subject digests in organization " + org + " with predicate type " + predicate_type + " " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attestation_id": attestation_id, "attestation_ids": attestation_ids, "bundle": bundle, "org": org, "owner": owner, "pagination_after": pagination_after, "pagination_before": pagination_before, "per_page": per_page, "predicate_type": predicate_type, "repo": repo, "subject_digest": subject_digest, "subject_digests": subject_digests, "username": username}) });
}

function deleteAttestationsBulk(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/orgs/" + org + "/attestations/delete-request";
  var description = "Delete attestations in bulk in organization " + org + " by subject digests " + subject_digests + " or attestation IDs " + attestation_ids + " " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attestation_id": attestation_id, "attestation_ids": attestation_ids, "bundle": bundle, "org": org, "owner": owner, "pagination_after": pagination_after, "pagination_before": pagination_before, "per_page": per_page, "predicate_type": predicate_type, "repo": repo, "subject_digest": subject_digest, "subject_digests": subject_digests, "username": username}) });
}

function deleteAttestationsBySubjectDigest(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/orgs/" + org + "/attestations/digest/" + subject_digest;
  var description = "Delete attestations by subject digest " + subject_digest + " in organization " + org + " " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function deleteAttestationsById(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/orgs/" + org + "/attestations/" + attestation_id;
  var description = "Delete attestation by ID " + attestation_id + " in organization " + org + " " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function listAttestations(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/orgs/" + org + "/attestations/" + subject_digest;
  var description = "List attestations for subject digest " + subject_digest + " in organization " + org + " with predicate type " + predicate_type + " " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function listAttestationsBulk(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/users/" + username + "/attestations/bulk-list";
  var description = "List attestations in bulk for user " + username + " with subject digests " + subject_digests;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attestation_id": attestation_id, "attestation_ids": attestation_ids, "bundle": bundle, "org": org, "owner": owner, "pagination_after": pagination_after, "pagination_before": pagination_before, "per_page": per_page, "predicate_type": predicate_type, "repo": repo, "subject_digest": subject_digest, "subject_digests": subject_digests, "username": username}) });
}

function deleteAttestationsBulk(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/users/" + username + "/attestations/delete-request";
  var description = "Delete attestations in bulk for user " + username + " by subject_digests or attestation_ids";
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attestation_id": attestation_id, "attestation_ids": attestation_ids, "bundle": bundle, "org": org, "owner": owner, "pagination_after": pagination_after, "pagination_before": pagination_before, "per_page": per_page, "predicate_type": predicate_type, "repo": repo, "subject_digest": subject_digest, "subject_digests": subject_digests, "username": username}) });
}

function tryToAddExistingAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/repos/" + owner + "/" + repo + "/attestations";
  var description = "Try Add Existing Attestation " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyAttestationExists(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/users/" + username + "/attestations/" + subject_digest;
  var description = "Verify Attestation " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Attestation found");
}

function verifyAttestationDoesNotExist(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  var url = "/users/" + username + "/attestations/" + subject_digest;
  var description = "Verify Attestation " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Attestation not found");
}

function waitForAttestationAdded(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username) {
  waitFor(matchSuccess("Create attestation in repository " + owner + "/" + repo));
}

function matchAnyAttestationAdded() {
  return bp.EventSet("Any Attestation Added", function(e) {
      return e.name.startsWith("Done: Create attestation in repository ");
  });
}

function createAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks";
  var description = "Create autolink with prefix " + key_prefix + " in repository " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"autolink_id": autolink_id, "is_alphanumeric": is_alphanumeric, "key_prefix": key_prefix, "owner": owner, "repo": repo, "url_template": url_template}) });
}

function getAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks/" + autolink_id;
  var description = "Get autolink reference " + autolink_id + " for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks/" + autolink_id;
  var description = "Delete autolink reference " + autolink_id + " from repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks";
  var description = "Try Add Existing Autolink " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks/" + autolink_id;
  var description = "Verify Autolink " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Autolink found");
}

function verifyAutolinkDoesNotExist(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks/" + autolink_id;
  var description = "Verify Autolink " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Autolink not found");
}

function tryToDeleteANonExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks/" + autolink_id;
  var description = "Verify negative delete for Autolink";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  return bp.EventSet("Delete Autolink", function(e) {
      return e.name === "Done: " + "Delete autolink reference " + autolink_id + " from repository " + owner + "/" + repo;
  });
}

function waitForAutolinkAdded(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template) {
  waitFor(matchSuccess("Create autolink with prefix " + key_prefix + " in repository " + owner + "/" + repo));
}

function matchAnyAutolinkAdded() {
  return bp.EventSet("Any Autolink Added", function(e) {
      return e.name.startsWith("Done: Create autolink with prefix ");
  });
}

function checkAutomatedSecurityFixes(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/automated-security-fixes";
  var description = "Check if Dependabot security updates are enabled for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function enableAutomatedSecurityFixes(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/automated-security-fixes";
  var description = "Enable Dependabot security updates for repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo}) });
}

function disableAutomatedSecurityFixes(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/automated-security-fixes";
  var description = "Disable Dependabot security updates for repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingAutomatedSecurityFixes(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/automated-security-fixes";
  var description = "Try Add Existing AutomatedSecurityFixes " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyAutomatedSecurityFixesExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/automated-security-fixes";
  var description = "Verify AutomatedSecurityFixes " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("AutomatedSecurityFixes found");
}

function verifyAutomatedSecurityFixesDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/automated-security-fixes";
  var description = "Verify AutomatedSecurityFixes " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("AutomatedSecurityFixes not found");
}

function tryToDeleteANonExistingAutomatedSecurityFixes(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/automated-security-fixes";
  var description = "Verify negative delete for AutomatedSecurityFixes";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedAutomatedSecurityFixes(owner, repo) {
  return bp.EventSet("Delete AutomatedSecurityFixes", function(e) {
      return e.name === "Done: " + "Disable Dependabot security updates for repository " + owner + "/" + repo;
  });
}

function waitForAutomatedSecurityFixesAdded(owner, repo) {
  waitFor(matchSuccess("Enable Dependabot security updates for repository " + owner + "/" + repo));
}

function matchAnyAutomatedSecurityFixesAdded() {
  return bp.EventSet("Any AutomatedSecurityFixes Added", function(e) {
      return e.name.startsWith("Done: Enable Dependabot security updates for repository ");
  });
}

function getBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Get branch " + branch + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 301, 404] });
}

function verifyBranchExists(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Verify Branch " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Branch found");
}

function verifyBranchDoesNotExist(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Verify Branch " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Branch not found");
}

function matchAnyBranchAdded() {
  return bp.EventSet("Any Branch Added", function(e) {
      return e.name.startsWith("Done: Create Branch");
  });
}

function listBranches(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "List branches in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyBranchesExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Verify Branches " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Branches found");
}

function verifyBranchesDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Verify Branches " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Branches not found");
}

function matchAnyBranchesAdded() {
  return bp.EventSet("Any Branches Added", function(e) {
      return e.name.startsWith("Done: Create Branches");
  });
}

function getBranchProtection(allow_deletions, allow_force_pushes, allow_fork_syncing, block_creations, branch, enforce_admins, lock_branch, owner, repo, required_conversation_resolution, required_linear_history, required_pull_request_reviews, required_status_checks, restrictions) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Get branch protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateBranchProtection(allow_deletions, allow_force_pushes, allow_fork_syncing, block_creations, branch, enforce_admins, lock_branch, owner, repo, required_conversation_resolution, required_linear_history, required_pull_request_reviews, required_status_checks, restrictions) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Update branch protection for branch " + branch + " in repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allow_deletions": allow_deletions, "allow_force_pushes": allow_force_pushes, "allow_fork_syncing": allow_fork_syncing, "block_creations": block_creations, "branch": branch, "enforce_admins": enforce_admins, "lock_branch": lock_branch, "owner": owner, "repo": repo, "required_conversation_resolution": required_conversation_resolution, "required_linear_history": required_linear_history, "required_pull_request_reviews": required_pull_request_reviews, "required_status_checks": required_status_checks, "restrictions": restrictions}) });
}

function deleteBranchProtection(allow_deletions, allow_force_pushes, allow_fork_syncing, block_creations, branch, enforce_admins, lock_branch, owner, repo, required_conversation_resolution, required_linear_history, required_pull_request_reviews, required_status_checks, restrictions) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Delete branch protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403] });
}

function verifyBranchProtectionExists(allow_deletions, allow_force_pushes, allow_fork_syncing, block_creations, branch, enforce_admins, lock_branch, owner, repo, required_conversation_resolution, required_linear_history, required_pull_request_reviews, required_status_checks, restrictions) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Verify BranchProtection " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BranchProtection found");
}

function verifyBranchProtectionDoesNotExist(allow_deletions, allow_force_pushes, allow_fork_syncing, block_creations, branch, enforce_admins, lock_branch, owner, repo, required_conversation_resolution, required_linear_history, required_pull_request_reviews, required_status_checks, restrictions) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Verify BranchProtection " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchProtection not found");
}

function tryToDeleteANonExistingBranchProtection(allow_deletions, allow_force_pushes, allow_fork_syncing, block_creations, branch, enforce_admins, lock_branch, owner, repo, required_conversation_resolution, required_linear_history, required_pull_request_reviews, required_status_checks, restrictions) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Verify negative delete for BranchProtection";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBranchProtection(allow_deletions, allow_force_pushes, allow_fork_syncing, block_creations, branch, enforce_admins, lock_branch, owner, repo, required_conversation_resolution, required_linear_history, required_pull_request_reviews, required_status_checks, restrictions) {
  return bp.EventSet("Delete BranchProtection", function(e) {
      return e.name === "Done: " + "Delete branch protection for branch " + branch + " in repository " + owner + "/" + repo;
  });
}

function matchAnyBranchProtectionAdded() {
  return bp.EventSet("Any BranchProtection Added", function(e) {
      return e.name.startsWith("Done: Create BranchProtection");
  });
}

function getAdminBranchProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Get admin branch protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setAdminBranchProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Set admin branch protection for branch " + branch + " in repository " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "owner": owner, "repo": repo}) });
}

function deleteAdminBranchProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Delete admin branch protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingAdminBranchProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Try Add Existing AdminBranchProtection " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyAdminBranchProtectionExists(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Verify AdminBranchProtection " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("AdminBranchProtection found");
}

function verifyAdminBranchProtectionDoesNotExist(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Verify AdminBranchProtection " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("AdminBranchProtection not found");
}

function tryToDeleteANonExistingAdminBranchProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Verify negative delete for AdminBranchProtection";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedAdminBranchProtection(branch, owner, repo) {
  return bp.EventSet("Delete AdminBranchProtection", function(e) {
      return e.name === "Done: " + "Delete admin branch protection for branch " + branch + " in repository " + owner + "/" + repo;
  });
}

function waitForAdminBranchProtectionAdded(branch, owner, repo) {
  waitFor(matchSuccess("Set admin branch protection for branch " + branch + " in repository " + owner + "/" + repo));
}

function matchAnyAdminBranchProtectionAdded() {
  return bp.EventSet("Any AdminBranchProtection Added", function(e) {
      return e.name.startsWith("Done: Set admin branch protection for branch ");
  });
}

function getPullRequestReviewProtection(branch, bypass_pull_request_allowances, dismiss_stale_reviews, dismissal_restrictions, owner, repo, require_code_owner_reviews, require_last_push_approval, required_approving_review_count) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Get pull request review protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updatePullRequestReviewProtection(branch, bypass_pull_request_allowances, dismiss_stale_reviews, dismissal_restrictions, owner, repo, require_code_owner_reviews, require_last_push_approval, required_approving_review_count) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Update pull request review protection for branch " + branch + " in repository " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "bypass_pull_request_allowances": bypass_pull_request_allowances, "dismiss_stale_reviews": dismiss_stale_reviews, "dismissal_restrictions": dismissal_restrictions, "owner": owner, "repo": repo, "require_code_owner_reviews": require_code_owner_reviews, "require_last_push_approval": require_last_push_approval, "required_approving_review_count": required_approving_review_count}) });
}

function deletePullRequestReviewProtection(branch, bypass_pull_request_allowances, dismiss_stale_reviews, dismissal_restrictions, owner, repo, require_code_owner_reviews, require_last_push_approval, required_approving_review_count) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Delete pull request review protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function verifyPullRequestReviewProtectionExists(branch, bypass_pull_request_allowances, dismiss_stale_reviews, dismissal_restrictions, owner, repo, require_code_owner_reviews, require_last_push_approval, required_approving_review_count) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Verify PullRequestReviewProtection " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequestReviewProtection found");
}

function verifyPullRequestReviewProtectionDoesNotExist(branch, bypass_pull_request_allowances, dismiss_stale_reviews, dismissal_restrictions, owner, repo, require_code_owner_reviews, require_last_push_approval, required_approving_review_count) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Verify PullRequestReviewProtection " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequestReviewProtection not found");
}

function tryToDeleteANonExistingPullRequestReviewProtection(branch, bypass_pull_request_allowances, dismiss_stale_reviews, dismissal_restrictions, owner, repo, require_code_owner_reviews, require_last_push_approval, required_approving_review_count) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Verify negative delete for PullRequestReviewProtection";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPullRequestReviewProtection(branch, bypass_pull_request_allowances, dismiss_stale_reviews, dismissal_restrictions, owner, repo, require_code_owner_reviews, require_last_push_approval, required_approving_review_count) {
  return bp.EventSet("Delete PullRequestReviewProtection", function(e) {
      return e.name === "Done: " + "Delete pull request review protection for branch " + branch + " in repository " + owner + "/" + repo;
  });
}

function matchAnyPullRequestReviewProtectionAdded() {
  return bp.EventSet("Any PullRequestReviewProtection Added", function(e) {
      return e.name.startsWith("Done: Create PullRequestReviewProtection");
  });
}

function getCommitSignatureProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Get commit signature protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function createCommitSignatureProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Create commit signature protection for branch " + branch + " in repository " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "owner": owner, "repo": repo}) });
}

function deleteCommitSignatureProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Delete commit signature protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingCommitSignatureProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Try Add Existing CommitSignatureProtection " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCommitSignatureProtectionExists(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Verify CommitSignatureProtection " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CommitSignatureProtection found");
}

function verifyCommitSignatureProtectionDoesNotExist(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Verify CommitSignatureProtection " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CommitSignatureProtection not found");
}

function tryToDeleteANonExistingCommitSignatureProtection(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Verify negative delete for CommitSignatureProtection";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCommitSignatureProtection(branch, owner, repo) {
  return bp.EventSet("Delete CommitSignatureProtection", function(e) {
      return e.name === "Done: " + "Delete commit signature protection for branch " + branch + " in repository " + owner + "/" + repo;
  });
}

function waitForCommitSignatureProtectionAdded(branch, owner, repo) {
  waitFor(matchSuccess("Create commit signature protection for branch " + branch + " in repository " + owner + "/" + repo));
}

function matchAnyCommitSignatureProtectionAdded() {
  return bp.EventSet("Any CommitSignatureProtection Added", function(e) {
      return e.name.startsWith("Done: Create commit signature protection for branch ");
  });
}

function getStatusChecksProtection(branch, checks, contexts, owner, repo, strict) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Get status checks protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateStatusCheckProtection(branch, checks, contexts, owner, repo, strict) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Update status check protection for branch " + branch + " in repository " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "checks": checks, "contexts": contexts, "owner": owner, "repo": repo, "strict": strict}) });
}

function removeStatusCheckProtection(branch, checks, contexts, owner, repo, strict) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Remove status check protection for branch " + branch + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function verifyStatusChecksProtectionExists(branch, checks, contexts, owner, repo, strict) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Verify StatusChecksProtection " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("StatusChecksProtection found");
}

function verifyStatusChecksProtectionDoesNotExist(branch, checks, contexts, owner, repo, strict) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Verify StatusChecksProtection " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("StatusChecksProtection not found");
}

function tryToDeleteANonExistingStatusChecksProtection(branch, checks, contexts, owner, repo, strict) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Verify negative delete for StatusChecksProtection";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedStatusChecksProtection(branch, checks, contexts, owner, repo, strict) {
  return bp.EventSet("Delete StatusChecksProtection", function(e) {
      return e.name === "Done: " + "Remove status check protection for branch " + branch + " in repository " + owner + "/" + repo;
  });
}

function matchAnyStatusChecksProtectionAdded() {
  return bp.EventSet("Any StatusChecksProtection Added", function(e) {
      return e.name.startsWith("Done: Create StatusChecksProtection");
  });
}

function getAllStatusCheckContexts(branch, contexts, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Get all status check contexts for branch " + branch + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function addStatusCheckContexts(branch, contexts, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Add status check contexts to branch " + branch + " in repository " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "contexts": contexts, "owner": owner, "repo": repo}) });
}

function setStatusCheckContexts(branch, contexts, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Set status check contexts for branch " + branch + " in repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "contexts": contexts, "owner": owner, "repo": repo}) });
}

function removeStatusCheckContexts(branch, contexts, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Remove status check contexts from branch " + branch + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function tryToAddExistingStatusCheckContexts(branch, contexts, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Try Add Existing StatusCheckContexts " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyStatusCheckContextsExists(branch, contexts, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Verify StatusCheckContexts " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("StatusCheckContexts found");
}

function verifyStatusCheckContextsDoesNotExist(branch, contexts, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Verify StatusCheckContexts " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("StatusCheckContexts not found");
}

function tryToDeleteANonExistingStatusCheckContexts(branch, contexts, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Verify negative delete for StatusCheckContexts";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedStatusCheckContexts(branch, contexts, owner, repo) {
  return bp.EventSet("Delete StatusCheckContexts", function(e) {
      return e.name === "Done: " + "Remove status check contexts from branch " + branch + " in repository " + owner + "/" + repo;
  });
}

function waitForStatusCheckContextsAdded(branch, contexts, owner, repo) {
  waitFor(matchSuccess("Add status check contexts to branch " + branch + " in repository " + owner + "/" + repo));
}

function matchAnyStatusCheckContextsAdded() {
  return bp.EventSet("Any StatusCheckContexts Added", function(e) {
      return e.name.startsWith("Done: Add status check contexts to branch ");
  });
}

function getAccessRestrictions(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions";
  var description = "Get access restrictions for branch " + branch + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteAccessRestrictions(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions";
  var description = "Delete access restrictions for branch " + branch + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function verifyBranchProtectionRestrictionsExists(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions";
  var description = "Verify BranchProtectionRestrictions " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BranchProtectionRestrictions found");
}

function verifyBranchProtectionRestrictionsDoesNotExist(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions";
  var description = "Verify BranchProtectionRestrictions " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchProtectionRestrictions not found");
}

function tryToDeleteANonExistingBranchProtectionRestrictions(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions";
  var description = "Verify negative delete for BranchProtectionRestrictions";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBranchProtectionRestrictions(branch, owner, repo) {
  return bp.EventSet("Delete BranchProtectionRestrictions", function(e) {
      return e.name === "Done: " + "Delete access restrictions for branch " + branch + " in repo " + owner + "/" + repo;
  });
}

function matchAnyBranchProtectionRestrictionsAdded() {
  return bp.EventSet("Any BranchProtectionRestrictions Added", function(e) {
      return e.name.startsWith("Done: Create BranchProtectionRestrictions");
  });
}

function getAppsWithAccessToProtectedBranch(apps, branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Get apps with access to protected branch " + branch + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function addAppAccessRestrictions(apps, branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Add app access restrictions " + apps + " to branch " + branch + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"apps": apps, "branch": branch, "owner": owner, "repo": repo}) });
}

function setAppAccessRestrictions(apps, branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Set app access restrictions " + apps + " to branch " + branch + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"apps": apps, "branch": branch, "owner": owner, "repo": repo}) });
}

function removeAppAccessRestrictions(apps, branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Remove app access restrictions " + apps + " from branch " + branch + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

function tryToAddExistingBranchProtectionRestrictionApps(apps, branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Try Add Existing BranchProtectionRestrictionApps " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Verify BranchProtectionRestrictionApps " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BranchProtectionRestrictionApps found");
}

function verifyBranchProtectionRestrictionAppsDoesNotExist(apps, branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Verify BranchProtectionRestrictionApps " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchProtectionRestrictionApps not found");
}

function tryToDeleteANonExistingBranchProtectionRestrictionApps(apps, branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Verify negative delete for BranchProtectionRestrictionApps";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBranchProtectionRestrictionApps(apps, branch, owner, repo) {
  return bp.EventSet("Delete BranchProtectionRestrictionApps", function(e) {
      return e.name === "Done: " + "Remove app access restrictions " + apps + " from branch " + branch + " in repo " + owner + "/" + repo;
  });
}

function waitForBranchProtectionRestrictionAppsAdded(apps, branch, owner, repo) {
  waitFor(matchSuccess("Add app access restrictions " + apps + " to branch " + branch + " in repo " + owner + "/" + repo));
}

function matchAnyBranchProtectionRestrictionAppsAdded() {
  return bp.EventSet("Any BranchProtectionRestrictionApps Added", function(e) {
      return e.name.startsWith("Done: Add app access restrictions ");
  });
}

function getTeamsWithAccessToProtectedBranch(branch, owner, repo, teams) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Get teams with access to protected branch " + branch + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function addTeamAccessRestrictions(branch, owner, repo, teams) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Add team access restrictions " + teams + " to branch " + branch + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "owner": owner, "repo": repo, "teams": teams}) });
}

function setTeamAccessRestrictions(branch, owner, repo, teams) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Set team access restrictions " + teams + " to branch " + branch + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "owner": owner, "repo": repo, "teams": teams}) });
}

function removeTeamAccessRestrictions(branch, owner, repo, teams) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Remove team access restrictions " + teams + " from branch " + branch + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

function tryToAddExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Try Add Existing BranchProtectionRestrictionTeams " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Verify BranchProtectionRestrictionTeams " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BranchProtectionRestrictionTeams found");
}

function verifyBranchProtectionRestrictionTeamsDoesNotExist(branch, owner, repo, teams) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Verify BranchProtectionRestrictionTeams " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchProtectionRestrictionTeams not found");
}

function tryToDeleteANonExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Verify negative delete for BranchProtectionRestrictionTeams";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBranchProtectionRestrictionTeams(branch, owner, repo, teams) {
  return bp.EventSet("Delete BranchProtectionRestrictionTeams", function(e) {
      return e.name === "Done: " + "Remove team access restrictions " + teams + " from branch " + branch + " in repo " + owner + "/" + repo;
  });
}

function waitForBranchProtectionRestrictionTeamsAdded(branch, owner, repo, teams) {
  waitFor(matchSuccess("Add team access restrictions " + teams + " to branch " + branch + " in repo " + owner + "/" + repo));
}

function matchAnyBranchProtectionRestrictionTeamsAdded() {
  return bp.EventSet("Any BranchProtectionRestrictionTeams Added", function(e) {
      return e.name.startsWith("Done: Add team access restrictions ");
  });
}

function getUsersWithAccessToProtectedBranch(branch, owner, repo, users) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Get users with access to protected branch " + branch + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function addUserAccessRestrictions(branch, owner, repo, users) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Add user access restrictions " + users + " to branch " + branch + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "owner": owner, "repo": repo, "users": users}) });
}

function setUserAccessRestrictions(branch, owner, repo, users) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Set user access restrictions " + users + " to branch " + branch + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "owner": owner, "repo": repo, "users": users}) });
}

function removeUserAccessRestrictions(branch, owner, repo, users) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Remove user access restrictions " + users + " from branch " + branch + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

function tryToAddExistingBranchProtectionRestrictionUsers(branch, owner, repo, users) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Try Add Existing BranchProtectionRestrictionUsers " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Verify BranchProtectionRestrictionUsers " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BranchProtectionRestrictionUsers found");
}

function verifyBranchProtectionRestrictionUsersDoesNotExist(branch, owner, repo, users) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Verify BranchProtectionRestrictionUsers " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchProtectionRestrictionUsers not found");
}

function tryToDeleteANonExistingBranchProtectionRestrictionUsers(branch, owner, repo, users) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Verify negative delete for BranchProtectionRestrictionUsers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBranchProtectionRestrictionUsers(branch, owner, repo, users) {
  return bp.EventSet("Delete BranchProtectionRestrictionUsers", function(e) {
      return e.name === "Done: " + "Remove user access restrictions " + users + " from branch " + branch + " in repo " + owner + "/" + repo;
  });
}

function waitForBranchProtectionRestrictionUsersAdded(branch, owner, repo, users) {
  waitFor(matchSuccess("Add user access restrictions " + users + " to branch " + branch + " in repo " + owner + "/" + repo));
}

function matchAnyBranchProtectionRestrictionUsersAdded() {
  return bp.EventSet("Any BranchProtectionRestrictionUsers Added", function(e) {
      return e.name.startsWith("Done: Add user access restrictions ");
  });
}

function renameBranch(branch, id, new_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/rename";
  var description = "Rename branch " + branch + " to " + new_name + " in repo " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "id": id, "new_name": new_name, "owner": owner, "repo": repo}) });
}

// verifyBranchRenameExists skipped: No GET /{id} operation detected.
function waitForBranchRenameAdded(branch, id, new_name, owner, repo) {
  waitFor(matchSuccess("Rename branch " + branch + " to " + new_name + " in repo " + owner + "/" + repo));
}

function matchAnyBranchRenameAdded() {
  return bp.EventSet("Any BranchRename Added", function(e) {
      return e.name.startsWith("Done: Rename branch ");
  });
}

function checkCollaborator(owner, permission, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Check if user " + username + " is a collaborator in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function addCollaborator(owner, permission, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Add collaborator " + username + " with permission " + permission + " to repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "permission": permission, "repo": repo, "username": username}) });
}

function removeCollaborator(owner, permission, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Remove collaborator " + username + " from repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 422] });
}

function tryToAddExistingCollaborator(owner, permission, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Try Add Existing Collaborator " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCollaboratorExists(owner, permission, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Verify Collaborator " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Collaborator found");
}

function verifyCollaboratorDoesNotExist(owner, permission, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Verify Collaborator " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Collaborator not found");
}

function tryToDeleteANonExistingCollaborator(owner, permission, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Verify negative delete for Collaborator";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCollaborator(owner, permission, repo, username) {
  return bp.EventSet("Delete Collaborator", function(e) {
      return e.name === "Done: " + "Remove collaborator " + username + " from repo " + owner + "/" + repo;
  });
}

function waitForCollaboratorAdded(owner, permission, repo, username) {
  waitFor(matchSuccess("Add collaborator " + username + " with permission " + permission + " to repo " + owner + "/" + repo));
}

function matchAnyCollaboratorAdded() {
  return bp.EventSet("Any Collaborator Added", function(e) {
      return e.name.startsWith("Done: Add collaborator ");
  });
}

function getCommitComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Get commit comment " + comment_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateCommitComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Update commit comment " + comment_id + " in repo " + owner + "/" + repo + " with body " + body;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_id": comment_id, "owner": owner, "repo": repo}) });
}

function deleteCommitComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Delete commit comment " + comment_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function verifyCommitCommentExists(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Verify CommitComment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CommitComment found");
}

function verifyCommitCommentDoesNotExist(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Verify CommitComment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CommitComment not found");
}

function tryToDeleteANonExistingCommitComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Verify negative delete for CommitComment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCommitComment(body, comment_id, owner, repo) {
  return bp.EventSet("Delete CommitComment", function(e) {
      return e.name === "Done: " + "Delete commit comment " + comment_id + " in repo " + owner + "/" + repo;
  });
}

function matchAnyCommitCommentAdded() {
  return bp.EventSet("Any CommitComment Added", function(e) {
      return e.name.startsWith("Done: Create CommitComment");
  });
}

function listCommitComments(body, commit_sha, id, line, owner, path, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + commit_sha + "/comments";
  var description = "List commit comments for commit " + commit_sha + " in repo " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCommitComment(body, commit_sha, id, line, owner, path, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + commit_sha + "/comments";
  var description = "Create commit comment on commit " + commit_sha + " in repo " + owner + "/" + repo + " with body " + body + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "commit_sha": commit_sha, "id": id, "line": line, "owner": owner, "path": path, "position": position, "repo": repo}) });
}

// verifyCommitCommentsExists skipped: No GET /{id} operation detected.
function waitForCommitCommentsAdded(body, commit_sha, id, line, owner, path, position, repo) {
  waitFor(matchSuccess("Create commit comment on commit " + commit_sha + " in repo " + owner + "/" + repo + " with body " + body));
}

function matchAnyCommitCommentsAdded() {
  return bp.EventSet("Any CommitComments Added", function(e) {
      return e.name.startsWith("Done: Create commit comment on commit ");
  });
}

function getCommit(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + commit_sha;
  var description = "Get commit with commit_sha " + commit_sha + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 409] });
}

function createCommit(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits";
  var description = "Create commit with message " + message + " and tree " + tree + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"author.date": author_date, "author.email": author_email, "author.name": author_name, "commit_sha": commit_sha, "committer.date": committer_date, "committer.email": committer_email, "committer.name": committer_name, "message": message, "owner": owner, "parents": parents, "repo": repo, "signature": signature, "tree": tree}) });
}

function tryToAddExistingCommit(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits";
  var description = "Try Add Existing Commit " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCommitExists(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + commit_sha;
  var description = "Verify Commit " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Commit found");
}

function verifyCommitDoesNotExist(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + commit_sha;
  var description = "Verify Commit " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Commit not found");
}

function waitForCommitAdded(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree) {
  waitFor(matchSuccess("Create commit with message " + message + " and tree " + tree));
}

function matchAnyCommitAdded() {
  return bp.EventSet("Any Commit Added", function(e) {
      return e.name.startsWith("Done: Create commit with message ");
  });
}

function getRepositoryContent(committer_email, committer_name, content, message, owner, path, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Get content at path " + path + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 302, 304, 403, 404] });
}

function createOrUpdateFileContent(committer_email, committer_name, content, message, owner, path, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Create or update file at path " + path + " in repository " + owner + "/" + repo + " with message " + message;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"committer.email": committer_email, "committer.name": committer_name, "content": content, "message": message, "owner": owner, "path": path, "repo": repo, "sha": sha}) });
}

function createOrUpdateFileContent(committer_email, committer_name, content, message, owner, path, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Create or update file at path " + path + " in repository " + owner + "/" + repo + " with message " + message;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"committer.email": committer_email, "committer.name": committer_name, "content": content, "message": message, "owner": owner, "path": path, "repo": repo, "sha": sha}) });
}

function deleteFile(committer_email, committer_name, content, message, owner, path, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Delete file at path " + path + " in repository " + owner + "/" + repo + " with message " + message;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 409, 422, 503] });
}

function tryToAddExistingRepositoryContent(committer_email, committer_name, content, message, owner, path, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Try Add Existing RepositoryContent " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositoryContentExists(committer_email, committer_name, content, message, owner, path, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Verify RepositoryContent " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryContent found");
}

function verifyRepositoryContentDoesNotExist(committer_email, committer_name, content, message, owner, path, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Verify RepositoryContent " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryContent not found");
}

function tryToDeleteANonExistingRepositoryContent(committer_email, committer_name, content, message, owner, path, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Verify negative delete for RepositoryContent";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepositoryContent(committer_email, committer_name, content, message, owner, path, repo, sha) {
  return bp.EventSet("Delete RepositoryContent", function(e) {
      return e.name === "Done: " + "Delete file at path " + path + " in repository " + owner + "/" + repo + " with message " + message;
  });
}

function waitForRepositoryContentAdded(committer_email, committer_name, content, message, owner, path, repo, sha) {
  waitFor(matchSuccess("Create or update file at path " + path + " in repository " + owner + "/" + repo + " with message " + message));
}

function matchAnyRepositoryContentAdded() {
  return bp.EventSet("Any RepositoryContent Added", function(e) {
      return e.name.startsWith("Done: Create or update file at path ");
  });
}

function createDeployment(deployment_id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments";
  var description = "Create deployment in repository " + owner + "/" + repo + " with ref " + ref;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 202, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"deployment_id": deployment_id, "owner": owner, "ref": ref, "repo": repo}) });
}

function getDeployment(deployment_id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id;
  var description = "Get deployment " + deployment_id + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteDeployment(deployment_id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id;
  var description = "Delete deployment " + deployment_id + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function tryToAddExistingDeployment(deployment_id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments";
  var description = "Try Add Existing Deployment " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDeploymentExists(deployment_id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id;
  var description = "Verify Deployment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Deployment found");
}

function verifyDeploymentDoesNotExist(deployment_id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id;
  var description = "Verify Deployment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Deployment not found");
}

function tryToDeleteANonExistingDeployment(deployment_id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id;
  var description = "Verify negative delete for Deployment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedDeployment(deployment_id, owner, ref, repo) {
  return bp.EventSet("Delete Deployment", function(e) {
      return e.name === "Done: " + "Delete deployment " + deployment_id + " in repository " + owner + "/" + repo;
  });
}

function waitForDeploymentAdded(deployment_id, owner, ref, repo) {
  waitFor(matchSuccess("Create deployment in repository " + owner + "/" + repo + " with ref " + ref));
}

function matchAnyDeploymentAdded() {
  return bp.EventSet("Any Deployment Added", function(e) {
      return e.name.startsWith("Done: Create deployment in repository ");
  });
}

function createDeploymentStatus(deployment_id, owner, repo, state, status_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id + "/statuses";
  var description = "Create deployment status for deployment " + deployment_id + " in repository " + owner + "/" + repo + " with state " + state;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"deployment_id": deployment_id, "owner": owner, "repo": repo, "state": state, "status_id": status_id}) });
}

function getDeploymentStatus(deployment_id, owner, repo, state, status_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id + "/statuses/" + status_id;
  var description = "Get deployment status " + status_id + " for deployment " + deployment_id + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function tryToAddExistingDeploymentStatus(deployment_id, owner, repo, state, status_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id + "/statuses";
  var description = "Try Add Existing DeploymentStatus " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDeploymentStatusExists(deployment_id, owner, repo, state, status_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id + "/statuses/" + status_id;
  var description = "Verify DeploymentStatus " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("DeploymentStatus found");
}

function verifyDeploymentStatusDoesNotExist(deployment_id, owner, repo, state, status_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id + "/statuses/" + status_id;
  var description = "Verify DeploymentStatus " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("DeploymentStatus not found");
}

function waitForDeploymentStatusAdded(deployment_id, owner, repo, state, status_id) {
  waitFor(matchSuccess("Create deployment status for deployment " + deployment_id + " in repository " + owner + "/" + repo + " with state " + state));
}

function matchAnyDeploymentStatusAdded() {
  return bp.EventSet("Any DeploymentStatus Added", function(e) {
      return e.name.startsWith("Done: Create deployment status for deployment ");
  });
}

function getEnvironment(environment_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Get environment " + environment_name + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrUpdateEnvironment(environment_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Create or update environment " + environment_name + " in repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"environment_name": environment_name, "owner": owner, "repo": repo}) });
}

function createOrUpdateEnvironment(environment_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Create or update environment " + environment_name + " in repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"environment_name": environment_name, "owner": owner, "repo": repo}) });
}

function deleteEnvironment(environment_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Delete environment " + environment_name + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingEnvironment(environment_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Try Add Existing Environment " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyEnvironmentExists(environment_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Verify Environment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Environment found");
}

function verifyEnvironmentDoesNotExist(environment_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Verify Environment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Environment not found");
}

function tryToDeleteANonExistingEnvironment(environment_name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Verify negative delete for Environment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedEnvironment(environment_name, owner, repo) {
  return bp.EventSet("Delete Environment", function(e) {
      return e.name === "Done: " + "Delete environment " + environment_name + " in repository " + owner + "/" + repo;
  });
}

function waitForEnvironmentAdded(environment_name, owner, repo) {
  waitFor(matchSuccess("Create or update environment " + environment_name + " in repository " + owner + "/" + repo));
}

function matchAnyEnvironmentAdded() {
  return bp.EventSet("Any Environment Added", function(e) {
      return e.name.startsWith("Done: Create or update environment ");
  });
}

function createDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies";
  var description = "Create deployment branch policy in environment " + environment_name + " of repository " + owner + "/" + repo + " with name " + name;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 303, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch_policy_id": branch_policy_id, "environment_name": environment_name, "name": name, "owner": owner, "repo": repo}) });
}

function getDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Get deployment branch policy " + branch_policy_id + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Update deployment branch policy " + branch_policy_id + " with name " + name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch_policy_id": branch_policy_id, "environment_name": environment_name, "name": name, "owner": owner, "repo": repo}) });
}

function deleteDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Delete deployment branch policy " + branch_policy_id + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies";
  var description = "Try Add Existing DeploymentBranchPolicy " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Verify DeploymentBranchPolicy " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("DeploymentBranchPolicy found");
}

function verifyDeploymentBranchPolicyDoesNotExist(branch_policy_id, environment_name, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Verify DeploymentBranchPolicy " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("DeploymentBranchPolicy not found");
}

function tryToDeleteANonExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Verify negative delete for DeploymentBranchPolicy";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo) {
  return bp.EventSet("Delete DeploymentBranchPolicy", function(e) {
      return e.name === "Done: " + "Delete deployment branch policy " + branch_policy_id + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  });
}

function waitForDeploymentBranchPolicyAdded(branch_policy_id, environment_name, name, owner, repo) {
  waitFor(matchSuccess("Create deployment branch policy in environment " + environment_name + " of repository " + owner + "/" + repo + " with name " + name));
}

function matchAnyDeploymentBranchPolicyAdded() {
  return bp.EventSet("Any DeploymentBranchPolicy Added", function(e) {
      return e.name.startsWith("Done: Create deployment branch policy in environment ");
  });
}

function createDispatchEvent(event_type, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/dispatches";
  var description = "Create repository dispatch event " + event_type + " in repository " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"event_type": event_type, "id": id, "owner": owner, "repo": repo}) });
}

// verifyRepositoryDispatchEventExists skipped: No GET /{id} operation detected.
function waitForRepositoryDispatchEventAdded(event_type, id, owner, repo) {
  waitFor(matchSuccess("Create repository dispatch event " + event_type + " in repository " + owner + "/" + repo));
}

function matchAnyRepositoryDispatchEventAdded() {
  return bp.EventSet("Any RepositoryDispatchEvent Added", function(e) {
      return e.name.startsWith("Done: Create repository dispatch event ");
  });
}

function getDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules/" + protection_rule_id;
  var description = "Get deployment protection rule " + protection_rule_id + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function disableDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules/" + protection_rule_id;
  var description = "Disable deployment protection rule " + protection_rule_id + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function reviewDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/deployment_protection_rule";
  var description = "Review deployment protection rule for run " + run_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"comment": comment, "environment_name": environment_name, "owner": owner, "protection_rule_id": protection_rule_id, "repo": repo, "run_id": run_id, "state": state}) });
}

function listDeploymentProtectionRules(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules";
  var description = "List deployment protection rules in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/deployment_protection_rule";
  var description = "Try Add Existing DeploymentProtectionRule " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDeploymentProtectionRuleExists(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules/" + protection_rule_id;
  var description = "Verify DeploymentProtectionRule " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("DeploymentProtectionRule found");
}

function verifyDeploymentProtectionRuleDoesNotExist(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules/" + protection_rule_id;
  var description = "Verify DeploymentProtectionRule " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("DeploymentProtectionRule not found");
}

function tryToDeleteANonExistingDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules/" + protection_rule_id;
  var description = "Verify negative delete for DeploymentProtectionRule";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  return bp.EventSet("Delete DeploymentProtectionRule", function(e) {
      return e.name === "Done: " + "Disable deployment protection rule " + protection_rule_id + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  });
}

function waitForDeploymentProtectionRuleAdded(comment, environment_name, owner, protection_rule_id, repo, run_id, state) {
  waitFor(matchSuccess("Review deployment protection rule for run " + run_id + " in repo " + owner + "/" + repo));
}

function matchAnyDeploymentProtectionRuleAdded() {
  return bp.EventSet("Any DeploymentProtectionRule Added", function(e) {
      return e.name.startsWith("Done: Review deployment protection rule for run ");
  });
}

function listDeploymentProtectionRuleApps(environment_name, id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules/apps";
  var description = "List deployment protection rule apps in environment " + environment_name + " of repo " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyDeploymentProtectionRuleAppExists skipped: No GET /{id} operation detected.
function matchAnyDeploymentProtectionRuleAppAdded() {
  return bp.EventSet("Any DeploymentProtectionRuleApp Added", function(e) {
      return e.name.startsWith("Done: Create DeploymentProtectionRuleApp");
  });
}

function listForks(default_branch_only, id, name, organization, owner, page, per_page, repo, sort) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "List forks of repo " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function createFork(default_branch_only, id, name, organization, owner, page, per_page, repo, sort) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "Create fork of repo " + owner + "/" + repo + " with organization " + organization + ", name " + name + ", default_branch_only " + default_branch_only + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 400, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"default_branch_only": default_branch_only, "id": id, "name": name, "organization": organization, "owner": owner, "page": page, "per_page": per_page, "repo": repo, "sort": sort}) });
}

// verifyForkExists skipped: No GET /{id} operation detected.
function waitForForkAdded(default_branch_only, id, name, organization, owner, page, per_page, repo, sort) {
  waitFor(matchSuccess("Create fork of repo " + owner + "/" + repo + " with organization " + organization + ", name " + name + ", default_branch_only " + default_branch_only));
}

function matchAnyForkAdded() {
  return bp.EventSet("Any Fork Added", function(e) {
      return e.name.startsWith("Done: Create fork of repo ");
  });
}

function listWebhooks(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/repos/" + owner + "/" + repo + "/hooks";
  var description = "List webhooks of repo " + owner + "/" + repo + " " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function createWebhook(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/orgs/" + org + "/hooks";
  var description = "Create webhook " + name + " for organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"hook_id": hook_id, "name": name, "org": org, "owner": owner, "page": page, "per_page": per_page, "repo": repo, "url": url}) });
}

function getWebhook(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Get webhook " + hook_id + " for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateWebhook(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Update webhook " + hook_id + " for organization " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"hook_id": hook_id, "name": name, "org": org, "owner": owner, "page": page, "per_page": per_page, "repo": repo, "url": url}) });
}

function deleteWebhook(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Delete webhook " + hook_id + " from organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingWebhook(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/orgs/" + org + "/hooks";
  var description = "Try Add Existing Webhook " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyWebhookExists(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Verify Webhook " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Webhook found");
}

function verifyWebhookDoesNotExist(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Verify Webhook " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Webhook not found");
}

function tryToDeleteANonExistingWebhook(hook_id, name, org, owner, page, per_page, repo, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Verify negative delete for Webhook";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedWebhook(hook_id, name, org, owner, page, per_page, repo, url) {
  return bp.EventSet("Delete Webhook", function(e) {
      return e.name === "Done: " + "Delete webhook " + hook_id + " from organization " + org;
  });
}

function waitForWebhookAdded(hook_id, name, org, owner, page, per_page, repo, url) {
  waitFor(matchSuccess("Create webhook " + name + " for organization " + org));
}

function matchAnyWebhookAdded() {
  return bp.EventSet("Any Webhook Added", function(e) {
      return e.name.startsWith("Done: Create webhook ");
  });
}

function getWebhookConfig(hook_id, org, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/config";
  var description = "Get webhook config for webhook " + hook_id + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateWebhookConfig(hook_id, org, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/config";
  var description = "Update webhook config for webhook " + hook_id + " in organization " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"hook_id": hook_id, "org": org, "url": url}) });
}

function verifyWebhookConfigExists(hook_id, org, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/config";
  var description = "Verify WebhookConfig " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WebhookConfig found");
}

function verifyWebhookConfigDoesNotExist(hook_id, org, url) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/config";
  var description = "Verify WebhookConfig " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WebhookConfig not found");
}

function matchAnyWebhookConfigAdded() {
  return bp.EventSet("Any WebhookConfig Added", function(e) {
      return e.name.startsWith("Done: Create WebhookConfig");
  });
}

function listWebhookDeliveries(cursor, delivery_id, hook_id, owner, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/deliveries";
  var description = "List webhook deliveries for webhook " + hook_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 422] });
}

function getWebhookDelivery(cursor, delivery_id, hook_id, owner, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/deliveries/" + delivery_id;
  var description = "Get webhook delivery " + delivery_id + " for webhook " + hook_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 422] });
}

function verifyWebhookDeliveryExists(cursor, delivery_id, hook_id, owner, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/deliveries/" + delivery_id;
  var description = "Verify WebhookDelivery " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WebhookDelivery found");
}

function verifyWebhookDeliveryDoesNotExist(cursor, delivery_id, hook_id, owner, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/deliveries/" + delivery_id;
  var description = "Verify WebhookDelivery " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WebhookDelivery not found");
}

function matchAnyWebhookDeliveryAdded() {
  return bp.EventSet("Any WebhookDelivery Added", function(e) {
      return e.name.startsWith("Done: Create WebhookDelivery");
  });
}

function redeliverWebhookDelivery(delivery_id, hook_id, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/deliveries/" + delivery_id + "/attempts";
  var description = "Redeliver webhook delivery " + delivery_id + " for hook " + hook_id + " in repo " + owner + "/" + repo;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 400, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"delivery_id": delivery_id, "hook_id": hook_id, "id": id, "owner": owner, "repo": repo}) });
}

// verifyWebhookDeliveryAttemptExists skipped: No GET /{id} operation detected.
function waitForWebhookDeliveryAttemptAdded(delivery_id, hook_id, id, owner, repo) {
  waitFor(matchSuccess("Redeliver webhook delivery " + delivery_id + " for hook " + hook_id + " in repo " + owner + "/" + repo));
}

function matchAnyWebhookDeliveryAttemptAdded() {
  return bp.EventSet("Any WebhookDeliveryAttempt Added", function(e) {
      return e.name.startsWith("Done: Redeliver webhook delivery ");
  });
}

function pingWebhook(hook_id, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/pings";
  var description = "Ping webhook " + hook_id + " in repo " + owner + "/" + repo;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"hook_id": hook_id, "id": id, "owner": owner, "repo": repo}) });
}

// verifyWebhookPingExists skipped: No GET /{id} operation detected.
function waitForWebhookPingAdded(hook_id, id, owner, repo) {
  waitFor(matchSuccess("Ping webhook " + hook_id + " in repo " + owner + "/" + repo));
}

function matchAnyWebhookPingAdded() {
  return bp.EventSet("Any WebhookPing Added", function(e) {
      return e.name.startsWith("Done: Ping webhook ");
  });
}

function testPushWebhook(hook_id, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/tests";
  var description = "Test push webhook " + hook_id + " in repo " + owner + "/" + repo;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"hook_id": hook_id, "id": id, "owner": owner, "repo": repo}) });
}

// verifyWebhookTestExists skipped: No GET /{id} operation detected.
function waitForWebhookTestAdded(hook_id, id, owner, repo) {
  waitFor(matchSuccess("Test push webhook " + hook_id + " in repo " + owner + "/" + repo));
}

function matchAnyWebhookTestAdded() {
  return bp.EventSet("Any WebhookTest Added", function(e) {
      return e.name.startsWith("Done: Test push webhook ");
  });
}

function checkImmutableReleases(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/immutable-releases";
  var description = "Check if immutable releases are enabled for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function enableImmutableReleases(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/immutable-releases";
  var description = "Enable immutable releases for repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo}) });
}

function disableImmutableReleases(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/immutable-releases";
  var description = "Disable immutable releases for repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 409] });
}

function verifyImmutableReleaseExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/immutable-releases";
  var description = "Verify ImmutableRelease " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ImmutableRelease found");
}

function verifyImmutableReleaseDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/immutable-releases";
  var description = "Verify ImmutableRelease " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ImmutableRelease not found");
}

function tryToDeleteANonExistingImmutableRelease(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/immutable-releases";
  var description = "Verify negative delete for ImmutableRelease";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedImmutableRelease(owner, repo) {
  return bp.EventSet("Delete ImmutableRelease", function(e) {
      return e.name === "Done: " + "Disable immutable releases for repo " + owner + "/" + repo;
  });
}

function matchAnyImmutableReleaseAdded() {
  return bp.EventSet("Any ImmutableRelease Added", function(e) {
      return e.name.startsWith("Done: Create ImmutableRelease");
  });
}

function listInvitationTeams(invitation_id, org, owner, permissions, repo) {
  var url = "/orgs/" + org + "/invitations/" + invitation_id + "/teams";
  var description = "List teams for invitation " + invitation_id + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateInvitation(invitation_id, org, owner, permissions, repo) {
  var url = "/repos/" + owner + "/" + repo + "/invitations/" + invitation_id;
  var description = "Update invitation " + invitation_id + " for repo " + owner + "/" + repo + " with permissions " + permissions + " " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"invitation_id": invitation_id, "org": org, "owner": owner, "permissions": permissions, "repo": repo}) });
}

function cancelInvitation(invitation_id, org, owner, permissions, repo) {
  var url = "/orgs/" + org + "/invitations/" + invitation_id;
  var description = "Cancel invitation " + invitation_id + " in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function verifyInvitationExists(invitation_id, org, owner, permissions, repo) {
  var url = "/orgs/" + org + "/invitations/" + invitation_id + "/teams";
  var description = "Verify Invitation " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Invitation found");
}

function verifyInvitationDoesNotExist(invitation_id, org, owner, permissions, repo) {
  var url = "/orgs/" + org + "/invitations/" + invitation_id + "/teams";
  var description = "Verify Invitation " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Invitation not found");
}

function tryToDeleteANonExistingInvitation(invitation_id, org, owner, permissions, repo) {
  var url = "/orgs/" + org + "/invitations/" + invitation_id;
  var description = "Verify negative delete for Invitation";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedInvitation(invitation_id, org, owner, permissions, repo) {
  return bp.EventSet("Delete Invitation", function(e) {
      return e.name === "Done: " + "Cancel invitation " + invitation_id + " in organization " + org;
  });
}

function matchAnyInvitationAdded() {
  return bp.EventSet("Any Invitation Added", function(e) {
      return e.name.startsWith("Done: Create Invitation");
  });
}

function createDeployKey(key, key_id, owner, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Create deploy key " + title + " with key " + key + " for repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"key": key, "key_id": key_id, "owner": owner, "read_only": read_only, "repo": repo, "title": title}) });
}

function getDeployKey(key, key_id, owner, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + key_id;
  var description = "Get deploy key " + key_id + " for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteDeployKey(key, key_id, owner, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + key_id;
  var description = "Delete deploy key " + key_id + " for repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingDeployKey(key, key_id, owner, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Try Add Existing DeployKey " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDeployKeyExists(key, key_id, owner, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + key_id;
  var description = "Verify DeployKey " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("DeployKey found");
}

function verifyDeployKeyDoesNotExist(key, key_id, owner, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + key_id;
  var description = "Verify DeployKey " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("DeployKey not found");
}

function tryToDeleteANonExistingDeployKey(key, key_id, owner, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + key_id;
  var description = "Verify negative delete for DeployKey";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedDeployKey(key, key_id, owner, read_only, repo, title) {
  return bp.EventSet("Delete DeployKey", function(e) {
      return e.name === "Done: " + "Delete deploy key " + key_id + " for repo " + owner + "/" + repo;
  });
}

function waitForDeployKeyAdded(key, key_id, owner, read_only, repo, title) {
  waitFor(matchSuccess("Create deploy key " + title + " with key " + key + " for repo " + owner + "/" + repo));
}

function matchAnyDeployKeyAdded() {
  return bp.EventSet("Any DeployKey Added", function(e) {
      return e.name.startsWith("Done: Create deploy key ");
  });
}

function listLanguages(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/languages";
  var description = "List languages for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyRepositoryLanguageExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/languages";
  var description = "Verify RepositoryLanguage " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryLanguage found");
}

function verifyRepositoryLanguageDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/languages";
  var description = "Verify RepositoryLanguage " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryLanguage not found");
}

function matchAnyRepositoryLanguageAdded() {
  return bp.EventSet("Any RepositoryLanguage Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryLanguage");
  });
}

function mergeUpstream(branch, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/merge-upstream";
  var description = "Sync fork branch " + branch + " with upstream for repo " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"branch": branch, "id": id, "owner": owner, "repo": repo}) });
}

// verifyMergeUpstreamExists skipped: No GET /{id} operation detected.
function waitForMergeUpstreamAdded(branch, id, owner, repo) {
  waitFor(matchSuccess("Sync fork branch " + branch + " with upstream for repo " + owner + "/" + repo));
}

function matchAnyMergeUpstreamAdded() {
  return bp.EventSet("Any MergeUpstream Added", function(e) {
      return e.name.startsWith("Done: Sync fork branch ");
  });
}

function createMerge(base, commit_message, head, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/merges";
  var description = "Merge branch " + head + " into " + base + " in repo " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"base": base, "commit_message": commit_message, "head": head, "id": id, "owner": owner, "repo": repo}) });
}

// verifyMergeExists skipped: No GET /{id} operation detected.
function waitForMergeAdded(base, commit_message, head, id, owner, repo) {
  waitFor(matchSuccess("Merge branch " + head + " into " + base + " in repo " + owner + "/" + repo));
}

function matchAnyMergeAdded() {
  return bp.EventSet("Any Merge Added", function(e) {
      return e.name.startsWith("Done: Merge branch ");
  });
}

function createPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Create GitHub Pages site in repo " + owner + "/" + repo + " with source branch " + source_branch + " and path " + source_path;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"build_type": build_type, "cname": cname, "https_enforced": https_enforced, "owner": owner, "repo": repo, "source.branch": source_branch, "source.path": source_path}) });
}

function getPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Get GitHub Pages site in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updatePagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Update GitHub Pages site in repo " + owner + "/" + repo + " with cname " + cname + ", https_enforced " + https_enforced + ", build_type " + build_type + ", source branch " + source_branch + " and path " + source_path;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 400, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"build_type": build_type, "cname": cname, "https_enforced": https_enforced, "owner": owner, "repo": repo, "source.branch": source_branch, "source.path": source_path}) });
}

function deletePagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Delete GitHub Pages site in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 409, 422] });
}

function tryToAddExistingPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Try Add Existing PagesSite " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Verify PagesSite " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PagesSite found");
}

function verifyPagesSiteDoesNotExist(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Verify PagesSite " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PagesSite not found");
}

function tryToDeleteANonExistingPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Verify negative delete for PagesSite";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  return bp.EventSet("Delete PagesSite", function(e) {
      return e.name === "Done: " + "Delete GitHub Pages site in repo " + owner + "/" + repo;
  });
}

function waitForPagesSiteAdded(build_type, cname, https_enforced, owner, repo, source_branch, source_path) {
  waitFor(matchSuccess("Create GitHub Pages site in repo " + owner + "/" + repo + " with source branch " + source_branch + " and path " + source_path));
}

function matchAnyPagesSiteAdded() {
  return bp.EventSet("Any PagesSite Added", function(e) {
      return e.name.startsWith("Done: Create GitHub Pages site in repo ");
  });
}

function getPagesBuild(build_id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds/" + build_id;
  var description = "Get GitHub Pages build " + build_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function listPagesBuilds(build_id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds";
  var description = "List GitHub Pages builds in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function requestPagesBuild(build_id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds";
  var description = "Request a GitHub Pages build in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"build_id": build_id, "owner": owner, "page": page, "per-page": per_page, "repo": repo}) });
}

function getLatestPagesBuild(build_id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds/latest";
  var description = "Get latest GitHub Pages build in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingPagesBuild(build_id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds";
  var description = "Try Add Existing PagesBuild " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPagesBuildExists(build_id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds/" + build_id;
  var description = "Verify PagesBuild " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PagesBuild found");
}

function verifyPagesBuildDoesNotExist(build_id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds/" + build_id;
  var description = "Verify PagesBuild " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PagesBuild not found");
}

function waitForPagesBuildAdded(build_id, owner, page, per_page, repo) {
  waitFor(matchSuccess("Request a GitHub Pages build in repo " + owner + "/" + repo));
}

function matchAnyPagesBuildAdded() {
  return bp.EventSet("Any PagesBuild Added", function(e) {
      return e.name.startsWith("Done: Request a GitHub Pages build in repo ");
  });
}

function createPagesDeployment(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments";
  var description = "Create GitHub Pages deployment in repo " + owner + "/" + repo + " with pages_build_version " + pages_build_version + " and oidc_token " + oidc_token;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"artifact_id": artifact_id, "artifact_url": artifact_url, "environment": environment, "oidc_token": oidc_token, "owner": owner, "pages_build_version": pages_build_version, "pages_deployment_id": pages_deployment_id, "repo": repo}) });
}

function getPagesDeployment(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments/" + pages_deployment_id;
  var description = "Get status of GitHub Pages deployment " + pages_deployment_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function cancelPagesDeployment(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments/" + pages_deployment_id + "/cancel";
  var description = "Cancel GitHub Pages deployment " + pages_deployment_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"artifact_id": artifact_id, "artifact_url": artifact_url, "environment": environment, "oidc_token": oidc_token, "owner": owner, "pages_build_version": pages_build_version, "pages_deployment_id": pages_deployment_id, "repo": repo}) });
}

function tryToAddExistingPagesDeployment(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments";
  var description = "Try Add Existing PagesDeployment " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPagesDeploymentExists(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments/" + pages_deployment_id;
  var description = "Verify PagesDeployment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PagesDeployment found");
}

function verifyPagesDeploymentDoesNotExist(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments/" + pages_deployment_id;
  var description = "Verify PagesDeployment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PagesDeployment not found");
}

function waitForPagesDeploymentAdded(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo) {
  waitFor(matchSuccess("Create GitHub Pages deployment in repo " + owner + "/" + repo + " with pages_build_version " + pages_build_version + " and oidc_token " + oidc_token));
}

function matchAnyPagesDeploymentAdded() {
  return bp.EventSet("Any PagesDeployment Added", function(e) {
      return e.name.startsWith("Done: Create GitHub Pages deployment in repo ");
  });
}

function getPagesHealthCheck(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/health";
  var description = "Get DNS health check for GitHub Pages in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 202, 400, 404, 422] });
}

function verifyPagesHealthExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/health";
  var description = "Verify PagesHealth " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PagesHealth found");
}

function verifyPagesHealthDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/health";
  var description = "Verify PagesHealth " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PagesHealth not found");
}

function matchAnyPagesHealthAdded() {
  return bp.EventSet("Any PagesHealth Added", function(e) {
      return e.name.startsWith("Done: Create PagesHealth");
  });
}

function checkPrivateVulnerabilityReporting(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/private-vulnerability-reporting";
  var description = "Check if private vulnerability reporting is enabled for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 422] });
}

function enablePrivateVulnerabilityReporting(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/private-vulnerability-reporting";
  var description = "Enable private vulnerability reporting for repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo}) });
}

function disablePrivateVulnerabilityReporting(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/private-vulnerability-reporting";
  var description = "Disable private vulnerability reporting for repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

function verifyPrivateVulnerabilityReportingExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/private-vulnerability-reporting";
  var description = "Verify PrivateVulnerabilityReporting " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PrivateVulnerabilityReporting found");
}

function verifyPrivateVulnerabilityReportingDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/private-vulnerability-reporting";
  var description = "Verify PrivateVulnerabilityReporting " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PrivateVulnerabilityReporting not found");
}

function tryToDeleteANonExistingPrivateVulnerabilityReporting(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/private-vulnerability-reporting";
  var description = "Verify negative delete for PrivateVulnerabilityReporting";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPrivateVulnerabilityReporting(owner, repo) {
  return bp.EventSet("Delete PrivateVulnerabilityReporting", function(e) {
      return e.name === "Done: " + "Disable private vulnerability reporting for repo " + owner + "/" + repo;
  });
}

function matchAnyPrivateVulnerabilityReportingAdded() {
  return bp.EventSet("Any PrivateVulnerabilityReporting Added", function(e) {
      return e.name.startsWith("Done: Create PrivateVulnerabilityReporting");
  });
}

function getCustomPropertyValues(owner, properties, repo) {
  var url = "/repos/" + owner + "/" + repo + "/properties/values";
  var description = "Get all custom property values for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function updateCustomPropertyValues(owner, properties, repo) {
  var url = "/repos/" + owner + "/" + repo + "/properties/values";
  var description = "Create or update custom property values for repository " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "properties": properties, "repo": repo}) });
}

function verifyCustomPropertyValuesExists(owner, properties, repo) {
  var url = "/repos/" + owner + "/" + repo + "/properties/values";
  var description = "Verify CustomPropertyValues " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CustomPropertyValues found");
}

function verifyCustomPropertyValuesDoesNotExist(owner, properties, repo) {
  var url = "/repos/" + owner + "/" + repo + "/properties/values";
  var description = "Verify CustomPropertyValues " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CustomPropertyValues not found");
}

function matchAnyCustomPropertyValuesAdded() {
  return bp.EventSet("Any CustomPropertyValues Added", function(e) {
      return e.name.startsWith("Done: Create CustomPropertyValues");
  });
}

function createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Create release " + tag_name + " in repository " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "discussion_category_name": discussion_category_name, "draft": draft, "generate_release_notes": generate_release_notes, "make_latest": make_latest, "name": name, "owner": owner, "prerelease": prerelease, "release_id": release_id, "repo": repo, "tag_name": tag_name, "target_commitish": target_commitish}) });
}

function getRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Get release " + release_id + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function updateRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Update release " + release_id + " in repository " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "discussion_category_name": discussion_category_name, "draft": draft, "generate_release_notes": generate_release_notes, "make_latest": make_latest, "name": name, "owner": owner, "prerelease": prerelease, "release_id": release_id, "repo": repo, "tag_name": tag_name, "target_commitish": target_commitish}) });
}

function deleteRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Delete release " + release_id + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Try Add Existing Release " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Verify Release " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Release found");
}

function verifyReleaseDoesNotExist(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Verify Release " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Release not found");
}

function tryToDeleteANonExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Verify negative delete for Release";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  return bp.EventSet("Delete Release", function(e) {
      return e.name === "Done: " + "Delete release " + release_id + " in repository " + owner + "/" + repo;
  });
}

function waitForReleaseAdded(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish) {
  waitFor(matchSuccess("Create release " + tag_name + " in repository " + owner + "/" + repo));
}

function matchAnyReleaseAdded() {
  return bp.EventSet("Any Release Added", function(e) {
      return e.name.startsWith("Done: Create release ");
  });
}

function getReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Get release asset " + asset_id + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 302, 404] });
}

function updateReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Update release asset " + asset_id + " in repository " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"asset_id": asset_id, "file": file, "label": label, "name": name, "owner": owner, "release_id": release_id, "repo": repo, "state": state}) });
}

function deleteReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Delete release asset " + asset_id + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function uploadReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/assets";
  var description = "Upload release asset " + name + " to release " + release_id + " in repository " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"asset_id": asset_id, "file": file, "label": label, "name": name, "owner": owner, "release_id": release_id, "repo": repo, "state": state}) });
}

function tryToAddExistingReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/assets";
  var description = "Try Add Existing ReleaseAsset " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyReleaseAssetExists(asset_id, file, label, name, owner, release_id, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Verify ReleaseAsset " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ReleaseAsset found");
}

function verifyReleaseAssetDoesNotExist(asset_id, file, label, name, owner, release_id, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Verify ReleaseAsset " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ReleaseAsset not found");
}

function tryToDeleteANonExistingReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Verify negative delete for ReleaseAsset";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state) {
  return bp.EventSet("Delete ReleaseAsset", function(e) {
      return e.name === "Done: " + "Delete release asset " + asset_id + " in repository " + owner + "/" + repo;
  });
}

function waitForReleaseAssetAdded(asset_id, file, label, name, owner, release_id, repo, state) {
  waitFor(matchSuccess("Upload release asset " + name + " to release " + release_id + " in repository " + owner + "/" + repo));
}

function matchAnyReleaseAssetAdded() {
  return bp.EventSet("Any ReleaseAsset Added", function(e) {
      return e.name.startsWith("Done: Upload release asset ");
  });
}

function createRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets";
  var description = "Create repository ruleset " + name + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bypass_actors": bypass_actors, "conditions": conditions, "enforcement": enforcement, "name": name, "owner": owner, "repo": repo, "rules": rules, "ruleset_id": ruleset_id, "target": target}) });
}

function getRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Get repository ruleset " + ruleset_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 500] });
}

function updateRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Update repository ruleset " + ruleset_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bypass_actors": bypass_actors, "conditions": conditions, "enforcement": enforcement, "name": name, "owner": owner, "repo": repo, "rules": rules, "ruleset_id": ruleset_id, "target": target}) });
}

function deleteRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Delete repository ruleset " + ruleset_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 500] });
}

function tryToAddExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets";
  var description = "Try Add Existing RepositoryRuleset " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Verify RepositoryRuleset " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryRuleset found");
}

function verifyRepositoryRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Verify RepositoryRuleset " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryRuleset not found");
}

function tryToDeleteANonExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Verify negative delete for RepositoryRuleset";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  return bp.EventSet("Delete RepositoryRuleset", function(e) {
      return e.name === "Done: " + "Delete repository ruleset " + ruleset_id + " in repo " + owner + "/" + repo;
  });
}

function waitForRepositoryRulesetAdded(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target) {
  waitFor(matchSuccess("Create repository ruleset " + name + " in repo " + owner + "/" + repo));
}

function matchAnyRepositoryRulesetAdded() {
  return bp.EventSet("Any RepositoryRuleset Added", function(e) {
      return e.name.startsWith("Done: Create repository ruleset ");
  });
}

function getRepositoryRuleSuite(owner, repo, rule_suite_id) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/rule-suites/" + rule_suite_id;
  var description = "Get repository rule suite " + rule_suite_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 500] });
}

function listRepositoryRuleSuites(owner, repo, rule_suite_id) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/rule-suites";
  var description = "List repository rule suites in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 500] });
}

function verifyRepositoryRuleSuiteExists(owner, repo, rule_suite_id) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/rule-suites/" + rule_suite_id;
  var description = "Verify RepositoryRuleSuite " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryRuleSuite found");
}

function verifyRepositoryRuleSuiteDoesNotExist(owner, repo, rule_suite_id) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/rule-suites/" + rule_suite_id;
  var description = "Verify RepositoryRuleSuite " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryRuleSuite not found");
}

function matchAnyRepositoryRuleSuiteAdded() {
  return bp.EventSet("Any RepositoryRuleSuite Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryRuleSuite");
  });
}

function getBranchRules(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/rules/branches/" + branch;
  var description = "Get rules for branch " + branch + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyBranchRulesExists(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/rules/branches/" + branch;
  var description = "Verify BranchRules " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BranchRules found");
}

function verifyBranchRulesDoesNotExist(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/rules/branches/" + branch;
  var description = "Verify BranchRules " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchRules not found");
}

function matchAnyBranchRulesAdded() {
  return bp.EventSet("Any BranchRules Added", function(e) {
      return e.name.startsWith("Done: Create BranchRules");
  });
}

function createCommitStatus(context, description, id, owner, repo, sha, state, target_url) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha;
  var description = "Create a commit status " + state + " for commit " + sha + " in repo " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"context": context, "description": description, "id": id, "owner": owner, "repo": repo, "sha": sha, "state": state, "target_url": target_url}) });
}

// verifyCommitStatusExists skipped: No GET /{id} operation detected.
function waitForCommitStatusAdded(context, description, id, owner, repo, sha, state, target_url) {
  waitFor(matchSuccess("Create a commit status " + state + " for commit " + sha + " in repo " + owner + "/" + repo));
}

function matchAnyCommitStatusAdded() {
  return bp.EventSet("Any CommitStatus Added", function(e) {
      return e.name.startsWith("Done: Create a commit status ");
  });
}

function createTagProtection(owner, pattern, repo, tag_protection_id) {
  var url = "/repos/" + owner + "/" + repo + "/tags/protection";
  var description = "Create tag protection with pattern " + pattern + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "pattern": pattern, "repo": repo, "tag_protection_id": tag_protection_id}) });
}

function deleteTagProtection(owner, pattern, repo, tag_protection_id) {
  var url = "/repos/" + owner + "/" + repo + "/tags/protection/" + tag_protection_id;
  var description = "Delete tag protection " + tag_protection_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// verifyTagProtectionExists skipped: No GET /{id} operation detected.
function waitForTagProtectionAdded(owner, pattern, repo, tag_protection_id) {
  waitFor(matchSuccess("Create tag protection with pattern " + pattern + " in repo " + owner + "/" + repo));
}

function matchAnyTagProtectionAdded() {
  return bp.EventSet("Any TagProtection Added", function(e) {
      return e.name.startsWith("Done: Create tag protection with pattern ");
  });
}

function replaceAllTopics(names, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/topics";
  var description = "Replace all topics with " + names + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"names": names, "owner": owner, "repo": repo}) });
}

// verifyRepositoryTopicsExists skipped: No GET /{id} operation detected.
function matchAnyRepositoryTopicsAdded() {
  return bp.EventSet("Any RepositoryTopics Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryTopics");
  });
}

function createRepositoryUsingTemplate(description, id, include_all_branches, name, owner, _private, template_owner, template_repo) {
  var url = "/repos/" + template_owner + "/" + template_repo + "/generate";
  var description = "Create repository " + name + " using template " + template_owner + "/" + template_repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "id": id, "include_all_branches": include_all_branches, "name": name, "owner": owner, "private": _private, "template_owner": template_owner, "template_repo": template_repo}) });
}

// verifyRepositoryTemplateExists skipped: No GET /{id} operation detected.
function waitForRepositoryTemplateAdded(description, id, include_all_branches, name, owner, _private, template_owner, template_repo) {
  waitFor(matchSuccess("Create repository " + name + " using template " + template_owner + "/" + template_repo));
}

function matchAnyRepositoryTemplateAdded() {
  return bp.EventSet("Any RepositoryTemplate Added", function(e) {
      return e.name.startsWith("Done: Create repository ");
  });
}

function listRepositoryInvitationsForAuthenticatedUser(invitation_id, page, per_page) {
  var url = "/user/repository_invitations";
  var description = "List repository invitations for authenticated user " + invitation_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function acceptRepositoryInvitation(invitation_id, page, per_page) {
  var url = "/user/repository_invitations/" + invitation_id;
  var description = "Accept repository invitation " + invitation_id;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 304, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"invitation_id": invitation_id, "page": page, "per-page": per_page}) });
}

function declineRepositoryInvitation(invitation_id, page, per_page) {
  var url = "/user/repository_invitations/" + invitation_id;
  var description = "Decline repository invitation " + invitation_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 403, 404, 409] });
}

// verifyRepositoryInvitationExists skipped: No GET /{id} operation detected.
function matchAnyRepositoryInvitationAdded() {
  return bp.EventSet("Any RepositoryInvitation Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryInvitation");
  });
}

function createHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  var url = "/orgs/" + org + "/actions/hosted-runners";
  var description = "Create hosted runner " + name + " in org " + org;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enable_static_ip": enable_static_ip, "hosted_runner_id": hosted_runner_id, "id": id, "maximum_runners": maximum_runners, "name": name, "org": org, "runner_group_id": runner_group_id, "size": size, "source": source}) });
}

function getHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Get hosted runner " + hosted_runner_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Update hosted runner " + hosted_runner_id + " in org " + org;
  var body = {
    "id": id,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enable_static_ip": enable_static_ip, "hosted_runner_id": hosted_runner_id, "id": id, "maximum_runners": maximum_runners, "name": name, "org": org, "runner_group_id": runner_group_id, "size": size, "source": source}) });
}

function deleteHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Delete hosted runner " + hosted_runner_id + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [202, 204] });
}

function tryToAddExistingHostedRunner(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  var url = "/orgs/" + org + "/actions/hosted-runners";
  var description = "Try Add Existing HostedRunner " + org;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Verify HostedRunner " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("HostedRunner found");
}

function verifyHostedRunnerDoesNotExist(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Verify HostedRunner " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("HostedRunner not found");
}

function tryToDeleteANonExistingHostedRunner(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Verify negative delete for HostedRunner";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedHostedRunner(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  return bp.EventSet("Delete HostedRunner", function(e) {
      return e.name === "Done: " + "Delete hosted runner " + hosted_runner_id + " in org " + org;
  });
}

function waitForHostedRunnerAdded(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source) {
  waitFor(matchSuccess("Create hosted runner " + name + " in org " + org));
}

function matchAnyHostedRunnerAdded() {
  return bp.EventSet("Any HostedRunner Added", function(e) {
      return e.name.startsWith("Done: Create hosted runner ");
  });
}

function getGithubActionsPermissionsOrganization(allowed_actions, enabled_repositories, org, sha_pinning_required) {
  var url = "/orgs/" + org + "/actions/permissions";
  var description = "Get GitHub Actions permissions for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setGithubActionsPermissionsOrganization(allowed_actions, enabled_repositories, org, sha_pinning_required) {
  var url = "/orgs/" + org + "/actions/permissions";
  var description = "Set GitHub Actions permissions for org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allowed_actions": allowed_actions, "enabled_repositories": enabled_repositories, "org": org, "sha_pinning_required": sha_pinning_required}) });
}

function verifyActionsPermissionsExists(allowed_actions, enabled_repositories, org, sha_pinning_required) {
  var url = "/orgs/" + org + "/actions/permissions";
  var description = "Verify ActionsPermissions " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ActionsPermissions found");
}

function verifyActionsPermissionsDoesNotExist(allowed_actions, enabled_repositories, org, sha_pinning_required) {
  var url = "/orgs/" + org + "/actions/permissions";
  var description = "Verify ActionsPermissions " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ActionsPermissions not found");
}

function matchAnyActionsPermissionsAdded() {
  return bp.EventSet("Any ActionsPermissions Added", function(e) {
      return e.name.startsWith("Done: Create ActionsPermissions");
  });
}

function getArtifactAndLogRetentionSettingsRepository(days, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/artifact-and-log-retention";
  var description = "Get artifact and log retention settings for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function setArtifactAndLogRetentionSettingsRepository(days, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/artifact-and-log-retention";
  var description = "Set artifact and log retention settings for repo " + owner + "/" + repo + " with days " + days;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"days": days, "owner": owner, "repo": repo}) });
}

function verifyArtifactAndLogRetentionExists(days, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/artifact-and-log-retention";
  var description = "Verify ArtifactAndLogRetention " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ArtifactAndLogRetention found");
}

function verifyArtifactAndLogRetentionDoesNotExist(days, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/artifact-and-log-retention";
  var description = "Verify ArtifactAndLogRetention " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ArtifactAndLogRetention not found");
}

function matchAnyArtifactAndLogRetentionAdded() {
  return bp.EventSet("Any ArtifactAndLogRetention Added", function(e) {
      return e.name.startsWith("Done: Create ArtifactAndLogRetention");
  });
}

function getForkPrContributorApprovalPermissionsRepository(approval_policy, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/fork-pr-contributor-approval";
  var description = "Get fork PR contributor approval permissions for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function setForkPrContributorApprovalPermissionsRepository(approval_policy, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/fork-pr-contributor-approval";
  var description = "Set fork PR contributor approval permissions for repo " + owner + "/" + repo + " with approval_policy " + approval_policy;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"approval_policy": approval_policy, "owner": owner, "repo": repo}) });
}

function verifyForkPrContributorApprovalExists(approval_policy, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/fork-pr-contributor-approval";
  var description = "Verify ForkPrContributorApproval " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ForkPrContributorApproval found");
}

function verifyForkPrContributorApprovalDoesNotExist(approval_policy, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/fork-pr-contributor-approval";
  var description = "Verify ForkPrContributorApproval " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ForkPrContributorApproval not found");
}

function matchAnyForkPrContributorApprovalAdded() {
  return bp.EventSet("Any ForkPrContributorApproval Added", function(e) {
      return e.name.startsWith("Done: Create ForkPrContributorApproval");
  });
}

function getPrivateRepoForkPrWorkflowsSettingsOrganization(org) {
  var url = "/orgs/" + org + "/actions/permissions/fork-pr-workflows-private-repos";
  var description = "Get private repo fork PR workflow settings for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function setPrivateRepoForkPrWorkflowsSettingsOrganization(org) {
  var url = "/orgs/" + org + "/actions/permissions/fork-pr-workflows-private-repos";
  var description = "Set private repo fork PR workflow settings for organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org}) });
}

function verifyForkPrWorkflowsPrivateReposExists(org) {
  var url = "/orgs/" + org + "/actions/permissions/fork-pr-workflows-private-repos";
  var description = "Verify ForkPrWorkflowsPrivateRepos " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ForkPrWorkflowsPrivateRepos found");
}

function verifyForkPrWorkflowsPrivateReposDoesNotExist(org) {
  var url = "/orgs/" + org + "/actions/permissions/fork-pr-workflows-private-repos";
  var description = "Verify ForkPrWorkflowsPrivateRepos " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ForkPrWorkflowsPrivateRepos not found");
}

function matchAnyForkPrWorkflowsPrivateReposAdded() {
  return bp.EventSet("Any ForkPrWorkflowsPrivateRepos Added", function(e) {
      return e.name.startsWith("Done: Create ForkPrWorkflowsPrivateRepos");
  });
}

function listSelectedRepositoriesEnabledGithubActionsOrganization(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories";
  var description = "List selected repositories enabled for GitHub Actions in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setSelectedRepositoriesEnabledGithubActionsOrganization(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories";
  var description = "Set selected repositories enabled for GitHub Actions in organization " + org + " with selected_repository_ids " + selected_repository_ids;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_id": repository_id, "selected_repository_ids": selected_repository_ids}) });
}

function enableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories/" + repository_id;
  var description = "Enable selected repository " + repository_id + " for GitHub Actions in organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_id": repository_id, "selected_repository_ids": selected_repository_ids}) });
}

function disableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories/" + repository_id;
  var description = "Disable selected repository " + repository_id + " for GitHub Actions in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingRepositories(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories/" + repository_id;
  var description = "Try Add Existing Repositories " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositoriesExists(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories";
  var description = "Verify Repositories " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Repositories found");
}

function verifyRepositoriesDoesNotExist(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories";
  var description = "Verify Repositories " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Repositories not found");
}

function tryToDeleteANonExistingRepositories(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories/" + repository_id;
  var description = "Verify negative delete for Repositories";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepositories(org, repository_id, selected_repository_ids) {
  return bp.EventSet("Delete Repositories", function(e) {
      return e.name === "Done: " + "Disable selected repository " + repository_id + " for GitHub Actions in organization " + org;
  });
}

function waitForRepositoriesAdded(org, repository_id, selected_repository_ids) {
  waitFor(matchSuccess("Enable selected repository " + repository_id + " for GitHub Actions in organization " + org));
}

function matchAnyRepositoriesAdded() {
  return bp.EventSet("Any Repositories Added", function(e) {
      return e.name.startsWith("Done: Enable selected repository ");
  });
}

function getAllowedActionsOrganization(org) {
  var url = "/orgs/" + org + "/actions/permissions/selected-actions";
  var description = "Get allowed actions and reusable workflows for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setAllowedActionsOrganization(org) {
  var url = "/orgs/" + org + "/actions/permissions/selected-actions";
  var description = "Set allowed actions and reusable workflows for organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org}) });
}

function verifySelectedActionsExists(org) {
  var url = "/orgs/" + org + "/actions/permissions/selected-actions";
  var description = "Verify SelectedActions " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SelectedActions found");
}

function verifySelectedActionsDoesNotExist(org) {
  var url = "/orgs/" + org + "/actions/permissions/selected-actions";
  var description = "Verify SelectedActions " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SelectedActions not found");
}

function matchAnySelectedActionsAdded() {
  return bp.EventSet("Any SelectedActions Added", function(e) {
      return e.name.startsWith("Done: Create SelectedActions");
  });
}

function getSelfHostedRunnersPermissionsOrganization(enabled_repositories, org) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners";
  var description = "Get self-hosted runners settings for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function setSelfHostedRunnersPermissionsOrganization(enabled_repositories, org) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners";
  var description = "Set self-hosted runners settings for organization " + org + " with enabled_repositories " + enabled_repositories;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enabled_repositories": enabled_repositories, "org": org}) });
}

function verifySelfHostedRunnersExists(enabled_repositories, org) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners";
  var description = "Verify SelfHostedRunners " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SelfHostedRunners found");
}

function verifySelfHostedRunnersDoesNotExist(enabled_repositories, org) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners";
  var description = "Verify SelfHostedRunners " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SelfHostedRunners not found");
}

function matchAnySelfHostedRunnersAdded() {
  return bp.EventSet("Any SelfHostedRunners Added", function(e) {
      return e.name.startsWith("Done: Create SelfHostedRunners");
  });
}

function listSelectedRepositoriesSelfHostedRunnersOrganization(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories";
  var description = "List repositories allowed to use self-hosted runners in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function setSelectedRepositoriesSelfHostedRunnersOrganization(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories";
  var description = "Set repositories allowed to use self-hosted runners in organization " + org + " with selected_repository_ids " + selected_repository_ids;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_id": repository_id, "selected_repository_ids": selected_repository_ids}) });
}

function enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories/" + repository_id;
  var description = "Add repository " + repository_id + " to allowed self-hosted runners in organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_id": repository_id, "selected_repository_ids": selected_repository_ids}) });
}

function disableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories/" + repository_id;
  var description = "Remove repository " + repository_id + " from allowed self-hosted runners in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 409, 422] });
}

function tryToAddExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories/" + repository_id;
  var description = "Try Add Existing SelfHostedRunnersRepositories " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories";
  var description = "Verify SelfHostedRunnersRepositories " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SelfHostedRunnersRepositories found");
}

function verifySelfHostedRunnersRepositoriesDoesNotExist(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories";
  var description = "Verify SelfHostedRunnersRepositories " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SelfHostedRunnersRepositories not found");
}

function tryToDeleteANonExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories/" + repository_id;
  var description = "Verify negative delete for SelfHostedRunnersRepositories";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids) {
  return bp.EventSet("Delete SelfHostedRunnersRepositories", function(e) {
      return e.name === "Done: " + "Remove repository " + repository_id + " from allowed self-hosted runners in organization " + org;
  });
}

function waitForSelfHostedRunnersRepositoriesAdded(org, repository_id, selected_repository_ids) {
  waitFor(matchSuccess("Add repository " + repository_id + " to allowed self-hosted runners in organization " + org));
}

function matchAnySelfHostedRunnersRepositoriesAdded() {
  return bp.EventSet("Any SelfHostedRunnersRepositories Added", function(e) {
      return e.name.startsWith("Done: Add repository ");
  });
}

function getGithubActionsDefaultWorkflowPermissionsOrganization(org) {
  var url = "/orgs/" + org + "/actions/permissions/workflow";
  var description = "Get default workflow permissions for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setGithubActionsDefaultWorkflowPermissionsOrganization(org) {
  var url = "/orgs/" + org + "/actions/permissions/workflow";
  var description = "Set default workflow permissions for organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org}) });
}

function verifyWorkflowPermissionsExists(org) {
  var url = "/orgs/" + org + "/actions/permissions/workflow";
  var description = "Verify WorkflowPermissions " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowPermissions found");
}

function verifyWorkflowPermissionsDoesNotExist(org) {
  var url = "/orgs/" + org + "/actions/permissions/workflow";
  var description = "Verify WorkflowPermissions " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowPermissions not found");
}

function matchAnyWorkflowPermissionsAdded() {
  return bp.EventSet("Any WorkflowPermissions Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowPermissions");
  });
}

function createRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  var url = "/orgs/" + org + "/actions/runner-groups";
  var description = "Create runner group " + name + " in org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allows_public_repositories": allows_public_repositories, "name": name, "network_configuration_id": network_configuration_id, "org": org, "restricted_to_workflows": restricted_to_workflows, "runner_group_id": runner_group_id, "runners": runners, "selected_repository_ids": selected_repository_ids, "selected_workflows": selected_workflows, "visibility": visibility}) });
}

function getRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Get runner group " + runner_group_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Update runner group " + runner_group_id + " in org " + org + " with name " + name;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allows_public_repositories": allows_public_repositories, "name": name, "network_configuration_id": network_configuration_id, "org": org, "restricted_to_workflows": restricted_to_workflows, "runner_group_id": runner_group_id, "runners": runners, "selected_repository_ids": selected_repository_ids, "selected_workflows": selected_workflows, "visibility": visibility}) });
}

function deleteRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Delete runner group " + runner_group_id + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  var url = "/orgs/" + org + "/actions/runner-groups";
  var description = "Try Add Existing RunnerGroup " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Verify RunnerGroup " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RunnerGroup found");
}

function verifyRunnerGroupDoesNotExist(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Verify RunnerGroup " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RunnerGroup not found");
}

function tryToDeleteANonExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Verify negative delete for RunnerGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  return bp.EventSet("Delete RunnerGroup", function(e) {
      return e.name === "Done: " + "Delete runner group " + runner_group_id + " in org " + org;
  });
}

function waitForRunnerGroupAdded(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility) {
  waitFor(matchSuccess("Create runner group " + name + " in org " + org));
}

function matchAnyRunnerGroupAdded() {
  return bp.EventSet("Any RunnerGroup Added", function(e) {
      return e.name.startsWith("Done: Create runner group ");
  });
}

function listRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories";
  var description = "List repository access for runner group " + runner_group_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories";
  var description = "Set repository access for runner group " + runner_group_id + " in org " + org + " with selected_repository_ids " + selected_repository_ids;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_id": repository_id, "runner_group_id": runner_group_id, "selected_repository_ids": selected_repository_ids}) });
}

function addRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories/" + repository_id;
  var description = "Add repository " + repository_id + " access to runner group " + runner_group_id + " in org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_id": repository_id, "runner_group_id": runner_group_id, "selected_repository_ids": selected_repository_ids}) });
}

function removeRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories/" + repository_id;
  var description = "Remove repository " + repository_id + " access from runner group " + runner_group_id + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories/" + repository_id;
  var description = "Try Add Existing RunnerGroupRepositoryAccess " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories";
  var description = "Verify RunnerGroupRepositoryAccess " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RunnerGroupRepositoryAccess found");
}

function verifyRunnerGroupRepositoryAccessDoesNotExist(org, repository_id, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories";
  var description = "Verify RunnerGroupRepositoryAccess " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RunnerGroupRepositoryAccess not found");
}

function tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories/" + repository_id;
  var description = "Verify negative delete for RunnerGroupRepositoryAccess";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids) {
  return bp.EventSet("Delete RunnerGroupRepositoryAccess", function(e) {
      return e.name === "Done: " + "Remove repository " + repository_id + " access from runner group " + runner_group_id + " in org " + org;
  });
}

function waitForRunnerGroupRepositoryAccessAdded(org, repository_id, runner_group_id, selected_repository_ids) {
  waitFor(matchSuccess("Add repository " + repository_id + " access to runner group " + runner_group_id + " in org " + org));
}

function matchAnyRunnerGroupRepositoryAccessAdded() {
  return bp.EventSet("Any RunnerGroupRepositoryAccess Added", function(e) {
      return e.name.startsWith("Done: Add repository ");
  });
}

function listSelfHostedRunnersInGroupForOrg(org, runner_group_id, runner_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners";
  var description = "List self-hosted runners in runner group " + runner_group_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setSelfHostedRunnersInGroupForOrg(org, runner_group_id, runner_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners";
  var description = "Set self-hosted runners in runner group " + runner_group_id + " in org " + org + " with runners " + runners;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "runner_group_id": runner_group_id, "runner_id": runner_id, "runners": runners}) });
}

function addSelfHostedRunnerToGroupForOrg(org, runner_group_id, runner_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners/" + runner_id;
  var description = "Add self-hosted runner " + runner_id + " to runner group " + runner_group_id + " in org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "runner_group_id": runner_group_id, "runner_id": runner_id, "runners": runners}) });
}

function removeSelfHostedRunnerFromGroupForOrg(org, runner_group_id, runner_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners/" + runner_id;
  var description = "Remove self-hosted runner " + runner_id + " from runner group " + runner_group_id + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners/" + runner_id;
  var description = "Try Add Existing RunnerGroupRunner " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners";
  var description = "Verify RunnerGroupRunner " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RunnerGroupRunner found");
}

function verifyRunnerGroupRunnerDoesNotExist(org, runner_group_id, runner_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners";
  var description = "Verify RunnerGroupRunner " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RunnerGroupRunner not found");
}

function tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners/" + runner_id;
  var description = "Verify negative delete for RunnerGroupRunner";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRunnerGroupRunner(org, runner_group_id, runner_id, runners) {
  return bp.EventSet("Delete RunnerGroupRunner", function(e) {
      return e.name === "Done: " + "Remove self-hosted runner " + runner_id + " from runner group " + runner_group_id + " in org " + org;
  });
}

function waitForRunnerGroupRunnerAdded(org, runner_group_id, runner_id, runners) {
  waitFor(matchSuccess("Add self-hosted runner " + runner_id + " to runner group " + runner_group_id + " in org " + org));
}

function matchAnyRunnerGroupRunnerAdded() {
  return bp.EventSet("Any RunnerGroupRunner Added", function(e) {
      return e.name.startsWith("Done: Add self-hosted runner ");
  });
}

function getRunner(labels, name, org, runner_group_id, runner_id, work_folder) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id;
  var description = "Get runner " + runner_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function generateRunnerJitconfigForOrg(labels, name, org, runner_group_id, runner_id, work_folder) {
  var url = "/orgs/" + org + "/actions/runners/generate-jitconfig";
  var description = "Create configuration for runner " + name + " in runner group " + runner_group_id + " in org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"labels": labels, "name": name, "org": org, "runner_group_id": runner_group_id, "runner_id": runner_id, "work_folder": work_folder}) });
}

function deleteRunner(labels, name, org, runner_group_id, runner_id, work_folder) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id;
  var description = "Delete runner " + runner_id + " from org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

function tryToAddExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder) {
  var url = "/orgs/" + org + "/actions/runners/generate-jitconfig";
  var description = "Try Add Existing Runner " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id;
  var description = "Verify Runner " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Runner found");
}

function verifyRunnerDoesNotExist(labels, name, org, runner_group_id, runner_id, work_folder) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id;
  var description = "Verify Runner " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Runner not found");
}

function tryToDeleteANonExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id;
  var description = "Verify negative delete for Runner";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRunner(labels, name, org, runner_group_id, runner_id, work_folder) {
  return bp.EventSet("Delete Runner", function(e) {
      return e.name === "Done: " + "Delete runner " + runner_id + " from org " + org;
  });
}

function waitForRunnerAdded(labels, name, org, runner_group_id, runner_id, work_folder) {
  waitFor(matchSuccess("Create configuration for runner " + name + " in runner group " + runner_group_id + " in org " + org));
}

function matchAnyRunnerAdded() {
  return bp.EventSet("Any Runner Added", function(e) {
      return e.name.startsWith("Done: Create configuration for runner ");
  });
}

function listRunnerLabels(labels, org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "List labels for runner " + runner_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function addRunnerLabels(labels, org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Add labels " + labels + " to runner " + runner_id + " in org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"labels": labels, "org": org, "runner_id": runner_id}) });
}

function setRunnerLabels(labels, org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Set labels " + labels + " for runner " + runner_id + " in org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"labels": labels, "org": org, "runner_id": runner_id}) });
}

function removeAllRunnerLabels(labels, org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Remove all labels from runner " + runner_id + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingRunnerLabels(labels, org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Try Add Existing RunnerLabels " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRunnerLabelsExists(labels, org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Verify RunnerLabels " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RunnerLabels found");
}

function verifyRunnerLabelsDoesNotExist(labels, org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Verify RunnerLabels " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RunnerLabels not found");
}

function tryToDeleteANonExistingRunnerLabels(labels, org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Verify negative delete for RunnerLabels";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRunnerLabels(labels, org, runner_id) {
  return bp.EventSet("Delete RunnerLabels", function(e) {
      return e.name === "Done: " + "Remove all labels from runner " + runner_id + " in org " + org;
  });
}

function waitForRunnerLabelsAdded(labels, org, runner_id) {
  waitFor(matchSuccess("Add labels " + labels + " to runner " + runner_id + " in org " + org));
}

function matchAnyRunnerLabelsAdded() {
  return bp.EventSet("Any RunnerLabels Added", function(e) {
      return e.name.startsWith("Done: Add labels ");
  });
}

function removeCustomLabelFromSelfHostedRunnerForRepo(name, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels/" + name;
  var description = "Remove custom label " + name + " from runner " + runner_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

// verifyRunnerLabelExists skipped: No GET /{id} operation detected.
function matchAnyRunnerLabelAdded() {
  return bp.EventSet("Any RunnerLabel Added", function(e) {
      return e.name.startsWith("Done: Create RunnerLabel");
  });
}

function createRegistrationToken(id, org) {
  var url = "/orgs/" + org + "/actions/runners/registration-token";
  var description = "Create registration token for org " + org + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "org": org}) });
}

// verifyRegistrationTokenExists skipped: No GET /{id} operation detected.
function waitForRegistrationTokenAdded(id, org) {
  waitFor(matchSuccess("Create registration token for org " + org));
}

function matchAnyRegistrationTokenAdded() {
  return bp.EventSet("Any RegistrationToken Added", function(e) {
      return e.name.startsWith("Done: Create registration token for org ");
  });
}

function createRemoveToken(id, org) {
  var url = "/orgs/" + org + "/actions/runners/remove-token";
  var description = "Create remove token for org " + org + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "org": org}) });
}

// verifyRemoveTokenExists skipped: No GET /{id} operation detected.
function waitForRemoveTokenAdded(id, org) {
  waitFor(matchSuccess("Create remove token for org " + org));
}

function matchAnyRemoveTokenAdded() {
  return bp.EventSet("Any RemoveToken Added", function(e) {
      return e.name.startsWith("Done: Create remove token for org ");
  });
}

function getSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Get secret " + secret_name + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrUpdateSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Create or update secret " + secret_name + " in org " + org + " with encrypted_value " + encrypted_value + ", key_id " + key_id + ", visibility " + visibility;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "key_id": key_id, "org": org, "secret_name": secret_name, "selected_repository_ids": selected_repository_ids, "visibility": visibility}) });
}

function deleteSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Delete secret " + secret_name + " from org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Try Add Existing Secret " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Verify Secret " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Secret found");
}

function verifySecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Verify Secret " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Secret not found");
}

function tryToDeleteANonExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Verify negative delete for Secret";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  return bp.EventSet("Delete Secret", function(e) {
      return e.name === "Done: " + "Delete secret " + secret_name + " from org " + org;
  });
}

function waitForSecretAdded(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  waitFor(matchSuccess("Create or update secret " + secret_name + " in org " + org + " with encrypted_value " + encrypted_value + ", key_id " + key_id + ", visibility " + visibility));
}

function matchAnySecretAdded() {
  return bp.EventSet("Any Secret Added", function(e) {
      return e.name.startsWith("Done: Create or update secret ");
  });
}

function listRepositoriesForSecretForAuthenticatedUser(secret_name, selected_repository_ids) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories";
  var description = "List repositories for secret " + secret_name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 403, 404, 500] });
}

function setRepositoriesForSecretForAuthenticatedUser(secret_name, selected_repository_ids) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories";
  var description = "Set repositories for secret " + secret_name + " with selected_repository_ids " + selected_repository_ids;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 401, 403, 404, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"secret_name": secret_name, "selected_repository_ids": selected_repository_ids}) });
}

function verifySecretRepositoriesExists(secret_name, selected_repository_ids) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories";
  var description = "Verify SecretRepositories " + secret_name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SecretRepositories found");
}

function verifySecretRepositoriesDoesNotExist(secret_name, selected_repository_ids) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories";
  var description = "Verify SecretRepositories " + secret_name + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SecretRepositories not found");
}

function matchAnySecretRepositoriesAdded() {
  return bp.EventSet("Any SecretRepositories Added", function(e) {
      return e.name.startsWith("Done: Create SecretRepositories");
  });
}

function addRepositoryForSecretForAuthenticatedUser(repository_id, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Add repository " + repository_id + " to secret " + secret_name;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 401, 403, 404, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"repository_id": repository_id, "secret_name": secret_name}) });
}

function removeRepositoryForSecretForAuthenticatedUser(repository_id, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Remove repository " + repository_id + " from secret " + secret_name;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 403, 404, 500] });
}

// verifySecretRepositoryExists skipped: No GET /{id} operation detected.
function waitForSecretRepositoryAdded(repository_id, secret_name) {
  waitFor(matchSuccess("Add repository " + repository_id + " to secret " + secret_name));
}

function matchAnySecretRepositoryAdded() {
  return bp.EventSet("Any SecretRepository Added", function(e) {
      return e.name.startsWith("Done: Add repository ");
  });
}

function createOrgVariable(name, org, selected_repository_ids, value, visibility) {
  var url = "/orgs/" + org + "/actions/variables";
  var description = "Create organization variable " + name + " in org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "org": org, "selected_repository_ids": selected_repository_ids, "value": value, "visibility": visibility}) });
}

function getOrgVariable(name, org, selected_repository_ids, value, visibility) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Get organization variable " + name + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateOrgVariable(name, org, selected_repository_ids, value, visibility) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Update organization variable " + name + " in org " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "org": org, "selected_repository_ids": selected_repository_ids, "value": value, "visibility": visibility}) });
}

function deleteOrgVariable(name, org, selected_repository_ids, value, visibility) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Delete organization variable " + name + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingOrgVariable(name, org, selected_repository_ids, value, visibility) {
  var url = "/orgs/" + org + "/actions/variables";
  var description = "Try Add Existing OrgVariable " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Verify OrgVariable " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgVariable found");
}

function verifyOrgVariableDoesNotExist(name, org, selected_repository_ids, value, visibility) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Verify OrgVariable " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgVariable not found");
}

function tryToDeleteANonExistingOrgVariable(name, org, selected_repository_ids, value, visibility) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Verify negative delete for OrgVariable";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrgVariable(name, org, selected_repository_ids, value, visibility) {
  return bp.EventSet("Delete OrgVariable", function(e) {
      return e.name === "Done: " + "Delete organization variable " + name + " in org " + org;
  });
}

function waitForOrgVariableAdded(name, org, selected_repository_ids, value, visibility) {
  waitFor(matchSuccess("Create organization variable " + name + " in org " + org));
}

function matchAnyOrgVariableAdded() {
  return bp.EventSet("Any OrgVariable Added", function(e) {
      return e.name.startsWith("Done: Create organization variable ");
  });
}

function listSelectedReposForOrgVariable(name, org, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories";
  var description = "List selected repositories for organization variable " + name + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 409] });
}

function setSelectedReposForOrgVariable(name, org, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories";
  var description = "Set selected repositories for organization variable " + name + " in org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "org": org, "selected_repository_ids": selected_repository_ids}) });
}

function verifyOrgVariableSelectedReposExists(name, org, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories";
  var description = "Verify OrgVariableSelectedRepos " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgVariableSelectedRepos found");
}

function verifyOrgVariableSelectedReposDoesNotExist(name, org, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories";
  var description = "Verify OrgVariableSelectedRepos " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgVariableSelectedRepos not found");
}

function matchAnyOrgVariableSelectedReposAdded() {
  return bp.EventSet("Any OrgVariableSelectedRepos Added", function(e) {
      return e.name.startsWith("Done: Create OrgVariableSelectedRepos");
  });
}

function addSelectedRepoToOrgVariable(name, org, repository_id) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories/" + repository_id;
  var description = "Add selected repository " + repository_id + " to organization variable " + name + " in org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "org": org, "repository_id": repository_id}) });
}

function removeSelectedRepoFromOrgVariable(name, org, repository_id) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories/" + repository_id;
  var description = "Remove selected repository " + repository_id + " from organization variable " + name + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 409] });
}

// verifyOrgVariableSelectedRepoExists skipped: No GET /{id} operation detected.
function waitForOrgVariableSelectedRepoAdded(name, org, repository_id) {
  waitFor(matchSuccess("Add selected repository " + repository_id + " to organization variable " + name + " in org " + org));
}

function matchAnyOrgVariableSelectedRepoAdded() {
  return bp.EventSet("Any OrgVariableSelectedRepo Added", function(e) {
      return e.name.startsWith("Done: Add selected repository ");
  });
}

function getArtifact(artifact_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id;
  var description = "Get artifact " + artifact_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteArtifact(artifact_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id;
  var description = "Delete artifact " + artifact_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function verifyArtifactExists(artifact_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id;
  var description = "Verify Artifact " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Artifact found");
}

function verifyArtifactDoesNotExist(artifact_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id;
  var description = "Verify Artifact " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Artifact not found");
}

function tryToDeleteANonExistingArtifact(artifact_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id;
  var description = "Verify negative delete for Artifact";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedArtifact(artifact_id, owner, repo) {
  return bp.EventSet("Delete Artifact", function(e) {
      return e.name === "Done: " + "Delete artifact " + artifact_id + " in repo " + owner + "/" + repo;
  });
}

function matchAnyArtifactAdded() {
  return bp.EventSet("Any Artifact Added", function(e) {
      return e.name.startsWith("Done: Create Artifact");
  });
}

function downloadArtifact(archive_format, artifact_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id + "/" + archive_format;
  var description = "Download artifact " + artifact_id + " in repo " + owner + "/" + repo + " as " + archive_format;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [302, 410] });
}

function verifyArtifactDownloadExists(archive_format, artifact_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id + "/" + archive_format;
  var description = "Verify ArtifactDownload " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ArtifactDownload found");
}

function verifyArtifactDownloadDoesNotExist(archive_format, artifact_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id + "/" + archive_format;
  var description = "Verify ArtifactDownload " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ArtifactDownload not found");
}

function matchAnyArtifactDownloadAdded() {
  return bp.EventSet("Any ArtifactDownload Added", function(e) {
      return e.name.startsWith("Done: Create ArtifactDownload");
  });
}

function deleteActionsCacheById(cache_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/caches/" + cache_id;
  var description = "Delete actions cache " + cache_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// verifyActionsCacheExists skipped: No GET /{id} operation detected.
function matchAnyActionsCacheAdded() {
  return bp.EventSet("Any ActionsCache Added", function(e) {
      return e.name.startsWith("Done: Create ActionsCache");
  });
}

function getJobForWorkflowRun(enable_debug_logging, job_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id;
  var description = "Get job " + job_id + " for workflow run in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function rerunJobForWorkflowRun(enable_debug_logging, job_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id + "/rerun";
  var description = "Re-run job " + job_id + " for workflow run in repo " + owner + "/" + repo + " with enable_debug_logging " + enable_debug_logging;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enable_debug_logging": enable_debug_logging, "job_id": job_id, "owner": owner, "repo": repo}) });
}

function verifyJobExists(enable_debug_logging, job_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id;
  var description = "Verify Job " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Job found");
}

function verifyJobDoesNotExist(enable_debug_logging, job_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id;
  var description = "Verify Job " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Job not found");
}

function matchAnyJobAdded() {
  return bp.EventSet("Any Job Added", function(e) {
      return e.name.startsWith("Done: Create Job");
  });
}

function downloadJobLogsForWorkflowRun(job_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id + "/logs";
  var description = "Download logs for job " + job_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [302] });
}

function verifyJobLogsExists(job_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id + "/logs";
  var description = "Verify JobLogs " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("JobLogs found");
}

function verifyJobLogsDoesNotExist(job_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id + "/logs";
  var description = "Verify JobLogs " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("JobLogs not found");
}

function matchAnyJobLogsAdded() {
  return bp.EventSet("Any JobLogs Added", function(e) {
      return e.name.startsWith("Done: Create JobLogs");
  });
}

function getCustomOidcSubClaimForRepo(include_claim_keys, owner, repo, use_default) {
  var url = "/repos/" + owner + "/" + repo + "/actions/oidc/customization/sub";
  var description = "Get OIDC subject customization for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function setCustomOidcSubClaimForRepo(include_claim_keys, owner, repo, use_default) {
  var url = "/repos/" + owner + "/" + repo + "/actions/oidc/customization/sub";
  var description = "Set OIDC subject customization for repo " + owner + "/" + repo + " with use_default " + use_default;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"include_claim_keys": include_claim_keys, "owner": owner, "repo": repo, "use_default": use_default}) });
}

function verifyOidcSubCustomizationExists(include_claim_keys, owner, repo, use_default) {
  var url = "/repos/" + owner + "/" + repo + "/actions/oidc/customization/sub";
  var description = "Verify OidcSubCustomization " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OidcSubCustomization found");
}

function verifyOidcSubCustomizationDoesNotExist(include_claim_keys, owner, repo, use_default) {
  var url = "/repos/" + owner + "/" + repo + "/actions/oidc/customization/sub";
  var description = "Verify OidcSubCustomization " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OidcSubCustomization not found");
}

function matchAnyOidcSubCustomizationAdded() {
  return bp.EventSet("Any OidcSubCustomization Added", function(e) {
      return e.name.startsWith("Done: Create OidcSubCustomization");
  });
}

function listRepoOrganizationSecrets(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/organization-secrets";
  var description = "List organization secrets for repo " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyOrganizationSecretsExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationSecretsAdded() {
  return bp.EventSet("Any OrganizationSecrets Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationSecrets");
  });
}

function listRepoOrganizationVariables(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/organization-variables";
  var description = "List organization variables for repo " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyOrganizationVariablesExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationVariablesAdded() {
  return bp.EventSet("Any OrganizationVariables Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationVariables");
  });
}

function getGithubActionsPermissionsRepository(allowed_actions, enabled, owner, repo, sha_pinning_required) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions";
  var description = "Get GitHub Actions permissions for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setGithubActionsPermissionsRepository(allowed_actions, enabled, owner, repo, sha_pinning_required) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions";
  var description = "Set GitHub Actions permissions for repo " + owner + "/" + repo + " with enabled " + enabled;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allowed_actions": allowed_actions, "enabled": enabled, "owner": owner, "repo": repo, "sha_pinning_required": sha_pinning_required}) });
}

function verifyPermissionsExists(allowed_actions, enabled, owner, repo, sha_pinning_required) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions";
  var description = "Verify Permissions " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Permissions found");
}

function verifyPermissionsDoesNotExist(allowed_actions, enabled, owner, repo, sha_pinning_required) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions";
  var description = "Verify Permissions " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Permissions not found");
}

function matchAnyPermissionsAdded() {
  return bp.EventSet("Any Permissions Added", function(e) {
      return e.name.startsWith("Done: Create Permissions");
  });
}

function getWorkflowAccessToRepository(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/access";
  var description = "Get workflow access level for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setWorkflowAccessToRepository(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/access";
  var description = "Set workflow access level for repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo}) });
}

function verifyWorkflowAccessExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/access";
  var description = "Verify WorkflowAccess " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowAccess found");
}

function verifyWorkflowAccessDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/access";
  var description = "Verify WorkflowAccess " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowAccess not found");
}

function matchAnyWorkflowAccessAdded() {
  return bp.EventSet("Any WorkflowAccess Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowAccess");
  });
}

function getActionsPermissionsForkPRWorkflowsPrivateRepos(enabled, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/fork-pr-workflows-private-repos";
  var description = "Get private repo fork PR workflow settings for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function setActionsPermissionsForkPRWorkflowsPrivateRepos(enabled, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/fork-pr-workflows-private-repos";
  var description = "Set private repo fork PR workflow settings for repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enabled": enabled, "owner": owner, "repo": repo}) });
}

function verifyActionsPermissionsForkPRWorkflowsPrivateReposExists(enabled, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/fork-pr-workflows-private-repos";
  var description = "Verify ActionsPermissionsForkPRWorkflowsPrivateRepos " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ActionsPermissionsForkPRWorkflowsPrivateRepos found");
}

function verifyActionsPermissionsForkPRWorkflowsPrivateReposDoesNotExist(enabled, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/fork-pr-workflows-private-repos";
  var description = "Verify ActionsPermissionsForkPRWorkflowsPrivateRepos " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ActionsPermissionsForkPRWorkflowsPrivateRepos not found");
}

function matchAnyActionsPermissionsForkPRWorkflowsPrivateReposAdded() {
  return bp.EventSet("Any ActionsPermissionsForkPRWorkflowsPrivateRepos Added", function(e) {
      return e.name.startsWith("Done: Create ActionsPermissionsForkPRWorkflowsPrivateRepos");
  });
}

function getActionsPermissionsSelectedActions(github_owned_allowed, owner, patterns_allowed, repo, verified_allowed) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/selected-actions";
  var description = "Get allowed actions and reusable workflows for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setActionsPermissionsSelectedActions(github_owned_allowed, owner, patterns_allowed, repo, verified_allowed) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/selected-actions";
  var description = "Set allowed actions and reusable workflows for repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"github_owned_allowed": github_owned_allowed, "owner": owner, "patterns_allowed": patterns_allowed, "repo": repo, "verified_allowed": verified_allowed}) });
}

function verifyActionsPermissionsSelectedActionsExists(github_owned_allowed, owner, patterns_allowed, repo, verified_allowed) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/selected-actions";
  var description = "Verify ActionsPermissionsSelectedActions " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ActionsPermissionsSelectedActions found");
}

function verifyActionsPermissionsSelectedActionsDoesNotExist(github_owned_allowed, owner, patterns_allowed, repo, verified_allowed) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/selected-actions";
  var description = "Verify ActionsPermissionsSelectedActions " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ActionsPermissionsSelectedActions not found");
}

function matchAnyActionsPermissionsSelectedActionsAdded() {
  return bp.EventSet("Any ActionsPermissionsSelectedActions Added", function(e) {
      return e.name.startsWith("Done: Create ActionsPermissionsSelectedActions");
  });
}

function getActionsPermissionsWorkflow(enabled, owner, read, repo, write) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/workflow";
  var description = "Get default workflow permissions for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setActionsPermissionsWorkflow(enabled, owner, read, repo, write) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/workflow";
  var description = "Set default workflow permissions for repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enabled": enabled, "owner": owner, "read": read, "repo": repo, "write": write}) });
}

function verifyActionsPermissionsWorkflowExists(enabled, owner, read, repo, write) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/workflow";
  var description = "Verify ActionsPermissionsWorkflow " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ActionsPermissionsWorkflow found");
}

function verifyActionsPermissionsWorkflowDoesNotExist(enabled, owner, read, repo, write) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions/workflow";
  var description = "Verify ActionsPermissionsWorkflow " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ActionsPermissionsWorkflow not found");
}

function matchAnyActionsPermissionsWorkflowAdded() {
  return bp.EventSet("Any ActionsPermissionsWorkflow Added", function(e) {
      return e.name.startsWith("Done: Create ActionsPermissionsWorkflow");
  });
}

function getSelfHostedRunner(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id;
  var description = "Get self-hosted runner " + runner_id + " for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteSelfHostedRunner(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id;
  var description = "Delete self-hosted runner " + runner_id + " from repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

function verifySelfHostedRunnerExists(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id;
  var description = "Verify SelfHostedRunner " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SelfHostedRunner found");
}

function verifySelfHostedRunnerDoesNotExist(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id;
  var description = "Verify SelfHostedRunner " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SelfHostedRunner not found");
}

function tryToDeleteANonExistingSelfHostedRunner(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id;
  var description = "Verify negative delete for SelfHostedRunner";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedSelfHostedRunner(owner, repo, runner_id) {
  return bp.EventSet("Delete SelfHostedRunner", function(e) {
      return e.name === "Done: " + "Delete self-hosted runner " + runner_id + " from repository " + owner + "/" + repo;
  });
}

function matchAnySelfHostedRunnerAdded() {
  return bp.EventSet("Any SelfHostedRunner Added", function(e) {
      return e.name.startsWith("Done: Create SelfHostedRunner");
  });
}

function listSelfHostedRunnerLabels(labels, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "List labels for self-hosted runner " + runner_id + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function addCustomLabelsToSelfHostedRunner(labels, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Add custom labels to self-hosted runner " + runner_id + " in repository " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"labels": labels, "owner": owner, "repo": repo, "runner_id": runner_id}) });
}

function setCustomLabelsForSelfHostedRunner(labels, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Set custom labels for self-hosted runner " + runner_id + " in repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"labels": labels, "owner": owner, "repo": repo, "runner_id": runner_id}) });
}

function removeAllCustomLabelsFromSelfHostedRunner(labels, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Remove all custom labels from self-hosted runner " + runner_id + " in repository " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Try Add Existing SelfHostedRunnerLabels " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Verify SelfHostedRunnerLabels " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SelfHostedRunnerLabels found");
}

function verifySelfHostedRunnerLabelsDoesNotExist(labels, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Verify SelfHostedRunnerLabels " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SelfHostedRunnerLabels not found");
}

function tryToDeleteANonExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Verify negative delete for SelfHostedRunnerLabels";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedSelfHostedRunnerLabels(labels, owner, repo, runner_id) {
  return bp.EventSet("Delete SelfHostedRunnerLabels", function(e) {
      return e.name === "Done: " + "Remove all custom labels from self-hosted runner " + runner_id + " in repository " + owner + "/" + repo;
  });
}

function waitForSelfHostedRunnerLabelsAdded(labels, owner, repo, runner_id) {
  waitFor(matchSuccess("Add custom labels to self-hosted runner " + runner_id + " in repository " + owner + "/" + repo));
}

function matchAnySelfHostedRunnerLabelsAdded() {
  return bp.EventSet("Any SelfHostedRunnerLabels Added", function(e) {
      return e.name.startsWith("Done: Add custom labels to self-hosted runner ");
  });
}

function generateRunnerJITConfig(id, labels, name, owner, repo, runner_group_id, work_folder) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/generate-jitconfig";
  var description = "Create configuration for just-in-time runner " + name + " in repository " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "labels": labels, "name": name, "owner": owner, "repo": repo, "runner_group_id": runner_group_id, "work_folder": work_folder}) });
}

// verifySelfHostedRunnerJITConfigExists skipped: No GET /{id} operation detected.
function waitForSelfHostedRunnerJITConfigAdded(id, labels, name, owner, repo, runner_group_id, work_folder) {
  waitFor(matchSuccess("Create configuration for just-in-time runner " + name + " in repository " + owner + "/" + repo));
}

function matchAnySelfHostedRunnerJITConfigAdded() {
  return bp.EventSet("Any SelfHostedRunnerJITConfig Added", function(e) {
      return e.name.startsWith("Done: Create configuration for just-in-time runner ");
  });
}

function createRegistrationTokenForRepo(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/registration-token";
  var description = "Create registration token for repository " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "owner": owner, "repo": repo}) });
}

// verifySelfHostedRunnerRegistrationTokenExists skipped: No GET /{id} operation detected.
function waitForSelfHostedRunnerRegistrationTokenAdded(id, owner, repo) {
  waitFor(matchSuccess("Create registration token for repository " + owner + "/" + repo));
}

function matchAnySelfHostedRunnerRegistrationTokenAdded() {
  return bp.EventSet("Any SelfHostedRunnerRegistrationToken Added", function(e) {
      return e.name.startsWith("Done: Create registration token for repository ");
  });
}

function createRemoveTokenForRepo(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/remove-token";
  var description = "Create remove token for repository " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "owner": owner, "repo": repo}) });
}

// verifySelfHostedRunnerRemoveTokenExists skipped: No GET /{id} operation detected.
function waitForSelfHostedRunnerRemoveTokenAdded(id, owner, repo) {
  waitFor(matchSuccess("Create remove token for repository " + owner + "/" + repo));
}

function matchAnySelfHostedRunnerRemoveTokenAdded() {
  return bp.EventSet("Any SelfHostedRunnerRemoveToken Added", function(e) {
      return e.name.startsWith("Done: Create remove token for repository ");
  });
}

function listSelfHostedRunnersForRepo(name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners";
  var description = "List self-hosted runners for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifySelfHostedRunnerListExists(name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners";
  var description = "Verify SelfHostedRunnerList " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SelfHostedRunnerList found");
}

function verifySelfHostedRunnerListDoesNotExist(name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners";
  var description = "Verify SelfHostedRunnerList " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SelfHostedRunnerList not found");
}

function matchAnySelfHostedRunnerListAdded() {
  return bp.EventSet("Any SelfHostedRunnerList Added", function(e) {
      return e.name.startsWith("Done: Create SelfHostedRunnerList");
  });
}

function listRunnerApplicationsForRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/downloads";
  var description = "List runner applications for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyRunnerApplicationsExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/downloads";
  var description = "Verify RunnerApplications " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RunnerApplications found");
}

function verifyRunnerApplicationsDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/downloads";
  var description = "Verify RunnerApplications " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RunnerApplications not found");
}

function matchAnyRunnerApplicationsAdded() {
  return bp.EventSet("Any RunnerApplications Added", function(e) {
      return e.name.startsWith("Done: Create RunnerApplications");
  });
}

function getWorkflowRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id;
  var description = "Get workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteWorkflowRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id;
  var description = "Delete workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function verifyWorkflowRunExists(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id;
  var description = "Verify WorkflowRun " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRun found");
}

function verifyWorkflowRunDoesNotExist(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id;
  var description = "Verify WorkflowRun " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRun not found");
}

function tryToDeleteANonExistingWorkflowRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id;
  var description = "Verify negative delete for WorkflowRun";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedWorkflowRun(owner, repo, run_id) {
  return bp.EventSet("Delete WorkflowRun", function(e) {
      return e.name === "Done: " + "Delete workflow run " + run_id + " in repo " + owner + "/" + repo;
  });
}

function matchAnyWorkflowRunAdded() {
  return bp.EventSet("Any WorkflowRun Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRun");
  });
}

function getWorkflowRunApprovals(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/approvals";
  var description = "Get review history for workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function approveWorkflowRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/approve";
  var description = "Approve workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo, "run_id": run_id}) });
}

function tryToAddExistingWorkflowRunApproval(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/approve";
  var description = "Try Add Existing WorkflowRunApproval " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyWorkflowRunApprovalExists(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/approvals";
  var description = "Verify WorkflowRunApproval " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunApproval found");
}

function verifyWorkflowRunApprovalDoesNotExist(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/approvals";
  var description = "Verify WorkflowRunApproval " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunApproval not found");
}

function waitForWorkflowRunApprovalAdded(owner, repo, run_id) {
  waitFor(matchSuccess("Approve workflow run " + run_id + " in repo " + owner + "/" + repo));
}

function matchAnyWorkflowRunApprovalAdded() {
  return bp.EventSet("Any WorkflowRunApproval Added", function(e) {
      return e.name.startsWith("Done: Approve workflow run ");
  });
}

function listWorkflowRunArtifacts(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/artifacts";
  var description = "List artifacts for workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyWorkflowRunArtifactExists(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/artifacts";
  var description = "Verify WorkflowRunArtifact " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunArtifact found");
}

function verifyWorkflowRunArtifactDoesNotExist(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/artifacts";
  var description = "Verify WorkflowRunArtifact " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunArtifact not found");
}

function matchAnyWorkflowRunArtifactAdded() {
  return bp.EventSet("Any WorkflowRunArtifact Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRunArtifact");
  });
}

function getWorkflowRunAttempt(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number;
  var description = "Get attempt " + attempt_number + " for workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyWorkflowRunAttemptExists(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number;
  var description = "Verify WorkflowRunAttempt " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunAttempt found");
}

function verifyWorkflowRunAttemptDoesNotExist(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number;
  var description = "Verify WorkflowRunAttempt " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunAttempt not found");
}

function matchAnyWorkflowRunAttemptAdded() {
  return bp.EventSet("Any WorkflowRunAttempt Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRunAttempt");
  });
}

function listJobsForWorkflowRunAttempt(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number + "/jobs";
  var description = "List jobs for attempt " + attempt_number + " of workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyWorkflowRunAttemptJobExists(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number + "/jobs";
  var description = "Verify WorkflowRunAttemptJob " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunAttemptJob found");
}

function verifyWorkflowRunAttemptJobDoesNotExist(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number + "/jobs";
  var description = "Verify WorkflowRunAttemptJob " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunAttemptJob not found");
}

function matchAnyWorkflowRunAttemptJobAdded() {
  return bp.EventSet("Any WorkflowRunAttemptJob Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRunAttemptJob");
  });
}

function downloadWorkflowRunAttemptLogs(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number + "/logs";
  var description = "Download logs for attempt " + attempt_number + " of workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [302] });
}

function verifyWorkflowRunAttemptLogExists(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number + "/logs";
  var description = "Verify WorkflowRunAttemptLog " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunAttemptLog found");
}

function verifyWorkflowRunAttemptLogDoesNotExist(attempt_number, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number + "/logs";
  var description = "Verify WorkflowRunAttemptLog " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunAttemptLog not found");
}

function matchAnyWorkflowRunAttemptLogAdded() {
  return bp.EventSet("Any WorkflowRunAttemptLog Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRunAttemptLog");
  });
}

function cancelWorkflowRun(id, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/cancel";
  var description = "Cancel workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "owner": owner, "repo": repo, "run_id": run_id}) });
}

// verifyWorkflowRunCancelExists skipped: No GET /{id} operation detected.
function waitForWorkflowRunCancelAdded(id, owner, repo, run_id) {
  waitFor(matchSuccess("Cancel workflow run " + run_id + " in repo " + owner + "/" + repo));
}

function matchAnyWorkflowRunCancelAdded() {
  return bp.EventSet("Any WorkflowRunCancel Added", function(e) {
      return e.name.startsWith("Done: Cancel workflow run ");
  });
}

function listWorkflowRunsForRepo(actor, created, event, exclude_pull_requests, owner, page, per_page, repo, workflow_run_branch, workflow_run_check_suite_id, workflow_run_head_sha, workflow_run_status) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs";
  var description = "List workflow runs for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyWorkflowRunListExists(actor, created, event, exclude_pull_requests, owner, page, per_page, repo, workflow_run_branch, workflow_run_check_suite_id, workflow_run_head_sha, workflow_run_status) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs";
  var description = "Verify WorkflowRunList " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunList found");
}

function verifyWorkflowRunListDoesNotExist(actor, created, event, exclude_pull_requests, owner, page, per_page, repo, workflow_run_branch, workflow_run_check_suite_id, workflow_run_head_sha, workflow_run_status) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs";
  var description = "Verify WorkflowRunList " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunList not found");
}

function matchAnyWorkflowRunListAdded() {
  return bp.EventSet("Any WorkflowRunList Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRunList");
  });
}

function forceCancelWorkflowRun(id, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/force-cancel";
  var description = "Force cancel workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "owner": owner, "repo": repo, "run_id": run_id}) });
}

// verifyWorkflowRunForceCancelExists skipped: No GET /{id} operation detected.
function waitForWorkflowRunForceCancelAdded(id, owner, repo, run_id) {
  waitFor(matchSuccess("Force cancel workflow run " + run_id + " in repo " + owner + "/" + repo));
}

function matchAnyWorkflowRunForceCancelAdded() {
  return bp.EventSet("Any WorkflowRunForceCancel Added", function(e) {
      return e.name.startsWith("Done: Force cancel workflow run ");
  });
}

function listJobsForWorkflowRun(filter, owner, page, per_page, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/jobs";
  var description = "List jobs for workflow run " + run_id + " in repo " + owner + "/" + repo + " filtered by " + filter;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyWorkflowRunJobsExists(filter, owner, page, per_page, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/jobs";
  var description = "Verify WorkflowRunJobs " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunJobs found");
}

function verifyWorkflowRunJobsDoesNotExist(filter, owner, page, per_page, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/jobs";
  var description = "Verify WorkflowRunJobs " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunJobs not found");
}

function matchAnyWorkflowRunJobsAdded() {
  return bp.EventSet("Any WorkflowRunJobs Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRunJobs");
  });
}

function downloadWorkflowRunLogs(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/logs";
  var description = "Download logs for workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [302] });
}

function deleteWorkflowRunLogs(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/logs";
  var description = "Delete logs for workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 500] });
}

function verifyWorkflowRunLogsExists(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/logs";
  var description = "Verify WorkflowRunLogs " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunLogs found");
}

function verifyWorkflowRunLogsDoesNotExist(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/logs";
  var description = "Verify WorkflowRunLogs " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunLogs not found");
}

function tryToDeleteANonExistingWorkflowRunLogs(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/logs";
  var description = "Verify negative delete for WorkflowRunLogs";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedWorkflowRunLogs(owner, repo, run_id) {
  return bp.EventSet("Delete WorkflowRunLogs", function(e) {
      return e.name === "Done: " + "Delete logs for workflow run " + run_id + " in repo " + owner + "/" + repo;
  });
}

function matchAnyWorkflowRunLogsAdded() {
  return bp.EventSet("Any WorkflowRunLogs Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRunLogs");
  });
}

function getPendingDeploymentsForRun(comment, environment_ids, owner, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/pending_deployments";
  var description = "Get pending deployments for workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function reviewPendingDeploymentsForRun(comment, environment_ids, owner, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/pending_deployments";
  var description = "Review pending deployments for workflow run " + run_id + " in repo " + owner + "/" + repo + " with state " + state;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"comment": comment, "environment_ids": environment_ids, "owner": owner, "repo": repo, "run_id": run_id, "state": state}) });
}

function tryToAddExistingPendingDeployment(comment, environment_ids, owner, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/pending_deployments";
  var description = "Try Add Existing PendingDeployment " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPendingDeploymentExists(comment, environment_ids, owner, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/pending_deployments";
  var description = "Verify PendingDeployment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PendingDeployment found");
}

function verifyPendingDeploymentDoesNotExist(comment, environment_ids, owner, repo, run_id, state) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/pending_deployments";
  var description = "Verify PendingDeployment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PendingDeployment not found");
}

function waitForPendingDeploymentAdded(comment, environment_ids, owner, repo, run_id, state) {
  waitFor(matchSuccess("Review pending deployments for workflow run " + run_id + " in repo " + owner + "/" + repo + " with state " + state));
}

function matchAnyPendingDeploymentAdded() {
  return bp.EventSet("Any PendingDeployment Added", function(e) {
      return e.name.startsWith("Done: Review pending deployments for workflow run ");
  });
}

function reRunWorkflow(enable_debug_logging, id, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/rerun";
  var description = "Re-run workflow run " + run_id + " in repo " + owner + "/" + repo + " with debug logging " + enable_debug_logging;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enable_debug_logging": enable_debug_logging, "id": id, "owner": owner, "repo": repo, "run_id": run_id}) });
}

// verifyWorkflowRunRerunExists skipped: No GET /{id} operation detected.
function waitForWorkflowRunRerunAdded(enable_debug_logging, id, owner, repo, run_id) {
  waitFor(matchSuccess("Re-run workflow run " + run_id + " in repo " + owner + "/" + repo + " with debug logging " + enable_debug_logging));
}

function matchAnyWorkflowRunRerunAdded() {
  return bp.EventSet("Any WorkflowRunRerun Added", function(e) {
      return e.name.startsWith("Done: Re-run workflow run ");
  });
}

function reRunWorkflowFailedJobs(enable_debug_logging, id, owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/rerun-failed-jobs";
  var description = "Re-run failed jobs for workflow run " + run_id + " in repo " + owner + "/" + repo + " with debug logging " + enable_debug_logging;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enable_debug_logging": enable_debug_logging, "id": id, "owner": owner, "repo": repo, "run_id": run_id}) });
}

// verifyWorkflowRunRerunFailedJobsExists skipped: No GET /{id} operation detected.
function waitForWorkflowRunRerunFailedJobsAdded(enable_debug_logging, id, owner, repo, run_id) {
  waitFor(matchSuccess("Re-run failed jobs for workflow run " + run_id + " in repo " + owner + "/" + repo + " with debug logging " + enable_debug_logging));
}

function matchAnyWorkflowRunRerunFailedJobsAdded() {
  return bp.EventSet("Any WorkflowRunRerunFailedJobs Added", function(e) {
      return e.name.startsWith("Done: Re-run failed jobs for workflow run ");
  });
}

function getWorkflowRunUsage(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/timing";
  var description = "Get usage timing for workflow run " + run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyWorkflowRunTimingExists(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/timing";
  var description = "Verify WorkflowRunTiming " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WorkflowRunTiming found");
}

function verifyWorkflowRunTimingDoesNotExist(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/timing";
  var description = "Verify WorkflowRunTiming " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WorkflowRunTiming not found");
}

function matchAnyWorkflowRunTimingAdded() {
  return bp.EventSet("Any WorkflowRunTiming Added", function(e) {
      return e.name.startsWith("Done: Create WorkflowRunTiming");
  });
}

function listRepoSecrets(owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets";
  var description = "List secrets for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyRepositorySecretExists(owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets";
  var description = "Verify RepositorySecret " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositorySecret found");
}

function verifyRepositorySecretDoesNotExist(owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets";
  var description = "Verify RepositorySecret " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositorySecret not found");
}

function matchAnyRepositorySecretAdded() {
  return bp.EventSet("Any RepositorySecret Added", function(e) {
      return e.name.startsWith("Done: Create RepositorySecret");
  });
}

function getRepoPublicKey(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/public-key";
  var description = "Get public key for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyRepositoryPublicKeyExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/public-key";
  var description = "Verify RepositoryPublicKey " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryPublicKey found");
}

function verifyRepositoryPublicKeyDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/public-key";
  var description = "Verify RepositoryPublicKey " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryPublicKey not found");
}

function matchAnyRepositoryPublicKeyAdded() {
  return bp.EventSet("Any RepositoryPublicKey Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryPublicKey");
  });
}

function getRepoSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Get repository secret " + secret_name + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrUpdateRepoSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Create or update repository secret " + secret_name + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "key_id": key_id, "owner": owner, "repo": repo, "secret_name": secret_name}) });
}

function deleteRepoSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Delete repository secret " + secret_name + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingRepoSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Try Add Existing RepoSecret " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepoSecretExists(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Verify RepoSecret " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepoSecret found");
}

function verifyRepoSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Verify RepoSecret " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepoSecret not found");
}

function tryToDeleteANonExistingRepoSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Verify negative delete for RepoSecret";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepoSecret(encrypted_value, key_id, owner, repo, secret_name) {
  return bp.EventSet("Delete RepoSecret", function(e) {
      return e.name === "Done: " + "Delete repository secret " + secret_name + " in repo " + owner + "/" + repo;
  });
}

function waitForRepoSecretAdded(encrypted_value, key_id, owner, repo, secret_name) {
  waitFor(matchSuccess("Create or update repository secret " + secret_name + " in repo " + owner + "/" + repo));
}

function matchAnyRepoSecretAdded() {
  return bp.EventSet("Any RepoSecret Added", function(e) {
      return e.name.startsWith("Done: Create or update repository secret ");
  });
}

function createRepoVariable(name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables";
  var description = "Create repository variable " + name + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "owner": owner, "repo": repo, "value": value}) });
}

function getRepoVariable(name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Get repository variable " + name + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateRepoVariable(name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Update repository variable " + name + " in repo " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "owner": owner, "repo": repo, "value": value}) });
}

function deleteRepoVariable(name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Delete repository variable " + name + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingRepoVariable(name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables";
  var description = "Try Add Existing RepoVariable " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepoVariableExists(name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Verify RepoVariable " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepoVariable found");
}

function verifyRepoVariableDoesNotExist(name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Verify RepoVariable " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepoVariable not found");
}

function tryToDeleteANonExistingRepoVariable(name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Verify negative delete for RepoVariable";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepoVariable(name, owner, repo, value) {
  return bp.EventSet("Delete RepoVariable", function(e) {
      return e.name === "Done: " + "Delete repository variable " + name + " in repo " + owner + "/" + repo;
  });
}

function waitForRepoVariableAdded(name, owner, repo, value) {
  waitFor(matchSuccess("Create repository variable " + name + " in repo " + owner + "/" + repo));
}

function matchAnyRepoVariableAdded() {
  return bp.EventSet("Any RepoVariable Added", function(e) {
      return e.name.startsWith("Done: Create repository variable ");
  });
}

function createWorkflowDispatch(id, inputs, owner, ref, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id + "/dispatches";
  var description = "Create workflow dispatch for workflow " + workflow_id + " in repo " + owner + "/" + repo + " with ref " + ref;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "inputs": inputs, "owner": owner, "ref": ref, "repo": repo, "workflow_id": workflow_id}) });
}

// verifyWorkflowDispatchExists skipped: No GET /{id} operation detected.
function waitForWorkflowDispatchAdded(id, inputs, owner, ref, repo, workflow_id) {
  waitFor(matchSuccess("Create workflow dispatch for workflow " + workflow_id + " in repo " + owner + "/" + repo + " with ref " + ref));
}

function matchAnyWorkflowDispatchAdded() {
  return bp.EventSet("Any WorkflowDispatch Added", function(e) {
      return e.name.startsWith("Done: Create workflow dispatch for workflow ");
  });
}

function getWorkflow(owner, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id;
  var description = "Get workflow " + workflow_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function disableWorkflow(owner, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id + "/disable";
  var description = "Disable workflow " + workflow_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo, "workflow_id": workflow_id}) });
}

function enableWorkflow(owner, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id + "/enable";
  var description = "Enable workflow " + workflow_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo, "workflow_id": workflow_id}) });
}

function verifyWorkflowExists(owner, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id;
  var description = "Verify Workflow " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Workflow found");
}

function verifyWorkflowDoesNotExist(owner, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id;
  var description = "Verify Workflow " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Workflow not found");
}

function matchAnyWorkflowAdded() {
  return bp.EventSet("Any Workflow Added", function(e) {
      return e.name.startsWith("Done: Create Workflow");
  });
}

function getEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/secrets/" + secret_name;
  var description = "Get environment secret " + secret_name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/secrets/" + secret_name;
  var description = "Create or update environment secret " + secret_name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "environment_name": environment_name, "key_id": key_id, "owner": owner, "repo": repo, "secret_name": secret_name}) });
}

function deleteEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/secrets/" + secret_name;
  var description = "Delete environment secret " + secret_name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/secrets/" + secret_name;
  var description = "Try Add Existing EnvironmentSecret " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/secrets/" + secret_name;
  var description = "Verify EnvironmentSecret " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("EnvironmentSecret found");
}

function verifyEnvironmentSecretDoesNotExist(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/secrets/" + secret_name;
  var description = "Verify EnvironmentSecret " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("EnvironmentSecret not found");
}

function tryToDeleteANonExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/secrets/" + secret_name;
  var description = "Verify negative delete for EnvironmentSecret";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  return bp.EventSet("Delete EnvironmentSecret", function(e) {
      return e.name === "Done: " + "Delete environment secret " + secret_name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  });
}

function waitForEnvironmentSecretAdded(encrypted_value, environment_name, key_id, owner, repo, secret_name) {
  waitFor(matchSuccess("Create or update environment secret " + secret_name + " in environment " + environment_name + " of repo " + owner + "/" + repo));
}

function matchAnyEnvironmentSecretAdded() {
  return bp.EventSet("Any EnvironmentSecret Added", function(e) {
      return e.name.startsWith("Done: Create or update environment secret ");
  });
}

function getEnvironmentVariable(environment_name, name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/variables/" + name;
  var description = "Get environment variable " + name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createEnvironmentVariable(environment_name, name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/variables";
  var description = "Create environment variable " + name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"environment_name": environment_name, "name": name, "owner": owner, "repo": repo, "value": value}) });
}

function updateEnvironmentVariable(environment_name, name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/variables/" + name;
  var description = "Update environment variable " + name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"environment_name": environment_name, "name": name, "owner": owner, "repo": repo, "value": value}) });
}

function deleteEnvironmentVariable(environment_name, name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/variables/" + name;
  var description = "Delete environment variable " + name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingEnvironmentVariable(environment_name, name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/variables";
  var description = "Try Add Existing EnvironmentVariable " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyEnvironmentVariableExists(environment_name, name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/variables/" + name;
  var description = "Verify EnvironmentVariable " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("EnvironmentVariable found");
}

function verifyEnvironmentVariableDoesNotExist(environment_name, name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/variables/" + name;
  var description = "Verify EnvironmentVariable " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("EnvironmentVariable not found");
}

function tryToDeleteANonExistingEnvironmentVariable(environment_name, name, owner, repo, value) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/variables/" + name;
  var description = "Verify negative delete for EnvironmentVariable";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedEnvironmentVariable(environment_name, name, owner, repo, value) {
  return bp.EventSet("Delete EnvironmentVariable", function(e) {
      return e.name === "Done: " + "Delete environment variable " + name + " in environment " + environment_name + " of repo " + owner + "/" + repo;
  });
}

function waitForEnvironmentVariableAdded(environment_name, name, owner, repo, value) {
  waitFor(matchSuccess("Create environment variable " + name + " in environment " + environment_name + " of repo " + owner + "/" + repo));
}

function matchAnyEnvironmentVariableAdded() {
  return bp.EventSet("Any EnvironmentVariable Added", function(e) {
      return e.name.startsWith("Done: Create environment variable ");
  });
}

function getOrganization(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  var url = "/orgs/" + org;
  var description = "Get organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateOrganization(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  var url = "/orgs/" + org;
  var description = "Update organization " + org + " with billing_email " + billing_email + ", company " + company + ", email " + email + ", twitter_username " + twitter_username + ", location " + location + ", name " + name + ", description " + description + ", has_organization_projects " + has_organization_projects + ", has_repository_projects " + has_repository_projects + ", default_repository_permission " + default_repository_permission + ", members_can_create_repositories " + members_can_create_repositories + ", members_can_create_internal_repositories " + members_can_create_internal_repositories + ", members_can_create_private_repositories " + members_can_create_private_repositories + ", members_can_create_public_repositories " + members_can_create_public_repositories + ", members_allowed_repository_creation_type " + members_allowed_repository_creation_type + ", members_can_create_pages " + members_can_create_pages + ", members_can_create_public_pages " + members_can_create_public_pages + ", members_can_create_private_pages " + members_can_create_private_pages + ", members_can_fork_private_repositories " + members_can_fork_private_repositories + ", web_commit_signoff_required " + web_commit_signoff_required + ", blog " + blog + ", secret_scanning_push_protection_custom_link_enabled " + secret_scanning_push_protection_custom_link_enabled + ", secret_scanning_push_protection_custom_link " + secret_scanning_push_protection_custom_link + ", deploy_keys_enabled_for_repositories " + deploy_keys_enabled_for_repositories;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"billing_email": billing_email, "blog": blog, "company": company, "default_repository_permission": default_repository_permission, "deploy_keys_enabled_for_repositories": deploy_keys_enabled_for_repositories, "description": description, "email": email, "has_organization_projects": has_organization_projects, "has_repository_projects": has_repository_projects, "location": location, "members_allowed_repository_creation_type": members_allowed_repository_creation_type, "members_can_create_internal_repositories": members_can_create_internal_repositories, "members_can_create_pages": members_can_create_pages, "members_can_create_private_pages": members_can_create_private_pages, "members_can_create_private_repositories": members_can_create_private_repositories, "members_can_create_public_pages": members_can_create_public_pages, "members_can_create_public_repositories": members_can_create_public_repositories, "members_can_create_repositories": members_can_create_repositories, "members_can_fork_private_repositories": members_can_fork_private_repositories, "name": name, "org": org, "secret_scanning_push_protection_custom_link": secret_scanning_push_protection_custom_link, "secret_scanning_push_protection_custom_link_enabled": secret_scanning_push_protection_custom_link_enabled, "twitter_username": twitter_username, "username": username, "web_commit_signoff_required": web_commit_signoff_required}) });
}

function deleteOrganization(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  var url = "/orgs/" + org;
  var description = "Delete organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [202, 204, 403, 404] });
}

function listOrganizationsForUser(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  var url = "/users/" + username + "/orgs";
  var description = "List organizations for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function listOrganizationsForAuthenticatedUser(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  var url = "/user/orgs";
  var description = "List organizations for authenticated user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function verifyOrganizationExists(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  var url = "/orgs/" + org;
  var description = "Verify Organization " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Organization found");
}

function verifyOrganizationDoesNotExist(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  var url = "/orgs/" + org;
  var description = "Verify Organization " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Organization not found");
}

function tryToDeleteANonExistingOrganization(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  var url = "/orgs/" + org;
  var description = "Verify negative delete for Organization";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrganization(billing_email, blog, company, default_repository_permission, deploy_keys_enabled_for_repositories, description, email, has_organization_projects, has_repository_projects, location, members_allowed_repository_creation_type, members_can_create_internal_repositories, members_can_create_pages, members_can_create_private_pages, members_can_create_private_repositories, members_can_create_public_pages, members_can_create_public_repositories, members_can_create_repositories, members_can_fork_private_repositories, name, org, secret_scanning_push_protection_custom_link, secret_scanning_push_protection_custom_link_enabled, twitter_username, username, web_commit_signoff_required) {
  return bp.EventSet("Delete Organization", function(e) {
      return e.name === "Done: " + "Delete organization " + org;
  });
}

function matchAnyOrganizationAdded() {
  return bp.EventSet("Any Organization Added", function(e) {
      return e.name.startsWith("Done: Create Organization");
  });
}

function createArtifactStorageRecord(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest) {
  var url = "/orgs/" + org + "/artifacts/metadata/storage-record";
  var description = "Create artifact storage record " + name + " with digest " + digest + " in registry " + registry_url + " " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"artifact_url": artifact_url, "digest": digest, "name": name, "org": org, "path": path, "registry_url": registry_url, "repository": repository, "status": status, "subject_digest": subject_digest}) });
}

function listArtifactStorageRecords(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest) {
  var url = "/orgs/" + org + "/artifacts/" + subject_digest + "/metadata/storage-records";
  var description = "List artifact storage records for subject digest " + subject_digest + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingArtifactStorageRecord(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest) {
  var url = "/orgs/" + org + "/artifacts/metadata/storage-record";
  var description = "Try Add Existing ArtifactStorageRecord " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyArtifactStorageRecordExists(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest) {
  var url = "/orgs/" + org + "/artifacts/" + subject_digest + "/metadata/storage-records";
  var description = "Verify ArtifactStorageRecord " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ArtifactStorageRecord found");
}

function verifyArtifactStorageRecordDoesNotExist(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest) {
  var url = "/orgs/" + org + "/artifacts/" + subject_digest + "/metadata/storage-records";
  var description = "Verify ArtifactStorageRecord " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ArtifactStorageRecord not found");
}

function waitForArtifactStorageRecordAdded(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest) {
  waitFor(matchSuccess("Create artifact storage record " + name + " with digest " + digest + " in registry " + registry_url));
}

function matchAnyArtifactStorageRecordAdded() {
  return bp.EventSet("Any ArtifactStorageRecord Added", function(e) {
      return e.name.startsWith("Done: Create artifact storage record ");
  });
}

function listBlockedUsers(id, org) {
  var url = "/orgs/" + org + "/blocks";
  var description = "List users blocked by organization " + org + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyBlockedUserExists skipped: No GET /{id} operation detected.
function matchAnyBlockedUserAdded() {
  return bp.EventSet("Any BlockedUser Added", function(e) {
      return e.name.startsWith("Done: Create BlockedUser");
  });
}

function getBlock(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Check if user " + username + " is blocked by organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function blockUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Block user " + username + " from organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "username": username}) });
}

function unblockUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Unblock user " + username + " from organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingBlock(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Try Add Existing Block " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBlockExists(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify Block " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Block found");
}

function verifyBlockDoesNotExist(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify Block " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Block not found");
}

function tryToDeleteANonExistingBlock(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify negative delete for Block";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBlock(org, username) {
  return bp.EventSet("Delete Block", function(e) {
      return e.name === "Done: " + "Unblock user " + username + " from organization " + org;
  });
}

function waitForBlockAdded(org, username) {
  waitFor(matchSuccess("Block user " + username + " from organization " + org));
}

function matchAnyBlockAdded() {
  return bp.EventSet("Any Block Added", function(e) {
      return e.name.startsWith("Done: Block user ");
  });
}

function getSubjectStats(actor_id, actor_type, id, org, user_id) {
  var url = "/orgs/" + org + "/insights/api/subject-stats";
  var description = "Get subject stats for org " + org + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getSummaryStats(actor_id, actor_type, id, org, user_id) {
  var url = "/orgs/" + org + "/insights/api/summary-stats";
  var description = "Get summary stats for org " + org + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getSummaryStatsByUser(actor_id, actor_type, id, org, user_id) {
  var url = "/orgs/" + org + "/insights/api/summary-stats/users/" + user_id;
  var description = "Get summary stats for org " + org + " by user " + user_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getSummaryStatsByActor(actor_id, actor_type, id, org, user_id) {
  var url = "/orgs/" + org + "/insights/api/summary-stats/" + actor_type + "/" + actor_id;
  var description = "Get summary stats for org " + org + " by actor " + actor_type + " " + actor_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getTimeStats(actor_id, actor_type, id, org, user_id) {
  var url = "/orgs/" + org + "/insights/api/time-stats";
  var description = "Get time stats for org " + org + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getTimeStatsByUser(actor_id, actor_type, id, org, user_id) {
  var url = "/orgs/" + org + "/insights/api/time-stats/users/" + user_id;
  var description = "Get time stats for org " + org + " by user " + user_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getTimeStatsByActor(actor_id, actor_type, id, org, user_id) {
  var url = "/orgs/" + org + "/insights/api/time-stats/" + actor_type + "/" + actor_id;
  var description = "Get time stats for org " + org + " by actor " + actor_type + " " + actor_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getUserStats(actor_id, actor_type, id, org, user_id) {
  var url = "/orgs/" + org + "/insights/api/user-stats/" + user_id;
  var description = "Get user stats for org " + org + " user " + user_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyOrgInsightsExists skipped: No GET /{id} operation detected.
function matchAnyOrgInsightsAdded() {
  return bp.EventSet("Any OrgInsights Added", function(e) {
      return e.name.startsWith("Done: Create OrgInsights");
  });
}

function listOrgInstallations(org) {
  var url = "/orgs/" + org + "/installations";
  var description = "List app installations for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getOrgInstallation(org) {
  var url = "/orgs/" + org + "/installation";
  var description = "Get organization installation for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyOrgInstallationExists(org) {
  var url = "/orgs/" + org + "/installation";
  var description = "Verify OrgInstallation " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgInstallation found");
}

function verifyOrgInstallationDoesNotExist(org) {
  var url = "/orgs/" + org + "/installation";
  var description = "Verify OrgInstallation " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgInstallation not found");
}

function matchAnyOrgInstallationAdded() {
  return bp.EventSet("Any OrgInstallation Added", function(e) {
      return e.name.startsWith("Done: Create OrgInstallation");
  });
}

function listPendingInvitations(email, id, invitee_id, org, role, team_ids) {
  var url = "/orgs/" + org + "/invitations";
  var description = "List pending invitations for org " + org + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function createInvitation(email, id, invitee_id, org, role, team_ids) {
  var url = "/orgs/" + org + "/invitations";
  var description = "Create invitation for org " + org + " with invitee_id " + invitee_id + " and email " + email;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"email": email, "id": id, "invitee_id": invitee_id, "org": org, "role": role, "team_ids": team_ids}) });
}

// verifyOrgInvitationExists skipped: No GET /{id} operation detected.
function waitForOrgInvitationAdded(email, id, invitee_id, org, role, team_ids) {
  waitFor(matchSuccess("Create invitation for org " + org + " with invitee_id " + invitee_id + " and email " + email));
}

function matchAnyOrgInvitationAdded() {
  return bp.EventSet("Any OrgInvitation Added", function(e) {
      return e.name.startsWith("Done: Create invitation for org ");
  });
}

function createIssueType(color, description, is_enabled, issue_type_id, name, org) {
  var url = "/orgs/" + org + "/issue-types";
  var description = "Create issue type " + name + " in organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "description": description, "is_enabled": is_enabled, "issue_type_id": issue_type_id, "name": name, "org": org}) });
}

function updateIssueType(color, description, is_enabled, issue_type_id, name, org) {
  var url = "/orgs/" + org + "/issue-types/" + issue_type_id;
  var description = "Update issue type " + issue_type_id + " in organization " + org + " with name " + name;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "description": description, "is_enabled": is_enabled, "issue_type_id": issue_type_id, "name": name, "org": org}) });
}

function deleteIssueType(color, description, is_enabled, issue_type_id, name, org) {
  var url = "/orgs/" + org + "/issue-types/" + issue_type_id;
  var description = "Delete issue type " + issue_type_id + " in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function listIssueTypes(color, description, is_enabled, issue_type_id, name, org) {
  var url = "/orgs/" + org + "/issue-types";
  var description = "List issue types in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function tryToAddExistingIssueType(color, description, is_enabled, issue_type_id, name, org) {
  var url = "/orgs/" + org + "/issue-types";
  var description = "Try Add Existing IssueType " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org) {
  var url = "/orgs/" + org + "/issue-types";
  var description = "Verify IssueType " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueType found");
}

function verifyIssueTypeDoesNotExist(color, description, is_enabled, issue_type_id, name, org) {
  var url = "/orgs/" + org + "/issue-types";
  var description = "Verify IssueType " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueType not found");
}

function tryToDeleteANonExistingIssueType(color, description, is_enabled, issue_type_id, name, org) {
  var url = "/orgs/" + org + "/issue-types/" + issue_type_id;
  var description = "Verify negative delete for IssueType";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueType(color, description, is_enabled, issue_type_id, name, org) {
  return bp.EventSet("Delete IssueType", function(e) {
      return e.name === "Done: " + "Delete issue type " + issue_type_id + " in organization " + org;
  });
}

function waitForIssueTypeAdded(color, description, is_enabled, issue_type_id, name, org) {
  waitFor(matchSuccess("Create issue type " + name + " in organization " + org));
}

function matchAnyIssueTypeAdded() {
  return bp.EventSet("Any IssueType Added", function(e) {
      return e.name.startsWith("Done: Create issue type ");
  });
}

function checkMembershipForUser(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Check membership of user " + username + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 302, 404] });
}

function removeMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Remove member " + username + " from organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403] });
}

function listMembers(org, username) {
  var url = "/orgs/" + org + "/members";
  var description = "List members in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 422] });
}

function verifyMemberExists(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Verify Member " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Member found");
}

function verifyMemberDoesNotExist(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Verify Member " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Member not found");
}

function tryToDeleteANonExistingMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Verify negative delete for Member";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMember(org, username) {
  return bp.EventSet("Delete Member", function(e) {
      return e.name === "Done: " + "Remove member " + username + " from organization " + org;
  });
}

function matchAnyMemberAdded() {
  return bp.EventSet("Any Member Added", function(e) {
      return e.name.startsWith("Done: Create Member");
  });
}

function getMembershipForUser(org, role, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Get membership for user " + username + " in team " + team_slug + " org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function addOrUpdateMembership(org, role, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Add or update membership for user " + username + " in team " + team_slug + " org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "role": role, "team_slug": team_slug, "username": username}) });
}

function removeMembershipForUser(org, role, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Remove membership for user " + username + " in team " + team_slug + " org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403] });
}

function tryToAddExistingMembership(org, role, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Try Add Existing Membership " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembershipExists(org, role, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Verify Membership " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Membership found");
}

function verifyMembershipDoesNotExist(org, role, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Verify Membership " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Membership not found");
}

function tryToDeleteANonExistingMembership(org, role, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Verify negative delete for Membership";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembership(org, role, team_slug, username) {
  return bp.EventSet("Delete Membership", function(e) {
      return e.name === "Done: " + "Remove membership for user " + username + " in team " + team_slug + " org " + org;
  });
}

function waitForMembershipAdded(org, role, team_slug, username) {
  waitFor(matchSuccess("Add or update membership for user " + username + " in team " + team_slug + " org " + org));
}

function matchAnyMembershipAdded() {
  return bp.EventSet("Any Membership Added", function(e) {
      return e.name.startsWith("Done: Add or update membership for user ");
  });
}

function listOrganizationRoles(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles";
  var description = "List organization roles in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

function revokeAllOrgRolesForTeam(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/teams/" + team_slug;
  var description = "Remove all organization roles for team " + team_slug + " in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function assignTeamToOrgRole(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/teams/" + team_slug + "/" + role_id;
  var description = "Assign role " + role_id + " to team " + team_slug + " in organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "role_id": role_id, "team_slug": team_slug}) });
}

function revokeOrgRoleFromTeam(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/teams/" + team_slug + "/" + role_id;
  var description = "Remove role " + role_id + " from team " + team_slug + " in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function getOrganizationRole(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id;
  var description = "Get organization role " + role_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

function tryToAddExistingOrganizationRole(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/teams/" + team_slug + "/" + role_id;
  var description = "Try Add Existing OrganizationRole " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrganizationRoleExists(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id;
  var description = "Verify OrganizationRole " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationRole found");
}

function verifyOrganizationRoleDoesNotExist(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id;
  var description = "Verify OrganizationRole " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationRole not found");
}

function tryToDeleteANonExistingOrganizationRole(org, role_id, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/teams/" + team_slug + "/" + role_id;
  var description = "Verify negative delete for OrganizationRole";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrganizationRole(org, role_id, team_slug) {
  return bp.EventSet("Delete OrganizationRole", function(e) {
      return e.name === "Done: " + "Remove role " + role_id + " from team " + team_slug + " in organization " + org;
  });
}

function waitForOrganizationRoleAdded(org, role_id, team_slug) {
  waitFor(matchSuccess("Assign role " + role_id + " to team " + team_slug + " in organization " + org));
}

function matchAnyOrganizationRoleAdded() {
  return bp.EventSet("Any OrganizationRole Added", function(e) {
      return e.name.startsWith("Done: Assign role ");
  });
}

function assignUserToOrganizationRole(org, role_id, username) {
  var url = "/orgs/" + org + "/organization-roles/users/" + username + "/" + role_id;
  var description = "Assign organization role " + role_id + " to user " + username + " in org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "role_id": role_id, "username": username}) });
}

function removeUserFromOrganizationRole(org, role_id, username) {
  var url = "/orgs/" + org + "/organization-roles/users/" + username + "/" + role_id;
  var description = "Remove organization role " + role_id + " from user " + username + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// verifyOrganizationRoleUserExists skipped: No GET /{id} operation detected.
function waitForOrganizationRoleUserAdded(org, role_id, username) {
  waitFor(matchSuccess("Assign organization role " + role_id + " to user " + username + " in org " + org));
}

function matchAnyOrganizationRoleUserAdded() {
  return bp.EventSet("Any OrganizationRoleUser Added", function(e) {
      return e.name.startsWith("Done: Assign organization role ");
  });
}

function revokeAllOrganizationRolesForUser(org, username) {
  var url = "/orgs/" + org + "/organization-roles/users/" + username;
  var description = "Remove all organization roles for user " + username + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// verifyOrganizationUserRolesExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationUserRolesAdded() {
  return bp.EventSet("Any OrganizationUserRoles Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationUserRoles");
  });
}

function listTeamsForOrganizationRole(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id + "/teams";
  var description = "List teams assigned to organization role " + role_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

function verifyOrganizationRoleTeamsExists(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id + "/teams";
  var description = "Verify OrganizationRoleTeams " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationRoleTeams found");
}

function verifyOrganizationRoleTeamsDoesNotExist(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id + "/teams";
  var description = "Verify OrganizationRoleTeams " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationRoleTeams not found");
}

function matchAnyOrganizationRoleTeamsAdded() {
  return bp.EventSet("Any OrganizationRoleTeams Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationRoleTeams");
  });
}

function listUsersForOrganizationRole(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id + "/users";
  var description = "List users assigned to organization role " + role_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

function verifyOrganizationRoleUsersExists(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id + "/users";
  var description = "Verify OrganizationRoleUsers " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationRoleUsers found");
}

function verifyOrganizationRoleUsersDoesNotExist(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id + "/users";
  var description = "Verify OrganizationRoleUsers " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationRoleUsers not found");
}

function matchAnyOrganizationRoleUsersAdded() {
  return bp.EventSet("Any OrganizationRoleUsers Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationRoleUsers");
  });
}

function convertMemberToOutsideCollaborator(async, org, username) {
  var url = "/orgs/" + org + "/outside_collaborators/" + username;
  var description = "Convert member " + username + " to outside collaborator in org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"async": async, "org": org, "username": username}) });
}

function removeOutsideCollaborator(async, org, username) {
  var url = "/orgs/" + org + "/outside_collaborators/" + username;
  var description = "Remove outside collaborator " + username + " from org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

// verifyOutsideCollaboratorExists skipped: No GET /{id} operation detected.
function waitForOutsideCollaboratorAdded(async, org, username) {
  waitFor(matchSuccess("Convert member " + username + " to outside collaborator in org " + org));
}

function matchAnyOutsideCollaboratorAdded() {
  return bp.EventSet("Any OutsideCollaborator Added", function(e) {
      return e.name.startsWith("Done: Convert member ");
  });
}

function listOutsideCollaborators(filter, org, page, per_page) {
  var url = "/orgs/" + org + "/outside_collaborators";
  var description = "List outside collaborators in org " + org + " filtered by " + filter;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyOutsideCollaboratorsListExists(filter, org, page, per_page) {
  var url = "/orgs/" + org + "/outside_collaborators";
  var description = "Verify OutsideCollaboratorsList " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OutsideCollaboratorsList found");
}

function verifyOutsideCollaboratorsListDoesNotExist(filter, org, page, per_page) {
  var url = "/orgs/" + org + "/outside_collaborators";
  var description = "Verify OutsideCollaboratorsList " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OutsideCollaboratorsList not found");
}

function matchAnyOutsideCollaboratorsListAdded() {
  return bp.EventSet("Any OutsideCollaboratorsList Added", function(e) {
      return e.name.startsWith("Done: Create OutsideCollaboratorsList");
  });
}

function reviewPersonalAccessTokenRequest(action, id, org, pat_request_id, reason) {
  var url = "/orgs/" + org + "/personal-access-token-requests/" + pat_request_id;
  var description = "Review personal access token request " + pat_request_id + " in org " + org + " with action " + action;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 409, 422, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action": action, "id": id, "org": org, "pat_request_id": pat_request_id, "reason": reason}) });
}

// verifyPersonalAccessTokenRequestExists skipped: No GET /{id} operation detected.
function matchAnyPersonalAccessTokenRequestAdded() {
  return bp.EventSet("Any PersonalAccessTokenRequest Added", function(e) {
      return e.name.startsWith("Done: Create PersonalAccessTokenRequest");
  });
}

function listPersonalAccessTokenRequests(action, direction, org, page, pat_request_ids, per_page, personal_access_token_after, personal_access_token_before, personal_access_token_owner, personal_access_token_permission, personal_access_token_repository, personal_access_token_sort, personal_access_token_token_id, reason) {
  var url = "/orgs/" + org + "/personal-access-token-requests";
  var description = "List personal access token requests in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 422, 500] });
}

function reviewPersonalAccessTokenRequestsInBulk(action, direction, org, page, pat_request_ids, per_page, personal_access_token_after, personal_access_token_before, personal_access_token_owner, personal_access_token_permission, personal_access_token_repository, personal_access_token_sort, personal_access_token_token_id, reason) {
  var url = "/orgs/" + org + "/personal-access-token-requests";
  var description = "Review personal access token requests in bulk in org " + org + " with action " + action;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 409, 422, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action": action, "direction": direction, "org": org, "page": page, "pat_request_ids": pat_request_ids, "per-page": per_page, "personal-access-token-after": personal_access_token_after, "personal-access-token-before": personal_access_token_before, "personal-access-token-owner": personal_access_token_owner, "personal-access-token-permission": personal_access_token_permission, "personal-access-token-repository": personal_access_token_repository, "personal-access-token-sort": personal_access_token_sort, "personal-access-token-token-id": personal_access_token_token_id, "reason": reason}) });
}

function verifyPersonalAccessTokenRequestsBulkExists(action, direction, org, page, pat_request_ids, per_page, personal_access_token_after, personal_access_token_before, personal_access_token_owner, personal_access_token_permission, personal_access_token_repository, personal_access_token_sort, personal_access_token_token_id, reason) {
  var url = "/orgs/" + org + "/personal-access-token-requests";
  var description = "Verify PersonalAccessTokenRequestsBulk " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PersonalAccessTokenRequestsBulk found");
}

function verifyPersonalAccessTokenRequestsBulkDoesNotExist(action, direction, org, page, pat_request_ids, per_page, personal_access_token_after, personal_access_token_before, personal_access_token_owner, personal_access_token_permission, personal_access_token_repository, personal_access_token_sort, personal_access_token_token_id, reason) {
  var url = "/orgs/" + org + "/personal-access-token-requests";
  var description = "Verify PersonalAccessTokenRequestsBulk " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PersonalAccessTokenRequestsBulk not found");
}

function matchAnyPersonalAccessTokenRequestsBulkAdded() {
  return bp.EventSet("Any PersonalAccessTokenRequestsBulk Added", function(e) {
      return e.name.startsWith("Done: Create PersonalAccessTokenRequestsBulk");
  });
}

function listRepositoriesForPersonalAccessTokenRequest(org, page, pat_request_id, per_page) {
  var url = "/orgs/" + org + "/personal-access-token-requests/" + pat_request_id + "/repositories";
  var description = "List repositories requested by personal access token request " + pat_request_id + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 500] });
}

function verifyPersonalAccessTokenRequestRepositoriesExists(org, page, pat_request_id, per_page) {
  var url = "/orgs/" + org + "/personal-access-token-requests/" + pat_request_id + "/repositories";
  var description = "Verify PersonalAccessTokenRequestRepositories " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PersonalAccessTokenRequestRepositories found");
}

function verifyPersonalAccessTokenRequestRepositoriesDoesNotExist(org, page, pat_request_id, per_page) {
  var url = "/orgs/" + org + "/personal-access-token-requests/" + pat_request_id + "/repositories";
  var description = "Verify PersonalAccessTokenRequestRepositories " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PersonalAccessTokenRequestRepositories not found");
}

function matchAnyPersonalAccessTokenRequestRepositoriesAdded() {
  return bp.EventSet("Any PersonalAccessTokenRequestRepositories Added", function(e) {
      return e.name.startsWith("Done: Create PersonalAccessTokenRequestRepositories");
  });
}

function listPersonalAccessTokens(action, org, pat_id, pat_ids) {
  var url = "/orgs/" + org + "/personal-access-tokens";
  var description = "List fine-grained personal access tokens for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 422, 500] });
}

function updatePersonalAccessTokensAccess(action, org, pat_id, pat_ids) {
  var url = "/orgs/" + org + "/personal-access-tokens";
  var description = "Update access for personal access tokens " + pat_ids + " with action " + action + " in organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 409, 422, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action": action, "org": org, "pat_id": pat_id, "pat_ids": pat_ids}) });
}

function updatePersonalAccessTokenAccess(action, org, pat_id, pat_ids) {
  var url = "/orgs/" + org + "/personal-access-tokens/" + pat_id;
  var description = "Update access for personal access token " + pat_id + " with action " + action + " in organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 409, 422, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action": action, "org": org, "pat_id": pat_id, "pat_ids": pat_ids}) });
}

function listPersonalAccessTokenRepositories(action, org, pat_id, pat_ids) {
  var url = "/orgs/" + org + "/personal-access-tokens/" + pat_id + "/repositories";
  var description = "List repositories accessible by personal access token " + pat_id + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 500] });
}

function tryToAddExistingPersonalAccessToken(action, org, pat_id, pat_ids) {
  var url = "/orgs/" + org + "/personal-access-tokens";
  var description = "Try Add Existing PersonalAccessToken " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPersonalAccessTokenExists(action, org, pat_id, pat_ids) {
  var url = "/orgs/" + org + "/personal-access-tokens";
  var description = "Verify PersonalAccessToken " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PersonalAccessToken found");
}

function verifyPersonalAccessTokenDoesNotExist(action, org, pat_id, pat_ids) {
  var url = "/orgs/" + org + "/personal-access-tokens";
  var description = "Verify PersonalAccessToken " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PersonalAccessToken not found");
}

function waitForPersonalAccessTokenAdded(action, org, pat_id, pat_ids) {
  waitFor(matchSuccess("Update access for personal access tokens " + pat_ids + " with action " + action + " in organization " + org));
}

function matchAnyPersonalAccessTokenAdded() {
  return bp.EventSet("Any PersonalAccessToken Added", function(e) {
      return e.name.startsWith("Done: Update access for personal access tokens ");
  });
}

function getCustomProperties(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  var url = "/orgs/" + org + "/properties/schema";
  var description = "Get all custom properties for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function createOrUpdateCustomProperties(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  var url = "/orgs/" + org + "/properties/schema";
  var description = "Create or update custom properties for organization " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allowed_values": allowed_values, "custom_property_name": custom_property_name, "default_value": default_value, "description": description, "org": org, "properties": properties, "required": required, "value_type": value_type}) });
}

function getCustomProperty(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  var url = "/orgs/" + org + "/properties/schema/" + custom_property_name;
  var description = "Get custom property " + custom_property_name + " for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function createOrUpdateCustomProperty(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  var url = "/orgs/" + org + "/properties/schema/" + custom_property_name;
  var description = "Create or update custom property " + custom_property_name + " for organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"allowed_values": allowed_values, "custom_property_name": custom_property_name, "default_value": default_value, "description": description, "org": org, "properties": properties, "required": required, "value_type": value_type}) });
}

function deleteCustomProperty(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  var url = "/orgs/" + org + "/properties/schema/" + custom_property_name;
  var description = "Remove custom property " + custom_property_name + " from organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function verifyCustomPropertyExists(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  var url = "/orgs/" + org + "/properties/schema";
  var description = "Verify CustomProperty " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CustomProperty found");
}

function verifyCustomPropertyDoesNotExist(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  var url = "/orgs/" + org + "/properties/schema";
  var description = "Verify CustomProperty " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CustomProperty not found");
}

function tryToDeleteANonExistingCustomProperty(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  var url = "/orgs/" + org + "/properties/schema/" + custom_property_name;
  var description = "Verify negative delete for CustomProperty";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCustomProperty(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type) {
  return bp.EventSet("Delete CustomProperty", function(e) {
      return e.name === "Done: " + "Remove custom property " + custom_property_name + " from organization " + org;
  });
}

function matchAnyCustomPropertyAdded() {
  return bp.EventSet("Any CustomProperty Added", function(e) {
      return e.name.startsWith("Done: Create CustomProperty");
  });
}

function listCustomPropertyValues(org, properties, repository_names) {
  var url = "/orgs/" + org + "/properties/values";
  var description = "List custom property values for repositories in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function createOrUpdateCustomPropertyValues(org, properties, repository_names) {
  var url = "/orgs/" + org + "/properties/values";
  var description = "Create or update custom property values for repositories " + repository_names + " in organization " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "properties": properties, "repository_names": repository_names}) });
}

function verifyCustomPropertyValueExists(org, properties, repository_names) {
  var url = "/orgs/" + org + "/properties/values";
  var description = "Verify CustomPropertyValue " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CustomPropertyValue found");
}

function verifyCustomPropertyValueDoesNotExist(org, properties, repository_names) {
  var url = "/orgs/" + org + "/properties/values";
  var description = "Verify CustomPropertyValue " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CustomPropertyValue not found");
}

function matchAnyCustomPropertyValueAdded() {
  return bp.EventSet("Any CustomPropertyValue Added", function(e) {
      return e.name.startsWith("Done: Create CustomPropertyValue");
  });
}

function listPublicMembers(org, username) {
  var url = "/orgs/" + org + "/public_members";
  var description = "List public members of organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function checkPublicMembership(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Check public membership of user " + username + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function setPublicMembership(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Set public membership for user " + username + " in organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "username": username}) });
}

function removePublicMembership(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Remove public membership for user " + username + " in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingPublicMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Try Add Existing PublicMember " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPublicMemberExists(org, username) {
  var url = "/orgs/" + org + "/public_members";
  var description = "Verify PublicMember " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PublicMember found");
}

function verifyPublicMemberDoesNotExist(org, username) {
  var url = "/orgs/" + org + "/public_members";
  var description = "Verify PublicMember " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PublicMember not found");
}

function tryToDeleteANonExistingPublicMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Verify negative delete for PublicMember";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPublicMember(org, username) {
  return bp.EventSet("Delete PublicMember", function(e) {
      return e.name === "Done: " + "Remove public membership for user " + username + " in organization " + org;
  });
}

function waitForPublicMemberAdded(org, username) {
  waitFor(matchSuccess("Set public membership for user " + username + " in organization " + org));
}

function matchAnyPublicMemberAdded() {
  return bp.EventSet("Any PublicMember Added", function(e) {
      return e.name.startsWith("Done: Set public membership for user ");
  });
}

function getRulesetHistory(id, org, ruleset_id, version_id) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id + "/history";
  var description = "Get history of ruleset " + ruleset_id + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 500] });
}

function getRulesetVersion(id, org, ruleset_id, version_id) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id + "/history/" + version_id;
  var description = "Get version " + version_id + " of ruleset " + ruleset_id + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 500] });
}

// verifyRulesetHistoryExists skipped: No GET /{id} operation detected.
function matchAnyRulesetHistoryAdded() {
  return bp.EventSet("Any RulesetHistory Added", function(e) {
      return e.name.startsWith("Done: Create RulesetHistory");
  });
}

function addSecurityManagerTeam(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers/teams/" + team_slug;
  var description = "Add security manager team " + team_slug + " to org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "team_slug": team_slug}) });
}

function removeSecurityManagerTeam(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers/teams/" + team_slug;
  var description = "Remove security manager team " + team_slug + " from org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function listSecurityManagerTeams(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers";
  var description = "List security manager teams for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingSecurityManagerTeam(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers/teams/" + team_slug;
  var description = "Try Add Existing SecurityManagerTeam " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifySecurityManagerTeamExists(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers";
  var description = "Verify SecurityManagerTeam " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SecurityManagerTeam found");
}

function verifySecurityManagerTeamDoesNotExist(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers";
  var description = "Verify SecurityManagerTeam " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SecurityManagerTeam not found");
}

function tryToDeleteANonExistingSecurityManagerTeam(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers/teams/" + team_slug;
  var description = "Verify negative delete for SecurityManagerTeam";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedSecurityManagerTeam(org, team_slug) {
  return bp.EventSet("Delete SecurityManagerTeam", function(e) {
      return e.name === "Done: " + "Remove security manager team " + team_slug + " from org " + org;
  });
}

function waitForSecurityManagerTeamAdded(org, team_slug) {
  waitFor(matchSuccess("Add security manager team " + team_slug + " to org " + org));
}

function matchAnySecurityManagerTeamAdded() {
  return bp.EventSet("Any SecurityManagerTeam Added", function(e) {
      return e.name.startsWith("Done: Add security manager team ");
  });
}

function getImmutableReleasesSettings(enforced_repositories, org, selected_repository_ids) {
  var url = "/orgs/" + org + "/settings/immutable-releases";
  var description = "Get immutable releases settings for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setImmutableReleasesSettings(enforced_repositories, org, selected_repository_ids) {
  var url = "/orgs/" + org + "/settings/immutable-releases";
  var description = "Set immutable releases settings for org " + org + " with enforced_repositories " + enforced_repositories;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enforced_repositories": enforced_repositories, "org": org, "selected_repository_ids": selected_repository_ids}) });
}

function verifyImmutableReleasesSettingsExists(enforced_repositories, org, selected_repository_ids) {
  var url = "/orgs/" + org + "/settings/immutable-releases";
  var description = "Verify ImmutableReleasesSettings " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ImmutableReleasesSettings found");
}

function verifyImmutableReleasesSettingsDoesNotExist(enforced_repositories, org, selected_repository_ids) {
  var url = "/orgs/" + org + "/settings/immutable-releases";
  var description = "Verify ImmutableReleasesSettings " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ImmutableReleasesSettings not found");
}

function matchAnyImmutableReleasesSettingsAdded() {
  return bp.EventSet("Any ImmutableReleasesSettings Added", function(e) {
      return e.name.startsWith("Done: Create ImmutableReleasesSettings");
  });
}

function listImmutableReleasesRepositories(org, selected_repository_ids) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories";
  var description = "List selected repositories for immutable releases enforcement in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setImmutableReleasesRepositories(org, selected_repository_ids) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories";
  var description = "Set selected repositories for immutable releases enforcement in org " + org + " with selected_repository_ids " + selected_repository_ids;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "selected_repository_ids": selected_repository_ids}) });
}

function verifyImmutableReleasesRepositoriesExists(org, selected_repository_ids) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories";
  var description = "Verify ImmutableReleasesRepositories " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ImmutableReleasesRepositories found");
}

function verifyImmutableReleasesRepositoriesDoesNotExist(org, selected_repository_ids) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories";
  var description = "Verify ImmutableReleasesRepositories " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ImmutableReleasesRepositories not found");
}

function matchAnyImmutableReleasesRepositoriesAdded() {
  return bp.EventSet("Any ImmutableReleasesRepositories Added", function(e) {
      return e.name.startsWith("Done: Create ImmutableReleasesRepositories");
  });
}

function enableImmutableReleasesRepository(org, repository_id) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories/" + repository_id;
  var description = "Enable immutable releases for repository " + repository_id + " in org " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_id": repository_id}) });
}

function disableImmutableReleasesRepository(org, repository_id) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories/" + repository_id;
  var description = "Disable immutable releases for repository " + repository_id + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// verifyImmutableReleasesRepositoryExists skipped: No GET /{id} operation detected.
function waitForImmutableReleasesRepositoryAdded(org, repository_id) {
  waitFor(matchSuccess("Enable immutable releases for repository " + repository_id + " in org " + org));
}

function matchAnyImmutableReleasesRepositoryAdded() {
  return bp.EventSet("Any ImmutableReleasesRepository Added", function(e) {
      return e.name.startsWith("Done: Enable immutable releases for repository ");
  });
}

function enableOrDisableSecurityProduct(enablement, id, org, query_suite, security_product) {
  var url = "/orgs/" + org + "/" + security_product + "/" + enablement;
  var description = "Enable or disable security product " + security_product + " with enablement " + enablement + " for org " + org + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"enablement": enablement, "id": id, "org": org, "query_suite": query_suite, "security_product": security_product}) });
}

// verifySecurityProductEnablementExists skipped: No GET /{id} operation detected.
function waitForSecurityProductEnablementAdded(enablement, id, org, query_suite, security_product) {
  waitFor(matchSuccess("Enable or disable security product " + security_product + " with enablement " + enablement + " for org " + org));
}

function matchAnySecurityProductEnablementAdded() {
  return bp.EventSet("Any SecurityProductEnablement Added", function(e) {
      return e.name.startsWith("Done: Enable or disable security product ");
  });
}

function getMembershipForAuthenticatedUser(org, state) {
  var url = "/user/memberships/orgs/" + org;
  var description = "Get organization membership for authenticated user in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function updateMembershipForAuthenticatedUser(org, state) {
  var url = "/user/memberships/orgs/" + org;
  var description = "Update organization membership for authenticated user in org " + org + " with state " + state;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "state": state}) });
}

function listMembershipsForAuthenticatedUser(org, state) {
  var url = "/user/memberships/orgs";
  var description = "List organization memberships for authenticated user with state " + state;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 422] });
}

function verifyOrganizationMembershipExists(org, state) {
  var url = "/user/memberships/orgs/" + org;
  var description = "Verify OrganizationMembership " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationMembership found");
}

function verifyOrganizationMembershipDoesNotExist(org, state) {
  var url = "/user/memberships/orgs/" + org;
  var description = "Verify OrganizationMembership " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationMembership not found");
}

function matchAnyOrganizationMembershipAdded() {
  return bp.EventSet("Any OrganizationMembership Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationMembership");
  });
}

function updateCodespacesAccess(org, selected_usernames, visibility) {
  var url = "/orgs/" + org + "/codespaces/access";
  var description = "Update codespaces access for organization " + org + " with visibility " + visibility;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 304, 400, 404, 422, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "selected_usernames": selected_usernames, "visibility": visibility}) });
}

// verifyCodespacesAccessExists skipped: No GET /{id} operation detected.
function matchAnyCodespacesAccessAdded() {
  return bp.EventSet("Any CodespacesAccess Added", function(e) {
      return e.name.startsWith("Done: Create CodespacesAccess");
  });
}

function addCodespacesAccessUsers(org, selected_usernames) {
  var url = "/orgs/" + org + "/codespaces/access/selected_users";
  var description = "Add users " + selected_usernames + " to codespaces access for organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 304, 400, 404, 409, 422, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "selected_usernames": selected_usernames}) });
}

function deleteCodespacesAccessUsers(org, selected_usernames) {
  var url = "/orgs/" + org + "/codespaces/access/selected_users";
  var description = "Remove users " + selected_usernames + " from codespaces access for organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 400, 404, 422, 500] });
}

// verifyCodespacesAccessUsersExists skipped: No GET /{id} operation detected.
function waitForCodespacesAccessUsersAdded(org, selected_usernames) {
  waitFor(matchSuccess("Add users " + selected_usernames + " to codespaces access for organization " + org));
}

function matchAnyCodespacesAccessUsersAdded() {
  return bp.EventSet("Any CodespacesAccessUsers Added", function(e) {
      return e.name.startsWith("Done: Add users ");
  });
}

function createOrUpdateOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Create or update organization secret " + secret_name + " in organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "key_id": key_id, "org": org, "secret_name": secret_name, "selected_repository_ids": selected_repository_ids, "visibility": visibility}) });
}

function getOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Get organization secret " + secret_name + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Delete organization secret " + secret_name + " in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Try Add Existing OrgSecret " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrgSecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Verify OrgSecret " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgSecret found");
}

function verifyOrgSecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Verify OrgSecret " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgSecret not found");
}

function tryToDeleteANonExistingOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Verify negative delete for OrgSecret";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  return bp.EventSet("Delete OrgSecret", function(e) {
      return e.name === "Done: " + "Delete organization secret " + secret_name + " in organization " + org;
  });
}

function waitForOrgSecretAdded(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility) {
  waitFor(matchSuccess("Create or update organization secret " + secret_name + " in organization " + org));
}

function matchAnyOrgSecretAdded() {
  return bp.EventSet("Any OrgSecret Added", function(e) {
      return e.name.startsWith("Done: Create or update organization secret ");
  });
}

function listSelectedReposForOrgSecret(org, secret_name, selected_repository_ids) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories";
  var description = "List selected repositories for organization secret " + secret_name + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function setSelectedReposForOrgSecret(org, secret_name, selected_repository_ids) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories";
  var description = "Set selected repositories for organization secret " + secret_name + " in organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "secret_name": secret_name, "selected_repository_ids": selected_repository_ids}) });
}

function verifyOrgSecretSelectedRepositoriesExists(org, secret_name, selected_repository_ids) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories";
  var description = "Verify OrgSecretSelectedRepositories " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgSecretSelectedRepositories found");
}

function verifyOrgSecretSelectedRepositoriesDoesNotExist(org, secret_name, selected_repository_ids) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories";
  var description = "Verify OrgSecretSelectedRepositories " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgSecretSelectedRepositories not found");
}

function matchAnyOrgSecretSelectedRepositoriesAdded() {
  return bp.EventSet("Any OrgSecretSelectedRepositories Added", function(e) {
      return e.name.startsWith("Done: Create OrgSecretSelectedRepositories");
  });
}

function addSelectedRepoToOrgSecret(org, repository_id, secret_name) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Add selected repository " + repository_id + " to organization secret " + secret_name + " in organization " + org;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_id": repository_id, "secret_name": secret_name}) });
}

function removeSelectedRepoFromOrgSecret(org, repository_id, secret_name) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Remove selected repository " + repository_id + " from organization secret " + secret_name + " in organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 409] });
}

// verifyOrgSecretSelectedRepositoryExists skipped: No GET /{id} operation detected.
function waitForOrgSecretSelectedRepositoryAdded(org, repository_id, secret_name) {
  waitFor(matchSuccess("Add selected repository " + repository_id + " to organization secret " + secret_name + " in organization " + org));
}

function matchAnyOrgSecretSelectedRepositoryAdded() {
  return bp.EventSet("Any OrgSecretSelectedRepository Added", function(e) {
      return e.name.startsWith("Done: Add selected repository ");
  });
}

function getCodespaceForAuthenticatedUser(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/user/codespaces/" + codespace_name;
  var description = "Get codespace " + codespace_name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404, 500] });
}

function stopCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/user/codespaces/" + codespace_name + "/stop";
  var description = "Stop codespace " + codespace_name;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 403, 404, 409, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"client_ip": client_ip, "codespace_name": codespace_name, "devcontainer_path": devcontainer_path, "display_name": display_name, "geo": geo, "idle_timeout_minutes": idle_timeout_minutes, "location": location, "machine": machine, "multi_repo_permissions_opt_out": multi_repo_permissions_opt_out, "name": name, "org": org, "owner": owner, "page": page, "per-page": per_page, "private": _private, "pull_number": pull_number, "repo": repo, "retention_period_minutes": retention_period_minutes, "username": username, "working_directory": working_directory}) });
}

function publishCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/user/codespaces/" + codespace_name + "/publish";
  var description = "Create a repository from codespace " + codespace_name + " with name " + name;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"client_ip": client_ip, "codespace_name": codespace_name, "devcontainer_path": devcontainer_path, "display_name": display_name, "geo": geo, "idle_timeout_minutes": idle_timeout_minutes, "location": location, "machine": machine, "multi_repo_permissions_opt_out": multi_repo_permissions_opt_out, "name": name, "org": org, "owner": owner, "page": page, "per-page": per_page, "private": _private, "pull_number": pull_number, "repo": repo, "retention_period_minutes": retention_period_minutes, "username": username, "working_directory": working_directory}) });
}

function createCodespaceFromPullRequest(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/codespaces";
  var description = "Create codespace from pull request " + pull_number + " in repository " + owner + "/" + repo + " " + codespace_name;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 202, 401, 403, 404, 409, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"client_ip": client_ip, "codespace_name": codespace_name, "devcontainer_path": devcontainer_path, "display_name": display_name, "geo": geo, "idle_timeout_minutes": idle_timeout_minutes, "location": location, "machine": machine, "multi_repo_permissions_opt_out": multi_repo_permissions_opt_out, "name": name, "org": org, "owner": owner, "page": page, "per-page": per_page, "private": _private, "pull_number": pull_number, "repo": repo, "retention_period_minutes": retention_period_minutes, "username": username, "working_directory": working_directory}) });
}

function stopCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/orgs/" + org + "/members/" + username + "/codespaces/" + codespace_name + "/stop";
  var description = "Stop codespace " + codespace_name + " for user " + username + " in organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 304, 401, 403, 404, 409, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"client_ip": client_ip, "codespace_name": codespace_name, "devcontainer_path": devcontainer_path, "display_name": display_name, "geo": geo, "idle_timeout_minutes": idle_timeout_minutes, "location": location, "machine": machine, "multi_repo_permissions_opt_out": multi_repo_permissions_opt_out, "name": name, "org": org, "owner": owner, "page": page, "per-page": per_page, "private": _private, "pull_number": pull_number, "repo": repo, "retention_period_minutes": retention_period_minutes, "username": username, "working_directory": working_directory}) });
}

function listCodespacesInRepository(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces";
  var description = "List codespaces in repository " + owner + "/" + repo + " " + codespace_name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 403, 404, 500] });
}

function startCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/user/codespaces/" + codespace_name + "/start";
  var description = "Start codespace " + codespace_name;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 304, 400, 401, 402, 403, 404, 409, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"client_ip": client_ip, "codespace_name": codespace_name, "devcontainer_path": devcontainer_path, "display_name": display_name, "geo": geo, "idle_timeout_minutes": idle_timeout_minutes, "location": location, "machine": machine, "multi_repo_permissions_opt_out": multi_repo_permissions_opt_out, "name": name, "org": org, "owner": owner, "page": page, "per-page": per_page, "private": _private, "pull_number": pull_number, "repo": repo, "retention_period_minutes": retention_period_minutes, "username": username, "working_directory": working_directory}) });
}

function tryToAddExistingCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/user/codespaces/" + codespace_name + "/publish";
  var description = "Try Add Existing Codespace " + codespace_name;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCodespaceExists(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/user/codespaces/" + codespace_name;
  var description = "Verify Codespace " + codespace_name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Codespace found");
}

function verifyCodespaceDoesNotExist(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/user/codespaces/" + codespace_name;
  var description = "Verify Codespace " + codespace_name + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Codespace not found");
}

function tryToDeleteANonExistingCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  var url = "/user/codespaces/" + codespace_name + "/stop";
  var description = "Verify negative delete for Codespace";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  return bp.EventSet("Delete Codespace", function(e) {
      return e.name === "Done: " + "Stop codespace " + codespace_name;
  });
}

function waitForCodespaceAdded(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory) {
  waitFor(matchSuccess("Create a repository from codespace " + codespace_name + " with name " + name));
}

function matchAnyCodespaceAdded() {
  return bp.EventSet("Any Codespace Added", function(e) {
      return e.name.startsWith("Done: Create a repository from codespace ");
  });
}

function listDevcontainersInRepository(id, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/devcontainers";
  var description = "List devcontainer configurations in repository " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 401, 403, 404, 500] });
}

// verifyCodespaceDevcontainerExists skipped: No GET /{id} operation detected.
function matchAnyCodespaceDevcontainerAdded() {
  return bp.EventSet("Any CodespaceDevcontainer Added", function(e) {
      return e.name.startsWith("Done: Create CodespaceDevcontainer");
  });
}

function listCodespaceMachinesInRepository(client_ip, id, location, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/machines";
  var description = "List available machine types in repository " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404, 500] });
}

// verifyCodespaceMachineExists skipped: No GET /{id} operation detected.
function matchAnyCodespaceMachineAdded() {
  return bp.EventSet("Any CodespaceMachine Added", function(e) {
      return e.name.startsWith("Done: Create CodespaceMachine");
  });
}

function getCodespaceDefaultAttributes(client_ip, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/new";
  var description = "Get default attributes for codespace in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 403, 404] });
}

function verifyCodespaceDefaultAttributesExists(client_ip, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/new";
  var description = "Verify CodespaceDefaultAttributes " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodespaceDefaultAttributes found");
}

function verifyCodespaceDefaultAttributesDoesNotExist(client_ip, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/new";
  var description = "Verify CodespaceDefaultAttributes " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodespaceDefaultAttributes not found");
}

function matchAnyCodespaceDefaultAttributesAdded() {
  return bp.EventSet("Any CodespaceDefaultAttributes Added", function(e) {
      return e.name.startsWith("Done: Create CodespaceDefaultAttributes");
  });
}

function checkCodespacePermissions(devcontainer_path, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/permissions_check";
  var description = "Check permissions for devcontainer at " + devcontainer_path + " with ref " + ref + " in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 403, 404, 422, 503] });
}

function verifyCodespacePermissionsCheckExists(devcontainer_path, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/permissions_check";
  var description = "Verify CodespacePermissionsCheck " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodespacePermissionsCheck found");
}

function verifyCodespacePermissionsCheckDoesNotExist(devcontainer_path, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/permissions_check";
  var description = "Verify CodespacePermissionsCheck " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodespacePermissionsCheck not found");
}

function matchAnyCodespacePermissionsCheckAdded() {
  return bp.EventSet("Any CodespacePermissionsCheck Added", function(e) {
      return e.name.startsWith("Done: Create CodespacePermissionsCheck");
  });
}

function listRepositorySecrets(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets";
  var description = "List secrets in repository " + owner + "/" + repo + " " + secret_name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Get secret " + secret_name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrUpdateRepositorySecret(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets/" + secret_name;
  var description = "Create or update secret " + secret_name + " in repository " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "key_id": key_id, "owner": owner, "page": page, "per-page": per_page, "repo": repo, "secret_name": secret_name}) });
}

function deleteSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Delete secret " + secret_name;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function createOrUpdateSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Create or update secret " + secret_name + " with key_id " + key_id;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "key_id": key_id, "owner": owner, "page": page, "per-page": per_page, "repo": repo, "secret_name": secret_name}) });
}

function tryToAddExistingCodespaceSecret(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Try Add Existing CodespaceSecret " + secret_name;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCodespaceSecretExists(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Verify CodespaceSecret " + secret_name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodespaceSecret found");
}

function verifyCodespaceSecretDoesNotExist(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Verify CodespaceSecret " + secret_name + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodespaceSecret not found");
}

function tryToDeleteANonExistingCodespaceSecret(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Verify negative delete for CodespaceSecret";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCodespaceSecret(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  return bp.EventSet("Delete CodespaceSecret", function(e) {
      return e.name === "Done: " + "Delete secret " + secret_name;
  });
}

function waitForCodespaceSecretAdded(encrypted_value, key_id, owner, page, per_page, repo, secret_name) {
  waitFor(matchSuccess("Create or update secret " + secret_name + " with key_id " + key_id));
}

function matchAnyCodespaceSecretAdded() {
  return bp.EventSet("Any CodespaceSecret Added", function(e) {
      return e.name.startsWith("Done: Create or update secret ");
  });
}

function getRepositoryPublicKey(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets/public-key";
  var description = "Get public key for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyCodespacePublicKeyExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets/public-key";
  var description = "Verify CodespacePublicKey " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodespacePublicKey found");
}

function verifyCodespacePublicKeyDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets/public-key";
  var description = "Verify CodespacePublicKey " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodespacePublicKey not found");
}

function matchAnyCodespacePublicKeyAdded() {
  return bp.EventSet("Any CodespacePublicKey Added", function(e) {
      return e.name.startsWith("Done: Create CodespacePublicKey");
  });
}

function getAuthenticatedUser(account_id, bio, blog, company, email, hireable, id, location, name, twitter_username, username) {
  var url = "/user";
  var description = "Get the authenticated user " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function updateAuthenticatedUser(account_id, bio, blog, company, email, hireable, id, location, name, twitter_username, username) {
  var url = "/user";
  var description = "Update the authenticated user with name " + name + " and email " + email + " " + id;
  var body = {
    "id": id,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 304, 401, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"account_id": account_id, "bio": bio, "blog": blog, "company": company, "email": email, "hireable": hireable, "id": id, "location": location, "name": name, "twitter_username": twitter_username, "username": username}) });
}

function getUserById(account_id, bio, blog, company, email, hireable, id, location, name, twitter_username, username) {
  var url = "/user/" + account_id;
  var description = "Get user with id " + account_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function getUserByUsername(account_id, bio, blog, company, email, hireable, id, location, name, twitter_username, username) {
  var url = "/users/" + username;
  var description = "Get user with username " + username + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function listUsers(account_id, bio, blog, company, email, hireable, id, location, name, twitter_username, username) {
  var url = "/users";
  var description = "List users " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304] });
}

// verifyUserExists skipped: No GET /{id} operation detected.
function matchAnyUserAdded() {
  return bp.EventSet("Any User Added", function(e) {
      return e.name.startsWith("Done: Create User");
  });
}

function checkBlockedUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Check if user " + username + " is blocked by the authenticated user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 304, 401, 403, 404] });
}

function blockUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Block user " + username;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 304, 401, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"username": username}) });
}

function unblockUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Unblock user " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404] });
}

function tryToAddExistingUserBlock(username) {
  var url = "/user/blocks/" + username;
  var description = "Try Add Existing UserBlock " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyUserBlockExists(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlock " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserBlock found");
}

function verifyUserBlockDoesNotExist(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlock " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserBlock not found");
}

function tryToDeleteANonExistingUserBlock(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify negative delete for UserBlock";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUserBlock(username) {
  return bp.EventSet("Delete UserBlock", function(e) {
      return e.name === "Done: " + "Unblock user " + username;
  });
}

function waitForUserBlockAdded(username) {
  waitFor(matchSuccess("Block user " + username));
}

function matchAnyUserBlockAdded() {
  return bp.EventSet("Any UserBlock Added", function(e) {
      return e.name.startsWith("Done: Block user ");
  });
}

function setPrimaryEmailVisibility(id, visibility) {
  var url = "/user/email/visibility";
  var description = "Set primary email visibility to " + visibility + " " + id;
  var body = {
    "id": id,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 304, 401, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "visibility": visibility}) });
}

// verifyUserEmailVisibilityExists skipped: No GET /{id} operation detected.
function matchAnyUserEmailVisibilityAdded() {
  return bp.EventSet("Any UserEmailVisibility Added", function(e) {
      return e.name.startsWith("Done: Create UserEmailVisibility");
  });
}

function listEmails(emails, id) {
  var url = "/user/emails";
  var description = "List email addresses for the authenticated user " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function addEmails(emails, id) {
  var url = "/user/emails";
  var description = "Add email addresses " + emails + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"emails": emails, "id": id}) });
}

function deleteEmails(emails, id) {
  var url = "/user/emails";
  var description = "Delete email addresses " + emails + " " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404, 422] });
}

// verifyUserEmailExists skipped: No GET /{id} operation detected.
function waitForUserEmailAdded(emails, id) {
  waitFor(matchSuccess("Add email addresses " + emails));
}

function matchAnyUserEmailAdded() {
  return bp.EventSet("Any UserEmail Added", function(e) {
      return e.name.startsWith("Done: Add email addresses ");
  });
}

function listFollowers(id) {
  var url = "/user/followers";
  var description = "List followers of the authenticated user " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

// verifyUserFollowerExists skipped: No GET /{id} operation detected.
function matchAnyUserFollowerAdded() {
  return bp.EventSet("Any UserFollower Added", function(e) {
      return e.name.startsWith("Done: Create UserFollower");
  });
}

function checkFollowing(username) {
  var url = "/user/following/" + username;
  var description = "Check if user follows " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 304, 401, 403, 404] });
}

function followUser(username) {
  var url = "/user/following/" + username;
  var description = "Follow user " + username;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 304, 401, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"username": username}) });
}

function unfollowUser(username) {
  var url = "/user/following/" + username;
  var description = "Unfollow user " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404] });
}

function tryToAddExistingUserFollowing(username) {
  var url = "/user/following/" + username;
  var description = "Try Add Existing UserFollowing " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyUserFollowingExists(username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowing " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserFollowing found");
}

function verifyUserFollowingDoesNotExist(username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowing " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserFollowing not found");
}

function tryToDeleteANonExistingUserFollowing(username) {
  var url = "/user/following/" + username;
  var description = "Verify negative delete for UserFollowing";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUserFollowing(username) {
  return bp.EventSet("Delete UserFollowing", function(e) {
      return e.name === "Done: " + "Unfollow user " + username;
  });
}

function waitForUserFollowingAdded(username) {
  waitFor(matchSuccess("Follow user " + username));
}

function matchAnyUserFollowingAdded() {
  return bp.EventSet("Any UserFollowing Added", function(e) {
      return e.name.startsWith("Done: Follow user ");
  });
}

function getGpgKey(armored_public_key, gpg_key_id, name) {
  var url = "/user/gpg_keys/" + gpg_key_id;
  var description = "Get GPG key with id " + gpg_key_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function createGpgKey(armored_public_key, gpg_key_id, name) {
  var url = "/user/gpg_keys";
  var description = "Create GPG key with armored_public_key " + armored_public_key + " and name " + name + " " + gpg_key_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"armored_public_key": armored_public_key, "gpg_key_id": gpg_key_id, "name": name}) });
}

function deleteGpgKey(armored_public_key, gpg_key_id, name) {
  var url = "/user/gpg_keys/" + gpg_key_id;
  var description = "Delete GPG key with id " + gpg_key_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404, 422] });
}

function tryToAddExistingUserGpgKey(armored_public_key, gpg_key_id, name) {
  var url = "/user/gpg_keys";
  var description = "Try Add Existing UserGpgKey " + gpg_key_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name) {
  var url = "/user/gpg_keys/" + gpg_key_id;
  var description = "Verify UserGpgKey " + gpg_key_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserGpgKey found");
}

function verifyUserGpgKeyDoesNotExist(armored_public_key, gpg_key_id, name) {
  var url = "/user/gpg_keys/" + gpg_key_id;
  var description = "Verify UserGpgKey " + gpg_key_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserGpgKey not found");
}

function tryToDeleteANonExistingUserGpgKey(armored_public_key, gpg_key_id, name) {
  var url = "/user/gpg_keys/" + gpg_key_id;
  var description = "Verify negative delete for UserGpgKey";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUserGpgKey(armored_public_key, gpg_key_id, name) {
  return bp.EventSet("Delete UserGpgKey", function(e) {
      return e.name === "Done: " + "Delete GPG key with id " + gpg_key_id;
  });
}

function waitForUserGpgKeyAdded(armored_public_key, gpg_key_id, name) {
  waitFor(matchSuccess("Create GPG key with armored_public_key " + armored_public_key + " and name " + name));
}

function matchAnyUserGpgKeyAdded() {
  return bp.EventSet("Any UserGpgKey Added", function(e) {
      return e.name.startsWith("Done: Create GPG key with armored_public_key ");
  });
}

function createPublicSSHKey(key, key_id, title) {
  var url = "/user/keys";
  var description = "Create public SSH key with key " + key + " " + key_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"key": key, "key_id": key_id, "title": title}) });
}

function getPublicSSHKey(key, key_id, title) {
  var url = "/user/keys/" + key_id;
  var description = "Get public SSH key with id " + key_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function deletePublicSSHKey(key, key_id, title) {
  var url = "/user/keys/" + key_id;
  var description = "Delete public SSH key with id " + key_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404] });
}

function listPublicSSHKeys(key, key_id, title) {
  var url = "/user/keys";
  var description = "List public SSH keys for authenticated user " + key_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function tryToAddExistingPublicSSHKey(key, key_id, title) {
  var url = "/user/keys";
  var description = "Try Add Existing PublicSSHKey " + key_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPublicSSHKeyExists(key, key_id, title) {
  var url = "/user/keys/" + key_id;
  var description = "Verify PublicSSHKey " + key_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PublicSSHKey found");
}

function verifyPublicSSHKeyDoesNotExist(key, key_id, title) {
  var url = "/user/keys/" + key_id;
  var description = "Verify PublicSSHKey " + key_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PublicSSHKey not found");
}

function tryToDeleteANonExistingPublicSSHKey(key, key_id, title) {
  var url = "/user/keys/" + key_id;
  var description = "Verify negative delete for PublicSSHKey";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPublicSSHKey(key, key_id, title) {
  return bp.EventSet("Delete PublicSSHKey", function(e) {
      return e.name === "Done: " + "Delete public SSH key with id " + key_id;
  });
}

function waitForPublicSSHKeyAdded(key, key_id, title) {
  waitFor(matchSuccess("Create public SSH key with key " + key));
}

function matchAnyPublicSSHKeyAdded() {
  return bp.EventSet("Any PublicSSHKey Added", function(e) {
      return e.name.startsWith("Done: Create public SSH key with key ");
  });
}

function addSocialAccount(account_urls, username) {
  var url = "/user/social_accounts";
  var description = "Add social accounts with URLs " + account_urls + " " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"account_urls": account_urls, "username": username}) });
}

function deleteSocialAccount(account_urls, username) {
  var url = "/user/social_accounts";
  var description = "Delete social accounts with URLs " + account_urls + " " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404, 422] });
}

function listSocialAccounts(account_urls, username) {
  var url = "/user/social_accounts";
  var description = "List social accounts for authenticated user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function listSocialAccountsForUser(account_urls, username) {
  var url = "/users/" + username + "/social_accounts";
  var description = "List social accounts for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingSocialAccount(account_urls, username) {
  var url = "/user/social_accounts";
  var description = "Try Add Existing SocialAccount " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifySocialAccountExists(account_urls, username) {
  var url = "/users/" + username + "/social_accounts";
  var description = "Verify SocialAccount " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SocialAccount found");
}

function verifySocialAccountDoesNotExist(account_urls, username) {
  var url = "/users/" + username + "/social_accounts";
  var description = "Verify SocialAccount " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SocialAccount not found");
}

function tryToDeleteANonExistingSocialAccount(account_urls, username) {
  var url = "/user/social_accounts";
  var description = "Verify negative delete for SocialAccount";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedSocialAccount(account_urls, username) {
  return bp.EventSet("Delete SocialAccount", function(e) {
      return e.name === "Done: " + "Delete social accounts with URLs " + account_urls;
  });
}

function waitForSocialAccountAdded(account_urls, username) {
  waitFor(matchSuccess("Add social accounts with URLs " + account_urls));
}

function matchAnySocialAccountAdded() {
  return bp.EventSet("Any SocialAccount Added", function(e) {
      return e.name.startsWith("Done: Add social accounts with URLs ");
  });
}

function createSSHSigningKey(key, ssh_signing_key_id, title) {
  var url = "/user/ssh_signing_keys";
  var description = "Create SSH signing key with key " + key + " " + ssh_signing_key_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"key": key, "ssh_signing_key_id": ssh_signing_key_id, "title": title}) });
}

function getSSHSigningKey(key, ssh_signing_key_id, title) {
  var url = "/user/ssh_signing_keys/" + ssh_signing_key_id;
  var description = "Get SSH signing key with id " + ssh_signing_key_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function deleteSSHSigningKey(key, ssh_signing_key_id, title) {
  var url = "/user/ssh_signing_keys/" + ssh_signing_key_id;
  var description = "Delete SSH signing key with id " + ssh_signing_key_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404] });
}

function listSSHSigningKeys(key, ssh_signing_key_id, title) {
  var url = "/user/ssh_signing_keys";
  var description = "List SSH signing keys for authenticated user " + ssh_signing_key_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function tryToAddExistingSSHSigningKey(key, ssh_signing_key_id, title) {
  var url = "/user/ssh_signing_keys";
  var description = "Try Add Existing SSHSigningKey " + ssh_signing_key_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifySSHSigningKeyExists(key, ssh_signing_key_id, title) {
  var url = "/user/ssh_signing_keys/" + ssh_signing_key_id;
  var description = "Verify SSHSigningKey " + ssh_signing_key_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SSHSigningKey found");
}

function verifySSHSigningKeyDoesNotExist(key, ssh_signing_key_id, title) {
  var url = "/user/ssh_signing_keys/" + ssh_signing_key_id;
  var description = "Verify SSHSigningKey " + ssh_signing_key_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SSHSigningKey not found");
}

function tryToDeleteANonExistingSSHSigningKey(key, ssh_signing_key_id, title) {
  var url = "/user/ssh_signing_keys/" + ssh_signing_key_id;
  var description = "Verify negative delete for SSHSigningKey";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedSSHSigningKey(key, ssh_signing_key_id, title) {
  return bp.EventSet("Delete SSHSigningKey", function(e) {
      return e.name === "Done: " + "Delete SSH signing key with id " + ssh_signing_key_id;
  });
}

function waitForSSHSigningKeyAdded(key, ssh_signing_key_id, title) {
  waitFor(matchSuccess("Create SSH signing key with key " + key));
}

function matchAnySSHSigningKeyAdded() {
  return bp.EventSet("Any SSHSigningKey Added", function(e) {
      return e.name.startsWith("Done: Create SSH signing key with key ");
  });
}

function listPublicEmails(id) {
  var url = "/user/public_emails";
  var description = "List public email addresses for authenticated user " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

// verifyPublicEmailExists skipped: No GET /{id} operation detected.
function matchAnyPublicEmailAdded() {
  return bp.EventSet("Any PublicEmail Added", function(e) {
      return e.name.startsWith("Done: Create PublicEmail");
  });
}

function listFollowersForUser(page, per_page, username) {
  var url = "/users/" + username + "/followers";
  var description = "List followers for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyFollowerExists(page, per_page, username) {
  var url = "/users/" + username + "/followers";
  var description = "Verify Follower " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Follower found");
}

function verifyFollowerDoesNotExist(page, per_page, username) {
  var url = "/users/" + username + "/followers";
  var description = "Verify Follower " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Follower not found");
}

function matchAnyFollowerAdded() {
  return bp.EventSet("Any Follower Added", function(e) {
      return e.name.startsWith("Done: Create Follower");
  });
}

function listFollowingForUser(id) {
  var url = "/users/{username}/following";
  var description = "List users followed by {username} " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyFollowingExists(id) {
  var url = "/users/{username}/following";
  var description = "Verify Following " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Following found");
}

function verifyFollowingDoesNotExist(id) {
  var url = "/users/{username}/following";
  var description = "Verify Following " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Following not found");
}

function matchAnyFollowingAdded() {
  return bp.EventSet("Any Following Added", function(e) {
      return e.name.startsWith("Done: Create Following");
  });
}

function listGpgKeysForUser(page, per_page, username) {
  var url = "/users/" + username + "/gpg_keys";
  var description = "List GPG keys for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyGpgKeyExists(page, per_page, username) {
  var url = "/users/" + username + "/gpg_keys";
  var description = "Verify GpgKey " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GpgKey found");
}

function verifyGpgKeyDoesNotExist(page, per_page, username) {
  var url = "/users/" + username + "/gpg_keys";
  var description = "Verify GpgKey " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GpgKey not found");
}

function matchAnyGpgKeyAdded() {
  return bp.EventSet("Any GpgKey Added", function(e) {
      return e.name.startsWith("Done: Create GpgKey");
  });
}

function getContextForUser(subject_id, subject_type, username) {
  var url = "/users/" + username + "/hovercard";
  var description = "Get contextual information for user " + username + " with subject_type " + subject_type + " and subject_id " + subject_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

function verifyHovercardExists(subject_id, subject_type, username) {
  var url = "/users/" + username + "/hovercard";
  var description = "Verify Hovercard " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Hovercard found");
}

function verifyHovercardDoesNotExist(subject_id, subject_type, username) {
  var url = "/users/" + username + "/hovercard";
  var description = "Verify Hovercard " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Hovercard not found");
}

function matchAnyHovercardAdded() {
  return bp.EventSet("Any Hovercard Added", function(e) {
      return e.name.startsWith("Done: Create Hovercard");
  });
}

function listPublicKeysForUser(page, per_page, username) {
  var url = "/users/" + username + "/keys";
  var description = "List public keys for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyPublicKeyExists(page, per_page, username) {
  var url = "/users/" + username + "/keys";
  var description = "Verify PublicKey " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PublicKey found");
}

function verifyPublicKeyDoesNotExist(page, per_page, username) {
  var url = "/users/" + username + "/keys";
  var description = "Verify PublicKey " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PublicKey not found");
}

function matchAnyPublicKeyAdded() {
  return bp.EventSet("Any PublicKey Added", function(e) {
      return e.name.startsWith("Done: Create PublicKey");
  });
}

function listSshSigningKeysForUser(username) {
  var url = "/users/" + username + "/ssh_signing_keys";
  var description = "List SSH signing keys for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifySshSigningKeyExists(username) {
  var url = "/users/" + username + "/ssh_signing_keys";
  var description = "Verify SshSigningKey " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SshSigningKey found");
}

function verifySshSigningKeyDoesNotExist(username) {
  var url = "/users/" + username + "/ssh_signing_keys";
  var description = "Verify SshSigningKey " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SshSigningKey not found");
}

function matchAnySshSigningKeyAdded() {
  return bp.EventSet("Any SshSigningKey Added", function(e) {
      return e.name.startsWith("Done: Create SshSigningKey");
  });
}

function getAppBySlug(app_slug) {
  var url = "/apps/" + app_slug;
  var description = "Get app with slug " + app_slug;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function verifyAppExists(app_slug) {
  var url = "/apps/" + app_slug;
  var description = "Verify App " + app_slug + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("App found");
}

function verifyAppDoesNotExist(app_slug) {
  var url = "/apps/" + app_slug;
  var description = "Verify App " + app_slug + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("App not found");
}

function matchAnyAppAdded() {
  return bp.EventSet("Any App Added", function(e) {
      return e.name.startsWith("Done: Create App");
  });
}

function createAppFromManifest(code, id) {
  var url = "/app-manifests/" + code + "/conversions";
  var description = "Create a GitHub App from a manifest with code " + code + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"code": code, "id": id}) });
}

// verifyAppManifestConversionExists skipped: No GET /{id} operation detected.
function waitForAppManifestConversionAdded(code, id) {
  waitFor(matchSuccess("Create a GitHub App from a manifest with code " + code));
}

function matchAnyAppManifestConversionAdded() {
  return bp.EventSet("Any AppManifestConversion Added", function(e) {
      return e.name.startsWith("Done: Create a GitHub App from a manifest with code ");
  });
}

function getWebhookConfigForApp(content_type, id, insecure_ssl, secret, url) {
  var url = "/app/hook/config";
  var description = "Get a webhook configuration for an app " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateWebhookConfigForApp(content_type, id, insecure_ssl, secret, url) {
  var url = "/app/hook/config";
  var description = "Update a webhook configuration for an app with url " + url + ", content_type " + content_type + ", secret " + secret + ", insecure_ssl " + insecure_ssl + " " + id;
  var body = {
    "id": id,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content_type": content_type, "id": id, "insecure_ssl": insecure_ssl, "secret": secret, "url": url}) });
}

// verifyAppWebhookConfigExists skipped: No GET /{id} operation detected.
function matchAnyAppWebhookConfigAdded() {
  return bp.EventSet("Any AppWebhookConfig Added", function(e) {
      return e.name.startsWith("Done: Create AppWebhookConfig");
  });
}

function getWebhookDelivery(delivery_id) {
  var url = "/app/hook/deliveries/" + delivery_id;
  var description = "Get a delivery for an app webhook with delivery_id " + delivery_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 422] });
}

function redeliverWebhookDelivery(delivery_id) {
  var url = "/app/hook/deliveries/" + delivery_id + "/attempts";
  var description = "Redeliver a delivery for an app webhook with delivery_id " + delivery_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 400, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"delivery_id": delivery_id}) });
}

function tryToAddExistingAppWebhookDelivery(delivery_id) {
  var url = "/app/hook/deliveries/" + delivery_id + "/attempts";
  var description = "Try Add Existing AppWebhookDelivery " + delivery_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyAppWebhookDeliveryExists(delivery_id) {
  var url = "/app/hook/deliveries/" + delivery_id;
  var description = "Verify AppWebhookDelivery " + delivery_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("AppWebhookDelivery found");
}

function verifyAppWebhookDeliveryDoesNotExist(delivery_id) {
  var url = "/app/hook/deliveries/" + delivery_id;
  var description = "Verify AppWebhookDelivery " + delivery_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("AppWebhookDelivery not found");
}

function waitForAppWebhookDeliveryAdded(delivery_id) {
  waitFor(matchSuccess("Redeliver a delivery for an app webhook with delivery_id " + delivery_id));
}

function matchAnyAppWebhookDeliveryAdded() {
  return bp.EventSet("Any AppWebhookDelivery Added", function(e) {
      return e.name.startsWith("Done: Redeliver a delivery for an app webhook with delivery_id ");
  });
}

function listWebhookDeliveries(id) {
  var url = "/app/hook/deliveries";
  var description = "List deliveries for an app webhook " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 422] });
}

// verifyAppWebhookDeliveriesExists skipped: No GET /{id} operation detected.
function matchAnyAppWebhookDeliveriesAdded() {
  return bp.EventSet("Any AppWebhookDeliveries Added", function(e) {
      return e.name.startsWith("Done: Create AppWebhookDeliveries");
  });
}

function listInstallationRequestsForAuthenticatedApp(id) {
  var url = "/app/installation-requests";
  var description = "List installation requests for the authenticated app " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401] });
}

// verifyAppInstallationRequestExists skipped: No GET /{id} operation detected.
function matchAnyAppInstallationRequestAdded() {
  return bp.EventSet("Any AppInstallationRequest Added", function(e) {
      return e.name.startsWith("Done: Create AppInstallationRequest");
  });
}

function getInstallation(installation_id) {
  var url = "/app/installations/" + installation_id;
  var description = "Get an installation for the authenticated app with installation_id " + installation_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function unsuspendAppInstallation(installation_id) {
  var url = "/app/installations/" + installation_id + "/suspended";
  var description = "Unsuspend app installation " + installation_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function listInstallations(installation_id) {
  var url = "/app/installations";
  var description = "List installations for the authenticated app " + installation_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function suspendAppInstallation(installation_id) {
  var url = "/app/installations/" + installation_id + "/suspended";
  var description = "Suspend app installation " + installation_id;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"installation_id": installation_id}) });
}

function verifyAppInstallationExists(installation_id) {
  var url = "/app/installations/" + installation_id;
  var description = "Verify AppInstallation " + installation_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("AppInstallation found");
}

function verifyAppInstallationDoesNotExist(installation_id) {
  var url = "/app/installations/" + installation_id;
  var description = "Verify AppInstallation " + installation_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("AppInstallation not found");
}

function tryToDeleteANonExistingAppInstallation(installation_id) {
  var url = "/app/installations/" + installation_id + "/suspended";
  var description = "Verify negative delete for AppInstallation";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedAppInstallation(installation_id) {
  return bp.EventSet("Delete AppInstallation", function(e) {
      return e.name === "Done: " + "Unsuspend app installation " + installation_id;
  });
}

function matchAnyAppInstallationAdded() {
  return bp.EventSet("Any AppInstallation Added", function(e) {
      return e.name.startsWith("Done: Create AppInstallation");
  });
}

function createInstallationAccessToken(id, installation_id, permissions, repositories, repository_ids) {
  var url = "/app/installations/" + installation_id + "/access_tokens";
  var description = "Create an installation access token for an app with installation_id " + installation_id + ", repositories " + repositories + ", repository_ids " + repository_ids + ", permissions " + permissions;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "installation_id": installation_id, "permissions": permissions, "repositories": repositories, "repository_ids": repository_ids}) });
}

// verifyAppInstallationAccessTokenExists skipped: No GET /{id} operation detected.
function waitForAppInstallationAccessTokenAdded(id, installation_id, permissions, repositories, repository_ids) {
  waitFor(matchSuccess("Create an installation access token for an app with installation_id " + installation_id + ", repositories " + repositories + ", repository_ids " + repository_ids + ", permissions " + permissions));
}

function matchAnyAppInstallationAccessTokenAdded() {
  return bp.EventSet("Any AppInstallationAccessToken Added", function(e) {
      return e.name.startsWith("Done: Create an installation access token for an app with installation_id ");
  });
}

function deleteAppAuthorization(access_token, client_id) {
  var url = "/applications/" + client_id + "/grant";
  var description = "Delete app authorization for client " + client_id + " with access_token " + access_token;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

// verifyAppAuthorizationExists skipped: No GET /{id} operation detected.
function matchAnyAppAuthorizationAdded() {
  return bp.EventSet("Any AppAuthorization Added", function(e) {
      return e.name.startsWith("Done: Create AppAuthorization");
  });
}

function checkAppToken(access_token, client_id) {
  var url = "/applications/" + client_id + "/token";
  var description = "Check app token for client " + client_id + " with access_token " + access_token;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"access_token": access_token, "client_id": client_id}) });
}

function resetAppToken(access_token, client_id) {
  var url = "/applications/" + client_id + "/token";
  var description = "Reset app token for client " + client_id + " with access_token " + access_token;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"access_token": access_token, "client_id": client_id}) });
}

function deleteAppToken(access_token, client_id) {
  var url = "/applications/" + client_id + "/token";
  var description = "Delete app token for client " + client_id + " with access_token " + access_token;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

// verifyAppTokenExists skipped: No GET /{id} operation detected.
function waitForAppTokenAdded(access_token, client_id) {
  waitFor(matchSuccess("Check app token for client " + client_id + " with access_token " + access_token));
}

function matchAnyAppTokenAdded() {
  return bp.EventSet("Any AppToken Added", function(e) {
      return e.name.startsWith("Done: Check app token for client ");
  });
}

function createScopedAppToken(access_token, client_id, id, permissions, repositories, repository_ids, target, target_id) {
  var url = "/applications/" + client_id + "/token/scoped";
  var description = "Create scoped app token for client " + client_id + " with access_token " + access_token;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"access_token": access_token, "client_id": client_id, "id": id, "permissions": permissions, "repositories": repositories, "repository_ids": repository_ids, "target": target, "target_id": target_id}) });
}

// verifyScopedAppTokenExists skipped: No GET /{id} operation detected.
function waitForScopedAppTokenAdded(access_token, client_id, id, permissions, repositories, repository_ids, target, target_id) {
  waitFor(matchSuccess("Create scoped app token for client " + client_id + " with access_token " + access_token));
}

function matchAnyScopedAppTokenAdded() {
  return bp.EventSet("Any ScopedAppToken Added", function(e) {
      return e.name.startsWith("Done: Create scoped app token for client ");
  });
}

function listRepositoriesAccessibleToInstallation(id) {
  var url = "/installation/repositories";
  var description = "List repositories accessible to the app installation " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

// verifyInstallationRepositoriesExists skipped: No GET /{id} operation detected.
function matchAnyInstallationRepositoriesAdded() {
  return bp.EventSet("Any InstallationRepositories Added", function(e) {
      return e.name.startsWith("Done: Create InstallationRepositories");
  });
}

function revokeInstallationAccessToken(id) {
  var url = "/installation/token";
  var description = "Revoke installation access token " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// verifyInstallationTokenExists skipped: No GET /{id} operation detected.
function matchAnyInstallationTokenAdded() {
  return bp.EventSet("Any InstallationToken Added", function(e) {
      return e.name.startsWith("Done: Create InstallationToken");
  });
}

function getSubscriptionPlanForAccount(account_id) {
  var url = "/marketplace_listing/accounts/" + account_id;
  var description = "Get subscription plan for account " + account_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function verifyMarketplaceSubscriptionExists(account_id) {
  var url = "/marketplace_listing/accounts/" + account_id;
  var description = "Verify MarketplaceSubscription " + account_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MarketplaceSubscription found");
}

function verifyMarketplaceSubscriptionDoesNotExist(account_id) {
  var url = "/marketplace_listing/accounts/" + account_id;
  var description = "Verify MarketplaceSubscription " + account_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MarketplaceSubscription not found");
}

function matchAnyMarketplaceSubscriptionAdded() {
  return bp.EventSet("Any MarketplaceSubscription Added", function(e) {
      return e.name.startsWith("Done: Create MarketplaceSubscription");
  });
}

function listPlans(direction, id, page, per_page, plan_id, sort) {
  var url = "/marketplace_listing/plans";
  var description = "List marketplace plans " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function listAccountsForPlan(direction, id, page, per_page, plan_id, sort) {
  var url = "/marketplace_listing/plans/" + plan_id + "/accounts";
  var description = "List accounts for plan " + plan_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404, 422] });
}

// verifyMarketplacePlanExists skipped: No GET /{id} operation detected.
function matchAnyMarketplacePlanAdded() {
  return bp.EventSet("Any MarketplacePlan Added", function(e) {
      return e.name.startsWith("Done: Create MarketplacePlan");
  });
}

function getSubscriptionPlanForAccountStubbed(account_id) {
  var url = "/marketplace_listing/stubbed/accounts/" + account_id;
  var description = "Get a subscription plan for account " + account_id + " (stubbed)";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function verifyMarketplaceListingAccountExists(account_id) {
  var url = "/marketplace_listing/stubbed/accounts/" + account_id;
  var description = "Verify MarketplaceListingAccount " + account_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MarketplaceListingAccount found");
}

function verifyMarketplaceListingAccountDoesNotExist(account_id) {
  var url = "/marketplace_listing/stubbed/accounts/" + account_id;
  var description = "Verify MarketplaceListingAccount " + account_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MarketplaceListingAccount not found");
}

function matchAnyMarketplaceListingAccountAdded() {
  return bp.EventSet("Any MarketplaceListingAccount Added", function(e) {
      return e.name.startsWith("Done: Create MarketplaceListingAccount");
  });
}

function listPlansStubbed(direction, id, page, per_page, plan_id, sort) {
  var url = "/marketplace_listing/stubbed/plans";
  var description = "List plans (stubbed) " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function listAccountsForPlanStubbed(direction, id, page, per_page, plan_id, sort) {
  var url = "/marketplace_listing/stubbed/plans/" + plan_id + "/accounts";
  var description = "List accounts for plan " + plan_id + " (stubbed)";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

// verifyMarketplaceListingPlanExists skipped: No GET /{id} operation detected.
function matchAnyMarketplaceListingPlanAdded() {
  return bp.EventSet("Any MarketplaceListingPlan Added", function(e) {
      return e.name.startsWith("Done: Create MarketplaceListingPlan");
  });
}

function getRepoInstallation(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/installation";
  var description = "Get repository installation for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 301, 404] });
}

function verifyRepoInstallationExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/installation";
  var description = "Verify RepoInstallation " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepoInstallation found");
}

function verifyRepoInstallationDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/installation";
  var description = "Verify RepoInstallation " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepoInstallation not found");
}

function matchAnyRepoInstallationAdded() {
  return bp.EventSet("Any RepoInstallation Added", function(e) {
      return e.name.startsWith("Done: Create RepoInstallation");
  });
}

function listInstallationsForAuthenticatedUser(installation_id, repository_id, username) {
  var url = "/user/installations";
  var description = "List app installations accessible to the user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function listInstallationReposForAuthenticatedUser(installation_id, repository_id, username) {
  var url = "/user/installations/" + installation_id + "/repositories";
  var description = "List repositories for installation " + installation_id + " " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 404] });
}

function addRepoToInstallationForAuthenticatedUser(installation_id, repository_id, username) {
  var url = "/user/installations/" + installation_id + "/repositories/" + repository_id;
  var description = "Add repository " + repository_id + " to installation " + installation_id + " " + username;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 304, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"installation_id": installation_id, "repository_id": repository_id, "username": username}) });
}

function removeRepoFromInstallationForAuthenticatedUser(installation_id, repository_id, username) {
  var url = "/user/installations/" + installation_id + "/repositories/" + repository_id;
  var description = "Remove repository " + repository_id + " from installation " + installation_id + " " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 403, 404, 422] });
}

function getUserInstallation(installation_id, repository_id, username) {
  var url = "/users/" + username + "/installation";
  var description = "Get user installation for " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyUserInstallationExists(installation_id, repository_id, username) {
  var url = "/users/" + username + "/installation";
  var description = "Verify UserInstallation " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserInstallation found");
}

function verifyUserInstallationDoesNotExist(installation_id, repository_id, username) {
  var url = "/users/" + username + "/installation";
  var description = "Verify UserInstallation " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserInstallation not found");
}

function matchAnyUserInstallationAdded() {
  return bp.EventSet("Any UserInstallation Added", function(e) {
      return e.name.startsWith("Done: Create UserInstallation");
  });
}

function listSubscriptionsForAuthenticatedUser(id) {
  var url = "/user/marketplace_purchases";
  var description = "List subscriptions for the authenticated user " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 404] });
}

function listSubscriptionsForAuthenticatedUserStubbed(id) {
  var url = "/user/marketplace_purchases/stubbed";
  var description = "List subscriptions for the authenticated user (stubbed) " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401] });
}

// verifyUserMarketplacePurchaseExists skipped: No GET /{id} operation detected.
function matchAnyUserMarketplacePurchaseAdded() {
  return bp.EventSet("Any UserMarketplacePurchase Added", function(e) {
      return e.name.startsWith("Done: Create UserMarketplacePurchase");
  });
}

function createIssue(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Create issue " + title + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 409, 410, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"assignee": assignee, "assignees": assignees, "body": body, "issue_number": issue_number, "labels": labels, "milestone": milestone, "owner": owner, "repo": repo, "state": state, "state_reason": state_reason, "title": title, "type": type}) });
}

function getIssue(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number;
  var description = "Get issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 301, 304, 404, 410] });
}

function updateIssue(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number;
  var description = "Update issue " + issue_number + " in repo " + owner + "/" + repo + " with title " + title;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 301, 403, 404, 410, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"assignee": assignee, "assignees": assignees, "body": body, "issue_number": issue_number, "labels": labels, "milestone": milestone, "owner": owner, "repo": repo, "state": state, "state_reason": state_reason, "title": title, "type": type}) });
}

function tryToAddExistingIssue(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Try Add Existing Issue " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueExists(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number;
  var description = "Verify Issue " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Issue found");
}

function verifyIssueDoesNotExist(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number;
  var description = "Verify Issue " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Issue not found");
}

function waitForIssueAdded(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type) {
  waitFor(matchSuccess("Create issue " + title + " in repo " + owner + "/" + repo));
}

function matchAnyIssueAdded() {
  return bp.EventSet("Any Issue Added", function(e) {
      return e.name.startsWith("Done: Create issue ");
  });
}

function getIssueComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Get issue comment " + comment_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateIssueComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Update issue comment " + comment_id + " in repo " + owner + "/" + repo + " with body " + body;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_id": comment_id, "owner": owner, "repo": repo}) });
}

function deleteIssueComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Delete issue comment " + comment_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function verifyIssueCommentExists(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Verify IssueComment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueComment found");
}

function verifyIssueCommentDoesNotExist(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Verify IssueComment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueComment not found");
}

function tryToDeleteANonExistingIssueComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Verify negative delete for IssueComment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueComment(body, comment_id, owner, repo) {
  return bp.EventSet("Delete IssueComment", function(e) {
      return e.name === "Done: " + "Delete issue comment " + comment_id + " in repo " + owner + "/" + repo;
  });
}

function matchAnyIssueCommentAdded() {
  return bp.EventSet("Any IssueComment Added", function(e) {
      return e.name.startsWith("Done: Create IssueComment");
  });
}

function getIssueEvent(event_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/events/" + event_id;
  var description = "Get issue event " + event_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 410] });
}

function verifyIssueEventExists(event_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/events/" + event_id;
  var description = "Verify IssueEvent " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueEvent found");
}

function verifyIssueEventDoesNotExist(event_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/events/" + event_id;
  var description = "Verify IssueEvent " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueEvent not found");
}

function matchAnyIssueEventAdded() {
  return bp.EventSet("Any IssueEvent Added", function(e) {
      return e.name.startsWith("Done: Create IssueEvent");
  });
}

function checkUserCanBeAssigned(assignee, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/assignees/" + assignee;
  var description = "Check if user " + assignee + " can be assigned in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function verifyAssigneeExists(assignee, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/assignees/" + assignee;
  var description = "Verify Assignee " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Assignee found");
}

function verifyAssigneeDoesNotExist(assignee, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/assignees/" + assignee;
  var description = "Verify Assignee " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Assignee not found");
}

function matchAnyAssigneeAdded() {
  return bp.EventSet("Any Assignee Added", function(e) {
      return e.name.startsWith("Done: Create Assignee");
  });
}

function addAssigneesToIssue(assignee, assignees, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees";
  var description = "Add assignees " + assignees + " to issue " + issue_number + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"assignee": assignee, "assignees": assignees, "issue_number": issue_number, "owner": owner, "repo": repo}) });
}

function removeAssigneesFromIssue(assignee, assignees, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees";
  var description = "Remove assignees " + assignees + " from issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function checkUserCanBeAssignedToIssue(assignee, assignees, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees/" + assignee;
  var description = "Check if user " + assignee + " can be assigned to issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function tryToAddExistingIssueAssignees(assignee, assignees, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees";
  var description = "Try Add Existing IssueAssignees " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees/" + assignee;
  var description = "Verify IssueAssignees " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueAssignees found");
}

function verifyIssueAssigneesDoesNotExist(assignee, assignees, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees/" + assignee;
  var description = "Verify IssueAssignees " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueAssignees not found");
}

function tryToDeleteANonExistingIssueAssignees(assignee, assignees, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees";
  var description = "Verify negative delete for IssueAssignees";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueAssignees(assignee, assignees, issue_number, owner, repo) {
  return bp.EventSet("Delete IssueAssignees", function(e) {
      return e.name === "Done: " + "Remove assignees " + assignees + " from issue " + issue_number + " in repo " + owner + "/" + repo;
  });
}

function waitForIssueAssigneesAdded(assignee, assignees, issue_number, owner, repo) {
  waitFor(matchSuccess("Add assignees " + assignees + " to issue " + issue_number + " in repo " + owner + "/" + repo));
}

function matchAnyIssueAssigneesAdded() {
  return bp.EventSet("Any IssueAssignees Added", function(e) {
      return e.name.startsWith("Done: Add assignees ");
  });
}

function listIssueComments(body, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/comments";
  var description = "List comments on issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 410] });
}

function createIssueComment(body, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/comments";
  var description = "Create comment on issue " + issue_number + " in repo " + owner + "/" + repo + " with body " + body;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "issue_number": issue_number, "owner": owner, "repo": repo}) });
}

function tryToAddExistingIssueComments(body, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/comments";
  var description = "Try Add Existing IssueComments " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueCommentsExists(body, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/comments";
  var description = "Verify IssueComments " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueComments found");
}

function verifyIssueCommentsDoesNotExist(body, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/comments";
  var description = "Verify IssueComments " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueComments not found");
}

function waitForIssueCommentsAdded(body, issue_number, owner, repo) {
  waitFor(matchSuccess("Create comment on issue " + issue_number + " in repo " + owner + "/" + repo + " with body " + body));
}

function matchAnyIssueCommentsAdded() {
  return bp.EventSet("Any IssueComments Added", function(e) {
      return e.name.startsWith("Done: Create comment on issue ");
  });
}

function listBlockedByDependencies(issue_id, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by";
  var description = "List dependencies blocking issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 301, 404, 410] });
}

function addBlockedByDependency(issue_id, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by";
  var description = "Add dependency blocking issue " + issue_number + " in repo " + owner + "/" + repo + " with issue_id " + issue_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 301, 403, 404, 409, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"issue_id": issue_id, "issue_number": issue_number, "owner": owner, "repo": repo}) });
}

function removeBlockedByDependency(issue_id, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by/" + issue_id;
  var description = "Remove dependency blocking issue " + issue_number + " in repo " + owner + "/" + repo + " with issue_id " + issue_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 301, 400, 401, 403, 404, 410] });
}

function tryToAddExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by";
  var description = "Try Add Existing IssueDependenciesBlockedBy " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by";
  var description = "Verify IssueDependenciesBlockedBy " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueDependenciesBlockedBy found");
}

function verifyIssueDependenciesBlockedByDoesNotExist(issue_id, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by";
  var description = "Verify IssueDependenciesBlockedBy " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueDependenciesBlockedBy not found");
}

function tryToDeleteANonExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by/" + issue_id;
  var description = "Verify negative delete for IssueDependenciesBlockedBy";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo) {
  return bp.EventSet("Delete IssueDependenciesBlockedBy", function(e) {
      return e.name === "Done: " + "Remove dependency blocking issue " + issue_number + " in repo " + owner + "/" + repo + " with issue_id " + issue_id;
  });
}

function waitForIssueDependenciesBlockedByAdded(issue_id, issue_number, owner, repo) {
  waitFor(matchSuccess("Add dependency blocking issue " + issue_number + " in repo " + owner + "/" + repo + " with issue_id " + issue_id));
}

function matchAnyIssueDependenciesBlockedByAdded() {
  return bp.EventSet("Any IssueDependenciesBlockedBy Added", function(e) {
      return e.name.startsWith("Done: Add dependency blocking issue ");
  });
}

function listBlockingDependencies(issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocking";
  var description = "List dependencies blocked by issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 301, 404, 410] });
}

function verifyIssueDependenciesBlockingExists(issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocking";
  var description = "Verify IssueDependenciesBlocking " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueDependenciesBlocking found");
}

function verifyIssueDependenciesBlockingDoesNotExist(issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocking";
  var description = "Verify IssueDependenciesBlocking " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueDependenciesBlocking not found");
}

function matchAnyIssueDependenciesBlockingAdded() {
  return bp.EventSet("Any IssueDependenciesBlocking Added", function(e) {
      return e.name.startsWith("Done: Create IssueDependenciesBlocking");
  });
}

function listIssueEvents(issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/events";
  var description = "List events on issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 410] });
}

function verifyIssueEventsExists(issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/events";
  var description = "Verify IssueEvents " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueEvents found");
}

function verifyIssueEventsDoesNotExist(issue_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/events";
  var description = "Verify IssueEvents " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueEvents not found");
}

function matchAnyIssueEventsAdded() {
  return bp.EventSet("Any IssueEvents Added", function(e) {
      return e.name.startsWith("Done: Create IssueEvents");
  });
}

function listLabelsOnIssue(issue_number, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "List labels on issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 301, 404, 410] });
}

function addLabelsToIssue(issue_number, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Add labels " + labels + " to issue " + issue_number + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 301, 404, 409, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"issue_number": issue_number, "labels": labels, "owner": owner, "repo": repo}) });
}

function setLabelsForIssue(issue_number, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Set labels " + labels + " for issue " + issue_number + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 301, 404, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"issue_number": issue_number, "labels": labels, "owner": owner, "repo": repo}) });
}

function removeAllLabelsFromIssue(issue_number, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Remove all labels from issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 301, 404, 410] });
}

function tryToAddExistingIssueLabels(issue_number, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Try Add Existing IssueLabels " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueLabelsExists(issue_number, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Verify IssueLabels " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueLabels found");
}

function verifyIssueLabelsDoesNotExist(issue_number, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Verify IssueLabels " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueLabels not found");
}

function tryToDeleteANonExistingIssueLabels(issue_number, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Verify negative delete for IssueLabels";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueLabels(issue_number, labels, owner, repo) {
  return bp.EventSet("Delete IssueLabels", function(e) {
      return e.name === "Done: " + "Remove all labels from issue " + issue_number + " in repo " + owner + "/" + repo;
  });
}

function waitForIssueLabelsAdded(issue_number, labels, owner, repo) {
  waitFor(matchSuccess("Add labels " + labels + " to issue " + issue_number + " in repo " + owner + "/" + repo));
}

function matchAnyIssueLabelsAdded() {
  return bp.EventSet("Any IssueLabels Added", function(e) {
      return e.name.startsWith("Done: Add labels ");
  });
}

function removeLabelFromIssue(issue_number, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels/" + name;
  var description = "Remove label " + name + " from issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 301, 404, 410] });
}

// verifyIssueLabelExists skipped: No GET /{id} operation detected.
function matchAnyIssueLabelAdded() {
  return bp.EventSet("Any IssueLabel Added", function(e) {
      return e.name.startsWith("Done: Create IssueLabel");
  });
}

function lockIssue(issue_number, lock_reason, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/lock";
  var description = "Lock issue " + issue_number + " in repo " + owner + "/" + repo + " with reason " + lock_reason;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"issue_number": issue_number, "lock_reason": lock_reason, "owner": owner, "repo": repo}) });
}

function unlockIssue(issue_number, lock_reason, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/lock";
  var description = "Unlock issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// verifyIssueLockExists skipped: No GET /{id} operation detected.
function matchAnyIssueLockAdded() {
  return bp.EventSet("Any IssueLock Added", function(e) {
      return e.name.startsWith("Done: Create IssueLock");
  });
}

function addSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issues";
  var description = "Add sub-issue " + sub_issue_id + " to issue " + issue_number + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"after_id": after_id, "before_id": before_id, "issue_number": issue_number, "owner": owner, "page": page, "per_page": per_page, "replace_parent": replace_parent, "repo": repo, "sub_issue_id": sub_issue_id}) });
}

function removeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issue";
  var description = "Remove sub-issue " + sub_issue_id + " from issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function reprioritizeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issues/priority";
  var description = "Reprioritize sub-issue " + sub_issue_id + " in issue " + issue_number + " in repo " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"after_id": after_id, "before_id": before_id, "issue_number": issue_number, "owner": owner, "page": page, "per_page": per_page, "replace_parent": replace_parent, "repo": repo, "sub_issue_id": sub_issue_id}) });
}

function getParentIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/parent";
  var description = "Get parent issue of issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 301, 404, 410] });
}

function listSubIssues(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issues";
  var description = "List sub-issues of issue " + issue_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 410] });
}

function tryToAddExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issues";
  var description = "Try Add Existing SubIssue " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/parent";
  var description = "Verify SubIssue " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SubIssue found");
}

function verifySubIssueDoesNotExist(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/parent";
  var description = "Verify SubIssue " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SubIssue not found");
}

function tryToDeleteANonExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issue";
  var description = "Verify negative delete for SubIssue";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  return bp.EventSet("Delete SubIssue", function(e) {
      return e.name === "Done: " + "Remove sub-issue " + sub_issue_id + " from issue " + issue_number + " in repo " + owner + "/" + repo;
  });
}

function waitForSubIssueAdded(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id) {
  waitFor(matchSuccess("Add sub-issue " + sub_issue_id + " to issue " + issue_number + " in repo " + owner + "/" + repo));
}

function matchAnySubIssueAdded() {
  return bp.EventSet("Any SubIssue Added", function(e) {
      return e.name.startsWith("Done: Add sub-issue ");
  });
}

function createLabel(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Create label " + name + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "description": description, "name": name, "new_name": new_name, "owner": owner, "page": page, "per_page": per_page, "repo": repo}) });
}

function getLabel(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Get label " + name + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateLabel(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Update label " + name + " in repo " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "description": description, "name": name, "new_name": new_name, "owner": owner, "page": page, "per_page": per_page, "repo": repo}) });
}

function deleteLabel(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Delete label " + name + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function listLabelsForRepo(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "List labels for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function tryToAddExistingLabel(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Try Add Existing Label " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Verify Label " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Label found");
}

function verifyLabelDoesNotExist(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Verify Label " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Label not found");
}

function tryToDeleteANonExistingLabel(color, description, name, new_name, owner, page, per_page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Verify negative delete for Label";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedLabel(color, description, name, new_name, owner, page, per_page, repo) {
  return bp.EventSet("Delete Label", function(e) {
      return e.name === "Done: " + "Delete label " + name + " in repo " + owner + "/" + repo;
  });
}

function waitForLabelAdded(color, description, name, new_name, owner, page, per_page, repo) {
  waitFor(matchSuccess("Create label " + name + " in repo " + owner + "/" + repo));
}

function matchAnyLabelAdded() {
  return bp.EventSet("Any Label Added", function(e) {
      return e.name.startsWith("Done: Create label ");
  });
}

function createMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Create milestone " + title + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "direction": direction, "due_on": due_on, "milestone_number": milestone_number, "owner": owner, "page": page, "per_page": per_page, "repo": repo, "sort": sort, "state": state, "title": title}) });
}

function getMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Get milestone " + milestone_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Update milestone " + milestone_number + " in repo " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "direction": direction, "due_on": due_on, "milestone_number": milestone_number, "owner": owner, "page": page, "per_page": per_page, "repo": repo, "sort": sort, "state": state, "title": title}) });
}

function deleteMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Delete milestone " + milestone_number + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function listMilestones(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "List milestones in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function tryToAddExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Try Add Existing Milestone " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Verify Milestone " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Milestone found");
}

function verifyMilestoneDoesNotExist(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Verify Milestone " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Milestone not found");
}

function tryToDeleteANonExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Verify negative delete for Milestone";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  return bp.EventSet("Delete Milestone", function(e) {
      return e.name === "Done: " + "Delete milestone " + milestone_number + " in repo " + owner + "/" + repo;
  });
}

function waitForMilestoneAdded(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title) {
  waitFor(matchSuccess("Create milestone " + title + " in repo " + owner + "/" + repo));
}

function matchAnyMilestoneAdded() {
  return bp.EventSet("Any Milestone Added", function(e) {
      return e.name.startsWith("Done: Create milestone ");
  });
}

function createTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  var url = "/orgs/" + org + "/teams";
  var description = "Create team " + name + " in org " + org + " " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "maintainers": maintainers, "name": name, "notification_setting": notification_setting, "org": org, "parent_team_id": parent_team_id, "permission": permission, "privacy": privacy, "repo_names": repo_names, "team_id": team_id}) });
}

function getTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  var url = "/teams/" + team_id;
  var description = "Get team with id " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  var url = "/teams/" + team_id;
  var description = "Update team " + team_id + " with name " + name;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "maintainers": maintainers, "name": name, "notification_setting": notification_setting, "org": org, "parent_team_id": parent_team_id, "permission": permission, "privacy": privacy, "repo_names": repo_names, "team_id": team_id}) });
}

function deleteTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  var url = "/teams/" + team_id;
  var description = "Delete team with id " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function tryToAddExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  var url = "/orgs/" + org + "/teams";
  var description = "Try Add Existing Team " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  var url = "/teams/" + team_id;
  var description = "Verify Team " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Team found");
}

function verifyTeamDoesNotExist(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  var url = "/teams/" + team_id;
  var description = "Verify Team " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Team not found");
}

function tryToDeleteANonExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  var url = "/teams/" + team_id;
  var description = "Verify negative delete for Team";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  return bp.EventSet("Delete Team", function(e) {
      return e.name === "Done: " + "Delete team with id " + team_id;
  });
}

function waitForTeamAdded(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id) {
  waitFor(matchSuccess("Create team " + name + " in org " + org));
}

function matchAnyTeamAdded() {
  return bp.EventSet("Any Team Added", function(e) {
      return e.name.startsWith("Done: Create team ");
  });
}

function createDiscussion(body, discussion_number, org, _private, team_slug, title) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions";
  var description = "Create discussion " + title + " in team " + team_slug + " org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "discussion_number": discussion_number, "org": org, "private": _private, "team_slug": team_slug, "title": title}) });
}

function getDiscussion(body, discussion_number, org, _private, team_slug, title) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Get discussion " + discussion_number + " in team " + team_slug + " org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateDiscussion(body, discussion_number, org, _private, team_slug, title) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Update discussion " + discussion_number + " in team " + team_slug + " org " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "discussion_number": discussion_number, "org": org, "private": _private, "team_slug": team_slug, "title": title}) });
}

function deleteDiscussion(body, discussion_number, org, _private, team_slug, title) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Delete discussion " + discussion_number + " in team " + team_slug + " org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingDiscussion(body, discussion_number, org, _private, team_slug, title) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions";
  var description = "Try Add Existing Discussion " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Verify Discussion " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Discussion found");
}

function verifyDiscussionDoesNotExist(body, discussion_number, org, _private, team_slug, title) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Verify Discussion " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Discussion not found");
}

function tryToDeleteANonExistingDiscussion(body, discussion_number, org, _private, team_slug, title) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Verify negative delete for Discussion";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedDiscussion(body, discussion_number, org, _private, team_slug, title) {
  return bp.EventSet("Delete Discussion", function(e) {
      return e.name === "Done: " + "Delete discussion " + discussion_number + " in team " + team_slug + " org " + org;
  });
}

function waitForDiscussionAdded(body, discussion_number, org, _private, team_slug, title) {
  waitFor(matchSuccess("Create discussion " + title + " in team " + team_slug + " org " + org));
}

function matchAnyDiscussionAdded() {
  return bp.EventSet("Any Discussion Added", function(e) {
      return e.name.startsWith("Done: Create discussion ");
  });
}

function createDiscussionComment(body, comment_number, discussion_number, org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments";
  var description = "Create comment in discussion " + discussion_number + " team " + team_slug + " org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_number": comment_number, "discussion_number": discussion_number, "org": org, "team_slug": team_slug}) });
}

function getDiscussionComment(body, comment_number, discussion_number, org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Get comment " + comment_number + " in discussion " + discussion_number + " team " + team_slug + " org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateDiscussionComment(body, comment_number, discussion_number, org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Update comment " + comment_number + " in discussion " + discussion_number + " team " + team_slug + " org " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_number": comment_number, "discussion_number": discussion_number, "org": org, "team_slug": team_slug}) });
}

function deleteDiscussionComment(body, comment_number, discussion_number, org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Delete comment " + comment_number + " in discussion " + discussion_number + " team " + team_slug + " org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments";
  var description = "Try Add Existing DiscussionComment " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Verify DiscussionComment " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("DiscussionComment found");
}

function verifyDiscussionCommentDoesNotExist(body, comment_number, discussion_number, org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Verify DiscussionComment " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("DiscussionComment not found");
}

function tryToDeleteANonExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Verify negative delete for DiscussionComment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedDiscussionComment(body, comment_number, discussion_number, org, team_slug) {
  return bp.EventSet("Delete DiscussionComment", function(e) {
      return e.name === "Done: " + "Delete comment " + comment_number + " in discussion " + discussion_number + " team " + team_slug + " org " + org;
  });
}

function waitForDiscussionCommentAdded(body, comment_number, discussion_number, org, team_slug) {
  waitFor(matchSuccess("Create comment in discussion " + discussion_number + " team " + team_slug + " org " + org));
}

function matchAnyDiscussionCommentAdded() {
  return bp.EventSet("Any DiscussionComment Added", function(e) {
      return e.name.startsWith("Done: Create comment in discussion ");
  });
}

function getTeamProjectPermissions(org, permission, project_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/projects/" + project_id;
  var description = "Check team permissions for project " + project_id + " in team " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateTeamProjectPermissions(org, permission, project_id, team_id, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/projects/" + project_id;
  var description = "Add or update team project permissions for project " + project_id + " in team " + team_slug + " of org " + org + " with permission " + permission + " " + team_id;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "permission": permission, "project_id": project_id, "team_id": team_id, "team_slug": team_slug}) });
}

function removeTeamProject(org, permission, project_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/projects/" + project_id;
  var description = "Remove project " + project_id + " from team " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function addOrUpdateTeamProjectPermissions(org, permission, project_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/projects/" + project_id;
  var description = "Add or update team project permissions for project " + project_id + " in team " + team_id + " with permission " + permission;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "permission": permission, "project_id": project_id, "team_id": team_id, "team_slug": team_slug}) });
}

function tryToAddExistingTeamProject(org, permission, project_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/projects/" + project_id;
  var description = "Try Add Existing TeamProject " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamProjectExists(org, permission, project_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/projects/" + project_id;
  var description = "Verify TeamProject " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamProject found");
}

function verifyTeamProjectDoesNotExist(org, permission, project_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/projects/" + project_id;
  var description = "Verify TeamProject " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamProject not found");
}

function tryToDeleteANonExistingTeamProject(org, permission, project_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/projects/" + project_id;
  var description = "Verify negative delete for TeamProject";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamProject(org, permission, project_id, team_id, team_slug) {
  return bp.EventSet("Delete TeamProject", function(e) {
      return e.name === "Done: " + "Remove project " + project_id + " from team " + team_id;
  });
}

function waitForTeamProjectAdded(org, permission, project_id, team_id, team_slug) {
  waitFor(matchSuccess("Add or update team project permissions for project " + project_id + " in team " + team_id + " with permission " + permission));
}

function matchAnyTeamProjectAdded() {
  return bp.EventSet("Any TeamProject Added", function(e) {
      return e.name.startsWith("Done: Add or update team project permissions for project ");
  });
}

function getTeamRepoPermissions(org, owner, permission, repo, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Check team permissions for repository " + owner + "/" + repo + " in team " + team_slug + " of org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function updateTeamRepoPermissions(org, owner, permission, repo, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Add or update team repository permissions for repo " + owner + "/" + repo + " in team " + team_slug + " of org " + org + " with permission " + permission;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "owner": owner, "permission": permission, "repo": repo, "team_slug": team_slug}) });
}

function removeTeamRepo(org, owner, permission, repo, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Remove repository " + owner + "/" + repo + " from team " + team_slug + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function verifyTeamRepoExists(org, owner, permission, repo, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Verify TeamRepo " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamRepo found");
}

function verifyTeamRepoDoesNotExist(org, owner, permission, repo, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Verify TeamRepo " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamRepo not found");
}

function tryToDeleteANonExistingTeamRepo(org, owner, permission, repo, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Verify negative delete for TeamRepo";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamRepo(org, owner, permission, repo, team_slug) {
  return bp.EventSet("Delete TeamRepo", function(e) {
      return e.name === "Done: " + "Remove repository " + owner + "/" + repo + " from team " + team_slug + " in org " + org;
  });
}

function matchAnyTeamRepoAdded() {
  return bp.EventSet("Any TeamRepo Added", function(e) {
      return e.name.startsWith("Done: Create TeamRepo");
  });
}

function getTeamDiscussionLegacy(body, discussion_number, _private, team_id, title) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number;
  var description = "Get discussion " + discussion_number + " in team " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateTeamDiscussionLegacy(body, discussion_number, _private, team_id, title) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number;
  var description = "Update discussion " + discussion_number + " in team " + team_id + " with title " + title;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "discussion_number": discussion_number, "private": _private, "team_id": team_id, "title": title}) });
}

function deleteTeamDiscussionLegacy(body, discussion_number, _private, team_id, title) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number;
  var description = "Delete discussion " + discussion_number + " in team " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function createTeamDiscussionLegacy(body, discussion_number, _private, team_id, title) {
  var url = "/teams/" + team_id + "/discussions";
  var description = "Create discussion in team " + team_id + " with title " + title;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "discussion_number": discussion_number, "private": _private, "team_id": team_id, "title": title}) });
}

function tryToAddExistingTeamDiscussion(body, discussion_number, _private, team_id, title) {
  var url = "/teams/" + team_id + "/discussions";
  var description = "Try Add Existing TeamDiscussion " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number;
  var description = "Verify TeamDiscussion " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamDiscussion found");
}

function verifyTeamDiscussionDoesNotExist(body, discussion_number, _private, team_id, title) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number;
  var description = "Verify TeamDiscussion " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamDiscussion not found");
}

function tryToDeleteANonExistingTeamDiscussion(body, discussion_number, _private, team_id, title) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number;
  var description = "Verify negative delete for TeamDiscussion";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamDiscussion(body, discussion_number, _private, team_id, title) {
  return bp.EventSet("Delete TeamDiscussion", function(e) {
      return e.name === "Done: " + "Delete discussion " + discussion_number + " in team " + team_id;
  });
}

function waitForTeamDiscussionAdded(body, discussion_number, _private, team_id, title) {
  waitFor(matchSuccess("Create discussion in team " + team_id + " with title " + title));
}

function matchAnyTeamDiscussionAdded() {
  return bp.EventSet("Any TeamDiscussion Added", function(e) {
      return e.name.startsWith("Done: Create discussion in team ");
  });
}

function getTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Get comment " + comment_number + " of discussion " + discussion_number + " in team " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Update comment " + comment_number + " of discussion " + discussion_number + " in team " + team_id + " with body " + body;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_number": comment_number, "discussion_number": discussion_number, "team_id": team_id}) });
}

function deleteTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Delete comment " + comment_number + " of discussion " + discussion_number + " in team " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function createTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments";
  var description = "Create comment on discussion " + discussion_number + " in team " + team_id + " with body " + body;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_number": comment_number, "discussion_number": discussion_number, "team_id": team_id}) });
}

function tryToAddExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments";
  var description = "Try Add Existing TeamDiscussionComment " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Verify TeamDiscussionComment " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamDiscussionComment found");
}

function verifyTeamDiscussionCommentDoesNotExist(body, comment_number, discussion_number, team_id) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Verify TeamDiscussionComment " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamDiscussionComment not found");
}

function tryToDeleteANonExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Verify negative delete for TeamDiscussionComment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamDiscussionComment(body, comment_number, discussion_number, team_id) {
  return bp.EventSet("Delete TeamDiscussionComment", function(e) {
      return e.name === "Done: " + "Delete comment " + comment_number + " of discussion " + discussion_number + " in team " + team_id;
  });
}

function waitForTeamDiscussionCommentAdded(body, comment_number, discussion_number, team_id) {
  waitFor(matchSuccess("Create comment on discussion " + discussion_number + " in team " + team_id + " with body " + body));
}

function matchAnyTeamDiscussionCommentAdded() {
  return bp.EventSet("Any TeamDiscussionComment Added", function(e) {
      return e.name.startsWith("Done: Create comment on discussion ");
  });
}

function getTeamMember(team_id, username) {
  var url = "/teams/" + team_id + "/members/" + username;
  var description = "Get team member " + username + " in team " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function addTeamMember(team_id, username) {
  var url = "/teams/" + team_id + "/members/" + username;
  var description = "Add team member " + username + " to team " + team_id;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"team_id": team_id, "username": username}) });
}

function removeTeamMember(team_id, username) {
  var url = "/teams/" + team_id + "/members/" + username;
  var description = "Remove team member " + username + " from team " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingTeamMember(team_id, username) {
  var url = "/teams/" + team_id + "/members/" + username;
  var description = "Try Add Existing TeamMember " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamMemberExists(team_id, username) {
  var url = "/teams/" + team_id + "/members/" + username;
  var description = "Verify TeamMember " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamMember found");
}

function verifyTeamMemberDoesNotExist(team_id, username) {
  var url = "/teams/" + team_id + "/members/" + username;
  var description = "Verify TeamMember " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamMember not found");
}

function tryToDeleteANonExistingTeamMember(team_id, username) {
  var url = "/teams/" + team_id + "/members/" + username;
  var description = "Verify negative delete for TeamMember";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamMember(team_id, username) {
  return bp.EventSet("Delete TeamMember", function(e) {
      return e.name === "Done: " + "Remove team member " + username + " from team " + team_id;
  });
}

function waitForTeamMemberAdded(team_id, username) {
  waitFor(matchSuccess("Add team member " + username + " to team " + team_id));
}

function matchAnyTeamMemberAdded() {
  return bp.EventSet("Any TeamMember Added", function(e) {
      return e.name.startsWith("Done: Add team member ");
  });
}

function getTeamMembership(role, team_id, username) {
  var url = "/teams/" + team_id + "/memberships/" + username;
  var description = "Get team membership for user " + username + " in team " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function addOrUpdateTeamMembership(role, team_id, username) {
  var url = "/teams/" + team_id + "/memberships/" + username;
  var description = "Add or update team membership for user " + username + " in team " + team_id + " with role " + role;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"role": role, "team_id": team_id, "username": username}) });
}

function removeTeamMembership(role, team_id, username) {
  var url = "/teams/" + team_id + "/memberships/" + username;
  var description = "Remove team membership for user " + username + " from team " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403] });
}

function tryToAddExistingTeamMembership(role, team_id, username) {
  var url = "/teams/" + team_id + "/memberships/" + username;
  var description = "Try Add Existing TeamMembership " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamMembershipExists(role, team_id, username) {
  var url = "/teams/" + team_id + "/memberships/" + username;
  var description = "Verify TeamMembership " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamMembership found");
}

function verifyTeamMembershipDoesNotExist(role, team_id, username) {
  var url = "/teams/" + team_id + "/memberships/" + username;
  var description = "Verify TeamMembership " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamMembership not found");
}

function tryToDeleteANonExistingTeamMembership(role, team_id, username) {
  var url = "/teams/" + team_id + "/memberships/" + username;
  var description = "Verify negative delete for TeamMembership";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamMembership(role, team_id, username) {
  return bp.EventSet("Delete TeamMembership", function(e) {
      return e.name === "Done: " + "Remove team membership for user " + username + " from team " + team_id;
  });
}

function waitForTeamMembershipAdded(role, team_id, username) {
  waitFor(matchSuccess("Add or update team membership for user " + username + " in team " + team_id + " with role " + role));
}

function matchAnyTeamMembershipAdded() {
  return bp.EventSet("Any TeamMembership Added", function(e) {
      return e.name.startsWith("Done: Add or update team membership for user ");
  });
}

function getTeamRepoPermissions(owner, permission, repo, team_id) {
  var url = "/teams/" + team_id + "/repos/" + owner + "/" + repo;
  var description = "Check team permissions for repository " + owner + "/" + repo + " in team " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function addOrUpdateTeamRepoPermissions(owner, permission, repo, team_id) {
  var url = "/teams/" + team_id + "/repos/" + owner + "/" + repo;
  var description = "Add or update team repository permissions for repository " + owner + "/" + repo + " in team " + team_id + " with permission " + permission;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "permission": permission, "repo": repo, "team_id": team_id}) });
}

function removeTeamRepo(owner, permission, repo, team_id) {
  var url = "/teams/" + team_id + "/repos/" + owner + "/" + repo;
  var description = "Remove repository " + owner + "/" + repo + " from team " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingTeamRepository(owner, permission, repo, team_id) {
  var url = "/teams/" + team_id + "/repos/" + owner + "/" + repo;
  var description = "Try Add Existing TeamRepository " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamRepositoryExists(owner, permission, repo, team_id) {
  var url = "/teams/" + team_id + "/repos/" + owner + "/" + repo;
  var description = "Verify TeamRepository " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamRepository found");
}

function verifyTeamRepositoryDoesNotExist(owner, permission, repo, team_id) {
  var url = "/teams/" + team_id + "/repos/" + owner + "/" + repo;
  var description = "Verify TeamRepository " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamRepository not found");
}

function tryToDeleteANonExistingTeamRepository(owner, permission, repo, team_id) {
  var url = "/teams/" + team_id + "/repos/" + owner + "/" + repo;
  var description = "Verify negative delete for TeamRepository";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamRepository(owner, permission, repo, team_id) {
  return bp.EventSet("Delete TeamRepository", function(e) {
      return e.name === "Done: " + "Remove repository " + owner + "/" + repo + " from team " + team_id;
  });
}

function waitForTeamRepositoryAdded(owner, permission, repo, team_id) {
  waitFor(matchSuccess("Add or update team repository permissions for repository " + owner + "/" + repo + " in team " + team_id + " with permission " + permission));
}

function matchAnyTeamRepositoryAdded() {
  return bp.EventSet("Any TeamRepository Added", function(e) {
      return e.name.startsWith("Done: Add or update team repository permissions for repository ");
  });
}

function getNotificationThread(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Get notification thread " + thread_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function markNotificationThreadAsRead(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Mark notification thread " + thread_id + " as read";
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [205, 304, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"thread_id": thread_id}) });
}

function markNotificationThreadAsDone(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Mark notification thread " + thread_id + " as done";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function verifyNotificationExists(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Verify Notification " + thread_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Notification found");
}

function verifyNotificationDoesNotExist(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Verify Notification " + thread_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Notification not found");
}

function tryToDeleteANonExistingNotification(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Verify negative delete for Notification";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedNotification(thread_id) {
  return bp.EventSet("Delete Notification", function(e) {
      return e.name === "Done: " + "Mark notification thread " + thread_id + " as done";
  });
}

function matchAnyNotificationAdded() {
  return bp.EventSet("Any Notification Added", function(e) {
      return e.name.startsWith("Done: Create Notification");
  });
}

function getThreadSubscription(ignored, thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Get thread subscription for thread " + thread_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function setThreadSubscription(ignored, thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Set thread subscription for thread " + thread_id + " with ignored " + ignored;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 304, 401, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"ignored": ignored, "thread_id": thread_id}) });
}

function deleteThreadSubscription(ignored, thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Delete thread subscription for thread " + thread_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403] });
}

function tryToAddExistingThreadSubscription(ignored, thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Try Add Existing ThreadSubscription " + thread_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyThreadSubscriptionExists(ignored, thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Verify ThreadSubscription " + thread_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ThreadSubscription found");
}

function verifyThreadSubscriptionDoesNotExist(ignored, thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Verify ThreadSubscription " + thread_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ThreadSubscription not found");
}

function tryToDeleteANonExistingThreadSubscription(ignored, thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Verify negative delete for ThreadSubscription";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedThreadSubscription(ignored, thread_id) {
  return bp.EventSet("Delete ThreadSubscription", function(e) {
      return e.name === "Done: " + "Delete thread subscription for thread " + thread_id;
  });
}

function waitForThreadSubscriptionAdded(ignored, thread_id) {
  waitFor(matchSuccess("Set thread subscription for thread " + thread_id + " with ignored " + ignored));
}

function matchAnyThreadSubscriptionAdded() {
  return bp.EventSet("Any ThreadSubscription Added", function(e) {
      return e.name.startsWith("Done: Set thread subscription for thread ");
  });
}

function markNotificationsAsRead(id, last_read_at, read) {
  var url = "/notifications";
  var description = "Mark notifications as read with last_read_at " + last_read_at + " and read " + read + " " + id;
  var body = {
    "id": id,
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 205, 304, 401, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "last_read_at": last_read_at, "read": read}) });
}

// verifyNotificationMarkExists skipped: No GET /{id} operation detected.
function matchAnyNotificationMarkAdded() {
  return bp.EventSet("Any NotificationMark Added", function(e) {
      return e.name.startsWith("Done: Create NotificationMark");
  });
}

function markRepoNotificationsAsRead(last_read_at, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "Mark repository notifications as read for repo " + owner + "/" + repo + " with last_read_at " + last_read_at;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 205], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"last_read_at": last_read_at, "owner": owner, "repo": repo}) });
}

// verifyRepoNotificationMarkExists skipped: No GET /{id} operation detected.
function matchAnyRepoNotificationMarkAdded() {
  return bp.EventSet("Any RepoNotificationMark Added", function(e) {
      return e.name.startsWith("Done: Create RepoNotificationMark");
  });
}

function getRepoSubscription(ignored, owner, repo, subscribed) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Get subscription for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function setRepoSubscription(ignored, owner, repo, subscribed) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Set subscription for repo " + owner + "/" + repo + " with subscribed " + subscribed + " and ignored " + ignored;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"ignored": ignored, "owner": owner, "repo": repo, "subscribed": subscribed}) });
}

function deleteRepoSubscription(ignored, owner, repo, subscribed) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Delete subscription for repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingRepoSubscription(ignored, owner, repo, subscribed) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Try Add Existing RepoSubscription " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepoSubscriptionExists(ignored, owner, repo, subscribed) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Verify RepoSubscription " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepoSubscription found");
}

function verifyRepoSubscriptionDoesNotExist(ignored, owner, repo, subscribed) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Verify RepoSubscription " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepoSubscription not found");
}

function tryToDeleteANonExistingRepoSubscription(ignored, owner, repo, subscribed) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Verify negative delete for RepoSubscription";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepoSubscription(ignored, owner, repo, subscribed) {
  return bp.EventSet("Delete RepoSubscription", function(e) {
      return e.name === "Done: " + "Delete subscription for repo " + owner + "/" + repo;
  });
}

function waitForRepoSubscriptionAdded(ignored, owner, repo, subscribed) {
  waitFor(matchSuccess("Set subscription for repo " + owner + "/" + repo + " with subscribed " + subscribed + " and ignored " + ignored));
}

function matchAnyRepoSubscriptionAdded() {
  return bp.EventSet("Any RepoSubscription Added", function(e) {
      return e.name.startsWith("Done: Set subscription for repo ");
  });
}

function checkRepoIsStarredByAuthenticatedUser(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Check if repo " + owner + "/" + repo + " is starred by authenticated user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 304, 401, 403, 404] });
}

function starRepoForAuthenticatedUser(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Star repo " + owner + "/" + repo + " for authenticated user";
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 304, 401, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo}) });
}

function unstarRepoForAuthenticatedUser(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Unstar repo " + owner + "/" + repo + " for authenticated user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404] });
}

function tryToAddExistingStarredRepo(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Try Add Existing StarredRepo " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyStarredRepoExists(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify StarredRepo " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("StarredRepo found");
}

function verifyStarredRepoDoesNotExist(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify StarredRepo " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("StarredRepo not found");
}

function tryToDeleteANonExistingStarredRepo(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify negative delete for StarredRepo";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedStarredRepo(owner, repo) {
  return bp.EventSet("Delete StarredRepo", function(e) {
      return e.name === "Done: " + "Unstar repo " + owner + "/" + repo + " for authenticated user";
  });
}

function waitForStarredRepoAdded(owner, repo) {
  waitFor(matchSuccess("Star repo " + owner + "/" + repo + " for authenticated user"));
}

function matchAnyStarredRepoAdded() {
  return bp.EventSet("Any StarredRepo Added", function(e) {
      return e.name.startsWith("Done: Star repo ");
  });
}

function getPackageForUser(package_name, package_type, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name;
  var description = "Get package " + package_name + " of type " + package_type + " for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deletePackageForUser(package_name, package_type, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name;
  var description = "Delete package " + package_name + " of type " + package_type + " for user " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 403, 404] });
}

function restorePackageForUser(package_name, package_type, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/restore";
  var description = "Restore package " + package_name + " of type " + package_type + " for user " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 401, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"package_name": package_name, "package_type": package_type, "username": username}) });
}

function verifyPackageExists(package_name, package_type, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name;
  var description = "Verify Package " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Package found");
}

function verifyPackageDoesNotExist(package_name, package_type, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name;
  var description = "Verify Package " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Package not found");
}

function tryToDeleteANonExistingPackage(package_name, package_type, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name;
  var description = "Verify negative delete for Package";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPackage(package_name, package_type, username) {
  return bp.EventSet("Delete Package", function(e) {
      return e.name === "Done: " + "Delete package " + package_name + " of type " + package_type + " for user " + username;
  });
}

function matchAnyPackageAdded() {
  return bp.EventSet("Any Package Added", function(e) {
      return e.name.startsWith("Done: Create Package");
  });
}

function getPackageVersionForUser(package_name, package_type, package_version_id, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Get package version " + package_version_id + " of package " + package_name + " type " + package_type + " for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deletePackageVersionForUser(package_name, package_type, package_version_id, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Delete package version " + package_version_id + " of package " + package_name + " type " + package_type + " for user " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 403, 404] });
}

function restorePackageVersionForUser(package_name, package_type, package_version_id, username) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id + "/restore";
  var description = "Restore package version " + package_version_id + " of package " + package_name + " type " + package_type + " for authenticated user " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 401, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"package_name": package_name, "package_type": package_type, "package_version_id": package_version_id, "username": username}) });
}

function restorePackageVersionForUser(package_name, package_type, package_version_id, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id + "/restore";
  var description = "Restore package version " + package_version_id + " of package " + package_name + " type " + package_type + " for user " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 401, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"package_name": package_name, "package_type": package_type, "package_version_id": package_version_id, "username": username}) });
}

function restorePackageVersionForUser(package_name, package_type, package_version_id, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id + "/restore";
  var description = "Restore package version " + package_version_id + " of package " + package_name + " (" + package_type + ") for user " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 401, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"package_name": package_name, "package_type": package_type, "package_version_id": package_version_id, "username": username}) });
}

function tryToAddExistingPackageVersion(package_name, package_type, package_version_id, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id + "/restore";
  var description = "Try Add Existing PackageVersion " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPackageVersionExists(package_name, package_type, package_version_id, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Verify PackageVersion " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PackageVersion found");
}

function verifyPackageVersionDoesNotExist(package_name, package_type, package_version_id, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Verify PackageVersion " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PackageVersion not found");
}

function tryToDeleteANonExistingPackageVersion(package_name, package_type, package_version_id, username) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Verify negative delete for PackageVersion";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPackageVersion(package_name, package_type, package_version_id, username) {
  return bp.EventSet("Delete PackageVersion", function(e) {
      return e.name === "Done: " + "Delete package version " + package_version_id + " of package " + package_name + " type " + package_type + " for user " + username;
  });
}

function waitForPackageVersionAdded(package_name, package_type, package_version_id, username) {
  waitFor(matchSuccess("Restore package version " + package_version_id + " of package " + package_name + " (" + package_type + ") for user " + username));
}

function matchAnyPackageVersionAdded() {
  return bp.EventSet("Any PackageVersion Added", function(e) {
      return e.name.startsWith("Done: Restore package version ");
  });
}

function restorePackageForAuthenticatedUser(id, package_name, package_type) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/restore";
  var description = "Restore package " + package_name + " of type " + package_type + " for authenticated user " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 401, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "package_name": package_name, "package_type": package_type}) });
}

// verifyUserPackageExists skipped: No GET /{id} operation detected.
function matchAnyUserPackageAdded() {
  return bp.EventSet("Any UserPackage Added", function(e) {
      return e.name.startsWith("Done: Create UserPackage");
  });
}

function getPackageVersionForAuthenticatedUser(package_name, package_type, package_version_id) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Get package version " + package_version_id + " of package " + package_name + " type " + package_type + " for authenticated user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deletePackageVersionForAuthenticatedUser(package_name, package_type, package_version_id) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Delete package version " + package_version_id + " of package " + package_name + " type " + package_type + " for authenticated user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 403, 404] });
}

function verifyUserPackageVersionExists(package_name, package_type, package_version_id) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Verify UserPackageVersion " + package_type + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserPackageVersion found");
}

function verifyUserPackageVersionDoesNotExist(package_name, package_type, package_version_id) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Verify UserPackageVersion " + package_type + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserPackageVersion not found");
}

function tryToDeleteANonExistingUserPackageVersion(package_name, package_type, package_version_id) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Verify negative delete for UserPackageVersion";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUserPackageVersion(package_name, package_type, package_version_id) {
  return bp.EventSet("Delete UserPackageVersion", function(e) {
      return e.name === "Done: " + "Delete package version " + package_version_id + " of package " + package_name + " type " + package_type + " for authenticated user";
  });
}

function matchAnyUserPackageVersionAdded() {
  return bp.EventSet("Any UserPackageVersion Added", function(e) {
      return e.name.startsWith("Done: Create UserPackageVersion");
  });
}

function getAlert(alert_number, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number;
  var description = "Get code scanning alert " + alert_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 404, 503] });
}

function updateAlert(alert_number, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number;
  var description = "Update code scanning alert " + alert_number + " in repo " + owner + "/" + repo + " with state " + state;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"alert_number": alert_number, "owner": owner, "repo": repo, "state": state}) });
}

function verifyCodeScanningAlertExists(alert_number, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number;
  var description = "Verify CodeScanningAlert " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeScanningAlert found");
}

function verifyCodeScanningAlertDoesNotExist(alert_number, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number;
  var description = "Verify CodeScanningAlert " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeScanningAlert not found");
}

function matchAnyCodeScanningAlertAdded() {
  return bp.EventSet("Any CodeScanningAlert Added", function(e) {
      return e.name.startsWith("Done: Create CodeScanningAlert");
  });
}

function getAutofix(alert_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix";
  var description = "Get autofix status for alert " + alert_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404, 503] });
}

function createAutofix(alert_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix";
  var description = "Create autofix for alert " + alert_number + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 202, 400, 403, 404, 409, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"alert_number": alert_number, "owner": owner, "repo": repo}) });
}

function tryToAddExistingCodeScanningAlertAutofix(alert_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix";
  var description = "Try Add Existing CodeScanningAlertAutofix " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCodeScanningAlertAutofixExists(alert_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix";
  var description = "Verify CodeScanningAlertAutofix " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeScanningAlertAutofix found");
}

function verifyCodeScanningAlertAutofixDoesNotExist(alert_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix";
  var description = "Verify CodeScanningAlertAutofix " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeScanningAlertAutofix not found");
}

function waitForCodeScanningAlertAutofixAdded(alert_number, owner, repo) {
  waitFor(matchSuccess("Create autofix for alert " + alert_number + " in repo " + owner + "/" + repo));
}

function matchAnyCodeScanningAlertAutofixAdded() {
  return bp.EventSet("Any CodeScanningAlertAutofix Added", function(e) {
      return e.name.startsWith("Done: Create autofix for alert ");
  });
}

function commitAutofix(alert_number, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix/commits";
  var description = "Commit autofix for alert " + alert_number + " in repo " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 409, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"alert_number": alert_number, "id": id, "owner": owner, "repo": repo}) });
}

// verifyCodeScanningAutofixCommitExists skipped: No GET /{id} operation detected.
function waitForCodeScanningAutofixCommitAdded(alert_number, id, owner, repo) {
  waitFor(matchSuccess("Commit autofix for alert " + alert_number + " in repo " + owner + "/" + repo));
}

function matchAnyCodeScanningAutofixCommitAdded() {
  return bp.EventSet("Any CodeScanningAutofixCommit Added", function(e) {
      return e.name.startsWith("Done: Commit autofix for alert ");
  });
}

function listAlertInstances(alert_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/instances";
  var description = "List instances of alert " + alert_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 503] });
}

function verifyCodeScanningAlertInstanceExists(alert_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/instances";
  var description = "Verify CodeScanningAlertInstance " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeScanningAlertInstance found");
}

function verifyCodeScanningAlertInstanceDoesNotExist(alert_number, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/instances";
  var description = "Verify CodeScanningAlertInstance " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeScanningAlertInstance not found");
}

function matchAnyCodeScanningAlertInstanceAdded() {
  return bp.EventSet("Any CodeScanningAlertInstance Added", function(e) {
      return e.name.startsWith("Done: Create CodeScanningAlertInstance");
  });
}

function getAnalysis(analysis_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses/" + analysis_id;
  var description = "Get code scanning analysis " + analysis_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 422, 503] });
}

function deleteAnalysis(analysis_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses/" + analysis_id;
  var description = "Delete code scanning analysis " + analysis_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404, 503] });
}

function verifyCodeScanningAnalysisExists(analysis_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses/" + analysis_id;
  var description = "Verify CodeScanningAnalysis " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeScanningAnalysis found");
}

function verifyCodeScanningAnalysisDoesNotExist(analysis_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses/" + analysis_id;
  var description = "Verify CodeScanningAnalysis " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeScanningAnalysis not found");
}

function tryToDeleteANonExistingCodeScanningAnalysis(analysis_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses/" + analysis_id;
  var description = "Verify negative delete for CodeScanningAnalysis";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCodeScanningAnalysis(analysis_id, owner, repo) {
  return bp.EventSet("Delete CodeScanningAnalysis", function(e) {
      return e.name === "Done: " + "Delete code scanning analysis " + analysis_id + " in repo " + owner + "/" + repo;
  });
}

function matchAnyCodeScanningAnalysisAdded() {
  return bp.EventSet("Any CodeScanningAnalysis Added", function(e) {
      return e.name.startsWith("Done: Create CodeScanningAnalysis");
  });
}

function listRecentAnalyses(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses";
  var description = "List recent code scanning analyses in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 503] });
}

function verifyCodeScanningAnalysisListExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses";
  var description = "Verify CodeScanningAnalysisList " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeScanningAnalysisList found");
}

function verifyCodeScanningAnalysisListDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses";
  var description = "Verify CodeScanningAnalysisList " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeScanningAnalysisList not found");
}

function matchAnyCodeScanningAnalysisListAdded() {
  return bp.EventSet("Any CodeScanningAnalysisList Added", function(e) {
      return e.name.startsWith("Done: Create CodeScanningAnalysisList");
  });
}

function getCodeqlDatabase(language, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases/" + language;
  var description = "Get CodeQL database for language " + language + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 302, 403, 404, 503] });
}

function deleteCodeqlDatabase(language, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases/" + language;
  var description = "Delete CodeQL database for language " + language + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 503] });
}

function verifyCodeQLDatabaseExists(language, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases/" + language;
  var description = "Verify CodeQLDatabase " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeQLDatabase found");
}

function verifyCodeQLDatabaseDoesNotExist(language, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases/" + language;
  var description = "Verify CodeQLDatabase " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeQLDatabase not found");
}

function tryToDeleteANonExistingCodeQLDatabase(language, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases/" + language;
  var description = "Verify negative delete for CodeQLDatabase";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCodeQLDatabase(language, owner, repo) {
  return bp.EventSet("Delete CodeQLDatabase", function(e) {
      return e.name === "Done: " + "Delete CodeQL database for language " + language + " in repo " + owner + "/" + repo;
  });
}

function matchAnyCodeQLDatabaseAdded() {
  return bp.EventSet("Any CodeQLDatabase Added", function(e) {
      return e.name.startsWith("Done: Create CodeQLDatabase");
  });
}

function listCodeqlDatabases(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases";
  var description = "List CodeQL databases in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 503] });
}

function verifyCodeQLDatabaseListExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases";
  var description = "Verify CodeQLDatabaseList " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeQLDatabaseList found");
}

function verifyCodeQLDatabaseListDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases";
  var description = "Verify CodeQLDatabaseList " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeQLDatabaseList not found");
}

function matchAnyCodeQLDatabaseListAdded() {
  return bp.EventSet("Any CodeQLDatabaseList Added", function(e) {
      return e.name.startsWith("Done: Create CodeQLDatabaseList");
  });
}

function createCodeqlVariantAnalysis(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses";
  var description = "Create a CodeQL variant analysis with language " + language + " and query_pack " + query_pack + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"codeql_variant_analysis_id": codeql_variant_analysis_id, "language": language, "owner": owner, "query_pack": query_pack, "repo": repo, "repositories": repositories, "repository_lists": repository_lists, "repository_owners": repository_owners}) });
}

function getCodeqlVariantAnalysis(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses/" + codeql_variant_analysis_id;
  var description = "Get the summary of CodeQL variant analysis " + codeql_variant_analysis_id + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

function tryToAddExistingCodeQLVariantAnalysis(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses";
  var description = "Try Add Existing CodeQLVariantAnalysis " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCodeQLVariantAnalysisExists(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses/" + codeql_variant_analysis_id;
  var description = "Verify CodeQLVariantAnalysis " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeQLVariantAnalysis found");
}

function verifyCodeQLVariantAnalysisDoesNotExist(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses/" + codeql_variant_analysis_id;
  var description = "Verify CodeQLVariantAnalysis " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeQLVariantAnalysis not found");
}

function waitForCodeQLVariantAnalysisAdded(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners) {
  waitFor(matchSuccess("Create a CodeQL variant analysis with language " + language + " and query_pack " + query_pack));
}

function matchAnyCodeQLVariantAnalysisAdded() {
  return bp.EventSet("Any CodeQLVariantAnalysis Added", function(e) {
      return e.name.startsWith("Done: Create a CodeQL variant analysis with language ");
  });
}

function getCodeqlVariantAnalysisRepoTask(codeql_variant_analysis_id, owner, repo, repo_name, repo_owner) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses/" + codeql_variant_analysis_id + "/repos/" + repo_owner + "/" + repo_name;
  var description = "Get the analysis status of repository " + repo_owner + "/" + repo_name + " in CodeQL variant analysis " + codeql_variant_analysis_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

function verifyCodeQLVariantAnalysisRepoTaskExists(codeql_variant_analysis_id, owner, repo, repo_name, repo_owner) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses/" + codeql_variant_analysis_id + "/repos/" + repo_owner + "/" + repo_name;
  var description = "Verify CodeQLVariantAnalysisRepoTask " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeQLVariantAnalysisRepoTask found");
}

function verifyCodeQLVariantAnalysisRepoTaskDoesNotExist(codeql_variant_analysis_id, owner, repo, repo_name, repo_owner) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses/" + codeql_variant_analysis_id + "/repos/" + repo_owner + "/" + repo_name;
  var description = "Verify CodeQLVariantAnalysisRepoTask " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeQLVariantAnalysisRepoTask not found");
}

function matchAnyCodeQLVariantAnalysisRepoTaskAdded() {
  return bp.EventSet("Any CodeQLVariantAnalysisRepoTask Added", function(e) {
      return e.name.startsWith("Done: Create CodeQLVariantAnalysisRepoTask");
  });
}

function getDefaultSetup(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/default-setup";
  var description = "Get code scanning default setup for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 503] });
}

function updateDefaultSetup(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/default-setup";
  var description = "Update code scanning default setup for repo " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 202, 403, 404, 409, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo}) });
}

function verifyDefaultSetupExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/default-setup";
  var description = "Verify DefaultSetup " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("DefaultSetup found");
}

function verifyDefaultSetupDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/default-setup";
  var description = "Verify DefaultSetup " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("DefaultSetup not found");
}

function matchAnyDefaultSetupAdded() {
  return bp.EventSet("Any DefaultSetup Added", function(e) {
      return e.name.startsWith("Done: Create DefaultSetup");
  });
}

function uploadSarif(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/sarifs";
  var description = "Upload SARIF analysis with commit_sha " + commit_sha + " and ref " + ref + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 400, 403, 404, 409, 413, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"checkout_uri": checkout_uri, "commit_sha": commit_sha, "owner": owner, "ref": ref, "repo": repo, "sarif": sarif, "sarif_id": sarif_id, "started_at": started_at, "tool_name": tool_name, "validate": validate}) });
}

function getSarif(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/sarifs/" + sarif_id;
  var description = "Get information about SARIF upload " + sarif_id + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 503] });
}

function tryToAddExistingSarif(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/sarifs";
  var description = "Try Add Existing Sarif " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifySarifExists(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/sarifs/" + sarif_id;
  var description = "Verify Sarif " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Sarif found");
}

function verifySarifDoesNotExist(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/sarifs/" + sarif_id;
  var description = "Verify Sarif " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Sarif not found");
}

function waitForSarifAdded(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate) {
  waitFor(matchSuccess("Upload SARIF analysis with commit_sha " + commit_sha + " and ref " + ref));
}

function matchAnySarifAdded() {
  return bp.EventSet("Any Sarif Added", function(e) {
      return e.name.startsWith("Done: Upload SARIF analysis with commit_sha ");
  });
}

function createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "Create reaction " + content + " for team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"comment_number": comment_number, "content": content, "discussion_number": discussion_number, "org": org, "reaction_id": reaction_id, "team_id": team_id, "team_slug": team_slug}) });
}

function listTeamDiscussionCommentReactions(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "List reactions for team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " from team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_slug + " in org " + org + " " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "Try Add Existing TeamDiscussionCommentReaction " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "Verify TeamDiscussionCommentReaction " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamDiscussionCommentReaction found");
}

function verifyTeamDiscussionCommentReactionDoesNotExist(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "Verify TeamDiscussionCommentReaction " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamDiscussionCommentReaction not found");
}

function tryToDeleteANonExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions/" + reaction_id;
  var description = "Verify negative delete for TeamDiscussionCommentReaction";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  return bp.EventSet("Delete TeamDiscussionCommentReaction", function(e) {
      return e.name === "Done: " + "Delete reaction " + reaction_id + " from team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_slug + " in org " + org;
  });
}

function waitForTeamDiscussionCommentReactionAdded(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug) {
  waitFor(matchSuccess("Create reaction " + content + " for team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_id));
}

function matchAnyTeamDiscussionCommentReactionAdded() {
  return bp.EventSet("Any TeamDiscussionCommentReaction Added", function(e) {
      return e.name.startsWith("Done: Create reaction ");
  });
}

function createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/reactions";
  var description = "Create reaction " + content + " for team discussion " + discussion_number + " of team " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "discussion_number": discussion_number, "org": org, "reaction_id": reaction_id, "team_id": team_id, "team_slug": team_slug}) });
}

function listTeamDiscussionReactions(content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/reactions";
  var description = "List reactions for team discussion " + discussion_number + " of team " + team_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " from team discussion " + discussion_number + " of team " + team_slug + " in org " + org + " " + team_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/reactions";
  var description = "Try Add Existing TeamDiscussionReaction " + team_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/reactions";
  var description = "Verify TeamDiscussionReaction " + team_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamDiscussionReaction found");
}

function verifyTeamDiscussionReactionDoesNotExist(content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/reactions";
  var description = "Verify TeamDiscussionReaction " + team_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamDiscussionReaction not found");
}

function tryToDeleteANonExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/reactions/" + reaction_id;
  var description = "Verify negative delete for TeamDiscussionReaction";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug) {
  return bp.EventSet("Delete TeamDiscussionReaction", function(e) {
      return e.name === "Done: " + "Delete reaction " + reaction_id + " from team discussion " + discussion_number + " of team " + team_slug + " in org " + org;
  });
}

function waitForTeamDiscussionReactionAdded(content, discussion_number, org, reaction_id, team_id, team_slug) {
  waitFor(matchSuccess("Create reaction " + content + " for team discussion " + discussion_number + " of team " + team_id));
}

function matchAnyTeamDiscussionReactionAdded() {
  return bp.EventSet("Any TeamDiscussionReaction Added", function(e) {
      return e.name.startsWith("Done: Create reaction ");
  });
}

function createCommitCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions";
  var description = "Create reaction " + content + " for commit comment " + comment_id + " in repo " + repo + " owned by " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"comment_id": comment_id, "content": content, "owner": owner, "reaction_id": reaction_id, "repo": repo}) });
}

function listCommitCommentReactions(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions";
  var description = "List reactions for commit comment " + comment_id + " in repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteCommitCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " from commit comment " + comment_id + " in repo " + repo + " owned by " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions";
  var description = "Try Add Existing CommitCommentReaction " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions";
  var description = "Verify CommitCommentReaction " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CommitCommentReaction found");
}

function verifyCommitCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions";
  var description = "Verify CommitCommentReaction " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CommitCommentReaction not found");
}

function tryToDeleteANonExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Verify negative delete for CommitCommentReaction";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCommitCommentReaction(comment_id, content, owner, reaction_id, repo) {
  return bp.EventSet("Delete CommitCommentReaction", function(e) {
      return e.name === "Done: " + "Delete reaction " + reaction_id + " from commit comment " + comment_id + " in repo " + repo + " owned by " + owner;
  });
}

function waitForCommitCommentReactionAdded(comment_id, content, owner, reaction_id, repo) {
  waitFor(matchSuccess("Create reaction " + content + " for commit comment " + comment_id + " in repo " + repo + " owned by " + owner));
}

function matchAnyCommitCommentReactionAdded() {
  return bp.EventSet("Any CommitCommentReaction Added", function(e) {
      return e.name.startsWith("Done: Create reaction ");
  });
}

function createIssueCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions";
  var description = "Create reaction " + content + " for issue comment " + comment_id + " in repo " + repo + " owned by " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"comment_id": comment_id, "content": content, "owner": owner, "reaction_id": reaction_id, "repo": repo}) });
}

function listIssueCommentReactions(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions";
  var description = "List reactions for issue comment " + comment_id + " in repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteIssueCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " from issue comment " + comment_id + " in repo " + repo + " owned by " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions";
  var description = "Try Add Existing IssueCommentReaction " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions";
  var description = "Verify IssueCommentReaction " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueCommentReaction found");
}

function verifyIssueCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions";
  var description = "Verify IssueCommentReaction " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueCommentReaction not found");
}

function tryToDeleteANonExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Verify negative delete for IssueCommentReaction";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueCommentReaction(comment_id, content, owner, reaction_id, repo) {
  return bp.EventSet("Delete IssueCommentReaction", function(e) {
      return e.name === "Done: " + "Delete reaction " + reaction_id + " from issue comment " + comment_id + " in repo " + repo + " owned by " + owner;
  });
}

function waitForIssueCommentReactionAdded(comment_id, content, owner, reaction_id, repo) {
  waitFor(matchSuccess("Create reaction " + content + " for issue comment " + comment_id + " in repo " + repo + " owned by " + owner));
}

function matchAnyIssueCommentReactionAdded() {
  return bp.EventSet("Any IssueCommentReaction Added", function(e) {
      return e.name.startsWith("Done: Create reaction ");
  });
}

function createIssueReaction(content, issue_number, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions";
  var description = "Create reaction " + content + " for issue " + issue_number + " in repo " + repo + " owned by " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "issue_number": issue_number, "owner": owner, "reaction_id": reaction_id, "repo": repo}) });
}

function listIssueReactions(content, issue_number, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions";
  var description = "List reactions for issue " + issue_number + " in repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 410] });
}

function deleteIssueReaction(content, issue_number, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " from issue " + issue_number + " in repo " + repo + " owned by " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingIssueReaction(content, issue_number, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions";
  var description = "Try Add Existing IssueReaction " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions";
  var description = "Verify IssueReaction " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueReaction found");
}

function verifyIssueReactionDoesNotExist(content, issue_number, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions";
  var description = "Verify IssueReaction " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueReaction not found");
}

function tryToDeleteANonExistingIssueReaction(content, issue_number, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions/" + reaction_id;
  var description = "Verify negative delete for IssueReaction";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueReaction(content, issue_number, owner, reaction_id, repo) {
  return bp.EventSet("Delete IssueReaction", function(e) {
      return e.name === "Done: " + "Delete reaction " + reaction_id + " from issue " + issue_number + " in repo " + repo + " owned by " + owner;
  });
}

function waitForIssueReactionAdded(content, issue_number, owner, reaction_id, repo) {
  waitFor(matchSuccess("Create reaction " + content + " for issue " + issue_number + " in repo " + repo + " owned by " + owner));
}

function matchAnyIssueReactionAdded() {
  return bp.EventSet("Any IssueReaction Added", function(e) {
      return e.name.startsWith("Done: Create reaction ");
  });
}

function createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions";
  var description = "Create reaction " + content + " for pull request review comment " + comment_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"comment_id": comment_id, "content": content, "owner": owner, "reaction_id": reaction_id, "repo": repo}) });
}

function listPullRequestReviewCommentReactions(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions";
  var description = "List reactions for pull request review comment " + comment_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deletePullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for pull request review comment " + comment_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions";
  var description = "Try Add Existing PullRequestReviewCommentReaction " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions";
  var description = "Verify PullRequestReviewCommentReaction " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequestReviewCommentReaction found");
}

function verifyPullRequestReviewCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions";
  var description = "Verify PullRequestReviewCommentReaction " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequestReviewCommentReaction not found");
}

function tryToDeleteANonExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Verify negative delete for PullRequestReviewCommentReaction";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo) {
  return bp.EventSet("Delete PullRequestReviewCommentReaction", function(e) {
      return e.name === "Done: " + "Delete reaction " + reaction_id + " for pull request review comment " + comment_id + " in repo " + owner + "/" + repo;
  });
}

function waitForPullRequestReviewCommentReactionAdded(comment_id, content, owner, reaction_id, repo) {
  waitFor(matchSuccess("Create reaction " + content + " for pull request review comment " + comment_id + " in repo " + owner + "/" + repo));
}

function matchAnyPullRequestReviewCommentReactionAdded() {
  return bp.EventSet("Any PullRequestReviewCommentReaction Added", function(e) {
      return e.name.startsWith("Done: Create reaction ");
  });
}

function createReleaseReaction(content, owner, reaction_id, release_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions";
  var description = "Create reaction " + content + " for release " + release_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "owner": owner, "reaction_id": reaction_id, "release_id": release_id, "repo": repo}) });
}

function listReleaseReactions(content, owner, reaction_id, release_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions";
  var description = "List reactions for release " + release_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteReleaseReaction(content, owner, reaction_id, release_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for release " + release_id + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingReleaseReaction(content, owner, reaction_id, release_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions";
  var description = "Try Add Existing ReleaseReaction " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions";
  var description = "Verify ReleaseReaction " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ReleaseReaction found");
}

function verifyReleaseReactionDoesNotExist(content, owner, reaction_id, release_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions";
  var description = "Verify ReleaseReaction " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ReleaseReaction not found");
}

function tryToDeleteANonExistingReleaseReaction(content, owner, reaction_id, release_id, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions/" + reaction_id;
  var description = "Verify negative delete for ReleaseReaction";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedReleaseReaction(content, owner, reaction_id, release_id, repo) {
  return bp.EventSet("Delete ReleaseReaction", function(e) {
      return e.name === "Done: " + "Delete reaction " + reaction_id + " for release " + release_id + " in repo " + owner + "/" + repo;
  });
}

function waitForReleaseReactionAdded(content, owner, reaction_id, release_id, repo) {
  waitFor(matchSuccess("Create reaction " + content + " for release " + release_id + " in repo " + owner + "/" + repo));
}

function matchAnyReleaseReactionAdded() {
  return bp.EventSet("Any ReleaseReaction Added", function(e) {
      return e.name.startsWith("Done: Create reaction ");
  });
}

function createPullRequest(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Create pull request with head " + head + " and base " + base + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"base": base, "body": body, "draft": draft, "head": head, "head_repo": head_repo, "issue": issue, "maintainer_can_modify": maintainer_can_modify, "owner": owner, "pull_number": pull_number, "repo": repo, "state": state, "title": title}) });
}

function getPullRequest(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number;
  var description = "Get pull request " + pull_number + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 404, 406, 500, 503] });
}

function updatePullRequest(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number;
  var description = "Update pull request " + pull_number + " with title " + title + " and state " + state + " " + owner;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"base": base, "body": body, "draft": draft, "head": head, "head_repo": head_repo, "issue": issue, "maintainer_can_modify": maintainer_can_modify, "owner": owner, "pull_number": pull_number, "repo": repo, "state": state, "title": title}) });
}

function tryToAddExistingPullRequest(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Try Add Existing PullRequest " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPullRequestExists(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number;
  var description = "Verify PullRequest " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequest found");
}

function verifyPullRequestDoesNotExist(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number;
  var description = "Verify PullRequest " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequest not found");
}

function waitForPullRequestAdded(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title) {
  waitFor(matchSuccess("Create pull request with head " + head + " and base " + base));
}

function matchAnyPullRequestAdded() {
  return bp.EventSet("Any PullRequest Added", function(e) {
      return e.name.startsWith("Done: Create pull request with head ");
  });
}

function getReviewComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Get review comment " + comment_id + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateReviewComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Update review comment " + comment_id + " with body " + body + " " + owner;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_id": comment_id, "owner": owner, "repo": repo}) });
}

function deleteReviewComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Delete review comment " + comment_id + " " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function verifyPullRequestReviewCommentExists(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Verify PullRequestReviewComment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequestReviewComment found");
}

function verifyPullRequestReviewCommentDoesNotExist(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Verify PullRequestReviewComment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequestReviewComment not found");
}

function tryToDeleteANonExistingPullRequestReviewComment(body, comment_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Verify negative delete for PullRequestReviewComment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPullRequestReviewComment(body, comment_id, owner, repo) {
  return bp.EventSet("Delete PullRequestReviewComment", function(e) {
      return e.name === "Done: " + "Delete review comment " + comment_id;
  });
}

function matchAnyPullRequestReviewCommentAdded() {
  return bp.EventSet("Any PullRequestReviewComment Added", function(e) {
      return e.name.startsWith("Done: Create PullRequestReviewComment");
  });
}

function createReplyForReviewComment(body, comment_id, id, owner, pull_number, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/comments/" + comment_id + "/replies";
  var description = "Create reply for review comment " + comment_id + " with body " + body;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_id": comment_id, "id": id, "owner": owner, "pull_number": pull_number, "repo": repo}) });
}

// verifyPullRequestReviewCommentReplyExists skipped: No GET /{id} operation detected.
function waitForPullRequestReviewCommentReplyAdded(body, comment_id, id, owner, pull_number, repo) {
  waitFor(matchSuccess("Create reply for review comment " + comment_id + " with body " + body));
}

function matchAnyPullRequestReviewCommentReplyAdded() {
  return bp.EventSet("Any PullRequestReviewCommentReply Added", function(e) {
      return e.name.startsWith("Done: Create reply for review comment ");
  });
}

function createReviewComment(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/comments";
  var description = "Create review comment on pull request " + pull_number + " with body " + body + ", commit_id " + commit_id + ", path " + path + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "commit_id": commit_id, "in_reply_to": in_reply_to, "line": line, "owner": owner, "path": path, "position": position, "pull_number": pull_number, "repo": repo, "side": side, "start_line": start_line, "start_side": start_side, "subject_type": subject_type}) });
}

function listReviewComments(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/comments";
  var description = "List review comments on pull request " + pull_number + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingPullRequestReviewComments(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/comments";
  var description = "Try Add Existing PullRequestReviewComments " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPullRequestReviewCommentsExists(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/comments";
  var description = "Verify PullRequestReviewComments " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequestReviewComments found");
}

function verifyPullRequestReviewCommentsDoesNotExist(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/comments";
  var description = "Verify PullRequestReviewComments " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequestReviewComments not found");
}

function waitForPullRequestReviewCommentsAdded(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type) {
  waitFor(matchSuccess("Create review comment on pull request " + pull_number + " with body " + body + ", commit_id " + commit_id + ", path " + path));
}

function matchAnyPullRequestReviewCommentsAdded() {
  return bp.EventSet("Any PullRequestReviewComments Added", function(e) {
      return e.name.startsWith("Done: Create review comment on pull request ");
  });
}

function listReviewCommentsForRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments";
  var description = "List review comments in repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyPullRequestCommentsExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments";
  var description = "Verify PullRequestComments " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequestComments found");
}

function verifyPullRequestCommentsDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments";
  var description = "Verify PullRequestComments " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequestComments not found");
}

function matchAnyPullRequestCommentsAdded() {
  return bp.EventSet("Any PullRequestComments Added", function(e) {
      return e.name.startsWith("Done: Create PullRequestComments");
  });
}

function checkIfMerged(commit_message, commit_title, merge_method, owner, pull_number, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/merge";
  var description = "Check if pull request " + pull_number + " is merged " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function mergePullRequest(commit_message, commit_title, merge_method, owner, pull_number, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/merge";
  var description = "Merge pull request " + pull_number + " with commit_title " + commit_title + " and merge_method " + merge_method + " " + owner;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 405, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"commit_message": commit_message, "commit_title": commit_title, "merge_method": merge_method, "owner": owner, "pull_number": pull_number, "repo": repo, "sha": sha}) });
}

function verifyPullRequestMergeExists(commit_message, commit_title, merge_method, owner, pull_number, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/merge";
  var description = "Verify PullRequestMerge " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequestMerge found");
}

function verifyPullRequestMergeDoesNotExist(commit_message, commit_title, merge_method, owner, pull_number, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/merge";
  var description = "Verify PullRequestMerge " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequestMerge not found");
}

function matchAnyPullRequestMergeAdded() {
  return bp.EventSet("Any PullRequestMerge Added", function(e) {
      return e.name.startsWith("Done: Create PullRequestMerge");
  });
}

function listRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "List requested reviewers for pull request " + pull_number + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function requestReviewers(owner, pull_number, repo, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Request reviewers for pull request " + pull_number + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "pull_number": pull_number, "repo": repo, "reviewers": reviewers, "team_reviewers": team_reviewers}) });
}

function removeRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Remove requested reviewers from pull request " + pull_number + " " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 422] });
}

function tryToAddExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Try Add Existing PullRequestRequestedReviewers " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Verify PullRequestRequestedReviewers " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequestRequestedReviewers found");
}

function verifyPullRequestRequestedReviewersDoesNotExist(owner, pull_number, repo, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Verify PullRequestRequestedReviewers " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequestRequestedReviewers not found");
}

function tryToDeleteANonExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Verify negative delete for PullRequestRequestedReviewers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers) {
  return bp.EventSet("Delete PullRequestRequestedReviewers", function(e) {
      return e.name === "Done: " + "Remove requested reviewers from pull request " + pull_number;
  });
}

function waitForPullRequestRequestedReviewersAdded(owner, pull_number, repo, reviewers, team_reviewers) {
  waitFor(matchSuccess("Request reviewers for pull request " + pull_number));
}

function matchAnyPullRequestRequestedReviewersAdded() {
  return bp.EventSet("Any PullRequestRequestedReviewers Added", function(e) {
      return e.name.startsWith("Done: Request reviewers for pull request ");
  });
}

function createPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews";
  var description = "Create a review for pull request " + pull_number + " in repo " + repo + " owned by " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comments": comments, "commit_id": commit_id, "event": event, "owner": owner, "pull_number": pull_number, "repo": repo, "review_id": review_id}) });
}

function getPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Get review " + review_id + " for pull request " + pull_number + " in repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updatePullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Update review " + review_id + " for pull request " + pull_number + " in repo " + repo + " owned by " + owner + " with body " + body;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comments": comments, "commit_id": commit_id, "event": event, "owner": owner, "pull_number": pull_number, "repo": repo, "review_id": review_id}) });
}

function deletePendingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Delete pending review " + review_id + " for pull request " + pull_number + " in repo " + repo + " owned by " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function tryToAddExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews";
  var description = "Try Add Existing PullRequestReview " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Verify PullRequestReview " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequestReview found");
}

function verifyPullRequestReviewDoesNotExist(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Verify PullRequestReview " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequestReview not found");
}

function tryToDeleteANonExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Verify negative delete for PullRequestReview";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  return bp.EventSet("Delete PullRequestReview", function(e) {
      return e.name === "Done: " + "Delete pending review " + review_id + " for pull request " + pull_number + " in repo " + repo + " owned by " + owner;
  });
}

function waitForPullRequestReviewAdded(body, comments, commit_id, event, owner, pull_number, repo, review_id) {
  waitFor(matchSuccess("Create a review for pull request " + pull_number + " in repo " + repo + " owned by " + owner));
}

function matchAnyPullRequestReviewAdded() {
  return bp.EventSet("Any PullRequestReview Added", function(e) {
      return e.name.startsWith("Done: Create a review for pull request ");
  });
}

function dismissPullRequestReview(message, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id + "/dismissals";
  var description = "Dismiss review " + review_id + " for pull request " + pull_number + " in repo " + repo + " owned by " + owner + " with message " + message;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"message": message, "owner": owner, "pull_number": pull_number, "repo": repo, "review_id": review_id}) });
}

// verifyPullRequestReviewDismissalExists skipped: No GET /{id} operation detected.
function matchAnyPullRequestReviewDismissalAdded() {
  return bp.EventSet("Any PullRequestReviewDismissal Added", function(e) {
      return e.name.startsWith("Done: Create PullRequestReviewDismissal");
  });
}

function submitPullRequestReview(body, event, id, owner, pull_number, repo, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id + "/events";
  var description = "Submit review " + review_id + " for pull request " + pull_number + " in repo " + repo + " owned by " + owner + " with event " + event;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "event": event, "id": id, "owner": owner, "pull_number": pull_number, "repo": repo, "review_id": review_id}) });
}

// verifyPullRequestReviewEventExists skipped: No GET /{id} operation detected.
function waitForPullRequestReviewEventAdded(body, event, id, owner, pull_number, repo, review_id) {
  waitFor(matchSuccess("Submit review " + review_id + " for pull request " + pull_number + " in repo " + repo + " owned by " + owner + " with event " + event));
}

function matchAnyPullRequestReviewEventAdded() {
  return bp.EventSet("Any PullRequestReviewEvent Added", function(e) {
      return e.name.startsWith("Done: Submit review ");
  });
}

function updatePullRequestBranch(expected_head_sha, owner, pull_number, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/update-branch";
  var description = "Update branch for pull request " + pull_number + " in repo " + repo + " owned by " + owner + " with expected head SHA " + expected_head_sha;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"expected_head_sha": expected_head_sha, "owner": owner, "pull_number": pull_number, "repo": repo}) });
}

// verifyPullRequestBranchUpdateExists skipped: No GET /{id} operation detected.
function matchAnyPullRequestBranchUpdateAdded() {
  return bp.EventSet("Any PullRequestBranchUpdate Added", function(e) {
      return e.name.startsWith("Done: Create PullRequestBranchUpdate");
  });
}

function startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  var url = "/user/migrations";
  var description = "Create migration with repositories " + repositories + " " + migration_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"exclude": exclude, "exclude_attachments": exclude_attachments, "exclude_git_data": exclude_git_data, "exclude_metadata": exclude_metadata, "exclude_owner_projects": exclude_owner_projects, "exclude_releases": exclude_releases, "lock_repositories": lock_repositories, "migration_id": migration_id, "org_metadata_only": org_metadata_only, "repositories": repositories}) });
}

function getMigrationStatus(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  var url = "/user/migrations/" + migration_id;
  var description = "Get migration status for migration_id " + migration_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function deleteMigrationArchive(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Delete migration archive for migration_id " + migration_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404] });
}

function tryToAddExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  var url = "/user/migrations";
  var description = "Try Add Existing Migration " + migration_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  var url = "/user/migrations/" + migration_id;
  var description = "Verify Migration " + migration_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Migration found");
}

function verifyMigrationDoesNotExist(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  var url = "/user/migrations/" + migration_id;
  var description = "Verify Migration " + migration_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Migration not found");
}

function tryToDeleteANonExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Verify negative delete for Migration";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  return bp.EventSet("Delete Migration", function(e) {
      return e.name === "Done: " + "Delete migration archive for migration_id " + migration_id;
  });
}

function waitForMigrationAdded(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories) {
  waitFor(matchSuccess("Create migration with repositories " + repositories));
}

function matchAnyMigrationAdded() {
  return bp.EventSet("Any Migration Added", function(e) {
      return e.name.startsWith("Done: Create migration with repositories ");
  });
}

function downloadMigrationArchive(migration_id) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Download migration archive for migration_id " + migration_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [302, 304, 401, 403] });
}

function deleteMigrationArchive(migration_id) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Delete migration archive for migration_id " + migration_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404] });
}

function verifyMigrationArchiveExists(migration_id) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Verify MigrationArchive " + migration_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MigrationArchive found");
}

function verifyMigrationArchiveDoesNotExist(migration_id) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Verify MigrationArchive " + migration_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MigrationArchive not found");
}

function tryToDeleteANonExistingMigrationArchive(migration_id) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Verify negative delete for MigrationArchive";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMigrationArchive(migration_id) {
  return bp.EventSet("Delete MigrationArchive", function(e) {
      return e.name === "Done: " + "Delete migration archive for migration_id " + migration_id;
  });
}

function matchAnyMigrationArchiveAdded() {
  return bp.EventSet("Any MigrationArchive Added", function(e) {
      return e.name.startsWith("Done: Create MigrationArchive");
  });
}

function unlockMigrationRepository(migration_id, repo_name) {
  var url = "/user/migrations/" + migration_id + "/repos/" + repo_name + "/lock";
  var description = "Unlock repository " + repo_name + " for migration_id " + migration_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404] });
}

// verifyMigrationRepositoryLockExists skipped: No GET /{id} operation detected.
function matchAnyMigrationRepositoryLockAdded() {
  return bp.EventSet("Any MigrationRepositoryLock Added", function(e) {
      return e.name.startsWith("Done: Create MigrationRepositoryLock");
  });
}

function listMigrationRepositories(migration_id, page, per_page) {
  var url = "/user/migrations/" + migration_id + "/repositories";
  var description = "List repositories for migration_id " + migration_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyMigrationRepositoryExists(migration_id, page, per_page) {
  var url = "/user/migrations/" + migration_id + "/repositories";
  var description = "Verify MigrationRepository " + migration_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MigrationRepository found");
}

function verifyMigrationRepositoryDoesNotExist(migration_id, page, per_page) {
  var url = "/user/migrations/" + migration_id + "/repositories";
  var description = "Verify MigrationRepository " + migration_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MigrationRepository not found");
}

function matchAnyMigrationRepositoryAdded() {
  return bp.EventSet("Any MigrationRepository Added", function(e) {
      return e.name.startsWith("Done: Create MigrationRepository");
  });
}

function startImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Start import for repo " + repo + " owned by " + owner + " with vcs_url " + vcs_url;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo, "tfvc_project": tfvc_project, "vcs": vcs, "vcs_password": vcs_password, "vcs_url": vcs_url, "vcs_username": vcs_username}) });
}

function getImportStatus(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Get import status for repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

function updateImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Update import for repo " + repo + " owned by " + owner;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo, "tfvc_project": tfvc_project, "vcs": vcs, "vcs_password": vcs_password, "vcs_url": vcs_url, "vcs_username": vcs_username}) });
}

function cancelImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Cancel import for repo " + repo + " owned by " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 503] });
}

function tryToAddExistingImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Try Add Existing Import " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyImportExists(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Verify Import " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Import found");
}

function verifyImportDoesNotExist(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Verify Import " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Import not found");
}

function tryToDeleteANonExistingImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Verify negative delete for Import";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  return bp.EventSet("Delete Import", function(e) {
      return e.name === "Done: " + "Cancel import for repo " + repo + " owned by " + owner;
  });
}

function waitForImportAdded(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username) {
  waitFor(matchSuccess("Start import for repo " + repo + " owned by " + owner + " with vcs_url " + vcs_url));
}

function matchAnyImportAdded() {
  return bp.EventSet("Any Import Added", function(e) {
      return e.name.startsWith("Done: Start import for repo ");
  });
}

function mapCommitAuthor(author_id, email, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import/authors/" + author_id;
  var description = "Map commit author " + author_id + " for repo " + repo + " owned by " + owner + " with email " + email + " and name " + name;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"author_id": author_id, "email": email, "name": name, "owner": owner, "repo": repo}) });
}

function getCommitAuthors(author_id, email, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import/authors";
  var description = "Get commit authors for repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

function verifyCommitAuthorExists(author_id, email, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import/authors";
  var description = "Verify CommitAuthor " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CommitAuthor found");
}

function verifyCommitAuthorDoesNotExist(author_id, email, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import/authors";
  var description = "Verify CommitAuthor " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CommitAuthor not found");
}

function matchAnyCommitAuthorAdded() {
  return bp.EventSet("Any CommitAuthor Added", function(e) {
      return e.name.startsWith("Done: Create CommitAuthor");
  });
}

function getLargeFiles(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import/large_files";
  var description = "Get large files for repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 503] });
}

function verifyLargeFileExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import/large_files";
  var description = "Verify LargeFile " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("LargeFile found");
}

function verifyLargeFileDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import/large_files";
  var description = "Verify LargeFile " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("LargeFile not found");
}

function matchAnyLargeFileAdded() {
  return bp.EventSet("Any LargeFile Added", function(e) {
      return e.name.startsWith("Done: Create LargeFile");
  });
}

function setLfsPreference(owner, repo, use_lfs) {
  var url = "/repos/" + owner + "/" + repo + "/import/lfs";
  var description = "Update Git LFS preference for repo " + repo + " owned by " + owner + " to " + use_lfs;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"owner": owner, "repo": repo, "use_lfs": use_lfs}) });
}

// verifyLFSPreferenceExists skipped: No GET /{id} operation detected.
function matchAnyLFSPreferenceAdded() {
  return bp.EventSet("Any LFSPreference Added", function(e) {
      return e.name.startsWith("Done: Create LFSPreference");
  });
}

function listUserMigrations(id, page, per_page) {
  var url = "/user/migrations";
  var description = "List user migrations " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

// verifyUserMigrationListExists skipped: No GET /{id} operation detected.
function matchAnyUserMigrationListAdded() {
  return bp.EventSet("Any UserMigrationList Added", function(e) {
      return e.name.startsWith("Done: Create UserMigrationList");
  });
}

function createEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations";
  var description = "Create code security configuration " + name + " for enterprise " + enterprise;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"configuration_id": configuration_id, "description": description, "enterprise": enterprise, "name": name}) });
}

function getEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Get code security configuration " + configuration_id + " for enterprise " + enterprise;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 404] });
}

function updateEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Update code security configuration " + configuration_id + " for enterprise " + enterprise;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 304, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"configuration_id": configuration_id, "description": description, "enterprise": enterprise, "name": name}) });
}

function deleteEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Delete code security configuration " + configuration_id + " for enterprise " + enterprise;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404, 409] });
}

function tryToAddExistingCodeSecurityConfigurationEnterprise(configuration_id, description, enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations";
  var description = "Try Add Existing CodeSecurityConfigurationEnterprise " + enterprise;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCodeSecurityConfigurationEnterpriseExists(configuration_id, description, enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Verify CodeSecurityConfigurationEnterprise " + enterprise + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeSecurityConfigurationEnterprise found");
}

function verifyCodeSecurityConfigurationEnterpriseDoesNotExist(configuration_id, description, enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Verify CodeSecurityConfigurationEnterprise " + enterprise + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeSecurityConfigurationEnterprise not found");
}

function tryToDeleteANonExistingCodeSecurityConfigurationEnterprise(configuration_id, description, enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Verify negative delete for CodeSecurityConfigurationEnterprise";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCodeSecurityConfigurationEnterprise(configuration_id, description, enterprise, name) {
  return bp.EventSet("Delete CodeSecurityConfigurationEnterprise", function(e) {
      return e.name === "Done: " + "Delete code security configuration " + configuration_id + " for enterprise " + enterprise;
  });
}

function waitForCodeSecurityConfigurationEnterpriseAdded(configuration_id, description, enterprise, name) {
  waitFor(matchSuccess("Create code security configuration " + name + " for enterprise " + enterprise));
}

function matchAnyCodeSecurityConfigurationEnterpriseAdded() {
  return bp.EventSet("Any CodeSecurityConfigurationEnterprise Added", function(e) {
      return e.name.startsWith("Done: Create code security configuration ");
  });
}

function attachEnterpriseCodeSecurityConfiguration(configuration_id, enterprise, id, scope) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id + "/attach";
  var description = "Attach code security configuration " + configuration_id + " for enterprise " + enterprise + " with scope " + scope;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"configuration_id": configuration_id, "enterprise": enterprise, "id": id, "scope": scope}) });
}

// verifyCodeSecurityConfigurationEnterpriseAttachExists skipped: No GET /{id} operation detected.
function waitForCodeSecurityConfigurationEnterpriseAttachAdded(configuration_id, enterprise, id, scope) {
  waitFor(matchSuccess("Attach code security configuration " + configuration_id + " for enterprise " + enterprise + " with scope " + scope));
}

function matchAnyCodeSecurityConfigurationEnterpriseAttachAdded() {
  return bp.EventSet("Any CodeSecurityConfigurationEnterpriseAttach Added", function(e) {
      return e.name.startsWith("Done: Attach code security configuration ");
  });
}

function setEnterpriseCodeSecurityConfigurationAsDefault(configuration_id, default_for_new_repos, enterprise) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id + "/defaults";
  var description = "Set code security configuration " + configuration_id + " as default for enterprise " + enterprise + " with default_for_new_repos " + default_for_new_repos;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"configuration_id": configuration_id, "default_for_new_repos": default_for_new_repos, "enterprise": enterprise}) });
}

// verifyCodeSecurityConfigurationEnterpriseDefaultsExists skipped: No GET /{id} operation detected.
function matchAnyCodeSecurityConfigurationEnterpriseDefaultsAdded() {
  return bp.EventSet("Any CodeSecurityConfigurationEnterpriseDefaults Added", function(e) {
      return e.name.startsWith("Done: Create CodeSecurityConfigurationEnterpriseDefaults");
  });
}

function getRepositoriesForEnterpriseCodeSecurityConfiguration(configuration_id, enterprise, status) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id + "/repositories";
  var description = "Get repositories for code security configuration " + configuration_id + " of enterprise " + enterprise + " with status " + status;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function verifyCodeSecurityConfigurationEnterpriseRepositoriesExists(configuration_id, enterprise, status) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id + "/repositories";
  var description = "Verify CodeSecurityConfigurationEnterpriseRepositories " + enterprise + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeSecurityConfigurationEnterpriseRepositories found");
}

function verifyCodeSecurityConfigurationEnterpriseRepositoriesDoesNotExist(configuration_id, enterprise, status) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id + "/repositories";
  var description = "Verify CodeSecurityConfigurationEnterpriseRepositories " + enterprise + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeSecurityConfigurationEnterpriseRepositories not found");
}

function matchAnyCodeSecurityConfigurationEnterpriseRepositoriesAdded() {
  return bp.EventSet("Any CodeSecurityConfigurationEnterpriseRepositories Added", function(e) {
      return e.name.startsWith("Done: Create CodeSecurityConfigurationEnterpriseRepositories");
  });
}

function createOrgCodeSecurityConfiguration(configuration_id, description, name, org) {
  var url = "/orgs/" + org + "/code-security/configurations";
  var description = "Create code security configuration " + name + " for org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"configuration_id": configuration_id, "description": description, "name": name, "org": org}) });
}

function getOrgCodeSecurityConfiguration(configuration_id, description, name, org) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Get code security configuration " + configuration_id + " for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 404] });
}

function updateOrgCodeSecurityConfiguration(configuration_id, description, name, org) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Update code security configuration " + configuration_id + " for org " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"configuration_id": configuration_id, "description": description, "name": name, "org": org}) });
}

function deleteOrgCodeSecurityConfiguration(configuration_id, description, name, org) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Delete code security configuration " + configuration_id + " for org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404, 409] });
}

function tryToAddExistingCodeSecurityConfigurationOrg(configuration_id, description, name, org) {
  var url = "/orgs/" + org + "/code-security/configurations";
  var description = "Try Add Existing CodeSecurityConfigurationOrg " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCodeSecurityConfigurationOrgExists(configuration_id, description, name, org) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Verify CodeSecurityConfigurationOrg " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeSecurityConfigurationOrg found");
}

function verifyCodeSecurityConfigurationOrgDoesNotExist(configuration_id, description, name, org) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Verify CodeSecurityConfigurationOrg " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeSecurityConfigurationOrg not found");
}

function tryToDeleteANonExistingCodeSecurityConfigurationOrg(configuration_id, description, name, org) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Verify negative delete for CodeSecurityConfigurationOrg";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCodeSecurityConfigurationOrg(configuration_id, description, name, org) {
  return bp.EventSet("Delete CodeSecurityConfigurationOrg", function(e) {
      return e.name === "Done: " + "Delete code security configuration " + configuration_id + " for org " + org;
  });
}

function waitForCodeSecurityConfigurationOrgAdded(configuration_id, description, name, org) {
  waitFor(matchSuccess("Create code security configuration " + name + " for org " + org));
}

function matchAnyCodeSecurityConfigurationOrgAdded() {
  return bp.EventSet("Any CodeSecurityConfigurationOrg Added", function(e) {
      return e.name.startsWith("Done: Create code security configuration ");
  });
}

function detachOrgCodeSecurityConfiguration(org, selected_repository_ids) {
  var url = "/orgs/" + org + "/code-security/configurations/detach";
  var description = "Detach code security configurations from repositories in org " + org + " with selected_repository_ids " + selected_repository_ids;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404, 409] });
}

// verifyCodeSecurityConfigurationOrgDetachExists skipped: No GET /{id} operation detected.
function matchAnyCodeSecurityConfigurationOrgDetachAdded() {
  return bp.EventSet("Any CodeSecurityConfigurationOrgDetach Added", function(e) {
      return e.name.startsWith("Done: Create CodeSecurityConfigurationOrgDetach");
  });
}

function attachConfiguration(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/attach";
  var description = "Attach configuration " + configuration_id + " to repositories in org " + org + " with scope " + scope;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"configuration_id": configuration_id, "default_for_new_repos": default_for_new_repos, "org": org, "pagination-after": pagination_after, "pagination-before": pagination_before, "per_page": per_page, "scope": scope, "selected_repository_ids": selected_repository_ids, "status": status}) });
}

function setConfigurationAsDefault(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/defaults";
  var description = "Set configuration " + configuration_id + " as default for org " + org + " with default_for_new_repos " + default_for_new_repos;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"configuration_id": configuration_id, "default_for_new_repos": default_for_new_repos, "org": org, "pagination-after": pagination_after, "pagination-before": pagination_before, "per_page": per_page, "scope": scope, "selected_repository_ids": selected_repository_ids, "status": status}) });
}

function getRepositoriesForConfiguration(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/repositories";
  var description = "Get repositories for configuration " + configuration_id + " in org " + org + " with status " + status;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function tryToAddExistingConfiguration(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/attach";
  var description = "Try Add Existing Configuration " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyConfigurationExists(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/repositories";
  var description = "Verify Configuration " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Configuration found");
}

function verifyConfigurationDoesNotExist(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/repositories";
  var description = "Verify Configuration " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Configuration not found");
}

function waitForConfigurationAdded(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status) {
  waitFor(matchSuccess("Attach configuration " + configuration_id + " to repositories in org " + org + " with scope " + scope));
}

function matchAnyConfigurationAdded() {
  return bp.EventSet("Any Configuration Added", function(e) {
      return e.name.startsWith("Done: Attach configuration ");
  });
}

function getConfigurationForRepository(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-security-configuration";
  var description = "Get code security configuration for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 403, 404] });
}

function verifyRepositoryConfigurationExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-security-configuration";
  var description = "Verify RepositoryConfiguration " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryConfiguration found");
}

function verifyRepositoryConfigurationDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-security-configuration";
  var description = "Verify RepositoryConfiguration " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryConfiguration not found");
}

function matchAnyRepositoryConfigurationAdded() {
  return bp.EventSet("Any RepositoryConfiguration Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryConfiguration");
  });
}

function getDependabotAlert(alert_number, dismissed_comment, dismissed_reason, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/alerts/" + alert_number;
  var description = "Get dependabot alert " + alert_number + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 404] });
}

function updateDependabotAlert(alert_number, dismissed_comment, dismissed_reason, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/alerts/" + alert_number;
  var description = "Update dependabot alert " + alert_number + " in repo " + owner + "/" + repo + " with state " + state;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"alert_number": alert_number, "dismissed_comment": dismissed_comment, "dismissed_reason": dismissed_reason, "owner": owner, "repo": repo, "state": state}) });
}

function verifyDependabotAlertExists(alert_number, dismissed_comment, dismissed_reason, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/alerts/" + alert_number;
  var description = "Verify DependabotAlert " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("DependabotAlert found");
}

function verifyDependabotAlertDoesNotExist(alert_number, dismissed_comment, dismissed_reason, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/alerts/" + alert_number;
  var description = "Verify DependabotAlert " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("DependabotAlert not found");
}

function matchAnyDependabotAlertAdded() {
  return bp.EventSet("Any DependabotAlert Added", function(e) {
      return e.name.startsWith("Done: Create DependabotAlert");
  });
}

function listRepositoryAccessForOrg(org, repository_ids_to_add, repository_ids_to_remove) {
  var url = "/organizations/" + org + "/dependabot/repository-access";
  var description = "List the repositories Dependabot can access in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function updateRepositoryAccessForOrg(org, repository_ids_to_add, repository_ids_to_remove) {
  var url = "/organizations/" + org + "/dependabot/repository-access";
  var description = "Update Dependabot's repository access list for organization " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "repository_ids_to_add": repository_ids_to_add, "repository_ids_to_remove": repository_ids_to_remove}) });
}

function verifyRepositoryAccessExists(org, repository_ids_to_add, repository_ids_to_remove) {
  var url = "/organizations/" + org + "/dependabot/repository-access";
  var description = "Verify RepositoryAccess " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryAccess found");
}

function verifyRepositoryAccessDoesNotExist(org, repository_ids_to_add, repository_ids_to_remove) {
  var url = "/organizations/" + org + "/dependabot/repository-access";
  var description = "Verify RepositoryAccess " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryAccess not found");
}

function matchAnyRepositoryAccessAdded() {
  return bp.EventSet("Any RepositoryAccess Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryAccess");
  });
}

function setRepositoryAccessDefaultLevel(default_level, org) {
  var url = "/organizations/" + org + "/dependabot/repository-access/default-level";
  var description = "Set the default repository access level for Dependabot in organization " + org + " to " + default_level;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"default_level": default_level, "org": org}) });
}

// verifyRepositoryAccessDefaultLevelExists skipped: No GET /{id} operation detected.
function matchAnyRepositoryAccessDefaultLevelAdded() {
  return bp.EventSet("Any RepositoryAccessDefaultLevel Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryAccessDefaultLevel");
  });
}

function getOrgPublicKey(org) {
  var url = "/orgs/" + org + "/dependabot/secrets/public-key";
  var description = "Get organization public key for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyOrgSecretPublicKeyExists(org) {
  var url = "/orgs/" + org + "/dependabot/secrets/public-key";
  var description = "Verify OrgSecretPublicKey " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgSecretPublicKey found");
}

function verifyOrgSecretPublicKeyDoesNotExist(org) {
  var url = "/orgs/" + org + "/dependabot/secrets/public-key";
  var description = "Verify OrgSecretPublicKey " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgSecretPublicKey not found");
}

function matchAnyOrgSecretPublicKeyAdded() {
  return bp.EventSet("Any OrgSecretPublicKey Added", function(e) {
      return e.name.startsWith("Done: Create OrgSecretPublicKey");
  });
}

function listOrgSecrets(org) {
  var url = "/orgs/" + org + "/dependabot/secrets";
  var description = "List organization secrets for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyOrgSecretsExists(org) {
  var url = "/orgs/" + org + "/dependabot/secrets";
  var description = "Verify OrgSecrets " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgSecrets found");
}

function verifyOrgSecretsDoesNotExist(org) {
  var url = "/orgs/" + org + "/dependabot/secrets";
  var description = "Verify OrgSecrets " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgSecrets not found");
}

function matchAnyOrgSecretsAdded() {
  return bp.EventSet("Any OrgSecrets Added", function(e) {
      return e.name.startsWith("Done: Create OrgSecrets");
  });
}

function getDependabotSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Get dependabot secret " + secret_name + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Create or update dependabot secret " + secret_name + " in repo " + owner + "/" + repo;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "key_id": key_id, "owner": owner, "repo": repo, "secret_name": secret_name}) });
}

function deleteDependabotSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Delete dependabot secret " + secret_name + " in repo " + owner + "/" + repo;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Try Add Existing DependabotSecret " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Verify DependabotSecret " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("DependabotSecret found");
}

function verifyDependabotSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Verify DependabotSecret " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("DependabotSecret not found");
}

function tryToDeleteANonExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Verify negative delete for DependabotSecret";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedDependabotSecret(encrypted_value, key_id, owner, repo, secret_name) {
  return bp.EventSet("Delete DependabotSecret", function(e) {
      return e.name === "Done: " + "Delete dependabot secret " + secret_name + " in repo " + owner + "/" + repo;
  });
}

function waitForDependabotSecretAdded(encrypted_value, key_id, owner, repo, secret_name) {
  waitFor(matchSuccess("Create or update dependabot secret " + secret_name + " in repo " + owner + "/" + repo));
}

function matchAnyDependabotSecretAdded() {
  return bp.EventSet("Any DependabotSecret Added", function(e) {
      return e.name.startsWith("Done: Create or update dependabot secret ");
  });
}

function getProject(name, project_id) {
  var url = "/projects/" + project_id;
  var description = "Get project " + project_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function updateProject(name, project_id) {
  var url = "/projects/" + project_id;
  var description = "Update project " + project_id + " with name " + name;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 304, 401, 403, 404, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "project_id": project_id}) });
}

function deleteProject(name, project_id) {
  var url = "/projects/" + project_id;
  var description = "Delete project " + project_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404, 410] });
}

function verifyProjectExists(name, project_id) {
  var url = "/projects/" + project_id;
  var description = "Verify Project " + project_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Project found");
}

function verifyProjectDoesNotExist(name, project_id) {
  var url = "/projects/" + project_id;
  var description = "Verify Project " + project_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Project not found");
}

function tryToDeleteANonExistingProject(name, project_id) {
  var url = "/projects/" + project_id;
  var description = "Verify negative delete for Project";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedProject(name, project_id) {
  return bp.EventSet("Delete Project", function(e) {
      return e.name === "Done: " + "Delete project " + project_id;
  });
}

function matchAnyProjectAdded() {
  return bp.EventSet("Any Project Added", function(e) {
      return e.name.startsWith("Done: Create Project");
  });
}

function getProjectFieldForOrg(field_id, org, project_number) {
  var url = "/orgs/" + org + "/projectsV2/" + project_number + "/fields/" + field_id;
  var description = "Get project field " + field_id + " for project " + project_number + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function verifyProjectFieldExists(field_id, org, project_number) {
  var url = "/orgs/" + org + "/projectsV2/" + project_number + "/fields/" + field_id;
  var description = "Verify ProjectField " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ProjectField found");
}

function verifyProjectFieldDoesNotExist(field_id, org, project_number) {
  var url = "/orgs/" + org + "/projectsV2/" + project_number + "/fields/" + field_id;
  var description = "Verify ProjectField " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ProjectField not found");
}

function matchAnyProjectFieldAdded() {
  return bp.EventSet("Any ProjectField Added", function(e) {
      return e.name.startsWith("Done: Create ProjectField");
  });
}

function addItemForUser(fields, id, item_id, project_number, type, username) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items";
  var description = "Add item of type " + type + " with id " + id + " to project " + project_number + " for user " + username;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "id": id, "item_id": item_id, "project_number": project_number, "type": type, "username": username}) });
}

function getUserItem(fields, id, item_id, project_number, type, username) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Get item " + item_id + " from project " + project_number + " for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function updateItemForUser(fields, id, item_id, project_number, type, username) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Update item " + item_id + " in project " + project_number + " for user " + username + " with fields " + fields;
  var body = {
    "id": id,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "id": id, "item_id": item_id, "project_number": project_number, "type": type, "username": username}) });
}

function deleteItemForUser(fields, id, item_id, project_number, type, username) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Delete item " + item_id + " from project " + project_number + " for user " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 403] });
}

function tryToAddExistingProjectItem(fields, id, item_id, project_number, type, username) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items";
  var description = "Try Add Existing ProjectItem " + username;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyProjectItemExists(fields, id, item_id, project_number, type, username) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Verify ProjectItem " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ProjectItem found");
}

function verifyProjectItemDoesNotExist(fields, id, item_id, project_number, type, username) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Verify ProjectItem " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ProjectItem not found");
}

function tryToDeleteANonExistingProjectItem(fields, id, item_id, project_number, type, username) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Verify negative delete for ProjectItem";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedProjectItem(fields, id, item_id, project_number, type, username) {
  return bp.EventSet("Delete ProjectItem", function(e) {
      return e.name === "Done: " + "Delete item " + item_id + " from project " + project_number + " for user " + username;
  });
}

function waitForProjectItemAdded(fields, id, item_id, project_number, type, username) {
  waitFor(matchSuccess("Add item of type " + type + " with id " + id + " to project " + project_number + " for user " + username));
}

function matchAnyProjectItemAdded() {
  return bp.EventSet("Any ProjectItem Added", function(e) {
      return e.name.startsWith("Done: Add item of type ");
  });
}

function createBlob(content, encoding, file_sha, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs";
  var description = "Create blob with content " + content + " and encoding " + encoding + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "encoding": encoding, "file_sha": file_sha, "owner": owner, "repo": repo}) });
}

function getBlob(content, encoding, file_sha, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + file_sha;
  var description = "Get blob with file_sha " + file_sha + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 409, 422] });
}

function tryToAddExistingBlob(content, encoding, file_sha, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs";
  var description = "Try Add Existing Blob " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBlobExists(content, encoding, file_sha, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + file_sha;
  var description = "Verify Blob " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Blob found");
}

function verifyBlobDoesNotExist(content, encoding, file_sha, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + file_sha;
  var description = "Verify Blob " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Blob not found");
}

function waitForBlobAdded(content, encoding, file_sha, owner, repo) {
  waitFor(matchSuccess("Create blob with content " + content + " and encoding " + encoding));
}

function matchAnyBlobAdded() {
  return bp.EventSet("Any Blob Added", function(e) {
      return e.name.startsWith("Done: Create blob with content ");
  });
}

function createRef(force, owner, ref, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs";
  var description = "Create reference " + ref + " with sha " + sha + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"force": force, "owner": owner, "ref": ref, "repo": repo, "sha": sha}) });
}

function getRef(force, owner, ref, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/ref/" + ref;
  var description = "Get reference " + ref + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 409] });
}

function updateRef(force, owner, ref, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Update reference " + ref + " to sha " + sha + " with force " + force + " " + owner;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"force": force, "owner": owner, "ref": ref, "repo": repo, "sha": sha}) });
}

function deleteRef(force, owner, ref, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Delete reference " + ref + " " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 409, 422] });
}

function tryToAddExistingReference(force, owner, ref, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs";
  var description = "Try Add Existing Reference " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyReferenceExists(force, owner, ref, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/ref/" + ref;
  var description = "Verify Reference " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Reference found");
}

function verifyReferenceDoesNotExist(force, owner, ref, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/ref/" + ref;
  var description = "Verify Reference " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Reference not found");
}

function tryToDeleteANonExistingReference(force, owner, ref, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Verify negative delete for Reference";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedReference(force, owner, ref, repo, sha) {
  return bp.EventSet("Delete Reference", function(e) {
      return e.name === "Done: " + "Delete reference " + ref;
  });
}

function waitForReferenceAdded(force, owner, ref, repo, sha) {
  waitFor(matchSuccess("Create reference " + ref + " with sha " + sha));
}

function matchAnyReferenceAdded() {
  return bp.EventSet("Any Reference Added", function(e) {
      return e.name.startsWith("Done: Create reference ");
  });
}

function createTag(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags";
  var description = "Create tag " + tag + " with message " + message + " on object " + object + " of type " + type + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"message": message, "object": object, "owner": owner, "repo": repo, "tag": tag, "tag_sha": tag_sha, "tagger.date": tagger_date, "tagger.email": tagger_email, "tagger.name": tagger_name, "type": type}) });
}

function getTag(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + tag_sha;
  var description = "Get tag with tag_sha " + tag_sha + " " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 409] });
}

function tryToAddExistingTag(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags";
  var description = "Try Add Existing Tag " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTagExists(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + tag_sha;
  var description = "Verify Tag " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Tag found");
}

function verifyTagDoesNotExist(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + tag_sha;
  var description = "Verify Tag " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Tag not found");
}

function waitForTagAdded(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type) {
  waitFor(matchSuccess("Create tag " + tag + " with message " + message + " on object " + object + " of type " + type));
}

function matchAnyTagAdded() {
  return bp.EventSet("Any Tag Added", function(e) {
      return e.name.startsWith("Done: Create tag ");
  });
}

function createTree(base_tree, owner, recursive, repo, tree, tree_sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees";
  var description = "Create a tree in repo " + repo + " owned by " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"base_tree": base_tree, "owner": owner, "recursive": recursive, "repo": repo, "tree": tree, "tree_sha": tree_sha}) });
}

function getTree(base_tree, owner, recursive, repo, tree, tree_sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + tree_sha;
  var description = "Get tree " + tree_sha + " in repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 409, 422] });
}

function tryToAddExistingTree(base_tree, owner, recursive, repo, tree, tree_sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees";
  var description = "Try Add Existing Tree " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTreeExists(base_tree, owner, recursive, repo, tree, tree_sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + tree_sha;
  var description = "Verify Tree " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Tree found");
}

function verifyTreeDoesNotExist(base_tree, owner, recursive, repo, tree, tree_sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + tree_sha;
  var description = "Verify Tree " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Tree not found");
}

function waitForTreeAdded(base_tree, owner, recursive, repo, tree, tree_sha) {
  waitFor(matchSuccess("Create a tree in repo " + repo + " owned by " + owner));
}

function matchAnyTreeAdded() {
  return bp.EventSet("Any Tree Added", function(e) {
      return e.name.startsWith("Done: Create a tree in repo ");
  });
}

function createGist(description, files, gist_id, _public, username) {
  var url = "/gists";
  var description = "Create gist with description " + description + " " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "files": files, "gist_id": gist_id, "public": _public, "username": username}) });
}

function listGistsForUser(description, files, gist_id, _public, username) {
  var url = "/users/" + username + "/gists";
  var description = "List gists for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 422] });
}

function updateGist(description, files, gist_id, _public, username) {
  var url = "/gists/" + gist_id;
  var description = "Update gist with id " + gist_id + " " + username;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "files": files, "gist_id": gist_id, "public": _public, "username": username}) });
}

function deleteGist(description, files, gist_id, _public, username) {
  var url = "/gists/" + gist_id;
  var description = "Delete gist with id " + gist_id + " " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 403, 404] });
}

function tryToAddExistingGist(description, files, gist_id, _public, username) {
  var url = "/gists";
  var description = "Try Add Existing Gist " + username;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyGistExists(description, files, gist_id, _public, username) {
  var url = "/users/" + username + "/gists";
  var description = "Verify Gist " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Gist found");
}

function verifyGistDoesNotExist(description, files, gist_id, _public, username) {
  var url = "/users/" + username + "/gists";
  var description = "Verify Gist " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Gist not found");
}

function tryToDeleteANonExistingGist(description, files, gist_id, _public, username) {
  var url = "/gists/" + gist_id;
  var description = "Verify negative delete for Gist";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedGist(description, files, gist_id, _public, username) {
  return bp.EventSet("Delete Gist", function(e) {
      return e.name === "Done: " + "Delete gist with id " + gist_id;
  });
}

function waitForGistAdded(description, files, gist_id, _public, username) {
  waitFor(matchSuccess("Create gist with description " + description));
}

function matchAnyGistAdded() {
  return bp.EventSet("Any Gist Added", function(e) {
      return e.name.startsWith("Done: Create gist with description ");
  });
}

function createGistComment(body, comment_id, gist_id) {
  var url = "/gists/" + gist_id + "/comments";
  var description = "Create comment on gist " + gist_id + " with body " + body;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_id": comment_id, "gist_id": gist_id}) });
}

function getGistComment(body, comment_id, gist_id) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Get comment " + comment_id + " on gist " + gist_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 404] });
}

function updateGistComment(body, comment_id, gist_id) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Update comment " + comment_id + " on gist " + gist_id + " with body " + body;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "comment_id": comment_id, "gist_id": gist_id}) });
}

function deleteGistComment(body, comment_id, gist_id) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Delete comment " + comment_id + " on gist " + gist_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 403, 404] });
}

function tryToAddExistingGistComment(body, comment_id, gist_id) {
  var url = "/gists/" + gist_id + "/comments";
  var description = "Try Add Existing GistComment " + gist_id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyGistCommentExists(body, comment_id, gist_id) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Verify GistComment " + gist_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GistComment found");
}

function verifyGistCommentDoesNotExist(body, comment_id, gist_id) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Verify GistComment " + gist_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GistComment not found");
}

function tryToDeleteANonExistingGistComment(body, comment_id, gist_id) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Verify negative delete for GistComment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedGistComment(body, comment_id, gist_id) {
  return bp.EventSet("Delete GistComment", function(e) {
      return e.name === "Done: " + "Delete comment " + comment_id + " on gist " + gist_id;
  });
}

function waitForGistCommentAdded(body, comment_id, gist_id) {
  waitFor(matchSuccess("Create comment on gist " + gist_id + " with body " + body));
}

function matchAnyGistCommentAdded() {
  return bp.EventSet("Any GistComment Added", function(e) {
      return e.name.startsWith("Done: Create comment on gist ");
  });
}

function createOrganizationProject(name, org) {
  var url = "/orgs/" + org + "/projects";
  var description = "Create organization project " + name + " in org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 401, 403, 404, 409, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "org": org}) });
}

function listOrganizationProjects(name, org) {
  var url = "/orgs/" + org + "/projects";
  var description = "List projects for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 422] });
}

function tryToAddExistingOrganizationProject(name, org) {
  var url = "/orgs/" + org + "/projects";
  var description = "Try Add Existing OrganizationProject " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrganizationProjectExists(name, org) {
  var url = "/orgs/" + org + "/projects";
  var description = "Verify OrganizationProject " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationProject found");
}

function verifyOrganizationProjectDoesNotExist(name, org) {
  var url = "/orgs/" + org + "/projects";
  var description = "Verify OrganizationProject " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationProject not found");
}

function waitForOrganizationProjectAdded(name, org) {
  waitFor(matchSuccess("Create organization project " + name + " in org " + org));
}

function matchAnyOrganizationProjectAdded() {
  return bp.EventSet("Any OrganizationProject Added", function(e) {
      return e.name.startsWith("Done: Create organization project ");
  });
}

function getProjectColumn(column_id, name, position) {
  var url = "/projects/columns/" + column_id;
  var description = "Get project column " + column_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404] });
}

function updateProjectColumn(column_id, name, position) {
  var url = "/projects/columns/" + column_id;
  var description = "Update project column " + column_id + " with name " + name;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 304, 401, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"column_id": column_id, "name": name, "position": position}) });
}

function deleteProjectColumn(column_id, name, position) {
  var url = "/projects/columns/" + column_id;
  var description = "Delete project column " + column_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403] });
}

function moveProjectColumn(column_id, name, position) {
  var url = "/projects/columns/" + column_id + "/moves";
  var description = "Move project column " + column_id + " to position " + position;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"column_id": column_id, "name": name, "position": position}) });
}

function verifyProjectColumnExists(column_id, name, position) {
  var url = "/projects/columns/" + column_id;
  var description = "Verify ProjectColumn " + column_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ProjectColumn found");
}

function verifyProjectColumnDoesNotExist(column_id, name, position) {
  var url = "/projects/columns/" + column_id;
  var description = "Verify ProjectColumn " + column_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ProjectColumn not found");
}

function tryToDeleteANonExistingProjectColumn(column_id, name, position) {
  var url = "/projects/columns/" + column_id;
  var description = "Verify negative delete for ProjectColumn";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedProjectColumn(column_id, name, position) {
  return bp.EventSet("Delete ProjectColumn", function(e) {
      return e.name === "Done: " + "Delete project column " + column_id;
  });
}

function matchAnyProjectColumnAdded() {
  return bp.EventSet("Any ProjectColumn Added", function(e) {
      return e.name.startsWith("Done: Create ProjectColumn");
  });
}

function addProjectCollaborator(permission, project_id, username) {
  var url = "/projects/" + project_id + "/collaborators/" + username;
  var description = "Add collaborator " + username + " to project " + project_id + " with permission " + permission;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 304, 401, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"permission": permission, "project_id": project_id, "username": username}) });
}

function removeProjectCollaborator(permission, project_id, username) {
  var url = "/projects/" + project_id + "/collaborators/" + username;
  var description = "Remove collaborator " + username + " from project " + project_id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 304, 401, 403, 404, 422] });
}

function getProjectCollaboratorPermission(permission, project_id, username) {
  var url = "/projects/" + project_id + "/collaborators/" + username + "/permission";
  var description = "Get permission for collaborator " + username + " on project " + project_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403, 404, 422] });
}

// verifyProjectCollaboratorExists skipped: No GET /{id} operation detected.
function waitForProjectCollaboratorAdded(permission, project_id, username) {
  waitFor(matchSuccess("Add collaborator " + username + " to project " + project_id + " with permission " + permission));
}

function matchAnyProjectCollaboratorAdded() {
  return bp.EventSet("Any ProjectCollaborator Added", function(e) {
      return e.name.startsWith("Done: Add collaborator ");
  });
}

function listProjectColumns(id, name, project_id) {
  var url = "/projects/" + project_id + "/columns";
  var description = "List columns for project " + project_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 401, 403] });
}

function createProjectColumn(id, name, project_id) {
  var url = "/projects/" + project_id + "/columns";
  var description = "Create project column " + name + " in project " + project_id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name, "project_id": project_id}) });
}

// verifyProjectColumnsListExists skipped: No GET /{id} operation detected.
function waitForProjectColumnsListAdded(id, name, project_id) {
  waitFor(matchSuccess("Create project column " + name + " in project " + project_id));
}

function matchAnyProjectColumnsListAdded() {
  return bp.EventSet("Any ProjectColumnsList Added", function(e) {
      return e.name.startsWith("Done: Create project column ");
  });
}

function listRepositoryProjects(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/projects";
  var description = "List projects for repository " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 403, 404, 410, 422] });
}

function createRepositoryProject(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/projects";
  var description = "Create repository project " + name + " in " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 401, 403, 404, 409, 410, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"name": name, "owner": owner, "repo": repo}) });
}

function tryToAddExistingRepositoryProject(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/projects";
  var description = "Try Add Existing RepositoryProject " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositoryProjectExists(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/projects";
  var description = "Verify RepositoryProject " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryProject found");
}

function verifyRepositoryProjectDoesNotExist(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/projects";
  var description = "Verify RepositoryProject " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryProject not found");
}

function waitForRepositoryProjectAdded(name, owner, repo) {
  waitFor(matchSuccess("Create repository project " + name + " in " + owner + "/" + repo));
}

function matchAnyRepositoryProjectAdded() {
  return bp.EventSet("Any RepositoryProject Added", function(e) {
      return e.name.startsWith("Done: Create repository project ");
  });
}

function createUserProject(id, name) {
  var url = "/user/projects";
  var description = "Create user project " + name + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 304, 401, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
}

// verifyUserProjectExists skipped: No GET /{id} operation detected.
function waitForUserProjectAdded(id, name) {
  waitFor(matchSuccess("Create user project " + name));
}

function matchAnyUserProjectAdded() {
  return bp.EventSet("Any UserProject Added", function(e) {
      return e.name.startsWith("Done: Create user project ");
  });
}

function createCheckRun(check_run_id, head_sha, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs";
  var description = "Create check run " + name + " with head SHA " + head_sha + " " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"check_run_id": check_run_id, "head_sha": head_sha, "name": name, "owner": owner, "repo": repo}) });
}

function getCheckRun(check_run_id, head_sha, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id;
  var description = "Get check run " + check_run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateCheckRun(check_run_id, head_sha, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id;
  var description = "Update check run " + check_run_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"check_run_id": check_run_id, "head_sha": head_sha, "name": name, "owner": owner, "repo": repo}) });
}

function tryToAddExistingCheckRun(check_run_id, head_sha, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs";
  var description = "Try Add Existing CheckRun " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCheckRunExists(check_run_id, head_sha, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id;
  var description = "Verify CheckRun " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CheckRun found");
}

function verifyCheckRunDoesNotExist(check_run_id, head_sha, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id;
  var description = "Verify CheckRun " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CheckRun not found");
}

function waitForCheckRunAdded(check_run_id, head_sha, name, owner, repo) {
  waitFor(matchSuccess("Create check run " + name + " with head SHA " + head_sha));
}

function matchAnyCheckRunAdded() {
  return bp.EventSet("Any CheckRun Added", function(e) {
      return e.name.startsWith("Done: Create check run ");
  });
}

function listCheckRunAnnotations(check_run_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id + "/annotations";
  var description = "List annotations for check run " + check_run_id + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyCheckRunAnnotationsExists(check_run_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id + "/annotations";
  var description = "Verify CheckRunAnnotations " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CheckRunAnnotations found");
}

function verifyCheckRunAnnotationsDoesNotExist(check_run_id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id + "/annotations";
  var description = "Verify CheckRunAnnotations " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CheckRunAnnotations not found");
}

function matchAnyCheckRunAnnotationsAdded() {
  return bp.EventSet("Any CheckRunAnnotations Added", function(e) {
      return e.name.startsWith("Done: Create CheckRunAnnotations");
  });
}

function rerequestCheckRun(check_run_id, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id + "/rerequest";
  var description = "Rerequest check run " + check_run_id + " in repo " + owner + "/" + repo;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"check_run_id": check_run_id, "id": id, "owner": owner, "repo": repo}) });
}

// verifyCheckRunRerequestExists skipped: No GET /{id} operation detected.
function waitForCheckRunRerequestAdded(check_run_id, id, owner, repo) {
  waitFor(matchSuccess("Rerequest check run " + check_run_id + " in repo " + owner + "/" + repo));
}

function matchAnyCheckRunRerequestAdded() {
  return bp.EventSet("Any CheckRunRerequest Added", function(e) {
      return e.name.startsWith("Done: Rerequest check run ");
  });
}

function createCheckSuite(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites";
  var description = "Create check suite with head SHA " + head_sha + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"app_id": app_id, "check_name": check_name, "check_suite_id": check_suite_id, "head_sha": head_sha, "owner": owner, "page": page, "per_page": per_page, "ref": ref, "repo": repo}) });
}

function listCheckSuitesForRef(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/check-suites";
  var description = "List check suites for ref " + ref + " in repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function rerequestCheckSuite(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites/" + check_suite_id + "/rerequest";
  var description = "Rerequest check suite " + check_suite_id + " in repo " + owner + "/" + repo;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"app_id": app_id, "check_name": check_name, "check_suite_id": check_suite_id, "head_sha": head_sha, "owner": owner, "page": page, "per_page": per_page, "ref": ref, "repo": repo}) });
}

function tryToAddExistingCheckSuite(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites";
  var description = "Try Add Existing CheckSuite " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCheckSuiteExists(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/check-suites";
  var description = "Verify CheckSuite " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CheckSuite found");
}

function verifyCheckSuiteDoesNotExist(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/check-suites";
  var description = "Verify CheckSuite " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CheckSuite not found");
}

function waitForCheckSuiteAdded(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo) {
  waitFor(matchSuccess("Create check suite with head SHA " + head_sha + " in repo " + owner + "/" + repo));
}

function matchAnyCheckSuiteAdded() {
  return bp.EventSet("Any CheckSuite Added", function(e) {
      return e.name.startsWith("Done: Create check suite with head SHA ");
  });
}

function updateCheckSuitePreferences(auto_trigger_checks, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites/preferences";
  var description = "Update check suite preferences in repo " + owner + "/" + repo;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"auto_trigger_checks": auto_trigger_checks, "owner": owner, "repo": repo}) });
}

// verifyCheckSuitePreferencesExists skipped: No GET /{id} operation detected.
function matchAnyCheckSuitePreferencesAdded() {
  return bp.EventSet("Any CheckSuitePreferences Added", function(e) {
      return e.name.startsWith("Done: Create CheckSuitePreferences");
  });
}

function getOrganizationBillingPremiumRequestUsage(day, hour, id, model, month, org, product, user, year) {
  var url = "/organizations/" + org + "/settings/billing/premium_request/usage";
  var description = "Get billing premium request usage report for organization " + org + " for year " + year + ", month " + month + ", day " + day + ", user " + user + ", model " + model + ", product " + product + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404, 500, 503] });
}

function getOrganizationBillingUsage(day, hour, id, model, month, org, product, user, year) {
  var url = "/organizations/" + org + "/settings/billing/usage";
  var description = "Get billing usage report for organization " + org + " for year " + year + ", month " + month + ", day " + day + ", hour " + hour + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 500, 503] });
}

// verifyOrganizationBillingExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationBillingAdded() {
  return bp.EventSet("Any OrganizationBilling Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationBilling");
  });
}

function getOrganizationActionsBilling(org) {
  var url = "/orgs/" + org + "/settings/billing/actions";
  var description = "Get GitHub Actions billing for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyOrganizationActionsBillingExists(org) {
  var url = "/orgs/" + org + "/settings/billing/actions";
  var description = "Verify OrganizationActionsBilling " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationActionsBilling found");
}

function verifyOrganizationActionsBillingDoesNotExist(org) {
  var url = "/orgs/" + org + "/settings/billing/actions";
  var description = "Verify OrganizationActionsBilling " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationActionsBilling not found");
}

function matchAnyOrganizationActionsBillingAdded() {
  return bp.EventSet("Any OrganizationActionsBilling Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationActionsBilling");
  });
}

function getOrganizationPackagesBilling(org) {
  var url = "/orgs/" + org + "/settings/billing/packages";
  var description = "Get GitHub Packages billing for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyOrganizationPackagesBillingExists(org) {
  var url = "/orgs/" + org + "/settings/billing/packages";
  var description = "Verify OrganizationPackagesBilling " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationPackagesBilling found");
}

function verifyOrganizationPackagesBillingDoesNotExist(org) {
  var url = "/orgs/" + org + "/settings/billing/packages";
  var description = "Verify OrganizationPackagesBilling " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationPackagesBilling not found");
}

function matchAnyOrganizationPackagesBillingAdded() {
  return bp.EventSet("Any OrganizationPackagesBilling Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationPackagesBilling");
  });
}

function getOrganizationSharedStorageBilling(org) {
  var url = "/orgs/" + org + "/settings/billing/shared-storage";
  var description = "Get shared storage billing for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyOrganizationSharedStorageBillingExists(org) {
  var url = "/orgs/" + org + "/settings/billing/shared-storage";
  var description = "Verify OrganizationSharedStorageBilling " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationSharedStorageBilling found");
}

function verifyOrganizationSharedStorageBillingDoesNotExist(org) {
  var url = "/orgs/" + org + "/settings/billing/shared-storage";
  var description = "Verify OrganizationSharedStorageBilling " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationSharedStorageBilling not found");
}

function matchAnyOrganizationSharedStorageBillingAdded() {
  return bp.EventSet("Any OrganizationSharedStorageBilling Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationSharedStorageBilling");
  });
}

function getUserActionsBilling(username) {
  var url = "/users/" + username + "/settings/billing/actions";
  var description = "Get GitHub Actions billing for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyUserActionsBillingExists(username) {
  var url = "/users/" + username + "/settings/billing/actions";
  var description = "Verify UserActionsBilling " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserActionsBilling found");
}

function verifyUserActionsBillingDoesNotExist(username) {
  var url = "/users/" + username + "/settings/billing/actions";
  var description = "Verify UserActionsBilling " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserActionsBilling not found");
}

function matchAnyUserActionsBillingAdded() {
  return bp.EventSet("Any UserActionsBilling Added", function(e) {
      return e.name.startsWith("Done: Create UserActionsBilling");
  });
}

function getUserPackagesBilling(username) {
  var url = "/users/" + username + "/settings/billing/packages";
  var description = "Get GitHub Packages billing for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyUserPackagesBillingExists(username) {
  var url = "/users/" + username + "/settings/billing/packages";
  var description = "Verify UserPackagesBilling " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserPackagesBilling found");
}

function verifyUserPackagesBillingDoesNotExist(username) {
  var url = "/users/" + username + "/settings/billing/packages";
  var description = "Verify UserPackagesBilling " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserPackagesBilling not found");
}

function matchAnyUserPackagesBillingAdded() {
  return bp.EventSet("Any UserPackagesBilling Added", function(e) {
      return e.name.startsWith("Done: Create UserPackagesBilling");
  });
}

function getUserPremiumRequestUsage(day, model, month, product, username, year) {
  var url = "/users/" + username + "/settings/billing/premium_request/usage";
  var description = "Get billing premium request usage report for user " + username + " for year " + year + ", month " + month + ", day " + day + ", model " + model + ", product " + product;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404, 500, 503] });
}

function verifyUserPremiumRequestUsageExists(day, model, month, product, username, year) {
  var url = "/users/" + username + "/settings/billing/premium_request/usage";
  var description = "Verify UserPremiumRequestUsage " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserPremiumRequestUsage found");
}

function verifyUserPremiumRequestUsageDoesNotExist(day, model, month, product, username, year) {
  var url = "/users/" + username + "/settings/billing/premium_request/usage";
  var description = "Verify UserPremiumRequestUsage " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserPremiumRequestUsage not found");
}

function matchAnyUserPremiumRequestUsageAdded() {
  return bp.EventSet("Any UserPremiumRequestUsage Added", function(e) {
      return e.name.startsWith("Done: Create UserPremiumRequestUsage");
  });
}

function getUserSharedStorageBilling(username) {
  var url = "/users/" + username + "/settings/billing/shared-storage";
  var description = "Get shared storage billing for user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyUserSharedStorageBillingExists(username) {
  var url = "/users/" + username + "/settings/billing/shared-storage";
  var description = "Verify UserSharedStorageBilling " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserSharedStorageBilling found");
}

function verifyUserSharedStorageBillingDoesNotExist(username) {
  var url = "/users/" + username + "/settings/billing/shared-storage";
  var description = "Verify UserSharedStorageBilling " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserSharedStorageBilling not found");
}

function matchAnyUserSharedStorageBillingAdded() {
  return bp.EventSet("Any UserSharedStorageBilling Added", function(e) {
      return e.name.startsWith("Done: Create UserSharedStorageBilling");
  });
}

function getUserBillingUsage(day, hour, month, username, year) {
  var url = "/users/" + username + "/settings/billing/usage";
  var description = "Get billing usage report for user " + username + " for year " + year + ", month " + month + ", day " + day + ", hour " + hour;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 500, 503] });
}

function verifyUserBillingUsageExists(day, hour, month, username, year) {
  var url = "/users/" + username + "/settings/billing/usage";
  var description = "Verify UserBillingUsage " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserBillingUsage found");
}

function verifyUserBillingUsageDoesNotExist(day, hour, month, username, year) {
  var url = "/users/" + username + "/settings/billing/usage";
  var description = "Verify UserBillingUsage " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserBillingUsage not found");
}

function matchAnyUserBillingUsageAdded() {
  return bp.EventSet("Any UserBillingUsage Added", function(e) {
      return e.name.startsWith("Done: Create UserBillingUsage");
  });
}

function getSecurityAdvisory(ghsa_id) {
  var url = "/advisories/" + ghsa_id;
  var description = "Get security advisory " + ghsa_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifySecurityAdvisoryExists(ghsa_id) {
  var url = "/advisories/" + ghsa_id;
  var description = "Verify SecurityAdvisory " + ghsa_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SecurityAdvisory found");
}

function verifySecurityAdvisoryDoesNotExist(ghsa_id) {
  var url = "/advisories/" + ghsa_id;
  var description = "Verify SecurityAdvisory " + ghsa_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SecurityAdvisory not found");
}

function matchAnySecurityAdvisoryAdded() {
  return bp.EventSet("Any SecurityAdvisory Added", function(e) {
      return e.name.startsWith("Done: Create SecurityAdvisory");
  });
}

function createRepositorySecurityAdvisory(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories";
  var description = "Create repository security advisory in repo " + repo + " owned by " + owner + " with summary " + summary;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"credits": credits, "cve_id": cve_id, "cvss_vector_string": cvss_vector_string, "cwe_ids": cwe_ids, "description": description, "ghsa_id": ghsa_id, "owner": owner, "repo": repo, "severity": severity, "state": state, "summary": summary, "vulnerabilities": vulnerabilities}) });
}

function getRepositorySecurityAdvisory(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id;
  var description = "Get repository security advisory " + ghsa_id + " in repo " + repo + " owned by " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function updateRepositorySecurityAdvisory(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id;
  var description = "Update repository security advisory " + ghsa_id + " in repo " + repo + " owned by " + owner + " with severity " + severity + " and state " + state;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"credits": credits, "cve_id": cve_id, "cvss_vector_string": cvss_vector_string, "cwe_ids": cwe_ids, "description": description, "ghsa_id": ghsa_id, "owner": owner, "repo": repo, "severity": severity, "state": state, "summary": summary, "vulnerabilities": vulnerabilities}) });
}

function tryToAddExistingRepositorySecurityAdvisory(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories";
  var description = "Try Add Existing RepositorySecurityAdvisory " + owner;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositorySecurityAdvisoryExists(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id;
  var description = "Verify RepositorySecurityAdvisory " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositorySecurityAdvisory found");
}

function verifyRepositorySecurityAdvisoryDoesNotExist(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id;
  var description = "Verify RepositorySecurityAdvisory " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositorySecurityAdvisory not found");
}

function waitForRepositorySecurityAdvisoryAdded(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities) {
  waitFor(matchSuccess("Create repository security advisory in repo " + repo + " owned by " + owner + " with summary " + summary));
}

function matchAnyRepositorySecurityAdvisoryAdded() {
  return bp.EventSet("Any RepositorySecurityAdvisory Added", function(e) {
      return e.name.startsWith("Done: Create repository security advisory in repo ");
  });
}

function createPrivateVulnerabilityReport(cwe_ids, description, id, owner, repo, severity, summary, vulnerabilities) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/reports";
  var description = "Create private vulnerability report in repo " + repo + " owned by " + owner + " with summary " + summary + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"cwe_ids": cwe_ids, "description": description, "id": id, "owner": owner, "repo": repo, "severity": severity, "summary": summary, "vulnerabilities": vulnerabilities}) });
}

// verifyPrivateVulnerabilityReportExists skipped: No GET /{id} operation detected.
function waitForPrivateVulnerabilityReportAdded(cwe_ids, description, id, owner, repo, severity, summary, vulnerabilities) {
  waitFor(matchSuccess("Create private vulnerability report in repo " + repo + " owned by " + owner + " with summary " + summary));
}

function matchAnyPrivateVulnerabilityReportAdded() {
  return bp.EventSet("Any PrivateVulnerabilityReport Added", function(e) {
      return e.name.startsWith("Done: Create private vulnerability report in repo ");
  });
}

function createRepositorySecurityAdvisoryCVERequest(ghsa_id, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id + "/cve";
  var description = "Request CVE for repository security advisory " + ghsa_id + " in repo " + repo + " owned by " + owner;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 400, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"ghsa_id": ghsa_id, "id": id, "owner": owner, "repo": repo}) });
}

// verifyRepositorySecurityAdvisoryCVERequestExists skipped: No GET /{id} operation detected.
function waitForRepositorySecurityAdvisoryCVERequestAdded(ghsa_id, id, owner, repo) {
  waitFor(matchSuccess("Request CVE for repository security advisory " + ghsa_id + " in repo " + repo + " owned by " + owner));
}

function matchAnyRepositorySecurityAdvisoryCVERequestAdded() {
  return bp.EventSet("Any RepositorySecurityAdvisoryCVERequest Added", function(e) {
      return e.name.startsWith("Done: Request CVE for repository security advisory ");
  });
}

function createRepositorySecurityAdvisoryFork(ghsa_id, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id + "/forks";
  var description = "Create temporary private fork for repository security advisory " + ghsa_id + " in repo " + repo + " owned by " + owner;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 400, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"ghsa_id": ghsa_id, "id": id, "owner": owner, "repo": repo}) });
}

// verifyRepositorySecurityAdvisoryForkExists skipped: No GET /{id} operation detected.
function waitForRepositorySecurityAdvisoryForkAdded(ghsa_id, id, owner, repo) {
  waitFor(matchSuccess("Create temporary private fork for repository security advisory " + ghsa_id + " in repo " + repo + " owned by " + owner));
}

function matchAnyRepositorySecurityAdvisoryForkAdded() {
  return bp.EventSet("Any RepositorySecurityAdvisoryFork Added", function(e) {
      return e.name.startsWith("Done: Create temporary private fork for repository security advisory ");
  });
}

function getSecretScanningAlert(alert_number, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts/" + alert_number;
  var description = "Get secret scanning alert " + alert_number + " for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 404, 503] });
}

function updateSecretScanningAlert(alert_number, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts/" + alert_number;
  var description = "Update secret scanning alert " + alert_number + " for repo " + owner + "/" + repo + " with state " + state;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"alert_number": alert_number, "owner": owner, "repo": repo, "state": state}) });
}

function verifySecretScanningAlertExists(alert_number, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts/" + alert_number;
  var description = "Verify SecretScanningAlert " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SecretScanningAlert found");
}

function verifySecretScanningAlertDoesNotExist(alert_number, owner, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts/" + alert_number;
  var description = "Verify SecretScanningAlert " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SecretScanningAlert not found");
}

function matchAnySecretScanningAlertAdded() {
  return bp.EventSet("Any SecretScanningAlert Added", function(e) {
      return e.name.startsWith("Done: Create SecretScanningAlert");
  });
}

function listSecretScanningAlertsForEnterprise(enterprise, id) {
  var url = "/enterprises/" + enterprise + "/secret-scanning/alerts";
  var description = "List secret scanning alerts for enterprise " + enterprise + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

// verifySecretScanningAlertListExists skipped: No GET /{id} operation detected.
function matchAnySecretScanningAlertListAdded() {
  return bp.EventSet("Any SecretScanningAlertList Added", function(e) {
      return e.name.startsWith("Done: Create SecretScanningAlertList");
  });
}

function listSecretScanningAlertsForOrg(id, org) {
  var url = "/orgs/" + org + "/secret-scanning/alerts";
  var description = "List secret scanning alerts for organization " + org + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

// verifySecretScanningAlertListOrgExists skipped: No GET /{id} operation detected.
function matchAnySecretScanningAlertListOrgAdded() {
  return bp.EventSet("Any SecretScanningAlertListOrg Added", function(e) {
      return e.name.startsWith("Done: Create SecretScanningAlertListOrg");
  });
}

function listSecretScanningAlertsForRepo(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts";
  var description = "List secret scanning alerts for repo " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

// verifySecretScanningAlertListRepoExists skipped: No GET /{id} operation detected.
function matchAnySecretScanningAlertListRepoAdded() {
  return bp.EventSet("Any SecretScanningAlertListRepo Added", function(e) {
      return e.name.startsWith("Done: Create SecretScanningAlertListRepo");
  });
}

function listLocationsForSecretScanningAlert(alert_number, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts/" + alert_number + "/locations";
  var description = "List locations for secret scanning alert " + alert_number + " in repo " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

// verifySecretScanningAlertLocationExists skipped: No GET /{id} operation detected.
function matchAnySecretScanningAlertLocationAdded() {
  return bp.EventSet("Any SecretScanningAlertLocation Added", function(e) {
      return e.name.startsWith("Done: Create SecretScanningAlertLocation");
  });
}

function listOrgPatternConfigurations(custom_pattern_settings, org, pattern_config_version, provider_pattern_settings) {
  var url = "/orgs/" + org + "/secret-scanning/pattern-configurations";
  var description = "List pattern configurations for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function updateOrgPatternConfigurations(custom_pattern_settings, org, pattern_config_version, provider_pattern_settings) {
  var url = "/orgs/" + org + "/secret-scanning/pattern-configurations";
  var description = "Update pattern configurations for organization " + org + " with pattern_config_version " + pattern_config_version;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"custom_pattern_settings": custom_pattern_settings, "org": org, "pattern_config_version": pattern_config_version, "provider_pattern_settings": provider_pattern_settings}) });
}

// verifyOrgPatternConfigurationExists skipped: No GET /{id} operation detected.
function matchAnyOrgPatternConfigurationAdded() {
  return bp.EventSet("Any OrgPatternConfiguration Added", function(e) {
      return e.name.startsWith("Done: Create OrgPatternConfiguration");
  });
}

function createPushProtectionBypass(id, owner, placeholder_id, reason, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/push-protection-bypasses";
  var description = "Create push protection bypass for repo " + owner + "/" + repo + " with reason " + reason + " and placeholder_id " + placeholder_id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409, 422, 503], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "owner": owner, "placeholder_id": placeholder_id, "reason": reason, "repo": repo}) });
}

// verifyPushProtectionBypassExists skipped: No GET /{id} operation detected.
function waitForPushProtectionBypassAdded(id, owner, placeholder_id, reason, repo) {
  waitFor(matchSuccess("Create push protection bypass for repo " + owner + "/" + repo + " with reason " + reason + " and placeholder_id " + placeholder_id));
}

function matchAnyPushProtectionBypassAdded() {
  return bp.EventSet("Any PushProtectionBypass Added", function(e) {
      return e.name.startsWith("Done: Create push protection bypass for repo ");
  });
}

function getSecretScanningScanHistory(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/scan-history";
  var description = "Get secret scanning scan history for repo " + owner + "/" + repo;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 503] });
}

function verifySecretScanningScanHistoryExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/scan-history";
  var description = "Verify SecretScanningScanHistory " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("SecretScanningScanHistory found");
}

function verifySecretScanningScanHistoryDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/scan-history";
  var description = "Verify SecretScanningScanHistory " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("SecretScanningScanHistory not found");
}

function matchAnySecretScanningScanHistoryAdded() {
  return bp.EventSet("Any SecretScanningScanHistory Added", function(e) {
      return e.name.startsWith("Done: Create SecretScanningScanHistory");
  });
}

function addCopilotTeams(org, selected_teams) {
  var url = "/orgs/" + org + "/copilot/billing/selected_teams";
  var description = "Add teams " + selected_teams + " to Copilot subscription for organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 401, 403, 404, 409, 422, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "selected_teams": selected_teams}) });
}

function removeCopilotTeams(org, selected_teams) {
  var url = "/orgs/" + org + "/copilot/billing/selected_teams";
  var description = "Remove teams " + selected_teams + " from Copilot subscription for organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 403, 404, 422, 500] });
}

// verifyCopilotTeamsExists skipped: No GET /{id} operation detected.
function waitForCopilotTeamsAdded(org, selected_teams) {
  waitFor(matchSuccess("Add teams " + selected_teams + " to Copilot subscription for organization " + org));
}

function matchAnyCopilotTeamsAdded() {
  return bp.EventSet("Any CopilotTeams Added", function(e) {
      return e.name.startsWith("Done: Add teams ");
  });
}

function addCopilotUsers(org, selected_usernames) {
  var url = "/orgs/" + org + "/copilot/billing/selected_users";
  var description = "Add users " + selected_usernames + " to Copilot subscription for organization " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 401, 403, 404, 409, 422, 500], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"org": org, "selected_usernames": selected_usernames}) });
}

function removeCopilotUsers(org, selected_usernames) {
  var url = "/orgs/" + org + "/copilot/billing/selected_users";
  var description = "Remove users " + selected_usernames + " from Copilot subscription for organization " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 403, 404, 422, 500] });
}

// verifyCopilotUsersExists skipped: No GET /{id} operation detected.
function waitForCopilotUsersAdded(org, selected_usernames) {
  waitFor(matchSuccess("Add users " + selected_usernames + " to Copilot subscription for organization " + org));
}

function matchAnyCopilotUsersAdded() {
  return bp.EventSet("Any CopilotUsers Added", function(e) {
      return e.name.startsWith("Done: Add users ");
  });
}

function getCopilotBilling(org) {
  var url = "/orgs/" + org + "/copilot/billing";
  var description = "Get Copilot seat information and settings for organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 403, 404, 422, 500] });
}

function verifyCopilotBillingExists(org) {
  var url = "/orgs/" + org + "/copilot/billing";
  var description = "Verify CopilotBilling " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CopilotBilling found");
}

function verifyCopilotBillingDoesNotExist(org) {
  var url = "/orgs/" + org + "/copilot/billing";
  var description = "Verify CopilotBilling " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CopilotBilling not found");
}

function matchAnyCopilotBillingAdded() {
  return bp.EventSet("Any CopilotBilling Added", function(e) {
      return e.name.startsWith("Done: Create CopilotBilling");
  });
}

function listCopilotSeats(org, page, per_page) {
  var url = "/orgs/" + org + "/copilot/billing/seats";
  var description = "List all Copilot seat assignments for organization " + org + " page " + page + " per_page " + per_page;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 403, 404, 500] });
}

function verifyCopilotSeatsExists(org, page, per_page) {
  var url = "/orgs/" + org + "/copilot/billing/seats";
  var description = "Verify CopilotSeats " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CopilotSeats found");
}

function verifyCopilotSeatsDoesNotExist(org, page, per_page) {
  var url = "/orgs/" + org + "/copilot/billing/seats";
  var description = "Verify CopilotSeats " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CopilotSeats not found");
}

function matchAnyCopilotSeatsAdded() {
  return bp.EventSet("Any CopilotSeats Added", function(e) {
      return e.name.startsWith("Done: Create CopilotSeats");
  });
}

function getCopilotMetricsForOrganization(org, page, per_page, since, until) {
  var url = "/orgs/" + org + "/copilot/metrics";
  var description = "Get Copilot metrics for organization " + org + " since " + since + " until " + until + " page " + page + " per_page " + per_page;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 422, 500] });
}

function verifyCopilotMetricsOrganizationExists(org, page, per_page, since, until) {
  var url = "/orgs/" + org + "/copilot/metrics";
  var description = "Verify CopilotMetricsOrganization " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CopilotMetricsOrganization found");
}

function verifyCopilotMetricsOrganizationDoesNotExist(org, page, per_page, since, until) {
  var url = "/orgs/" + org + "/copilot/metrics";
  var description = "Verify CopilotMetricsOrganization " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CopilotMetricsOrganization not found");
}

function matchAnyCopilotMetricsOrganizationAdded() {
  return bp.EventSet("Any CopilotMetricsOrganization Added", function(e) {
      return e.name.startsWith("Done: Create CopilotMetricsOrganization");
  });
}

function getCopilotSeatDetailsForUser(org, username) {
  var url = "/orgs/" + org + "/members/" + username + "/copilot";
  var description = "Get Copilot seat assignment details for user " + username + " in organization " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 403, 404, 422, 500] });
}

function verifyCopilotSeatUserExists(org, username) {
  var url = "/orgs/" + org + "/members/" + username + "/copilot";
  var description = "Verify CopilotSeatUser " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CopilotSeatUser found");
}

function verifyCopilotSeatUserDoesNotExist(org, username) {
  var url = "/orgs/" + org + "/members/" + username + "/copilot";
  var description = "Verify CopilotSeatUser " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CopilotSeatUser not found");
}

function matchAnyCopilotSeatUserAdded() {
  return bp.EventSet("Any CopilotSeatUser Added", function(e) {
      return e.name.startsWith("Done: Create CopilotSeatUser");
  });
}

function getCopilotMetricsForTeam(org, page, per_page, since, team_slug, until) {
  var url = "/orgs/" + org + "/team/" + team_slug + "/copilot/metrics";
  var description = "Get Copilot metrics for team " + team_slug + " in organization " + org + " since " + since + " until " + until + " page " + page + " per_page " + per_page;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404, 422, 500] });
}

function verifyCopilotMetricsTeamExists(org, page, per_page, since, team_slug, until) {
  var url = "/orgs/" + org + "/team/" + team_slug + "/copilot/metrics";
  var description = "Verify CopilotMetricsTeam " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CopilotMetricsTeam found");
}

function verifyCopilotMetricsTeamDoesNotExist(org, page, per_page, since, team_slug, until) {
  var url = "/orgs/" + org + "/team/" + team_slug + "/copilot/metrics";
  var description = "Verify CopilotMetricsTeam " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CopilotMetricsTeam not found");
}

function matchAnyCopilotMetricsTeamAdded() {
  return bp.EventSet("Any CopilotMetricsTeam Added", function(e) {
      return e.name.startsWith("Done: Create CopilotMetricsTeam");
  });
}

function searchCode(id, q) {
  var url = "/search/code";
  var description = "Search code with query " + q + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 422, 503] });
}

// verifyCodeSearchExists skipped: No GET /{id} operation detected.
function matchAnyCodeSearchAdded() {
  return bp.EventSet("Any CodeSearch Added", function(e) {
      return e.name.startsWith("Done: Create CodeSearch");
  });
}

function searchCommits(id, q) {
  var url = "/search/commits";
  var description = "Search commits with query " + q + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304] });
}

// verifyCommitSearchExists skipped: No GET /{id} operation detected.
function matchAnyCommitSearchAdded() {
  return bp.EventSet("Any CommitSearch Added", function(e) {
      return e.name.startsWith("Done: Create CommitSearch");
  });
}

function searchIssuesAndPullRequests(id, q) {
  var url = "/search/issues";
  var description = "Search issues and pull requests with query " + q + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 422, 503] });
}

// verifyIssueSearchExists skipped: No GET /{id} operation detected.
function matchAnyIssueSearchAdded() {
  return bp.EventSet("Any IssueSearch Added", function(e) {
      return e.name.startsWith("Done: Create IssueSearch");
  });
}

function searchLabels(id, q, repository_id) {
  var url = "/search/labels";
  var description = "Search labels in repository " + repository_id + " with query " + q;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 403, 404, 422] });
}

// verifyLabelSearchExists skipped: No GET /{id} operation detected.
function matchAnyLabelSearchAdded() {
  return bp.EventSet("Any LabelSearch Added", function(e) {
      return e.name.startsWith("Done: Create LabelSearch");
  });
}

function searchRepositories(id, q) {
  var url = "/search/repositories";
  var description = "Search repositories with query " + q + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 422, 503] });
}

// verifyRepositorySearchExists skipped: No GET /{id} operation detected.
function matchAnyRepositorySearchAdded() {
  return bp.EventSet("Any RepositorySearch Added", function(e) {
      return e.name.startsWith("Done: Create RepositorySearch");
  });
}

function searchTopics(id, q) {
  var url = "/search/topics";
  var description = "Search topics with query " + q + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304] });
}

// verifyTopicSearchExists skipped: No GET /{id} operation detected.
function matchAnyTopicSearchAdded() {
  return bp.EventSet("Any TopicSearch Added", function(e) {
      return e.name.startsWith("Done: Create TopicSearch");
  });
}

function searchUsers(id, q) {
  var url = "/search/users";
  var description = "Search users with query " + q + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 422, 503] });
}

// verifyUserSearchExists skipped: No GET /{id} operation detected.
function matchAnyUserSearchAdded() {
  return bp.EventSet("Any UserSearch Added", function(e) {
      return e.name.startsWith("Done: Create UserSearch");
  });
}

function createOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries";
  var description = "Create private registry of type " + registry_type + " with url " + url + " in org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "key_id": key_id, "org": org, "page": page, "per-page": per_page, "registry_type": registry_type, "secret_name": secret_name, "selected_repository_ids": selected_repository_ids, "url": url, "username": username, "visibility": visibility}) });
}

function getOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Get private registry " + secret_name + " in org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Update private registry " + secret_name + " in org " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"encrypted_value": encrypted_value, "key_id": key_id, "org": org, "page": page, "per-page": per_page, "registry_type": registry_type, "secret_name": secret_name, "selected_repository_ids": selected_repository_ids, "url": url, "username": username, "visibility": visibility}) });
}

function deleteOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Delete private registry " + secret_name + " in org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function listOrgPrivateRegistries(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries";
  var description = "List private registries for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function tryToAddExistingPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries";
  var description = "Try Add Existing PrivateRegistry " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Verify PrivateRegistry " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PrivateRegistry found");
}

function verifyPrivateRegistryDoesNotExist(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Verify PrivateRegistry " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PrivateRegistry not found");
}

function tryToDeleteANonExistingPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Verify negative delete for PrivateRegistry";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  return bp.EventSet("Delete PrivateRegistry", function(e) {
      return e.name === "Done: " + "Delete private registry " + secret_name + " in org " + org;
  });
}

function waitForPrivateRegistryAdded(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility) {
  waitFor(matchSuccess("Create private registry of type " + registry_type + " with url " + url + " in org " + org));
}

function matchAnyPrivateRegistryAdded() {
  return bp.EventSet("Any PrivateRegistry Added", function(e) {
      return e.name.startsWith("Done: Create private registry of type ");
  });
}

function getOrgPrivateRegistriesPublicKey(org) {
  var url = "/orgs/" + org + "/private-registries/public-key";
  var description = "Get private registries public key for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyPrivateRegistryPublicKeyExists(org) {
  var url = "/orgs/" + org + "/private-registries/public-key";
  var description = "Verify PrivateRegistryPublicKey " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PrivateRegistryPublicKey found");
}

function verifyPrivateRegistryPublicKeyDoesNotExist(org) {
  var url = "/orgs/" + org + "/private-registries/public-key";
  var description = "Verify PrivateRegistryPublicKey " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PrivateRegistryPublicKey not found");
}

function matchAnyPrivateRegistryPublicKeyAdded() {
  return bp.EventSet("Any PrivateRegistryPublicKey Added", function(e) {
      return e.name.startsWith("Done: Create PrivateRegistryPublicKey");
  });
}

function createNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org) {
  var url = "/orgs/" + org + "/settings/network-configurations";
  var description = "Create network configuration " + name + " for org " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"compute_service": compute_service, "name": name, "network_configuration_id": network_configuration_id, "network_settings_ids": network_settings_ids, "org": org}) });
}

function getNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Get network configuration " + network_configuration_id + " for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Update network configuration " + network_configuration_id + " for org " + org;
  var body = {};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"compute_service": compute_service, "name": name, "network_configuration_id": network_configuration_id, "network_settings_ids": network_settings_ids, "org": org}) });
}

function deleteNetworkConfigurationFromOrg(compute_service, name, network_configuration_id, network_settings_ids, org) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Delete network configuration " + network_configuration_id + " from org " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org) {
  var url = "/orgs/" + org + "/settings/network-configurations";
  var description = "Try Add Existing NetworkConfiguration " + org;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Verify NetworkConfiguration " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("NetworkConfiguration found");
}

function verifyNetworkConfigurationDoesNotExist(compute_service, name, network_configuration_id, network_settings_ids, org) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Verify NetworkConfiguration " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("NetworkConfiguration not found");
}

function tryToDeleteANonExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Verify negative delete for NetworkConfiguration";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org) {
  return bp.EventSet("Delete NetworkConfiguration", function(e) {
      return e.name === "Done: " + "Delete network configuration " + network_configuration_id + " from org " + org;
  });
}

function waitForNetworkConfigurationAdded(compute_service, name, network_configuration_id, network_settings_ids, org) {
  waitFor(matchSuccess("Create network configuration " + name + " for org " + org));
}

function matchAnyNetworkConfigurationAdded() {
  return bp.EventSet("Any NetworkConfiguration Added", function(e) {
      return e.name.startsWith("Done: Create network configuration ");
  });
}

function getNetworkSettingsForOrg(network_settings_id, org) {
  var url = "/orgs/" + org + "/settings/network-settings/" + network_settings_id;
  var description = "Get network settings " + network_settings_id + " for org " + org;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function verifyNetworkSettingsExists(network_settings_id, org) {
  var url = "/orgs/" + org + "/settings/network-settings/" + network_settings_id;
  var description = "Verify NetworkSettings " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("NetworkSettings found");
}

function verifyNetworkSettingsDoesNotExist(network_settings_id, org) {
  var url = "/orgs/" + org + "/settings/network-settings/" + network_settings_id;
  var description = "Verify NetworkSettings " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("NetworkSettings not found");
}

function matchAnyNetworkSettingsAdded() {
  return bp.EventSet("Any NetworkSettings Added", function(e) {
      return e.name.startsWith("Done: Create NetworkSettings");
  });
}

function getDependencyGraphDiffRange(basehead, id, owner, repo, snapshot) {
  var url = "/repos/" + owner + "/" + repo + "/dependency-graph/compare/" + basehead;
  var description = "Get a diff of the dependencies between commits " + basehead + " in repository " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function exportRepositorySBOM(basehead, id, owner, repo, snapshot) {
  var url = "/repos/" + owner + "/" + repo + "/dependency-graph/sbom";
  var description = "Export a software bill of materials (SBOM) for repository " + owner + "/" + repo + " " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function createRepositorySnapshot(basehead, id, owner, repo, snapshot) {
  var url = "/repos/" + owner + "/" + repo + "/dependency-graph/snapshots";
  var description = "Create a snapshot of dependencies for repository " + owner + "/" + repo + " " + id;
  var body = {
    "id": id,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"basehead": basehead, "id": id, "owner": owner, "repo": repo, "snapshot": snapshot}) });
}

// verifyRepositoryDependencyGraphExists skipped: No GET /{id} operation detected.
function matchAnyRepositoryDependencyGraphAdded() {
  return bp.EventSet("Any RepositoryDependencyGraph Added", function(e) {
      return e.name.startsWith("Done: Create RepositoryDependencyGraph");
  });
}

function getCodeOfConduct(key) {
  var url = "/codes_of_conduct/" + key;
  var description = "Get code of conduct with key " + key;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304, 404] });
}

function getAllCodesOfConduct(key) {
  var url = "/codes_of_conduct";
  var description = "Get all codes of conduct " + key;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 304] });
}

function verifyCodeOfConductExists(key) {
  var url = "/codes_of_conduct/" + key;
  var description = "Verify CodeOfConduct " + key + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CodeOfConduct found");
}

function verifyCodeOfConductDoesNotExist(key) {
  var url = "/codes_of_conduct/" + key;
  var description = "Verify CodeOfConduct " + key + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CodeOfConduct not found");
}

function matchAnyCodeOfConductAdded() {
  return bp.EventSet("Any CodeOfConduct Added", function(e) {
      return e.name.startsWith("Done: Create CodeOfConduct");
  });
}
