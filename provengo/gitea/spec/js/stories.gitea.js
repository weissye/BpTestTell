// Auto-generated stories for gitea
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);
    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// --- Monitors [RESTORED] ---
bthread("monitor:ActivityPub:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyActivityPubAdded() });
    let idVal = e.data.user_id || e.data.id;
    verifyActivityPubExists(idVal);
  } });

bthread("monitor:AdminCron:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAdminCronAdded() });
    let idVal = e.data.id || e.data.id;
    verifyAdminCronExists(idVal);
  } });

bthread("monitor:Hooks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyHooksAdded() });
    let idVal = e.data.id || e.data.id;
    verifyHooksExists(idVal);
  } });

bthread("monitor:UnadoptedRepositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUnadoptedRepositoriesAdded() });
    let idVal = e.data.owner || e.data.id;
    verifyUnadoptedRepositoriesExists(idVal);
  } });

bthread("monitor:Users:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let idVal = e.data.username || e.data.id;
    verifyUsersExists(idVal);
  } });

bthread("monitor:UserBadges:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserBadgesAdded() });
    let idVal = e.data.username || e.data.id;
    verifyUserBadgesExists(idVal);
  } });

bthread("monitor:UserKeys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserKeysAdded() });
    let idVal = e.data.username || e.data.id;
    verifyUserKeysExists(idVal);
  } });

bthread("monitor:UserOrganizations:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserOrganizationsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyUserOrganizationsExists(idVal);
  } });

bthread("monitor:UserRename:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserRenameAdded() });
    let idVal = e.data.id || e.data.id;
    verifyUserRenameExists(idVal);
  } });

bthread("monitor:UserRepositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserRepositoriesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyUserRepositoriesExists(idVal);
  } });

bthread("monitor:Markdown:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMarkdownAdded() });
    let idVal = e.data.id || e.data.id;
    verifyMarkdownExists(idVal);
  } });

bthread("monitor:Markup:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMarkupAdded() });
    let idVal = e.data.id || e.data.id;
    verifyMarkupExists(idVal);
  } });

bthread("monitor:Organization:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationAdded() });
    let idVal = e.data.org || e.data.id;
    verifyOrganizationExists(idVal);
  } });

bthread("monitor:OrgVariables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrgVariablesAdded() });
    let idVal = e.data.org || e.data.id;
    verifyOrgVariablesExists(idVal);
  } });

bthread("monitor:OrgAvatar:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrgAvatarAdded() });
    let idVal = e.data.org || e.data.id;
    verifyOrgAvatarExists(idVal);
  } });

bthread("monitor:Labels:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLabelsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyLabelsExists(idVal);
  } });

bthread("monitor:OrganizationRepos:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationReposAdded() });
    let idVal = e.data.id || e.data.id;
    verifyOrganizationReposExists(idVal);
  } });

bthread("monitor:OrganizationTeams:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationTeamsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyOrganizationTeamsExists(idVal);
  } });

bthread("monitor:Issues:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssuesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssuesExists(idVal);
  } });

bthread("monitor:Repository:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryAdded() });
    let idVal = e.data.id || e.data.id;
    verifyRepositoryExists(idVal);
  } });

bthread("monitor:Variables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyVariablesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyVariablesExists(idVal);
  } });

bthread("monitor:Branches:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBranchesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyBranchesExists(idVal);
  } });

bthread("monitor:Collaborators:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCollaboratorsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyCollaboratorsExists(idVal);
  } });

bthread("monitor:Repositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoriesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyRepositoriesExists(idVal);
  } });

bthread("monitor:Forks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyForksAdded() });
    let idVal = e.data.id || e.data.id;
    verifyForksExists(idVal);
  } });

bthread("monitor:IssueComments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssueCommentsExists(idVal);
  } });

bthread("monitor:IssueCommentAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentAttachmentsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssueCommentAttachmentsExists(idVal);
  } });

bthread("monitor:IssueCommentReactions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentReactionsAdded() });
    let idVal = e.data.owner || e.data.id;
    verifyIssueCommentReactionsExists(idVal);
  } });

bthread("monitor:IssueAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAttachmentsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssueAttachmentsExists(idVal);
  } });

bthread("monitor:IssueBlocks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueBlocksAdded() });
    let idVal = e.data.owner || e.data.id;
    verifyIssueBlocksExists(idVal);
  } });

bthread("monitor:IssueSubscriptions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueSubscriptionsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssueSubscriptionsExists(idVal);
  } });

bthread("monitor:IssueTimes:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueTimesAdded() });
    let idVal = e.data.owner || e.data.id;
    verifyIssueTimesExists(idVal);
  } });

bthread("monitor:RepositoryKeys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryKeysAdded() });
    let idVal = e.data.id || e.data.id;
    verifyRepositoryKeysExists(idVal);
  } });

bthread("monitor:Issue:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssueExists(idVal);
  } });

bthread("monitor:MirrorSync:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMirrorSyncAdded() });
    let idVal = e.data.id || e.data.id;
    verifyMirrorSyncExists(idVal);
  } });

bthread("monitor:PullRequests:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullRequestsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyPullRequestsExists(idVal);
  } });

bthread("monitor:PullReviewRequests:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewRequestsAdded() });
    let idVal = e.data.owner || e.data.id;
    verifyPullReviewRequestsExists(idVal);
  } });

bthread("monitor:PullReviews:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyPullReviewsExists(idVal);
  } });

bthread("monitor:PullReviewDismissals:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewDismissalsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyPullReviewDismissalsExists(idVal);
  } });

bthread("monitor:PullReviewUndismissals:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewUndismissalsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyPullReviewUndismissalsExists(idVal);
  } });

bthread("monitor:PullRequestUpdate:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullRequestUpdateAdded() });
    let idVal = e.data.id || e.data.id;
    verifyPullRequestUpdateExists(idVal);
  } });

bthread("monitor:PushMirrors:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPushMirrorsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyPushMirrorsExists(idVal);
  } });

bthread("monitor:Releases:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleasesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyReleasesExists(idVal);
  } });

bthread("monitor:ReleaseAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleaseAttachmentsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyReleaseAttachmentsExists(idVal);
  } });

bthread("monitor:TagProtections:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTagProtectionsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyTagProtectionsExists(idVal);
  } });

bthread("monitor:Tags:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTagsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyTagsExists(idVal);
  } });

bthread("monitor:Topics:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTopicsAdded() });
    let idVal = e.data.owner || e.data.id;
    verifyTopicsExists(idVal);
  } });

bthread("monitor:RepositoryTransfer:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryTransferAdded() });
    let idVal = e.data.id || e.data.id;
    verifyRepositoryTransferExists(idVal);
  } });

bthread("monitor:WikiPage:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWikiPageAdded() });
    let idVal = e.data.id || e.data.id;
    verifyWikiPageExists(idVal);
  } });

bthread("monitor:TeamMembers:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamMembersAdded() });
    let idVal = e.data.id || e.data.id;
    verifyTeamMembersExists(idVal);
  } });

bthread("monitor:TeamRepos:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamReposAdded() });
    let idVal = e.data.id || e.data.id;
    verifyTeamReposExists(idVal);
  } });

bthread("monitor:UserVariables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserVariablesAdded() });
    let idVal = e.data.variablename || e.data.id;
    verifyUserVariablesExists(idVal);
  } });

bthread("monitor:OAuth2Applications:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOAuth2ApplicationsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyOAuth2ApplicationsExists(idVal);
  } });

bthread("monitor:UserAvatar:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserAvatarAdded() });
    let idVal = e.data.id || e.data.id;
    verifyUserAvatarExists(idVal);
  } });

bthread("monitor:UserEmails:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserEmailsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyUserEmailsExists(idVal);
  } });

bthread("monitor:GPGKeys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGPGKeysAdded() });
    let idVal = e.data.id || e.data.id;
    verifyGPGKeysExists(idVal);
  } });

bthread("monitor:GPGKeyVerification:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGPGKeyVerificationAdded() });
    let idVal = e.data.id || e.data.id;
    verifyGPGKeyVerificationExists(idVal);
  } });

bthread("monitor:Keys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyKeysAdded() });
    let idVal = e.data.id || e.data.id;
    verifyKeysExists(idVal);
  } });

bthread("monitor:UserStarred:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserStarredAdded() });
    let idVal = e.data.owner || e.data.id;
    verifyUserStarredExists(idVal);
  } });

bthread("crud:ActivityPub:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating ActivityPub
  let user_id_ActivityPub_100 = UsersId;
  activitypubPersonInbox(user_id_ActivityPub_100, { expectedResponseCodes: [200, 201, 204] });

  verifyActivityPubExists(user_id_ActivityPub_100);
  verifyActivityPubExists(user_id_ActivityPub_100);
});

bthread("crud:AdminCron:linear:1", function () {
  // -> Creating AdminCron
  let id_AdminCron_110 = 110 + Math.floor(Math.random() * 99);
  let limit_AdminCron_110 = 110 + Math.floor(Math.random() * 99);
  let page_AdminCron_110 = 110 + Math.floor(Math.random() * 99);
  let task_AdminCron_110 = "task_AdminCron_110_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_110, limit_AdminCron_110, page_AdminCron_110, task_AdminCron_110, { expectedResponseCodes: [200, 201, 204] });

  verifyAdminCronExists(id_AdminCron_110);
  verifyAdminCronExists(id_AdminCron_110);
});

bthread("crud:Hooks:linear:1", function () {
  // -> Creating Hooks
  let EditHookOption_Hooks_120 = "EditHookOption_Hooks_120_" + Math.floor(Math.random()*1000);
  let body_Hooks_120 = { "id": 1, "name": "body_Hooks_120_obj" };
  let id_Hooks_120 = 120 + Math.floor(Math.random() * 99);
  let limit_Hooks_120 = 120 + Math.floor(Math.random() * 99);
  let page_Hooks_120 = 120 + Math.floor(Math.random() * 99);
  userCreateHook(EditHookOption_Hooks_120, body_Hooks_120, id_Hooks_120, limit_Hooks_120, page_Hooks_120, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_120);
  // -> Updating Hooks
  let EditHookOption_Hooks_upd_120 = "EditHookOption_Hooks_upd_120_" + Math.floor(Math.random()*1000);
  let body_Hooks_upd_120 = { "id": 1, "name": "body_Hooks_upd_120_obj" };
  let id_Hooks_upd_120 = id_Hooks_120;
  let limit_Hooks_upd_120 = 120 + Math.floor(Math.random() * 99);
  let page_Hooks_upd_120 = 120 + Math.floor(Math.random() * 99);
  userEditHook(EditHookOption_Hooks_upd_120, body_Hooks_upd_120, id_Hooks_upd_120, limit_Hooks_upd_120, page_Hooks_upd_120, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_120);
  // -> Deleting Leaf Hooks (Standard)
  userDeleteHook(id_Hooks_120);
  verifyHooksDoesNotExist(id_Hooks_120);

});

bthread("crud:UnadoptedRepositories:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_130 = 130 + Math.floor(Math.random() * 99);
  let owner_UnadoptedRepositories_130 = "owner_UnadoptedRepositories_130";
  let page_UnadoptedRepositories_130 = 130 + Math.floor(Math.random() * 99);
  let pattern_UnadoptedRepositories_130 = "pattern_UnadoptedRepositories_130_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_130 = "repo_UnadoptedRepositories_130_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_130, owner_UnadoptedRepositories_130, page_UnadoptedRepositories_130, pattern_UnadoptedRepositories_130, repo_UnadoptedRepositories_130, { expectedResponseCodes: [200, 201, 204] });

  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_130);
  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_130);
  // -> Deleting Leaf UnadoptedRepositories (Standard)
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_130, repo_UnadoptedRepositories_130);
  verifyUnadoptedRepositoriesDoesNotExist(owner_UnadoptedRepositories_130);

});

bthread("crud:Users:linear:1", function () {
  // -> Creating Users
  let CreateUserOption_Users_140 = "CreateUserOption_Users_140_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_140 = "EditUserOption_Users_140_" + Math.floor(Math.random()*1000);
  let body_Users_140 = { "id": 1, "name": "body_Users_140_obj" };
  let limit_Users_140 = 140 + Math.floor(Math.random() * 99);
  let page_Users_140 = 140 + Math.floor(Math.random() * 99);
  let purge_Users_140 = true;
  let token_Users_140 = "token_Users_140_" + Math.floor(Math.random()*1000);
  let username_Users_140 = "username_Users_140";
  adminCreateUser(CreateUserOption_Users_140, EditUserOption_Users_140, body_Users_140, limit_Users_140, page_Users_140, purge_Users_140, token_Users_140, username_Users_140, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_140);
  // -> Updating Users
  let CreateUserOption_Users_upd_140 = "CreateUserOption_Users_upd_140_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_upd_140 = "EditUserOption_Users_upd_140_" + Math.floor(Math.random()*1000);
  let body_Users_upd_140 = { "id": 1, "name": "body_Users_upd_140_obj" };
  let limit_Users_upd_140 = 140 + Math.floor(Math.random() * 99);
  let page_Users_upd_140 = 140 + Math.floor(Math.random() * 99);
  let purge_Users_upd_140 = true;
  let token_Users_upd_140 = "token_Users_upd_140_" + Math.floor(Math.random()*1000);
  let username_Users_upd_140 = username_Users_140;
  adminEditUser(CreateUserOption_Users_upd_140, EditUserOption_Users_upd_140, body_Users_upd_140, limit_Users_upd_140, page_Users_upd_140, purge_Users_upd_140, token_Users_upd_140, username_Users_upd_140, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_140);
  // -> Deleting Parent Users (Relational Intent Race)
  adminDeleteUser(username_Users_140);

});

bthread("crud:UserBadges:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_150 = "UserBadgeOption_UserBadges_150_" + Math.floor(Math.random()*1000);
  let body_UserBadges_150 = { "id": 1, "name": "body_UserBadges_150_obj" };
  let username_UserBadges_150 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_150, body_UserBadges_150, username_UserBadges_150, { expectedResponseCodes: [200, 201, 204] });

  verifyUserBadgesExists(username_UserBadges_150);
  verifyUserBadgesExists(username_UserBadges_150);
  // -> Deleting Leaf UserBadges (Standard)
  adminDeleteUserBadges(username_UserBadges_150);
  verifyUserBadgesDoesNotExist(username_UserBadges_150);

});

bthread("crud:UserKeys:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserKeys
  let key_UserKeys_160 = "key_UserKeys_160_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_160 = "purge_UserKeys_160_" + Math.floor(Math.random()*1000);
  let username_UserKeys_160 = UsersId;
  adminCreatePublicKey(key_UserKeys_160, purge_UserKeys_160, username_UserKeys_160, { expectedResponseCodes: [200, 201, 204] });

  verifyUserKeysExists(username_UserKeys_160);
  verifyUserKeysExists(username_UserKeys_160);
  // -> Deleting Leaf UserKeys (Standard)
  adminDeleteUser(username_UserKeys_160);
  verifyUserKeysDoesNotExist(username_UserKeys_160);

});

bthread("crud:UserOrganizations:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Users": "username", "Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let OrganizationId = captured["Organization"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_170 = 170 + Math.floor(Math.random() * 99);
  let organization_UserOrganizations_170 = "organization_UserOrganizations_170_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_170 = UsersId;
  adminCreateOrg(id_UserOrganizations_170, organization_UserOrganizations_170, username_UserOrganizations_170, { expectedResponseCodes: [200, 201, 204] });

  verifyUserOrganizationsExists(id_UserOrganizations_170);
  verifyUserOrganizationsExists(id_UserOrganizations_170);
});

bthread("crud:UserRename:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_180 = "body_UserRename_180_" + Math.floor(Math.random()*1000);
  let id_UserRename_180 = 180 + Math.floor(Math.random() * 99);
  let username_UserRename_180 = UsersId;
  adminRenameUser(body_UserRename_180, id_UserRename_180, username_UserRename_180, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRenameExists(id_UserRename_180);
  verifyUserRenameExists(id_UserRename_180);
});

bthread("crud:UserRepositories:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_190 = 190 + Math.floor(Math.random() * 99);
  let repository_UserRepositories_190 = "repository_UserRepositories_190_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_190 = UsersId;
  adminCreateRepo(id_UserRepositories_190, repository_UserRepositories_190, username_UserRepositories_190, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRepositoriesExists(id_UserRepositories_190);
  verifyUserRepositoriesExists(id_UserRepositories_190);
});

bthread("crud:Markdown:linear:1", function () {
  // -> Creating Markdown
  let body_Markdown_200 = "body_Markdown_200_" + Math.floor(Math.random()*1000);
  let id_Markdown_200 = 200 + Math.floor(Math.random() * 99);
  renderMarkdown(body_Markdown_200, id_Markdown_200, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkdownExists(id_Markdown_200);
  verifyMarkdownExists(id_Markdown_200);
});

bthread("crud:Markup:linear:1", function () {
  // -> Creating Markup
  let body_Markup_210 = { "id": 1, "name": "body_Markup_210_obj" };
  let id_Markup_210 = 210 + Math.floor(Math.random() * 99);
  renderMarkup(body_Markup_210, id_Markup_210, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkupExists(id_Markup_210);
  verifyMarkupExists(id_Markup_210);
});

bthread("crud:Organization:linear:1", function () {
  // -> Creating Organization
  let body_Organization_220 = { "id": 1, "name": "body_Organization_220_obj" };
  let limit_Organization_220 = 220 + Math.floor(Math.random() * 99);
  let org_Organization_220 = "org_Organization_220";
  let organization_Organization_220 = { "id": 1, "name": "organization_Organization_220_obj" };
  let page_Organization_220 = 220 + Math.floor(Math.random() * 99);
  let secretname_Organization_220 = "secretname_Organization_220_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_220, limit_Organization_220, org_Organization_220, organization_Organization_220, page_Organization_220, secretname_Organization_220, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_220);
  // -> Updating Organization
  let body_Organization_upd_220 = { "id": 1, "name": "body_Organization_upd_220_obj" };
  let limit_Organization_upd_220 = 220 + Math.floor(Math.random() * 99);
  let org_Organization_upd_220 = org_Organization_220;
  let organization_Organization_upd_220 = { "id": 1, "name": "organization_Organization_upd_220_obj" };
  let page_Organization_upd_220 = 220 + Math.floor(Math.random() * 99);
  let secretname_Organization_upd_220 = "secretname_Organization_upd_220_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_220, limit_Organization_upd_220, org_Organization_upd_220, organization_Organization_upd_220, page_Organization_upd_220, secretname_Organization_upd_220, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_220);
  // -> Deleting Parent Organization (Relational Intent Race)
  orgDelete(org_Organization_220);

});

bthread("crud:OrgVariables:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrgVariables
  let body_OrgVariables_230 = "body_OrgVariables_230_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_230 = OrganizationId;
  let variablename_OrgVariables_230 = "variablename_OrgVariables_230_" + Math.floor(Math.random()*1000);
  createOrgVariable(body_OrgVariables_230, org_OrgVariables_230, variablename_OrgVariables_230, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_230);
  // -> Updating OrgVariables
  let body_OrgVariables_upd_230 = "body_OrgVariables_upd_230_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_upd_230 = org_OrgVariables_230;
  let variablename_OrgVariables_upd_230 = "variablename_OrgVariables_upd_230_" + Math.floor(Math.random()*1000);
  orgEdit(body_OrgVariables_upd_230, org_OrgVariables_upd_230, variablename_OrgVariables_upd_230, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_230);
  // -> Deleting Leaf OrgVariables (Standard)
  orgDelete(org_OrgVariables_230);
  verifyOrgVariablesDoesNotExist(org_OrgVariables_230);

});

bthread("crud:OrgAvatar:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrgAvatar
  let body_OrgAvatar_240 = { "id": 1, "name": "body_OrgAvatar_240_obj" };
  let org_OrgAvatar_240 = OrganizationId;
  orgUpdateAvatar(body_OrgAvatar_240, org_OrgAvatar_240, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgAvatarExists(org_OrgAvatar_240);
  verifyOrgAvatarExists(org_OrgAvatar_240);
  // -> Deleting Leaf OrgAvatar (Standard)
  orgDeleteAvatar(org_OrgAvatar_240);
  verifyOrgAvatarDoesNotExist(org_OrgAvatar_240);

});

bthread("crud:Labels:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Labels
  let body_Labels_250 = { "id": 1, "name": "body_Labels_250_obj" };
  let id_Labels_250 = RepositoryId;
  let limit_Labels_250 = 250 + Math.floor(Math.random() * 99);
  let owner_Labels_250 = "owner_Labels_250_" + Math.floor(Math.random()*1000);
  let page_Labels_250 = 250 + Math.floor(Math.random() * 99);
  let repo_Labels_250 = "repo_Labels_250_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_250, id_Labels_250, limit_Labels_250, owner_Labels_250, page_Labels_250, repo_Labels_250, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_250);
  // -> Updating Labels
  let body_Labels_upd_250 = { "id": 1, "name": "body_Labels_upd_250_obj" };
  let id_Labels_upd_250 = id_Labels_250;
  let limit_Labels_upd_250 = 250 + Math.floor(Math.random() * 99);
  let owner_Labels_upd_250 = "owner_Labels_upd_250_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_250 = 250 + Math.floor(Math.random() * 99);
  let repo_Labels_upd_250 = "repo_Labels_upd_250_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_250, id_Labels_upd_250, limit_Labels_upd_250, owner_Labels_upd_250, page_Labels_upd_250, repo_Labels_upd_250, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_250);
  // -> Deleting Leaf Labels (Standard)
  issueDeleteLabel(owner_Labels_250, repo_Labels_250, id_Labels_250);
  verifyLabelsDoesNotExist(id_Labels_250);

});

bthread("crud:OrganizationRepos:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_260 = { "id": 1, "name": "body_OrganizationRepos_260_obj" };
  let id_OrganizationRepos_260 = 260 + Math.floor(Math.random() * 99);
  let limit_OrganizationRepos_260 = 260 + Math.floor(Math.random() * 99);
  let org_OrganizationRepos_260 = OrganizationId;
  let page_OrganizationRepos_260 = 260 + Math.floor(Math.random() * 99);
  createOrgRepo(body_OrganizationRepos_260, id_OrganizationRepos_260, limit_OrganizationRepos_260, org_OrganizationRepos_260, page_OrganizationRepos_260, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationReposExists(id_OrganizationRepos_260);
  verifyOrganizationReposExists(id_OrganizationRepos_260);
});

bthread("crud:OrganizationTeams:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_270 = { "id": 1, "name": "body_OrganizationTeams_270_obj" };
  let id_OrganizationTeams_270 = 270 + Math.floor(Math.random() * 99);
  let limit_OrganizationTeams_270 = 270 + Math.floor(Math.random() * 99);
  let org_OrganizationTeams_270 = OrganizationId;
  let page_OrganizationTeams_270 = 270 + Math.floor(Math.random() * 99);
  orgCreateTeam(body_OrganizationTeams_270, id_OrganizationTeams_270, limit_OrganizationTeams_270, org_OrganizationTeams_270, page_OrganizationTeams_270, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationTeamsExists(id_OrganizationTeams_270);
  verifyOrganizationTeamsExists(id_OrganizationTeams_270);
});

