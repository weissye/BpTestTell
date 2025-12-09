// Auto-generated stories for gitea
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

// Story: crud:Hooks:linear:1
bthread("crud:Hooks:linear:1", function () {
  let active = true;
  let body = "body_410";
  let config = "config_410";
  let events = "events_410";
  let id = "id_410";
  let limit = "limit_410";
  let page = "page_410";
  let type = "type_410";
  userCreateHook(active, body, config, events, id, limit, page, type);
});

// Story: crud:Hooks:linear:2
bthread("crud:Hooks:linear:2", function () {
  let active = true;
  let body = "body_420";
  let config = "config_420";
  let events = "events_420";
  let id = "id_420";
  let limit = "limit_420";
  let page = "page_420";
  let type = "type_420";
  userCreateHook(active, body, config, events, id, limit, page, type);
});

// Story: crud:Hooks:linear:3
bthread("crud:Hooks:linear:3", function () {
  let active = true;
  let body = "body_430";
  let config = "config_430";
  let events = "events_430";
  let id = "id_430";
  let limit = "limit_430";
  let page = "page_430";
  let type = "type_430";
  userCreateHook(active, body, config, events, id, limit, page, type);
});

// Story: crud:UnadoptedRepositories:linear:1
bthread("crud:UnadoptedRepositories:linear:1", function () {
  let limit = "limit_560";
  let owner = "owner_560";
  let page = "page_560";
  let pattern = "pattern_560";
  let repo = "repo_560";
  adminAdoptRepository(limit, owner, page, pattern, repo);
});

// Story: crud:UnadoptedRepositories:linear:2
bthread("crud:UnadoptedRepositories:linear:2", function () {
  let limit = "limit_570";
  let owner = "owner_570";
  let page = "page_570";
  let pattern = "pattern_570";
  let repo = "repo_570";
  adminAdoptRepository(limit, owner, page, pattern, repo);
});

// Story: crud:UnadoptedRepositories:linear:3
bthread("crud:UnadoptedRepositories:linear:3", function () {
  let limit = "limit_580";
  let owner = "owner_580";
  let page = "page_580";
  let pattern = "pattern_580";
  let repo = "repo_580";
  adminAdoptRepository(limit, owner, page, pattern, repo);
});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  let body = "body_610";
  let limit = "limit_610";
  let name = "name_610";
  let page = "page_610";
  let scope = "scope_610";
  let token = "token_610";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  userCreateToken(body, limit, name, page, scope, token, username);
});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  let body = "body_620";
  let limit = "limit_620";
  let name = "name_620";
  let page = "page_620";
  let scope = "scope_620";
  let token = "token_620";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  userCreateToken(body, limit, name, page, scope, token, username);
});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  let body = "body_630";
  let limit = "limit_630";
  let name = "name_630";
  let page = "page_630";
  let scope = "scope_630";
  let token = "token_630";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  userCreateToken(body, limit, name, page, scope, token, username);
});

// Story: crud:UserBadges:linear:1
bthread("crud:UserBadges:linear:1", function () {
  let body = "body_660";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUsersAdded();
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  username = captured["username"];
  adminAddUserBadges(body, username);
});

// Story: crud:UserBadges:linear:2
bthread("crud:UserBadges:linear:2", function () {
  let body = "body_670";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUsersAdded();
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  username = captured["username"];
  adminAddUserBadges(body, username);
});

// Story: crud:UserBadges:linear:3
bthread("crud:UserBadges:linear:3", function () {
  let body = "body_680";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUsersAdded();
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  username = captured["username"];
  adminAddUserBadges(body, username);
});

// Story: crud:UserKeys:linear:1
bthread("crud:UserKeys:linear:1", function () {
  let id = "id_710";
  let key = "key_710";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUsersAdded();
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  username = captured["username"];
  adminCreatePublicKey(id, key, username);
});

// Story: crud:UserKeys:linear:2
bthread("crud:UserKeys:linear:2", function () {
  let id = "id_720";
  let key = "key_720";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUsersAdded();
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  username = captured["username"];
  adminCreatePublicKey(id, key, username);
});

// Story: crud:UserKeys:linear:3
bthread("crud:UserKeys:linear:3", function () {
  let id = "id_730";
  let key = "key_730";
  let username; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["username"] = matchAnyUsersAdded();
  deps["username"] = matchAnyUserAdded();
  let pkMap = {"username": "username"};
  let captured = resolveDependencies(deps, pkMap);
  username = captured["username"];
  username = captured["username"];
  adminCreatePublicKey(id, key, username);
});

// Story: crud:Organization:linear:1
bthread("crud:Organization:linear:1", function () {
  let body = "body_1310";
  let limit = "limit_1310";
  let org = "org_1310";
  let organization = "organization_1310";
  let page = "page_1310";
  let secretname = "secretname_1310";
  orgCreate(body, limit, org, organization, page, secretname);
});

// Story: crud:Organization:linear:2
bthread("crud:Organization:linear:2", function () {
  let body = "body_1320";
  let limit = "limit_1320";
  let org = "org_1320";
  let organization = "organization_1320";
  let page = "page_1320";
  let secretname = "secretname_1320";
  orgCreate(body, limit, org, organization, page, secretname);
});

