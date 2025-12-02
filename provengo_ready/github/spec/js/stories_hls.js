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
  let allow_auto_merge = "allow_auto_merge_200";
  let allow_merge_commit = "allow_merge_commit_200";
  let allow_rebase_merge = "allow_rebase_merge_200";
  let allow_squash_merge = "allow_squash_merge_200";
  let auto_init = "auto_init_200";
  let delete_branch_on_merge = "delete_branch_on_merge_200";
  let description = "description_200";
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
  let owner = 200;
  let private = "private_200";
  let ref = "ref_200";
  let repo = "repo_200";
  let repository_id = 200;
  let squash_merge_commit_message = "squash_merge_commit_message_200";
  let squash_merge_commit_title = "squash_merge_commit_title_200";
  let template_owner = "template_owner_200";
  let template_repo = "template_repo_200";
  let username = "username_200";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  // waitForRepositoryAdded(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  tryToAddExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  enableSelectedRepositoryGithubActionsOrganization(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  disableSelectedRepositoryGithubActionsOrganization(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  tryToDeleteANonExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  verifyRepositoryDoesNotExist(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
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
  let owner = 201;
  let private = "private_201";
  let ref = "ref_201";
  let repo = "repo_201";
  let repository_id = 201;
  let squash_merge_commit_message = "squash_merge_commit_message_201";
  let squash_merge_commit_title = "squash_merge_commit_title_201";
  let template_owner = "template_owner_201";
  let template_repo = "template_repo_201";
  let username = "username_201";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  // waitForRepositoryAdded(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  tryToAddExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  enableSelectedRepositoryGithubActionsOrganization(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  disableSelectedRepositoryGithubActionsOrganization(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  tryToDeleteANonExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  verifyRepositoryDoesNotExist(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
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
  let owner = 206;
  let private = "private_206";
  let ref = "ref_206";
  let repo = "repo_206";
  let repository_id = 206;
  let squash_merge_commit_message = "squash_merge_commit_message_206";
  let squash_merge_commit_title = "squash_merge_commit_title_206";
  let template_owner = "template_owner_206";
  let template_repo = "template_repo_206";
  let username = "username_206";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  // waitForRepositoryAdded(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  tryToAddExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, org, owner, private, ref, repo, repository_id, squash_merge_commit_message, squash_merge_commit_title, team_id, template_owner, template_repo, username);
});

// Story: crud:RepositoryRuleset:nondet:1:1
bthread("crud:RepositoryRuleset:nondet:1:1", function () {
  let bypass_actors = "bypass_actors_210";
  let conditions = "conditions_210";
  let enforcement = "enforcement_210";
  let name = "name_210";
  let org = "org_210";
  let owner = 210;
  let repo = "repo_210";
  let rules = "rules_210";
  let ruleset_id = 210;
  let target = "target_210";
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  // waitForRepositoryRulesetAdded(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  tryToAddExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  updateRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  deleteRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  tryToDeleteANonExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
});

// Story: crud:RepositoryRuleset:nondet:1:2
bthread("crud:RepositoryRuleset:nondet:1:2", function () {
  let bypass_actors = "bypass_actors_211";
  let conditions = "conditions_211";
  let enforcement = "enforcement_211";
  let name = "name_211";
  let org = "org_211";
  let owner = 211;
  let repo = "repo_211";
  let rules = "rules_211";
  let ruleset_id = 211;
  let target = "target_211";
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  // waitForRepositoryRulesetAdded(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  tryToAddExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  updateRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  deleteRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  tryToDeleteANonExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
});

// Story: crud:RepositoryRuleset:nondet:negative:dup-add
bthread("crud:RepositoryRuleset:nondet:negative:dup-add", function () {
  let bypass_actors = "bypass_actors_216";
  let conditions = "conditions_216";
  let enforcement = "enforcement_216";
  let name = "name_216";
  let org = "org_216";
  let owner = 216;
  let repo = "repo_216";
  let rules = "rules_216";
  let ruleset_id = 216;
  let target = "target_216";
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  // waitForRepositoryRulesetAdded(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  tryToAddExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, org, owner, repo, rules, ruleset_id, target);
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
  let org = "org_230";
  let owner = "owner_230";
  let predicate_type = "predicate_type_230";
  let repo = "repo_230";
  let subject_digest = "subject_digest_230";
  let username = 230;
  verifyAttestationExists(attestation_id, org, owner, predicate_type, repo, subject_digest, username);
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
  // waitForAutolinkAdded(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
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
  // waitForAutomatedSecurityFixesAdded(owner, repo);
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
  // waitForAdminBranchProtectionAdded(branch, owner, repo);
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
  // waitForCommitSignatureProtectionAdded(branch, owner, repo);
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
  // waitForStatusCheckContextsAdded(branch, owner, repo);
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

// Story: crud:AppAccessRestriction:nondet:1:1
bthread("crud:AppAccessRestriction:nondet:1:1", function () {
  let apps = "apps_350";
  let branch = "branch_350";
  let owner = 350;
  let repo = "repo_350";
  addAppAccessRestrictions(apps, branch, owner, repo);
  // waitForAppAccessRestrictionAdded(apps, branch, owner, repo);
  tryToAddExistingAppAccessRestriction(apps, branch, owner, repo);
  verifyAppAccessRestrictionExists(apps, branch, owner, repo);
  setAppAccessRestrictions(apps, branch, owner, repo);
  removeAppAccessRestrictions(apps, branch, owner, repo);
  tryToDeleteANonExistingAppAccessRestriction(apps, branch, owner, repo);
  verifyAppAccessRestrictionDoesNotExist(apps, branch, owner, repo);
});

// Story: crud:AppAccessRestriction:nondet:1:2
bthread("crud:AppAccessRestriction:nondet:1:2", function () {
  let apps = "apps_351";
  let branch = "branch_351";
  let owner = 351;
  let repo = "repo_351";
  addAppAccessRestrictions(apps, branch, owner, repo);
  // waitForAppAccessRestrictionAdded(apps, branch, owner, repo);
  tryToAddExistingAppAccessRestriction(apps, branch, owner, repo);
  setAppAccessRestrictions(apps, branch, owner, repo);
  verifyAppAccessRestrictionExists(apps, branch, owner, repo);
  removeAppAccessRestrictions(apps, branch, owner, repo);
  tryToDeleteANonExistingAppAccessRestriction(apps, branch, owner, repo);
  verifyAppAccessRestrictionDoesNotExist(apps, branch, owner, repo);
});

// Story: crud:AppAccessRestriction:nondet:negative:dup-add
bthread("crud:AppAccessRestriction:nondet:negative:dup-add", function () {
  let apps = "apps_356";
  let branch = "branch_356";
  let owner = 356;
  let repo = "repo_356";
  addAppAccessRestrictions(apps, branch, owner, repo);
  // waitForAppAccessRestrictionAdded(apps, branch, owner, repo);
  verifyAppAccessRestrictionExists(apps, branch, owner, repo);
  tryToAddExistingAppAccessRestriction(apps, branch, owner, repo);
  verifyAppAccessRestrictionExists(apps, branch, owner, repo);
});

// Story: crud:TeamAccessRestriction:nondet:1:1
bthread("crud:TeamAccessRestriction:nondet:1:1", function () {
  let branch = "branch_360";
  let owner = 360;
  let repo = "repo_360";
  let teams = "teams_360";
  addTeamAccessRestrictions(branch, owner, repo, teams);
  // waitForTeamAccessRestrictionAdded(branch, owner, repo, teams);
  tryToAddExistingTeamAccessRestriction(branch, owner, repo, teams);
  verifyTeamAccessRestrictionExists(branch, owner, repo, teams);
  setTeamAccessRestrictions(branch, owner, repo, teams);
  removeTeamAccessRestrictions(branch, owner, repo, teams);
  tryToDeleteANonExistingTeamAccessRestriction(branch, owner, repo, teams);
  verifyTeamAccessRestrictionDoesNotExist(branch, owner, repo, teams);
});

// Story: crud:TeamAccessRestriction:nondet:1:2
bthread("crud:TeamAccessRestriction:nondet:1:2", function () {
  let branch = "branch_361";
  let owner = 361;
  let repo = "repo_361";
  let teams = "teams_361";
  addTeamAccessRestrictions(branch, owner, repo, teams);
  // waitForTeamAccessRestrictionAdded(branch, owner, repo, teams);
  tryToAddExistingTeamAccessRestriction(branch, owner, repo, teams);
  setTeamAccessRestrictions(branch, owner, repo, teams);
  verifyTeamAccessRestrictionExists(branch, owner, repo, teams);
  removeTeamAccessRestrictions(branch, owner, repo, teams);
  tryToDeleteANonExistingTeamAccessRestriction(branch, owner, repo, teams);
  verifyTeamAccessRestrictionDoesNotExist(branch, owner, repo, teams);
});

// Story: crud:TeamAccessRestriction:nondet:negative:dup-add
bthread("crud:TeamAccessRestriction:nondet:negative:dup-add", function () {
  let branch = "branch_366";
  let owner = 366;
  let repo = "repo_366";
  let teams = "teams_366";
  addTeamAccessRestrictions(branch, owner, repo, teams);
  // waitForTeamAccessRestrictionAdded(branch, owner, repo, teams);
  verifyTeamAccessRestrictionExists(branch, owner, repo, teams);
  tryToAddExistingTeamAccessRestriction(branch, owner, repo, teams);
  verifyTeamAccessRestrictionExists(branch, owner, repo, teams);
});

// Story: crud:UserAccessRestriction:nondet:1:1
bthread("crud:UserAccessRestriction:nondet:1:1", function () {
  let branch = "branch_370";
  let owner = 370;
  let repo = "repo_370";
  let users = "users_370";
  addUserAccessRestrictions(branch, owner, repo, users);
  // waitForUserAccessRestrictionAdded(branch, owner, repo, users);
  tryToAddExistingUserAccessRestriction(branch, owner, repo, users);
  verifyUserAccessRestrictionExists(branch, owner, repo, users);
  setUserAccessRestrictions(branch, owner, repo, users);
  removeUserAccessRestrictions(branch, owner, repo, users);
  tryToDeleteANonExistingUserAccessRestriction(branch, owner, repo, users);
  verifyUserAccessRestrictionDoesNotExist(branch, owner, repo, users);
});

// Story: crud:UserAccessRestriction:nondet:1:2
bthread("crud:UserAccessRestriction:nondet:1:2", function () {
  let branch = "branch_371";
  let owner = 371;
  let repo = "repo_371";
  let users = "users_371";
  addUserAccessRestrictions(branch, owner, repo, users);
  // waitForUserAccessRestrictionAdded(branch, owner, repo, users);
  tryToAddExistingUserAccessRestriction(branch, owner, repo, users);
  setUserAccessRestrictions(branch, owner, repo, users);
  verifyUserAccessRestrictionExists(branch, owner, repo, users);
  removeUserAccessRestrictions(branch, owner, repo, users);
  tryToDeleteANonExistingUserAccessRestriction(branch, owner, repo, users);
  verifyUserAccessRestrictionDoesNotExist(branch, owner, repo, users);
});

// Story: crud:UserAccessRestriction:nondet:negative:dup-add
bthread("crud:UserAccessRestriction:nondet:negative:dup-add", function () {
  let branch = "branch_376";
  let owner = 376;
  let repo = "repo_376";
  let users = "users_376";
  addUserAccessRestrictions(branch, owner, repo, users);
  // waitForUserAccessRestrictionAdded(branch, owner, repo, users);
  verifyUserAccessRestrictionExists(branch, owner, repo, users);
  tryToAddExistingUserAccessRestriction(branch, owner, repo, users);
  verifyUserAccessRestrictionExists(branch, owner, repo, users);
});

// Story: crud:Collaborator:nondet:1:1
bthread("crud:Collaborator:nondet:1:1", function () {
  let owner = 390;
  let permission = "permission_390";
  let repo = "repo_390";
  let username = "username_390";
  addCollaborator(owner, permission, repo, username);
  // waitForCollaboratorAdded(owner, permission, repo, username);
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
  let comment_id = 400;
  let owner = 400;
  let repo = "repo_400";
  verifyCommitCommentExists(comment_id, owner, repo);
});

// Story: crud:CommitCommentsForCommit:read_only
bthread("crud:CommitCommentsForCommit:read_only", function () {
  let body = "body_410";
  let commit_sha = "commit_sha_410";
  let line = 410;
  let owner = 410;
  let path = "path_410";
  let position = 410;
  let repo = "repo_410";
  verifyCommitCommentsForCommitExists(body, commit_sha, line, owner, path, position, repo);
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
  let ref = "ref_430";
  let repo = "repo_430";
  createOrUpdateFileContent(owner, path, ref, repo);
  // waitForRepositoryContentAdded(owner, path, ref, repo);
  tryToAddExistingRepositoryContent(owner, path, ref, repo);
  verifyRepositoryContentExists(owner, path, ref, repo);
  deleteFile(owner, path, ref, repo);
  tryToDeleteANonExistingRepositoryContent(owner, path, ref, repo);
  verifyRepositoryContentDoesNotExist(owner, path, ref, repo);
});

// Story: crud:RepositoryContent:nondet:1:2
bthread("crud:RepositoryContent:nondet:1:2", function () {
  let owner = 431;
  let path = "path_431";
  let ref = "ref_431";
  let repo = "repo_431";
  createOrUpdateFileContent(owner, path, ref, repo);
  // waitForRepositoryContentAdded(owner, path, ref, repo);
  tryToAddExistingRepositoryContent(owner, path, ref, repo);
  verifyRepositoryContentExists(owner, path, ref, repo);
  deleteFile(owner, path, ref, repo);
  tryToDeleteANonExistingRepositoryContent(owner, path, ref, repo);
  verifyRepositoryContentDoesNotExist(owner, path, ref, repo);
});

// Story: crud:RepositoryContent:nondet:negative:dup-add
bthread("crud:RepositoryContent:nondet:negative:dup-add", function () {
  let owner = 436;
  let path = "path_436";
  let ref = "ref_436";
  let repo = "repo_436";
  createOrUpdateFileContent(owner, path, ref, repo);
  // waitForRepositoryContentAdded(owner, path, ref, repo);
  verifyRepositoryContentExists(owner, path, ref, repo);
  tryToAddExistingRepositoryContent(owner, path, ref, repo);
  verifyRepositoryContentExists(owner, path, ref, repo);
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
  // waitForDeploymentAdded(auto_merge, deployment_id, description, environment, owner, payload, production_environment, ref, repo, required_contexts, task, transient_environment);
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
  // waitForEnvironmentAdded(environment_name, owner, repo);
  tryToAddExistingEnvironment(environment_name, owner, repo);
  verifyEnvironmentExists(environment_name, owner, repo);
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
  // waitForDeploymentBranchPolicyAdded(branch_policy_id, environment_name, name, owner, repo, type);
  tryToAddExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo, type);
  updateDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  deleteDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  tryToDeleteANonExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo, type);
  verifyDeploymentBranchPolicyDoesNotExist(branch_policy_id, environment_name, name, owner, repo, type);
});

