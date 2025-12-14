// Auto-generated stories for github
//@provengo summon rest

// EventSet of all known collection-root DELETE events
const DESTRUCTIVE_DELETE_EVENTS = bp.EventSet("DestructiveDeleteEvents", function(e) {
    // Includes: Delete email addresses {emails}, Delete social accounts with URLs {account_urls}, Revoke installation access token
    const destructiveEvents = [
        "Delete email addresses {emails}",
        "Delete social accounts with URLs {account_urls}",
        "Revoke installation access token",
    ];
    const eventName = e.name.replace("Done: ", "");
    return destructiveEvents.some(d => eventName.startsWith(d.trim()));
});

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

// Story: crud:Repository:linear:1
bthread("crud:Repository:linear:1", function () {
  let allow_auto_merge = "allow_auto_merge_210_" + Math.floor(Math.random() * 10000);
  let allow_merge_commit = "allow_merge_commit_210_" + Math.floor(Math.random() * 10000);
  let allow_rebase_merge = "allow_rebase_merge_210_" + Math.floor(Math.random() * 10000);
  let allow_squash_merge = "allow_squash_merge_210_" + Math.floor(Math.random() * 10000);
  let auto_init = "auto_init_210_" + Math.floor(Math.random() * 10000);
  let delete_branch_on_merge = "delete_branch_on_merge_210_" + Math.floor(Math.random() * 10000);
  let description = "description_210_" + Math.floor(Math.random() * 10000);
  let direction = "direction_210_" + Math.floor(Math.random() * 10000);
  let gitignore_template = "gitignore_template_210_" + Math.floor(Math.random() * 10000);
  let has_discussions = "has_discussions_210_" + Math.floor(Math.random() * 10000);
  let has_downloads = "has_downloads_210_" + Math.floor(Math.random() * 10000);
  let has_issues = "has_issues_210_" + Math.floor(Math.random() * 10000);
  let has_projects = "has_projects_210_" + Math.floor(Math.random() * 10000);
  let has_wiki = "has_wiki_210_" + Math.floor(Math.random() * 10000);
  let homepage = "homepage_210_" + Math.floor(Math.random() * 10000);
  let is_template = "is_template_210_" + Math.floor(Math.random() * 10000);
  let license_template = "license_template_210_" + Math.floor(Math.random() * 10000);
  let merge_commit_message = "merge_commit_message_210_" + Math.floor(Math.random() * 10000);
  let merge_commit_title = "merge_commit_title_210_" + Math.floor(Math.random() * 10000);
  let name = "name_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_owner = "new_owner_210_" + Math.floor(Math.random() * 10000);
  let owner = "owner_210_" + Math.floor(Math.random() * 10000);
  let page = "page_210_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_210_" + Math.floor(Math.random() * 10000);
  let _private = "private_210_" + Math.floor(Math.random() * 10000);
  let ref = "ref_210_" + Math.floor(Math.random() * 10000);
  let repo = "repo_210_" + Math.floor(Math.random() * 10000);
  let sort = "sort_210_" + Math.floor(Math.random() * 10000);
  let squash_merge_commit_message = "squash_merge_commit_message_210_" + Math.floor(Math.random() * 10000);
  let squash_merge_commit_title = "squash_merge_commit_title_210_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_210_" + Math.floor(Math.random() * 10000);
  let team_ids = "team_ids_210_" + Math.floor(Math.random() * 10000);
  let type = "type_210_" + Math.floor(Math.random() * 10000);
  let username = "username_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  transferRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  deleteRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  tryToDeleteANonExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  verifyRepositoryDoesNotExist(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
});

// Story: crud:Repository:linear:2
bthread("crud:Repository:linear:2", function () {
  let allow_auto_merge = "allow_auto_merge_220_" + Math.floor(Math.random() * 10000);
  let allow_merge_commit = "allow_merge_commit_220_" + Math.floor(Math.random() * 10000);
  let allow_rebase_merge = "allow_rebase_merge_220_" + Math.floor(Math.random() * 10000);
  let allow_squash_merge = "allow_squash_merge_220_" + Math.floor(Math.random() * 10000);
  let auto_init = "auto_init_220_" + Math.floor(Math.random() * 10000);
  let delete_branch_on_merge = "delete_branch_on_merge_220_" + Math.floor(Math.random() * 10000);
  let description = "description_220_" + Math.floor(Math.random() * 10000);
  let direction = "direction_220_" + Math.floor(Math.random() * 10000);
  let gitignore_template = "gitignore_template_220_" + Math.floor(Math.random() * 10000);
  let has_discussions = "has_discussions_220_" + Math.floor(Math.random() * 10000);
  let has_downloads = "has_downloads_220_" + Math.floor(Math.random() * 10000);
  let has_issues = "has_issues_220_" + Math.floor(Math.random() * 10000);
  let has_projects = "has_projects_220_" + Math.floor(Math.random() * 10000);
  let has_wiki = "has_wiki_220_" + Math.floor(Math.random() * 10000);
  let homepage = "homepage_220_" + Math.floor(Math.random() * 10000);
  let is_template = "is_template_220_" + Math.floor(Math.random() * 10000);
  let license_template = "license_template_220_" + Math.floor(Math.random() * 10000);
  let merge_commit_message = "merge_commit_message_220_" + Math.floor(Math.random() * 10000);
  let merge_commit_title = "merge_commit_title_220_" + Math.floor(Math.random() * 10000);
  let name = "name_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_owner = "new_owner_220_" + Math.floor(Math.random() * 10000);
  let owner = "owner_220_" + Math.floor(Math.random() * 10000);
  let page = "page_220_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_220_" + Math.floor(Math.random() * 10000);
  let _private = "private_220_" + Math.floor(Math.random() * 10000);
  let ref = "ref_220_" + Math.floor(Math.random() * 10000);
  let repo = "repo_220_" + Math.floor(Math.random() * 10000);
  let sort = "sort_220_" + Math.floor(Math.random() * 10000);
  let squash_merge_commit_message = "squash_merge_commit_message_220_" + Math.floor(Math.random() * 10000);
  let squash_merge_commit_title = "squash_merge_commit_title_220_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_220_" + Math.floor(Math.random() * 10000);
  let team_ids = "team_ids_220_" + Math.floor(Math.random() * 10000);
  let type = "type_220_" + Math.floor(Math.random() * 10000);
  let username = "username_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  transferRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  deleteRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  tryToDeleteANonExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  verifyRepositoryDoesNotExist(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
});

// Story: crud:Repository:linear:3
bthread("crud:Repository:linear:3", function () {
  let allow_auto_merge = "allow_auto_merge_230_" + Math.floor(Math.random() * 10000);
  let allow_merge_commit = "allow_merge_commit_230_" + Math.floor(Math.random() * 10000);
  let allow_rebase_merge = "allow_rebase_merge_230_" + Math.floor(Math.random() * 10000);
  let allow_squash_merge = "allow_squash_merge_230_" + Math.floor(Math.random() * 10000);
  let auto_init = "auto_init_230_" + Math.floor(Math.random() * 10000);
  let delete_branch_on_merge = "delete_branch_on_merge_230_" + Math.floor(Math.random() * 10000);
  let description = "description_230_" + Math.floor(Math.random() * 10000);
  let direction = "direction_230_" + Math.floor(Math.random() * 10000);
  let gitignore_template = "gitignore_template_230_" + Math.floor(Math.random() * 10000);
  let has_discussions = "has_discussions_230_" + Math.floor(Math.random() * 10000);
  let has_downloads = "has_downloads_230_" + Math.floor(Math.random() * 10000);
  let has_issues = "has_issues_230_" + Math.floor(Math.random() * 10000);
  let has_projects = "has_projects_230_" + Math.floor(Math.random() * 10000);
  let has_wiki = "has_wiki_230_" + Math.floor(Math.random() * 10000);
  let homepage = "homepage_230_" + Math.floor(Math.random() * 10000);
  let is_template = "is_template_230_" + Math.floor(Math.random() * 10000);
  let license_template = "license_template_230_" + Math.floor(Math.random() * 10000);
  let merge_commit_message = "merge_commit_message_230_" + Math.floor(Math.random() * 10000);
  let merge_commit_title = "merge_commit_title_230_" + Math.floor(Math.random() * 10000);
  let name = "name_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_owner = "new_owner_230_" + Math.floor(Math.random() * 10000);
  let owner = "owner_230_" + Math.floor(Math.random() * 10000);
  let page = "page_230_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_230_" + Math.floor(Math.random() * 10000);
  let _private = "private_230_" + Math.floor(Math.random() * 10000);
  let ref = "ref_230_" + Math.floor(Math.random() * 10000);
  let repo = "repo_230_" + Math.floor(Math.random() * 10000);
  let sort = "sort_230_" + Math.floor(Math.random() * 10000);
  let squash_merge_commit_message = "squash_merge_commit_message_230_" + Math.floor(Math.random() * 10000);
  let squash_merge_commit_title = "squash_merge_commit_title_230_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_230_" + Math.floor(Math.random() * 10000);
  let team_ids = "team_ids_230_" + Math.floor(Math.random() * 10000);
  let type = "type_230_" + Math.floor(Math.random() * 10000);
  let username = "username_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createRepositoryForAuthenticatedUser(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  transferRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  deleteRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  tryToDeleteANonExistingRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
  verifyRepositoryDoesNotExist(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
});

// Monitor: Repository Verification
bthread("monitor:Repository", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryAdded() });
    let allow_auto_merge = (e.data.parameters && e.data.parameters["allow_auto_merge"]) ? e.data.parameters["allow_auto_merge"] : e.data["allow_auto_merge"];
    let allow_merge_commit = (e.data.parameters && e.data.parameters["allow_merge_commit"]) ? e.data.parameters["allow_merge_commit"] : e.data["allow_merge_commit"];
    let allow_rebase_merge = (e.data.parameters && e.data.parameters["allow_rebase_merge"]) ? e.data.parameters["allow_rebase_merge"] : e.data["allow_rebase_merge"];
    let allow_squash_merge = (e.data.parameters && e.data.parameters["allow_squash_merge"]) ? e.data.parameters["allow_squash_merge"] : e.data["allow_squash_merge"];
    let auto_init = (e.data.parameters && e.data.parameters["auto_init"]) ? e.data.parameters["auto_init"] : e.data["auto_init"];
    let delete_branch_on_merge = (e.data.parameters && e.data.parameters["delete_branch_on_merge"]) ? e.data.parameters["delete_branch_on_merge"] : e.data["delete_branch_on_merge"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let direction = (e.data.parameters && e.data.parameters["direction"]) ? e.data.parameters["direction"] : e.data["direction"];
    let gitignore_template = (e.data.parameters && e.data.parameters["gitignore_template"]) ? e.data.parameters["gitignore_template"] : e.data["gitignore_template"];
    let has_discussions = (e.data.parameters && e.data.parameters["has_discussions"]) ? e.data.parameters["has_discussions"] : e.data["has_discussions"];
    let has_downloads = (e.data.parameters && e.data.parameters["has_downloads"]) ? e.data.parameters["has_downloads"] : e.data["has_downloads"];
    let has_issues = (e.data.parameters && e.data.parameters["has_issues"]) ? e.data.parameters["has_issues"] : e.data["has_issues"];
    let has_projects = (e.data.parameters && e.data.parameters["has_projects"]) ? e.data.parameters["has_projects"] : e.data["has_projects"];
    let has_wiki = (e.data.parameters && e.data.parameters["has_wiki"]) ? e.data.parameters["has_wiki"] : e.data["has_wiki"];
    let homepage = (e.data.parameters && e.data.parameters["homepage"]) ? e.data.parameters["homepage"] : e.data["homepage"];
    let is_template = (e.data.parameters && e.data.parameters["is_template"]) ? e.data.parameters["is_template"] : e.data["is_template"];
    let license_template = (e.data.parameters && e.data.parameters["license_template"]) ? e.data.parameters["license_template"] : e.data["license_template"];
    let merge_commit_message = (e.data.parameters && e.data.parameters["merge_commit_message"]) ? e.data.parameters["merge_commit_message"] : e.data["merge_commit_message"];
    let merge_commit_title = (e.data.parameters && e.data.parameters["merge_commit_title"]) ? e.data.parameters["merge_commit_title"] : e.data["merge_commit_title"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let new_name = (e.data.parameters && e.data.parameters["new_name"]) ? e.data.parameters["new_name"] : e.data["new_name"];
    let new_owner = (e.data.parameters && e.data.parameters["new_owner"]) ? e.data.parameters["new_owner"] : e.data["new_owner"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let per_page = (e.data.parameters && e.data.parameters["per-page"]) ? e.data.parameters["per-page"] : e.data["per-page"];
    let _private = (e.data.parameters && e.data.parameters["private"]) ? e.data.parameters["private"] : e.data["private"];
    let ref = (e.data.parameters && e.data.parameters["ref"]) ? e.data.parameters["ref"] : e.data["ref"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let sort = (e.data.parameters && e.data.parameters["sort"]) ? e.data.parameters["sort"] : e.data["sort"];
    let squash_merge_commit_message = (e.data.parameters && e.data.parameters["squash_merge_commit_message"]) ? e.data.parameters["squash_merge_commit_message"] : e.data["squash_merge_commit_message"];
    let squash_merge_commit_title = (e.data.parameters && e.data.parameters["squash_merge_commit_title"]) ? e.data.parameters["squash_merge_commit_title"] : e.data["squash_merge_commit_title"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    let team_ids = (e.data.parameters && e.data.parameters["team_ids"]) ? e.data.parameters["team_ids"] : e.data["team_ids"];
    let type = (e.data.parameters && e.data.parameters["type"]) ? e.data.parameters["type"] : e.data["type"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepository(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username), function() {
      bp.log.info(`Monitor Repository: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRepositoryExists(allow_auto_merge, allow_merge_commit, allow_rebase_merge, allow_squash_merge, auto_init, delete_branch_on_merge, description, direction, gitignore_template, has_discussions, has_downloads, has_issues, has_projects, has_wiki, homepage, is_template, license_template, merge_commit_message, merge_commit_title, name, new_name, new_owner, owner, page, per_page, _private, ref, repo, sort, squash_merge_commit_message, squash_merge_commit_title, team_id, team_ids, type, username);
    });
  }
});

// Story: crud:Ruleset:linear:1
bthread("crud:Ruleset:linear:1", function () {
  let bypass_actors = "bypass_actors_260_" + Math.floor(Math.random() * 10000);
  let conditions = "conditions_260_" + Math.floor(Math.random() * 10000);
  let enforcement = "enforcement_260_" + Math.floor(Math.random() * 10000);
  let name = "name_260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_260_" + Math.floor(Math.random() * 10000);
  let rules = "rules_260_" + Math.floor(Math.random() * 10000);
  let ruleset_id = "ruleset_id_260_" + Math.floor(Math.random() * 10000);
  let target = "target_260_" + Math.floor(Math.random() * 10000);
  createRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  updateRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  deleteRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  tryToDeleteANonExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
});

// Story: crud:Ruleset:linear:2
bthread("crud:Ruleset:linear:2", function () {
  let bypass_actors = "bypass_actors_270_" + Math.floor(Math.random() * 10000);
  let conditions = "conditions_270_" + Math.floor(Math.random() * 10000);
  let enforcement = "enforcement_270_" + Math.floor(Math.random() * 10000);
  let name = "name_270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_270_" + Math.floor(Math.random() * 10000);
  let rules = "rules_270_" + Math.floor(Math.random() * 10000);
  let ruleset_id = "ruleset_id_270_" + Math.floor(Math.random() * 10000);
  let target = "target_270_" + Math.floor(Math.random() * 10000);
  createRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  updateRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  deleteRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  tryToDeleteANonExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
});

// Story: crud:Ruleset:linear:3
bthread("crud:Ruleset:linear:3", function () {
  let bypass_actors = "bypass_actors_280_" + Math.floor(Math.random() * 10000);
  let conditions = "conditions_280_" + Math.floor(Math.random() * 10000);
  let enforcement = "enforcement_280_" + Math.floor(Math.random() * 10000);
  let name = "name_280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_280_" + Math.floor(Math.random() * 10000);
  let rules = "rules_280_" + Math.floor(Math.random() * 10000);
  let ruleset_id = "ruleset_id_280_" + Math.floor(Math.random() * 10000);
  let target = "target_280_" + Math.floor(Math.random() * 10000);
  createRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  updateRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  deleteRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  tryToDeleteANonExistingRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
  verifyRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
});

// Monitor: Ruleset Verification
bthread("monitor:Ruleset", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRulesetAdded() });
    let bypass_actors = (e.data.parameters && e.data.parameters["bypass_actors"]) ? e.data.parameters["bypass_actors"] : e.data["bypass_actors"];
    let conditions = (e.data.parameters && e.data.parameters["conditions"]) ? e.data.parameters["conditions"] : e.data["conditions"];
    let enforcement = (e.data.parameters && e.data.parameters["enforcement"]) ? e.data.parameters["enforcement"] : e.data["enforcement"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let rules = (e.data.parameters && e.data.parameters["rules"]) ? e.data.parameters["rules"] : e.data["rules"];
    let ruleset_id = (e.data.parameters && e.data.parameters["ruleset_id"]) ? e.data.parameters["ruleset_id"] : e.data["ruleset_id"];
    let target = (e.data.parameters && e.data.parameters["target"]) ? e.data.parameters["target"] : e.data["target"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRuleset(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target), function() {
      bp.log.info(`Monitor Ruleset: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRulesetExists(bypass_actors, conditions, enforcement, name, org, rules, ruleset_id, target);
    });
  }
});

// Story: crud:Attestation:linear:1
bthread("crud:Attestation:linear:1", function () {
  let attestation_id = "attestation_id_310_" + Math.floor(Math.random() * 10000);
  let attestation_ids = "attestation_ids_310_" + Math.floor(Math.random() * 10000);
  let bundle = "bundle_310_" + Math.floor(Math.random() * 10000);
  let org = "org_310_" + Math.floor(Math.random() * 10000);
  let owner = "owner_310_" + Math.floor(Math.random() * 10000);
  let pagination_after = "pagination_after_310_" + Math.floor(Math.random() * 10000);
  let pagination_before = "pagination_before_310_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_310_" + Math.floor(Math.random() * 10000);
  let predicate_type = "predicate_type_310_" + Math.floor(Math.random() * 10000);
  let repo = "repo_310_" + Math.floor(Math.random() * 10000);
  let subject_digest = "subject_digest_310_" + Math.floor(Math.random() * 10000);
  let subject_digests = "subject_digests_310_" + Math.floor(Math.random() * 10000);
  let username = "username_310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  verifyAttestationExists(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  deleteAttestationsBulk(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  tryToDeleteANonExistingAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  verifyAttestationDoesNotExist(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
});

// Story: crud:Attestation:linear:2
bthread("crud:Attestation:linear:2", function () {
  let attestation_id = "attestation_id_320_" + Math.floor(Math.random() * 10000);
  let attestation_ids = "attestation_ids_320_" + Math.floor(Math.random() * 10000);
  let bundle = "bundle_320_" + Math.floor(Math.random() * 10000);
  let org = "org_320_" + Math.floor(Math.random() * 10000);
  let owner = "owner_320_" + Math.floor(Math.random() * 10000);
  let pagination_after = "pagination_after_320_" + Math.floor(Math.random() * 10000);
  let pagination_before = "pagination_before_320_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_320_" + Math.floor(Math.random() * 10000);
  let predicate_type = "predicate_type_320_" + Math.floor(Math.random() * 10000);
  let repo = "repo_320_" + Math.floor(Math.random() * 10000);
  let subject_digest = "subject_digest_320_" + Math.floor(Math.random() * 10000);
  let subject_digests = "subject_digests_320_" + Math.floor(Math.random() * 10000);
  let username = "username_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  verifyAttestationExists(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  deleteAttestationsBulk(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  tryToDeleteANonExistingAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  verifyAttestationDoesNotExist(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
});

// Story: crud:Attestation:linear:3
bthread("crud:Attestation:linear:3", function () {
  let attestation_id = "attestation_id_330_" + Math.floor(Math.random() * 10000);
  let attestation_ids = "attestation_ids_330_" + Math.floor(Math.random() * 10000);
  let bundle = "bundle_330_" + Math.floor(Math.random() * 10000);
  let org = "org_330_" + Math.floor(Math.random() * 10000);
  let owner = "owner_330_" + Math.floor(Math.random() * 10000);
  let pagination_after = "pagination_after_330_" + Math.floor(Math.random() * 10000);
  let pagination_before = "pagination_before_330_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_330_" + Math.floor(Math.random() * 10000);
  let predicate_type = "predicate_type_330_" + Math.floor(Math.random() * 10000);
  let repo = "repo_330_" + Math.floor(Math.random() * 10000);
  let subject_digest = "subject_digest_330_" + Math.floor(Math.random() * 10000);
  let subject_digests = "subject_digests_330_" + Math.floor(Math.random() * 10000);
  let username = "username_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  verifyAttestationExists(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  deleteAttestationsBulk(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  tryToDeleteANonExistingAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
  verifyAttestationDoesNotExist(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
});

// Monitor: Attestation Verification
bthread("monitor:Attestation", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAttestationAdded() });
    let attestation_id = (e.data.parameters && e.data.parameters["attestation_id"]) ? e.data.parameters["attestation_id"] : e.data["attestation_id"];
    let attestation_ids = (e.data.parameters && e.data.parameters["attestation_ids"]) ? e.data.parameters["attestation_ids"] : e.data["attestation_ids"];
    let bundle = (e.data.parameters && e.data.parameters["bundle"]) ? e.data.parameters["bundle"] : e.data["bundle"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let pagination_after = (e.data.parameters && e.data.parameters["pagination_after"]) ? e.data.parameters["pagination_after"] : e.data["pagination_after"];
    let pagination_before = (e.data.parameters && e.data.parameters["pagination_before"]) ? e.data.parameters["pagination_before"] : e.data["pagination_before"];
    let per_page = (e.data.parameters && e.data.parameters["per_page"]) ? e.data.parameters["per_page"] : e.data["per_page"];
    let predicate_type = (e.data.parameters && e.data.parameters["predicate_type"]) ? e.data.parameters["predicate_type"] : e.data["predicate_type"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let subject_digest = (e.data.parameters && e.data.parameters["subject_digest"]) ? e.data.parameters["subject_digest"] : e.data["subject_digest"];
    let subject_digests = (e.data.parameters && e.data.parameters["subject_digests"]) ? e.data.parameters["subject_digests"] : e.data["subject_digests"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedAttestation(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username), function() {
      bp.log.info(`Monitor Attestation: Verifying persistence of ID ${id} inside deletion block.`);
        verifyAttestationExists(attestation_id, attestation_ids, bundle, org, owner, pagination_after, pagination_before, per_page, predicate_type, repo, subject_digest, subject_digests, username);
    });
  }
});

// Story: crud:Autolink:linear:1
bthread("crud:Autolink:linear:1", function () {
  let autolink_id = "autolink_id_360_" + Math.floor(Math.random() * 10000);
  let is_alphanumeric = "is_alphanumeric_360_" + Math.floor(Math.random() * 10000);
  let key_prefix = "key_prefix_360_" + Math.floor(Math.random() * 10000);
  let owner = "owner_360_" + Math.floor(Math.random() * 10000);
  let repo = "repo_360_" + Math.floor(Math.random() * 10000);
  let url_template = "url_template_360_" + Math.floor(Math.random() * 10000);
  createAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  deleteAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  tryToDeleteANonExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkDoesNotExist(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
});

// Story: crud:Autolink:linear:2
bthread("crud:Autolink:linear:2", function () {
  let autolink_id = "autolink_id_370_" + Math.floor(Math.random() * 10000);
  let is_alphanumeric = "is_alphanumeric_370_" + Math.floor(Math.random() * 10000);
  let key_prefix = "key_prefix_370_" + Math.floor(Math.random() * 10000);
  let owner = "owner_370_" + Math.floor(Math.random() * 10000);
  let repo = "repo_370_" + Math.floor(Math.random() * 10000);
  let url_template = "url_template_370_" + Math.floor(Math.random() * 10000);
  createAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  deleteAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  tryToDeleteANonExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkDoesNotExist(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
});

// Story: crud:Autolink:linear:3
bthread("crud:Autolink:linear:3", function () {
  let autolink_id = "autolink_id_380_" + Math.floor(Math.random() * 10000);
  let is_alphanumeric = "is_alphanumeric_380_" + Math.floor(Math.random() * 10000);
  let key_prefix = "key_prefix_380_" + Math.floor(Math.random() * 10000);
  let owner = "owner_380_" + Math.floor(Math.random() * 10000);
  let repo = "repo_380_" + Math.floor(Math.random() * 10000);
  let url_template = "url_template_380_" + Math.floor(Math.random() * 10000);
  createAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  deleteAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  tryToDeleteANonExistingAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
  verifyAutolinkDoesNotExist(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
});

// Monitor: Autolink Verification
bthread("monitor:Autolink", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAutolinkAdded() });
    let autolink_id = (e.data.parameters && e.data.parameters["autolink_id"]) ? e.data.parameters["autolink_id"] : e.data["autolink_id"];
    let is_alphanumeric = (e.data.parameters && e.data.parameters["is_alphanumeric"]) ? e.data.parameters["is_alphanumeric"] : e.data["is_alphanumeric"];
    let key_prefix = (e.data.parameters && e.data.parameters["key_prefix"]) ? e.data.parameters["key_prefix"] : e.data["key_prefix"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let url_template = (e.data.parameters && e.data.parameters["url_template"]) ? e.data.parameters["url_template"] : e.data["url_template"];
    // Block Deletion while Verifying Existence
    block(matchDeletedAutolink(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template), function() {
      bp.log.info(`Monitor Autolink: Verifying persistence of ID ${id} inside deletion block.`);
        verifyAutolinkExists(autolink_id, is_alphanumeric, key_prefix, owner, repo, url_template);
    });
  }
});

// Story: crud:AutomatedSecurityFixes:linear:1
bthread("crud:AutomatedSecurityFixes:linear:1", function () {
  let owner = "owner_410_" + Math.floor(Math.random() * 10000);
  let repo = "repo_410_" + Math.floor(Math.random() * 10000);
  enableAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesExists(owner, repo);
  disableAutomatedSecurityFixes(owner, repo);
  tryToDeleteANonExistingAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesDoesNotExist(owner, repo);
});

// Story: crud:AutomatedSecurityFixes:linear:2
bthread("crud:AutomatedSecurityFixes:linear:2", function () {
  let owner = "owner_420_" + Math.floor(Math.random() * 10000);
  let repo = "repo_420_" + Math.floor(Math.random() * 10000);
  enableAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesExists(owner, repo);
  disableAutomatedSecurityFixes(owner, repo);
  tryToDeleteANonExistingAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesDoesNotExist(owner, repo);
});

// Story: crud:AutomatedSecurityFixes:linear:3
bthread("crud:AutomatedSecurityFixes:linear:3", function () {
  let owner = "owner_430_" + Math.floor(Math.random() * 10000);
  let repo = "repo_430_" + Math.floor(Math.random() * 10000);
  enableAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesExists(owner, repo);
  disableAutomatedSecurityFixes(owner, repo);
  tryToDeleteANonExistingAutomatedSecurityFixes(owner, repo);
  verifyAutomatedSecurityFixesDoesNotExist(owner, repo);
});

// Monitor: AutomatedSecurityFixes Verification
bthread("monitor:AutomatedSecurityFixes", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAutomatedSecurityFixesAdded() });
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedAutomatedSecurityFixes(owner, repo), function() {
      bp.log.info(`Monitor AutomatedSecurityFixes: Verifying persistence of ID ${id} inside deletion block.`);
        verifyAutomatedSecurityFixesExists(owner, repo);
    });
  }
});

// Story: crud:AdminBranchProtection:linear:1
bthread("crud:AdminBranchProtection:linear:1", function () {
  let branch = "branch_460_" + Math.floor(Math.random() * 10000);
  let owner = "owner_460_" + Math.floor(Math.random() * 10000);
  let repo = "repo_460_" + Math.floor(Math.random() * 10000);
  setAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionExists(branch, owner, repo);
  deleteAdminBranchProtection(branch, owner, repo);
  tryToDeleteANonExistingAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionDoesNotExist(branch, owner, repo);
});

// Story: crud:AdminBranchProtection:linear:2
bthread("crud:AdminBranchProtection:linear:2", function () {
  let branch = "branch_470_" + Math.floor(Math.random() * 10000);
  let owner = "owner_470_" + Math.floor(Math.random() * 10000);
  let repo = "repo_470_" + Math.floor(Math.random() * 10000);
  setAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionExists(branch, owner, repo);
  deleteAdminBranchProtection(branch, owner, repo);
  tryToDeleteANonExistingAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionDoesNotExist(branch, owner, repo);
});

// Story: crud:AdminBranchProtection:linear:3
bthread("crud:AdminBranchProtection:linear:3", function () {
  let branch = "branch_480_" + Math.floor(Math.random() * 10000);
  let owner = "owner_480_" + Math.floor(Math.random() * 10000);
  let repo = "repo_480_" + Math.floor(Math.random() * 10000);
  setAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionExists(branch, owner, repo);
  deleteAdminBranchProtection(branch, owner, repo);
  tryToDeleteANonExistingAdminBranchProtection(branch, owner, repo);
  verifyAdminBranchProtectionDoesNotExist(branch, owner, repo);
});

// Monitor: AdminBranchProtection Verification
bthread("monitor:AdminBranchProtection", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAdminBranchProtectionAdded() });
    let branch = (e.data.parameters && e.data.parameters["branch"]) ? e.data.parameters["branch"] : e.data["branch"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedAdminBranchProtection(branch, owner, repo), function() {
      bp.log.info(`Monitor AdminBranchProtection: Verifying persistence of ID ${id} inside deletion block.`);
        verifyAdminBranchProtectionExists(branch, owner, repo);
    });
  }
});

// Story: crud:CommitSignatureProtection:linear:1
bthread("crud:CommitSignatureProtection:linear:1", function () {
  let branch = "branch_510_" + Math.floor(Math.random() * 10000);
  let owner = "owner_510_" + Math.floor(Math.random() * 10000);
  let repo = "repo_510_" + Math.floor(Math.random() * 10000);
  createCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionExists(branch, owner, repo);
  deleteCommitSignatureProtection(branch, owner, repo);
  tryToDeleteANonExistingCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionDoesNotExist(branch, owner, repo);
});

// Story: crud:CommitSignatureProtection:linear:2
bthread("crud:CommitSignatureProtection:linear:2", function () {
  let branch = "branch_520_" + Math.floor(Math.random() * 10000);
  let owner = "owner_520_" + Math.floor(Math.random() * 10000);
  let repo = "repo_520_" + Math.floor(Math.random() * 10000);
  createCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionExists(branch, owner, repo);
  deleteCommitSignatureProtection(branch, owner, repo);
  tryToDeleteANonExistingCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionDoesNotExist(branch, owner, repo);
});

// Story: crud:CommitSignatureProtection:linear:3
bthread("crud:CommitSignatureProtection:linear:3", function () {
  let branch = "branch_530_" + Math.floor(Math.random() * 10000);
  let owner = "owner_530_" + Math.floor(Math.random() * 10000);
  let repo = "repo_530_" + Math.floor(Math.random() * 10000);
  createCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionExists(branch, owner, repo);
  deleteCommitSignatureProtection(branch, owner, repo);
  tryToDeleteANonExistingCommitSignatureProtection(branch, owner, repo);
  verifyCommitSignatureProtectionDoesNotExist(branch, owner, repo);
});

// Monitor: CommitSignatureProtection Verification
bthread("monitor:CommitSignatureProtection", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCommitSignatureProtectionAdded() });
    let branch = (e.data.parameters && e.data.parameters["branch"]) ? e.data.parameters["branch"] : e.data["branch"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCommitSignatureProtection(branch, owner, repo), function() {
      bp.log.info(`Monitor CommitSignatureProtection: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCommitSignatureProtectionExists(branch, owner, repo);
    });
  }
});

// Story: crud:StatusCheckContexts:linear:1
bthread("crud:StatusCheckContexts:linear:1", function () {
  let branch = "branch_560_" + Math.floor(Math.random() * 10000);
  let contexts = "contexts_560_" + Math.floor(Math.random() * 10000);
  let owner = "owner_560_" + Math.floor(Math.random() * 10000);
  let repo = "repo_560_" + Math.floor(Math.random() * 10000);
  addStatusCheckContexts(branch, contexts, owner, repo);
  verifyStatusCheckContextsExists(branch, contexts, owner, repo);
  setStatusCheckContexts(branch, contexts, owner, repo);
  removeStatusCheckContexts(branch, contexts, owner, repo);
  tryToDeleteANonExistingStatusCheckContexts(branch, contexts, owner, repo);
  verifyStatusCheckContextsDoesNotExist(branch, contexts, owner, repo);
});

// Story: crud:StatusCheckContexts:linear:2
bthread("crud:StatusCheckContexts:linear:2", function () {
  let branch = "branch_570_" + Math.floor(Math.random() * 10000);
  let contexts = "contexts_570_" + Math.floor(Math.random() * 10000);
  let owner = "owner_570_" + Math.floor(Math.random() * 10000);
  let repo = "repo_570_" + Math.floor(Math.random() * 10000);
  addStatusCheckContexts(branch, contexts, owner, repo);
  verifyStatusCheckContextsExists(branch, contexts, owner, repo);
  setStatusCheckContexts(branch, contexts, owner, repo);
  removeStatusCheckContexts(branch, contexts, owner, repo);
  tryToDeleteANonExistingStatusCheckContexts(branch, contexts, owner, repo);
  verifyStatusCheckContextsDoesNotExist(branch, contexts, owner, repo);
});

// Story: crud:StatusCheckContexts:linear:3
bthread("crud:StatusCheckContexts:linear:3", function () {
  let branch = "branch_580_" + Math.floor(Math.random() * 10000);
  let contexts = "contexts_580_" + Math.floor(Math.random() * 10000);
  let owner = "owner_580_" + Math.floor(Math.random() * 10000);
  let repo = "repo_580_" + Math.floor(Math.random() * 10000);
  addStatusCheckContexts(branch, contexts, owner, repo);
  verifyStatusCheckContextsExists(branch, contexts, owner, repo);
  setStatusCheckContexts(branch, contexts, owner, repo);
  removeStatusCheckContexts(branch, contexts, owner, repo);
  tryToDeleteANonExistingStatusCheckContexts(branch, contexts, owner, repo);
  verifyStatusCheckContextsDoesNotExist(branch, contexts, owner, repo);
});

// Monitor: StatusCheckContexts Verification
bthread("monitor:StatusCheckContexts", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyStatusCheckContextsAdded() });
    let branch = (e.data.parameters && e.data.parameters["branch"]) ? e.data.parameters["branch"] : e.data["branch"];
    let contexts = (e.data.parameters && e.data.parameters["contexts"]) ? e.data.parameters["contexts"] : e.data["contexts"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedStatusCheckContexts(branch, contexts, owner, repo), function() {
      bp.log.info(`Monitor StatusCheckContexts: Verifying persistence of ID ${id} inside deletion block.`);
        verifyStatusCheckContextsExists(branch, contexts, owner, repo);
    });
  }
});

// Story: crud:BranchProtectionRestrictionApps:linear:1
bthread("crud:BranchProtectionRestrictionApps:linear:1", function () {
  let apps = "apps_610_" + Math.floor(Math.random() * 10000);
  let branch = "branch_610_" + Math.floor(Math.random() * 10000);
  let owner = "owner_610_" + Math.floor(Math.random() * 10000);
  let repo = "repo_610_" + Math.floor(Math.random() * 10000);
  addAppAccessRestrictions(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo);
  setAppAccessRestrictions(apps, branch, owner, repo);
  removeAppAccessRestrictions(apps, branch, owner, repo);
  tryToDeleteANonExistingBranchProtectionRestrictionApps(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsDoesNotExist(apps, branch, owner, repo);
});

// Story: crud:BranchProtectionRestrictionApps:linear:2
bthread("crud:BranchProtectionRestrictionApps:linear:2", function () {
  let apps = "apps_620_" + Math.floor(Math.random() * 10000);
  let branch = "branch_620_" + Math.floor(Math.random() * 10000);
  let owner = "owner_620_" + Math.floor(Math.random() * 10000);
  let repo = "repo_620_" + Math.floor(Math.random() * 10000);
  addAppAccessRestrictions(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo);
  setAppAccessRestrictions(apps, branch, owner, repo);
  removeAppAccessRestrictions(apps, branch, owner, repo);
  tryToDeleteANonExistingBranchProtectionRestrictionApps(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsDoesNotExist(apps, branch, owner, repo);
});

// Story: crud:BranchProtectionRestrictionApps:linear:3
bthread("crud:BranchProtectionRestrictionApps:linear:3", function () {
  let apps = "apps_630_" + Math.floor(Math.random() * 10000);
  let branch = "branch_630_" + Math.floor(Math.random() * 10000);
  let owner = "owner_630_" + Math.floor(Math.random() * 10000);
  let repo = "repo_630_" + Math.floor(Math.random() * 10000);
  addAppAccessRestrictions(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo);
  setAppAccessRestrictions(apps, branch, owner, repo);
  removeAppAccessRestrictions(apps, branch, owner, repo);
  tryToDeleteANonExistingBranchProtectionRestrictionApps(apps, branch, owner, repo);
  verifyBranchProtectionRestrictionAppsDoesNotExist(apps, branch, owner, repo);
});

// Monitor: BranchProtectionRestrictionApps Verification
bthread("monitor:BranchProtectionRestrictionApps", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBranchProtectionRestrictionAppsAdded() });
    let apps = (e.data.parameters && e.data.parameters["apps"]) ? e.data.parameters["apps"] : e.data["apps"];
    let branch = (e.data.parameters && e.data.parameters["branch"]) ? e.data.parameters["branch"] : e.data["branch"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedBranchProtectionRestrictionApps(apps, branch, owner, repo), function() {
      bp.log.info(`Monitor BranchProtectionRestrictionApps: Verifying persistence of ID ${id} inside deletion block.`);
        verifyBranchProtectionRestrictionAppsExists(apps, branch, owner, repo);
    });
  }
});

// Story: crud:BranchProtectionRestrictionTeams:linear:1
bthread("crud:BranchProtectionRestrictionTeams:linear:1", function () {
  let branch = "branch_660_" + Math.floor(Math.random() * 10000);
  let owner = "owner_660_" + Math.floor(Math.random() * 10000);
  let repo = "repo_660_" + Math.floor(Math.random() * 10000);
  let teams = "teams_660_" + Math.floor(Math.random() * 10000);
  addTeamAccessRestrictions(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams);
  setTeamAccessRestrictions(branch, owner, repo, teams);
  removeTeamAccessRestrictions(branch, owner, repo, teams);
  tryToDeleteANonExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsDoesNotExist(branch, owner, repo, teams);
});

// Story: crud:BranchProtectionRestrictionTeams:linear:2
bthread("crud:BranchProtectionRestrictionTeams:linear:2", function () {
  let branch = "branch_670_" + Math.floor(Math.random() * 10000);
  let owner = "owner_670_" + Math.floor(Math.random() * 10000);
  let repo = "repo_670_" + Math.floor(Math.random() * 10000);
  let teams = "teams_670_" + Math.floor(Math.random() * 10000);
  addTeamAccessRestrictions(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams);
  setTeamAccessRestrictions(branch, owner, repo, teams);
  removeTeamAccessRestrictions(branch, owner, repo, teams);
  tryToDeleteANonExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsDoesNotExist(branch, owner, repo, teams);
});

// Story: crud:BranchProtectionRestrictionTeams:linear:3
bthread("crud:BranchProtectionRestrictionTeams:linear:3", function () {
  let branch = "branch_680_" + Math.floor(Math.random() * 10000);
  let owner = "owner_680_" + Math.floor(Math.random() * 10000);
  let repo = "repo_680_" + Math.floor(Math.random() * 10000);
  let teams = "teams_680_" + Math.floor(Math.random() * 10000);
  addTeamAccessRestrictions(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams);
  setTeamAccessRestrictions(branch, owner, repo, teams);
  removeTeamAccessRestrictions(branch, owner, repo, teams);
  tryToDeleteANonExistingBranchProtectionRestrictionTeams(branch, owner, repo, teams);
  verifyBranchProtectionRestrictionTeamsDoesNotExist(branch, owner, repo, teams);
});

// Monitor: BranchProtectionRestrictionTeams Verification
bthread("monitor:BranchProtectionRestrictionTeams", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBranchProtectionRestrictionTeamsAdded() });
    let branch = (e.data.parameters && e.data.parameters["branch"]) ? e.data.parameters["branch"] : e.data["branch"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let teams = (e.data.parameters && e.data.parameters["teams"]) ? e.data.parameters["teams"] : e.data["teams"];
    // Block Deletion while Verifying Existence
    block(matchDeletedBranchProtectionRestrictionTeams(branch, owner, repo, teams), function() {
      bp.log.info(`Monitor BranchProtectionRestrictionTeams: Verifying persistence of ID ${id} inside deletion block.`);
        verifyBranchProtectionRestrictionTeamsExists(branch, owner, repo, teams);
    });
  }
});

// Story: crud:BranchProtectionRestrictionUsers:linear:1
bthread("crud:BranchProtectionRestrictionUsers:linear:1", function () {
  let branch = "branch_710_" + Math.floor(Math.random() * 10000);
  let owner = "owner_710_" + Math.floor(Math.random() * 10000);
  let repo = "repo_710_" + Math.floor(Math.random() * 10000);
  let users = "users_710_" + Math.floor(Math.random() * 10000);
  addUserAccessRestrictions(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users);
  setUserAccessRestrictions(branch, owner, repo, users);
  removeUserAccessRestrictions(branch, owner, repo, users);
  tryToDeleteANonExistingBranchProtectionRestrictionUsers(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersDoesNotExist(branch, owner, repo, users);
});

// Story: crud:BranchProtectionRestrictionUsers:linear:2
bthread("crud:BranchProtectionRestrictionUsers:linear:2", function () {
  let branch = "branch_720_" + Math.floor(Math.random() * 10000);
  let owner = "owner_720_" + Math.floor(Math.random() * 10000);
  let repo = "repo_720_" + Math.floor(Math.random() * 10000);
  let users = "users_720_" + Math.floor(Math.random() * 10000);
  addUserAccessRestrictions(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users);
  setUserAccessRestrictions(branch, owner, repo, users);
  removeUserAccessRestrictions(branch, owner, repo, users);
  tryToDeleteANonExistingBranchProtectionRestrictionUsers(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersDoesNotExist(branch, owner, repo, users);
});

// Story: crud:BranchProtectionRestrictionUsers:linear:3
bthread("crud:BranchProtectionRestrictionUsers:linear:3", function () {
  let branch = "branch_730_" + Math.floor(Math.random() * 10000);
  let owner = "owner_730_" + Math.floor(Math.random() * 10000);
  let repo = "repo_730_" + Math.floor(Math.random() * 10000);
  let users = "users_730_" + Math.floor(Math.random() * 10000);
  addUserAccessRestrictions(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users);
  setUserAccessRestrictions(branch, owner, repo, users);
  removeUserAccessRestrictions(branch, owner, repo, users);
  tryToDeleteANonExistingBranchProtectionRestrictionUsers(branch, owner, repo, users);
  verifyBranchProtectionRestrictionUsersDoesNotExist(branch, owner, repo, users);
});

// Monitor: BranchProtectionRestrictionUsers Verification
bthread("monitor:BranchProtectionRestrictionUsers", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBranchProtectionRestrictionUsersAdded() });
    let branch = (e.data.parameters && e.data.parameters["branch"]) ? e.data.parameters["branch"] : e.data["branch"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let users = (e.data.parameters && e.data.parameters["users"]) ? e.data.parameters["users"] : e.data["users"];
    // Block Deletion while Verifying Existence
    block(matchDeletedBranchProtectionRestrictionUsers(branch, owner, repo, users), function() {
      bp.log.info(`Monitor BranchProtectionRestrictionUsers: Verifying persistence of ID ${id} inside deletion block.`);
        verifyBranchProtectionRestrictionUsersExists(branch, owner, repo, users);
    });
  }
});

// Story: crud:BranchRename:linear:1
bthread("crud:BranchRename:linear:1", function () {
  let branch = "branch_760_" + Math.floor(Math.random() * 10000);
  let id = "id_760_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_760_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_760_" + Math.floor(Math.random() * 10000);
  let repo = "repo_760_" + Math.floor(Math.random() * 10000);
  renameBranch(branch, id, new_name, owner, repo);
});

// Story: crud:BranchRename:linear:2
bthread("crud:BranchRename:linear:2", function () {
  let branch = "branch_770_" + Math.floor(Math.random() * 10000);
  let id = "id_770_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_770_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_770_" + Math.floor(Math.random() * 10000);
  let repo = "repo_770_" + Math.floor(Math.random() * 10000);
  renameBranch(branch, id, new_name, owner, repo);
});

// Story: crud:BranchRename:linear:3
bthread("crud:BranchRename:linear:3", function () {
  let branch = "branch_780_" + Math.floor(Math.random() * 10000);
  let id = "id_780_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_780_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_780_" + Math.floor(Math.random() * 10000);
  let repo = "repo_780_" + Math.floor(Math.random() * 10000);
  renameBranch(branch, id, new_name, owner, repo);
});

// Story: crud:Collaborator:linear:1
bthread("crud:Collaborator:linear:1", function () {
  let owner = "owner_810_" + Math.floor(Math.random() * 10000);
  let permission = "permission_810_" + Math.floor(Math.random() * 10000);
  let repo = "repo_810_" + Math.floor(Math.random() * 10000);
  let username = "username_810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCollaborator(owner, permission, repo, username);
  verifyCollaboratorExists(owner, permission, repo, username);
  removeCollaborator(owner, permission, repo, username);
  tryToDeleteANonExistingCollaborator(owner, permission, repo, username);
  verifyCollaboratorDoesNotExist(owner, permission, repo, username);
});

// Story: crud:Collaborator:linear:2
bthread("crud:Collaborator:linear:2", function () {
  let owner = "owner_820_" + Math.floor(Math.random() * 10000);
  let permission = "permission_820_" + Math.floor(Math.random() * 10000);
  let repo = "repo_820_" + Math.floor(Math.random() * 10000);
  let username = "username_820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCollaborator(owner, permission, repo, username);
  verifyCollaboratorExists(owner, permission, repo, username);
  removeCollaborator(owner, permission, repo, username);
  tryToDeleteANonExistingCollaborator(owner, permission, repo, username);
  verifyCollaboratorDoesNotExist(owner, permission, repo, username);
});

// Story: crud:Collaborator:linear:3
bthread("crud:Collaborator:linear:3", function () {
  let owner = "owner_830_" + Math.floor(Math.random() * 10000);
  let permission = "permission_830_" + Math.floor(Math.random() * 10000);
  let repo = "repo_830_" + Math.floor(Math.random() * 10000);
  let username = "username_830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCollaborator(owner, permission, repo, username);
  verifyCollaboratorExists(owner, permission, repo, username);
  removeCollaborator(owner, permission, repo, username);
  tryToDeleteANonExistingCollaborator(owner, permission, repo, username);
  verifyCollaboratorDoesNotExist(owner, permission, repo, username);
});

// Monitor: Collaborator Verification
bthread("monitor:Collaborator", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCollaboratorAdded() });
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let permission = (e.data.parameters && e.data.parameters["permission"]) ? e.data.parameters["permission"] : e.data["permission"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCollaborator(owner, permission, repo, username), function() {
      bp.log.info(`Monitor Collaborator: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCollaboratorExists(owner, permission, repo, username);
    });
  }
});

// Story: crud:CommitComments:linear:1
bthread("crud:CommitComments:linear:1", function () {
  let body = "body_860_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_860_" + Math.floor(Math.random() * 10000);
  let id = "id_860_" + Math.floor(Math.random() * 10000);
  let line = "line_860_" + Math.floor(Math.random() * 10000);
  let owner = "owner_860_" + Math.floor(Math.random() * 10000);
  let path = "path_860_" + Math.floor(Math.random() * 10000);
  let position = "position_860_" + Math.floor(Math.random() * 10000);
  let repo = "repo_860_" + Math.floor(Math.random() * 10000);
  createCommitComment(body, commit_sha, id, line, owner, path, position, repo);
});

// Story: crud:CommitComments:linear:2
bthread("crud:CommitComments:linear:2", function () {
  let body = "body_870_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_870_" + Math.floor(Math.random() * 10000);
  let id = "id_870_" + Math.floor(Math.random() * 10000);
  let line = "line_870_" + Math.floor(Math.random() * 10000);
  let owner = "owner_870_" + Math.floor(Math.random() * 10000);
  let path = "path_870_" + Math.floor(Math.random() * 10000);
  let position = "position_870_" + Math.floor(Math.random() * 10000);
  let repo = "repo_870_" + Math.floor(Math.random() * 10000);
  createCommitComment(body, commit_sha, id, line, owner, path, position, repo);
});

// Story: crud:CommitComments:linear:3
bthread("crud:CommitComments:linear:3", function () {
  let body = "body_880_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_880_" + Math.floor(Math.random() * 10000);
  let id = "id_880_" + Math.floor(Math.random() * 10000);
  let line = "line_880_" + Math.floor(Math.random() * 10000);
  let owner = "owner_880_" + Math.floor(Math.random() * 10000);
  let path = "path_880_" + Math.floor(Math.random() * 10000);
  let position = "position_880_" + Math.floor(Math.random() * 10000);
  let repo = "repo_880_" + Math.floor(Math.random() * 10000);
  createCommitComment(body, commit_sha, id, line, owner, path, position, repo);
});

// Story: crud:Commit:linear:1
bthread("crud:Commit:linear:1", function () {
  let author_date = "author.date_910_" + Math.floor(Math.random() * 10000);
  let author_email = "author.email_910_" + Math.floor(Math.random() * 10000);
  let author_name = "author.name_910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_910_" + Math.floor(Math.random() * 10000);
  let committer_date = "committer.date_910_" + Math.floor(Math.random() * 10000);
  let committer_email = "committer.email_910_" + Math.floor(Math.random() * 10000);
  let committer_name = "committer.name_910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let message = "message_910_" + Math.floor(Math.random() * 10000);
  let owner = "owner_910_" + Math.floor(Math.random() * 10000);
  let parents = "parents_910_" + Math.floor(Math.random() * 10000);
  let repo = "repo_910_" + Math.floor(Math.random() * 10000);
  let signature = "signature_910_" + Math.floor(Math.random() * 10000);
  let tree = "tree_910_" + Math.floor(Math.random() * 10000);
  createCommit(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree);
});

// Story: crud:Commit:linear:2
bthread("crud:Commit:linear:2", function () {
  let author_date = "author.date_920_" + Math.floor(Math.random() * 10000);
  let author_email = "author.email_920_" + Math.floor(Math.random() * 10000);
  let author_name = "author.name_920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_920_" + Math.floor(Math.random() * 10000);
  let committer_date = "committer.date_920_" + Math.floor(Math.random() * 10000);
  let committer_email = "committer.email_920_" + Math.floor(Math.random() * 10000);
  let committer_name = "committer.name_920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let message = "message_920_" + Math.floor(Math.random() * 10000);
  let owner = "owner_920_" + Math.floor(Math.random() * 10000);
  let parents = "parents_920_" + Math.floor(Math.random() * 10000);
  let repo = "repo_920_" + Math.floor(Math.random() * 10000);
  let signature = "signature_920_" + Math.floor(Math.random() * 10000);
  let tree = "tree_920_" + Math.floor(Math.random() * 10000);
  createCommit(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree);
});

// Story: crud:Commit:linear:3
bthread("crud:Commit:linear:3", function () {
  let author_date = "author.date_930_" + Math.floor(Math.random() * 10000);
  let author_email = "author.email_930_" + Math.floor(Math.random() * 10000);
  let author_name = "author.name_930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_930_" + Math.floor(Math.random() * 10000);
  let committer_date = "committer.date_930_" + Math.floor(Math.random() * 10000);
  let committer_email = "committer.email_930_" + Math.floor(Math.random() * 10000);
  let committer_name = "committer.name_930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let message = "message_930_" + Math.floor(Math.random() * 10000);
  let owner = "owner_930_" + Math.floor(Math.random() * 10000);
  let parents = "parents_930_" + Math.floor(Math.random() * 10000);
  let repo = "repo_930_" + Math.floor(Math.random() * 10000);
  let signature = "signature_930_" + Math.floor(Math.random() * 10000);
  let tree = "tree_930_" + Math.floor(Math.random() * 10000);
  createCommit(author_date, author_email, author_name, commit_sha, committer_date, committer_email, committer_name, message, owner, parents, repo, signature, tree);
});

// Story: crud:RepositoryContent:linear:1
bthread("crud:RepositoryContent:linear:1", function () {
  let committer_email = "committer.email_960_" + Math.floor(Math.random() * 10000);
  let committer_name = "committer.name_960_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let content = "content_960_" + Math.floor(Math.random() * 10000);
  let message = "message_960_" + Math.floor(Math.random() * 10000);
  let owner = "owner_960_" + Math.floor(Math.random() * 10000);
  let path = "path_960_" + Math.floor(Math.random() * 10000);
  let repo = "repo_960_" + Math.floor(Math.random() * 10000);
  let sha = "sha_960_" + Math.floor(Math.random() * 10000);
  createOrUpdateFileContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  verifyRepositoryContentExists(committer_email, committer_name, content, message, owner, path, repo, sha);
  createOrUpdateFileContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  deleteFile(committer_email, committer_name, content, message, owner, path, repo, sha);
  tryToDeleteANonExistingRepositoryContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  verifyRepositoryContentDoesNotExist(committer_email, committer_name, content, message, owner, path, repo, sha);
});

// Story: crud:RepositoryContent:linear:2
bthread("crud:RepositoryContent:linear:2", function () {
  let committer_email = "committer.email_970_" + Math.floor(Math.random() * 10000);
  let committer_name = "committer.name_970_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let content = "content_970_" + Math.floor(Math.random() * 10000);
  let message = "message_970_" + Math.floor(Math.random() * 10000);
  let owner = "owner_970_" + Math.floor(Math.random() * 10000);
  let path = "path_970_" + Math.floor(Math.random() * 10000);
  let repo = "repo_970_" + Math.floor(Math.random() * 10000);
  let sha = "sha_970_" + Math.floor(Math.random() * 10000);
  createOrUpdateFileContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  verifyRepositoryContentExists(committer_email, committer_name, content, message, owner, path, repo, sha);
  createOrUpdateFileContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  deleteFile(committer_email, committer_name, content, message, owner, path, repo, sha);
  tryToDeleteANonExistingRepositoryContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  verifyRepositoryContentDoesNotExist(committer_email, committer_name, content, message, owner, path, repo, sha);
});

// Story: crud:RepositoryContent:linear:3
bthread("crud:RepositoryContent:linear:3", function () {
  let committer_email = "committer.email_980_" + Math.floor(Math.random() * 10000);
  let committer_name = "committer.name_980_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let content = "content_980_" + Math.floor(Math.random() * 10000);
  let message = "message_980_" + Math.floor(Math.random() * 10000);
  let owner = "owner_980_" + Math.floor(Math.random() * 10000);
  let path = "path_980_" + Math.floor(Math.random() * 10000);
  let repo = "repo_980_" + Math.floor(Math.random() * 10000);
  let sha = "sha_980_" + Math.floor(Math.random() * 10000);
  createOrUpdateFileContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  verifyRepositoryContentExists(committer_email, committer_name, content, message, owner, path, repo, sha);
  createOrUpdateFileContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  deleteFile(committer_email, committer_name, content, message, owner, path, repo, sha);
  tryToDeleteANonExistingRepositoryContent(committer_email, committer_name, content, message, owner, path, repo, sha);
  verifyRepositoryContentDoesNotExist(committer_email, committer_name, content, message, owner, path, repo, sha);
});

// Monitor: RepositoryContent Verification
bthread("monitor:RepositoryContent", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryContentAdded() });
    let committer_email = (e.data.parameters && e.data.parameters["committer.email"]) ? e.data.parameters["committer.email"] : e.data["committer.email"];
    let committer_name = (e.data.parameters && e.data.parameters["committer.name"]) ? e.data.parameters["committer.name"] : e.data["committer.name"];
    let content = (e.data.parameters && e.data.parameters["content"]) ? e.data.parameters["content"] : e.data["content"];
    let message = (e.data.parameters && e.data.parameters["message"]) ? e.data.parameters["message"] : e.data["message"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let path = (e.data.parameters && e.data.parameters["path"]) ? e.data.parameters["path"] : e.data["path"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let sha = (e.data.parameters && e.data.parameters["sha"]) ? e.data.parameters["sha"] : e.data["sha"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepositoryContent(committer_email, committer_name, content, message, owner, path, repo, sha), function() {
      bp.log.info(`Monitor RepositoryContent: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRepositoryContentExists(committer_email, committer_name, content, message, owner, path, repo, sha);
    });
  }
});

// Story: crud:Deployment:linear:1
bthread("crud:Deployment:linear:1", function () {
  let deployment_id = "deployment_id_1010_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1010_" + Math.floor(Math.random() * 10000);
  let ref = "ref_1010_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1010_" + Math.floor(Math.random() * 10000);
  createDeployment(deployment_id, owner, ref, repo);
  verifyDeploymentExists(deployment_id, owner, ref, repo);
  deleteDeployment(deployment_id, owner, ref, repo);
  tryToDeleteANonExistingDeployment(deployment_id, owner, ref, repo);
  verifyDeploymentDoesNotExist(deployment_id, owner, ref, repo);
});

// Story: crud:Deployment:linear:2
bthread("crud:Deployment:linear:2", function () {
  let deployment_id = "deployment_id_1020_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1020_" + Math.floor(Math.random() * 10000);
  let ref = "ref_1020_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1020_" + Math.floor(Math.random() * 10000);
  createDeployment(deployment_id, owner, ref, repo);
  verifyDeploymentExists(deployment_id, owner, ref, repo);
  deleteDeployment(deployment_id, owner, ref, repo);
  tryToDeleteANonExistingDeployment(deployment_id, owner, ref, repo);
  verifyDeploymentDoesNotExist(deployment_id, owner, ref, repo);
});

// Story: crud:Deployment:linear:3
bthread("crud:Deployment:linear:3", function () {
  let deployment_id = "deployment_id_1030_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1030_" + Math.floor(Math.random() * 10000);
  let ref = "ref_1030_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1030_" + Math.floor(Math.random() * 10000);
  createDeployment(deployment_id, owner, ref, repo);
  verifyDeploymentExists(deployment_id, owner, ref, repo);
  deleteDeployment(deployment_id, owner, ref, repo);
  tryToDeleteANonExistingDeployment(deployment_id, owner, ref, repo);
  verifyDeploymentDoesNotExist(deployment_id, owner, ref, repo);
});

// Monitor: Deployment Verification
bthread("monitor:Deployment", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDeploymentAdded() });
    let deployment_id = (e.data.parameters && e.data.parameters["deployment_id"]) ? e.data.parameters["deployment_id"] : e.data["deployment_id"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let ref = (e.data.parameters && e.data.parameters["ref"]) ? e.data.parameters["ref"] : e.data["ref"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDeployment(deployment_id, owner, ref, repo), function() {
      bp.log.info(`Monitor Deployment: Verifying persistence of ID ${id} inside deletion block.`);
        verifyDeploymentExists(deployment_id, owner, ref, repo);
    });
  }
});

// Story: crud:DeploymentStatus:linear:1
bthread("crud:DeploymentStatus:linear:1", function () {
  let deployment_id = "deployment_id_1060_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1060_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1060_" + Math.floor(Math.random() * 10000);
  let state = "state_1060_" + Math.floor(Math.random() * 10000);
  let status_id = "status_id_1060_" + Math.floor(Math.random() * 10000);
  createDeploymentStatus(deployment_id, owner, repo, state, status_id);
});

// Story: crud:DeploymentStatus:linear:2
bthread("crud:DeploymentStatus:linear:2", function () {
  let deployment_id = "deployment_id_1070_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1070_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1070_" + Math.floor(Math.random() * 10000);
  let state = "state_1070_" + Math.floor(Math.random() * 10000);
  let status_id = "status_id_1070_" + Math.floor(Math.random() * 10000);
  createDeploymentStatus(deployment_id, owner, repo, state, status_id);
});

// Story: crud:DeploymentStatus:linear:3
bthread("crud:DeploymentStatus:linear:3", function () {
  let deployment_id = "deployment_id_1080_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1080_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1080_" + Math.floor(Math.random() * 10000);
  let state = "state_1080_" + Math.floor(Math.random() * 10000);
  let status_id = "status_id_1080_" + Math.floor(Math.random() * 10000);
  createDeploymentStatus(deployment_id, owner, repo, state, status_id);
});

// Story: crud:Environment:linear:1
bthread("crud:Environment:linear:1", function () {
  let environment_name = "environment_name_1110_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1110_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1110_" + Math.floor(Math.random() * 10000);
  createOrUpdateEnvironment(environment_name, owner, repo);
  verifyEnvironmentExists(environment_name, owner, repo);
  createOrUpdateEnvironment(environment_name, owner, repo);
  deleteEnvironment(environment_name, owner, repo);
  tryToDeleteANonExistingEnvironment(environment_name, owner, repo);
  verifyEnvironmentDoesNotExist(environment_name, owner, repo);
});

// Story: crud:Environment:linear:2
bthread("crud:Environment:linear:2", function () {
  let environment_name = "environment_name_1120_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1120_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1120_" + Math.floor(Math.random() * 10000);
  createOrUpdateEnvironment(environment_name, owner, repo);
  verifyEnvironmentExists(environment_name, owner, repo);
  createOrUpdateEnvironment(environment_name, owner, repo);
  deleteEnvironment(environment_name, owner, repo);
  tryToDeleteANonExistingEnvironment(environment_name, owner, repo);
  verifyEnvironmentDoesNotExist(environment_name, owner, repo);
});

// Story: crud:Environment:linear:3
bthread("crud:Environment:linear:3", function () {
  let environment_name = "environment_name_1130_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1130_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1130_" + Math.floor(Math.random() * 10000);
  createOrUpdateEnvironment(environment_name, owner, repo);
  verifyEnvironmentExists(environment_name, owner, repo);
  createOrUpdateEnvironment(environment_name, owner, repo);
  deleteEnvironment(environment_name, owner, repo);
  tryToDeleteANonExistingEnvironment(environment_name, owner, repo);
  verifyEnvironmentDoesNotExist(environment_name, owner, repo);
});

// Monitor: Environment Verification
bthread("monitor:Environment", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyEnvironmentAdded() });
    let environment_name = (e.data.parameters && e.data.parameters["environment_name"]) ? e.data.parameters["environment_name"] : e.data["environment_name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedEnvironment(environment_name, owner, repo), function() {
      bp.log.info(`Monitor Environment: Verifying persistence of ID ${id} inside deletion block.`);
        verifyEnvironmentExists(environment_name, owner, repo);
    });
  }
});

// Story: crud:DeploymentBranchPolicy:linear:1
bthread("crud:DeploymentBranchPolicy:linear:1", function () {
  let branch_policy_id = "branch_policy_id_1160_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_1160_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1160_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1160_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1160_" + Math.floor(Math.random() * 10000);
  createDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo);
  updateDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  deleteDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  tryToDeleteANonExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  verifyDeploymentBranchPolicyDoesNotExist(branch_policy_id, environment_name, name, owner, repo);
});

// Story: crud:DeploymentBranchPolicy:linear:2
bthread("crud:DeploymentBranchPolicy:linear:2", function () {
  let branch_policy_id = "branch_policy_id_1170_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_1170_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1170_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1170_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1170_" + Math.floor(Math.random() * 10000);
  createDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo);
  updateDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  deleteDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  tryToDeleteANonExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  verifyDeploymentBranchPolicyDoesNotExist(branch_policy_id, environment_name, name, owner, repo);
});

// Story: crud:DeploymentBranchPolicy:linear:3
bthread("crud:DeploymentBranchPolicy:linear:3", function () {
  let branch_policy_id = "branch_policy_id_1180_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_1180_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1180_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1180_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1180_" + Math.floor(Math.random() * 10000);
  createDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo);
  updateDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  deleteDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  tryToDeleteANonExistingDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo);
  verifyDeploymentBranchPolicyDoesNotExist(branch_policy_id, environment_name, name, owner, repo);
});

// Monitor: DeploymentBranchPolicy Verification
bthread("monitor:DeploymentBranchPolicy", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDeploymentBranchPolicyAdded() });
    let branch_policy_id = (e.data.parameters && e.data.parameters["branch_policy_id"]) ? e.data.parameters["branch_policy_id"] : e.data["branch_policy_id"];
    let environment_name = (e.data.parameters && e.data.parameters["environment_name"]) ? e.data.parameters["environment_name"] : e.data["environment_name"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDeploymentBranchPolicy(branch_policy_id, environment_name, name, owner, repo), function() {
      bp.log.info(`Monitor DeploymentBranchPolicy: Verifying persistence of ID ${id} inside deletion block.`);
        verifyDeploymentBranchPolicyExists(branch_policy_id, environment_name, name, owner, repo);
    });
  }
});

// Story: crud:RepositoryDispatchEvent:linear:1
bthread("crud:RepositoryDispatchEvent:linear:1", function () {
  let event_type = "event_type_1210_" + Math.floor(Math.random() * 10000);
  let id = "id_1210_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1210_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1210_" + Math.floor(Math.random() * 10000);
  createDispatchEvent(event_type, id, owner, repo);
});

// Story: crud:RepositoryDispatchEvent:linear:2
bthread("crud:RepositoryDispatchEvent:linear:2", function () {
  let event_type = "event_type_1220_" + Math.floor(Math.random() * 10000);
  let id = "id_1220_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1220_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1220_" + Math.floor(Math.random() * 10000);
  createDispatchEvent(event_type, id, owner, repo);
});

// Story: crud:RepositoryDispatchEvent:linear:3
bthread("crud:RepositoryDispatchEvent:linear:3", function () {
  let event_type = "event_type_1230_" + Math.floor(Math.random() * 10000);
  let id = "id_1230_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1230_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1230_" + Math.floor(Math.random() * 10000);
  createDispatchEvent(event_type, id, owner, repo);
});

// Story: crud:DeploymentProtectionRule:linear:1
bthread("crud:DeploymentProtectionRule:linear:1", function () {
  let comment = "comment_1260_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_1260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1260_" + Math.floor(Math.random() * 10000);
  let protection_rule_id = "protection_rule_id_1260_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1260_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_1260_" + Math.floor(Math.random() * 10000);
  let state = "state_1260_" + Math.floor(Math.random() * 10000);
  reviewDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  verifyDeploymentProtectionRuleExists(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  disableDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  tryToDeleteANonExistingDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  verifyDeploymentProtectionRuleDoesNotExist(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
});

// Story: crud:DeploymentProtectionRule:linear:2
bthread("crud:DeploymentProtectionRule:linear:2", function () {
  let comment = "comment_1270_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_1270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1270_" + Math.floor(Math.random() * 10000);
  let protection_rule_id = "protection_rule_id_1270_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1270_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_1270_" + Math.floor(Math.random() * 10000);
  let state = "state_1270_" + Math.floor(Math.random() * 10000);
  reviewDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  verifyDeploymentProtectionRuleExists(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  disableDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  tryToDeleteANonExistingDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  verifyDeploymentProtectionRuleDoesNotExist(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
});

// Story: crud:DeploymentProtectionRule:linear:3
bthread("crud:DeploymentProtectionRule:linear:3", function () {
  let comment = "comment_1280_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_1280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1280_" + Math.floor(Math.random() * 10000);
  let protection_rule_id = "protection_rule_id_1280_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1280_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_1280_" + Math.floor(Math.random() * 10000);
  let state = "state_1280_" + Math.floor(Math.random() * 10000);
  reviewDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  verifyDeploymentProtectionRuleExists(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  disableDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  tryToDeleteANonExistingDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
  verifyDeploymentProtectionRuleDoesNotExist(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
});

// Monitor: DeploymentProtectionRule Verification
bthread("monitor:DeploymentProtectionRule", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDeploymentProtectionRuleAdded() });
    let comment = (e.data.parameters && e.data.parameters["comment"]) ? e.data.parameters["comment"] : e.data["comment"];
    let environment_name = (e.data.parameters && e.data.parameters["environment_name"]) ? e.data.parameters["environment_name"] : e.data["environment_name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let protection_rule_id = (e.data.parameters && e.data.parameters["protection_rule_id"]) ? e.data.parameters["protection_rule_id"] : e.data["protection_rule_id"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let run_id = (e.data.parameters && e.data.parameters["run_id"]) ? e.data.parameters["run_id"] : e.data["run_id"];
    let state = (e.data.parameters && e.data.parameters["state"]) ? e.data.parameters["state"] : e.data["state"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDeploymentProtectionRule(comment, environment_name, owner, protection_rule_id, repo, run_id, state), function() {
      bp.log.info(`Monitor DeploymentProtectionRule: Verifying persistence of ID ${id} inside deletion block.`);
        verifyDeploymentProtectionRuleExists(comment, environment_name, owner, protection_rule_id, repo, run_id, state);
    });
  }
});

// Story: crud:Fork:linear:1
bthread("crud:Fork:linear:1", function () {
  let default_branch_only = "default_branch_only_1310_" + Math.floor(Math.random() * 10000);
  let id = "id_1310_" + Math.floor(Math.random() * 10000);
  let name = "name_1310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let organization = "organization_1310_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1310_" + Math.floor(Math.random() * 10000);
  let page = "page_1310_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_1310_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1310_" + Math.floor(Math.random() * 10000);
  let sort = "sort_1310_" + Math.floor(Math.random() * 10000);
  createFork(default_branch_only, id, name, organization, owner, page, per_page, repo, sort);
});

// Story: crud:Fork:linear:2
bthread("crud:Fork:linear:2", function () {
  let default_branch_only = "default_branch_only_1320_" + Math.floor(Math.random() * 10000);
  let id = "id_1320_" + Math.floor(Math.random() * 10000);
  let name = "name_1320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let organization = "organization_1320_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1320_" + Math.floor(Math.random() * 10000);
  let page = "page_1320_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_1320_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1320_" + Math.floor(Math.random() * 10000);
  let sort = "sort_1320_" + Math.floor(Math.random() * 10000);
  createFork(default_branch_only, id, name, organization, owner, page, per_page, repo, sort);
});

// Story: crud:Fork:linear:3
bthread("crud:Fork:linear:3", function () {
  let default_branch_only = "default_branch_only_1330_" + Math.floor(Math.random() * 10000);
  let id = "id_1330_" + Math.floor(Math.random() * 10000);
  let name = "name_1330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let organization = "organization_1330_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1330_" + Math.floor(Math.random() * 10000);
  let page = "page_1330_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_1330_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1330_" + Math.floor(Math.random() * 10000);
  let sort = "sort_1330_" + Math.floor(Math.random() * 10000);
  createFork(default_branch_only, id, name, organization, owner, page, per_page, repo, sort);
});

// Story: crud:Webhook:linear:1
bthread("crud:Webhook:linear:1", function () {
  let hook_id = "hook_id_1360_" + Math.floor(Math.random() * 10000);
  let name = "name_1360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_1360_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1360_" + Math.floor(Math.random() * 10000);
  let page = "page_1360_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_1360_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1360_" + Math.floor(Math.random() * 10000);
  let url = "url_1360_" + Math.floor(Math.random() * 10000);
  createWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  verifyWebhookExists(hook_id, name, org, owner, page, per_page, repo, url);
  updateWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  deleteWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  tryToDeleteANonExistingWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  verifyWebhookDoesNotExist(hook_id, name, org, owner, page, per_page, repo, url);
});

// Story: crud:Webhook:linear:2
bthread("crud:Webhook:linear:2", function () {
  let hook_id = "hook_id_1370_" + Math.floor(Math.random() * 10000);
  let name = "name_1370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_1370_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1370_" + Math.floor(Math.random() * 10000);
  let page = "page_1370_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_1370_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1370_" + Math.floor(Math.random() * 10000);
  let url = "url_1370_" + Math.floor(Math.random() * 10000);
  createWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  verifyWebhookExists(hook_id, name, org, owner, page, per_page, repo, url);
  updateWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  deleteWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  tryToDeleteANonExistingWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  verifyWebhookDoesNotExist(hook_id, name, org, owner, page, per_page, repo, url);
});

// Story: crud:Webhook:linear:3
bthread("crud:Webhook:linear:3", function () {
  let hook_id = "hook_id_1380_" + Math.floor(Math.random() * 10000);
  let name = "name_1380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_1380_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1380_" + Math.floor(Math.random() * 10000);
  let page = "page_1380_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_1380_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1380_" + Math.floor(Math.random() * 10000);
  let url = "url_1380_" + Math.floor(Math.random() * 10000);
  createWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  verifyWebhookExists(hook_id, name, org, owner, page, per_page, repo, url);
  updateWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  deleteWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  tryToDeleteANonExistingWebhook(hook_id, name, org, owner, page, per_page, repo, url);
  verifyWebhookDoesNotExist(hook_id, name, org, owner, page, per_page, repo, url);
});

// Monitor: Webhook Verification
bthread("monitor:Webhook", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWebhookAdded() });
    let hook_id = (e.data.parameters && e.data.parameters["hook_id"]) ? e.data.parameters["hook_id"] : e.data["hook_id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let per_page = (e.data.parameters && e.data.parameters["per_page"]) ? e.data.parameters["per_page"] : e.data["per_page"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let url = (e.data.parameters && e.data.parameters["url"]) ? e.data.parameters["url"] : e.data["url"];
    // Block Deletion while Verifying Existence
    block(matchDeletedWebhook(hook_id, name, org, owner, page, per_page, repo, url), function() {
      bp.log.info(`Monitor Webhook: Verifying persistence of ID ${id} inside deletion block.`);
        verifyWebhookExists(hook_id, name, org, owner, page, per_page, repo, url);
    });
  }
});

// Story: crud:WebhookDeliveryAttempt:linear:1
bthread("crud:WebhookDeliveryAttempt:linear:1", function () {
  let delivery_id = "delivery_id_1410_" + Math.floor(Math.random() * 10000);
  let hook_id = "hook_id_1410_" + Math.floor(Math.random() * 10000);
  let id = "id_1410_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1410_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1410_" + Math.floor(Math.random() * 10000);
  redeliverWebhookDelivery(delivery_id, hook_id, id, owner, repo);
});

// Story: crud:WebhookDeliveryAttempt:linear:2
bthread("crud:WebhookDeliveryAttempt:linear:2", function () {
  let delivery_id = "delivery_id_1420_" + Math.floor(Math.random() * 10000);
  let hook_id = "hook_id_1420_" + Math.floor(Math.random() * 10000);
  let id = "id_1420_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1420_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1420_" + Math.floor(Math.random() * 10000);
  redeliverWebhookDelivery(delivery_id, hook_id, id, owner, repo);
});

// Story: crud:WebhookDeliveryAttempt:linear:3
bthread("crud:WebhookDeliveryAttempt:linear:3", function () {
  let delivery_id = "delivery_id_1430_" + Math.floor(Math.random() * 10000);
  let hook_id = "hook_id_1430_" + Math.floor(Math.random() * 10000);
  let id = "id_1430_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1430_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1430_" + Math.floor(Math.random() * 10000);
  redeliverWebhookDelivery(delivery_id, hook_id, id, owner, repo);
});

// Story: crud:WebhookPing:linear:1
bthread("crud:WebhookPing:linear:1", function () {
  let hook_id = "hook_id_1460_" + Math.floor(Math.random() * 10000);
  let id = "id_1460_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1460_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1460_" + Math.floor(Math.random() * 10000);
  pingWebhook(hook_id, id, owner, repo);
});

// Story: crud:WebhookPing:linear:2
bthread("crud:WebhookPing:linear:2", function () {
  let hook_id = "hook_id_1470_" + Math.floor(Math.random() * 10000);
  let id = "id_1470_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1470_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1470_" + Math.floor(Math.random() * 10000);
  pingWebhook(hook_id, id, owner, repo);
});

// Story: crud:WebhookPing:linear:3
bthread("crud:WebhookPing:linear:3", function () {
  let hook_id = "hook_id_1480_" + Math.floor(Math.random() * 10000);
  let id = "id_1480_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1480_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1480_" + Math.floor(Math.random() * 10000);
  pingWebhook(hook_id, id, owner, repo);
});

// Story: crud:WebhookTest:linear:1
bthread("crud:WebhookTest:linear:1", function () {
  let hook_id = "hook_id_1510_" + Math.floor(Math.random() * 10000);
  let id = "id_1510_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1510_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1510_" + Math.floor(Math.random() * 10000);
  testPushWebhook(hook_id, id, owner, repo);
});

// Story: crud:WebhookTest:linear:2
bthread("crud:WebhookTest:linear:2", function () {
  let hook_id = "hook_id_1520_" + Math.floor(Math.random() * 10000);
  let id = "id_1520_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1520_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1520_" + Math.floor(Math.random() * 10000);
  testPushWebhook(hook_id, id, owner, repo);
});

// Story: crud:WebhookTest:linear:3
bthread("crud:WebhookTest:linear:3", function () {
  let hook_id = "hook_id_1530_" + Math.floor(Math.random() * 10000);
  let id = "id_1530_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1530_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1530_" + Math.floor(Math.random() * 10000);
  testPushWebhook(hook_id, id, owner, repo);
});

// Story: crud:DeployKey:linear:1
bthread("crud:DeployKey:linear:1", function () {
  let key = "key_1560_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_1560_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1560_" + Math.floor(Math.random() * 10000);
  let read_only = "read_only_1560_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1560_" + Math.floor(Math.random() * 10000);
  let title = "title_1560_" + Math.floor(Math.random() * 10000);
  createDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyExists(key, key_id, owner, read_only, repo, title);
  deleteDeployKey(key, key_id, owner, read_only, repo, title);
  tryToDeleteANonExistingDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyDoesNotExist(key, key_id, owner, read_only, repo, title);
});

// Story: crud:DeployKey:linear:2
bthread("crud:DeployKey:linear:2", function () {
  let key = "key_1570_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_1570_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1570_" + Math.floor(Math.random() * 10000);
  let read_only = "read_only_1570_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1570_" + Math.floor(Math.random() * 10000);
  let title = "title_1570_" + Math.floor(Math.random() * 10000);
  createDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyExists(key, key_id, owner, read_only, repo, title);
  deleteDeployKey(key, key_id, owner, read_only, repo, title);
  tryToDeleteANonExistingDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyDoesNotExist(key, key_id, owner, read_only, repo, title);
});

// Story: crud:DeployKey:linear:3
bthread("crud:DeployKey:linear:3", function () {
  let key = "key_1580_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_1580_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1580_" + Math.floor(Math.random() * 10000);
  let read_only = "read_only_1580_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1580_" + Math.floor(Math.random() * 10000);
  let title = "title_1580_" + Math.floor(Math.random() * 10000);
  createDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyExists(key, key_id, owner, read_only, repo, title);
  deleteDeployKey(key, key_id, owner, read_only, repo, title);
  tryToDeleteANonExistingDeployKey(key, key_id, owner, read_only, repo, title);
  verifyDeployKeyDoesNotExist(key, key_id, owner, read_only, repo, title);
});

// Monitor: DeployKey Verification
bthread("monitor:DeployKey", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDeployKeyAdded() });
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let read_only = (e.data.parameters && e.data.parameters["read_only"]) ? e.data.parameters["read_only"] : e.data["read_only"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDeployKey(key, key_id, owner, read_only, repo, title), function() {
      bp.log.info(`Monitor DeployKey: Verifying persistence of ID ${id} inside deletion block.`);
        verifyDeployKeyExists(key, key_id, owner, read_only, repo, title);
    });
  }
});

// Story: crud:MergeUpstream:linear:1
bthread("crud:MergeUpstream:linear:1", function () {
  let branch = "branch_1610_" + Math.floor(Math.random() * 10000);
  let id = "id_1610_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1610_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1610_" + Math.floor(Math.random() * 10000);
  mergeUpstream(branch, id, owner, repo);
});

// Story: crud:MergeUpstream:linear:2
bthread("crud:MergeUpstream:linear:2", function () {
  let branch = "branch_1620_" + Math.floor(Math.random() * 10000);
  let id = "id_1620_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1620_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1620_" + Math.floor(Math.random() * 10000);
  mergeUpstream(branch, id, owner, repo);
});

// Story: crud:MergeUpstream:linear:3
bthread("crud:MergeUpstream:linear:3", function () {
  let branch = "branch_1630_" + Math.floor(Math.random() * 10000);
  let id = "id_1630_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1630_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1630_" + Math.floor(Math.random() * 10000);
  mergeUpstream(branch, id, owner, repo);
});

// Story: crud:Merge:linear:1
bthread("crud:Merge:linear:1", function () {
  let base = "base_1660_" + Math.floor(Math.random() * 10000);
  let commit_message = "commit_message_1660_" + Math.floor(Math.random() * 10000);
  let head = "head_1660_" + Math.floor(Math.random() * 10000);
  let id = "id_1660_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1660_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1660_" + Math.floor(Math.random() * 10000);
  createMerge(base, commit_message, head, id, owner, repo);
});

// Story: crud:Merge:linear:2
bthread("crud:Merge:linear:2", function () {
  let base = "base_1670_" + Math.floor(Math.random() * 10000);
  let commit_message = "commit_message_1670_" + Math.floor(Math.random() * 10000);
  let head = "head_1670_" + Math.floor(Math.random() * 10000);
  let id = "id_1670_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1670_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1670_" + Math.floor(Math.random() * 10000);
  createMerge(base, commit_message, head, id, owner, repo);
});

// Story: crud:Merge:linear:3
bthread("crud:Merge:linear:3", function () {
  let base = "base_1680_" + Math.floor(Math.random() * 10000);
  let commit_message = "commit_message_1680_" + Math.floor(Math.random() * 10000);
  let head = "head_1680_" + Math.floor(Math.random() * 10000);
  let id = "id_1680_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1680_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1680_" + Math.floor(Math.random() * 10000);
  createMerge(base, commit_message, head, id, owner, repo);
});

// Story: crud:PagesSite:linear:1
bthread("crud:PagesSite:linear:1", function () {
  let build_type = "build_type_1710_" + Math.floor(Math.random() * 10000);
  let cname = "cname_1710_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let https_enforced = "https_enforced_1710_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1710_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1710_" + Math.floor(Math.random() * 10000);
  let source_branch = "source.branch_1710_" + Math.floor(Math.random() * 10000);
  let source_path = "source.path_1710_" + Math.floor(Math.random() * 10000);
  createPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  updatePagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  deletePagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  tryToDeleteANonExistingPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  verifyPagesSiteDoesNotExist(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
});

// Story: crud:PagesSite:linear:2
bthread("crud:PagesSite:linear:2", function () {
  let build_type = "build_type_1720_" + Math.floor(Math.random() * 10000);
  let cname = "cname_1720_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let https_enforced = "https_enforced_1720_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1720_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1720_" + Math.floor(Math.random() * 10000);
  let source_branch = "source.branch_1720_" + Math.floor(Math.random() * 10000);
  let source_path = "source.path_1720_" + Math.floor(Math.random() * 10000);
  createPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  updatePagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  deletePagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  tryToDeleteANonExistingPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  verifyPagesSiteDoesNotExist(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
});

// Story: crud:PagesSite:linear:3
bthread("crud:PagesSite:linear:3", function () {
  let build_type = "build_type_1730_" + Math.floor(Math.random() * 10000);
  let cname = "cname_1730_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let https_enforced = "https_enforced_1730_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1730_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1730_" + Math.floor(Math.random() * 10000);
  let source_branch = "source.branch_1730_" + Math.floor(Math.random() * 10000);
  let source_path = "source.path_1730_" + Math.floor(Math.random() * 10000);
  createPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  updatePagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  deletePagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  tryToDeleteANonExistingPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
  verifyPagesSiteDoesNotExist(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
});

// Monitor: PagesSite Verification
bthread("monitor:PagesSite", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPagesSiteAdded() });
    let build_type = (e.data.parameters && e.data.parameters["build_type"]) ? e.data.parameters["build_type"] : e.data["build_type"];
    let cname = (e.data.parameters && e.data.parameters["cname"]) ? e.data.parameters["cname"] : e.data["cname"];
    let https_enforced = (e.data.parameters && e.data.parameters["https_enforced"]) ? e.data.parameters["https_enforced"] : e.data["https_enforced"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let source_branch = (e.data.parameters && e.data.parameters["source.branch"]) ? e.data.parameters["source.branch"] : e.data["source.branch"];
    let source_path = (e.data.parameters && e.data.parameters["source.path"]) ? e.data.parameters["source.path"] : e.data["source.path"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPagesSite(build_type, cname, https_enforced, owner, repo, source_branch, source_path), function() {
      bp.log.info(`Monitor PagesSite: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPagesSiteExists(build_type, cname, https_enforced, owner, repo, source_branch, source_path);
    });
  }
});

// Story: crud:PagesBuild:linear:1
bthread("crud:PagesBuild:linear:1", function () {
  let build_id = "build_id_1760_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1760_" + Math.floor(Math.random() * 10000);
  let page = "page_1760_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_1760_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1760_" + Math.floor(Math.random() * 10000);
  requestPagesBuild(build_id, owner, page, per_page, repo);
});

// Story: crud:PagesBuild:linear:2
bthread("crud:PagesBuild:linear:2", function () {
  let build_id = "build_id_1770_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1770_" + Math.floor(Math.random() * 10000);
  let page = "page_1770_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_1770_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1770_" + Math.floor(Math.random() * 10000);
  requestPagesBuild(build_id, owner, page, per_page, repo);
});

// Story: crud:PagesBuild:linear:3
bthread("crud:PagesBuild:linear:3", function () {
  let build_id = "build_id_1780_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1780_" + Math.floor(Math.random() * 10000);
  let page = "page_1780_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_1780_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1780_" + Math.floor(Math.random() * 10000);
  requestPagesBuild(build_id, owner, page, per_page, repo);
});

// Story: crud:PagesDeployment:linear:1
bthread("crud:PagesDeployment:linear:1", function () {
  let artifact_id = "artifact_id_1810_" + Math.floor(Math.random() * 10000);
  let artifact_url = "artifact_url_1810_" + Math.floor(Math.random() * 10000);
  let environment = "environment_1810_" + Math.floor(Math.random() * 10000);
  let oidc_token = "oidc_token_1810_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1810_" + Math.floor(Math.random() * 10000);
  let pages_build_version = "pages_build_version_1810_" + Math.floor(Math.random() * 10000);
  let pages_deployment_id = "pages_deployment_id_1810_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1810_" + Math.floor(Math.random() * 10000);
  createPagesDeployment(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo);
});

// Story: crud:PagesDeployment:linear:2
bthread("crud:PagesDeployment:linear:2", function () {
  let artifact_id = "artifact_id_1820_" + Math.floor(Math.random() * 10000);
  let artifact_url = "artifact_url_1820_" + Math.floor(Math.random() * 10000);
  let environment = "environment_1820_" + Math.floor(Math.random() * 10000);
  let oidc_token = "oidc_token_1820_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1820_" + Math.floor(Math.random() * 10000);
  let pages_build_version = "pages_build_version_1820_" + Math.floor(Math.random() * 10000);
  let pages_deployment_id = "pages_deployment_id_1820_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1820_" + Math.floor(Math.random() * 10000);
  createPagesDeployment(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo);
});

// Story: crud:PagesDeployment:linear:3
bthread("crud:PagesDeployment:linear:3", function () {
  let artifact_id = "artifact_id_1830_" + Math.floor(Math.random() * 10000);
  let artifact_url = "artifact_url_1830_" + Math.floor(Math.random() * 10000);
  let environment = "environment_1830_" + Math.floor(Math.random() * 10000);
  let oidc_token = "oidc_token_1830_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1830_" + Math.floor(Math.random() * 10000);
  let pages_build_version = "pages_build_version_1830_" + Math.floor(Math.random() * 10000);
  let pages_deployment_id = "pages_deployment_id_1830_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1830_" + Math.floor(Math.random() * 10000);
  createPagesDeployment(artifact_id, artifact_url, environment, oidc_token, owner, pages_build_version, pages_deployment_id, repo);
});

// Story: crud:Release:linear:1
bthread("crud:Release:linear:1", function () {
  let body = "body_1860_" + Math.floor(Math.random() * 10000);
  let discussion_category_name = "discussion_category_name_1860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let draft = "draft_1860_" + Math.floor(Math.random() * 10000);
  let generate_release_notes = "generate_release_notes_1860_" + Math.floor(Math.random() * 10000);
  let make_latest = "make_latest_1860_" + Math.floor(Math.random() * 10000);
  let name = "name_1860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1860_" + Math.floor(Math.random() * 10000);
  let prerelease = "prerelease_1860_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_1860_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1860_" + Math.floor(Math.random() * 10000);
  let tag_name = "tag_name_1860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let target_commitish = "target_commitish_1860_" + Math.floor(Math.random() * 10000);
  createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  updateRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  deleteRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToDeleteANonExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseDoesNotExist(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
});

// Story: crud:Release:linear:2
bthread("crud:Release:linear:2", function () {
  let body = "body_1870_" + Math.floor(Math.random() * 10000);
  let discussion_category_name = "discussion_category_name_1870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let draft = "draft_1870_" + Math.floor(Math.random() * 10000);
  let generate_release_notes = "generate_release_notes_1870_" + Math.floor(Math.random() * 10000);
  let make_latest = "make_latest_1870_" + Math.floor(Math.random() * 10000);
  let name = "name_1870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1870_" + Math.floor(Math.random() * 10000);
  let prerelease = "prerelease_1870_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_1870_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1870_" + Math.floor(Math.random() * 10000);
  let tag_name = "tag_name_1870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let target_commitish = "target_commitish_1870_" + Math.floor(Math.random() * 10000);
  createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  updateRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  deleteRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToDeleteANonExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseDoesNotExist(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
});

// Story: crud:Release:linear:3
bthread("crud:Release:linear:3", function () {
  let body = "body_1880_" + Math.floor(Math.random() * 10000);
  let discussion_category_name = "discussion_category_name_1880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let draft = "draft_1880_" + Math.floor(Math.random() * 10000);
  let generate_release_notes = "generate_release_notes_1880_" + Math.floor(Math.random() * 10000);
  let make_latest = "make_latest_1880_" + Math.floor(Math.random() * 10000);
  let name = "name_1880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1880_" + Math.floor(Math.random() * 10000);
  let prerelease = "prerelease_1880_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_1880_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1880_" + Math.floor(Math.random() * 10000);
  let tag_name = "tag_name_1880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let target_commitish = "target_commitish_1880_" + Math.floor(Math.random() * 10000);
  createRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  updateRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  deleteRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  tryToDeleteANonExistingRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
  verifyReleaseDoesNotExist(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
});

// Monitor: Release Verification
bthread("monitor:Release", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleaseAdded() });
    let body = (e.data.parameters && e.data.parameters["body"]) ? e.data.parameters["body"] : e.data["body"];
    let discussion_category_name = (e.data.parameters && e.data.parameters["discussion_category_name"]) ? e.data.parameters["discussion_category_name"] : e.data["discussion_category_name"];
    let draft = (e.data.parameters && e.data.parameters["draft"]) ? e.data.parameters["draft"] : e.data["draft"];
    let generate_release_notes = (e.data.parameters && e.data.parameters["generate_release_notes"]) ? e.data.parameters["generate_release_notes"] : e.data["generate_release_notes"];
    let make_latest = (e.data.parameters && e.data.parameters["make_latest"]) ? e.data.parameters["make_latest"] : e.data["make_latest"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let prerelease = (e.data.parameters && e.data.parameters["prerelease"]) ? e.data.parameters["prerelease"] : e.data["prerelease"];
    let release_id = (e.data.parameters && e.data.parameters["release_id"]) ? e.data.parameters["release_id"] : e.data["release_id"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let tag_name = (e.data.parameters && e.data.parameters["tag_name"]) ? e.data.parameters["tag_name"] : e.data["tag_name"];
    let target_commitish = (e.data.parameters && e.data.parameters["target_commitish"]) ? e.data.parameters["target_commitish"] : e.data["target_commitish"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRelease(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish), function() {
      bp.log.info(`Monitor Release: Verifying persistence of ID ${id} inside deletion block.`);
        verifyReleaseExists(body, discussion_category_name, draft, generate_release_notes, make_latest, name, owner, prerelease, release_id, repo, tag_name, target_commitish);
    });
  }
});

// Story: crud:ReleaseAsset:linear:1
bthread("crud:ReleaseAsset:linear:1", function () {
  let asset_id = "asset_id_1910_" + Math.floor(Math.random() * 10000);
  let file = "file_1910_" + Math.floor(Math.random() * 10000);
  let label = "label_1910_" + Math.floor(Math.random() * 10000);
  let name = "name_1910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1910_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_1910_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1910_" + Math.floor(Math.random() * 10000);
  let state = "state_1910_" + Math.floor(Math.random() * 10000);
  uploadReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  verifyReleaseAssetExists(asset_id, file, label, name, owner, release_id, repo, state);
  updateReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  deleteReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  tryToDeleteANonExistingReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  verifyReleaseAssetDoesNotExist(asset_id, file, label, name, owner, release_id, repo, state);
});

// Story: crud:ReleaseAsset:linear:2
bthread("crud:ReleaseAsset:linear:2", function () {
  let asset_id = "asset_id_1920_" + Math.floor(Math.random() * 10000);
  let file = "file_1920_" + Math.floor(Math.random() * 10000);
  let label = "label_1920_" + Math.floor(Math.random() * 10000);
  let name = "name_1920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1920_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_1920_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1920_" + Math.floor(Math.random() * 10000);
  let state = "state_1920_" + Math.floor(Math.random() * 10000);
  uploadReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  verifyReleaseAssetExists(asset_id, file, label, name, owner, release_id, repo, state);
  updateReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  deleteReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  tryToDeleteANonExistingReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  verifyReleaseAssetDoesNotExist(asset_id, file, label, name, owner, release_id, repo, state);
});

// Story: crud:ReleaseAsset:linear:3
bthread("crud:ReleaseAsset:linear:3", function () {
  let asset_id = "asset_id_1930_" + Math.floor(Math.random() * 10000);
  let file = "file_1930_" + Math.floor(Math.random() * 10000);
  let label = "label_1930_" + Math.floor(Math.random() * 10000);
  let name = "name_1930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1930_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_1930_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1930_" + Math.floor(Math.random() * 10000);
  let state = "state_1930_" + Math.floor(Math.random() * 10000);
  uploadReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  verifyReleaseAssetExists(asset_id, file, label, name, owner, release_id, repo, state);
  updateReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  deleteReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  tryToDeleteANonExistingReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state);
  verifyReleaseAssetDoesNotExist(asset_id, file, label, name, owner, release_id, repo, state);
});

// Monitor: ReleaseAsset Verification
bthread("monitor:ReleaseAsset", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleaseAssetAdded() });
    let asset_id = (e.data.parameters && e.data.parameters["asset_id"]) ? e.data.parameters["asset_id"] : e.data["asset_id"];
    let file = (e.data.parameters && e.data.parameters["file"]) ? e.data.parameters["file"] : e.data["file"];
    let label = (e.data.parameters && e.data.parameters["label"]) ? e.data.parameters["label"] : e.data["label"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let release_id = (e.data.parameters && e.data.parameters["release_id"]) ? e.data.parameters["release_id"] : e.data["release_id"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let state = (e.data.parameters && e.data.parameters["state"]) ? e.data.parameters["state"] : e.data["state"];
    // Block Deletion while Verifying Existence
    block(matchDeletedReleaseAsset(asset_id, file, label, name, owner, release_id, repo, state), function() {
      bp.log.info(`Monitor ReleaseAsset: Verifying persistence of ID ${id} inside deletion block.`);
        verifyReleaseAssetExists(asset_id, file, label, name, owner, release_id, repo, state);
    });
  }
});

// Story: crud:RepositoryRuleset:linear:1
bthread("crud:RepositoryRuleset:linear:1", function () {
  let bypass_actors = "bypass_actors_1960_" + Math.floor(Math.random() * 10000);
  let conditions = "conditions_1960_" + Math.floor(Math.random() * 10000);
  let enforcement = "enforcement_1960_" + Math.floor(Math.random() * 10000);
  let name = "name_1960_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1960_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1960_" + Math.floor(Math.random() * 10000);
  let rules = "rules_1960_" + Math.floor(Math.random() * 10000);
  let ruleset_id = "ruleset_id_1960_" + Math.floor(Math.random() * 10000);
  let target = "target_1960_" + Math.floor(Math.random() * 10000);
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  updateRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  deleteRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  tryToDeleteANonExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
});

// Story: crud:RepositoryRuleset:linear:2
bthread("crud:RepositoryRuleset:linear:2", function () {
  let bypass_actors = "bypass_actors_1970_" + Math.floor(Math.random() * 10000);
  let conditions = "conditions_1970_" + Math.floor(Math.random() * 10000);
  let enforcement = "enforcement_1970_" + Math.floor(Math.random() * 10000);
  let name = "name_1970_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1970_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1970_" + Math.floor(Math.random() * 10000);
  let rules = "rules_1970_" + Math.floor(Math.random() * 10000);
  let ruleset_id = "ruleset_id_1970_" + Math.floor(Math.random() * 10000);
  let target = "target_1970_" + Math.floor(Math.random() * 10000);
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  updateRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  deleteRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  tryToDeleteANonExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
});

// Story: crud:RepositoryRuleset:linear:3
bthread("crud:RepositoryRuleset:linear:3", function () {
  let bypass_actors = "bypass_actors_1980_" + Math.floor(Math.random() * 10000);
  let conditions = "conditions_1980_" + Math.floor(Math.random() * 10000);
  let enforcement = "enforcement_1980_" + Math.floor(Math.random() * 10000);
  let name = "name_1980_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_1980_" + Math.floor(Math.random() * 10000);
  let repo = "repo_1980_" + Math.floor(Math.random() * 10000);
  let rules = "rules_1980_" + Math.floor(Math.random() * 10000);
  let ruleset_id = "ruleset_id_1980_" + Math.floor(Math.random() * 10000);
  let target = "target_1980_" + Math.floor(Math.random() * 10000);
  createRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  updateRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  deleteRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  tryToDeleteANonExistingRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
  verifyRepositoryRulesetDoesNotExist(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
});

// Monitor: RepositoryRuleset Verification
bthread("monitor:RepositoryRuleset", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryRulesetAdded() });
    let bypass_actors = (e.data.parameters && e.data.parameters["bypass_actors"]) ? e.data.parameters["bypass_actors"] : e.data["bypass_actors"];
    let conditions = (e.data.parameters && e.data.parameters["conditions"]) ? e.data.parameters["conditions"] : e.data["conditions"];
    let enforcement = (e.data.parameters && e.data.parameters["enforcement"]) ? e.data.parameters["enforcement"] : e.data["enforcement"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let rules = (e.data.parameters && e.data.parameters["rules"]) ? e.data.parameters["rules"] : e.data["rules"];
    let ruleset_id = (e.data.parameters && e.data.parameters["ruleset_id"]) ? e.data.parameters["ruleset_id"] : e.data["ruleset_id"];
    let target = (e.data.parameters && e.data.parameters["target"]) ? e.data.parameters["target"] : e.data["target"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepositoryRuleset(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target), function() {
      bp.log.info(`Monitor RepositoryRuleset: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRepositoryRulesetExists(bypass_actors, conditions, enforcement, name, owner, repo, rules, ruleset_id, target);
    });
  }
});

// Story: crud:CommitStatus:linear:1
bthread("crud:CommitStatus:linear:1", function () {
  let context = "context_2010_" + Math.floor(Math.random() * 10000);
  let description = "description_2010_" + Math.floor(Math.random() * 10000);
  let id = "id_2010_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2010_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2010_" + Math.floor(Math.random() * 10000);
  let sha = "sha_2010_" + Math.floor(Math.random() * 10000);
  let state = "state_2010_" + Math.floor(Math.random() * 10000);
  let target_url = "target_url_2010_" + Math.floor(Math.random() * 10000);
  createCommitStatus(context, description, id, owner, repo, sha, state, target_url);
});

// Story: crud:CommitStatus:linear:2
bthread("crud:CommitStatus:linear:2", function () {
  let context = "context_2020_" + Math.floor(Math.random() * 10000);
  let description = "description_2020_" + Math.floor(Math.random() * 10000);
  let id = "id_2020_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2020_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2020_" + Math.floor(Math.random() * 10000);
  let sha = "sha_2020_" + Math.floor(Math.random() * 10000);
  let state = "state_2020_" + Math.floor(Math.random() * 10000);
  let target_url = "target_url_2020_" + Math.floor(Math.random() * 10000);
  createCommitStatus(context, description, id, owner, repo, sha, state, target_url);
});

// Story: crud:CommitStatus:linear:3
bthread("crud:CommitStatus:linear:3", function () {
  let context = "context_2030_" + Math.floor(Math.random() * 10000);
  let description = "description_2030_" + Math.floor(Math.random() * 10000);
  let id = "id_2030_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2030_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2030_" + Math.floor(Math.random() * 10000);
  let sha = "sha_2030_" + Math.floor(Math.random() * 10000);
  let state = "state_2030_" + Math.floor(Math.random() * 10000);
  let target_url = "target_url_2030_" + Math.floor(Math.random() * 10000);
  createCommitStatus(context, description, id, owner, repo, sha, state, target_url);
});

// Story: crud:TagProtection:linear:1
bthread("crud:TagProtection:linear:1", function () {
  let owner = "owner_2060_" + Math.floor(Math.random() * 10000);
  let pattern = "pattern_2060_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2060_" + Math.floor(Math.random() * 10000);
  let tag_protection_id = "tag_protection_id_2060_" + Math.floor(Math.random() * 10000);
  createTagProtection(owner, pattern, repo, tag_protection_id);
});

// Story: crud:TagProtection:linear:2
bthread("crud:TagProtection:linear:2", function () {
  let owner = "owner_2070_" + Math.floor(Math.random() * 10000);
  let pattern = "pattern_2070_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2070_" + Math.floor(Math.random() * 10000);
  let tag_protection_id = "tag_protection_id_2070_" + Math.floor(Math.random() * 10000);
  createTagProtection(owner, pattern, repo, tag_protection_id);
});

// Story: crud:TagProtection:linear:3
bthread("crud:TagProtection:linear:3", function () {
  let owner = "owner_2080_" + Math.floor(Math.random() * 10000);
  let pattern = "pattern_2080_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2080_" + Math.floor(Math.random() * 10000);
  let tag_protection_id = "tag_protection_id_2080_" + Math.floor(Math.random() * 10000);
  createTagProtection(owner, pattern, repo, tag_protection_id);
});

// Story: crud:RepositoryTemplate:linear:1
bthread("crud:RepositoryTemplate:linear:1", function () {
  let description = "description_2110_" + Math.floor(Math.random() * 10000);
  let id = "id_2110_" + Math.floor(Math.random() * 10000);
  let include_all_branches = "include_all_branches_2110_" + Math.floor(Math.random() * 10000);
  let name = "name_2110_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2110_" + Math.floor(Math.random() * 10000);
  let _private = "private_2110_" + Math.floor(Math.random() * 10000);
  let template_owner = "template_owner_2110_" + Math.floor(Math.random() * 10000);
  let template_repo = "template_repo_2110_" + Math.floor(Math.random() * 10000);
  createRepositoryUsingTemplate(description, id, include_all_branches, name, owner, _private, template_owner, template_repo);
});

// Story: crud:RepositoryTemplate:linear:2
bthread("crud:RepositoryTemplate:linear:2", function () {
  let description = "description_2120_" + Math.floor(Math.random() * 10000);
  let id = "id_2120_" + Math.floor(Math.random() * 10000);
  let include_all_branches = "include_all_branches_2120_" + Math.floor(Math.random() * 10000);
  let name = "name_2120_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2120_" + Math.floor(Math.random() * 10000);
  let _private = "private_2120_" + Math.floor(Math.random() * 10000);
  let template_owner = "template_owner_2120_" + Math.floor(Math.random() * 10000);
  let template_repo = "template_repo_2120_" + Math.floor(Math.random() * 10000);
  createRepositoryUsingTemplate(description, id, include_all_branches, name, owner, _private, template_owner, template_repo);
});

// Story: crud:RepositoryTemplate:linear:3
bthread("crud:RepositoryTemplate:linear:3", function () {
  let description = "description_2130_" + Math.floor(Math.random() * 10000);
  let id = "id_2130_" + Math.floor(Math.random() * 10000);
  let include_all_branches = "include_all_branches_2130_" + Math.floor(Math.random() * 10000);
  let name = "name_2130_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2130_" + Math.floor(Math.random() * 10000);
  let _private = "private_2130_" + Math.floor(Math.random() * 10000);
  let template_owner = "template_owner_2130_" + Math.floor(Math.random() * 10000);
  let template_repo = "template_repo_2130_" + Math.floor(Math.random() * 10000);
  createRepositoryUsingTemplate(description, id, include_all_branches, name, owner, _private, template_owner, template_repo);
});

// Story: crud:HostedRunner:linear:1
bthread("crud:HostedRunner:linear:1", function () {
  let enable_static_ip = "enable_static_ip_2160_" + Math.floor(Math.random() * 10000);
  let hosted_runner_id = "hosted_runner_id_2160_" + Math.floor(Math.random() * 10000);
  let id = "id_2160_" + Math.floor(Math.random() * 10000);
  let maximum_runners = "maximum_runners_2160_" + Math.floor(Math.random() * 10000);
  let name = "name_2160_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2160_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2160_" + Math.floor(Math.random() * 10000);
  let size = "size_2160_" + Math.floor(Math.random() * 10000);
  let source = "source_2160_" + Math.floor(Math.random() * 10000);
  createHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  updateHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  deleteHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  tryToDeleteANonExistingHostedRunner(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  verifyHostedRunnerDoesNotExist(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
});

// Story: crud:HostedRunner:linear:2
bthread("crud:HostedRunner:linear:2", function () {
  let enable_static_ip = "enable_static_ip_2170_" + Math.floor(Math.random() * 10000);
  let hosted_runner_id = "hosted_runner_id_2170_" + Math.floor(Math.random() * 10000);
  let id = "id_2170_" + Math.floor(Math.random() * 10000);
  let maximum_runners = "maximum_runners_2170_" + Math.floor(Math.random() * 10000);
  let name = "name_2170_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2170_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2170_" + Math.floor(Math.random() * 10000);
  let size = "size_2170_" + Math.floor(Math.random() * 10000);
  let source = "source_2170_" + Math.floor(Math.random() * 10000);
  createHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  updateHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  deleteHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  tryToDeleteANonExistingHostedRunner(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  verifyHostedRunnerDoesNotExist(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
});

// Story: crud:HostedRunner:linear:3
bthread("crud:HostedRunner:linear:3", function () {
  let enable_static_ip = "enable_static_ip_2180_" + Math.floor(Math.random() * 10000);
  let hosted_runner_id = "hosted_runner_id_2180_" + Math.floor(Math.random() * 10000);
  let id = "id_2180_" + Math.floor(Math.random() * 10000);
  let maximum_runners = "maximum_runners_2180_" + Math.floor(Math.random() * 10000);
  let name = "name_2180_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2180_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2180_" + Math.floor(Math.random() * 10000);
  let size = "size_2180_" + Math.floor(Math.random() * 10000);
  let source = "source_2180_" + Math.floor(Math.random() * 10000);
  createHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  updateHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  deleteHostedRunnerForOrg(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  tryToDeleteANonExistingHostedRunner(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
  verifyHostedRunnerDoesNotExist(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
});

// Monitor: HostedRunner Verification
bthread("monitor:HostedRunner", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyHostedRunnerAdded() });
    let enable_static_ip = (e.data.parameters && e.data.parameters["enable_static_ip"]) ? e.data.parameters["enable_static_ip"] : e.data["enable_static_ip"];
    let hosted_runner_id = (e.data.parameters && e.data.parameters["hosted_runner_id"]) ? e.data.parameters["hosted_runner_id"] : e.data["hosted_runner_id"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let maximum_runners = (e.data.parameters && e.data.parameters["maximum_runners"]) ? e.data.parameters["maximum_runners"] : e.data["maximum_runners"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let runner_group_id = (e.data.parameters && e.data.parameters["runner_group_id"]) ? e.data.parameters["runner_group_id"] : e.data["runner_group_id"];
    let size = (e.data.parameters && e.data.parameters["size"]) ? e.data.parameters["size"] : e.data["size"];
    let source = (e.data.parameters && e.data.parameters["source"]) ? e.data.parameters["source"] : e.data["source"];
    // Block Deletion while Verifying Existence
    block(matchDeletedHostedRunner(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source), function() {
      bp.log.info(`Monitor HostedRunner: Verifying persistence of ID ${id} inside deletion block.`);
        verifyHostedRunnerExists(enable_static_ip, hosted_runner_id, id, maximum_runners, name, org, runner_group_id, size, source);
    });
  }
});

// Story: crud:Repositories:linear:1
bthread("crud:Repositories:linear:1", function () {
  let org = "org_2210_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2210_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2210_" + Math.floor(Math.random() * 10000);
  enableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  verifyRepositoriesExists(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesEnabledGithubActionsOrganization(org, repository_id, selected_repository_ids);
  disableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingRepositories(org, repository_id, selected_repository_ids);
  verifyRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Story: crud:Repositories:linear:2
bthread("crud:Repositories:linear:2", function () {
  let org = "org_2220_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2220_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2220_" + Math.floor(Math.random() * 10000);
  enableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  verifyRepositoriesExists(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesEnabledGithubActionsOrganization(org, repository_id, selected_repository_ids);
  disableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingRepositories(org, repository_id, selected_repository_ids);
  verifyRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Story: crud:Repositories:linear:3
bthread("crud:Repositories:linear:3", function () {
  let org = "org_2230_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2230_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2230_" + Math.floor(Math.random() * 10000);
  enableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  verifyRepositoriesExists(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesEnabledGithubActionsOrganization(org, repository_id, selected_repository_ids);
  disableSelectedRepositoryGithubActionsOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingRepositories(org, repository_id, selected_repository_ids);
  verifyRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Monitor: Repositories Verification
bthread("monitor:Repositories", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoriesAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let repository_id = (e.data.parameters && e.data.parameters["repository_id"]) ? e.data.parameters["repository_id"] : e.data["repository_id"];
    let selected_repository_ids = (e.data.parameters && e.data.parameters["selected_repository_ids"]) ? e.data.parameters["selected_repository_ids"] : e.data["selected_repository_ids"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepositories(org, repository_id, selected_repository_ids), function() {
      bp.log.info(`Monitor Repositories: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRepositoriesExists(org, repository_id, selected_repository_ids);
    });
  }
});

// Story: crud:SelfHostedRunnersRepositories:linear:1
bthread("crud:SelfHostedRunnersRepositories:linear:1", function () {
  let org = "org_2260_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2260_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2260_" + Math.floor(Math.random() * 10000);
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesSelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  disableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Story: crud:SelfHostedRunnersRepositories:linear:2
bthread("crud:SelfHostedRunnersRepositories:linear:2", function () {
  let org = "org_2270_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2270_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2270_" + Math.floor(Math.random() * 10000);
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesSelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  disableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Story: crud:SelfHostedRunnersRepositories:linear:3
bthread("crud:SelfHostedRunnersRepositories:linear:3", function () {
  let org = "org_2280_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2280_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2280_" + Math.floor(Math.random() * 10000);
  enableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids);
  setSelectedRepositoriesSelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  disableSelectedRepositorySelfHostedRunnersOrganization(org, repository_id, selected_repository_ids);
  tryToDeleteANonExistingSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids);
  verifySelfHostedRunnersRepositoriesDoesNotExist(org, repository_id, selected_repository_ids);
});

// Monitor: SelfHostedRunnersRepositories Verification
bthread("monitor:SelfHostedRunnersRepositories", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySelfHostedRunnersRepositoriesAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let repository_id = (e.data.parameters && e.data.parameters["repository_id"]) ? e.data.parameters["repository_id"] : e.data["repository_id"];
    let selected_repository_ids = (e.data.parameters && e.data.parameters["selected_repository_ids"]) ? e.data.parameters["selected_repository_ids"] : e.data["selected_repository_ids"];
    // Block Deletion while Verifying Existence
    block(matchDeletedSelfHostedRunnersRepositories(org, repository_id, selected_repository_ids), function() {
      bp.log.info(`Monitor SelfHostedRunnersRepositories: Verifying persistence of ID ${id} inside deletion block.`);
        verifySelfHostedRunnersRepositoriesExists(org, repository_id, selected_repository_ids);
    });
  }
});

// Story: crud:RunnerGroup:linear:1
bthread("crud:RunnerGroup:linear:1", function () {
  let allows_public_repositories = "allows_public_repositories_2310_" + Math.floor(Math.random() * 10000);
  let name = "name_2310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let network_configuration_id = "network_configuration_id_2310_" + Math.floor(Math.random() * 10000);
  let org = "org_2310_" + Math.floor(Math.random() * 10000);
  let restricted_to_workflows = "restricted_to_workflows_2310_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2310_" + Math.floor(Math.random() * 10000);
  let runners = "runners_2310_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2310_" + Math.floor(Math.random() * 10000);
  let selected_workflows = "selected_workflows_2310_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2310_" + Math.floor(Math.random() * 10000);
  createRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  updateRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  deleteRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToDeleteANonExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupDoesNotExist(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Story: crud:RunnerGroup:linear:2
bthread("crud:RunnerGroup:linear:2", function () {
  let allows_public_repositories = "allows_public_repositories_2320_" + Math.floor(Math.random() * 10000);
  let name = "name_2320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let network_configuration_id = "network_configuration_id_2320_" + Math.floor(Math.random() * 10000);
  let org = "org_2320_" + Math.floor(Math.random() * 10000);
  let restricted_to_workflows = "restricted_to_workflows_2320_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2320_" + Math.floor(Math.random() * 10000);
  let runners = "runners_2320_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2320_" + Math.floor(Math.random() * 10000);
  let selected_workflows = "selected_workflows_2320_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2320_" + Math.floor(Math.random() * 10000);
  createRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  updateRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  deleteRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToDeleteANonExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupDoesNotExist(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Story: crud:RunnerGroup:linear:3
bthread("crud:RunnerGroup:linear:3", function () {
  let allows_public_repositories = "allows_public_repositories_2330_" + Math.floor(Math.random() * 10000);
  let name = "name_2330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let network_configuration_id = "network_configuration_id_2330_" + Math.floor(Math.random() * 10000);
  let org = "org_2330_" + Math.floor(Math.random() * 10000);
  let restricted_to_workflows = "restricted_to_workflows_2330_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2330_" + Math.floor(Math.random() * 10000);
  let runners = "runners_2330_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2330_" + Math.floor(Math.random() * 10000);
  let selected_workflows = "selected_workflows_2330_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2330_" + Math.floor(Math.random() * 10000);
  createRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  updateRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  deleteRunnerGroupForOrg(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  tryToDeleteANonExistingRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
  verifyRunnerGroupDoesNotExist(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
});

// Monitor: RunnerGroup Verification
bthread("monitor:RunnerGroup", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRunnerGroupAdded() });
    let allows_public_repositories = (e.data.parameters && e.data.parameters["allows_public_repositories"]) ? e.data.parameters["allows_public_repositories"] : e.data["allows_public_repositories"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let network_configuration_id = (e.data.parameters && e.data.parameters["network_configuration_id"]) ? e.data.parameters["network_configuration_id"] : e.data["network_configuration_id"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let restricted_to_workflows = (e.data.parameters && e.data.parameters["restricted_to_workflows"]) ? e.data.parameters["restricted_to_workflows"] : e.data["restricted_to_workflows"];
    let runner_group_id = (e.data.parameters && e.data.parameters["runner_group_id"]) ? e.data.parameters["runner_group_id"] : e.data["runner_group_id"];
    let runners = (e.data.parameters && e.data.parameters["runners"]) ? e.data.parameters["runners"] : e.data["runners"];
    let selected_repository_ids = (e.data.parameters && e.data.parameters["selected_repository_ids"]) ? e.data.parameters["selected_repository_ids"] : e.data["selected_repository_ids"];
    let selected_workflows = (e.data.parameters && e.data.parameters["selected_workflows"]) ? e.data.parameters["selected_workflows"] : e.data["selected_workflows"];
    let visibility = (e.data.parameters && e.data.parameters["visibility"]) ? e.data.parameters["visibility"] : e.data["visibility"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRunnerGroup(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility), function() {
      bp.log.info(`Monitor RunnerGroup: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRunnerGroupExists(allows_public_repositories, name, network_configuration_id, org, restricted_to_workflows, runner_group_id, runners, selected_repository_ids, selected_workflows, visibility);
    });
  }
});

// Story: crud:RunnerGroupRepositoryAccess:linear:1
bthread("crud:RunnerGroupRepositoryAccess:linear:1", function () {
  let org = "org_2360_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2360_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2360_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2360_" + Math.floor(Math.random() * 10000);
  addRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  setRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  removeRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessDoesNotExist(org, repository_id, runner_group_id, selected_repository_ids);
});

// Story: crud:RunnerGroupRepositoryAccess:linear:2
bthread("crud:RunnerGroupRepositoryAccess:linear:2", function () {
  let org = "org_2370_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2370_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2370_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2370_" + Math.floor(Math.random() * 10000);
  addRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  setRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  removeRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessDoesNotExist(org, repository_id, runner_group_id, selected_repository_ids);
});

// Story: crud:RunnerGroupRepositoryAccess:linear:3
bthread("crud:RunnerGroupRepositoryAccess:linear:3", function () {
  let org = "org_2380_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2380_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2380_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2380_" + Math.floor(Math.random() * 10000);
  addRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
  setRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  removeRepoAccessToRunnerGroupInOrg(org, repository_id, runner_group_id, selected_repository_ids);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids);
  verifyRunnerGroupRepositoryAccessDoesNotExist(org, repository_id, runner_group_id, selected_repository_ids);
});

// Monitor: RunnerGroupRepositoryAccess Verification
bthread("monitor:RunnerGroupRepositoryAccess", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRunnerGroupRepositoryAccessAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let repository_id = (e.data.parameters && e.data.parameters["repository_id"]) ? e.data.parameters["repository_id"] : e.data["repository_id"];
    let runner_group_id = (e.data.parameters && e.data.parameters["runner_group_id"]) ? e.data.parameters["runner_group_id"] : e.data["runner_group_id"];
    let selected_repository_ids = (e.data.parameters && e.data.parameters["selected_repository_ids"]) ? e.data.parameters["selected_repository_ids"] : e.data["selected_repository_ids"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRunnerGroupRepositoryAccess(org, repository_id, runner_group_id, selected_repository_ids), function() {
      bp.log.info(`Monitor RunnerGroupRepositoryAccess: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRunnerGroupRepositoryAccessExists(org, repository_id, runner_group_id, selected_repository_ids);
    });
  }
});

// Story: crud:RunnerGroupRunner:linear:1
bthread("crud:RunnerGroupRunner:linear:1", function () {
  let org = "org_2410_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2410_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2410_" + Math.floor(Math.random() * 10000);
  let runners = "runners_2410_" + Math.floor(Math.random() * 10000);
  addSelfHostedRunnerToGroupForOrg(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  setSelfHostedRunnersInGroupForOrg(org, runner_group_id, runner_id, runners);
  removeSelfHostedRunnerFromGroupForOrg(org, runner_group_id, runner_id, runners);
  tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerDoesNotExist(org, runner_group_id, runner_id, runners);
});

// Story: crud:RunnerGroupRunner:linear:2
bthread("crud:RunnerGroupRunner:linear:2", function () {
  let org = "org_2420_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2420_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2420_" + Math.floor(Math.random() * 10000);
  let runners = "runners_2420_" + Math.floor(Math.random() * 10000);
  addSelfHostedRunnerToGroupForOrg(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  setSelfHostedRunnersInGroupForOrg(org, runner_group_id, runner_id, runners);
  removeSelfHostedRunnerFromGroupForOrg(org, runner_group_id, runner_id, runners);
  tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerDoesNotExist(org, runner_group_id, runner_id, runners);
});

// Story: crud:RunnerGroupRunner:linear:3
bthread("crud:RunnerGroupRunner:linear:3", function () {
  let org = "org_2430_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2430_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2430_" + Math.floor(Math.random() * 10000);
  let runners = "runners_2430_" + Math.floor(Math.random() * 10000);
  addSelfHostedRunnerToGroupForOrg(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
  setSelfHostedRunnersInGroupForOrg(org, runner_group_id, runner_id, runners);
  removeSelfHostedRunnerFromGroupForOrg(org, runner_group_id, runner_id, runners);
  tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id, runners);
  verifyRunnerGroupRunnerDoesNotExist(org, runner_group_id, runner_id, runners);
});

// Monitor: RunnerGroupRunner Verification
bthread("monitor:RunnerGroupRunner", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRunnerGroupRunnerAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let runner_group_id = (e.data.parameters && e.data.parameters["runner_group_id"]) ? e.data.parameters["runner_group_id"] : e.data["runner_group_id"];
    let runner_id = (e.data.parameters && e.data.parameters["runner_id"]) ? e.data.parameters["runner_id"] : e.data["runner_id"];
    let runners = (e.data.parameters && e.data.parameters["runners"]) ? e.data.parameters["runners"] : e.data["runners"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRunnerGroupRunner(org, runner_group_id, runner_id, runners), function() {
      bp.log.info(`Monitor RunnerGroupRunner: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRunnerGroupRunnerExists(org, runner_group_id, runner_id, runners);
    });
  }
});

// Story: crud:Runner:linear:1
bthread("crud:Runner:linear:1", function () {
  let labels = "labels_2460_" + Math.floor(Math.random() * 10000);
  let name = "name_2460_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2460_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2460_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2460_" + Math.floor(Math.random() * 10000);
  let work_folder = "work_folder_2460_" + Math.floor(Math.random() * 10000);
  generateRunnerJitconfigForOrg(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  deleteRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToDeleteANonExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerDoesNotExist(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Story: crud:Runner:linear:2
bthread("crud:Runner:linear:2", function () {
  let labels = "labels_2470_" + Math.floor(Math.random() * 10000);
  let name = "name_2470_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2470_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2470_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2470_" + Math.floor(Math.random() * 10000);
  let work_folder = "work_folder_2470_" + Math.floor(Math.random() * 10000);
  generateRunnerJitconfigForOrg(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  deleteRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToDeleteANonExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerDoesNotExist(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Story: crud:Runner:linear:3
bthread("crud:Runner:linear:3", function () {
  let labels = "labels_2480_" + Math.floor(Math.random() * 10000);
  let name = "name_2480_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2480_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2480_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2480_" + Math.floor(Math.random() * 10000);
  let work_folder = "work_folder_2480_" + Math.floor(Math.random() * 10000);
  generateRunnerJitconfigForOrg(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
  deleteRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  tryToDeleteANonExistingRunner(labels, name, org, runner_group_id, runner_id, work_folder);
  verifyRunnerDoesNotExist(labels, name, org, runner_group_id, runner_id, work_folder);
});

// Monitor: Runner Verification
bthread("monitor:Runner", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRunnerAdded() });
    let labels = (e.data.parameters && e.data.parameters["labels"]) ? e.data.parameters["labels"] : e.data["labels"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let runner_group_id = (e.data.parameters && e.data.parameters["runner_group_id"]) ? e.data.parameters["runner_group_id"] : e.data["runner_group_id"];
    let runner_id = (e.data.parameters && e.data.parameters["runner_id"]) ? e.data.parameters["runner_id"] : e.data["runner_id"];
    let work_folder = (e.data.parameters && e.data.parameters["work_folder"]) ? e.data.parameters["work_folder"] : e.data["work_folder"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRunner(labels, name, org, runner_group_id, runner_id, work_folder), function() {
      bp.log.info(`Monitor Runner: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRunnerExists(labels, name, org, runner_group_id, runner_id, work_folder);
    });
  }
});

// Story: crud:RunnerLabels:linear:1
bthread("crud:RunnerLabels:linear:1", function () {
  let labels = "labels_2510_" + Math.floor(Math.random() * 10000);
  let org = "org_2510_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2510_" + Math.floor(Math.random() * 10000);
  addRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsExists(labels, org, runner_id);
  setRunnerLabels(labels, org, runner_id);
  removeAllRunnerLabels(labels, org, runner_id);
  tryToDeleteANonExistingRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsDoesNotExist(labels, org, runner_id);
});

// Story: crud:RunnerLabels:linear:2
bthread("crud:RunnerLabels:linear:2", function () {
  let labels = "labels_2520_" + Math.floor(Math.random() * 10000);
  let org = "org_2520_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2520_" + Math.floor(Math.random() * 10000);
  addRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsExists(labels, org, runner_id);
  setRunnerLabels(labels, org, runner_id);
  removeAllRunnerLabels(labels, org, runner_id);
  tryToDeleteANonExistingRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsDoesNotExist(labels, org, runner_id);
});

// Story: crud:RunnerLabels:linear:3
bthread("crud:RunnerLabels:linear:3", function () {
  let labels = "labels_2530_" + Math.floor(Math.random() * 10000);
  let org = "org_2530_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2530_" + Math.floor(Math.random() * 10000);
  addRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsExists(labels, org, runner_id);
  setRunnerLabels(labels, org, runner_id);
  removeAllRunnerLabels(labels, org, runner_id);
  tryToDeleteANonExistingRunnerLabels(labels, org, runner_id);
  verifyRunnerLabelsDoesNotExist(labels, org, runner_id);
});

// Monitor: RunnerLabels Verification
bthread("monitor:RunnerLabels", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRunnerLabelsAdded() });
    let labels = (e.data.parameters && e.data.parameters["labels"]) ? e.data.parameters["labels"] : e.data["labels"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let runner_id = (e.data.parameters && e.data.parameters["runner_id"]) ? e.data.parameters["runner_id"] : e.data["runner_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRunnerLabels(labels, org, runner_id), function() {
      bp.log.info(`Monitor RunnerLabels: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRunnerLabelsExists(labels, org, runner_id);
    });
  }
});

// Story: crud:RegistrationToken:linear:1
bthread("crud:RegistrationToken:linear:1", function () {
  let id = "id_2560_" + Math.floor(Math.random() * 10000);
  let org = "org_2560_" + Math.floor(Math.random() * 10000);
  createRegistrationToken(id, org);
});

// Story: crud:RegistrationToken:linear:2
bthread("crud:RegistrationToken:linear:2", function () {
  let id = "id_2570_" + Math.floor(Math.random() * 10000);
  let org = "org_2570_" + Math.floor(Math.random() * 10000);
  createRegistrationToken(id, org);
});

// Story: crud:RegistrationToken:linear:3
bthread("crud:RegistrationToken:linear:3", function () {
  let id = "id_2580_" + Math.floor(Math.random() * 10000);
  let org = "org_2580_" + Math.floor(Math.random() * 10000);
  createRegistrationToken(id, org);
});

// Story: crud:RemoveToken:linear:1
bthread("crud:RemoveToken:linear:1", function () {
  let id = "id_2610_" + Math.floor(Math.random() * 10000);
  let org = "org_2610_" + Math.floor(Math.random() * 10000);
  createRemoveToken(id, org);
});

// Story: crud:RemoveToken:linear:2
bthread("crud:RemoveToken:linear:2", function () {
  let id = "id_2620_" + Math.floor(Math.random() * 10000);
  let org = "org_2620_" + Math.floor(Math.random() * 10000);
  createRemoveToken(id, org);
});

// Story: crud:RemoveToken:linear:3
bthread("crud:RemoveToken:linear:3", function () {
  let id = "id_2630_" + Math.floor(Math.random() * 10000);
  let org = "org_2630_" + Math.floor(Math.random() * 10000);
  createRemoveToken(id, org);
});

// Story: crud:Secret:linear:1
bthread("crud:Secret:linear:1", function () {
  let encrypted_value = "encrypted_value_2660_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_2660_" + Math.floor(Math.random() * 10000);
  let org = "org_2660_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_2660_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2660_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2660_" + Math.floor(Math.random() * 10000);
  createOrUpdateSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:Secret:linear:2
bthread("crud:Secret:linear:2", function () {
  let encrypted_value = "encrypted_value_2670_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_2670_" + Math.floor(Math.random() * 10000);
  let org = "org_2670_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_2670_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2670_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2670_" + Math.floor(Math.random() * 10000);
  createOrUpdateSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:Secret:linear:3
bthread("crud:Secret:linear:3", function () {
  let encrypted_value = "encrypted_value_2680_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_2680_" + Math.floor(Math.random() * 10000);
  let org = "org_2680_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_2680_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2680_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2680_" + Math.floor(Math.random() * 10000);
  createOrUpdateSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifySecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Monitor: Secret Verification
bthread("monitor:Secret", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySecretAdded() });
    let encrypted_value = (e.data.parameters && e.data.parameters["encrypted_value"]) ? e.data.parameters["encrypted_value"] : e.data["encrypted_value"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let secret_name = (e.data.parameters && e.data.parameters["secret_name"]) ? e.data.parameters["secret_name"] : e.data["secret_name"];
    let selected_repository_ids = (e.data.parameters && e.data.parameters["selected_repository_ids"]) ? e.data.parameters["selected_repository_ids"] : e.data["selected_repository_ids"];
    let visibility = (e.data.parameters && e.data.parameters["visibility"]) ? e.data.parameters["visibility"] : e.data["visibility"];
    // Block Deletion while Verifying Existence
    block(matchDeletedSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility), function() {
      bp.log.info(`Monitor Secret: Verifying persistence of ID ${id} inside deletion block.`);
        verifySecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
    });
  }
});

// Story: crud:SecretRepository:linear:1
bthread("crud:SecretRepository:linear:1", function () {
  let repository_id = "repository_id_2710_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_2710_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addRepositoryForSecretForAuthenticatedUser(repository_id, secret_name);
});

// Story: crud:SecretRepository:linear:2
bthread("crud:SecretRepository:linear:2", function () {
  let repository_id = "repository_id_2720_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_2720_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addRepositoryForSecretForAuthenticatedUser(repository_id, secret_name);
});

// Story: crud:SecretRepository:linear:3
bthread("crud:SecretRepository:linear:3", function () {
  let repository_id = "repository_id_2730_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_2730_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addRepositoryForSecretForAuthenticatedUser(repository_id, secret_name);
});

// Story: crud:OrgVariable:linear:1
bthread("crud:OrgVariable:linear:1", function () {
  let name = "name_2760_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2760_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2760_" + Math.floor(Math.random() * 10000);
  let value = "value_2760_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2760_" + Math.floor(Math.random() * 10000);
  createOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
  updateOrgVariable(name, org, selected_repository_ids, value, visibility);
  deleteOrgVariable(name, org, selected_repository_ids, value, visibility);
  tryToDeleteANonExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableDoesNotExist(name, org, selected_repository_ids, value, visibility);
});

// Story: crud:OrgVariable:linear:2
bthread("crud:OrgVariable:linear:2", function () {
  let name = "name_2770_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2770_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2770_" + Math.floor(Math.random() * 10000);
  let value = "value_2770_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2770_" + Math.floor(Math.random() * 10000);
  createOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
  updateOrgVariable(name, org, selected_repository_ids, value, visibility);
  deleteOrgVariable(name, org, selected_repository_ids, value, visibility);
  tryToDeleteANonExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableDoesNotExist(name, org, selected_repository_ids, value, visibility);
});

// Story: crud:OrgVariable:linear:3
bthread("crud:OrgVariable:linear:3", function () {
  let name = "name_2780_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2780_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_2780_" + Math.floor(Math.random() * 10000);
  let value = "value_2780_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_2780_" + Math.floor(Math.random() * 10000);
  createOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
  updateOrgVariable(name, org, selected_repository_ids, value, visibility);
  deleteOrgVariable(name, org, selected_repository_ids, value, visibility);
  tryToDeleteANonExistingOrgVariable(name, org, selected_repository_ids, value, visibility);
  verifyOrgVariableDoesNotExist(name, org, selected_repository_ids, value, visibility);
});

// Monitor: OrgVariable Verification
bthread("monitor:OrgVariable", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrgVariableAdded() });
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let selected_repository_ids = (e.data.parameters && e.data.parameters["selected_repository_ids"]) ? e.data.parameters["selected_repository_ids"] : e.data["selected_repository_ids"];
    let value = (e.data.parameters && e.data.parameters["value"]) ? e.data.parameters["value"] : e.data["value"];
    let visibility = (e.data.parameters && e.data.parameters["visibility"]) ? e.data.parameters["visibility"] : e.data["visibility"];
    // Block Deletion while Verifying Existence
    block(matchDeletedOrgVariable(name, org, selected_repository_ids, value, visibility), function() {
      bp.log.info(`Monitor OrgVariable: Verifying persistence of ID ${id} inside deletion block.`);
        verifyOrgVariableExists(name, org, selected_repository_ids, value, visibility);
    });
  }
});

// Story: crud:OrgVariableSelectedRepo:linear:1
bthread("crud:OrgVariableSelectedRepo:linear:1", function () {
  let name = "name_2810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2810_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2810_" + Math.floor(Math.random() * 10000);
  addSelectedRepoToOrgVariable(name, org, repository_id);
});

// Story: crud:OrgVariableSelectedRepo:linear:2
bthread("crud:OrgVariableSelectedRepo:linear:2", function () {
  let name = "name_2820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2820_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2820_" + Math.floor(Math.random() * 10000);
  addSelectedRepoToOrgVariable(name, org, repository_id);
});

// Story: crud:OrgVariableSelectedRepo:linear:3
bthread("crud:OrgVariableSelectedRepo:linear:3", function () {
  let name = "name_2830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_2830_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_2830_" + Math.floor(Math.random() * 10000);
  addSelectedRepoToOrgVariable(name, org, repository_id);
});

// Story: crud:SelfHostedRunnerLabels:linear:1
bthread("crud:SelfHostedRunnerLabels:linear:1", function () {
  let labels = "labels_2860_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2860_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2860_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2860_" + Math.floor(Math.random() * 10000);
  addCustomLabelsToSelfHostedRunner(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id);
  setCustomLabelsForSelfHostedRunner(labels, owner, repo, runner_id);
  removeAllCustomLabelsFromSelfHostedRunner(labels, owner, repo, runner_id);
  tryToDeleteANonExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsDoesNotExist(labels, owner, repo, runner_id);
});

// Story: crud:SelfHostedRunnerLabels:linear:2
bthread("crud:SelfHostedRunnerLabels:linear:2", function () {
  let labels = "labels_2870_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2870_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2870_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2870_" + Math.floor(Math.random() * 10000);
  addCustomLabelsToSelfHostedRunner(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id);
  setCustomLabelsForSelfHostedRunner(labels, owner, repo, runner_id);
  removeAllCustomLabelsFromSelfHostedRunner(labels, owner, repo, runner_id);
  tryToDeleteANonExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsDoesNotExist(labels, owner, repo, runner_id);
});

// Story: crud:SelfHostedRunnerLabels:linear:3
bthread("crud:SelfHostedRunnerLabels:linear:3", function () {
  let labels = "labels_2880_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2880_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2880_" + Math.floor(Math.random() * 10000);
  let runner_id = "runner_id_2880_" + Math.floor(Math.random() * 10000);
  addCustomLabelsToSelfHostedRunner(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id);
  setCustomLabelsForSelfHostedRunner(labels, owner, repo, runner_id);
  removeAllCustomLabelsFromSelfHostedRunner(labels, owner, repo, runner_id);
  tryToDeleteANonExistingSelfHostedRunnerLabels(labels, owner, repo, runner_id);
  verifySelfHostedRunnerLabelsDoesNotExist(labels, owner, repo, runner_id);
});

// Monitor: SelfHostedRunnerLabels Verification
bthread("monitor:SelfHostedRunnerLabels", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySelfHostedRunnerLabelsAdded() });
    let labels = (e.data.parameters && e.data.parameters["labels"]) ? e.data.parameters["labels"] : e.data["labels"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let runner_id = (e.data.parameters && e.data.parameters["runner_id"]) ? e.data.parameters["runner_id"] : e.data["runner_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedSelfHostedRunnerLabels(labels, owner, repo, runner_id), function() {
      bp.log.info(`Monitor SelfHostedRunnerLabels: Verifying persistence of ID ${id} inside deletion block.`);
        verifySelfHostedRunnerLabelsExists(labels, owner, repo, runner_id);
    });
  }
});

// Story: crud:SelfHostedRunnerJITConfig:linear:1
bthread("crud:SelfHostedRunnerJITConfig:linear:1", function () {
  let id = "id_2910_" + Math.floor(Math.random() * 10000);
  let labels = "labels_2910_" + Math.floor(Math.random() * 10000);
  let name = "name_2910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2910_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2910_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2910_" + Math.floor(Math.random() * 10000);
  let work_folder = "work_folder_2910_" + Math.floor(Math.random() * 10000);
  generateRunnerJITConfig(id, labels, name, owner, repo, runner_group_id, work_folder);
});

// Story: crud:SelfHostedRunnerJITConfig:linear:2
bthread("crud:SelfHostedRunnerJITConfig:linear:2", function () {
  let id = "id_2920_" + Math.floor(Math.random() * 10000);
  let labels = "labels_2920_" + Math.floor(Math.random() * 10000);
  let name = "name_2920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2920_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2920_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2920_" + Math.floor(Math.random() * 10000);
  let work_folder = "work_folder_2920_" + Math.floor(Math.random() * 10000);
  generateRunnerJITConfig(id, labels, name, owner, repo, runner_group_id, work_folder);
});

// Story: crud:SelfHostedRunnerJITConfig:linear:3
bthread("crud:SelfHostedRunnerJITConfig:linear:3", function () {
  let id = "id_2930_" + Math.floor(Math.random() * 10000);
  let labels = "labels_2930_" + Math.floor(Math.random() * 10000);
  let name = "name_2930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2930_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2930_" + Math.floor(Math.random() * 10000);
  let runner_group_id = "runner_group_id_2930_" + Math.floor(Math.random() * 10000);
  let work_folder = "work_folder_2930_" + Math.floor(Math.random() * 10000);
  generateRunnerJITConfig(id, labels, name, owner, repo, runner_group_id, work_folder);
});

// Story: crud:SelfHostedRunnerRegistrationToken:linear:1
bthread("crud:SelfHostedRunnerRegistrationToken:linear:1", function () {
  let id = "id_2960_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2960_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2960_" + Math.floor(Math.random() * 10000);
  createRegistrationTokenForRepo(id, owner, repo);
});

// Story: crud:SelfHostedRunnerRegistrationToken:linear:2
bthread("crud:SelfHostedRunnerRegistrationToken:linear:2", function () {
  let id = "id_2970_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2970_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2970_" + Math.floor(Math.random() * 10000);
  createRegistrationTokenForRepo(id, owner, repo);
});

// Story: crud:SelfHostedRunnerRegistrationToken:linear:3
bthread("crud:SelfHostedRunnerRegistrationToken:linear:3", function () {
  let id = "id_2980_" + Math.floor(Math.random() * 10000);
  let owner = "owner_2980_" + Math.floor(Math.random() * 10000);
  let repo = "repo_2980_" + Math.floor(Math.random() * 10000);
  createRegistrationTokenForRepo(id, owner, repo);
});

// Story: crud:SelfHostedRunnerRemoveToken:linear:1
bthread("crud:SelfHostedRunnerRemoveToken:linear:1", function () {
  let id = "id_3010_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3010_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3010_" + Math.floor(Math.random() * 10000);
  createRemoveTokenForRepo(id, owner, repo);
});

// Story: crud:SelfHostedRunnerRemoveToken:linear:2
bthread("crud:SelfHostedRunnerRemoveToken:linear:2", function () {
  let id = "id_3020_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3020_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3020_" + Math.floor(Math.random() * 10000);
  createRemoveTokenForRepo(id, owner, repo);
});

// Story: crud:SelfHostedRunnerRemoveToken:linear:3
bthread("crud:SelfHostedRunnerRemoveToken:linear:3", function () {
  let id = "id_3030_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3030_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3030_" + Math.floor(Math.random() * 10000);
  createRemoveTokenForRepo(id, owner, repo);
});

// Story: crud:WorkflowRunApproval:linear:1
bthread("crud:WorkflowRunApproval:linear:1", function () {
  let owner = "owner_3060_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3060_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3060_" + Math.floor(Math.random() * 10000);
  approveWorkflowRun(owner, repo, run_id);
});

// Story: crud:WorkflowRunApproval:linear:2
bthread("crud:WorkflowRunApproval:linear:2", function () {
  let owner = "owner_3070_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3070_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3070_" + Math.floor(Math.random() * 10000);
  approveWorkflowRun(owner, repo, run_id);
});

// Story: crud:WorkflowRunApproval:linear:3
bthread("crud:WorkflowRunApproval:linear:3", function () {
  let owner = "owner_3080_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3080_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3080_" + Math.floor(Math.random() * 10000);
  approveWorkflowRun(owner, repo, run_id);
});

// Story: crud:WorkflowRunCancel:linear:1
bthread("crud:WorkflowRunCancel:linear:1", function () {
  let id = "id_3110_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3110_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3110_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3110_" + Math.floor(Math.random() * 10000);
  cancelWorkflowRun(id, owner, repo, run_id);
});

// Story: crud:WorkflowRunCancel:linear:2
bthread("crud:WorkflowRunCancel:linear:2", function () {
  let id = "id_3120_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3120_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3120_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3120_" + Math.floor(Math.random() * 10000);
  cancelWorkflowRun(id, owner, repo, run_id);
});

// Story: crud:WorkflowRunCancel:linear:3
bthread("crud:WorkflowRunCancel:linear:3", function () {
  let id = "id_3130_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3130_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3130_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3130_" + Math.floor(Math.random() * 10000);
  cancelWorkflowRun(id, owner, repo, run_id);
});

// Story: crud:WorkflowRunForceCancel:linear:1
bthread("crud:WorkflowRunForceCancel:linear:1", function () {
  let id = "id_3160_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3160_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3160_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3160_" + Math.floor(Math.random() * 10000);
  forceCancelWorkflowRun(id, owner, repo, run_id);
});

// Story: crud:WorkflowRunForceCancel:linear:2
bthread("crud:WorkflowRunForceCancel:linear:2", function () {
  let id = "id_3170_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3170_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3170_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3170_" + Math.floor(Math.random() * 10000);
  forceCancelWorkflowRun(id, owner, repo, run_id);
});

// Story: crud:WorkflowRunForceCancel:linear:3
bthread("crud:WorkflowRunForceCancel:linear:3", function () {
  let id = "id_3180_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3180_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3180_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3180_" + Math.floor(Math.random() * 10000);
  forceCancelWorkflowRun(id, owner, repo, run_id);
});

// Story: crud:PendingDeployment:linear:1
bthread("crud:PendingDeployment:linear:1", function () {
  let comment = "comment_3210_" + Math.floor(Math.random() * 10000);
  let environment_ids = "environment_ids_3210_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3210_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3210_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3210_" + Math.floor(Math.random() * 10000);
  let state = "state_3210_" + Math.floor(Math.random() * 10000);
  reviewPendingDeploymentsForRun(comment, environment_ids, owner, repo, run_id, state);
});

// Story: crud:PendingDeployment:linear:2
bthread("crud:PendingDeployment:linear:2", function () {
  let comment = "comment_3220_" + Math.floor(Math.random() * 10000);
  let environment_ids = "environment_ids_3220_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3220_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3220_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3220_" + Math.floor(Math.random() * 10000);
  let state = "state_3220_" + Math.floor(Math.random() * 10000);
  reviewPendingDeploymentsForRun(comment, environment_ids, owner, repo, run_id, state);
});

// Story: crud:PendingDeployment:linear:3
bthread("crud:PendingDeployment:linear:3", function () {
  let comment = "comment_3230_" + Math.floor(Math.random() * 10000);
  let environment_ids = "environment_ids_3230_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3230_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3230_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3230_" + Math.floor(Math.random() * 10000);
  let state = "state_3230_" + Math.floor(Math.random() * 10000);
  reviewPendingDeploymentsForRun(comment, environment_ids, owner, repo, run_id, state);
});

// Story: crud:WorkflowRunRerun:linear:1
bthread("crud:WorkflowRunRerun:linear:1", function () {
  let enable_debug_logging = "enable_debug_logging_3260_" + Math.floor(Math.random() * 10000);
  let id = "id_3260_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3260_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3260_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3260_" + Math.floor(Math.random() * 10000);
  reRunWorkflow(enable_debug_logging, id, owner, repo, run_id);
});

// Story: crud:WorkflowRunRerun:linear:2
bthread("crud:WorkflowRunRerun:linear:2", function () {
  let enable_debug_logging = "enable_debug_logging_3270_" + Math.floor(Math.random() * 10000);
  let id = "id_3270_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3270_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3270_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3270_" + Math.floor(Math.random() * 10000);
  reRunWorkflow(enable_debug_logging, id, owner, repo, run_id);
});

// Story: crud:WorkflowRunRerun:linear:3
bthread("crud:WorkflowRunRerun:linear:3", function () {
  let enable_debug_logging = "enable_debug_logging_3280_" + Math.floor(Math.random() * 10000);
  let id = "id_3280_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3280_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3280_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3280_" + Math.floor(Math.random() * 10000);
  reRunWorkflow(enable_debug_logging, id, owner, repo, run_id);
});

// Story: crud:WorkflowRunRerunFailedJobs:linear:1
bthread("crud:WorkflowRunRerunFailedJobs:linear:1", function () {
  let enable_debug_logging = "enable_debug_logging_3310_" + Math.floor(Math.random() * 10000);
  let id = "id_3310_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3310_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3310_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3310_" + Math.floor(Math.random() * 10000);
  reRunWorkflowFailedJobs(enable_debug_logging, id, owner, repo, run_id);
});

// Story: crud:WorkflowRunRerunFailedJobs:linear:2
bthread("crud:WorkflowRunRerunFailedJobs:linear:2", function () {
  let enable_debug_logging = "enable_debug_logging_3320_" + Math.floor(Math.random() * 10000);
  let id = "id_3320_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3320_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3320_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3320_" + Math.floor(Math.random() * 10000);
  reRunWorkflowFailedJobs(enable_debug_logging, id, owner, repo, run_id);
});

// Story: crud:WorkflowRunRerunFailedJobs:linear:3
bthread("crud:WorkflowRunRerunFailedJobs:linear:3", function () {
  let enable_debug_logging = "enable_debug_logging_3330_" + Math.floor(Math.random() * 10000);
  let id = "id_3330_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3330_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3330_" + Math.floor(Math.random() * 10000);
  let run_id = "run_id_3330_" + Math.floor(Math.random() * 10000);
  reRunWorkflowFailedJobs(enable_debug_logging, id, owner, repo, run_id);
});

// Story: crud:RepoSecret:linear:1
bthread("crud:RepoSecret:linear:1", function () {
  let encrypted_value = "encrypted_value_3360_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_3360_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3360_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3360_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_3360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepoSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepoSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:RepoSecret:linear:2
bthread("crud:RepoSecret:linear:2", function () {
  let encrypted_value = "encrypted_value_3370_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_3370_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3370_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3370_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_3370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepoSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepoSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:RepoSecret:linear:3
bthread("crud:RepoSecret:linear:3", function () {
  let encrypted_value = "encrypted_value_3380_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_3380_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3380_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3380_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_3380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepoSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingRepoSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyRepoSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Monitor: RepoSecret Verification
bthread("monitor:RepoSecret", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepoSecretAdded() });
    let encrypted_value = (e.data.parameters && e.data.parameters["encrypted_value"]) ? e.data.parameters["encrypted_value"] : e.data["encrypted_value"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let secret_name = (e.data.parameters && e.data.parameters["secret_name"]) ? e.data.parameters["secret_name"] : e.data["secret_name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepoSecret(encrypted_value, key_id, owner, repo, secret_name), function() {
      bp.log.info(`Monitor RepoSecret: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRepoSecretExists(encrypted_value, key_id, owner, repo, secret_name);
    });
  }
});

// Story: crud:RepoVariable:linear:1
bthread("crud:RepoVariable:linear:1", function () {
  let name = "name_3410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3410_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3410_" + Math.floor(Math.random() * 10000);
  let value = "value_3410_" + Math.floor(Math.random() * 10000);
  createRepoVariable(name, owner, repo, value);
  verifyRepoVariableExists(name, owner, repo, value);
  updateRepoVariable(name, owner, repo, value);
  deleteRepoVariable(name, owner, repo, value);
  tryToDeleteANonExistingRepoVariable(name, owner, repo, value);
  verifyRepoVariableDoesNotExist(name, owner, repo, value);
});

// Story: crud:RepoVariable:linear:2
bthread("crud:RepoVariable:linear:2", function () {
  let name = "name_3420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3420_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3420_" + Math.floor(Math.random() * 10000);
  let value = "value_3420_" + Math.floor(Math.random() * 10000);
  createRepoVariable(name, owner, repo, value);
  verifyRepoVariableExists(name, owner, repo, value);
  updateRepoVariable(name, owner, repo, value);
  deleteRepoVariable(name, owner, repo, value);
  tryToDeleteANonExistingRepoVariable(name, owner, repo, value);
  verifyRepoVariableDoesNotExist(name, owner, repo, value);
});

// Story: crud:RepoVariable:linear:3
bthread("crud:RepoVariable:linear:3", function () {
  let name = "name_3430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3430_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3430_" + Math.floor(Math.random() * 10000);
  let value = "value_3430_" + Math.floor(Math.random() * 10000);
  createRepoVariable(name, owner, repo, value);
  verifyRepoVariableExists(name, owner, repo, value);
  updateRepoVariable(name, owner, repo, value);
  deleteRepoVariable(name, owner, repo, value);
  tryToDeleteANonExistingRepoVariable(name, owner, repo, value);
  verifyRepoVariableDoesNotExist(name, owner, repo, value);
});

// Monitor: RepoVariable Verification
bthread("monitor:RepoVariable", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepoVariableAdded() });
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let value = (e.data.parameters && e.data.parameters["value"]) ? e.data.parameters["value"] : e.data["value"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepoVariable(name, owner, repo, value), function() {
      bp.log.info(`Monitor RepoVariable: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRepoVariableExists(name, owner, repo, value);
    });
  }
});

// Story: crud:WorkflowDispatch:linear:1
bthread("crud:WorkflowDispatch:linear:1", function () {
  let id = "id_3460_" + Math.floor(Math.random() * 10000);
  let inputs = "inputs_3460_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3460_" + Math.floor(Math.random() * 10000);
  let ref = "ref_3460_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3460_" + Math.floor(Math.random() * 10000);
  let workflow_id = "workflow_id_3460_" + Math.floor(Math.random() * 10000);
  createWorkflowDispatch(id, inputs, owner, ref, repo, workflow_id);
});

// Story: crud:WorkflowDispatch:linear:2
bthread("crud:WorkflowDispatch:linear:2", function () {
  let id = "id_3470_" + Math.floor(Math.random() * 10000);
  let inputs = "inputs_3470_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3470_" + Math.floor(Math.random() * 10000);
  let ref = "ref_3470_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3470_" + Math.floor(Math.random() * 10000);
  let workflow_id = "workflow_id_3470_" + Math.floor(Math.random() * 10000);
  createWorkflowDispatch(id, inputs, owner, ref, repo, workflow_id);
});

// Story: crud:WorkflowDispatch:linear:3
bthread("crud:WorkflowDispatch:linear:3", function () {
  let id = "id_3480_" + Math.floor(Math.random() * 10000);
  let inputs = "inputs_3480_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3480_" + Math.floor(Math.random() * 10000);
  let ref = "ref_3480_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3480_" + Math.floor(Math.random() * 10000);
  let workflow_id = "workflow_id_3480_" + Math.floor(Math.random() * 10000);
  createWorkflowDispatch(id, inputs, owner, ref, repo, workflow_id);
});

// Story: crud:EnvironmentSecret:linear:1
bthread("crud:EnvironmentSecret:linear:1", function () {
  let encrypted_value = "encrypted_value_3510_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_3510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_3510_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3510_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3510_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_3510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  deleteEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretDoesNotExist(encrypted_value, environment_name, key_id, owner, repo, secret_name);
});

// Story: crud:EnvironmentSecret:linear:2
bthread("crud:EnvironmentSecret:linear:2", function () {
  let encrypted_value = "encrypted_value_3520_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_3520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_3520_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3520_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3520_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_3520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  deleteEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretDoesNotExist(encrypted_value, environment_name, key_id, owner, repo, secret_name);
});

// Story: crud:EnvironmentSecret:linear:3
bthread("crud:EnvironmentSecret:linear:3", function () {
  let encrypted_value = "encrypted_value_3530_" + Math.floor(Math.random() * 10000);
  let environment_name = "environment_name_3530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_3530_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3530_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3530_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_3530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  deleteEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name);
  verifyEnvironmentSecretDoesNotExist(encrypted_value, environment_name, key_id, owner, repo, secret_name);
});

// Monitor: EnvironmentSecret Verification
bthread("monitor:EnvironmentSecret", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyEnvironmentSecretAdded() });
    let encrypted_value = (e.data.parameters && e.data.parameters["encrypted_value"]) ? e.data.parameters["encrypted_value"] : e.data["encrypted_value"];
    let environment_name = (e.data.parameters && e.data.parameters["environment_name"]) ? e.data.parameters["environment_name"] : e.data["environment_name"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let secret_name = (e.data.parameters && e.data.parameters["secret_name"]) ? e.data.parameters["secret_name"] : e.data["secret_name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedEnvironmentSecret(encrypted_value, environment_name, key_id, owner, repo, secret_name), function() {
      bp.log.info(`Monitor EnvironmentSecret: Verifying persistence of ID ${id} inside deletion block.`);
        verifyEnvironmentSecretExists(encrypted_value, environment_name, key_id, owner, repo, secret_name);
    });
  }
});

// Story: crud:EnvironmentVariable:linear:1
bthread("crud:EnvironmentVariable:linear:1", function () {
  let environment_name = "environment_name_3560_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_3560_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3560_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3560_" + Math.floor(Math.random() * 10000);
  let value = "value_3560_" + Math.floor(Math.random() * 10000);
  createEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
  updateEnvironmentVariable(environment_name, name, owner, repo, value);
  deleteEnvironmentVariable(environment_name, name, owner, repo, value);
  tryToDeleteANonExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableDoesNotExist(environment_name, name, owner, repo, value);
});

// Story: crud:EnvironmentVariable:linear:2
bthread("crud:EnvironmentVariable:linear:2", function () {
  let environment_name = "environment_name_3570_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_3570_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3570_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3570_" + Math.floor(Math.random() * 10000);
  let value = "value_3570_" + Math.floor(Math.random() * 10000);
  createEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
  updateEnvironmentVariable(environment_name, name, owner, repo, value);
  deleteEnvironmentVariable(environment_name, name, owner, repo, value);
  tryToDeleteANonExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableDoesNotExist(environment_name, name, owner, repo, value);
});

// Story: crud:EnvironmentVariable:linear:3
bthread("crud:EnvironmentVariable:linear:3", function () {
  let environment_name = "environment_name_3580_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_3580_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_3580_" + Math.floor(Math.random() * 10000);
  let repo = "repo_3580_" + Math.floor(Math.random() * 10000);
  let value = "value_3580_" + Math.floor(Math.random() * 10000);
  createEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
  updateEnvironmentVariable(environment_name, name, owner, repo, value);
  deleteEnvironmentVariable(environment_name, name, owner, repo, value);
  tryToDeleteANonExistingEnvironmentVariable(environment_name, name, owner, repo, value);
  verifyEnvironmentVariableDoesNotExist(environment_name, name, owner, repo, value);
});

// Monitor: EnvironmentVariable Verification
bthread("monitor:EnvironmentVariable", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyEnvironmentVariableAdded() });
    let environment_name = (e.data.parameters && e.data.parameters["environment_name"]) ? e.data.parameters["environment_name"] : e.data["environment_name"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let value = (e.data.parameters && e.data.parameters["value"]) ? e.data.parameters["value"] : e.data["value"];
    // Block Deletion while Verifying Existence
    block(matchDeletedEnvironmentVariable(environment_name, name, owner, repo, value), function() {
      bp.log.info(`Monitor EnvironmentVariable: Verifying persistence of ID ${id} inside deletion block.`);
        verifyEnvironmentVariableExists(environment_name, name, owner, repo, value);
    });
  }
});

// Story: crud:ArtifactStorageRecord:linear:1
bthread("crud:ArtifactStorageRecord:linear:1", function () {
  let artifact_url = "artifact_url_3610_" + Math.floor(Math.random() * 10000);
  let digest = "digest_3610_" + Math.floor(Math.random() * 10000);
  let name = "name_3610_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_3610_" + Math.floor(Math.random() * 10000);
  let path = "path_3610_" + Math.floor(Math.random() * 10000);
  let registry_url = "registry_url_3610_" + Math.floor(Math.random() * 10000);
  let repository = "repository_3610_" + Math.floor(Math.random() * 10000);
  let status = "status_3610_" + Math.floor(Math.random() * 10000);
  let subject_digest = "subject_digest_3610_" + Math.floor(Math.random() * 10000);
  createArtifactStorageRecord(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest);
});

// Story: crud:ArtifactStorageRecord:linear:2
bthread("crud:ArtifactStorageRecord:linear:2", function () {
  let artifact_url = "artifact_url_3620_" + Math.floor(Math.random() * 10000);
  let digest = "digest_3620_" + Math.floor(Math.random() * 10000);
  let name = "name_3620_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_3620_" + Math.floor(Math.random() * 10000);
  let path = "path_3620_" + Math.floor(Math.random() * 10000);
  let registry_url = "registry_url_3620_" + Math.floor(Math.random() * 10000);
  let repository = "repository_3620_" + Math.floor(Math.random() * 10000);
  let status = "status_3620_" + Math.floor(Math.random() * 10000);
  let subject_digest = "subject_digest_3620_" + Math.floor(Math.random() * 10000);
  createArtifactStorageRecord(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest);
});

// Story: crud:ArtifactStorageRecord:linear:3
bthread("crud:ArtifactStorageRecord:linear:3", function () {
  let artifact_url = "artifact_url_3630_" + Math.floor(Math.random() * 10000);
  let digest = "digest_3630_" + Math.floor(Math.random() * 10000);
  let name = "name_3630_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_3630_" + Math.floor(Math.random() * 10000);
  let path = "path_3630_" + Math.floor(Math.random() * 10000);
  let registry_url = "registry_url_3630_" + Math.floor(Math.random() * 10000);
  let repository = "repository_3630_" + Math.floor(Math.random() * 10000);
  let status = "status_3630_" + Math.floor(Math.random() * 10000);
  let subject_digest = "subject_digest_3630_" + Math.floor(Math.random() * 10000);
  createArtifactStorageRecord(artifact_url, digest, name, org, path, registry_url, repository, status, subject_digest);
});

// Story: crud:Block:linear:1
bthread("crud:Block:linear:1", function () {
  let org = "org_3660_" + Math.floor(Math.random() * 10000);
  let username = "username_3660_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  blockUser(org, username);
  verifyBlockExists(org, username);
  unblockUser(org, username);
  tryToDeleteANonExistingBlock(org, username);
  verifyBlockDoesNotExist(org, username);
});

// Story: crud:Block:linear:2
bthread("crud:Block:linear:2", function () {
  let org = "org_3670_" + Math.floor(Math.random() * 10000);
  let username = "username_3670_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  blockUser(org, username);
  verifyBlockExists(org, username);
  unblockUser(org, username);
  tryToDeleteANonExistingBlock(org, username);
  verifyBlockDoesNotExist(org, username);
});

// Story: crud:Block:linear:3
bthread("crud:Block:linear:3", function () {
  let org = "org_3680_" + Math.floor(Math.random() * 10000);
  let username = "username_3680_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  blockUser(org, username);
  verifyBlockExists(org, username);
  unblockUser(org, username);
  tryToDeleteANonExistingBlock(org, username);
  verifyBlockDoesNotExist(org, username);
});

// Monitor: Block Verification
bthread("monitor:Block", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBlockAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedBlock(org, username), function() {
      bp.log.info(`Monitor Block: Verifying persistence of ID ${id} inside deletion block.`);
        verifyBlockExists(org, username);
    });
  }
});

// Story: crud:OrgInvitation:linear:1
bthread("crud:OrgInvitation:linear:1", function () {
  let email = "email_3710_" + Math.floor(Math.random() * 10000);
  let id = "id_3710_" + Math.floor(Math.random() * 10000);
  let invitee_id = "invitee_id_3710_" + Math.floor(Math.random() * 10000);
  let org = "org_3710_" + Math.floor(Math.random() * 10000);
  let role = "role_3710_" + Math.floor(Math.random() * 10000);
  let team_ids = "team_ids_3710_" + Math.floor(Math.random() * 10000);
  createInvitation(email, id, invitee_id, org, role, team_ids);
});

// Story: crud:OrgInvitation:linear:2
bthread("crud:OrgInvitation:linear:2", function () {
  let email = "email_3720_" + Math.floor(Math.random() * 10000);
  let id = "id_3720_" + Math.floor(Math.random() * 10000);
  let invitee_id = "invitee_id_3720_" + Math.floor(Math.random() * 10000);
  let org = "org_3720_" + Math.floor(Math.random() * 10000);
  let role = "role_3720_" + Math.floor(Math.random() * 10000);
  let team_ids = "team_ids_3720_" + Math.floor(Math.random() * 10000);
  createInvitation(email, id, invitee_id, org, role, team_ids);
});

// Story: crud:OrgInvitation:linear:3
bthread("crud:OrgInvitation:linear:3", function () {
  let email = "email_3730_" + Math.floor(Math.random() * 10000);
  let id = "id_3730_" + Math.floor(Math.random() * 10000);
  let invitee_id = "invitee_id_3730_" + Math.floor(Math.random() * 10000);
  let org = "org_3730_" + Math.floor(Math.random() * 10000);
  let role = "role_3730_" + Math.floor(Math.random() * 10000);
  let team_ids = "team_ids_3730_" + Math.floor(Math.random() * 10000);
  createInvitation(email, id, invitee_id, org, role, team_ids);
});

// Story: crud:IssueType:linear:1
bthread("crud:IssueType:linear:1", function () {
  let color = "color_3760_" + Math.floor(Math.random() * 10000);
  let description = "description_3760_" + Math.floor(Math.random() * 10000);
  let is_enabled = "is_enabled_3760_" + Math.floor(Math.random() * 10000);
  let issue_type_id = "issue_type_id_3760_" + Math.floor(Math.random() * 10000);
  let name = "name_3760_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_3760_" + Math.floor(Math.random() * 10000);
  createIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
  updateIssueType(color, description, is_enabled, issue_type_id, name, org);
  deleteIssueType(color, description, is_enabled, issue_type_id, name, org);
  tryToDeleteANonExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeDoesNotExist(color, description, is_enabled, issue_type_id, name, org);
});

// Story: crud:IssueType:linear:2
bthread("crud:IssueType:linear:2", function () {
  let color = "color_3770_" + Math.floor(Math.random() * 10000);
  let description = "description_3770_" + Math.floor(Math.random() * 10000);
  let is_enabled = "is_enabled_3770_" + Math.floor(Math.random() * 10000);
  let issue_type_id = "issue_type_id_3770_" + Math.floor(Math.random() * 10000);
  let name = "name_3770_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_3770_" + Math.floor(Math.random() * 10000);
  createIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
  updateIssueType(color, description, is_enabled, issue_type_id, name, org);
  deleteIssueType(color, description, is_enabled, issue_type_id, name, org);
  tryToDeleteANonExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeDoesNotExist(color, description, is_enabled, issue_type_id, name, org);
});

// Story: crud:IssueType:linear:3
bthread("crud:IssueType:linear:3", function () {
  let color = "color_3780_" + Math.floor(Math.random() * 10000);
  let description = "description_3780_" + Math.floor(Math.random() * 10000);
  let is_enabled = "is_enabled_3780_" + Math.floor(Math.random() * 10000);
  let issue_type_id = "issue_type_id_3780_" + Math.floor(Math.random() * 10000);
  let name = "name_3780_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_3780_" + Math.floor(Math.random() * 10000);
  createIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
  updateIssueType(color, description, is_enabled, issue_type_id, name, org);
  deleteIssueType(color, description, is_enabled, issue_type_id, name, org);
  tryToDeleteANonExistingIssueType(color, description, is_enabled, issue_type_id, name, org);
  verifyIssueTypeDoesNotExist(color, description, is_enabled, issue_type_id, name, org);
});

// Monitor: IssueType Verification
bthread("monitor:IssueType", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueTypeAdded() });
    let color = (e.data.parameters && e.data.parameters["color"]) ? e.data.parameters["color"] : e.data["color"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let is_enabled = (e.data.parameters && e.data.parameters["is_enabled"]) ? e.data.parameters["is_enabled"] : e.data["is_enabled"];
    let issue_type_id = (e.data.parameters && e.data.parameters["issue_type_id"]) ? e.data.parameters["issue_type_id"] : e.data["issue_type_id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    // Block Deletion while Verifying Existence
    block(matchDeletedIssueType(color, description, is_enabled, issue_type_id, name, org), function() {
      bp.log.info(`Monitor IssueType: Verifying persistence of ID ${id} inside deletion block.`);
        verifyIssueTypeExists(color, description, is_enabled, issue_type_id, name, org);
    });
  }
});

// Story: crud:Membership:linear:1
bthread("crud:Membership:linear:1", function () {
  let org = "org_3810_" + Math.floor(Math.random() * 10000);
  let role = "role_3810_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_3810_" + Math.floor(Math.random() * 10000);
  let username = "username_3810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addOrUpdateMembership(org, role, team_slug, username);
  verifyMembershipExists(org, role, team_slug, username);
  removeMembershipForUser(org, role, team_slug, username);
  tryToDeleteANonExistingMembership(org, role, team_slug, username);
  verifyMembershipDoesNotExist(org, role, team_slug, username);
});

// Story: crud:Membership:linear:2
bthread("crud:Membership:linear:2", function () {
  let org = "org_3820_" + Math.floor(Math.random() * 10000);
  let role = "role_3820_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_3820_" + Math.floor(Math.random() * 10000);
  let username = "username_3820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addOrUpdateMembership(org, role, team_slug, username);
  verifyMembershipExists(org, role, team_slug, username);
  removeMembershipForUser(org, role, team_slug, username);
  tryToDeleteANonExistingMembership(org, role, team_slug, username);
  verifyMembershipDoesNotExist(org, role, team_slug, username);
});

// Story: crud:Membership:linear:3
bthread("crud:Membership:linear:3", function () {
  let org = "org_3830_" + Math.floor(Math.random() * 10000);
  let role = "role_3830_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_3830_" + Math.floor(Math.random() * 10000);
  let username = "username_3830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addOrUpdateMembership(org, role, team_slug, username);
  verifyMembershipExists(org, role, team_slug, username);
  removeMembershipForUser(org, role, team_slug, username);
  tryToDeleteANonExistingMembership(org, role, team_slug, username);
  verifyMembershipDoesNotExist(org, role, team_slug, username);
});

// Monitor: Membership Verification
bthread("monitor:Membership", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMembershipAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let role = (e.data.parameters && e.data.parameters["role"]) ? e.data.parameters["role"] : e.data["role"];
    let team_slug = (e.data.parameters && e.data.parameters["team_slug"]) ? e.data.parameters["team_slug"] : e.data["team_slug"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedMembership(org, role, team_slug, username), function() {
      bp.log.info(`Monitor Membership: Verifying persistence of ID ${id} inside deletion block.`);
        verifyMembershipExists(org, role, team_slug, username);
    });
  }
});

// Story: crud:OrganizationRole:linear:1
bthread("crud:OrganizationRole:linear:1", function () {
  let org = "org_3860_" + Math.floor(Math.random() * 10000);
  let role_id = "role_id_3860_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_3860_" + Math.floor(Math.random() * 10000);
  assignTeamToOrgRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  revokeOrgRoleFromTeam(org, role_id, team_slug);
  tryToDeleteANonExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleDoesNotExist(org, role_id, team_slug);
});

// Story: crud:OrganizationRole:linear:2
bthread("crud:OrganizationRole:linear:2", function () {
  let org = "org_3870_" + Math.floor(Math.random() * 10000);
  let role_id = "role_id_3870_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_3870_" + Math.floor(Math.random() * 10000);
  assignTeamToOrgRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  revokeOrgRoleFromTeam(org, role_id, team_slug);
  tryToDeleteANonExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleDoesNotExist(org, role_id, team_slug);
});

// Story: crud:OrganizationRole:linear:3
bthread("crud:OrganizationRole:linear:3", function () {
  let org = "org_3880_" + Math.floor(Math.random() * 10000);
  let role_id = "role_id_3880_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_3880_" + Math.floor(Math.random() * 10000);
  assignTeamToOrgRole(org, role_id, team_slug);
  verifyOrganizationRoleExists(org, role_id, team_slug);
  revokeOrgRoleFromTeam(org, role_id, team_slug);
  tryToDeleteANonExistingOrganizationRole(org, role_id, team_slug);
  verifyOrganizationRoleDoesNotExist(org, role_id, team_slug);
});

// Monitor: OrganizationRole Verification
bthread("monitor:OrganizationRole", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationRoleAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let role_id = (e.data.parameters && e.data.parameters["role_id"]) ? e.data.parameters["role_id"] : e.data["role_id"];
    let team_slug = (e.data.parameters && e.data.parameters["team_slug"]) ? e.data.parameters["team_slug"] : e.data["team_slug"];
    // Block Deletion while Verifying Existence
    block(matchDeletedOrganizationRole(org, role_id, team_slug), function() {
      bp.log.info(`Monitor OrganizationRole: Verifying persistence of ID ${id} inside deletion block.`);
        verifyOrganizationRoleExists(org, role_id, team_slug);
    });
  }
});

// Story: crud:OrganizationRoleUser:linear:1
bthread("crud:OrganizationRoleUser:linear:1", function () {
  let org = "org_3910_" + Math.floor(Math.random() * 10000);
  let role_id = "role_id_3910_" + Math.floor(Math.random() * 10000);
  let username = "username_3910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  assignUserToOrganizationRole(org, role_id, username);
});

// Story: crud:OrganizationRoleUser:linear:2
bthread("crud:OrganizationRoleUser:linear:2", function () {
  let org = "org_3920_" + Math.floor(Math.random() * 10000);
  let role_id = "role_id_3920_" + Math.floor(Math.random() * 10000);
  let username = "username_3920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  assignUserToOrganizationRole(org, role_id, username);
});

// Story: crud:OrganizationRoleUser:linear:3
bthread("crud:OrganizationRoleUser:linear:3", function () {
  let org = "org_3930_" + Math.floor(Math.random() * 10000);
  let role_id = "role_id_3930_" + Math.floor(Math.random() * 10000);
  let username = "username_3930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  assignUserToOrganizationRole(org, role_id, username);
});

// Story: crud:OutsideCollaborator:linear:1
bthread("crud:OutsideCollaborator:linear:1", function () {
  let async = "async_3960_" + Math.floor(Math.random() * 10000);
  let org = "org_3960_" + Math.floor(Math.random() * 10000);
  let username = "username_3960_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  convertMemberToOutsideCollaborator(async, org, username);
});

// Story: crud:OutsideCollaborator:linear:2
bthread("crud:OutsideCollaborator:linear:2", function () {
  let async = "async_3970_" + Math.floor(Math.random() * 10000);
  let org = "org_3970_" + Math.floor(Math.random() * 10000);
  let username = "username_3970_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  convertMemberToOutsideCollaborator(async, org, username);
});

// Story: crud:OutsideCollaborator:linear:3
bthread("crud:OutsideCollaborator:linear:3", function () {
  let async = "async_3980_" + Math.floor(Math.random() * 10000);
  let org = "org_3980_" + Math.floor(Math.random() * 10000);
  let username = "username_3980_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  convertMemberToOutsideCollaborator(async, org, username);
});

// Story: crud:PersonalAccessToken:linear:1
bthread("crud:PersonalAccessToken:linear:1", function () {
  let action = "action_4010_" + Math.floor(Math.random() * 10000);
  let org = "org_4010_" + Math.floor(Math.random() * 10000);
  let pat_id = "pat_id_4010_" + Math.floor(Math.random() * 10000);
  let pat_ids = "pat_ids_4010_" + Math.floor(Math.random() * 10000);
  updatePersonalAccessTokensAccess(action, org, pat_id, pat_ids);
});

// Story: crud:PersonalAccessToken:linear:2
bthread("crud:PersonalAccessToken:linear:2", function () {
  let action = "action_4020_" + Math.floor(Math.random() * 10000);
  let org = "org_4020_" + Math.floor(Math.random() * 10000);
  let pat_id = "pat_id_4020_" + Math.floor(Math.random() * 10000);
  let pat_ids = "pat_ids_4020_" + Math.floor(Math.random() * 10000);
  updatePersonalAccessTokensAccess(action, org, pat_id, pat_ids);
});

// Story: crud:PersonalAccessToken:linear:3
bthread("crud:PersonalAccessToken:linear:3", function () {
  let action = "action_4030_" + Math.floor(Math.random() * 10000);
  let org = "org_4030_" + Math.floor(Math.random() * 10000);
  let pat_id = "pat_id_4030_" + Math.floor(Math.random() * 10000);
  let pat_ids = "pat_ids_4030_" + Math.floor(Math.random() * 10000);
  updatePersonalAccessTokensAccess(action, org, pat_id, pat_ids);
});

// Story: crud:PublicMember:linear:1
bthread("crud:PublicMember:linear:1", function () {
  let org = "org_4060_" + Math.floor(Math.random() * 10000);
  let username = "username_4060_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  setPublicMembership(org, username);
  verifyPublicMemberExists(org, username);
  removePublicMembership(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:linear:2
bthread("crud:PublicMember:linear:2", function () {
  let org = "org_4070_" + Math.floor(Math.random() * 10000);
  let username = "username_4070_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  setPublicMembership(org, username);
  verifyPublicMemberExists(org, username);
  removePublicMembership(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:linear:3
bthread("crud:PublicMember:linear:3", function () {
  let org = "org_4080_" + Math.floor(Math.random() * 10000);
  let username = "username_4080_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  setPublicMembership(org, username);
  verifyPublicMemberExists(org, username);
  removePublicMembership(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Monitor: PublicMember Verification
bthread("monitor:PublicMember", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPublicMemberAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPublicMember(org, username), function() {
      bp.log.info(`Monitor PublicMember: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPublicMemberExists(org, username);
    });
  }
});

// Story: crud:SecurityManagerTeam:linear:1
bthread("crud:SecurityManagerTeam:linear:1", function () {
  let org = "org_4110_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_4110_" + Math.floor(Math.random() * 10000);
  addSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
  removeSecurityManagerTeam(org, team_slug);
  tryToDeleteANonExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamDoesNotExist(org, team_slug);
});

// Story: crud:SecurityManagerTeam:linear:2
bthread("crud:SecurityManagerTeam:linear:2", function () {
  let org = "org_4120_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_4120_" + Math.floor(Math.random() * 10000);
  addSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
  removeSecurityManagerTeam(org, team_slug);
  tryToDeleteANonExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamDoesNotExist(org, team_slug);
});

// Story: crud:SecurityManagerTeam:linear:3
bthread("crud:SecurityManagerTeam:linear:3", function () {
  let org = "org_4130_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_4130_" + Math.floor(Math.random() * 10000);
  addSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamExists(org, team_slug);
  removeSecurityManagerTeam(org, team_slug);
  tryToDeleteANonExistingSecurityManagerTeam(org, team_slug);
  verifySecurityManagerTeamDoesNotExist(org, team_slug);
});

// Monitor: SecurityManagerTeam Verification
bthread("monitor:SecurityManagerTeam", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySecurityManagerTeamAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let team_slug = (e.data.parameters && e.data.parameters["team_slug"]) ? e.data.parameters["team_slug"] : e.data["team_slug"];
    // Block Deletion while Verifying Existence
    block(matchDeletedSecurityManagerTeam(org, team_slug), function() {
      bp.log.info(`Monitor SecurityManagerTeam: Verifying persistence of ID ${id} inside deletion block.`);
        verifySecurityManagerTeamExists(org, team_slug);
    });
  }
});

// Story: crud:ImmutableReleasesRepository:linear:1
bthread("crud:ImmutableReleasesRepository:linear:1", function () {
  let org = "org_4160_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_4160_" + Math.floor(Math.random() * 10000);
  enableImmutableReleasesRepository(org, repository_id);
});

// Story: crud:ImmutableReleasesRepository:linear:2
bthread("crud:ImmutableReleasesRepository:linear:2", function () {
  let org = "org_4170_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_4170_" + Math.floor(Math.random() * 10000);
  enableImmutableReleasesRepository(org, repository_id);
});

// Story: crud:ImmutableReleasesRepository:linear:3
bthread("crud:ImmutableReleasesRepository:linear:3", function () {
  let org = "org_4180_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_4180_" + Math.floor(Math.random() * 10000);
  enableImmutableReleasesRepository(org, repository_id);
});

// Story: crud:SecurityProductEnablement:linear:1
bthread("crud:SecurityProductEnablement:linear:1", function () {
  let enablement = "enablement_4210_" + Math.floor(Math.random() * 10000);
  let id = "id_4210_" + Math.floor(Math.random() * 10000);
  let org = "org_4210_" + Math.floor(Math.random() * 10000);
  let query_suite = "query_suite_4210_" + Math.floor(Math.random() * 10000);
  let security_product = "security_product_4210_" + Math.floor(Math.random() * 10000);
  enableOrDisableSecurityProduct(enablement, id, org, query_suite, security_product);
});

// Story: crud:SecurityProductEnablement:linear:2
bthread("crud:SecurityProductEnablement:linear:2", function () {
  let enablement = "enablement_4220_" + Math.floor(Math.random() * 10000);
  let id = "id_4220_" + Math.floor(Math.random() * 10000);
  let org = "org_4220_" + Math.floor(Math.random() * 10000);
  let query_suite = "query_suite_4220_" + Math.floor(Math.random() * 10000);
  let security_product = "security_product_4220_" + Math.floor(Math.random() * 10000);
  enableOrDisableSecurityProduct(enablement, id, org, query_suite, security_product);
});

// Story: crud:SecurityProductEnablement:linear:3
bthread("crud:SecurityProductEnablement:linear:3", function () {
  let enablement = "enablement_4230_" + Math.floor(Math.random() * 10000);
  let id = "id_4230_" + Math.floor(Math.random() * 10000);
  let org = "org_4230_" + Math.floor(Math.random() * 10000);
  let query_suite = "query_suite_4230_" + Math.floor(Math.random() * 10000);
  let security_product = "security_product_4230_" + Math.floor(Math.random() * 10000);
  enableOrDisableSecurityProduct(enablement, id, org, query_suite, security_product);
});

// Story: crud:CodespacesAccessUsers:linear:1
bthread("crud:CodespacesAccessUsers:linear:1", function () {
  let org = "org_4260_" + Math.floor(Math.random() * 10000);
  let selected_usernames = "selected_usernames_4260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCodespacesAccessUsers(org, selected_usernames);
});

// Story: crud:CodespacesAccessUsers:linear:2
bthread("crud:CodespacesAccessUsers:linear:2", function () {
  let org = "org_4270_" + Math.floor(Math.random() * 10000);
  let selected_usernames = "selected_usernames_4270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCodespacesAccessUsers(org, selected_usernames);
});

// Story: crud:CodespacesAccessUsers:linear:3
bthread("crud:CodespacesAccessUsers:linear:3", function () {
  let org = "org_4280_" + Math.floor(Math.random() * 10000);
  let selected_usernames = "selected_usernames_4280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCodespacesAccessUsers(org, selected_usernames);
});

// Story: crud:OrgSecret:linear:1
bthread("crud:OrgSecret:linear:1", function () {
  let encrypted_value = "encrypted_value_4310_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4310_" + Math.floor(Math.random() * 10000);
  let org = "org_4310_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_4310_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_4310_" + Math.floor(Math.random() * 10000);
  createOrUpdateOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifyOrgSecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifyOrgSecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:OrgSecret:linear:2
bthread("crud:OrgSecret:linear:2", function () {
  let encrypted_value = "encrypted_value_4320_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4320_" + Math.floor(Math.random() * 10000);
  let org = "org_4320_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_4320_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_4320_" + Math.floor(Math.random() * 10000);
  createOrUpdateOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifyOrgSecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifyOrgSecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Story: crud:OrgSecret:linear:3
bthread("crud:OrgSecret:linear:3", function () {
  let encrypted_value = "encrypted_value_4330_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4330_" + Math.floor(Math.random() * 10000);
  let org = "org_4330_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_4330_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_4330_" + Math.floor(Math.random() * 10000);
  createOrUpdateOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifyOrgSecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  deleteOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  tryToDeleteANonExistingOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
  verifyOrgSecretDoesNotExist(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
});

// Monitor: OrgSecret Verification
bthread("monitor:OrgSecret", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrgSecretAdded() });
    let encrypted_value = (e.data.parameters && e.data.parameters["encrypted_value"]) ? e.data.parameters["encrypted_value"] : e.data["encrypted_value"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let secret_name = (e.data.parameters && e.data.parameters["secret_name"]) ? e.data.parameters["secret_name"] : e.data["secret_name"];
    let selected_repository_ids = (e.data.parameters && e.data.parameters["selected_repository_ids"]) ? e.data.parameters["selected_repository_ids"] : e.data["selected_repository_ids"];
    let visibility = (e.data.parameters && e.data.parameters["visibility"]) ? e.data.parameters["visibility"] : e.data["visibility"];
    // Block Deletion while Verifying Existence
    block(matchDeletedOrgSecret(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility), function() {
      bp.log.info(`Monitor OrgSecret: Verifying persistence of ID ${id} inside deletion block.`);
        verifyOrgSecretExists(encrypted_value, key_id, org, secret_name, selected_repository_ids, visibility);
    });
  }
});

// Story: crud:OrgSecretSelectedRepository:linear:1
bthread("crud:OrgSecretSelectedRepository:linear:1", function () {
  let org = "org_4360_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_4360_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addSelectedRepoToOrgSecret(org, repository_id, secret_name);
});

// Story: crud:OrgSecretSelectedRepository:linear:2
bthread("crud:OrgSecretSelectedRepository:linear:2", function () {
  let org = "org_4370_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_4370_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addSelectedRepoToOrgSecret(org, repository_id, secret_name);
});

// Story: crud:OrgSecretSelectedRepository:linear:3
bthread("crud:OrgSecretSelectedRepository:linear:3", function () {
  let org = "org_4380_" + Math.floor(Math.random() * 10000);
  let repository_id = "repository_id_4380_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addSelectedRepoToOrgSecret(org, repository_id, secret_name);
});

// Story: crud:Codespace:linear:1
bthread("crud:Codespace:linear:1", function () {
  let client_ip = "client_ip_4410_" + Math.floor(Math.random() * 10000);
  let codespace_name = "codespace_name_4410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let devcontainer_path = "devcontainer_path_4410_" + Math.floor(Math.random() * 10000);
  let display_name = "display_name_4410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let geo = "geo_4410_" + Math.floor(Math.random() * 10000);
  let idle_timeout_minutes = "idle_timeout_minutes_4410_" + Math.floor(Math.random() * 10000);
  let location = "location_4410_" + Math.floor(Math.random() * 10000);
  let machine = "machine_4410_" + Math.floor(Math.random() * 10000);
  let multi_repo_permissions_opt_out = "multi_repo_permissions_opt_out_4410_" + Math.floor(Math.random() * 10000);
  let name = "name_4410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_4410_" + Math.floor(Math.random() * 10000);
  let owner = "owner_4410_" + Math.floor(Math.random() * 10000);
  let page = "page_4410_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_4410_" + Math.floor(Math.random() * 10000);
  let _private = "private_4410_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_4410_" + Math.floor(Math.random() * 10000);
  let repo = "repo_4410_" + Math.floor(Math.random() * 10000);
  let retention_period_minutes = "retention_period_minutes_4410_" + Math.floor(Math.random() * 10000);
  let username = "username_4410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let working_directory = "working_directory_4410_" + Math.floor(Math.random() * 10000);
  publishCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  verifyCodespaceExists(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  startCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  stopCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  tryToDeleteANonExistingCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  verifyCodespaceDoesNotExist(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
});

// Story: crud:Codespace:linear:2
bthread("crud:Codespace:linear:2", function () {
  let client_ip = "client_ip_4420_" + Math.floor(Math.random() * 10000);
  let codespace_name = "codespace_name_4420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let devcontainer_path = "devcontainer_path_4420_" + Math.floor(Math.random() * 10000);
  let display_name = "display_name_4420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let geo = "geo_4420_" + Math.floor(Math.random() * 10000);
  let idle_timeout_minutes = "idle_timeout_minutes_4420_" + Math.floor(Math.random() * 10000);
  let location = "location_4420_" + Math.floor(Math.random() * 10000);
  let machine = "machine_4420_" + Math.floor(Math.random() * 10000);
  let multi_repo_permissions_opt_out = "multi_repo_permissions_opt_out_4420_" + Math.floor(Math.random() * 10000);
  let name = "name_4420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_4420_" + Math.floor(Math.random() * 10000);
  let owner = "owner_4420_" + Math.floor(Math.random() * 10000);
  let page = "page_4420_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_4420_" + Math.floor(Math.random() * 10000);
  let _private = "private_4420_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_4420_" + Math.floor(Math.random() * 10000);
  let repo = "repo_4420_" + Math.floor(Math.random() * 10000);
  let retention_period_minutes = "retention_period_minutes_4420_" + Math.floor(Math.random() * 10000);
  let username = "username_4420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let working_directory = "working_directory_4420_" + Math.floor(Math.random() * 10000);
  publishCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  verifyCodespaceExists(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  startCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  stopCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  tryToDeleteANonExistingCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  verifyCodespaceDoesNotExist(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
});

// Story: crud:Codespace:linear:3
bthread("crud:Codespace:linear:3", function () {
  let client_ip = "client_ip_4430_" + Math.floor(Math.random() * 10000);
  let codespace_name = "codespace_name_4430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let devcontainer_path = "devcontainer_path_4430_" + Math.floor(Math.random() * 10000);
  let display_name = "display_name_4430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let geo = "geo_4430_" + Math.floor(Math.random() * 10000);
  let idle_timeout_minutes = "idle_timeout_minutes_4430_" + Math.floor(Math.random() * 10000);
  let location = "location_4430_" + Math.floor(Math.random() * 10000);
  let machine = "machine_4430_" + Math.floor(Math.random() * 10000);
  let multi_repo_permissions_opt_out = "multi_repo_permissions_opt_out_4430_" + Math.floor(Math.random() * 10000);
  let name = "name_4430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_4430_" + Math.floor(Math.random() * 10000);
  let owner = "owner_4430_" + Math.floor(Math.random() * 10000);
  let page = "page_4430_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_4430_" + Math.floor(Math.random() * 10000);
  let _private = "private_4430_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_4430_" + Math.floor(Math.random() * 10000);
  let repo = "repo_4430_" + Math.floor(Math.random() * 10000);
  let retention_period_minutes = "retention_period_minutes_4430_" + Math.floor(Math.random() * 10000);
  let username = "username_4430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let working_directory = "working_directory_4430_" + Math.floor(Math.random() * 10000);
  publishCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  verifyCodespaceExists(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  startCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  stopCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  tryToDeleteANonExistingCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
  verifyCodespaceDoesNotExist(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
});

// Monitor: Codespace Verification
bthread("monitor:Codespace", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCodespaceAdded() });
    let client_ip = (e.data.parameters && e.data.parameters["client_ip"]) ? e.data.parameters["client_ip"] : e.data["client_ip"];
    let codespace_name = (e.data.parameters && e.data.parameters["codespace_name"]) ? e.data.parameters["codespace_name"] : e.data["codespace_name"];
    let devcontainer_path = (e.data.parameters && e.data.parameters["devcontainer_path"]) ? e.data.parameters["devcontainer_path"] : e.data["devcontainer_path"];
    let display_name = (e.data.parameters && e.data.parameters["display_name"]) ? e.data.parameters["display_name"] : e.data["display_name"];
    let geo = (e.data.parameters && e.data.parameters["geo"]) ? e.data.parameters["geo"] : e.data["geo"];
    let idle_timeout_minutes = (e.data.parameters && e.data.parameters["idle_timeout_minutes"]) ? e.data.parameters["idle_timeout_minutes"] : e.data["idle_timeout_minutes"];
    let location = (e.data.parameters && e.data.parameters["location"]) ? e.data.parameters["location"] : e.data["location"];
    let machine = (e.data.parameters && e.data.parameters["machine"]) ? e.data.parameters["machine"] : e.data["machine"];
    let multi_repo_permissions_opt_out = (e.data.parameters && e.data.parameters["multi_repo_permissions_opt_out"]) ? e.data.parameters["multi_repo_permissions_opt_out"] : e.data["multi_repo_permissions_opt_out"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let per_page = (e.data.parameters && e.data.parameters["per-page"]) ? e.data.parameters["per-page"] : e.data["per-page"];
    let _private = (e.data.parameters && e.data.parameters["private"]) ? e.data.parameters["private"] : e.data["private"];
    let pull_number = (e.data.parameters && e.data.parameters["pull_number"]) ? e.data.parameters["pull_number"] : e.data["pull_number"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let retention_period_minutes = (e.data.parameters && e.data.parameters["retention_period_minutes"]) ? e.data.parameters["retention_period_minutes"] : e.data["retention_period_minutes"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    let working_directory = (e.data.parameters && e.data.parameters["working_directory"]) ? e.data.parameters["working_directory"] : e.data["working_directory"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCodespace(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory), function() {
      bp.log.info(`Monitor Codespace: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCodespaceExists(client_ip, codespace_name, devcontainer_path, display_name, geo, idle_timeout_minutes, location, machine, multi_repo_permissions_opt_out, name, org, owner, page, per_page, _private, pull_number, repo, retention_period_minutes, username, working_directory);
    });
  }
});

// Story: crud:CodespaceSecret:linear:1
bthread("crud:CodespaceSecret:linear:1", function () {
  let encrypted_value = "encrypted_value_4460_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4460_" + Math.floor(Math.random() * 10000);
  let owner = "owner_4460_" + Math.floor(Math.random() * 10000);
  let page = "page_4460_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_4460_" + Math.floor(Math.random() * 10000);
  let repo = "repo_4460_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4460_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  verifyCodespaceSecretExists(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  deleteSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  tryToDeleteANonExistingCodespaceSecret(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  verifyCodespaceSecretDoesNotExist(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
});

// Story: crud:CodespaceSecret:linear:2
bthread("crud:CodespaceSecret:linear:2", function () {
  let encrypted_value = "encrypted_value_4470_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4470_" + Math.floor(Math.random() * 10000);
  let owner = "owner_4470_" + Math.floor(Math.random() * 10000);
  let page = "page_4470_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_4470_" + Math.floor(Math.random() * 10000);
  let repo = "repo_4470_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4470_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  verifyCodespaceSecretExists(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  deleteSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  tryToDeleteANonExistingCodespaceSecret(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  verifyCodespaceSecretDoesNotExist(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
});

// Story: crud:CodespaceSecret:linear:3
bthread("crud:CodespaceSecret:linear:3", function () {
  let encrypted_value = "encrypted_value_4480_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4480_" + Math.floor(Math.random() * 10000);
  let owner = "owner_4480_" + Math.floor(Math.random() * 10000);
  let page = "page_4480_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_4480_" + Math.floor(Math.random() * 10000);
  let repo = "repo_4480_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_4480_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  verifyCodespaceSecretExists(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  deleteSecretForAuthenticatedUser(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  tryToDeleteANonExistingCodespaceSecret(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
  verifyCodespaceSecretDoesNotExist(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
});

// Monitor: CodespaceSecret Verification
bthread("monitor:CodespaceSecret", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCodespaceSecretAdded() });
    let encrypted_value = (e.data.parameters && e.data.parameters["encrypted_value"]) ? e.data.parameters["encrypted_value"] : e.data["encrypted_value"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let per_page = (e.data.parameters && e.data.parameters["per-page"]) ? e.data.parameters["per-page"] : e.data["per-page"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let secret_name = (e.data.parameters && e.data.parameters["secret_name"]) ? e.data.parameters["secret_name"] : e.data["secret_name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCodespaceSecret(encrypted_value, key_id, owner, page, per_page, repo, secret_name), function() {
      bp.log.info(`Monitor CodespaceSecret: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCodespaceSecretExists(encrypted_value, key_id, owner, page, per_page, repo, secret_name);
    });
  }
});

// Story: crud:UserBlock:linear:1
bthread("crud:UserBlock:linear:1", function () {
  let username = "username_4510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  blockUser(username);
  verifyUserBlockExists(username);
  unblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Story: crud:UserBlock:linear:2
bthread("crud:UserBlock:linear:2", function () {
  let username = "username_4520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  blockUser(username);
  verifyUserBlockExists(username);
  unblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Story: crud:UserBlock:linear:3
bthread("crud:UserBlock:linear:3", function () {
  let username = "username_4530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  blockUser(username);
  verifyUserBlockExists(username);
  unblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Monitor: UserBlock Verification
bthread("monitor:UserBlock", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserBlockAdded() });
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedUserBlock(username), function() {
      bp.log.info(`Monitor UserBlock: Verifying persistence of ID ${id} inside deletion block.`);
        verifyUserBlockExists(username);
    });
  }
});

// Story: crud:UserEmail:linear:1
bthread("crud:UserEmail:linear:1", function () {
  let emails = "emails_4560_" + Math.floor(Math.random() * 10000);
  let id = "id_4560_" + Math.floor(Math.random() * 10000);
  addEmails(emails, id);
});

// Story: crud:UserEmail:linear:2
bthread("crud:UserEmail:linear:2", function () {
  let emails = "emails_4570_" + Math.floor(Math.random() * 10000);
  let id = "id_4570_" + Math.floor(Math.random() * 10000);
  addEmails(emails, id);
});

// Story: crud:UserEmail:linear:3
bthread("crud:UserEmail:linear:3", function () {
  let emails = "emails_4580_" + Math.floor(Math.random() * 10000);
  let id = "id_4580_" + Math.floor(Math.random() * 10000);
  addEmails(emails, id);
});

// Story: crud:UserFollowing:linear:1
bthread("crud:UserFollowing:linear:1", function () {
  let username = "username_4610_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  followUser(username);
  verifyUserFollowingExists(username);
  unfollowUser(username);
  tryToDeleteANonExistingUserFollowing(username);
  verifyUserFollowingDoesNotExist(username);
});

// Story: crud:UserFollowing:linear:2
bthread("crud:UserFollowing:linear:2", function () {
  let username = "username_4620_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  followUser(username);
  verifyUserFollowingExists(username);
  unfollowUser(username);
  tryToDeleteANonExistingUserFollowing(username);
  verifyUserFollowingDoesNotExist(username);
});

// Story: crud:UserFollowing:linear:3
bthread("crud:UserFollowing:linear:3", function () {
  let username = "username_4630_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  followUser(username);
  verifyUserFollowingExists(username);
  unfollowUser(username);
  tryToDeleteANonExistingUserFollowing(username);
  verifyUserFollowingDoesNotExist(username);
});

// Monitor: UserFollowing Verification
bthread("monitor:UserFollowing", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserFollowingAdded() });
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedUserFollowing(username), function() {
      bp.log.info(`Monitor UserFollowing: Verifying persistence of ID ${id} inside deletion block.`);
        verifyUserFollowingExists(username);
    });
  }
});

// Story: crud:UserGpgKey:linear:1
bthread("crud:UserGpgKey:linear:1", function () {
  let armored_public_key = "armored_public_key_4660_" + Math.floor(Math.random() * 10000);
  let gpg_key_id = "gpg_key_id_4660_" + Math.floor(Math.random() * 10000);
  let name = "name_4660_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
  deleteGpgKey(armored_public_key, gpg_key_id, name);
  tryToDeleteANonExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyDoesNotExist(armored_public_key, gpg_key_id, name);
});

// Story: crud:UserGpgKey:linear:2
bthread("crud:UserGpgKey:linear:2", function () {
  let armored_public_key = "armored_public_key_4670_" + Math.floor(Math.random() * 10000);
  let gpg_key_id = "gpg_key_id_4670_" + Math.floor(Math.random() * 10000);
  let name = "name_4670_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
  deleteGpgKey(armored_public_key, gpg_key_id, name);
  tryToDeleteANonExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyDoesNotExist(armored_public_key, gpg_key_id, name);
});

// Story: crud:UserGpgKey:linear:3
bthread("crud:UserGpgKey:linear:3", function () {
  let armored_public_key = "armored_public_key_4680_" + Math.floor(Math.random() * 10000);
  let gpg_key_id = "gpg_key_id_4680_" + Math.floor(Math.random() * 10000);
  let name = "name_4680_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
  deleteGpgKey(armored_public_key, gpg_key_id, name);
  tryToDeleteANonExistingUserGpgKey(armored_public_key, gpg_key_id, name);
  verifyUserGpgKeyDoesNotExist(armored_public_key, gpg_key_id, name);
});

// Monitor: UserGpgKey Verification
bthread("monitor:UserGpgKey", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserGpgKeyAdded() });
    let armored_public_key = (e.data.parameters && e.data.parameters["armored_public_key"]) ? e.data.parameters["armored_public_key"] : e.data["armored_public_key"];
    let gpg_key_id = (e.data.parameters && e.data.parameters["gpg_key_id"]) ? e.data.parameters["gpg_key_id"] : e.data["gpg_key_id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedUserGpgKey(armored_public_key, gpg_key_id, name), function() {
      bp.log.info(`Monitor UserGpgKey: Verifying persistence of ID ${id} inside deletion block.`);
        verifyUserGpgKeyExists(armored_public_key, gpg_key_id, name);
    });
  }
});

// Story: crud:PublicSSHKey:linear:1
bthread("crud:PublicSSHKey:linear:1", function () {
  let key = "key_4710_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4710_" + Math.floor(Math.random() * 10000);
  let title = "title_4710_" + Math.floor(Math.random() * 10000);
  createPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
  deletePublicSSHKey(key, key_id, title);
  tryToDeleteANonExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyDoesNotExist(key, key_id, title);
});

// Story: crud:PublicSSHKey:linear:2
bthread("crud:PublicSSHKey:linear:2", function () {
  let key = "key_4720_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4720_" + Math.floor(Math.random() * 10000);
  let title = "title_4720_" + Math.floor(Math.random() * 10000);
  createPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
  deletePublicSSHKey(key, key_id, title);
  tryToDeleteANonExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyDoesNotExist(key, key_id, title);
});

// Story: crud:PublicSSHKey:linear:3
bthread("crud:PublicSSHKey:linear:3", function () {
  let key = "key_4730_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_4730_" + Math.floor(Math.random() * 10000);
  let title = "title_4730_" + Math.floor(Math.random() * 10000);
  createPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyExists(key, key_id, title);
  deletePublicSSHKey(key, key_id, title);
  tryToDeleteANonExistingPublicSSHKey(key, key_id, title);
  verifyPublicSSHKeyDoesNotExist(key, key_id, title);
});

// Monitor: PublicSSHKey Verification
bthread("monitor:PublicSSHKey", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPublicSSHKeyAdded() });
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPublicSSHKey(key, key_id, title), function() {
      bp.log.info(`Monitor PublicSSHKey: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPublicSSHKeyExists(key, key_id, title);
    });
  }
});

// Story: crud:SocialAccount:linear:1
bthread("crud:SocialAccount:linear:1", function () {
  let account_urls = "account_urls_4760_" + Math.floor(Math.random() * 10000);
  let username = "username_4760_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addSocialAccount(account_urls, username);
  verifySocialAccountExists(account_urls, username);
});

// Story: crud:SocialAccount:linear:2
bthread("crud:SocialAccount:linear:2", function () {
  let account_urls = "account_urls_4770_" + Math.floor(Math.random() * 10000);
  let username = "username_4770_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addSocialAccount(account_urls, username);
  verifySocialAccountExists(account_urls, username);
});

// Story: crud:SocialAccount:linear:3
bthread("crud:SocialAccount:linear:3", function () {
  let account_urls = "account_urls_4780_" + Math.floor(Math.random() * 10000);
  let username = "username_4780_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addSocialAccount(account_urls, username);
  verifySocialAccountExists(account_urls, username);
});

// Monitor: SocialAccount Verification
bthread("monitor:SocialAccount", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySocialAccountAdded() });
    let account_urls = (e.data.parameters && e.data.parameters["account_urls"]) ? e.data.parameters["account_urls"] : e.data["account_urls"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Monitor SocialAccount: Verifying existence (Deletion skipped due to dependencies)
    verifySocialAccountExists(account_urls, username);
  }
});

// Story: crud:SSHSigningKey:linear:1
bthread("crud:SSHSigningKey:linear:1", function () {
  let key = "key_4810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let ssh_signing_key_id = "ssh_signing_key_id_4810_" + Math.floor(Math.random() * 10000);
  let title = "title_4810_" + Math.floor(Math.random() * 10000);
  createSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
  deleteSSHSigningKey(key, ssh_signing_key_id, title);
  tryToDeleteANonExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyDoesNotExist(key, ssh_signing_key_id, title);
});

// Story: crud:SSHSigningKey:linear:2
bthread("crud:SSHSigningKey:linear:2", function () {
  let key = "key_4820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let ssh_signing_key_id = "ssh_signing_key_id_4820_" + Math.floor(Math.random() * 10000);
  let title = "title_4820_" + Math.floor(Math.random() * 10000);
  createSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
  deleteSSHSigningKey(key, ssh_signing_key_id, title);
  tryToDeleteANonExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyDoesNotExist(key, ssh_signing_key_id, title);
});

// Story: crud:SSHSigningKey:linear:3
bthread("crud:SSHSigningKey:linear:3", function () {
  let key = "key_4830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let ssh_signing_key_id = "ssh_signing_key_id_4830_" + Math.floor(Math.random() * 10000);
  let title = "title_4830_" + Math.floor(Math.random() * 10000);
  createSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
  deleteSSHSigningKey(key, ssh_signing_key_id, title);
  tryToDeleteANonExistingSSHSigningKey(key, ssh_signing_key_id, title);
  verifySSHSigningKeyDoesNotExist(key, ssh_signing_key_id, title);
});

// Monitor: SSHSigningKey Verification
bthread("monitor:SSHSigningKey", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySSHSigningKeyAdded() });
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let ssh_signing_key_id = (e.data.parameters && e.data.parameters["ssh_signing_key_id"]) ? e.data.parameters["ssh_signing_key_id"] : e.data["ssh_signing_key_id"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedSSHSigningKey(key, ssh_signing_key_id, title), function() {
      bp.log.info(`Monitor SSHSigningKey: Verifying persistence of ID ${id} inside deletion block.`);
        verifySSHSigningKeyExists(key, ssh_signing_key_id, title);
    });
  }
});

// Story: crud:AppManifestConversion:linear:1
bthread("crud:AppManifestConversion:linear:1", function () {
  let code = "code_4860_" + Math.floor(Math.random() * 10000);
  let id = "id_4860_" + Math.floor(Math.random() * 10000);
  createAppFromManifest(code, id);
});

// Story: crud:AppManifestConversion:linear:2
bthread("crud:AppManifestConversion:linear:2", function () {
  let code = "code_4870_" + Math.floor(Math.random() * 10000);
  let id = "id_4870_" + Math.floor(Math.random() * 10000);
  createAppFromManifest(code, id);
});

// Story: crud:AppManifestConversion:linear:3
bthread("crud:AppManifestConversion:linear:3", function () {
  let code = "code_4880_" + Math.floor(Math.random() * 10000);
  let id = "id_4880_" + Math.floor(Math.random() * 10000);
  createAppFromManifest(code, id);
});

// Story: crud:AppWebhookDelivery:linear:1
bthread("crud:AppWebhookDelivery:linear:1", function () {
  let delivery_id = "delivery_id_4910_" + Math.floor(Math.random() * 10000);
  redeliverWebhookDelivery(delivery_id);
});

// Story: crud:AppWebhookDelivery:linear:2
bthread("crud:AppWebhookDelivery:linear:2", function () {
  let delivery_id = "delivery_id_4920_" + Math.floor(Math.random() * 10000);
  redeliverWebhookDelivery(delivery_id);
});

// Story: crud:AppWebhookDelivery:linear:3
bthread("crud:AppWebhookDelivery:linear:3", function () {
  let delivery_id = "delivery_id_4930_" + Math.floor(Math.random() * 10000);
  redeliverWebhookDelivery(delivery_id);
});

// Story: crud:AppInstallationAccessToken:linear:1
bthread("crud:AppInstallationAccessToken:linear:1", function () {
  let id = "id_4960_" + Math.floor(Math.random() * 10000);
  let installation_id = "installation_id_4960_" + Math.floor(Math.random() * 10000);
  let permissions = "permissions_4960_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_4960_" + Math.floor(Math.random() * 10000);
  let repository_ids = "repository_ids_4960_" + Math.floor(Math.random() * 10000);
  createInstallationAccessToken(id, installation_id, permissions, repositories, repository_ids);
});

// Story: crud:AppInstallationAccessToken:linear:2
bthread("crud:AppInstallationAccessToken:linear:2", function () {
  let id = "id_4970_" + Math.floor(Math.random() * 10000);
  let installation_id = "installation_id_4970_" + Math.floor(Math.random() * 10000);
  let permissions = "permissions_4970_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_4970_" + Math.floor(Math.random() * 10000);
  let repository_ids = "repository_ids_4970_" + Math.floor(Math.random() * 10000);
  createInstallationAccessToken(id, installation_id, permissions, repositories, repository_ids);
});

// Story: crud:AppInstallationAccessToken:linear:3
bthread("crud:AppInstallationAccessToken:linear:3", function () {
  let id = "id_4980_" + Math.floor(Math.random() * 10000);
  let installation_id = "installation_id_4980_" + Math.floor(Math.random() * 10000);
  let permissions = "permissions_4980_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_4980_" + Math.floor(Math.random() * 10000);
  let repository_ids = "repository_ids_4980_" + Math.floor(Math.random() * 10000);
  createInstallationAccessToken(id, installation_id, permissions, repositories, repository_ids);
});

// Story: crud:AppToken:linear:1
bthread("crud:AppToken:linear:1", function () {

  checkAppToken(access_token);
});

// Story: crud:AppToken:linear:2
bthread("crud:AppToken:linear:2", function () {

  checkAppToken(access_token);
});

// Story: crud:AppToken:linear:3
bthread("crud:AppToken:linear:3", function () {

  checkAppToken(access_token);
});

// Story: crud:ScopedAppToken:linear:1
bthread("crud:ScopedAppToken:linear:1", function () {
  let id = "id_5060_" + Math.floor(Math.random() * 10000);
  let permissions = "permissions_5060_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_5060_" + Math.floor(Math.random() * 10000);
  let repository_ids = "repository_ids_5060_" + Math.floor(Math.random() * 10000);
  let target = "target_5060_" + Math.floor(Math.random() * 10000);
  let target_id = "target_id_5060_" + Math.floor(Math.random() * 10000);
  createScopedAppToken(access_token, id, permissions, repositories, repository_ids, target, target_id);
});

// Story: crud:ScopedAppToken:linear:2
bthread("crud:ScopedAppToken:linear:2", function () {
  let id = "id_5070_" + Math.floor(Math.random() * 10000);
  let permissions = "permissions_5070_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_5070_" + Math.floor(Math.random() * 10000);
  let repository_ids = "repository_ids_5070_" + Math.floor(Math.random() * 10000);
  let target = "target_5070_" + Math.floor(Math.random() * 10000);
  let target_id = "target_id_5070_" + Math.floor(Math.random() * 10000);
  createScopedAppToken(access_token, id, permissions, repositories, repository_ids, target, target_id);
});

// Story: crud:ScopedAppToken:linear:3
bthread("crud:ScopedAppToken:linear:3", function () {
  let id = "id_5080_" + Math.floor(Math.random() * 10000);
  let permissions = "permissions_5080_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_5080_" + Math.floor(Math.random() * 10000);
  let repository_ids = "repository_ids_5080_" + Math.floor(Math.random() * 10000);
  let target = "target_5080_" + Math.floor(Math.random() * 10000);
  let target_id = "target_id_5080_" + Math.floor(Math.random() * 10000);
  createScopedAppToken(access_token, id, permissions, repositories, repository_ids, target, target_id);
});

// Story: crud:Issue:linear:1
bthread("crud:Issue:linear:1", function () {
  let assignee = "assignee_5110_" + Math.floor(Math.random() * 10000);
  let assignees = "assignees_5110_" + Math.floor(Math.random() * 10000);
  let body = "body_5110_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5110_" + Math.floor(Math.random() * 10000);
  let labels = "labels_5110_" + Math.floor(Math.random() * 10000);
  let milestone = "milestone_5110_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5110_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5110_" + Math.floor(Math.random() * 10000);
  let state = "state_5110_" + Math.floor(Math.random() * 10000);
  let state_reason = "state_reason_5110_" + Math.floor(Math.random() * 10000);
  let title = "title_5110_" + Math.floor(Math.random() * 10000);
  let type = "type_5110_" + Math.floor(Math.random() * 10000);
  createIssue(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type);
});

// Story: crud:Issue:linear:2
bthread("crud:Issue:linear:2", function () {
  let assignee = "assignee_5120_" + Math.floor(Math.random() * 10000);
  let assignees = "assignees_5120_" + Math.floor(Math.random() * 10000);
  let body = "body_5120_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5120_" + Math.floor(Math.random() * 10000);
  let labels = "labels_5120_" + Math.floor(Math.random() * 10000);
  let milestone = "milestone_5120_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5120_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5120_" + Math.floor(Math.random() * 10000);
  let state = "state_5120_" + Math.floor(Math.random() * 10000);
  let state_reason = "state_reason_5120_" + Math.floor(Math.random() * 10000);
  let title = "title_5120_" + Math.floor(Math.random() * 10000);
  let type = "type_5120_" + Math.floor(Math.random() * 10000);
  createIssue(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type);
});

// Story: crud:Issue:linear:3
bthread("crud:Issue:linear:3", function () {
  let assignee = "assignee_5130_" + Math.floor(Math.random() * 10000);
  let assignees = "assignees_5130_" + Math.floor(Math.random() * 10000);
  let body = "body_5130_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5130_" + Math.floor(Math.random() * 10000);
  let labels = "labels_5130_" + Math.floor(Math.random() * 10000);
  let milestone = "milestone_5130_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5130_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5130_" + Math.floor(Math.random() * 10000);
  let state = "state_5130_" + Math.floor(Math.random() * 10000);
  let state_reason = "state_reason_5130_" + Math.floor(Math.random() * 10000);
  let title = "title_5130_" + Math.floor(Math.random() * 10000);
  let type = "type_5130_" + Math.floor(Math.random() * 10000);
  createIssue(assignee, assignees, body, issue_number, labels, milestone, owner, repo, state, state_reason, title, type);
});

// Story: crud:IssueAssignees:linear:1
bthread("crud:IssueAssignees:linear:1", function () {
  let assignee = "assignee_5160_" + Math.floor(Math.random() * 10000);
  let assignees = "assignees_5160_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5160_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5160_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5160_" + Math.floor(Math.random() * 10000);
  addAssigneesToIssue(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo);
  removeAssigneesFromIssue(assignee, assignees, issue_number, owner, repo);
  tryToDeleteANonExistingIssueAssignees(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesDoesNotExist(assignee, assignees, issue_number, owner, repo);
});

// Story: crud:IssueAssignees:linear:2
bthread("crud:IssueAssignees:linear:2", function () {
  let assignee = "assignee_5170_" + Math.floor(Math.random() * 10000);
  let assignees = "assignees_5170_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5170_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5170_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5170_" + Math.floor(Math.random() * 10000);
  addAssigneesToIssue(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo);
  removeAssigneesFromIssue(assignee, assignees, issue_number, owner, repo);
  tryToDeleteANonExistingIssueAssignees(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesDoesNotExist(assignee, assignees, issue_number, owner, repo);
});

// Story: crud:IssueAssignees:linear:3
bthread("crud:IssueAssignees:linear:3", function () {
  let assignee = "assignee_5180_" + Math.floor(Math.random() * 10000);
  let assignees = "assignees_5180_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5180_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5180_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5180_" + Math.floor(Math.random() * 10000);
  addAssigneesToIssue(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo);
  removeAssigneesFromIssue(assignee, assignees, issue_number, owner, repo);
  tryToDeleteANonExistingIssueAssignees(assignee, assignees, issue_number, owner, repo);
  verifyIssueAssigneesDoesNotExist(assignee, assignees, issue_number, owner, repo);
});

// Monitor: IssueAssignees Verification
bthread("monitor:IssueAssignees", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAssigneesAdded() });
    let assignee = (e.data.parameters && e.data.parameters["assignee"]) ? e.data.parameters["assignee"] : e.data["assignee"];
    let assignees = (e.data.parameters && e.data.parameters["assignees"]) ? e.data.parameters["assignees"] : e.data["assignees"];
    let issue_number = (e.data.parameters && e.data.parameters["issue_number"]) ? e.data.parameters["issue_number"] : e.data["issue_number"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedIssueAssignees(assignee, assignees, issue_number, owner, repo), function() {
      bp.log.info(`Monitor IssueAssignees: Verifying persistence of ID ${id} inside deletion block.`);
        verifyIssueAssigneesExists(assignee, assignees, issue_number, owner, repo);
    });
  }
});

// Story: crud:IssueComments:linear:1
bthread("crud:IssueComments:linear:1", function () {
  let body = "body_5210_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5210_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5210_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5210_" + Math.floor(Math.random() * 10000);
  createIssueComment(body, issue_number, owner, repo);
});

// Story: crud:IssueComments:linear:2
bthread("crud:IssueComments:linear:2", function () {
  let body = "body_5220_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5220_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5220_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5220_" + Math.floor(Math.random() * 10000);
  createIssueComment(body, issue_number, owner, repo);
});

// Story: crud:IssueComments:linear:3
bthread("crud:IssueComments:linear:3", function () {
  let body = "body_5230_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5230_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5230_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5230_" + Math.floor(Math.random() * 10000);
  createIssueComment(body, issue_number, owner, repo);
});

// Story: crud:IssueDependenciesBlockedBy:linear:1
bthread("crud:IssueDependenciesBlockedBy:linear:1", function () {
  let issue_id = "issue_id_5260_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5260_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5260_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5260_" + Math.floor(Math.random() * 10000);
  addBlockedByDependency(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
  removeBlockedByDependency(issue_id, issue_number, owner, repo);
  tryToDeleteANonExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByDoesNotExist(issue_id, issue_number, owner, repo);
});

// Story: crud:IssueDependenciesBlockedBy:linear:2
bthread("crud:IssueDependenciesBlockedBy:linear:2", function () {
  let issue_id = "issue_id_5270_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5270_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5270_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5270_" + Math.floor(Math.random() * 10000);
  addBlockedByDependency(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
  removeBlockedByDependency(issue_id, issue_number, owner, repo);
  tryToDeleteANonExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByDoesNotExist(issue_id, issue_number, owner, repo);
});

// Story: crud:IssueDependenciesBlockedBy:linear:3
bthread("crud:IssueDependenciesBlockedBy:linear:3", function () {
  let issue_id = "issue_id_5280_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5280_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5280_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5280_" + Math.floor(Math.random() * 10000);
  addBlockedByDependency(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
  removeBlockedByDependency(issue_id, issue_number, owner, repo);
  tryToDeleteANonExistingIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo);
  verifyIssueDependenciesBlockedByDoesNotExist(issue_id, issue_number, owner, repo);
});

// Monitor: IssueDependenciesBlockedBy Verification
bthread("monitor:IssueDependenciesBlockedBy", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueDependenciesBlockedByAdded() });
    let issue_id = (e.data.parameters && e.data.parameters["issue_id"]) ? e.data.parameters["issue_id"] : e.data["issue_id"];
    let issue_number = (e.data.parameters && e.data.parameters["issue_number"]) ? e.data.parameters["issue_number"] : e.data["issue_number"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedIssueDependenciesBlockedBy(issue_id, issue_number, owner, repo), function() {
      bp.log.info(`Monitor IssueDependenciesBlockedBy: Verifying persistence of ID ${id} inside deletion block.`);
        verifyIssueDependenciesBlockedByExists(issue_id, issue_number, owner, repo);
    });
  }
});

// Story: crud:IssueLabels:linear:1
bthread("crud:IssueLabels:linear:1", function () {
  let issue_number = "issue_number_5310_" + Math.floor(Math.random() * 10000);
  let labels = "labels_5310_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5310_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5310_" + Math.floor(Math.random() * 10000);
  addLabelsToIssue(issue_number, labels, owner, repo);
  verifyIssueLabelsExists(issue_number, labels, owner, repo);
  setLabelsForIssue(issue_number, labels, owner, repo);
  removeAllLabelsFromIssue(issue_number, labels, owner, repo);
  tryToDeleteANonExistingIssueLabels(issue_number, labels, owner, repo);
  verifyIssueLabelsDoesNotExist(issue_number, labels, owner, repo);
});

// Story: crud:IssueLabels:linear:2
bthread("crud:IssueLabels:linear:2", function () {
  let issue_number = "issue_number_5320_" + Math.floor(Math.random() * 10000);
  let labels = "labels_5320_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5320_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5320_" + Math.floor(Math.random() * 10000);
  addLabelsToIssue(issue_number, labels, owner, repo);
  verifyIssueLabelsExists(issue_number, labels, owner, repo);
  setLabelsForIssue(issue_number, labels, owner, repo);
  removeAllLabelsFromIssue(issue_number, labels, owner, repo);
  tryToDeleteANonExistingIssueLabels(issue_number, labels, owner, repo);
  verifyIssueLabelsDoesNotExist(issue_number, labels, owner, repo);
});

// Story: crud:IssueLabels:linear:3
bthread("crud:IssueLabels:linear:3", function () {
  let issue_number = "issue_number_5330_" + Math.floor(Math.random() * 10000);
  let labels = "labels_5330_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5330_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5330_" + Math.floor(Math.random() * 10000);
  addLabelsToIssue(issue_number, labels, owner, repo);
  verifyIssueLabelsExists(issue_number, labels, owner, repo);
  setLabelsForIssue(issue_number, labels, owner, repo);
  removeAllLabelsFromIssue(issue_number, labels, owner, repo);
  tryToDeleteANonExistingIssueLabels(issue_number, labels, owner, repo);
  verifyIssueLabelsDoesNotExist(issue_number, labels, owner, repo);
});

// Monitor: IssueLabels Verification
bthread("monitor:IssueLabels", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueLabelsAdded() });
    let issue_number = (e.data.parameters && e.data.parameters["issue_number"]) ? e.data.parameters["issue_number"] : e.data["issue_number"];
    let labels = (e.data.parameters && e.data.parameters["labels"]) ? e.data.parameters["labels"] : e.data["labels"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedIssueLabels(issue_number, labels, owner, repo), function() {
      bp.log.info(`Monitor IssueLabels: Verifying persistence of ID ${id} inside deletion block.`);
        verifyIssueLabelsExists(issue_number, labels, owner, repo);
    });
  }
});

// Story: crud:SubIssue:linear:1
bthread("crud:SubIssue:linear:1", function () {
  let after_id = "after_id_5360_" + Math.floor(Math.random() * 10000);
  let before_id = "before_id_5360_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5360_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5360_" + Math.floor(Math.random() * 10000);
  let page = "page_5360_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5360_" + Math.floor(Math.random() * 10000);
  let replace_parent = "replace_parent_5360_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5360_" + Math.floor(Math.random() * 10000);
  let sub_issue_id = "sub_issue_id_5360_" + Math.floor(Math.random() * 10000);
  addSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  reprioritizeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  removeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  tryToDeleteANonExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueDoesNotExist(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
});

// Story: crud:SubIssue:linear:2
bthread("crud:SubIssue:linear:2", function () {
  let after_id = "after_id_5370_" + Math.floor(Math.random() * 10000);
  let before_id = "before_id_5370_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5370_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5370_" + Math.floor(Math.random() * 10000);
  let page = "page_5370_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5370_" + Math.floor(Math.random() * 10000);
  let replace_parent = "replace_parent_5370_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5370_" + Math.floor(Math.random() * 10000);
  let sub_issue_id = "sub_issue_id_5370_" + Math.floor(Math.random() * 10000);
  addSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  reprioritizeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  removeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  tryToDeleteANonExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueDoesNotExist(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
});

// Story: crud:SubIssue:linear:3
bthread("crud:SubIssue:linear:3", function () {
  let after_id = "after_id_5380_" + Math.floor(Math.random() * 10000);
  let before_id = "before_id_5380_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_5380_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5380_" + Math.floor(Math.random() * 10000);
  let page = "page_5380_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5380_" + Math.floor(Math.random() * 10000);
  let replace_parent = "replace_parent_5380_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5380_" + Math.floor(Math.random() * 10000);
  let sub_issue_id = "sub_issue_id_5380_" + Math.floor(Math.random() * 10000);
  addSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  reprioritizeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  removeSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  tryToDeleteANonExistingSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
  verifySubIssueDoesNotExist(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
});

// Monitor: SubIssue Verification
bthread("monitor:SubIssue", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySubIssueAdded() });
    let after_id = (e.data.parameters && e.data.parameters["after_id"]) ? e.data.parameters["after_id"] : e.data["after_id"];
    let before_id = (e.data.parameters && e.data.parameters["before_id"]) ? e.data.parameters["before_id"] : e.data["before_id"];
    let issue_number = (e.data.parameters && e.data.parameters["issue_number"]) ? e.data.parameters["issue_number"] : e.data["issue_number"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let per_page = (e.data.parameters && e.data.parameters["per_page"]) ? e.data.parameters["per_page"] : e.data["per_page"];
    let replace_parent = (e.data.parameters && e.data.parameters["replace_parent"]) ? e.data.parameters["replace_parent"] : e.data["replace_parent"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let sub_issue_id = (e.data.parameters && e.data.parameters["sub_issue_id"]) ? e.data.parameters["sub_issue_id"] : e.data["sub_issue_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedSubIssue(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id), function() {
      bp.log.info(`Monitor SubIssue: Verifying persistence of ID ${id} inside deletion block.`);
        verifySubIssueExists(after_id, before_id, issue_number, owner, page, per_page, replace_parent, repo, sub_issue_id);
    });
  }
});

// Story: crud:Label:linear:1
bthread("crud:Label:linear:1", function () {
  let color = "color_5410_" + Math.floor(Math.random() * 10000);
  let description = "description_5410_" + Math.floor(Math.random() * 10000);
  let name = "name_5410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_5410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5410_" + Math.floor(Math.random() * 10000);
  let page = "page_5410_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5410_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5410_" + Math.floor(Math.random() * 10000);
  createLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo);
  updateLabel(color, description, name, new_name, owner, page, per_page, repo);
  deleteLabel(color, description, name, new_name, owner, page, per_page, repo);
  tryToDeleteANonExistingLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelDoesNotExist(color, description, name, new_name, owner, page, per_page, repo);
});

// Story: crud:Label:linear:2
bthread("crud:Label:linear:2", function () {
  let color = "color_5420_" + Math.floor(Math.random() * 10000);
  let description = "description_5420_" + Math.floor(Math.random() * 10000);
  let name = "name_5420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_5420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5420_" + Math.floor(Math.random() * 10000);
  let page = "page_5420_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5420_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5420_" + Math.floor(Math.random() * 10000);
  createLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo);
  updateLabel(color, description, name, new_name, owner, page, per_page, repo);
  deleteLabel(color, description, name, new_name, owner, page, per_page, repo);
  tryToDeleteANonExistingLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelDoesNotExist(color, description, name, new_name, owner, page, per_page, repo);
});

// Story: crud:Label:linear:3
bthread("crud:Label:linear:3", function () {
  let color = "color_5430_" + Math.floor(Math.random() * 10000);
  let description = "description_5430_" + Math.floor(Math.random() * 10000);
  let name = "name_5430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let new_name = "new_name_5430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5430_" + Math.floor(Math.random() * 10000);
  let page = "page_5430_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5430_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5430_" + Math.floor(Math.random() * 10000);
  createLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo);
  updateLabel(color, description, name, new_name, owner, page, per_page, repo);
  deleteLabel(color, description, name, new_name, owner, page, per_page, repo);
  tryToDeleteANonExistingLabel(color, description, name, new_name, owner, page, per_page, repo);
  verifyLabelDoesNotExist(color, description, name, new_name, owner, page, per_page, repo);
});

// Monitor: Label Verification
bthread("monitor:Label", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLabelAdded() });
    let color = (e.data.parameters && e.data.parameters["color"]) ? e.data.parameters["color"] : e.data["color"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let new_name = (e.data.parameters && e.data.parameters["new_name"]) ? e.data.parameters["new_name"] : e.data["new_name"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let per_page = (e.data.parameters && e.data.parameters["per_page"]) ? e.data.parameters["per_page"] : e.data["per_page"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedLabel(color, description, name, new_name, owner, page, per_page, repo), function() {
      bp.log.info(`Monitor Label: Verifying persistence of ID ${id} inside deletion block.`);
        verifyLabelExists(color, description, name, new_name, owner, page, per_page, repo);
    });
  }
});

// Story: crud:Milestone:linear:1
bthread("crud:Milestone:linear:1", function () {
  let description = "description_5460_" + Math.floor(Math.random() * 10000);
  let direction = "direction_5460_" + Math.floor(Math.random() * 10000);
  let due_on = "due_on_5460_" + Math.floor(Math.random() * 10000);
  let milestone_number = "milestone_number_5460_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5460_" + Math.floor(Math.random() * 10000);
  let page = "page_5460_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5460_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5460_" + Math.floor(Math.random() * 10000);
  let sort = "sort_5460_" + Math.floor(Math.random() * 10000);
  let state = "state_5460_" + Math.floor(Math.random() * 10000);
  let title = "title_5460_" + Math.floor(Math.random() * 10000);
  createMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  updateMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  deleteMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  tryToDeleteANonExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneDoesNotExist(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
});

// Story: crud:Milestone:linear:2
bthread("crud:Milestone:linear:2", function () {
  let description = "description_5470_" + Math.floor(Math.random() * 10000);
  let direction = "direction_5470_" + Math.floor(Math.random() * 10000);
  let due_on = "due_on_5470_" + Math.floor(Math.random() * 10000);
  let milestone_number = "milestone_number_5470_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5470_" + Math.floor(Math.random() * 10000);
  let page = "page_5470_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5470_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5470_" + Math.floor(Math.random() * 10000);
  let sort = "sort_5470_" + Math.floor(Math.random() * 10000);
  let state = "state_5470_" + Math.floor(Math.random() * 10000);
  let title = "title_5470_" + Math.floor(Math.random() * 10000);
  createMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  updateMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  deleteMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  tryToDeleteANonExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneDoesNotExist(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
});

// Story: crud:Milestone:linear:3
bthread("crud:Milestone:linear:3", function () {
  let description = "description_5480_" + Math.floor(Math.random() * 10000);
  let direction = "direction_5480_" + Math.floor(Math.random() * 10000);
  let due_on = "due_on_5480_" + Math.floor(Math.random() * 10000);
  let milestone_number = "milestone_number_5480_" + Math.floor(Math.random() * 10000);
  let owner = "owner_5480_" + Math.floor(Math.random() * 10000);
  let page = "page_5480_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_5480_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5480_" + Math.floor(Math.random() * 10000);
  let sort = "sort_5480_" + Math.floor(Math.random() * 10000);
  let state = "state_5480_" + Math.floor(Math.random() * 10000);
  let title = "title_5480_" + Math.floor(Math.random() * 10000);
  createMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  updateMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  deleteMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  tryToDeleteANonExistingMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
  verifyMilestoneDoesNotExist(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
});

// Monitor: Milestone Verification
bthread("monitor:Milestone", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMilestoneAdded() });
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let direction = (e.data.parameters && e.data.parameters["direction"]) ? e.data.parameters["direction"] : e.data["direction"];
    let due_on = (e.data.parameters && e.data.parameters["due_on"]) ? e.data.parameters["due_on"] : e.data["due_on"];
    let milestone_number = (e.data.parameters && e.data.parameters["milestone_number"]) ? e.data.parameters["milestone_number"] : e.data["milestone_number"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let per_page = (e.data.parameters && e.data.parameters["per_page"]) ? e.data.parameters["per_page"] : e.data["per_page"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let sort = (e.data.parameters && e.data.parameters["sort"]) ? e.data.parameters["sort"] : e.data["sort"];
    let state = (e.data.parameters && e.data.parameters["state"]) ? e.data.parameters["state"] : e.data["state"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedMilestone(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title), function() {
      bp.log.info(`Monitor Milestone: Verifying persistence of ID ${id} inside deletion block.`);
        verifyMilestoneExists(description, direction, due_on, milestone_number, owner, page, per_page, repo, sort, state, title);
    });
  }
});

// Story: crud:Team:linear:1
bthread("crud:Team:linear:1", function () {
  let description = "description_5510_" + Math.floor(Math.random() * 10000);
  let maintainers = "maintainers_5510_" + Math.floor(Math.random() * 10000);
  let name = "name_5510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let notification_setting = "notification_setting_5510_" + Math.floor(Math.random() * 10000);
  let org = "org_5510_" + Math.floor(Math.random() * 10000);
  let parent_team_id = "parent_team_id_5510_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5510_" + Math.floor(Math.random() * 10000);
  let privacy = "privacy_5510_" + Math.floor(Math.random() * 10000);
  let repo_names = "repo_names_5510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5510_" + Math.floor(Math.random() * 10000);
  createTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  updateTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  deleteTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  tryToDeleteANonExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  verifyTeamDoesNotExist(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
});

// Story: crud:Team:linear:2
bthread("crud:Team:linear:2", function () {
  let description = "description_5520_" + Math.floor(Math.random() * 10000);
  let maintainers = "maintainers_5520_" + Math.floor(Math.random() * 10000);
  let name = "name_5520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let notification_setting = "notification_setting_5520_" + Math.floor(Math.random() * 10000);
  let org = "org_5520_" + Math.floor(Math.random() * 10000);
  let parent_team_id = "parent_team_id_5520_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5520_" + Math.floor(Math.random() * 10000);
  let privacy = "privacy_5520_" + Math.floor(Math.random() * 10000);
  let repo_names = "repo_names_5520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5520_" + Math.floor(Math.random() * 10000);
  createTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  updateTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  deleteTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  tryToDeleteANonExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  verifyTeamDoesNotExist(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
});

// Story: crud:Team:linear:3
bthread("crud:Team:linear:3", function () {
  let description = "description_5530_" + Math.floor(Math.random() * 10000);
  let maintainers = "maintainers_5530_" + Math.floor(Math.random() * 10000);
  let name = "name_5530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let notification_setting = "notification_setting_5530_" + Math.floor(Math.random() * 10000);
  let org = "org_5530_" + Math.floor(Math.random() * 10000);
  let parent_team_id = "parent_team_id_5530_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5530_" + Math.floor(Math.random() * 10000);
  let privacy = "privacy_5530_" + Math.floor(Math.random() * 10000);
  let repo_names = "repo_names_5530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5530_" + Math.floor(Math.random() * 10000);
  createTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  updateTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  deleteTeamLegacy(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  tryToDeleteANonExistingTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
  verifyTeamDoesNotExist(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
});

// Monitor: Team Verification
bthread("monitor:Team", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamAdded() });
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let maintainers = (e.data.parameters && e.data.parameters["maintainers"]) ? e.data.parameters["maintainers"] : e.data["maintainers"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let notification_setting = (e.data.parameters && e.data.parameters["notification_setting"]) ? e.data.parameters["notification_setting"] : e.data["notification_setting"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let parent_team_id = (e.data.parameters && e.data.parameters["parent_team_id"]) ? e.data.parameters["parent_team_id"] : e.data["parent_team_id"];
    let permission = (e.data.parameters && e.data.parameters["permission"]) ? e.data.parameters["permission"] : e.data["permission"];
    let privacy = (e.data.parameters && e.data.parameters["privacy"]) ? e.data.parameters["privacy"] : e.data["privacy"];
    let repo_names = (e.data.parameters && e.data.parameters["repo_names"]) ? e.data.parameters["repo_names"] : e.data["repo_names"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeam(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id), function() {
      bp.log.info(`Monitor Team: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamExists(description, maintainers, name, notification_setting, org, parent_team_id, permission, privacy, repo_names, team_id);
    });
  }
});

// Story: crud:Discussion:linear:1
bthread("crud:Discussion:linear:1", function () {
  let body = "body_5560_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5560_" + Math.floor(Math.random() * 10000);
  let org = "org_5560_" + Math.floor(Math.random() * 10000);
  let _private = "private_5560_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5560_" + Math.floor(Math.random() * 10000);
  let title = "title_5560_" + Math.floor(Math.random() * 10000);
  createDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title);
  updateDiscussion(body, discussion_number, org, _private, team_slug, title);
  deleteDiscussion(body, discussion_number, org, _private, team_slug, title);
  tryToDeleteANonExistingDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionDoesNotExist(body, discussion_number, org, _private, team_slug, title);
});

// Story: crud:Discussion:linear:2
bthread("crud:Discussion:linear:2", function () {
  let body = "body_5570_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5570_" + Math.floor(Math.random() * 10000);
  let org = "org_5570_" + Math.floor(Math.random() * 10000);
  let _private = "private_5570_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5570_" + Math.floor(Math.random() * 10000);
  let title = "title_5570_" + Math.floor(Math.random() * 10000);
  createDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title);
  updateDiscussion(body, discussion_number, org, _private, team_slug, title);
  deleteDiscussion(body, discussion_number, org, _private, team_slug, title);
  tryToDeleteANonExistingDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionDoesNotExist(body, discussion_number, org, _private, team_slug, title);
});

// Story: crud:Discussion:linear:3
bthread("crud:Discussion:linear:3", function () {
  let body = "body_5580_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5580_" + Math.floor(Math.random() * 10000);
  let org = "org_5580_" + Math.floor(Math.random() * 10000);
  let _private = "private_5580_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5580_" + Math.floor(Math.random() * 10000);
  let title = "title_5580_" + Math.floor(Math.random() * 10000);
  createDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title);
  updateDiscussion(body, discussion_number, org, _private, team_slug, title);
  deleteDiscussion(body, discussion_number, org, _private, team_slug, title);
  tryToDeleteANonExistingDiscussion(body, discussion_number, org, _private, team_slug, title);
  verifyDiscussionDoesNotExist(body, discussion_number, org, _private, team_slug, title);
});

// Monitor: Discussion Verification
bthread("monitor:Discussion", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDiscussionAdded() });
    let body = (e.data.parameters && e.data.parameters["body"]) ? e.data.parameters["body"] : e.data["body"];
    let discussion_number = (e.data.parameters && e.data.parameters["discussion_number"]) ? e.data.parameters["discussion_number"] : e.data["discussion_number"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let _private = (e.data.parameters && e.data.parameters["private"]) ? e.data.parameters["private"] : e.data["private"];
    let team_slug = (e.data.parameters && e.data.parameters["team_slug"]) ? e.data.parameters["team_slug"] : e.data["team_slug"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDiscussion(body, discussion_number, org, _private, team_slug, title), function() {
      bp.log.info(`Monitor Discussion: Verifying persistence of ID ${id} inside deletion block.`);
        verifyDiscussionExists(body, discussion_number, org, _private, team_slug, title);
    });
  }
});

// Story: crud:DiscussionComment:linear:1
bthread("crud:DiscussionComment:linear:1", function () {
  let body = "body_5610_" + Math.floor(Math.random() * 10000);
  let comment_number = "comment_number_5610_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5610_" + Math.floor(Math.random() * 10000);
  let org = "org_5610_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5610_" + Math.floor(Math.random() * 10000);
  createDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug);
  updateDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  deleteDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  tryToDeleteANonExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentDoesNotExist(body, comment_number, discussion_number, org, team_slug);
});

// Story: crud:DiscussionComment:linear:2
bthread("crud:DiscussionComment:linear:2", function () {
  let body = "body_5620_" + Math.floor(Math.random() * 10000);
  let comment_number = "comment_number_5620_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5620_" + Math.floor(Math.random() * 10000);
  let org = "org_5620_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5620_" + Math.floor(Math.random() * 10000);
  createDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug);
  updateDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  deleteDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  tryToDeleteANonExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentDoesNotExist(body, comment_number, discussion_number, org, team_slug);
});

// Story: crud:DiscussionComment:linear:3
bthread("crud:DiscussionComment:linear:3", function () {
  let body = "body_5630_" + Math.floor(Math.random() * 10000);
  let comment_number = "comment_number_5630_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5630_" + Math.floor(Math.random() * 10000);
  let org = "org_5630_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5630_" + Math.floor(Math.random() * 10000);
  createDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug);
  updateDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  deleteDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  tryToDeleteANonExistingDiscussionComment(body, comment_number, discussion_number, org, team_slug);
  verifyDiscussionCommentDoesNotExist(body, comment_number, discussion_number, org, team_slug);
});

// Monitor: DiscussionComment Verification
bthread("monitor:DiscussionComment", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDiscussionCommentAdded() });
    let body = (e.data.parameters && e.data.parameters["body"]) ? e.data.parameters["body"] : e.data["body"];
    let comment_number = (e.data.parameters && e.data.parameters["comment_number"]) ? e.data.parameters["comment_number"] : e.data["comment_number"];
    let discussion_number = (e.data.parameters && e.data.parameters["discussion_number"]) ? e.data.parameters["discussion_number"] : e.data["discussion_number"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let team_slug = (e.data.parameters && e.data.parameters["team_slug"]) ? e.data.parameters["team_slug"] : e.data["team_slug"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDiscussionComment(body, comment_number, discussion_number, org, team_slug), function() {
      bp.log.info(`Monitor DiscussionComment: Verifying persistence of ID ${id} inside deletion block.`);
        verifyDiscussionCommentExists(body, comment_number, discussion_number, org, team_slug);
    });
  }
});

// Story: crud:TeamProject:linear:1
bthread("crud:TeamProject:linear:1", function () {
  let org = "org_5660_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5660_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_5660_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5660_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5660_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectExists(org, permission, project_id, team_id, team_slug);
  updateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  removeTeamProject(org, permission, project_id, team_id, team_slug);
  tryToDeleteANonExistingTeamProject(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectDoesNotExist(org, permission, project_id, team_id, team_slug);
});

// Story: crud:TeamProject:linear:2
bthread("crud:TeamProject:linear:2", function () {
  let org = "org_5670_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5670_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_5670_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5670_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5670_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectExists(org, permission, project_id, team_id, team_slug);
  updateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  removeTeamProject(org, permission, project_id, team_id, team_slug);
  tryToDeleteANonExistingTeamProject(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectDoesNotExist(org, permission, project_id, team_id, team_slug);
});

// Story: crud:TeamProject:linear:3
bthread("crud:TeamProject:linear:3", function () {
  let org = "org_5680_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5680_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_5680_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5680_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_5680_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectExists(org, permission, project_id, team_id, team_slug);
  updateTeamProjectPermissions(org, permission, project_id, team_id, team_slug);
  removeTeamProject(org, permission, project_id, team_id, team_slug);
  tryToDeleteANonExistingTeamProject(org, permission, project_id, team_id, team_slug);
  verifyTeamProjectDoesNotExist(org, permission, project_id, team_id, team_slug);
});

// Monitor: TeamProject Verification
bthread("monitor:TeamProject", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamProjectAdded() });
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let permission = (e.data.parameters && e.data.parameters["permission"]) ? e.data.parameters["permission"] : e.data["permission"];
    let project_id = (e.data.parameters && e.data.parameters["project_id"]) ? e.data.parameters["project_id"] : e.data["project_id"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    let team_slug = (e.data.parameters && e.data.parameters["team_slug"]) ? e.data.parameters["team_slug"] : e.data["team_slug"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeamProject(org, permission, project_id, team_id, team_slug), function() {
      bp.log.info(`Monitor TeamProject: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamProjectExists(org, permission, project_id, team_id, team_slug);
    });
  }
});

// Story: crud:TeamDiscussion:linear:1
bthread("crud:TeamDiscussion:linear:1", function () {
  let body = "body_5710_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5710_" + Math.floor(Math.random() * 10000);
  let _private = "private_5710_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5710_" + Math.floor(Math.random() * 10000);
  let title = "title_5710_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title);
  updateTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  deleteTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  tryToDeleteANonExistingTeamDiscussion(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionDoesNotExist(body, discussion_number, _private, team_id, title);
});

// Story: crud:TeamDiscussion:linear:2
bthread("crud:TeamDiscussion:linear:2", function () {
  let body = "body_5720_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5720_" + Math.floor(Math.random() * 10000);
  let _private = "private_5720_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5720_" + Math.floor(Math.random() * 10000);
  let title = "title_5720_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title);
  updateTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  deleteTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  tryToDeleteANonExistingTeamDiscussion(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionDoesNotExist(body, discussion_number, _private, team_id, title);
});

// Story: crud:TeamDiscussion:linear:3
bthread("crud:TeamDiscussion:linear:3", function () {
  let body = "body_5730_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5730_" + Math.floor(Math.random() * 10000);
  let _private = "private_5730_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5730_" + Math.floor(Math.random() * 10000);
  let title = "title_5730_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title);
  updateTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  deleteTeamDiscussionLegacy(body, discussion_number, _private, team_id, title);
  tryToDeleteANonExistingTeamDiscussion(body, discussion_number, _private, team_id, title);
  verifyTeamDiscussionDoesNotExist(body, discussion_number, _private, team_id, title);
});

// Monitor: TeamDiscussion Verification
bthread("monitor:TeamDiscussion", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamDiscussionAdded() });
    let body = (e.data.parameters && e.data.parameters["body"]) ? e.data.parameters["body"] : e.data["body"];
    let discussion_number = (e.data.parameters && e.data.parameters["discussion_number"]) ? e.data.parameters["discussion_number"] : e.data["discussion_number"];
    let _private = (e.data.parameters && e.data.parameters["private"]) ? e.data.parameters["private"] : e.data["private"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeamDiscussion(body, discussion_number, _private, team_id, title), function() {
      bp.log.info(`Monitor TeamDiscussion: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamDiscussionExists(body, discussion_number, _private, team_id, title);
    });
  }
});

// Story: crud:TeamDiscussionComment:linear:1
bthread("crud:TeamDiscussionComment:linear:1", function () {
  let body = "body_5760_" + Math.floor(Math.random() * 10000);
  let comment_number = "comment_number_5760_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5760_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5760_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id);
  updateTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  deleteTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  tryToDeleteANonExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentDoesNotExist(body, comment_number, discussion_number, team_id);
});

// Story: crud:TeamDiscussionComment:linear:2
bthread("crud:TeamDiscussionComment:linear:2", function () {
  let body = "body_5770_" + Math.floor(Math.random() * 10000);
  let comment_number = "comment_number_5770_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5770_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5770_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id);
  updateTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  deleteTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  tryToDeleteANonExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentDoesNotExist(body, comment_number, discussion_number, team_id);
});

// Story: crud:TeamDiscussionComment:linear:3
bthread("crud:TeamDiscussionComment:linear:3", function () {
  let body = "body_5780_" + Math.floor(Math.random() * 10000);
  let comment_number = "comment_number_5780_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_5780_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5780_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id);
  updateTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  deleteTeamDiscussionCommentLegacy(body, comment_number, discussion_number, team_id);
  tryToDeleteANonExistingTeamDiscussionComment(body, comment_number, discussion_number, team_id);
  verifyTeamDiscussionCommentDoesNotExist(body, comment_number, discussion_number, team_id);
});

// Monitor: TeamDiscussionComment Verification
bthread("monitor:TeamDiscussionComment", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamDiscussionCommentAdded() });
    let body = (e.data.parameters && e.data.parameters["body"]) ? e.data.parameters["body"] : e.data["body"];
    let comment_number = (e.data.parameters && e.data.parameters["comment_number"]) ? e.data.parameters["comment_number"] : e.data["comment_number"];
    let discussion_number = (e.data.parameters && e.data.parameters["discussion_number"]) ? e.data.parameters["discussion_number"] : e.data["discussion_number"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeamDiscussionComment(body, comment_number, discussion_number, team_id), function() {
      bp.log.info(`Monitor TeamDiscussionComment: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamDiscussionCommentExists(body, comment_number, discussion_number, team_id);
    });
  }
});

// Story: crud:TeamMember:linear:1
bthread("crud:TeamMember:linear:1", function () {
  let team_id = "team_id_5810_" + Math.floor(Math.random() * 10000);
  let username = "username_5810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addTeamMember(team_id, username);
  verifyTeamMemberExists(team_id, username);
  removeTeamMember(team_id, username);
  tryToDeleteANonExistingTeamMember(team_id, username);
  verifyTeamMemberDoesNotExist(team_id, username);
});

// Story: crud:TeamMember:linear:2
bthread("crud:TeamMember:linear:2", function () {
  let team_id = "team_id_5820_" + Math.floor(Math.random() * 10000);
  let username = "username_5820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addTeamMember(team_id, username);
  verifyTeamMemberExists(team_id, username);
  removeTeamMember(team_id, username);
  tryToDeleteANonExistingTeamMember(team_id, username);
  verifyTeamMemberDoesNotExist(team_id, username);
});

// Story: crud:TeamMember:linear:3
bthread("crud:TeamMember:linear:3", function () {
  let team_id = "team_id_5830_" + Math.floor(Math.random() * 10000);
  let username = "username_5830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addTeamMember(team_id, username);
  verifyTeamMemberExists(team_id, username);
  removeTeamMember(team_id, username);
  tryToDeleteANonExistingTeamMember(team_id, username);
  verifyTeamMemberDoesNotExist(team_id, username);
});

// Monitor: TeamMember Verification
bthread("monitor:TeamMember", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamMemberAdded() });
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeamMember(team_id, username), function() {
      bp.log.info(`Monitor TeamMember: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamMemberExists(team_id, username);
    });
  }
});

// Story: crud:TeamMembership:linear:1
bthread("crud:TeamMembership:linear:1", function () {
  let role = "role_5860_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5860_" + Math.floor(Math.random() * 10000);
  let username = "username_5860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamMembership(role, team_id, username);
  verifyTeamMembershipExists(role, team_id, username);
  removeTeamMembership(role, team_id, username);
  tryToDeleteANonExistingTeamMembership(role, team_id, username);
  verifyTeamMembershipDoesNotExist(role, team_id, username);
});

// Story: crud:TeamMembership:linear:2
bthread("crud:TeamMembership:linear:2", function () {
  let role = "role_5870_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5870_" + Math.floor(Math.random() * 10000);
  let username = "username_5870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamMembership(role, team_id, username);
  verifyTeamMembershipExists(role, team_id, username);
  removeTeamMembership(role, team_id, username);
  tryToDeleteANonExistingTeamMembership(role, team_id, username);
  verifyTeamMembershipDoesNotExist(role, team_id, username);
});

// Story: crud:TeamMembership:linear:3
bthread("crud:TeamMembership:linear:3", function () {
  let role = "role_5880_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5880_" + Math.floor(Math.random() * 10000);
  let username = "username_5880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamMembership(role, team_id, username);
  verifyTeamMembershipExists(role, team_id, username);
  removeTeamMembership(role, team_id, username);
  tryToDeleteANonExistingTeamMembership(role, team_id, username);
  verifyTeamMembershipDoesNotExist(role, team_id, username);
});

// Monitor: TeamMembership Verification
bthread("monitor:TeamMembership", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamMembershipAdded() });
    let role = (e.data.parameters && e.data.parameters["role"]) ? e.data.parameters["role"] : e.data["role"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeamMembership(role, team_id, username), function() {
      bp.log.info(`Monitor TeamMembership: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamMembershipExists(role, team_id, username);
    });
  }
});

// Story: crud:TeamRepository:linear:1
bthread("crud:TeamRepository:linear:1", function () {
  let owner = "owner_5910_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5910_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5910_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5910_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamRepoPermissions(owner, permission, repo, team_id);
  verifyTeamRepositoryExists(owner, permission, repo, team_id);
  removeTeamRepo(owner, permission, repo, team_id);
  tryToDeleteANonExistingTeamRepository(owner, permission, repo, team_id);
  verifyTeamRepositoryDoesNotExist(owner, permission, repo, team_id);
});

// Story: crud:TeamRepository:linear:2
bthread("crud:TeamRepository:linear:2", function () {
  let owner = "owner_5920_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5920_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5920_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5920_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamRepoPermissions(owner, permission, repo, team_id);
  verifyTeamRepositoryExists(owner, permission, repo, team_id);
  removeTeamRepo(owner, permission, repo, team_id);
  tryToDeleteANonExistingTeamRepository(owner, permission, repo, team_id);
  verifyTeamRepositoryDoesNotExist(owner, permission, repo, team_id);
});

// Story: crud:TeamRepository:linear:3
bthread("crud:TeamRepository:linear:3", function () {
  let owner = "owner_5930_" + Math.floor(Math.random() * 10000);
  let permission = "permission_5930_" + Math.floor(Math.random() * 10000);
  let repo = "repo_5930_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_5930_" + Math.floor(Math.random() * 10000);
  addOrUpdateTeamRepoPermissions(owner, permission, repo, team_id);
  verifyTeamRepositoryExists(owner, permission, repo, team_id);
  removeTeamRepo(owner, permission, repo, team_id);
  tryToDeleteANonExistingTeamRepository(owner, permission, repo, team_id);
  verifyTeamRepositoryDoesNotExist(owner, permission, repo, team_id);
});

// Monitor: TeamRepository Verification
bthread("monitor:TeamRepository", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamRepositoryAdded() });
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let permission = (e.data.parameters && e.data.parameters["permission"]) ? e.data.parameters["permission"] : e.data["permission"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeamRepository(owner, permission, repo, team_id), function() {
      bp.log.info(`Monitor TeamRepository: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamRepositoryExists(owner, permission, repo, team_id);
    });
  }
});

// Story: crud:ThreadSubscription:linear:1
bthread("crud:ThreadSubscription:linear:1", function () {
  let ignored = "ignored_5960_" + Math.floor(Math.random() * 10000);
  let thread_id = "thread_id_5960_" + Math.floor(Math.random() * 10000);
  setThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
  deleteThreadSubscription(ignored, thread_id);
  tryToDeleteANonExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionDoesNotExist(ignored, thread_id);
});

// Story: crud:ThreadSubscription:linear:2
bthread("crud:ThreadSubscription:linear:2", function () {
  let ignored = "ignored_5970_" + Math.floor(Math.random() * 10000);
  let thread_id = "thread_id_5970_" + Math.floor(Math.random() * 10000);
  setThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
  deleteThreadSubscription(ignored, thread_id);
  tryToDeleteANonExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionDoesNotExist(ignored, thread_id);
});

// Story: crud:ThreadSubscription:linear:3
bthread("crud:ThreadSubscription:linear:3", function () {
  let ignored = "ignored_5980_" + Math.floor(Math.random() * 10000);
  let thread_id = "thread_id_5980_" + Math.floor(Math.random() * 10000);
  setThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionExists(ignored, thread_id);
  deleteThreadSubscription(ignored, thread_id);
  tryToDeleteANonExistingThreadSubscription(ignored, thread_id);
  verifyThreadSubscriptionDoesNotExist(ignored, thread_id);
});

// Monitor: ThreadSubscription Verification
bthread("monitor:ThreadSubscription", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyThreadSubscriptionAdded() });
    let ignored = (e.data.parameters && e.data.parameters["ignored"]) ? e.data.parameters["ignored"] : e.data["ignored"];
    let thread_id = (e.data.parameters && e.data.parameters["thread_id"]) ? e.data.parameters["thread_id"] : e.data["thread_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedThreadSubscription(ignored, thread_id), function() {
      bp.log.info(`Monitor ThreadSubscription: Verifying persistence of ID ${id} inside deletion block.`);
        verifyThreadSubscriptionExists(ignored, thread_id);
    });
  }
});

// Story: crud:RepoSubscription:linear:1
bthread("crud:RepoSubscription:linear:1", function () {
  let ignored = "ignored_6010_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6010_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6010_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_6010_" + Math.floor(Math.random() * 10000);
  setRepoSubscription(ignored, owner, repo, subscribed);
  verifyRepoSubscriptionExists(ignored, owner, repo, subscribed);
  deleteRepoSubscription(ignored, owner, repo, subscribed);
  tryToDeleteANonExistingRepoSubscription(ignored, owner, repo, subscribed);
  verifyRepoSubscriptionDoesNotExist(ignored, owner, repo, subscribed);
});

// Story: crud:RepoSubscription:linear:2
bthread("crud:RepoSubscription:linear:2", function () {
  let ignored = "ignored_6020_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6020_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6020_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_6020_" + Math.floor(Math.random() * 10000);
  setRepoSubscription(ignored, owner, repo, subscribed);
  verifyRepoSubscriptionExists(ignored, owner, repo, subscribed);
  deleteRepoSubscription(ignored, owner, repo, subscribed);
  tryToDeleteANonExistingRepoSubscription(ignored, owner, repo, subscribed);
  verifyRepoSubscriptionDoesNotExist(ignored, owner, repo, subscribed);
});

// Story: crud:RepoSubscription:linear:3
bthread("crud:RepoSubscription:linear:3", function () {
  let ignored = "ignored_6030_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6030_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6030_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_6030_" + Math.floor(Math.random() * 10000);
  setRepoSubscription(ignored, owner, repo, subscribed);
  verifyRepoSubscriptionExists(ignored, owner, repo, subscribed);
  deleteRepoSubscription(ignored, owner, repo, subscribed);
  tryToDeleteANonExistingRepoSubscription(ignored, owner, repo, subscribed);
  verifyRepoSubscriptionDoesNotExist(ignored, owner, repo, subscribed);
});

// Monitor: RepoSubscription Verification
bthread("monitor:RepoSubscription", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepoSubscriptionAdded() });
    let ignored = (e.data.parameters && e.data.parameters["ignored"]) ? e.data.parameters["ignored"] : e.data["ignored"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let subscribed = (e.data.parameters && e.data.parameters["subscribed"]) ? e.data.parameters["subscribed"] : e.data["subscribed"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepoSubscription(ignored, owner, repo, subscribed), function() {
      bp.log.info(`Monitor RepoSubscription: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRepoSubscriptionExists(ignored, owner, repo, subscribed);
    });
  }
});

// Story: crud:StarredRepo:linear:1
bthread("crud:StarredRepo:linear:1", function () {
  let owner = "owner_6060_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6060_" + Math.floor(Math.random() * 10000);
  starRepoForAuthenticatedUser(owner, repo);
  verifyStarredRepoExists(owner, repo);
  unstarRepoForAuthenticatedUser(owner, repo);
  tryToDeleteANonExistingStarredRepo(owner, repo);
  verifyStarredRepoDoesNotExist(owner, repo);
});

// Story: crud:StarredRepo:linear:2
bthread("crud:StarredRepo:linear:2", function () {
  let owner = "owner_6070_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6070_" + Math.floor(Math.random() * 10000);
  starRepoForAuthenticatedUser(owner, repo);
  verifyStarredRepoExists(owner, repo);
  unstarRepoForAuthenticatedUser(owner, repo);
  tryToDeleteANonExistingStarredRepo(owner, repo);
  verifyStarredRepoDoesNotExist(owner, repo);
});

// Story: crud:StarredRepo:linear:3
bthread("crud:StarredRepo:linear:3", function () {
  let owner = "owner_6080_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6080_" + Math.floor(Math.random() * 10000);
  starRepoForAuthenticatedUser(owner, repo);
  verifyStarredRepoExists(owner, repo);
  unstarRepoForAuthenticatedUser(owner, repo);
  tryToDeleteANonExistingStarredRepo(owner, repo);
  verifyStarredRepoDoesNotExist(owner, repo);
});

// Monitor: StarredRepo Verification
bthread("monitor:StarredRepo", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyStarredRepoAdded() });
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedStarredRepo(owner, repo), function() {
      bp.log.info(`Monitor StarredRepo: Verifying persistence of ID ${id} inside deletion block.`);
        verifyStarredRepoExists(owner, repo);
    });
  }
});

// Story: crud:PackageVersion:linear:1
bthread("crud:PackageVersion:linear:1", function () {
  let package_name = "package_name_6110_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let package_type = "package_type_6110_" + Math.floor(Math.random() * 10000);
  let package_version_id = "package_version_id_6110_" + Math.floor(Math.random() * 10000);
  let username = "username_6110_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  restorePackageVersionForUser(package_name, package_type, package_version_id, username);
  verifyPackageVersionExists(package_name, package_type, package_version_id, username);
  deletePackageVersionForUser(package_name, package_type, package_version_id, username);
  tryToDeleteANonExistingPackageVersion(package_name, package_type, package_version_id, username);
  verifyPackageVersionDoesNotExist(package_name, package_type, package_version_id, username);
});

// Story: crud:PackageVersion:linear:2
bthread("crud:PackageVersion:linear:2", function () {
  let package_name = "package_name_6120_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let package_type = "package_type_6120_" + Math.floor(Math.random() * 10000);
  let package_version_id = "package_version_id_6120_" + Math.floor(Math.random() * 10000);
  let username = "username_6120_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  restorePackageVersionForUser(package_name, package_type, package_version_id, username);
  verifyPackageVersionExists(package_name, package_type, package_version_id, username);
  deletePackageVersionForUser(package_name, package_type, package_version_id, username);
  tryToDeleteANonExistingPackageVersion(package_name, package_type, package_version_id, username);
  verifyPackageVersionDoesNotExist(package_name, package_type, package_version_id, username);
});

// Story: crud:PackageVersion:linear:3
bthread("crud:PackageVersion:linear:3", function () {
  let package_name = "package_name_6130_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let package_type = "package_type_6130_" + Math.floor(Math.random() * 10000);
  let package_version_id = "package_version_id_6130_" + Math.floor(Math.random() * 10000);
  let username = "username_6130_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  restorePackageVersionForUser(package_name, package_type, package_version_id, username);
  verifyPackageVersionExists(package_name, package_type, package_version_id, username);
  deletePackageVersionForUser(package_name, package_type, package_version_id, username);
  tryToDeleteANonExistingPackageVersion(package_name, package_type, package_version_id, username);
  verifyPackageVersionDoesNotExist(package_name, package_type, package_version_id, username);
});

// Monitor: PackageVersion Verification
bthread("monitor:PackageVersion", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPackageVersionAdded() });
    let package_name = (e.data.parameters && e.data.parameters["package_name"]) ? e.data.parameters["package_name"] : e.data["package_name"];
    let package_type = (e.data.parameters && e.data.parameters["package_type"]) ? e.data.parameters["package_type"] : e.data["package_type"];
    let package_version_id = (e.data.parameters && e.data.parameters["package_version_id"]) ? e.data.parameters["package_version_id"] : e.data["package_version_id"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPackageVersion(package_name, package_type, package_version_id, username), function() {
      bp.log.info(`Monitor PackageVersion: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPackageVersionExists(package_name, package_type, package_version_id, username);
    });
  }
});

// Story: crud:CodeScanningAlertAutofix:linear:1
bthread("crud:CodeScanningAlertAutofix:linear:1", function () {
  let alert_number = "alert_number_6160_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6160_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6160_" + Math.floor(Math.random() * 10000);
  createAutofix(alert_number, owner, repo);
});

// Story: crud:CodeScanningAlertAutofix:linear:2
bthread("crud:CodeScanningAlertAutofix:linear:2", function () {
  let alert_number = "alert_number_6170_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6170_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6170_" + Math.floor(Math.random() * 10000);
  createAutofix(alert_number, owner, repo);
});

// Story: crud:CodeScanningAlertAutofix:linear:3
bthread("crud:CodeScanningAlertAutofix:linear:3", function () {
  let alert_number = "alert_number_6180_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6180_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6180_" + Math.floor(Math.random() * 10000);
  createAutofix(alert_number, owner, repo);
});

// Story: crud:CodeScanningAutofixCommit:linear:1
bthread("crud:CodeScanningAutofixCommit:linear:1", function () {
  let alert_number = "alert_number_6210_" + Math.floor(Math.random() * 10000);
  let id = "id_6210_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6210_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6210_" + Math.floor(Math.random() * 10000);
  commitAutofix(alert_number, id, owner, repo);
});

// Story: crud:CodeScanningAutofixCommit:linear:2
bthread("crud:CodeScanningAutofixCommit:linear:2", function () {
  let alert_number = "alert_number_6220_" + Math.floor(Math.random() * 10000);
  let id = "id_6220_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6220_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6220_" + Math.floor(Math.random() * 10000);
  commitAutofix(alert_number, id, owner, repo);
});

// Story: crud:CodeScanningAutofixCommit:linear:3
bthread("crud:CodeScanningAutofixCommit:linear:3", function () {
  let alert_number = "alert_number_6230_" + Math.floor(Math.random() * 10000);
  let id = "id_6230_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6230_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6230_" + Math.floor(Math.random() * 10000);
  commitAutofix(alert_number, id, owner, repo);
});

// Story: crud:CodeQLVariantAnalysis:linear:1
bthread("crud:CodeQLVariantAnalysis:linear:1", function () {
  let codeql_variant_analysis_id = "codeql_variant_analysis_id_6260_" + Math.floor(Math.random() * 10000);
  let language = "language_6260_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6260_" + Math.floor(Math.random() * 10000);
  let query_pack = "query_pack_6260_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6260_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_6260_" + Math.floor(Math.random() * 10000);
  let repository_lists = "repository_lists_6260_" + Math.floor(Math.random() * 10000);
  let repository_owners = "repository_owners_6260_" + Math.floor(Math.random() * 10000);
  createCodeqlVariantAnalysis(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners);
});

// Story: crud:CodeQLVariantAnalysis:linear:2
bthread("crud:CodeQLVariantAnalysis:linear:2", function () {
  let codeql_variant_analysis_id = "codeql_variant_analysis_id_6270_" + Math.floor(Math.random() * 10000);
  let language = "language_6270_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6270_" + Math.floor(Math.random() * 10000);
  let query_pack = "query_pack_6270_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6270_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_6270_" + Math.floor(Math.random() * 10000);
  let repository_lists = "repository_lists_6270_" + Math.floor(Math.random() * 10000);
  let repository_owners = "repository_owners_6270_" + Math.floor(Math.random() * 10000);
  createCodeqlVariantAnalysis(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners);
});

// Story: crud:CodeQLVariantAnalysis:linear:3
bthread("crud:CodeQLVariantAnalysis:linear:3", function () {
  let codeql_variant_analysis_id = "codeql_variant_analysis_id_6280_" + Math.floor(Math.random() * 10000);
  let language = "language_6280_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6280_" + Math.floor(Math.random() * 10000);
  let query_pack = "query_pack_6280_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6280_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_6280_" + Math.floor(Math.random() * 10000);
  let repository_lists = "repository_lists_6280_" + Math.floor(Math.random() * 10000);
  let repository_owners = "repository_owners_6280_" + Math.floor(Math.random() * 10000);
  createCodeqlVariantAnalysis(codeql_variant_analysis_id, language, owner, query_pack, repo, repositories, repository_lists, repository_owners);
});

// Story: crud:Sarif:linear:1
bthread("crud:Sarif:linear:1", function () {
  let checkout_uri = "checkout_uri_6310_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_6310_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6310_" + Math.floor(Math.random() * 10000);
  let ref = "ref_6310_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6310_" + Math.floor(Math.random() * 10000);
  let sarif = "sarif_6310_" + Math.floor(Math.random() * 10000);
  let sarif_id = "sarif_id_6310_" + Math.floor(Math.random() * 10000);
  let started_at = "started_at_6310_" + Math.floor(Math.random() * 10000);
  let tool_name = "tool_name_6310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let validate = "validate_6310_" + Math.floor(Math.random() * 10000);
  uploadSarif(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate);
});

// Story: crud:Sarif:linear:2
bthread("crud:Sarif:linear:2", function () {
  let checkout_uri = "checkout_uri_6320_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_6320_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6320_" + Math.floor(Math.random() * 10000);
  let ref = "ref_6320_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6320_" + Math.floor(Math.random() * 10000);
  let sarif = "sarif_6320_" + Math.floor(Math.random() * 10000);
  let sarif_id = "sarif_id_6320_" + Math.floor(Math.random() * 10000);
  let started_at = "started_at_6320_" + Math.floor(Math.random() * 10000);
  let tool_name = "tool_name_6320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let validate = "validate_6320_" + Math.floor(Math.random() * 10000);
  uploadSarif(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate);
});

// Story: crud:Sarif:linear:3
bthread("crud:Sarif:linear:3", function () {
  let checkout_uri = "checkout_uri_6330_" + Math.floor(Math.random() * 10000);
  let commit_sha = "commit_sha_6330_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6330_" + Math.floor(Math.random() * 10000);
  let ref = "ref_6330_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6330_" + Math.floor(Math.random() * 10000);
  let sarif = "sarif_6330_" + Math.floor(Math.random() * 10000);
  let sarif_id = "sarif_id_6330_" + Math.floor(Math.random() * 10000);
  let started_at = "started_at_6330_" + Math.floor(Math.random() * 10000);
  let tool_name = "tool_name_6330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let validate = "validate_6330_" + Math.floor(Math.random() * 10000);
  uploadSarif(checkout_uri, commit_sha, owner, ref, repo, sarif, sarif_id, started_at, tool_name, validate);
});

// Story: crud:TeamDiscussionCommentReaction:linear:1
bthread("crud:TeamDiscussionCommentReaction:linear:1", function () {
  let comment_number = "comment_number_6360_" + Math.floor(Math.random() * 10000);
  let content = "content_6360_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_6360_" + Math.floor(Math.random() * 10000);
  let org = "org_6360_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6360_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_6360_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_6360_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionDoesNotExist(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionCommentReaction:linear:2
bthread("crud:TeamDiscussionCommentReaction:linear:2", function () {
  let comment_number = "comment_number_6370_" + Math.floor(Math.random() * 10000);
  let content = "content_6370_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_6370_" + Math.floor(Math.random() * 10000);
  let org = "org_6370_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6370_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_6370_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_6370_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionDoesNotExist(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionCommentReaction:linear:3
bthread("crud:TeamDiscussionCommentReaction:linear:3", function () {
  let comment_number = "comment_number_6380_" + Math.floor(Math.random() * 10000);
  let content = "content_6380_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_6380_" + Math.floor(Math.random() * 10000);
  let org = "org_6380_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6380_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_6380_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_6380_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionCommentReactionDoesNotExist(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Monitor: TeamDiscussionCommentReaction Verification
bthread("monitor:TeamDiscussionCommentReaction", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamDiscussionCommentReactionAdded() });
    let comment_number = (e.data.parameters && e.data.parameters["comment_number"]) ? e.data.parameters["comment_number"] : e.data["comment_number"];
    let content = (e.data.parameters && e.data.parameters["content"]) ? e.data.parameters["content"] : e.data["content"];
    let discussion_number = (e.data.parameters && e.data.parameters["discussion_number"]) ? e.data.parameters["discussion_number"] : e.data["discussion_number"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let reaction_id = (e.data.parameters && e.data.parameters["reaction_id"]) ? e.data.parameters["reaction_id"] : e.data["reaction_id"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    let team_slug = (e.data.parameters && e.data.parameters["team_slug"]) ? e.data.parameters["team_slug"] : e.data["team_slug"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeamDiscussionCommentReaction(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug), function() {
      bp.log.info(`Monitor TeamDiscussionCommentReaction: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamDiscussionCommentReactionExists(comment_number, content, discussion_number, org, reaction_id, team_id, team_slug);
    });
  }
});

// Story: crud:TeamDiscussionReaction:linear:1
bthread("crud:TeamDiscussionReaction:linear:1", function () {
  let content = "content_6410_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_6410_" + Math.floor(Math.random() * 10000);
  let org = "org_6410_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6410_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_6410_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_6410_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionDoesNotExist(content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionReaction:linear:2
bthread("crud:TeamDiscussionReaction:linear:2", function () {
  let content = "content_6420_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_6420_" + Math.floor(Math.random() * 10000);
  let org = "org_6420_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6420_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_6420_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_6420_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionDoesNotExist(content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Story: crud:TeamDiscussionReaction:linear:3
bthread("crud:TeamDiscussionReaction:linear:3", function () {
  let content = "content_6430_" + Math.floor(Math.random() * 10000);
  let discussion_number = "discussion_number_6430_" + Math.floor(Math.random() * 10000);
  let org = "org_6430_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6430_" + Math.floor(Math.random() * 10000);
  let team_id = "team_id_6430_" + Math.floor(Math.random() * 10000);
  let team_slug = "team_slug_6430_" + Math.floor(Math.random() * 10000);
  createTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug);
  deleteTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  tryToDeleteANonExistingTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug);
  verifyTeamDiscussionReactionDoesNotExist(content, discussion_number, org, reaction_id, team_id, team_slug);
});

// Monitor: TeamDiscussionReaction Verification
bthread("monitor:TeamDiscussionReaction", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamDiscussionReactionAdded() });
    let content = (e.data.parameters && e.data.parameters["content"]) ? e.data.parameters["content"] : e.data["content"];
    let discussion_number = (e.data.parameters && e.data.parameters["discussion_number"]) ? e.data.parameters["discussion_number"] : e.data["discussion_number"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let reaction_id = (e.data.parameters && e.data.parameters["reaction_id"]) ? e.data.parameters["reaction_id"] : e.data["reaction_id"];
    let team_id = (e.data.parameters && e.data.parameters["team_id"]) ? e.data.parameters["team_id"] : e.data["team_id"];
    let team_slug = (e.data.parameters && e.data.parameters["team_slug"]) ? e.data.parameters["team_slug"] : e.data["team_slug"];
    // Block Deletion while Verifying Existence
    block(matchDeletedTeamDiscussionReaction(content, discussion_number, org, reaction_id, team_id, team_slug), function() {
      bp.log.info(`Monitor TeamDiscussionReaction: Verifying persistence of ID ${id} inside deletion block.`);
        verifyTeamDiscussionReactionExists(content, discussion_number, org, reaction_id, team_id, team_slug);
    });
  }
});

// Story: crud:CommitCommentReaction:linear:1
bthread("crud:CommitCommentReaction:linear:1", function () {
  let comment_id = "comment_id_6460_" + Math.floor(Math.random() * 10000);
  let content = "content_6460_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6460_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6460_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6460_" + Math.floor(Math.random() * 10000);
  createCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:CommitCommentReaction:linear:2
bthread("crud:CommitCommentReaction:linear:2", function () {
  let comment_id = "comment_id_6470_" + Math.floor(Math.random() * 10000);
  let content = "content_6470_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6470_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6470_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6470_" + Math.floor(Math.random() * 10000);
  createCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:CommitCommentReaction:linear:3
bthread("crud:CommitCommentReaction:linear:3", function () {
  let comment_id = "comment_id_6480_" + Math.floor(Math.random() * 10000);
  let content = "content_6480_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6480_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6480_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6480_" + Math.floor(Math.random() * 10000);
  createCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingCommitCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyCommitCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Monitor: CommitCommentReaction Verification
bthread("monitor:CommitCommentReaction", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCommitCommentReactionAdded() });
    let comment_id = (e.data.parameters && e.data.parameters["comment_id"]) ? e.data.parameters["comment_id"] : e.data["comment_id"];
    let content = (e.data.parameters && e.data.parameters["content"]) ? e.data.parameters["content"] : e.data["content"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let reaction_id = (e.data.parameters && e.data.parameters["reaction_id"]) ? e.data.parameters["reaction_id"] : e.data["reaction_id"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCommitCommentReaction(comment_id, content, owner, reaction_id, repo), function() {
      bp.log.info(`Monitor CommitCommentReaction: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCommitCommentReactionExists(comment_id, content, owner, reaction_id, repo);
    });
  }
});

// Story: crud:IssueCommentReaction:linear:1
bthread("crud:IssueCommentReaction:linear:1", function () {
  let comment_id = "comment_id_6510_" + Math.floor(Math.random() * 10000);
  let content = "content_6510_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6510_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6510_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6510_" + Math.floor(Math.random() * 10000);
  createIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueCommentReaction:linear:2
bthread("crud:IssueCommentReaction:linear:2", function () {
  let comment_id = "comment_id_6520_" + Math.floor(Math.random() * 10000);
  let content = "content_6520_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6520_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6520_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6520_" + Math.floor(Math.random() * 10000);
  createIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:IssueCommentReaction:linear:3
bthread("crud:IssueCommentReaction:linear:3", function () {
  let comment_id = "comment_id_6530_" + Math.floor(Math.random() * 10000);
  let content = "content_6530_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6530_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6530_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6530_" + Math.floor(Math.random() * 10000);
  createIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deleteIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyIssueCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Monitor: IssueCommentReaction Verification
bthread("monitor:IssueCommentReaction", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentReactionAdded() });
    let comment_id = (e.data.parameters && e.data.parameters["comment_id"]) ? e.data.parameters["comment_id"] : e.data["comment_id"];
    let content = (e.data.parameters && e.data.parameters["content"]) ? e.data.parameters["content"] : e.data["content"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let reaction_id = (e.data.parameters && e.data.parameters["reaction_id"]) ? e.data.parameters["reaction_id"] : e.data["reaction_id"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedIssueCommentReaction(comment_id, content, owner, reaction_id, repo), function() {
      bp.log.info(`Monitor IssueCommentReaction: Verifying persistence of ID ${id} inside deletion block.`);
        verifyIssueCommentReactionExists(comment_id, content, owner, reaction_id, repo);
    });
  }
});

// Story: crud:IssueReaction:linear:1
bthread("crud:IssueReaction:linear:1", function () {
  let content = "content_6560_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_6560_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6560_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6560_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6560_" + Math.floor(Math.random() * 10000);
  createIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
  deleteIssueReaction(content, issue_number, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionDoesNotExist(content, issue_number, owner, reaction_id, repo);
});

// Story: crud:IssueReaction:linear:2
bthread("crud:IssueReaction:linear:2", function () {
  let content = "content_6570_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_6570_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6570_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6570_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6570_" + Math.floor(Math.random() * 10000);
  createIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
  deleteIssueReaction(content, issue_number, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionDoesNotExist(content, issue_number, owner, reaction_id, repo);
});

// Story: crud:IssueReaction:linear:3
bthread("crud:IssueReaction:linear:3", function () {
  let content = "content_6580_" + Math.floor(Math.random() * 10000);
  let issue_number = "issue_number_6580_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6580_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6580_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6580_" + Math.floor(Math.random() * 10000);
  createIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
  deleteIssueReaction(content, issue_number, owner, reaction_id, repo);
  tryToDeleteANonExistingIssueReaction(content, issue_number, owner, reaction_id, repo);
  verifyIssueReactionDoesNotExist(content, issue_number, owner, reaction_id, repo);
});

// Monitor: IssueReaction Verification
bthread("monitor:IssueReaction", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueReactionAdded() });
    let content = (e.data.parameters && e.data.parameters["content"]) ? e.data.parameters["content"] : e.data["content"];
    let issue_number = (e.data.parameters && e.data.parameters["issue_number"]) ? e.data.parameters["issue_number"] : e.data["issue_number"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let reaction_id = (e.data.parameters && e.data.parameters["reaction_id"]) ? e.data.parameters["reaction_id"] : e.data["reaction_id"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedIssueReaction(content, issue_number, owner, reaction_id, repo), function() {
      bp.log.info(`Monitor IssueReaction: Verifying persistence of ID ${id} inside deletion block.`);
        verifyIssueReactionExists(content, issue_number, owner, reaction_id, repo);
    });
  }
});

// Story: crud:PullRequestReviewCommentReaction:linear:1
bthread("crud:PullRequestReviewCommentReaction:linear:1", function () {
  let comment_id = "comment_id_6610_" + Math.floor(Math.random() * 10000);
  let content = "content_6610_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6610_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6610_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6610_" + Math.floor(Math.random() * 10000);
  createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deletePullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:PullRequestReviewCommentReaction:linear:2
bthread("crud:PullRequestReviewCommentReaction:linear:2", function () {
  let comment_id = "comment_id_6620_" + Math.floor(Math.random() * 10000);
  let content = "content_6620_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6620_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6620_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6620_" + Math.floor(Math.random() * 10000);
  createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deletePullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Story: crud:PullRequestReviewCommentReaction:linear:3
bthread("crud:PullRequestReviewCommentReaction:linear:3", function () {
  let comment_id = "comment_id_6630_" + Math.floor(Math.random() * 10000);
  let content = "content_6630_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6630_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6630_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6630_" + Math.floor(Math.random() * 10000);
  createPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
  deletePullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  tryToDeleteANonExistingPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo);
  verifyPullRequestReviewCommentReactionDoesNotExist(comment_id, content, owner, reaction_id, repo);
});

// Monitor: PullRequestReviewCommentReaction Verification
bthread("monitor:PullRequestReviewCommentReaction", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullRequestReviewCommentReactionAdded() });
    let comment_id = (e.data.parameters && e.data.parameters["comment_id"]) ? e.data.parameters["comment_id"] : e.data["comment_id"];
    let content = (e.data.parameters && e.data.parameters["content"]) ? e.data.parameters["content"] : e.data["content"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let reaction_id = (e.data.parameters && e.data.parameters["reaction_id"]) ? e.data.parameters["reaction_id"] : e.data["reaction_id"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPullRequestReviewCommentReaction(comment_id, content, owner, reaction_id, repo), function() {
      bp.log.info(`Monitor PullRequestReviewCommentReaction: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPullRequestReviewCommentReactionExists(comment_id, content, owner, reaction_id, repo);
    });
  }
});

// Story: crud:ReleaseReaction:linear:1
bthread("crud:ReleaseReaction:linear:1", function () {
  let content = "content_6660_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6660_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6660_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_6660_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6660_" + Math.floor(Math.random() * 10000);
  createReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo);
  deleteReleaseReaction(content, owner, reaction_id, release_id, repo);
  tryToDeleteANonExistingReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionDoesNotExist(content, owner, reaction_id, release_id, repo);
});

// Story: crud:ReleaseReaction:linear:2
bthread("crud:ReleaseReaction:linear:2", function () {
  let content = "content_6670_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6670_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6670_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_6670_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6670_" + Math.floor(Math.random() * 10000);
  createReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo);
  deleteReleaseReaction(content, owner, reaction_id, release_id, repo);
  tryToDeleteANonExistingReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionDoesNotExist(content, owner, reaction_id, release_id, repo);
});

// Story: crud:ReleaseReaction:linear:3
bthread("crud:ReleaseReaction:linear:3", function () {
  let content = "content_6680_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6680_" + Math.floor(Math.random() * 10000);
  let reaction_id = "reaction_id_6680_" + Math.floor(Math.random() * 10000);
  let release_id = "release_id_6680_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6680_" + Math.floor(Math.random() * 10000);
  createReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo);
  deleteReleaseReaction(content, owner, reaction_id, release_id, repo);
  tryToDeleteANonExistingReleaseReaction(content, owner, reaction_id, release_id, repo);
  verifyReleaseReactionDoesNotExist(content, owner, reaction_id, release_id, repo);
});

// Monitor: ReleaseReaction Verification
bthread("monitor:ReleaseReaction", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleaseReactionAdded() });
    let content = (e.data.parameters && e.data.parameters["content"]) ? e.data.parameters["content"] : e.data["content"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let reaction_id = (e.data.parameters && e.data.parameters["reaction_id"]) ? e.data.parameters["reaction_id"] : e.data["reaction_id"];
    let release_id = (e.data.parameters && e.data.parameters["release_id"]) ? e.data.parameters["release_id"] : e.data["release_id"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    // Block Deletion while Verifying Existence
    block(matchDeletedReleaseReaction(content, owner, reaction_id, release_id, repo), function() {
      bp.log.info(`Monitor ReleaseReaction: Verifying persistence of ID ${id} inside deletion block.`);
        verifyReleaseReactionExists(content, owner, reaction_id, release_id, repo);
    });
  }
});

// Story: crud:PullRequest:linear:1
bthread("crud:PullRequest:linear:1", function () {
  let base = "base_6710_" + Math.floor(Math.random() * 10000);
  let body = "body_6710_" + Math.floor(Math.random() * 10000);
  let draft = "draft_6710_" + Math.floor(Math.random() * 10000);
  let head = "head_6710_" + Math.floor(Math.random() * 10000);
  let head_repo = "head_repo_6710_" + Math.floor(Math.random() * 10000);
  let issue = "issue_6710_" + Math.floor(Math.random() * 10000);
  let maintainer_can_modify = "maintainer_can_modify_6710_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6710_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6710_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6710_" + Math.floor(Math.random() * 10000);
  let state = "state_6710_" + Math.floor(Math.random() * 10000);
  let title = "title_6710_" + Math.floor(Math.random() * 10000);
  createPullRequest(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title);
});

// Story: crud:PullRequest:linear:2
bthread("crud:PullRequest:linear:2", function () {
  let base = "base_6720_" + Math.floor(Math.random() * 10000);
  let body = "body_6720_" + Math.floor(Math.random() * 10000);
  let draft = "draft_6720_" + Math.floor(Math.random() * 10000);
  let head = "head_6720_" + Math.floor(Math.random() * 10000);
  let head_repo = "head_repo_6720_" + Math.floor(Math.random() * 10000);
  let issue = "issue_6720_" + Math.floor(Math.random() * 10000);
  let maintainer_can_modify = "maintainer_can_modify_6720_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6720_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6720_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6720_" + Math.floor(Math.random() * 10000);
  let state = "state_6720_" + Math.floor(Math.random() * 10000);
  let title = "title_6720_" + Math.floor(Math.random() * 10000);
  createPullRequest(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title);
});

// Story: crud:PullRequest:linear:3
bthread("crud:PullRequest:linear:3", function () {
  let base = "base_6730_" + Math.floor(Math.random() * 10000);
  let body = "body_6730_" + Math.floor(Math.random() * 10000);
  let draft = "draft_6730_" + Math.floor(Math.random() * 10000);
  let head = "head_6730_" + Math.floor(Math.random() * 10000);
  let head_repo = "head_repo_6730_" + Math.floor(Math.random() * 10000);
  let issue = "issue_6730_" + Math.floor(Math.random() * 10000);
  let maintainer_can_modify = "maintainer_can_modify_6730_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6730_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6730_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6730_" + Math.floor(Math.random() * 10000);
  let state = "state_6730_" + Math.floor(Math.random() * 10000);
  let title = "title_6730_" + Math.floor(Math.random() * 10000);
  createPullRequest(base, body, draft, head, head_repo, issue, maintainer_can_modify, owner, pull_number, repo, state, title);
});

// Story: crud:PullRequestReviewCommentReply:linear:1
bthread("crud:PullRequestReviewCommentReply:linear:1", function () {
  let body = "body_6760_" + Math.floor(Math.random() * 10000);
  let comment_id = "comment_id_6760_" + Math.floor(Math.random() * 10000);
  let id = "id_6760_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6760_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6760_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6760_" + Math.floor(Math.random() * 10000);
  createReplyForReviewComment(body, comment_id, id, owner, pull_number, repo);
});

// Story: crud:PullRequestReviewCommentReply:linear:2
bthread("crud:PullRequestReviewCommentReply:linear:2", function () {
  let body = "body_6770_" + Math.floor(Math.random() * 10000);
  let comment_id = "comment_id_6770_" + Math.floor(Math.random() * 10000);
  let id = "id_6770_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6770_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6770_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6770_" + Math.floor(Math.random() * 10000);
  createReplyForReviewComment(body, comment_id, id, owner, pull_number, repo);
});

// Story: crud:PullRequestReviewCommentReply:linear:3
bthread("crud:PullRequestReviewCommentReply:linear:3", function () {
  let body = "body_6780_" + Math.floor(Math.random() * 10000);
  let comment_id = "comment_id_6780_" + Math.floor(Math.random() * 10000);
  let id = "id_6780_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6780_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6780_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6780_" + Math.floor(Math.random() * 10000);
  createReplyForReviewComment(body, comment_id, id, owner, pull_number, repo);
});

// Story: crud:PullRequestReviewComments:linear:1
bthread("crud:PullRequestReviewComments:linear:1", function () {
  let body = "body_6810_" + Math.floor(Math.random() * 10000);
  let commit_id = "commit_id_6810_" + Math.floor(Math.random() * 10000);
  let in_reply_to = "in_reply_to_6810_" + Math.floor(Math.random() * 10000);
  let line = "line_6810_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6810_" + Math.floor(Math.random() * 10000);
  let path = "path_6810_" + Math.floor(Math.random() * 10000);
  let position = "position_6810_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6810_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6810_" + Math.floor(Math.random() * 10000);
  let side = "side_6810_" + Math.floor(Math.random() * 10000);
  let start_line = "start_line_6810_" + Math.floor(Math.random() * 10000);
  let start_side = "start_side_6810_" + Math.floor(Math.random() * 10000);
  let subject_type = "subject_type_6810_" + Math.floor(Math.random() * 10000);
  createReviewComment(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type);
});

// Story: crud:PullRequestReviewComments:linear:2
bthread("crud:PullRequestReviewComments:linear:2", function () {
  let body = "body_6820_" + Math.floor(Math.random() * 10000);
  let commit_id = "commit_id_6820_" + Math.floor(Math.random() * 10000);
  let in_reply_to = "in_reply_to_6820_" + Math.floor(Math.random() * 10000);
  let line = "line_6820_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6820_" + Math.floor(Math.random() * 10000);
  let path = "path_6820_" + Math.floor(Math.random() * 10000);
  let position = "position_6820_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6820_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6820_" + Math.floor(Math.random() * 10000);
  let side = "side_6820_" + Math.floor(Math.random() * 10000);
  let start_line = "start_line_6820_" + Math.floor(Math.random() * 10000);
  let start_side = "start_side_6820_" + Math.floor(Math.random() * 10000);
  let subject_type = "subject_type_6820_" + Math.floor(Math.random() * 10000);
  createReviewComment(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type);
});

// Story: crud:PullRequestReviewComments:linear:3
bthread("crud:PullRequestReviewComments:linear:3", function () {
  let body = "body_6830_" + Math.floor(Math.random() * 10000);
  let commit_id = "commit_id_6830_" + Math.floor(Math.random() * 10000);
  let in_reply_to = "in_reply_to_6830_" + Math.floor(Math.random() * 10000);
  let line = "line_6830_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6830_" + Math.floor(Math.random() * 10000);
  let path = "path_6830_" + Math.floor(Math.random() * 10000);
  let position = "position_6830_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6830_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6830_" + Math.floor(Math.random() * 10000);
  let side = "side_6830_" + Math.floor(Math.random() * 10000);
  let start_line = "start_line_6830_" + Math.floor(Math.random() * 10000);
  let start_side = "start_side_6830_" + Math.floor(Math.random() * 10000);
  let subject_type = "subject_type_6830_" + Math.floor(Math.random() * 10000);
  createReviewComment(body, commit_id, in_reply_to, line, owner, path, position, pull_number, repo, side, start_line, start_side, subject_type);
});

// Story: crud:PullRequestRequestedReviewers:linear:1
bthread("crud:PullRequestRequestedReviewers:linear:1", function () {
  let owner = "owner_6860_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6860_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6860_" + Math.floor(Math.random() * 10000);
  let reviewers = "reviewers_6860_" + Math.floor(Math.random() * 10000);
  let team_reviewers = "team_reviewers_6860_" + Math.floor(Math.random() * 10000);
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  removeRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  tryToDeleteANonExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersDoesNotExist(owner, pull_number, repo, reviewers, team_reviewers);
});

// Story: crud:PullRequestRequestedReviewers:linear:2
bthread("crud:PullRequestRequestedReviewers:linear:2", function () {
  let owner = "owner_6870_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6870_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6870_" + Math.floor(Math.random() * 10000);
  let reviewers = "reviewers_6870_" + Math.floor(Math.random() * 10000);
  let team_reviewers = "team_reviewers_6870_" + Math.floor(Math.random() * 10000);
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  removeRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  tryToDeleteANonExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersDoesNotExist(owner, pull_number, repo, reviewers, team_reviewers);
});

// Story: crud:PullRequestRequestedReviewers:linear:3
bthread("crud:PullRequestRequestedReviewers:linear:3", function () {
  let owner = "owner_6880_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6880_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6880_" + Math.floor(Math.random() * 10000);
  let reviewers = "reviewers_6880_" + Math.floor(Math.random() * 10000);
  let team_reviewers = "team_reviewers_6880_" + Math.floor(Math.random() * 10000);
  requestReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
  removeRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  tryToDeleteANonExistingPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers);
  verifyPullRequestRequestedReviewersDoesNotExist(owner, pull_number, repo, reviewers, team_reviewers);
});

// Monitor: PullRequestRequestedReviewers Verification
bthread("monitor:PullRequestRequestedReviewers", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullRequestRequestedReviewersAdded() });
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let pull_number = (e.data.parameters && e.data.parameters["pull_number"]) ? e.data.parameters["pull_number"] : e.data["pull_number"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let reviewers = (e.data.parameters && e.data.parameters["reviewers"]) ? e.data.parameters["reviewers"] : e.data["reviewers"];
    let team_reviewers = (e.data.parameters && e.data.parameters["team_reviewers"]) ? e.data.parameters["team_reviewers"] : e.data["team_reviewers"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPullRequestRequestedReviewers(owner, pull_number, repo, reviewers, team_reviewers), function() {
      bp.log.info(`Monitor PullRequestRequestedReviewers: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPullRequestRequestedReviewersExists(owner, pull_number, repo, reviewers, team_reviewers);
    });
  }
});

// Story: crud:PullRequestReview:linear:1
bthread("crud:PullRequestReview:linear:1", function () {
  let body = "body_6910_" + Math.floor(Math.random() * 10000);
  let comments = "comments_6910_" + Math.floor(Math.random() * 10000);
  let commit_id = "commit_id_6910_" + Math.floor(Math.random() * 10000);
  let event = "event_6910_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6910_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6910_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6910_" + Math.floor(Math.random() * 10000);
  let review_id = "review_id_6910_" + Math.floor(Math.random() * 10000);
  createPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  updatePullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  deletePendingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToDeleteANonExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewDoesNotExist(body, comments, commit_id, event, owner, pull_number, repo, review_id);
});

// Story: crud:PullRequestReview:linear:2
bthread("crud:PullRequestReview:linear:2", function () {
  let body = "body_6920_" + Math.floor(Math.random() * 10000);
  let comments = "comments_6920_" + Math.floor(Math.random() * 10000);
  let commit_id = "commit_id_6920_" + Math.floor(Math.random() * 10000);
  let event = "event_6920_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6920_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6920_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6920_" + Math.floor(Math.random() * 10000);
  let review_id = "review_id_6920_" + Math.floor(Math.random() * 10000);
  createPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  updatePullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  deletePendingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToDeleteANonExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewDoesNotExist(body, comments, commit_id, event, owner, pull_number, repo, review_id);
});

// Story: crud:PullRequestReview:linear:3
bthread("crud:PullRequestReview:linear:3", function () {
  let body = "body_6930_" + Math.floor(Math.random() * 10000);
  let comments = "comments_6930_" + Math.floor(Math.random() * 10000);
  let commit_id = "commit_id_6930_" + Math.floor(Math.random() * 10000);
  let event = "event_6930_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6930_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6930_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6930_" + Math.floor(Math.random() * 10000);
  let review_id = "review_id_6930_" + Math.floor(Math.random() * 10000);
  createPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  updatePullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  deletePendingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  tryToDeleteANonExistingPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id);
  verifyPullRequestReviewDoesNotExist(body, comments, commit_id, event, owner, pull_number, repo, review_id);
});

// Monitor: PullRequestReview Verification
bthread("monitor:PullRequestReview", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullRequestReviewAdded() });
    let body = (e.data.parameters && e.data.parameters["body"]) ? e.data.parameters["body"] : e.data["body"];
    let comments = (e.data.parameters && e.data.parameters["comments"]) ? e.data.parameters["comments"] : e.data["comments"];
    let commit_id = (e.data.parameters && e.data.parameters["commit_id"]) ? e.data.parameters["commit_id"] : e.data["commit_id"];
    let event = (e.data.parameters && e.data.parameters["event"]) ? e.data.parameters["event"] : e.data["event"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let pull_number = (e.data.parameters && e.data.parameters["pull_number"]) ? e.data.parameters["pull_number"] : e.data["pull_number"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let review_id = (e.data.parameters && e.data.parameters["review_id"]) ? e.data.parameters["review_id"] : e.data["review_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPullRequestReview(body, comments, commit_id, event, owner, pull_number, repo, review_id), function() {
      bp.log.info(`Monitor PullRequestReview: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPullRequestReviewExists(body, comments, commit_id, event, owner, pull_number, repo, review_id);
    });
  }
});

// Story: crud:PullRequestReviewEvent:linear:1
bthread("crud:PullRequestReviewEvent:linear:1", function () {
  let body = "body_6960_" + Math.floor(Math.random() * 10000);
  let event = "event_6960_" + Math.floor(Math.random() * 10000);
  let id = "id_6960_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6960_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6960_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6960_" + Math.floor(Math.random() * 10000);
  let review_id = "review_id_6960_" + Math.floor(Math.random() * 10000);
  submitPullRequestReview(body, event, id, owner, pull_number, repo, review_id);
});

// Story: crud:PullRequestReviewEvent:linear:2
bthread("crud:PullRequestReviewEvent:linear:2", function () {
  let body = "body_6970_" + Math.floor(Math.random() * 10000);
  let event = "event_6970_" + Math.floor(Math.random() * 10000);
  let id = "id_6970_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6970_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6970_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6970_" + Math.floor(Math.random() * 10000);
  let review_id = "review_id_6970_" + Math.floor(Math.random() * 10000);
  submitPullRequestReview(body, event, id, owner, pull_number, repo, review_id);
});

// Story: crud:PullRequestReviewEvent:linear:3
bthread("crud:PullRequestReviewEvent:linear:3", function () {
  let body = "body_6980_" + Math.floor(Math.random() * 10000);
  let event = "event_6980_" + Math.floor(Math.random() * 10000);
  let id = "id_6980_" + Math.floor(Math.random() * 10000);
  let owner = "owner_6980_" + Math.floor(Math.random() * 10000);
  let pull_number = "pull_number_6980_" + Math.floor(Math.random() * 10000);
  let repo = "repo_6980_" + Math.floor(Math.random() * 10000);
  let review_id = "review_id_6980_" + Math.floor(Math.random() * 10000);
  submitPullRequestReview(body, event, id, owner, pull_number, repo, review_id);
});

// Story: crud:Migration:linear:1
bthread("crud:Migration:linear:1", function () {
  let exclude = "exclude_7010_" + Math.floor(Math.random() * 10000);
  let exclude_attachments = "exclude_attachments_7010_" + Math.floor(Math.random() * 10000);
  let exclude_git_data = "exclude_git_data_7010_" + Math.floor(Math.random() * 10000);
  let exclude_metadata = "exclude_metadata_7010_" + Math.floor(Math.random() * 10000);
  let exclude_owner_projects = "exclude_owner_projects_7010_" + Math.floor(Math.random() * 10000);
  let exclude_releases = "exclude_releases_7010_" + Math.floor(Math.random() * 10000);
  let lock_repositories = "lock_repositories_7010_" + Math.floor(Math.random() * 10000);
  let migration_id = "migration_id_7010_" + Math.floor(Math.random() * 10000);
  let org_metadata_only = "org_metadata_only_7010_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_7010_" + Math.floor(Math.random() * 10000);
  startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  deleteMigrationArchive(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  tryToDeleteANonExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  verifyMigrationDoesNotExist(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
});

// Story: crud:Migration:linear:2
bthread("crud:Migration:linear:2", function () {
  let exclude = "exclude_7020_" + Math.floor(Math.random() * 10000);
  let exclude_attachments = "exclude_attachments_7020_" + Math.floor(Math.random() * 10000);
  let exclude_git_data = "exclude_git_data_7020_" + Math.floor(Math.random() * 10000);
  let exclude_metadata = "exclude_metadata_7020_" + Math.floor(Math.random() * 10000);
  let exclude_owner_projects = "exclude_owner_projects_7020_" + Math.floor(Math.random() * 10000);
  let exclude_releases = "exclude_releases_7020_" + Math.floor(Math.random() * 10000);
  let lock_repositories = "lock_repositories_7020_" + Math.floor(Math.random() * 10000);
  let migration_id = "migration_id_7020_" + Math.floor(Math.random() * 10000);
  let org_metadata_only = "org_metadata_only_7020_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_7020_" + Math.floor(Math.random() * 10000);
  startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  deleteMigrationArchive(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  tryToDeleteANonExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  verifyMigrationDoesNotExist(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
});

// Story: crud:Migration:linear:3
bthread("crud:Migration:linear:3", function () {
  let exclude = "exclude_7030_" + Math.floor(Math.random() * 10000);
  let exclude_attachments = "exclude_attachments_7030_" + Math.floor(Math.random() * 10000);
  let exclude_git_data = "exclude_git_data_7030_" + Math.floor(Math.random() * 10000);
  let exclude_metadata = "exclude_metadata_7030_" + Math.floor(Math.random() * 10000);
  let exclude_owner_projects = "exclude_owner_projects_7030_" + Math.floor(Math.random() * 10000);
  let exclude_releases = "exclude_releases_7030_" + Math.floor(Math.random() * 10000);
  let lock_repositories = "lock_repositories_7030_" + Math.floor(Math.random() * 10000);
  let migration_id = "migration_id_7030_" + Math.floor(Math.random() * 10000);
  let org_metadata_only = "org_metadata_only_7030_" + Math.floor(Math.random() * 10000);
  let repositories = "repositories_7030_" + Math.floor(Math.random() * 10000);
  startMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  deleteMigrationArchive(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  tryToDeleteANonExistingMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
  verifyMigrationDoesNotExist(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
});

// Monitor: Migration Verification
bthread("monitor:Migration", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMigrationAdded() });
    let exclude = (e.data.parameters && e.data.parameters["exclude"]) ? e.data.parameters["exclude"] : e.data["exclude"];
    let exclude_attachments = (e.data.parameters && e.data.parameters["exclude_attachments"]) ? e.data.parameters["exclude_attachments"] : e.data["exclude_attachments"];
    let exclude_git_data = (e.data.parameters && e.data.parameters["exclude_git_data"]) ? e.data.parameters["exclude_git_data"] : e.data["exclude_git_data"];
    let exclude_metadata = (e.data.parameters && e.data.parameters["exclude_metadata"]) ? e.data.parameters["exclude_metadata"] : e.data["exclude_metadata"];
    let exclude_owner_projects = (e.data.parameters && e.data.parameters["exclude_owner_projects"]) ? e.data.parameters["exclude_owner_projects"] : e.data["exclude_owner_projects"];
    let exclude_releases = (e.data.parameters && e.data.parameters["exclude_releases"]) ? e.data.parameters["exclude_releases"] : e.data["exclude_releases"];
    let lock_repositories = (e.data.parameters && e.data.parameters["lock_repositories"]) ? e.data.parameters["lock_repositories"] : e.data["lock_repositories"];
    let migration_id = (e.data.parameters && e.data.parameters["migration_id"]) ? e.data.parameters["migration_id"] : e.data["migration_id"];
    let org_metadata_only = (e.data.parameters && e.data.parameters["org_metadata_only"]) ? e.data.parameters["org_metadata_only"] : e.data["org_metadata_only"];
    let repositories = (e.data.parameters && e.data.parameters["repositories"]) ? e.data.parameters["repositories"] : e.data["repositories"];
    // Block Deletion while Verifying Existence
    block(matchDeletedMigration(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories), function() {
      bp.log.info(`Monitor Migration: Verifying persistence of ID ${id} inside deletion block.`);
        verifyMigrationExists(exclude, exclude_attachments, exclude_git_data, exclude_metadata, exclude_owner_projects, exclude_releases, lock_repositories, migration_id, org_metadata_only, repositories);
    });
  }
});

// Story: crud:Import:linear:1
bthread("crud:Import:linear:1", function () {
  let owner = "owner_7060_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7060_" + Math.floor(Math.random() * 10000);
  let tfvc_project = "tfvc_project_7060_" + Math.floor(Math.random() * 10000);
  let vcs = "vcs_7060_" + Math.floor(Math.random() * 10000);
  let vcs_password = "vcs_password_7060_" + Math.floor(Math.random() * 10000);
  let vcs_url = "vcs_url_7060_" + Math.floor(Math.random() * 10000);
  let vcs_username = "vcs_username_7060_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  startImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  verifyImportExists(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  updateImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  cancelImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  tryToDeleteANonExistingImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  verifyImportDoesNotExist(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
});

// Story: crud:Import:linear:2
bthread("crud:Import:linear:2", function () {
  let owner = "owner_7070_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7070_" + Math.floor(Math.random() * 10000);
  let tfvc_project = "tfvc_project_7070_" + Math.floor(Math.random() * 10000);
  let vcs = "vcs_7070_" + Math.floor(Math.random() * 10000);
  let vcs_password = "vcs_password_7070_" + Math.floor(Math.random() * 10000);
  let vcs_url = "vcs_url_7070_" + Math.floor(Math.random() * 10000);
  let vcs_username = "vcs_username_7070_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  startImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  verifyImportExists(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  updateImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  cancelImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  tryToDeleteANonExistingImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  verifyImportDoesNotExist(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
});

// Story: crud:Import:linear:3
bthread("crud:Import:linear:3", function () {
  let owner = "owner_7080_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7080_" + Math.floor(Math.random() * 10000);
  let tfvc_project = "tfvc_project_7080_" + Math.floor(Math.random() * 10000);
  let vcs = "vcs_7080_" + Math.floor(Math.random() * 10000);
  let vcs_password = "vcs_password_7080_" + Math.floor(Math.random() * 10000);
  let vcs_url = "vcs_url_7080_" + Math.floor(Math.random() * 10000);
  let vcs_username = "vcs_username_7080_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  startImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  verifyImportExists(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  updateImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  cancelImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  tryToDeleteANonExistingImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
  verifyImportDoesNotExist(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
});

// Monitor: Import Verification
bthread("monitor:Import", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyImportAdded() });
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let tfvc_project = (e.data.parameters && e.data.parameters["tfvc_project"]) ? e.data.parameters["tfvc_project"] : e.data["tfvc_project"];
    let vcs = (e.data.parameters && e.data.parameters["vcs"]) ? e.data.parameters["vcs"] : e.data["vcs"];
    let vcs_password = (e.data.parameters && e.data.parameters["vcs_password"]) ? e.data.parameters["vcs_password"] : e.data["vcs_password"];
    let vcs_url = (e.data.parameters && e.data.parameters["vcs_url"]) ? e.data.parameters["vcs_url"] : e.data["vcs_url"];
    let vcs_username = (e.data.parameters && e.data.parameters["vcs_username"]) ? e.data.parameters["vcs_username"] : e.data["vcs_username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedImport(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username), function() {
      bp.log.info(`Monitor Import: Verifying persistence of ID ${id} inside deletion block.`);
        verifyImportExists(owner, repo, tfvc_project, vcs, vcs_password, vcs_url, vcs_username);
    });
  }
});

// Story: crud:CodeSecurityConfigurationEnterprise:linear:1
bthread("crud:CodeSecurityConfigurationEnterprise:linear:1", function () {
  let configuration_id = "configuration_id_7110_" + Math.floor(Math.random() * 10000);
  let description = "description_7110_" + Math.floor(Math.random() * 10000);
  let enterprise = "enterprise_7110_" + Math.floor(Math.random() * 10000);
  let name = "name_7110_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  verifyCodeSecurityConfigurationEnterpriseExists(configuration_id, description, enterprise, name);
  updateEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  deleteEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  tryToDeleteANonExistingCodeSecurityConfigurationEnterprise(configuration_id, description, enterprise, name);
  verifyCodeSecurityConfigurationEnterpriseDoesNotExist(configuration_id, description, enterprise, name);
});

// Story: crud:CodeSecurityConfigurationEnterprise:linear:2
bthread("crud:CodeSecurityConfigurationEnterprise:linear:2", function () {
  let configuration_id = "configuration_id_7120_" + Math.floor(Math.random() * 10000);
  let description = "description_7120_" + Math.floor(Math.random() * 10000);
  let enterprise = "enterprise_7120_" + Math.floor(Math.random() * 10000);
  let name = "name_7120_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  verifyCodeSecurityConfigurationEnterpriseExists(configuration_id, description, enterprise, name);
  updateEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  deleteEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  tryToDeleteANonExistingCodeSecurityConfigurationEnterprise(configuration_id, description, enterprise, name);
  verifyCodeSecurityConfigurationEnterpriseDoesNotExist(configuration_id, description, enterprise, name);
});

// Story: crud:CodeSecurityConfigurationEnterprise:linear:3
bthread("crud:CodeSecurityConfigurationEnterprise:linear:3", function () {
  let configuration_id = "configuration_id_7130_" + Math.floor(Math.random() * 10000);
  let description = "description_7130_" + Math.floor(Math.random() * 10000);
  let enterprise = "enterprise_7130_" + Math.floor(Math.random() * 10000);
  let name = "name_7130_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  verifyCodeSecurityConfigurationEnterpriseExists(configuration_id, description, enterprise, name);
  updateEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  deleteEnterpriseCodeSecurityConfiguration(configuration_id, description, enterprise, name);
  tryToDeleteANonExistingCodeSecurityConfigurationEnterprise(configuration_id, description, enterprise, name);
  verifyCodeSecurityConfigurationEnterpriseDoesNotExist(configuration_id, description, enterprise, name);
});

// Monitor: CodeSecurityConfigurationEnterprise Verification
bthread("monitor:CodeSecurityConfigurationEnterprise", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCodeSecurityConfigurationEnterpriseAdded() });
    let configuration_id = (e.data.parameters && e.data.parameters["configuration_id"]) ? e.data.parameters["configuration_id"] : e.data["configuration_id"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let enterprise = (e.data.parameters && e.data.parameters["enterprise"]) ? e.data.parameters["enterprise"] : e.data["enterprise"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCodeSecurityConfigurationEnterprise(configuration_id, description, enterprise, name), function() {
      bp.log.info(`Monitor CodeSecurityConfigurationEnterprise: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCodeSecurityConfigurationEnterpriseExists(configuration_id, description, enterprise, name);
    });
  }
});

// Story: crud:CodeSecurityConfigurationEnterpriseAttach:linear:1
bthread("crud:CodeSecurityConfigurationEnterpriseAttach:linear:1", function () {
  let configuration_id = "configuration_id_7160_" + Math.floor(Math.random() * 10000);
  let enterprise = "enterprise_7160_" + Math.floor(Math.random() * 10000);
  let id = "id_7160_" + Math.floor(Math.random() * 10000);
  let scope = "scope_7160_" + Math.floor(Math.random() * 10000);
  attachEnterpriseCodeSecurityConfiguration(configuration_id, enterprise, id, scope);
});

// Story: crud:CodeSecurityConfigurationEnterpriseAttach:linear:2
bthread("crud:CodeSecurityConfigurationEnterpriseAttach:linear:2", function () {
  let configuration_id = "configuration_id_7170_" + Math.floor(Math.random() * 10000);
  let enterprise = "enterprise_7170_" + Math.floor(Math.random() * 10000);
  let id = "id_7170_" + Math.floor(Math.random() * 10000);
  let scope = "scope_7170_" + Math.floor(Math.random() * 10000);
  attachEnterpriseCodeSecurityConfiguration(configuration_id, enterprise, id, scope);
});

// Story: crud:CodeSecurityConfigurationEnterpriseAttach:linear:3
bthread("crud:CodeSecurityConfigurationEnterpriseAttach:linear:3", function () {
  let configuration_id = "configuration_id_7180_" + Math.floor(Math.random() * 10000);
  let enterprise = "enterprise_7180_" + Math.floor(Math.random() * 10000);
  let id = "id_7180_" + Math.floor(Math.random() * 10000);
  let scope = "scope_7180_" + Math.floor(Math.random() * 10000);
  attachEnterpriseCodeSecurityConfiguration(configuration_id, enterprise, id, scope);
});

// Story: crud:CodeSecurityConfigurationOrg:linear:1
bthread("crud:CodeSecurityConfigurationOrg:linear:1", function () {
  let configuration_id = "configuration_id_7210_" + Math.floor(Math.random() * 10000);
  let description = "description_7210_" + Math.floor(Math.random() * 10000);
  let name = "name_7210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_7210_" + Math.floor(Math.random() * 10000);
  createOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  verifyCodeSecurityConfigurationOrgExists(configuration_id, description, name, org);
  updateOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  deleteOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  tryToDeleteANonExistingCodeSecurityConfigurationOrg(configuration_id, description, name, org);
  verifyCodeSecurityConfigurationOrgDoesNotExist(configuration_id, description, name, org);
});

// Story: crud:CodeSecurityConfigurationOrg:linear:2
bthread("crud:CodeSecurityConfigurationOrg:linear:2", function () {
  let configuration_id = "configuration_id_7220_" + Math.floor(Math.random() * 10000);
  let description = "description_7220_" + Math.floor(Math.random() * 10000);
  let name = "name_7220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_7220_" + Math.floor(Math.random() * 10000);
  createOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  verifyCodeSecurityConfigurationOrgExists(configuration_id, description, name, org);
  updateOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  deleteOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  tryToDeleteANonExistingCodeSecurityConfigurationOrg(configuration_id, description, name, org);
  verifyCodeSecurityConfigurationOrgDoesNotExist(configuration_id, description, name, org);
});

// Story: crud:CodeSecurityConfigurationOrg:linear:3
bthread("crud:CodeSecurityConfigurationOrg:linear:3", function () {
  let configuration_id = "configuration_id_7230_" + Math.floor(Math.random() * 10000);
  let description = "description_7230_" + Math.floor(Math.random() * 10000);
  let name = "name_7230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_7230_" + Math.floor(Math.random() * 10000);
  createOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  verifyCodeSecurityConfigurationOrgExists(configuration_id, description, name, org);
  updateOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  deleteOrgCodeSecurityConfiguration(configuration_id, description, name, org);
  tryToDeleteANonExistingCodeSecurityConfigurationOrg(configuration_id, description, name, org);
  verifyCodeSecurityConfigurationOrgDoesNotExist(configuration_id, description, name, org);
});

// Monitor: CodeSecurityConfigurationOrg Verification
bthread("monitor:CodeSecurityConfigurationOrg", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCodeSecurityConfigurationOrgAdded() });
    let configuration_id = (e.data.parameters && e.data.parameters["configuration_id"]) ? e.data.parameters["configuration_id"] : e.data["configuration_id"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCodeSecurityConfigurationOrg(configuration_id, description, name, org), function() {
      bp.log.info(`Monitor CodeSecurityConfigurationOrg: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCodeSecurityConfigurationOrgExists(configuration_id, description, name, org);
    });
  }
});

// Story: crud:Configuration:linear:1
bthread("crud:Configuration:linear:1", function () {
  let configuration_id = "configuration_id_7260_" + Math.floor(Math.random() * 10000);
  let default_for_new_repos = "default_for_new_repos_7260_" + Math.floor(Math.random() * 10000);
  let org = "org_7260_" + Math.floor(Math.random() * 10000);
  let pagination_after = "pagination-after_7260_" + Math.floor(Math.random() * 10000);
  let pagination_before = "pagination-before_7260_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_7260_" + Math.floor(Math.random() * 10000);
  let scope = "scope_7260_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_7260_" + Math.floor(Math.random() * 10000);
  let status = "status_7260_" + Math.floor(Math.random() * 10000);
  attachConfiguration(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status);
});

// Story: crud:Configuration:linear:2
bthread("crud:Configuration:linear:2", function () {
  let configuration_id = "configuration_id_7270_" + Math.floor(Math.random() * 10000);
  let default_for_new_repos = "default_for_new_repos_7270_" + Math.floor(Math.random() * 10000);
  let org = "org_7270_" + Math.floor(Math.random() * 10000);
  let pagination_after = "pagination-after_7270_" + Math.floor(Math.random() * 10000);
  let pagination_before = "pagination-before_7270_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_7270_" + Math.floor(Math.random() * 10000);
  let scope = "scope_7270_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_7270_" + Math.floor(Math.random() * 10000);
  let status = "status_7270_" + Math.floor(Math.random() * 10000);
  attachConfiguration(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status);
});

// Story: crud:Configuration:linear:3
bthread("crud:Configuration:linear:3", function () {
  let configuration_id = "configuration_id_7280_" + Math.floor(Math.random() * 10000);
  let default_for_new_repos = "default_for_new_repos_7280_" + Math.floor(Math.random() * 10000);
  let org = "org_7280_" + Math.floor(Math.random() * 10000);
  let pagination_after = "pagination-after_7280_" + Math.floor(Math.random() * 10000);
  let pagination_before = "pagination-before_7280_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_7280_" + Math.floor(Math.random() * 10000);
  let scope = "scope_7280_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_7280_" + Math.floor(Math.random() * 10000);
  let status = "status_7280_" + Math.floor(Math.random() * 10000);
  attachConfiguration(configuration_id, default_for_new_repos, org, pagination_after, pagination_before, per_page, scope, selected_repository_ids, status);
});

// Story: crud:DependabotSecret:linear:1
bthread("crud:DependabotSecret:linear:1", function () {
  let encrypted_value = "encrypted_value_7310_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_7310_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7310_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7310_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_7310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:DependabotSecret:linear:2
bthread("crud:DependabotSecret:linear:2", function () {
  let encrypted_value = "encrypted_value_7320_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_7320_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7320_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7320_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_7320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Story: crud:DependabotSecret:linear:3
bthread("crud:DependabotSecret:linear:3", function () {
  let encrypted_value = "encrypted_value_7330_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_7330_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7330_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7330_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_7330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createOrUpdateDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
  deleteDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  tryToDeleteANonExistingDependabotSecret(encrypted_value, key_id, owner, repo, secret_name);
  verifyDependabotSecretDoesNotExist(encrypted_value, key_id, owner, repo, secret_name);
});

// Monitor: DependabotSecret Verification
bthread("monitor:DependabotSecret", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDependabotSecretAdded() });
    let encrypted_value = (e.data.parameters && e.data.parameters["encrypted_value"]) ? e.data.parameters["encrypted_value"] : e.data["encrypted_value"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let secret_name = (e.data.parameters && e.data.parameters["secret_name"]) ? e.data.parameters["secret_name"] : e.data["secret_name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDependabotSecret(encrypted_value, key_id, owner, repo, secret_name), function() {
      bp.log.info(`Monitor DependabotSecret: Verifying persistence of ID ${id} inside deletion block.`);
        verifyDependabotSecretExists(encrypted_value, key_id, owner, repo, secret_name);
    });
  }
});

// Story: crud:ProjectItem:linear:1
bthread("crud:ProjectItem:linear:1", function () {
  let fields = "fields_7360_" + Math.floor(Math.random() * 10000);
  let id = "id_7360_" + Math.floor(Math.random() * 10000);
  let item_id = "item_id_7360_" + Math.floor(Math.random() * 10000);
  let project_number = "project_number_7360_" + Math.floor(Math.random() * 10000);
  let type = "type_7360_" + Math.floor(Math.random() * 10000);
  let username = "username_7360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addItemForUser(fields, id, item_id, project_number, type, username);
  verifyProjectItemExists(fields, id, item_id, project_number, type, username);
  updateItemForUser(fields, id, item_id, project_number, type, username);
  deleteItemForUser(fields, id, item_id, project_number, type, username);
  tryToDeleteANonExistingProjectItem(fields, id, item_id, project_number, type, username);
  verifyProjectItemDoesNotExist(fields, id, item_id, project_number, type, username);
});

// Story: crud:ProjectItem:linear:2
bthread("crud:ProjectItem:linear:2", function () {
  let fields = "fields_7370_" + Math.floor(Math.random() * 10000);
  let id = "id_7370_" + Math.floor(Math.random() * 10000);
  let item_id = "item_id_7370_" + Math.floor(Math.random() * 10000);
  let project_number = "project_number_7370_" + Math.floor(Math.random() * 10000);
  let type = "type_7370_" + Math.floor(Math.random() * 10000);
  let username = "username_7370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addItemForUser(fields, id, item_id, project_number, type, username);
  verifyProjectItemExists(fields, id, item_id, project_number, type, username);
  updateItemForUser(fields, id, item_id, project_number, type, username);
  deleteItemForUser(fields, id, item_id, project_number, type, username);
  tryToDeleteANonExistingProjectItem(fields, id, item_id, project_number, type, username);
  verifyProjectItemDoesNotExist(fields, id, item_id, project_number, type, username);
});

// Story: crud:ProjectItem:linear:3
bthread("crud:ProjectItem:linear:3", function () {
  let fields = "fields_7380_" + Math.floor(Math.random() * 10000);
  let id = "id_7380_" + Math.floor(Math.random() * 10000);
  let item_id = "item_id_7380_" + Math.floor(Math.random() * 10000);
  let project_number = "project_number_7380_" + Math.floor(Math.random() * 10000);
  let type = "type_7380_" + Math.floor(Math.random() * 10000);
  let username = "username_7380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addItemForUser(fields, id, item_id, project_number, type, username);
  verifyProjectItemExists(fields, id, item_id, project_number, type, username);
  updateItemForUser(fields, id, item_id, project_number, type, username);
  deleteItemForUser(fields, id, item_id, project_number, type, username);
  tryToDeleteANonExistingProjectItem(fields, id, item_id, project_number, type, username);
  verifyProjectItemDoesNotExist(fields, id, item_id, project_number, type, username);
});

// Monitor: ProjectItem Verification
bthread("monitor:ProjectItem", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyProjectItemAdded() });
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let item_id = (e.data.parameters && e.data.parameters["item_id"]) ? e.data.parameters["item_id"] : e.data["item_id"];
    let project_number = (e.data.parameters && e.data.parameters["project_number"]) ? e.data.parameters["project_number"] : e.data["project_number"];
    let type = (e.data.parameters && e.data.parameters["type"]) ? e.data.parameters["type"] : e.data["type"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedProjectItem(fields, id, item_id, project_number, type, username), function() {
      bp.log.info(`Monitor ProjectItem: Verifying persistence of ID ${id} inside deletion block.`);
        verifyProjectItemExists(fields, id, item_id, project_number, type, username);
    });
  }
});

// Story: crud:Blob:linear:1
bthread("crud:Blob:linear:1", function () {
  let content = "content_7410_" + Math.floor(Math.random() * 10000);
  let encoding = "encoding_7410_" + Math.floor(Math.random() * 10000);
  let file_sha = "file_sha_7410_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7410_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7410_" + Math.floor(Math.random() * 10000);
  createBlob(content, encoding, file_sha, owner, repo);
});

// Story: crud:Blob:linear:2
bthread("crud:Blob:linear:2", function () {
  let content = "content_7420_" + Math.floor(Math.random() * 10000);
  let encoding = "encoding_7420_" + Math.floor(Math.random() * 10000);
  let file_sha = "file_sha_7420_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7420_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7420_" + Math.floor(Math.random() * 10000);
  createBlob(content, encoding, file_sha, owner, repo);
});

// Story: crud:Blob:linear:3
bthread("crud:Blob:linear:3", function () {
  let content = "content_7430_" + Math.floor(Math.random() * 10000);
  let encoding = "encoding_7430_" + Math.floor(Math.random() * 10000);
  let file_sha = "file_sha_7430_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7430_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7430_" + Math.floor(Math.random() * 10000);
  createBlob(content, encoding, file_sha, owner, repo);
});

// Story: crud:Reference:linear:1
bthread("crud:Reference:linear:1", function () {
  let force = "force_7460_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7460_" + Math.floor(Math.random() * 10000);
  let ref = "ref_7460_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7460_" + Math.floor(Math.random() * 10000);
  let sha = "sha_7460_" + Math.floor(Math.random() * 10000);
  createRef(force, owner, ref, repo, sha);
  verifyReferenceExists(force, owner, ref, repo, sha);
  updateRef(force, owner, ref, repo, sha);
  deleteRef(force, owner, ref, repo, sha);
  tryToDeleteANonExistingReference(force, owner, ref, repo, sha);
  verifyReferenceDoesNotExist(force, owner, ref, repo, sha);
});

// Story: crud:Reference:linear:2
bthread("crud:Reference:linear:2", function () {
  let force = "force_7470_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7470_" + Math.floor(Math.random() * 10000);
  let ref = "ref_7470_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7470_" + Math.floor(Math.random() * 10000);
  let sha = "sha_7470_" + Math.floor(Math.random() * 10000);
  createRef(force, owner, ref, repo, sha);
  verifyReferenceExists(force, owner, ref, repo, sha);
  updateRef(force, owner, ref, repo, sha);
  deleteRef(force, owner, ref, repo, sha);
  tryToDeleteANonExistingReference(force, owner, ref, repo, sha);
  verifyReferenceDoesNotExist(force, owner, ref, repo, sha);
});

// Story: crud:Reference:linear:3
bthread("crud:Reference:linear:3", function () {
  let force = "force_7480_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7480_" + Math.floor(Math.random() * 10000);
  let ref = "ref_7480_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7480_" + Math.floor(Math.random() * 10000);
  let sha = "sha_7480_" + Math.floor(Math.random() * 10000);
  createRef(force, owner, ref, repo, sha);
  verifyReferenceExists(force, owner, ref, repo, sha);
  updateRef(force, owner, ref, repo, sha);
  deleteRef(force, owner, ref, repo, sha);
  tryToDeleteANonExistingReference(force, owner, ref, repo, sha);
  verifyReferenceDoesNotExist(force, owner, ref, repo, sha);
});

// Monitor: Reference Verification
bthread("monitor:Reference", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReferenceAdded() });
    let force = (e.data.parameters && e.data.parameters["force"]) ? e.data.parameters["force"] : e.data["force"];
    let owner = (e.data.parameters && e.data.parameters["owner"]) ? e.data.parameters["owner"] : e.data["owner"];
    let ref = (e.data.parameters && e.data.parameters["ref"]) ? e.data.parameters["ref"] : e.data["ref"];
    let repo = (e.data.parameters && e.data.parameters["repo"]) ? e.data.parameters["repo"] : e.data["repo"];
    let sha = (e.data.parameters && e.data.parameters["sha"]) ? e.data.parameters["sha"] : e.data["sha"];
    // Block Deletion while Verifying Existence
    block(matchDeletedReference(force, owner, ref, repo, sha), function() {
      bp.log.info(`Monitor Reference: Verifying persistence of ID ${id} inside deletion block.`);
        verifyReferenceExists(force, owner, ref, repo, sha);
    });
  }
});

// Story: crud:Tag:linear:1
bthread("crud:Tag:linear:1", function () {
  let message = "message_7510_" + Math.floor(Math.random() * 10000);
  let object = "object_7510_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7510_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7510_" + Math.floor(Math.random() * 10000);
  let tag = "tag_7510_" + Math.floor(Math.random() * 10000);
  let tag_sha = "tag_sha_7510_" + Math.floor(Math.random() * 10000);
  let tagger_date = "tagger.date_7510_" + Math.floor(Math.random() * 10000);
  let tagger_email = "tagger.email_7510_" + Math.floor(Math.random() * 10000);
  let tagger_name = "tagger.name_7510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let type = "type_7510_" + Math.floor(Math.random() * 10000);
  createTag(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type);
});

// Story: crud:Tag:linear:2
bthread("crud:Tag:linear:2", function () {
  let message = "message_7520_" + Math.floor(Math.random() * 10000);
  let object = "object_7520_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7520_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7520_" + Math.floor(Math.random() * 10000);
  let tag = "tag_7520_" + Math.floor(Math.random() * 10000);
  let tag_sha = "tag_sha_7520_" + Math.floor(Math.random() * 10000);
  let tagger_date = "tagger.date_7520_" + Math.floor(Math.random() * 10000);
  let tagger_email = "tagger.email_7520_" + Math.floor(Math.random() * 10000);
  let tagger_name = "tagger.name_7520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let type = "type_7520_" + Math.floor(Math.random() * 10000);
  createTag(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type);
});

// Story: crud:Tag:linear:3
bthread("crud:Tag:linear:3", function () {
  let message = "message_7530_" + Math.floor(Math.random() * 10000);
  let object = "object_7530_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7530_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7530_" + Math.floor(Math.random() * 10000);
  let tag = "tag_7530_" + Math.floor(Math.random() * 10000);
  let tag_sha = "tag_sha_7530_" + Math.floor(Math.random() * 10000);
  let tagger_date = "tagger.date_7530_" + Math.floor(Math.random() * 10000);
  let tagger_email = "tagger.email_7530_" + Math.floor(Math.random() * 10000);
  let tagger_name = "tagger.name_7530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let type = "type_7530_" + Math.floor(Math.random() * 10000);
  createTag(message, object, owner, repo, tag, tag_sha, tagger_date, tagger_email, tagger_name, type);
});

// Story: crud:Tree:linear:1
bthread("crud:Tree:linear:1", function () {
  let base_tree = "base_tree_7560_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7560_" + Math.floor(Math.random() * 10000);
  let recursive = "recursive_7560_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7560_" + Math.floor(Math.random() * 10000);
  let tree = "tree_7560_" + Math.floor(Math.random() * 10000);
  let tree_sha = "tree_sha_7560_" + Math.floor(Math.random() * 10000);
  createTree(base_tree, owner, recursive, repo, tree, tree_sha);
});

// Story: crud:Tree:linear:2
bthread("crud:Tree:linear:2", function () {
  let base_tree = "base_tree_7570_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7570_" + Math.floor(Math.random() * 10000);
  let recursive = "recursive_7570_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7570_" + Math.floor(Math.random() * 10000);
  let tree = "tree_7570_" + Math.floor(Math.random() * 10000);
  let tree_sha = "tree_sha_7570_" + Math.floor(Math.random() * 10000);
  createTree(base_tree, owner, recursive, repo, tree, tree_sha);
});

// Story: crud:Tree:linear:3
bthread("crud:Tree:linear:3", function () {
  let base_tree = "base_tree_7580_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7580_" + Math.floor(Math.random() * 10000);
  let recursive = "recursive_7580_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7580_" + Math.floor(Math.random() * 10000);
  let tree = "tree_7580_" + Math.floor(Math.random() * 10000);
  let tree_sha = "tree_sha_7580_" + Math.floor(Math.random() * 10000);
  createTree(base_tree, owner, recursive, repo, tree, tree_sha);
});

// Story: crud:Gist:linear:1
bthread("crud:Gist:linear:1", function () {
  let description = "description_7610_" + Math.floor(Math.random() * 10000);
  let files = "files_7610_" + Math.floor(Math.random() * 10000);
  let gist_id = "gist_id_7610_" + Math.floor(Math.random() * 10000);
  let _public = "public_7610_" + Math.floor(Math.random() * 10000);
  let username = "username_7610_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createGist(description, files, gist_id, _public, username);
  verifyGistExists(description, files, gist_id, _public, username);
  updateGist(description, files, gist_id, _public, username);
  deleteGist(description, files, gist_id, _public, username);
  tryToDeleteANonExistingGist(description, files, gist_id, _public, username);
  verifyGistDoesNotExist(description, files, gist_id, _public, username);
});

// Story: crud:Gist:linear:2
bthread("crud:Gist:linear:2", function () {
  let description = "description_7620_" + Math.floor(Math.random() * 10000);
  let files = "files_7620_" + Math.floor(Math.random() * 10000);
  let gist_id = "gist_id_7620_" + Math.floor(Math.random() * 10000);
  let _public = "public_7620_" + Math.floor(Math.random() * 10000);
  let username = "username_7620_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createGist(description, files, gist_id, _public, username);
  verifyGistExists(description, files, gist_id, _public, username);
  updateGist(description, files, gist_id, _public, username);
  deleteGist(description, files, gist_id, _public, username);
  tryToDeleteANonExistingGist(description, files, gist_id, _public, username);
  verifyGistDoesNotExist(description, files, gist_id, _public, username);
});

// Story: crud:Gist:linear:3
bthread("crud:Gist:linear:3", function () {
  let description = "description_7630_" + Math.floor(Math.random() * 10000);
  let files = "files_7630_" + Math.floor(Math.random() * 10000);
  let gist_id = "gist_id_7630_" + Math.floor(Math.random() * 10000);
  let _public = "public_7630_" + Math.floor(Math.random() * 10000);
  let username = "username_7630_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createGist(description, files, gist_id, _public, username);
  verifyGistExists(description, files, gist_id, _public, username);
  updateGist(description, files, gist_id, _public, username);
  deleteGist(description, files, gist_id, _public, username);
  tryToDeleteANonExistingGist(description, files, gist_id, _public, username);
  verifyGistDoesNotExist(description, files, gist_id, _public, username);
});

// Monitor: Gist Verification
bthread("monitor:Gist", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGistAdded() });
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let files = (e.data.parameters && e.data.parameters["files"]) ? e.data.parameters["files"] : e.data["files"];
    let gist_id = (e.data.parameters && e.data.parameters["gist_id"]) ? e.data.parameters["gist_id"] : e.data["gist_id"];
    let _public = (e.data.parameters && e.data.parameters["public"]) ? e.data.parameters["public"] : e.data["public"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedGist(description, files, gist_id, _public, username), function() {
      bp.log.info(`Monitor Gist: Verifying persistence of ID ${id} inside deletion block.`);
        verifyGistExists(description, files, gist_id, _public, username);
    });
  }
});

// Story: crud:GistComment:linear:1
bthread("crud:GistComment:linear:1", function () {
  let body = "body_7660_" + Math.floor(Math.random() * 10000);
  let comment_id = "comment_id_7660_" + Math.floor(Math.random() * 10000);
  let gist_id = "gist_id_7660_" + Math.floor(Math.random() * 10000);
  createGistComment(body, comment_id, gist_id);
  verifyGistCommentExists(body, comment_id, gist_id);
  updateGistComment(body, comment_id, gist_id);
  deleteGistComment(body, comment_id, gist_id);
  tryToDeleteANonExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentDoesNotExist(body, comment_id, gist_id);
});

// Story: crud:GistComment:linear:2
bthread("crud:GistComment:linear:2", function () {
  let body = "body_7670_" + Math.floor(Math.random() * 10000);
  let comment_id = "comment_id_7670_" + Math.floor(Math.random() * 10000);
  let gist_id = "gist_id_7670_" + Math.floor(Math.random() * 10000);
  createGistComment(body, comment_id, gist_id);
  verifyGistCommentExists(body, comment_id, gist_id);
  updateGistComment(body, comment_id, gist_id);
  deleteGistComment(body, comment_id, gist_id);
  tryToDeleteANonExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentDoesNotExist(body, comment_id, gist_id);
});

// Story: crud:GistComment:linear:3
bthread("crud:GistComment:linear:3", function () {
  let body = "body_7680_" + Math.floor(Math.random() * 10000);
  let comment_id = "comment_id_7680_" + Math.floor(Math.random() * 10000);
  let gist_id = "gist_id_7680_" + Math.floor(Math.random() * 10000);
  createGistComment(body, comment_id, gist_id);
  verifyGistCommentExists(body, comment_id, gist_id);
  updateGistComment(body, comment_id, gist_id);
  deleteGistComment(body, comment_id, gist_id);
  tryToDeleteANonExistingGistComment(body, comment_id, gist_id);
  verifyGistCommentDoesNotExist(body, comment_id, gist_id);
});

// Monitor: GistComment Verification
bthread("monitor:GistComment", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGistCommentAdded() });
    let body = (e.data.parameters && e.data.parameters["body"]) ? e.data.parameters["body"] : e.data["body"];
    let comment_id = (e.data.parameters && e.data.parameters["comment_id"]) ? e.data.parameters["comment_id"] : e.data["comment_id"];
    let gist_id = (e.data.parameters && e.data.parameters["gist_id"]) ? e.data.parameters["gist_id"] : e.data["gist_id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedGistComment(body, comment_id, gist_id), function() {
      bp.log.info(`Monitor GistComment: Verifying persistence of ID ${id} inside deletion block.`);
        verifyGistCommentExists(body, comment_id, gist_id);
    });
  }
});

// Story: crud:OrganizationProject:linear:1
bthread("crud:OrganizationProject:linear:1", function () {
  let name = "name_7710_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_7710_" + Math.floor(Math.random() * 10000);
  createOrganizationProject(name, org);
});

// Story: crud:OrganizationProject:linear:2
bthread("crud:OrganizationProject:linear:2", function () {
  let name = "name_7720_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_7720_" + Math.floor(Math.random() * 10000);
  createOrganizationProject(name, org);
});

// Story: crud:OrganizationProject:linear:3
bthread("crud:OrganizationProject:linear:3", function () {
  let name = "name_7730_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let org = "org_7730_" + Math.floor(Math.random() * 10000);
  createOrganizationProject(name, org);
});

// Story: crud:ProjectCollaborator:linear:1
bthread("crud:ProjectCollaborator:linear:1", function () {
  let permission = "permission_7760_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_7760_" + Math.floor(Math.random() * 10000);
  let username = "username_7760_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addProjectCollaborator(permission, project_id, username);
});

// Story: crud:ProjectCollaborator:linear:2
bthread("crud:ProjectCollaborator:linear:2", function () {
  let permission = "permission_7770_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_7770_" + Math.floor(Math.random() * 10000);
  let username = "username_7770_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addProjectCollaborator(permission, project_id, username);
});

// Story: crud:ProjectCollaborator:linear:3
bthread("crud:ProjectCollaborator:linear:3", function () {
  let permission = "permission_7780_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_7780_" + Math.floor(Math.random() * 10000);
  let username = "username_7780_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addProjectCollaborator(permission, project_id, username);
});

// Story: crud:ProjectColumnsList:linear:1
bthread("crud:ProjectColumnsList:linear:1", function () {
  let id = "id_7810_" + Math.floor(Math.random() * 10000);
  let name = "name_7810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_7810_" + Math.floor(Math.random() * 10000);
  createProjectColumn(id, name, project_id);
});

// Story: crud:ProjectColumnsList:linear:2
bthread("crud:ProjectColumnsList:linear:2", function () {
  let id = "id_7820_" + Math.floor(Math.random() * 10000);
  let name = "name_7820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_7820_" + Math.floor(Math.random() * 10000);
  createProjectColumn(id, name, project_id);
});

// Story: crud:ProjectColumnsList:linear:3
bthread("crud:ProjectColumnsList:linear:3", function () {
  let id = "id_7830_" + Math.floor(Math.random() * 10000);
  let name = "name_7830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let project_id = "project_id_7830_" + Math.floor(Math.random() * 10000);
  createProjectColumn(id, name, project_id);
});

// Story: crud:RepositoryProject:linear:1
bthread("crud:RepositoryProject:linear:1", function () {
  let name = "name_7860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7860_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7860_" + Math.floor(Math.random() * 10000);
  createRepositoryProject(name, owner, repo);
});

// Story: crud:RepositoryProject:linear:2
bthread("crud:RepositoryProject:linear:2", function () {
  let name = "name_7870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7870_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7870_" + Math.floor(Math.random() * 10000);
  createRepositoryProject(name, owner, repo);
});

// Story: crud:RepositoryProject:linear:3
bthread("crud:RepositoryProject:linear:3", function () {
  let name = "name_7880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7880_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7880_" + Math.floor(Math.random() * 10000);
  createRepositoryProject(name, owner, repo);
});

// Story: crud:UserProject:linear:1
bthread("crud:UserProject:linear:1", function () {
  let id = "id_7910_" + Math.floor(Math.random() * 10000);
  let name = "name_7910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createUserProject(id, name);
});

// Story: crud:UserProject:linear:2
bthread("crud:UserProject:linear:2", function () {
  let id = "id_7920_" + Math.floor(Math.random() * 10000);
  let name = "name_7920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createUserProject(id, name);
});

// Story: crud:UserProject:linear:3
bthread("crud:UserProject:linear:3", function () {
  let id = "id_7930_" + Math.floor(Math.random() * 10000);
  let name = "name_7930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createUserProject(id, name);
});

// Story: crud:CheckRun:linear:1
bthread("crud:CheckRun:linear:1", function () {
  let check_run_id = "check_run_id_7960_" + Math.floor(Math.random() * 10000);
  let head_sha = "head_sha_7960_" + Math.floor(Math.random() * 10000);
  let name = "name_7960_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7960_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7960_" + Math.floor(Math.random() * 10000);
  createCheckRun(check_run_id, head_sha, name, owner, repo);
});

// Story: crud:CheckRun:linear:2
bthread("crud:CheckRun:linear:2", function () {
  let check_run_id = "check_run_id_7970_" + Math.floor(Math.random() * 10000);
  let head_sha = "head_sha_7970_" + Math.floor(Math.random() * 10000);
  let name = "name_7970_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7970_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7970_" + Math.floor(Math.random() * 10000);
  createCheckRun(check_run_id, head_sha, name, owner, repo);
});

// Story: crud:CheckRun:linear:3
bthread("crud:CheckRun:linear:3", function () {
  let check_run_id = "check_run_id_7980_" + Math.floor(Math.random() * 10000);
  let head_sha = "head_sha_7980_" + Math.floor(Math.random() * 10000);
  let name = "name_7980_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let owner = "owner_7980_" + Math.floor(Math.random() * 10000);
  let repo = "repo_7980_" + Math.floor(Math.random() * 10000);
  createCheckRun(check_run_id, head_sha, name, owner, repo);
});

// Story: crud:CheckRunRerequest:linear:1
bthread("crud:CheckRunRerequest:linear:1", function () {
  let check_run_id = "check_run_id_8010_" + Math.floor(Math.random() * 10000);
  let id = "id_8010_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8010_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8010_" + Math.floor(Math.random() * 10000);
  rerequestCheckRun(check_run_id, id, owner, repo);
});

// Story: crud:CheckRunRerequest:linear:2
bthread("crud:CheckRunRerequest:linear:2", function () {
  let check_run_id = "check_run_id_8020_" + Math.floor(Math.random() * 10000);
  let id = "id_8020_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8020_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8020_" + Math.floor(Math.random() * 10000);
  rerequestCheckRun(check_run_id, id, owner, repo);
});

// Story: crud:CheckRunRerequest:linear:3
bthread("crud:CheckRunRerequest:linear:3", function () {
  let check_run_id = "check_run_id_8030_" + Math.floor(Math.random() * 10000);
  let id = "id_8030_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8030_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8030_" + Math.floor(Math.random() * 10000);
  rerequestCheckRun(check_run_id, id, owner, repo);
});

// Story: crud:CheckSuite:linear:1
bthread("crud:CheckSuite:linear:1", function () {
  let app_id = "app_id_8060_" + Math.floor(Math.random() * 10000);
  let check_name = "check_name_8060_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let check_suite_id = "check_suite_id_8060_" + Math.floor(Math.random() * 10000);
  let head_sha = "head_sha_8060_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8060_" + Math.floor(Math.random() * 10000);
  let page = "page_8060_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_8060_" + Math.floor(Math.random() * 10000);
  let ref = "ref_8060_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8060_" + Math.floor(Math.random() * 10000);
  createCheckSuite(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo);
});

// Story: crud:CheckSuite:linear:2
bthread("crud:CheckSuite:linear:2", function () {
  let app_id = "app_id_8070_" + Math.floor(Math.random() * 10000);
  let check_name = "check_name_8070_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let check_suite_id = "check_suite_id_8070_" + Math.floor(Math.random() * 10000);
  let head_sha = "head_sha_8070_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8070_" + Math.floor(Math.random() * 10000);
  let page = "page_8070_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_8070_" + Math.floor(Math.random() * 10000);
  let ref = "ref_8070_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8070_" + Math.floor(Math.random() * 10000);
  createCheckSuite(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo);
});

// Story: crud:CheckSuite:linear:3
bthread("crud:CheckSuite:linear:3", function () {
  let app_id = "app_id_8080_" + Math.floor(Math.random() * 10000);
  let check_name = "check_name_8080_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let check_suite_id = "check_suite_id_8080_" + Math.floor(Math.random() * 10000);
  let head_sha = "head_sha_8080_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8080_" + Math.floor(Math.random() * 10000);
  let page = "page_8080_" + Math.floor(Math.random() * 10000);
  let per_page = "per_page_8080_" + Math.floor(Math.random() * 10000);
  let ref = "ref_8080_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8080_" + Math.floor(Math.random() * 10000);
  createCheckSuite(app_id, check_name, check_suite_id, head_sha, owner, page, per_page, ref, repo);
});

// Story: crud:RepositorySecurityAdvisory:linear:1
bthread("crud:RepositorySecurityAdvisory:linear:1", function () {
  let credits = "credits_8110_" + Math.floor(Math.random() * 10000);
  let cve_id = "cve_id_8110_" + Math.floor(Math.random() * 10000);
  let cvss_vector_string = "cvss_vector_string_8110_" + Math.floor(Math.random() * 10000);
  let cwe_ids = "cwe_ids_8110_" + Math.floor(Math.random() * 10000);
  let description = "description_8110_" + Math.floor(Math.random() * 10000);
  let ghsa_id = "ghsa_id_8110_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8110_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8110_" + Math.floor(Math.random() * 10000);
  let severity = "severity_8110_" + Math.floor(Math.random() * 10000);
  let state = "state_8110_" + Math.floor(Math.random() * 10000);
  let summary = "summary_8110_" + Math.floor(Math.random() * 10000);
  let vulnerabilities = "vulnerabilities_8110_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisory(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities);
});

// Story: crud:RepositorySecurityAdvisory:linear:2
bthread("crud:RepositorySecurityAdvisory:linear:2", function () {
  let credits = "credits_8120_" + Math.floor(Math.random() * 10000);
  let cve_id = "cve_id_8120_" + Math.floor(Math.random() * 10000);
  let cvss_vector_string = "cvss_vector_string_8120_" + Math.floor(Math.random() * 10000);
  let cwe_ids = "cwe_ids_8120_" + Math.floor(Math.random() * 10000);
  let description = "description_8120_" + Math.floor(Math.random() * 10000);
  let ghsa_id = "ghsa_id_8120_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8120_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8120_" + Math.floor(Math.random() * 10000);
  let severity = "severity_8120_" + Math.floor(Math.random() * 10000);
  let state = "state_8120_" + Math.floor(Math.random() * 10000);
  let summary = "summary_8120_" + Math.floor(Math.random() * 10000);
  let vulnerabilities = "vulnerabilities_8120_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisory(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities);
});

// Story: crud:RepositorySecurityAdvisory:linear:3
bthread("crud:RepositorySecurityAdvisory:linear:3", function () {
  let credits = "credits_8130_" + Math.floor(Math.random() * 10000);
  let cve_id = "cve_id_8130_" + Math.floor(Math.random() * 10000);
  let cvss_vector_string = "cvss_vector_string_8130_" + Math.floor(Math.random() * 10000);
  let cwe_ids = "cwe_ids_8130_" + Math.floor(Math.random() * 10000);
  let description = "description_8130_" + Math.floor(Math.random() * 10000);
  let ghsa_id = "ghsa_id_8130_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8130_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8130_" + Math.floor(Math.random() * 10000);
  let severity = "severity_8130_" + Math.floor(Math.random() * 10000);
  let state = "state_8130_" + Math.floor(Math.random() * 10000);
  let summary = "summary_8130_" + Math.floor(Math.random() * 10000);
  let vulnerabilities = "vulnerabilities_8130_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisory(credits, cve_id, cvss_vector_string, cwe_ids, description, ghsa_id, owner, repo, severity, state, summary, vulnerabilities);
});

// Story: crud:PrivateVulnerabilityReport:linear:1
bthread("crud:PrivateVulnerabilityReport:linear:1", function () {
  let cwe_ids = "cwe_ids_8160_" + Math.floor(Math.random() * 10000);
  let description = "description_8160_" + Math.floor(Math.random() * 10000);
  let id = "id_8160_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8160_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8160_" + Math.floor(Math.random() * 10000);
  let severity = "severity_8160_" + Math.floor(Math.random() * 10000);
  let summary = "summary_8160_" + Math.floor(Math.random() * 10000);
  let vulnerabilities = "vulnerabilities_8160_" + Math.floor(Math.random() * 10000);
  createPrivateVulnerabilityReport(cwe_ids, description, id, owner, repo, severity, summary, vulnerabilities);
});

// Story: crud:PrivateVulnerabilityReport:linear:2
bthread("crud:PrivateVulnerabilityReport:linear:2", function () {
  let cwe_ids = "cwe_ids_8170_" + Math.floor(Math.random() * 10000);
  let description = "description_8170_" + Math.floor(Math.random() * 10000);
  let id = "id_8170_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8170_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8170_" + Math.floor(Math.random() * 10000);
  let severity = "severity_8170_" + Math.floor(Math.random() * 10000);
  let summary = "summary_8170_" + Math.floor(Math.random() * 10000);
  let vulnerabilities = "vulnerabilities_8170_" + Math.floor(Math.random() * 10000);
  createPrivateVulnerabilityReport(cwe_ids, description, id, owner, repo, severity, summary, vulnerabilities);
});

// Story: crud:PrivateVulnerabilityReport:linear:3
bthread("crud:PrivateVulnerabilityReport:linear:3", function () {
  let cwe_ids = "cwe_ids_8180_" + Math.floor(Math.random() * 10000);
  let description = "description_8180_" + Math.floor(Math.random() * 10000);
  let id = "id_8180_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8180_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8180_" + Math.floor(Math.random() * 10000);
  let severity = "severity_8180_" + Math.floor(Math.random() * 10000);
  let summary = "summary_8180_" + Math.floor(Math.random() * 10000);
  let vulnerabilities = "vulnerabilities_8180_" + Math.floor(Math.random() * 10000);
  createPrivateVulnerabilityReport(cwe_ids, description, id, owner, repo, severity, summary, vulnerabilities);
});

// Story: crud:RepositorySecurityAdvisoryCVERequest:linear:1
bthread("crud:RepositorySecurityAdvisoryCVERequest:linear:1", function () {
  let ghsa_id = "ghsa_id_8210_" + Math.floor(Math.random() * 10000);
  let id = "id_8210_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8210_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8210_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisoryCVERequest(ghsa_id, id, owner, repo);
});

// Story: crud:RepositorySecurityAdvisoryCVERequest:linear:2
bthread("crud:RepositorySecurityAdvisoryCVERequest:linear:2", function () {
  let ghsa_id = "ghsa_id_8220_" + Math.floor(Math.random() * 10000);
  let id = "id_8220_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8220_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8220_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisoryCVERequest(ghsa_id, id, owner, repo);
});

// Story: crud:RepositorySecurityAdvisoryCVERequest:linear:3
bthread("crud:RepositorySecurityAdvisoryCVERequest:linear:3", function () {
  let ghsa_id = "ghsa_id_8230_" + Math.floor(Math.random() * 10000);
  let id = "id_8230_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8230_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8230_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisoryCVERequest(ghsa_id, id, owner, repo);
});

// Story: crud:RepositorySecurityAdvisoryFork:linear:1
bthread("crud:RepositorySecurityAdvisoryFork:linear:1", function () {
  let ghsa_id = "ghsa_id_8260_" + Math.floor(Math.random() * 10000);
  let id = "id_8260_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8260_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8260_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisoryFork(ghsa_id, id, owner, repo);
});

// Story: crud:RepositorySecurityAdvisoryFork:linear:2
bthread("crud:RepositorySecurityAdvisoryFork:linear:2", function () {
  let ghsa_id = "ghsa_id_8270_" + Math.floor(Math.random() * 10000);
  let id = "id_8270_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8270_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8270_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisoryFork(ghsa_id, id, owner, repo);
});

// Story: crud:RepositorySecurityAdvisoryFork:linear:3
bthread("crud:RepositorySecurityAdvisoryFork:linear:3", function () {
  let ghsa_id = "ghsa_id_8280_" + Math.floor(Math.random() * 10000);
  let id = "id_8280_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8280_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8280_" + Math.floor(Math.random() * 10000);
  createRepositorySecurityAdvisoryFork(ghsa_id, id, owner, repo);
});

// Story: crud:PushProtectionBypass:linear:1
bthread("crud:PushProtectionBypass:linear:1", function () {
  let id = "id_8310_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8310_" + Math.floor(Math.random() * 10000);
  let placeholder_id = "placeholder_id_8310_" + Math.floor(Math.random() * 10000);
  let reason = "reason_8310_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8310_" + Math.floor(Math.random() * 10000);
  createPushProtectionBypass(id, owner, placeholder_id, reason, repo);
});

// Story: crud:PushProtectionBypass:linear:2
bthread("crud:PushProtectionBypass:linear:2", function () {
  let id = "id_8320_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8320_" + Math.floor(Math.random() * 10000);
  let placeholder_id = "placeholder_id_8320_" + Math.floor(Math.random() * 10000);
  let reason = "reason_8320_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8320_" + Math.floor(Math.random() * 10000);
  createPushProtectionBypass(id, owner, placeholder_id, reason, repo);
});

// Story: crud:PushProtectionBypass:linear:3
bthread("crud:PushProtectionBypass:linear:3", function () {
  let id = "id_8330_" + Math.floor(Math.random() * 10000);
  let owner = "owner_8330_" + Math.floor(Math.random() * 10000);
  let placeholder_id = "placeholder_id_8330_" + Math.floor(Math.random() * 10000);
  let reason = "reason_8330_" + Math.floor(Math.random() * 10000);
  let repo = "repo_8330_" + Math.floor(Math.random() * 10000);
  createPushProtectionBypass(id, owner, placeholder_id, reason, repo);
});

// Story: crud:CopilotTeams:linear:1
bthread("crud:CopilotTeams:linear:1", function () {
  let org = "org_8360_" + Math.floor(Math.random() * 10000);
  let selected_teams = "selected_teams_8360_" + Math.floor(Math.random() * 10000);
  addCopilotTeams(org, selected_teams);
});

// Story: crud:CopilotTeams:linear:2
bthread("crud:CopilotTeams:linear:2", function () {
  let org = "org_8370_" + Math.floor(Math.random() * 10000);
  let selected_teams = "selected_teams_8370_" + Math.floor(Math.random() * 10000);
  addCopilotTeams(org, selected_teams);
});

// Story: crud:CopilotTeams:linear:3
bthread("crud:CopilotTeams:linear:3", function () {
  let org = "org_8380_" + Math.floor(Math.random() * 10000);
  let selected_teams = "selected_teams_8380_" + Math.floor(Math.random() * 10000);
  addCopilotTeams(org, selected_teams);
});

// Story: crud:CopilotUsers:linear:1
bthread("crud:CopilotUsers:linear:1", function () {
  let org = "org_8410_" + Math.floor(Math.random() * 10000);
  let selected_usernames = "selected_usernames_8410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCopilotUsers(org, selected_usernames);
});

// Story: crud:CopilotUsers:linear:2
bthread("crud:CopilotUsers:linear:2", function () {
  let org = "org_8420_" + Math.floor(Math.random() * 10000);
  let selected_usernames = "selected_usernames_8420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCopilotUsers(org, selected_usernames);
});

// Story: crud:CopilotUsers:linear:3
bthread("crud:CopilotUsers:linear:3", function () {
  let org = "org_8430_" + Math.floor(Math.random() * 10000);
  let selected_usernames = "selected_usernames_8430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCopilotUsers(org, selected_usernames);
});

// Story: crud:PrivateRegistry:linear:1
bthread("crud:PrivateRegistry:linear:1", function () {
  let encrypted_value = "encrypted_value_8460_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_8460_" + Math.floor(Math.random() * 10000);
  let org = "org_8460_" + Math.floor(Math.random() * 10000);
  let page = "page_8460_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_8460_" + Math.floor(Math.random() * 10000);
  let registry_type = "registry_type_8460_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_8460_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_8460_" + Math.floor(Math.random() * 10000);
  let url = "url_8460_" + Math.floor(Math.random() * 10000);
  let username = "username_8460_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_8460_" + Math.floor(Math.random() * 10000);
  createOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  updateOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  deleteOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToDeleteANonExistingPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryDoesNotExist(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
});

// Story: crud:PrivateRegistry:linear:2
bthread("crud:PrivateRegistry:linear:2", function () {
  let encrypted_value = "encrypted_value_8470_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_8470_" + Math.floor(Math.random() * 10000);
  let org = "org_8470_" + Math.floor(Math.random() * 10000);
  let page = "page_8470_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_8470_" + Math.floor(Math.random() * 10000);
  let registry_type = "registry_type_8470_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_8470_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_8470_" + Math.floor(Math.random() * 10000);
  let url = "url_8470_" + Math.floor(Math.random() * 10000);
  let username = "username_8470_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_8470_" + Math.floor(Math.random() * 10000);
  createOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  updateOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  deleteOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToDeleteANonExistingPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryDoesNotExist(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
});

// Story: crud:PrivateRegistry:linear:3
bthread("crud:PrivateRegistry:linear:3", function () {
  let encrypted_value = "encrypted_value_8480_" + Math.floor(Math.random() * 10000);
  let key_id = "key_id_8480_" + Math.floor(Math.random() * 10000);
  let org = "org_8480_" + Math.floor(Math.random() * 10000);
  let page = "page_8480_" + Math.floor(Math.random() * 10000);
  let per_page = "per-page_8480_" + Math.floor(Math.random() * 10000);
  let registry_type = "registry_type_8480_" + Math.floor(Math.random() * 10000);
  let secret_name = "secret_name_8480_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let selected_repository_ids = "selected_repository_ids_8480_" + Math.floor(Math.random() * 10000);
  let url = "url_8480_" + Math.floor(Math.random() * 10000);
  let username = "username_8480_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let visibility = "visibility_8480_" + Math.floor(Math.random() * 10000);
  createOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  updateOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  deleteOrgPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  tryToDeleteANonExistingPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
  verifyPrivateRegistryDoesNotExist(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
});

// Monitor: PrivateRegistry Verification
bthread("monitor:PrivateRegistry", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPrivateRegistryAdded() });
    let encrypted_value = (e.data.parameters && e.data.parameters["encrypted_value"]) ? e.data.parameters["encrypted_value"] : e.data["encrypted_value"];
    let key_id = (e.data.parameters && e.data.parameters["key_id"]) ? e.data.parameters["key_id"] : e.data["key_id"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let per_page = (e.data.parameters && e.data.parameters["per-page"]) ? e.data.parameters["per-page"] : e.data["per-page"];
    let registry_type = (e.data.parameters && e.data.parameters["registry_type"]) ? e.data.parameters["registry_type"] : e.data["registry_type"];
    let secret_name = (e.data.parameters && e.data.parameters["secret_name"]) ? e.data.parameters["secret_name"] : e.data["secret_name"];
    let selected_repository_ids = (e.data.parameters && e.data.parameters["selected_repository_ids"]) ? e.data.parameters["selected_repository_ids"] : e.data["selected_repository_ids"];
    let url = (e.data.parameters && e.data.parameters["url"]) ? e.data.parameters["url"] : e.data["url"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    let visibility = (e.data.parameters && e.data.parameters["visibility"]) ? e.data.parameters["visibility"] : e.data["visibility"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPrivateRegistry(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility), function() {
      bp.log.info(`Monitor PrivateRegistry: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPrivateRegistryExists(encrypted_value, key_id, org, page, per_page, registry_type, secret_name, selected_repository_ids, url, username, visibility);
    });
  }
});

// Story: crud:NetworkConfiguration:linear:1
bthread("crud:NetworkConfiguration:linear:1", function () {
  let compute_service = "compute_service_8510_" + Math.floor(Math.random() * 10000);
  let name = "name_8510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let network_configuration_id = "network_configuration_id_8510_" + Math.floor(Math.random() * 10000);
  let network_settings_ids = "network_settings_ids_8510_" + Math.floor(Math.random() * 10000);
  let org = "org_8510_" + Math.floor(Math.random() * 10000);
  createNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
  updateNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  deleteNetworkConfigurationFromOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToDeleteANonExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationDoesNotExist(compute_service, name, network_configuration_id, network_settings_ids, org);
});

// Story: crud:NetworkConfiguration:linear:2
bthread("crud:NetworkConfiguration:linear:2", function () {
  let compute_service = "compute_service_8520_" + Math.floor(Math.random() * 10000);
  let name = "name_8520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let network_configuration_id = "network_configuration_id_8520_" + Math.floor(Math.random() * 10000);
  let network_settings_ids = "network_settings_ids_8520_" + Math.floor(Math.random() * 10000);
  let org = "org_8520_" + Math.floor(Math.random() * 10000);
  createNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
  updateNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  deleteNetworkConfigurationFromOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToDeleteANonExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationDoesNotExist(compute_service, name, network_configuration_id, network_settings_ids, org);
});

// Story: crud:NetworkConfiguration:linear:3
bthread("crud:NetworkConfiguration:linear:3", function () {
  let compute_service = "compute_service_8530_" + Math.floor(Math.random() * 10000);
  let name = "name_8530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let network_configuration_id = "network_configuration_id_8530_" + Math.floor(Math.random() * 10000);
  let network_settings_ids = "network_settings_ids_8530_" + Math.floor(Math.random() * 10000);
  let org = "org_8530_" + Math.floor(Math.random() * 10000);
  createNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
  updateNetworkConfigurationForOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  deleteNetworkConfigurationFromOrg(compute_service, name, network_configuration_id, network_settings_ids, org);
  tryToDeleteANonExistingNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org);
  verifyNetworkConfigurationDoesNotExist(compute_service, name, network_configuration_id, network_settings_ids, org);
});

// Monitor: NetworkConfiguration Verification
bthread("monitor:NetworkConfiguration", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyNetworkConfigurationAdded() });
    let compute_service = (e.data.parameters && e.data.parameters["compute_service"]) ? e.data.parameters["compute_service"] : e.data["compute_service"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let network_configuration_id = (e.data.parameters && e.data.parameters["network_configuration_id"]) ? e.data.parameters["network_configuration_id"] : e.data["network_configuration_id"];
    let network_settings_ids = (e.data.parameters && e.data.parameters["network_settings_ids"]) ? e.data.parameters["network_settings_ids"] : e.data["network_settings_ids"];
    let org = (e.data.parameters && e.data.parameters["org"]) ? e.data.parameters["org"] : e.data["org"];
    // Block Deletion while Verifying Existence
    block(matchDeletedNetworkConfiguration(compute_service, name, network_configuration_id, network_settings_ids, org), function() {
      bp.log.info(`Monitor NetworkConfiguration: Verifying persistence of ID ${id} inside deletion block.`);
        verifyNetworkConfigurationExists(compute_service, name, network_configuration_id, network_settings_ids, org);
    });
  }
});