bthread("crud:Issues:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issues
  let body_Issues_280 = { "id": 1, "name": "body_Issues_280_obj" };
  let content_Issues_280 = { "id": 1, "name": "content_Issues_280_obj" };
  let id_Issues_280 = RepositoryId;
  let index_Issues_280 = 280 + Math.floor(Math.random() * 99);
  let limit_Issues_280 = 280 + Math.floor(Math.random() * 99);
  let owner_Issues_280 = "owner_Issues_280_" + Math.floor(Math.random()*1000);
  let page_Issues_280 = 280 + Math.floor(Math.random() * 99);
  let position_Issues_280 = 280 + Math.floor(Math.random() * 99);
  let repo_Issues_280 = "repo_Issues_280_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(body_Issues_280, content_Issues_280, id_Issues_280, index_Issues_280, limit_Issues_280, owner_Issues_280, page_Issues_280, position_Issues_280, repo_Issues_280, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_280);
  // -> Updating Issues
  let body_Issues_upd_280 = { "id": 1, "name": "body_Issues_upd_280_obj" };
  let content_Issues_upd_280 = { "id": 1, "name": "content_Issues_upd_280_obj" };
  let id_Issues_upd_280 = id_Issues_280;
  let index_Issues_upd_280 = 280 + Math.floor(Math.random() * 99);
  let limit_Issues_upd_280 = 280 + Math.floor(Math.random() * 99);
  let owner_Issues_upd_280 = "owner_Issues_upd_280_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_280 = 280 + Math.floor(Math.random() * 99);
  let position_Issues_upd_280 = 280 + Math.floor(Math.random() * 99);
  let repo_Issues_upd_280 = "repo_Issues_upd_280_" + Math.floor(Math.random()*1000);
  moveIssuePin(body_Issues_upd_280, content_Issues_upd_280, id_Issues_upd_280, index_Issues_upd_280, limit_Issues_upd_280, owner_Issues_upd_280, page_Issues_upd_280, position_Issues_upd_280, repo_Issues_upd_280, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_280);
  // -> Deleting Parent Issues (Relational Intent Race)
  issueDeleteTime(owner_Issues_280, repo_Issues_280, index_Issues_280, id_Issues_280);

});

bthread("crud:Repository:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repository
  let EditRepoOption_Repository_290 = "EditRepoOption_Repository_290_" + Math.floor(Math.random()*1000);
  let body_Repository_290 = { "id": 1, "name": "body_Repository_290_obj" };
  let id_Repository_290 = 290 + Math.floor(Math.random() * 99);
  let limit_Repository_290 = 290 + Math.floor(Math.random() * 99);
  let owner_Repository_290 = "owner_Repository_290_" + Math.floor(Math.random()*1000);
  let page_Repository_290 = 290 + Math.floor(Math.random() * 99);
  let repo_Repository_290 = "repo_Repository_290_" + Math.floor(Math.random()*1000);
  repoMergeUpstream(EditRepoOption_Repository_290, body_Repository_290, id_Repository_290, limit_Repository_290, owner_Repository_290, page_Repository_290, repo_Repository_290, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_290);
  // -> Updating Repository
  let EditRepoOption_Repository_upd_290 = "EditRepoOption_Repository_upd_290_" + Math.floor(Math.random()*1000);
  let body_Repository_upd_290 = { "id": 1, "name": "body_Repository_upd_290_obj" };
  let id_Repository_upd_290 = id_Repository_290;
  let limit_Repository_upd_290 = 290 + Math.floor(Math.random() * 99);
  let owner_Repository_upd_290 = "owner_Repository_upd_290_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_290 = 290 + Math.floor(Math.random() * 99);
  let repo_Repository_upd_290 = "repo_Repository_upd_290_" + Math.floor(Math.random()*1000);
  repoEdit(EditRepoOption_Repository_upd_290, body_Repository_upd_290, id_Repository_upd_290, limit_Repository_upd_290, owner_Repository_upd_290, page_Repository_upd_290, repo_Repository_upd_290, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_290);
  // -> Deleting Parent Repository (Relational Intent Race)
  repoDeleteAvatar(owner_Repository_290, repo_Repository_290);

});

bthread("crud:Variables:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Variables
  let CreateVariableOption_Variables_300 = "CreateVariableOption_Variables_300_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_300 = "2025-01-25T12:00:00Z";
  let body_Variables_300 = { "id": 1, "name": "body_Variables_300_obj" };
  let id_Variables_300 = RepositoryId;
  let limit_Variables_300 = 300 + Math.floor(Math.random() * 99);
  let owner_Variables_300 = "owner_Variables_300_" + Math.floor(Math.random()*1000);
  let page_Variables_300 = 300 + Math.floor(Math.random() * 99);
  let repo_Variables_300 = "repo_Variables_300_" + Math.floor(Math.random()*1000);
  let variablename_Variables_300 = "variablename_Variables_300_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_300, UpdateVariableOption_Variables_300, body_Variables_300, id_Variables_300, limit_Variables_300, owner_Variables_300, page_Variables_300, repo_Variables_300, variablename_Variables_300, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_300);
  // -> Updating Variables
  let CreateVariableOption_Variables_upd_300 = "CreateVariableOption_Variables_upd_300_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_300 = "2025-01-25T12:00:00Z";
  let body_Variables_upd_300 = { "id": 1, "name": "body_Variables_upd_300_obj" };
  let id_Variables_upd_300 = id_Variables_300;
  let limit_Variables_upd_300 = 300 + Math.floor(Math.random() * 99);
  let owner_Variables_upd_300 = "owner_Variables_upd_300_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_300 = 300 + Math.floor(Math.random() * 99);
  let repo_Variables_upd_300 = "repo_Variables_upd_300_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_300 = "variablename_Variables_upd_300_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_300, UpdateVariableOption_Variables_upd_300, body_Variables_upd_300, id_Variables_upd_300, limit_Variables_upd_300, owner_Variables_upd_300, page_Variables_upd_300, repo_Variables_upd_300, variablename_Variables_upd_300, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_300);
  // -> Deleting Leaf Variables (Standard)
  deleteRepoVariable(owner_Variables_300, repo_Variables_300, variablename_Variables_300);
  verifyVariablesDoesNotExist(id_Variables_300);

});

bthread("crud:Branches:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let body_Branches_310 = { "id": 1, "name": "body_Branches_310_obj" };
  let branch_Branches_310 = "branch_Branches_310_" + Math.floor(Math.random()*1000);
  let id_Branches_310 = RepositoryId;
  let limit_Branches_310 = 310 + Math.floor(Math.random() * 99);
  let owner_Branches_310 = "owner_Branches_310_" + Math.floor(Math.random()*1000);
  let page_Branches_310 = 310 + Math.floor(Math.random() * 99);
  let repo_Branches_310 = "repo_Branches_310_" + Math.floor(Math.random()*1000);
  repoCreateBranch(body_Branches_310, branch_Branches_310, id_Branches_310, limit_Branches_310, owner_Branches_310, page_Branches_310, repo_Branches_310, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_310);
  // -> Updating Branches
  let body_Branches_upd_310 = { "id": 1, "name": "body_Branches_upd_310_obj" };
  let branch_Branches_upd_310 = "branch_Branches_upd_310_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_310 = id_Branches_310;
  let limit_Branches_upd_310 = 310 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_310 = "owner_Branches_upd_310_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_310 = 310 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_310 = "repo_Branches_upd_310_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(body_Branches_upd_310, branch_Branches_upd_310, id_Branches_upd_310, limit_Branches_upd_310, owner_Branches_upd_310, page_Branches_upd_310, repo_Branches_upd_310, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_310);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_310, repo_Branches_310, branch_Branches_310);
  verifyBranchesDoesNotExist(id_Branches_310);

});

bthread("crud:Collaborators:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let body_Collaborators_320 = { "id": 1, "name": "body_Collaborators_320_obj" };
  let collaborator_Collaborators_320 = "collaborator_Collaborators_320_" + Math.floor(Math.random()*1000);
  let id_Collaborators_320 = RepositoryId;
  let limit_Collaborators_320 = 320 + Math.floor(Math.random() * 99);
  let owner_Collaborators_320 = "owner_Collaborators_320_" + Math.floor(Math.random()*1000);
  let page_Collaborators_320 = 320 + Math.floor(Math.random() * 99);
  let repo_Collaborators_320 = "repo_Collaborators_320_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(body_Collaborators_320, collaborator_Collaborators_320, id_Collaborators_320, limit_Collaborators_320, owner_Collaborators_320, page_Collaborators_320, repo_Collaborators_320, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_320);
  verifyCollaboratorsExists(id_Collaborators_320);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_320, repo_Collaborators_320, collaborator_Collaborators_320);
  verifyCollaboratorsDoesNotExist(id_Collaborators_320);

});

bthread("crud:Repositories:linear:1", function () {
  // -> Creating Repositories
  let CreateRepoOption_Repositories_330 = "CreateRepoOption_Repositories_330_" + Math.floor(Math.random()*1000);
  let body_Repositories_330 = { "id": 1, "name": "body_Repositories_330_obj" };
  let id_Repositories_330 = 330 + Math.floor(Math.random() * 99);
  let limit_Repositories_330 = 330 + Math.floor(Math.random() * 99);
  let owner_Repositories_330 = "owner_Repositories_330_" + Math.floor(Math.random()*1000);
  let page_Repositories_330 = 330 + Math.floor(Math.random() * 99);
  let repo_Repositories_330 = "repo_Repositories_330_" + Math.floor(Math.random()*1000);
  let username_Repositories_330 = "username_Repositories_330";
  createCurrentUserRepo(CreateRepoOption_Repositories_330, body_Repositories_330, id_Repositories_330, limit_Repositories_330, owner_Repositories_330, page_Repositories_330, repo_Repositories_330, username_Repositories_330, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_330);
  // -> Updating Repositories
  let CreateRepoOption_Repositories_upd_330 = "CreateRepoOption_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let body_Repositories_upd_330 = { "id": 1, "name": "body_Repositories_upd_330_obj" };
  let id_Repositories_upd_330 = id_Repositories_330;
  let limit_Repositories_upd_330 = 330 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_330 = "owner_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_330 = 330 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_330 = "repo_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_330 = "username_Repositories_upd_330";
  userCurrentPutSubscription(CreateRepoOption_Repositories_upd_330, body_Repositories_upd_330, id_Repositories_upd_330, limit_Repositories_upd_330, owner_Repositories_upd_330, page_Repositories_upd_330, repo_Repositories_upd_330, username_Repositories_upd_330, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_330);
  // -> Deleting Leaf Repositories (Standard)
  userCurrentDeleteSubscription(owner_Repositories_330, repo_Repositories_330);
  verifyRepositoriesDoesNotExist(id_Repositories_330);

});

bthread("crud:Forks:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_340 = { "id": 1, "name": "body_Forks_340_obj" };
  let id_Forks_340 = RepositoryId;
  let limit_Forks_340 = 340 + Math.floor(Math.random() * 99);
  let owner_Forks_340 = "owner_Forks_340_" + Math.floor(Math.random()*1000);
  let page_Forks_340 = 340 + Math.floor(Math.random() * 99);
  let repo_Forks_340 = "repo_Forks_340_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_340, id_Forks_340, limit_Forks_340, owner_Forks_340, page_Forks_340, repo_Forks_340, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_340);
  verifyForksExists(id_Forks_340);
});

bthread("crud:IssueComments:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_350 = "before_IssueComments_350_" + Math.floor(Math.random()*1000);
  let body_IssueComments_350 = { "id": 1, "name": "body_IssueComments_350_obj" };
  let id_IssueComments_350 = IssuesId;
  let index_IssueComments_350 = 350 + Math.floor(Math.random() * 99);
  let owner_IssueComments_350 = "owner_IssueComments_350_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_350 = "repo_IssueComments_350_" + Math.floor(Math.random()*1000);
  let since_IssueComments_350 = "since_IssueComments_350_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_350, body_IssueComments_350, id_IssueComments_350, index_IssueComments_350, owner_IssueComments_350, repo_IssueComments_350, since_IssueComments_350, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_350);
  // -> Updating IssueComments
  let before_IssueComments_upd_350 = "before_IssueComments_upd_350_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_350 = { "id": 1, "name": "body_IssueComments_upd_350_obj" };
  let id_IssueComments_upd_350 = id_IssueComments_350;
  let index_IssueComments_upd_350 = 350 + Math.floor(Math.random() * 99);
  let owner_IssueComments_upd_350 = "owner_IssueComments_upd_350_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_350 = "repo_IssueComments_upd_350_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_350 = "since_IssueComments_upd_350_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_350, body_IssueComments_upd_350, id_IssueComments_upd_350, index_IssueComments_upd_350, owner_IssueComments_upd_350, repo_IssueComments_upd_350, since_IssueComments_upd_350, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_350);
  // -> Deleting Leaf IssueComments (Standard)
  issueDeleteCommentDeprecated(owner_IssueComments_350, repo_IssueComments_350, index_IssueComments_350, id_IssueComments_350);
  verifyIssueCommentsDoesNotExist(id_IssueComments_350);

});

bthread("crud:IssueCommentAttachments:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_360 = "attachment_IssueCommentAttachments_360_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_360 = 360 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_360 = { "id": 1, "name": "body_IssueCommentAttachments_360_obj" };
  let id_IssueCommentAttachments_360 = IssuesId;
  let name_IssueCommentAttachments_360 = "name_IssueCommentAttachments_360_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_360 = "owner_IssueCommentAttachments_360_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_360 = "repo_IssueCommentAttachments_360_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_360, attachment_id_IssueCommentAttachments_360, body_IssueCommentAttachments_360, id_IssueCommentAttachments_360, name_IssueCommentAttachments_360, owner_IssueCommentAttachments_360, repo_IssueCommentAttachments_360, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_360);
  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_360 = "attachment_IssueCommentAttachments_upd_360_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_360 = 360 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_upd_360 = { "id": 1, "name": "body_IssueCommentAttachments_upd_360_obj" };
  let id_IssueCommentAttachments_upd_360 = id_IssueCommentAttachments_360;
  let name_IssueCommentAttachments_upd_360 = "name_IssueCommentAttachments_upd_360_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_360 = "owner_IssueCommentAttachments_upd_360_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_360 = "repo_IssueCommentAttachments_upd_360_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_360, attachment_id_IssueCommentAttachments_upd_360, body_IssueCommentAttachments_upd_360, id_IssueCommentAttachments_upd_360, name_IssueCommentAttachments_upd_360, owner_IssueCommentAttachments_upd_360, repo_IssueCommentAttachments_upd_360, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_360);
  // -> Deleting Leaf IssueCommentAttachments (Standard)
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_360, repo_IssueCommentAttachments_360, id_IssueCommentAttachments_360, attachment_id_IssueCommentAttachments_360);
  verifyIssueCommentAttachmentsDoesNotExist(id_IssueCommentAttachments_360);

});

bthread("crud:IssueCommentReactions:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_370 = { "id": 1, "name": "content_IssueCommentReactions_370_obj" };
  let id_IssueCommentReactions_370 = IssuesId;
  let owner_IssueCommentReactions_370 = "owner_IssueCommentReactions_370";
  let repo_IssueCommentReactions_370 = "repo_IssueCommentReactions_370_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_370, id_IssueCommentReactions_370, owner_IssueCommentReactions_370, repo_IssueCommentReactions_370, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_370);
  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_370);
  // -> Deleting Leaf IssueCommentReactions (Standard)
  issueDeleteCommentReaction(owner_IssueCommentReactions_370, repo_IssueCommentReactions_370, id_IssueCommentReactions_370);
  verifyIssueCommentReactionsDoesNotExist(owner_IssueCommentReactions_370);

});

bthread("crud:IssueAttachments:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_380 = "attachment_IssueAttachments_380_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_380 = 380 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_380 = { "id": 1, "name": "body_IssueAttachments_380_obj" };
  let id_IssueAttachments_380 = IssuesId;
  let index_IssueAttachments_380 = 380 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_380 = "name_IssueAttachments_380_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_380 = "owner_IssueAttachments_380_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_380 = "repo_IssueAttachments_380_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_380, attachment_id_IssueAttachments_380, body_IssueAttachments_380, id_IssueAttachments_380, index_IssueAttachments_380, name_IssueAttachments_380, owner_IssueAttachments_380, repo_IssueAttachments_380, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_380);
  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_380 = "attachment_IssueAttachments_upd_380_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_380 = 380 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_upd_380 = { "id": 1, "name": "body_IssueAttachments_upd_380_obj" };
  let id_IssueAttachments_upd_380 = id_IssueAttachments_380;
  let index_IssueAttachments_upd_380 = 380 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_upd_380 = "name_IssueAttachments_upd_380_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_380 = "owner_IssueAttachments_upd_380_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_380 = "repo_IssueAttachments_upd_380_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_380, attachment_id_IssueAttachments_upd_380, body_IssueAttachments_upd_380, id_IssueAttachments_upd_380, index_IssueAttachments_upd_380, name_IssueAttachments_upd_380, owner_IssueAttachments_upd_380, repo_IssueAttachments_upd_380, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_380);
  // -> Deleting Leaf IssueAttachments (Standard)
  issueDeleteIssueAttachment(owner_IssueAttachments_380, repo_IssueAttachments_380, index_IssueAttachments_380, attachment_id_IssueAttachments_380);
  verifyIssueAttachmentsDoesNotExist(id_IssueAttachments_380);

});

bthread("crud:IssueBlocks:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_390 = { "id": 1, "name": "body_IssueBlocks_390_obj" };
  let index_IssueBlocks_390 = "index_IssueBlocks_390_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_390 = 390 + Math.floor(Math.random() * 99);
  let owner_IssueBlocks_390 = "owner_IssueBlocks_390";
  let page_IssueBlocks_390 = 390 + Math.floor(Math.random() * 99);
  let repo_IssueBlocks_390 = "repo_IssueBlocks_390_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_390, index_IssueBlocks_390, limit_IssueBlocks_390, owner_IssueBlocks_390, page_IssueBlocks_390, repo_IssueBlocks_390, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueBlocksExists(owner_IssueBlocks_390);
  verifyIssueBlocksExists(owner_IssueBlocks_390);
  // -> Deleting Leaf IssueBlocks (Standard)
  issueRemoveIssueBlocking(owner_IssueBlocks_390, repo_IssueBlocks_390, index_IssueBlocks_390);
  verifyIssueBlocksDoesNotExist(owner_IssueBlocks_390);

});

bthread("crud:IssueSubscriptions:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_400 = IssuesId;
  let index_IssueSubscriptions_400 = 400 + Math.floor(Math.random() * 99);
  let limit_IssueSubscriptions_400 = 400 + Math.floor(Math.random() * 99);
  let owner_IssueSubscriptions_400 = "owner_IssueSubscriptions_400_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_400 = 400 + Math.floor(Math.random() * 99);
  let repo_IssueSubscriptions_400 = "repo_IssueSubscriptions_400_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_400 = "user_IssueSubscriptions_400_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_400, index_IssueSubscriptions_400, limit_IssueSubscriptions_400, owner_IssueSubscriptions_400, page_IssueSubscriptions_400, repo_IssueSubscriptions_400, user_IssueSubscriptions_400, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueSubscriptionsExists(id_IssueSubscriptions_400);
  verifyIssueSubscriptionsExists(id_IssueSubscriptions_400);
  // -> Deleting Leaf IssueSubscriptions (Standard)
  issueDeleteSubscription(owner_IssueSubscriptions_400, repo_IssueSubscriptions_400, index_IssueSubscriptions_400, user_IssueSubscriptions_400);
  verifyIssueSubscriptionsDoesNotExist(id_IssueSubscriptions_400);

});

bthread("crud:IssueTimes:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_410 = "before_IssueTimes_410_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_410 = { "id": 1, "name": "body_IssueTimes_410_obj" };
  let index_IssueTimes_410 = 410 + Math.floor(Math.random() * 99);
  let limit_IssueTimes_410 = 410 + Math.floor(Math.random() * 99);
  let owner_IssueTimes_410 = "owner_IssueTimes_410";
  let page_IssueTimes_410 = 410 + Math.floor(Math.random() * 99);
  let repo_IssueTimes_410 = "repo_IssueTimes_410_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_410 = "since_IssueTimes_410_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_410 = "user_IssueTimes_410_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_410, body_IssueTimes_410, index_IssueTimes_410, limit_IssueTimes_410, owner_IssueTimes_410, page_IssueTimes_410, repo_IssueTimes_410, since_IssueTimes_410, user_IssueTimes_410, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueTimesExists(owner_IssueTimes_410);
  verifyIssueTimesExists(owner_IssueTimes_410);
  // -> Deleting Leaf IssueTimes (Standard)
  issueResetTime(owner_IssueTimes_410, repo_IssueTimes_410, index_IssueTimes_410);
  verifyIssueTimesDoesNotExist(owner_IssueTimes_410);

});

bthread("crud:RepositoryKeys:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_420 = { "id": 1, "name": "body_RepositoryKeys_420_obj" };
  let fingerprint_RepositoryKeys_420 = "fingerprint_RepositoryKeys_420_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_420 = RepositoryId;
  let key_id_RepositoryKeys_420 = 420 + Math.floor(Math.random() * 99);
  let limit_RepositoryKeys_420 = 420 + Math.floor(Math.random() * 99);
  let owner_RepositoryKeys_420 = "owner_RepositoryKeys_420_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_420 = 420 + Math.floor(Math.random() * 99);
  let repo_RepositoryKeys_420 = "repo_RepositoryKeys_420_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_420, fingerprint_RepositoryKeys_420, id_RepositoryKeys_420, key_id_RepositoryKeys_420, limit_RepositoryKeys_420, owner_RepositoryKeys_420, page_RepositoryKeys_420, repo_RepositoryKeys_420, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryKeysExists(id_RepositoryKeys_420);
  verifyRepositoryKeysExists(id_RepositoryKeys_420);
  // -> Deleting Leaf RepositoryKeys (Standard)
  repoDeleteKey(owner_RepositoryKeys_420, repo_RepositoryKeys_420, id_RepositoryKeys_420);
  verifyRepositoryKeysDoesNotExist(id_RepositoryKeys_420);

});

bthread("crud:Issue:linear:1", function () {
  // -> Creating Issue
  let body_Issue_430 = { "id": 1, "name": "body_Issue_430_obj" };
  let id_Issue_430 = 430 + Math.floor(Math.random() * 99);
  let limit_Issue_430 = 430 + Math.floor(Math.random() * 99);
  let name_Issue_430 = "name_Issue_430_" + Math.floor(Math.random()*1000);
  let owner_Issue_430 = "owner_Issue_430_" + Math.floor(Math.random()*1000);
  let page_Issue_430 = 430 + Math.floor(Math.random() * 99);
  let repo_Issue_430 = "repo_Issue_430_" + Math.floor(Math.random()*1000);
  let state_Issue_430 = "state_Issue_430_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_430, id_Issue_430, limit_Issue_430, name_Issue_430, owner_Issue_430, page_Issue_430, repo_Issue_430, state_Issue_430, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_430);
  verifyIssueExists(id_Issue_430);
});

bthread("crud:MirrorSync:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating MirrorSync
  let id_MirrorSync_440 = RepositoryId;
  let owner_MirrorSync_440 = "owner_MirrorSync_440_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_440 = "repo_MirrorSync_440_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_440, owner_MirrorSync_440, repo_MirrorSync_440, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_440);
  verifyMirrorSyncExists(id_MirrorSync_440);
});

bthread("crud:PullRequests:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_450 = { "id": 1, "name": "body_PullRequests_450_obj" };
  let id_PullRequests_450 = RepositoryId;
  let index_PullRequests_450 = 450 + Math.floor(Math.random() * 99);
  let limit_PullRequests_450 = 450 + Math.floor(Math.random() * 99);
  let owner_PullRequests_450 = "owner_PullRequests_450_" + Math.floor(Math.random()*1000);
  let page_PullRequests_450 = 450 + Math.floor(Math.random() * 99);
  let repo_PullRequests_450 = "repo_PullRequests_450_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_450 = "skip_to_PullRequests_450_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_450 = "whitespace_PullRequests_450_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_450, id_PullRequests_450, index_PullRequests_450, limit_PullRequests_450, owner_PullRequests_450, page_PullRequests_450, repo_PullRequests_450, skip_to_PullRequests_450, whitespace_PullRequests_450, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_450);
  // -> Updating PullRequests
  let body_PullRequests_upd_450 = { "id": 1, "name": "body_PullRequests_upd_450_obj" };
  let id_PullRequests_upd_450 = id_PullRequests_450;
  let index_PullRequests_upd_450 = 450 + Math.floor(Math.random() * 99);
  let limit_PullRequests_upd_450 = 450 + Math.floor(Math.random() * 99);
  let owner_PullRequests_upd_450 = "owner_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_450 = 450 + Math.floor(Math.random() * 99);
  let repo_PullRequests_upd_450 = "repo_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_450 = "skip_to_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_450 = "whitespace_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_450, id_PullRequests_upd_450, index_PullRequests_upd_450, limit_PullRequests_upd_450, owner_PullRequests_upd_450, page_PullRequests_upd_450, repo_PullRequests_upd_450, skip_to_PullRequests_upd_450, whitespace_PullRequests_upd_450, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_450);
  // -> Deleting Parent PullRequests (Relational Intent Race)
  repoCancelScheduledAutoMerge(owner_PullRequests_450, repo_PullRequests_450, index_PullRequests_450);

});