// Story: crud:Organization:linear:3
bthread("crud:Organization:linear:3", function () {
  let body = "body_1330";
  let limit = "limit_1330";
  let org = "org_1330";
  let organization = "organization_1330";
  let page = "page_1330";
  let secretname = "secretname_1330";
  orgCreate(body, limit, org, organization, page, secretname);
});

// Story: crud:OrgVariables:linear:1
bthread("crud:OrgVariables:linear:1", function () {
  let body = "body_1360";
  let org = "org_1360";
  let variablename = "variablename_1360";
  createOrgVariable(body, org, variablename);
});

// Story: crud:OrgVariables:linear:2
bthread("crud:OrgVariables:linear:2", function () {
  let body = "body_1370";
  let org = "org_1370";
  let variablename = "variablename_1370";
  createOrgVariable(body, org, variablename);
});

// Story: crud:OrgVariables:linear:3
bthread("crud:OrgVariables:linear:3", function () {
  let body = "body_1380";
  let org = "org_1380";
  let variablename = "variablename_1380";
  createOrgVariable(body, org, variablename);
});

// Story: crud:OrgAvatar:linear:1
bthread("crud:OrgAvatar:linear:1", function () {
  let body = "body_1460";
  let org = "org_1460";
  orgUpdateAvatar(body, org);
});

// Story: crud:OrgAvatar:linear:2
bthread("crud:OrgAvatar:linear:2", function () {
  let body = "body_1470";
  let org = "org_1470";
  orgUpdateAvatar(body, org);
});

// Story: crud:OrgAvatar:linear:3
bthread("crud:OrgAvatar:linear:3", function () {
  let body = "body_1480";
  let org = "org_1480";
  orgUpdateAvatar(body, org);
});

// Story: crud:Labels:linear:1
bthread("crud:Labels:linear:1", function () {
  let color = "color_1610";
  let description = "description_1610";
  let id = "id_1610";
  let limit = "limit_1610";
  let name = "name_1610";
  let owner = "owner_1610";
  let page = "page_1610";
  let repo = "repo_1610";
  issueCreateLabel(color, description, id, limit, name, owner, page, repo);
});

// Story: crud:Labels:linear:2
bthread("crud:Labels:linear:2", function () {
  let color = "color_1620";
  let description = "description_1620";
  let id = "id_1620";
  let limit = "limit_1620";
  let name = "name_1620";
  let owner = "owner_1620";
  let page = "page_1620";
  let repo = "repo_1620";
  issueCreateLabel(color, description, id, limit, name, owner, page, repo);
});

// Story: crud:Labels:linear:3
bthread("crud:Labels:linear:3", function () {
  let color = "color_1630";
  let description = "description_1630";
  let id = "id_1630";
  let limit = "limit_1630";
  let name = "name_1630";
  let owner = "owner_1630";
  let page = "page_1630";
  let repo = "repo_1630";
  issueCreateLabel(color, description, id, limit, name, owner, page, repo);
});

// Story: crud:Teams:linear:1
bthread("crud:Teams:linear:1", function () {
  let body = "body_1810";
  let id = "id_1810";
  let limit = "limit_1810";
  let org = "org_1810";
  let page = "page_1810";
  let repo = "repo_1810";
  orgCreateTeam(body, id, limit, org, page, repo);
});

// Story: crud:Teams:linear:2
bthread("crud:Teams:linear:2", function () {
  let body = "body_1820";
  let id = "id_1820";
  let limit = "limit_1820";
  let org = "org_1820";
  let page = "page_1820";
  let repo = "repo_1820";
  orgCreateTeam(body, id, limit, org, page, repo);
});

// Story: crud:Teams:linear:3
bthread("crud:Teams:linear:3", function () {
  let body = "body_1830";
  let id = "id_1830";
  let limit = "limit_1830";
  let org = "org_1830";
  let page = "page_1830";
  let repo = "repo_1830";
  orgCreateTeam(body, id, limit, org, page, repo);
});

// Story: crud:Issues:linear:1
bthread("crud:Issues:linear:1", function () {
  let content = "content_1910";
  let id = "id_1910";
  let index = 1910;
  let limit = "limit_1910";
  let owner = "owner_1910";
  let page = "page_1910";
  let position = "position_1910";
  let repo = "repo_1910";
  issuePostIssueReaction(content, id, index, limit, owner, page, position, repo);
});

// Story: crud:Issues:linear:2
bthread("crud:Issues:linear:2", function () {
  let content = "content_1920";
  let id = "id_1920";
  let index = 1920;
  let limit = "limit_1920";
  let owner = "owner_1920";
  let page = "page_1920";
  let position = "position_1920";
  let repo = "repo_1920";
  issuePostIssueReaction(content, id, index, limit, owner, page, position, repo);
});

// Story: crud:Issues:linear:3
bthread("crud:Issues:linear:3", function () {
  let content = "content_1930";
  let id = "id_1930";
  let index = 1930;
  let limit = "limit_1930";
  let owner = "owner_1930";
  let page = "page_1930";
  let position = "position_1930";
  let repo = "repo_1930";
  issuePostIssueReaction(content, id, index, limit, owner, page, position, repo);
});