// Story: crud:DeploymentBranchPolicy:nondet:1:2
bthread("crud:DeploymentBranchPolicy:nondet:1:2", function () {
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
  // waitForDeploymentProtectionRuleAdded(environment_name, owner, protection_rule_id, repo, run_id);
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

// Story: crud:DeploymentProtectionRules:read_only
bthread("crud:DeploymentProtectionRules:read_only", function () {
  let environment_name = "environment_name_500";
  let integration_id = 500;
  let owner = 500;
  let repo = "repo_500";
  verifyDeploymentProtectionRulesExists(environment_name, integration_id, owner, repo);
});

// Story: crud:Fork:read_only
bthread("crud:Fork:read_only", function () {
  let default_branch_only = "default_branch_only_510";
  let name = "name_510";
  let organization = "organization_510";
  let owner = 510;
  let repo = "repo_510";
  verifyForkExists(default_branch_only, name, organization, owner, repo);
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let active = "active_520";
  let config = {};
  let events = "events_520";
  let hook_id = 520;
  let name = "name_520";
  let org = 520;
  let owner = "owner_520";
  let repo = "repo_520";
  createWebhook(active, config, events, hook_id, name, org, owner, repo);
  // waitForWebhookAdded(active, config, events, hook_id, name, org, owner, repo);
  tryToAddExistingWebhook(active, config, events, hook_id, name, org, owner, repo);
  verifyWebhookExists(active, config, events, hook_id, name, org, owner, repo);
  updateWebhook(active, config, events, hook_id, name, org, owner, repo);
  deleteWebhook(active, config, events, hook_id, name, org, owner, repo);
  tryToDeleteANonExistingWebhook(active, config, events, hook_id, name, org, owner, repo);
  verifyWebhookDoesNotExist(active, config, events, hook_id, name, org, owner, repo);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let active = "active_521";
  let config = {};
  let events = "events_521";
  let hook_id = 521;
  let name = "name_521";
  let org = 521;
  let owner = "owner_521";
  let repo = "repo_521";
  createWebhook(active, config, events, hook_id, name, org, owner, repo);
  // waitForWebhookAdded(active, config, events, hook_id, name, org, owner, repo);
  tryToAddExistingWebhook(active, config, events, hook_id, name, org, owner, repo);
  updateWebhook(active, config, events, hook_id, name, org, owner, repo);
  verifyWebhookExists(active, config, events, hook_id, name, org, owner, repo);
  deleteWebhook(active, config, events, hook_id, name, org, owner, repo);
  tryToDeleteANonExistingWebhook(active, config, events, hook_id, name, org, owner, repo);
  verifyWebhookDoesNotExist(active, config, events, hook_id, name, org, owner, repo);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let active = "active_526";
  let config = {};
  let events = "events_526";
  let hook_id = 526;
  let name = "name_526";
  let org = 526;
  let owner = "owner_526";
  let repo = "repo_526";
  createWebhook(active, config, events, hook_id, name, org, owner, repo);
  // waitForWebhookAdded(active, config, events, hook_id, name, org, owner, repo);
  verifyWebhookExists(active, config, events, hook_id, name, org, owner, repo);
  tryToAddExistingWebhook(active, config, events, hook_id, name, org, owner, repo);
  verifyWebhookExists(active, config, events, hook_id, name, org, owner, repo);
});

// Story: crud:WebhookConfig:read_only
bthread("crud:WebhookConfig:read_only", function () {
  let content_type = "content_type_530";
  let hook_id = 530;
  let insecure_ssl = "insecure_ssl_530";
  let org = 530;
  let owner = "owner_530";
  let repo = "repo_530";
  let secret = "secret_530";
  let url = "url_530";
  verifyWebhookConfigExists(content_type, hook_id, insecure_ssl, org, owner, repo, secret, url);
});

// Story: crud:WebhookDelivery:read_only
bthread("crud:WebhookDelivery:read_only", function () {
  let delivery_id = 540;
  let hook_id = 540;
  let org = 540;
  let owner = "owner_540";
  let repo = "repo_540";
  verifyWebhookDeliveryExists(delivery_id, hook_id, org, owner, repo);
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
  // waitForDeployKeyAdded(key, key_id, owner, read_only, repo, title);
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

// Story: crud:Language:read_only
bthread("crud:Language:read_only", function () {
  let owner = 610;
  let repo = "repo_610";
  verifyLanguageExists(owner, repo);
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
  // waitForPagesSiteAdded(build_type, cname, https_enforced, owner, repo, source, source.branch, source.path);
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
  let repo = "repo_650";
  verifyPagesBuildExists(build_id, owner, repo);
});

// Story: crud:PagesBuilds:read_only
bthread("crud:PagesBuilds:read_only", function () {
  let owner = 660;
  let repo = "repo_660";
  verifyPagesBuildsExists(owner, repo);
});

// Story: crud:LatestPagesBuild:read_only
bthread("crud:LatestPagesBuild:read_only", function () {
  let owner = 670;
  let repo = "repo_670";
  verifyLatestPagesBuildExists(owner, repo);
});

// Story: crud:PagesDeployment:read_only
bthread("crud:PagesDeployment:read_only", function () {
  let owner = 680;
  let repo = "repo_680";
  verifyPagesDeploymentExists(owner, pages_deployment_id, repo);
});

// Story: crud:PagesHealth:read_only
bthread("crud:PagesHealth:read_only", function () {
  let owner = 700;
  let repo = "repo_700";
  verifyPagesHealthExists(owner, repo);
});

// Story: crud:PrivateVulnerabilityReporting:read_only
bthread("crud:PrivateVulnerabilityReporting:read_only", function () {
  let owner = 710;
  let repo = "repo_710";
  verifyPrivateVulnerabilityReportingExists(owner, repo);
});

// Story: crud:CustomPropertyValues:read_only
bthread("crud:CustomPropertyValues:read_only", function () {
  let owner = 720;
  let repo = "repo_720";
  verifyCustomPropertyValuesExists(owner, repo);
});

// Story: crud:Release:nondet:1:1
bthread("crud:Release:nondet:1:1", function () {
  let body = "body_730";
  let discussion_category_name = "discussion_category_name_730";
  let draft = "draft_730";
  let generate_release_notes = "generate_release_notes_730";
  let make_latest = "make_latest_730";
  let name = "name_730";
  let owner = 730;
  let prerelease = "prerelease_730";
  let release_id = 730;
  let repo = "repo_730";
  let tag_name = "tag_name_730";
  let target_commitish = "target_commitish_730";
  createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  // waitForReleaseAdded(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToAddExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  updateRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  deleteRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToDeleteANonExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseDoesNotExist(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
});

// Story: crud:Release:nondet:1:2
bthread("crud:Release:nondet:1:2", function () {
  let body = "body_731";
  let discussion_category_name = "discussion_category_name_731";
  let draft = "draft_731";
  let generate_release_notes = "generate_release_notes_731";
  let make_latest = "make_latest_731";
  let name = "name_731";
  let owner = 731;
  let prerelease = "prerelease_731";
  let release_id = 731;
  let repo = "repo_731";
  let tag_name = "tag_name_731";
  let target_commitish = "target_commitish_731";
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
  let body = "body_736";
  let discussion_category_name = "discussion_category_name_736";
  let draft = "draft_736";
  let generate_release_notes = "generate_release_notes_736";
  let make_latest = "make_latest_736";
  let name = "name_736";
  let owner = 736;
  let prerelease = "prerelease_736";
  let release_id = 736;
  let repo = "repo_736";
  let tag_name = "tag_name_736";
  let target_commitish = "target_commitish_736";
  createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  // waitForReleaseAdded(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToAddExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
});

// Story: crud:ReleaseAsset:nondet:1:1
bthread("crud:ReleaseAsset:nondet:1:1", function () {
  let asset_id = 740;
  let label = "label_740";
  let name = "name_740";
  let owner = 740;
  let repo = "repo_740";
  // Dependency Barrier
  let deps = {};
  deps["release_id"] = matchAnyReleaseAdded();
  let pkMap = {"release_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  release_id = captured["release_id"];
  uploadReleaseAsset(asset_id, label, name, owner, release_id, repo);
  // waitForReleaseAssetAdded(asset_id, label, name, owner, release_id, repo);
  tryToAddExistingReleaseAsset(asset_id, label, name, owner, release_id, repo);
  verifyReleaseAssetExists(asset_id, label, name, owner, release_id, repo);
  updateReleaseAsset(asset_id, label, name, owner, release_id, repo);
  deleteReleaseAsset(asset_id, label, name, owner, release_id, repo);
  tryToDeleteANonExistingReleaseAsset(asset_id, label, name, owner, release_id, repo);
  verifyReleaseAssetDoesNotExist(asset_id, label, name, owner, release_id, repo);
});

// Story: crud:ReleaseAsset:nondet:1:2
bthread("crud:ReleaseAsset:nondet:1:2", function () {
  let asset_id = 741;
  let label = "label_741";
  let name = "name_741";
  let owner = 741;
  let repo = "repo_741";
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
  let asset_id = 746;
  let label = "label_746";
  let name = "name_746";
  let owner = 746;
  let repo = "repo_746";
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

// Story: crud:RepositoryRulesetHistory:read_only
bthread("crud:RepositoryRulesetHistory:read_only", function () {
  let owner = 760;
  let repo = "repo_760";
  let ruleset_id = 760;
  let version_id = 760;
  verifyRepositoryRulesetHistoryExists(owner, repo, ruleset_id, version_id);
});

// Story: crud:RepositoryRuleSuite:read_only
bthread("crud:RepositoryRuleSuite:read_only", function () {
  let owner = 770;
  let repo = "repo_770";
  let rule_suite_id = 770;
  verifyRepositoryRuleSuiteExists(owner, repo, rule_suite_id);
});

// Story: crud:BranchRules:read_only
bthread("crud:BranchRules:read_only", function () {
  let branch = "branch_780";
  let owner = 780;
  let repo = "repo_780";
  verifyBranchRulesExists(branch, owner, repo);
});

// Story: crud:TagProtection:nondet:1:1
bthread("crud:TagProtection:nondet:1:1", function () {
  let owner = 800;
  let pattern = "pattern_800";
  let repo = "repo_800";
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

// Story: crud:TagProtection:nondet:1:2
bthread("crud:TagProtection:nondet:1:2", function () {
  let owner = 801;
  let pattern = "pattern_801";
  let repo = "repo_801";
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
  let owner = 806;
  let pattern = "pattern_806";
  let repo = "repo_806";
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

// Story: crud:RepositoryTopics:read_only
bthread("crud:RepositoryTopics:read_only", function () {
  let names = "names_810";
  let owner = 810;
  let repo = "repo_810";
  verifyRepositoryTopicsExists(names, owner, repo);
});

// Story: crud:RepositoryInvitation:read_only
bthread("crud:RepositoryInvitation:read_only", function () {

  verifyRepositoryInvitationExists(invitation_id);
});

// Story: crud:HostedRunner:nondet:1:1
bthread("crud:HostedRunner:nondet:1:1", function () {
  let enable_static_ip = "enable_static_ip_830";
  let image = {};
  let maximum_runners = 830;
  let name = "name_830";
  let org = 830;
  let size = "size_830";
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
  verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  updateHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  deleteHostedRunnerForOrg(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  tryToDeleteANonExistingHostedRunner(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
  verifyHostedRunnerDoesNotExist(enable_static_ip, hosted_runner_id, image, maximum_runners, name, org, runner_group_id, size);
});

// Story: crud:HostedRunner:nondet:1:2
bthread("crud:HostedRunner:nondet:1:2", function () {
  let enable_static_ip = "enable_static_ip_831";
  let image = {};
  let maximum_runners = 831;
  let name = "name_831";
  let org = 831;
  let size = "size_831";
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
  let enable_static_ip = "enable_static_ip_836";
  let image = {};
  let maximum_runners = 836;
  let name = "name_836";
  let org = 836;
  let size = "size_836";
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
  let org = 840;
  verifyActionsPermissionsExists(org);
});

// Story: crud:ArtifactAndLogRetention:read_only
bthread("crud:ArtifactAndLogRetention:read_only", function () {
  let org = "org_850";
  let owner = 850;
  let repo = "repo_850";
  verifyArtifactAndLogRetentionExists(org, owner, repo);
});

// Story: crud:ForkPrContributorApproval:read_only
bthread("crud:ForkPrContributorApproval:read_only", function () {
  let org = "org_860";
  let owner = 860;
  let repo = "repo_860";
  verifyForkPrContributorApprovalExists(org, owner, repo);
});

// Story: crud:ForkPrWorkflowsPrivateRepos:read_only
bthread("crud:ForkPrWorkflowsPrivateRepos:read_only", function () {
  let org = 870;
  verifyForkPrWorkflowsPrivateReposExists(org);
});

// Story: crud:Repositories:read_only
bthread("crud:Repositories:read_only", function () {
  let org = 880;
  verifyRepositoriesExists(org, selected_repository_ids);
});

// Story: crud:SelectedActions:read_only
bthread("crud:SelectedActions:read_only", function () {
  let org = 890;
  verifySelectedActionsExists(org);
});

// Story: crud:SelfHostedRunners:read_only
bthread("crud:SelfHostedRunners:read_only", function () {
  let enabled_repositories = "enabled_repositories_900";
  let org = 900;
  verifySelfHostedRunnersExists(enabled_repositories, org);
});

// Story: crud:SelfHostedRunnersRepositories:read_only
bthread("crud:SelfHostedRunnersRepositories:read_only", function () {
  let org = 910;
  verifySelfHostedRunnersRepositoriesExists(org, selected_repository_ids);
});

// Story: crud:SelfHostedRunnersRepository:nondet:1:1
bthread("crud:SelfHostedRunnersRepository:nondet:1:1", function () {
  let org = 920;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id);
  // waitForSelfHostedRunnersRepositoryAdded(org, repository_id);
  tryToAddExistingSelfHostedRunnersRepository(org, repository_id);
  verifySelfHostedRunnersRepositoryExists(org, repository_id);
  disableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id);
  tryToDeleteANonExistingSelfHostedRunnersRepository(org, repository_id);
  verifySelfHostedRunnersRepositoryDoesNotExist(org, repository_id);
});

// Story: crud:SelfHostedRunnersRepository:nondet:1:2
bthread("crud:SelfHostedRunnersRepository:nondet:1:2", function () {
  let org = 921;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id);
  // waitForSelfHostedRunnersRepositoryAdded(org, repository_id);
  tryToAddExistingSelfHostedRunnersRepository(org, repository_id);
  verifySelfHostedRunnersRepositoryExists(org, repository_id);
  disableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id);
  tryToDeleteANonExistingSelfHostedRunnersRepository(org, repository_id);
  verifySelfHostedRunnersRepositoryDoesNotExist(org, repository_id);
});

// Story: crud:SelfHostedRunnersRepository:nondet:negative:dup-add
bthread("crud:SelfHostedRunnersRepository:nondet:negative:dup-add", function () {
  let org = 926;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id);
  // waitForSelfHostedRunnersRepositoryAdded(org, repository_id);
  verifySelfHostedRunnersRepositoryExists(org, repository_id);
  tryToAddExistingSelfHostedRunnersRepository(org, repository_id);
  verifySelfHostedRunnersRepositoryExists(org, repository_id);
});

// Story: crud:WorkflowPermissions:read_only
bthread("crud:WorkflowPermissions:read_only", function () {
  let org = 930;
  verifyWorkflowPermissionsExists(org);
});

// Story: crud:RunnerGroup:nondet:1:1
bthread("crud:RunnerGroup:nondet:1:1", function () {
  let allows_public_repositories = "allows_public_repositories_940";
  let name = "name_940";
  let org = 940;
  let restricted_to_workflows = "restricted_to_workflows_940";
  let runners = "runners_940";
  let selected_workflows = "selected_workflows_940";
  let visibility = "visibility_940";
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"network_configuration_id": "org", "runner_group_id": "org", "selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  createRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  // waitForRunnerGroupAdded(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToAddExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  updateRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  deleteRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToDeleteANonExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupDoesNotExist(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Story: crud:RunnerGroup:nondet:1:2
bthread("crud:RunnerGroup:nondet:1:2", function () {
  let allows_public_repositories = "allows_public_repositories_941";
  let name = "name_941";
  let org = 941;
  let restricted_to_workflows = "restricted_to_workflows_941";
  let runners = "runners_941";
  let selected_workflows = "selected_workflows_941";
  let visibility = "visibility_941";
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"network_configuration_id": "org", "runner_group_id": "org", "selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  createRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  // waitForRunnerGroupAdded(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToAddExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  updateRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  deleteRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToDeleteANonExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupDoesNotExist(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Story: crud:RunnerGroup:nondet:negative:dup-add
bthread("crud:RunnerGroup:nondet:negative:dup-add", function () {
  let allows_public_repositories = "allows_public_repositories_946";
  let name = "name_946";
  let org = 946;
  let restricted_to_workflows = "restricted_to_workflows_946";
  let runners = "runners_946";
  let selected_workflows = "selected_workflows_946";
  let visibility = "visibility_946";
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"network_configuration_id": "org", "runner_group_id": "org", "selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  createRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  // waitForRunnerGroupAdded(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToAddExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:1:1
bthread("crud:RunnerGroupRepositoryAccess:nondet:1:1", function () {
  let org = 950;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner", "runner_group_id": "org", "selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  addRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  // waitForRunnerGroupRepositoryAccessAdded(org, repository_id, runner_group_id, selected_repository_ids);
  tryToAddExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  setRunnerGroupRepositories(org, repository_id, runner_group_id, selected_repository_ids);
  removeRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessDoesNotExist(org, repository_id, runner_group_id, selected_repository_ids);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:1:2
bthread("crud:RunnerGroupRepositoryAccess:nondet:1:2", function () {
  let org = 951;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner", "runner_group_id": "org", "selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  addRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  // waitForRunnerGroupRepositoryAccessAdded(org, repository_id, runner_group_id, selected_repository_ids);
  tryToAddExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  setRunnerGroupRepositories(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  removeRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessDoesNotExist(org, repository_id, runner_group_id, selected_repository_ids);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:negative:dup-add
bthread("crud:RunnerGroupRepositoryAccess:nondet:negative:dup-add", function () {
  let org = 956;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner", "runner_group_id": "org", "selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  runner_group_id = captured["runner_group_id"];
  selected_repository_ids = captured["selected_repository_ids"];
  addRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  // waitForRunnerGroupRepositoryAccessAdded(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  tryToAddExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
});

// Story: crud:RunnerGroupRunner:nondet:1:1
bthread("crud:RunnerGroupRunner:nondet:1:1", function () {
  let org = 960;
  let runners = "runners_960";
  // Dependency Barrier
  let deps = {};
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_group_id": "org", "runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_group_id = captured["runner_group_id"];
  runner_id = captured["runner_id"];
  addRunnerToRunnerGroup(org, runner_group_id, runner_id, runners);
  // waitForRunnerGroupRunnerAdded(org, runner_group_id, runner_id, runners);
  tryToAddExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  setRunnerGroupRunners(org, runner_group_id, runner_id, runners);
  removeRunnerFromRunnerGroup(org, runner_group_id, runner_id, runners);
  tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerDoesNotExist(org, runner_group_id, runner_id, runners);
});

// Story: crud:RunnerGroupRunner:nondet:1:2
bthread("crud:RunnerGroupRunner:nondet:1:2", function () {
  let org = 961;
  let runners = "runners_961";
  // Dependency Barrier
  let deps = {};
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_group_id": "org", "runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_group_id = captured["runner_group_id"];
  runner_id = captured["runner_id"];
  addRunnerToRunnerGroup(org, runner_group_id, runner_id, runners);
  // waitForRunnerGroupRunnerAdded(org, runner_group_id, runner_id, runners);
  tryToAddExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  setRunnerGroupRunners(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  removeRunnerFromRunnerGroup(org, runner_group_id, runner_id, runners);
  tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerDoesNotExist(org, runner_group_id, runner_id, runners);
});

// Story: crud:RunnerGroupRunner:nondet:negative:dup-add
bthread("crud:RunnerGroupRunner:nondet:negative:dup-add", function () {
  let org = 966;
  let runners = "runners_966";
  // Dependency Barrier
  let deps = {};
  deps["runner_group_id"] = matchAnyRunnerAdded();
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_group_id": "org", "runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_group_id = captured["runner_group_id"];
  runner_id = captured["runner_id"];
  addRunnerToRunnerGroup(org, runner_group_id, runner_id, runners);
  // waitForRunnerGroupRunnerAdded(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  tryToAddExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
});

// Story: crud:Runner:nondet:1:1
bthread("crud:Runner:nondet:1:1", function () {
  let labels = "labels_970";
  let name = "name_970";
  let org = 970;
  let runner_group_id = 970;
  let runner_id = 970;
  let work_folder = "work_folder_970";
  generateRunnerJitConfig(labels, name, org, runner_group_id, runner_id, work_folder);
  // waitForRunnerAdded(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToAddExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  deleteRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToDeleteANonExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerDoesNotExist(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Story: crud:Runner:nondet:1:2
bthread("crud:Runner:nondet:1:2", function () {
  let labels = "labels_971";
  let name = "name_971";
  let org = 971;
  let runner_group_id = 971;
  let runner_id = 971;
  let work_folder = "work_folder_971";
  generateRunnerJitConfig(labels, name, org, runner_group_id, runner_id, work_folder);
  // waitForRunnerAdded(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToAddExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  deleteRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToDeleteANonExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerDoesNotExist(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Story: crud:Runner:nondet:negative:dup-add
bthread("crud:Runner:nondet:negative:dup-add", function () {
  let labels = "labels_976";
  let name = "name_976";
  let org = 976;
  let runner_group_id = 976;
  let runner_id = 976;
  let work_folder = "work_folder_976";
  generateRunnerJitConfig(labels, name, org, runner_group_id, runner_id, work_folder);
  // waitForRunnerAdded(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToAddExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Story: crud:RunnerLabels:nondet:1:1
bthread("crud:RunnerLabels:nondet:1:1", function () {
  let labels = "labels_980";
  let name = "name_980";
  let org = 980;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addRunnerLabels(labels, name, org, runner_id);
  // waitForRunnerLabelsAdded(labels, name, org, runner_id);
  tryToAddExistingRunnerLabels(labels, name, org, runner_id);
  verifyRunnerLabelsExists(labels, name, org, runner_id);
  setRunnerLabels(labels, name, org, runner_id);
  removeRunnerLabel(labels, name, org, runner_id);
  tryToDeleteANonExistingRunnerLabels(labels, name, org, runner_id);
  verifyRunnerLabelsDoesNotExist(labels, name, org, runner_id);
});

// Story: crud:RunnerLabels:nondet:1:2
bthread("crud:RunnerLabels:nondet:1:2", function () {
  let labels = "labels_981";
  let name = "name_981";
  let org = 981;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addRunnerLabels(labels, name, org, runner_id);
  // waitForRunnerLabelsAdded(labels, name, org, runner_id);
  tryToAddExistingRunnerLabels(labels, name, org, runner_id);
  setRunnerLabels(labels, name, org, runner_id);
  verifyRunnerLabelsExists(labels, name, org, runner_id);
  removeRunnerLabel(labels, name, org, runner_id);
  tryToDeleteANonExistingRunnerLabels(labels, name, org, runner_id);
  verifyRunnerLabelsDoesNotExist(labels, name, org, runner_id);
});

// Story: crud:RunnerLabels:nondet:negative:dup-add
bthread("crud:RunnerLabels:nondet:negative:dup-add", function () {
  let labels = "labels_986";
  let name = "name_986";
  let org = 986;
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addRunnerLabels(labels, name, org, runner_id);
  // waitForRunnerLabelsAdded(labels, name, org, runner_id);
  verifyRunnerLabelsExists(labels, name, org, runner_id);
  tryToAddExistingRunnerLabels(labels, name, org, runner_id);
  verifyRunnerLabelsExists(labels, name, org, runner_id);
});

// Story: crud:Secret:nondet:1:1
bthread("crud:Secret:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_1010";
  let key_id = 1010;
  let org = 1010;
  let secret_name = "secret_name_1010";
  let visibility = "visibility_1010";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrUpdateOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  // waitForSecretAdded(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToAddExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:Secret:nondet:1:2
bthread("crud:Secret:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_1011";
  let key_id = 1011;
  let org = 1011;
  let secret_name = "secret_name_1011";
  let visibility = "visibility_1011";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrUpdateOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  // waitForSecretAdded(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToAddExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:Secret:nondet:negative:dup-add
bthread("crud:Secret:nondet:negative:dup-add", function () {
  let encrypted_value = "encrypted_value_1016";
  let key_id = 1016;
  let org = 1016;
  let secret_name = "secret_name_1016";
  let visibility = "visibility_1016";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrUpdateOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  // waitForSecretAdded(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToAddExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:SecretRepository:nondet:1:1
bthread("crud:SecretRepository:nondet:1:1", function () {
  let org = "org_1030";
  let secret_name = 1030;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
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

// Story: crud:SecretRepository:nondet:1:2
bthread("crud:SecretRepository:nondet:1:2", function () {
  let org = "org_1031";
  let secret_name = 1031;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
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
  let org = "org_1036";
  let secret_name = 1036;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  addRepositoryForSecretForAuthenticatedUser(org, repository_id, secret_name);
  // waitForSecretRepositoryAdded(org, repository_id, secret_name);
  verifySecretRepositoryExists(org, repository_id, secret_name);
  tryToAddExistingSecretRepository(org, repository_id, secret_name);
  verifySecretRepositoryExists(org, repository_id, secret_name);
});

// Story: crud:OrgPublicKey:read_only
bthread("crud:OrgPublicKey:read_only", function () {
  let org = 1040;
  verifyOrgPublicKeyExists(org);
});

// Story: crud:OrgVariable:nondet:1:1
bthread("crud:OrgVariable:nondet:1:1", function () {
  let name = "name_1050";
  let org = 1050;
  let value = "value_1050";
  let visibility = "visibility_1050";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrgVariable(name, org, selected_repository_ids, value, visibility);
  // waitForOrgVariableAdded(name, org, selected_repository_ids, value, visibility);
  tryToAddExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
  updateOrgVariable(name, org, selected_repository_ids, value, visibility);
  deleteOrgVariable(name, org, selected_repository_ids, value, visibility);
  tryToDeleteANonExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableDoesNotExist(name, org, selected_repository_ids, value, visibility);
});

// Story: crud:OrgVariable:nondet:1:2
bthread("crud:OrgVariable:nondet:1:2", function () {
  let name = "name_1051";
  let org = 1051;
  let value = "value_1051";
  let visibility = "visibility_1051";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
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
  let name = "name_1056";
  let org = 1056;
  let value = "value_1056";
  let visibility = "visibility_1056";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
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
  let name = "name_1060";
  let org = 1060;
  verifyOrgVariableSelectedReposExists(name, org);
});

// Story: crud:OrgVariableSelectedRepo:nondet:1:1
bthread("crud:OrgVariableSelectedRepo:nondet:1:1", function () {
  let name = "name_1070";
  let org = 1070;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
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

// Story: crud:OrgVariableSelectedRepo:nondet:1:2
bthread("crud:OrgVariableSelectedRepo:nondet:1:2", function () {
  let name = "name_1071";
  let org = 1071;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
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
  let name = "name_1076";
  let org = 1076;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
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
  let artifact_id = 1080;
  let owner = 1080;
  let repo = "repo_1080";
  verifyArtifactExists(artifact_id, owner, repo);
});

// Story: crud:ArtifactDownload:read_only
bthread("crud:ArtifactDownload:read_only", function () {
  let archive_format = "archive_format_1090";
  let owner = 1090;
  let repo = "repo_1090";
  verifyArtifactDownloadExists(archive_format, artifact_id, owner, repo);
});

// Story: crud:Job:read_only
bthread("crud:Job:read_only", function () {
  let job_id = 1110;
  let owner = 1110;
  let repo = "repo_1110";
  verifyJobExists(job_id, owner, repo);
});

// Story: crud:OidcCustomization:read_only
bthread("crud:OidcCustomization:read_only", function () {
  let owner = 1120;
  let repo = "repo_1120";
  verifyOidcCustomizationExists(owner, repo);
});

// Story: crud:OrganizationSecrets:read_only
bthread("crud:OrganizationSecrets:read_only", function () {
  let owner = 1130;
  let repo = "repo_1130";
  verifyOrganizationSecretsExists(owner, repo);
});

// Story: crud:OrganizationVariables:read_only
bthread("crud:OrganizationVariables:read_only", function () {
  let owner = 1140;
  let repo = "repo_1140";
  verifyOrganizationVariablesExists(owner, repo);
});

// Story: crud:Permissions:read_only
bthread("crud:Permissions:read_only", function () {
  let owner = 1150;
  let repo = "repo_1150";
  verifyPermissionsExists(owner, repo);
});

// Story: crud:WorkflowAccess:read_only
bthread("crud:WorkflowAccess:read_only", function () {
  let owner = 1160;
  let repo = "repo_1160";
  verifyWorkflowAccessExists(owner, repo);
});

// Story: crud:ActionsPermissionsForkPRWorkflowsPrivateRepos:read_only
bthread("crud:ActionsPermissionsForkPRWorkflowsPrivateRepos:read_only", function () {
  let owner = 1170;
  let repo = "repo_1170";
  verifyActionsPermissionsForkPRWorkflowsPrivateReposExists(owner, repo);
});

// Story: crud:ActionsPermissionsSelectedActions:read_only
bthread("crud:ActionsPermissionsSelectedActions:read_only", function () {
  let owner = 1180;
  let repo = "repo_1180";
  verifyActionsPermissionsSelectedActionsExists(owner, repo);
});

// Story: crud:ActionsPermissionsWorkflow:read_only
bthread("crud:ActionsPermissionsWorkflow:read_only", function () {
  let owner = 1190;
  let repo = "repo_1190";
  verifyActionsPermissionsWorkflowExists(owner, repo);
});

// Story: crud:ActionsRunners:read_only
bthread("crud:ActionsRunners:read_only", function () {
  let name = "name_1200";
  let owner = 1200;
  let page = "page_1200";
  let per_page = "per_page_1200";
  let repo = "repo_1200";
  verifyActionsRunnersExists(name, owner, page, per_page, repo);
});

// Story: crud:ActionsRunnerDownloads:read_only
bthread("crud:ActionsRunnerDownloads:read_only", function () {
  let owner = 1210;
  let repo = "repo_1210";
  verifyActionsRunnerDownloadsExists(owner, repo);
});

// Story: crud:ActionsRunner:read_only
bthread("crud:ActionsRunner:read_only", function () {
  let owner = 1250;
  let repo = "repo_1250";
  verifyActionsRunnerExists(owner, repo, runner_id);
});

// Story: crud:ActionsRunnerLabels:nondet:1:1
bthread("crud:ActionsRunnerLabels:nondet:1:1", function () {
  let labels = "labels_1260";
  let owner = 1260;
  let repo = "repo_1260";
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addCustomLabelsToSelfHostedRunnerForRepo(labels, owner, repo, runner_id);
  // waitForActionsRunnerLabelsAdded(labels, owner, repo, runner_id);
  tryToAddExistingActionsRunnerLabels(labels, owner, repo, runner_id);
  verifyActionsRunnerLabelsExists(labels, owner, repo, runner_id);
  setCustomLabelsForSelfHostedRunnerForRepo(labels, owner, repo, runner_id);
  removeAllCustomLabelsFromSelfHostedRunnerForRepo(labels, owner, repo, runner_id);
  tryToDeleteANonExistingActionsRunnerLabels(labels, owner, repo, runner_id);
  verifyActionsRunnerLabelsDoesNotExist(labels, owner, repo, runner_id);
});

// Story: crud:ActionsRunnerLabels:nondet:1:2
bthread("crud:ActionsRunnerLabels:nondet:1:2", function () {
  let labels = "labels_1261";
  let owner = 1261;
  let repo = "repo_1261";
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addCustomLabelsToSelfHostedRunnerForRepo(labels, owner, repo, runner_id);
  // waitForActionsRunnerLabelsAdded(labels, owner, repo, runner_id);
  tryToAddExistingActionsRunnerLabels(labels, owner, repo, runner_id);
  setCustomLabelsForSelfHostedRunnerForRepo(labels, owner, repo, runner_id);
  verifyActionsRunnerLabelsExists(labels, owner, repo, runner_id);
  removeAllCustomLabelsFromSelfHostedRunnerForRepo(labels, owner, repo, runner_id);
  tryToDeleteANonExistingActionsRunnerLabels(labels, owner, repo, runner_id);
  verifyActionsRunnerLabelsDoesNotExist(labels, owner, repo, runner_id);
});

// Story: crud:ActionsRunnerLabels:nondet:negative:dup-add
bthread("crud:ActionsRunnerLabels:nondet:negative:dup-add", function () {
  let labels = "labels_1266";
  let owner = 1266;
  let repo = "repo_1266";
  // Dependency Barrier
  let deps = {};
  deps["runner_id"] = matchAnyRunnerAdded();
  let pkMap = {"runner_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  runner_id = captured["runner_id"];
  addCustomLabelsToSelfHostedRunnerForRepo(labels, owner, repo, runner_id);
  // waitForActionsRunnerLabelsAdded(labels, owner, repo, runner_id);
  verifyActionsRunnerLabelsExists(labels, owner, repo, runner_id);
  tryToAddExistingActionsRunnerLabels(labels, owner, repo, runner_id);
  verifyActionsRunnerLabelsExists(labels, owner, repo, runner_id);
});

// Story: crud:WorkflowRun:read_only
bthread("crud:WorkflowRun:read_only", function () {
  let owner = 1270;
  let repo = "repo_1270";
  let run_id = 1270;
  verifyWorkflowRunExists(owner, repo, run_id);
});

// Story: crud:WorkflowRunApproval:read_only
bthread("crud:WorkflowRunApproval:read_only", function () {
  let owner = 1280;
  let repo = "repo_1280";
  let run_id = 1280;
  verifyWorkflowRunApprovalExists(owner, repo, run_id);
});

// Story: crud:WorkflowRunArtifact:read_only
bthread("crud:WorkflowRunArtifact:read_only", function () {
  let owner = 1290;
  let repo = "repo_1290";
  let run_id = 1290;
  verifyWorkflowRunArtifactExists(owner, repo, run_id);
});

// Story: crud:WorkflowRunAttempt:read_only
bthread("crud:WorkflowRunAttempt:read_only", function () {
  let attempt_number = "attempt_number_1300";
  let owner = 1300;
  let repo = "repo_1300";
  let run_id = 1300;
  verifyWorkflowRunAttemptExists(attempt_number, owner, repo, run_id);
});

// Story: crud:WorkflowRunAttemptJob:read_only
bthread("crud:WorkflowRunAttemptJob:read_only", function () {
  let attempt_number = "attempt_number_1310";
  let owner = 1310;
  let repo = "repo_1310";
  let run_id = 1310;
  verifyWorkflowRunAttemptJobExists(attempt_number, owner, repo, run_id);
});

// Story: crud:WorkflowRunAttemptLog:read_only
bthread("crud:WorkflowRunAttemptLog:read_only", function () {
  let attempt_number = "attempt_number_1320";
  let owner = 1320;
  let repo = "repo_1320";
  let run_id = 1320;
  verifyWorkflowRunAttemptLogExists(attempt_number, owner, repo, run_id);
});

// Story: crud:WorkflowRunList:read_only
bthread("crud:WorkflowRunList:read_only", function () {
  let actor = "actor_1350";
  let created = "created_1350";
  let event = "event_1350";
  let exclude-pull-requests = "exclude-pull-requests_1350";
  let owner = 1350;
  let page = "page_1350";
  let per-page = "per-page_1350";
  let repo = "repo_1350";
  let workflow-run-branch = "workflow-run-branch_1350";
  let workflow-run-head-sha = "workflow-run-head-sha_1350";
  let workflow-run-status = "workflow-run-status_1350";
  verifyWorkflowRunListExists(actor, created, event, exclude-pull-requests, owner, page, per-page, repo, workflow-run-branch, workflow-run-check-suite-id, workflow-run-head-sha, workflow-run-status);
});

// Story: crud:WorkflowRunJobs:read_only
bthread("crud:WorkflowRunJobs:read_only", function () {
  let filter = "filter_1370";
  let owner = 1370;
  let page = "page_1370";
  let per-page = "per-page_1370";
  let repo = "repo_1370";
  let run_id = 1370;
  verifyWorkflowRunJobsExists(filter, owner, page, per-page, repo, run_id);
});

// Story: crud:WorkflowRunLogs:read_only
bthread("crud:WorkflowRunLogs:read_only", function () {
  let owner = 1380;
  let repo = "repo_1380";
  let run_id = 1380;
  verifyWorkflowRunLogsExists(owner, repo, run_id);
});

// Story: crud:PendingDeployment:read_only
bthread("crud:PendingDeployment:read_only", function () {
  let comment = "comment_1390";
  let owner = 1390;
  let repo = "repo_1390";
  let run_id = 1390;
  let state = "state_1390";
  verifyPendingDeploymentExists(comment, environment_ids, owner, repo, run_id, state);
});

// Story: crud:WorkflowRunTiming:read_only
bthread("crud:WorkflowRunTiming:read_only", function () {
  let owner = 1420;
  let repo = "repo_1420";
  let run_id = 1420;
  verifyWorkflowRunTimingExists(owner, repo, run_id);
});

// Story: crud:RepositorySecret:nondet:1:1
bthread("crud:RepositorySecret:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_1430";
  let key_id = 1430;
  let owner = 1430;
  let repo = "repo_1430";
  let secret_name = "secret_name_1430";
  createOrUpdateRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  // waitForRepositorySecretAdded(encrypted_value, key_id, owner, repo, secret_name);
  tryToAddExistingRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepositorySecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepositorySecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:RepositorySecret:nondet:1:2
bthread("crud:RepositorySecret:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_1431";
  let key_id = 1431;
  let owner = 1431;
  let repo = "repo_1431";
  let secret_name = "secret_name_1431";
  createOrUpdateRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  // waitForRepositorySecretAdded(encrypted_value, key_id, owner, repo, secret_name);
  tryToAddExistingRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepositorySecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepositorySecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:RepositorySecret:nondet:negative:dup-add
bthread("crud:RepositorySecret:nondet:negative:dup-add", function () {
  let encrypted_value = "encrypted_value_1436";
  let key_id = 1436;
  let owner = 1436;
  let repo = "repo_1436";
  let secret_name = "secret_name_1436";
  createOrUpdateRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  // waitForRepositorySecretAdded(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepositorySecretExists(encrypted_value, key_id, owner, repo, secret_name);
  tryToAddExistingRepositorySecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepositorySecretExists(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:RepositoryPublicKey:read_only
bthread("crud:RepositoryPublicKey:read_only", function () {
  let owner = 1440;
  let repo = "repo_1440";
  verifyRepositoryPublicKeyExists(owner, repo);
});

// Story: crud:RepositoryVariable:nondet:1:1
bthread("crud:RepositoryVariable:nondet:1:1", function () {
  let name = "name_1450";
  let owner = 1450;
  let repo = "repo_1450";
  let value = "value_1450";
  createRepositoryVariable(name, owner, repo, value);
  // waitForRepositoryVariableAdded(name, owner, repo, value);
  tryToAddExistingRepositoryVariable(name, owner, repo, value);
  verifyRepositoryVariableExists(name, owner, repo, value);
  updateRepositoryVariable(name, owner, repo, value);
  deleteRepositoryVariable(name, owner, repo, value);
  tryToDeleteANonExistingRepositoryVariable(name, owner, repo, value);
  verifyRepositoryVariableDoesNotExist(name, owner, repo, value);
});

// Story: crud:RepositoryVariable:nondet:1:2
bthread("crud:RepositoryVariable:nondet:1:2", function () {
  let name = "name_1451";
  let owner = 1451;
  let repo = "repo_1451";
  let value = "value_1451";
  createRepositoryVariable(name, owner, repo, value);
  // waitForRepositoryVariableAdded(name, owner, repo, value);
  tryToAddExistingRepositoryVariable(name, owner, repo, value);
  updateRepositoryVariable(name, owner, repo, value);
  verifyRepositoryVariableExists(name, owner, repo, value);
  deleteRepositoryVariable(name, owner, repo, value);
  tryToDeleteANonExistingRepositoryVariable(name, owner, repo, value);
  verifyRepositoryVariableDoesNotExist(name, owner, repo, value);
});

// Story: crud:RepositoryVariable:nondet:negative:dup-add
bthread("crud:RepositoryVariable:nondet:negative:dup-add", function () {
  let name = "name_1456";
  let owner = 1456;
  let repo = "repo_1456";
  let value = "value_1456";
  createRepositoryVariable(name, owner, repo, value);
  // waitForRepositoryVariableAdded(name, owner, repo, value);
  verifyRepositoryVariableExists(name, owner, repo, value);
  tryToAddExistingRepositoryVariable(name, owner, repo, value);
  verifyRepositoryVariableExists(name, owner, repo, value);
});

// Story: crud:Workflow:read_only
bthread("crud:Workflow:read_only", function () {
  let owner = 1460;
  let ref = "ref_1460";
  let repo = "repo_1460";
  let workflow_id = 1460;
  verifyWorkflowExists(owner, ref, repo, workflow_id);
});

// Story: crud:EnvironmentSecret:nondet:1:1
bthread("crud:EnvironmentSecret:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_1470";
  let environment_name = "environment_name_1470";
  let key_id = 1470;
  let owner = 1470;
  let repo = "repo_1470";
  let secret_name = "secret_name_1470";
  createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  // waitForEnvironmentSecretAdded(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToAddExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  deleteEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretDoesNotExist(encrypted_value, environment_name, key_id, owner, repo, secret_name);
});

// Story: crud:EnvironmentSecret:nondet:1:2
bthread("crud:EnvironmentSecret:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_1471";
  let environment_name = "environment_name_1471";
  let key_id = 1471;
  let owner = 1471;
  let repo = "repo_1471";
  let secret_name = "secret_name_1471";
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
  let encrypted_value = "encrypted_value_1476";
  let environment_name = "environment_name_1476";
  let key_id = 1476;
  let owner = 1476;
  let repo = "repo_1476";
  let secret_name = "secret_name_1476";
  createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  // waitForEnvironmentSecretAdded(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToAddExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
});

// Story: crud:EnvironmentVariable:nondet:1:1
bthread("crud:EnvironmentVariable:nondet:1:1", function () {
  let environment_name = "environment_name_1480";
  let name = "name_1480";
  let owner = 1480;
  let repo = "repo_1480";
  let value = "value_1480";
  createEnvironmentVariable(environment_name, name, owner, repo, value);
  // waitForEnvironmentVariableAdded(environment_name, name, owner, repo, value);
  tryToAddExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
  updateEnvironmentVariable(environment_name, name, owner, repo, value);
  deleteEnvironmentVariable(environment_name, name, owner, repo, value);
  tryToDeleteANonExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableDoesNotExist(environment_name, name, owner, repo, value);
});

// Story: crud:EnvironmentVariable:nondet:1:2
bthread("crud:EnvironmentVariable:nondet:1:2", function () {
  let environment_name = "environment_name_1481";
  let name = "name_1481";
  let owner = 1481;
  let repo = "repo_1481";
  let value = "value_1481";
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
  let environment_name = "environment_name_1486";
  let name = "name_1486";
  let owner = 1486;
  let repo = "repo_1486";
  let value = "value_1486";
  createEnvironmentVariable(environment_name, name, owner, repo, value);
  // waitForEnvironmentVariableAdded(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
  tryToAddExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
});

// Story: crud:Organization:read_only
bthread("crud:Organization:read_only", function () {
  let org = 1490;
  verifyOrganizationExists(org);
});

// Story: crud:ArtifactStorageRecord:read_only
bthread("crud:ArtifactStorageRecord:read_only", function () {
  let artifact_url = "artifact_url_1500";
  let digest = "digest_1500";
  let name = "name_1500";
  let org = 1500;
  let path = "path_1500";
  let registry_url = "registry_url_1500";
  let repository = "repository_1500";
  let status = "status_1500";
  let subject_digest = "subject_digest_1500";
  verifyArtifactStorageRecordExists(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest);
});

// Story: crud:Block:nondet:1:1
bthread("crud:Block:nondet:1:1", function () {
  let org = 1520;
  let username = "username_1520";
  blockUser(org, username);
  // waitForBlockAdded(org, username);
  tryToAddExistingBlock(org, username);
  verifyBlockExists(org, username);
  unblockUser(org, username);
  tryToDeleteANonExistingBlock(org, username);
  verifyBlockDoesNotExist(org, username);
});

// Story: crud:Block:nondet:1:2
bthread("crud:Block:nondet:1:2", function () {
  let org = 1521;
  let username = "username_1521";
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
  let org = 1526;
  let username = "username_1526";
  blockUser(org, username);
  // waitForBlockAdded(org, username);
  verifyBlockExists(org, username);
  tryToAddExistingBlock(org, username);
  verifyBlockExists(org, username);
});

// Story: crud:WebhookDeliveryList:read_only
bthread("crud:WebhookDeliveryList:read_only", function () {
  let cursor = "cursor_1530";
  let hook_id = 1530;
  let org = 1530;
  let per-page = "per-page_1530";
  verifyWebhookDeliveryListExists(cursor, hook_id, org, per-page);
});

// Story: crud:IssueType:nondet:1:1
bthread("crud:IssueType:nondet:1:1", function () {
  let color = "color_1570";
  let description = "description_1570";
  let is_enabled = "is_enabled_1570";
  let name = "name_1570";
  let org = 1570;
  // Dependency Barrier
  let deps = {};
  deps["issue_type_id"] = matchAnyIssueAdded();
  let pkMap = {"issue_type_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  issue_type_id = captured["issue_type_id"];
  createIssueType(color, description, is_enabled, issue_type_id, name, org);
  // waitForIssueTypeAdded(color, description, is_enabled, issue_type_id, name, org);
  tryToAddExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
  updateIssueType(color, description, is_enabled, issue_type_id, name, org);
  deleteIssueType(color, description, is_enabled, issue_type_id, name, org);
  tryToDeleteANonExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeDoesNotExist(color, description, is_enabled, issue_type_id, name, org);
});

// Story: crud:IssueType:nondet:1:2
bthread("crud:IssueType:nondet:1:2", function () {
  let color = "color_1571";
  let description = "description_1571";
  let is_enabled = "is_enabled_1571";
  let name = "name_1571";
  let org = 1571;
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
  let color = "color_1576";
  let description = "description_1576";
  let is_enabled = "is_enabled_1576";
  let name = "name_1576";
  let org = 1576;
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
  let org = 1580;
  let username = "username_1580";
  verifyMemberExists(org, username);
});

// Story: crud:Membership:nondet:1:1
bthread("crud:Membership:nondet:1:1", function () {
  let org = 1590;
  let team_slug = "team_slug_1590";
  let username = "username_1590";
  addOrUpdateMembership(org, team_slug, username);
  // waitForMembershipAdded(org, team_slug, username);
  tryToAddExistingMembership(org, team_slug, username);
  verifyMembershipExists(org, team_slug, username);
  removeMembership(org, team_slug, username);
  tryToDeleteANonExistingMembership(org, team_slug, username);
  verifyMembershipDoesNotExist(org, team_slug, username);
});

// Story: crud:Membership:nondet:1:2
bthread("crud:Membership:nondet:1:2", function () {
  let org = 1591;
  let team_slug = "team_slug_1591";
  let username = "username_1591";
  addOrUpdateMembership(org, team_slug, username);
  // waitForMembershipAdded(org, team_slug, username);
  tryToAddExistingMembership(org, team_slug, username);
  verifyMembershipExists(org, team_slug, username);
  removeMembership(org, team_slug, username);
  tryToDeleteANonExistingMembership(org, team_slug, username);
  verifyMembershipDoesNotExist(org, team_slug, username);
});

// Story: crud:Membership:nondet:negative:dup-add
bthread("crud:Membership:nondet:negative:dup-add", function () {
  let org = 1596;
  let team_slug = "team_slug_1596";
  let username = "username_1596";
  addOrUpdateMembership(org, team_slug, username);
  // waitForMembershipAdded(org, team_slug, username);
  verifyMembershipExists(org, team_slug, username);
  tryToAddExistingMembership(org, team_slug, username);
  verifyMembershipExists(org, team_slug, username);
});

// Story: crud:OrganizationRole:nondet:1:1
bthread("crud:OrganizationRole:nondet:1:1", function () {
  let org = 1600;
  let role_id = 1600;
  let team_slug = "team_slug_1600";
  assignTeamToOrgRole(org, role_id, team_slug);
  // waitForOrganizationRoleAdded(org, role_id, team_slug);
  tryToAddExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  revokeOrgRoleTeam(org, role_id, team_slug);
  tryToDeleteANonExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleDoesNotExist(org, role_id, team_slug);
});

// Story: crud:OrganizationRole:nondet:1:2
bthread("crud:OrganizationRole:nondet:1:2", function () {
  let org = 1601;
  let role_id = 1601;
  let team_slug = "team_slug_1601";
  assignTeamToOrgRole(org, role_id, team_slug);
  // waitForOrganizationRoleAdded(org, role_id, team_slug);
  tryToAddExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  revokeOrgRoleTeam(org, role_id, team_slug);
  tryToDeleteANonExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleDoesNotExist(org, role_id, team_slug);
});

// Story: crud:OrganizationRole:nondet:negative:dup-add
bthread("crud:OrganizationRole:nondet:negative:dup-add", function () {
  let org = 1606;
  let role_id = 1606;
  let team_slug = "team_slug_1606";
  assignTeamToOrgRole(org, role_id, team_slug);
  // waitForOrganizationRoleAdded(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  tryToAddExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
});

// Story: crud:OrganizationRoleTeams:read_only
bthread("crud:OrganizationRoleTeams:read_only", function () {
  let org = 1620;
  let page = "page_1620";
  let per_page = "per_page_1620";
  let role_id = 1620;
  verifyOrganizationRoleTeamsExists(org, page, per_page, role_id);
});

// Story: crud:OrganizationRoleUsers:read_only
bthread("crud:OrganizationRoleUsers:read_only", function () {
  let org = 1630;
  let page = "page_1630";
  let per_page = "per_page_1630";
  let role_id = 1630;
  verifyOrganizationRoleUsersExists(org, page, per_page, role_id);
});

// Story: crud:OutsideCollaborator:nondet:1:1
bthread("crud:OutsideCollaborator:nondet:1:1", function () {
  let filter = "filter_1640";
  let org = 1640;
  let page = "page_1640";
  let per_page = "per_page_1640";
  let username = "username_1640";
  convertMemberToOutsideCollaborator(filter, org, page, per_page, username);
  // waitForOutsideCollaboratorAdded(filter, org, page, per_page, username);
  tryToAddExistingOutsideCollaborator(filter, org, page, per_page, username);
  verifyOutsideCollaboratorExists(filter, org, page, per_page, username);
  removeOutsideCollaborator(filter, org, page, per_page, username);
  tryToDeleteANonExistingOutsideCollaborator(filter, org, page, per_page, username);
  verifyOutsideCollaboratorDoesNotExist(filter, org, page, per_page, username);
});

// Story: crud:OutsideCollaborator:nondet:1:2
bthread("crud:OutsideCollaborator:nondet:1:2", function () {
  let filter = "filter_1641";
  let org = 1641;
  let page = "page_1641";
  let per_page = "per_page_1641";
  let username = "username_1641";
  convertMemberToOutsideCollaborator(filter, org, page, per_page, username);
  // waitForOutsideCollaboratorAdded(filter, org, page, per_page, username);
  tryToAddExistingOutsideCollaborator(filter, org, page, per_page, username);
  verifyOutsideCollaboratorExists(filter, org, page, per_page, username);
  removeOutsideCollaborator(filter, org, page, per_page, username);
  tryToDeleteANonExistingOutsideCollaborator(filter, org, page, per_page, username);
  verifyOutsideCollaboratorDoesNotExist(filter, org, page, per_page, username);
});

// Story: crud:OutsideCollaborator:nondet:negative:dup-add
bthread("crud:OutsideCollaborator:nondet:negative:dup-add", function () {
  let filter = "filter_1646";
  let org = 1646;
  let page = "page_1646";
  let per_page = "per_page_1646";
  let username = "username_1646";
  convertMemberToOutsideCollaborator(filter, org, page, per_page, username);
  // waitForOutsideCollaboratorAdded(filter, org, page, per_page, username);
  verifyOutsideCollaboratorExists(filter, org, page, per_page, username);
  tryToAddExistingOutsideCollaborator(filter, org, page, per_page, username);
  verifyOutsideCollaboratorExists(filter, org, page, per_page, username);
});

// Story: crud:PersonalAccessTokenRequest:read_only
bthread("crud:PersonalAccessTokenRequest:read_only", function () {
  let direction = "direction_1650";
  let org = 1650;
  let page = "page_1650";
  let pat_request_id = 1650;
  let per_page = "per_page_1650";
  let personal_access_token_after = "personal_access_token_after_1650";
  let personal_access_token_before = "personal_access_token_before_1650";
  let personal_access_token_owner = "personal_access_token_owner_1650";
  let personal_access_token_permission = "personal_access_token_permission_1650";
  let personal_access_token_repository = "personal_access_token_repository_1650";
  let personal_access_token_sort = "personal_access_token_sort_1650";
  let personal_access_token_token_id = 1650;
  verifyPersonalAccessTokenRequestExists(direction, org, page, pat_request_id, per_page, personal_access_token_after, personal_access_token_before, personal_access_token_owner, personal_access_token_permission, personal_access_token_repository, personal_access_token_sort, personal_access_token_token_id);
});

// Story: crud:PersonalAccessToken:read_only
bthread("crud:PersonalAccessToken:read_only", function () {
  let action = "action_1660";
  let org = 1660;
  let pat_id = 1660;
  let pat_ids = "pat_ids_1660";
  verifyPersonalAccessTokenExists(action, org, pat_id, pat_ids);
});

// Story: crud:PersonalAccessTokenRepository:read_only
bthread("crud:PersonalAccessTokenRepository:read_only", function () {
  let org = 1670;
  let pat_id = 1670;
  verifyPersonalAccessTokenRepositoryExists(org, pat_id);
});

// Story: crud:CustomPropertySchema:nondet:1:1
bthread("crud:CustomPropertySchema:nondet:1:1", function () {
  let allowed_values = "allowed_values_1680";
  let custom_property_name = "custom_property_name_1680";
  let default_value = "default_value_1680";
  let description = "description_1680";
  let org = 1680;
  let required = "required_1680";
  let value_type = "value_type_1680";
  createOrUpdateCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  // waitForCustomPropertySchemaAdded(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  tryToAddExistingCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  verifyCustomPropertySchemaExists(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  createOrUpdateCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  deleteCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  tryToDeleteANonExistingCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  verifyCustomPropertySchemaDoesNotExist(allowed_values, custom_property_name, default_value, description, org, required, value_type);
});

// Story: crud:CustomPropertySchema:nondet:1:2
bthread("crud:CustomPropertySchema:nondet:1:2", function () {
  let allowed_values = "allowed_values_1681";
  let custom_property_name = "custom_property_name_1681";
  let default_value = "default_value_1681";
  let description = "description_1681";
  let org = 1681;
  let required = "required_1681";
  let value_type = "value_type_1681";
  createOrUpdateCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  // waitForCustomPropertySchemaAdded(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  tryToAddExistingCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  createOrUpdateCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  verifyCustomPropertySchemaExists(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  deleteCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  tryToDeleteANonExistingCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  verifyCustomPropertySchemaDoesNotExist(allowed_values, custom_property_name, default_value, description, org, required, value_type);
});

// Story: crud:CustomPropertySchema:nondet:negative:dup-add
bthread("crud:CustomPropertySchema:nondet:negative:dup-add", function () {
  let allowed_values = "allowed_values_1686";
  let custom_property_name = "custom_property_name_1686";
  let default_value = "default_value_1686";
  let description = "description_1686";
  let org = 1686;
  let required = "required_1686";
  let value_type = "value_type_1686";
  createOrUpdateCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  // waitForCustomPropertySchemaAdded(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  verifyCustomPropertySchemaExists(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  tryToAddExistingCustomPropertySchema(allowed_values, custom_property_name, default_value, description, org, required, value_type);
  verifyCustomPropertySchemaExists(allowed_values, custom_property_name, default_value, description, org, required, value_type);
});

// Story: crud:CustomPropertySchemas:read_only
bthread("crud:CustomPropertySchemas:read_only", function () {
  let org = 1690;
  let properties = "properties_1690";
  verifyCustomPropertySchemasExists(org, properties);
});

// Story: crud:CustomPropertyValue:read_only
bthread("crud:CustomPropertyValue:read_only", function () {
  let org = 1700;
  let properties = "properties_1700";
  let repository_names = "repository_names_1700";
  let repository_query = "repository_query_1700";
  verifyCustomPropertyValueExists(org, properties, repository_names, repository_query);
});

// Story: crud:PublicMember:nondet:1:1
bthread("crud:PublicMember:nondet:1:1", function () {
  let org = 1710;
  let username = "username_1710";
  setPublicMembership(org, username);
  // waitForPublicMemberAdded(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
  removePublicMembership(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:nondet:1:2
bthread("crud:PublicMember:nondet:1:2", function () {
  let org = 1711;
  let username = "username_1711";
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
  let org = 1716;
  let username = "username_1716";
  setPublicMembership(org, username);
  // waitForPublicMemberAdded(org, username);
  verifyPublicMemberExists(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
});

// Story: crud:RulesetHistory:read_only
bthread("crud:RulesetHistory:read_only", function () {
  let org = 1720;
  let ruleset_id = 1720;
  let version_id = 1720;
  verifyRulesetHistoryExists(org, ruleset_id, version_id);
});

// Story: crud:SecurityManagerTeam:nondet:1:1
bthread("crud:SecurityManagerTeam:nondet:1:1", function () {
  let org = 1730;
  let team_slug = "team_slug_1730";
  addSecurityManagerTeam(org, team_slug);
  // waitForSecurityManagerTeamAdded(org, team_slug);
  tryToAddExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
  removeSecurityManagerTeam(org, team_slug);
  tryToDeleteANonExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamDoesNotExist(org, team_slug);
});

// Story: crud:SecurityManagerTeam:nondet:1:2
bthread("crud:SecurityManagerTeam:nondet:1:2", function () {
  let org = 1731;
  let team_slug = "team_slug_1731";
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
  let org = 1736;
  let team_slug = "team_slug_1736";
  addSecurityManagerTeam(org, team_slug);
  // waitForSecurityManagerTeamAdded(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
  tryToAddExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
});

// Story: crud:ImmutableReleasesSettings:read_only
bthread("crud:ImmutableReleasesSettings:read_only", function () {
  let org = 1740;
  verifyImmutableReleasesSettingsExists(org);
});

// Story: crud:ImmutableReleasesSelectedRepositories:read_only
bthread("crud:ImmutableReleasesSelectedRepositories:read_only", function () {
  let org = 1750;
  verifyImmutableReleasesSelectedRepositoriesExists(org);
});

// Story: crud:ImmutableReleasesSelectedRepository:nondet:1:1
bthread("crud:ImmutableReleasesSelectedRepository:nondet:1:1", function () {
  let org = 1760;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableSelectedRepositoryImmutableReleases(org, repository_id);
  // waitForImmutableReleasesSelectedRepositoryAdded(org, repository_id);
  tryToAddExistingImmutableReleasesSelectedRepository(org, repository_id);
  verifyImmutableReleasesSelectedRepositoryExists(org, repository_id);
  disableSelectedRepositoryImmutableReleases(org, repository_id);
  tryToDeleteANonExistingImmutableReleasesSelectedRepository(org, repository_id);
  verifyImmutableReleasesSelectedRepositoryDoesNotExist(org, repository_id);
});

// Story: crud:ImmutableReleasesSelectedRepository:nondet:1:2
bthread("crud:ImmutableReleasesSelectedRepository:nondet:1:2", function () {
  let org = 1761;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableSelectedRepositoryImmutableReleases(org, repository_id);
  // waitForImmutableReleasesSelectedRepositoryAdded(org, repository_id);
  tryToAddExistingImmutableReleasesSelectedRepository(org, repository_id);
  verifyImmutableReleasesSelectedRepositoryExists(org, repository_id);
  disableSelectedRepositoryImmutableReleases(org, repository_id);
  tryToDeleteANonExistingImmutableReleasesSelectedRepository(org, repository_id);
  verifyImmutableReleasesSelectedRepositoryDoesNotExist(org, repository_id);
});

// Story: crud:ImmutableReleasesSelectedRepository:nondet:negative:dup-add
bthread("crud:ImmutableReleasesSelectedRepository:nondet:negative:dup-add", function () {
  let org = 1766;
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  repository_id = captured["repository_id"];
  enableSelectedRepositoryImmutableReleases(org, repository_id);
  // waitForImmutableReleasesSelectedRepositoryAdded(org, repository_id);
  verifyImmutableReleasesSelectedRepositoryExists(org, repository_id);
  tryToAddExistingImmutableReleasesSelectedRepository(org, repository_id);
  verifyImmutableReleasesSelectedRepositoryExists(org, repository_id);
});

// Story: crud:OrganizationMembership:read_only
bthread("crud:OrganizationMembership:read_only", function () {
  let org = 1780;
  let state = "state_1780";
  verifyOrganizationMembershipExists(org, state);
});

// Story: crud:CodespacesAccessUsers:nondet:1:1
bthread("crud:CodespacesAccessUsers:nondet:1:1", function () {
  let org = 1810;
  let selected_usernames = "selected_usernames_1810";
  addCodespacesAccessUsers(org, selected_usernames);
  // waitForCodespacesAccessUsersAdded(org, selected_usernames);
  tryToAddExistingCodespacesAccessUsers(org, selected_usernames);
  verifyCodespacesAccessUsersExists(org, selected_usernames);
  deleteCodespacesAccessUsers(org, selected_usernames);
  tryToDeleteANonExistingCodespacesAccessUsers(org, selected_usernames);
  verifyCodespacesAccessUsersDoesNotExist(org, selected_usernames);
});

// Story: crud:CodespacesAccessUsers:nondet:1:2
bthread("crud:CodespacesAccessUsers:nondet:1:2", function () {
  let org = 1811;
  let selected_usernames = "selected_usernames_1811";
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
  let org = 1816;
  let selected_usernames = "selected_usernames_1816";
  addCodespacesAccessUsers(org, selected_usernames);
  // waitForCodespacesAccessUsersAdded(org, selected_usernames);
  verifyCodespacesAccessUsersExists(org, selected_usernames);
  tryToAddExistingCodespacesAccessUsers(org, selected_usernames);
  verifyCodespacesAccessUsersExists(org, selected_usernames);
});

// Story: crud:OrgSecret:nondet:1:1
bthread("crud:OrgSecret:nondet:1:1", function () {
  let org = 1820;
  let secret_name = "secret_name_1820";
  let visibility = "visibility_1820";
  createOrUpdateOrgSecret(org, secret_name, visibility);
  // waitForOrgSecretAdded(org, secret_name, visibility);
  tryToAddExistingOrgSecret(org, secret_name, visibility);
  verifyOrgSecretExists(org, secret_name, visibility);
  deleteOrgSecret(org, secret_name, visibility);
  tryToDeleteANonExistingOrgSecret(org, secret_name, visibility);
  verifyOrgSecretDoesNotExist(org, secret_name, visibility);
});

// Story: crud:OrgSecret:nondet:1:2
bthread("crud:OrgSecret:nondet:1:2", function () {
  let org = 1821;
  let secret_name = "secret_name_1821";
  let visibility = "visibility_1821";
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
  let org = 1826;
  let secret_name = "secret_name_1826";
  let visibility = "visibility_1826";
  createOrUpdateOrgSecret(org, secret_name, visibility);
  // waitForOrgSecretAdded(org, secret_name, visibility);
  verifyOrgSecretExists(org, secret_name, visibility);
  tryToAddExistingOrgSecret(org, secret_name, visibility);
  verifyOrgSecretExists(org, secret_name, visibility);
});

// Story: crud:OrgSecretSelectedRepositories:read_only
bthread("crud:OrgSecretSelectedRepositories:read_only", function () {
  let org = 1830;
  let secret_name = "secret_name_1830";
  verifyOrgSecretSelectedRepositoriesExists(org, secret_name, selected_repository_ids);
});

// Story: crud:OrgSecretSelectedRepository:nondet:1:1
bthread("crud:OrgSecretSelectedRepository:nondet:1:1", function () {
  let org = 1840;
  let secret_name = "secret_name_1840";
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
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

// Story: crud:OrgSecretSelectedRepository:nondet:1:2
bthread("crud:OrgSecretSelectedRepository:nondet:1:2", function () {
  let org = 1841;
  let secret_name = "secret_name_1841";
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
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
  let org = 1846;
  let secret_name = "secret_name_1846";
  // Dependency Barrier
  let deps = {};
  deps["repository_id"] = matchAnyRepositoryAdded();
  let pkMap = {"repository_id": "owner"};
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
  let codespace_name = 1850;
  let name = "name_1850";
  let org = "org_1850";
  let owner = "owner_1850";
  let page = "page_1850";
  let per-page = "per-page_1850";
  let private = "private_1850";
  let pull_number = "pull_number_1850";
  let repo = "repo_1850";
  let username = "username_1850";
  publishCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  // waitForCodespaceAdded(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  tryToAddExistingCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  verifyCodespaceExists(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  startCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  stopCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  tryToDeleteANonExistingCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  verifyCodespaceDoesNotExist(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
});

// Story: crud:Codespace:nondet:1:2
bthread("crud:Codespace:nondet:1:2", function () {
  let codespace_name = 1851;
  let name = "name_1851";
  let org = "org_1851";
  let owner = "owner_1851";
  let page = "page_1851";
  let per-page = "per-page_1851";
  let private = "private_1851";
  let pull_number = "pull_number_1851";
  let repo = "repo_1851";
  let username = "username_1851";
  publishCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  // waitForCodespaceAdded(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  tryToAddExistingCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  startCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  verifyCodespaceExists(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  stopCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  tryToDeleteANonExistingCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  verifyCodespaceDoesNotExist(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
});

// Story: crud:Codespace:nondet:negative:dup-add
bthread("crud:Codespace:nondet:negative:dup-add", function () {
  let codespace_name = 1856;
  let name = "name_1856";
  let org = "org_1856";
  let owner = "owner_1856";
  let page = "page_1856";
  let per-page = "per-page_1856";
  let private = "private_1856";
  let pull_number = "pull_number_1856";
  let repo = "repo_1856";
  let username = "username_1856";
  publishCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  // waitForCodespaceAdded(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  verifyCodespaceExists(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  tryToAddExistingCodespace(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
  verifyCodespaceExists(codespace_name, name, org, owner, page, per-page, private, pull_number, repo, username);
});

// Story: crud:CodespacePermissionCheck:read_only
bthread("crud:CodespacePermissionCheck:read_only", function () {
  let devcontainer_path = "devcontainer_path_1880";
  let owner = 1880;
  let ref = "ref_1880";
  let repo = "repo_1880";
  verifyCodespacePermissionCheckExists(devcontainer_path, owner, ref, repo);
});

// Story: crud:CodespaceSecret:nondet:1:1
bthread("crud:CodespaceSecret:nondet:1:1", function () {
  let owner = 1890;
  let page = "page_1890";
  let per-page = "per-page_1890";
  let repo = "repo_1890";
  let secret_name = "secret_name_1890";
  createOrUpdateSecretForAuthenticatedUser(owner, page, per-page, repo, secret_name);
  // waitForCodespaceSecretAdded(owner, page, per-page, repo, secret_name);
  tryToAddExistingCodespaceSecret(owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretExists(owner, page, per-page, repo, secret_name);
  deleteSecretForAuthenticatedUser(owner, page, per-page, repo, secret_name);
  tryToDeleteANonExistingCodespaceSecret(owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretDoesNotExist(owner, page, per-page, repo, secret_name);
});

// Story: crud:CodespaceSecret:nondet:1:2
bthread("crud:CodespaceSecret:nondet:1:2", function () {
  let owner = 1891;
  let page = "page_1891";
  let per-page = "per-page_1891";
  let repo = "repo_1891";
  let secret_name = "secret_name_1891";
  createOrUpdateSecretForAuthenticatedUser(owner, page, per-page, repo, secret_name);
  // waitForCodespaceSecretAdded(owner, page, per-page, repo, secret_name);
  tryToAddExistingCodespaceSecret(owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretExists(owner, page, per-page, repo, secret_name);
  deleteSecretForAuthenticatedUser(owner, page, per-page, repo, secret_name);
  tryToDeleteANonExistingCodespaceSecret(owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretDoesNotExist(owner, page, per-page, repo, secret_name);
});

// Story: crud:CodespaceSecret:nondet:negative:dup-add
bthread("crud:CodespaceSecret:nondet:negative:dup-add", function () {
  let owner = 1896;
  let page = "page_1896";
  let per-page = "per-page_1896";
  let repo = "repo_1896";
  let secret_name = "secret_name_1896";
  createOrUpdateSecretForAuthenticatedUser(owner, page, per-page, repo, secret_name);
  // waitForCodespaceSecretAdded(owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretExists(owner, page, per-page, repo, secret_name);
  tryToAddExistingCodespaceSecret(owner, page, per-page, repo, secret_name);
  verifyCodespaceSecretExists(owner, page, per-page, repo, secret_name);
});

// Story: crud:SecretRepositoryList:read_only
bthread("crud:SecretRepositoryList:read_only", function () {
  let secret_name = 1900;
  verifySecretRepositoryListExists(secret_name);
});

// Story: crud:User:read_only
bthread("crud:User:read_only", function () {
  let account_id = 1910;
  let username = "username_1910";
  verifyUserExists(account_id, username);
});

// Story: crud:UserBlock:nondet:1:1
bthread("crud:UserBlock:nondet:1:1", function () {
  let username = 1920;
  blockUser(username);
  // waitForUserBlockAdded(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
  unblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Story: crud:UserBlock:nondet:1:2
bthread("crud:UserBlock:nondet:1:2", function () {
  let username = 1921;
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
  let username = 1926;
  blockUser(username);
  // waitForUserBlockAdded(username);
  verifyUserBlockExists(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
});

// Story: crud:UserEmail:nondet:1:1
bthread("crud:UserEmail:nondet:1:1", function () {

  addEmails();
  // waitForUserEmailAdded();
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
  let username = 1960;
  followUser(username);
  // waitForUserFollowingAdded(username);
  tryToAddExistingUserFollowing(username);
  verifyUserFollowingExists(username);
  unfollowUser(username);
  tryToDeleteANonExistingUserFollowing(username);
  verifyUserFollowingDoesNotExist(username);
});

// Story: crud:UserFollowing:nondet:1:2
bthread("crud:UserFollowing:nondet:1:2", function () {
  let username = 1961;
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
  let username = 1966;
  followUser(username);
  // waitForUserFollowingAdded(username);
  verifyUserFollowingExists(username);
  tryToAddExistingUserFollowing(username);
  verifyUserFollowingExists(username);
});

// Story: crud:UserGpgKey:nondet:1:1
bthread("crud:UserGpgKey:nondet:1:1", function () {
  let armored_public_key = "armored_public_key_1970";
  let gpg_key_id = 1970;
  let name = "name_1970";
  createGpgKey(armored_public_key, gpg_key_id, name);
  // waitForUserGpgKeyAdded(armored_public_key, gpg_key_id, name);
  tryToAddExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
  deleteGpgKey(armored_public_key, gpg_key_id, name);
  tryToDeleteANonExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyDoesNotExist(armored_public_key, gpg_key_id, name);
});

// Story: crud:UserGpgKey:nondet:1:2
bthread("crud:UserGpgKey:nondet:1:2", function () {
  let armored_public_key = "armored_public_key_1971";
  let gpg_key_id = 1971;
  let name = "name_1971";
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
  let armored_public_key = "armored_public_key_1976";
  let gpg_key_id = 1976;
  let name = "name_1976";
  createGpgKey(armored_public_key, gpg_key_id, name);
  // waitForUserGpgKeyAdded(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
  tryToAddExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
});

// Story: crud:PublicSSHKey:nondet:1:1
bthread("crud:PublicSSHKey:nondet:1:1", function () {
  let key = "key_1980";
  let key_id = 1980;
  let title = "title_1980";
  createPublicSSHKey(key, key_id, title);
  // waitForPublicSSHKeyAdded(key, key_id, title);
  tryToAddExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
  deletePublicSSHKey(key, key_id, title);
  tryToDeleteANonExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyDoesNotExist(key, key_id, title);
});

// Story: crud:PublicSSHKey:nondet:1:2
bthread("crud:PublicSSHKey:nondet:1:2", function () {
  let key = "key_1981";
  let key_id = 1981;
  let title = "title_1981";
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
  let key = "key_1986";
  let key_id = 1986;
  let title = "title_1986";
  createPublicSSHKey(key, key_id, title);
  // waitForPublicSSHKeyAdded(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
  tryToAddExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
});

// Story: crud:SocialAccount:nondet:1:1
bthread("crud:SocialAccount:nondet:1:1", function () {
  let account_urls = "account_urls_1990";
  let username = 1990;
  addSocialAccount(account_urls, username);
  // waitForSocialAccountAdded(account_urls, username);
  tryToAddExistingSocialAccount(account_urls, username);
  verifySocialAccountExists(account_urls, username);
  deleteSocialAccount(account_urls, username);
  tryToDeleteANonExistingSocialAccount(account_urls, username);
  verifySocialAccountDoesNotExist(account_urls, username);
});

// Story: crud:SocialAccount:nondet:1:2
bthread("crud:SocialAccount:nondet:1:2", function () {
  let account_urls = "account_urls_1991";
  let username = 1991;
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
  let account_urls = "account_urls_1996";
  let username = 1996;
  addSocialAccount(account_urls, username);
  // waitForSocialAccountAdded(account_urls, username);
  verifySocialAccountExists(account_urls, username);
  tryToAddExistingSocialAccount(account_urls, username);
  verifySocialAccountExists(account_urls, username);
});

// Story: crud:SSHSigningKey:nondet:1:1
bthread("crud:SSHSigningKey:nondet:1:1", function () {
  let key = "key_2000";
  let ssh_signing_key_id = 2000;
  let title = "title_2000";
  createSSHSigningKey(key, ssh_signing_key_id, title);
  // waitForSSHSigningKeyAdded(key, ssh_signing_key_id, title);
  tryToAddExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
  deleteSSHSigningKey(key, ssh_signing_key_id, title);
  tryToDeleteANonExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyDoesNotExist(key, ssh_signing_key_id, title);
});

// Story: crud:SSHSigningKey:nondet:1:2
bthread("crud:SSHSigningKey:nondet:1:2", function () {
  let key = "key_2001";
  let ssh_signing_key_id = 2001;
  let title = "title_2001";
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
  let key = "key_2006";
  let ssh_signing_key_id = 2006;
  let title = "title_2006";
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

// Story: crud:GPGKey:read_only
bthread("crud:GPGKey:read_only", function () {
  let page = "page_2030";
  let per_page = "per_page_2030";
  let username = 2030;
  verifyGPGKeyExists(page, per_page, username);
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
  let cursor = "cursor_2110";
  let per-page = "per-page_2110";
  verifyAppWebhookDeliveriesExists(cursor, per-page);
});

// Story: crud:AppInstallationRequest:read_only
bthread("crud:AppInstallationRequest:read_only", function () {
  let page = "page_2120";
  let per-page = "per-page_2120";
  verifyAppInstallationRequestExists(page, per-page);
});

// Story: crud:AppInstallation:read_only
bthread("crud:AppInstallation:read_only", function () {
  let installation_id = 2130;
  verifyAppInstallationExists(installation_id);
});

// Story: crud:AppInstallations:read_only
bthread("crud:AppInstallations:read_only", function () {
  let outdated = "outdated_2140";
  let page = "page_2140";
  let per-page = "per-page_2140";
  let since = "since_2140";
  verifyAppInstallationsExists(outdated, page, per-page, since);
});

// Story: crud:AppToken:nondet:1:1
bthread("crud:AppToken:nondet:1:1", function () {
  let access_token = "access_token_2170";
  let client_id = 2170;
  checkAppToken(access_token, client_id);
  // waitForAppTokenAdded(access_token, client_id);
  tryToAddExistingAppToken(access_token, client_id);
  verifyAppTokenExists(access_token, client_id);
  resetAppToken(access_token, client_id);
  deleteAppToken(access_token, client_id);
  tryToDeleteANonExistingAppToken(access_token, client_id);
  verifyAppTokenDoesNotExist(access_token, client_id);
});

// Story: crud:AppToken:nondet:1:2
bthread("crud:AppToken:nondet:1:2", function () {
  let access_token = "access_token_2171";
  let client_id = 2171;
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
  let access_token = "access_token_2176";
  let client_id = 2176;
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
  let account_id = 2210;
  verifyMarketplaceSubscriptionExists(account_id);
});

// Story: crud:MarketplacePlan:read_only
bthread("crud:MarketplacePlan:read_only", function () {
  let direction = "direction_2220";
  let page = "page_2220";
  let per-page = "per-page_2220";
  let plan_id = 2220;
  let sort = "sort_2220";
  verifyMarketplacePlanExists(direction, page, per-page, plan_id, sort);
});

// Story: crud:MarketplaceListingAccount:read_only
bthread("crud:MarketplaceListingAccount:read_only", function () {
  let account_id = 2230;
  verifyMarketplaceListingAccountExists(account_id);
});

// Story: crud:OrgInstallation:read_only
bthread("crud:OrgInstallation:read_only", function () {
  let org = 2250;
  verifyOrgInstallationExists(org);
});

// Story: crud:RepoInstallation:read_only
bthread("crud:RepoInstallation:read_only", function () {
  let owner = 2260;
  let repo = "repo_2260";
  verifyRepoInstallationExists(owner, repo);
});

// Story: crud:UserInstallation:read_only
bthread("crud:UserInstallation:read_only", function () {
  let installation_id = 2270;
  let page = "page_2270";
  let per-page = "per-page_2270";
  let username = "username_2270";
  verifyUserInstallationExists(installation_id, page, per-page, repository_id, username);
});

// Story: crud:Issue:read_only
bthread("crud:Issue:read_only", function () {
  let assignee = "assignee_2290";
  let assignees = "assignees_2290";
  let body = "body_2290";
  let issue_number = "issue_number_2290";
  let labels = "labels_2290";
  let milestone = "milestone_2290";
  let owner = 2290;
  let repo = "repo_2290";
  let title = "title_2290";
  let type = "type_2290";
  verifyIssueExists(assignee, assignees, body, issue_number, labels, milestone, owner, repo, title, type);
});

// Story: crud:IssueComment:read_only
bthread("crud:IssueComment:read_only", function () {
  let comment_id = 2300;
  let owner = 2300;
  let repo = "repo_2300";
  verifyIssueCommentExists(comment_id, owner, repo);
});

// Story: crud:IssueAssignees:nondet:1:1
bthread("crud:IssueAssignees:nondet:1:1", function () {
  let assignee = "assignee_2310";
  let assignees = "assignees_2310";
  let issue_number = "issue_number_2310";
  let owner = 2310;
  let repo = "repo_2310";
  addAssigneesToIssue(assignee, assignees, issue_number, owner, repo);
  // waitForIssueAssigneesAdded(assignee, assignees, issue_number, owner, repo);
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
  // waitForIssueDependenciesBlockedByAdded(issue_id, issue_number, owner, repo);
  tryToAddExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
  removeBlockedByDependency(issue_id, issue_number, owner, repo);
  tryToDeleteANonExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByDoesNotExist(issue_id, issue_number, owner, repo);
});

// Story: crud:IssueDependenciesBlockedBy:nondet:1:2
bthread("crud:IssueDependenciesBlockedBy:nondet:1:2", function () {
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
  // waitForIssueLabelsAdded(issue_number, labels, owner, repo);
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
  // Dependency Barrier
  let deps = {};
  deps["sub_issue_id"] = matchAnyIssueAdded();
  let pkMap = {"sub_issue_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  sub_issue_id = captured["sub_issue_id"];
  addSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  // waitForSubIssueAdded(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
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
  // waitForLabelAdded(color, description, name, new_name, owner, page, per_page, repo);
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
  // waitForMilestoneAdded(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
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
  // waitForTeamAdded(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id, team_slug);
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
  let org = "org_2430";
  let private = "private_2430";
  let team_slug = "team_slug_2430";
  let title = "title_2430";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createDiscussionLegacy(body, discussion_number, org, private, team_id, team_slug, title);
  // waitForDiscussionAdded(body, discussion_number, org, private, team_id, team_slug, title);
  tryToAddExistingDiscussion(body, discussion_number, org, private, team_id, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, private, team_id, team_slug, title);
  updateDiscussionLegacy(body, discussion_number, org, private, team_id, team_slug, title);
  deleteDiscussionLegacy(body, discussion_number, org, private, team_id, team_slug, title);
  tryToDeleteANonExistingDiscussion(body, discussion_number, org, private, team_id, team_slug, title);
  verifyDiscussionDoesNotExist(body, discussion_number, org, private, team_id, team_slug, title);
});

// Story: crud:Discussion:nondet:1:2
bthread("crud:Discussion:nondet:1:2", function () {
  let body = "body_2431";
  let discussion_number = "discussion_number_2431";
  let org = "org_2431";
  let private = "private_2431";
  let team_slug = "team_slug_2431";
  let title = "title_2431";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createDiscussionLegacy(body, discussion_number, org, private, team_id, team_slug, title);
  // waitForDiscussionAdded(body, discussion_number, org, private, team_id, team_slug, title);
  tryToAddExistingDiscussion(body, discussion_number, org, private, team_id, team_slug, title);
  updateDiscussionLegacy(body, discussion_number, org, private, team_id, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, private, team_id, team_slug, title);
  deleteDiscussionLegacy(body, discussion_number, org, private, team_id, team_slug, title);
  tryToDeleteANonExistingDiscussion(body, discussion_number, org, private, team_id, team_slug, title);
  verifyDiscussionDoesNotExist(body, discussion_number, org, private, team_id, team_slug, title);
});

// Story: crud:Discussion:nondet:negative:dup-add
bthread("crud:Discussion:nondet:negative:dup-add", function () {
  let body = "body_2436";
  let discussion_number = "discussion_number_2436";
  let org = "org_2436";
  let private = "private_2436";
  let team_slug = "team_slug_2436";
  let title = "title_2436";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createDiscussionLegacy(body, discussion_number, org, private, team_id, team_slug, title);
  // waitForDiscussionAdded(body, discussion_number, org, private, team_id, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, private, team_id, team_slug, title);
  tryToAddExistingDiscussion(body, discussion_number, org, private, team_id, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, private, team_id, team_slug, title);
});

// Story: crud:DiscussionComment:nondet:1:1
bthread("crud:DiscussionComment:nondet:1:1", function () {
  let body = "body_2440";
  let comment_number = "comment_number_2440";
  let discussion_number = "discussion_number_2440";
  let org = "org_2440";
  let team_slug = "team_slug_2440";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createDiscussionCommentLegacy(body, comment_number, discussion_number, org, team_id, team_slug);
  // waitForDiscussionCommentAdded(body, comment_number, discussion_number, org, team_id, team_slug);
  tryToAddExistingDiscussionComment(body, comment_number, discussion_number, org, team_id, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_id, team_slug);
  updateDiscussionCommentLegacy(body, comment_number, discussion_number, org, team_id, team_slug);
  deleteDiscussionCommentLegacy(body, comment_number, discussion_number, org, team_id, team_slug);
  tryToDeleteANonExistingDiscussionComment(body, comment_number, discussion_number, org, team_id, team_slug);
  verifyDiscussionCommentDoesNotExist(body, comment_number, discussion_number, org, team_id, team_slug);
});

// Story: crud:DiscussionComment:nondet:1:2
bthread("crud:DiscussionComment:nondet:1:2", function () {
  let body = "body_2441";
  let comment_number = "comment_number_2441";
  let discussion_number = "discussion_number_2441";
  let org = "org_2441";
  let team_slug = "team_slug_2441";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createDiscussionCommentLegacy(body, comment_number, discussion_number, org, team_id, team_slug);
  // waitForDiscussionCommentAdded(body, comment_number, discussion_number, org, team_id, team_slug);
  tryToAddExistingDiscussionComment(body, comment_number, discussion_number, org, team_id, team_slug);
  updateDiscussionCommentLegacy(body, comment_number, discussion_number, org, team_id, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_id, team_slug);
  deleteDiscussionCommentLegacy(body, comment_number, discussion_number, org, team_id, team_slug);
  tryToDeleteANonExistingDiscussionComment(body, comment_number, discussion_number, org, team_id, team_slug);
  verifyDiscussionCommentDoesNotExist(body, comment_number, discussion_number, org, team_id, team_slug);
});

// Story: crud:DiscussionComment:nondet:negative:dup-add
bthread("crud:DiscussionComment:nondet:negative:dup-add", function () {
  let body = "body_2446";
  let comment_number = "comment_number_2446";
  let discussion_number = "discussion_number_2446";
  let org = "org_2446";
  let team_slug = "team_slug_2446";
  // Dependency Barrier
  let deps = {};
  deps["team_id"] = matchAnyTeamAdded();
  let pkMap = {"team_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  team_id = captured["team_id"];
  createDiscussionCommentLegacy(body, comment_number, discussion_number, org, team_id, team_slug);
  // waitForDiscussionCommentAdded(body, comment_number, discussion_number, org, team_id, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_id, team_slug);
  tryToAddExistingDiscussionComment(body, comment_number, discussion_number, org, team_id, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_id, team_slug);
});

// Story: crud:TeamProject:nondet:1:1
bthread("crud:TeamProject:nondet:1:1", function () {
  let org = "org_2450";
  let permission = "permission_2450";
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
  // waitForTeamProjectAdded(org, permission, project_id, team_id, team_slug);
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

// Story: crud:TeamMember:nondet:1:1
bthread("crud:TeamMember:nondet:1:1", function () {
  let username = "username_2470";
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

// Story: crud:TeamMember:nondet:1:2
bthread("crud:TeamMember:nondet:1:2", function () {
  let username = "username_2471";
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
  let username = "username_2476";
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
  let role = "role_2480";
  let username = "username_2480";
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

// Story: crud:TeamMembership:nondet:1:2
bthread("crud:TeamMembership:nondet:1:2", function () {
  let role = "role_2481";
  let username = "username_2481";
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
  let role = "role_2486";
  let username = "username_2486";
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
  let owner = "owner_2490";
  let permission = "permission_2490";
  let repo = "repo_2490";
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

// Story: crud:TeamRepository:nondet:1:2
bthread("crud:TeamRepository:nondet:1:2", function () {
  let owner = "owner_2491";
  let permission = "permission_2491";
  let repo = "repo_2491";
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
  let owner = "owner_2496";
  let permission = "permission_2496";
  let repo = "repo_2496";
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
  let thread_id = 2500;
  verifyNotificationExists(thread_id);
});

// Story: crud:ThreadSubscription:nondet:1:1
bthread("crud:ThreadSubscription:nondet:1:1", function () {
  let ignored = "ignored_2510";
  let thread_id = 2510;
  setThreadSubscription(ignored, thread_id);
  // waitForThreadSubscriptionAdded(ignored, thread_id);
  tryToAddExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
  deleteThreadSubscription(ignored, thread_id);
  tryToDeleteANonExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionDoesNotExist(ignored, thread_id);
});

// Story: crud:ThreadSubscription:nondet:1:2
bthread("crud:ThreadSubscription:nondet:1:2", function () {
  let ignored = "ignored_2511";
  let thread_id = 2511;
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
  let ignored = "ignored_2516";
  let thread_id = 2516;
  setThreadSubscription(ignored, thread_id);
  // waitForThreadSubscriptionAdded(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
  tryToAddExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
});

// Story: crud:RepositorySubscription:nondet:1:1
bthread("crud:RepositorySubscription:nondet:1:1", function () {
  let ignored = "ignored_2540";
  let owner = 2540;
  let repo = "repo_2540";
  let subscribed = "subscribed_2540";
  setRepositorySubscription(ignored, owner, repo, subscribed);
  // waitForRepositorySubscriptionAdded(ignored, owner, repo, subscribed);
  tryToAddExistingRepositorySubscription(ignored, owner, repo, subscribed);
  verifyRepositorySubscriptionExists(ignored, owner, repo, subscribed);
  deleteRepositorySubscription(ignored, owner, repo, subscribed);
  tryToDeleteANonExistingRepositorySubscription(ignored, owner, repo, subscribed);
  verifyRepositorySubscriptionDoesNotExist(ignored, owner, repo, subscribed);
});

// Story: crud:RepositorySubscription:nondet:1:2
bthread("crud:RepositorySubscription:nondet:1:2", function () {
  let ignored = "ignored_2541";
  let owner = 2541;
  let repo = "repo_2541";
  let subscribed = "subscribed_2541";
  setRepositorySubscription(ignored, owner, repo, subscribed);
  // waitForRepositorySubscriptionAdded(ignored, owner, repo, subscribed);
  tryToAddExistingRepositorySubscription(ignored, owner, repo, subscribed);
  verifyRepositorySubscriptionExists(ignored, owner, repo, subscribed);
  deleteRepositorySubscription(ignored, owner, repo, subscribed);
  tryToDeleteANonExistingRepositorySubscription(ignored, owner, repo, subscribed);
  verifyRepositorySubscriptionDoesNotExist(ignored, owner, repo, subscribed);
});

// Story: crud:RepositorySubscription:nondet:negative:dup-add
bthread("crud:RepositorySubscription:nondet:negative:dup-add", function () {
  let ignored = "ignored_2546";
  let owner = 2546;
  let repo = "repo_2546";
  let subscribed = "subscribed_2546";
  setRepositorySubscription(ignored, owner, repo, subscribed);
  // waitForRepositorySubscriptionAdded(ignored, owner, repo, subscribed);
  verifyRepositorySubscriptionExists(ignored, owner, repo, subscribed);
  tryToAddExistingRepositorySubscription(ignored, owner, repo, subscribed);
  verifyRepositorySubscriptionExists(ignored, owner, repo, subscribed);
});

// Story: crud:RepositoryStar:nondet:1:1
bthread("crud:RepositoryStar:nondet:1:1", function () {
  let owner = 2550;
  let repo = "repo_2550";
  starRepository(owner, repo);
  // waitForRepositoryStarAdded(owner, repo);
  tryToAddExistingRepositoryStar(owner, repo);
  verifyRepositoryStarExists(owner, repo);
  unstarRepository(owner, repo);
  tryToDeleteANonExistingRepositoryStar(owner, repo);
  verifyRepositoryStarDoesNotExist(owner, repo);
});

// Story: crud:RepositoryStar:nondet:1:2
bthread("crud:RepositoryStar:nondet:1:2", function () {
  let owner = 2551;
  let repo = "repo_2551";
  starRepository(owner, repo);
  // waitForRepositoryStarAdded(owner, repo);
  tryToAddExistingRepositoryStar(owner, repo);
  verifyRepositoryStarExists(owner, repo);
  unstarRepository(owner, repo);
  tryToDeleteANonExistingRepositoryStar(owner, repo);
  verifyRepositoryStarDoesNotExist(owner, repo);
});

// Story: crud:RepositoryStar:nondet:negative:dup-add
bthread("crud:RepositoryStar:nondet:negative:dup-add", function () {
  let owner = 2556;
  let repo = "repo_2556";
  starRepository(owner, repo);
  // waitForRepositoryStarAdded(owner, repo);
  verifyRepositoryStarExists(owner, repo);
  tryToAddExistingRepositoryStar(owner, repo);
  verifyRepositoryStarExists(owner, repo);
});

// Story: crud:Package:read_only
bthread("crud:Package:read_only", function () {
  let org = "org_2560";
  let package_name = "package_name_2560";
  let package_type = "package_type_2560";
  let username = 2560;
  verifyPackageExists(org, package_name, package_type, username);
});

// Story: crud:PackageVersion:nondet:1:1
bthread("crud:PackageVersion:nondet:1:1", function () {
  let org = "org_2580";
  let package_name = "package_name_2580";
  let package_type = "package_type_2580";
  let username = 2580;
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

// Story: crud:PackageVersion:nondet:1:2
bthread("crud:PackageVersion:nondet:1:2", function () {
  let org = "org_2581";
  let package_name = "package_name_2581";
  let package_type = "package_type_2581";
  let username = 2581;
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
  let org = "org_2586";
  let package_name = "package_name_2586";
  let package_type = "package_type_2586";
  let username = 2586;
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

// Story: crud:OrgPackages:read_only
bthread("crud:OrgPackages:read_only", function () {
  let org = 2600;
  let package_type = "package_type_2600";
  let package_visibility = "package_visibility_2600";
  let page = "page_2600";
  let per_page = "per_page_2600";
  verifyOrgPackagesExists(org, package_type, package_visibility, page, per_page);
});

// Story: crud:OrgDockerConflicts:read_only
bthread("crud:OrgDockerConflicts:read_only", function () {
  let org = 2610;
  verifyOrgDockerConflictsExists(org);
});

// Story: crud:PackageVersions:read_only
bthread("crud:PackageVersions:read_only", function () {
  let org = 2620;
  let package_name = "package_name_2620";
  let package_type = "package_type_2620";
  let page = "page_2620";
  let per_page = "per_page_2620";
  let state = "state_2620";
  verifyPackageVersionsExists(org, package_name, package_type, page, per_page, state);
});

// Story: crud:UserPackages:read_only
bthread("crud:UserPackages:read_only", function () {
  let package_type = "package_type_2630";
  let package_visibility = "package_visibility_2630";
  let page = "page_2630";
  let per_page = "per_page_2630";
  verifyUserPackagesExists(package_type, package_visibility, page, per_page);
});

// Story: crud:UserPackage:read_only
bthread("crud:UserPackage:read_only", function () {
  let package_name = "package_name_2640";
  let package_type = 2640;
  let username = "username_2640";
  verifyUserPackageExists(package_name, package_type, username);
});

// Story: crud:UserDockerConflicts:read_only
bthread("crud:UserDockerConflicts:read_only", function () {

  verifyUserDockerConflictsExists();
});

// Story: crud:AuthenticatedUserPackageVersion:read_only
bthread("crud:AuthenticatedUserPackageVersion:read_only", function () {
  let package_name = "package_name_2680";
  let package_type = 2680;
  verifyAuthenticatedUserPackageVersionExists(package_name, package_type, package_version_id);
});

// Story: crud:CodeScanningAlert:read_only
bthread("crud:CodeScanningAlert:read_only", function () {
  let alert_number = "alert_number_2700";
  let owner = 2700;
  let repo = "repo_2700";
  let state = "state_2700";
  verifyCodeScanningAlertExists(alert_number, owner, repo, state);
});

// Story: crud:CodeScanningAlertAutofix:read_only
bthread("crud:CodeScanningAlertAutofix:read_only", function () {
  let alert_number = "alert_number_2710";
  let owner = 2710;
  let repo = "repo_2710";
  verifyCodeScanningAlertAutofixExists(alert_number, owner, repo);
});

// Story: crud:CodeScanningAlertInstance:read_only
bthread("crud:CodeScanningAlertInstance:read_only", function () {
  let alert_number = "alert_number_2730";
  let owner = 2730;
  let repo = "repo_2730";
  verifyCodeScanningAlertInstanceExists(alert_number, owner, repo);
});

// Story: crud:CodeScanningAnalysis:read_only
bthread("crud:CodeScanningAnalysis:read_only", function () {
  let analysis_id = 2740;
  let owner = 2740;
  let repo = "repo_2740";
  verifyCodeScanningAnalysisExists(analysis_id, owner, repo);
});

// Story: crud:CodeScanningAlertList:read_only
bthread("crud:CodeScanningAlertList:read_only", function () {
  let org = 2750;
  verifyCodeScanningAlertListExists(org);
});

// Story: crud:CodeScanningAlertListRepo:read_only
bthread("crud:CodeScanningAlertListRepo:read_only", function () {
  let owner = 2760;
  let repo = "repo_2760";
  verifyCodeScanningAlertListRepoExists(owner, repo);
});

// Story: crud:CodeScanningAnalysisList:read_only
bthread("crud:CodeScanningAnalysisList:read_only", function () {
  let owner = 2770;
  let repo = "repo_2770";
  verifyCodeScanningAnalysisListExists(owner, repo);
});

// Story: crud:CodeQLDatabase:read_only
bthread("crud:CodeQLDatabase:read_only", function () {
  let language = "language_2780";
  let owner = 2780;
  let repo = "repo_2780";
  verifyCodeQLDatabaseExists(language, owner, repo);
});

// Story: crud:CodeQLDatabaseList:read_only
bthread("crud:CodeQLDatabaseList:read_only", function () {
  let owner = 2790;
  let repo = "repo_2790";
  verifyCodeQLDatabaseListExists(owner, repo);
});

// Story: crud:CodeQLVariantAnalysis:read_only
bthread("crud:CodeQLVariantAnalysis:read_only", function () {
  let codeql_variant_analysis_id = 2800;
  let language = "language_2800";
  let owner = 2800;
  let query_pack = "query_pack_2800";
  let repo = "repo_2800";
  let repositories = "repositories_2800";
  let repository_lists = "repository_lists_2800";
  let repository_owners = "repository_owners_2800";
  verifyCodeQLVariantAnalysisExists(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners);
});

// Story: crud:CodeQLVariantAnalysisRepoTask:read_only
bthread("crud:CodeQLVariantAnalysisRepoTask:read_only", function () {
  let codeql_variant_analysis_id = 2810;
  let owner = 2810;
  let repo = "repo_2810";
  let repo_name = "repo_name_2810";
  let repo_owner = "repo_owner_2810";
  verifyCodeQLVariantAnalysisRepoTaskExists(codeql_variant_analysis_id, owner, repo, repo_name, repo_owner);
});

// Story: crud:DefaultSetup:read_only
bthread("crud:DefaultSetup:read_only", function () {
  let owner = 2820;
  let repo = "repo_2820";
  verifyDefaultSetupExists(owner, repo);
});

// Story: crud:Sarif:read_only
bthread("crud:Sarif:read_only", function () {
  let checkout_uri = "checkout_uri_2830";
  let commit_sha = "commit_sha_2830";
  let owner = 2830;
  let ref = "ref_2830";
  let repo = "repo_2830";
  let sarif = "sarif_2830";
  let sarif_id = 2830;
  let started_at = "started_at_2830";
  let tool_name = "tool_name_2830";
  let validate = "validate_2830";
  verifySarifExists(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:1:1
bthread("crud:TeamDiscussionCommentReaction:nondet:1:1", function () {
  let comment_number = "comment_number_2840";
  let content = "content_2840";
  let discussion_number = "discussion_number_2840";
  let org = 2840;
  let reaction_id = 2840;
  let team_slug = "team_slug_2840";
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  // waitForTeamDiscussionCommentReactionAdded(comment_number, content, discussion_number, org, reaction_id, team_slug);
  tryToAddExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_slug);
  deleteTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionCommentReactionDoesNotExist(comment_number, content, discussion_number, org, reaction_id, team_slug);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:1:2
bthread("crud:TeamDiscussionCommentReaction:nondet:1:2", function () {
  let comment_number = "comment_number_2841";
  let content = "content_2841";
  let discussion_number = "discussion_number_2841";
  let org = 2841;
  let reaction_id = 2841;
  let team_slug = "team_slug_2841";
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  // waitForTeamDiscussionCommentReactionAdded(comment_number, content, discussion_number, org, reaction_id, team_slug);
  tryToAddExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_slug);
  deleteTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionCommentReactionDoesNotExist(comment_number, content, discussion_number, org, reaction_id, team_slug);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:negative:dup-add
bthread("crud:TeamDiscussionCommentReaction:nondet:negative:dup-add", function () {
  let comment_number = "comment_number_2846";
  let content = "content_2846";
  let discussion_number = "discussion_number_2846";
  let org = 2846;
  let reaction_id = 2846;
  let team_slug = "team_slug_2846";
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  // waitForTeamDiscussionCommentReactionAdded(comment_number, content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_slug);
  tryToAddExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_slug);
});

// Story: crud:TeamDiscussionReaction:nondet:1:1
bthread("crud:TeamDiscussionReaction:nondet:1:1", function () {
  let content = "content_2850";
  let discussion_number = "discussion_number_2850";
  let org = 2850;
  let reaction_id = 2850;
  let team_slug = "team_slug_2850";
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  // waitForTeamDiscussionReactionAdded(content, discussion_number, org, reaction_id, team_slug);
  tryToAddExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_slug);
  deleteTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionReactionDoesNotExist(content, discussion_number, org, reaction_id, team_slug);
});

// Story: crud:TeamDiscussionReaction:nondet:1:2
bthread("crud:TeamDiscussionReaction:nondet:1:2", function () {
  let content = "content_2851";
  let discussion_number = "discussion_number_2851";
  let org = 2851;
  let reaction_id = 2851;
  let team_slug = "team_slug_2851";
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  // waitForTeamDiscussionReactionAdded(content, discussion_number, org, reaction_id, team_slug);
  tryToAddExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_slug);
  deleteTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionReactionDoesNotExist(content, discussion_number, org, reaction_id, team_slug);
});

// Story: crud:TeamDiscussionReaction:nondet:negative:dup-add
bthread("crud:TeamDiscussionReaction:nondet:negative:dup-add", function () {
  let content = "content_2856";
  let discussion_number = "discussion_number_2856";
  let org = 2856;
  let reaction_id = 2856;
  let team_slug = "team_slug_2856";
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  // waitForTeamDiscussionReactionAdded(content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_slug);
  tryToAddExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_slug);
});

// Story: crud:CommitCommentReaction:nondet:1:1
bthread("crud:CommitCommentReaction:nondet:1:1", function () {
  let comment_id = 2860;
  let content = "content_2860";
  let owner = 2860;
  let reaction_id = 2860;
  let repo = "repo_2860";
  createCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForCommitCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:CommitCommentReaction:nondet:1:2
bthread("crud:CommitCommentReaction:nondet:1:2", function () {
  let comment_id = 2861;
  let content = "content_2861";
  let owner = 2861;
  let reaction_id = 2861;
  let repo = "repo_2861";
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
  let comment_id = 2866;
  let content = "content_2866";
  let owner = 2866;
  let reaction_id = 2866;
  let repo = "repo_2866";
  createCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForCommitCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueCommentReaction:nondet:1:1
bthread("crud:IssueCommentReaction:nondet:1:1", function () {
  let comment_id = 2870;
  let content = "content_2870";
  let owner = 2870;
  let reaction_id = 2870;
  let repo = "repo_2870";
  createIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForIssueCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueCommentReaction:nondet:1:2
bthread("crud:IssueCommentReaction:nondet:1:2", function () {
  let comment_id = 2871;
  let content = "content_2871";
  let owner = 2871;
  let reaction_id = 2871;
  let repo = "repo_2871";
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
  let comment_id = 2876;
  let content = "content_2876";
  let owner = 2876;
  let reaction_id = 2876;
  let repo = "repo_2876";
  createIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForIssueCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueReaction:nondet:1:1
bthread("crud:IssueReaction:nondet:1:1", function () {
  let content = "content_2880";
  let issue_number = "issue_number_2880";
  let owner = 2880;
  let reaction_id = 2880;
  let repo = "repo_2880";
  createIssueReaction(content, issue_number, owner, reaction_id, repo);
  // waitForIssueReactionAdded(content, issue_number, owner, reaction_id, repo);
  tryToAddExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
  deleteIssueReaction(content, issue_number, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionDoesNotExist(content, issue_number, owner, reaction_id, repo);
});

// Story: crud:IssueReaction:nondet:1:2
bthread("crud:IssueReaction:nondet:1:2", function () {
  let content = "content_2881";
  let issue_number = "issue_number_2881";
  let owner = 2881;
  let reaction_id = 2881;
  let repo = "repo_2881";
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
  let content = "content_2886";
  let issue_number = "issue_number_2886";
  let owner = 2886;
  let reaction_id = 2886;
  let repo = "repo_2886";
  createIssueReaction(content, issue_number, owner, reaction_id, repo);
  // waitForIssueReactionAdded(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
  tryToAddExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
});

// Story: crud:PullRequestReviewCommentReaction:nondet:1:1
bthread("crud:PullRequestReviewCommentReaction:nondet:1:1", function () {
  let comment_id = 2890;
  let content = "content_2890";
  let owner = 2890;
  let reaction_id = 2890;
  let repo = "repo_2890";
  createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForPullRequestReviewCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deletePullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:PullRequestReviewCommentReaction:nondet:1:2
bthread("crud:PullRequestReviewCommentReaction:nondet:1:2", function () {
  let comment_id = 2891;
  let content = "content_2891";
  let owner = 2891;
  let reaction_id = 2891;
  let repo = "repo_2891";
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
  let comment_id = 2896;
  let content = "content_2896";
  let owner = 2896;
  let reaction_id = 2896;
  let repo = "repo_2896";
  createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  // waitForPullRequestReviewCommentReactionAdded(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  tryToAddExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:ReleaseReaction:nondet:1:1
bthread("crud:ReleaseReaction:nondet:1:1", function () {
  let content = "content_2900";
  let owner = 2900;
  let reaction_id = 2900;
  let repo = "repo_2900";
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

// Story: crud:ReleaseReaction:nondet:1:2
bthread("crud:ReleaseReaction:nondet:1:2", function () {
  let content = "content_2901";
  let owner = 2901;
  let reaction_id = 2901;
  let repo = "repo_2901";
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
  let content = "content_2906";
  let owner = 2906;
  let reaction_id = 2906;
  let repo = "repo_2906";
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

// Story: crud:TeamDiscussionCommentReactionLegacy:read_only
bthread("crud:TeamDiscussionCommentReactionLegacy:read_only", function () {
  let comment_number = "comment_number_2910";
  let content = "content_2910";
  let discussion_number = "discussion_number_2910";
  verifyTeamDiscussionCommentReactionLegacyExists(comment_number, content, discussion_number, team_id);
});

// Story: crud:TeamDiscussionReactionLegacy:read_only
bthread("crud:TeamDiscussionReactionLegacy:read_only", function () {
  let content = "content_2920";
  let discussion_number = "discussion_number_2920";
  verifyTeamDiscussionReactionLegacyExists(content, discussion_number, team_id);
});

// Story: crud:PullRequest:read_only
bthread("crud:PullRequest:read_only", function () {
  let base = "base_2930";
  let body = "body_2930";
  let draft = "draft_2930";
  let head = "head_2930";
  let head_repo = "head_repo_2930";
  let issue = 2930;
  let maintainer_can_modify = "maintainer_can_modify_2930";
  let owner = 2930;
  let pull_number = "pull_number_2930";
  let repo = "repo_2930";
  let title = "title_2930";
  verifyPullRequestExists(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, title);
});

// Story: crud:ReviewComment:read_only
bthread("crud:ReviewComment:read_only", function () {
  let body = "body_2940";
  let comment_id = 2940;
  let owner = 2940;
  let repo = "repo_2940";
  verifyReviewCommentExists(body, comment_id, owner, repo);
});

// Story: crud:PullRequestMerge:read_only
bthread("crud:PullRequestMerge:read_only", function () {
  let owner = 2970;
  let pull_number = "pull_number_2970";
  let repo = "repo_2970";
  verifyPullRequestMergeExists(owner, pull_number, repo);
});

// Story: crud:RequestedReviewers:nondet:1:1
bthread("crud:RequestedReviewers:nondet:1:1", function () {
  let owner = 2980;
  let pull_number = "pull_number_2980";
  let repo = "repo_2980";
  let reviewers = "reviewers_2980";
  let team_reviewers = "team_reviewers_2980";
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  // waitForRequestedReviewersAdded(owner, pull_number, repo, reviewers, team_reviewers);
  tryToAddExistingRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  removeRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  tryToDeleteANonExistingRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyRequestedReviewersDoesNotExist(owner, pull_number, repo, reviewers, team_reviewers);
});

// Story: crud:RequestedReviewers:nondet:1:2
bthread("crud:RequestedReviewers:nondet:1:2", function () {
  let owner = 2981;
  let pull_number = "pull_number_2981";
  let repo = "repo_2981";
  let reviewers = "reviewers_2981";
  let team_reviewers = "team_reviewers_2981";
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  // waitForRequestedReviewersAdded(owner, pull_number, repo, reviewers, team_reviewers);
  tryToAddExistingRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  removeRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  tryToDeleteANonExistingRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyRequestedReviewersDoesNotExist(owner, pull_number, repo, reviewers, team_reviewers);
});

// Story: crud:RequestedReviewers:nondet:negative:dup-add
bthread("crud:RequestedReviewers:nondet:negative:dup-add", function () {
  let owner = 2986;
  let pull_number = "pull_number_2986";
  let repo = "repo_2986";
  let reviewers = "reviewers_2986";
  let team_reviewers = "team_reviewers_2986";
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  // waitForRequestedReviewersAdded(owner, pull_number, repo, reviewers, team_reviewers);
  verifyRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  tryToAddExistingRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
});

// Story: crud:PullRequestReview:nondet:1:1
bthread("crud:PullRequestReview:nondet:1:1", function () {
  let body = "body_2990";
  let comments = "comments_2990";
  let event = "event_2990";
  let owner = 2990;
  let pull_number = "pull_number_2990";
  let repo = "repo_2990";
  let review_id = 2990;
  // Dependency Barrier
  let deps = {};
  deps["commit_id"] = matchAnyCommitAdded();
  let pkMap = {"commit_id": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  commit_id = captured["commit_id"];
  createPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  // waitForPullRequestReviewAdded(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToAddExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  updatePullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  deletePendingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToDeleteANonExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewDoesNotExist(body, comments, commit_id, event, owner, pull_number, repo, review_id);
});

// Story: crud:PullRequestReview:nondet:1:2
bthread("crud:PullRequestReview:nondet:1:2", function () {
  let body = "body_2991";
  let comments = "comments_2991";
  let event = "event_2991";
  let owner = 2991;
  let pull_number = "pull_number_2991";
  let repo = "repo_2991";
  let review_id = 2991;
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
  let body = "body_2996";
  let comments = "comments_2996";
  let event = "event_2996";
  let owner = 2996;
  let pull_number = "pull_number_2996";
  let repo = "repo_2996";
  let review_id = 2996;
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
  let exclude = "exclude_3030";
  let exclude_attachments = "exclude_attachments_3030";
  let exclude_git_data = "exclude_git_data_3030";
  let exclude_metadata = "exclude_metadata_3030";
  let exclude_owner_projects = "exclude_owner_projects_3030";
  let exclude_releases = "exclude_releases_3030";
  let lock_repositories = "lock_repositories_3030";
  let migration_id = 3030;
  let org = "org_3030";
  let org_metadata_only = "org_metadata_only_3030";
  let repositories = "repositories_3030";
  startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  // waitForMigrationAdded(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  tryToAddExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  deleteMigrationArchive(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  tryToDeleteANonExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationDoesNotExist(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
});

// Story: crud:Migration:nondet:1:2
bthread("crud:Migration:nondet:1:2", function () {
  let exclude = "exclude_3031";
  let exclude_attachments = "exclude_attachments_3031";
  let exclude_git_data = "exclude_git_data_3031";
  let exclude_metadata = "exclude_metadata_3031";
  let exclude_owner_projects = "exclude_owner_projects_3031";
  let exclude_releases = "exclude_releases_3031";
  let lock_repositories = "lock_repositories_3031";
  let migration_id = 3031;
  let org = "org_3031";
  let org_metadata_only = "org_metadata_only_3031";
  let repositories = "repositories_3031";
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
  let exclude = "exclude_3036";
  let exclude_attachments = "exclude_attachments_3036";
  let exclude_git_data = "exclude_git_data_3036";
  let exclude_metadata = "exclude_metadata_3036";
  let exclude_owner_projects = "exclude_owner_projects_3036";
  let exclude_releases = "exclude_releases_3036";
  let lock_repositories = "lock_repositories_3036";
  let migration_id = 3036;
  let org = "org_3036";
  let org_metadata_only = "org_metadata_only_3036";
  let repositories = "repositories_3036";
  startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  // waitForMigrationAdded(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  tryToAddExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org, org_metadata_only, repositories);
});

// Story: crud:MigrationArchive:read_only
bthread("crud:MigrationArchive:read_only", function () {
  let org = "org_3040";
  verifyMigrationArchiveExists(migration_id, org);
});

// Story: crud:MigrationRepository:read_only
bthread("crud:MigrationRepository:read_only", function () {
  let org = "org_3060";
  verifyMigrationRepositoryExists(migration_id, org);
});

// Story: crud:Import:nondet:1:1
bthread("crud:Import:nondet:1:1", function () {
  let owner = 3070;
  let repo = "repo_3070";
  let vcs_url = "vcs_url_3070";
  startImport(owner, repo, vcs_url);
  // waitForImportAdded(owner, repo, vcs_url);
  tryToAddExistingImport(owner, repo, vcs_url);
  verifyImportExists(owner, repo, vcs_url);
  updateImport(owner, repo, vcs_url);
  cancelImport(owner, repo, vcs_url);
  tryToDeleteANonExistingImport(owner, repo, vcs_url);
  verifyImportDoesNotExist(owner, repo, vcs_url);
});

// Story: crud:Import:nondet:1:2
bthread("crud:Import:nondet:1:2", function () {
  let owner = 3071;
  let repo = "repo_3071";
  let vcs_url = "vcs_url_3071";
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
  let owner = 3076;
  let repo = "repo_3076";
  let vcs_url = "vcs_url_3076";
  startImport(owner, repo, vcs_url);
  // waitForImportAdded(owner, repo, vcs_url);
  verifyImportExists(owner, repo, vcs_url);
  tryToAddExistingImport(owner, repo, vcs_url);
  verifyImportExists(owner, repo, vcs_url);
});

// Story: crud:ImportAuthor:read_only
bthread("crud:ImportAuthor:read_only", function () {
  let author_id = 3080;
  let owner = 3080;
  let repo = "repo_3080";
  verifyImportAuthorExists(author_id, owner, repo);
});

// Story: crud:ImportLargeFiles:read_only
bthread("crud:ImportLargeFiles:read_only", function () {
  let owner = 3090;
  let repo = "repo_3090";
  verifyImportLargeFilesExists(owner, repo);
});

// Story: crud:UserMigrationList:read_only
bthread("crud:UserMigrationList:read_only", function () {

  verifyUserMigrationListExists();
});

// Story: crud:CodeSecurityConfigurationEnterprise:nondet:1:1
bthread("crud:CodeSecurityConfigurationEnterprise:nondet:1:1", function () {
  let advanced_security = "advanced_security_3120";
  let code_scanning_default_setup = "code_scanning_default_setup_3120";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3120";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3120";
  let code_scanning_options = "code_scanning_options_3120";
  let code_security = "code_security_3120";
  let dependabot_alerts = "dependabot_alerts_3120";
  let dependabot_security_updates = "dependabot_security_updates_3120";
  let dependency_graph = "dependency_graph_3120";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3120";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3120";
  let enforcement = "enforcement_3120";
  let enterprise = 3120;
  let name = "name_3120";
  let private_vulnerability_reporting = "private_vulnerability_reporting_3120";
  let secret_protection = "secret_protection_3120";
  let secret_scanning = "secret_scanning_3120";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3120";
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3120";
  let secret_scanning_push_protection = "secret_scanning_push_protection_3120";
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
  verifyCodeSecurityConfigurationEnterpriseExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  updateEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  deleteEnterpriseCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToDeleteANonExistingCodeSecurityConfigurationEnterprise(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationEnterpriseDoesNotExist(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, enterprise, name, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
});

// Story: crud:CodeSecurityConfigurationEnterprise:nondet:1:2
bthread("crud:CodeSecurityConfigurationEnterprise:nondet:1:2", function () {
  let advanced_security = "advanced_security_3121";
  let code_scanning_default_setup = "code_scanning_default_setup_3121";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3121";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3121";
  let code_scanning_options = "code_scanning_options_3121";
  let code_security = "code_security_3121";
  let dependabot_alerts = "dependabot_alerts_3121";
  let dependabot_security_updates = "dependabot_security_updates_3121";
  let dependency_graph = "dependency_graph_3121";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3121";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3121";
  let enforcement = "enforcement_3121";
  let enterprise = 3121;
  let name = "name_3121";
  let private_vulnerability_reporting = "private_vulnerability_reporting_3121";
  let secret_protection = "secret_protection_3121";
  let secret_scanning = "secret_scanning_3121";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3121";
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3121";
  let secret_scanning_push_protection = "secret_scanning_push_protection_3121";
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
  let advanced_security = "advanced_security_3126";
  let code_scanning_default_setup = "code_scanning_default_setup_3126";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3126";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3126";
  let code_scanning_options = "code_scanning_options_3126";
  let code_security = "code_security_3126";
  let dependabot_alerts = "dependabot_alerts_3126";
  let dependabot_security_updates = "dependabot_security_updates_3126";
  let dependency_graph = "dependency_graph_3126";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3126";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3126";
  let enforcement = "enforcement_3126";
  let enterprise = 3126;
  let name = "name_3126";
  let private_vulnerability_reporting = "private_vulnerability_reporting_3126";
  let secret_protection = "secret_protection_3126";
  let secret_scanning = "secret_scanning_3126";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3126";
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3126";
  let secret_scanning_push_protection = "secret_scanning_push_protection_3126";
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

// Story: crud:CodeSecurityConfigurationEnterpriseDefaults:read_only
bthread("crud:CodeSecurityConfigurationEnterpriseDefaults:read_only", function () {
  let default_for_new_repos = "default_for_new_repos_3140";
  let enterprise = 3140;
  verifyCodeSecurityConfigurationEnterpriseDefaultsExists(configuration_id, default_for_new_repos, enterprise);
});

// Story: crud:CodeSecurityConfigurationEnterpriseRepositories:read_only
bthread("crud:CodeSecurityConfigurationEnterpriseRepositories:read_only", function () {
  let enterprise = 3150;
  let status = "status_3150";
  verifyCodeSecurityConfigurationEnterpriseRepositoriesExists(configuration_id, enterprise, status);
});

// Story: crud:CodeSecurityConfigurationOrg:nondet:1:1
bthread("crud:CodeSecurityConfigurationOrg:nondet:1:1", function () {
  let advanced_security = "advanced_security_3160";
  let code_scanning_default_setup = "code_scanning_default_setup_3160";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3160";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3160";
  let code_scanning_options = "code_scanning_options_3160";
  let code_security = "code_security_3160";
  let dependabot_alerts = "dependabot_alerts_3160";
  let dependabot_security_updates = "dependabot_security_updates_3160";
  let dependency_graph = "dependency_graph_3160";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3160";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3160";
  let enforcement = "enforcement_3160";
  let name = "name_3160";
  let org = 3160;
  let private_vulnerability_reporting = "private_vulnerability_reporting_3160";
  let secret_protection = "secret_protection_3160";
  let secret_scanning = "secret_scanning_3160";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3160";
  let secret_scanning_delegated_bypass = "secret_scanning_delegated_bypass_3160";
  let secret_scanning_delegated_bypass_options = {};
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3160";
  let secret_scanning_push_protection = "secret_scanning_push_protection_3160";
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
  verifyCodeSecurityConfigurationOrgExists(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  updateOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  deleteOrgCodeSecurityConfiguration(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  tryToDeleteANonExistingCodeSecurityConfigurationOrg(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
  verifyCodeSecurityConfigurationOrgDoesNotExist(advanced_security, code_scanning_default_setup, code_scanning_default_setup_options, code_scanning_delegated_alert_dismissal, code_scanning_options, code_security, configuration_id, dependabot_alerts, dependabot_security_updates, dependency_graph, dependency_graph_autosubmit_action, dependency_graph_autosubmit_action_options, description, enforcement, name, org, private_vulnerability_reporting, secret_protection, secret_scanning, secret_scanning_delegated_alert_dismissal, secret_scanning_delegated_bypass, secret_scanning_delegated_bypass_options, secret_scanning_generic_secrets, secret_scanning_non_provider_patterns, secret_scanning_push_protection, secret_scanning_validity_checks);
});

// Story: crud:CodeSecurityConfigurationOrg:nondet:1:2
bthread("crud:CodeSecurityConfigurationOrg:nondet:1:2", function () {
  let advanced_security = "advanced_security_3161";
  let code_scanning_default_setup = "code_scanning_default_setup_3161";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3161";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3161";
  let code_scanning_options = "code_scanning_options_3161";
  let code_security = "code_security_3161";
  let dependabot_alerts = "dependabot_alerts_3161";
  let dependabot_security_updates = "dependabot_security_updates_3161";
  let dependency_graph = "dependency_graph_3161";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3161";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3161";
  let enforcement = "enforcement_3161";
  let name = "name_3161";
  let org = 3161;
  let private_vulnerability_reporting = "private_vulnerability_reporting_3161";
  let secret_protection = "secret_protection_3161";
  let secret_scanning = "secret_scanning_3161";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3161";
  let secret_scanning_delegated_bypass = "secret_scanning_delegated_bypass_3161";
  let secret_scanning_delegated_bypass_options = {};
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3161";
  let secret_scanning_push_protection = "secret_scanning_push_protection_3161";
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
  let advanced_security = "advanced_security_3166";
  let code_scanning_default_setup = "code_scanning_default_setup_3166";
  let code_scanning_default_setup_options = "code_scanning_default_setup_options_3166";
  let code_scanning_delegated_alert_dismissal = "code_scanning_delegated_alert_dismissal_3166";
  let code_scanning_options = "code_scanning_options_3166";
  let code_security = "code_security_3166";
  let dependabot_alerts = "dependabot_alerts_3166";
  let dependabot_security_updates = "dependabot_security_updates_3166";
  let dependency_graph = "dependency_graph_3166";
  let dependency_graph_autosubmit_action = "dependency_graph_autosubmit_action_3166";
  let dependency_graph_autosubmit_action_options = {};
  let description = "description_3166";
  let enforcement = "enforcement_3166";
  let name = "name_3166";
  let org = 3166;
  let private_vulnerability_reporting = "private_vulnerability_reporting_3166";
  let secret_protection = "secret_protection_3166";
  let secret_scanning = "secret_scanning_3166";
  let secret_scanning_delegated_alert_dismissal = "secret_scanning_delegated_alert_dismissal_3166";
  let secret_scanning_delegated_bypass = "secret_scanning_delegated_bypass_3166";
  let secret_scanning_delegated_bypass_options = {};
  let secret_scanning_generic_secrets = "secret_scanning_generic_secrets_3166";
  let secret_scanning_push_protection = "secret_scanning_push_protection_3166";
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

// Story: crud:CodeSecurityConfigurationOrgDefaults:read_only
bthread("crud:CodeSecurityConfigurationOrgDefaults:read_only", function () {
  let org = 3170;
  verifyCodeSecurityConfigurationOrgDefaultsExists(org);
});

// Story: crud:Configuration:read_only
bthread("crud:Configuration:read_only", function () {
  let configuration_id = 3190;
  let default_for_new_repos = "default_for_new_repos_3190";
  let org = 3190;
  let pagination-after = "pagination-after_3190";
  let pagination-before = "pagination-before_3190";
  let per_page = "per_page_3190";
  let scope = "scope_3190";
  let status = "status_3190";
  verifyConfigurationExists(configuration_id, default_for_new_repos, org, pagination-after, pagination-before, per_page, scope, selected_repository_ids, status);
});

// Story: crud:DependabotAlert:read_only
bthread("crud:DependabotAlert:read_only", function () {
  let alert_number = "alert_number_3200";
  let dismissed_comment = "dismissed_comment_3200";
  let dismissed_reason = "dismissed_reason_3200";
  let enterprise = "enterprise_3200";
  let org = "org_3200";
  let owner = 3200;
  let repo = "repo_3200";
  let state = "state_3200";
  verifyDependabotAlertExists(alert_number, dismissed_comment, dismissed_reason, enterprise, org, owner, repo, state);
});

// Story: crud:RepositoryAccess:read_only
bthread("crud:RepositoryAccess:read_only", function () {
  let org = 3210;
  verifyRepositoryAccessExists(org);
});

// Story: crud:OrgSecretPublicKey:read_only
bthread("crud:OrgSecretPublicKey:read_only", function () {
  let org = 3230;
  verifyOrgSecretPublicKeyExists(org);
});

// Story: crud:OrgSecrets:read_only
bthread("crud:OrgSecrets:read_only", function () {
  let org = 3240;
  verifyOrgSecretsExists(org);
});

// Story: crud:DependabotSecret:nondet:1:1
bthread("crud:DependabotSecret:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_3250";
  let key_id = 3250;
  let owner = 3250;
  let repo = "repo_3250";
  let secret_name = "secret_name_3250";
  createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  // waitForDependabotSecretAdded(encrypted_value, key_id, owner, repo, secret_name);
  tryToAddExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:DependabotSecret:nondet:1:2
bthread("crud:DependabotSecret:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_3251";
  let key_id = 3251;
  let owner = 3251;
  let repo = "repo_3251";
  let secret_name = "secret_name_3251";
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
  let encrypted_value = "encrypted_value_3256";
  let key_id = 3256;
  let owner = 3256;
  let repo = "repo_3256";
  let secret_name = "secret_name_3256";
  createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  // waitForDependabotSecretAdded(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  tryToAddExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:Project:read_only
bthread("crud:Project:read_only", function () {
  let name = "name_3260";
  let org = "org_3260";
  let project_id = 3260;
  let project_number = "project_number_3260";
  verifyProjectExists(name, org, project_id, project_number);
});

// Story: crud:ProjectField:read_only
bthread("crud:ProjectField:read_only", function () {
  let field_id = 3270;
  let org = 3270;
  let project_number = "project_number_3270";
  verifyProjectFieldExists(field_id, org, project_number);
});

// Story: crud:ProjectItem:nondet:1:1
bthread("crud:ProjectItem:nondet:1:1", function () {
  let id = 3280;
  let item_id = 3280;
  let org = "org_3280";
  let project_number = "project_number_3280";
  let type = "type_3280";
  let username = 3280;
  addItemForUser(id, item_id, org, project_number, type, username);
  // waitForProjectItemAdded(id, item_id, org, project_number, type, username);
  tryToAddExistingProjectItem(id, item_id, org, project_number, type, username);
  verifyProjectItemExists(id, item_id, org, project_number, type, username);
  updateItemForUser(id, item_id, org, project_number, type, username);
  deleteItemForUser(id, item_id, org, project_number, type, username);
  tryToDeleteANonExistingProjectItem(id, item_id, org, project_number, type, username);
  verifyProjectItemDoesNotExist(id, item_id, org, project_number, type, username);
});

// Story: crud:ProjectItem:nondet:1:2
bthread("crud:ProjectItem:nondet:1:2", function () {
  let id = 3281;
  let item_id = 3281;
  let org = "org_3281";
  let project_number = "project_number_3281";
  let type = "type_3281";
  let username = 3281;
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
  let id = 3286;
  let item_id = 3286;
  let org = "org_3286";
  let project_number = "project_number_3286";
  let type = "type_3286";
  let username = 3286;
  addItemForUser(id, item_id, org, project_number, type, username);
  // waitForProjectItemAdded(id, item_id, org, project_number, type, username);
  verifyProjectItemExists(id, item_id, org, project_number, type, username);
  tryToAddExistingProjectItem(id, item_id, org, project_number, type, username);
  verifyProjectItemExists(id, item_id, org, project_number, type, username);
});

// Story: crud:UserProject:read_only
bthread("crud:UserProject:read_only", function () {
  let body = "body_3290";
  let name = "name_3290";
  let project_number = "project_number_3290";
  let username = 3290;
  verifyUserProjectExists(body, name, project_number, username);
});

// Story: crud:UserProjectField:read_only
bthread("crud:UserProjectField:read_only", function () {
  let field_id = 3300;
  let project_number = "project_number_3300";
  let username = 3300;
  verifyUserProjectFieldExists(field_id, project_number, username);
});

// Story: crud:Blob:read_only
bthread("crud:Blob:read_only", function () {
  let content = "content_3310";
  let encoding = "encoding_3310";
  let file_sha = "file_sha_3310";
  let owner = 3310;
  let repo = "repo_3310";
  verifyBlobExists(content, encoding, file_sha, owner, repo);
});

// Story: crud:Reference:nondet:1:1
bthread("crud:Reference:nondet:1:1", function () {
  let owner = 3320;
  let ref = "ref_3320";
  let repo = "repo_3320";
  let sha = "sha_3320";
  createRef(owner, ref, repo, sha);
  // waitForReferenceAdded(owner, ref, repo, sha);
  tryToAddExistingReference(owner, ref, repo, sha);
  verifyReferenceExists(owner, ref, repo, sha);
  updateRef(owner, ref, repo, sha);
  deleteRef(owner, ref, repo, sha);
  tryToDeleteANonExistingReference(owner, ref, repo, sha);
  verifyReferenceDoesNotExist(owner, ref, repo, sha);
});

// Story: crud:Reference:nondet:1:2
bthread("crud:Reference:nondet:1:2", function () {
  let owner = 3321;
  let ref = "ref_3321";
  let repo = "repo_3321";
  let sha = "sha_3321";
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
  let owner = 3326;
  let ref = "ref_3326";
  let repo = "repo_3326";
  let sha = "sha_3326";
  createRef(owner, ref, repo, sha);
  // waitForReferenceAdded(owner, ref, repo, sha);
  verifyReferenceExists(owner, ref, repo, sha);
  tryToAddExistingReference(owner, ref, repo, sha);
  verifyReferenceExists(owner, ref, repo, sha);
});

// Story: crud:Tag:read_only
bthread("crud:Tag:read_only", function () {
  let message = "message_3330";
  let object = "object_3330";
  let owner = 3330;
  let repo = "repo_3330";
  let tag = "tag_3330";
  let tag_sha = "tag_sha_3330";
  let tagger = {};
  let type = "type_3330";
  verifyTagExists(message, object, owner, repo, tag, tag_sha, tagger, type);
});

// Story: crud:Tree:read_only
bthread("crud:Tree:read_only", function () {
  let base_tree = "base_tree_3340";
  let owner = 3340;
  let repo = "repo_3340";
  let tree = "tree_3340";
  let tree_sha = "tree_sha_3340";
  verifyTreeExists(base_tree, owner, repo, tree, tree_sha);
});

// Story: crud:Gist:nondet:1:1
bthread("crud:Gist:nondet:1:1", function () {
  let description = "description_3350";
  let files = {};
  let gist_id = 3350;
  let public = "public_3350";
  let username = 3350;
  createGist(description, files, gist_id, public, username);
  // waitForGistAdded(description, files, gist_id, public, username);
  tryToAddExistingGist(description, files, gist_id, public, username);
  verifyGistExists(description, files, gist_id, public, username);
  updateGist(description, files, gist_id, public, username);
  deleteGist(description, files, gist_id, public, username);
  tryToDeleteANonExistingGist(description, files, gist_id, public, username);
  verifyGistDoesNotExist(description, files, gist_id, public, username);
});

// Story: crud:Gist:nondet:1:2
bthread("crud:Gist:nondet:1:2", function () {
  let description = "description_3351";
  let files = {};
  let gist_id = 3351;
  let public = "public_3351";
  let username = 3351;
  createGist(description, files, gist_id, public, username);
  // waitForGistAdded(description, files, gist_id, public, username);
  tryToAddExistingGist(description, files, gist_id, public, username);
  updateGist(description, files, gist_id, public, username);
  verifyGistExists(description, files, gist_id, public, username);
  deleteGist(description, files, gist_id, public, username);
  tryToDeleteANonExistingGist(description, files, gist_id, public, username);
  verifyGistDoesNotExist(description, files, gist_id, public, username);
});

// Story: crud:Gist:nondet:negative:dup-add
bthread("crud:Gist:nondet:negative:dup-add", function () {
  let description = "description_3356";
  let files = {};
  let gist_id = 3356;
  let public = "public_3356";
  let username = 3356;
  createGist(description, files, gist_id, public, username);
  // waitForGistAdded(description, files, gist_id, public, username);
  verifyGistExists(description, files, gist_id, public, username);
  tryToAddExistingGist(description, files, gist_id, public, username);
  verifyGistExists(description, files, gist_id, public, username);
});

// Story: crud:GistComment:nondet:1:1
bthread("crud:GistComment:nondet:1:1", function () {
  let body = "body_3360";
  let comment_id = 3360;
  // Dependency Barrier
  let deps = {};
  deps["gist_id"] = matchAnyGistAdded();
  let pkMap = {"gist_id": "username"};
  let captured = resolveDependencies(deps, pkMap);
  gist_id = captured["gist_id"];
  createGistComment(body, comment_id, gist_id);
  // waitForGistCommentAdded(body, comment_id, gist_id);
  tryToAddExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentExists(body, comment_id, gist_id);
  updateGistComment(body, comment_id, gist_id);
  deleteGistComment(body, comment_id, gist_id);
  tryToDeleteANonExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentDoesNotExist(body, comment_id, gist_id);
});

// Story: crud:GistComment:nondet:1:2
bthread("crud:GistComment:nondet:1:2", function () {
  let body = "body_3361";
  let comment_id = 3361;
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
  let body = "body_3366";
  let comment_id = 3366;
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
  let body = "body_3370";
  let name = "name_3370";
  let org = 3370;
  verifyOrganizationProjectExists(body, name, org);
});

// Story: crud:ProjectColumn:read_only
bthread("crud:ProjectColumn:read_only", function () {
  let column_id = 3380;
  let name = "name_3380";
  let position = "position_3380";
  verifyProjectColumnExists(column_id, name, position);
});

// Story: crud:ProjectCollaborator:nondet:1:1
bthread("crud:ProjectCollaborator:nondet:1:1", function () {
  let permission = "permission_3390";
  let username = "username_3390";
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

// Story: crud:ProjectCollaborator:nondet:1:2
bthread("crud:ProjectCollaborator:nondet:1:2", function () {
  let permission = "permission_3391";
  let username = "username_3391";
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
  let permission = "permission_3396";
  let username = "username_3396";
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
  let body = "body_3410";
  let name = "name_3410";
  let owner = 3410;
  let repo = "repo_3410";
  verifyRepositoryProjectExists(body, name, owner, repo);
});

// Story: crud:CheckRun:read_only
bthread("crud:CheckRun:read_only", function () {
  let actions = "actions_3420";
  let check_run_id = 3420;
  let completed_at = "completed_at_3420";
  let conclusion = "conclusion_3420";
  let details_url = "details_url_3420";
  let external_id = 3420;
  let head_sha = "head_sha_3420";
  let name = "name_3420";
  let output = {};
  let owner = 3420;
  let repo = "repo_3420";
  let started_at = "started_at_3420";
  let status = "status_3420";
  verifyCheckRunExists(actions, check_run_id, completed_at, conclusion, details_url, external_id, head_sha, name, output, owner, repo, started_at, status);
});

// Story: crud:CheckRunAnnotation:read_only
bthread("crud:CheckRunAnnotation:read_only", function () {
  let check_run_id = 3430;
  let owner = 3430;
  let repo = "repo_3430";
  verifyCheckRunAnnotationExists(check_run_id, owner, repo);
});

// Story: crud:CheckSuite:read_only
bthread("crud:CheckSuite:read_only", function () {
  let check_name = "check_name_3440";
  let check_suite_id = 3440;
  let head_sha = "head_sha_3440";
  let owner = 3440;
  let page = "page_3440";
  let per_page = "per_page_3440";
  let ref = "ref_3440";
  let repo = "repo_3440";
  verifyCheckSuiteExists(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo);
});

// Story: crud:BillingPremiumRequestUsageOrg:read_only
bthread("crud:BillingPremiumRequestUsageOrg:read_only", function () {
  let day = "day_3460";
  let model = "model_3460";
  let month = "month_3460";
  let org = 3460;
  let product = "product_3460";
  let user = "user_3460";
  let year = "year_3460";
  verifyBillingPremiumRequestUsageOrgExists(day, model, month, org, product, user, year);
});

// Story: crud:BillingUsageOrg:read_only
bthread("crud:BillingUsageOrg:read_only", function () {
  let day = "day_3470";
  let hour = "hour_3470";
  let month = "month_3470";
  let org = 3470;
  let year = "year_3470";
  verifyBillingUsageOrgExists(day, hour, month, org, year);
});

// Story: crud:BillingActionsOrg:read_only
bthread("crud:BillingActionsOrg:read_only", function () {
  let org = 3480;
  verifyBillingActionsOrgExists(org);
});

// Story: crud:BillingPackagesOrg:read_only
bthread("crud:BillingPackagesOrg:read_only", function () {
  let org = 3490;
  verifyBillingPackagesOrgExists(org);
});

// Story: crud:BillingSharedStorageOrg:read_only
bthread("crud:BillingSharedStorageOrg:read_only", function () {
  let org = 3500;
  verifyBillingSharedStorageOrgExists(org);
});

// Story: crud:BillingActionsUser:read_only
bthread("crud:BillingActionsUser:read_only", function () {
  let username = 3510;
  verifyBillingActionsUserExists(username);
});

// Story: crud:BillingPackagesUser:read_only
bthread("crud:BillingPackagesUser:read_only", function () {
  let username = 3520;
  verifyBillingPackagesUserExists(username);
});

// Story: crud:BillingPremiumRequestUsageUser:read_only
bthread("crud:BillingPremiumRequestUsageUser:read_only", function () {
  let day = "day_3530";
  let model = "model_3530";
  let month = "month_3530";
  let product = "product_3530";
  let username = 3530;
  let year = "year_3530";
  verifyBillingPremiumRequestUsageUserExists(day, model, month, product, username, year);
});

// Story: crud:BillingSharedStorageUser:read_only
bthread("crud:BillingSharedStorageUser:read_only", function () {
  let username = 3540;
  verifyBillingSharedStorageUserExists(username);
});

// Story: crud:BillingUsageUser:read_only
bthread("crud:BillingUsageUser:read_only", function () {
  let day = "day_3550";
  let hour = "hour_3550";
  let month = "month_3550";
  let username = 3550;
  let year = "year_3550";
  verifyBillingUsageUserExists(day, hour, month, username, year);
});

// Story: crud:SecurityAdvisory:read_only
bthread("crud:SecurityAdvisory:read_only", function () {
  let ghsa_id = 3560;
  verifySecurityAdvisoryExists(ghsa_id);
});

// Story: crud:RepositorySecurityAdvisory:read_only
bthread("crud:RepositorySecurityAdvisory:read_only", function () {
  let credits = "credits_3570";
  let cve_id = 3570;
  let cvss_vector_string = "cvss_vector_string_3570";
  let cwe_ids = "cwe_ids_3570";
  let description = "description_3570";
  let ghsa_id = 3570;
  let owner = 3570;
  let repo = "repo_3570";
  let severity = "severity_3570";
  let start_private_fork = "start_private_fork_3570";
  let summary = "summary_3570";
  let vulnerabilities = "vulnerabilities_3570";
  verifyRepositorySecurityAdvisoryExists(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, start_private_fork, summary, vulnerabilities);
});

// Story: crud:SecretScanningAlert:read_only
bthread("crud:SecretScanningAlert:read_only", function () {
  let alert_number = "alert_number_3610";
  let owner = 3610;
  let repo = "repo_3610";
  let state = "state_3610";
  verifySecretScanningAlertExists(alert_number, owner, repo, state);
});

// Story: crud:ScanHistory:read_only
bthread("crud:ScanHistory:read_only", function () {
  let owner = 3680;
  let repo = "repo_3680";
  verifyScanHistoryExists(owner, repo);
});

// Story: crud:CopilotTeams:nondet:1:1
bthread("crud:CopilotTeams:nondet:1:1", function () {
  let org = 3690;
  let selected_teams = "selected_teams_3690";
  addCopilotTeams(org, selected_teams);
  // waitForCopilotTeamsAdded(org, selected_teams);
  tryToAddExistingCopilotTeams(org, selected_teams);
  verifyCopilotTeamsExists(org, selected_teams);
  removeCopilotTeams(org, selected_teams);
  tryToDeleteANonExistingCopilotTeams(org, selected_teams);
  verifyCopilotTeamsDoesNotExist(org, selected_teams);
});

// Story: crud:CopilotTeams:nondet:1:2
bthread("crud:CopilotTeams:nondet:1:2", function () {
  let org = 3691;
  let selected_teams = "selected_teams_3691";
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
  let org = 3696;
  let selected_teams = "selected_teams_3696";
  addCopilotTeams(org, selected_teams);
  // waitForCopilotTeamsAdded(org, selected_teams);
  verifyCopilotTeamsExists(org, selected_teams);
  tryToAddExistingCopilotTeams(org, selected_teams);
  verifyCopilotTeamsExists(org, selected_teams);
});

// Story: crud:CopilotUsers:nondet:1:1
bthread("crud:CopilotUsers:nondet:1:1", function () {
  let org = 3700;
  let selected_usernames = "selected_usernames_3700";
  addCopilotUsers(org, selected_usernames);
  // waitForCopilotUsersAdded(org, selected_usernames);
  tryToAddExistingCopilotUsers(org, selected_usernames);
  verifyCopilotUsersExists(org, selected_usernames);
  removeCopilotUsers(org, selected_usernames);
  tryToDeleteANonExistingCopilotUsers(org, selected_usernames);
  verifyCopilotUsersDoesNotExist(org, selected_usernames);
});

// Story: crud:CopilotUsers:nondet:1:2
bthread("crud:CopilotUsers:nondet:1:2", function () {
  let org = 3701;
  let selected_usernames = "selected_usernames_3701";
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
  let org = 3706;
  let selected_usernames = "selected_usernames_3706";
  addCopilotUsers(org, selected_usernames);
  // waitForCopilotUsersAdded(org, selected_usernames);
  verifyCopilotUsersExists(org, selected_usernames);
  tryToAddExistingCopilotUsers(org, selected_usernames);
  verifyCopilotUsersExists(org, selected_usernames);
});

// Story: crud:CopilotBilling:read_only
bthread("crud:CopilotBilling:read_only", function () {
  let org = 3710;
  verifyCopilotBillingExists(org);
});

// Story: crud:CopilotSeats:read_only
bthread("crud:CopilotSeats:read_only", function () {
  let org = 3720;
  let page = "page_3720";
  let per_page = "per_page_3720";
  verifyCopilotSeatsExists(org, page, per_page);
});

// Story: crud:CopilotMetricsOrganization:read_only
bthread("crud:CopilotMetricsOrganization:read_only", function () {
  let org = 3730;
  let page = "page_3730";
  let per_page = "per_page_3730";
  let since = "since_3730";
  let until = "until_3730";
  verifyCopilotMetricsOrganizationExists(org, page, per_page, since, until);
});

// Story: crud:CopilotSeatUser:read_only
bthread("crud:CopilotSeatUser:read_only", function () {
  let org = 3740;
  let username = "username_3740";
  verifyCopilotSeatUserExists(org, username);
});

// Story: crud:CopilotMetricsTeam:read_only
bthread("crud:CopilotMetricsTeam:read_only", function () {
  let org = 3750;
  let page = "page_3750";
  let per_page = "per_page_3750";
  let since = "since_3750";
  let team_slug = "team_slug_3750";
  let until = "until_3750";
  verifyCopilotMetricsTeamExists(org, page, per_page, since, team_slug, until);
});

// Story: crud:CodeSearch:read_only
bthread("crud:CodeSearch:read_only", function () {
  let q = "q_3760";
  verifyCodeSearchExists(q);
});

// Story: crud:CommitSearch:read_only
bthread("crud:CommitSearch:read_only", function () {
  let q = "q_3770";
  verifyCommitSearchExists(q);
});

// Story: crud:IssueSearch:read_only
bthread("crud:IssueSearch:read_only", function () {
  let q = "q_3780";
  verifyIssueSearchExists(q);
});

// Story: crud:LabelSearch:read_only
bthread("crud:LabelSearch:read_only", function () {
  let q = "q_3790";
  verifyLabelSearchExists(q, repository_id);
});

// Story: crud:RepositorySearch:read_only
bthread("crud:RepositorySearch:read_only", function () {
  let q = "q_3800";
  verifyRepositorySearchExists(q);
});

// Story: crud:TopicSearch:read_only
bthread("crud:TopicSearch:read_only", function () {
  let q = "q_3810";
  verifyTopicSearchExists(q);
});

// Story: crud:UserSearch:read_only
bthread("crud:UserSearch:read_only", function () {
  let q = "q_3820";
  verifyUserSearchExists(q);
});

// Story: crud:Assignment:read_only
bthread("crud:Assignment:read_only", function () {
  let assignment_id = 3830;
  verifyAssignmentExists(assignment_id);
});

// Story: crud:AcceptedAssignment:read_only
bthread("crud:AcceptedAssignment:read_only", function () {
  let page = "page_3840";
  let per-page = "per-page_3840";
  verifyAcceptedAssignmentExists(assignment_id, page, per-page);
});

// Story: crud:AssignmentGrades:read_only
bthread("crud:AssignmentGrades:read_only", function () {

  verifyAssignmentGradesExists(assignment_id);
});

// Story: crud:Classroom:read_only
bthread("crud:Classroom:read_only", function () {
  let classroom_id = 3860;
  let page = "page_3860";
  let per-page = "per-page_3860";
  verifyClassroomExists(classroom_id, page, per-page);
});

// Story: crud:ClassroomAssignments:read_only
bthread("crud:ClassroomAssignments:read_only", function () {
  let page = "page_3870";
  let per-page = "per-page_3870";
  verifyClassroomAssignmentsExists(classroom_id, page, per-page);
});

// Story: crud:EnterpriseTeamMembership:nondet:1:1
bthread("crud:EnterpriseTeamMembership:nondet:1:1", function () {
  let enterprise = 3880;
  let enterprise-team = "enterprise-team_3880";
  let username = "username_3880";
  addEnterpriseTeamMembership(enterprise, enterprise-team, username);
  // waitForEnterpriseTeamMembershipAdded(enterprise, enterprise-team, username);
  tryToAddExistingEnterpriseTeamMembership(enterprise, enterprise-team, username);
  verifyEnterpriseTeamMembershipExists(enterprise, enterprise-team, username);
  removeEnterpriseTeamMembership(enterprise, enterprise-team, username);
  tryToDeleteANonExistingEnterpriseTeamMembership(enterprise, enterprise-team, username);
  verifyEnterpriseTeamMembershipDoesNotExist(enterprise, enterprise-team, username);
});

// Story: crud:EnterpriseTeamMembership:nondet:1:2
bthread("crud:EnterpriseTeamMembership:nondet:1:2", function () {
  let enterprise = 3881;
  let enterprise-team = "enterprise-team_3881";
  let username = "username_3881";
  addEnterpriseTeamMembership(enterprise, enterprise-team, username);
  // waitForEnterpriseTeamMembershipAdded(enterprise, enterprise-team, username);
  tryToAddExistingEnterpriseTeamMembership(enterprise, enterprise-team, username);
  verifyEnterpriseTeamMembershipExists(enterprise, enterprise-team, username);
  removeEnterpriseTeamMembership(enterprise, enterprise-team, username);
  tryToDeleteANonExistingEnterpriseTeamMembership(enterprise, enterprise-team, username);
  verifyEnterpriseTeamMembershipDoesNotExist(enterprise, enterprise-team, username);
});

// Story: crud:EnterpriseTeamMembership:nondet:negative:dup-add
bthread("crud:EnterpriseTeamMembership:nondet:negative:dup-add", function () {
  let enterprise = 3886;
  let enterprise-team = "enterprise-team_3886";
  let username = "username_3886";
  addEnterpriseTeamMembership(enterprise, enterprise-team, username);
  // waitForEnterpriseTeamMembershipAdded(enterprise, enterprise-team, username);
  verifyEnterpriseTeamMembershipExists(enterprise, enterprise-team, username);
  tryToAddExistingEnterpriseTeamMembership(enterprise, enterprise-team, username);
  verifyEnterpriseTeamMembershipExists(enterprise, enterprise-team, username);
});

// Story: crud:EnterpriseTeamMembershipBulk:nondet:1:1
bthread("crud:EnterpriseTeamMembershipBulk:nondet:1:1", function () {
  let enterprise = 3890;
  let enterprise-team = "enterprise-team_3890";
  let usernames = "usernames_3890";
  bulkAddEnterpriseTeamMemberships(enterprise, enterprise-team, usernames);
  // waitForEnterpriseTeamMembershipBulkAdded(enterprise, enterprise-team, usernames);
  tryToAddExistingEnterpriseTeamMembershipBulk(enterprise, enterprise-team, usernames);
  verifyEnterpriseTeamMembershipBulkExists(enterprise, enterprise-team, usernames);
  bulkRemoveEnterpriseTeamMemberships(enterprise, enterprise-team, usernames);
  tryToDeleteANonExistingEnterpriseTeamMembershipBulk(enterprise, enterprise-team, usernames);
  verifyEnterpriseTeamMembershipBulkDoesNotExist(enterprise, enterprise-team, usernames);
});

// Story: crud:EnterpriseTeamMembershipBulk:nondet:1:2
bthread("crud:EnterpriseTeamMembershipBulk:nondet:1:2", function () {
  let enterprise = 3891;
  let enterprise-team = "enterprise-team_3891";
  let usernames = "usernames_3891";
  bulkAddEnterpriseTeamMemberships(enterprise, enterprise-team, usernames);
  // waitForEnterpriseTeamMembershipBulkAdded(enterprise, enterprise-team, usernames);
  tryToAddExistingEnterpriseTeamMembershipBulk(enterprise, enterprise-team, usernames);
  verifyEnterpriseTeamMembershipBulkExists(enterprise, enterprise-team, usernames);
  bulkRemoveEnterpriseTeamMemberships(enterprise, enterprise-team, usernames);
  tryToDeleteANonExistingEnterpriseTeamMembershipBulk(enterprise, enterprise-team, usernames);
  verifyEnterpriseTeamMembershipBulkDoesNotExist(enterprise, enterprise-team, usernames);
});

// Story: crud:EnterpriseTeamMembershipBulk:nondet:negative:dup-add
bthread("crud:EnterpriseTeamMembershipBulk:nondet:negative:dup-add", function () {
  let enterprise = 3896;
  let enterprise-team = "enterprise-team_3896";
  let usernames = "usernames_3896";
  bulkAddEnterpriseTeamMemberships(enterprise, enterprise-team, usernames);
  // waitForEnterpriseTeamMembershipBulkAdded(enterprise, enterprise-team, usernames);
  verifyEnterpriseTeamMembershipBulkExists(enterprise, enterprise-team, usernames);
  tryToAddExistingEnterpriseTeamMembershipBulk(enterprise, enterprise-team, usernames);
  verifyEnterpriseTeamMembershipBulkExists(enterprise, enterprise-team, usernames);
});

// Story: crud:License:read_only
bthread("crud:License:read_only", function () {
  let featured = "featured_3900";
  let license = 3900;
  let page = "page_3900";
  let per-page = "per-page_3900";
  verifyLicenseExists(featured, license, page, per-page);
});

// Story: crud:RepositoryLicense:read_only
bthread("crud:RepositoryLicense:read_only", function () {
  let git-ref = "git-ref_3910";
  let owner = 3910;
  let repo = "repo_3910";
  verifyRepositoryLicenseExists(git-ref, owner, repo);
});

// Story: crud:OrgInteractionLimit:read_only
bthread("crud:OrgInteractionLimit:read_only", function () {
  let org = 3920;
  verifyOrgInteractionLimitExists(org);
});

// Story: crud:RepoInteractionLimit:read_only
bthread("crud:RepoInteractionLimit:read_only", function () {
  let owner = 3930;
  let repo = "repo_3930";
  verifyRepoInteractionLimitExists(owner, repo);
});

// Story: crud:UserInteractionLimit:read_only
bthread("crud:UserInteractionLimit:read_only", function () {

  verifyUserInteractionLimitExists();
});

// Story: crud:PrivateRegistry:nondet:1:1
bthread("crud:PrivateRegistry:nondet:1:1", function () {
  let encrypted_value = "encrypted_value_3950";
  let key_id = 3950;
  let org = 3950;
  let page = "page_3950";
  let per-page = "per-page_3950";
  let registry_type = "registry_type_3950";
  let secret_name = "secret_name_3950";
  let url = "url_3950";
  let username = "username_3950";
  let visibility = "visibility_3950";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
  let captured = resolveDependencies(deps, pkMap);
  selected_repository_ids = captured["selected_repository_ids"];
  createOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  // waitForPrivateRegistryAdded(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToAddExistingPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  updateOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  deleteOrgPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToDeleteANonExistingPrivateRegistry(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryDoesNotExist(encrypted_value, key_id, org, page, per-page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
});

// Story: crud:PrivateRegistry:nondet:1:2
bthread("crud:PrivateRegistry:nondet:1:2", function () {
  let encrypted_value = "encrypted_value_3951";
  let key_id = 3951;
  let org = 3951;
  let page = "page_3951";
  let per-page = "per-page_3951";
  let registry_type = "registry_type_3951";
  let secret_name = "secret_name_3951";
  let url = "url_3951";
  let username = "username_3951";
  let visibility = "visibility_3951";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
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
  let encrypted_value = "encrypted_value_3956";
  let key_id = 3956;
  let org = 3956;
  let page = "page_3956";
  let per-page = "per-page_3956";
  let registry_type = "registry_type_3956";
  let secret_name = "secret_name_3956";
  let url = "url_3956";
  let username = "username_3956";
  let visibility = "visibility_3956";
  // Dependency Barrier
  let deps = {};
  deps["selected_repository_ids"] = matchAnyRepositoryAdded();
  let pkMap = {"selected_repository_ids": "owner"};
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
  let org = 3960;
  verifyPrivateRegistryPublicKeyExists(org);
});

// Story: crud:NetworkConfiguration:nondet:1:1
bthread("crud:NetworkConfiguration:nondet:1:1", function () {
  let compute_service = "compute_service_3970";
  let name = "name_3970";
  let network_settings_ids = "network_settings_ids_3970";
  let org = 3970;
  // Dependency Barrier
  let deps = {};
  deps["network_configuration_id"] = matchAnyConfigurationAdded();
  let pkMap = {"network_configuration_id": "org"};
  let captured = resolveDependencies(deps, pkMap);
  network_configuration_id = captured["network_configuration_id"];
  createNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  // waitForNetworkConfigurationAdded(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToAddExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
  updateNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  deleteNetworkConfigurationFromOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToDeleteANonExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationDoesNotExist(compute_service, name, network_configuration_id, network_settings_ids, org);
});

// Story: crud:NetworkConfiguration:nondet:1:2
bthread("crud:NetworkConfiguration:nondet:1:2", function () {
  let compute_service = "compute_service_3971";
  let name = "name_3971";
  let network_settings_ids = "network_settings_ids_3971";
  let org = 3971;
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
  let compute_service = "compute_service_3976";
  let name = "name_3976";
  let network_settings_ids = "network_settings_ids_3976";
  let org = 3976;
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
  let network_settings_id = 3980;
  let org = 3980;
  verifyNetworkSettingsExists(network_settings_id, org);
});

// Story: crud:CodeOfConduct:read_only
bthread("crud:CodeOfConduct:read_only", function () {
  let key = 4000;
  verifyCodeOfConductExists(key);
});