bthread("crud:PullReviewRequests:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_460 = { "id": 1, "name": "body_PullReviewRequests_460_obj" };
  let index_PullReviewRequests_460 = 460 + Math.floor(Math.random() * 99);
  let owner_PullReviewRequests_460 = "owner_PullReviewRequests_460";
  let repo_PullReviewRequests_460 = "repo_PullReviewRequests_460_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_460, index_PullReviewRequests_460, owner_PullReviewRequests_460, repo_PullReviewRequests_460, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewRequestsExists(owner_PullReviewRequests_460);
  verifyPullReviewRequestsExists(owner_PullReviewRequests_460);
  // -> Deleting Leaf PullReviewRequests (Standard)
  repoDeletePullReviewRequests(owner_PullReviewRequests_460, repo_PullReviewRequests_460, index_PullReviewRequests_460);
  verifyPullReviewRequestsDoesNotExist(owner_PullReviewRequests_460);

});

bthread("crud:PullReviews:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_470 = { "id": 1, "name": "body_PullReviews_470_obj" };
  let id_PullReviews_470 = PullRequestsId;
  let index_PullReviews_470 = 470 + Math.floor(Math.random() * 99);
  let limit_PullReviews_470 = 470 + Math.floor(Math.random() * 99);
  let owner_PullReviews_470 = "owner_PullReviews_470_" + Math.floor(Math.random()*1000);
  let page_PullReviews_470 = 470 + Math.floor(Math.random() * 99);
  let repo_PullReviews_470 = "repo_PullReviews_470_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_470, id_PullReviews_470, index_PullReviews_470, limit_PullReviews_470, owner_PullReviews_470, page_PullReviews_470, repo_PullReviews_470, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewsExists(id_PullReviews_470);
  verifyPullReviewsExists(id_PullReviews_470);
  // -> Deleting Parent PullReviews (Relational Intent Race)
  repoDeletePullReview(owner_PullReviews_470, repo_PullReviews_470, index_PullReviews_470, id_PullReviews_470);

});

bthread("crud:PullReviewDismissals:linear:1", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_480 = { "id": 1, "name": "body_PullReviewDismissals_480_obj" };
  let id_PullReviewDismissals_480 = PullReviewsId;
  let index_PullReviewDismissals_480 = 480 + Math.floor(Math.random() * 99);
  let owner_PullReviewDismissals_480 = "owner_PullReviewDismissals_480_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_480 = "repo_PullReviewDismissals_480_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_480, id_PullReviewDismissals_480, index_PullReviewDismissals_480, owner_PullReviewDismissals_480, repo_PullReviewDismissals_480, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewDismissalsExists(id_PullReviewDismissals_480);
  verifyPullReviewDismissalsExists(id_PullReviewDismissals_480);
});

bthread("crud:PullReviewUndismissals:linear:1", function () {
  let deps = {};
  deps["PullReviewDismissals"] = matchAnyPullReviewDismissalsAdded();
  let pkMap = {"PullReviewDismissals": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewDismissalsId = captured["PullReviewDismissals"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_490 = PullReviewDismissalsId;
  let index_PullReviewUndismissals_490 = 490 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_490 = "owner_PullReviewUndismissals_490_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_490 = "repo_PullReviewUndismissals_490_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_490, index_PullReviewUndismissals_490, owner_PullReviewUndismissals_490, repo_PullReviewUndismissals_490, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_490);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_490);
});

bthread("crud:PullRequestUpdate:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullRequestUpdate
  let id_PullRequestUpdate_500 = PullRequestsId;
  let index_PullRequestUpdate_500 = 500 + Math.floor(Math.random() * 99);
  let owner_PullRequestUpdate_500 = "owner_PullRequestUpdate_500_" + Math.floor(Math.random()*1000);
  let repo_PullRequestUpdate_500 = "repo_PullRequestUpdate_500_" + Math.floor(Math.random()*1000);
  let style_PullRequestUpdate_500 = "style_PullRequestUpdate_500_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(id_PullRequestUpdate_500, index_PullRequestUpdate_500, owner_PullRequestUpdate_500, repo_PullRequestUpdate_500, style_PullRequestUpdate_500, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestUpdateExists(id_PullRequestUpdate_500);
  verifyPullRequestUpdateExists(id_PullRequestUpdate_500);
});

bthread("crud:PushMirrors:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PushMirrors
  let id_PushMirrors_510 = RepositoryId;
  let limit_PushMirrors_510 = 510 + Math.floor(Math.random() * 99);
  let name_PushMirrors_510 = "name_PushMirrors_510_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_510 = "owner_PushMirrors_510_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_510 = 510 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_510 = "repo_PushMirrors_510_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_510, limit_PushMirrors_510, name_PushMirrors_510, owner_PushMirrors_510, page_PushMirrors_510, repo_PushMirrors_510, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_510);
  verifyPushMirrorsExists(id_PushMirrors_510);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_510, repo_PushMirrors_510, name_PushMirrors_510);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_510);

});

bthread("crud:Releases:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_520 = { "id": 1, "name": "body_Releases_520_obj" };
  let draft_Releases_520 = true;
  let id_Releases_520 = RepositoryId;
  let limit_Releases_520 = 520 + Math.floor(Math.random() * 99);
  let owner_Releases_520 = "owner_Releases_520_" + Math.floor(Math.random()*1000);
  let page_Releases_520 = 520 + Math.floor(Math.random() * 99);
  let pre_release_Releases_520 = true;
  let repo_Releases_520 = "repo_Releases_520_" + Math.floor(Math.random()*1000);
  let tag_Releases_520 = "tag_Releases_520_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_520, draft_Releases_520, id_Releases_520, limit_Releases_520, owner_Releases_520, page_Releases_520, pre_release_Releases_520, repo_Releases_520, tag_Releases_520, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_520);
  // -> Updating Releases
  let body_Releases_upd_520 = { "id": 1, "name": "body_Releases_upd_520_obj" };
  let draft_Releases_upd_520 = true;
  let id_Releases_upd_520 = id_Releases_520;
  let limit_Releases_upd_520 = 520 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_520 = "owner_Releases_upd_520_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_520 = 520 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_520 = true;
  let repo_Releases_upd_520 = "repo_Releases_upd_520_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_520 = "tag_Releases_upd_520_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_520, draft_Releases_upd_520, id_Releases_upd_520, limit_Releases_upd_520, owner_Releases_upd_520, page_Releases_upd_520, pre_release_Releases_upd_520, repo_Releases_upd_520, tag_Releases_upd_520, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_520);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_520, repo_Releases_520, tag_Releases_520);

});

bthread("crud:ReleaseAttachments:linear:1", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_530 = "attachment_ReleaseAttachments_530_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_530 = 530 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_530 = { "id": 1, "name": "body_ReleaseAttachments_530_obj" };
  let id_ReleaseAttachments_530 = ReleasesId;
  let name_ReleaseAttachments_530 = "name_ReleaseAttachments_530_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_530 = "owner_ReleaseAttachments_530_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_530 = "repo_ReleaseAttachments_530_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_530, attachment_id_ReleaseAttachments_530, body_ReleaseAttachments_530, id_ReleaseAttachments_530, name_ReleaseAttachments_530, owner_ReleaseAttachments_530, repo_ReleaseAttachments_530, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_530);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_530 = "attachment_ReleaseAttachments_upd_530_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_530 = 530 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_530 = { "id": 1, "name": "body_ReleaseAttachments_upd_530_obj" };
  let id_ReleaseAttachments_upd_530 = id_ReleaseAttachments_530;
  let name_ReleaseAttachments_upd_530 = "name_ReleaseAttachments_upd_530_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_530 = "owner_ReleaseAttachments_upd_530_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_530 = "repo_ReleaseAttachments_upd_530_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_530, attachment_id_ReleaseAttachments_upd_530, body_ReleaseAttachments_upd_530, id_ReleaseAttachments_upd_530, name_ReleaseAttachments_upd_530, owner_ReleaseAttachments_upd_530, repo_ReleaseAttachments_upd_530, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_530);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_530, repo_ReleaseAttachments_530, id_ReleaseAttachments_530, attachment_id_ReleaseAttachments_530);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_530);

});

bthread("crud:TagProtections:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_540 = { "id": 1, "name": "body_TagProtections_540_obj" };
  let id_TagProtections_540 = RepositoryId;
  let owner_TagProtections_540 = "owner_TagProtections_540_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_540 = "repo_TagProtections_540_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_540, id_TagProtections_540, owner_TagProtections_540, repo_TagProtections_540, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_540);
  // -> Updating TagProtections
  let body_TagProtections_upd_540 = { "id": 1, "name": "body_TagProtections_upd_540_obj" };
  let id_TagProtections_upd_540 = id_TagProtections_540;
  let owner_TagProtections_upd_540 = "owner_TagProtections_upd_540_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_540 = "repo_TagProtections_upd_540_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_540, id_TagProtections_upd_540, owner_TagProtections_upd_540, repo_TagProtections_upd_540, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_540);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_540, repo_TagProtections_540, id_TagProtections_540);
  verifyTagProtectionsDoesNotExist(id_TagProtections_540);

});

bthread("crud:Tags:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_550 = { "id": 1, "name": "body_Tags_550_obj" };
  let id_Tags_550 = RepositoryId;
  let limit_Tags_550 = 550 + Math.floor(Math.random() * 99);
  let owner_Tags_550 = "owner_Tags_550_" + Math.floor(Math.random()*1000);
  let page_Tags_550 = 550 + Math.floor(Math.random() * 99);
  let repo_Tags_550 = "repo_Tags_550_" + Math.floor(Math.random()*1000);
  let tag_Tags_550 = "tag_Tags_550_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_550, id_Tags_550, limit_Tags_550, owner_Tags_550, page_Tags_550, repo_Tags_550, tag_Tags_550, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_550);
  verifyTagsExists(id_Tags_550);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_550, repo_Tags_550, tag_Tags_550);
  verifyTagsDoesNotExist(id_Tags_550);

});

bthread("crud:Topics:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_560 = { "id": 1, "name": "body_Topics_560_obj" };
  let limit_Topics_560 = 560 + Math.floor(Math.random() * 99);
  let owner_Topics_560 = "owner_Topics_560";
  let page_Topics_560 = 560 + Math.floor(Math.random() * 99);
  let q_Topics_560 = "q_Topics_560_" + Math.floor(Math.random()*1000);
  let repo_Topics_560 = "repo_Topics_560_" + Math.floor(Math.random()*1000);
  let topic_Topics_560 = "topic_Topics_560_" + Math.floor(Math.random()*1000);
  let topic1_Topics_560 = "topic1_Topics_560_" + Math.floor(Math.random()*1000);
  let topic2_Topics_560 = "topic2_Topics_560_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_560, limit_Topics_560, owner_Topics_560, page_Topics_560, q_Topics_560, repo_Topics_560, topic_Topics_560, topic1_Topics_560, topic2_Topics_560, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_560);
  // -> Updating Topics
  let body_Topics_upd_560 = { "id": 1, "name": "body_Topics_upd_560_obj" };
  let limit_Topics_upd_560 = 560 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_560 = owner_Topics_560;
  let page_Topics_upd_560 = 560 + Math.floor(Math.random() * 99);
  let q_Topics_upd_560 = "q_Topics_upd_560_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_560 = "repo_Topics_upd_560_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_560 = "topic_Topics_upd_560_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_560 = "topic1_Topics_upd_560_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_560 = "topic2_Topics_upd_560_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_560, limit_Topics_upd_560, owner_Topics_upd_560, page_Topics_upd_560, q_Topics_upd_560, repo_Topics_upd_560, topic_Topics_upd_560, topic1_Topics_upd_560, topic2_Topics_upd_560, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_560);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_560, repo_Topics_560, topic_Topics_560);
  verifyTopicsDoesNotExist(owner_Topics_560);

});

bthread("crud:RepositoryTransfer:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_570 = { "id": 1, "name": "body_RepositoryTransfer_570_obj" };
  let id_RepositoryTransfer_570 = RepositoryId;
  let owner_RepositoryTransfer_570 = "owner_RepositoryTransfer_570_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_570 = "repo_RepositoryTransfer_570_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_570 = "transferOptions_RepositoryTransfer_570_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_570, id_RepositoryTransfer_570, owner_RepositoryTransfer_570, repo_RepositoryTransfer_570, transferOptions_RepositoryTransfer_570, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_570);
  verifyRepositoryTransferExists(id_RepositoryTransfer_570);
});

bthread("crud:WikiPage:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_580 = { "id": 1, "name": "body_WikiPage_580_obj" };
  let id_WikiPage_580 = RepositoryId;
  let owner_WikiPage_580 = "owner_WikiPage_580_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_580 = "pageName_WikiPage_580_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_580 = "repo_WikiPage_580_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_580 = "wikiPageOptions_WikiPage_580_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_580, id_WikiPage_580, owner_WikiPage_580, pageName_WikiPage_580, repo_WikiPage_580, wikiPageOptions_WikiPage_580, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_580);
  // -> Updating WikiPage
  let body_WikiPage_upd_580 = { "id": 1, "name": "body_WikiPage_upd_580_obj" };
  let id_WikiPage_upd_580 = id_WikiPage_580;
  let owner_WikiPage_upd_580 = "owner_WikiPage_upd_580_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_580 = "pageName_WikiPage_upd_580_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_580 = "repo_WikiPage_upd_580_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_580 = "wikiPageOptions_WikiPage_upd_580_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_580, id_WikiPage_upd_580, owner_WikiPage_upd_580, pageName_WikiPage_upd_580, repo_WikiPage_upd_580, wikiPageOptions_WikiPage_upd_580, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_580);
  // -> Deleting Leaf WikiPage (Standard)
  repoDeleteWikiPage(owner_WikiPage_580, repo_WikiPage_580, pageName_WikiPage_580);
  verifyWikiPageDoesNotExist(id_WikiPage_580);

});

bthread("crud:TeamMembers:linear:1", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_590 = OrganizationTeamsId;
  let limit_TeamMembers_590 = 590 + Math.floor(Math.random() * 99);
  let page_TeamMembers_590 = 590 + Math.floor(Math.random() * 99);
  let username_TeamMembers_590 = "username_TeamMembers_590";
  orgAddTeamMember(id_TeamMembers_590, limit_TeamMembers_590, page_TeamMembers_590, username_TeamMembers_590, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_590);
  verifyTeamMembersExists(id_TeamMembers_590);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_590);
  verifyTeamMembersDoesNotExist(id_TeamMembers_590);

});

bthread("crud:TeamRepos:linear:1", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamRepos
  let id_TeamRepos_600 = OrganizationTeamsId;
  let limit_TeamRepos_600 = 600 + Math.floor(Math.random() * 99);
  let org_TeamRepos_600 = "org_TeamRepos_600_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_600 = 600 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_600 = "repo_TeamRepos_600_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_600, limit_TeamRepos_600, org_TeamRepos_600, page_TeamRepos_600, repo_TeamRepos_600, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_600);
  verifyTeamReposExists(id_TeamRepos_600);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_600);
  verifyTeamReposDoesNotExist(id_TeamRepos_600);

});

bthread("crud:UserVariables:linear:1", function () {
  // -> Creating UserVariables
  let body_UserVariables_610 = { "id": 1, "name": "body_UserVariables_610_obj" };
  let variablename_UserVariables_610 = "variablename_UserVariables_610";
  createUserVariable(body_UserVariables_610, variablename_UserVariables_610, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_610);
  // -> Updating UserVariables
  let body_UserVariables_upd_610 = { "id": 1, "name": "body_UserVariables_upd_610_obj" };
  let variablename_UserVariables_upd_610 = variablename_UserVariables_610;
  updateUserVariable(body_UserVariables_upd_610, variablename_UserVariables_upd_610, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_610);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_610);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_610);

});

bthread("crud:OAuth2Applications:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_620 = { "id": 1, "name": "body_OAuth2Applications_620_obj" };
  let id_OAuth2Applications_620 = 620 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_620 = 620 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_620 = 620 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_620, id_OAuth2Applications_620, limit_OAuth2Applications_620, page_OAuth2Applications_620, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_620);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_620 = { "id": 1, "name": "body_OAuth2Applications_upd_620_obj" };
  let id_OAuth2Applications_upd_620 = id_OAuth2Applications_620;
  let limit_OAuth2Applications_upd_620 = 620 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_620 = 620 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_620, id_OAuth2Applications_upd_620, limit_OAuth2Applications_upd_620, page_OAuth2Applications_upd_620, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_620);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_620);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_620);

});

bthread("crud:UserAvatar:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_630 = { "id": 1, "name": "body_UserAvatar_630_obj" };
  let id_UserAvatar_630 = 630 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_630, id_UserAvatar_630, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_630);
  verifyUserAvatarExists(id_UserAvatar_630);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_630);
  verifyUserAvatarDoesNotExist(id_UserAvatar_630);

});

bthread("crud:UserEmails:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_640 = { "id": 1, "name": "body_UserEmails_640_obj" };
  let id_UserEmails_640 = 640 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_640, id_UserEmails_640, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_640);
  verifyUserEmailsExists(id_UserEmails_640);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_640);
  verifyUserEmailsDoesNotExist(id_UserEmails_640);

});

bthread("crud:GPGKeys:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_650 = { "id": 1, "name": "Form_GPGKeys_650_obj" };
  let id_GPGKeys_650 = 650 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_650 = 650 + Math.floor(Math.random() * 99);
  let page_GPGKeys_650 = 650 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_650, id_GPGKeys_650, limit_GPGKeys_650, page_GPGKeys_650, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_650);
  verifyGPGKeysExists(id_GPGKeys_650);
  // -> Deleting Leaf GPGKeys (Standard)
  userCurrentDeleteGPGKey(id_GPGKeys_650);
  verifyGPGKeysDoesNotExist(id_GPGKeys_650);

});

bthread("crud:GPGKeyVerification:linear:1", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_660 = 660 + Math.floor(Math.random() * 99);
  userVerifyGPGKey(id_GPGKeyVerification_660, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_660);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_660);
});

bthread("crud:Keys:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Keys
  let CreateKeyOption_Keys_670 = "CreateKeyOption_Keys_670_" + Math.floor(Math.random()*1000);
  let body_Keys_670 = { "id": 1, "name": "body_Keys_670_obj" };
  let fingerprint_Keys_670 = "fingerprint_Keys_670_" + Math.floor(Math.random()*1000);
  let id_Keys_670 = 670 + Math.floor(Math.random() * 99);
  let limit_Keys_670 = 670 + Math.floor(Math.random() * 99);
  let page_Keys_670 = 670 + Math.floor(Math.random() * 99);
  userCurrentPostKey(CreateKeyOption_Keys_670, body_Keys_670, fingerprint_Keys_670, id_Keys_670, limit_Keys_670, page_Keys_670, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_670);
  verifyKeysExists(id_Keys_670);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_670);
  verifyKeysDoesNotExist(id_Keys_670);

});

bthread("crud:UserStarred:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating UserStarred
  let limit_UserStarred_680 = 680 + Math.floor(Math.random() * 99);
  let owner_UserStarred_680 = "owner_UserStarred_680";
  let page_UserStarred_680 = 680 + Math.floor(Math.random() * 99);
  let repo_UserStarred_680 = "repo_UserStarred_680_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_680, owner_UserStarred_680, page_UserStarred_680, repo_UserStarred_680, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_680);
  verifyUserStarredExists(owner_UserStarred_680);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_680, repo_UserStarred_680);
  verifyUserStarredDoesNotExist(owner_UserStarred_680);

});

bthread("crud:ActivityPub:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating ActivityPub
  let user_id_ActivityPub_690 = UsersId;
  activitypubPersonInbox(user_id_ActivityPub_690, { expectedResponseCodes: [200, 201, 204] });

  verifyActivityPubExists(user_id_ActivityPub_690);
  verifyActivityPubExists(user_id_ActivityPub_690);
});

bthread("crud:AdminCron:linear:2", function () {
  // -> Creating AdminCron
  let id_AdminCron_700 = 700 + Math.floor(Math.random() * 99);
  let limit_AdminCron_700 = 700 + Math.floor(Math.random() * 99);
  let page_AdminCron_700 = 700 + Math.floor(Math.random() * 99);
  let task_AdminCron_700 = "task_AdminCron_700_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_700, limit_AdminCron_700, page_AdminCron_700, task_AdminCron_700, { expectedResponseCodes: [200, 201, 204] });

  verifyAdminCronExists(id_AdminCron_700);
  verifyAdminCronExists(id_AdminCron_700);
});

bthread("crud:Hooks:linear:2", function () {
  // -> Creating Hooks
  let EditHookOption_Hooks_710 = "EditHookOption_Hooks_710_" + Math.floor(Math.random()*1000);
  let body_Hooks_710 = { "id": 1, "name": "body_Hooks_710_obj" };
  let id_Hooks_710 = 710 + Math.floor(Math.random() * 99);
  let limit_Hooks_710 = 710 + Math.floor(Math.random() * 99);
  let page_Hooks_710 = 710 + Math.floor(Math.random() * 99);
  userCreateHook(EditHookOption_Hooks_710, body_Hooks_710, id_Hooks_710, limit_Hooks_710, page_Hooks_710, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_710);
  // -> Updating Hooks
  let EditHookOption_Hooks_upd_710 = "EditHookOption_Hooks_upd_710_" + Math.floor(Math.random()*1000);
  let body_Hooks_upd_710 = { "id": 1, "name": "body_Hooks_upd_710_obj" };
  let id_Hooks_upd_710 = id_Hooks_710;
  let limit_Hooks_upd_710 = 710 + Math.floor(Math.random() * 99);
  let page_Hooks_upd_710 = 710 + Math.floor(Math.random() * 99);
  userEditHook(EditHookOption_Hooks_upd_710, body_Hooks_upd_710, id_Hooks_upd_710, limit_Hooks_upd_710, page_Hooks_upd_710, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_710);
  // -> Deleting Leaf Hooks (Standard)
  userDeleteHook(id_Hooks_710);
  verifyHooksDoesNotExist(id_Hooks_710);

});

bthread("crud:UnadoptedRepositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_720 = 720 + Math.floor(Math.random() * 99);
  let owner_UnadoptedRepositories_720 = "owner_UnadoptedRepositories_720";
  let page_UnadoptedRepositories_720 = 720 + Math.floor(Math.random() * 99);
  let pattern_UnadoptedRepositories_720 = "pattern_UnadoptedRepositories_720_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_720 = "repo_UnadoptedRepositories_720_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_720, owner_UnadoptedRepositories_720, page_UnadoptedRepositories_720, pattern_UnadoptedRepositories_720, repo_UnadoptedRepositories_720, { expectedResponseCodes: [200, 201, 204] });

  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_720);
  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_720);
  // -> Deleting Leaf UnadoptedRepositories (Standard)
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_720, repo_UnadoptedRepositories_720);
  verifyUnadoptedRepositoriesDoesNotExist(owner_UnadoptedRepositories_720);

});

bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let CreateUserOption_Users_730 = "CreateUserOption_Users_730_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_730 = "EditUserOption_Users_730_" + Math.floor(Math.random()*1000);
  let body_Users_730 = { "id": 1, "name": "body_Users_730_obj" };
  let limit_Users_730 = 730 + Math.floor(Math.random() * 99);
  let page_Users_730 = 730 + Math.floor(Math.random() * 99);
  let purge_Users_730 = true;
  let token_Users_730 = "token_Users_730_" + Math.floor(Math.random()*1000);
  let username_Users_730 = "username_Users_730";
  adminCreateUser(CreateUserOption_Users_730, EditUserOption_Users_730, body_Users_730, limit_Users_730, page_Users_730, purge_Users_730, token_Users_730, username_Users_730, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_730);
  // -> Updating Users
  let CreateUserOption_Users_upd_730 = "CreateUserOption_Users_upd_730_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_upd_730 = "EditUserOption_Users_upd_730_" + Math.floor(Math.random()*1000);
  let body_Users_upd_730 = { "id": 1, "name": "body_Users_upd_730_obj" };
  let limit_Users_upd_730 = 730 + Math.floor(Math.random() * 99);
  let page_Users_upd_730 = 730 + Math.floor(Math.random() * 99);
  let purge_Users_upd_730 = true;
  let token_Users_upd_730 = "token_Users_upd_730_" + Math.floor(Math.random()*1000);
  let username_Users_upd_730 = username_Users_730;
  adminEditUser(CreateUserOption_Users_upd_730, EditUserOption_Users_upd_730, body_Users_upd_730, limit_Users_upd_730, page_Users_upd_730, purge_Users_upd_730, token_Users_upd_730, username_Users_upd_730, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_730);
  // -> Deleting Parent Users (Relational Intent Race)
  adminDeleteUser(username_Users_730);

});

bthread("crud:UserBadges:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_740 = "UserBadgeOption_UserBadges_740_" + Math.floor(Math.random()*1000);
  let body_UserBadges_740 = { "id": 1, "name": "body_UserBadges_740_obj" };
  let username_UserBadges_740 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_740, body_UserBadges_740, username_UserBadges_740, { expectedResponseCodes: [200, 201, 204] });

  verifyUserBadgesExists(username_UserBadges_740);
  verifyUserBadgesExists(username_UserBadges_740);
  // -> Deleting Leaf UserBadges (Standard)
  adminDeleteUserBadges(username_UserBadges_740);
  verifyUserBadgesDoesNotExist(username_UserBadges_740);

});

bthread("crud:UserKeys:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserKeys
  let key_UserKeys_750 = "key_UserKeys_750_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_750 = "purge_UserKeys_750_" + Math.floor(Math.random()*1000);
  let username_UserKeys_750 = UsersId;
  adminCreatePublicKey(key_UserKeys_750, purge_UserKeys_750, username_UserKeys_750, { expectedResponseCodes: [200, 201, 204] });

  verifyUserKeysExists(username_UserKeys_750);
  verifyUserKeysExists(username_UserKeys_750);
  // -> Deleting Leaf UserKeys (Standard)
  adminDeleteUser(username_UserKeys_750);
  verifyUserKeysDoesNotExist(username_UserKeys_750);

});

bthread("crud:UserOrganizations:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Users": "username", "Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let OrganizationId = captured["Organization"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_760 = 760 + Math.floor(Math.random() * 99);
  let organization_UserOrganizations_760 = "organization_UserOrganizations_760_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_760 = UsersId;
  adminCreateOrg(id_UserOrganizations_760, organization_UserOrganizations_760, username_UserOrganizations_760, { expectedResponseCodes: [200, 201, 204] });

  verifyUserOrganizationsExists(id_UserOrganizations_760);
  verifyUserOrganizationsExists(id_UserOrganizations_760);
});

bthread("crud:UserRename:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_770 = "body_UserRename_770_" + Math.floor(Math.random()*1000);
  let id_UserRename_770 = 770 + Math.floor(Math.random() * 99);
  let username_UserRename_770 = UsersId;
  adminRenameUser(body_UserRename_770, id_UserRename_770, username_UserRename_770, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRenameExists(id_UserRename_770);
  verifyUserRenameExists(id_UserRename_770);
});

bthread("crud:UserRepositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_780 = 780 + Math.floor(Math.random() * 99);
  let repository_UserRepositories_780 = "repository_UserRepositories_780_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_780 = UsersId;
  adminCreateRepo(id_UserRepositories_780, repository_UserRepositories_780, username_UserRepositories_780, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRepositoriesExists(id_UserRepositories_780);
  verifyUserRepositoriesExists(id_UserRepositories_780);
});

bthread("crud:Markdown:linear:2", function () {
  // -> Creating Markdown
  let body_Markdown_790 = "body_Markdown_790_" + Math.floor(Math.random()*1000);
  let id_Markdown_790 = 790 + Math.floor(Math.random() * 99);
  renderMarkdown(body_Markdown_790, id_Markdown_790, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkdownExists(id_Markdown_790);
  verifyMarkdownExists(id_Markdown_790);
});

bthread("crud:Markup:linear:2", function () {
  // -> Creating Markup
  let body_Markup_800 = { "id": 1, "name": "body_Markup_800_obj" };
  let id_Markup_800 = 800 + Math.floor(Math.random() * 99);
  renderMarkup(body_Markup_800, id_Markup_800, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkupExists(id_Markup_800);
  verifyMarkupExists(id_Markup_800);
});

bthread("crud:Organization:linear:2", function () {
  // -> Creating Organization
  let body_Organization_810 = { "id": 1, "name": "body_Organization_810_obj" };
  let limit_Organization_810 = 810 + Math.floor(Math.random() * 99);
  let org_Organization_810 = "org_Organization_810";
  let organization_Organization_810 = { "id": 1, "name": "organization_Organization_810_obj" };
  let page_Organization_810 = 810 + Math.floor(Math.random() * 99);
  let secretname_Organization_810 = "secretname_Organization_810_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_810, limit_Organization_810, org_Organization_810, organization_Organization_810, page_Organization_810, secretname_Organization_810, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_810);
  // -> Updating Organization
  let body_Organization_upd_810 = { "id": 1, "name": "body_Organization_upd_810_obj" };
  let limit_Organization_upd_810 = 810 + Math.floor(Math.random() * 99);
  let org_Organization_upd_810 = org_Organization_810;
  let organization_Organization_upd_810 = { "id": 1, "name": "organization_Organization_upd_810_obj" };
  let page_Organization_upd_810 = 810 + Math.floor(Math.random() * 99);
  let secretname_Organization_upd_810 = "secretname_Organization_upd_810_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_810, limit_Organization_upd_810, org_Organization_upd_810, organization_Organization_upd_810, page_Organization_upd_810, secretname_Organization_upd_810, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_810);
  // -> Deleting Parent Organization (Relational Intent Race)
  orgDelete(org_Organization_810);

});

bthread("crud:OrgVariables:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrgVariables
  let body_OrgVariables_820 = "body_OrgVariables_820_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_820 = OrganizationId;
  let variablename_OrgVariables_820 = "variablename_OrgVariables_820_" + Math.floor(Math.random()*1000);
  createOrgVariable(body_OrgVariables_820, org_OrgVariables_820, variablename_OrgVariables_820, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_820);
  // -> Updating OrgVariables
  let body_OrgVariables_upd_820 = "body_OrgVariables_upd_820_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_upd_820 = org_OrgVariables_820;
  let variablename_OrgVariables_upd_820 = "variablename_OrgVariables_upd_820_" + Math.floor(Math.random()*1000);
  orgEdit(body_OrgVariables_upd_820, org_OrgVariables_upd_820, variablename_OrgVariables_upd_820, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_820);
  // -> Deleting Leaf OrgVariables (Standard)
  orgDelete(org_OrgVariables_820);
  verifyOrgVariablesDoesNotExist(org_OrgVariables_820);

});

bthread("crud:OrgAvatar:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrgAvatar
  let body_OrgAvatar_830 = { "id": 1, "name": "body_OrgAvatar_830_obj" };
  let org_OrgAvatar_830 = OrganizationId;
  orgUpdateAvatar(body_OrgAvatar_830, org_OrgAvatar_830, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgAvatarExists(org_OrgAvatar_830);
  verifyOrgAvatarExists(org_OrgAvatar_830);
  // -> Deleting Leaf OrgAvatar (Standard)
  orgDeleteAvatar(org_OrgAvatar_830);
  verifyOrgAvatarDoesNotExist(org_OrgAvatar_830);

});

bthread("crud:Labels:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Labels
  let body_Labels_840 = { "id": 1, "name": "body_Labels_840_obj" };
  let id_Labels_840 = RepositoryId;
  let limit_Labels_840 = 840 + Math.floor(Math.random() * 99);
  let owner_Labels_840 = "owner_Labels_840_" + Math.floor(Math.random()*1000);
  let page_Labels_840 = 840 + Math.floor(Math.random() * 99);
  let repo_Labels_840 = "repo_Labels_840_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_840, id_Labels_840, limit_Labels_840, owner_Labels_840, page_Labels_840, repo_Labels_840, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_840);
  // -> Updating Labels
  let body_Labels_upd_840 = { "id": 1, "name": "body_Labels_upd_840_obj" };
  let id_Labels_upd_840 = id_Labels_840;
  let limit_Labels_upd_840 = 840 + Math.floor(Math.random() * 99);
  let owner_Labels_upd_840 = "owner_Labels_upd_840_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_840 = 840 + Math.floor(Math.random() * 99);
  let repo_Labels_upd_840 = "repo_Labels_upd_840_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_840, id_Labels_upd_840, limit_Labels_upd_840, owner_Labels_upd_840, page_Labels_upd_840, repo_Labels_upd_840, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_840);
  // -> Deleting Leaf Labels (Standard)
  issueDeleteLabel(owner_Labels_840, repo_Labels_840, id_Labels_840);
  verifyLabelsDoesNotExist(id_Labels_840);

});

bthread("crud:OrganizationRepos:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_850 = { "id": 1, "name": "body_OrganizationRepos_850_obj" };
  let id_OrganizationRepos_850 = 850 + Math.floor(Math.random() * 99);
  let limit_OrganizationRepos_850 = 850 + Math.floor(Math.random() * 99);
  let org_OrganizationRepos_850 = OrganizationId;
  let page_OrganizationRepos_850 = 850 + Math.floor(Math.random() * 99);
  createOrgRepo(body_OrganizationRepos_850, id_OrganizationRepos_850, limit_OrganizationRepos_850, org_OrganizationRepos_850, page_OrganizationRepos_850, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationReposExists(id_OrganizationRepos_850);
  verifyOrganizationReposExists(id_OrganizationRepos_850);
});

bthread("crud:OrganizationTeams:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_860 = { "id": 1, "name": "body_OrganizationTeams_860_obj" };
  let id_OrganizationTeams_860 = 860 + Math.floor(Math.random() * 99);
  let limit_OrganizationTeams_860 = 860 + Math.floor(Math.random() * 99);
  let org_OrganizationTeams_860 = OrganizationId;
  let page_OrganizationTeams_860 = 860 + Math.floor(Math.random() * 99);
  orgCreateTeam(body_OrganizationTeams_860, id_OrganizationTeams_860, limit_OrganizationTeams_860, org_OrganizationTeams_860, page_OrganizationTeams_860, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationTeamsExists(id_OrganizationTeams_860);
  verifyOrganizationTeamsExists(id_OrganizationTeams_860);
});

bthread("crud:Issues:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issues
  let body_Issues_870 = { "id": 1, "name": "body_Issues_870_obj" };
  let content_Issues_870 = { "id": 1, "name": "content_Issues_870_obj" };
  let id_Issues_870 = RepositoryId;
  let index_Issues_870 = 870 + Math.floor(Math.random() * 99);
  let limit_Issues_870 = 870 + Math.floor(Math.random() * 99);
  let owner_Issues_870 = "owner_Issues_870_" + Math.floor(Math.random()*1000);
  let page_Issues_870 = 870 + Math.floor(Math.random() * 99);
  let position_Issues_870 = 870 + Math.floor(Math.random() * 99);
  let repo_Issues_870 = "repo_Issues_870_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(body_Issues_870, content_Issues_870, id_Issues_870, index_Issues_870, limit_Issues_870, owner_Issues_870, page_Issues_870, position_Issues_870, repo_Issues_870, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_870);
  // -> Updating Issues
  let body_Issues_upd_870 = { "id": 1, "name": "body_Issues_upd_870_obj" };
  let content_Issues_upd_870 = { "id": 1, "name": "content_Issues_upd_870_obj" };
  let id_Issues_upd_870 = id_Issues_870;
  let index_Issues_upd_870 = 870 + Math.floor(Math.random() * 99);
  let limit_Issues_upd_870 = 870 + Math.floor(Math.random() * 99);
  let owner_Issues_upd_870 = "owner_Issues_upd_870_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_870 = 870 + Math.floor(Math.random() * 99);
  let position_Issues_upd_870 = 870 + Math.floor(Math.random() * 99);
  let repo_Issues_upd_870 = "repo_Issues_upd_870_" + Math.floor(Math.random()*1000);
  moveIssuePin(body_Issues_upd_870, content_Issues_upd_870, id_Issues_upd_870, index_Issues_upd_870, limit_Issues_upd_870, owner_Issues_upd_870, page_Issues_upd_870, position_Issues_upd_870, repo_Issues_upd_870, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_870);
  // -> Deleting Parent Issues (Relational Intent Race)
  issueDeleteTime(owner_Issues_870, repo_Issues_870, index_Issues_870, id_Issues_870);

});

bthread("crud:Repository:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repository
  let EditRepoOption_Repository_880 = "EditRepoOption_Repository_880_" + Math.floor(Math.random()*1000);
  let body_Repository_880 = { "id": 1, "name": "body_Repository_880_obj" };
  let id_Repository_880 = 880 + Math.floor(Math.random() * 99);
  let limit_Repository_880 = 880 + Math.floor(Math.random() * 99);
  let owner_Repository_880 = "owner_Repository_880_" + Math.floor(Math.random()*1000);
  let page_Repository_880 = 880 + Math.floor(Math.random() * 99);
  let repo_Repository_880 = "repo_Repository_880_" + Math.floor(Math.random()*1000);
  repoMergeUpstream(EditRepoOption_Repository_880, body_Repository_880, id_Repository_880, limit_Repository_880, owner_Repository_880, page_Repository_880, repo_Repository_880, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_880);
  // -> Updating Repository
  let EditRepoOption_Repository_upd_880 = "EditRepoOption_Repository_upd_880_" + Math.floor(Math.random()*1000);
  let body_Repository_upd_880 = { "id": 1, "name": "body_Repository_upd_880_obj" };
  let id_Repository_upd_880 = id_Repository_880;
  let limit_Repository_upd_880 = 880 + Math.floor(Math.random() * 99);
  let owner_Repository_upd_880 = "owner_Repository_upd_880_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_880 = 880 + Math.floor(Math.random() * 99);
  let repo_Repository_upd_880 = "repo_Repository_upd_880_" + Math.floor(Math.random()*1000);
  repoEdit(EditRepoOption_Repository_upd_880, body_Repository_upd_880, id_Repository_upd_880, limit_Repository_upd_880, owner_Repository_upd_880, page_Repository_upd_880, repo_Repository_upd_880, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_880);
  // -> Deleting Parent Repository (Relational Intent Race)
  repoDeleteAvatar(owner_Repository_880, repo_Repository_880);

});

bthread("crud:Variables:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Variables
  let CreateVariableOption_Variables_890 = "CreateVariableOption_Variables_890_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_890 = "2025-01-25T12:00:00Z";
  let body_Variables_890 = { "id": 1, "name": "body_Variables_890_obj" };
  let id_Variables_890 = RepositoryId;
  let limit_Variables_890 = 890 + Math.floor(Math.random() * 99);
  let owner_Variables_890 = "owner_Variables_890_" + Math.floor(Math.random()*1000);
  let page_Variables_890 = 890 + Math.floor(Math.random() * 99);
  let repo_Variables_890 = "repo_Variables_890_" + Math.floor(Math.random()*1000);
  let variablename_Variables_890 = "variablename_Variables_890_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_890, UpdateVariableOption_Variables_890, body_Variables_890, id_Variables_890, limit_Variables_890, owner_Variables_890, page_Variables_890, repo_Variables_890, variablename_Variables_890, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_890);
  // -> Updating Variables
  let CreateVariableOption_Variables_upd_890 = "CreateVariableOption_Variables_upd_890_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_890 = "2025-01-25T12:00:00Z";
  let body_Variables_upd_890 = { "id": 1, "name": "body_Variables_upd_890_obj" };
  let id_Variables_upd_890 = id_Variables_890;
  let limit_Variables_upd_890 = 890 + Math.floor(Math.random() * 99);
  let owner_Variables_upd_890 = "owner_Variables_upd_890_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_890 = 890 + Math.floor(Math.random() * 99);
  let repo_Variables_upd_890 = "repo_Variables_upd_890_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_890 = "variablename_Variables_upd_890_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_890, UpdateVariableOption_Variables_upd_890, body_Variables_upd_890, id_Variables_upd_890, limit_Variables_upd_890, owner_Variables_upd_890, page_Variables_upd_890, repo_Variables_upd_890, variablename_Variables_upd_890, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_890);
  // -> Deleting Leaf Variables (Standard)
  deleteRepoVariable(owner_Variables_890, repo_Variables_890, variablename_Variables_890);
  verifyVariablesDoesNotExist(id_Variables_890);

});

bthread("crud:Branches:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let body_Branches_900 = { "id": 1, "name": "body_Branches_900_obj" };
  let branch_Branches_900 = "branch_Branches_900_" + Math.floor(Math.random()*1000);
  let id_Branches_900 = RepositoryId;
  let limit_Branches_900 = 900 + Math.floor(Math.random() * 99);
  let owner_Branches_900 = "owner_Branches_900_" + Math.floor(Math.random()*1000);
  let page_Branches_900 = 900 + Math.floor(Math.random() * 99);
  let repo_Branches_900 = "repo_Branches_900_" + Math.floor(Math.random()*1000);
  repoCreateBranch(body_Branches_900, branch_Branches_900, id_Branches_900, limit_Branches_900, owner_Branches_900, page_Branches_900, repo_Branches_900, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_900);
  // -> Updating Branches
  let body_Branches_upd_900 = { "id": 1, "name": "body_Branches_upd_900_obj" };
  let branch_Branches_upd_900 = "branch_Branches_upd_900_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_900 = id_Branches_900;
  let limit_Branches_upd_900 = 900 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_900 = "owner_Branches_upd_900_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_900 = 900 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_900 = "repo_Branches_upd_900_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(body_Branches_upd_900, branch_Branches_upd_900, id_Branches_upd_900, limit_Branches_upd_900, owner_Branches_upd_900, page_Branches_upd_900, repo_Branches_upd_900, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_900);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_900, repo_Branches_900, branch_Branches_900);
  verifyBranchesDoesNotExist(id_Branches_900);

});

bthread("crud:Collaborators:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let body_Collaborators_910 = { "id": 1, "name": "body_Collaborators_910_obj" };
  let collaborator_Collaborators_910 = "collaborator_Collaborators_910_" + Math.floor(Math.random()*1000);
  let id_Collaborators_910 = RepositoryId;
  let limit_Collaborators_910 = 910 + Math.floor(Math.random() * 99);
  let owner_Collaborators_910 = "owner_Collaborators_910_" + Math.floor(Math.random()*1000);
  let page_Collaborators_910 = 910 + Math.floor(Math.random() * 99);
  let repo_Collaborators_910 = "repo_Collaborators_910_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(body_Collaborators_910, collaborator_Collaborators_910, id_Collaborators_910, limit_Collaborators_910, owner_Collaborators_910, page_Collaborators_910, repo_Collaborators_910, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_910);
  verifyCollaboratorsExists(id_Collaborators_910);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_910, repo_Collaborators_910, collaborator_Collaborators_910);
  verifyCollaboratorsDoesNotExist(id_Collaborators_910);

});

bthread("crud:Repositories:linear:2", function () {
  // -> Creating Repositories
  let CreateRepoOption_Repositories_920 = "CreateRepoOption_Repositories_920_" + Math.floor(Math.random()*1000);
  let body_Repositories_920 = { "id": 1, "name": "body_Repositories_920_obj" };
  let id_Repositories_920 = 920 + Math.floor(Math.random() * 99);
  let limit_Repositories_920 = 920 + Math.floor(Math.random() * 99);
  let owner_Repositories_920 = "owner_Repositories_920_" + Math.floor(Math.random()*1000);
  let page_Repositories_920 = 920 + Math.floor(Math.random() * 99);
  let repo_Repositories_920 = "repo_Repositories_920_" + Math.floor(Math.random()*1000);
  let username_Repositories_920 = "username_Repositories_920";
  createCurrentUserRepo(CreateRepoOption_Repositories_920, body_Repositories_920, id_Repositories_920, limit_Repositories_920, owner_Repositories_920, page_Repositories_920, repo_Repositories_920, username_Repositories_920, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_920);
  // -> Updating Repositories
  let CreateRepoOption_Repositories_upd_920 = "CreateRepoOption_Repositories_upd_920_" + Math.floor(Math.random()*1000);
  let body_Repositories_upd_920 = { "id": 1, "name": "body_Repositories_upd_920_obj" };
  let id_Repositories_upd_920 = id_Repositories_920;
  let limit_Repositories_upd_920 = 920 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_920 = "owner_Repositories_upd_920_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_920 = 920 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_920 = "repo_Repositories_upd_920_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_920 = "username_Repositories_upd_920";
  userCurrentPutSubscription(CreateRepoOption_Repositories_upd_920, body_Repositories_upd_920, id_Repositories_upd_920, limit_Repositories_upd_920, owner_Repositories_upd_920, page_Repositories_upd_920, repo_Repositories_upd_920, username_Repositories_upd_920, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_920);
  // -> Deleting Leaf Repositories (Standard)
  userCurrentDeleteSubscription(owner_Repositories_920, repo_Repositories_920);
  verifyRepositoriesDoesNotExist(id_Repositories_920);

});

bthread("crud:Forks:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_930 = { "id": 1, "name": "body_Forks_930_obj" };
  let id_Forks_930 = RepositoryId;
  let limit_Forks_930 = 930 + Math.floor(Math.random() * 99);
  let owner_Forks_930 = "owner_Forks_930_" + Math.floor(Math.random()*1000);
  let page_Forks_930 = 930 + Math.floor(Math.random() * 99);
  let repo_Forks_930 = "repo_Forks_930_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_930, id_Forks_930, limit_Forks_930, owner_Forks_930, page_Forks_930, repo_Forks_930, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_930);
  verifyForksExists(id_Forks_930);
});

bthread("crud:IssueComments:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_940 = "before_IssueComments_940_" + Math.floor(Math.random()*1000);
  let body_IssueComments_940 = { "id": 1, "name": "body_IssueComments_940_obj" };
  let id_IssueComments_940 = IssuesId;
  let index_IssueComments_940 = 940 + Math.floor(Math.random() * 99);
  let owner_IssueComments_940 = "owner_IssueComments_940_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_940 = "repo_IssueComments_940_" + Math.floor(Math.random()*1000);
  let since_IssueComments_940 = "since_IssueComments_940_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_940, body_IssueComments_940, id_IssueComments_940, index_IssueComments_940, owner_IssueComments_940, repo_IssueComments_940, since_IssueComments_940, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_940);
  // -> Updating IssueComments
  let before_IssueComments_upd_940 = "before_IssueComments_upd_940_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_940 = { "id": 1, "name": "body_IssueComments_upd_940_obj" };
  let id_IssueComments_upd_940 = id_IssueComments_940;
  let index_IssueComments_upd_940 = 940 + Math.floor(Math.random() * 99);
  let owner_IssueComments_upd_940 = "owner_IssueComments_upd_940_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_940 = "repo_IssueComments_upd_940_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_940 = "since_IssueComments_upd_940_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_940, body_IssueComments_upd_940, id_IssueComments_upd_940, index_IssueComments_upd_940, owner_IssueComments_upd_940, repo_IssueComments_upd_940, since_IssueComments_upd_940, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_940);
  // -> Deleting Leaf IssueComments (Standard)
  issueDeleteCommentDeprecated(owner_IssueComments_940, repo_IssueComments_940, index_IssueComments_940, id_IssueComments_940);
  verifyIssueCommentsDoesNotExist(id_IssueComments_940);

});