// Story: crud:Repository:linear:1
bthread("crud:Repository:linear:1", function () {
  let body = "body_1960";
  let filepath = "filepath_1960";
  let head = "head_1960";
  let limit = "limit_1960";
  let merge_strategy = "merge_strategy_1960";
  let owner = "owner_1960";
  let page = "page_1960";
  let pageName = "pageName_1960";
  let ref = "ref_1960";
  let repo = "repo_1960";
  repoCreateWikiPage(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo);
});

// Story: crud:Repository:linear:2
bthread("crud:Repository:linear:2", function () {
  let body = "body_1970";
  let filepath = "filepath_1970";
  let head = "head_1970";
  let limit = "limit_1970";
  let merge_strategy = "merge_strategy_1970";
  let owner = "owner_1970";
  let page = "page_1970";
  let pageName = "pageName_1970";
  let ref = "ref_1970";
  let repo = "repo_1970";
  repoCreateWikiPage(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo);
});

// Story: crud:Repository:linear:3
bthread("crud:Repository:linear:3", function () {
  let body = "body_1980";
  let filepath = "filepath_1980";
  let head = "head_1980";
  let limit = "limit_1980";
  let merge_strategy = "merge_strategy_1980";
  let owner = "owner_1980";
  let page = "page_1980";
  let pageName = "pageName_1980";
  let ref = "ref_1980";
  let repo = "repo_1980";
  repoCreateWikiPage(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo);
});

// Story: crud:Variables:linear:1
bthread("crud:Variables:linear:1", function () {
  let key = "key_2110";
  let limit = "limit_2110";
  let owner = "owner_2110";
  let page = "page_2110";
  let repo = "repo_2110";
  let variablename = "variablename_2110";
  createRepoVariable(key, limit, owner, page, repo, variablename);
});

// Story: crud:Variables:linear:2
bthread("crud:Variables:linear:2", function () {
  let key = "key_2120";
  let limit = "limit_2120";
  let owner = "owner_2120";
  let page = "page_2120";
  let repo = "repo_2120";
  let variablename = "variablename_2120";
  createRepoVariable(key, limit, owner, page, repo, variablename);
});

// Story: crud:Variables:linear:3
bthread("crud:Variables:linear:3", function () {
  let key = "key_2130";
  let limit = "limit_2130";
  let owner = "owner_2130";
  let page = "page_2130";
  let repo = "repo_2130";
  let variablename = "variablename_2130";
  createRepoVariable(key, limit, owner, page, repo, variablename);
});

// Story: crud:Branches:linear:1
bthread("crud:Branches:linear:1", function () {
  let CreateBranchRepoOption = "CreateBranchRepoOption_2260";
  let UpdateBranchRepoOption = "UpdateBranchRepoOption_2260";
  let branch = "branch_2260";
  let limit = "limit_2260";
  let owner = "owner_2260";
  let page = "page_2260";
  let repo = "repo_2260";
  repoCreateBranch(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo);
});

// Story: crud:Branches:linear:2
bthread("crud:Branches:linear:2", function () {
  let CreateBranchRepoOption = "CreateBranchRepoOption_2270";
  let UpdateBranchRepoOption = "UpdateBranchRepoOption_2270";
  let branch = "branch_2270";
  let limit = "limit_2270";
  let owner = "owner_2270";
  let page = "page_2270";
  let repo = "repo_2270";
  repoCreateBranch(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo);
});

// Story: crud:Branches:linear:3
bthread("crud:Branches:linear:3", function () {
  let CreateBranchRepoOption = "CreateBranchRepoOption_2280";
  let UpdateBranchRepoOption = "UpdateBranchRepoOption_2280";
  let branch = "branch_2280";
  let limit = "limit_2280";
  let owner = "owner_2280";
  let page = "page_2280";
  let repo = "repo_2280";
  repoCreateBranch(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo);
});

// Story: crud:Collaborators:linear:1
bthread("crud:Collaborators:linear:1", function () {
  let AddCollaboratorOption = "AddCollaboratorOption_2310";
  let collaborator = "collaborator_2310";
  let limit = "limit_2310";
  let owner = "owner_2310";
  let page = "page_2310";
  let repo = "repo_2310";
  repoAddCollaborator(AddCollaboratorOption, collaborator, limit, owner, page, repo);
});

// Story: crud:Collaborators:linear:2
bthread("crud:Collaborators:linear:2", function () {
  let AddCollaboratorOption = "AddCollaboratorOption_2320";
  let collaborator = "collaborator_2320";
  let limit = "limit_2320";
  let owner = "owner_2320";
  let page = "page_2320";
  let repo = "repo_2320";
  repoAddCollaborator(AddCollaboratorOption, collaborator, limit, owner, page, repo);
});

