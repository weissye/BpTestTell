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
  let allow_auto_merge = "allow_auto_merge_200";
  let allow_merge_commit = "allow_merge_commit_200";
  let allow_rebase_merge = "allow_rebase_merge_200";
  let allow_squash_merge = "allow_squash_merge_200";
  let auto_init = "auto_init_200";
  let delete_branch_on_merge = "delete_branch_on_merge_200";
  let description = "description_200";
  let direction = "direction_200";
  let gitignore_template = "gitignore_template_200";
  let has_discussions = "has_discussions_200";
  let has_downloads = "has_downloads_200";
  let has_issues = "has_issues_200";
  let has_projects = "has_projects_200";
  let has_wiki = "has_wiki_200";
  let homepage = "homepage_200";
  let is_template = "is_template_200";
  let license_template = "license_template_200";
  let merge_commit_message = "merge_commit_message_200";
  let merge_commit_title = "merge_commit_title_200";
  let name = "name_200";
  let org = "org_200";
  let owner = "owner_200";
  let page = "page_200";
  let per-page = "per-page_200";
  let _private = "private_200";
  let ref = "ref_200";
  let repo = "repo_200";
  let sort = "sort_200";
  let squash_merge_commit_message = "squash_merge_commit_message_200";
  let squash_merge_commit_title = "squash_merge_commit_title_200";
  let team_id;
  let type = "type_200";
  let username = 200;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  waitForRepositoryAdded(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  tryToAddExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  transferRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  deleteRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  tryToDeleteANonExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  verifyRepositoryDoesNotExist(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
});

// Story: crud:Repository:nondet:1:2
bthread("crud:Repository:nondet:1:2", function () {
  let allow_auto_merge = "allow_auto_merge_201";
  let allow_merge_commit = "allow_merge_commit_201";
  let allow_rebase_merge = "allow_rebase_merge_201";
  let allow_squash_merge = "allow_squash_merge_201";
  let auto_init = "auto_init_201";
  let delete_branch_on_merge = "delete_branch_on_merge_201";
  let description = "description_201";
  let direction = "direction_201";
  let gitignore_template = "gitignore_template_201";
  let has_discussions = "has_discussions_201";
  let has_downloads = "has_downloads_201";
  let has_issues = "has_issues_201";
  let has_projects = "has_projects_201";
  let has_wiki = "has_wiki_201";
  let homepage = "homepage_201";
  let is_template = "is_template_201";
  let license_template = "license_template_201";
  let merge_commit_message = "merge_commit_message_201";
  let merge_commit_title = "merge_commit_title_201";
  let name = "name_201";
  let org = "org_201";
  let owner = "owner_201";
  let page = "page_201";
  let per-page = "per-page_201";
  let _private = "private_201";
  let ref = "ref_201";
  let repo = "repo_201";
  let sort = "sort_201";
  let squash_merge_commit_message = "squash_merge_commit_message_201";
  let squash_merge_commit_title = "squash_merge_commit_title_201";
  let team_id;
  let type = "type_201";
  let username = 201;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  // waitForRepositoryAdded(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  tryToAddExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  transferRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  deleteRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  tryToDeleteANonExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  verifyRepositoryDoesNotExist(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
});

// Story: crud:Repository:nondet:negative:dup-add
bthread("crud:Repository:nondet:negative:dup-add", function () {
  let allow_auto_merge = "allow_auto_merge_206";
  let allow_merge_commit = "allow_merge_commit_206";
  let allow_rebase_merge = "allow_rebase_merge_206";
  let allow_squash_merge = "allow_squash_merge_206";
  let auto_init = "auto_init_206";
  let delete_branch_on_merge = "delete_branch_on_merge_206";
  let description = "description_206";
  let direction = "direction_206";
  let gitignore_template = "gitignore_template_206";
  let has_discussions = "has_discussions_206";
  let has_downloads = "has_downloads_206";
  let has_issues = "has_issues_206";
  let has_projects = "has_projects_206";
  let has_wiki = "has_wiki_206";
  let homepage = "homepage_206";
  let is_template = "is_template_206";
  let license_template = "license_template_206";
  let merge_commit_message = "merge_commit_message_206";
  let merge_commit_title = "merge_commit_title_206";
  let name = "name_206";
  let org = "org_206";
  let owner = "owner_206";
  let page = "page_206";
  let per-page = "per-page_206";
  let _private = "private_206";
  let ref = "ref_206";
  let repo = "repo_206";
  let sort = "sort_206";
  let squash_merge_commit_message = "squash_merge_commit_message_206";
  let squash_merge_commit_title = "squash_merge_commit_title_206";
  let team_id;
  let type = "type_206";
  let username = 206;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  // waitForRepositoryAdded(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  tryToAddExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, page, per-page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, type, username);
});