bthread("crud:IssueCommentAttachments:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_950 = "attachment_IssueCommentAttachments_950_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_950 = 950 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_950 = { "id": 1, "name": "body_IssueCommentAttachments_950_obj" };
  let id_IssueCommentAttachments_950 = IssuesId;
  let name_IssueCommentAttachments_950 = "name_IssueCommentAttachments_950_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_950 = "owner_IssueCommentAttachments_950_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_950 = "repo_IssueCommentAttachments_950_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_950, attachment_id_IssueCommentAttachments_950, body_IssueCommentAttachments_950, id_IssueCommentAttachments_950, name_IssueCommentAttachments_950, owner_IssueCommentAttachments_950, repo_IssueCommentAttachments_950, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_950);
  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_950 = "attachment_IssueCommentAttachments_upd_950_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_950 = 950 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_upd_950 = { "id": 1, "name": "body_IssueCommentAttachments_upd_950_obj" };
  let id_IssueCommentAttachments_upd_950 = id_IssueCommentAttachments_950;
  let name_IssueCommentAttachments_upd_950 = "name_IssueCommentAttachments_upd_950_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_950 = "owner_IssueCommentAttachments_upd_950_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_950 = "repo_IssueCommentAttachments_upd_950_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_950, attachment_id_IssueCommentAttachments_upd_950, body_IssueCommentAttachments_upd_950, id_IssueCommentAttachments_upd_950, name_IssueCommentAttachments_upd_950, owner_IssueCommentAttachments_upd_950, repo_IssueCommentAttachments_upd_950, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_950);
  // -> Deleting Leaf IssueCommentAttachments (Standard)
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_950, repo_IssueCommentAttachments_950, id_IssueCommentAttachments_950, attachment_id_IssueCommentAttachments_950);
  verifyIssueCommentAttachmentsDoesNotExist(id_IssueCommentAttachments_950);

});

bthread("crud:IssueCommentReactions:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_960 = { "id": 1, "name": "content_IssueCommentReactions_960_obj" };
  let id_IssueCommentReactions_960 = IssuesId;
  let owner_IssueCommentReactions_960 = "owner_IssueCommentReactions_960";
  let repo_IssueCommentReactions_960 = "repo_IssueCommentReactions_960_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_960, id_IssueCommentReactions_960, owner_IssueCommentReactions_960, repo_IssueCommentReactions_960, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_960);
  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_960);
  // -> Deleting Leaf IssueCommentReactions (Standard)
  issueDeleteCommentReaction(owner_IssueCommentReactions_960, repo_IssueCommentReactions_960, id_IssueCommentReactions_960);
  verifyIssueCommentReactionsDoesNotExist(owner_IssueCommentReactions_960);

});

bthread("crud:IssueAttachments:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_970 = "attachment_IssueAttachments_970_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_970 = 970 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_970 = { "id": 1, "name": "body_IssueAttachments_970_obj" };
  let id_IssueAttachments_970 = IssuesId;
  let index_IssueAttachments_970 = 970 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_970 = "name_IssueAttachments_970_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_970 = "owner_IssueAttachments_970_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_970 = "repo_IssueAttachments_970_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_970, attachment_id_IssueAttachments_970, body_IssueAttachments_970, id_IssueAttachments_970, index_IssueAttachments_970, name_IssueAttachments_970, owner_IssueAttachments_970, repo_IssueAttachments_970, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_970);
  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_970 = "attachment_IssueAttachments_upd_970_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_970 = 970 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_upd_970 = { "id": 1, "name": "body_IssueAttachments_upd_970_obj" };
  let id_IssueAttachments_upd_970 = id_IssueAttachments_970;
  let index_IssueAttachments_upd_970 = 970 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_upd_970 = "name_IssueAttachments_upd_970_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_970 = "owner_IssueAttachments_upd_970_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_970 = "repo_IssueAttachments_upd_970_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_970, attachment_id_IssueAttachments_upd_970, body_IssueAttachments_upd_970, id_IssueAttachments_upd_970, index_IssueAttachments_upd_970, name_IssueAttachments_upd_970, owner_IssueAttachments_upd_970, repo_IssueAttachments_upd_970, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_970);
  // -> Deleting Leaf IssueAttachments (Standard)
  issueDeleteIssueAttachment(owner_IssueAttachments_970, repo_IssueAttachments_970, index_IssueAttachments_970, attachment_id_IssueAttachments_970);
  verifyIssueAttachmentsDoesNotExist(id_IssueAttachments_970);

});

bthread("crud:IssueBlocks:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_980 = { "id": 1, "name": "body_IssueBlocks_980_obj" };
  let index_IssueBlocks_980 = "index_IssueBlocks_980_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_980 = 980 + Math.floor(Math.random() * 99);
  let owner_IssueBlocks_980 = "owner_IssueBlocks_980";
  let page_IssueBlocks_980 = 980 + Math.floor(Math.random() * 99);
  let repo_IssueBlocks_980 = "repo_IssueBlocks_980_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_980, index_IssueBlocks_980, limit_IssueBlocks_980, owner_IssueBlocks_980, page_IssueBlocks_980, repo_IssueBlocks_980, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueBlocksExists(owner_IssueBlocks_980);
  verifyIssueBlocksExists(owner_IssueBlocks_980);
  // -> Deleting Leaf IssueBlocks (Standard)
  issueRemoveIssueBlocking(owner_IssueBlocks_980, repo_IssueBlocks_980, index_IssueBlocks_980);
  verifyIssueBlocksDoesNotExist(owner_IssueBlocks_980);

});

bthread("crud:IssueSubscriptions:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_990 = IssuesId;
  let index_IssueSubscriptions_990 = 990 + Math.floor(Math.random() * 99);
  let limit_IssueSubscriptions_990 = 990 + Math.floor(Math.random() * 99);
  let owner_IssueSubscriptions_990 = "owner_IssueSubscriptions_990_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_990 = 990 + Math.floor(Math.random() * 99);
  let repo_IssueSubscriptions_990 = "repo_IssueSubscriptions_990_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_990 = "user_IssueSubscriptions_990_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_990, index_IssueSubscriptions_990, limit_IssueSubscriptions_990, owner_IssueSubscriptions_990, page_IssueSubscriptions_990, repo_IssueSubscriptions_990, user_IssueSubscriptions_990, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueSubscriptionsExists(id_IssueSubscriptions_990);
  verifyIssueSubscriptionsExists(id_IssueSubscriptions_990);
  // -> Deleting Leaf IssueSubscriptions (Standard)
  issueDeleteSubscription(owner_IssueSubscriptions_990, repo_IssueSubscriptions_990, index_IssueSubscriptions_990, user_IssueSubscriptions_990);
  verifyIssueSubscriptionsDoesNotExist(id_IssueSubscriptions_990);

});

bthread("crud:IssueTimes:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_1000 = "before_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_1000 = { "id": 1, "name": "body_IssueTimes_1000_obj" };
  let index_IssueTimes_1000 = 1000 + Math.floor(Math.random() * 99);
  let limit_IssueTimes_1000 = 1000 + Math.floor(Math.random() * 99);
  let owner_IssueTimes_1000 = "owner_IssueTimes_1000";
  let page_IssueTimes_1000 = 1000 + Math.floor(Math.random() * 99);
  let repo_IssueTimes_1000 = "repo_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_1000 = "since_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_1000 = "user_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_1000, body_IssueTimes_1000, index_IssueTimes_1000, limit_IssueTimes_1000, owner_IssueTimes_1000, page_IssueTimes_1000, repo_IssueTimes_1000, since_IssueTimes_1000, user_IssueTimes_1000, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueTimesExists(owner_IssueTimes_1000);
  verifyIssueTimesExists(owner_IssueTimes_1000);
  // -> Deleting Leaf IssueTimes (Standard)
  issueResetTime(owner_IssueTimes_1000, repo_IssueTimes_1000, index_IssueTimes_1000);
  verifyIssueTimesDoesNotExist(owner_IssueTimes_1000);

});

bthread("crud:RepositoryKeys:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_1010 = { "id": 1, "name": "body_RepositoryKeys_1010_obj" };
  let fingerprint_RepositoryKeys_1010 = "fingerprint_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_1010 = RepositoryId;
  let key_id_RepositoryKeys_1010 = 1010 + Math.floor(Math.random() * 99);
  let limit_RepositoryKeys_1010 = 1010 + Math.floor(Math.random() * 99);
  let owner_RepositoryKeys_1010 = "owner_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_1010 = 1010 + Math.floor(Math.random() * 99);
  let repo_RepositoryKeys_1010 = "repo_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_1010, fingerprint_RepositoryKeys_1010, id_RepositoryKeys_1010, key_id_RepositoryKeys_1010, limit_RepositoryKeys_1010, owner_RepositoryKeys_1010, page_RepositoryKeys_1010, repo_RepositoryKeys_1010, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryKeysExists(id_RepositoryKeys_1010);
  verifyRepositoryKeysExists(id_RepositoryKeys_1010);
  // -> Deleting Leaf RepositoryKeys (Standard)
  repoDeleteKey(owner_RepositoryKeys_1010, repo_RepositoryKeys_1010, id_RepositoryKeys_1010);
  verifyRepositoryKeysDoesNotExist(id_RepositoryKeys_1010);

});

bthread("crud:Issue:linear:2", function () {
  // -> Creating Issue
  let body_Issue_1020 = { "id": 1, "name": "body_Issue_1020_obj" };
  let id_Issue_1020 = 1020 + Math.floor(Math.random() * 99);
  let limit_Issue_1020 = 1020 + Math.floor(Math.random() * 99);
  let name_Issue_1020 = "name_Issue_1020_" + Math.floor(Math.random()*1000);
  let owner_Issue_1020 = "owner_Issue_1020_" + Math.floor(Math.random()*1000);
  let page_Issue_1020 = 1020 + Math.floor(Math.random() * 99);
  let repo_Issue_1020 = "repo_Issue_1020_" + Math.floor(Math.random()*1000);
  let state_Issue_1020 = "state_Issue_1020_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_1020, id_Issue_1020, limit_Issue_1020, name_Issue_1020, owner_Issue_1020, page_Issue_1020, repo_Issue_1020, state_Issue_1020, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_1020);
  verifyIssueExists(id_Issue_1020);
});

bthread("crud:MirrorSync:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating MirrorSync
  let id_MirrorSync_1030 = RepositoryId;
  let owner_MirrorSync_1030 = "owner_MirrorSync_1030_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_1030 = "repo_MirrorSync_1030_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_1030, owner_MirrorSync_1030, repo_MirrorSync_1030, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_1030);
  verifyMirrorSyncExists(id_MirrorSync_1030);
});

bthread("crud:PullRequests:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_1040 = { "id": 1, "name": "body_PullRequests_1040_obj" };
  let id_PullRequests_1040 = RepositoryId;
  let index_PullRequests_1040 = 1040 + Math.floor(Math.random() * 99);
  let limit_PullRequests_1040 = 1040 + Math.floor(Math.random() * 99);
  let owner_PullRequests_1040 = "owner_PullRequests_1040_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1040 = 1040 + Math.floor(Math.random() * 99);
  let repo_PullRequests_1040 = "repo_PullRequests_1040_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1040 = "skip_to_PullRequests_1040_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1040 = "whitespace_PullRequests_1040_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_1040, id_PullRequests_1040, index_PullRequests_1040, limit_PullRequests_1040, owner_PullRequests_1040, page_PullRequests_1040, repo_PullRequests_1040, skip_to_PullRequests_1040, whitespace_PullRequests_1040, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1040);
  // -> Updating PullRequests
  let body_PullRequests_upd_1040 = { "id": 1, "name": "body_PullRequests_upd_1040_obj" };
  let id_PullRequests_upd_1040 = id_PullRequests_1040;
  let index_PullRequests_upd_1040 = 1040 + Math.floor(Math.random() * 99);
  let limit_PullRequests_upd_1040 = 1040 + Math.floor(Math.random() * 99);
  let owner_PullRequests_upd_1040 = "owner_PullRequests_upd_1040_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1040 = 1040 + Math.floor(Math.random() * 99);
  let repo_PullRequests_upd_1040 = "repo_PullRequests_upd_1040_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1040 = "skip_to_PullRequests_upd_1040_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1040 = "whitespace_PullRequests_upd_1040_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1040, id_PullRequests_upd_1040, index_PullRequests_upd_1040, limit_PullRequests_upd_1040, owner_PullRequests_upd_1040, page_PullRequests_upd_1040, repo_PullRequests_upd_1040, skip_to_PullRequests_upd_1040, whitespace_PullRequests_upd_1040, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1040);
  // -> Deleting Parent PullRequests (Relational Intent Race)
  repoCancelScheduledAutoMerge(owner_PullRequests_1040, repo_PullRequests_1040, index_PullRequests_1040);

});

bthread("crud:PullReviewRequests:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1050 = { "id": 1, "name": "body_PullReviewRequests_1050_obj" };
  let index_PullReviewRequests_1050 = 1050 + Math.floor(Math.random() * 99);
  let owner_PullReviewRequests_1050 = "owner_PullReviewRequests_1050";
  let repo_PullReviewRequests_1050 = "repo_PullReviewRequests_1050_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1050, index_PullReviewRequests_1050, owner_PullReviewRequests_1050, repo_PullReviewRequests_1050, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewRequestsExists(owner_PullReviewRequests_1050);
  verifyPullReviewRequestsExists(owner_PullReviewRequests_1050);
  // -> Deleting Leaf PullReviewRequests (Standard)
  repoDeletePullReviewRequests(owner_PullReviewRequests_1050, repo_PullReviewRequests_1050, index_PullReviewRequests_1050);
  verifyPullReviewRequestsDoesNotExist(owner_PullReviewRequests_1050);

});

bthread("crud:PullReviews:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1060 = { "id": 1, "name": "body_PullReviews_1060_obj" };
  let id_PullReviews_1060 = PullRequestsId;
  let index_PullReviews_1060 = 1060 + Math.floor(Math.random() * 99);
  let limit_PullReviews_1060 = 1060 + Math.floor(Math.random() * 99);
  let owner_PullReviews_1060 = "owner_PullReviews_1060_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1060 = 1060 + Math.floor(Math.random() * 99);
  let repo_PullReviews_1060 = "repo_PullReviews_1060_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_1060, id_PullReviews_1060, index_PullReviews_1060, limit_PullReviews_1060, owner_PullReviews_1060, page_PullReviews_1060, repo_PullReviews_1060, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewsExists(id_PullReviews_1060);
  verifyPullReviewsExists(id_PullReviews_1060);
  // -> Deleting Parent PullReviews (Relational Intent Race)
  repoDeletePullReview(owner_PullReviews_1060, repo_PullReviews_1060, index_PullReviews_1060, id_PullReviews_1060);

});

bthread("crud:PullReviewDismissals:linear:2", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1070 = { "id": 1, "name": "body_PullReviewDismissals_1070_obj" };
  let id_PullReviewDismissals_1070 = PullReviewsId;
  let index_PullReviewDismissals_1070 = 1070 + Math.floor(Math.random() * 99);
  let owner_PullReviewDismissals_1070 = "owner_PullReviewDismissals_1070_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1070 = "repo_PullReviewDismissals_1070_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1070, id_PullReviewDismissals_1070, index_PullReviewDismissals_1070, owner_PullReviewDismissals_1070, repo_PullReviewDismissals_1070, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1070);
  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1070);
});

bthread("crud:PullReviewUndismissals:linear:2", function () {
  let deps = {};
  deps["PullReviewDismissals"] = matchAnyPullReviewDismissalsAdded();
  let pkMap = {"PullReviewDismissals": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewDismissalsId = captured["PullReviewDismissals"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1080 = PullReviewDismissalsId;
  let index_PullReviewUndismissals_1080 = 1080 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_1080 = "owner_PullReviewUndismissals_1080_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1080 = "repo_PullReviewUndismissals_1080_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1080, index_PullReviewUndismissals_1080, owner_PullReviewUndismissals_1080, repo_PullReviewUndismissals_1080, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1080);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1080);
});

bthread("crud:PullRequestUpdate:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullRequestUpdate
  let id_PullRequestUpdate_1090 = PullRequestsId;
  let index_PullRequestUpdate_1090 = 1090 + Math.floor(Math.random() * 99);
  let owner_PullRequestUpdate_1090 = "owner_PullRequestUpdate_1090_" + Math.floor(Math.random()*1000);
  let repo_PullRequestUpdate_1090 = "repo_PullRequestUpdate_1090_" + Math.floor(Math.random()*1000);
  let style_PullRequestUpdate_1090 = "style_PullRequestUpdate_1090_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(id_PullRequestUpdate_1090, index_PullRequestUpdate_1090, owner_PullRequestUpdate_1090, repo_PullRequestUpdate_1090, style_PullRequestUpdate_1090, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestUpdateExists(id_PullRequestUpdate_1090);
  verifyPullRequestUpdateExists(id_PullRequestUpdate_1090);
});

bthread("crud:PushMirrors:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PushMirrors
  let id_PushMirrors_1100 = RepositoryId;
  let limit_PushMirrors_1100 = 1100 + Math.floor(Math.random() * 99);
  let name_PushMirrors_1100 = "name_PushMirrors_1100_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1100 = "owner_PushMirrors_1100_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1100 = 1100 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_1100 = "repo_PushMirrors_1100_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1100, limit_PushMirrors_1100, name_PushMirrors_1100, owner_PushMirrors_1100, page_PushMirrors_1100, repo_PushMirrors_1100, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_1100);
  verifyPushMirrorsExists(id_PushMirrors_1100);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_1100, repo_PushMirrors_1100, name_PushMirrors_1100);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_1100);

});

bthread("crud:Releases:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_1110 = { "id": 1, "name": "body_Releases_1110_obj" };
  let draft_Releases_1110 = true;
  let id_Releases_1110 = RepositoryId;
  let limit_Releases_1110 = 1110 + Math.floor(Math.random() * 99);
  let owner_Releases_1110 = "owner_Releases_1110_" + Math.floor(Math.random()*1000);
  let page_Releases_1110 = 1110 + Math.floor(Math.random() * 99);
  let pre_release_Releases_1110 = true;
  let repo_Releases_1110 = "repo_Releases_1110_" + Math.floor(Math.random()*1000);
  let tag_Releases_1110 = "tag_Releases_1110_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_1110, draft_Releases_1110, id_Releases_1110, limit_Releases_1110, owner_Releases_1110, page_Releases_1110, pre_release_Releases_1110, repo_Releases_1110, tag_Releases_1110, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1110);
  // -> Updating Releases
  let body_Releases_upd_1110 = { "id": 1, "name": "body_Releases_upd_1110_obj" };
  let draft_Releases_upd_1110 = true;
  let id_Releases_upd_1110 = id_Releases_1110;
  let limit_Releases_upd_1110 = 1110 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_1110 = "owner_Releases_upd_1110_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1110 = 1110 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_1110 = true;
  let repo_Releases_upd_1110 = "repo_Releases_upd_1110_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_1110 = "tag_Releases_upd_1110_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_1110, draft_Releases_upd_1110, id_Releases_upd_1110, limit_Releases_upd_1110, owner_Releases_upd_1110, page_Releases_upd_1110, pre_release_Releases_upd_1110, repo_Releases_upd_1110, tag_Releases_upd_1110, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1110);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_1110, repo_Releases_1110, tag_Releases_1110);

});

bthread("crud:ReleaseAttachments:linear:2", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1120 = "attachment_ReleaseAttachments_1120_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1120 = 1120 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_1120 = { "id": 1, "name": "body_ReleaseAttachments_1120_obj" };
  let id_ReleaseAttachments_1120 = ReleasesId;
  let name_ReleaseAttachments_1120 = "name_ReleaseAttachments_1120_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1120 = "owner_ReleaseAttachments_1120_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1120 = "repo_ReleaseAttachments_1120_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1120, attachment_id_ReleaseAttachments_1120, body_ReleaseAttachments_1120, id_ReleaseAttachments_1120, name_ReleaseAttachments_1120, owner_ReleaseAttachments_1120, repo_ReleaseAttachments_1120, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1120);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1120 = "attachment_ReleaseAttachments_upd_1120_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1120 = 1120 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_1120 = { "id": 1, "name": "body_ReleaseAttachments_upd_1120_obj" };
  let id_ReleaseAttachments_upd_1120 = id_ReleaseAttachments_1120;
  let name_ReleaseAttachments_upd_1120 = "name_ReleaseAttachments_upd_1120_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1120 = "owner_ReleaseAttachments_upd_1120_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1120 = "repo_ReleaseAttachments_upd_1120_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1120, attachment_id_ReleaseAttachments_upd_1120, body_ReleaseAttachments_upd_1120, id_ReleaseAttachments_upd_1120, name_ReleaseAttachments_upd_1120, owner_ReleaseAttachments_upd_1120, repo_ReleaseAttachments_upd_1120, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1120);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1120, repo_ReleaseAttachments_1120, id_ReleaseAttachments_1120, attachment_id_ReleaseAttachments_1120);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_1120);

});

bthread("crud:TagProtections:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_1130 = { "id": 1, "name": "body_TagProtections_1130_obj" };
  let id_TagProtections_1130 = RepositoryId;
  let owner_TagProtections_1130 = "owner_TagProtections_1130_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1130 = "repo_TagProtections_1130_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1130, id_TagProtections_1130, owner_TagProtections_1130, repo_TagProtections_1130, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1130);
  // -> Updating TagProtections
  let body_TagProtections_upd_1130 = { "id": 1, "name": "body_TagProtections_upd_1130_obj" };
  let id_TagProtections_upd_1130 = id_TagProtections_1130;
  let owner_TagProtections_upd_1130 = "owner_TagProtections_upd_1130_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1130 = "repo_TagProtections_upd_1130_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1130, id_TagProtections_upd_1130, owner_TagProtections_upd_1130, repo_TagProtections_upd_1130, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1130);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_1130, repo_TagProtections_1130, id_TagProtections_1130);
  verifyTagProtectionsDoesNotExist(id_TagProtections_1130);

});

bthread("crud:Tags:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_1140 = { "id": 1, "name": "body_Tags_1140_obj" };
  let id_Tags_1140 = RepositoryId;
  let limit_Tags_1140 = 1140 + Math.floor(Math.random() * 99);
  let owner_Tags_1140 = "owner_Tags_1140_" + Math.floor(Math.random()*1000);
  let page_Tags_1140 = 1140 + Math.floor(Math.random() * 99);
  let repo_Tags_1140 = "repo_Tags_1140_" + Math.floor(Math.random()*1000);
  let tag_Tags_1140 = "tag_Tags_1140_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1140, id_Tags_1140, limit_Tags_1140, owner_Tags_1140, page_Tags_1140, repo_Tags_1140, tag_Tags_1140, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_1140);
  verifyTagsExists(id_Tags_1140);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_1140, repo_Tags_1140, tag_Tags_1140);
  verifyTagsDoesNotExist(id_Tags_1140);

});

bthread("crud:Topics:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_1150 = { "id": 1, "name": "body_Topics_1150_obj" };
  let limit_Topics_1150 = 1150 + Math.floor(Math.random() * 99);
  let owner_Topics_1150 = "owner_Topics_1150";
  let page_Topics_1150 = 1150 + Math.floor(Math.random() * 99);
  let q_Topics_1150 = "q_Topics_1150_" + Math.floor(Math.random()*1000);
  let repo_Topics_1150 = "repo_Topics_1150_" + Math.floor(Math.random()*1000);
  let topic_Topics_1150 = "topic_Topics_1150_" + Math.floor(Math.random()*1000);
  let topic1_Topics_1150 = "topic1_Topics_1150_" + Math.floor(Math.random()*1000);
  let topic2_Topics_1150 = "topic2_Topics_1150_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1150, limit_Topics_1150, owner_Topics_1150, page_Topics_1150, q_Topics_1150, repo_Topics_1150, topic_Topics_1150, topic1_Topics_1150, topic2_Topics_1150, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1150);
  // -> Updating Topics
  let body_Topics_upd_1150 = { "id": 1, "name": "body_Topics_upd_1150_obj" };
  let limit_Topics_upd_1150 = 1150 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_1150 = owner_Topics_1150;
  let page_Topics_upd_1150 = 1150 + Math.floor(Math.random() * 99);
  let q_Topics_upd_1150 = "q_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1150 = "repo_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1150 = "topic_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_1150 = "topic1_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_1150 = "topic2_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1150, limit_Topics_upd_1150, owner_Topics_upd_1150, page_Topics_upd_1150, q_Topics_upd_1150, repo_Topics_upd_1150, topic_Topics_upd_1150, topic1_Topics_upd_1150, topic2_Topics_upd_1150, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1150);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_1150, repo_Topics_1150, topic_Topics_1150);
  verifyTopicsDoesNotExist(owner_Topics_1150);

});