// Story: crud:Collaborators:linear:3
bthread("crud:Collaborators:linear:3", function () {
  let AddCollaboratorOption = "AddCollaboratorOption_2330";
  let collaborator = "collaborator_2330";
  let limit = "limit_2330";
  let owner = "owner_2330";
  let page = "page_2330";
  let repo = "repo_2330";
  repoAddCollaborator(AddCollaboratorOption, collaborator, limit, owner, page, repo);
});

// Story: crud:Repositories:linear:1
bthread("crud:Repositories:linear:1", function () {
  let body = "body_2410";
  let id = "id_2410";
  let limit = "limit_2410";
  let owner = "owner_2410";
  let page = "page_2410";
  let repo = "repo_2410";
  createCurrentUserRepo(body, id, limit, owner, page, repo);
});

// Story: crud:Repositories:linear:2
bthread("crud:Repositories:linear:2", function () {
  let body = "body_2420";
  let id = "id_2420";
  let limit = "limit_2420";
  let owner = "owner_2420";
  let page = "page_2420";
  let repo = "repo_2420";
  createCurrentUserRepo(body, id, limit, owner, page, repo);
});

// Story: crud:Repositories:linear:3
bthread("crud:Repositories:linear:3", function () {
  let body = "body_2430";
  let id = "id_2430";
  let limit = "limit_2430";
  let owner = "owner_2430";
  let page = "page_2430";
  let repo = "repo_2430";
  createCurrentUserRepo(body, id, limit, owner, page, repo);
});

// Story: crud:IssueCommentAttachments:linear:1
bthread("crud:IssueCommentAttachments:linear:1", function () {
  let attachment = "attachment_3010";
  let attachment_id = "attachment_id_3010";
  let body = "body_3010";
  let id = 3010;
  let name = "name_3010";
  let owner = "owner_3010";
  let repo = "repo_3010";
  issueCreateIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo);
});

// Story: crud:IssueCommentAttachments:linear:2
bthread("crud:IssueCommentAttachments:linear:2", function () {
  let attachment = "attachment_3020";
  let attachment_id = "attachment_id_3020";
  let body = "body_3020";
  let id = 3020;
  let name = "name_3020";
  let owner = "owner_3020";
  let repo = "repo_3020";
  issueCreateIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo);
});

// Story: crud:IssueCommentAttachments:linear:3
bthread("crud:IssueCommentAttachments:linear:3", function () {
  let attachment = "attachment_3030";
  let attachment_id = "attachment_id_3030";
  let body = "body_3030";
  let id = 3030;
  let name = "name_3030";
  let owner = "owner_3030";
  let repo = "repo_3030";
  issueCreateIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo);
});

// Story: crud:IssueCommentReactions:linear:1
bthread("crud:IssueCommentReactions:linear:1", function () {
  let content = "content_3060";
  let id = 3060;
  let owner = "owner_3060";
  let repo = "repo_3060";
  issuePostCommentReaction(content, id, owner, repo);
});

// Story: crud:IssueCommentReactions:linear:2
bthread("crud:IssueCommentReactions:linear:2", function () {
  let content = "content_3070";
  let id = 3070;
  let owner = "owner_3070";
  let repo = "repo_3070";
  issuePostCommentReaction(content, id, owner, repo);
});

// Story: crud:IssueCommentReactions:linear:3
bthread("crud:IssueCommentReactions:linear:3", function () {
  let content = "content_3080";
  let id = 3080;
  let owner = "owner_3080";
  let repo = "repo_3080";
  issuePostCommentReaction(content, id, owner, repo);
});

// Story: crud:IssueAttachments:linear:1
bthread("crud:IssueAttachments:linear:1", function () {
  let attachment = "attachment_3160";
  let attachment_id = "attachment_id_3160";
  let body = "body_3160";
  let index = 3160;
  let name = "name_3160";
  let owner = "owner_3160";
  let repo = "repo_3160";
  issueCreateIssueAttachment(attachment, attachment_id, body, index, name, owner, repo);
});

// Story: crud:IssueAttachments:linear:2
bthread("crud:IssueAttachments:linear:2", function () {
  let attachment = "attachment_3170";
  let attachment_id = "attachment_id_3170";
  let body = "body_3170";
  let index = 3170;
  let name = "name_3170";
  let owner = "owner_3170";
  let repo = "repo_3170";
  issueCreateIssueAttachment(attachment, attachment_id, body, index, name, owner, repo);
});

// Story: crud:IssueAttachments:linear:3
bthread("crud:IssueAttachments:linear:3", function () {
  let attachment = "attachment_3180";
  let attachment_id = "attachment_id_3180";
  let body = "body_3180";
  let index = 3180;
  let name = "name_3180";
  let owner = "owner_3180";
  let repo = "repo_3180";
  issueCreateIssueAttachment(attachment, attachment_id, body, index, name, owner, repo);
});

// Story: crud:IssueBlocks:linear:1
bthread("crud:IssueBlocks:linear:1", function () {
  let body = "body_3210";
  let index = "index_3210";
  let limit = "limit_3210";
  let owner = "owner_3210";
  let page = "page_3210";
  let repo = "repo_3210";
  issueCreateIssueBlocking(body, index, limit, owner, page, repo);
});

