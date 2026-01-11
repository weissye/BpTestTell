// Auto-generated NEGATIVE stories for gitea
//@provengo summon rest

bthread("fuzz:ActivityPub:user_id_InvalidType", function () {
  let user_id_valid = Math.floor(Math.random() * 1000);
  let bad_user_id = "INVALID"; verifyActivityPubRejects(bad_user_id);
});
bthread("fuzz:AdminCron:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let task_valid = "task_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyAdminCronRejects(bad_id, limit_valid, page_valid, task_valid);
});
bthread("fuzz:AdminCron:limit_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let task_valid = "task_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyAdminCronRejects(id_valid, bad_limit, page_valid, task_valid);
});
bthread("fuzz:AdminCron:page_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let task_valid = "task_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyAdminCronRejects(id_valid, limit_valid, bad_page, task_valid);
});
bthread("fuzz:AdminCron:task_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let task_valid = "task_valid_" + Math.floor(Math.random()*1000);
  let bad_task = 12345; verifyAdminCronRejects(id_valid, limit_valid, page_valid, bad_task);
});
bthread("fuzz:Hooks:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_body = 12345; verifyHooksRejects(bad_body, id_valid, limit_valid, page_valid);
});
bthread("fuzz:Hooks:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_id = "INVALID"; verifyHooksRejects(body_valid, bad_id, limit_valid, page_valid);
});
bthread("fuzz:Hooks:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_limit = "INVALID"; verifyHooksRejects(body_valid, id_valid, bad_limit, page_valid);
});
bthread("fuzz:Hooks:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_page = "INVALID"; verifyHooksRejects(body_valid, id_valid, limit_valid, bad_page);
});
bthread("fuzz:UnadoptedRepositories:limit_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pattern_valid = "pattern_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyUnadoptedRepositoriesRejects(bad_limit, owner_valid, page_valid, pattern_valid, repo_valid);
});
bthread("fuzz:UnadoptedRepositories:owner_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pattern_valid = "pattern_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyUnadoptedRepositoriesRejects(limit_valid, bad_owner, page_valid, pattern_valid, repo_valid);
});
bthread("fuzz:UnadoptedRepositories:page_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pattern_valid = "pattern_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyUnadoptedRepositoriesRejects(limit_valid, owner_valid, bad_page, pattern_valid, repo_valid);
});
bthread("fuzz:UnadoptedRepositories:pattern_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pattern_valid = "pattern_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_pattern = 12345; verifyUnadoptedRepositoriesRejects(limit_valid, owner_valid, page_valid, bad_pattern, repo_valid);
});
bthread("fuzz:UnadoptedRepositories:repo_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pattern_valid = "pattern_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyUnadoptedRepositoriesRejects(limit_valid, owner_valid, page_valid, pattern_valid, bad_repo);
});
bthread("fuzz:Users:body_InvalidType", function () {
  let CreateAccessTokenOption_valid = "CreateAccessTokenOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let purge_valid = true;
  let token_valid = "token_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyUsersRejects(CreateAccessTokenOption_valid, bad_body, limit_valid, page_valid, purge_valid, token_valid, username_valid);
});
bthread("fuzz:Users:limit_InvalidType", function () {
  let CreateAccessTokenOption_valid = "CreateAccessTokenOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let purge_valid = true;
  let token_valid = "token_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyUsersRejects(CreateAccessTokenOption_valid, body_valid, bad_limit, page_valid, purge_valid, token_valid, username_valid);
});
bthread("fuzz:Users:page_InvalidType", function () {
  let CreateAccessTokenOption_valid = "CreateAccessTokenOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let purge_valid = true;
  let token_valid = "token_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyUsersRejects(CreateAccessTokenOption_valid, body_valid, limit_valid, bad_page, purge_valid, token_valid, username_valid);
});
bthread("fuzz:Users:purge_InvalidType", function () {
  let CreateAccessTokenOption_valid = "CreateAccessTokenOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let purge_valid = true;
  let token_valid = "token_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_purge = "INVALID"; verifyUsersRejects(CreateAccessTokenOption_valid, body_valid, limit_valid, page_valid, bad_purge, token_valid, username_valid);
});
bthread("fuzz:Users:token_InvalidType", function () {
  let CreateAccessTokenOption_valid = "CreateAccessTokenOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let purge_valid = true;
  let token_valid = "token_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_token = 12345; verifyUsersRejects(CreateAccessTokenOption_valid, body_valid, limit_valid, page_valid, purge_valid, bad_token, username_valid);
});
bthread("fuzz:Users:username_InvalidType", function () {
  let CreateAccessTokenOption_valid = "CreateAccessTokenOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let purge_valid = true;
  let token_valid = "token_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = 12345; verifyUsersRejects(CreateAccessTokenOption_valid, body_valid, limit_valid, page_valid, purge_valid, token_valid, bad_username);
});
bthread("fuzz:UserBadges:body_InvalidType", function () {
  let body_valid = {};
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyUserBadgesRejects(bad_body, username_valid);
});
bthread("fuzz:UserBadges:username_InvalidType", function () {
  let body_valid = {};
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = 12345; verifyUserBadgesRejects(body_valid, bad_username);
});
bthread("fuzz:UserKeys:purge_InvalidType", function () {
  let key_valid = "key_valid_" + Math.floor(Math.random()*1000);
  let purge_valid = "purge_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_purge = 12345; verifyUserKeysRejects(key_valid, bad_purge, username_valid);
});
bthread("fuzz:UserKeys:username_InvalidType", function () {
  let key_valid = "key_valid_" + Math.floor(Math.random()*1000);
  let purge_valid = "purge_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = 12345; verifyUserKeysRejects(key_valid, purge_valid, bad_username);
});
bthread("fuzz:UserOrganizations:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let organization_valid = "organization_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyUserOrganizationsRejects(bad_id, organization_valid, username_valid);
});
bthread("fuzz:UserOrganizations:username_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let organization_valid = "organization_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = 12345; verifyUserOrganizationsRejects(id_valid, organization_valid, bad_username);
});
bthread("fuzz:UserRename:id_InvalidType", function () {
  let body_valid = "body_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyUserRenameRejects(body_valid, bad_id, username_valid);
});
bthread("fuzz:UserRename:username_InvalidType", function () {
  let body_valid = "body_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = 12345; verifyUserRenameRejects(body_valid, id_valid, bad_username);
});
bthread("fuzz:UserRepositories:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let repository_valid = "repository_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyUserRepositoriesRejects(bad_id, repository_valid, username_valid);
});
bthread("fuzz:UserRepositories:username_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let repository_valid = "repository_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = 12345; verifyUserRepositoriesRejects(id_valid, repository_valid, bad_username);
});
bthread("fuzz:Markdown:body_InvalidType", function () {
  let body_valid = "body_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyMarkdownRejects(bad_body, id_valid);
});
bthread("fuzz:Markdown:id_InvalidType", function () {
  let body_valid = "body_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyMarkdownRejects(body_valid, bad_id);
});
bthread("fuzz:Markup:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyMarkupRejects(bad_body, id_valid);
});
bthread("fuzz:Markup:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyMarkupRejects(body_valid, bad_id);
});
bthread("fuzz:Organization:body_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let secretname_valid = "secretname_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyOrganizationRejects(bad_body, limit_valid, org_valid, page_valid, secretname_valid);
});
bthread("fuzz:Organization:limit_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let secretname_valid = "secretname_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyOrganizationRejects(body_valid, bad_limit, org_valid, page_valid, secretname_valid);
});
bthread("fuzz:Organization:org_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let secretname_valid = "secretname_valid_" + Math.floor(Math.random()*1000);
  let bad_org = 12345; verifyOrganizationRejects(body_valid, limit_valid, bad_org, page_valid, secretname_valid);
});
bthread("fuzz:Organization:page_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let secretname_valid = "secretname_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyOrganizationRejects(body_valid, limit_valid, org_valid, bad_page, secretname_valid);
});
bthread("fuzz:Organization:secretname_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let secretname_valid = "secretname_valid_" + Math.floor(Math.random()*1000);
  let bad_secretname = 12345; verifyOrganizationRejects(body_valid, limit_valid, org_valid, page_valid, bad_secretname);
});
bthread("fuzz:Variables:body_InvalidType", function () {
  let CreateVariableOption_valid = "CreateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_valid = "UpdateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyVariablesRejects(CreateVariableOption_valid, UpdateVariableOption_valid, bad_body, id_valid, limit_valid, owner_valid, page_valid, repo_valid, variablename_valid);
});
bthread("fuzz:Variables:id_InvalidType", function () {
  let CreateVariableOption_valid = "CreateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_valid = "UpdateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyVariablesRejects(CreateVariableOption_valid, UpdateVariableOption_valid, body_valid, bad_id, limit_valid, owner_valid, page_valid, repo_valid, variablename_valid);
});
bthread("fuzz:Variables:limit_InvalidType", function () {
  let CreateVariableOption_valid = "CreateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_valid = "UpdateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyVariablesRejects(CreateVariableOption_valid, UpdateVariableOption_valid, body_valid, id_valid, bad_limit, owner_valid, page_valid, repo_valid, variablename_valid);
});
bthread("fuzz:Variables:owner_InvalidType", function () {
  let CreateVariableOption_valid = "CreateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_valid = "UpdateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyVariablesRejects(CreateVariableOption_valid, UpdateVariableOption_valid, body_valid, id_valid, limit_valid, bad_owner, page_valid, repo_valid, variablename_valid);
});
bthread("fuzz:Variables:page_InvalidType", function () {
  let CreateVariableOption_valid = "CreateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_valid = "UpdateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyVariablesRejects(CreateVariableOption_valid, UpdateVariableOption_valid, body_valid, id_valid, limit_valid, owner_valid, bad_page, repo_valid, variablename_valid);
});
bthread("fuzz:Variables:repo_InvalidType", function () {
  let CreateVariableOption_valid = "CreateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_valid = "UpdateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyVariablesRejects(CreateVariableOption_valid, UpdateVariableOption_valid, body_valid, id_valid, limit_valid, owner_valid, page_valid, bad_repo, variablename_valid);
});
bthread("fuzz:Variables:variablename_InvalidType", function () {
  let CreateVariableOption_valid = "CreateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_valid = "UpdateVariableOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_variablename = 12345; verifyVariablesRejects(CreateVariableOption_valid, UpdateVariableOption_valid, body_valid, id_valid, limit_valid, owner_valid, page_valid, repo_valid, bad_variablename);
});
bthread("fuzz:Avatar:body_InvalidType", function () {
  let body_valid = {};
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyAvatarRejects(bad_body, org_valid);
});
bthread("fuzz:Avatar:org_InvalidType", function () {
  let body_valid = {};
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let bad_org = 12345; verifyAvatarRejects(body_valid, bad_org);
});
bthread("fuzz:Labels:body_InvalidType", function () {
  let body_valid = {};
  let color_valid = "color_valid_" + Math.floor(Math.random()*1000);
  let description_valid = "description_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyLabelsRejects(bad_body, color_valid, description_valid, id_valid, limit_valid, name_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Labels:id_InvalidType", function () {
  let body_valid = {};
  let color_valid = "color_valid_" + Math.floor(Math.random()*1000);
  let description_valid = "description_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyLabelsRejects(body_valid, color_valid, description_valid, bad_id, limit_valid, name_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Labels:limit_InvalidType", function () {
  let body_valid = {};
  let color_valid = "color_valid_" + Math.floor(Math.random()*1000);
  let description_valid = "description_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyLabelsRejects(body_valid, color_valid, description_valid, id_valid, bad_limit, name_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Labels:owner_InvalidType", function () {
  let body_valid = {};
  let color_valid = "color_valid_" + Math.floor(Math.random()*1000);
  let description_valid = "description_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyLabelsRejects(body_valid, color_valid, description_valid, id_valid, limit_valid, name_valid, bad_owner, page_valid, repo_valid);
});
bthread("fuzz:Labels:page_InvalidType", function () {
  let body_valid = {};
  let color_valid = "color_valid_" + Math.floor(Math.random()*1000);
  let description_valid = "description_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyLabelsRejects(body_valid, color_valid, description_valid, id_valid, limit_valid, name_valid, owner_valid, bad_page, repo_valid);
});
bthread("fuzz:Labels:repo_InvalidType", function () {
  let body_valid = {};
  let color_valid = "color_valid_" + Math.floor(Math.random()*1000);
  let description_valid = "description_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyLabelsRejects(body_valid, color_valid, description_valid, id_valid, limit_valid, name_valid, owner_valid, page_valid, bad_repo);
});
bthread("fuzz:OrganizationRepos:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_body = 12345; verifyOrganizationReposRejects(bad_body, id_valid, limit_valid, org_valid, page_valid);
});
bthread("fuzz:OrganizationRepos:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_id = 12345; verifyOrganizationReposRejects(body_valid, bad_id, limit_valid, org_valid, page_valid);
});
bthread("fuzz:OrganizationRepos:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_limit = "INVALID"; verifyOrganizationReposRejects(body_valid, id_valid, bad_limit, org_valid, page_valid);
});
bthread("fuzz:OrganizationRepos:org_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_org = 12345; verifyOrganizationReposRejects(body_valid, id_valid, limit_valid, bad_org, page_valid);
});
bthread("fuzz:OrganizationRepos:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_page = "INVALID"; verifyOrganizationReposRejects(body_valid, id_valid, limit_valid, org_valid, bad_page);
});
bthread("fuzz:OrganizationTeams:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_body = 12345; verifyOrganizationTeamsRejects(bad_body, id_valid, limit_valid, org_valid, page_valid);
});
bthread("fuzz:OrganizationTeams:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_id = 12345; verifyOrganizationTeamsRejects(body_valid, bad_id, limit_valid, org_valid, page_valid);
});
bthread("fuzz:OrganizationTeams:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_limit = "INVALID"; verifyOrganizationTeamsRejects(body_valid, id_valid, bad_limit, org_valid, page_valid);
});
bthread("fuzz:OrganizationTeams:org_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_org = 12345; verifyOrganizationTeamsRejects(body_valid, id_valid, limit_valid, bad_org, page_valid);
});
bthread("fuzz:OrganizationTeams:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_page = "INVALID"; verifyOrganizationTeamsRejects(body_valid, id_valid, limit_valid, org_valid, bad_page);
});
bthread("fuzz:Issues:content_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let position_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_content = 12345; verifyIssuesRejects(bad_content, id_valid, index_valid, limit_valid, owner_valid, page_valid, position_valid, repo_valid);
});
bthread("fuzz:Issues:id_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let position_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyIssuesRejects(content_valid, bad_id, index_valid, limit_valid, owner_valid, page_valid, position_valid, repo_valid);
});
bthread("fuzz:Issues:index_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let position_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyIssuesRejects(content_valid, id_valid, bad_index, limit_valid, owner_valid, page_valid, position_valid, repo_valid);
});
bthread("fuzz:Issues:limit_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let position_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyIssuesRejects(content_valid, id_valid, index_valid, bad_limit, owner_valid, page_valid, position_valid, repo_valid);
});
bthread("fuzz:Issues:owner_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let position_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssuesRejects(content_valid, id_valid, index_valid, limit_valid, bad_owner, page_valid, position_valid, repo_valid);
});
bthread("fuzz:Issues:page_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let position_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyIssuesRejects(content_valid, id_valid, index_valid, limit_valid, owner_valid, bad_page, position_valid, repo_valid);
});
bthread("fuzz:Issues:position_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let position_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_position = "INVALID"; verifyIssuesRejects(content_valid, id_valid, index_valid, limit_valid, owner_valid, page_valid, bad_position, repo_valid);
});
bthread("fuzz:Issues:repo_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let position_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssuesRejects(content_valid, id_valid, index_valid, limit_valid, owner_valid, page_valid, position_valid, bad_repo);
});
bthread("fuzz:Repository:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let sha_valid = "sha_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyRepositoryRejects(bad_body, id_valid, limit_valid, owner_valid, page_valid, repo_valid, sha_valid);
});
bthread("fuzz:Repository:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let sha_valid = "sha_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyRepositoryRejects(body_valid, bad_id, limit_valid, owner_valid, page_valid, repo_valid, sha_valid);
});
bthread("fuzz:Repository:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let sha_valid = "sha_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyRepositoryRejects(body_valid, id_valid, bad_limit, owner_valid, page_valid, repo_valid, sha_valid);
});
bthread("fuzz:Repository:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let sha_valid = "sha_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyRepositoryRejects(body_valid, id_valid, limit_valid, bad_owner, page_valid, repo_valid, sha_valid);
});
bthread("fuzz:Repository:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let sha_valid = "sha_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyRepositoryRejects(body_valid, id_valid, limit_valid, owner_valid, bad_page, repo_valid, sha_valid);
});
bthread("fuzz:Repository:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let sha_valid = "sha_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyRepositoryRejects(body_valid, id_valid, limit_valid, owner_valid, page_valid, bad_repo, sha_valid);
});
bthread("fuzz:Repository:sha_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let sha_valid = "sha_valid_" + Math.floor(Math.random()*1000);
  let bad_sha = 12345; verifyRepositoryRejects(body_valid, id_valid, limit_valid, owner_valid, page_valid, repo_valid, bad_sha);
});
bthread("fuzz:Branches:body_InvalidType", function () {
  let CreateBranchRepoOption_valid = "CreateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_valid = "UpdateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let branch_valid = "branch_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyBranchesRejects(CreateBranchRepoOption_valid, UpdateBranchRepoOption_valid, bad_body, branch_valid, id_valid, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Branches:branch_InvalidType", function () {
  let CreateBranchRepoOption_valid = "CreateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_valid = "UpdateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let branch_valid = "branch_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_branch = 12345; verifyBranchesRejects(CreateBranchRepoOption_valid, UpdateBranchRepoOption_valid, body_valid, bad_branch, id_valid, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Branches:id_InvalidType", function () {
  let CreateBranchRepoOption_valid = "CreateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_valid = "UpdateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let branch_valid = "branch_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyBranchesRejects(CreateBranchRepoOption_valid, UpdateBranchRepoOption_valid, body_valid, branch_valid, bad_id, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Branches:limit_InvalidType", function () {
  let CreateBranchRepoOption_valid = "CreateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_valid = "UpdateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let branch_valid = "branch_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyBranchesRejects(CreateBranchRepoOption_valid, UpdateBranchRepoOption_valid, body_valid, branch_valid, id_valid, bad_limit, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Branches:owner_InvalidType", function () {
  let CreateBranchRepoOption_valid = "CreateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_valid = "UpdateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let branch_valid = "branch_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyBranchesRejects(CreateBranchRepoOption_valid, UpdateBranchRepoOption_valid, body_valid, branch_valid, id_valid, limit_valid, bad_owner, page_valid, repo_valid);
});
bthread("fuzz:Branches:page_InvalidType", function () {
  let CreateBranchRepoOption_valid = "CreateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_valid = "UpdateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let branch_valid = "branch_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyBranchesRejects(CreateBranchRepoOption_valid, UpdateBranchRepoOption_valid, body_valid, branch_valid, id_valid, limit_valid, owner_valid, bad_page, repo_valid);
});
bthread("fuzz:Branches:repo_InvalidType", function () {
  let CreateBranchRepoOption_valid = "CreateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_valid = "UpdateBranchRepoOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let branch_valid = "branch_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyBranchesRejects(CreateBranchRepoOption_valid, UpdateBranchRepoOption_valid, body_valid, branch_valid, id_valid, limit_valid, owner_valid, page_valid, bad_repo);
});
bthread("fuzz:Collaborators:body_InvalidType", function () {
  let AddCollaboratorOption_valid = "AddCollaboratorOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let collaborator_valid = "collaborator_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyCollaboratorsRejects(AddCollaboratorOption_valid, bad_body, collaborator_valid, id_valid, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Collaborators:collaborator_InvalidType", function () {
  let AddCollaboratorOption_valid = "AddCollaboratorOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let collaborator_valid = "collaborator_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_collaborator = 12345; verifyCollaboratorsRejects(AddCollaboratorOption_valid, body_valid, bad_collaborator, id_valid, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Collaborators:id_InvalidType", function () {
  let AddCollaboratorOption_valid = "AddCollaboratorOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let collaborator_valid = "collaborator_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyCollaboratorsRejects(AddCollaboratorOption_valid, body_valid, collaborator_valid, bad_id, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Collaborators:limit_InvalidType", function () {
  let AddCollaboratorOption_valid = "AddCollaboratorOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let collaborator_valid = "collaborator_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyCollaboratorsRejects(AddCollaboratorOption_valid, body_valid, collaborator_valid, id_valid, bad_limit, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Collaborators:owner_InvalidType", function () {
  let AddCollaboratorOption_valid = "AddCollaboratorOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let collaborator_valid = "collaborator_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyCollaboratorsRejects(AddCollaboratorOption_valid, body_valid, collaborator_valid, id_valid, limit_valid, bad_owner, page_valid, repo_valid);
});
bthread("fuzz:Collaborators:page_InvalidType", function () {
  let AddCollaboratorOption_valid = "AddCollaboratorOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let collaborator_valid = "collaborator_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyCollaboratorsRejects(AddCollaboratorOption_valid, body_valid, collaborator_valid, id_valid, limit_valid, owner_valid, bad_page, repo_valid);
});
bthread("fuzz:Collaborators:repo_InvalidType", function () {
  let AddCollaboratorOption_valid = "AddCollaboratorOption_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let collaborator_valid = "collaborator_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyCollaboratorsRejects(AddCollaboratorOption_valid, body_valid, collaborator_valid, id_valid, limit_valid, owner_valid, page_valid, bad_repo);
});
bthread("fuzz:Repositories:body_InvalidType", function () {
  let body_valid = {};
  let filepath_valid = "filepath_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyRepositoriesRejects(bad_body, filepath_valid, id_valid, limit_valid, owner_valid, page_valid, repo_valid, username_valid);
});
bthread("fuzz:Repositories:filepath_InvalidType", function () {
  let body_valid = {};
  let filepath_valid = "filepath_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_filepath = 12345; verifyRepositoriesRejects(body_valid, bad_filepath, id_valid, limit_valid, owner_valid, page_valid, repo_valid, username_valid);
});
bthread("fuzz:Repositories:id_InvalidType", function () {
  let body_valid = {};
  let filepath_valid = "filepath_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyRepositoriesRejects(body_valid, filepath_valid, bad_id, limit_valid, owner_valid, page_valid, repo_valid, username_valid);
});
bthread("fuzz:Repositories:limit_InvalidType", function () {
  let body_valid = {};
  let filepath_valid = "filepath_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyRepositoriesRejects(body_valid, filepath_valid, id_valid, bad_limit, owner_valid, page_valid, repo_valid, username_valid);
});
bthread("fuzz:Repositories:owner_InvalidType", function () {
  let body_valid = {};
  let filepath_valid = "filepath_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyRepositoriesRejects(body_valid, filepath_valid, id_valid, limit_valid, bad_owner, page_valid, repo_valid, username_valid);
});
bthread("fuzz:Repositories:page_InvalidType", function () {
  let body_valid = {};
  let filepath_valid = "filepath_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyRepositoriesRejects(body_valid, filepath_valid, id_valid, limit_valid, owner_valid, bad_page, repo_valid, username_valid);
});
bthread("fuzz:Repositories:repo_InvalidType", function () {
  let body_valid = {};
  let filepath_valid = "filepath_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyRepositoriesRejects(body_valid, filepath_valid, id_valid, limit_valid, owner_valid, page_valid, bad_repo, username_valid);
});
bthread("fuzz:Repositories:username_InvalidType", function () {
  let body_valid = {};
  let filepath_valid = "filepath_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = 12345; verifyRepositoriesRejects(body_valid, filepath_valid, id_valid, limit_valid, owner_valid, page_valid, repo_valid, bad_username);
});
bthread("fuzz:Forks:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyForksRejects(bad_body, id_valid, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Forks:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyForksRejects(body_valid, bad_id, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Forks:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyForksRejects(body_valid, id_valid, bad_limit, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:Forks:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyForksRejects(body_valid, id_valid, limit_valid, bad_owner, page_valid, repo_valid);
});
bthread("fuzz:Forks:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyForksRejects(body_valid, id_valid, limit_valid, owner_valid, bad_page, repo_valid);
});
bthread("fuzz:Forks:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyForksRejects(body_valid, id_valid, limit_valid, owner_valid, page_valid, bad_repo);
});
bthread("fuzz:Issue:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let state_valid = "state_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyIssueRejects(bad_body, id_valid, limit_valid, name_valid, owner_valid, page_valid, repo_valid, state_valid);
});
bthread("fuzz:Issue:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let state_valid = "state_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyIssueRejects(body_valid, bad_id, limit_valid, name_valid, owner_valid, page_valid, repo_valid, state_valid);
});
bthread("fuzz:Issue:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let state_valid = "state_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyIssueRejects(body_valid, id_valid, bad_limit, name_valid, owner_valid, page_valid, repo_valid, state_valid);
});
bthread("fuzz:Issue:name_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let state_valid = "state_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345; verifyIssueRejects(body_valid, id_valid, limit_valid, bad_name, owner_valid, page_valid, repo_valid, state_valid);
});
bthread("fuzz:Issue:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let state_valid = "state_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssueRejects(body_valid, id_valid, limit_valid, name_valid, bad_owner, page_valid, repo_valid, state_valid);
});
bthread("fuzz:Issue:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let state_valid = "state_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyIssueRejects(body_valid, id_valid, limit_valid, name_valid, owner_valid, bad_page, repo_valid, state_valid);
});
bthread("fuzz:Issue:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let state_valid = "state_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssueRejects(body_valid, id_valid, limit_valid, name_valid, owner_valid, page_valid, bad_repo, state_valid);
});
bthread("fuzz:Issue:state_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let state_valid = "state_valid_" + Math.floor(Math.random()*1000);
  let bad_state = 12345; verifyIssueRejects(body_valid, id_valid, limit_valid, name_valid, owner_valid, page_valid, repo_valid, bad_state);
});
bthread("fuzz:IssueCommentAttachments:attachment_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_attachment = 12345; verifyIssueCommentAttachmentsRejects(bad_attachment, attachment_id_valid, body_valid, id_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueCommentAttachments:attachment_id_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_attachment_id = "INVALID"; verifyIssueCommentAttachmentsRejects(attachment_valid, bad_attachment_id, body_valid, id_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueCommentAttachments:body_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyIssueCommentAttachmentsRejects(attachment_valid, attachment_id_valid, bad_body, id_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueCommentAttachments:id_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyIssueCommentAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, bad_id, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueCommentAttachments:name_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345; verifyIssueCommentAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, bad_name, owner_valid, repo_valid);
});
bthread("fuzz:IssueCommentAttachments:owner_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssueCommentAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, name_valid, bad_owner, repo_valid);
});
bthread("fuzz:IssueCommentAttachments:repo_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssueCommentAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, name_valid, owner_valid, bad_repo);
});
bthread("fuzz:IssueCommentReactions:content_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_content = 12345; verifyIssueCommentReactionsRejects(bad_content, id_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueCommentReactions:id_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyIssueCommentReactionsRejects(content_valid, bad_id, owner_valid, repo_valid);
});
bthread("fuzz:IssueCommentReactions:owner_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssueCommentReactionsRejects(content_valid, id_valid, bad_owner, repo_valid);
});
bthread("fuzz:IssueCommentReactions:repo_InvalidType", function () {
  let content_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssueCommentReactionsRejects(content_valid, id_valid, owner_valid, bad_repo);
});
bthread("fuzz:IssueAttachments:attachment_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_attachment = 12345; verifyIssueAttachmentsRejects(bad_attachment, attachment_id_valid, body_valid, id_valid, index_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueAttachments:attachment_id_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_attachment_id = "INVALID"; verifyIssueAttachmentsRejects(attachment_valid, bad_attachment_id, body_valid, id_valid, index_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueAttachments:body_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyIssueAttachmentsRejects(attachment_valid, attachment_id_valid, bad_body, id_valid, index_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueAttachments:id_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyIssueAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, bad_id, index_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueAttachments:index_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyIssueAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, bad_index, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:IssueAttachments:name_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345; verifyIssueAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, index_valid, bad_name, owner_valid, repo_valid);
});
bthread("fuzz:IssueAttachments:owner_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssueAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, index_valid, name_valid, bad_owner, repo_valid);
});
bthread("fuzz:IssueAttachments:repo_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssueAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, index_valid, name_valid, owner_valid, bad_repo);
});
bthread("fuzz:IssueBlocks:body_InvalidType", function () {
  let body_valid = {};
  let index_valid = "index_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyIssueBlocksRejects(bad_body, index_valid, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:IssueBlocks:index_InvalidType", function () {
  let body_valid = {};
  let index_valid = "index_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_index = 12345; verifyIssueBlocksRejects(body_valid, bad_index, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:IssueBlocks:limit_InvalidType", function () {
  let body_valid = {};
  let index_valid = "index_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyIssueBlocksRejects(body_valid, index_valid, bad_limit, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:IssueBlocks:owner_InvalidType", function () {
  let body_valid = {};
  let index_valid = "index_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssueBlocksRejects(body_valid, index_valid, limit_valid, bad_owner, page_valid, repo_valid);
});
bthread("fuzz:IssueBlocks:page_InvalidType", function () {
  let body_valid = {};
  let index_valid = "index_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyIssueBlocksRejects(body_valid, index_valid, limit_valid, owner_valid, bad_page, repo_valid);
});
bthread("fuzz:IssueBlocks:repo_InvalidType", function () {
  let body_valid = {};
  let index_valid = "index_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssueBlocksRejects(body_valid, index_valid, limit_valid, owner_valid, page_valid, bad_repo);
});
bthread("fuzz:IssueComments:before_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let bad_before = 12345; verifyIssueCommentsRejects(bad_before, body_valid, id_valid, index_valid, owner_valid, repo_valid, since_valid);
});
bthread("fuzz:IssueComments:body_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyIssueCommentsRejects(before_valid, bad_body, id_valid, index_valid, owner_valid, repo_valid, since_valid);
});
bthread("fuzz:IssueComments:id_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyIssueCommentsRejects(before_valid, body_valid, bad_id, index_valid, owner_valid, repo_valid, since_valid);
});
bthread("fuzz:IssueComments:index_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyIssueCommentsRejects(before_valid, body_valid, id_valid, bad_index, owner_valid, repo_valid, since_valid);
});
bthread("fuzz:IssueComments:owner_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssueCommentsRejects(before_valid, body_valid, id_valid, index_valid, bad_owner, repo_valid, since_valid);
});
bthread("fuzz:IssueComments:repo_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssueCommentsRejects(before_valid, body_valid, id_valid, index_valid, owner_valid, bad_repo, since_valid);
});
bthread("fuzz:IssueComments:since_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let bad_since = 12345; verifyIssueCommentsRejects(before_valid, body_valid, id_valid, index_valid, owner_valid, repo_valid, bad_since);
});
bthread("fuzz:IssueSubscriptions:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyIssueSubscriptionsRejects(bad_id, index_valid, limit_valid, owner_valid, page_valid, repo_valid, user_valid);
});
bthread("fuzz:IssueSubscriptions:index_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyIssueSubscriptionsRejects(id_valid, bad_index, limit_valid, owner_valid, page_valid, repo_valid, user_valid);
});
bthread("fuzz:IssueSubscriptions:limit_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyIssueSubscriptionsRejects(id_valid, index_valid, bad_limit, owner_valid, page_valid, repo_valid, user_valid);
});
bthread("fuzz:IssueSubscriptions:owner_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssueSubscriptionsRejects(id_valid, index_valid, limit_valid, bad_owner, page_valid, repo_valid, user_valid);
});
bthread("fuzz:IssueSubscriptions:page_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyIssueSubscriptionsRejects(id_valid, index_valid, limit_valid, owner_valid, bad_page, repo_valid, user_valid);
});
bthread("fuzz:IssueSubscriptions:repo_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssueSubscriptionsRejects(id_valid, index_valid, limit_valid, owner_valid, page_valid, bad_repo, user_valid);
});
bthread("fuzz:IssueSubscriptions:user_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_user = 12345; verifyIssueSubscriptionsRejects(id_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid, bad_user);
});
bthread("fuzz:IssueTimes:before_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_before = 12345; verifyIssueTimesRejects(bad_before, body_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid, since_valid, user_valid);
});
bthread("fuzz:IssueTimes:body_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyIssueTimesRejects(before_valid, bad_body, index_valid, limit_valid, owner_valid, page_valid, repo_valid, since_valid, user_valid);
});
bthread("fuzz:IssueTimes:index_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyIssueTimesRejects(before_valid, body_valid, bad_index, limit_valid, owner_valid, page_valid, repo_valid, since_valid, user_valid);
});
bthread("fuzz:IssueTimes:limit_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyIssueTimesRejects(before_valid, body_valid, index_valid, bad_limit, owner_valid, page_valid, repo_valid, since_valid, user_valid);
});
bthread("fuzz:IssueTimes:owner_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyIssueTimesRejects(before_valid, body_valid, index_valid, limit_valid, bad_owner, page_valid, repo_valid, since_valid, user_valid);
});
bthread("fuzz:IssueTimes:page_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyIssueTimesRejects(before_valid, body_valid, index_valid, limit_valid, owner_valid, bad_page, repo_valid, since_valid, user_valid);
});
bthread("fuzz:IssueTimes:repo_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyIssueTimesRejects(before_valid, body_valid, index_valid, limit_valid, owner_valid, page_valid, bad_repo, since_valid, user_valid);
});
bthread("fuzz:IssueTimes:since_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_since = 12345; verifyIssueTimesRejects(before_valid, body_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid, bad_since, user_valid);
});
bthread("fuzz:IssueTimes:user_InvalidType", function () {
  let before_valid = "before_valid_" + Math.floor(Math.random()*1000);
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let since_valid = "since_valid_" + Math.floor(Math.random()*1000);
  let user_valid = "user_valid_" + Math.floor(Math.random()*1000);
  let bad_user = 12345; verifyIssueTimesRejects(before_valid, body_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid, since_valid, bad_user);
});
bthread("fuzz:Keys:body_InvalidType", function () {
  let body_valid = {};
  let fingerprint_valid = "fingerprint_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_body = 12345; verifyKeysRejects(bad_body, fingerprint_valid, id_valid, limit_valid, page_valid);
});
bthread("fuzz:Keys:fingerprint_InvalidType", function () {
  let body_valid = {};
  let fingerprint_valid = "fingerprint_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_fingerprint = 12345; verifyKeysRejects(body_valid, bad_fingerprint, id_valid, limit_valid, page_valid);
});
bthread("fuzz:Keys:id_InvalidType", function () {
  let body_valid = {};
  let fingerprint_valid = "fingerprint_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_id = "INVALID"; verifyKeysRejects(body_valid, fingerprint_valid, bad_id, limit_valid, page_valid);
});
bthread("fuzz:Keys:limit_InvalidType", function () {
  let body_valid = {};
  let fingerprint_valid = "fingerprint_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_limit = "INVALID"; verifyKeysRejects(body_valid, fingerprint_valid, id_valid, bad_limit, page_valid);
});
bthread("fuzz:Keys:page_InvalidType", function () {
  let body_valid = {};
  let fingerprint_valid = "fingerprint_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_page = "INVALID"; verifyKeysRejects(body_valid, fingerprint_valid, id_valid, limit_valid, bad_page);
});
bthread("fuzz:MirrorSync:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyMirrorSyncRejects(bad_id, owner_valid, repo_valid);
});
bthread("fuzz:MirrorSync:owner_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyMirrorSyncRejects(id_valid, bad_owner, repo_valid);
});
bthread("fuzz:MirrorSync:repo_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyMirrorSyncRejects(id_valid, owner_valid, bad_repo);
});
bthread("fuzz:PullRequests:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyPullRequestsRejects(bad_body, id_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid, skip_to_valid, style_valid, whitespace_valid);
});
bthread("fuzz:PullRequests:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyPullRequestsRejects(body_valid, bad_id, index_valid, limit_valid, owner_valid, page_valid, repo_valid, skip_to_valid, style_valid, whitespace_valid);
});
bthread("fuzz:PullRequests:index_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyPullRequestsRejects(body_valid, id_valid, bad_index, limit_valid, owner_valid, page_valid, repo_valid, skip_to_valid, style_valid, whitespace_valid);
});
bthread("fuzz:PullRequests:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyPullRequestsRejects(body_valid, id_valid, index_valid, bad_limit, owner_valid, page_valid, repo_valid, skip_to_valid, style_valid, whitespace_valid);
});
bthread("fuzz:PullRequests:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyPullRequestsRejects(body_valid, id_valid, index_valid, limit_valid, bad_owner, page_valid, repo_valid, skip_to_valid, style_valid, whitespace_valid);
});
bthread("fuzz:PullRequests:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyPullRequestsRejects(body_valid, id_valid, index_valid, limit_valid, owner_valid, bad_page, repo_valid, skip_to_valid, style_valid, whitespace_valid);
});
bthread("fuzz:PullRequests:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyPullRequestsRejects(body_valid, id_valid, index_valid, limit_valid, owner_valid, page_valid, bad_repo, skip_to_valid, style_valid, whitespace_valid);
});
bthread("fuzz:PullRequests:skip_to_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_skip_to = 12345; verifyPullRequestsRejects(body_valid, id_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid, bad_skip_to, style_valid, whitespace_valid);
});
bthread("fuzz:PullRequests:style_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_style = 12345; verifyPullRequestsRejects(body_valid, id_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid, skip_to_valid, bad_style, whitespace_valid);
});
bthread("fuzz:PullRequests:whitespace_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let skip_to_valid = "skip-to_valid_" + Math.floor(Math.random()*1000);
  let style_valid = "style_valid_" + Math.floor(Math.random()*1000);
  let whitespace_valid = "whitespace_valid_" + Math.floor(Math.random()*1000);
  let bad_whitespace = 12345; verifyPullRequestsRejects(body_valid, id_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid, skip_to_valid, style_valid, bad_whitespace);
});
bthread("fuzz:PullReviewRequests:body_InvalidType", function () {
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyPullReviewRequestsRejects(bad_body, index_valid, owner_valid, repo_valid);
});
bthread("fuzz:PullReviewRequests:index_InvalidType", function () {
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyPullReviewRequestsRejects(body_valid, bad_index, owner_valid, repo_valid);
});
bthread("fuzz:PullReviewRequests:owner_InvalidType", function () {
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyPullReviewRequestsRejects(body_valid, index_valid, bad_owner, repo_valid);
});
bthread("fuzz:PullReviewRequests:repo_InvalidType", function () {
  let body_valid = {};
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyPullReviewRequestsRejects(body_valid, index_valid, owner_valid, bad_repo);
});
bthread("fuzz:PullReviews:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyPullReviewsRejects(bad_body, id_valid, index_valid, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:PullReviews:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyPullReviewsRejects(body_valid, bad_id, index_valid, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:PullReviews:index_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyPullReviewsRejects(body_valid, id_valid, bad_index, limit_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:PullReviews:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyPullReviewsRejects(body_valid, id_valid, index_valid, bad_limit, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:PullReviews:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyPullReviewsRejects(body_valid, id_valid, index_valid, limit_valid, bad_owner, page_valid, repo_valid);
});
bthread("fuzz:PullReviews:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyPullReviewsRejects(body_valid, id_valid, index_valid, limit_valid, owner_valid, bad_page, repo_valid);
});
bthread("fuzz:PullReviews:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyPullReviewsRejects(body_valid, id_valid, index_valid, limit_valid, owner_valid, page_valid, bad_repo);
});
bthread("fuzz:PullReviewDismissals:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyPullReviewDismissalsRejects(bad_body, id_valid, index_valid, owner_valid, repo_valid);
});
bthread("fuzz:PullReviewDismissals:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyPullReviewDismissalsRejects(body_valid, bad_id, index_valid, owner_valid, repo_valid);
});
bthread("fuzz:PullReviewDismissals:index_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyPullReviewDismissalsRejects(body_valid, id_valid, bad_index, owner_valid, repo_valid);
});
bthread("fuzz:PullReviewDismissals:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyPullReviewDismissalsRejects(body_valid, id_valid, index_valid, bad_owner, repo_valid);
});
bthread("fuzz:PullReviewDismissals:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyPullReviewDismissalsRejects(body_valid, id_valid, index_valid, owner_valid, bad_repo);
});
bthread("fuzz:PullReviewUndismissals:id_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyPullReviewUndismissalsRejects(bad_id, index_valid, owner_valid, repo_valid);
});
bthread("fuzz:PullReviewUndismissals:index_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_index = "INVALID"; verifyPullReviewUndismissalsRejects(id_valid, bad_index, owner_valid, repo_valid);
});
bthread("fuzz:PullReviewUndismissals:owner_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyPullReviewUndismissalsRejects(id_valid, index_valid, bad_owner, repo_valid);
});
bthread("fuzz:PullReviewUndismissals:repo_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let index_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyPullReviewUndismissalsRejects(id_valid, index_valid, owner_valid, bad_repo);
});
bthread("fuzz:PushMirrors:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyPushMirrorsRejects(bad_id, limit_valid, name_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:PushMirrors:limit_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyPushMirrorsRejects(id_valid, bad_limit, name_valid, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:PushMirrors:name_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345; verifyPushMirrorsRejects(id_valid, limit_valid, bad_name, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:PushMirrors:owner_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyPushMirrorsRejects(id_valid, limit_valid, name_valid, bad_owner, page_valid, repo_valid);
});
bthread("fuzz:PushMirrors:page_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyPushMirrorsRejects(id_valid, limit_valid, name_valid, owner_valid, bad_page, repo_valid);
});
bthread("fuzz:PushMirrors:repo_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyPushMirrorsRejects(id_valid, limit_valid, name_valid, owner_valid, page_valid, bad_repo);
});
bthread("fuzz:Releases:body_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyReleasesRejects(bad_body, draft_valid, id_valid, limit_valid, owner_valid, page_valid, pre_release_valid, repo_valid, tag_valid);
});
bthread("fuzz:Releases:draft_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_draft = "INVALID"; verifyReleasesRejects(body_valid, bad_draft, id_valid, limit_valid, owner_valid, page_valid, pre_release_valid, repo_valid, tag_valid);
});
bthread("fuzz:Releases:id_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyReleasesRejects(body_valid, draft_valid, bad_id, limit_valid, owner_valid, page_valid, pre_release_valid, repo_valid, tag_valid);
});
bthread("fuzz:Releases:limit_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyReleasesRejects(body_valid, draft_valid, id_valid, bad_limit, owner_valid, page_valid, pre_release_valid, repo_valid, tag_valid);
});
bthread("fuzz:Releases:owner_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyReleasesRejects(body_valid, draft_valid, id_valid, limit_valid, bad_owner, page_valid, pre_release_valid, repo_valid, tag_valid);
});
bthread("fuzz:Releases:page_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyReleasesRejects(body_valid, draft_valid, id_valid, limit_valid, owner_valid, bad_page, pre_release_valid, repo_valid, tag_valid);
});
bthread("fuzz:Releases:pre_release_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_pre_release = "INVALID"; verifyReleasesRejects(body_valid, draft_valid, id_valid, limit_valid, owner_valid, page_valid, bad_pre_release, repo_valid, tag_valid);
});
bthread("fuzz:Releases:repo_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyReleasesRejects(body_valid, draft_valid, id_valid, limit_valid, owner_valid, page_valid, pre_release_valid, bad_repo, tag_valid);
});
bthread("fuzz:Releases:tag_InvalidType", function () {
  let body_valid = {};
  let draft_valid = true;
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let pre_release_valid = true;
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_tag = 12345; verifyReleasesRejects(body_valid, draft_valid, id_valid, limit_valid, owner_valid, page_valid, pre_release_valid, repo_valid, bad_tag);
});
bthread("fuzz:ReleaseAttachments:attachment_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_attachment = 12345; verifyReleaseAttachmentsRejects(bad_attachment, attachment_id_valid, body_valid, id_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:ReleaseAttachments:attachment_id_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_attachment_id = "INVALID"; verifyReleaseAttachmentsRejects(attachment_valid, bad_attachment_id, body_valid, id_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:ReleaseAttachments:body_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyReleaseAttachmentsRejects(attachment_valid, attachment_id_valid, bad_body, id_valid, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:ReleaseAttachments:id_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyReleaseAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, bad_id, name_valid, owner_valid, repo_valid);
});
bthread("fuzz:ReleaseAttachments:name_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345; verifyReleaseAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, bad_name, owner_valid, repo_valid);
});
bthread("fuzz:ReleaseAttachments:owner_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyReleaseAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, name_valid, bad_owner, repo_valid);
});
bthread("fuzz:ReleaseAttachments:repo_InvalidType", function () {
  let attachment_valid = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_valid = Math.floor(Math.random() * 1000);
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyReleaseAttachmentsRejects(attachment_valid, attachment_id_valid, body_valid, id_valid, name_valid, owner_valid, bad_repo);
});
bthread("fuzz:TagProtections:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyTagProtectionsRejects(bad_body, id_valid, owner_valid, repo_valid);
});
bthread("fuzz:TagProtections:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID"; verifyTagProtectionsRejects(body_valid, bad_id, owner_valid, repo_valid);
});
bthread("fuzz:TagProtections:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyTagProtectionsRejects(body_valid, id_valid, bad_owner, repo_valid);
});
bthread("fuzz:TagProtections:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyTagProtectionsRejects(body_valid, id_valid, owner_valid, bad_repo);
});
bthread("fuzz:Tags:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyTagsRejects(bad_body, id_valid, limit_valid, owner_valid, page_valid, repo_valid, tag_valid);
});
bthread("fuzz:Tags:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyTagsRejects(body_valid, bad_id, limit_valid, owner_valid, page_valid, repo_valid, tag_valid);
});
bthread("fuzz:Tags:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyTagsRejects(body_valid, id_valid, bad_limit, owner_valid, page_valid, repo_valid, tag_valid);
});
bthread("fuzz:Tags:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyTagsRejects(body_valid, id_valid, limit_valid, bad_owner, page_valid, repo_valid, tag_valid);
});
bthread("fuzz:Tags:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyTagsRejects(body_valid, id_valid, limit_valid, owner_valid, bad_page, repo_valid, tag_valid);
});
bthread("fuzz:Tags:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyTagsRejects(body_valid, id_valid, limit_valid, owner_valid, page_valid, bad_repo, tag_valid);
});
bthread("fuzz:Tags:tag_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let tag_valid = "tag_valid_" + Math.floor(Math.random()*1000);
  let bad_tag = 12345; verifyTagsRejects(body_valid, id_valid, limit_valid, owner_valid, page_valid, repo_valid, bad_tag);
});
bthread("fuzz:Topics:body_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let topic_valid = "topic_valid_" + Math.floor(Math.random()*1000);
  let topic1_valid = "topic1_valid_" + Math.floor(Math.random()*1000);
  let topic2_valid = "topic2_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyTopicsRejects(bad_body, limit_valid, owner_valid, page_valid, q_valid, repo_valid, topic_valid, topic1_valid, topic2_valid);
});
bthread("fuzz:Topics:limit_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let topic_valid = "topic_valid_" + Math.floor(Math.random()*1000);
  let topic1_valid = "topic1_valid_" + Math.floor(Math.random()*1000);
  let topic2_valid = "topic2_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyTopicsRejects(body_valid, bad_limit, owner_valid, page_valid, q_valid, repo_valid, topic_valid, topic1_valid, topic2_valid);
});
bthread("fuzz:Topics:owner_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let topic_valid = "topic_valid_" + Math.floor(Math.random()*1000);
  let topic1_valid = "topic1_valid_" + Math.floor(Math.random()*1000);
  let topic2_valid = "topic2_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyTopicsRejects(body_valid, limit_valid, bad_owner, page_valid, q_valid, repo_valid, topic_valid, topic1_valid, topic2_valid);
});
bthread("fuzz:Topics:page_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let topic_valid = "topic_valid_" + Math.floor(Math.random()*1000);
  let topic1_valid = "topic1_valid_" + Math.floor(Math.random()*1000);
  let topic2_valid = "topic2_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyTopicsRejects(body_valid, limit_valid, owner_valid, bad_page, q_valid, repo_valid, topic_valid, topic1_valid, topic2_valid);
});
bthread("fuzz:Topics:q_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let topic_valid = "topic_valid_" + Math.floor(Math.random()*1000);
  let topic1_valid = "topic1_valid_" + Math.floor(Math.random()*1000);
  let topic2_valid = "topic2_valid_" + Math.floor(Math.random()*1000);
  let bad_q = 12345; verifyTopicsRejects(body_valid, limit_valid, owner_valid, page_valid, bad_q, repo_valid, topic_valid, topic1_valid, topic2_valid);
});
bthread("fuzz:Topics:repo_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let topic_valid = "topic_valid_" + Math.floor(Math.random()*1000);
  let topic1_valid = "topic1_valid_" + Math.floor(Math.random()*1000);
  let topic2_valid = "topic2_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyTopicsRejects(body_valid, limit_valid, owner_valid, page_valid, q_valid, bad_repo, topic_valid, topic1_valid, topic2_valid);
});
bthread("fuzz:Topics:topic_InvalidType", function () {
  let body_valid = {};
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let topic_valid = "topic_valid_" + Math.floor(Math.random()*1000);
  let topic1_valid = "topic1_valid_" + Math.floor(Math.random()*1000);
  let topic2_valid = "topic2_valid_" + Math.floor(Math.random()*1000);
  let bad_topic = 12345; verifyTopicsRejects(body_valid, limit_valid, owner_valid, page_valid, q_valid, repo_valid, bad_topic, topic1_valid, topic2_valid);
});
bthread("fuzz:RepositoryTransfer:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let transferOptions_valid = "transferOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyRepositoryTransferRejects(bad_body, id_valid, owner_valid, repo_valid, transferOptions_valid);
});
bthread("fuzz:RepositoryTransfer:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let transferOptions_valid = "transferOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyRepositoryTransferRejects(body_valid, bad_id, owner_valid, repo_valid, transferOptions_valid);
});
bthread("fuzz:RepositoryTransfer:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let transferOptions_valid = "transferOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyRepositoryTransferRejects(body_valid, id_valid, bad_owner, repo_valid, transferOptions_valid);
});
bthread("fuzz:RepositoryTransfer:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let transferOptions_valid = "transferOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyRepositoryTransferRejects(body_valid, id_valid, owner_valid, bad_repo, transferOptions_valid);
});
bthread("fuzz:WikiPage:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let pageName_valid = "pageName_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_valid = "wikiPageOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyWikiPageRejects(bad_body, id_valid, owner_valid, pageName_valid, repo_valid, wikiPageOptions_valid);
});
bthread("fuzz:WikiPage:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let pageName_valid = "pageName_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_valid = "wikiPageOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyWikiPageRejects(body_valid, bad_id, owner_valid, pageName_valid, repo_valid, wikiPageOptions_valid);
});
bthread("fuzz:WikiPage:owner_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let pageName_valid = "pageName_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_valid = "wikiPageOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyWikiPageRejects(body_valid, id_valid, bad_owner, pageName_valid, repo_valid, wikiPageOptions_valid);
});
bthread("fuzz:WikiPage:pageName_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let pageName_valid = "pageName_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_valid = "wikiPageOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_pageName = 12345; verifyWikiPageRejects(body_valid, id_valid, owner_valid, bad_pageName, repo_valid, wikiPageOptions_valid);
});
bthread("fuzz:WikiPage:repo_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let pageName_valid = "pageName_valid_" + Math.floor(Math.random()*1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_valid = "wikiPageOptions_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyWikiPageRejects(body_valid, id_valid, owner_valid, pageName_valid, bad_repo, wikiPageOptions_valid);
});
bthread("fuzz:TeamMembers:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyTeamMembersRejects(bad_id, limit_valid, page_valid, username_valid);
});
bthread("fuzz:TeamMembers:limit_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyTeamMembersRejects(id_valid, bad_limit, page_valid, username_valid);
});
bthread("fuzz:TeamMembers:page_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyTeamMembersRejects(id_valid, limit_valid, bad_page, username_valid);
});
bthread("fuzz:TeamMembers:username_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = 12345; verifyTeamMembersRejects(id_valid, limit_valid, page_valid, bad_username);
});
bthread("fuzz:TeamRepos:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyTeamReposRejects(bad_id, limit_valid, org_valid, page_valid, repo_valid);
});
bthread("fuzz:TeamRepos:limit_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyTeamReposRejects(id_valid, bad_limit, org_valid, page_valid, repo_valid);
});
bthread("fuzz:TeamRepos:org_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_org = 12345; verifyTeamReposRejects(id_valid, limit_valid, bad_org, page_valid, repo_valid);
});
bthread("fuzz:TeamRepos:page_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyTeamReposRejects(id_valid, limit_valid, org_valid, bad_page, repo_valid);
});
bthread("fuzz:TeamRepos:repo_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let org_valid = "org_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyTeamReposRejects(id_valid, limit_valid, org_valid, page_valid, bad_repo);
});
bthread("fuzz:UserVariables:body_InvalidType", function () {
  let body_valid = {};
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyUserVariablesRejects(bad_body, variablename_valid);
});
bthread("fuzz:UserVariables:variablename_InvalidType", function () {
  let body_valid = {};
  let variablename_valid = "variablename_valid_" + Math.floor(Math.random()*1000);
  let bad_variablename = 12345; verifyUserVariablesRejects(body_valid, bad_variablename);
});
bthread("fuzz:OAuth2Applications:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_body = 12345; verifyOAuth2ApplicationsRejects(bad_body, id_valid, limit_valid, page_valid);
});
bthread("fuzz:OAuth2Applications:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_id = "INVALID"; verifyOAuth2ApplicationsRejects(body_valid, bad_id, limit_valid, page_valid);
});
bthread("fuzz:OAuth2Applications:limit_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_limit = "INVALID"; verifyOAuth2ApplicationsRejects(body_valid, id_valid, bad_limit, page_valid);
});
bthread("fuzz:OAuth2Applications:page_InvalidType", function () {
  let body_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_page = "INVALID"; verifyOAuth2ApplicationsRejects(body_valid, id_valid, limit_valid, bad_page);
});
bthread("fuzz:UserAvatar:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyUserAvatarRejects(bad_body, id_valid);
});
bthread("fuzz:UserAvatar:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyUserAvatarRejects(body_valid, bad_id);
});
bthread("fuzz:UserEmails:body_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_body = 12345; verifyUserEmailsRejects(bad_body, id_valid);
});
bthread("fuzz:UserEmails:id_InvalidType", function () {
  let body_valid = {};
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyUserEmailsRejects(body_valid, bad_id);
});
bthread("fuzz:GPGKeys:Form_InvalidType", function () {
  let Form_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_Form = 12345; verifyGPGKeysRejects(bad_Form, id_valid, limit_valid, page_valid);
});
bthread("fuzz:GPGKeys:id_InvalidType", function () {
  let Form_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_id = "INVALID"; verifyGPGKeysRejects(Form_valid, bad_id, limit_valid, page_valid);
});
bthread("fuzz:GPGKeys:limit_InvalidType", function () {
  let Form_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_limit = "INVALID"; verifyGPGKeysRejects(Form_valid, id_valid, bad_limit, page_valid);
});
bthread("fuzz:GPGKeys:page_InvalidType", function () {
  let Form_valid = {};
  let id_valid = Math.floor(Math.random() * 1000);
  let limit_valid = Math.floor(Math.random() * 1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let bad_page = "INVALID"; verifyGPGKeysRejects(Form_valid, id_valid, limit_valid, bad_page);
});
bthread("fuzz:GPGKeyVerification:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345; verifyGPGKeyVerificationRejects(bad_id);
});
bthread("fuzz:UserStarred:limit_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_limit = "INVALID"; verifyUserStarredRejects(bad_limit, owner_valid, page_valid, repo_valid);
});
bthread("fuzz:UserStarred:owner_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_owner = 12345; verifyUserStarredRejects(limit_valid, bad_owner, page_valid, repo_valid);
});
bthread("fuzz:UserStarred:page_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_page = "INVALID"; verifyUserStarredRejects(limit_valid, owner_valid, bad_page, repo_valid);
});
bthread("fuzz:UserStarred:repo_InvalidType", function () {
  let limit_valid = Math.floor(Math.random() * 1000);
  let owner_valid = "owner_valid_" + Math.floor(Math.random()*1000);
  let page_valid = Math.floor(Math.random() * 1000);
  let repo_valid = "repo_valid_" + Math.floor(Math.random()*1000);
  let bad_repo = 12345; verifyUserStarredRejects(limit_valid, owner_valid, page_valid, bad_repo);
});