bthread("crud:RepositoryTransfer:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1160 = { "id": 1, "name": "body_RepositoryTransfer_1160_obj" };
  let id_RepositoryTransfer_1160 = RepositoryId;
  let owner_RepositoryTransfer_1160 = "owner_RepositoryTransfer_1160_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1160 = "repo_RepositoryTransfer_1160_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1160 = "transferOptions_RepositoryTransfer_1160_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1160, id_RepositoryTransfer_1160, owner_RepositoryTransfer_1160, repo_RepositoryTransfer_1160, transferOptions_RepositoryTransfer_1160, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_1160);
  verifyRepositoryTransferExists(id_RepositoryTransfer_1160);
});

bthread("crud:WikiPage:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_1170 = { "id": 1, "name": "body_WikiPage_1170_obj" };
  let id_WikiPage_1170 = RepositoryId;
  let owner_WikiPage_1170 = "owner_WikiPage_1170_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_1170 = "pageName_WikiPage_1170_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_1170 = "repo_WikiPage_1170_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_1170 = "wikiPageOptions_WikiPage_1170_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_1170, id_WikiPage_1170, owner_WikiPage_1170, pageName_WikiPage_1170, repo_WikiPage_1170, wikiPageOptions_WikiPage_1170, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_1170);
  // -> Updating WikiPage
  let body_WikiPage_upd_1170 = { "id": 1, "name": "body_WikiPage_upd_1170_obj" };
  let id_WikiPage_upd_1170 = id_WikiPage_1170;
  let owner_WikiPage_upd_1170 = "owner_WikiPage_upd_1170_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_1170 = "pageName_WikiPage_upd_1170_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_1170 = "repo_WikiPage_upd_1170_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_1170 = "wikiPageOptions_WikiPage_upd_1170_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_1170, id_WikiPage_upd_1170, owner_WikiPage_upd_1170, pageName_WikiPage_upd_1170, repo_WikiPage_upd_1170, wikiPageOptions_WikiPage_upd_1170, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_1170);
  // -> Deleting Leaf WikiPage (Standard)
  repoDeleteWikiPage(owner_WikiPage_1170, repo_WikiPage_1170, pageName_WikiPage_1170);
  verifyWikiPageDoesNotExist(id_WikiPage_1170);

});

bthread("crud:TeamMembers:linear:2", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1180 = OrganizationTeamsId;
  let limit_TeamMembers_1180 = 1180 + Math.floor(Math.random() * 99);
  let page_TeamMembers_1180 = 1180 + Math.floor(Math.random() * 99);
  let username_TeamMembers_1180 = "username_TeamMembers_1180";
  orgAddTeamMember(id_TeamMembers_1180, limit_TeamMembers_1180, page_TeamMembers_1180, username_TeamMembers_1180, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_1180);
  verifyTeamMembersExists(id_TeamMembers_1180);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_1180);
  verifyTeamMembersDoesNotExist(id_TeamMembers_1180);

});

bthread("crud:TeamRepos:linear:2", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamRepos
  let id_TeamRepos_1190 = OrganizationTeamsId;
  let limit_TeamRepos_1190 = 1190 + Math.floor(Math.random() * 99);
  let org_TeamRepos_1190 = "org_TeamRepos_1190_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_1190 = 1190 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_1190 = "repo_TeamRepos_1190_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1190, limit_TeamRepos_1190, org_TeamRepos_1190, page_TeamRepos_1190, repo_TeamRepos_1190, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_1190);
  verifyTeamReposExists(id_TeamRepos_1190);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_1190);
  verifyTeamReposDoesNotExist(id_TeamRepos_1190);

});

bthread("crud:UserVariables:linear:2", function () {
  // -> Creating UserVariables
  let body_UserVariables_1200 = { "id": 1, "name": "body_UserVariables_1200_obj" };
  let variablename_UserVariables_1200 = "variablename_UserVariables_1200";
  createUserVariable(body_UserVariables_1200, variablename_UserVariables_1200, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1200);
  // -> Updating UserVariables
  let body_UserVariables_upd_1200 = { "id": 1, "name": "body_UserVariables_upd_1200_obj" };
  let variablename_UserVariables_upd_1200 = variablename_UserVariables_1200;
  updateUserVariable(body_UserVariables_upd_1200, variablename_UserVariables_upd_1200, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1200);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_1200);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_1200);

});

bthread("crud:OAuth2Applications:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1210 = { "id": 1, "name": "body_OAuth2Applications_1210_obj" };
  let id_OAuth2Applications_1210 = 1210 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_1210 = 1210 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_1210 = 1210 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_1210, id_OAuth2Applications_1210, limit_OAuth2Applications_1210, page_OAuth2Applications_1210, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1210);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1210 = { "id": 1, "name": "body_OAuth2Applications_upd_1210_obj" };
  let id_OAuth2Applications_upd_1210 = id_OAuth2Applications_1210;
  let limit_OAuth2Applications_upd_1210 = 1210 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_1210 = 1210 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1210, id_OAuth2Applications_upd_1210, limit_OAuth2Applications_upd_1210, page_OAuth2Applications_upd_1210, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1210);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_1210);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_1210);

});

bthread("crud:UserAvatar:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_1220 = { "id": 1, "name": "body_UserAvatar_1220_obj" };
  let id_UserAvatar_1220 = 1220 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_1220, id_UserAvatar_1220, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_1220);
  verifyUserAvatarExists(id_UserAvatar_1220);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_1220);
  verifyUserAvatarDoesNotExist(id_UserAvatar_1220);

});

bthread("crud:UserEmails:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_1230 = { "id": 1, "name": "body_UserEmails_1230_obj" };
  let id_UserEmails_1230 = 1230 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_1230, id_UserEmails_1230, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_1230);
  verifyUserEmailsExists(id_UserEmails_1230);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_1230);
  verifyUserEmailsDoesNotExist(id_UserEmails_1230);

});

bthread("crud:GPGKeys:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_1240 = { "id": 1, "name": "Form_GPGKeys_1240_obj" };
  let id_GPGKeys_1240 = 1240 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_1240 = 1240 + Math.floor(Math.random() * 99);
  let page_GPGKeys_1240 = 1240 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_1240, id_GPGKeys_1240, limit_GPGKeys_1240, page_GPGKeys_1240, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_1240);
  verifyGPGKeysExists(id_GPGKeys_1240);
  // -> Deleting Leaf GPGKeys (Standard)
  userCurrentDeleteGPGKey(id_GPGKeys_1240);
  verifyGPGKeysDoesNotExist(id_GPGKeys_1240);

});

bthread("crud:GPGKeyVerification:linear:2", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_1250 = 1250 + Math.floor(Math.random() * 99);
  userVerifyGPGKey(id_GPGKeyVerification_1250, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1250);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1250);
});

bthread("crud:Keys:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Keys
  let CreateKeyOption_Keys_1260 = "CreateKeyOption_Keys_1260_" + Math.floor(Math.random()*1000);
  let body_Keys_1260 = { "id": 1, "name": "body_Keys_1260_obj" };
  let fingerprint_Keys_1260 = "fingerprint_Keys_1260_" + Math.floor(Math.random()*1000);
  let id_Keys_1260 = 1260 + Math.floor(Math.random() * 99);
  let limit_Keys_1260 = 1260 + Math.floor(Math.random() * 99);
  let page_Keys_1260 = 1260 + Math.floor(Math.random() * 99);
  userCurrentPostKey(CreateKeyOption_Keys_1260, body_Keys_1260, fingerprint_Keys_1260, id_Keys_1260, limit_Keys_1260, page_Keys_1260, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_1260);
  verifyKeysExists(id_Keys_1260);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_1260);
  verifyKeysDoesNotExist(id_Keys_1260);

});

bthread("crud:UserStarred:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating UserStarred
  let limit_UserStarred_1270 = 1270 + Math.floor(Math.random() * 99);
  let owner_UserStarred_1270 = "owner_UserStarred_1270";
  let page_UserStarred_1270 = 1270 + Math.floor(Math.random() * 99);
  let repo_UserStarred_1270 = "repo_UserStarred_1270_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1270, owner_UserStarred_1270, page_UserStarred_1270, repo_UserStarred_1270, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_1270);
  verifyUserStarredExists(owner_UserStarred_1270);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_1270, repo_UserStarred_1270);
  verifyUserStarredDoesNotExist(owner_UserStarred_1270);

});

bthread("crud:ActivityPub:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating ActivityPub
  let user_id_ActivityPub_1280 = UsersId;
  activitypubPersonInbox(user_id_ActivityPub_1280, { expectedResponseCodes: [200, 201, 204] });

  verifyActivityPubExists(user_id_ActivityPub_1280);
  verifyActivityPubExists(user_id_ActivityPub_1280);
});

bthread("crud:AdminCron:linear:3", function () {
  // -> Creating AdminCron
  let id_AdminCron_1290 = 1290 + Math.floor(Math.random() * 99);
  let limit_AdminCron_1290 = 1290 + Math.floor(Math.random() * 99);
  let page_AdminCron_1290 = 1290 + Math.floor(Math.random() * 99);
  let task_AdminCron_1290 = "task_AdminCron_1290_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_1290, limit_AdminCron_1290, page_AdminCron_1290, task_AdminCron_1290, { expectedResponseCodes: [200, 201, 204] });

  verifyAdminCronExists(id_AdminCron_1290);
  verifyAdminCronExists(id_AdminCron_1290);
});

bthread("crud:Hooks:linear:3", function () {
  // -> Creating Hooks
  let EditHookOption_Hooks_1300 = "EditHookOption_Hooks_1300_" + Math.floor(Math.random()*1000);
  let body_Hooks_1300 = { "id": 1, "name": "body_Hooks_1300_obj" };
  let id_Hooks_1300 = 1300 + Math.floor(Math.random() * 99);
  let limit_Hooks_1300 = 1300 + Math.floor(Math.random() * 99);
  let page_Hooks_1300 = 1300 + Math.floor(Math.random() * 99);
  userCreateHook(EditHookOption_Hooks_1300, body_Hooks_1300, id_Hooks_1300, limit_Hooks_1300, page_Hooks_1300, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_1300);
  // -> Updating Hooks
  let EditHookOption_Hooks_upd_1300 = "EditHookOption_Hooks_upd_1300_" + Math.floor(Math.random()*1000);
  let body_Hooks_upd_1300 = { "id": 1, "name": "body_Hooks_upd_1300_obj" };
  let id_Hooks_upd_1300 = id_Hooks_1300;
  let limit_Hooks_upd_1300 = 1300 + Math.floor(Math.random() * 99);
  let page_Hooks_upd_1300 = 1300 + Math.floor(Math.random() * 99);
  userEditHook(EditHookOption_Hooks_upd_1300, body_Hooks_upd_1300, id_Hooks_upd_1300, limit_Hooks_upd_1300, page_Hooks_upd_1300, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_1300);
  // -> Deleting Leaf Hooks (Standard)
  userDeleteHook(id_Hooks_1300);
  verifyHooksDoesNotExist(id_Hooks_1300);

});

bthread("crud:UnadoptedRepositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_1310 = 1310 + Math.floor(Math.random() * 99);
  let owner_UnadoptedRepositories_1310 = "owner_UnadoptedRepositories_1310";
  let page_UnadoptedRepositories_1310 = 1310 + Math.floor(Math.random() * 99);
  let pattern_UnadoptedRepositories_1310 = "pattern_UnadoptedRepositories_1310_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_1310 = "repo_UnadoptedRepositories_1310_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_1310, owner_UnadoptedRepositories_1310, page_UnadoptedRepositories_1310, pattern_UnadoptedRepositories_1310, repo_UnadoptedRepositories_1310, { expectedResponseCodes: [200, 201, 204] });

  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_1310);
  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_1310);
  // -> Deleting Leaf UnadoptedRepositories (Standard)
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_1310, repo_UnadoptedRepositories_1310);
  verifyUnadoptedRepositoriesDoesNotExist(owner_UnadoptedRepositories_1310);

});

bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let CreateUserOption_Users_1320 = "CreateUserOption_Users_1320_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_1320 = "EditUserOption_Users_1320_" + Math.floor(Math.random()*1000);
  let body_Users_1320 = { "id": 1, "name": "body_Users_1320_obj" };
  let limit_Users_1320 = 1320 + Math.floor(Math.random() * 99);
  let page_Users_1320 = 1320 + Math.floor(Math.random() * 99);
  let purge_Users_1320 = true;
  let token_Users_1320 = "token_Users_1320_" + Math.floor(Math.random()*1000);
  let username_Users_1320 = "username_Users_1320";
  adminCreateUser(CreateUserOption_Users_1320, EditUserOption_Users_1320, body_Users_1320, limit_Users_1320, page_Users_1320, purge_Users_1320, token_Users_1320, username_Users_1320, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_1320);
  // -> Updating Users
  let CreateUserOption_Users_upd_1320 = "CreateUserOption_Users_upd_1320_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_upd_1320 = "EditUserOption_Users_upd_1320_" + Math.floor(Math.random()*1000);
  let body_Users_upd_1320 = { "id": 1, "name": "body_Users_upd_1320_obj" };
  let limit_Users_upd_1320 = 1320 + Math.floor(Math.random() * 99);
  let page_Users_upd_1320 = 1320 + Math.floor(Math.random() * 99);
  let purge_Users_upd_1320 = true;
  let token_Users_upd_1320 = "token_Users_upd_1320_" + Math.floor(Math.random()*1000);
  let username_Users_upd_1320 = username_Users_1320;
  adminEditUser(CreateUserOption_Users_upd_1320, EditUserOption_Users_upd_1320, body_Users_upd_1320, limit_Users_upd_1320, page_Users_upd_1320, purge_Users_upd_1320, token_Users_upd_1320, username_Users_upd_1320, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_1320);
  // -> Deleting Parent Users (Relational Intent Race)
  adminDeleteUser(username_Users_1320);

});

bthread("crud:UserBadges:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_1330 = "UserBadgeOption_UserBadges_1330_" + Math.floor(Math.random()*1000);
  let body_UserBadges_1330 = { "id": 1, "name": "body_UserBadges_1330_obj" };
  let username_UserBadges_1330 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_1330, body_UserBadges_1330, username_UserBadges_1330, { expectedResponseCodes: [200, 201, 204] });

  verifyUserBadgesExists(username_UserBadges_1330);
  verifyUserBadgesExists(username_UserBadges_1330);
  // -> Deleting Leaf UserBadges (Standard)
  adminDeleteUserBadges(username_UserBadges_1330);
  verifyUserBadgesDoesNotExist(username_UserBadges_1330);

});

bthread("crud:UserKeys:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserKeys
  let key_UserKeys_1340 = "key_UserKeys_1340_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_1340 = "purge_UserKeys_1340_" + Math.floor(Math.random()*1000);
  let username_UserKeys_1340 = UsersId;
  adminCreatePublicKey(key_UserKeys_1340, purge_UserKeys_1340, username_UserKeys_1340, { expectedResponseCodes: [200, 201, 204] });

  verifyUserKeysExists(username_UserKeys_1340);
  verifyUserKeysExists(username_UserKeys_1340);
  // -> Deleting Leaf UserKeys (Standard)
  adminDeleteUser(username_UserKeys_1340);
  verifyUserKeysDoesNotExist(username_UserKeys_1340);

});

bthread("crud:UserOrganizations:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Users": "username", "Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let OrganizationId = captured["Organization"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_1350 = 1350 + Math.floor(Math.random() * 99);
  let organization_UserOrganizations_1350 = "organization_UserOrganizations_1350_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_1350 = UsersId;
  adminCreateOrg(id_UserOrganizations_1350, organization_UserOrganizations_1350, username_UserOrganizations_1350, { expectedResponseCodes: [200, 201, 204] });

  verifyUserOrganizationsExists(id_UserOrganizations_1350);
  verifyUserOrganizationsExists(id_UserOrganizations_1350);
});

bthread("crud:UserRename:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_1360 = "body_UserRename_1360_" + Math.floor(Math.random()*1000);
  let id_UserRename_1360 = 1360 + Math.floor(Math.random() * 99);
  let username_UserRename_1360 = UsersId;
  adminRenameUser(body_UserRename_1360, id_UserRename_1360, username_UserRename_1360, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRenameExists(id_UserRename_1360);
  verifyUserRenameExists(id_UserRename_1360);
});

bthread("crud:UserRepositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_1370 = 1370 + Math.floor(Math.random() * 99);
  let repository_UserRepositories_1370 = "repository_UserRepositories_1370_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_1370 = UsersId;
  adminCreateRepo(id_UserRepositories_1370, repository_UserRepositories_1370, username_UserRepositories_1370, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRepositoriesExists(id_UserRepositories_1370);
  verifyUserRepositoriesExists(id_UserRepositories_1370);
});

bthread("crud:Markdown:linear:3", function () {
  // -> Creating Markdown
  let body_Markdown_1380 = "body_Markdown_1380_" + Math.floor(Math.random()*1000);
  let id_Markdown_1380 = 1380 + Math.floor(Math.random() * 99);
  renderMarkdown(body_Markdown_1380, id_Markdown_1380, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkdownExists(id_Markdown_1380);
  verifyMarkdownExists(id_Markdown_1380);
});

bthread("crud:Markup:linear:3", function () {
  // -> Creating Markup
  let body_Markup_1390 = { "id": 1, "name": "body_Markup_1390_obj" };
  let id_Markup_1390 = 1390 + Math.floor(Math.random() * 99);
  renderMarkup(body_Markup_1390, id_Markup_1390, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkupExists(id_Markup_1390);
  verifyMarkupExists(id_Markup_1390);
});

bthread("crud:Organization:linear:3", function () {
  // -> Creating Organization
  let body_Organization_1400 = { "id": 1, "name": "body_Organization_1400_obj" };
  let limit_Organization_1400 = 1400 + Math.floor(Math.random() * 99);
  let org_Organization_1400 = "org_Organization_1400";
  let organization_Organization_1400 = { "id": 1, "name": "organization_Organization_1400_obj" };
  let page_Organization_1400 = 1400 + Math.floor(Math.random() * 99);
  let secretname_Organization_1400 = "secretname_Organization_1400_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_1400, limit_Organization_1400, org_Organization_1400, organization_Organization_1400, page_Organization_1400, secretname_Organization_1400, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_1400);
  // -> Updating Organization
  let body_Organization_upd_1400 = { "id": 1, "name": "body_Organization_upd_1400_obj" };
  let limit_Organization_upd_1400 = 1400 + Math.floor(Math.random() * 99);
  let org_Organization_upd_1400 = org_Organization_1400;
  let organization_Organization_upd_1400 = { "id": 1, "name": "organization_Organization_upd_1400_obj" };
  let page_Organization_upd_1400 = 1400 + Math.floor(Math.random() * 99);
  let secretname_Organization_upd_1400 = "secretname_Organization_upd_1400_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_1400, limit_Organization_upd_1400, org_Organization_upd_1400, organization_Organization_upd_1400, page_Organization_upd_1400, secretname_Organization_upd_1400, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_1400);
  // -> Deleting Parent Organization (Relational Intent Race)
  orgDelete(org_Organization_1400);

});

bthread("crud:OrgVariables:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrgVariables
  let body_OrgVariables_1410 = "body_OrgVariables_1410_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_1410 = OrganizationId;
  let variablename_OrgVariables_1410 = "variablename_OrgVariables_1410_" + Math.floor(Math.random()*1000);
  createOrgVariable(body_OrgVariables_1410, org_OrgVariables_1410, variablename_OrgVariables_1410, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_1410);
  // -> Updating OrgVariables
  let body_OrgVariables_upd_1410 = "body_OrgVariables_upd_1410_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_upd_1410 = org_OrgVariables_1410;
  let variablename_OrgVariables_upd_1410 = "variablename_OrgVariables_upd_1410_" + Math.floor(Math.random()*1000);
  orgEdit(body_OrgVariables_upd_1410, org_OrgVariables_upd_1410, variablename_OrgVariables_upd_1410, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_1410);
  // -> Deleting Leaf OrgVariables (Standard)
  orgDelete(org_OrgVariables_1410);
  verifyOrgVariablesDoesNotExist(org_OrgVariables_1410);

});

bthread("crud:OrgAvatar:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrgAvatar
  let body_OrgAvatar_1420 = { "id": 1, "name": "body_OrgAvatar_1420_obj" };
  let org_OrgAvatar_1420 = OrganizationId;
  orgUpdateAvatar(body_OrgAvatar_1420, org_OrgAvatar_1420, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgAvatarExists(org_OrgAvatar_1420);
  verifyOrgAvatarExists(org_OrgAvatar_1420);
  // -> Deleting Leaf OrgAvatar (Standard)
  orgDeleteAvatar(org_OrgAvatar_1420);
  verifyOrgAvatarDoesNotExist(org_OrgAvatar_1420);

});

bthread("crud:Labels:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Labels
  let body_Labels_1430 = { "id": 1, "name": "body_Labels_1430_obj" };
  let id_Labels_1430 = RepositoryId;
  let limit_Labels_1430 = 1430 + Math.floor(Math.random() * 99);
  let owner_Labels_1430 = "owner_Labels_1430_" + Math.floor(Math.random()*1000);
  let page_Labels_1430 = 1430 + Math.floor(Math.random() * 99);
  let repo_Labels_1430 = "repo_Labels_1430_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_1430, id_Labels_1430, limit_Labels_1430, owner_Labels_1430, page_Labels_1430, repo_Labels_1430, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_1430);
  // -> Updating Labels
  let body_Labels_upd_1430 = { "id": 1, "name": "body_Labels_upd_1430_obj" };
  let id_Labels_upd_1430 = id_Labels_1430;
  let limit_Labels_upd_1430 = 1430 + Math.floor(Math.random() * 99);
  let owner_Labels_upd_1430 = "owner_Labels_upd_1430_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_1430 = 1430 + Math.floor(Math.random() * 99);
  let repo_Labels_upd_1430 = "repo_Labels_upd_1430_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_1430, id_Labels_upd_1430, limit_Labels_upd_1430, owner_Labels_upd_1430, page_Labels_upd_1430, repo_Labels_upd_1430, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_1430);
  // -> Deleting Leaf Labels (Standard)
  issueDeleteLabel(owner_Labels_1430, repo_Labels_1430, id_Labels_1430);
  verifyLabelsDoesNotExist(id_Labels_1430);

});

bthread("crud:OrganizationRepos:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_1440 = { "id": 1, "name": "body_OrganizationRepos_1440_obj" };
  let id_OrganizationRepos_1440 = 1440 + Math.floor(Math.random() * 99);
  let limit_OrganizationRepos_1440 = 1440 + Math.floor(Math.random() * 99);
  let org_OrganizationRepos_1440 = OrganizationId;
  let page_OrganizationRepos_1440 = 1440 + Math.floor(Math.random() * 99);
  createOrgRepo(body_OrganizationRepos_1440, id_OrganizationRepos_1440, limit_OrganizationRepos_1440, org_OrganizationRepos_1440, page_OrganizationRepos_1440, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationReposExists(id_OrganizationRepos_1440);
  verifyOrganizationReposExists(id_OrganizationRepos_1440);
});