// Story: crud:Ruleset:nondet:1:1
bthread("crud:Ruleset:nondet:1:1", function () {
  let bypass_actors = "bypass_actors_210";
  let conditions = "conditions_210";
  let enforcement = "enforcement_210";
  let name = "name_210";
  let org = 210;
  let rules = "rules_210";
  let ruleset_id = 210;
  let target = "target_210";
  createRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  waitForRulesetAdded(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  tryToAddExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  updateRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  deleteRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  tryToDeleteANonExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
});

// Story: crud:Ruleset:nondet:1:2
bthread("crud:Ruleset:nondet:1:2", function () {
  let bypass_actors = "bypass_actors_211";
  let conditions = "conditions_211";
  let enforcement = "enforcement_211";
  let name = "name_211";
  let org = 211;
  let rules = "rules_211";
  let ruleset_id = 211;
  let target = "target_211";
  createRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  // waitForRulesetAdded(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  tryToAddExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  updateRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  deleteRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  tryToDeleteANonExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
});

// Story: crud:Ruleset:nondet:negative:dup-add
bthread("crud:Ruleset:nondet:negative:dup-add", function () {
  let bypass_actors = "bypass_actors_216";
  let conditions = "conditions_216";
  let enforcement = "enforcement_216";
  let name = "name_216";
  let org = 216;
  let rules = "rules_216";
  let ruleset_id = 216;
  let target = "target_216";
  createRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  // waitForRulesetAdded(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  tryToAddExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
});

// Story: crud:RuleSuite:read_only
bthread("crud:RuleSuite:read_only", function () {
  let org = 220;
  let rule_suite_id = 220;
  verifyRuleSuiteExists(org, rule_suite_id);
});

// Story: crud:Attestation:read_only
bthread("crud:Attestation:read_only", function () {
  let attestation_id = 230;
  let bundle = {};
  let org = "org_230";
  let owner = 230;
  let pagination_after = "pagination_after_230";
  let pagination_before = "pagination_before_230";
  let per_page = "per_page_230";
  let predicate_type = "predicate_type_230";
  let repo = "repo_230";
  let subject_digest = "subject_digest_230";
  let subject_digests = "subject_digests_230";
  let username = "username_230";
  verifyAttestationExists(attestation_id, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
});

// Story: crud:Autolink:nondet:1:1
bthread("crud:Autolink:nondet:1:1", function () {
  let autolink_id = 240;
  let is_alphanumeric = "is_alphanumeric_240";
  let key_prefix = "key_prefix_240";
  let owner = 240;
  let repo = "repo_240";
  let url_template = "url_template_240";
  createAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  waitForAutolinkAdded(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  tryToAddExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  deleteAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  tryToDeleteANonExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkDoesNotExist(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
});

// Story: crud:Autolink:nondet:1:2
bthread("crud:Autolink:nondet:1:2", function () {
  let autolink_id = 241;
  let is_alphanumeric = "is_alphanumeric_241";
  let key_prefix = "key_prefix_241";
  let owner = 241;
  let repo = "repo_241";
  let url_template = "url_template_241";
  createAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  // waitForAutolinkAdded(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  tryToAddExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  deleteAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  tryToDeleteANonExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkDoesNotExist(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
});

// Story: crud:Autolink:nondet:negative:dup-add
bthread("crud:Autolink:nondet:negative:dup-add", function () {
  let autolink_id = 246;
  let is_alphanumeric = "is_alphanumeric_246";
  let key_prefix = "key_prefix_246";
  let owner = 246;
  let repo = "repo_246";
  let url_template = "url_template_246";
  createAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  // waitForAutolinkAdded(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  tryToAddExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
});

// Story: crud:AutomatedSecurityFixes:nondet:1:1
bthread("crud:AutomatedSecurityFixes:nondet:1:1", function () {
  let owner = 250;
  let repo = "repo_250";
  enableAutomatedSecurityFixes(owner, repo);
  waitForAutomatedSecurityFixesAdded(owner, repo);
  tryToAddExistingAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesExists(owner, repo);
  disableAutomatedSecurityFixes(owner, repo);
  tryToDeleteANonExistingAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesDoesNotExist(owner, repo);
});

// Story: crud:AutomatedSecurityFixes:nondet:1:2
bthread("crud:AutomatedSecurityFixes:nondet:1:2", function () {
  let owner = 251;
  let repo = "repo_251";
  enableAutomatedSecurityFixes(owner, repo);
  // waitForAutomatedSecurityFixesAdded(owner, repo);
  tryToAddExistingAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesExists(owner, repo);
  disableAutomatedSecurityFixes(owner, repo);
  tryToDeleteANonExistingAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesDoesNotExist(owner, repo);
});

// Story: crud:AutomatedSecurityFixes:nondet:negative:dup-add
bthread("crud:AutomatedSecurityFixes:nondet:negative:dup-add", function () {
  let owner = 256;
  let repo = "repo_256";
  enableAutomatedSecurityFixes(owner, repo);
  // waitForAutomatedSecurityFixesAdded(owner, repo);
  verifyAutomatedSecurityFixesExists(owner, repo);
  tryToAddExistingAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesExists(owner, repo);
});

// Story: crud:Branch:read_only
bthread("crud:Branch:read_only", function () {
  let branch = "branch_260";
  let owner = 260;
  let repo = "repo_260";
  verifyBranchExists(branch, owner, repo);
});

// Story: crud:Branches:read_only
bthread("crud:Branches:read_only", function () {
  let owner = 270;
  let repo = "repo_270";
  verifyBranchesExists(owner, repo);
});

// Story: crud:BranchProtection:read_only
bthread("crud:BranchProtection:read_only", function () {
  let branch = "branch_280";
  let owner = 280;
  let repo = "repo_280";
  verifyBranchProtectionExists(branch, owner, repo);
});

// Story: crud:AdminBranchProtection:nondet:1:1
bthread("crud:AdminBranchProtection:nondet:1:1", function () {
  let branch = "branch_290";
  let owner = 290;
  let repo = "repo_290";
  setAdminBranchProtection(branch, owner, repo);
  waitForAdminBranchProtectionAdded(branch, owner, repo);
  tryToAddExistingAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionExists(branch, owner, repo);
  deleteAdminBranchProtection(branch, owner, repo);
  tryToDeleteANonExistingAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionDoesNotExist(branch, owner, repo);
});

// Story: crud:AdminBranchProtection:nondet:1:2
bthread("crud:AdminBranchProtection:nondet:1:2", function () {
  let branch = "branch_291";
  let owner = 291;
  let repo = "repo_291";
  setAdminBranchProtection(branch, owner, repo);
  // waitForAdminBranchProtectionAdded(branch, owner, repo);
  tryToAddExistingAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionExists(branch, owner, repo);
  deleteAdminBranchProtection(branch, owner, repo);
  tryToDeleteANonExistingAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionDoesNotExist(branch, owner, repo);
});

// Story: crud:AdminBranchProtection:nondet:negative:dup-add
bthread("crud:AdminBranchProtection:nondet:negative:dup-add", function () {
  let branch = "branch_296";
  let owner = 296;
  let repo = "repo_296";
  setAdminBranchProtection(branch, owner, repo);
  // waitForAdminBranchProtectionAdded(branch, owner, repo);
  verifyAdminBranchProtectionExists(branch, owner, repo);
  tryToAddExistingAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionExists(branch, owner, repo);
});

// Story: crud:PullRequestReviewProtection:read_only
bthread("crud:PullRequestReviewProtection:read_only", function () {
  let branch = "branch_300";
  let owner = 300;
  let repo = "repo_300";
  verifyPullRequestReviewProtectionExists(branch, owner, repo);
});

// Story: crud:CommitSignatureProtection:nondet:1:1
bthread("crud:CommitSignatureProtection:nondet:1:1", function () {
  let branch = "branch_310";
  let owner = 310;
  let repo = "repo_310";
  createCommitSignatureProtection(branch, owner, repo);
  waitForCommitSignatureProtectionAdded(branch, owner, repo);
  tryToAddExistingCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionExists(branch, owner, repo);
  deleteCommitSignatureProtection(branch, owner, repo);
  tryToDeleteANonExistingCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionDoesNotExist(branch, owner, repo);
});

// Story: crud:CommitSignatureProtection:nondet:1:2
bthread("crud:CommitSignatureProtection:nondet:1:2", function () {
  let branch = "branch_311";
  let owner = 311;
  let repo = "repo_311";
  createCommitSignatureProtection(branch, owner, repo);
  // waitForCommitSignatureProtectionAdded(branch, owner, repo);
  tryToAddExistingCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionExists(branch, owner, repo);
  deleteCommitSignatureProtection(branch, owner, repo);
  tryToDeleteANonExistingCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionDoesNotExist(branch, owner, repo);
});

// Story: crud:CommitSignatureProtection:nondet:negative:dup-add
bthread("crud:CommitSignatureProtection:nondet:negative:dup-add", function () {
  let branch = "branch_316";
  let owner = 316;
  let repo = "repo_316";
  createCommitSignatureProtection(branch, owner, repo);
  // waitForCommitSignatureProtectionAdded(branch, owner, repo);
  verifyCommitSignatureProtectionExists(branch, owner, repo);
  tryToAddExistingCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionExists(branch, owner, repo);
});

// Story: crud:StatusChecksProtection:read_only
bthread("crud:StatusChecksProtection:read_only", function () {
  let branch = "branch_320";
  let owner = 320;
  let repo = "repo_320";
  verifyStatusChecksProtectionExists(branch, owner, repo);
});

// Story: crud:StatusCheckContexts:nondet:1:1
bthread("crud:StatusCheckContexts:nondet:1:1", function () {
  let branch = "branch_330";
  let owner = 330;
  let repo = "repo_330";
  addStatusCheckContexts(branch, owner, repo);
  waitForStatusCheckContextsAdded(branch, owner, repo);
  tryToAddExistingStatusCheckContexts(branch, owner, repo);
  verifyStatusCheckContextsExists(branch, owner, repo);
  setStatusCheckContexts(branch, owner, repo);
  removeStatusCheckContexts(branch, owner, repo);
  tryToDeleteANonExistingStatusCheckContexts(branch, owner, repo);
  verifyStatusCheckContextsDoesNotExist(branch, owner, repo);
});

// Story: crud:StatusCheckContexts:nondet:1:2
bthread("crud:StatusCheckContexts:nondet:1:2", function () {
  let branch = "branch_331";
  let owner = 331;
  let repo = "repo_331";
  addStatusCheckContexts(branch, owner, repo);
  // waitForStatusCheckContextsAdded(branch, owner, repo);
  tryToAddExistingStatusCheckContexts(branch, owner, repo);
  setStatusCheckContexts(branch, owner, repo);
  verifyStatusCheckContextsExists(branch, owner, repo);
  removeStatusCheckContexts(branch, owner, repo);
  tryToDeleteANonExistingStatusCheckContexts(branch, owner, repo);
  verifyStatusCheckContextsDoesNotExist(branch, owner, repo);
});

// Story: crud:StatusCheckContexts:nondet:negative:dup-add
bthread("crud:StatusCheckContexts:nondet:negative:dup-add", function () {
  let branch = "branch_336";
  let owner = 336;
  let repo = "repo_336";
  addStatusCheckContexts(branch, owner, repo);
  // waitForStatusCheckContextsAdded(branch, owner, repo);
  verifyStatusCheckContextsExists(branch, owner, repo);
  tryToAddExistingStatusCheckContexts(branch, owner, repo);
  verifyStatusCheckContextsExists(branch, owner, repo);
});

// Story: crud:BranchProtectionRestrictions:read_only
bthread("crud:BranchProtectionRestrictions:read_only", function () {
  let branch = "branch_340";
  let owner = 340;
  let repo = "repo_340";
  verifyBranchProtectionRestrictionsExists(branch, owner, repo);
});

// Story: crud:BranchProtectionRestrictionApps:nondet:1:1
bthread("crud:BranchProtectionRestrictionApps:nondet:1:1", function () {
  let apps = "apps_350";
  let branch = "branch_350";
  let owner = 350;
  let repo = "repo_350";
  addAppAccessRestrictions(apps, branch, owner, repo);
  waitForBranchProtectionRestrictionAppsAdded(apps, branch, owner, repo);
  tryToAddExistingBranchProtectionRestrictionApps(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo);
  setAppAccessRestrictions(apps, branch, owner, repo);
  removeAppAccessRestrictions(apps, branch, owner, repo);
  tryToDeleteANonExistingBranchProtectionRestrictionApps(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsDoesNotExist(apps, branch, owner, repo);
});

// Story: crud:BranchProtectionRestrictionApps:nondet:1:2
bthread("crud:BranchProtectionRestrictionApps:nondet:1:2", function () {
  let apps = "apps_351";
  let branch = "branch_351";
  let owner = 351;
  let repo = "repo_351";
  addAppAccessRestrictions(apps, branch, owner, repo);
  // waitForBranchProtectionRestrictionAppsAdded(apps, branch, owner, repo);
  tryToAddExistingBranchProtectionRestrictionApps(apps, branch, owner, repo);
  setAppAccessRestrictions(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo);
  removeAppAccessRestrictions(apps, branch, owner, repo);
  tryToDeleteANonExistingBranchProtectionRestrictionApps(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsDoesNotExist(apps, branch, owner, repo);
});

// Story: crud:BranchProtectionRestrictionApps:nondet:negative:dup-add
bthread("crud:BranchProtectionRestrictionApps:nondet:negative:dup-add", function () {
  let apps = "apps_356";
  let branch = "branch_356";
  let owner = 356;
  let repo = "repo_356";
  addAppAccessRestrictions(apps, branch, owner, repo);
  // waitForBranchProtectionRestrictionAppsAdded(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo);
  tryToAddExistingBranchProtectionRestrictionApps(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo);
});

// Story: crud:BranchProtectionRestrictionTeams:nondet:1:1
bthread("crud:BranchProtectionRestrictionTeams:nondet:1:1", function () {
  let branch = "branch_360";
  let owner = 360;
  let repo = "repo_360";
  let teams = "teams_360";
  addTeamAccessRestrictions(branch, owner, repo, teams);
  waitForBranchProtectionRestrictionTeamsAdded(branch, owner, repo, teams);
  tryToAddExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams);
  setTeamAccessRestrictions(branch, owner, repo, teams);
  removeTeamAccessRestrictions(branch, owner, repo, teams);
  tryToDeleteANonExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsDoesNotExist(branch, owner, repo, teams);
});

// Story: crud:BranchProtectionRestrictionTeams:nondet:1:2
bthread("crud:BranchProtectionRestrictionTeams:nondet:1:2", function () {
  let branch = "branch_361";
  let owner = 361;
  let repo = "repo_361";
  let teams = "teams_361";
  addTeamAccessRestrictions(branch, owner, repo, teams);
  // waitForBranchProtectionRestrictionTeamsAdded(branch, owner, repo, teams);
  tryToAddExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams);
  setTeamAccessRestrictions(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams);
  removeTeamAccessRestrictions(branch, owner, repo, teams);
  tryToDeleteANonExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsDoesNotExist(branch, owner, repo, teams);
});

// Story: crud:BranchProtectionRestrictionTeams:nondet:negative:dup-add
bthread("crud:BranchProtectionRestrictionTeams:nondet:negative:dup-add", function () {
  let branch = "branch_366";
  let owner = 366;
  let repo = "repo_366";
  let teams = "teams_366";
  addTeamAccessRestrictions(branch, owner, repo, teams);
  // waitForBranchProtectionRestrictionTeamsAdded(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams);
  tryToAddExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams);
});

// Story: crud:BranchProtectionRestrictionUsers:nondet:1:1
bthread("crud:BranchProtectionRestrictionUsers:nondet:1:1", function () {
  let branch = "branch_370";
  let owner = 370;
  let repo = "repo_370";
  let users = "users_370";
  addUserAccessRestrictions(branch, owner, repo, users);
  waitForBranchProtectionRestrictionUsersAdded(branch, owner, repo, users);
  tryToAddExistingBranchProtectionRestrictionUsers(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users);
  setUserAccessRestrictions(branch, owner, repo, users);
  removeUserAccessRestrictions(branch, owner, repo, users);
  tryToDeleteANonExistingBranchProtectionRestrictionUsers(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersDoesNotExist(branch, owner, repo, users);
});

// Story: crud:BranchProtectionRestrictionUsers:nondet:1:2
bthread("crud:BranchProtectionRestrictionUsers:nondet:1:2", function () {
  let branch = "branch_371";
  let owner = 371;
  let repo = "repo_371";
  let users = "users_371";
  addUserAccessRestrictions(branch, owner, repo, users);
  // waitForBranchProtectionRestrictionUsersAdded(branch, owner, repo, users);
  tryToAddExistingBranchProtectionRestrictionUsers(branch, owner, repo, users);
  setUserAccessRestrictions(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users);
  removeUserAccessRestrictions(branch, owner, repo, users);
  tryToDeleteANonExistingBranchProtectionRestrictionUsers(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersDoesNotExist(branch, owner, repo, users);
});

// Story: crud:BranchProtectionRestrictionUsers:nondet:negative:dup-add
bthread("crud:BranchProtectionRestrictionUsers:nondet:negative:dup-add", function () {
  let branch = "branch_376";
  let owner = 376;
  let repo = "repo_376";
  let users = "users_376";
  addUserAccessRestrictions(branch, owner, repo, users);
  // waitForBranchProtectionRestrictionUsersAdded(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users);
  tryToAddExistingBranchProtectionRestrictionUsers(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users);
});

// Story: crud:Collaborator:nondet:1:1
bthread("crud:Collaborator:nondet:1:1", function () {
  let owner = 390;
  let permission = "permission_390";
  let repo = "repo_390";
  let username = "username_390";
  addCollaborator(owner, permission, repo, username);
  waitForCollaboratorAdded(owner, permission, repo, username);
  tryToAddExistingCollaborator(owner, permission, repo, username);
  verifyCollaboratorExists(owner, permission, repo, username);
  removeCollaborator(owner, permission, repo, username);
  tryToDeleteANonExistingCollaborator(owner, permission, repo, username);
  verifyCollaboratorDoesNotExist(owner, permission, repo, username);
});

// Story: crud:Collaborator:nondet:1:2
bthread("crud:Collaborator:nondet:1:2", function () {
  let owner = 391;
  let permission = "permission_391";
  let repo = "repo_391";
  let username = "username_391";
  addCollaborator(owner, permission, repo, username);
  // waitForCollaboratorAdded(owner, permission, repo, username);
  tryToAddExistingCollaborator(owner, permission, repo, username);
  verifyCollaboratorExists(owner, permission, repo, username);
  removeCollaborator(owner, permission, repo, username);
  tryToDeleteANonExistingCollaborator(owner, permission, repo, username);
  verifyCollaboratorDoesNotExist(owner, permission, repo, username);
});

// Story: crud:Collaborator:nondet:negative:dup-add
bthread("crud:Collaborator:nondet:negative:dup-add", function () {
  let owner = 396;
  let permission = "permission_396";
  let repo = "repo_396";
  let username = "username_396";
  addCollaborator(owner, permission, repo, username);
  // waitForCollaboratorAdded(owner, permission, repo, username);
  verifyCollaboratorExists(owner, permission, repo, username);
  tryToAddExistingCollaborator(owner, permission, repo, username);
  verifyCollaboratorExists(owner, permission, repo, username);
});

// Story: crud:CommitComment:read_only
bthread("crud:CommitComment:read_only", function () {
  let body = "body_400";
  let comment_id = 400;
  let owner = 400;
  let repo = "repo_400";
  verifyCommitCommentExists(body, comment_id, owner, repo);
});

// Story: crud:Commit:read_only
bthread("crud:Commit:read_only", function () {
  let author = {};
  let commit_sha = "commit_sha_420";
  let committer = {};
  let message = "message_420";
  let owner = 420;
  let parents = "parents_420";
  let ref = "ref_420";
  let repo = "repo_420";
  let signature = "signature_420";
  let tree = "tree_420";
  verifyCommitExists(author, commit_sha, committer, message, owner, parents, ref, repo, signature, tree);
});

// Story: crud:RepositoryContent:nondet:1:1
bthread("crud:RepositoryContent:nondet:1:1", function () {
  let owner = 430;
  let path = "path_430";
  let repo = "repo_430";
  createOrUpdateFileContent(owner, path, repo);
  waitForRepositoryContentAdded(owner, path, repo);
  tryToAddExistingRepositoryContent(owner, path, repo);
  verifyRepositoryContentExists(owner, path, repo);
  createOrUpdateFileContent(owner, path, repo);
  deleteFile(owner, path, repo);
  tryToDeleteANonExistingRepositoryContent(owner, path, repo);
  verifyRepositoryContentDoesNotExist(owner, path, repo);
});

// Story: crud:RepositoryContent:nondet:1:2
bthread("crud:RepositoryContent:nondet:1:2", function () {
  let owner = 431;
  let path = "path_431";
  let repo = "repo_431";
  createOrUpdateFileContent(owner, path, repo);
  // waitForRepositoryContentAdded(owner, path, repo);
  tryToAddExistingRepositoryContent(owner, path, repo);
  createOrUpdateFileContent(owner, path, repo);
  verifyRepositoryContentExists(owner, path, repo);
  deleteFile(owner, path, repo);
  tryToDeleteANonExistingRepositoryContent(owner, path, repo);
  verifyRepositoryContentDoesNotExist(owner, path, repo);
});

// Story: crud:RepositoryContent:nondet:negative:dup-add
bthread("crud:RepositoryContent:nondet:negative:dup-add", function () {
  let owner = 436;
  let path = "path_436";
  let repo = "repo_436";
  createOrUpdateFileContent(owner, path, repo);
  // waitForRepositoryContentAdded(owner, path, repo);
  verifyRepositoryContentExists(owner, path, repo);
  tryToAddExistingRepositoryContent(owner, path, repo);
  verifyRepositoryContentExists(owner, path, repo);
});

// Story: crud:Deployment:nondet:1:1
bthread("crud:Deployment:nondet:1:1", function () {
  let auto_merge = "auto_merge_440";
  let deployment_id = 440;
  let description = "description_440";
  let environment = "environment_440";
  let owner = 440;
  let payload = "payload_440";
  let production_environment = "production_environment_440";
  let ref = "ref_440";
  let repo = "repo_440";
  let required_contexts = "required_contexts_440";
  let task = "task_440";
  let transient_environment = "transient_environment_440";
  createDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  waitForDeploymentAdded(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  tryToAddExistingDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  verifyDeploymentExists(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  deleteDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  tryToDeleteANonExistingDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  verifyDeploymentDoesNotExist(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
});

// Story: crud:Deployment:nondet:1:2
bthread("crud:Deployment:nondet:1:2", function () {
  let auto_merge = "auto_merge_441";
  let deployment_id = 441;
  let description = "description_441";
  let environment = "environment_441";
  let owner = 441;
  let payload = "payload_441";
  let production_environment = "production_environment_441";
  let ref = "ref_441";
  let repo = "repo_441";
  let required_contexts = "required_contexts_441";
  let task = "task_441";
  let transient_environment = "transient_environment_441";
  createDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  // waitForDeploymentAdded(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  tryToAddExistingDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  verifyDeploymentExists(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  deleteDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  tryToDeleteANonExistingDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  verifyDeploymentDoesNotExist(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
});

// Story: crud:Deployment:nondet:negative:dup-add
bthread("crud:Deployment:nondet:negative:dup-add", function () {
  let auto_merge = "auto_merge_446";
  let deployment_id = 446;
  let description = "description_446";
  let environment = "environment_446";
  let owner = 446;
  let payload = "payload_446";
  let production_environment = "production_environment_446";
  let ref = "ref_446";
  let repo = "repo_446";
  let required_contexts = "required_contexts_446";
  let task = "task_446";
  let transient_environment = "transient_environment_446";
  createDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  // waitForDeploymentAdded(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  verifyDeploymentExists(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  tryToAddExistingDeployment(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
  verifyDeploymentExists(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
});

// Story: crud:DeploymentStatus:read_only
bthread("crud:DeploymentStatus:read_only", function () {
  let auto_inactive = "auto_inactive_450";
  let deployment_id;
  let description = "description_450";
  let environment = "environment_450";
  let environment_url = "environment_url_450";
  let log_url = "log_url_450";
  let owner = 450;
  let repo = "repo_450";
  let state = "state_450";
  let status_id = 450;
  let target_url = "target_url_450";
  verifyDeploymentStatusExists(auto_inactive, deployment_id, description, environment, environment_url, log_url, owner, repo, state, status_id, target_url);
});

// Story: crud:Environment:nondet:1:1
bthread("crud:Environment:nondet:1:1", function () {
  let environment_name = "environment_name_460";
  let owner = 460;
  let repo = "repo_460";
  createOrUpdateEnvironment(environment_name, owner, repo);
  waitForEnvironmentAdded(environment_name, owner, repo);
  tryToAddExistingEnvironment(environment_name, owner, repo);
  verifyEnvironmentExists(environment_name, owner, repo);
  createOrUpdateEnvironment(environment_name, owner, repo);
  deleteEnvironment(environment_name, owner, repo);
  tryToDeleteANonExistingEnvironment(environment_name, owner, repo);
  verifyEnvironmentDoesNotExist(environment_name, owner, repo);
});

// Story: crud:Environment:nondet:1:2
bthread("crud:Environment:nondet:1:2", function () {
  let environment_name = "environment_name_461";
  let owner = 461;
  let repo = "repo_461";
  createOrUpdateEnvironment(environment_name, owner, repo);
  // waitForEnvironmentAdded(environment_name, owner, repo);
  tryToAddExistingEnvironment(environment_name, owner, repo);
  createOrUpdateEnvironment(environment_name, owner, repo);
  verifyEnvironmentExists(environment_name, owner, repo);
  deleteEnvironment(environment_name, owner, repo);
  tryToDeleteANonExistingEnvironment(environment_name, owner, repo);
  verifyEnvironmentDoesNotExist(environment_name, owner, repo);
});

// Story: crud:Environment:nondet:negative:dup-add
bthread("crud:Environment:nondet:negative:dup-add", function () {
  let environment_name = "environment_name_466";
  let owner = 466;
  let repo = "repo_466";
  createOrUpdateEnvironment(environment_name, owner, repo);
  // waitForEnvironmentAdded(environment_name, owner, repo);
  verifyEnvironmentExists(environment_name, owner, repo);
  tryToAddExistingEnvironment(environment_name, owner, repo);
  verifyEnvironmentExists(environment_name, owner, repo);
});

// Story: crud:DeploymentBranchPolicy:nondet:1:1
bthread("crud:DeploymentBranchPolicy:nondet:1:1", function () {
  let branch_policy_id;
  let environment_name = "environment_name_470";
  let name = "name_470";
  let owner = 470;
  let repo = "repo_470";
  let type = "type_470";
  // Dependency Barrier
  let deps = {};
  deps["branch_policy_id"] = matchAnyBranchAdded();
  let pkMap = {"branch_policy_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  branch_policy_id = captured["branch_policy_id"];
  createDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  waitForDeploymentBranchPolicyAdded(branch_policy_id, environment_name, name, owner, repo, type);
  tryToAddExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo, type);
  updateDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  deleteDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  tryToDeleteANonExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  verifyDeploymentBranchPolicyDoesNotExist(branch_policy_id, environment_name, name, owner, repo, type);
});

// Story: crud:DeploymentBranchPolicy:nondet:1:2
bthread("crud:DeploymentBranchPolicy:nondet:1:2", function () {
  let branch_policy_id;
  let environment_name = "environment_name_471";
  let name = "name_471";
  let owner = 471;
  let repo = "repo_471";
  let type = "type_471";
  // Dependency Barrier
  let deps = {};
  deps["branch_policy_id"] = matchAnyBranchAdded();
  let pkMap = {"branch_policy_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  branch_policy_id = captured["branch_policy_id"];
  createDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  // waitForDeploymentBranchPolicyAdded(branch_policy_id, environment_name, name, owner, repo, type);
  tryToAddExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  updateDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo, type);
  deleteDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  tryToDeleteANonExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  verifyDeploymentBranchPolicyDoesNotExist(branch_policy_id, environment_name, name, owner, repo, type);
});

// Story: crud:DeploymentBranchPolicy:nondet:negative:dup-add
bthread("crud:DeploymentBranchPolicy:nondet:negative:dup-add", function () {
  let branch_policy_id;
  let environment_name = "environment_name_476";
  let name = "name_476";
  let owner = 476;
  let repo = "repo_476";
  let type = "type_476";
  // Dependency Barrier
  let deps = {};
  deps["branch_policy_id"] = matchAnyBranchAdded();
  let pkMap = {"branch_policy_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  branch_policy_id = captured["branch_policy_id"];
  createDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  // waitForDeploymentBranchPolicyAdded(branch_policy_id, environment_name, name, owner, repo, type);
  verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo, type);
  tryToAddExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo, type);
});

// Story: crud:DeploymentProtectionRule:nondet:1:1
bthread("crud:DeploymentProtectionRule:nondet:1:1", function () {
  let environment_name = "environment_name_490";
  let owner = 490;
  let protection_rule_id = 490;
  let repo = "repo_490";
  let run_id = 490;
  reviewDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  waitForDeploymentProtectionRuleAdded(environment_name, owner, protection_rule_id, repo, run_id);
  tryToAddExistingDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  verifyDeploymentProtectionRuleExists(environment_name, owner, protection_rule_id, repo, run_id);
  disableDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  tryToDeleteANonExistingDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  verifyDeploymentProtectionRuleDoesNotExist(environment_name, owner, protection_rule_id, repo, run_id);
});

// Story: crud:DeploymentProtectionRule:nondet:1:2
bthread("crud:DeploymentProtectionRule:nondet:1:2", function () {
  let environment_name = "environment_name_491";
  let owner = 491;
  let protection_rule_id = 491;
  let repo = "repo_491";
  let run_id = 491;
  reviewDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  // waitForDeploymentProtectionRuleAdded(environment_name, owner, protection_rule_id, repo, run_id);
  tryToAddExistingDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  verifyDeploymentProtectionRuleExists(environment_name, owner, protection_rule_id, repo, run_id);
  disableDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  tryToDeleteANonExistingDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  verifyDeploymentProtectionRuleDoesNotExist(environment_name, owner, protection_rule_id, repo, run_id);
});

// Story: crud:DeploymentProtectionRule:nondet:negative:dup-add
bthread("crud:DeploymentProtectionRule:nondet:negative:dup-add", function () {
  let environment_name = "environment_name_496";
  let owner = 496;
  let protection_rule_id = 496;
  let repo = "repo_496";
  let run_id = 496;
  reviewDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  // waitForDeploymentProtectionRuleAdded(environment_name, owner, protection_rule_id, repo, run_id);
  verifyDeploymentProtectionRuleExists(environment_name, owner, protection_rule_id, repo, run_id);
  tryToAddExistingDeploymentProtectionRule(environment_name, owner, protection_rule_id, repo, run_id);
  verifyDeploymentProtectionRuleExists(environment_name, owner, protection_rule_id, repo, run_id);
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let active = "active_520";
  let config = {};
  let events = "events_520";
  let hook_id = 520;
  let name = "name_520";
  let org = "org_520";
  let owner = 520;
  let page = "page_520";
  let per_page = "per_page_520";
  let repo = "repo_520";
  createWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  waitForWebhookAdded(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  tryToAddExistingWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  verifyWebhookExists(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  updateWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  deleteWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  tryToDeleteANonExistingWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  verifyWebhookDoesNotExist(active, config, events, hook_id, name, org, owner, page, per_page, repo);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let active = "active_521";
  let config = {};
  let events = "events_521";
  let hook_id = 521;
  let name = "name_521";
  let org = "org_521";
  let owner = 521;
  let page = "page_521";
  let per_page = "per_page_521";
  let repo = "repo_521";
  createWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  // waitForWebhookAdded(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  tryToAddExistingWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  updateWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  verifyWebhookExists(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  deleteWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  tryToDeleteANonExistingWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  verifyWebhookDoesNotExist(active, config, events, hook_id, name, org, owner, page, per_page, repo);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let active = "active_526";
  let config = {};
  let events = "events_526";
  let hook_id = 526;
  let name = "name_526";
  let org = "org_526";
  let owner = 526;
  let page = "page_526";
  let per_page = "per_page_526";
  let repo = "repo_526";
  createWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  // waitForWebhookAdded(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  verifyWebhookExists(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  tryToAddExistingWebhook(active, config, events, hook_id, name, org, owner, page, per_page, repo);
  verifyWebhookExists(active, config, events, hook_id, name, org, owner, page, per_page, repo);
});

// Story: crud:WebhookConfig:read_only
bthread("crud:WebhookConfig:read_only", function () {
  let hook_id = 530;
  let org = 530;
  let owner = "owner_530";
  let repo = "repo_530";
  verifyWebhookConfigExists(hook_id, org, owner, repo);
});

// Story: crud:WebhookDelivery:read_only
bthread("crud:WebhookDelivery:read_only", function () {
  let cursor = "cursor_540";
  let delivery_id = 540;
  let hook_id = 540;
  let owner = 540;
  let per_page = "per_page_540";
  let repo = "repo_540";
  verifyWebhookDeliveryExists(cursor, delivery_id, hook_id, owner, per_page, repo);
});

// Story: crud:ImmutableRelease:read_only
bthread("crud:ImmutableRelease:read_only", function () {
  let owner = 580;
  let repo = "repo_580";
  verifyImmutableReleaseExists(owner, repo);
});

// Story: crud:Invitation:read_only
bthread("crud:Invitation:read_only", function () {
  let invitation_id = 590;
  let org = 590;
  let owner = "owner_590";
  let permissions = "permissions_590";
  let repo = "repo_590";
  verifyInvitationExists(invitation_id, org, owner, permissions, repo);
});

// Story: crud:DeployKey:nondet:1:1
bthread("crud:DeployKey:nondet:1:1", function () {
  let key = "key_600";
  let key_id = 600;
  let owner = 600;
  let read_only = "read_only_600";
  let repo = "repo_600";
  let title = "title_600";
  createDeployKey(key, key_id, owner, read_only, repo, title);
  waitForDeployKeyAdded(key, key_id, owner, read_only, repo, title);
  tryToAddExistingDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyExists(key, key_id, owner, read_only, repo, title);
  deleteDeployKey(key, key_id, owner, read_only, repo, title);
  tryToDeleteANonExistingDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyDoesNotExist(key, key_id, owner, read_only, repo, title);
});

// Story: crud:DeployKey:nondet:1:2
bthread("crud:DeployKey:nondet:1:2", function () {
  let key = "key_601";
  let key_id = 601;
  let owner = 601;
  let read_only = "read_only_601";
  let repo = "repo_601";
  let title = "title_601";
  createDeployKey(key, key_id, owner, read_only, repo, title);
  // waitForDeployKeyAdded(key, key_id, owner, read_only, repo, title);
  tryToAddExistingDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyExists(key, key_id, owner, read_only, repo, title);
  deleteDeployKey(key, key_id, owner, read_only, repo, title);
  tryToDeleteANonExistingDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyDoesNotExist(key, key_id, owner, read_only, repo, title);
});

// Story: crud:DeployKey:nondet:negative:dup-add
bthread("crud:DeployKey:nondet:negative:dup-add", function () {
  let key = "key_606";
  let key_id = 606;
  let owner = 606;
  let read_only = "read_only_606";
  let repo = "repo_606";
  let title = "title_606";
  createDeployKey(key, key_id, owner, read_only, repo, title);
  // waitForDeployKeyAdded(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyExists(key, key_id, owner, read_only, repo, title);
  tryToAddExistingDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyExists(key, key_id, owner, read_only, repo, title);
});

// Story: crud:RepositoryLanguage:read_only
bthread("crud:RepositoryLanguage:read_only", function () {
  let owner = 610;
  let repo = "repo_610";
  verifyRepositoryLanguageExists(owner, repo);
});

// Story: crud:PagesSite:nondet:1:1
bthread("crud:PagesSite:nondet:1:1", function () {
  let build_type = "build_type_640";
  let cname = "cname_640";
  let https_enforced = "https_enforced_640";
  let owner = 640;
  let repo = "repo_640";
  let source = {};
  let source.branch = "source.branch_640";
  let source.path = "source.path_640";
  createPagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  waitForPagesSiteAdded(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  tryToAddExistingPagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  updatePagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  deletePagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  tryToDeleteANonExistingPagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  verifyPagesSiteDoesNotExist(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
});

// Story: crud:PagesSite:nondet:1:2
bthread("crud:PagesSite:nondet:1:2", function () {
  let build_type = "build_type_641";
  let cname = "cname_641";
  let https_enforced = "https_enforced_641";
  let owner = 641;
  let repo = "repo_641";
  let source = {};
  let source.branch = "source.branch_641";
  let source.path = "source.path_641";
  createPagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  // waitForPagesSiteAdded(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  tryToAddExistingPagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  updatePagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  deletePagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  tryToDeleteANonExistingPagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  verifyPagesSiteDoesNotExist(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
});

// Story: crud:PagesSite:nondet:negative:dup-add
bthread("crud:PagesSite:nondet:negative:dup-add", function () {
  let build_type = "build_type_646";
  let cname = "cname_646";
  let https_enforced = "https_enforced_646";
  let owner = 646;
  let repo = "repo_646";
  let source = {};
  let source.branch = "source.branch_646";
  let source.path = "source.path_646";
  createPagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  // waitForPagesSiteAdded(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  tryToAddExistingPagesSite(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
  verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
});

// Story: crud:PagesBuild:read_only
bthread("crud:PagesBuild:read_only", function () {
  let build_id = 650;
  let owner = 650;
  let page = "page_650";
  let per-page = "per-page_650";
  let repo = "repo_650";
  verifyPagesBuildExists(build_id, owner, page, per-page, repo);
});

// Story: crud:PagesDeployment:read_only
bthread("crud:PagesDeployment:read_only", function () {
  let artifact_id;
  let artifact_url = "artifact_url_660";
  let environment = "environment_660";
  let oidc_token = "oidc_token_660";
  let owner = 660;
  let pages_build_version = "pages_build_version_660";
  let pages_deployment_id;
  let repo = "repo_660";
  verifyPagesDeploymentExists(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo);
});

// Story: crud:PagesHealth:read_only
bthread("crud:PagesHealth:read_only", function () {
  let owner = 670;
  let repo = "repo_670";
  verifyPagesHealthExists(owner, repo);
});

// Story: crud:PrivateVulnerabilityReporting:read_only
bthread("crud:PrivateVulnerabilityReporting:read_only", function () {
  let owner = 680;
  let repo = "repo_680";
  verifyPrivateVulnerabilityReportingExists(owner, repo);
});

// Story: crud:CustomPropertyValues:read_only
bthread("crud:CustomPropertyValues:read_only", function () {
  let owner = 690;
  let repo = "repo_690";
  verifyCustomPropertyValuesExists(owner, repo);
});

// Story: crud:Release:nondet:1:1
bthread("crud:Release:nondet:1:1", function () {
  let body = "body_700";
  let discussion_category_name = "discussion_category_name_700";
  let draft = "draft_700";
  let generate_release_notes = "generate_release_notes_700";
  let make_latest = "make_latest_700";
  let name = "name_700";
  let owner = 700;
  let prerelease = "prerelease_700";
  let release_id = 700;
  let repo = "repo_700";
  let tag_name = "tag_name_700";
  let target_commitish = "target_commitish_700";
  createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  waitForReleaseAdded(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToAddExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  updateRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  deleteRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToDeleteANonExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseDoesNotExist(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
});

// Story: crud:Release:nondet:1:2
bthread("crud:Release:nondet:1:2", function () {
  let body = "body_701";
  let discussion_category_name = "discussion_category_name_701";
  let draft = "draft_701";
  let generate_release_notes = "generate_release_notes_701";
  let make_latest = "make_latest_701";
  let name = "name_701";
  let owner = 701;
  let prerelease = "prerelease_701";
  let release_id = 701;
  let repo = "repo_701";
  let tag_name = "tag_name_701";
  let target_commitish = "target_commitish_701";
  createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  // waitForReleaseAdded(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToAddExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  updateRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  deleteRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToDeleteANonExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseDoesNotExist(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
});

// Story: crud:Release:nondet:negative:dup-add
bthread("crud:Release:nondet:negative:dup-add", function () {
  let body = "body_706";
  let discussion_category_name = "discussion_category_name_706";
  let draft = "draft_706";
  let generate_release_notes = "generate_release_notes_706";
  let make_latest = "make_latest_706";
  let name = "name_706";
  let owner = 706;
  let prerelease = "prerelease_706";
  let release_id = 706;
  let repo = "repo_706";
  let tag_name = "tag_name_706";
  let target_commitish = "target_commitish_706";
  createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  // waitForReleaseAdded(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToAddExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
});

// Story: crud:ReleaseAsset:nondet:1:1
bthread("crud:ReleaseAsset:nondet:1:1", function () {
  let asset_id = 710;
  let label = "label_710";
  let name = "name_710";
  let owner = 710;
  let release_id;
  let repo = "repo_710";
  // Dependency Barrier
  let deps = {};
  deps["release_id"] = matchAnyReleaseAdded();
  let pkMap = {"release_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  release_id = captured["release_id"];
  uploadReleaseAsset(asset_id, label, name, owner, release_id, repo);
  waitForReleaseAssetAdded(asset_id, label, name, owner, release_id, repo);
  tryToAddExistingReleaseAsset(asset_id, label, name, owner, release_id, repo);
  verifyReleaseAssetExists(asset_id, label, name, owner, release_id, repo);
  updateReleaseAsset(asset_id, label, name, owner, release_id, repo);
  deleteReleaseAsset(asset_id, label, name, owner, release_id, repo);
  tryToDeleteANonExistingReleaseAsset(asset_id, label, name, owner, release_id, repo);
  verifyReleaseAssetDoesNotExist(asset_id, label, name, owner, release_id, repo);
});

// Story: crud:ReleaseAsset:nondet:1:2
bthread("crud:ReleaseAsset:nondet:1:2", function () {
  let asset_id = 711;
  let label = "label_711";
  let name = "name_711";
  let owner = 711;
  let release_id;
  let repo = "repo_711";
  // Dependency Barrier
  let deps = {};
  deps["release_id"] = matchAnyReleaseAdded();
  let pkMap = {"release_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  release_id = captured["release_id"];
  uploadReleaseAsset(asset_id, label, name, owner, release_id, repo);
  // waitForReleaseAssetAdded(asset_id, label, name, owner, release_id, repo);
  tryToAddExistingReleaseAsset(asset_id, label, name, owner, release_id, repo);
  updateReleaseAsset(asset_id, label, name, owner, release_id, repo);
  verifyReleaseAssetExists(asset_id, label, name, owner, release_id, repo);
  deleteReleaseAsset(asset_id, label, name, owner, release_id, repo);
  tryToDeleteANonExistingReleaseAsset(asset_id, label, name, owner, release_id, repo);
  verifyReleaseAssetDoesNotExist(asset_id, label, name, owner, release_id, repo);
});

// Story: crud:ReleaseAsset:nondet:negative:dup-add
bthread("crud:ReleaseAsset:nondet:negative:dup-add", function () {
  let asset_id = 716;
  let label = "label_716";
  let name = "name_716";
  let owner = 716;
  let release_id;
  let repo = "repo_716";
  // Dependency Barrier
  let deps = {};
  deps["release_id"] = matchAnyReleaseAdded();
  let pkMap = {"release_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  release_id = captured["release_id"];
  uploadReleaseAsset(asset_id, label, name, owner, release_id, repo);
  // waitForReleaseAssetAdded(asset_id, label, name, owner, release_id, repo);
  verifyReleaseAssetExists(asset_id, label, name, owner, release_id, repo);
  tryToAddExistingReleaseAsset(asset_id, label, name, owner, release_id, repo);
  verifyReleaseAssetExists(asset_id, label, name, owner, release_id, repo);
});

// Story: crud:RepositoryRuleset:nondet:1:1
bthread("crud:RepositoryRuleset:nondet:1:1", function () {
  let bypass_actors = "bypass_actors_720";
  let conditions = "conditions_720";
  let enforcement = "enforcement_720";
  let name = "name_720";
  let owner = 720;
  let repo = "repo_720";
  let rules = "rules_720";
  let ruleset_id;
  let target = "target_720";
  // Dependency Barrier
  let deps = {};
  deps["ruleset_id"] = matchAnyRulesetAdded();
  let pkMap = {"ruleset_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  ruleset_id = captured["ruleset_id"];
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  waitForRepositoryRulesetAdded(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  tryToAddExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  updateRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  deleteRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  tryToDeleteANonExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
});

// Story: crud:RepositoryRuleset:nondet:1:2
bthread("crud:RepositoryRuleset:nondet:1:2", function () {
  let bypass_actors = "bypass_actors_721";
  let conditions = "conditions_721";
  let enforcement = "enforcement_721";
  let name = "name_721";
  let owner = 721;
  let repo = "repo_721";
  let rules = "rules_721";
  let ruleset_id;
  let target = "target_721";
  // Dependency Barrier
  let deps = {};
  deps["ruleset_id"] = matchAnyRulesetAdded();
  let pkMap = {"ruleset_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  ruleset_id = captured["ruleset_id"];
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  // waitForRepositoryRulesetAdded(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  tryToAddExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  updateRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  deleteRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  tryToDeleteANonExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
});

// Story: crud:RepositoryRuleset:nondet:negative:dup-add
bthread("crud:RepositoryRuleset:nondet:negative:dup-add", function () {
  let bypass_actors = "bypass_actors_726";
  let conditions = "conditions_726";
  let enforcement = "enforcement_726";
  let name = "name_726";
  let owner = 726;
  let repo = "repo_726";
  let rules = "rules_726";
  let ruleset_id;
  let target = "target_726";
  // Dependency Barrier
  let deps = {};
  deps["ruleset_id"] = matchAnyRulesetAdded();
  let pkMap = {"ruleset_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  ruleset_id = captured["ruleset_id"];
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  // waitForRepositoryRulesetAdded(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  tryToAddExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
});

// Story: crud:RepositoryRuleSuite:read_only
bthread("crud:RepositoryRuleSuite:read_only", function () {
  let owner = 730;
  let repo = "repo_730";
  let rule_suite_id = 730;
  verifyRepositoryRuleSuiteExists(owner, repo, rule_suite_id);
});

// Story: crud:BranchRules:read_only
bthread("crud:BranchRules:read_only", function () {
  let branch = "branch_740";
  let owner = 740;
  let repo = "repo_740";
  verifyBranchRulesExists(branch, owner, repo);
});

// Story: crud:TagProtection:nondet:1:1
bthread("crud:TagProtection:nondet:1:1", function () {
  let owner = 760;
  let pattern = "pattern_760";
  let repo = "repo_760";
  let tag_protection_id;
  // Dependency Barrier
  let deps = {};
  deps["tag_protection_id"] = matchAnyTagAdded();
  let pkMap = {"tag_protection_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  tag_protection_id = captured["tag_protection_id"];
  createTagProtection(owner, pattern, repo, tag_protection_id);
  waitForTagProtectionAdded(owner, pattern, repo, tag_protection_id);
  tryToAddExistingTagProtection(owner, pattern, repo, tag_protection_id);
  verifyTagProtectionExists(owner, pattern, repo, tag_protection_id);
  deleteTagProtection(owner, pattern, repo, tag_protection_id);
  tryToDeleteANonExistingTagProtection(owner, pattern, repo, tag_protection_id);
  verifyTagProtectionDoesNotExist(owner, pattern, repo, tag_protection_id);
});

// Story: crud:TagProtection:nondet:1:2
bthread("crud:TagProtection:nondet:1:2", function () {
  let owner = 761;
  let pattern = "pattern_761";
  let repo = "repo_761";
  let tag_protection_id;
  // Dependency Barrier
  let deps = {};
  deps["tag_protection_id"] = matchAnyTagAdded();
  let pkMap = {"tag_protection_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  tag_protection_id = captured["tag_protection_id"];
  createTagProtection(owner, pattern, repo, tag_protection_id);
  // waitForTagProtectionAdded(owner, pattern, repo, tag_protection_id);
  tryToAddExistingTagProtection(owner, pattern, repo, tag_protection_id);
  verifyTagProtectionExists(owner, pattern, repo, tag_protection_id);
  deleteTagProtection(owner, pattern, repo, tag_protection_id);
  tryToDeleteANonExistingTagProtection(owner, pattern, repo, tag_protection_id);
  verifyTagProtectionDoesNotExist(owner, pattern, repo, tag_protection_id);
});

// Story: crud:TagProtection:nondet:negative:dup-add
bthread("crud:TagProtection:nondet:negative:dup-add", function () {
  let owner = 766;
  let pattern = "pattern_766";
  let repo = "repo_766";
  let tag_protection_id;
  // Dependency Barrier
  let deps = {};
  deps["tag_protection_id"] = matchAnyTagAdded();
  let pkMap = {"tag_protection_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  tag_protection_id = captured["tag_protection_id"];
  createTagProtection(owner, pattern, repo, tag_protection_id);
  // waitForTagProtectionAdded(owner, pattern, repo, tag_protection_id);
  verifyTagProtectionExists(owner, pattern, repo, tag_protection_id);
  tryToAddExistingTagProtection(owner, pattern, repo, tag_protection_id);
  verifyTagProtectionExists(owner, pattern, repo, tag_protection_id);
});

// Story: crud:RepositoryInvitation:read_only
bthread("crud:RepositoryInvitation:read_only", function () {
  let invitation_id;
  let page = "page_790";
  let per-page = "per-page_790";
  verifyRepositoryInvitationExists(invitation_id, page, per-page);
});

// Story: crud:HostedRunner:nondet:1:1
bthread("crud:HostedRunner:nondet:1:1", function () {
  let enable_static_ip = "enable_static_ip_800";
  let hosted_runner_id;
  let image = {};
  let maximum_runners = 800;
  let name = "name_800";
  let org = 800;
  let runner_group_id;
  let size = "size_800";
  // Dependency Barrier
  let deps = {};
  deps["hosted_runner_id"] = matchAnyRunnerAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  let pkMap = {"hosted_runner_id": "org", "runner_group_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  hosted_runner_id = captured["hosted_runner_id"];
  runner_group_id = captured["runner_group_id"];
  createHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  waitForHostedRunnerAdded(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  tryToAddExistingHostedRunner(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  updateHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  deleteHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  tryToDeleteANonExistingHostedRunner(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  verifyHostedRunnerDoesNotExist(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
});

// Story: crud:HostedRunner:nondet:1:2
bthread("crud:HostedRunner:nondet:1:2", function () {
  let enable_static_ip = "enable_static_ip_801";
  let hosted_runner_id;
  let image = {};
  let maximum_runners = 801;
  let name = "name_801";
  let org = 801;
  let runner_group_id;
  let size = "size_801";
  // Dependency Barrier
  let deps = {};
  deps["hosted_runner_id"] = matchAnyRunnerAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  let pkMap = {"hosted_runner_id": "org", "runner_group_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  hosted_runner_id = captured["hosted_runner_id"];
  runner_group_id = captured["runner_group_id"];
  createHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  // waitForHostedRunnerAdded(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  tryToAddExistingHostedRunner(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  updateHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  deleteHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  tryToDeleteANonExistingHostedRunner(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  verifyHostedRunnerDoesNotExist(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
});

// Story: crud:HostedRunner:nondet:negative:dup-add
bthread("crud:HostedRunner:nondet:negative:dup-add", function () {
  let enable_static_ip = "enable_static_ip_806";
  let hosted_runner_id;
  let image = {};
  let maximum_runners = 806;
  let name = "name_806";
  let org = 806;
  let runner_group_id;
  let size = "size_806";
  // Dependency Barrier
  let deps = {};
  deps["hosted_runner_id"] = matchAnyRunnerAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  let pkMap = {"hosted_runner_id": "org", "runner_group_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  hosted_runner_id = captured["hosted_runner_id"];
  runner_group_id = captured["runner_group_id"];
  createHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  // waitForHostedRunnerAdded(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  tryToAddExistingHostedRunner(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
});

// Story: crud:ActionsPermissions:read_only
bthread("crud:ActionsPermissions:read_only", function () {
  let org = 810;
  verifyActionsPermissionsExists(org);
});

// Story: crud:ArtifactAndLogRetention:read_only
bthread("crud:ArtifactAndLogRetention:read_only", function () {
  let org = "org_820";
  let owner = 820;
  let repo = "repo_820";
  verifyArtifactAndLogRetentionExists(org, owner, repo);
});

// Story: crud:ForkPrContributorApproval:read_only
bthread("crud:ForkPrContributorApproval:read_only", function () {
  let org = "org_830";
  let owner = 830;
  let repo = "repo_830";
  verifyForkPrContributorApprovalExists(org, owner, repo);
});

// Story: crud:ForkPrWorkflowsPrivateRepos:read_only
bthread("crud:ForkPrWorkflowsPrivateRepos:read_only", function () {
  let org = 840;
  verifyForkPrWorkflowsPrivateReposExists(org);
});

// Story: crud:Repositories:nondet:1:1
bthread("crud:Repositories:nondet:1:1", function () {
  let org = 850;
  let repository_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  enableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  waitForRepositoriesAdded(org, repository_id, selected_repository_ids);
  tryToAddExistingRepositories(org, repository_id, selected_repository_ids);
  verifyRepositoriesExists(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesEnabledGithubActionsOrganization(org, repository_id, selected_repository_ids);
  disableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingRepositories(org, repository_id, selected_repository_ids);
  verifyRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Story: crud:Repositories:nondet:1:2
bthread("crud:Repositories:nondet:1:2", function () {
  let org = 851;
  let repository_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  enableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  // waitForRepositoriesAdded(org, repository_id, selected_repository_ids);
  tryToAddExistingRepositories(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesEnabledGithubActionsOrganization(org, repository_id, selected_repository_ids);
  verifyRepositoriesExists(org, repository_id, selected_repository_ids);
  disableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingRepositories(org, repository_id, selected_repository_ids);
  verifyRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Story: crud:Repositories:nondet:negative:dup-add
bthread("crud:Repositories:nondet:negative:dup-add", function () {
  let org = 856;
  let repository_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  enableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  // waitForRepositoriesAdded(org, repository_id, selected_repository_ids);
  verifyRepositoriesExists(org, repository_id, selected_repository_ids);
  tryToAddExistingRepositories(org, repository_id, selected_repository_ids);
  verifyRepositoriesExists(org, repository_id, selected_repository_ids);
});

// Story: crud:SelectedActions:read_only
bthread("crud:SelectedActions:read_only", function () {
  let org = 860;
  verifySelectedActionsExists(org);
});

// Story: crud:SelfHostedRunners:read_only
bthread("crud:SelfHostedRunners:read_only", function () {
  let enabled_repositories = "enabled_repositories_870";
  let org = 870;
  verifySelfHostedRunnersExists(enabled_repositories, org);
});

// Story: crud:SelfHostedRunnersRepositories:nondet:1:1
bthread("crud:SelfHostedRunnersRepositories:nondet:1:1", function () {
  let org = 880;
  let repository_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  waitForSelfHostedRunnersRepositoriesAdded(org, repository_id, selected_repository_ids);
  tryToAddExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesSelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  disableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Story: crud:SelfHostedRunnersRepositories:nondet:1:2
bthread("crud:SelfHostedRunnersRepositories:nondet:1:2", function () {
  let org = 881;
  let repository_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  // waitForSelfHostedRunnersRepositoriesAdded(org, repository_id, selected_repository_ids);
  tryToAddExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesSelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids);
  disableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Story: crud:SelfHostedRunnersRepositories:nondet:negative:dup-add
bthread("crud:SelfHostedRunnersRepositories:nondet:negative:dup-add", function () {
  let org = 886;
  let repository_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  // waitForSelfHostedRunnersRepositoriesAdded(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids);
  tryToAddExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids);
});

// Story: crud:WorkflowPermissions:read_only
bthread("crud:WorkflowPermissions:read_only", function () {
  let org = 890;
  verifyWorkflowPermissionsExists(org);
});

// Story: crud:RunnerGroup:nondet:1:1
bthread("crud:RunnerGroup:nondet:1:1", function () {
  let allows_public_repositories = "allows_public_repositories_900";
  let name = "name_900";
  let network_configuration_id;
  let org = 900;
  let restricted_to_workflows = "restricted_to_workflows_900";
  let runner_group_id;
  let runners = "runners_900";
  let selected_repository_ids;
  let selected_workflows = "selected_workflows_900";
  let visibility = "visibility_900";
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"network_configuration_id": "org", "runner_group_id": "org", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  createRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  waitForRunnerGroupAdded(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToAddExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  updateRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  deleteRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToDeleteANonExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupDoesNotExist(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Story: crud:RunnerGroup:nondet:1:2
bthread("crud:RunnerGroup:nondet:1:2", function () {
  let allows_public_repositories = "allows_public_repositories_901";
  let name = "name_901";
  let network_configuration_id;
  let org = 901;
  let restricted_to_workflows = "restricted_to_workflows_901";
  let runner_group_id;
  let runners = "runners_901";
  let selected_repository_ids;
  let selected_workflows = "selected_workflows_901";
  let visibility = "visibility_901";
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"network_configuration_id": "org", "runner_group_id": "org", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  createRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  // waitForRunnerGroupAdded(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToAddExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  updateRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  deleteRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToDeleteANonExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupDoesNotExist(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Story: crud:RunnerGroup:nondet:negative:dup-add
bthread("crud:RunnerGroup:nondet:negative:dup-add", function () {
  let allows_public_repositories = "allows_public_repositories_906";
  let name = "name_906";
  let network_configuration_id;
  let org = 906;
  let restricted_to_workflows = "restricted_to_workflows_906";
  let runner_group_id;
  let runners = "runners_906";
  let selected_repository_ids;
  let selected_workflows = "selected_workflows_906";
  let visibility = "visibility_906";
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"network_configuration_id": "org", "runner_group_id": "org", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  createRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  // waitForRunnerGroupAdded(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToAddExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:1:1
bthread("crud:RunnerGroupRepositoryAccess:nondet:1:1", function () {
  let org = 910;
  let repository_id;
  let runner_group_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "runner_group_id": "org", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  addRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  waitForRunnerGroupRepositoryAccessAdded(org, repository_id, runner_group_id, selected_repository_ids);
  tryToAddExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  setRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  removeRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessDoesNotExist(org, repository_id, runner_group_id, selected_repository_ids);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:1:2
bthread("crud:RunnerGroupRepositoryAccess:nondet:1:2", function () {
  let org = 911;
  let repository_id;
  let runner_group_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "runner_group_id": "org", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  addRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  // waitForRunnerGroupRepositoryAccessAdded(org, repository_id, runner_group_id, selected_repository_ids);
  tryToAddExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  setRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  removeRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessDoesNotExist(org, repository_id, runner_group_id, selected_repository_ids);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:negative:dup-add
bthread("crud:RunnerGroupRepositoryAccess:nondet:negative:dup-add", function () {
  let org = 916;
  let repository_id;
  let runner_group_id;
  let selected_repository_ids;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username", "runner_group_id": "org", "selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  addRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  // waitForRunnerGroupRepositoryAccessAdded(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  tryToAddExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
});

// Story: crud:RunnerGroupRunner:nondet:1:1
bthread("crud:RunnerGroupRunner:nondet:1:1", function () {
  let org = 920;
  let runner_group_id;
  let runner_id;
  let runners = "runners_920";
  // Dependency Barrier
  let deps = {};
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_group_id": "org", "runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_group_id = captured["runner_group_id"];
  runner_id = captured["runner_id"];
  addSelfHostedRunnerToGroupForOrg(org, runner_group_id, runner_id, runners);
  waitForRunnerGroupRunnerAdded(org, runner_group_id, runner_id, runners);
  tryToAddExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  setSelfHostedRunnersInGroupForOrg(org, runner_group_id, runner_id, runners);
  removeSelfHostedRunnerFromGroupForOrg(org, runner_group_id, runner_id, runners);
  tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerDoesNotExist(org, runner_group_id, runner_id, runners);
});

// Story: crud:RunnerGroupRunner:nondet:1:2
bthread("crud:RunnerGroupRunner:nondet:1:2", function () {
  let org = 921;
  let runner_group_id;
  let runner_id;
  let runners = "runners_921";
  // Dependency Barrier
  let deps = {};
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_group_id": "org", "runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_group_id = captured["runner_group_id"];
  runner_id = captured["runner_id"];
  addSelfHostedRunnerToGroupForOrg(org, runner_group_id, runner_id, runners);
  // waitForRunnerGroupRunnerAdded(org, runner_group_id, runner_id, runners);
  tryToAddExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  setSelfHostedRunnersInGroupForOrg(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  removeSelfHostedRunnerFromGroupForOrg(org, runner_group_id, runner_id, runners);
  tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerDoesNotExist(org, runner_group_id, runner_id, runners);
});

// Story: crud:RunnerGroupRunner:nondet:negative:dup-add
bthread("crud:RunnerGroupRunner:nondet:negative:dup-add", function () {
  let org = 926;
  let runner_group_id;
  let runner_id;
  let runners = "runners_926";
  // Dependency Barrier
  let deps = {};
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_group_id": "org", "runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_group_id = captured["runner_group_id"];
  runner_id = captured["runner_id"];
  addSelfHostedRunnerToGroupForOrg(org, runner_group_id, runner_id, runners);
  // waitForRunnerGroupRunnerAdded(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  tryToAddExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
});

// Story: crud:Runner:nondet:1:1
bthread("crud:Runner:nondet:1:1", function () {
  let labels = "labels_930";
  let name = "name_930";
  let org = 930;
  let runner_group_id = 930;
  let runner_id = 930;
  let work_folder = "work_folder_930";
  generateRunnerJitconfigForOrg(labels, name, org, runner_group_id, runner_id, work_folder);
  waitForRunnerAdded(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToAddExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  deleteRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToDeleteANonExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerDoesNotExist(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Story: crud:Runner:nondet:1:2
bthread("crud:Runner:nondet:1:2", function () {
  let labels = "labels_931";
  let name = "name_931";
  let org = 931;
  let runner_group_id = 931;
  let runner_id = 931;
  let work_folder = "work_folder_931";
  generateRunnerJitconfigForOrg(labels, name, org, runner_group_id, runner_id, work_folder);
  // waitForRunnerAdded(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToAddExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  deleteRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToDeleteANonExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerDoesNotExist(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Story: crud:Runner:nondet:negative:dup-add
bthread("crud:Runner:nondet:negative:dup-add", function () {
  let labels = "labels_936";
  let name = "name_936";
  let org = 936;
  let runner_group_id = 936;
  let runner_id = 936;
  let work_folder = "work_folder_936";
  generateRunnerJitconfigForOrg(labels, name, org, runner_group_id, runner_id, work_folder);
  // waitForRunnerAdded(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToAddExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Story: crud:RunnerLabels:nondet:1:1
bthread("crud:RunnerLabels:nondet:1:1", function () {
  let labels = "labels_940";
  let org = 940;
  let runner_id;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addRunnerLabels(labels, org, runner_id);
  waitForRunnerLabelsAdded(labels, org, runner_id);
  tryToAddExistingRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsExists(labels, org, runner_id);
  setRunnerLabels(labels, org, runner_id);
  removeAllRunnerLabels(labels, org, runner_id);
  tryToDeleteANonExistingRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsDoesNotExist(labels, org, runner_id);
});

// Story: crud:RunnerLabels:nondet:1:2
bthread("crud:RunnerLabels:nondet:1:2", function () {
  let labels = "labels_941";
  let org = 941;
  let runner_id;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addRunnerLabels(labels, org, runner_id);
  // waitForRunnerLabelsAdded(labels, org, runner_id);
  tryToAddExistingRunnerLabels(labels, org, runner_id);
  setRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsExists(labels, org, runner_id);
  removeAllRunnerLabels(labels, org, runner_id);
  tryToDeleteANonExistingRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsDoesNotExist(labels, org, runner_id);
});

// Story: crud:RunnerLabels:nondet:negative:dup-add
bthread("crud:RunnerLabels:nondet:negative:dup-add", function () {
  let labels = "labels_946";
  let org = 946;
  let runner_id;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addRunnerLabels(labels, org, runner_id);
  // waitForRunnerLabelsAdded(labels, org, runner_id);
  verifyRunnerLabelsExists(labels, org, runner_id);
  tryToAddExistingRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsExists(labels, org, runner_id);
});

// Story: crud:Secret:nondet:1:1
bthread("crud:Secret:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_980";
  let key_id = 980;
  let org = 980;
  let secret_name = "secret_name_980";
  let selected_repository_ids;
  let visibility = "visibility_980";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrUpdateSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  waitForSecretAdded(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToAddExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:Secret:nondet:1:2
bthread("crud:Secret:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_981";
  let key_id = 981;
  let org = 981;
  let secret_name = "secret_name_981";
  let selected_repository_ids;
  let visibility = "visibility_981";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrUpdateSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  // waitForSecretAdded(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToAddExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:Secret:nondet:negative:dup-add
bthread("crud:Secret:nondet:negative:dup-add", function () {
  let encrypted_value = "encrypted_value_986";
  let key_id = 986;
  let org = 986;
  let secret_name = "secret_name_986";
  let selected_repository_ids;
  let visibility = "visibility_986";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrUpdateSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  // waitForSecretAdded(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToAddExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:SecretRepositories:read_only
bthread("crud:SecretRepositories:read_only", function () {
  let org = "org_990";
  let secret_name = 990;
  let selected_repository_ids;
  verifySecretRepositoriesExists(org, secret_name, selected_repository_ids);
});

// Story: crud:SecretRepository:nondet:1:1
bthread("crud:SecretRepository:nondet:1:1", function () {
  let org = "org_1000";
  let repository_id;
  let secret_name = 1000;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addRepositoryForSecretForAuthenticatedUser(org, repository_id, secret_name);
  waitForSecretRepositoryAdded(org, repository_id, secret_name);
  tryToAddExistingSecretRepository(org, repository_id, secret_name);
  verifySecretRepositoryExists(org, repository_id, secret_name);
  removeRepositoryForSecretForAuthenticatedUser(org, repository_id, secret_name);
  tryToDeleteANonExistingSecretRepository(org, repository_id, secret_name);
  verifySecretRepositoryDoesNotExist(org, repository_id, secret_name);
});

// Story: crud:SecretRepository:nondet:1:2
bthread("crud:SecretRepository:nondet:1:2", function () {
  let org = "org_1001";
  let repository_id;
  let secret_name = 1001;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addRepositoryForSecretForAuthenticatedUser(org, repository_id, secret_name);
  // waitForSecretRepositoryAdded(org, repository_id, secret_name);
  tryToAddExistingSecretRepository(org, repository_id, secret_name);
  verifySecretRepositoryExists(org, repository_id, secret_name);
  removeRepositoryForSecretForAuthenticatedUser(org, repository_id, secret_name);
  tryToDeleteANonExistingSecretRepository(org, repository_id, secret_name);
  verifySecretRepositoryDoesNotExist(org, repository_id, secret_name);
});

// Story: crud:SecretRepository:nondet:negative:dup-add
bthread("crud:SecretRepository:nondet:negative:dup-add", function () {
  let org = "org_1006";
  let repository_id;
  let secret_name = 1006;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addRepositoryForSecretForAuthenticatedUser(org, repository_id, secret_name);
  // waitForSecretRepositoryAdded(org, repository_id, secret_name);
  verifySecretRepositoryExists(org, repository_id, secret_name);
  tryToAddExistingSecretRepository(org, repository_id, secret_name);
  verifySecretRepositoryExists(org, repository_id, secret_name);
});

// Story: crud:OrgVariable:nondet:1:1
bthread("crud:OrgVariable:nondet:1:1", function () {
  let name = "name_1010";
  let org = 1010;
  let selected_repository_ids;
  let value = "value_1010";
  let visibility = "visibility_1010";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrgVariable(name, org, selected_repository_ids, value, visibility);
  waitForOrgVariableAdded(name, org, selected_repository_ids, value, visibility);
  tryToAddExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
  updateOrgVariable(name, org, selected_repository_ids, value, visibility);
  deleteOrgVariable(name, org, selected_repository_ids, value, visibility);
  tryToDeleteANonExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableDoesNotExist(name, org, selected_repository_ids, value, visibility);
});

// Story: crud:OrgVariable:nondet:1:2
bthread("crud:OrgVariable:nondet:1:2", function () {
  let name = "name_1011";
  let org = 1011;
  let selected_repository_ids;
  let value = "value_1011";
  let visibility = "visibility_1011";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrgVariable(name, org, selected_repository_ids, value, visibility);
  // waitForOrgVariableAdded(name, org, selected_repository_ids, value, visibility);
  tryToAddExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  updateOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
  deleteOrgVariable(name, org, selected_repository_ids, value, visibility);
  tryToDeleteANonExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableDoesNotExist(name, org, selected_repository_ids, value, visibility);
});

// Story: crud:OrgVariable:nondet:negative:dup-add
bthread("crud:OrgVariable:nondet:negative:dup-add", function () {
  let name = "name_1016";
  let org = 1016;
  let selected_repository_ids;
  let value = "value_1016";
  let visibility = "visibility_1016";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrgVariable(name, org, selected_repository_ids, value, visibility);
  // waitForOrgVariableAdded(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
  tryToAddExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
});

// Story: crud:OrgVariableSelectedRepos:read_only
bthread("crud:OrgVariableSelectedRepos:read_only", function () {
  let name = "name_1020";
  let org = 1020;
  verifyOrgVariableSelectedReposExists(name, org);
});

// Story: crud:OrgVariableSelectedRepo:nondet:1:1
bthread("crud:OrgVariableSelectedRepo:nondet:1:1", function () {
  let name = "name_1030";
  let org = 1030;
  let repository_id;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addSelectedRepoToOrgVariable(name, org, repository_id);
  waitForOrgVariableSelectedRepoAdded(name, org, repository_id);
  tryToAddExistingOrgVariableSelectedRepo(name, org, repository_id);
  verifyOrgVariableSelectedRepoExists(name, org, repository_id);
  removeSelectedRepoFromOrgVariable(name, org, repository_id);
  tryToDeleteANonExistingOrgVariableSelectedRepo(name, org, repository_id);
  verifyOrgVariableSelectedRepoDoesNotExist(name, org, repository_id);
});

// Story: crud:OrgVariableSelectedRepo:nondet:1:2
bthread("crud:OrgVariableSelectedRepo:nondet:1:2", function () {
  let name = "name_1031";
  let org = 1031;
  let repository_id;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addSelectedRepoToOrgVariable(name, org, repository_id);
  // waitForOrgVariableSelectedRepoAdded(name, org, repository_id);
  tryToAddExistingOrgVariableSelectedRepo(name, org, repository_id);
  verifyOrgVariableSelectedRepoExists(name, org, repository_id);
  removeSelectedRepoFromOrgVariable(name, org, repository_id);
  tryToDeleteANonExistingOrgVariableSelectedRepo(name, org, repository_id);
  verifyOrgVariableSelectedRepoDoesNotExist(name, org, repository_id);
});

// Story: crud:OrgVariableSelectedRepo:nondet:negative:dup-add
bthread("crud:OrgVariableSelectedRepo:nondet:negative:dup-add", function () {
  let name = "name_1036";
  let org = 1036;
  let repository_id;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addSelectedRepoToOrgVariable(name, org, repository_id);
  // waitForOrgVariableSelectedRepoAdded(name, org, repository_id);
  verifyOrgVariableSelectedRepoExists(name, org, repository_id);
  tryToAddExistingOrgVariableSelectedRepo(name, org, repository_id);
  verifyOrgVariableSelectedRepoExists(name, org, repository_id);
});

// Story: crud:Artifact:read_only
bthread("crud:Artifact:read_only", function () {
  let artifact_id = 1040;
  let owner = 1040;
  let repo = "repo_1040";
  verifyArtifactExists(artifact_id, owner, repo);
});

// Story: crud:ArtifactDownload:read_only
bthread("crud:ArtifactDownload:read_only", function () {
  let archive_format = "archive_format_1050";
  let artifact_id;
  let owner = 1050;
  let repo = "repo_1050";
  verifyArtifactDownloadExists(archive_format, artifact_id, owner, repo);
});

// Story: crud:Job:read_only
bthread("crud:Job:read_only", function () {
  let job_id = 1070;
  let owner = 1070;
  let repo = "repo_1070";
  verifyJobExists(job_id, owner, repo);
});

// Story: crud:JobLogs:read_only
bthread("crud:JobLogs:read_only", function () {
  let job_id;
  let owner = 1080;
  let repo = "repo_1080";
  verifyJobLogsExists(job_id, owner, repo);
});

// Story: crud:OidcSubCustomization:read_only
bthread("crud:OidcSubCustomization:read_only", function () {
  let owner = 1090;
  let repo = "repo_1090";
  verifyOidcSubCustomizationExists(owner, repo);
});

// Story: crud:Permissions:read_only
bthread("crud:Permissions:read_only", function () {
  let owner = 1120;
  let repo = "repo_1120";
  verifyPermissionsExists(owner, repo);
});

// Story: crud:WorkflowAccess:read_only
bthread("crud:WorkflowAccess:read_only", function () {
  let owner = 1130;
  let repo = "repo_1130";
  verifyWorkflowAccessExists(owner, repo);
});

// Story: crud:ActionsPermissionsForkPRWorkflowsPrivateRepos:read_only
bthread("crud:ActionsPermissionsForkPRWorkflowsPrivateRepos:read_only", function () {
  let owner = 1140;
  let repo = "repo_1140";
  verifyActionsPermissionsForkPRWorkflowsPrivateReposExists(owner, repo);
});

// Story: crud:ActionsPermissionsSelectedActions:read_only
bthread("crud:ActionsPermissionsSelectedActions:read_only", function () {
  let owner = 1150;
  let repo = "repo_1150";
  verifyActionsPermissionsSelectedActionsExists(owner, repo);
});

// Story: crud:ActionsPermissionsWorkflow:read_only
bthread("crud:ActionsPermissionsWorkflow:read_only", function () {
  let owner = 1160;
  let repo = "repo_1160";
  verifyActionsPermissionsWorkflowExists(owner, repo);
});

// Story: crud:SelfHostedRunner:read_only
bthread("crud:SelfHostedRunner:read_only", function () {
  let owner = 1170;
  let repo = "repo_1170";
  let runner_id;
  verifySelfHostedRunnerExists(owner, repo, runner_id);
});

// Story: crud:SelfHostedRunnerLabels:nondet:1:1
bthread("crud:SelfHostedRunnerLabels:nondet:1:1", function () {
  let labels = "labels_1180";
  let owner = 1180;
  let repo = "repo_1180";
  let runner_id;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addCustomLabelsToSelfHostedRunner(labels, owner, repo, runner_id);
  waitForSelfHostedRunnerLabelsAdded(labels, owner, repo, runner_id);
  tryToAddExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id);
  setCustomLabelsForSelfHostedRunner(labels, owner, repo, runner_id);
  removeAllCustomLabelsFromSelfHostedRunner(labels, owner, repo, runner_id);
  tryToDeleteANonExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsDoesNotExist(labels, owner, repo, runner_id);
});

// Story: crud:SelfHostedRunnerLabels:nondet:1:2
bthread("crud:SelfHostedRunnerLabels:nondet:1:2", function () {
  let labels = "labels_1181";
  let owner = 1181;
  let repo = "repo_1181";
  let runner_id;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addCustomLabelsToSelfHostedRunner(labels, owner, repo, runner_id);
  // waitForSelfHostedRunnerLabelsAdded(labels, owner, repo, runner_id);
  tryToAddExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id);
  setCustomLabelsForSelfHostedRunner(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id);
  removeAllCustomLabelsFromSelfHostedRunner(labels, owner, repo, runner_id);
  tryToDeleteANonExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsDoesNotExist(labels, owner, repo, runner_id);
});

// Story: crud:SelfHostedRunnerLabels:nondet:negative:dup-add
bthread("crud:SelfHostedRunnerLabels:nondet:negative:dup-add", function () {
  let labels = "labels_1186";
  let owner = 1186;
  let repo = "repo_1186";
  let runner_id;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addCustomLabelsToSelfHostedRunner(labels, owner, repo, runner_id);
  // waitForSelfHostedRunnerLabelsAdded(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id);
  tryToAddExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id);
});

// Story: crud:SelfHostedRunnerList:read_only
bthread("crud:SelfHostedRunnerList:read_only", function () {
  let name = "name_1220";
  let owner = 1220;
  let page = "page_1220";
  let per_page = "per_page_1220";
  let repo = "repo_1220";
  verifySelfHostedRunnerListExists(name, owner, page, per_page, repo);
});

// Story: crud:RunnerApplications:read_only
bthread("crud:RunnerApplications:read_only", function () {
  let owner = 1230;
  let repo = "repo_1230";
  verifyRunnerApplicationsExists(owner, repo);
});

// Story: crud:WorkflowRun:read_only
bthread("crud:WorkflowRun:read_only", function () {
  let owner = 1240;
  let repo = "repo_1240";
  let run_id = 1240;
  verifyWorkflowRunExists(owner, repo, run_id);
});

// Story: crud:WorkflowRunApproval:read_only
bthread("crud:WorkflowRunApproval:read_only", function () {
  let owner = 1250;
  let repo = "repo_1250";
  let run_id = 1250;
  verifyWorkflowRunApprovalExists(owner, repo, run_id);
});

// Story: crud:WorkflowRunArtifact:read_only
bthread("crud:WorkflowRunArtifact:read_only", function () {
  let owner = 1260;
  let repo = "repo_1260";
  let run_id = 1260;
  verifyWorkflowRunArtifactExists(owner, repo, run_id);
});

// Story: crud:WorkflowRunAttempt:read_only
bthread("crud:WorkflowRunAttempt:read_only", function () {
  let attempt_number = "attempt_number_1270";
  let owner = 1270;
  let repo = "repo_1270";
  let run_id = 1270;
  verifyWorkflowRunAttemptExists(attempt_number, owner, repo, run_id);
});

// Story: crud:WorkflowRunAttemptJob:read_only
bthread("crud:WorkflowRunAttemptJob:read_only", function () {
  let attempt_number = "attempt_number_1280";
  let owner = 1280;
  let repo = "repo_1280";
  let run_id = 1280;
  verifyWorkflowRunAttemptJobExists(attempt_number, owner, repo, run_id);
});

// Story: crud:WorkflowRunAttemptLog:read_only
bthread("crud:WorkflowRunAttemptLog:read_only", function () {
  let attempt_number = "attempt_number_1290";
  let owner = 1290;
  let repo = "repo_1290";
  let run_id = 1290;
  verifyWorkflowRunAttemptLogExists(attempt_number, owner, repo, run_id);
});

// Story: crud:WorkflowRunList:read_only
bthread("crud:WorkflowRunList:read_only", function () {
  let actor = "actor_1310";
  let created = "created_1310";
  let event = "event_1310";
  let exclude-pull-requests = "exclude-pull-requests_1310";
  let owner = 1310;
  let page = "page_1310";
  let per-page = "per-page_1310";
  let repo = "repo_1310";
  let workflow-run-branch = "workflow-run-branch_1310";
  let workflow-run-check-suite-id;
  let workflow-run-head-sha = "workflow-run-head-sha_1310";
  let workflow-run-status = "workflow-run-status_1310";
  verifyWorkflowRunListExists(actor, created, event, exclude-pull-requests, owner, page, per-page, repo, workflow-run-branch, workflow-run-check-suite-id, workflow-run-head-sha, workflow-run-status);
});

// Story: crud:WorkflowRunJobs:read_only
bthread("crud:WorkflowRunJobs:read_only", function () {
  let filter = "filter_1330";
  let owner = 1330;
  let page = "page_1330";
  let per_page = "per_page_1330";
  let repo = "repo_1330";
  let run_id = 1330;
  verifyWorkflowRunJobsExists(filter, owner, page, per_page, repo, run_id);
});

// Story: crud:WorkflowRunLogs:read_only
bthread("crud:WorkflowRunLogs:read_only", function () {
  let owner = 1340;
  let repo = "repo_1340";
  let run_id = 1340;
  verifyWorkflowRunLogsExists(owner, repo, run_id);
});

// Story: crud:PendingDeployment:read_only
bthread("crud:PendingDeployment:read_only", function () {
  let comment = "comment_1350";
  let environment_ids;
  let owner = 1350;
  let repo = "repo_1350";
  let run_id = 1350;
  let state = "state_1350";
  verifyPendingDeploymentExists(comment, environment_ids, owner, repo, run_id, state);
});

// Story: crud:WorkflowRunTiming:read_only
bthread("crud:WorkflowRunTiming:read_only", function () {
  let owner = 1380;
  let repo = "repo_1380";
  let run_id = 1380;
  verifyWorkflowRunTimingExists(owner, repo, run_id);
});

// Story: crud:RepositorySecret:read_only
bthread("crud:RepositorySecret:read_only", function () {
  let owner = 1390;
  let page = "page_1390";
  let per_page = "per_page_1390";
  let repo = "repo_1390";
  verifyRepositorySecretExists(owner, page, per_page, repo);
});

// Story: crud:RepositoryPublicKey:read_only
bthread("crud:RepositoryPublicKey:read_only", function () {
  let owner = 1400;
  let repo = "repo_1400";
  verifyRepositoryPublicKeyExists(owner, repo);
});

// Story: crud:RepoSecret:nondet:1:1
bthread("crud:RepoSecret:nondet:1:1", function () {
  let owner = 1410;
  let repo = "repo_1410";
  let secret_name = "secret_name_1410";
  createOrUpdateRepoSecret(owner, repo, secret_name);
  waitForRepoSecretAdded(owner, repo, secret_name);
  tryToAddExistingRepoSecret(owner, repo, secret_name);
  verifyRepoSecretExists(owner, repo, secret_name);
  deleteRepoSecret(owner, repo, secret_name);
  tryToDeleteANonExistingRepoSecret(owner, repo, secret_name);
  verifyRepoSecretDoesNotExist(owner, repo, secret_name);
});

// Story: crud:RepoSecret:nondet:1:2
bthread("crud:RepoSecret:nondet:1:2", function () {
  let owner = 1411;
  let repo = "repo_1411";
  let secret_name = "secret_name_1411";
  createOrUpdateRepoSecret(owner, repo, secret_name);
  // waitForRepoSecretAdded(owner, repo, secret_name);
  tryToAddExistingRepoSecret(owner, repo, secret_name);
  verifyRepoSecretExists(owner, repo, secret_name);
  deleteRepoSecret(owner, repo, secret_name);
  tryToDeleteANonExistingRepoSecret(owner, repo, secret_name);
  verifyRepoSecretDoesNotExist(owner, repo, secret_name);
});

// Story: crud:RepoSecret:nondet:negative:dup-add
bthread("crud:RepoSecret:nondet:negative:dup-add", function () {
  let owner = 1416;
  let repo = "repo_1416";
  let secret_name = "secret_name_1416";
  createOrUpdateRepoSecret(owner, repo, secret_name);
  // waitForRepoSecretAdded(owner, repo, secret_name);
  verifyRepoSecretExists(owner, repo, secret_name);
  tryToAddExistingRepoSecret(owner, repo, secret_name);
  verifyRepoSecretExists(owner, repo, secret_name);
});

// Story: crud:RepoVariable:nondet:1:1
bthread("crud:RepoVariable:nondet:1:1", function () {
  let name = "name_1420";
  let owner = 1420;
  let repo = "repo_1420";
  let value = "value_1420";
  createRepoVariable(name, owner, repo, value);
  waitForRepoVariableAdded(name, owner, repo, value);
  tryToAddExistingRepoVariable(name, owner, repo, value);
  verifyRepoVariableExists(name, owner, repo, value);
  updateRepoVariable(name, owner, repo, value);
  deleteRepoVariable(name, owner, repo, value);
  tryToDeleteANonExistingRepoVariable(name, owner, repo, value);
  verifyRepoVariableDoesNotExist(name, owner, repo, value);
});

// Story: crud:RepoVariable:nondet:1:2
bthread("crud:RepoVariable:nondet:1:2", function () {
  let name = "name_1421";
  let owner = 1421;
  let repo = "repo_1421";
  let value = "value_1421";
  createRepoVariable(name, owner, repo, value);
  // waitForRepoVariableAdded(name, owner, repo, value);
  tryToAddExistingRepoVariable(name, owner, repo, value);
  updateRepoVariable(name, owner, repo, value);
  verifyRepoVariableExists(name, owner, repo, value);
  deleteRepoVariable(name, owner, repo, value);
  tryToDeleteANonExistingRepoVariable(name, owner, repo, value);
  verifyRepoVariableDoesNotExist(name, owner, repo, value);
});

// Story: crud:RepoVariable:nondet:negative:dup-add
bthread("crud:RepoVariable:nondet:negative:dup-add", function () {
  let name = "name_1426";
  let owner = 1426;
  let repo = "repo_1426";
  let value = "value_1426";
  createRepoVariable(name, owner, repo, value);
  // waitForRepoVariableAdded(name, owner, repo, value);
  verifyRepoVariableExists(name, owner, repo, value);
  tryToAddExistingRepoVariable(name, owner, repo, value);
  verifyRepoVariableExists(name, owner, repo, value);
});

// Story: crud:Workflow:read_only
bthread("crud:Workflow:read_only", function () {
  let owner = 1440;
  let repo = "repo_1440";
  let workflow_id = 1440;
  verifyWorkflowExists(owner, repo, workflow_id);
});

// Story: crud:EnvironmentSecret:nondet:1:1
bthread("crud:EnvironmentSecret:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_1450";
  let environment_name = "environment_name_1450";
  let key_id = 1450;
  let owner = 1450;
  let repo = "repo_1450";
  let secret_name = "secret_name_1450";
  createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  waitForEnvironmentSecretAdded(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToAddExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  deleteEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretDoesNotExist(encrypted_value, environment_name, key_id, owner, repo, secret_name);
});

// Story: crud:EnvironmentSecret:nondet:1:2
bthread("crud:EnvironmentSecret:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_1451";
  let environment_name = "environment_name_1451";
  let key_id = 1451;
  let owner = 1451;
  let repo = "repo_1451";
  let secret_name = "secret_name_1451";
  createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  // waitForEnvironmentSecretAdded(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToAddExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  deleteEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretDoesNotExist(encrypted_value, environment_name, key_id, owner, repo, secret_name);
});

// Story: crud:EnvironmentSecret:nondet:negative:dup-add
bthread("crud:EnvironmentSecret:nondet:negative:dup-add", function () {
  let encrypted_value = "encrypted_value_1456";
  let environment_name = "environment_name_1456";
  let key_id = 1456;
  let owner = 1456;
  let repo = "repo_1456";
  let secret_name = "secret_name_1456";
  createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  // waitForEnvironmentSecretAdded(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToAddExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
});

// Story: crud:EnvironmentVariable:nondet:1:1
bthread("crud:EnvironmentVariable:nondet:1:1", function () {
  let environment_name = "environment_name_1460";
  let name = "name_1460";
  let owner = 1460;
  let repo = "repo_1460";
  let value = "value_1460";
  createEnvironmentVariable(environment_name, name, owner, repo, value);
  waitForEnvironmentVariableAdded(environment_name, name, owner, repo, value);
  tryToAddExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
  updateEnvironmentVariable(environment_name, name, owner, repo, value);
  deleteEnvironmentVariable(environment_name, name, owner, repo, value);
  tryToDeleteANonExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableDoesNotExist(environment_name, name, owner, repo, value);
});

// Story: crud:EnvironmentVariable:nondet:1:2
bthread("crud:EnvironmentVariable:nondet:1:2", function () {
  let environment_name = "environment_name_1461";
  let name = "name_1461";
  let owner = 1461;
  let repo = "repo_1461";
  let value = "value_1461";
  createEnvironmentVariable(environment_name, name, owner, repo, value);
  // waitForEnvironmentVariableAdded(environment_name, name, owner, repo, value);
  tryToAddExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  updateEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
  deleteEnvironmentVariable(environment_name, name, owner, repo, value);
  tryToDeleteANonExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableDoesNotExist(environment_name, name, owner, repo, value);
});

// Story: crud:EnvironmentVariable:nondet:negative:dup-add
bthread("crud:EnvironmentVariable:nondet:negative:dup-add", function () {
  let environment_name = "environment_name_1466";
  let name = "name_1466";
  let owner = 1466;
  let repo = "repo_1466";
  let value = "value_1466";
  createEnvironmentVariable(environment_name, name, owner, repo, value);
  // waitForEnvironmentVariableAdded(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
  tryToAddExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
});

// Story: crud:Organization:read_only
bthread("crud:Organization:read_only", function () {
  let org = 1470;
  let username = "username_1470";
  verifyOrganizationExists(org, username);
});

// Story: crud:ArtifactStorageRecord:read_only
bthread("crud:ArtifactStorageRecord:read_only", function () {
  let artifact_url = "artifact_url_1480";
  let digest = "digest_1480";
  let name = "name_1480";
  let org = 1480;
  let path = "path_1480";
  let registry_url = "registry_url_1480";
  let repository = "repository_1480";
  let status = "status_1480";
  let subject_digest = "subject_digest_1480";
  verifyArtifactStorageRecordExists(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest);
});

// Story: crud:Block:nondet:1:1
bthread("crud:Block:nondet:1:1", function () {
  let org = 1500;
  let username = "username_1500";
  blockUser(org, username);
  waitForBlockAdded(org, username);
  tryToAddExistingBlock(org, username);
  verifyBlockExists(org, username);
  unblockUser(org, username);
  tryToDeleteANonExistingBlock(org, username);
  verifyBlockDoesNotExist(org, username);
});

// Story: crud:Block:nondet:1:2
bthread("crud:Block:nondet:1:2", function () {
  let org = 1501;
  let username = "username_1501";
  blockUser(org, username);
  // waitForBlockAdded(org, username);
  tryToAddExistingBlock(org, username);
  verifyBlockExists(org, username);
  unblockUser(org, username);
  tryToDeleteANonExistingBlock(org, username);
  verifyBlockDoesNotExist(org, username);
});

// Story: crud:Block:nondet:negative:dup-add
bthread("crud:Block:nondet:negative:dup-add", function () {
  let org = 1506;
  let username = "username_1506";
  blockUser(org, username);
  // waitForBlockAdded(org, username);
  verifyBlockExists(org, username);
  tryToAddExistingBlock(org, username);
  verifyBlockExists(org, username);
});

// Story: crud:OrgInstallation:read_only
bthread("crud:OrgInstallation:read_only", function () {
  let org = 1520;
  verifyOrgInstallationExists(org);
});

// Story: crud:IssueType:nondet:1:1
bthread("crud:IssueType:nondet:1:1", function () {
  let color = "color_1540";
  let description = "description_1540";
  let is_enabled = "is_enabled_1540";
  let issue_type_id;
  let name = "name_1540";
  let org = 1540;
  // Dependency Barrier
  let deps = {};
  deps["issue_type_id"] = matchAnyIssueAdded();
  let pkMap = {"issue_type_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  issue_type_id = captured["issue_type_id"];
  createIssueType(color, description, is_enabled, issue_type_id, name, org);
  waitForIssueTypeAdded(color, description, is_enabled, issue_type_id, name, org);
  tryToAddExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
  updateIssueType(color, description, is_enabled, issue_type_id, name, org);
  deleteIssueType(color, description, is_enabled, issue_type_id, name, org);
  tryToDeleteANonExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeDoesNotExist(color, description, is_enabled, issue_type_id, name, org);
});

// Story: crud:IssueType:nondet:1:2
bthread("crud:IssueType:nondet:1:2", function () {
  let color = "color_1541";
  let description = "description_1541";
  let is_enabled = "is_enabled_1541";
  let issue_type_id;
  let name = "name_1541";
  let org = 1541;
  // Dependency Barrier
  let deps = {};
  deps["issue_type_id"] = matchAnyIssueAdded();
  let pkMap = {"issue_type_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  issue_type_id = captured["issue_type_id"];
  createIssueType(color, description, is_enabled, issue_type_id, name, org);
  // waitForIssueTypeAdded(color, description, is_enabled, issue_type_id, name, org);
  tryToAddExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  updateIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
  deleteIssueType(color, description, is_enabled, issue_type_id, name, org);
  tryToDeleteANonExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeDoesNotExist(color, description, is_enabled, issue_type_id, name, org);
});

// Story: crud:IssueType:nondet:negative:dup-add
bthread("crud:IssueType:nondet:negative:dup-add", function () {
  let color = "color_1546";
  let description = "description_1546";
  let is_enabled = "is_enabled_1546";
  let issue_type_id;
  let name = "name_1546";
  let org = 1546;
  // Dependency Barrier
  let deps = {};
  deps["issue_type_id"] = matchAnyIssueAdded();
  let pkMap = {"issue_type_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  issue_type_id = captured["issue_type_id"];
  createIssueType(color, description, is_enabled, issue_type_id, name, org);
  // waitForIssueTypeAdded(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
  tryToAddExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
});

// Story: crud:Member:read_only
bthread("crud:Member:read_only", function () {
  let org = 1550;
  let username = "username_1550";
  verifyMemberExists(org, username);
});

// Story: crud:Membership:nondet:1:1
bthread("crud:Membership:nondet:1:1", function () {
  let org = 1560;
  let role = "role_1560";
  let team_slug = "team_slug_1560";
  let username = "username_1560";
  addOrUpdateMembership(org, role, team_slug, username);
  waitForMembershipAdded(org, role, team_slug, username);
  tryToAddExistingMembership(org, role, team_slug, username);
  verifyMembershipExists(org, role, team_slug, username);
  removeMembershipForUser(org, role, team_slug, username);
  tryToDeleteANonExistingMembership(org, role, team_slug, username);
  verifyMembershipDoesNotExist(org, role, team_slug, username);
});

// Story: crud:Membership:nondet:1:2
bthread("crud:Membership:nondet:1:2", function () {
  let org = 1561;
  let role = "role_1561";
  let team_slug = "team_slug_1561";
  let username = "username_1561";
  addOrUpdateMembership(org, role, team_slug, username);
  // waitForMembershipAdded(org, role, team_slug, username);
  tryToAddExistingMembership(org, role, team_slug, username);
  verifyMembershipExists(org, role, team_slug, username);
  removeMembershipForUser(org, role, team_slug, username);
  tryToDeleteANonExistingMembership(org, role, team_slug, username);
  verifyMembershipDoesNotExist(org, role, team_slug, username);
});

// Story: crud:Membership:nondet:negative:dup-add
bthread("crud:Membership:nondet:negative:dup-add", function () {
  let org = 1566;
  let role = "role_1566";
  let team_slug = "team_slug_1566";
  let username = "username_1566";
  addOrUpdateMembership(org, role, team_slug, username);
  // waitForMembershipAdded(org, role, team_slug, username);
  verifyMembershipExists(org, role, team_slug, username);
  tryToAddExistingMembership(org, role, team_slug, username);
  verifyMembershipExists(org, role, team_slug, username);
});

// Story: crud:OrganizationRole:nondet:1:1
bthread("crud:OrganizationRole:nondet:1:1", function () {
  let org = 1570;
  let role_id = 1570;
  let team_slug = "team_slug_1570";
  assignTeamToOrgRole(org, role_id, team_slug);
  waitForOrganizationRoleAdded(org, role_id, team_slug);
  tryToAddExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  revokeOrgRoleFromTeam(org, role_id, team_slug);
  tryToDeleteANonExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleDoesNotExist(org, role_id, team_slug);
});

// Story: crud:OrganizationRole:nondet:1:2
bthread("crud:OrganizationRole:nondet:1:2", function () {
  let org = 1571;
  let role_id = 1571;
  let team_slug = "team_slug_1571";
  assignTeamToOrgRole(org, role_id, team_slug);
  // waitForOrganizationRoleAdded(org, role_id, team_slug);
  tryToAddExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  revokeOrgRoleFromTeam(org, role_id, team_slug);
  tryToDeleteANonExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleDoesNotExist(org, role_id, team_slug);
});

// Story: crud:OrganizationRole:nondet:negative:dup-add
bthread("crud:OrganizationRole:nondet:negative:dup-add", function () {
  let org = 1576;
  let role_id = 1576;
  let team_slug = "team_slug_1576";
  assignTeamToOrgRole(org, role_id, team_slug);
  // waitForOrganizationRoleAdded(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  tryToAddExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
});

// Story: crud:OrganizationRoleUser:nondet:1:1
bthread("crud:OrganizationRoleUser:nondet:1:1", function () {
  let org = 1580;
  let role_id = 1580;
  let username = "username_1580";
  assignUserToOrganizationRole(org, role_id, username);
  waitForOrganizationRoleUserAdded(org, role_id, username);
  tryToAddExistingOrganizationRoleUser(org, role_id, username);
  verifyOrganizationRoleUserExists(org, role_id, username);
  removeUserFromOrganizationRole(org, role_id, username);
  tryToDeleteANonExistingOrganizationRoleUser(org, role_id, username);
  verifyOrganizationRoleUserDoesNotExist(org, role_id, username);
});

// Story: crud:OrganizationRoleUser:nondet:1:2
bthread("crud:OrganizationRoleUser:nondet:1:2", function () {
  let org = 1581;
  let role_id = 1581;
  let username = "username_1581";
  assignUserToOrganizationRole(org, role_id, username);
  // waitForOrganizationRoleUserAdded(org, role_id, username);
  tryToAddExistingOrganizationRoleUser(org, role_id, username);
  verifyOrganizationRoleUserExists(org, role_id, username);
  removeUserFromOrganizationRole(org, role_id, username);
  tryToDeleteANonExistingOrganizationRoleUser(org, role_id, username);
  verifyOrganizationRoleUserDoesNotExist(org, role_id, username);
});

// Story: crud:OrganizationRoleUser:nondet:negative:dup-add
bthread("crud:OrganizationRoleUser:nondet:negative:dup-add", function () {
  let org = 1586;
  let role_id = 1586;
  let username = "username_1586";
  assignUserToOrganizationRole(org, role_id, username);
  // waitForOrganizationRoleUserAdded(org, role_id, username);
  verifyOrganizationRoleUserExists(org, role_id, username);
  tryToAddExistingOrganizationRoleUser(org, role_id, username);
  verifyOrganizationRoleUserExists(org, role_id, username);
});

// Story: crud:OrganizationRoleTeams:read_only
bthread("crud:OrganizationRoleTeams:read_only", function () {
  let org = 1600;
  let role_id = 1600;
  verifyOrganizationRoleTeamsExists(org, role_id);
});

// Story: crud:OrganizationRoleUsers:read_only
bthread("crud:OrganizationRoleUsers:read_only", function () {
  let org = 1610;
  let role_id = 1610;
  verifyOrganizationRoleUsersExists(org, role_id);
});

// Story: crud:OutsideCollaborator:nondet:1:1
bthread("crud:OutsideCollaborator:nondet:1:1", function () {
  let org = 1620;
  let username = "username_1620";
  convertMemberToOutsideCollaborator(org, username);
  waitForOutsideCollaboratorAdded(org, username);
  tryToAddExistingOutsideCollaborator(org, username);
  verifyOutsideCollaboratorExists(org, username);
  removeOutsideCollaborator(org, username);
  tryToDeleteANonExistingOutsideCollaborator(org, username);
  verifyOutsideCollaboratorDoesNotExist(org, username);
});

// Story: crud:OutsideCollaborator:nondet:1:2
bthread("crud:OutsideCollaborator:nondet:1:2", function () {
  let org = 1621;
  let username = "username_1621";
  convertMemberToOutsideCollaborator(org, username);
  // waitForOutsideCollaboratorAdded(org, username);
  tryToAddExistingOutsideCollaborator(org, username);
  verifyOutsideCollaboratorExists(org, username);
  removeOutsideCollaborator(org, username);
  tryToDeleteANonExistingOutsideCollaborator(org, username);
  verifyOutsideCollaboratorDoesNotExist(org, username);
});

// Story: crud:OutsideCollaborator:nondet:negative:dup-add
bthread("crud:OutsideCollaborator:nondet:negative:dup-add", function () {
  let org = 1626;
  let username = "username_1626";
  convertMemberToOutsideCollaborator(org, username);
  // waitForOutsideCollaboratorAdded(org, username);
  verifyOutsideCollaboratorExists(org, username);
  tryToAddExistingOutsideCollaborator(org, username);
  verifyOutsideCollaboratorExists(org, username);
});

// Story: crud:OutsideCollaboratorsList:read_only
bthread("crud:OutsideCollaboratorsList:read_only", function () {
  let filter = "filter_1630";
  let org = 1630;
  let page = "page_1630";
  let per-page = "per-page_1630";
  verifyOutsideCollaboratorsListExists(filter, org, page, per-page);
});

// Story: crud:PersonalAccessTokenRequestsBulk:read_only
bthread("crud:PersonalAccessTokenRequestsBulk:read_only", function () {
  let direction = "direction_1650";
  let org = 1650;
  let page = "page_1650";
  let per-page = "per-page_1650";
  let personal-access-token-after = "personal-access-token-after_1650";
  let personal-access-token-before = "personal-access-token-before_1650";
  let personal-access-token-owner = "personal-access-token-owner_1650";
  let personal-access-token-permission = "personal-access-token-permission_1650";
  let personal-access-token-repository = "personal-access-token-repository_1650";
  let personal-access-token-sort = "personal-access-token-sort_1650";
  let personal-access-token-token-id = 1650;
  verifyPersonalAccessTokenRequestsBulkExists(direction, org, page, per-page, personal-access-token-after, personal-access-token-before, personal-access-token-owner, personal-access-token-permission, personal-access-token-repository, personal-access-token-sort, personal-access-token-token-id);
});

// Story: crud:PersonalAccessTokenRequestRepositories:read_only
bthread("crud:PersonalAccessTokenRequestRepositories:read_only", function () {
  let org = 1660;
  let page = "page_1660";
  let pat_request_id = 1660;
  let per-page = "per-page_1660";
  verifyPersonalAccessTokenRequestRepositoriesExists(org, page, pat_request_id, per-page);
});

// Story: crud:PersonalAccessToken:read_only
bthread("crud:PersonalAccessToken:read_only", function () {
  let action = "action_1670";
  let org = 1670;
  let pat_id = 1670;
  let pat_ids = "pat_ids_1670";
  verifyPersonalAccessTokenExists(action, org, pat_id, pat_ids);
});

// Story: crud:CustomProperty:read_only
bthread("crud:CustomProperty:read_only", function () {
  let allowed_values = "allowed_values_1680";
  let custom_property_name = "custom_property_name_1680";
  let default_value = "default_value_1680";
  let description = "description_1680";
  let org = 1680;
  let properties = "properties_1680";
  let required = "required_1680";
  let value_type = "value_type_1680";
  verifyCustomPropertyExists(allowed_values, custom_property_name, default_value, description, org, properties, required, value_type);
});

// Story: crud:CustomPropertyValue:read_only
bthread("crud:CustomPropertyValue:read_only", function () {
  let org = 1690;
  let properties = "properties_1690";
  let repository_names = "repository_names_1690";
  verifyCustomPropertyValueExists(org, properties, repository_names);
});

// Story: crud:PublicMember:nondet:1:1
bthread("crud:PublicMember:nondet:1:1", function () {
  let org = 1700;
  let username = "username_1700";
  setPublicMembership(org, username);
  waitForPublicMemberAdded(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
  removePublicMembership(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:nondet:1:2
bthread("crud:PublicMember:nondet:1:2", function () {
  let org = 1701;
  let username = "username_1701";
  setPublicMembership(org, username);
  // waitForPublicMemberAdded(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
  removePublicMembership(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:nondet:negative:dup-add
bthread("crud:PublicMember:nondet:negative:dup-add", function () {
  let org = 1706;
  let username = "username_1706";
  setPublicMembership(org, username);
  // waitForPublicMemberAdded(org, username);
  verifyPublicMemberExists(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
});

// Story: crud:SecurityManagerTeam:nondet:1:1
bthread("crud:SecurityManagerTeam:nondet:1:1", function () {
  let org = 1720;
  let team_slug = "team_slug_1720";
  addSecurityManagerTeam(org, team_slug);
  waitForSecurityManagerTeamAdded(org, team_slug);
  tryToAddExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
  removeSecurityManagerTeam(org, team_slug);
  tryToDeleteANonExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamDoesNotExist(org, team_slug);
});

// Story: crud:SecurityManagerTeam:nondet:1:2
bthread("crud:SecurityManagerTeam:nondet:1:2", function () {
  let org = 1721;
  let team_slug = "team_slug_1721";
  addSecurityManagerTeam(org, team_slug);
  // waitForSecurityManagerTeamAdded(org, team_slug);
  tryToAddExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
  removeSecurityManagerTeam(org, team_slug);
  tryToDeleteANonExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamDoesNotExist(org, team_slug);
});

// Story: crud:SecurityManagerTeam:nondet:negative:dup-add
bthread("crud:SecurityManagerTeam:nondet:negative:dup-add", function () {
  let org = 1726;
  let team_slug = "team_slug_1726";
  addSecurityManagerTeam(org, team_slug);
  // waitForSecurityManagerTeamAdded(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
  tryToAddExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
});

// Story: crud:ImmutableReleasesSettings:read_only
bthread("crud:ImmutableReleasesSettings:read_only", function () {
  let org = 1730;
  verifyImmutableReleasesSettingsExists(org);
});

// Story: crud:ImmutableReleasesRepositories:read_only
bthread("crud:ImmutableReleasesRepositories:read_only", function () {
  let org = 1740;
  verifyImmutableReleasesRepositoriesExists(org);
});

// Story: crud:ImmutableReleasesRepository:nondet:1:1
bthread("crud:ImmutableReleasesRepository:nondet:1:1", function () {
  let org = 1750;
  let repository_id;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableImmutableReleasesRepository(org, repository_id);
  waitForImmutableReleasesRepositoryAdded(org, repository_id);
  tryToAddExistingImmutableReleasesRepository(org, repository_id);
  verifyImmutableReleasesRepositoryExists(org, repository_id);
  disableImmutableReleasesRepository(org, repository_id);
  tryToDeleteANonExistingImmutableReleasesRepository(org, repository_id);
  verifyImmutableReleasesRepositoryDoesNotExist(org, repository_id);
});

// Story: crud:ImmutableReleasesRepository:nondet:1:2
bthread("crud:ImmutableReleasesRepository:nondet:1:2", function () {
  let org = 1751;
  let repository_id;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableImmutableReleasesRepository(org, repository_id);
  // waitForImmutableReleasesRepositoryAdded(org, repository_id);
  tryToAddExistingImmutableReleasesRepository(org, repository_id);
  verifyImmutableReleasesRepositoryExists(org, repository_id);
  disableImmutableReleasesRepository(org, repository_id);
  tryToDeleteANonExistingImmutableReleasesRepository(org, repository_id);
  verifyImmutableReleasesRepositoryDoesNotExist(org, repository_id);
});

// Story: crud:ImmutableReleasesRepository:nondet:negative:dup-add
bthread("crud:ImmutableReleasesRepository:nondet:negative:dup-add", function () {
  let org = 1756;
  let repository_id;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableImmutableReleasesRepository(org, repository_id);
  // waitForImmutableReleasesRepositoryAdded(org, repository_id);
  verifyImmutableReleasesRepositoryExists(org, repository_id);
  tryToAddExistingImmutableReleasesRepository(org, repository_id);
  verifyImmutableReleasesRepositoryExists(org, repository_id);
});

// Story: crud:OrganizationMembership:read_only
bthread("crud:OrganizationMembership:read_only", function () {
  let org = 1770;
  let state = "state_1770";
  verifyOrganizationMembershipExists(org, state);
});

// Story: crud:CodespacesAccessUsers:nondet:1:1
bthread("crud:CodespacesAccessUsers:nondet:1:1", function () {
  let org = 1790;
  let selected_usernames = "selected_usernames_1790";
  addCodespacesAccessUsers(org, selected_usernames);
  waitForCodespacesAccessUsersAdded(org, selected_usernames);
  tryToAddExistingCodespacesAccessUsers(org, selected_usernames);
  verifyCodespacesAccessUsersExists(org, selected_usernames);
  deleteCodespacesAccessUsers(org, selected_usernames);
  tryToDeleteANonExistingCodespacesAccessUsers(org, selected_usernames);
  verifyCodespacesAccessUsersDoesNotExist(org, selected_usernames);
});

// Story: crud:CodespacesAccessUsers:nondet:1:2
bthread("crud:CodespacesAccessUsers:nondet:1:2", function () {
  let org = 1791;
  let selected_usernames = "selected_usernames_1791";
  addCodespacesAccessUsers(org, selected_usernames);
  // waitForCodespacesAccessUsersAdded(org, selected_usernames);
  tryToAddExistingCodespacesAccessUsers(org, selected_usernames);
  verifyCodespacesAccessUsersExists(org, selected_usernames);
  deleteCodespacesAccessUsers(org, selected_usernames);
  tryToDeleteANonExistingCodespacesAccessUsers(org, selected_usernames);
  verifyCodespacesAccessUsersDoesNotExist(org, selected_usernames);
});

// Story: crud:CodespacesAccessUsers:nondet:negative:dup-add
bthread("crud:CodespacesAccessUsers:nondet:negative:dup-add", function () {
  let org = 1796;
  let selected_usernames = "selected_usernames_1796";
  addCodespacesAccessUsers(org, selected_usernames);
  // waitForCodespacesAccessUsersAdded(org, selected_usernames);
  verifyCodespacesAccessUsersExists(org, selected_usernames);
  tryToAddExistingCodespacesAccessUsers(org, selected_usernames);
  verifyCodespacesAccessUsersExists(org, selected_usernames);
});

// Story: crud:OrgSecret:nondet:1:1
bthread("crud:OrgSecret:nondet:1:1", function () {
  let org = 1800;
  let secret_name = "secret_name_1800";
  let visibility = "visibility_1800";
  createOrUpdateOrgSecret(org, secret_name, visibility);
  waitForOrgSecretAdded(org, secret_name, visibility);
  tryToAddExistingOrgSecret(org, secret_name, visibility);
  verifyOrgSecretExists(org, secret_name, visibility);
  deleteOrgSecret(org, secret_name, visibility);
  tryToDeleteANonExistingOrgSecret(org, secret_name, visibility);
  verifyOrgSecretDoesNotExist(org, secret_name, visibility);
});

// Story: crud:OrgSecret:nondet:1:2
bthread("crud:OrgSecret:nondet:1:2", function () {
  let org = 1801;
  let secret_name = "secret_name_1801";
  let visibility = "visibility_1801";
  createOrUpdateOrgSecret(org, secret_name, visibility);
  // waitForOrgSecretAdded(org, secret_name, visibility);
  tryToAddExistingOrgSecret(org, secret_name, visibility);
  verifyOrgSecretExists(org, secret_name, visibility);
  deleteOrgSecret(org, secret_name, visibility);
  tryToDeleteANonExistingOrgSecret(org, secret_name, visibility);
  verifyOrgSecretDoesNotExist(org, secret_name, visibility);
});

// Story: crud:OrgSecret:nondet:negative:dup-add
bthread("crud:OrgSecret:nondet:negative:dup-add", function () {
  let org = 1806;
  let secret_name = "secret_name_1806";
  let visibility = "visibility_1806";
  createOrUpdateOrgSecret(org, secret_name, visibility);
  // waitForOrgSecretAdded(org, secret_name, visibility);
  verifyOrgSecretExists(org, secret_name, visibility);
  tryToAddExistingOrgSecret(org, secret_name, visibility);
  verifyOrgSecretExists(org, secret_name, visibility);
});

// Story: crud:OrgSecretSelectedRepositories:read_only
bthread("crud:OrgSecretSelectedRepositories:read_only", function () {
  let org = 1810;
  let secret_name = "secret_name_1810";
  let selected_repository_ids;
  verifyOrgSecretSelectedRepositoriesExists(org, secret_name, selected_repository_ids);
});

// Story: crud:OrgSecretSelectedRepository:nondet:1:1
bthread("crud:OrgSecretSelectedRepository:nondet:1:1", function () {
  let org = 1820;
  let repository_id;
  let secret_name = "secret_name_1820";
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addSelectedRepoToOrgSecret(org, repository_id, secret_name);
  waitForOrgSecretSelectedRepositoryAdded(org, repository_id, secret_name);
  tryToAddExistingOrgSecretSelectedRepository(org, repository_id, secret_name);
  verifyOrgSecretSelectedRepositoryExists(org, repository_id, secret_name);
  removeSelectedRepoFromOrgSecret(org, repository_id, secret_name);
  tryToDeleteANonExistingOrgSecretSelectedRepository(org, repository_id, secret_name);
  verifyOrgSecretSelectedRepositoryDoesNotExist(org, repository_id, secret_name);
});

// Story: crud:OrgSecretSelectedRepository:nondet:1:2
bthread("crud:OrgSecretSelectedRepository:nondet:1:2", function () {
  let org = 1821;
  let repository_id;
  let secret_name = "secret_name_1821";
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addSelectedRepoToOrgSecret(org, repository_id, secret_name);
  // waitForOrgSecretSelectedRepositoryAdded(org, repository_id, secret_name);
  tryToAddExistingOrgSecretSelectedRepository(org, repository_id, secret_name);
  verifyOrgSecretSelectedRepositoryExists(org, repository_id, secret_name);
  removeSelectedRepoFromOrgSecret(org, repository_id, secret_name);
  tryToDeleteANonExistingOrgSecretSelectedRepository(org, repository_id, secret_name);
  verifyOrgSecretSelectedRepositoryDoesNotExist(org, repository_id, secret_name);
});

// Story: crud:OrgSecretSelectedRepository:nondet:negative:dup-add
bthread("crud:OrgSecretSelectedRepository:nondet:negative:dup-add", function () {
  let org = 1826;
  let repository_id;
  let secret_name = "secret_name_1826";
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addSelectedRepoToOrgSecret(org, repository_id, secret_name);
  // waitForOrgSecretSelectedRepositoryAdded(org, repository_id, secret_name);
  verifyOrgSecretSelectedRepositoryExists(org, repository_id, secret_name);
  tryToAddExistingOrgSecretSelectedRepository(org, repository_id, secret_name);
  verifyOrgSecretSelectedRepositoryExists(org, repository_id, secret_name);
});

// Story: crud:Codespace:nondet:1:1
bthread("crud:Codespace:nondet:1:1", function () {
  let codespace_name = 1830;
  let name = "name_1830";
  let org = "org_1830";
  let owner = "owner_1830";
  let page = "page_1830";
  let per-page = "per-page_1830";
  let _private = "private_1830";
  let pull_number = "pull_number_1830";
  let repo = "repo_1830";
  let username = "username_1830";
  publishCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  waitForCodespaceAdded(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  tryToAddExistingCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  verifyCodespaceExists(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  startCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  stopCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  tryToDeleteANonExistingCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  verifyCodespaceDoesNotExist(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
});

// Story: crud:Codespace:nondet:1:2
bthread("crud:Codespace:nondet:1:2", function () {
  let codespace_name = 1831;
  let name = "name_1831";
  let org = "org_1831";
  let owner = "owner_1831";
  let page = "page_1831";
  let per-page = "per-page_1831";
  let _private = "private_1831";
  let pull_number = "pull_number_1831";
  let repo = "repo_1831";
  let username = "username_1831";
  publishCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  // waitForCodespaceAdded(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  tryToAddExistingCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  startCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  verifyCodespaceExists(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  stopCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  tryToDeleteANonExistingCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  verifyCodespaceDoesNotExist(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
});

// Story: crud:Codespace:nondet:negative:dup-add
bthread("crud:Codespace:nondet:negative:dup-add", function () {
  let codespace_name = 1836;
  let name = "name_1836";
  let org = "org_1836";
  let owner = "owner_1836";
  let page = "page_1836";
  let per-page = "per-page_1836";
  let _private = "private_1836";
  let pull_number = "pull_number_1836";
  let repo = "repo_1836";
  let username = "username_1836";
  publishCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  // waitForCodespaceAdded(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  verifyCodespaceExists(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  tryToAddExistingCodespace(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
  verifyCodespaceExists(codespace_name, name, org, owner, page, per-page, _private, pull_number, repo, username);
});

// Story: crud:CodespaceDefaultAttributes:read_only
bthread("crud:CodespaceDefaultAttributes:read_only", function () {
  let client_ip = "client_ip_1860";
  let owner = 1860;
  let ref = "ref_1860";
  let repo = "repo_1860";
  verifyCodespaceDefaultAttributesExists(client_ip, owner, ref, repo);
});

// Story: crud:CodespacePermissionsCheck:read_only
bthread("crud:CodespacePermissionsCheck:read_only", function () {
  let devcontainer_path = "devcontainer_path_1870";
  let owner = 1870;
  let ref = "ref_1870";
  let repo = "repo_1870";
  verifyCodespacePermissionsCheckExists(devcontainer_path, owner, ref, repo);
});

// Story: crud:CodespaceSecret:nondet:1:1
bthread("crud:CodespaceSecret:nondet:1:1", function () {
  let key_id = 1880;
  let owner = 1880;
  let page = "page_1880";
  let per-page = "per-page_1880";
  let repo = "repo_1880";
  let secret_name = "secret_name_1880";
  createOrUpdateSecretForAuthenticatedUser(key_id, owner, page, per-page, repo, secret_name);
  waitForCodespaceSecretAdded(key_id, owner, page, per-page, repo, secret_name);
  tryToAddExistingCodespaceSecret(key_id, owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretExists(key_id, owner, page, per-page, repo, secret_name);
  deleteSecretForAuthenticatedUser(key_id, owner, page, per-page, repo, secret_name);
  tryToDeleteANonExistingCodespaceSecret(key_id, owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretDoesNotExist(key_id, owner, page, per-page, repo, secret_name);
});

// Story: crud:CodespaceSecret:nondet:1:2
bthread("crud:CodespaceSecret:nondet:1:2", function () {
  let key_id = 1881;
  let owner = 1881;
  let page = "page_1881";
  let per-page = "per-page_1881";
  let repo = "repo_1881";
  let secret_name = "secret_name_1881";
  createOrUpdateSecretForAuthenticatedUser(key_id, owner, page, per-page, repo, secret_name);
  // waitForCodespaceSecretAdded(key_id, owner, page, per-page, repo, secret_name);
  tryToAddExistingCodespaceSecret(key_id, owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretExists(key_id, owner, page, per-page, repo, secret_name);
  deleteSecretForAuthenticatedUser(key_id, owner, page, per-page, repo, secret_name);
  tryToDeleteANonExistingCodespaceSecret(key_id, owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretDoesNotExist(key_id, owner, page, per-page, repo, secret_name);
});

// Story: crud:CodespaceSecret:nondet:negative:dup-add
bthread("crud:CodespaceSecret:nondet:negative:dup-add", function () {
  let key_id = 1886;
  let owner = 1886;
  let page = "page_1886";
  let per-page = "per-page_1886";
  let repo = "repo_1886";
  let secret_name = "secret_name_1886";
  createOrUpdateSecretForAuthenticatedUser(key_id, owner, page, per-page, repo, secret_name);
  // waitForCodespaceSecretAdded(key_id, owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretExists(key_id, owner, page, per-page, repo, secret_name);
  tryToAddExistingCodespaceSecret(key_id, owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretExists(key_id, owner, page, per-page, repo, secret_name);
});

// Story: crud:CodespacePublicKey:read_only
bthread("crud:CodespacePublicKey:read_only", function () {
  let owner = 1890;
  let repo = "repo_1890";
  verifyCodespacePublicKeyExists(owner, repo);
});

// Story: crud:User:read_only
bthread("crud:User:read_only", function () {
  let account_id = 1900;
  let username = "username_1900";
  verifyUserExists(account_id, username);
});

// Story: crud:UserBlock:nondet:1:1
bthread("crud:UserBlock:nondet:1:1", function () {
  let username = 1910;
  blockUser(username);
  waitForUserBlockAdded(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
  unblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Story: crud:UserBlock:nondet:1:2
bthread("crud:UserBlock:nondet:1:2", function () {
  let username = 1911;
  blockUser(username);
  // waitForUserBlockAdded(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
  unblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Story: crud:UserBlock:nondet:negative:dup-add
bthread("crud:UserBlock:nondet:negative:dup-add", function () {
  let username = 1916;
  blockUser(username);
  // waitForUserBlockAdded(username);
  verifyUserBlockExists(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
});

// Story: crud:UserEmail:nondet:1:1
bthread("crud:UserEmail:nondet:1:1", function () {

  addEmails();
  waitForUserEmailAdded();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
  deleteEmails();
  tryToDeleteANonExistingUserEmail();
  verifyUserEmailDoesNotExist();
});

// Story: crud:UserEmail:nondet:1:2
bthread("crud:UserEmail:nondet:1:2", function () {

  addEmails();
  // waitForUserEmailAdded();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
  deleteEmails();
  tryToDeleteANonExistingUserEmail();
  verifyUserEmailDoesNotExist();
});

// Story: crud:UserEmail:nondet:negative:dup-add
bthread("crud:UserEmail:nondet:negative:dup-add", function () {

  addEmails();
  // waitForUserEmailAdded();
  verifyUserEmailExists();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
});

// Story: crud:UserFollower:read_only
bthread("crud:UserFollower:read_only", function () {

  verifyUserFollowerExists();
});

// Story: crud:UserFollowing:nondet:1:1
bthread("crud:UserFollowing:nondet:1:1", function () {
  let username = 1950;
  followUser(username);
  waitForUserFollowingAdded(username);
  tryToAddExistingUserFollowing(username);
  verifyUserFollowingExists(username);
  unfollowUser(username);
  tryToDeleteANonExistingUserFollowing(username);
  verifyUserFollowingDoesNotExist(username);
});

// Story: crud:UserFollowing:nondet:1:2
bthread("crud:UserFollowing:nondet:1:2", function () {
  let username = 1951;
  followUser(username);
  // waitForUserFollowingAdded(username);
  tryToAddExistingUserFollowing(username);
  verifyUserFollowingExists(username);
  unfollowUser(username);
  tryToDeleteANonExistingUserFollowing(username);
  verifyUserFollowingDoesNotExist(username);
});

// Story: crud:UserFollowing:nondet:negative:dup-add
bthread("crud:UserFollowing:nondet:negative:dup-add", function () {
  let username = 1956;
  followUser(username);
  // waitForUserFollowingAdded(username);
  verifyUserFollowingExists(username);
  tryToAddExistingUserFollowing(username);
  verifyUserFollowingExists(username);
});

// Story: crud:UserGpgKey:nondet:1:1
bthread("crud:UserGpgKey:nondet:1:1", function () {
  let armored_public_key = "armored_public_key_1960";
  let gpg_key_id = 1960;
  let name = "name_1960";
  createGpgKey(armored_public_key, gpg_key_id, name);
  waitForUserGpgKeyAdded(armored_public_key, gpg_key_id, name);
  tryToAddExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
  deleteGpgKey(armored_public_key, gpg_key_id, name);
  tryToDeleteANonExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyDoesNotExist(armored_public_key, gpg_key_id, name);
});

// Story: crud:UserGpgKey:nondet:1:2
bthread("crud:UserGpgKey:nondet:1:2", function () {
  let armored_public_key = "armored_public_key_1961";
  let gpg_key_id = 1961;
  let name = "name_1961";
  createGpgKey(armored_public_key, gpg_key_id, name);
  // waitForUserGpgKeyAdded(armored_public_key, gpg_key_id, name);
  tryToAddExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
  deleteGpgKey(armored_public_key, gpg_key_id, name);
  tryToDeleteANonExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyDoesNotExist(armored_public_key, gpg_key_id, name);
});

// Story: crud:UserGpgKey:nondet:negative:dup-add
bthread("crud:UserGpgKey:nondet:negative:dup-add", function () {
  let armored_public_key = "armored_public_key_1966";
  let gpg_key_id = 1966;
  let name = "name_1966";
  createGpgKey(armored_public_key, gpg_key_id, name);
  // waitForUserGpgKeyAdded(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
  tryToAddExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
});

// Story: crud:PublicSSHKey:nondet:1:1
bthread("crud:PublicSSHKey:nondet:1:1", function () {
  let key = "key_1970";
  let key_id = 1970;
  let title = "title_1970";
  createPublicSSHKey(key, key_id, title);
  waitForPublicSSHKeyAdded(key, key_id, title);
  tryToAddExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
  deletePublicSSHKey(key, key_id, title);
  tryToDeleteANonExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyDoesNotExist(key, key_id, title);
});

// Story: crud:PublicSSHKey:nondet:1:2
bthread("crud:PublicSSHKey:nondet:1:2", function () {
  let key = "key_1971";
  let key_id = 1971;
  let title = "title_1971";
  createPublicSSHKey(key, key_id, title);
  // waitForPublicSSHKeyAdded(key, key_id, title);
  tryToAddExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
  deletePublicSSHKey(key, key_id, title);
  tryToDeleteANonExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyDoesNotExist(key, key_id, title);
});

// Story: crud:PublicSSHKey:nondet:negative:dup-add
bthread("crud:PublicSSHKey:nondet:negative:dup-add", function () {
  let key = "key_1976";
  let key_id = 1976;
  let title = "title_1976";
  createPublicSSHKey(key, key_id, title);
  // waitForPublicSSHKeyAdded(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
  tryToAddExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
});

// Story: crud:SocialAccount:nondet:1:1
bthread("crud:SocialAccount:nondet:1:1", function () {
  let account_urls = "account_urls_1980";
  let username = 1980;
  addSocialAccount(account_urls, username);
  waitForSocialAccountAdded(account_urls, username);
  tryToAddExistingSocialAccount(account_urls, username);
  verifySocialAccountExists(account_urls, username);
  deleteSocialAccount(account_urls, username);
  tryToDeleteANonExistingSocialAccount(account_urls, username);
  verifySocialAccountDoesNotExist(account_urls, username);
});

// Story: crud:SocialAccount:nondet:1:2
bthread("crud:SocialAccount:nondet:1:2", function () {
  let account_urls = "account_urls_1981";
  let username = 1981;
  addSocialAccount(account_urls, username);
  // waitForSocialAccountAdded(account_urls, username);
  tryToAddExistingSocialAccount(account_urls, username);
  verifySocialAccountExists(account_urls, username);
  deleteSocialAccount(account_urls, username);
  tryToDeleteANonExistingSocialAccount(account_urls, username);
  verifySocialAccountDoesNotExist(account_urls, username);
});

// Story: crud:SocialAccount:nondet:negative:dup-add
bthread("crud:SocialAccount:nondet:negative:dup-add", function () {
  let account_urls = "account_urls_1986";
  let username = 1986;
  addSocialAccount(account_urls, username);
  // waitForSocialAccountAdded(account_urls, username);
  verifySocialAccountExists(account_urls, username);
  tryToAddExistingSocialAccount(account_urls, username);
  verifySocialAccountExists(account_urls, username);
});

// Story: crud:SSHSigningKey:nondet:1:1
bthread("crud:SSHSigningKey:nondet:1:1", function () {
  let key = "key_1990";
  let ssh_signing_key_id = 1990;
  let title = "title_1990";
  createSSHSigningKey(key, ssh_signing_key_id, title);
  waitForSSHSigningKeyAdded(key, ssh_signing_key_id, title);
  tryToAddExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
  deleteSSHSigningKey(key, ssh_signing_key_id, title);
  tryToDeleteANonExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyDoesNotExist(key, ssh_signing_key_id, title);
});

// Story: crud:SSHSigningKey:nondet:1:2
bthread("crud:SSHSigningKey:nondet:1:2", function () {
  let key = "key_1991";
  let ssh_signing_key_id = 1991;
  let title = "title_1991";
  createSSHSigningKey(key, ssh_signing_key_id, title);
  // waitForSSHSigningKeyAdded(key, ssh_signing_key_id, title);
  tryToAddExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
  deleteSSHSigningKey(key, ssh_signing_key_id, title);
  tryToDeleteANonExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyDoesNotExist(key, ssh_signing_key_id, title);
});

// Story: crud:SSHSigningKey:nondet:negative:dup-add
bthread("crud:SSHSigningKey:nondet:negative:dup-add", function () {
  let key = "key_1996";
  let ssh_signing_key_id = 1996;
  let title = "title_1996";
  createSSHSigningKey(key, ssh_signing_key_id, title);
  // waitForSSHSigningKeyAdded(key, ssh_signing_key_id, title);
  verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
  tryToAddExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
});

// Story: crud:Follower:read_only
bthread("crud:Follower:read_only", function () {
  let page = "page_2010";
  let per_page = "per_page_2010";
  let username = 2010;
  verifyFollowerExists(page, per_page, username);
});

// Story: crud:GpgKey:read_only
bthread("crud:GpgKey:read_only", function () {
  let page = "page_2030";
  let per_page = "per_page_2030";
  let username = 2030;
  verifyGpgKeyExists(page, per_page, username);
});

// Story: crud:Hovercard:read_only
bthread("crud:Hovercard:read_only", function () {
  let subject_id = 2040;
  let subject_type = "subject_type_2040";
  let username = 2040;
  verifyHovercardExists(subject_id, subject_type, username);
});

// Story: crud:PublicKey:read_only
bthread("crud:PublicKey:read_only", function () {
  let page = "page_2050";
  let per_page = "per_page_2050";
  let username = 2050;
  verifyPublicKeyExists(page, per_page, username);
});

// Story: crud:SshSigningKey:read_only
bthread("crud:SshSigningKey:read_only", function () {
  let username = 2060;
  verifySshSigningKeyExists(username);
});

// Story: crud:App:read_only
bthread("crud:App:read_only", function () {
  let app_slug = 2070;
  verifyAppExists(app_slug);
});

// Story: crud:AppWebhookConfig:read_only
bthread("crud:AppWebhookConfig:read_only", function () {

  verifyAppWebhookConfigExists();
});

// Story: crud:AppWebhookDelivery:read_only
bthread("crud:AppWebhookDelivery:read_only", function () {
  let delivery_id = 2100;
  verifyAppWebhookDeliveryExists(delivery_id);
});

// Story: crud:AppWebhookDeliveries:read_only
bthread("crud:AppWebhookDeliveries:read_only", function () {

  verifyAppWebhookDeliveriesExists();
});

// Story: crud:AppInstallationRequest:read_only
bthread("crud:AppInstallationRequest:read_only", function () {

  verifyAppInstallationRequestExists();
});

// Story: crud:AppInstallation:read_only
bthread("crud:AppInstallation:read_only", function () {
  let installation_id = 2130;
  verifyAppInstallationExists(installation_id);
});

// Story: crud:AppToken:nondet:1:1
bthread("crud:AppToken:nondet:1:1", function () {
  let access_token = "access_token_2160";
  let client_id = 2160;
  checkAppToken(access_token, client_id);
  waitForAppTokenAdded(access_token, client_id);
  tryToAddExistingAppToken(access_token, client_id);
  verifyAppTokenExists(access_token, client_id);
  resetAppToken(access_token, client_id);
  deleteAppToken(access_token, client_id);
  tryToDeleteANonExistingAppToken(access_token, client_id);
  verifyAppTokenDoesNotExist(access_token, client_id);
});

// Story: crud:AppToken:nondet:1:2
bthread("crud:AppToken:nondet:1:2", function () {
  let access_token = "access_token_2161";
  let client_id = 2161;
  checkAppToken(access_token, client_id);
  // waitForAppTokenAdded(access_token, client_id);
  tryToAddExistingAppToken(access_token, client_id);
  resetAppToken(access_token, client_id);
  verifyAppTokenExists(access_token, client_id);
  deleteAppToken(access_token, client_id);
  tryToDeleteANonExistingAppToken(access_token, client_id);
  verifyAppTokenDoesNotExist(access_token, client_id);
});

// Story: crud:AppToken:nondet:negative:dup-add
bthread("crud:AppToken:nondet:negative:dup-add", function () {
  let access_token = "access_token_2166";
  let client_id = 2166;
  checkAppToken(access_token, client_id);
  // waitForAppTokenAdded(access_token, client_id);
  verifyAppTokenExists(access_token, client_id);
  tryToAddExistingAppToken(access_token, client_id);
  verifyAppTokenExists(access_token, client_id);
});

// Story: crud:InstallationRepositories:read_only
bthread("crud:InstallationRepositories:read_only", function () {

  verifyInstallationRepositoriesExists();
});

// Story: crud:MarketplaceSubscription:read_only
bthread("crud:MarketplaceSubscription:read_only", function () {
  let account_id = 2200;
  verifyMarketplaceSubscriptionExists(account_id);
});

// Story: crud:MarketplacePlan:read_only
bthread("crud:MarketplacePlan:read_only", function () {
  let direction = "direction_2210";
  let page = "page_2210";
  let per-page = "per-page_2210";
  let plan_id = 2210;
  let sort = "sort_2210";
  verifyMarketplacePlanExists(direction, page, per-page, plan_id, sort);
});

// Story: crud:MarketplaceListingAccount:read_only
bthread("crud:MarketplaceListingAccount:read_only", function () {
  let account_id = 2220;
  verifyMarketplaceListingAccountExists(account_id);
});

// Story: crud:RepoInstallation:read_only
bthread("crud:RepoInstallation:read_only", function () {
  let owner = 2240;
  let repo = "repo_2240";
  verifyRepoInstallationExists(owner, repo);
});

// Story: crud:UserInstallation:read_only
bthread("crud:UserInstallation:read_only", function () {
  let installation_id = 2250;
  let repository_id;
  let username = "username_2250";
  verifyUserInstallationExists(installation_id, repository_id, username);
});

// Story: crud:Issue:read_only
bthread("crud:Issue:read_only", function () {
  let assignee = "assignee_2270";
  let assignees = "assignees_2270";
  let body = "body_2270";
  let issue_number = "issue_number_2270";
  let labels = "labels_2270";
  let milestone = "milestone_2270";
  let owner = 2270;
  let repo = "repo_2270";
  let title = "title_2270";
  let type = "type_2270";
  verifyIssueExists(assignee, assignees, body, issue_number, labels, milestone, owner, repo, title, type);
});

// Story: crud:IssueComment:read_only
bthread("crud:IssueComment:read_only", function () {
  let comment_id = 2280;
  let owner = 2280;
  let repo = "repo_2280";
  verifyIssueCommentExists(comment_id, owner, repo);
});

// Story: crud:IssueEvent:read_only
bthread("crud:IssueEvent:read_only", function () {
  let event_id = 2290;
  let owner = 2290;
  let repo = "repo_2290";
  verifyIssueEventExists(event_id, owner, repo);
});

// Story: crud:Assignee:read_only
bthread("crud:Assignee:read_only", function () {
  let assignee = "assignee_2300";
  let owner = 2300;
  let repo = "repo_2300";
  verifyAssigneeExists(assignee, owner, repo);
});

// Story: crud:IssueAssignees:nondet:1:1
bthread("crud:IssueAssignees:nondet:1:1", function () {
  let assignee = "assignee_2310";
  let assignees = "assignees_2310";
  let issue_number = "issue_number_2310";
  let owner = 2310;
  let repo = "repo_2310";
  addAssigneesToIssue(assignee, assignees, issue_number, owner, repo);
  waitForIssueAssigneesAdded(assignee, assignees, issue_number, owner, repo);
  tryToAddExistingIssueAssignees(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo);
  removeAssigneesFromIssue(assignee, assignees, issue_number, owner, repo);
  tryToDeleteANonExistingIssueAssignees(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesDoesNotExist(assignee, assignees, issue_number, owner, repo);
});

// Story: crud:IssueAssignees:nondet:1:2
bthread("crud:IssueAssignees:nondet:1:2", function () {
  let assignee = "assignee_2311";
  let assignees = "assignees_2311";
  let issue_number = "issue_number_2311";
  let owner = 2311;
  let repo = "repo_2311";
  addAssigneesToIssue(assignee, assignees, issue_number, owner, repo);
  // waitForIssueAssigneesAdded(assignee, assignees, issue_number, owner, repo);
  tryToAddExistingIssueAssignees(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo);
  removeAssigneesFromIssue(assignee, assignees, issue_number, owner, repo);
  tryToDeleteANonExistingIssueAssignees(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesDoesNotExist(assignee, assignees, issue_number, owner, repo);
});

// Story: crud:IssueAssignees:nondet:negative:dup-add
bthread("crud:IssueAssignees:nondet:negative:dup-add", function () {
  let assignee = "assignee_2316";
  let assignees = "assignees_2316";
  let issue_number = "issue_number_2316";
  let owner = 2316;
  let repo = "repo_2316";
  addAssigneesToIssue(assignee, assignees, issue_number, owner, repo);
  // waitForIssueAssigneesAdded(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo);
  tryToAddExistingIssueAssignees(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo);
});

// Story: crud:IssueComments:read_only
bthread("crud:IssueComments:read_only", function () {
  let body = "body_2320";
  let issue_number = "issue_number_2320";
  let owner = 2320;
  let repo = "repo_2320";
  verifyIssueCommentsExists(body, issue_number, owner, repo);
});

// Story: crud:IssueDependenciesBlockedBy:nondet:1:1
bthread("crud:IssueDependenciesBlockedBy:nondet:1:1", function () {
  let issue_id;
  let issue_number = "issue_number_2330";
  let owner = 2330;
  let repo = "repo_2330";
  // Dependency Barrier
  let deps = {};
  deps["issue_id"] = matchAnyIssueAdded();
  let pkMap = {"issue_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  issue_id = captured["issue_id"];
  addBlockedByDependency(issue_id, issue_number, owner, repo);
  waitForIssueDependenciesBlockedByAdded(issue_id, issue_number, owner, repo);
  tryToAddExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
  removeBlockedByDependency(issue_id, issue_number, owner, repo);
  tryToDeleteANonExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByDoesNotExist(issue_id, issue_number, owner, repo);
});

// Story: crud:IssueDependenciesBlockedBy:nondet:1:2
bthread("crud:IssueDependenciesBlockedBy:nondet:1:2", function () {
  let issue_id;
  let issue_number = "issue_number_2331";
  let owner = 2331;
  let repo = "repo_2331";
  // Dependency Barrier
  let deps = {};
  deps["issue_id"] = matchAnyIssueAdded();
  let pkMap = {"issue_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  issue_id = captured["issue_id"];
  addBlockedByDependency(issue_id, issue_number, owner, repo);
  // waitForIssueDependenciesBlockedByAdded(issue_id, issue_number, owner, repo);
  tryToAddExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
  removeBlockedByDependency(issue_id, issue_number, owner, repo);
  tryToDeleteANonExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByDoesNotExist(issue_id, issue_number, owner, repo);
});

// Story: crud:IssueDependenciesBlockedBy:nondet:negative:dup-add
bthread("crud:IssueDependenciesBlockedBy:nondet:negative:dup-add", function () {
  let issue_id;
  let issue_number = "issue_number_2336";
  let owner = 2336;
  let repo = "repo_2336";
  // Dependency Barrier
  let deps = {};
  deps["issue_id"] = matchAnyIssueAdded();
  let pkMap = {"issue_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  issue_id = captured["issue_id"];
  addBlockedByDependency(issue_id, issue_number, owner, repo);
  // waitForIssueDependenciesBlockedByAdded(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
  tryToAddExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
});

// Story: crud:IssueDependenciesBlocking:read_only
bthread("crud:IssueDependenciesBlocking:read_only", function () {
  let issue_number = "issue_number_2340";
  let owner = 2340;
  let repo = "repo_2340";
  verifyIssueDependenciesBlockingExists(issue_number, owner, repo);
});

// Story: crud:IssueEvents:read_only
bthread("crud:IssueEvents:read_only", function () {
  let issue_number = "issue_number_2350";
  let owner = 2350;
  let repo = "repo_2350";
  verifyIssueEventsExists(issue_number, owner, repo);
});

// Story: crud:IssueLabels:nondet:1:1
bthread("crud:IssueLabels:nondet:1:1", function () {
  let issue_number = "issue_number_2360";
  let labels = "labels_2360";
  let owner = 2360;
  let repo = "repo_2360";
  addLabelsToIssue(issue_number, labels, owner, repo);
  waitForIssueLabelsAdded(issue_number, labels, owner, repo);
  tryToAddExistingIssueLabels(issue_number, labels, owner, repo);
  verifyIssueLabelsExists(issue_number, labels, owner, repo);
  setLabelsForIssue(issue_number, labels, owner, repo);
  removeAllLabelsFromIssue(issue_number, labels, owner, repo);
  tryToDeleteANonExistingIssueLabels(issue_number, labels, owner, repo);
  verifyIssueLabelsDoesNotExist(issue_number, labels, owner, repo);
});

// Story: crud:IssueLabels:nondet:1:2
bthread("crud:IssueLabels:nondet:1:2", function () {
  let issue_number = "issue_number_2361";
  let labels = "labels_2361";
  let owner = 2361;
  let repo = "repo_2361";
  addLabelsToIssue(issue_number, labels, owner, repo);
  // waitForIssueLabelsAdded(issue_number, labels, owner, repo);
  tryToAddExistingIssueLabels(issue_number, labels, owner, repo);
  setLabelsForIssue(issue_number, labels, owner, repo);
  verifyIssueLabelsExists(issue_number, labels, owner, repo);
  removeAllLabelsFromIssue(issue_number, labels, owner, repo);
  tryToDeleteANonExistingIssueLabels(issue_number, labels, owner, repo);
  verifyIssueLabelsDoesNotExist(issue_number, labels, owner, repo);
});

// Story: crud:IssueLabels:nondet:negative:dup-add
bthread("crud:IssueLabels:nondet:negative:dup-add", function () {
  let issue_number = "issue_number_2366";
  let labels = "labels_2366";
  let owner = 2366;
  let repo = "repo_2366";
  addLabelsToIssue(issue_number, labels, owner, repo);
  // waitForIssueLabelsAdded(issue_number, labels, owner, repo);
  verifyIssueLabelsExists(issue_number, labels, owner, repo);
  tryToAddExistingIssueLabels(issue_number, labels, owner, repo);
  verifyIssueLabelsExists(issue_number, labels, owner, repo);
});

// Story: crud:SubIssue:nondet:1:1
bthread("crud:SubIssue:nondet:1:1", function () {
  let after_id = 2390;
  let before_id = 2390;
  let issue_number = "issue_number_2390";
  let owner = 2390;
  let page = "page_2390";
  let per_page = "per_page_2390";
  let replace_parent = "replace_parent_2390";
  let repo = "repo_2390";
  let sub_issue_id;
  // Dependency Barrier
  let deps = {};
  deps["sub_issue_id"] = matchAnyIssueAdded();
  let pkMap = {"sub_issue_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  sub_issue_id = captured["sub_issue_id"];
  addSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  waitForSubIssueAdded(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  tryToAddExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  reprioritizeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  removeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  tryToDeleteANonExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueDoesNotExist(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
});

// Story: crud:SubIssue:nondet:1:2
bthread("crud:SubIssue:nondet:1:2", function () {
  let after_id = 2391;
  let before_id = 2391;
  let issue_number = "issue_number_2391";
  let owner = 2391;
  let page = "page_2391";
  let per_page = "per_page_2391";
  let replace_parent = "replace_parent_2391";
  let repo = "repo_2391";
  let sub_issue_id;
  // Dependency Barrier
  let deps = {};
  deps["sub_issue_id"] = matchAnyIssueAdded();
  let pkMap = {"sub_issue_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  sub_issue_id = captured["sub_issue_id"];
  addSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  // waitForSubIssueAdded(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  tryToAddExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  reprioritizeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  removeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  tryToDeleteANonExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueDoesNotExist(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
});

// Story: crud:SubIssue:nondet:negative:dup-add
bthread("crud:SubIssue:nondet:negative:dup-add", function () {
  let after_id = 2396;
  let before_id = 2396;
  let issue_number = "issue_number_2396";
  let owner = 2396;
  let page = "page_2396";
  let per_page = "per_page_2396";
  let replace_parent = "replace_parent_2396";
  let repo = "repo_2396";
  let sub_issue_id;
  // Dependency Barrier
  let deps = {};
  deps["sub_issue_id"] = matchAnyIssueAdded();
  let pkMap = {"sub_issue_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  sub_issue_id = captured["sub_issue_id"];
  addSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  // waitForSubIssueAdded(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  tryToAddExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let color = "color_2400";
  let description = "description_2400";
  let name = "name_2400";
  let new_name = "new_name_2400";
  let owner = 2400;
  let page = "page_2400";
  let per_page = "per_page_2400";
  let repo = "repo_2400";
  createLabel(color, description, name, new_name, owner, page, per_page, repo);
  waitForLabelAdded(color, description, name, new_name, owner, page, per_page, repo);
  tryToAddExistingLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo);
  updateLabel(color, description, name, new_name, owner, page, per_page, repo);
  deleteLabel(color, description, name, new_name, owner, page, per_page, repo);
  tryToDeleteANonExistingLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelDoesNotExist(color, description, name, new_name, owner, page, per_page, repo);
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let color = "color_2401";
  let description = "description_2401";
  let name = "name_2401";
  let new_name = "new_name_2401";
  let owner = 2401;
  let page = "page_2401";
  let per_page = "per_page_2401";
  let repo = "repo_2401";
  createLabel(color, description, name, new_name, owner, page, per_page, repo);
  // waitForLabelAdded(color, description, name, new_name, owner, page, per_page, repo);
  tryToAddExistingLabel(color, description, name, new_name, owner, page, per_page, repo);
  updateLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo);
  deleteLabel(color, description, name, new_name, owner, page, per_page, repo);
  tryToDeleteANonExistingLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelDoesNotExist(color, description, name, new_name, owner, page, per_page, repo);
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let color = "color_2406";
  let description = "description_2406";
  let name = "name_2406";
  let new_name = "new_name_2406";
  let owner = 2406;
  let page = "page_2406";
  let per_page = "per_page_2406";
  let repo = "repo_2406";
  createLabel(color, description, name, new_name, owner, page, per_page, repo);
  // waitForLabelAdded(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo);
  tryToAddExistingLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo);
});

// Story: crud:Milestone:nondet:1:1
bthread("crud:Milestone:nondet:1:1", function () {
  let description = "description_2410";
  let direction = "direction_2410";
  let due_on = "due_on_2410";
  let milestone_number = "milestone_number_2410";
  let owner = 2410;
  let page = "page_2410";
  let per_page = "per_page_2410";
  let repo = "repo_2410";
  let sort = "sort_2410";
  let state = "state_2410";
  let title = "title_2410";
  createMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  waitForMilestoneAdded(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  tryToAddExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  updateMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  deleteMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  tryToDeleteANonExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneDoesNotExist(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
});

// Story: crud:Milestone:nondet:1:2
bthread("crud:Milestone:nondet:1:2", function () {
  let description = "description_2411";
  let direction = "direction_2411";
  let due_on = "due_on_2411";
  let milestone_number = "milestone_number_2411";
  let owner = 2411;
  let page = "page_2411";
  let per_page = "per_page_2411";
  let repo = "repo_2411";
  let sort = "sort_2411";
  let state = "state_2411";
  let title = "title_2411";
  createMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  // waitForMilestoneAdded(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  tryToAddExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  updateMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  deleteMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  tryToDeleteANonExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneDoesNotExist(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
});

// Story: crud:Milestone:nondet:negative:dup-add
bthread("crud:Milestone:nondet:negative:dup-add", function () {
  let description = "description_2416";
  let direction = "direction_2416";
  let due_on = "due_on_2416";
  let milestone_number = "milestone_number_2416";
  let owner = 2416;
  let page = "page_2416";
  let per_page = "per_page_2416";
  let repo = "repo_2416";
  let sort = "sort_2416";
  let state = "state_2416";
  let title = "title_2416";
  createMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  // waitForMilestoneAdded(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  tryToAddExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
});

// Story: crud:Team:nondet:1:1
bthread("crud:Team:nondet:1:1", function () {
  let description = "description_2420";
  let maintainers = "maintainers_2420";
  let name = "name_2420";
  let notification_setting = "notification_setting_2420";
  let org = 2420;
  let parent_team_id = 2420;
  let permission = "permission_2420";
  let privacy = "privacy_2420";
  let repo_names = "repo_names_2420";
  let team_id = 2420;
  let team_slug = "team_slug_2420";
  createTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  waitForTeamAdded(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  tryToAddExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  updateTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  deleteTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  tryToDeleteANonExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  verifyTeamDoesNotExist(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
});

// Story: crud:Team:nondet:1:2
bthread("crud:Team:nondet:1:2", function () {
  let description = "description_2421";
  let maintainers = "maintainers_2421";
  let name = "name_2421";
  let notification_setting = "notification_setting_2421";
  let org = 2421;
  let parent_team_id = 2421;
  let permission = "permission_2421";
  let privacy = "privacy_2421";
  let repo_names = "repo_names_2421";
  let team_id = 2421;
  let team_slug = "team_slug_2421";
  createTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  // waitForTeamAdded(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  tryToAddExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  updateTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  deleteTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  tryToDeleteANonExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  verifyTeamDoesNotExist(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
});

// Story: crud:Team:nondet:negative:dup-add
bthread("crud:Team:nondet:negative:dup-add", function () {
  let description = "description_2426";
  let maintainers = "maintainers_2426";
  let name = "name_2426";
  let notification_setting = "notification_setting_2426";
  let org = 2426;
  let parent_team_id = 2426;
  let permission = "permission_2426";
  let privacy = "privacy_2426";
  let repo_names = "repo_names_2426";
  let team_id = 2426;
  let team_slug = "team_slug_2426";
  createTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  // waitForTeamAdded(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  tryToAddExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
  verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
});

// Story: crud:Discussion:nondet:1:1
bthread("crud:Discussion:nondet:1:1", function () {
  let body = "body_2430";
  let discussion_number = "discussion_number_2430";
  let org = 2430;
  let _private = "private_2430";
  let team_slug = "team_slug_2430";
  let title = "title_2430";
  createDiscussion(body, discussion_number, org, _private, team_slug, title);
  waitForDiscussionAdded(body, discussion_number, org, _private, team_slug, title);
  tryToAddExistingDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title);
  updateDiscussion(body, discussion_number, org, _private, team_slug, title);
  deleteDiscussion(body, discussion_number, org, _private, team_slug, title);
  tryToDeleteANonExistingDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionDoesNotExist(body, discussion_number, org, _private, team_slug, title);
});

// Story: crud:Discussion:nondet:1:2
bthread("crud:Discussion:nondet:1:2", function () {
  let body = "body_2431";
  let discussion_number = "discussion_number_2431";
  let org = 2431;
  let _private = "private_2431";
  let team_slug = "team_slug_2431";
  let title = "title_2431";
  createDiscussion(body, discussion_number, org, _private, team_slug, title);
  // waitForDiscussionAdded(body, discussion_number, org, _private, team_slug, title);
  tryToAddExistingDiscussion(body, discussion_number, org, _private, team_slug, title);
  updateDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title);
  deleteDiscussion(body, discussion_number, org, _private, team_slug, title);
  tryToDeleteANonExistingDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionDoesNotExist(body, discussion_number, org, _private, team_slug, title);
});

// Story: crud:Discussion:nondet:negative:dup-add
bthread("crud:Discussion:nondet:negative:dup-add", function () {
  let body = "body_2436";
  let discussion_number = "discussion_number_2436";
  let org = 2436;
  let _private = "private_2436";
  let team_slug = "team_slug_2436";
  let title = "title_2436";
  createDiscussion(body, discussion_number, org, _private, team_slug, title);
  // waitForDiscussionAdded(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title);
  tryToAddExistingDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title);
});

// Story: crud:DiscussionComment:nondet:1:1
bthread("crud:DiscussionComment:nondet:1:1", function () {
  let body = "body_2440";
  let comment_number = "comment_number_2440";
  let discussion_number = "discussion_number_2440";
  let org = 2440;
  let team_slug = "team_slug_2440";
  createDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  waitForDiscussionCommentAdded(body, comment_number, discussion_number, org, team_slug);
  tryToAddExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug);
  updateDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  deleteDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  tryToDeleteANonExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentDoesNotExist(body, comment_number, discussion_number, org, team_slug);
});

// Story: crud:DiscussionComment:nondet:1:2
bthread("crud:DiscussionComment:nondet:1:2", function () {
  let body = "body_2441";
  let comment_number = "comment_number_2441";
  let discussion_number = "discussion_number_2441";
  let org = 2441;
  let team_slug = "team_slug_2441";
  createDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  // waitForDiscussionCommentAdded(body, comment_number, discussion_number, org, team_slug);
  tryToAddExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  updateDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug);
  deleteDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  tryToDeleteANonExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentDoesNotExist(body, comment_number, discussion_number, org, team_slug);
});

// Story: crud:DiscussionComment:nondet:negative:dup-add
bthread("crud:DiscussionComment:nondet:negative:dup-add", function () {
  let body = "body_2446";
  let comment_number = "comment_number_2446";
  let discussion_number = "discussion_number_2446";
  let org = 2446;
  let team_slug = "team_slug_2446";
  createDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  // waitForDiscussionCommentAdded(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug);
  tryToAddExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug);
});

// Story: crud:TeamProject:nondet:1:1
bthread("crud:TeamProject:nondet:1:1", function () {
  let org = "org_2450";
  let permission = "permission_2450";
  let project_id;
  let team_id;
  let team_slug = "team_slug_2450";
  // Dependency Barrier
  let deps = {};
  deps["project_id"] = matchAnyProjectAdded();
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"project_id": "project_id", "team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  project_id = captured["project_id"];
  team_id = captured["team_id"];
  addOrUpdateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  waitForTeamProjectAdded(org, permission, project_id, team_id, team_slug);
  tryToAddExistingTeamProject(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectExists(org, permission, project_id, team_id, team_slug);
  updateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  removeTeamProject(org, permission, project_id, team_id, team_slug);
  tryToDeleteANonExistingTeamProject(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectDoesNotExist(org, permission, project_id, team_id, team_slug);
});

// Story: crud:TeamProject:nondet:1:2
bthread("crud:TeamProject:nondet:1:2", function () {
  let org = "org_2451";
  let permission = "permission_2451";
  let project_id;
  let team_id;
  let team_slug = "team_slug_2451";
  // Dependency Barrier
  let deps = {};
  deps["project_id"] = matchAnyProjectAdded();
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"project_id": "project_id", "team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  project_id = captured["project_id"];
  team_id = captured["team_id"];
  addOrUpdateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  // waitForTeamProjectAdded(org, permission, project_id, team_id, team_slug);
  tryToAddExistingTeamProject(org, permission, project_id, team_id, team_slug);
  updateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectExists(org, permission, project_id, team_id, team_slug);
  removeTeamProject(org, permission, project_id, team_id, team_slug);
  tryToDeleteANonExistingTeamProject(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectDoesNotExist(org, permission, project_id, team_id, team_slug);
});

// Story: crud:TeamProject:nondet:negative:dup-add
bthread("crud:TeamProject:nondet:negative:dup-add", function () {
  let org = "org_2456";
  let permission = "permission_2456";
  let project_id;
  let team_id;
  let team_slug = "team_slug_2456";
  // Dependency Barrier
  let deps = {};
  deps["project_id"] = matchAnyProjectAdded();
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"project_id": "project_id", "team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  project_id = captured["project_id"];
  team_id = captured["team_id"];
  addOrUpdateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  // waitForTeamProjectAdded(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectExists(org, permission, project_id, team_id, team_slug);
  tryToAddExistingTeamProject(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectExists(org, permission, project_id, team_id, team_slug);
});

// Story: crud:TeamRepo:read_only
bthread("crud:TeamRepo:read_only", function () {
  let org = 2460;
  let owner = "owner_2460";
  let permission = "permission_2460";
  let repo = "repo_2460";
  let team_slug = "team_slug_2460";
  verifyTeamRepoExists(org, owner, permission, repo, team_slug);
});

// Story: crud:TeamDiscussion:nondet:1:1
bthread("crud:TeamDiscussion:nondet:1:1", function () {
  let body = "body_2470";
  let discussion_number = "discussion_number_2470";
  let _private = "private_2470";
  let team_id;
  let title = "title_2470";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  waitForTeamDiscussionAdded(body, discussion_number, _private, team_id, title);
  tryToAddExistingTeamDiscussion(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title);
  updateTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  deleteTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  tryToDeleteANonExistingTeamDiscussion(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionDoesNotExist(body, discussion_number, _private, team_id, title);
});

// Story: crud:TeamDiscussion:nondet:1:2
bthread("crud:TeamDiscussion:nondet:1:2", function () {
  let body = "body_2471";
  let discussion_number = "discussion_number_2471";
  let _private = "private_2471";
  let team_id;
  let title = "title_2471";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  // waitForTeamDiscussionAdded(body, discussion_number, _private, team_id, title);
  tryToAddExistingTeamDiscussion(body, discussion_number, _private, team_id, title);
  updateTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title);
  deleteTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  tryToDeleteANonExistingTeamDiscussion(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionDoesNotExist(body, discussion_number, _private, team_id, title);
});

// Story: crud:TeamDiscussion:nondet:negative:dup-add
bthread("crud:TeamDiscussion:nondet:negative:dup-add", function () {
  let body = "body_2476";
  let discussion_number = "discussion_number_2476";
  let _private = "private_2476";
  let team_id;
  let title = "title_2476";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  // waitForTeamDiscussionAdded(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title);
  tryToAddExistingTeamDiscussion(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title);
});

// Story: crud:TeamDiscussionComment:nondet:1:1
bthread("crud:TeamDiscussionComment:nondet:1:1", function () {
  let body = "body_2480";
  let comment_number = "comment_number_2480";
  let discussion_number = "discussion_number_2480";
  let team_id;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  waitForTeamDiscussionCommentAdded(body, comment_number, discussion_number, team_id);
  tryToAddExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id);
  updateTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  deleteTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  tryToDeleteANonExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentDoesNotExist(body, comment_number, discussion_number, team_id);
});

// Story: crud:TeamDiscussionComment:nondet:1:2
bthread("crud:TeamDiscussionComment:nondet:1:2", function () {
  let body = "body_2481";
  let comment_number = "comment_number_2481";
  let discussion_number = "discussion_number_2481";
  let team_id;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  // waitForTeamDiscussionCommentAdded(body, comment_number, discussion_number, team_id);
  tryToAddExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id);
  updateTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id);
  deleteTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  tryToDeleteANonExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentDoesNotExist(body, comment_number, discussion_number, team_id);
});

// Story: crud:TeamDiscussionComment:nondet:negative:dup-add
bthread("crud:TeamDiscussionComment:nondet:negative:dup-add", function () {
  let body = "body_2486";
  let comment_number = "comment_number_2486";
  let discussion_number = "discussion_number_2486";
  let team_id;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  // waitForTeamDiscussionCommentAdded(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id);
  tryToAddExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id);
});

// Story: crud:TeamMember:nondet:1:1
bthread("crud:TeamMember:nondet:1:1", function () {
  let team_id;
  let username = "username_2490";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addTeamMember(team_id, username);
  waitForTeamMemberAdded(team_id, username);
  tryToAddExistingTeamMember(team_id, username);
  verifyTeamMemberExists(team_id, username);
  removeTeamMember(team_id, username);
  tryToDeleteANonExistingTeamMember(team_id, username);
  verifyTeamMemberDoesNotExist(team_id, username);
});

// Story: crud:TeamMember:nondet:1:2
bthread("crud:TeamMember:nondet:1:2", function () {
  let team_id;
  let username = "username_2491";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addTeamMember(team_id, username);
  // waitForTeamMemberAdded(team_id, username);
  tryToAddExistingTeamMember(team_id, username);
  verifyTeamMemberExists(team_id, username);
  removeTeamMember(team_id, username);
  tryToDeleteANonExistingTeamMember(team_id, username);
  verifyTeamMemberDoesNotExist(team_id, username);
});

// Story: crud:TeamMember:nondet:negative:dup-add
bthread("crud:TeamMember:nondet:negative:dup-add", function () {
  let team_id;
  let username = "username_2496";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addTeamMember(team_id, username);
  // waitForTeamMemberAdded(team_id, username);
  verifyTeamMemberExists(team_id, username);
  tryToAddExistingTeamMember(team_id, username);
  verifyTeamMemberExists(team_id, username);
});

// Story: crud:TeamMembership:nondet:1:1
bthread("crud:TeamMembership:nondet:1:1", function () {
  let role = "role_2500";
  let team_id;
  let username = "username_2500";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addOrUpdateTeamMembership(role, team_id, username);
  waitForTeamMembershipAdded(role, team_id, username);
  tryToAddExistingTeamMembership(role, team_id, username);
  verifyTeamMembershipExists(role, team_id, username);
  removeTeamMembership(role, team_id, username);
  tryToDeleteANonExistingTeamMembership(role, team_id, username);
  verifyTeamMembershipDoesNotExist(role, team_id, username);
});

// Story: crud:TeamMembership:nondet:1:2
bthread("crud:TeamMembership:nondet:1:2", function () {
  let role = "role_2501";
  let team_id;
  let username = "username_2501";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addOrUpdateTeamMembership(role, team_id, username);
  // waitForTeamMembershipAdded(role, team_id, username);
  tryToAddExistingTeamMembership(role, team_id, username);
  verifyTeamMembershipExists(role, team_id, username);
  removeTeamMembership(role, team_id, username);
  tryToDeleteANonExistingTeamMembership(role, team_id, username);
  verifyTeamMembershipDoesNotExist(role, team_id, username);
});

// Story: crud:TeamMembership:nondet:negative:dup-add
bthread("crud:TeamMembership:nondet:negative:dup-add", function () {
  let role = "role_2506";
  let team_id;
  let username = "username_2506";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addOrUpdateTeamMembership(role, team_id, username);
  // waitForTeamMembershipAdded(role, team_id, username);
  verifyTeamMembershipExists(role, team_id, username);
  tryToAddExistingTeamMembership(role, team_id, username);
  verifyTeamMembershipExists(role, team_id, username);
});

// Story: crud:TeamRepository:nondet:1:1
bthread("crud:TeamRepository:nondet:1:1", function () {
  let owner = "owner_2510";
  let permission = "permission_2510";
  let repo = "repo_2510";
  let team_id;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addOrUpdateTeamRepoPermissions(owner, permission, repo, team_id);
  waitForTeamRepositoryAdded(owner, permission, repo, team_id);
  tryToAddExistingTeamRepository(owner, permission, repo, team_id);
  verifyTeamRepositoryExists(owner, permission, repo, team_id);
  removeTeamRepo(owner, permission, repo, team_id);
  tryToDeleteANonExistingTeamRepository(owner, permission, repo, team_id);
  verifyTeamRepositoryDoesNotExist(owner, permission, repo, team_id);
});

// Story: crud:TeamRepository:nondet:1:2
bthread("crud:TeamRepository:nondet:1:2", function () {
  let owner = "owner_2511";
  let permission = "permission_2511";
  let repo = "repo_2511";
  let team_id;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addOrUpdateTeamRepoPermissions(owner, permission, repo, team_id);
  // waitForTeamRepositoryAdded(owner, permission, repo, team_id);
  tryToAddExistingTeamRepository(owner, permission, repo, team_id);
  verifyTeamRepositoryExists(owner, permission, repo, team_id);
  removeTeamRepo(owner, permission, repo, team_id);
  tryToDeleteANonExistingTeamRepository(owner, permission, repo, team_id);
  verifyTeamRepositoryDoesNotExist(owner, permission, repo, team_id);
});

// Story: crud:TeamRepository:nondet:negative:dup-add
bthread("crud:TeamRepository:nondet:negative:dup-add", function () {
  let owner = "owner_2516";
  let permission = "permission_2516";
  let repo = "repo_2516";
  let team_id;
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  addOrUpdateTeamRepoPermissions(owner, permission, repo, team_id);
  // waitForTeamRepositoryAdded(owner, permission, repo, team_id);
  verifyTeamRepositoryExists(owner, permission, repo, team_id);
  tryToAddExistingTeamRepository(owner, permission, repo, team_id);
  verifyTeamRepositoryExists(owner, permission, repo, team_id);
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let thread_id = 2520;
  verifyNotificationExists(thread_id);
});

// Story: crud:ThreadSubscription:nondet:1:1
bthread("crud:ThreadSubscription:nondet:1:1", function () {
  let ignored = "ignored_2530";
  let thread_id = 2530;
  setThreadSubscription(ignored, thread_id);
  waitForThreadSubscriptionAdded(ignored, thread_id);
  tryToAddExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
  deleteThreadSubscription(ignored, thread_id);
  tryToDeleteANonExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionDoesNotExist(ignored, thread_id);
});

// Story: crud:ThreadSubscription:nondet:1:2
bthread("crud:ThreadSubscription:nondet:1:2", function () {
  let ignored = "ignored_2531";
  let thread_id = 2531;
  setThreadSubscription(ignored, thread_id);
  // waitForThreadSubscriptionAdded(ignored, thread_id);
  tryToAddExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
  deleteThreadSubscription(ignored, thread_id);
  tryToDeleteANonExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionDoesNotExist(ignored, thread_id);
});

// Story: crud:ThreadSubscription:nondet:negative:dup-add
bthread("crud:ThreadSubscription:nondet:negative:dup-add", function () {
  let ignored = "ignored_2536";
  let thread_id = 2536;
  setThreadSubscription(ignored, thread_id);
  // waitForThreadSubscriptionAdded(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
  tryToAddExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
});

// Story: crud:RepoSubscription:nondet:1:1
bthread("crud:RepoSubscription:nondet:1:1", function () {
  let owner = 2560;
  let repo = "repo_2560";
  setRepoSubscription(owner, repo);
  waitForRepoSubscriptionAdded(owner, repo);
  tryToAddExistingRepoSubscription(owner, repo);
  verifyRepoSubscriptionExists(owner, repo);
  deleteRepoSubscription(owner, repo);
  tryToDeleteANonExistingRepoSubscription(owner, repo);
  verifyRepoSubscriptionDoesNotExist(owner, repo);
});

// Story: crud:RepoSubscription:nondet:1:2
bthread("crud:RepoSubscription:nondet:1:2", function () {
  let owner = 2561;
  let repo = "repo_2561";
  setRepoSubscription(owner, repo);
  // waitForRepoSubscriptionAdded(owner, repo);
  tryToAddExistingRepoSubscription(owner, repo);
  verifyRepoSubscriptionExists(owner, repo);
  deleteRepoSubscription(owner, repo);
  tryToDeleteANonExistingRepoSubscription(owner, repo);
  verifyRepoSubscriptionDoesNotExist(owner, repo);
});

// Story: crud:RepoSubscription:nondet:negative:dup-add
bthread("crud:RepoSubscription:nondet:negative:dup-add", function () {
  let owner = 2566;
  let repo = "repo_2566";
  setRepoSubscription(owner, repo);
  // waitForRepoSubscriptionAdded(owner, repo);
  verifyRepoSubscriptionExists(owner, repo);
  tryToAddExistingRepoSubscription(owner, repo);
  verifyRepoSubscriptionExists(owner, repo);
});

// Story: crud:StarredRepo:nondet:1:1
bthread("crud:StarredRepo:nondet:1:1", function () {
  let owner = 2570;
  let repo = "repo_2570";
  starRepoForAuthenticatedUser(owner, repo);
  waitForStarredRepoAdded(owner, repo);
  tryToAddExistingStarredRepo(owner, repo);
  verifyStarredRepoExists(owner, repo);
  unstarRepoForAuthenticatedUser(owner, repo);
  tryToDeleteANonExistingStarredRepo(owner, repo);
  verifyStarredRepoDoesNotExist(owner, repo);
});

// Story: crud:StarredRepo:nondet:1:2
bthread("crud:StarredRepo:nondet:1:2", function () {
  let owner = 2571;
  let repo = "repo_2571";
  starRepoForAuthenticatedUser(owner, repo);
  // waitForStarredRepoAdded(owner, repo);
  tryToAddExistingStarredRepo(owner, repo);
  verifyStarredRepoExists(owner, repo);
  unstarRepoForAuthenticatedUser(owner, repo);
  tryToDeleteANonExistingStarredRepo(owner, repo);
  verifyStarredRepoDoesNotExist(owner, repo);
});

// Story: crud:StarredRepo:nondet:negative:dup-add
bthread("crud:StarredRepo:nondet:negative:dup-add", function () {
  let owner = 2576;
  let repo = "repo_2576";
  starRepoForAuthenticatedUser(owner, repo);
  // waitForStarredRepoAdded(owner, repo);
  verifyStarredRepoExists(owner, repo);
  tryToAddExistingStarredRepo(owner, repo);
  verifyStarredRepoExists(owner, repo);
});

// Story: crud:Package:read_only
bthread("crud:Package:read_only", function () {
  let org = "org_2580";
  let package_name = "package_name_2580";
  let package_type = "package_type_2580";
  let username = 2580;
  verifyPackageExists(org, package_name, package_type, username);
});

// Story: crud:PackageVersion:nondet:1:1
bthread("crud:PackageVersion:nondet:1:1", function () {
  let org = "org_2590";
  let package_name = "package_name_2590";
  let package_type = "package_type_2590";
  let package_version_id;
  let username = 2590;
  // Dependency Barrier
  let deps = {};
  deps["package_version_id"] = matchAnyPackageAdded();
  let pkMap = {"package_version_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  package_version_id = captured["package_version_id"];
  restorePackageVersionForUser(org, package_name, package_type, package_version_id, username);
  waitForPackageVersionAdded(org, package_name, package_type, package_version_id, username);
  tryToAddExistingPackageVersion(org, package_name, package_type, package_version_id, username);
  verifyPackageVersionExists(org, package_name, package_type, package_version_id, username);
  deletePackageVersionForUser(org, package_name, package_type, package_version_id, username);
  tryToDeleteANonExistingPackageVersion(org, package_name, package_type, package_version_id, username);
  verifyPackageVersionDoesNotExist(org, package_name, package_type, package_version_id, username);
});

// Story: crud:PackageVersion:nondet:1:2
bthread("crud:PackageVersion:nondet:1:2", function () {
  let org = "org_2591";
  let package_name = "package_name_2591";
  let package_type = "package_type_2591";
  let package_version_id;
  let username = 2591;
  // Dependency Barrier
  let deps = {};
  deps["package_version_id"] = matchAnyPackageAdded();
  let pkMap = {"package_version_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  package_version_id = captured["package_version_id"];
  restorePackageVersionForUser(org, package_name, package_type, package_version_id, username);
  // waitForPackageVersionAdded(org, package_name, package_type, package_version_id, username);
  tryToAddExistingPackageVersion(org, package_name, package_type, package_version_id, username);
  verifyPackageVersionExists(org, package_name, package_type, package_version_id, username);
  deletePackageVersionForUser(org, package_name, package_type, package_version_id, username);
  tryToDeleteANonExistingPackageVersion(org, package_name, package_type, package_version_id, username);
  verifyPackageVersionDoesNotExist(org, package_name, package_type, package_version_id, username);
});

// Story: crud:PackageVersion:nondet:negative:dup-add
bthread("crud:PackageVersion:nondet:negative:dup-add", function () {
  let org = "org_2596";
  let package_name = "package_name_2596";
  let package_type = "package_type_2596";
  let package_version_id;
  let username = 2596;
  // Dependency Barrier
  let deps = {};
  deps["package_version_id"] = matchAnyPackageAdded();
  let pkMap = {"package_version_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  package_version_id = captured["package_version_id"];
  restorePackageVersionForUser(org, package_name, package_type, package_version_id, username);
  // waitForPackageVersionAdded(org, package_name, package_type, package_version_id, username);
  verifyPackageVersionExists(org, package_name, package_type, package_version_id, username);
  tryToAddExistingPackageVersion(org, package_name, package_type, package_version_id, username);
  verifyPackageVersionExists(org, package_name, package_type, package_version_id, username);
});

// Story: crud:UserPackageVersion:read_only
bthread("crud:UserPackageVersion:read_only", function () {
  let package_name = "package_name_2610";
  let package_type = 2610;
  let package_version_id;
  verifyUserPackageVersionExists(package_name, package_type, package_version_id);
});

// Story: crud:CodeScanningAlert:read_only
bthread("crud:CodeScanningAlert:read_only", function () {
  let alert_number = "alert_number_2620";
  let owner = 2620;
  let repo = "repo_2620";
  let state = "state_2620";
  verifyCodeScanningAlertExists(alert_number, owner, repo, state);
});

// Story: crud:CodeScanningAlertAutofix:read_only
bthread("crud:CodeScanningAlertAutofix:read_only", function () {
  let alert_number = "alert_number_2630";
  let owner = 2630;
  let repo = "repo_2630";
  verifyCodeScanningAlertAutofixExists(alert_number, owner, repo);
});

// Story: crud:CodeScanningAlertInstance:read_only
bthread("crud:CodeScanningAlertInstance:read_only", function () {
  let alert_number = "alert_number_2650";
  let owner = 2650;
  let repo = "repo_2650";
  verifyCodeScanningAlertInstanceExists(alert_number, owner, repo);
});

// Story: crud:CodeScanningAnalysis:read_only
bthread("crud:CodeScanningAnalysis:read_only", function () {
  let analysis_id = 2660;
  let owner = 2660;
  let repo = "repo_2660";
  verifyCodeScanningAnalysisExists(analysis_id, owner, repo);
});

// Story: crud:CodeScanningAnalysisList:read_only
bthread("crud:CodeScanningAnalysisList:read_only", function () {
  let owner = 2670;
  let repo = "repo_2670";
  verifyCodeScanningAnalysisListExists(owner, repo);
});

// Story: crud:CodeQLDatabase:read_only
bthread("crud:CodeQLDatabase:read_only", function () {
  let language = "language_2680";
  let owner = 2680;
  let repo = "repo_2680";
  verifyCodeQLDatabaseExists(language, owner, repo);
});

// Story: crud:CodeQLDatabaseList:read_only
bthread("crud:CodeQLDatabaseList:read_only", function () {
  let owner = 2690;
  let repo = "repo_2690";
  verifyCodeQLDatabaseListExists(owner, repo);
});

// Story: crud:CodeQLVariantAnalysis:read_only
bthread("crud:CodeQLVariantAnalysis:read_only", function () {
  let codeql_variant_analysis_id = 2700;
  let language = "language_2700";
  let owner = 2700;
  let query_pack = "query_pack_2700";
  let repo = "repo_2700";
  let repositories = "repositories_2700";
  let repository_lists = "repository_lists_2700";
  let repository_owners = "repository_owners_2700";
  verifyCodeQLVariantAnalysisExists(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners);
});

// Story: crud:CodeQLVariantAnalysisRepoTask:read_only
bthread("crud:CodeQLVariantAnalysisRepoTask:read_only", function () {
  let codeql_variant_analysis_id = 2710;
  let owner = 2710;
  let repo = "repo_2710";
  let repo_name = "repo_name_2710";
  let repo_owner = "repo_owner_2710";
  verifyCodeQLVariantAnalysisRepoTaskExists(codeql_variant_analysis_id, owner, repo, repo_name, repo_owner);
});

// Story: crud:DefaultSetup:read_only
bthread("crud:DefaultSetup:read_only", function () {
  let owner = 2720;
  let repo = "repo_2720";
  verifyDefaultSetupExists(owner, repo);
});

// Story: crud:Sarif:read_only
bthread("crud:Sarif:read_only", function () {
  let checkout_uri = "checkout_uri_2730";
  let commit_sha = "commit_sha_2730";
  let owner = 2730;
  let ref = "ref_2730";
  let repo = "repo_2730";
  let sarif = "sarif_2730";
  let sarif_id = 2730;
  let started_at = "started_at_2730";
  let tool_name = "tool_name_2730";
  let validate = "validate_2730";
  verifySarifExists(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:1:1
bthread("crud:TeamDiscussionCommentReaction:nondet:1:1", function () {
  let comment_number = "comment_number_2740";
  let content = "content_2740";
  let discussion_number = "discussion_number_2740";
  let org = "org_2740";
  let reaction_id = 2740;
  let team_id;
  let team_slug = "team_slug_2740";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  waitForTeamDiscussionCommentReactionAdded(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToAddExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionDoesNotExist(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:1:2
bthread("crud:TeamDiscussionCommentReaction:nondet:1:2", function () {
  let comment_number = "comment_number_2741";
  let content = "content_2741";
  let discussion_number = "discussion_number_2741";
  let org = "org_2741";
  let reaction_id = 2741;
  let team_id;
  let team_slug = "team_slug_2741";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  // waitForTeamDiscussionCommentReactionAdded(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToAddExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionDoesNotExist(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:negative:dup-add
bthread("crud:TeamDiscussionCommentReaction:nondet:negative:dup-add", function () {
  let comment_number = "comment_number_2746";
  let content = "content_2746";
  let discussion_number = "discussion_number_2746";
  let org = "org_2746";
  let reaction_id = 2746;
  let team_id;
  let team_slug = "team_slug_2746";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  // waitForTeamDiscussionCommentReactionAdded(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToAddExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionReaction:nondet:1:1
bthread("crud:TeamDiscussionReaction:nondet:1:1", function () {
  let content = "content_2750";
  let discussion_number = "discussion_number_2750";
  let org = "org_2750";
  let reaction_id = 2750;
  let team_id;
  let team_slug = "team_slug_2750";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  waitForTeamDiscussionReactionAdded(content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToAddExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionDoesNotExist(content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionReaction:nondet:1:2
bthread("crud:TeamDiscussionReaction:nondet:1:2", function () {
  let content = "content_2751";
  let discussion_number = "discussion_number_2751";
  let org = "org_2751";
  let reaction_id = 2751;
  let team_id;
  let team_slug = "team_slug_2751";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  // waitForTeamDiscussionReactionAdded(content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToAddExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionDoesNotExist(content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionReaction:nondet:negative:dup-add
bthread("crud:TeamDiscussionReaction:nondet:negative:dup-add", function () {
  let content = "content_2756";
  let discussion_number = "discussion_number_2756";
  let org = "org_2756";
  let reaction_id = 2756;
  let team_id;
  let team_slug = "team_slug_2756";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  // waitForTeamDiscussionReactionAdded(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToAddExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:CommitCommentReaction:nondet:1:1
bthread("crud:CommitCommentReaction:nondet:1:1", function () {
  let comment_id = 2760;
  let content = "content_2760";
  let owner = 2760;
  let reaction_id = 2760;
  let repo = "repo_2760";
  createCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  waitForCommitCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:CommitCommentReaction:nondet:1:2
bthread("crud:CommitCommentReaction:nondet:1:2", function () {
  let comment_id = 2761;
  let content = "content_2761";
  let owner = 2761;
  let reaction_id = 2761;
  let repo = "repo_2761";
  createCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForCommitCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:CommitCommentReaction:nondet:negative:dup-add
bthread("crud:CommitCommentReaction:nondet:negative:dup-add", function () {
  let comment_id = 2766;
  let content = "content_2766";
  let owner = 2766;
  let reaction_id = 2766;
  let repo = "repo_2766";
  createCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForCommitCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueCommentReaction:nondet:1:1
bthread("crud:IssueCommentReaction:nondet:1:1", function () {
  let comment_id = 2770;
  let content = "content_2770";
  let owner = 2770;
  let reaction_id = 2770;
  let repo = "repo_2770";
  createIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  waitForIssueCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueCommentReaction:nondet:1:2
bthread("crud:IssueCommentReaction:nondet:1:2", function () {
  let comment_id = 2771;
  let content = "content_2771";
  let owner = 2771;
  let reaction_id = 2771;
  let repo = "repo_2771";
  createIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForIssueCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueCommentReaction:nondet:negative:dup-add
bthread("crud:IssueCommentReaction:nondet:negative:dup-add", function () {
  let comment_id = 2776;
  let content = "content_2776";
  let owner = 2776;
  let reaction_id = 2776;
  let repo = "repo_2776";
  createIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForIssueCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueReaction:nondet:1:1
bthread("crud:IssueReaction:nondet:1:1", function () {
  let content = "content_2780";
  let issue_number = "issue_number_2780";
  let owner = 2780;
  let reaction_id = 2780;
  let repo = "repo_2780";
  createIssueReaction(content, issue_number, owner, reaction_id, repo);
  waitForIssueReactionAdded(content, issue_number, owner, reaction_id, repo);
  tryToAddExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
  deleteIssueReaction(content, issue_number, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionDoesNotExist(content, issue_number, owner, reaction_id, repo);
});

// Story: crud:IssueReaction:nondet:1:2
bthread("crud:IssueReaction:nondet:1:2", function () {
  let content = "content_2781";
  let issue_number = "issue_number_2781";
  let owner = 2781;
  let reaction_id = 2781;
  let repo = "repo_2781";
  createIssueReaction(content, issue_number, owner, reaction_id, repo);
  // waitForIssueReactionAdded(content, issue_number, owner, reaction_id, repo);
  tryToAddExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
  deleteIssueReaction(content, issue_number, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionDoesNotExist(content, issue_number, owner, reaction_id, repo);
});

// Story: crud:IssueReaction:nondet:negative:dup-add
bthread("crud:IssueReaction:nondet:negative:dup-add", function () {
  let content = "content_2786";
  let issue_number = "issue_number_2786";
  let owner = 2786;
  let reaction_id = 2786;
  let repo = "repo_2786";
  createIssueReaction(content, issue_number, owner, reaction_id, repo);
  // waitForIssueReactionAdded(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
  tryToAddExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
});

// Story: crud:PullRequestReviewCommentReaction:nondet:1:1
bthread("crud:PullRequestReviewCommentReaction:nondet:1:1", function () {
  let comment_id = 2790;
  let content = "content_2790";
  let owner = 2790;
  let reaction_id = 2790;
  let repo = "repo_2790";
  createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  waitForPullRequestReviewCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deletePullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:PullRequestReviewCommentReaction:nondet:1:2
bthread("crud:PullRequestReviewCommentReaction:nondet:1:2", function () {
  let comment_id = 2791;
  let content = "content_2791";
  let owner = 2791;
  let reaction_id = 2791;
  let repo = "repo_2791";
  createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForPullRequestReviewCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deletePullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:PullRequestReviewCommentReaction:nondet:negative:dup-add
bthread("crud:PullRequestReviewCommentReaction:nondet:negative:dup-add", function () {
  let comment_id = 2796;
  let content = "content_2796";
  let owner = 2796;
  let reaction_id = 2796;
  let repo = "repo_2796";
  createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForPullRequestReviewCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:ReleaseReaction:nondet:1:1
bthread("crud:ReleaseReaction:nondet:1:1", function () {
  let content = "content_2800";
  let owner = 2800;
  let reaction_id = 2800;
  let release_id;
  let repo = "repo_2800";
  // Dependency Barrier
  let deps = {};
  deps["release_id"] = matchAnyReleaseAdded();
  let pkMap = {"release_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  release_id = captured["release_id"];
  createReleaseReaction(content, owner, reaction_id, release_id, repo);
  waitForReleaseReactionAdded(content, owner, reaction_id, release_id, repo);
  tryToAddExistingReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo);
  deleteReleaseReaction(content, owner, reaction_id, release_id, repo);
  tryToDeleteANonExistingReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionDoesNotExist(content, owner, reaction_id, release_id, repo);
});

// Story: crud:ReleaseReaction:nondet:1:2
bthread("crud:ReleaseReaction:nondet:1:2", function () {
  let content = "content_2801";
  let owner = 2801;
  let reaction_id = 2801;
  let release_id;
  let repo = "repo_2801";
  // Dependency Barrier
  let deps = {};
  deps["release_id"] = matchAnyReleaseAdded();
  let pkMap = {"release_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  release_id = captured["release_id"];
  createReleaseReaction(content, owner, reaction_id, release_id, repo);
  // waitForReleaseReactionAdded(content, owner, reaction_id, release_id, repo);
  tryToAddExistingReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo);
  deleteReleaseReaction(content, owner, reaction_id, release_id, repo);
  tryToDeleteANonExistingReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionDoesNotExist(content, owner, reaction_id, release_id, repo);
});

// Story: crud:ReleaseReaction:nondet:negative:dup-add
bthread("crud:ReleaseReaction:nondet:negative:dup-add", function () {
  let content = "content_2806";
  let owner = 2806;
  let reaction_id = 2806;
  let release_id;
  let repo = "repo_2806";
  // Dependency Barrier
  let deps = {};
  deps["release_id"] = matchAnyReleaseAdded();
  let pkMap = {"release_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  release_id = captured["release_id"];
  createReleaseReaction(content, owner, reaction_id, release_id, repo);
  // waitForReleaseReactionAdded(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo);
  tryToAddExistingReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo);
});

// Story: crud:PullRequest:read_only
bthread("crud:PullRequest:read_only", function () {
  let base = "base_2810";
  let body = "body_2810";
  let draft = "draft_2810";
  let head = "head_2810";
  let head_repo = "head_repo_2810";
  let issue = 2810;
  let maintainer_can_modify = "maintainer_can_modify_2810";
  let owner = 2810;
  let pull_number = "pull_number_2810";
  let repo = "repo_2810";
  let title = "title_2810";
  verifyPullRequestExists(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, title);
});

// Story: crud:PullRequestReviewComment:read_only
bthread("crud:PullRequestReviewComment:read_only", function () {
  let comment_id = 2820;
  let owner = 2820;
  let repo = "repo_2820";
  verifyPullRequestReviewCommentExists(comment_id, owner, repo);
});

// Story: crud:PullRequestReviewComments:read_only
bthread("crud:PullRequestReviewComments:read_only", function () {
  let body = "body_2840";
  let commit_id;
  let in_reply_to = 2840;
  let line = 2840;
  let owner = 2840;
  let path = "path_2840";
  let position = 2840;
  let pull_number = "pull_number_2840";
  let repo = "repo_2840";
  let side = "side_2840";
  let start_line = 2840;
  let start_side = "start_side_2840";
  let subject_type = "subject_type_2840";
  verifyPullRequestReviewCommentsExists(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type);
});

// Story: crud:PullRequestComments:read_only
bthread("crud:PullRequestComments:read_only", function () {
  let owner = 2850;
  let repo = "repo_2850";
  verifyPullRequestCommentsExists(owner, repo);
});

// Story: crud:PullRequestMerge:read_only
bthread("crud:PullRequestMerge:read_only", function () {
  let owner = 2860;
  let pull_number = "pull_number_2860";
  let repo = "repo_2860";
  verifyPullRequestMergeExists(owner, pull_number, repo);
});

// Story: crud:PullRequestRequestedReviewers:nondet:1:1
bthread("crud:PullRequestRequestedReviewers:nondet:1:1", function () {
  let owner = 2870;
  let pull_number = "pull_number_2870";
  let repo = "repo_2870";
  let reviewers = "reviewers_2870";
  let team_reviewers = "team_reviewers_2870";
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  waitForPullRequestRequestedReviewersAdded(owner, pull_number, repo, reviewers, team_reviewers);
  tryToAddExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  removeRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  tryToDeleteANonExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersDoesNotExist(owner, pull_number, repo, reviewers, team_reviewers);
});

// Story: crud:PullRequestRequestedReviewers:nondet:1:2
bthread("crud:PullRequestRequestedReviewers:nondet:1:2", function () {
  let owner = 2871;
  let pull_number = "pull_number_2871";
  let repo = "repo_2871";
  let reviewers = "reviewers_2871";
  let team_reviewers = "team_reviewers_2871";
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  // waitForPullRequestRequestedReviewersAdded(owner, pull_number, repo, reviewers, team_reviewers);
  tryToAddExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  removeRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  tryToDeleteANonExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersDoesNotExist(owner, pull_number, repo, reviewers, team_reviewers);
});

// Story: crud:PullRequestRequestedReviewers:nondet:negative:dup-add
bthread("crud:PullRequestRequestedReviewers:nondet:negative:dup-add", function () {
  let owner = 2876;
  let pull_number = "pull_number_2876";
  let repo = "repo_2876";
  let reviewers = "reviewers_2876";
  let team_reviewers = "team_reviewers_2876";
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  // waitForPullRequestRequestedReviewersAdded(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  tryToAddExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
});

// Story: crud:PullRequestReview:nondet:1:1
bthread("crud:PullRequestReview:nondet:1:1", function () {
  let body = "body_2880";
  let comments = "comments_2880";
  let commit_id;
  let event = "event_2880";
  let owner = 2880;
  let pull_number = "pull_number_2880";
  let repo = "repo_2880";
  let review_id = 2880;
  // Dependency Barrier
  let deps = {};
  deps["commit_id"] = matchAnyCommitAdded();
  let pkMap = {"commit_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  commit_id = captured["commit_id"];
  createPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  waitForPullRequestReviewAdded(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToAddExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  updatePullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  deletePendingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToDeleteANonExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewDoesNotExist(body, comments, commit_id, event, owner, pull_number, repo, review_id);
});

// Story: crud:PullRequestReview:nondet:1:2
bthread("crud:PullRequestReview:nondet:1:2", function () {
  let body = "body_2881";
  let comments = "comments_2881";
  let commit_id;
  let event = "event_2881";
  let owner = 2881;
  let pull_number = "pull_number_2881";
  let repo = "repo_2881";
  let review_id = 2881;
  // Dependency Barrier
  let deps = {};
  deps["commit_id"] = matchAnyCommitAdded();
  let pkMap = {"commit_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  commit_id = captured["commit_id"];
  createPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  // waitForPullRequestReviewAdded(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToAddExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  updatePullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  deletePendingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToDeleteANonExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewDoesNotExist(body, comments, commit_id, event, owner, pull_number, repo, review_id);
});

// Story: crud:PullRequestReview:nondet:negative:dup-add
bthread("crud:PullRequestReview:nondet:negative:dup-add", function () {
  let body = "body_2886";
  let comments = "comments_2886";
  let commit_id;
  let event = "event_2886";
  let owner = 2886;
  let pull_number = "pull_number_2886";
  let repo = "repo_2886";
  let review_id = 2886;
  // Dependency Barrier
  let deps = {};
  deps["commit_id"] = matchAnyCommitAdded();
  let pkMap = {"commit_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  commit_id = captured["commit_id"];
  createPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  // waitForPullRequestReviewAdded(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToAddExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
});

// Story: crud:Migration:nondet:1:1
bthread("crud:Migration:nondet:1:1", function () {
  let exclude = "exclude_2920";
  let exclude_attachments = "exclude_attachments_2920";
  let exclude_git_data = "exclude_git_data_2920";
  let exclude_metadata = "exclude_metadata_2920";
  let exclude_owner_projects = "exclude_owner_projects_2920";
  let exclude_releases = "exclude_releases_2920";
  let lock_repositories = "lock_repositories_2920";
  let migration_id = 2920;
  let org = "org_2920";
  let org_metadata_only = "org_metadata_only_2920";
  let repositories = "repositories_2920";
  startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  waitForMigrationAdded(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  tryToAddExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  deleteMigrationArchive(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  tryToDeleteANonExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationDoesNotExist(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
});

// Story: crud:Migration:nondet:1:2
bthread("crud:Migration:nondet:1:2", function () {
  let exclude = "exclude_2921";
  let exclude_attachments = "exclude_attachments_2921";
  let exclude_git_data = "exclude_git_data_2921";
  let exclude_metadata = "exclude_metadata_2921";
  let exclude_owner_projects = "exclude_owner_projects_2921";
  let exclude_releases = "exclude_releases_2921";
  let lock_repositories = "lock_repositories_2921";
  let migration_id = 2921;
  let org = "org_2921";
  let org_metadata_only = "org_metadata_only_2921";
  let repositories = "repositories_2921";
  startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  // waitForMigrationAdded(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  tryToAddExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  deleteMigrationArchive(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  tryToDeleteANonExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationDoesNotExist(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
});

// Story: crud:Migration:nondet:negative:dup-add
bthread("crud:Migration:nondet:negative:dup-add", function () {
  let exclude = "exclude_2926";
  let exclude_attachments = "exclude_attachments_2926";
  let exclude_git_data = "exclude_git_data_2926";
  let exclude_metadata = "exclude_metadata_2926";
  let exclude_owner_projects = "exclude_owner_projects_2926";
  let exclude_releases = "exclude_releases_2926";
  let lock_repositories = "lock_repositories_2926";
  let migration_id = 2926;
  let org = "org_2926";
  let org_metadata_only = "org_metadata_only_2926";
  let repositories = "repositories_2926";
  startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  // waitForMigrationAdded(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  tryToAddExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
});

// Story: crud:MigrationArchive:read_only
bthread("crud:MigrationArchive:read_only", function () {
  let migration_id;
  let org = "org_2930";
  verifyMigrationArchiveExists(migration_id, org);
});

// Story: crud:MigrationRepository:read_only
bthread("crud:MigrationRepository:read_only", function () {
  let migration_id;
  let org = "org_2950";
  let page = "page_2950";
  let per-page = "per-page_2950";
  verifyMigrationRepositoryExists(migration_id, org, page, per-page);
});

// Story: crud:Import:nondet:1:1
bthread("crud:Import:nondet:1:1", function () {
  let owner = 2960;
  let repo = "repo_2960";
  let vcs_url = "vcs_url_2960";
  startImport(owner, repo, vcs_url);
  waitForImportAdded(owner, repo, vcs_url);
  tryToAddExistingImport(owner, repo, vcs_url);
  verifyImportExists(owner, repo, vcs_url);
  updateImport(owner, repo, vcs_url);
  cancelImport(owner, repo, vcs_url);
  tryToDeleteANonExistingImport(owner, repo, vcs_url);
  verifyImportDoesNotExist(owner, repo, vcs_url);
});

// Story: crud:Import:nondet:1:2
bthread("crud:Import:nondet:1:2", function () {
  let owner = 2961;
  let repo = "repo_2961";
  let vcs_url = "vcs_url_2961";
  startImport(owner, repo, vcs_url);
  // waitForImportAdded(owner, repo, vcs_url);
  tryToAddExistingImport(owner, repo, vcs_url);
  updateImport(owner, repo, vcs_url);
  verifyImportExists(owner, repo, vcs_url);
  cancelImport(owner, repo, vcs_url);
  tryToDeleteANonExistingImport(owner, repo, vcs_url);
  verifyImportDoesNotExist(owner, repo, vcs_url);
});

// Story: crud:Import:nondet:negative:dup-add
bthread("crud:Import:nondet:negative:dup-add", function () {
  let owner = 2966;
  let repo = "repo_2966";
  let vcs_url = "vcs_url_2966";
  startImport(owner, repo, vcs_url);
  // waitForImportAdded(owner, repo, vcs_url);
  verifyImportExists(owner, repo, vcs_url);
  tryToAddExistingImport(owner, repo, vcs_url);
  verifyImportExists(owner, repo, vcs_url);
});

// Story: crud:CommitAuthor:read_only
bthread("crud:CommitAuthor:read_only", function () {
  let author_id = 2970;
  let email = "email_2970";
  let name = "name_2970";
  let owner = 2970;
  let repo = "repo_2970";
  verifyCommitAuthorExists(author_id, email, name, owner, repo);
});

// Story: crud:LargeFile:read_only
bthread("crud:LargeFile:read_only", function () {
  let owner = 2980;
  let repo = "repo_2980";
  verifyLargeFileExists(owner, repo);
});

// Story: crud:UserMigrationList:read_only
bthread("crud:UserMigrationList:read_only", function () {
  let page = "page_3000";
  let per-page = "per-page_3000";
  verifyUserMigrationListExists(page, per-page);
});

// Story: crud:CodeSecurityConfigurationEnterprise:nondet:1:1
bthread("crud:CodeSecurityConfigurationEnterprise:nondet:1:1", function () {
  let advanced_security = "advanced_security_3010";
  let code_scanning_default_setup = "code_scanning_default_setup_3010";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3010";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3010";
  let code_scanning_options = "code_scanning_options_3010";
  let code_security = "code_security_3010";
  let configuration_id;
  let dependabot_alerts = "dependabot_alerts_3010";
  let dependabot_security_updates = "dependabot_security_updates_3010";
  let dependency_graph = "dependency_graph_3010";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3010";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3010";
  let enforcement = "enforcement_3010";
  let enterprise = 3010;
  let name = "name_3010";
  let private_vulnerability_reporting = "private_vulnerability_reporting_3010";
  let secret_protection = "secret_protection_3010";
  let secret_scanning = "secret_scanning_3010";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3010";
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3010";
  let secret_scanning_non_provider_patterns;
  let secret_scanning_push_protection = "secret_scanning_push_protection_3010";
  let secret_scanning_validity_checks;
  // Dependency Barrier
  let deps = {};
  deps["configuration_id"] = matchAnyConfigurationAdded();
  deps["secret_scanning_non_provider_patterns"] = matchAnySecretAdded();
  deps["secret_scanning_validity_checks"] = matchAnySecretAdded();
  let pkMap = {"configuration_id": "org", "secret_scanning_non_provider_patterns": "org", "secret_scanning_validity_checks": "org"};
  let captured = resolveDependencies(deps, pkMap);
  configuration_id = captured["configuration_id"];
  secret_scanning_non_provider_patterns = captured["secret_scanning_non_provider_patterns"];
  secret_scanning_validity_checks = captured["secret_scanning_validity_checks"];
  createEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  waitForCodeSecurityConfigurationEnterpriseAdded(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToAddExistingCodeSecurityConfigurationEnterprise(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationEnterpriseExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  updateEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  deleteEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToDeleteANonExistingCodeSecurityConfigurationEnterprise(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationEnterpriseDoesNotExist(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
});

// Story: crud:CodeSecurityConfigurationEnterprise:nondet:1:2
bthread("crud:CodeSecurityConfigurationEnterprise:nondet:1:2", function () {
  let advanced_security = "advanced_security_3011";
  let code_scanning_default_setup = "code_scanning_default_setup_3011";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3011";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3011";
  let code_scanning_options = "code_scanning_options_3011";
  let code_security = "code_security_3011";
  let configuration_id;
  let dependabot_alerts = "dependabot_alerts_3011";
  let dependabot_security_updates = "dependabot_security_updates_3011";
  let dependency_graph = "dependency_graph_3011";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3011";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3011";
  let enforcement = "enforcement_3011";
  let enterprise = 3011;
  let name = "name_3011";
  let private_vulnerability_reporting = "private_vulnerability_reporting_3011";
  let secret_protection = "secret_protection_3011";
  let secret_scanning = "secret_scanning_3011";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3011";
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3011";
  let secret_scanning_non_provider_patterns;
  let secret_scanning_push_protection = "secret_scanning_push_protection_3011";
  let secret_scanning_validity_checks;
  // Dependency Barrier
  let deps = {};
  deps["configuration_id"] = matchAnyConfigurationAdded();
  deps["secret_scanning_non_provider_patterns"] = matchAnySecretAdded();
  deps["secret_scanning_validity_checks"] = matchAnySecretAdded();
  let pkMap = {"configuration_id": "org", "secret_scanning_non_provider_patterns": "org", "secret_scanning_validity_checks": "org"};
  let captured = resolveDependencies(deps, pkMap);
  configuration_id = captured["configuration_id"];
  secret_scanning_non_provider_patterns = captured["secret_scanning_non_provider_patterns"];
  secret_scanning_validity_checks = captured["secret_scanning_validity_checks"];
  createEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  // waitForCodeSecurityConfigurationEnterpriseAdded(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToAddExistingCodeSecurityConfigurationEnterprise(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  updateEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationEnterpriseExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  deleteEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToDeleteANonExistingCodeSecurityConfigurationEnterprise(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationEnterpriseDoesNotExist(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
});

// Story: crud:CodeSecurityConfigurationEnterprise:nondet:negative:dup-add
bthread("crud:CodeSecurityConfigurationEnterprise:nondet:negative:dup-add", function () {
  let advanced_security = "advanced_security_3016";
  let code_scanning_default_setup = "code_scanning_default_setup_3016";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3016";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3016";
  let code_scanning_options = "code_scanning_options_3016";
  let code_security = "code_security_3016";
  let configuration_id;
  let dependabot_alerts = "dependabot_alerts_3016";
  let dependabot_security_updates = "dependabot_security_updates_3016";
  let dependency_graph = "dependency_graph_3016";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3016";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3016";
  let enforcement = "enforcement_3016";
  let enterprise = 3016;
  let name = "name_3016";
  let private_vulnerability_reporting = "private_vulnerability_reporting_3016";
  let secret_protection = "secret_protection_3016";
  let secret_scanning = "secret_scanning_3016";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3016";
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3016";
  let secret_scanning_non_provider_patterns;
  let secret_scanning_push_protection = "secret_scanning_push_protection_3016";
  let secret_scanning_validity_checks;
  // Dependency Barrier
  let deps = {};
  deps["configuration_id"] = matchAnyConfigurationAdded();
  deps["secret_scanning_non_provider_patterns"] = matchAnySecretAdded();
  deps["secret_scanning_validity_checks"] = matchAnySecretAdded();
  let pkMap = {"configuration_id": "org", "secret_scanning_non_provider_patterns": "org", "secret_scanning_validity_checks": "org"};
  let captured = resolveDependencies(deps, pkMap);
  configuration_id = captured["configuration_id"];
  secret_scanning_non_provider_patterns = captured["secret_scanning_non_provider_patterns"];
  secret_scanning_validity_checks = captured["secret_scanning_validity_checks"];
  createEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  // waitForCodeSecurityConfigurationEnterpriseAdded(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationEnterpriseExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToAddExistingCodeSecurityConfigurationEnterprise(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationEnterpriseExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
});

// Story: crud:CodeSecurityConfigurationEnterpriseRepositories:read_only
bthread("crud:CodeSecurityConfigurationEnterpriseRepositories:read_only", function () {
  let configuration_id;
  let enterprise = 3040;
  let status = "status_3040";
  verifyCodeSecurityConfigurationEnterpriseRepositoriesExists(configuration_id, enterprise, status);
});

// Story: crud:CodeSecurityConfigurationOrg:nondet:1:1
bthread("crud:CodeSecurityConfigurationOrg:nondet:1:1", function () {
  let advanced_security = "advanced_security_3050";
  let code_scanning_default_setup = "code_scanning_default_setup_3050";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3050";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3050";
  let code_scanning_options = "code_scanning_options_3050";
  let code_security = "code_security_3050";
  let configuration_id;
  let dependabot_alerts = "dependabot_alerts_3050";
  let dependabot_security_updates = "dependabot_security_updates_3050";
  let dependency_graph = "dependency_graph_3050";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3050";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3050";
  let enforcement = "enforcement_3050";
  let name = "name_3050";
  let org = 3050;
  let private_vulnerability_reporting = "private_vulnerability_reporting_3050";
  let secret_protection = "secret_protection_3050";
  let secret_scanning = "secret_scanning_3050";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3050";
  let secret_scanning_delegated_bypass = "secret_scanning_delegated_bypass_3050";
  let secret_scanning_delegated_bypass_options = {};
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3050";
  let secret_scanning_non_provider_patterns;
  let secret_scanning_push_protection = "secret_scanning_push_protection_3050";
  let secret_scanning_validity_checks;
  // Dependency Barrier
  let deps = {};
  deps["configuration_id"] = matchAnyConfigurationAdded();
  deps["secret_scanning_non_provider_patterns"] = matchAnySecretAdded();
  deps["secret_scanning_validity_checks"] = matchAnySecretAdded();
  let pkMap = {"configuration_id": "org", "secret_scanning_non_provider_patterns": "org", "secret_scanning_validity_checks": "org"};
  let captured = resolveDependencies(deps, pkMap);
  configuration_id = captured["configuration_id"];
  secret_scanning_non_provider_patterns = captured["secret_scanning_non_provider_patterns"];
  secret_scanning_validity_checks = captured["secret_scanning_validity_checks"];
  createOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  waitForCodeSecurityConfigurationOrgAdded(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToAddExistingCodeSecurityConfigurationOrg(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationOrgExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  updateOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  deleteOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToDeleteANonExistingCodeSecurityConfigurationOrg(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationOrgDoesNotExist(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
});

// Story: crud:CodeSecurityConfigurationOrg:nondet:1:2
bthread("crud:CodeSecurityConfigurationOrg:nondet:1:2", function () {
  let advanced_security = "advanced_security_3051";
  let code_scanning_default_setup = "code_scanning_default_setup_3051";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3051";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3051";
  let code_scanning_options = "code_scanning_options_3051";
  let code_security = "code_security_3051";
  let configuration_id;
  let dependabot_alerts = "dependabot_alerts_3051";
  let dependabot_security_updates = "dependabot_security_updates_3051";
  let dependency_graph = "dependency_graph_3051";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3051";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3051";
  let enforcement = "enforcement_3051";
  let name = "name_3051";
  let org = 3051;
  let private_vulnerability_reporting = "private_vulnerability_reporting_3051";
  let secret_protection = "secret_protection_3051";
  let secret_scanning = "secret_scanning_3051";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3051";
  let secret_scanning_delegated_bypass = "secret_scanning_delegated_bypass_3051";
  let secret_scanning_delegated_bypass_options = {};
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3051";
  let secret_scanning_non_provider_patterns;
  let secret_scanning_push_protection = "secret_scanning_push_protection_3051";
  let secret_scanning_validity_checks;
  // Dependency Barrier
  let deps = {};
  deps["configuration_id"] = matchAnyConfigurationAdded();
  deps["secret_scanning_non_provider_patterns"] = matchAnySecretAdded();
  deps["secret_scanning_validity_checks"] = matchAnySecretAdded();
  let pkMap = {"configuration_id": "org", "secret_scanning_non_provider_patterns": "org", "secret_scanning_validity_checks": "org"};
  let captured = resolveDependencies(deps, pkMap);
  configuration_id = captured["configuration_id"];
  secret_scanning_non_provider_patterns = captured["secret_scanning_non_provider_patterns"];
  secret_scanning_validity_checks = captured["secret_scanning_validity_checks"];
  createOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  // waitForCodeSecurityConfigurationOrgAdded(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToAddExistingCodeSecurityConfigurationOrg(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  updateOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationOrgExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  deleteOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToDeleteANonExistingCodeSecurityConfigurationOrg(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationOrgDoesNotExist(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
});

// Story: crud:CodeSecurityConfigurationOrg:nondet:negative:dup-add
bthread("crud:CodeSecurityConfigurationOrg:nondet:negative:dup-add", function () {
  let advanced_security = "advanced_security_3056";
  let code_scanning_default_setup = "code_scanning_default_setup_3056";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3056";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3056";
  let code_scanning_options = "code_scanning_options_3056";
  let code_security = "code_security_3056";
  let configuration_id;
  let dependabot_alerts = "dependabot_alerts_3056";
  let dependabot_security_updates = "dependabot_security_updates_3056";
  let dependency_graph = "dependency_graph_3056";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3056";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3056";
  let enforcement = "enforcement_3056";
  let name = "name_3056";
  let org = 3056;
  let private_vulnerability_reporting = "private_vulnerability_reporting_3056";
  let secret_protection = "secret_protection_3056";
  let secret_scanning = "secret_scanning_3056";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3056";
  let secret_scanning_delegated_bypass = "secret_scanning_delegated_bypass_3056";
  let secret_scanning_delegated_bypass_options = {};
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3056";
  let secret_scanning_non_provider_patterns;
  let secret_scanning_push_protection = "secret_scanning_push_protection_3056";
  let secret_scanning_validity_checks;
  // Dependency Barrier
  let deps = {};
  deps["configuration_id"] = matchAnyConfigurationAdded();
  deps["secret_scanning_non_provider_patterns"] = matchAnySecretAdded();
  deps["secret_scanning_validity_checks"] = matchAnySecretAdded();
  let pkMap = {"configuration_id": "org", "secret_scanning_non_provider_patterns": "org", "secret_scanning_validity_checks": "org"};
  let captured = resolveDependencies(deps, pkMap);
  configuration_id = captured["configuration_id"];
  secret_scanning_non_provider_patterns = captured["secret_scanning_non_provider_patterns"];
  secret_scanning_validity_checks = captured["secret_scanning_validity_checks"];
  createOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  // waitForCodeSecurityConfigurationOrgAdded(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationOrgExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToAddExistingCodeSecurityConfigurationOrg(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationOrgExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
});

// Story: crud:Configuration:read_only
bthread("crud:Configuration:read_only", function () {
  let configuration_id = 3070;
  let default_for_new_repos = "default_for_new_repos_3070";
  let org = 3070;
  let pagination-after = "pagination-after_3070";
  let pagination-before = "pagination-before_3070";
  let per_page = "per_page_3070";
  let scope = "scope_3070";
  let selected_repository_ids;
  let status = "status_3070";
  verifyConfigurationExists(configuration_id, default_for_new_repos, org, pagination-after, pagination-before, per_page, scope, selected_repository_ids, status);
});

// Story: crud:RepositoryConfiguration:read_only
bthread("crud:RepositoryConfiguration:read_only", function () {
  let owner = 3080;
  let repo = "repo_3080";
  verifyRepositoryConfigurationExists(owner, repo);
});

// Story: crud:DependabotAlert:read_only
bthread("crud:DependabotAlert:read_only", function () {
  let alert_number = "alert_number_3090";
  let dismissed_comment = "dismissed_comment_3090";
  let dismissed_reason = "dismissed_reason_3090";
  let enterprise = "enterprise_3090";
  let org = "org_3090";
  let owner = 3090;
  let repo = "repo_3090";
  let state = "state_3090";
  verifyDependabotAlertExists(alert_number, dismissed_comment, dismissed_reason, enterprise, org, owner, repo, state);
});

// Story: crud:RepositoryAccess:read_only
bthread("crud:RepositoryAccess:read_only", function () {
  let org = 3100;
  verifyRepositoryAccessExists(org);
});

// Story: crud:OrgSecretPublicKey:read_only
bthread("crud:OrgSecretPublicKey:read_only", function () {
  let org = 3120;
  verifyOrgSecretPublicKeyExists(org);
});

// Story: crud:OrgSecrets:read_only
bthread("crud:OrgSecrets:read_only", function () {
  let org = 3130;
  verifyOrgSecretsExists(org);
});

// Story: crud:DependabotSecret:nondet:1:1
bthread("crud:DependabotSecret:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_3140";
  let key_id = 3140;
  let owner = 3140;
  let repo = "repo_3140";
  let secret_name = "secret_name_3140";
  createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  waitForDependabotSecretAdded(encrypted_value, key_id, owner, repo, secret_name);
  tryToAddExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:DependabotSecret:nondet:1:2
bthread("crud:DependabotSecret:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_3141";
  let key_id = 3141;
  let owner = 3141;
  let repo = "repo_3141";
  let secret_name = "secret_name_3141";
  createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  // waitForDependabotSecretAdded(encrypted_value, key_id, owner, repo, secret_name);
  tryToAddExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:DependabotSecret:nondet:negative:dup-add
bthread("crud:DependabotSecret:nondet:negative:dup-add", function () {
  let encrypted_value = "encrypted_value_3146";
  let key_id = 3146;
  let owner = 3146;
  let repo = "repo_3146";
  let secret_name = "secret_name_3146";
  createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  // waitForDependabotSecretAdded(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  tryToAddExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:Project:read_only
bthread("crud:Project:read_only", function () {
  let name = "name_3150";
  let org = "org_3150";
  let project_id = 3150;
  let project_number = "project_number_3150";
  verifyProjectExists(name, org, project_id, project_number);
});

// Story: crud:ProjectField:read_only
bthread("crud:ProjectField:read_only", function () {
  let field_id = 3160;
  let org = 3160;
  let project_number = "project_number_3160";
  verifyProjectFieldExists(field_id, org, project_number);
});

// Story: crud:ProjectItem:nondet:1:1
bthread("crud:ProjectItem:nondet:1:1", function () {
  let id = 3170;
  let item_id = 3170;
  let org = "org_3170";
  let project_number = "project_number_3170";
  let type = "type_3170";
  let username = 3170;
  addItemForUser(id, item_id, org, project_number, type, username);
  waitForProjectItemAdded(id, item_id, org, project_number, type, username);
  tryToAddExistingProjectItem(id, item_id, org, project_number, type, username);
  verifyProjectItemExists(id, item_id, org, project_number, type, username);
  updateItemForUser(id, item_id, org, project_number, type, username);
  deleteItemForUser(id, item_id, org, project_number, type, username);
  tryToDeleteANonExistingProjectItem(id, item_id, org, project_number, type, username);
  verifyProjectItemDoesNotExist(id, item_id, org, project_number, type, username);
});

// Story: crud:ProjectItem:nondet:1:2
bthread("crud:ProjectItem:nondet:1:2", function () {
  let id = 3171;
  let item_id = 3171;
  let org = "org_3171";
  let project_number = "project_number_3171";
  let type = "type_3171";
  let username = 3171;
  addItemForUser(id, item_id, org, project_number, type, username);
  // waitForProjectItemAdded(id, item_id, org, project_number, type, username);
  tryToAddExistingProjectItem(id, item_id, org, project_number, type, username);
  updateItemForUser(id, item_id, org, project_number, type, username);
  verifyProjectItemExists(id, item_id, org, project_number, type, username);
  deleteItemForUser(id, item_id, org, project_number, type, username);
  tryToDeleteANonExistingProjectItem(id, item_id, org, project_number, type, username);
  verifyProjectItemDoesNotExist(id, item_id, org, project_number, type, username);
});

// Story: crud:ProjectItem:nondet:negative:dup-add
bthread("crud:ProjectItem:nondet:negative:dup-add", function () {
  let id = 3176;
  let item_id = 3176;
  let org = "org_3176";
  let project_number = "project_number_3176";
  let type = "type_3176";
  let username = 3176;
  addItemForUser(id, item_id, org, project_number, type, username);
  // waitForProjectItemAdded(id, item_id, org, project_number, type, username);
  verifyProjectItemExists(id, item_id, org, project_number, type, username);
  tryToAddExistingProjectItem(id, item_id, org, project_number, type, username);
  verifyProjectItemExists(id, item_id, org, project_number, type, username);
});

// Story: crud:Blob:read_only
bthread("crud:Blob:read_only", function () {
  let content = "content_3180";
  let encoding = "encoding_3180";
  let file_sha = "file_sha_3180";
  let owner = 3180;
  let repo = "repo_3180";
  verifyBlobExists(content, encoding, file_sha, owner, repo);
});

// Story: crud:Reference:nondet:1:1
bthread("crud:Reference:nondet:1:1", function () {
  let owner = 3190;
  let ref = "ref_3190";
  let repo = "repo_3190";
  let sha = "sha_3190";
  createRef(owner, ref, repo, sha);
  waitForReferenceAdded(owner, ref, repo, sha);
  tryToAddExistingReference(owner, ref, repo, sha);
  verifyReferenceExists(owner, ref, repo, sha);
  updateRef(owner, ref, repo, sha);
  deleteRef(owner, ref, repo, sha);
  tryToDeleteANonExistingReference(owner, ref, repo, sha);
  verifyReferenceDoesNotExist(owner, ref, repo, sha);
});

// Story: crud:Reference:nondet:1:2
bthread("crud:Reference:nondet:1:2", function () {
  let owner = 3191;
  let ref = "ref_3191";
  let repo = "repo_3191";
  let sha = "sha_3191";
  createRef(owner, ref, repo, sha);
  // waitForReferenceAdded(owner, ref, repo, sha);
  tryToAddExistingReference(owner, ref, repo, sha);
  updateRef(owner, ref, repo, sha);
  verifyReferenceExists(owner, ref, repo, sha);
  deleteRef(owner, ref, repo, sha);
  tryToDeleteANonExistingReference(owner, ref, repo, sha);
  verifyReferenceDoesNotExist(owner, ref, repo, sha);
});

// Story: crud:Reference:nondet:negative:dup-add
bthread("crud:Reference:nondet:negative:dup-add", function () {
  let owner = 3196;
  let ref = "ref_3196";
  let repo = "repo_3196";
  let sha = "sha_3196";
  createRef(owner, ref, repo, sha);
  // waitForReferenceAdded(owner, ref, repo, sha);
  verifyReferenceExists(owner, ref, repo, sha);
  tryToAddExistingReference(owner, ref, repo, sha);
  verifyReferenceExists(owner, ref, repo, sha);
});

// Story: crud:Tag:read_only
bthread("crud:Tag:read_only", function () {
  let message = "message_3200";
  let object = "object_3200";
  let owner = 3200;
  let repo = "repo_3200";
  let tag = "tag_3200";
  let tag_sha = "tag_sha_3200";
  let tagger = {};
  let type = "type_3200";
  verifyTagExists(message, object, owner, repo, tag, tag_sha, tagger, type);
});

// Story: crud:Tree:read_only
bthread("crud:Tree:read_only", function () {
  let base_tree = "base_tree_3210";
  let owner = 3210;
  let recursive = "recursive_3210";
  let repo = "repo_3210";
  let tree = "tree_3210";
  let tree_sha = "tree_sha_3210";
  verifyTreeExists(base_tree, owner, recursive, repo, tree, tree_sha);
});

// Story: crud:Gist:nondet:1:1
bthread("crud:Gist:nondet:1:1", function () {
  let description = "description_3220";
  let files = {};
  let gist_id = 3220;
  let _public = "public_3220";
  let username = 3220;
  createGist(description, files, gist_id, _public, username);
  waitForGistAdded(description, files, gist_id, _public, username);
  tryToAddExistingGist(description, files, gist_id, _public, username);
  verifyGistExists(description, files, gist_id, _public, username);
  updateGist(description, files, gist_id, _public, username);
  deleteGist(description, files, gist_id, _public, username);
  tryToDeleteANonExistingGist(description, files, gist_id, _public, username);
  verifyGistDoesNotExist(description, files, gist_id, _public, username);
});

// Story: crud:Gist:nondet:1:2
bthread("crud:Gist:nondet:1:2", function () {
  let description = "description_3221";
  let files = {};
  let gist_id = 3221;
  let _public = "public_3221";
  let username = 3221;
  createGist(description, files, gist_id, _public, username);
  // waitForGistAdded(description, files, gist_id, _public, username);
  tryToAddExistingGist(description, files, gist_id, _public, username);
  updateGist(description, files, gist_id, _public, username);
  verifyGistExists(description, files, gist_id, _public, username);
  deleteGist(description, files, gist_id, _public, username);
  tryToDeleteANonExistingGist(description, files, gist_id, _public, username);
  verifyGistDoesNotExist(description, files, gist_id, _public, username);
});

// Story: crud:Gist:nondet:negative:dup-add
bthread("crud:Gist:nondet:negative:dup-add", function () {
  let description = "description_3226";
  let files = {};
  let gist_id = 3226;
  let _public = "public_3226";
  let username = 3226;
  createGist(description, files, gist_id, _public, username);
  // waitForGistAdded(description, files, gist_id, _public, username);
  verifyGistExists(description, files, gist_id, _public, username);
  tryToAddExistingGist(description, files, gist_id, _public, username);
  verifyGistExists(description, files, gist_id, _public, username);
});

// Story: crud:GistComment:nondet:1:1
bthread("crud:GistComment:nondet:1:1", function () {
  let body = "body_3230";
  let comment_id = 3230;
  let gist_id;
  // Dependency Barrier
  let deps = {};
  deps["gist_id"] = matchAnyGistAdded();
  let pkMap = {"gist_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  gist_id = captured["gist_id"];
  createGistComment(body, comment_id, gist_id);
  waitForGistCommentAdded(body, comment_id, gist_id);
  tryToAddExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentExists(body, comment_id, gist_id);
  updateGistComment(body, comment_id, gist_id);
  deleteGistComment(body, comment_id, gist_id);
  tryToDeleteANonExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentDoesNotExist(body, comment_id, gist_id);
});

// Story: crud:GistComment:nondet:1:2
bthread("crud:GistComment:nondet:1:2", function () {
  let body = "body_3231";
  let comment_id = 3231;
  let gist_id;
  // Dependency Barrier
  let deps = {};
  deps["gist_id"] = matchAnyGistAdded();
  let pkMap = {"gist_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  gist_id = captured["gist_id"];
  createGistComment(body, comment_id, gist_id);
  // waitForGistCommentAdded(body, comment_id, gist_id);
  tryToAddExistingGistComment(body, comment_id, gist_id);
  updateGistComment(body, comment_id, gist_id);
  verifyGistCommentExists(body, comment_id, gist_id);
  deleteGistComment(body, comment_id, gist_id);
  tryToDeleteANonExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentDoesNotExist(body, comment_id, gist_id);
});

// Story: crud:GistComment:nondet:negative:dup-add
bthread("crud:GistComment:nondet:negative:dup-add", function () {
  let body = "body_3236";
  let comment_id = 3236;
  let gist_id;
  // Dependency Barrier
  let deps = {};
  deps["gist_id"] = matchAnyGistAdded();
  let pkMap = {"gist_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  gist_id = captured["gist_id"];
  createGistComment(body, comment_id, gist_id);
  // waitForGistCommentAdded(body, comment_id, gist_id);
  verifyGistCommentExists(body, comment_id, gist_id);
  tryToAddExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentExists(body, comment_id, gist_id);
});

// Story: crud:OrganizationProject:read_only
bthread("crud:OrganizationProject:read_only", function () {
  let body = "body_3240";
  let name = "name_3240";
  let org = 3240;
  verifyOrganizationProjectExists(body, name, org);
});

// Story: crud:ProjectColumn:read_only
bthread("crud:ProjectColumn:read_only", function () {
  let column_id = 3250;
  let name = "name_3250";
  let position = "position_3250";
  verifyProjectColumnExists(column_id, name, position);
});

// Story: crud:ProjectCollaborator:nondet:1:1
bthread("crud:ProjectCollaborator:nondet:1:1", function () {
  let permission = "permission_3260";
  let project_id;
  let username = "username_3260";
  // Dependency Barrier
  let deps = {};
  deps["project_id"] = matchAnyProjectAdded();
  let pkMap = {"project_id": "project_id"};
  let captured = resolveDependencies(deps, pkMap);
  project_id = captured["project_id"];
  addProjectCollaborator(permission, project_id, username);
  waitForProjectCollaboratorAdded(permission, project_id, username);
  tryToAddExistingProjectCollaborator(permission, project_id, username);
  verifyProjectCollaboratorExists(permission, project_id, username);
  removeProjectCollaborator(permission, project_id, username);
  tryToDeleteANonExistingProjectCollaborator(permission, project_id, username);
  verifyProjectCollaboratorDoesNotExist(permission, project_id, username);
});

// Story: crud:ProjectCollaborator:nondet:1:2
bthread("crud:ProjectCollaborator:nondet:1:2", function () {
  let permission = "permission_3261";
  let project_id;
  let username = "username_3261";
  // Dependency Barrier
  let deps = {};
  deps["project_id"] = matchAnyProjectAdded();
  let pkMap = {"project_id": "project_id"};
  let captured = resolveDependencies(deps, pkMap);
  project_id = captured["project_id"];
  addProjectCollaborator(permission, project_id, username);
  // waitForProjectCollaboratorAdded(permission, project_id, username);
  tryToAddExistingProjectCollaborator(permission, project_id, username);
  verifyProjectCollaboratorExists(permission, project_id, username);
  removeProjectCollaborator(permission, project_id, username);
  tryToDeleteANonExistingProjectCollaborator(permission, project_id, username);
  verifyProjectCollaboratorDoesNotExist(permission, project_id, username);
});

// Story: crud:ProjectCollaborator:nondet:negative:dup-add
bthread("crud:ProjectCollaborator:nondet:negative:dup-add", function () {
  let permission = "permission_3266";
  let project_id;
  let username = "username_3266";
  // Dependency Barrier
  let deps = {};
  deps["project_id"] = matchAnyProjectAdded();
  let pkMap = {"project_id": "project_id"};
  let captured = resolveDependencies(deps, pkMap);
  project_id = captured["project_id"];
  addProjectCollaborator(permission, project_id, username);
  // waitForProjectCollaboratorAdded(permission, project_id, username);
  verifyProjectCollaboratorExists(permission, project_id, username);
  tryToAddExistingProjectCollaborator(permission, project_id, username);
  verifyProjectCollaboratorExists(permission, project_id, username);
});

// Story: crud:RepositoryProject:read_only
bthread("crud:RepositoryProject:read_only", function () {
  let body = "body_3280";
  let name = "name_3280";
  let owner = 3280;
  let repo = "repo_3280";
  verifyRepositoryProjectExists(body, name, owner, repo);
});

// Story: crud:CheckRun:read_only
bthread("crud:CheckRun:read_only", function () {
  let actions = "actions_3300";
  let check_run_id = 3300;
  let completed_at = "completed_at_3300";
  let conclusion = "conclusion_3300";
  let details_url = "details_url_3300";
  let external_id = 3300;
  let head_sha = "head_sha_3300";
  let name = "name_3300";
  let output = {};
  let owner = 3300;
  let repo = "repo_3300";
  let started_at = "started_at_3300";
  let status = "status_3300";
  verifyCheckRunExists(actions, check_run_id, completed_at, conclusion, details_url, external_id, head_sha, name, output, owner, repo, started_at, status);
});

// Story: crud:CheckRunAnnotations:read_only
bthread("crud:CheckRunAnnotations:read_only", function () {
  let check_run_id = 3310;
  let owner = 3310;
  let repo = "repo_3310";
  verifyCheckRunAnnotationsExists(check_run_id, owner, repo);
});

// Story: crud:CheckSuite:read_only
bthread("crud:CheckSuite:read_only", function () {
  let app_id;
  let check_name = "check_name_3330";
  let check_suite_id = 3330;
  let head_sha = "head_sha_3330";
  let owner = 3330;
  let page = "page_3330";
  let per_page = "per_page_3330";
  let ref = "ref_3330";
  let repo = "repo_3330";
  verifyCheckSuiteExists(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo);
});

// Story: crud:OrganizationActionsBilling:read_only
bthread("crud:OrganizationActionsBilling:read_only", function () {
  let org = 3360;
  verifyOrganizationActionsBillingExists(org);
});

// Story: crud:OrganizationPackagesBilling:read_only
bthread("crud:OrganizationPackagesBilling:read_only", function () {
  let org = 3370;
  verifyOrganizationPackagesBillingExists(org);
});

// Story: crud:OrganizationSharedStorageBilling:read_only
bthread("crud:OrganizationSharedStorageBilling:read_only", function () {
  let org = 3380;
  verifyOrganizationSharedStorageBillingExists(org);
});

// Story: crud:UserActionsBilling:read_only
bthread("crud:UserActionsBilling:read_only", function () {
  let username = 3390;
  verifyUserActionsBillingExists(username);
});

// Story: crud:UserPackagesBilling:read_only
bthread("crud:UserPackagesBilling:read_only", function () {
  let username = 3400;
  verifyUserPackagesBillingExists(username);
});

// Story: crud:UserPremiumRequestUsage:read_only
bthread("crud:UserPremiumRequestUsage:read_only", function () {
  let day = "day_3410";
  let model = "model_3410";
  let month = "month_3410";
  let product = "product_3410";
  let username = 3410;
  let year = "year_3410";
  verifyUserPremiumRequestUsageExists(day, model, month, product, username, year);
});

// Story: crud:UserSharedStorageBilling:read_only
bthread("crud:UserSharedStorageBilling:read_only", function () {
  let username = 3420;
  verifyUserSharedStorageBillingExists(username);
});

// Story: crud:UserBillingUsage:read_only
bthread("crud:UserBillingUsage:read_only", function () {
  let day = "day_3430";
  let hour = "hour_3430";
  let month = "month_3430";
  let username = 3430;
  let year = "year_3430";
  verifyUserBillingUsageExists(day, hour, month, username, year);
});

// Story: crud:SecurityAdvisory:read_only
bthread("crud:SecurityAdvisory:read_only", function () {
  let ghsa_id = 3440;
  verifySecurityAdvisoryExists(ghsa_id);
});

// Story: crud:RepositorySecurityAdvisory:read_only
bthread("crud:RepositorySecurityAdvisory:read_only", function () {
  let credits = "credits_3450";
  let cve_id = 3450;
  let cvss_vector_string = "cvss_vector_string_3450";
  let cwe_ids = "cwe_ids_3450";
  let description = "description_3450";
  let ghsa_id = 3450;
  let owner = 3450;
  let repo = "repo_3450";
  let severity = "severity_3450";
  let start_private_fork = "start_private_fork_3450";
  let state = "state_3450";
  let summary = "summary_3450";
  let vulnerabilities = "vulnerabilities_3450";
  verifyRepositorySecurityAdvisoryExists(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, start_private_fork, state, summary, vulnerabilities);
});

// Story: crud:SecretScanningAlert:read_only
bthread("crud:SecretScanningAlert:read_only", function () {
  let alert_number = "alert_number_3490";
  let owner = 3490;
  let repo = "repo_3490";
  let state = "state_3490";
  verifySecretScanningAlertExists(alert_number, owner, repo, state);
});

// Story: crud:SecretScanningScanHistory:read_only
bthread("crud:SecretScanningScanHistory:read_only", function () {
  let owner = 3560;
  let repo = "repo_3560";
  verifySecretScanningScanHistoryExists(owner, repo);
});

// Story: crud:CopilotTeams:nondet:1:1
bthread("crud:CopilotTeams:nondet:1:1", function () {
  let org = 3570;
  let selected_teams = "selected_teams_3570";
  addCopilotTeams(org, selected_teams);
  waitForCopilotTeamsAdded(org, selected_teams);
  tryToAddExistingCopilotTeams(org, selected_teams);
  verifyCopilotTeamsExists(org, selected_teams);
  removeCopilotTeams(org, selected_teams);
  tryToDeleteANonExistingCopilotTeams(org, selected_teams);
  verifyCopilotTeamsDoesNotExist(org, selected_teams);
});

// Story: crud:CopilotTeams:nondet:1:2
bthread("crud:CopilotTeams:nondet:1:2", function () {
  let org = 3571;
  let selected_teams = "selected_teams_3571";
  addCopilotTeams(org, selected_teams);
  // waitForCopilotTeamsAdded(org, selected_teams);
  tryToAddExistingCopilotTeams(org, selected_teams);
  verifyCopilotTeamsExists(org, selected_teams);
  removeCopilotTeams(org, selected_teams);
  tryToDeleteANonExistingCopilotTeams(org, selected_teams);
  verifyCopilotTeamsDoesNotExist(org, selected_teams);
});

// Story: crud:CopilotTeams:nondet:negative:dup-add
bthread("crud:CopilotTeams:nondet:negative:dup-add", function () {
  let org = 3576;
  let selected_teams = "selected_teams_3576";
  addCopilotTeams(org, selected_teams);
  // waitForCopilotTeamsAdded(org, selected_teams);
  verifyCopilotTeamsExists(org, selected_teams);
  tryToAddExistingCopilotTeams(org, selected_teams);
  verifyCopilotTeamsExists(org, selected_teams);
});

// Story: crud:CopilotUsers:nondet:1:1
bthread("crud:CopilotUsers:nondet:1:1", function () {
  let org = 3580;
  let selected_usernames = "selected_usernames_3580";
  addCopilotUsers(org, selected_usernames);
  waitForCopilotUsersAdded(org, selected_usernames);
  tryToAddExistingCopilotUsers(org, selected_usernames);
  verifyCopilotUsersExists(org, selected_usernames);
  removeCopilotUsers(org, selected_usernames);
  tryToDeleteANonExistingCopilotUsers(org, selected_usernames);
  verifyCopilotUsersDoesNotExist(org, selected_usernames);
});

// Story: crud:CopilotUsers:nondet:1:2
bthread("crud:CopilotUsers:nondet:1:2", function () {
  let org = 3581;
  let selected_usernames = "selected_usernames_3581";
  addCopilotUsers(org, selected_usernames);
  // waitForCopilotUsersAdded(org, selected_usernames);
  tryToAddExistingCopilotUsers(org, selected_usernames);
  verifyCopilotUsersExists(org, selected_usernames);
  removeCopilotUsers(org, selected_usernames);
  tryToDeleteANonExistingCopilotUsers(org, selected_usernames);
  verifyCopilotUsersDoesNotExist(org, selected_usernames);
});

// Story: crud:CopilotUsers:nondet:negative:dup-add
bthread("crud:CopilotUsers:nondet:negative:dup-add", function () {
  let org = 3586;
  let selected_usernames = "selected_usernames_3586";
  addCopilotUsers(org, selected_usernames);
  // waitForCopilotUsersAdded(org, selected_usernames);
  verifyCopilotUsersExists(org, selected_usernames);
  tryToAddExistingCopilotUsers(org, selected_usernames);
  verifyCopilotUsersExists(org, selected_usernames);
});

// Story: crud:CopilotBilling:read_only
bthread("crud:CopilotBilling:read_only", function () {
  let org = 3590;
  verifyCopilotBillingExists(org);
});

// Story: crud:CopilotSeats:read_only
bthread("crud:CopilotSeats:read_only", function () {
  let org = 3600;
  let page = "page_3600";
  let per_page = "per_page_3600";
  verifyCopilotSeatsExists(org, page, per_page);
});

// Story: crud:CopilotMetricsOrganization:read_only
bthread("crud:CopilotMetricsOrganization:read_only", function () {
  let org = 3610;
  let page = "page_3610";
  let per_page = "per_page_3610";
  let since = "since_3610";
  let until = "until_3610";
  verifyCopilotMetricsOrganizationExists(org, page, per_page, since, until);
});

// Story: crud:CopilotSeatUser:read_only
bthread("crud:CopilotSeatUser:read_only", function () {
  let org = 3620;
  let username = "username_3620";
  verifyCopilotSeatUserExists(org, username);
});

// Story: crud:CopilotMetricsTeam:read_only
bthread("crud:CopilotMetricsTeam:read_only", function () {
  let org = 3630;
  let page = "page_3630";
  let per_page = "per_page_3630";
  let since = "since_3630";
  let team_slug = "team_slug_3630";
  let until = "until_3630";
  verifyCopilotMetricsTeamExists(org, page, per_page, since, team_slug, until);
});

// Story: crud:CodeSearch:read_only
bthread("crud:CodeSearch:read_only", function () {
  let q = "q_3640";
  verifyCodeSearchExists(q);
});

// Story: crud:CommitSearch:read_only
bthread("crud:CommitSearch:read_only", function () {
  let q = "q_3650";
  verifyCommitSearchExists(q);
});

// Story: crud:IssueSearch:read_only
bthread("crud:IssueSearch:read_only", function () {
  let q = "q_3660";
  verifyIssueSearchExists(q);
});

// Story: crud:LabelSearch:read_only
bthread("crud:LabelSearch:read_only", function () {
  let q = "q_3670";
  let repository_id;
  verifyLabelSearchExists(q, repository_id);
});

// Story: crud:RepositorySearch:read_only
bthread("crud:RepositorySearch:read_only", function () {
  let q = "q_3680";
  verifyRepositorySearchExists(q);
});

// Story: crud:TopicSearch:read_only
bthread("crud:TopicSearch:read_only", function () {
  let q = "q_3690";
  verifyTopicSearchExists(q);
});

// Story: crud:UserSearch:read_only
bthread("crud:UserSearch:read_only", function () {
  let q = "q_3700";
  verifyUserSearchExists(q);
});

// Story: crud:PrivateRegistry:nondet:1:1
bthread("crud:PrivateRegistry:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_3710";
  let key_id = 3710;
  let org = 3710;
  let page = "page_3710";
  let per-page = "per-page_3710";
  let registry_type = "registry_type_3710";
  let secret_name = "secret_name_3710";
  let selected_repository_ids;
  let url = "url_3710";
  let username = "username_3710";
  let visibility = "visibility_3710";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  waitForPrivateRegistryAdded(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToAddExistingPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  updateOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  deleteOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToDeleteANonExistingPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryDoesNotExist(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
});

// Story: crud:PrivateRegistry:nondet:1:2
bthread("crud:PrivateRegistry:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_3711";
  let key_id = 3711;
  let org = 3711;
  let page = "page_3711";
  let per-page = "per-page_3711";
  let registry_type = "registry_type_3711";
  let secret_name = "secret_name_3711";
  let selected_repository_ids;
  let url = "url_3711";
  let username = "username_3711";
  let visibility = "visibility_3711";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  // waitForPrivateRegistryAdded(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToAddExistingPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  updateOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  deleteOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToDeleteANonExistingPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryDoesNotExist(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
});

// Story: crud:PrivateRegistry:nondet:negative:dup-add
bthread("crud:PrivateRegistry:nondet:negative:dup-add", function () {
  let encrypted_value = "encrypted_value_3716";
  let key_id = 3716;
  let org = 3716;
  let page = "page_3716";
  let per-page = "per-page_3716";
  let registry_type = "registry_type_3716";
  let secret_name = "secret_name_3716";
  let selected_repository_ids;
  let url = "url_3716";
  let username = "username_3716";
  let visibility = "visibility_3716";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "username"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  // waitForPrivateRegistryAdded(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToAddExistingPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
});

// Story: crud:PrivateRegistryPublicKey:read_only
bthread("crud:PrivateRegistryPublicKey:read_only", function () {
  let org = 3720;
  verifyPrivateRegistryPublicKeyExists(org);
});

// Story: crud:NetworkConfiguration:nondet:1:1
bthread("crud:NetworkConfiguration:nondet:1:1", function () {
  let compute_service = "compute_service_3730";
  let name = "name_3730";
  let network_configuration_id;
  let network_settings_ids = "network_settings_ids_3730";
  let org = 3730;
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  let pkMap = {"network_configuration_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  createNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  waitForNetworkConfigurationAdded(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToAddExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
  updateNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  deleteNetworkConfigurationFromOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToDeleteANonExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationDoesNotExist(compute_service, name, network_configuration_id, network_settings_ids, org);
});

// Story: crud:NetworkConfiguration:nondet:1:2
bthread("crud:NetworkConfiguration:nondet:1:2", function () {
  let compute_service = "compute_service_3731";
  let name = "name_3731";
  let network_configuration_id;
  let network_settings_ids = "network_settings_ids_3731";
  let org = 3731;
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  let pkMap = {"network_configuration_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  createNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  // waitForNetworkConfigurationAdded(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToAddExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  updateNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
  deleteNetworkConfigurationFromOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToDeleteANonExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationDoesNotExist(compute_service, name, network_configuration_id, network_settings_ids, org);
});

// Story: crud:NetworkConfiguration:nondet:negative:dup-add
bthread("crud:NetworkConfiguration:nondet:negative:dup-add", function () {
  let compute_service = "compute_service_3736";
  let name = "name_3736";
  let network_configuration_id;
  let network_settings_ids = "network_settings_ids_3736";
  let org = 3736;
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  let pkMap = {"network_configuration_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  createNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  // waitForNetworkConfigurationAdded(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToAddExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
});

// Story: crud:NetworkSettings:read_only
bthread("crud:NetworkSettings:read_only", function () {
  let network_settings_id = 3740;
  let org = 3740;
  verifyNetworkSettingsExists(network_settings_id, org);
});

// Story: crud:CodeOfConduct:read_only
bthread("crud:CodeOfConduct:read_only", function () {
  let key = 3760;
  verifyCodeOfConductExists(key);
});