// Story: crud:IssueBlocks:linear:2
bthread("crud:IssueBlocks:linear:2", function () {
  let body = "body_3220";
  let index = "index_3220";
  let limit = "limit_3220";
  let owner = "owner_3220";
  let page = "page_3220";
  let repo = "repo_3220";
  issueCreateIssueBlocking(body, index, limit, owner, page, repo);
});

// Story: crud:IssueBlocks:linear:3
bthread("crud:IssueBlocks:linear:3", function () {
  let body = "body_3230";
  let index = "index_3230";
  let limit = "limit_3230";
  let owner = "owner_3230";
  let page = "page_3230";
  let repo = "repo_3230";
  issueCreateIssueBlocking(body, index, limit, owner, page, repo);
});

// Story: crud:IssueComments:linear:1
bthread("crud:IssueComments:linear:1", function () {
  let before = "before_3260";
  let body = "body_3260";
  let id = "id_3260";
  let index = 3260;
  let owner = "owner_3260";
  let repo = "repo_3260";
  let since = "since_3260";
  issueCreateComment(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueComments:linear:2
bthread("crud:IssueComments:linear:2", function () {
  let before = "before_3270";
  let body = "body_3270";
  let id = "id_3270";
  let index = 3270;
  let owner = "owner_3270";
  let repo = "repo_3270";
  let since = "since_3270";
  issueCreateComment(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueComments:linear:3
bthread("crud:IssueComments:linear:3", function () {
  let before = "before_3280";
  let body = "body_3280";
  let id = "id_3280";
  let index = 3280;
  let owner = "owner_3280";
  let repo = "repo_3280";
  let since = "since_3280";
  issueCreateComment(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueTimes:linear:1
bthread("crud:IssueTimes:linear:1", function () {
  let before = "before_3410";
  let index = 3410;
  let limit = "limit_3410";
  let owner = "owner_3410";
  let page = "page_3410";
  let repo = "repo_3410";
  let since = "since_3410";
  let time = "time_3410";
  let user = "user_3410";
  issueAddTime(before, index, limit, owner, page, repo, since, time, user);
});

// Story: crud:IssueTimes:linear:2
bthread("crud:IssueTimes:linear:2", function () {
  let before = "before_3420";
  let index = 3420;
  let limit = "limit_3420";
  let owner = "owner_3420";
  let page = "page_3420";
  let repo = "repo_3420";
  let since = "since_3420";
  let time = "time_3420";
  let user = "user_3420";
  issueAddTime(before, index, limit, owner, page, repo, since, time, user);
});

// Story: crud:IssueTimes:linear:3
bthread("crud:IssueTimes:linear:3", function () {
  let before = "before_3430";
  let index = 3430;
  let limit = "limit_3430";
  let owner = "owner_3430";
  let page = "page_3430";
  let repo = "repo_3430";
  let since = "since_3430";
  let time = "time_3430";
  let user = "user_3430";
  issueAddTime(before, index, limit, owner, page, repo, since, time, user);
});

// Story: crud:RepositoryKeys:linear:1
bthread("crud:RepositoryKeys:linear:1", function () {
  let fingerprint = "fingerprint_3460";
  let id = "id_3460";
  let key = "key_3460";
  let key_id; // Resolved Dependency
  let limit = "limit_3460";
  let owner = "owner_3460";
  let page = "page_3460";
  let read_only = true;
  let repo = "repo_3460";
  let title = "title_3460";
  // Dependency Barrier
  let deps = {};
  deps["key_id"] = matchAnyKeysAdded();
  let pkMap = {"key_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  key_id = captured["key_id"];
  repoCreateKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo, title);
});

// Story: crud:RepositoryKeys:linear:2
bthread("crud:RepositoryKeys:linear:2", function () {
  let fingerprint = "fingerprint_3470";
  let id = "id_3470";
  let key = "key_3470";
  let key_id; // Resolved Dependency
  let limit = "limit_3470";
  let owner = "owner_3470";
  let page = "page_3470";
  let read_only = true;
  let repo = "repo_3470";
  let title = "title_3470";
  // Dependency Barrier
  let deps = {};
  deps["key_id"] = matchAnyKeysAdded();
  let pkMap = {"key_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  key_id = captured["key_id"];
  repoCreateKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo, title);
});

// Story: crud:RepositoryKeys:linear:3
bthread("crud:RepositoryKeys:linear:3", function () {
  let fingerprint = "fingerprint_3480";
  let id = "id_3480";
  let key = "key_3480";
  let key_id; // Resolved Dependency
  let limit = "limit_3480";
  let owner = "owner_3480";
  let page = "page_3480";
  let read_only = true;
  let repo = "repo_3480";
  let title = "title_3480";
  // Dependency Barrier
  let deps = {};
  deps["key_id"] = matchAnyKeysAdded();
  let pkMap = {"key_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  key_id = captured["key_id"];
  repoCreateKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo, title);
});

// Story: crud:PullRequests:linear:1
bthread("crud:PullRequests:linear:1", function () {
  let body = "body_3660";
  let index = 3660;
  let limit = "limit_3660";
  let owner = "owner_3660";
  let page = "page_3660";
  let repo = "repo_3660";
  let skip_to = "skip-to_3660";
  let style = "style_3660";
  let whitespace = "whitespace_3660";
  repoMergePullRequest(body, index, limit, owner, page, repo, skip_to, style, whitespace);
});

// Story: crud:PullRequests:linear:2
bthread("crud:PullRequests:linear:2", function () {
  let body = "body_3670";
  let index = 3670;
  let limit = "limit_3670";
  let owner = "owner_3670";
  let page = "page_3670";
  let repo = "repo_3670";
  let skip_to = "skip-to_3670";
  let style = "style_3670";
  let whitespace = "whitespace_3670";
  repoMergePullRequest(body, index, limit, owner, page, repo, skip_to, style, whitespace);
});

// Story: crud:PullRequests:linear:3
bthread("crud:PullRequests:linear:3", function () {
  let body = "body_3680";
  let index = 3680;
  let limit = "limit_3680";
  let owner = "owner_3680";
  let page = "page_3680";
  let repo = "repo_3680";
  let skip_to = "skip-to_3680";
  let style = "style_3680";
  let whitespace = "whitespace_3680";
  repoMergePullRequest(body, index, limit, owner, page, repo, skip_to, style, whitespace);
});

// Story: crud:PullReviewRequests:linear:1
bthread("crud:PullReviewRequests:linear:1", function () {
  let body = "body_3710";
  let index = 3710;
  let owner = "owner_3710";
  let repo = "repo_3710";
  repoCreatePullReviewRequests(body, index, owner, repo);
});

// Story: crud:PullReviewRequests:linear:2
bthread("crud:PullReviewRequests:linear:2", function () {
  let body = "body_3720";
  let index = 3720;
  let owner = "owner_3720";
  let repo = "repo_3720";
  repoCreatePullReviewRequests(body, index, owner, repo);
});

// Story: crud:PullReviewRequests:linear:3
bthread("crud:PullReviewRequests:linear:3", function () {
  let body = "body_3730";
  let index = 3730;
  let owner = "owner_3730";
  let repo = "repo_3730";
  repoCreatePullReviewRequests(body, index, owner, repo);
});

// Story: crud:PullReviews:linear:1
bthread("crud:PullReviews:linear:1", function () {
  let body = "body_3760";
  let id = "id_3760";
  let index = 3760;
  let limit = "limit_3760";
  let owner = "owner_3760";
  let page = "page_3760";
  let repo = "repo_3760";
  repoCreatePullReview(body, id, index, limit, owner, page, repo);
});

// Story: crud:PullReviews:linear:2
bthread("crud:PullReviews:linear:2", function () {
  let body = "body_3770";
  let id = "id_3770";
  let index = 3770;
  let limit = "limit_3770";
  let owner = "owner_3770";
  let page = "page_3770";
  let repo = "repo_3770";
  repoCreatePullReview(body, id, index, limit, owner, page, repo);
});

// Story: crud:PullReviews:linear:3
bthread("crud:PullReviews:linear:3", function () {
  let body = "body_3780";
  let id = "id_3780";
  let index = 3780;
  let limit = "limit_3780";
  let owner = "owner_3780";
  let page = "page_3780";
  let repo = "repo_3780";
  repoCreatePullReview(body, id, index, limit, owner, page, repo);
});

// Story: crud:PushMirrors:linear:1
bthread("crud:PushMirrors:linear:1", function () {
  let limit = "limit_3960";
  let name = "name_3960";
  let owner = "owner_3960";
  let page = "page_3960";
  let repo = "repo_3960";
  repoPushMirrorSync(limit, name, owner, page, repo);
});

// Story: crud:PushMirrors:linear:2
bthread("crud:PushMirrors:linear:2", function () {
  let limit = "limit_3970";
  let name = "name_3970";
  let owner = "owner_3970";
  let page = "page_3970";
  let repo = "repo_3970";
  repoPushMirrorSync(limit, name, owner, page, repo);
});

// Story: crud:PushMirrors:linear:3
bthread("crud:PushMirrors:linear:3", function () {
  let limit = "limit_3980";
  let name = "name_3980";
  let owner = "owner_3980";
  let page = "page_3980";
  let repo = "repo_3980";
  repoPushMirrorSync(limit, name, owner, page, repo);
});

// Story: crud:Releases:linear:1
bthread("crud:Releases:linear:1", function () {
  let CreateReleaseOption = "CreateReleaseOption_4060";
  let body = "body_4060";
  let draft = "draft_4060";
  let id = "id_4060";
  let limit = "limit_4060";
  let owner = "owner_4060";
  let page = "page_4060";
  let pre_release = "pre-release_4060";
  let repo = "repo_4060";
  let tag = "tag_4060";
  repoCreateRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag);
});

// Story: crud:Releases:linear:2
bthread("crud:Releases:linear:2", function () {
  let CreateReleaseOption = "CreateReleaseOption_4070";
  let body = "body_4070";
  let draft = "draft_4070";
  let id = "id_4070";
  let limit = "limit_4070";
  let owner = "owner_4070";
  let page = "page_4070";
  let pre_release = "pre-release_4070";
  let repo = "repo_4070";
  let tag = "tag_4070";
  repoCreateRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag);
});

// Story: crud:Releases:linear:3
bthread("crud:Releases:linear:3", function () {
  let CreateReleaseOption = "CreateReleaseOption_4080";
  let body = "body_4080";
  let draft = "draft_4080";
  let id = "id_4080";
  let limit = "limit_4080";
  let owner = "owner_4080";
  let page = "page_4080";
  let pre_release = "pre-release_4080";
  let repo = "repo_4080";
  let tag = "tag_4080";
  repoCreateRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag);
});

// Story: crud:ReleaseAttachments:linear:1
bthread("crud:ReleaseAttachments:linear:1", function () {
  let attachment = "attachment_4110";
  let attachment_id = "attachment_id_4110";
  let body = "body_4110";
  let id = 4110;
  let name = "name_4110";
  let owner = "owner_4110";
  let repo = "repo_4110";
  repoCreateReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo);
});

// Story: crud:ReleaseAttachments:linear:2
bthread("crud:ReleaseAttachments:linear:2", function () {
  let attachment = "attachment_4120";
  let attachment_id = "attachment_id_4120";
  let body = "body_4120";
  let id = 4120;
  let name = "name_4120";
  let owner = "owner_4120";
  let repo = "repo_4120";
  repoCreateReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo);
});

// Story: crud:ReleaseAttachments:linear:3
bthread("crud:ReleaseAttachments:linear:3", function () {
  let attachment = "attachment_4130";
  let attachment_id = "attachment_id_4130";
  let body = "body_4130";
  let id = 4130;
  let name = "name_4130";
  let owner = "owner_4130";
  let repo = "repo_4130";
  repoCreateReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo);
});

// Story: crud:TagProtections:linear:1
bthread("crud:TagProtections:linear:1", function () {
  let body = "body_4210";
  let id = "id_4210";
  let owner = "owner_4210";
  let repo = "repo_4210";
  repoCreateTagProtection(body, id, owner, repo);
});

// Story: crud:TagProtections:linear:2
bthread("crud:TagProtections:linear:2", function () {
  let body = "body_4220";
  let id = "id_4220";
  let owner = "owner_4220";
  let repo = "repo_4220";
  repoCreateTagProtection(body, id, owner, repo);
});

// Story: crud:TagProtections:linear:3
bthread("crud:TagProtections:linear:3", function () {
  let body = "body_4230";
  let id = "id_4230";
  let owner = "owner_4230";
  let repo = "repo_4230";
  repoCreateTagProtection(body, id, owner, repo);
});

// Story: crud:Tags:linear:1
bthread("crud:Tags:linear:1", function () {
  let body = "body_4260";
  let limit = "limit_4260";
  let owner = "owner_4260";
  let page = "page_4260";
  let repo = "repo_4260";
  let tag = "tag_4260";
  repoCreateTag(body, limit, owner, page, repo, tag);
});

// Story: crud:Tags:linear:2
bthread("crud:Tags:linear:2", function () {
  let body = "body_4270";
  let limit = "limit_4270";
  let owner = "owner_4270";
  let page = "page_4270";
  let repo = "repo_4270";
  let tag = "tag_4270";
  repoCreateTag(body, limit, owner, page, repo, tag);
});

// Story: crud:Tags:linear:3
bthread("crud:Tags:linear:3", function () {
  let body = "body_4280";
  let limit = "limit_4280";
  let owner = "owner_4280";
  let page = "page_4280";
  let repo = "repo_4280";
  let tag = "tag_4280";
  repoCreateTag(body, limit, owner, page, repo, tag);
});

// Story: crud:Topics:linear:1
bthread("crud:Topics:linear:1", function () {
  let limit = "limit_4360";
  let owner = "owner_4360";
  let page = "page_4360";
  let q = "q_4360";
  let repo = "repo_4360";
  let topic = "topic_4360";
  repoAddTopic(limit, owner, page, q, repo, topic);
});

// Story: crud:Topics:linear:2
bthread("crud:Topics:linear:2", function () {
  let limit = "limit_4370";
  let owner = "owner_4370";
  let page = "page_4370";
  let q = "q_4370";
  let repo = "repo_4370";
  let topic = "topic_4370";
  repoAddTopic(limit, owner, page, q, repo, topic);
});

// Story: crud:Topics:linear:3
bthread("crud:Topics:linear:3", function () {
  let limit = "limit_4380";
  let owner = "owner_4380";
  let page = "page_4380";
  let q = "q_4380";
  let repo = "repo_4380";
  let topic = "topic_4380";
  repoAddTopic(limit, owner, page, q, repo, topic);
});

// Story: crud:UserVariables:linear:1
bthread("crud:UserVariables:linear:1", function () {
  let body = "body_4660";
  let variablename = "variablename_4660";
  createUserVariable(body, variablename);
});

// Story: crud:UserVariables:linear:2
bthread("crud:UserVariables:linear:2", function () {
  let body = "body_4670";
  let variablename = "variablename_4670";
  createUserVariable(body, variablename);
});

// Story: crud:UserVariables:linear:3
bthread("crud:UserVariables:linear:3", function () {
  let body = "body_4680";
  let variablename = "variablename_4680";
  createUserVariable(body, variablename);
});

// Story: crud:OAuth2Applications:linear:1
bthread("crud:OAuth2Applications:linear:1", function () {
  let body = "body_4710";
  let id = "id_4710";
  let limit = "limit_4710";
  let page = "page_4710";
  userCreateOAuth2Application(body, id, limit, page);
});

// Story: crud:OAuth2Applications:linear:2
bthread("crud:OAuth2Applications:linear:2", function () {
  let body = "body_4720";
  let id = "id_4720";
  let limit = "limit_4720";
  let page = "page_4720";
  userCreateOAuth2Application(body, id, limit, page);
});

// Story: crud:OAuth2Applications:linear:3
bthread("crud:OAuth2Applications:linear:3", function () {
  let body = "body_4730";
  let id = "id_4730";
  let limit = "limit_4730";
  let page = "page_4730";
  userCreateOAuth2Application(body, id, limit, page);
});

// Story: crud:UserAvatar:linear:1
bthread("crud:UserAvatar:linear:1", function () {
  let body = "body_4760";
  let id = "id_4760";
  userUpdateAvatar(body, id);
});

// Story: crud:UserAvatar:linear:2
bthread("crud:UserAvatar:linear:2", function () {
  let body = "body_4770";
  let id = "id_4770";
  userUpdateAvatar(body, id);
});

// Story: crud:UserAvatar:linear:3
bthread("crud:UserAvatar:linear:3", function () {
  let body = "body_4780";
  let id = "id_4780";
  userUpdateAvatar(body, id);
});

// Story: crud:UserEmails:linear:1
bthread("crud:UserEmails:linear:1", function () {
  let email = "email_4860";
  let id = "id_4860";
  userAddEmail(email, id);
});

// Story: crud:UserEmails:linear:2
bthread("crud:UserEmails:linear:2", function () {
  let email = "email_4870";
  let id = "id_4870";
  userAddEmail(email, id);
});

// Story: crud:UserEmails:linear:3
bthread("crud:UserEmails:linear:3", function () {
  let email = "email_4880";
  let id = "id_4880";
  userAddEmail(email, id);
});

// Story: crud:GPGKeys:linear:1
bthread("crud:GPGKeys:linear:1", function () {
  let id = "id_5060";
  let key = "key_5060";
  let limit = "limit_5060";
  let page = "page_5060";
  let read_only = true;
  userCurrentPostGPGKey(id, key, limit, page, read_only);
});

// Story: crud:GPGKeys:linear:2
bthread("crud:GPGKeys:linear:2", function () {
  let id = "id_5070";
  let key = "key_5070";
  let limit = "limit_5070";
  let page = "page_5070";
  let read_only = true;
  userCurrentPostGPGKey(id, key, limit, page, read_only);
});

// Story: crud:GPGKeys:linear:3
bthread("crud:GPGKeys:linear:3", function () {
  let id = "id_5080";
  let key = "key_5080";
  let limit = "limit_5080";
  let page = "page_5080";
  let read_only = true;
  userCurrentPostGPGKey(id, key, limit, page, read_only);
});

// Story: crud:Keys:linear:1
bthread("crud:Keys:linear:1", function () {
  let body = "body_5210";
  let fingerprint = "fingerprint_5210";
  let id = "id_5210";
  let limit = "limit_5210";
  let page = "page_5210";
  userCurrentPostKey(body, fingerprint, id, limit, page);
});

// Story: crud:Keys:linear:2
bthread("crud:Keys:linear:2", function () {
  let body = "body_5220";
  let fingerprint = "fingerprint_5220";
  let id = "id_5220";
  let limit = "limit_5220";
  let page = "page_5220";
  userCurrentPostKey(body, fingerprint, id, limit, page);
});

// Story: crud:Keys:linear:3
bthread("crud:Keys:linear:3", function () {
  let body = "body_5230";
  let fingerprint = "fingerprint_5230";
  let id = "id_5230";
  let limit = "limit_5230";
  let page = "page_5230";
  userCurrentPostKey(body, fingerprint, id, limit, page);
});

// Story: crud:UserStarred:linear:1
bthread("crud:UserStarred:linear:1", function () {
  let limit = "limit_5310";
  let owner = "owner_5310";
  let page = "page_5310";
  let repo = "repo_5310";
  userCurrentPutStar(limit, owner, page, repo);
});

// Story: crud:UserStarred:linear:2
bthread("crud:UserStarred:linear:2", function () {
  let limit = "limit_5320";
  let owner = "owner_5320";
  let page = "page_5320";
  let repo = "repo_5320";
  userCurrentPutStar(limit, owner, page, repo);
});

// Story: crud:UserStarred:linear:3
bthread("crud:UserStarred:linear:3", function () {
  let limit = "limit_5330";
  let owner = "owner_5330";
  let page = "page_5330";
  let repo = "repo_5330";
  userCurrentPutStar(limit, owner, page, repo);
});