bthread("crud:OrganizationTeams:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_1450 = { "id": 1, "name": "body_OrganizationTeams_1450_obj" };
  let id_OrganizationTeams_1450 = 1450 + Math.floor(Math.random() * 99);
  let limit_OrganizationTeams_1450 = 1450 + Math.floor(Math.random() * 99);
  let org_OrganizationTeams_1450 = OrganizationId;
  let page_OrganizationTeams_1450 = 1450 + Math.floor(Math.random() * 99);
  orgCreateTeam(body_OrganizationTeams_1450, id_OrganizationTeams_1450, limit_OrganizationTeams_1450, org_OrganizationTeams_1450, page_OrganizationTeams_1450, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationTeamsExists(id_OrganizationTeams_1450);
  verifyOrganizationTeamsExists(id_OrganizationTeams_1450);
});

bthread("crud:Issues:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issues
  let body_Issues_1460 = { "id": 1, "name": "body_Issues_1460_obj" };
  let content_Issues_1460 = { "id": 1, "name": "content_Issues_1460_obj" };
  let id_Issues_1460 = RepositoryId;
  let index_Issues_1460 = 1460 + Math.floor(Math.random() * 99);
  let limit_Issues_1460 = 1460 + Math.floor(Math.random() * 99);
  let owner_Issues_1460 = "owner_Issues_1460_" + Math.floor(Math.random()*1000);
  let page_Issues_1460 = 1460 + Math.floor(Math.random() * 99);
  let position_Issues_1460 = 1460 + Math.floor(Math.random() * 99);
  let repo_Issues_1460 = "repo_Issues_1460_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(body_Issues_1460, content_Issues_1460, id_Issues_1460, index_Issues_1460, limit_Issues_1460, owner_Issues_1460, page_Issues_1460, position_Issues_1460, repo_Issues_1460, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_1460);
  // -> Updating Issues
  let body_Issues_upd_1460 = { "id": 1, "name": "body_Issues_upd_1460_obj" };
  let content_Issues_upd_1460 = { "id": 1, "name": "content_Issues_upd_1460_obj" };
  let id_Issues_upd_1460 = id_Issues_1460;
  let index_Issues_upd_1460 = 1460 + Math.floor(Math.random() * 99);
  let limit_Issues_upd_1460 = 1460 + Math.floor(Math.random() * 99);
  let owner_Issues_upd_1460 = "owner_Issues_upd_1460_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_1460 = 1460 + Math.floor(Math.random() * 99);
  let position_Issues_upd_1460 = 1460 + Math.floor(Math.random() * 99);
  let repo_Issues_upd_1460 = "repo_Issues_upd_1460_" + Math.floor(Math.random()*1000);
  moveIssuePin(body_Issues_upd_1460, content_Issues_upd_1460, id_Issues_upd_1460, index_Issues_upd_1460, limit_Issues_upd_1460, owner_Issues_upd_1460, page_Issues_upd_1460, position_Issues_upd_1460, repo_Issues_upd_1460, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_1460);
  // -> Deleting Parent Issues (Relational Intent Race)
  issueDeleteTime(owner_Issues_1460, repo_Issues_1460, index_Issues_1460, id_Issues_1460);

});

bthread("crud:Repository:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repository
  let EditRepoOption_Repository_1470 = "EditRepoOption_Repository_1470_" + Math.floor(Math.random()*1000);
  let body_Repository_1470 = { "id": 1, "name": "body_Repository_1470_obj" };
  let id_Repository_1470 = 1470 + Math.floor(Math.random() * 99);
  let limit_Repository_1470 = 1470 + Math.floor(Math.random() * 99);
  let owner_Repository_1470 = "owner_Repository_1470_" + Math.floor(Math.random()*1000);
  let page_Repository_1470 = 1470 + Math.floor(Math.random() * 99);
  let repo_Repository_1470 = "repo_Repository_1470_" + Math.floor(Math.random()*1000);
  repoMergeUpstream(EditRepoOption_Repository_1470, body_Repository_1470, id_Repository_1470, limit_Repository_1470, owner_Repository_1470, page_Repository_1470, repo_Repository_1470, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_1470);
  // -> Updating Repository
  let EditRepoOption_Repository_upd_1470 = "EditRepoOption_Repository_upd_1470_" + Math.floor(Math.random()*1000);
  let body_Repository_upd_1470 = { "id": 1, "name": "body_Repository_upd_1470_obj" };
  let id_Repository_upd_1470 = id_Repository_1470;
  let limit_Repository_upd_1470 = 1470 + Math.floor(Math.random() * 99);
  let owner_Repository_upd_1470 = "owner_Repository_upd_1470_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_1470 = 1470 + Math.floor(Math.random() * 99);
  let repo_Repository_upd_1470 = "repo_Repository_upd_1470_" + Math.floor(Math.random()*1000);
  repoEdit(EditRepoOption_Repository_upd_1470, body_Repository_upd_1470, id_Repository_upd_1470, limit_Repository_upd_1470, owner_Repository_upd_1470, page_Repository_upd_1470, repo_Repository_upd_1470, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_1470);
  // -> Deleting Parent Repository (Relational Intent Race)
  repoDeleteAvatar(owner_Repository_1470, repo_Repository_1470);

});

bthread("crud:Variables:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Variables
  let CreateVariableOption_Variables_1480 = "CreateVariableOption_Variables_1480_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_1480 = "2025-01-25T12:00:00Z";
  let body_Variables_1480 = { "id": 1, "name": "body_Variables_1480_obj" };
  let id_Variables_1480 = RepositoryId;
  let limit_Variables_1480 = 1480 + Math.floor(Math.random() * 99);
  let owner_Variables_1480 = "owner_Variables_1480_" + Math.floor(Math.random()*1000);
  let page_Variables_1480 = 1480 + Math.floor(Math.random() * 99);
  let repo_Variables_1480 = "repo_Variables_1480_" + Math.floor(Math.random()*1000);
  let variablename_Variables_1480 = "variablename_Variables_1480_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_1480, UpdateVariableOption_Variables_1480, body_Variables_1480, id_Variables_1480, limit_Variables_1480, owner_Variables_1480, page_Variables_1480, repo_Variables_1480, variablename_Variables_1480, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_1480);
  // -> Updating Variables
  let CreateVariableOption_Variables_upd_1480 = "CreateVariableOption_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_1480 = "2025-01-25T12:00:00Z";
  let body_Variables_upd_1480 = { "id": 1, "name": "body_Variables_upd_1480_obj" };
  let id_Variables_upd_1480 = id_Variables_1480;
  let limit_Variables_upd_1480 = 1480 + Math.floor(Math.random() * 99);
  let owner_Variables_upd_1480 = "owner_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_1480 = 1480 + Math.floor(Math.random() * 99);
  let repo_Variables_upd_1480 = "repo_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_1480 = "variablename_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_1480, UpdateVariableOption_Variables_upd_1480, body_Variables_upd_1480, id_Variables_upd_1480, limit_Variables_upd_1480, owner_Variables_upd_1480, page_Variables_upd_1480, repo_Variables_upd_1480, variablename_Variables_upd_1480, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_1480);
  // -> Deleting Leaf Variables (Standard)
  deleteRepoVariable(owner_Variables_1480, repo_Variables_1480, variablename_Variables_1480);
  verifyVariablesDoesNotExist(id_Variables_1480);

});

bthread("crud:Branches:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let body_Branches_1490 = { "id": 1, "name": "body_Branches_1490_obj" };
  let branch_Branches_1490 = "branch_Branches_1490_" + Math.floor(Math.random()*1000);
  let id_Branches_1490 = RepositoryId;
  let limit_Branches_1490 = 1490 + Math.floor(Math.random() * 99);
  let owner_Branches_1490 = "owner_Branches_1490_" + Math.floor(Math.random()*1000);
  let page_Branches_1490 = 1490 + Math.floor(Math.random() * 99);
  let repo_Branches_1490 = "repo_Branches_1490_" + Math.floor(Math.random()*1000);
  repoCreateBranch(body_Branches_1490, branch_Branches_1490, id_Branches_1490, limit_Branches_1490, owner_Branches_1490, page_Branches_1490, repo_Branches_1490, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_1490);
  // -> Updating Branches
  let body_Branches_upd_1490 = { "id": 1, "name": "body_Branches_upd_1490_obj" };
  let branch_Branches_upd_1490 = "branch_Branches_upd_1490_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_1490 = id_Branches_1490;
  let limit_Branches_upd_1490 = 1490 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_1490 = "owner_Branches_upd_1490_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_1490 = 1490 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_1490 = "repo_Branches_upd_1490_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(body_Branches_upd_1490, branch_Branches_upd_1490, id_Branches_upd_1490, limit_Branches_upd_1490, owner_Branches_upd_1490, page_Branches_upd_1490, repo_Branches_upd_1490, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_1490);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_1490, repo_Branches_1490, branch_Branches_1490);
  verifyBranchesDoesNotExist(id_Branches_1490);

});

bthread("crud:Collaborators:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let body_Collaborators_1500 = { "id": 1, "name": "body_Collaborators_1500_obj" };
  let collaborator_Collaborators_1500 = "collaborator_Collaborators_1500_" + Math.floor(Math.random()*1000);
  let id_Collaborators_1500 = RepositoryId;
  let limit_Collaborators_1500 = 1500 + Math.floor(Math.random() * 99);
  let owner_Collaborators_1500 = "owner_Collaborators_1500_" + Math.floor(Math.random()*1000);
  let page_Collaborators_1500 = 1500 + Math.floor(Math.random() * 99);
  let repo_Collaborators_1500 = "repo_Collaborators_1500_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(body_Collaborators_1500, collaborator_Collaborators_1500, id_Collaborators_1500, limit_Collaborators_1500, owner_Collaborators_1500, page_Collaborators_1500, repo_Collaborators_1500, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_1500);
  verifyCollaboratorsExists(id_Collaborators_1500);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_1500, repo_Collaborators_1500, collaborator_Collaborators_1500);
  verifyCollaboratorsDoesNotExist(id_Collaborators_1500);

});

bthread("crud:Repositories:linear:3", function () {
  // -> Creating Repositories
  let CreateRepoOption_Repositories_1510 = "CreateRepoOption_Repositories_1510_" + Math.floor(Math.random()*1000);
  let body_Repositories_1510 = { "id": 1, "name": "body_Repositories_1510_obj" };
  let id_Repositories_1510 = 1510 + Math.floor(Math.random() * 99);
  let limit_Repositories_1510 = 1510 + Math.floor(Math.random() * 99);
  let owner_Repositories_1510 = "owner_Repositories_1510_" + Math.floor(Math.random()*1000);
  let page_Repositories_1510 = 1510 + Math.floor(Math.random() * 99);
  let repo_Repositories_1510 = "repo_Repositories_1510_" + Math.floor(Math.random()*1000);
  let username_Repositories_1510 = "username_Repositories_1510";
  createCurrentUserRepo(CreateRepoOption_Repositories_1510, body_Repositories_1510, id_Repositories_1510, limit_Repositories_1510, owner_Repositories_1510, page_Repositories_1510, repo_Repositories_1510, username_Repositories_1510, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_1510);
  // -> Updating Repositories
  let CreateRepoOption_Repositories_upd_1510 = "CreateRepoOption_Repositories_upd_1510_" + Math.floor(Math.random()*1000);
  let body_Repositories_upd_1510 = { "id": 1, "name": "body_Repositories_upd_1510_obj" };
  let id_Repositories_upd_1510 = id_Repositories_1510;
  let limit_Repositories_upd_1510 = 1510 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_1510 = "owner_Repositories_upd_1510_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_1510 = 1510 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_1510 = "repo_Repositories_upd_1510_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_1510 = "username_Repositories_upd_1510";
  userCurrentPutSubscription(CreateRepoOption_Repositories_upd_1510, body_Repositories_upd_1510, id_Repositories_upd_1510, limit_Repositories_upd_1510, owner_Repositories_upd_1510, page_Repositories_upd_1510, repo_Repositories_upd_1510, username_Repositories_upd_1510, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_1510);
  // -> Deleting Leaf Repositories (Standard)
  userCurrentDeleteSubscription(owner_Repositories_1510, repo_Repositories_1510);
  verifyRepositoriesDoesNotExist(id_Repositories_1510);

});

bthread("crud:Forks:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_1520 = { "id": 1, "name": "body_Forks_1520_obj" };
  let id_Forks_1520 = RepositoryId;
  let limit_Forks_1520 = 1520 + Math.floor(Math.random() * 99);
  let owner_Forks_1520 = "owner_Forks_1520_" + Math.floor(Math.random()*1000);
  let page_Forks_1520 = 1520 + Math.floor(Math.random() * 99);
  let repo_Forks_1520 = "repo_Forks_1520_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_1520, id_Forks_1520, limit_Forks_1520, owner_Forks_1520, page_Forks_1520, repo_Forks_1520, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_1520);
  verifyForksExists(id_Forks_1520);
});

bthread("crud:IssueComments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_1530 = "before_IssueComments_1530_" + Math.floor(Math.random()*1000);
  let body_IssueComments_1530 = { "id": 1, "name": "body_IssueComments_1530_obj" };
  let id_IssueComments_1530 = IssuesId;
  let index_IssueComments_1530 = 1530 + Math.floor(Math.random() * 99);
  let owner_IssueComments_1530 = "owner_IssueComments_1530_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_1530 = "repo_IssueComments_1530_" + Math.floor(Math.random()*1000);
  let since_IssueComments_1530 = "since_IssueComments_1530_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_1530, body_IssueComments_1530, id_IssueComments_1530, index_IssueComments_1530, owner_IssueComments_1530, repo_IssueComments_1530, since_IssueComments_1530, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_1530);
  // -> Updating IssueComments
  let before_IssueComments_upd_1530 = "before_IssueComments_upd_1530_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_1530 = { "id": 1, "name": "body_IssueComments_upd_1530_obj" };
  let id_IssueComments_upd_1530 = id_IssueComments_1530;
  let index_IssueComments_upd_1530 = 1530 + Math.floor(Math.random() * 99);
  let owner_IssueComments_upd_1530 = "owner_IssueComments_upd_1530_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_1530 = "repo_IssueComments_upd_1530_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_1530 = "since_IssueComments_upd_1530_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_1530, body_IssueComments_upd_1530, id_IssueComments_upd_1530, index_IssueComments_upd_1530, owner_IssueComments_upd_1530, repo_IssueComments_upd_1530, since_IssueComments_upd_1530, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_1530);
  // -> Deleting Leaf IssueComments (Standard)
  issueDeleteCommentDeprecated(owner_IssueComments_1530, repo_IssueComments_1530, index_IssueComments_1530, id_IssueComments_1530);
  verifyIssueCommentsDoesNotExist(id_IssueComments_1530);

});

bthread("crud:IssueCommentAttachments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_1540 = "attachment_IssueCommentAttachments_1540_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_1540 = 1540 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_1540 = { "id": 1, "name": "body_IssueCommentAttachments_1540_obj" };
  let id_IssueCommentAttachments_1540 = IssuesId;
  let name_IssueCommentAttachments_1540 = "name_IssueCommentAttachments_1540_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_1540 = "owner_IssueCommentAttachments_1540_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_1540 = "repo_IssueCommentAttachments_1540_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_1540, attachment_id_IssueCommentAttachments_1540, body_IssueCommentAttachments_1540, id_IssueCommentAttachments_1540, name_IssueCommentAttachments_1540, owner_IssueCommentAttachments_1540, repo_IssueCommentAttachments_1540, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_1540);
  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_1540 = "attachment_IssueCommentAttachments_upd_1540_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_1540 = 1540 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_upd_1540 = { "id": 1, "name": "body_IssueCommentAttachments_upd_1540_obj" };
  let id_IssueCommentAttachments_upd_1540 = id_IssueCommentAttachments_1540;
  let name_IssueCommentAttachments_upd_1540 = "name_IssueCommentAttachments_upd_1540_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_1540 = "owner_IssueCommentAttachments_upd_1540_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_1540 = "repo_IssueCommentAttachments_upd_1540_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_1540, attachment_id_IssueCommentAttachments_upd_1540, body_IssueCommentAttachments_upd_1540, id_IssueCommentAttachments_upd_1540, name_IssueCommentAttachments_upd_1540, owner_IssueCommentAttachments_upd_1540, repo_IssueCommentAttachments_upd_1540, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_1540);
  // -> Deleting Leaf IssueCommentAttachments (Standard)
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_1540, repo_IssueCommentAttachments_1540, id_IssueCommentAttachments_1540, attachment_id_IssueCommentAttachments_1540);
  verifyIssueCommentAttachmentsDoesNotExist(id_IssueCommentAttachments_1540);

});

bthread("crud:IssueCommentReactions:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_1550 = { "id": 1, "name": "content_IssueCommentReactions_1550_obj" };
  let id_IssueCommentReactions_1550 = IssuesId;
  let owner_IssueCommentReactions_1550 = "owner_IssueCommentReactions_1550";
  let repo_IssueCommentReactions_1550 = "repo_IssueCommentReactions_1550_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_1550, id_IssueCommentReactions_1550, owner_IssueCommentReactions_1550, repo_IssueCommentReactions_1550, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_1550);
  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_1550);
  // -> Deleting Leaf IssueCommentReactions (Standard)
  issueDeleteCommentReaction(owner_IssueCommentReactions_1550, repo_IssueCommentReactions_1550, id_IssueCommentReactions_1550);
  verifyIssueCommentReactionsDoesNotExist(owner_IssueCommentReactions_1550);

});

bthread("crud:IssueAttachments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_1560 = "attachment_IssueAttachments_1560_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_1560 = 1560 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_1560 = { "id": 1, "name": "body_IssueAttachments_1560_obj" };
  let id_IssueAttachments_1560 = IssuesId;
  let index_IssueAttachments_1560 = 1560 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_1560 = "name_IssueAttachments_1560_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_1560 = "owner_IssueAttachments_1560_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_1560 = "repo_IssueAttachments_1560_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_1560, attachment_id_IssueAttachments_1560, body_IssueAttachments_1560, id_IssueAttachments_1560, index_IssueAttachments_1560, name_IssueAttachments_1560, owner_IssueAttachments_1560, repo_IssueAttachments_1560, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_1560);
  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_1560 = "attachment_IssueAttachments_upd_1560_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_1560 = 1560 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_upd_1560 = { "id": 1, "name": "body_IssueAttachments_upd_1560_obj" };
  let id_IssueAttachments_upd_1560 = id_IssueAttachments_1560;
  let index_IssueAttachments_upd_1560 = 1560 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_upd_1560 = "name_IssueAttachments_upd_1560_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_1560 = "owner_IssueAttachments_upd_1560_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_1560 = "repo_IssueAttachments_upd_1560_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_1560, attachment_id_IssueAttachments_upd_1560, body_IssueAttachments_upd_1560, id_IssueAttachments_upd_1560, index_IssueAttachments_upd_1560, name_IssueAttachments_upd_1560, owner_IssueAttachments_upd_1560, repo_IssueAttachments_upd_1560, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_1560);
  // -> Deleting Leaf IssueAttachments (Standard)
  issueDeleteIssueAttachment(owner_IssueAttachments_1560, repo_IssueAttachments_1560, index_IssueAttachments_1560, attachment_id_IssueAttachments_1560);
  verifyIssueAttachmentsDoesNotExist(id_IssueAttachments_1560);

});

bthread("crud:IssueBlocks:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_1570 = { "id": 1, "name": "body_IssueBlocks_1570_obj" };
  let index_IssueBlocks_1570 = "index_IssueBlocks_1570_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_1570 = 1570 + Math.floor(Math.random() * 99);
  let owner_IssueBlocks_1570 = "owner_IssueBlocks_1570";
  let page_IssueBlocks_1570 = 1570 + Math.floor(Math.random() * 99);
  let repo_IssueBlocks_1570 = "repo_IssueBlocks_1570_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_1570, index_IssueBlocks_1570, limit_IssueBlocks_1570, owner_IssueBlocks_1570, page_IssueBlocks_1570, repo_IssueBlocks_1570, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueBlocksExists(owner_IssueBlocks_1570);
  verifyIssueBlocksExists(owner_IssueBlocks_1570);
  // -> Deleting Leaf IssueBlocks (Standard)
  issueRemoveIssueBlocking(owner_IssueBlocks_1570, repo_IssueBlocks_1570, index_IssueBlocks_1570);
  verifyIssueBlocksDoesNotExist(owner_IssueBlocks_1570);

});

bthread("crud:IssueSubscriptions:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_1580 = IssuesId;
  let index_IssueSubscriptions_1580 = 1580 + Math.floor(Math.random() * 99);
  let limit_IssueSubscriptions_1580 = 1580 + Math.floor(Math.random() * 99);
  let owner_IssueSubscriptions_1580 = "owner_IssueSubscriptions_1580_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_1580 = 1580 + Math.floor(Math.random() * 99);
  let repo_IssueSubscriptions_1580 = "repo_IssueSubscriptions_1580_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_1580 = "user_IssueSubscriptions_1580_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_1580, index_IssueSubscriptions_1580, limit_IssueSubscriptions_1580, owner_IssueSubscriptions_1580, page_IssueSubscriptions_1580, repo_IssueSubscriptions_1580, user_IssueSubscriptions_1580, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueSubscriptionsExists(id_IssueSubscriptions_1580);
  verifyIssueSubscriptionsExists(id_IssueSubscriptions_1580);
  // -> Deleting Leaf IssueSubscriptions (Standard)
  issueDeleteSubscription(owner_IssueSubscriptions_1580, repo_IssueSubscriptions_1580, index_IssueSubscriptions_1580, user_IssueSubscriptions_1580);
  verifyIssueSubscriptionsDoesNotExist(id_IssueSubscriptions_1580);

});

bthread("crud:IssueTimes:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_1590 = "before_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_1590 = { "id": 1, "name": "body_IssueTimes_1590_obj" };
  let index_IssueTimes_1590 = 1590 + Math.floor(Math.random() * 99);
  let limit_IssueTimes_1590 = 1590 + Math.floor(Math.random() * 99);
  let owner_IssueTimes_1590 = "owner_IssueTimes_1590";
  let page_IssueTimes_1590 = 1590 + Math.floor(Math.random() * 99);
  let repo_IssueTimes_1590 = "repo_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_1590 = "since_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_1590 = "user_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_1590, body_IssueTimes_1590, index_IssueTimes_1590, limit_IssueTimes_1590, owner_IssueTimes_1590, page_IssueTimes_1590, repo_IssueTimes_1590, since_IssueTimes_1590, user_IssueTimes_1590, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueTimesExists(owner_IssueTimes_1590);
  verifyIssueTimesExists(owner_IssueTimes_1590);
  // -> Deleting Leaf IssueTimes (Standard)
  issueResetTime(owner_IssueTimes_1590, repo_IssueTimes_1590, index_IssueTimes_1590);
  verifyIssueTimesDoesNotExist(owner_IssueTimes_1590);

});

bthread("crud:RepositoryKeys:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_1600 = { "id": 1, "name": "body_RepositoryKeys_1600_obj" };
  let fingerprint_RepositoryKeys_1600 = "fingerprint_RepositoryKeys_1600_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_1600 = RepositoryId;
  let key_id_RepositoryKeys_1600 = 1600 + Math.floor(Math.random() * 99);
  let limit_RepositoryKeys_1600 = 1600 + Math.floor(Math.random() * 99);
  let owner_RepositoryKeys_1600 = "owner_RepositoryKeys_1600_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_1600 = 1600 + Math.floor(Math.random() * 99);
  let repo_RepositoryKeys_1600 = "repo_RepositoryKeys_1600_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_1600, fingerprint_RepositoryKeys_1600, id_RepositoryKeys_1600, key_id_RepositoryKeys_1600, limit_RepositoryKeys_1600, owner_RepositoryKeys_1600, page_RepositoryKeys_1600, repo_RepositoryKeys_1600, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryKeysExists(id_RepositoryKeys_1600);
  verifyRepositoryKeysExists(id_RepositoryKeys_1600);
  // -> Deleting Leaf RepositoryKeys (Standard)
  repoDeleteKey(owner_RepositoryKeys_1600, repo_RepositoryKeys_1600, id_RepositoryKeys_1600);
  verifyRepositoryKeysDoesNotExist(id_RepositoryKeys_1600);

});

bthread("crud:Issue:linear:3", function () {
  // -> Creating Issue
  let body_Issue_1610 = { "id": 1, "name": "body_Issue_1610_obj" };
  let id_Issue_1610 = 1610 + Math.floor(Math.random() * 99);
  let limit_Issue_1610 = 1610 + Math.floor(Math.random() * 99);
  let name_Issue_1610 = "name_Issue_1610_" + Math.floor(Math.random()*1000);
  let owner_Issue_1610 = "owner_Issue_1610_" + Math.floor(Math.random()*1000);
  let page_Issue_1610 = 1610 + Math.floor(Math.random() * 99);
  let repo_Issue_1610 = "repo_Issue_1610_" + Math.floor(Math.random()*1000);
  let state_Issue_1610 = "state_Issue_1610_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_1610, id_Issue_1610, limit_Issue_1610, name_Issue_1610, owner_Issue_1610, page_Issue_1610, repo_Issue_1610, state_Issue_1610, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_1610);
  verifyIssueExists(id_Issue_1610);
});

bthread("crud:MirrorSync:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating MirrorSync
  let id_MirrorSync_1620 = RepositoryId;
  let owner_MirrorSync_1620 = "owner_MirrorSync_1620_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_1620 = "repo_MirrorSync_1620_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_1620, owner_MirrorSync_1620, repo_MirrorSync_1620, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_1620);
  verifyMirrorSyncExists(id_MirrorSync_1620);
});

bthread("crud:PullRequests:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_1630 = { "id": 1, "name": "body_PullRequests_1630_obj" };
  let id_PullRequests_1630 = RepositoryId;
  let index_PullRequests_1630 = 1630 + Math.floor(Math.random() * 99);
  let limit_PullRequests_1630 = 1630 + Math.floor(Math.random() * 99);
  let owner_PullRequests_1630 = "owner_PullRequests_1630_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1630 = 1630 + Math.floor(Math.random() * 99);
  let repo_PullRequests_1630 = "repo_PullRequests_1630_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1630 = "skip_to_PullRequests_1630_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1630 = "whitespace_PullRequests_1630_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_1630, id_PullRequests_1630, index_PullRequests_1630, limit_PullRequests_1630, owner_PullRequests_1630, page_PullRequests_1630, repo_PullRequests_1630, skip_to_PullRequests_1630, whitespace_PullRequests_1630, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1630);
  // -> Updating PullRequests
  let body_PullRequests_upd_1630 = { "id": 1, "name": "body_PullRequests_upd_1630_obj" };
  let id_PullRequests_upd_1630 = id_PullRequests_1630;
  let index_PullRequests_upd_1630 = 1630 + Math.floor(Math.random() * 99);
  let limit_PullRequests_upd_1630 = 1630 + Math.floor(Math.random() * 99);
  let owner_PullRequests_upd_1630 = "owner_PullRequests_upd_1630_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1630 = 1630 + Math.floor(Math.random() * 99);
  let repo_PullRequests_upd_1630 = "repo_PullRequests_upd_1630_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1630 = "skip_to_PullRequests_upd_1630_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1630 = "whitespace_PullRequests_upd_1630_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1630, id_PullRequests_upd_1630, index_PullRequests_upd_1630, limit_PullRequests_upd_1630, owner_PullRequests_upd_1630, page_PullRequests_upd_1630, repo_PullRequests_upd_1630, skip_to_PullRequests_upd_1630, whitespace_PullRequests_upd_1630, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1630);
  // -> Deleting Parent PullRequests (Relational Intent Race)
  repoCancelScheduledAutoMerge(owner_PullRequests_1630, repo_PullRequests_1630, index_PullRequests_1630);

});

bthread("crud:PullReviewRequests:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1640 = { "id": 1, "name": "body_PullReviewRequests_1640_obj" };
  let index_PullReviewRequests_1640 = 1640 + Math.floor(Math.random() * 99);
  let owner_PullReviewRequests_1640 = "owner_PullReviewRequests_1640";
  let repo_PullReviewRequests_1640 = "repo_PullReviewRequests_1640_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1640, index_PullReviewRequests_1640, owner_PullReviewRequests_1640, repo_PullReviewRequests_1640, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewRequestsExists(owner_PullReviewRequests_1640);
  verifyPullReviewRequestsExists(owner_PullReviewRequests_1640);
  // -> Deleting Leaf PullReviewRequests (Standard)
  repoDeletePullReviewRequests(owner_PullReviewRequests_1640, repo_PullReviewRequests_1640, index_PullReviewRequests_1640);
  verifyPullReviewRequestsDoesNotExist(owner_PullReviewRequests_1640);

});

bthread("crud:PullReviews:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1650 = { "id": 1, "name": "body_PullReviews_1650_obj" };
  let id_PullReviews_1650 = PullRequestsId;
  let index_PullReviews_1650 = 1650 + Math.floor(Math.random() * 99);
  let limit_PullReviews_1650 = 1650 + Math.floor(Math.random() * 99);
  let owner_PullReviews_1650 = "owner_PullReviews_1650_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1650 = 1650 + Math.floor(Math.random() * 99);
  let repo_PullReviews_1650 = "repo_PullReviews_1650_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_1650, id_PullReviews_1650, index_PullReviews_1650, limit_PullReviews_1650, owner_PullReviews_1650, page_PullReviews_1650, repo_PullReviews_1650, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewsExists(id_PullReviews_1650);
  verifyPullReviewsExists(id_PullReviews_1650);
  // -> Deleting Parent PullReviews (Relational Intent Race)
  repoDeletePullReview(owner_PullReviews_1650, repo_PullReviews_1650, index_PullReviews_1650, id_PullReviews_1650);

});

bthread("crud:PullReviewDismissals:linear:3", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1660 = { "id": 1, "name": "body_PullReviewDismissals_1660_obj" };
  let id_PullReviewDismissals_1660 = PullReviewsId;
  let index_PullReviewDismissals_1660 = 1660 + Math.floor(Math.random() * 99);
  let owner_PullReviewDismissals_1660 = "owner_PullReviewDismissals_1660_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1660 = "repo_PullReviewDismissals_1660_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1660, id_PullReviewDismissals_1660, index_PullReviewDismissals_1660, owner_PullReviewDismissals_1660, repo_PullReviewDismissals_1660, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1660);
  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1660);
});

bthread("crud:PullReviewUndismissals:linear:3", function () {
  let deps = {};
  deps["PullReviewDismissals"] = matchAnyPullReviewDismissalsAdded();
  let pkMap = {"PullReviewDismissals": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewDismissalsId = captured["PullReviewDismissals"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1670 = PullReviewDismissalsId;
  let index_PullReviewUndismissals_1670 = 1670 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_1670 = "owner_PullReviewUndismissals_1670_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1670 = "repo_PullReviewUndismissals_1670_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1670, index_PullReviewUndismissals_1670, owner_PullReviewUndismissals_1670, repo_PullReviewUndismissals_1670, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1670);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1670);
});

bthread("crud:PullRequestUpdate:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullRequestUpdate
  let id_PullRequestUpdate_1680 = PullRequestsId;
  let index_PullRequestUpdate_1680 = 1680 + Math.floor(Math.random() * 99);
  let owner_PullRequestUpdate_1680 = "owner_PullRequestUpdate_1680_" + Math.floor(Math.random()*1000);
  let repo_PullRequestUpdate_1680 = "repo_PullRequestUpdate_1680_" + Math.floor(Math.random()*1000);
  let style_PullRequestUpdate_1680 = "style_PullRequestUpdate_1680_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(id_PullRequestUpdate_1680, index_PullRequestUpdate_1680, owner_PullRequestUpdate_1680, repo_PullRequestUpdate_1680, style_PullRequestUpdate_1680, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestUpdateExists(id_PullRequestUpdate_1680);
  verifyPullRequestUpdateExists(id_PullRequestUpdate_1680);
});

bthread("crud:PushMirrors:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PushMirrors
  let id_PushMirrors_1690 = RepositoryId;
  let limit_PushMirrors_1690 = 1690 + Math.floor(Math.random() * 99);
  let name_PushMirrors_1690 = "name_PushMirrors_1690_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1690 = "owner_PushMirrors_1690_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1690 = 1690 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_1690 = "repo_PushMirrors_1690_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1690, limit_PushMirrors_1690, name_PushMirrors_1690, owner_PushMirrors_1690, page_PushMirrors_1690, repo_PushMirrors_1690, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_1690);
  verifyPushMirrorsExists(id_PushMirrors_1690);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_1690, repo_PushMirrors_1690, name_PushMirrors_1690);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_1690);

});

bthread("crud:Releases:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_1700 = { "id": 1, "name": "body_Releases_1700_obj" };
  let draft_Releases_1700 = true;
  let id_Releases_1700 = RepositoryId;
  let limit_Releases_1700 = 1700 + Math.floor(Math.random() * 99);
  let owner_Releases_1700 = "owner_Releases_1700_" + Math.floor(Math.random()*1000);
  let page_Releases_1700 = 1700 + Math.floor(Math.random() * 99);
  let pre_release_Releases_1700 = true;
  let repo_Releases_1700 = "repo_Releases_1700_" + Math.floor(Math.random()*1000);
  let tag_Releases_1700 = "tag_Releases_1700_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_1700, draft_Releases_1700, id_Releases_1700, limit_Releases_1700, owner_Releases_1700, page_Releases_1700, pre_release_Releases_1700, repo_Releases_1700, tag_Releases_1700, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1700);
  // -> Updating Releases
  let body_Releases_upd_1700 = { "id": 1, "name": "body_Releases_upd_1700_obj" };
  let draft_Releases_upd_1700 = true;
  let id_Releases_upd_1700 = id_Releases_1700;
  let limit_Releases_upd_1700 = 1700 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_1700 = "owner_Releases_upd_1700_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1700 = 1700 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_1700 = true;
  let repo_Releases_upd_1700 = "repo_Releases_upd_1700_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_1700 = "tag_Releases_upd_1700_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_1700, draft_Releases_upd_1700, id_Releases_upd_1700, limit_Releases_upd_1700, owner_Releases_upd_1700, page_Releases_upd_1700, pre_release_Releases_upd_1700, repo_Releases_upd_1700, tag_Releases_upd_1700, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1700);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_1700, repo_Releases_1700, tag_Releases_1700);

});

bthread("crud:ReleaseAttachments:linear:3", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1710 = "attachment_ReleaseAttachments_1710_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1710 = 1710 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_1710 = { "id": 1, "name": "body_ReleaseAttachments_1710_obj" };
  let id_ReleaseAttachments_1710 = ReleasesId;
  let name_ReleaseAttachments_1710 = "name_ReleaseAttachments_1710_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1710 = "owner_ReleaseAttachments_1710_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1710 = "repo_ReleaseAttachments_1710_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1710, attachment_id_ReleaseAttachments_1710, body_ReleaseAttachments_1710, id_ReleaseAttachments_1710, name_ReleaseAttachments_1710, owner_ReleaseAttachments_1710, repo_ReleaseAttachments_1710, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1710);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1710 = "attachment_ReleaseAttachments_upd_1710_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1710 = 1710 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_1710 = { "id": 1, "name": "body_ReleaseAttachments_upd_1710_obj" };
  let id_ReleaseAttachments_upd_1710 = id_ReleaseAttachments_1710;
  let name_ReleaseAttachments_upd_1710 = "name_ReleaseAttachments_upd_1710_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1710 = "owner_ReleaseAttachments_upd_1710_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1710 = "repo_ReleaseAttachments_upd_1710_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1710, attachment_id_ReleaseAttachments_upd_1710, body_ReleaseAttachments_upd_1710, id_ReleaseAttachments_upd_1710, name_ReleaseAttachments_upd_1710, owner_ReleaseAttachments_upd_1710, repo_ReleaseAttachments_upd_1710, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1710);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1710, repo_ReleaseAttachments_1710, id_ReleaseAttachments_1710, attachment_id_ReleaseAttachments_1710);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_1710);

});

bthread("crud:TagProtections:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_1720 = { "id": 1, "name": "body_TagProtections_1720_obj" };
  let id_TagProtections_1720 = RepositoryId;
  let owner_TagProtections_1720 = "owner_TagProtections_1720_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1720 = "repo_TagProtections_1720_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1720, id_TagProtections_1720, owner_TagProtections_1720, repo_TagProtections_1720, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1720);
  // -> Updating TagProtections
  let body_TagProtections_upd_1720 = { "id": 1, "name": "body_TagProtections_upd_1720_obj" };
  let id_TagProtections_upd_1720 = id_TagProtections_1720;
  let owner_TagProtections_upd_1720 = "owner_TagProtections_upd_1720_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1720 = "repo_TagProtections_upd_1720_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1720, id_TagProtections_upd_1720, owner_TagProtections_upd_1720, repo_TagProtections_upd_1720, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1720);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_1720, repo_TagProtections_1720, id_TagProtections_1720);
  verifyTagProtectionsDoesNotExist(id_TagProtections_1720);

});

bthread("crud:Tags:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_1730 = { "id": 1, "name": "body_Tags_1730_obj" };
  let id_Tags_1730 = RepositoryId;
  let limit_Tags_1730 = 1730 + Math.floor(Math.random() * 99);
  let owner_Tags_1730 = "owner_Tags_1730_" + Math.floor(Math.random()*1000);
  let page_Tags_1730 = 1730 + Math.floor(Math.random() * 99);
  let repo_Tags_1730 = "repo_Tags_1730_" + Math.floor(Math.random()*1000);
  let tag_Tags_1730 = "tag_Tags_1730_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1730, id_Tags_1730, limit_Tags_1730, owner_Tags_1730, page_Tags_1730, repo_Tags_1730, tag_Tags_1730, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_1730);
  verifyTagsExists(id_Tags_1730);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_1730, repo_Tags_1730, tag_Tags_1730);
  verifyTagsDoesNotExist(id_Tags_1730);

});

bthread("crud:Topics:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_1740 = { "id": 1, "name": "body_Topics_1740_obj" };
  let limit_Topics_1740 = 1740 + Math.floor(Math.random() * 99);
  let owner_Topics_1740 = "owner_Topics_1740";
  let page_Topics_1740 = 1740 + Math.floor(Math.random() * 99);
  let q_Topics_1740 = "q_Topics_1740_" + Math.floor(Math.random()*1000);
  let repo_Topics_1740 = "repo_Topics_1740_" + Math.floor(Math.random()*1000);
  let topic_Topics_1740 = "topic_Topics_1740_" + Math.floor(Math.random()*1000);
  let topic1_Topics_1740 = "topic1_Topics_1740_" + Math.floor(Math.random()*1000);
  let topic2_Topics_1740 = "topic2_Topics_1740_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1740, limit_Topics_1740, owner_Topics_1740, page_Topics_1740, q_Topics_1740, repo_Topics_1740, topic_Topics_1740, topic1_Topics_1740, topic2_Topics_1740, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1740);
  // -> Updating Topics
  let body_Topics_upd_1740 = { "id": 1, "name": "body_Topics_upd_1740_obj" };
  let limit_Topics_upd_1740 = 1740 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_1740 = owner_Topics_1740;
  let page_Topics_upd_1740 = 1740 + Math.floor(Math.random() * 99);
  let q_Topics_upd_1740 = "q_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1740 = "repo_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1740 = "topic_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_1740 = "topic1_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_1740 = "topic2_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1740, limit_Topics_upd_1740, owner_Topics_upd_1740, page_Topics_upd_1740, q_Topics_upd_1740, repo_Topics_upd_1740, topic_Topics_upd_1740, topic1_Topics_upd_1740, topic2_Topics_upd_1740, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1740);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_1740, repo_Topics_1740, topic_Topics_1740);
  verifyTopicsDoesNotExist(owner_Topics_1740);

});

bthread("crud:RepositoryTransfer:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1750 = { "id": 1, "name": "body_RepositoryTransfer_1750_obj" };
  let id_RepositoryTransfer_1750 = RepositoryId;
  let owner_RepositoryTransfer_1750 = "owner_RepositoryTransfer_1750_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1750 = "repo_RepositoryTransfer_1750_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1750 = "transferOptions_RepositoryTransfer_1750_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1750, id_RepositoryTransfer_1750, owner_RepositoryTransfer_1750, repo_RepositoryTransfer_1750, transferOptions_RepositoryTransfer_1750, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_1750);
  verifyRepositoryTransferExists(id_RepositoryTransfer_1750);
});

bthread("crud:WikiPage:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_1760 = { "id": 1, "name": "body_WikiPage_1760_obj" };
  let id_WikiPage_1760 = RepositoryId;
  let owner_WikiPage_1760 = "owner_WikiPage_1760_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_1760 = "pageName_WikiPage_1760_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_1760 = "repo_WikiPage_1760_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_1760 = "wikiPageOptions_WikiPage_1760_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_1760, id_WikiPage_1760, owner_WikiPage_1760, pageName_WikiPage_1760, repo_WikiPage_1760, wikiPageOptions_WikiPage_1760, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_1760);
  // -> Updating WikiPage
  let body_WikiPage_upd_1760 = { "id": 1, "name": "body_WikiPage_upd_1760_obj" };
  let id_WikiPage_upd_1760 = id_WikiPage_1760;
  let owner_WikiPage_upd_1760 = "owner_WikiPage_upd_1760_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_1760 = "pageName_WikiPage_upd_1760_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_1760 = "repo_WikiPage_upd_1760_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_1760 = "wikiPageOptions_WikiPage_upd_1760_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_1760, id_WikiPage_upd_1760, owner_WikiPage_upd_1760, pageName_WikiPage_upd_1760, repo_WikiPage_upd_1760, wikiPageOptions_WikiPage_upd_1760, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_1760);
  // -> Deleting Leaf WikiPage (Standard)
  repoDeleteWikiPage(owner_WikiPage_1760, repo_WikiPage_1760, pageName_WikiPage_1760);
  verifyWikiPageDoesNotExist(id_WikiPage_1760);

});

bthread("crud:TeamMembers:linear:3", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1770 = OrganizationTeamsId;
  let limit_TeamMembers_1770 = 1770 + Math.floor(Math.random() * 99);
  let page_TeamMembers_1770 = 1770 + Math.floor(Math.random() * 99);
  let username_TeamMembers_1770 = "username_TeamMembers_1770";
  orgAddTeamMember(id_TeamMembers_1770, limit_TeamMembers_1770, page_TeamMembers_1770, username_TeamMembers_1770, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_1770);
  verifyTeamMembersExists(id_TeamMembers_1770);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_1770);
  verifyTeamMembersDoesNotExist(id_TeamMembers_1770);

});

bthread("crud:TeamRepos:linear:3", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamRepos
  let id_TeamRepos_1780 = OrganizationTeamsId;
  let limit_TeamRepos_1780 = 1780 + Math.floor(Math.random() * 99);
  let org_TeamRepos_1780 = "org_TeamRepos_1780_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_1780 = 1780 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_1780 = "repo_TeamRepos_1780_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1780, limit_TeamRepos_1780, org_TeamRepos_1780, page_TeamRepos_1780, repo_TeamRepos_1780, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_1780);
  verifyTeamReposExists(id_TeamRepos_1780);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_1780);
  verifyTeamReposDoesNotExist(id_TeamRepos_1780);

});

bthread("crud:UserVariables:linear:3", function () {
  // -> Creating UserVariables
  let body_UserVariables_1790 = { "id": 1, "name": "body_UserVariables_1790_obj" };
  let variablename_UserVariables_1790 = "variablename_UserVariables_1790";
  createUserVariable(body_UserVariables_1790, variablename_UserVariables_1790, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1790);
  // -> Updating UserVariables
  let body_UserVariables_upd_1790 = { "id": 1, "name": "body_UserVariables_upd_1790_obj" };
  let variablename_UserVariables_upd_1790 = variablename_UserVariables_1790;
  updateUserVariable(body_UserVariables_upd_1790, variablename_UserVariables_upd_1790, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1790);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_1790);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_1790);

});

bthread("crud:OAuth2Applications:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1800 = { "id": 1, "name": "body_OAuth2Applications_1800_obj" };
  let id_OAuth2Applications_1800 = 1800 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_1800 = 1800 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_1800 = 1800 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_1800, id_OAuth2Applications_1800, limit_OAuth2Applications_1800, page_OAuth2Applications_1800, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1800);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1800 = { "id": 1, "name": "body_OAuth2Applications_upd_1800_obj" };
  let id_OAuth2Applications_upd_1800 = id_OAuth2Applications_1800;
  let limit_OAuth2Applications_upd_1800 = 1800 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_1800 = 1800 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1800, id_OAuth2Applications_upd_1800, limit_OAuth2Applications_upd_1800, page_OAuth2Applications_upd_1800, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1800);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_1800);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_1800);

});

bthread("crud:UserAvatar:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_1810 = { "id": 1, "name": "body_UserAvatar_1810_obj" };
  let id_UserAvatar_1810 = 1810 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_1810, id_UserAvatar_1810, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_1810);
  verifyUserAvatarExists(id_UserAvatar_1810);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_1810);
  verifyUserAvatarDoesNotExist(id_UserAvatar_1810);

});

bthread("crud:UserEmails:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_1820 = { "id": 1, "name": "body_UserEmails_1820_obj" };
  let id_UserEmails_1820 = 1820 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_1820, id_UserEmails_1820, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_1820);
  verifyUserEmailsExists(id_UserEmails_1820);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_1820);
  verifyUserEmailsDoesNotExist(id_UserEmails_1820);

});

bthread("crud:GPGKeys:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_1830 = { "id": 1, "name": "Form_GPGKeys_1830_obj" };
  let id_GPGKeys_1830 = 1830 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_1830 = 1830 + Math.floor(Math.random() * 99);
  let page_GPGKeys_1830 = 1830 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_1830, id_GPGKeys_1830, limit_GPGKeys_1830, page_GPGKeys_1830, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_1830);
  verifyGPGKeysExists(id_GPGKeys_1830);
  // -> Deleting Leaf GPGKeys (Standard)
  userCurrentDeleteGPGKey(id_GPGKeys_1830);
  verifyGPGKeysDoesNotExist(id_GPGKeys_1830);

});

bthread("crud:GPGKeyVerification:linear:3", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_1840 = 1840 + Math.floor(Math.random() * 99);
  userVerifyGPGKey(id_GPGKeyVerification_1840, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1840);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1840);
});

bthread("crud:Keys:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Keys
  let CreateKeyOption_Keys_1850 = "CreateKeyOption_Keys_1850_" + Math.floor(Math.random()*1000);
  let body_Keys_1850 = { "id": 1, "name": "body_Keys_1850_obj" };
  let fingerprint_Keys_1850 = "fingerprint_Keys_1850_" + Math.floor(Math.random()*1000);
  let id_Keys_1850 = 1850 + Math.floor(Math.random() * 99);
  let limit_Keys_1850 = 1850 + Math.floor(Math.random() * 99);
  let page_Keys_1850 = 1850 + Math.floor(Math.random() * 99);
  userCurrentPostKey(CreateKeyOption_Keys_1850, body_Keys_1850, fingerprint_Keys_1850, id_Keys_1850, limit_Keys_1850, page_Keys_1850, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_1850);
  verifyKeysExists(id_Keys_1850);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_1850);
  verifyKeysDoesNotExist(id_Keys_1850);

});

bthread("crud:UserStarred:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating UserStarred
  let limit_UserStarred_1860 = 1860 + Math.floor(Math.random() * 99);
  let owner_UserStarred_1860 = "owner_UserStarred_1860";
  let page_UserStarred_1860 = 1860 + Math.floor(Math.random() * 99);
  let repo_UserStarred_1860 = "repo_UserStarred_1860_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1860, owner_UserStarred_1860, page_UserStarred_1860, repo_UserStarred_1860, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_1860);
  verifyUserStarredExists(owner_UserStarred_1860);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_1860, repo_UserStarred_1860);
  verifyUserStarredDoesNotExist(owner_UserStarred_1860);

});

// --- PHASE 1: GLOBAL HYPER-SEEDING for gitea ---
// --- Hyper-Story Constellation Copy 1 ---
// --- Hyper-Story Constellation Copy 2 ---
// --- Hyper-Story Constellation Copy 3 ---