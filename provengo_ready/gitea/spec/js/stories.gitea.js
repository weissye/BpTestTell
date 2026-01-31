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

bthread("monitor:Variables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyVariablesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyVariablesExists(idVal);
  } });

bthread("monitor:Avatar:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAvatarAdded() });
    let idVal = e.data.org || e.data.id;
    verifyAvatarExists(idVal);
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

bthread("monitor:Issue:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssueExists(idVal);
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

bthread("monitor:IssueComments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssueCommentsExists(idVal);
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

bthread("monitor:Keys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyKeysAdded() });
    let idVal = e.data.id || e.data.id;
    verifyKeysExists(idVal);
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

bthread("monitor:WikiPages:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWikiPagesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyWikiPagesExists(idVal);
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
  let body_Hooks_120 = { "id": 1, "name": "body_Hooks_120_obj" };
  let id_Hooks_120 = 120 + Math.floor(Math.random() * 99);
  let limit_Hooks_120 = 120 + Math.floor(Math.random() * 99);
  let page_Hooks_120 = 120 + Math.floor(Math.random() * 99);
  userCreateHook(body_Hooks_120, id_Hooks_120, limit_Hooks_120, page_Hooks_120, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_120);
  // -> Updating Hooks
  let body_Hooks_upd_120 = { "id": 1, "name": "body_Hooks_upd_120_obj" };
  let id_Hooks_upd_120 = id_Hooks_120;
  let limit_Hooks_upd_120 = 120 + Math.floor(Math.random() * 99);
  let page_Hooks_upd_120 = 120 + Math.floor(Math.random() * 99);
  userEditHook(body_Hooks_upd_120, id_Hooks_upd_120, limit_Hooks_upd_120, page_Hooks_upd_120, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_120);
  // -> Deleting Leaf Hooks (Standard)
  userDeleteHook(id_Hooks_120);
  verifyHooksDoesNotExist(id_Hooks_120);

});

bthread("crud:UnadoptedRepositories:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Users": "username", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let RepositoriesId = captured["Repositories"];
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
  let EditUserOption_Users_140 = "EditUserOption_Users_140_" + Math.floor(Math.random()*1000);
  let body_Users_140 = { "id": 1, "name": "body_Users_140_obj" };
  let limit_Users_140 = 140 + Math.floor(Math.random() * 99);
  let page_Users_140 = 140 + Math.floor(Math.random() * 99);
  let token_Users_140 = "token_Users_140_" + Math.floor(Math.random()*1000);
  let username_Users_140 = "username_Users_140";
  userCreateToken(EditUserOption_Users_140, body_Users_140, limit_Users_140, page_Users_140, token_Users_140, username_Users_140, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_140);
  // -> Updating Users
  let EditUserOption_Users_upd_140 = "EditUserOption_Users_upd_140_" + Math.floor(Math.random()*1000);
  let body_Users_upd_140 = { "id": 1, "name": "body_Users_upd_140_obj" };
  let limit_Users_upd_140 = 140 + Math.floor(Math.random() * 99);
  let page_Users_upd_140 = 140 + Math.floor(Math.random() * 99);
  let token_Users_upd_140 = "token_Users_upd_140_" + Math.floor(Math.random()*1000);
  let username_Users_upd_140 = username_Users_140;
  adminEditUser(EditUserOption_Users_upd_140, body_Users_upd_140, limit_Users_upd_140, page_Users_upd_140, token_Users_upd_140, username_Users_upd_140, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_140);
  // -> Deleting Parent Users (Relational Intent Race)
  userDeleteAccessToken(username_Users_140, token_Users_140);

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
  let page_Organization_220 = 220 + Math.floor(Math.random() * 99);
  let secretname_Organization_220 = "secretname_Organization_220_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_220, limit_Organization_220, org_Organization_220, page_Organization_220, secretname_Organization_220, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_220);
  // -> Updating Organization
  let body_Organization_upd_220 = { "id": 1, "name": "body_Organization_upd_220_obj" };
  let limit_Organization_upd_220 = 220 + Math.floor(Math.random() * 99);
  let org_Organization_upd_220 = org_Organization_220;
  let page_Organization_upd_220 = 220 + Math.floor(Math.random() * 99);
  let secretname_Organization_upd_220 = "secretname_Organization_upd_220_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_220, limit_Organization_upd_220, org_Organization_upd_220, page_Organization_upd_220, secretname_Organization_upd_220, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_220);
  // -> Deleting Parent Organization (Relational Intent Race)
  orgDelete(org_Organization_220);

});

bthread("crud:Variables:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_230 = "CreateVariableOption_Variables_230_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_230 = "2025-01-25T12:00:00Z";
  let body_Variables_230 = { "id": 1, "name": "body_Variables_230_obj" };
  let id_Variables_230 = RepositoriesId;
  let limit_Variables_230 = 230 + Math.floor(Math.random() * 99);
  let owner_Variables_230 = "owner_Variables_230_" + Math.floor(Math.random()*1000);
  let page_Variables_230 = 230 + Math.floor(Math.random() * 99);
  let repo_Variables_230 = "repo_Variables_230_" + Math.floor(Math.random()*1000);
  let variablename_Variables_230 = "variablename_Variables_230_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_230, UpdateVariableOption_Variables_230, body_Variables_230, id_Variables_230, limit_Variables_230, owner_Variables_230, page_Variables_230, repo_Variables_230, variablename_Variables_230, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_230);
  // -> Updating Variables
  let CreateVariableOption_Variables_upd_230 = "CreateVariableOption_Variables_upd_230_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_230 = "2025-01-25T12:00:00Z";
  let body_Variables_upd_230 = { "id": 1, "name": "body_Variables_upd_230_obj" };
  let id_Variables_upd_230 = id_Variables_230;
  let limit_Variables_upd_230 = 230 + Math.floor(Math.random() * 99);
  let owner_Variables_upd_230 = "owner_Variables_upd_230_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_230 = 230 + Math.floor(Math.random() * 99);
  let repo_Variables_upd_230 = "repo_Variables_upd_230_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_230 = "variablename_Variables_upd_230_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_230, UpdateVariableOption_Variables_upd_230, body_Variables_upd_230, id_Variables_upd_230, limit_Variables_upd_230, owner_Variables_upd_230, page_Variables_upd_230, repo_Variables_upd_230, variablename_Variables_upd_230, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_230);
  // -> Deleting Leaf Variables (Standard)
  deleteRepoVariable(owner_Variables_230, repo_Variables_230, variablename_Variables_230);
  verifyVariablesDoesNotExist(id_Variables_230);

});

bthread("crud:Avatar:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating Avatar
  let UpdateUserAvatarOption_Avatar_240 = "2025-01-25T12:00:00Z";
  let body_Avatar_240 = { "id": 1, "name": "body_Avatar_240_obj" };
  let org_Avatar_240 = OrganizationId;
  orgUpdateAvatar(UpdateUserAvatarOption_Avatar_240, body_Avatar_240, org_Avatar_240, { expectedResponseCodes: [200, 201, 204] });

  verifyAvatarExists(org_Avatar_240);
  verifyAvatarExists(org_Avatar_240);
  // -> Deleting Leaf Avatar (Standard)
  orgDeleteAvatar(org_Avatar_240);
  verifyAvatarDoesNotExist(org_Avatar_240);

});

bthread("crud:Labels:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Labels
  let body_Labels_250 = { "id": 1, "name": "body_Labels_250_obj" };
  let id_Labels_250 = RepositoriesId;
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
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issues
  let content_Issues_280 = { "id": 1, "name": "content_Issues_280_obj" };
  let id_Issues_280 = RepositoriesId;
  let index_Issues_280 = 280 + Math.floor(Math.random() * 99);
  let limit_Issues_280 = 280 + Math.floor(Math.random() * 99);
  let owner_Issues_280 = "owner_Issues_280_" + Math.floor(Math.random()*1000);
  let page_Issues_280 = 280 + Math.floor(Math.random() * 99);
  let position_Issues_280 = 280 + Math.floor(Math.random() * 99);
  let repo_Issues_280 = "repo_Issues_280_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_280, id_Issues_280, index_Issues_280, limit_Issues_280, owner_Issues_280, page_Issues_280, position_Issues_280, repo_Issues_280, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_280);
  // -> Updating Issues
  let content_Issues_upd_280 = { "id": 1, "name": "content_Issues_upd_280_obj" };
  let id_Issues_upd_280 = id_Issues_280;
  let index_Issues_upd_280 = 280 + Math.floor(Math.random() * 99);
  let limit_Issues_upd_280 = 280 + Math.floor(Math.random() * 99);
  let owner_Issues_upd_280 = "owner_Issues_upd_280_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_280 = 280 + Math.floor(Math.random() * 99);
  let position_Issues_upd_280 = 280 + Math.floor(Math.random() * 99);
  let repo_Issues_upd_280 = "repo_Issues_upd_280_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_280, id_Issues_upd_280, index_Issues_upd_280, limit_Issues_upd_280, owner_Issues_upd_280, page_Issues_upd_280, position_Issues_upd_280, repo_Issues_upd_280, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_280);
  // -> Deleting Parent Issues (Relational Intent Race)
  issueDeleteTime(owner_Issues_280, repo_Issues_280, index_Issues_280, id_Issues_280);

});

bthread("crud:Repository:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Repository
  let EditRepoOption_Repository_290 = "EditRepoOption_Repository_290_" + Math.floor(Math.random()*1000);
  let body_Repository_290 = { "id": 1, "name": "body_Repository_290_obj" };
  let id_Repository_290 = RepositoriesId;
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
  // -> Deleting Leaf Repository (Standard)
  repoDeleteAvatar(owner_Repository_290, repo_Repository_290);
  verifyRepositoryDoesNotExist(id_Repository_290);

});

bthread("crud:Branches:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_300 = "CreateBranchRepoOption_Branches_300_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_300 = "2025-01-25T12:00:00Z";
  let body_Branches_300 = { "id": 1, "name": "body_Branches_300_obj" };
  let branch_Branches_300 = "branch_Branches_300_" + Math.floor(Math.random()*1000);
  let id_Branches_300 = RepositoriesId;
  let limit_Branches_300 = 300 + Math.floor(Math.random() * 99);
  let owner_Branches_300 = "owner_Branches_300_" + Math.floor(Math.random()*1000);
  let page_Branches_300 = 300 + Math.floor(Math.random() * 99);
  let repo_Branches_300 = "repo_Branches_300_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_300, UpdateBranchRepoOption_Branches_300, body_Branches_300, branch_Branches_300, id_Branches_300, limit_Branches_300, owner_Branches_300, page_Branches_300, repo_Branches_300, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_300);
  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_300 = "CreateBranchRepoOption_Branches_upd_300_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_300 = "2025-01-25T12:00:00Z";
  let body_Branches_upd_300 = { "id": 1, "name": "body_Branches_upd_300_obj" };
  let branch_Branches_upd_300 = "branch_Branches_upd_300_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_300 = id_Branches_300;
  let limit_Branches_upd_300 = 300 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_300 = "owner_Branches_upd_300_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_300 = 300 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_300 = "repo_Branches_upd_300_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_300, UpdateBranchRepoOption_Branches_upd_300, body_Branches_upd_300, branch_Branches_upd_300, id_Branches_upd_300, limit_Branches_upd_300, owner_Branches_upd_300, page_Branches_upd_300, repo_Branches_upd_300, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_300);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_300, repo_Branches_300, branch_Branches_300);
  verifyBranchesDoesNotExist(id_Branches_300);

});

bthread("crud:Collaborators:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_310 = "AddCollaboratorOption_Collaborators_310_" + Math.floor(Math.random()*1000);
  let body_Collaborators_310 = { "id": 1, "name": "body_Collaborators_310_obj" };
  let collaborator_Collaborators_310 = "collaborator_Collaborators_310_" + Math.floor(Math.random()*1000);
  let id_Collaborators_310 = RepositoriesId;
  let limit_Collaborators_310 = 310 + Math.floor(Math.random() * 99);
  let owner_Collaborators_310 = "owner_Collaborators_310_" + Math.floor(Math.random()*1000);
  let page_Collaborators_310 = 310 + Math.floor(Math.random() * 99);
  let repo_Collaborators_310 = "repo_Collaborators_310_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_310, body_Collaborators_310, collaborator_Collaborators_310, id_Collaborators_310, limit_Collaborators_310, owner_Collaborators_310, page_Collaborators_310, repo_Collaborators_310, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_310);
  verifyCollaboratorsExists(id_Collaborators_310);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_310, repo_Collaborators_310, collaborator_Collaborators_310);
  verifyCollaboratorsDoesNotExist(id_Collaborators_310);

});

bthread("crud:Repositories:linear:1", function () {
  // -> Creating Repositories
  let body_Repositories_320 = { "id": 1, "name": "body_Repositories_320_obj" };
  let id_Repositories_320 = 320 + Math.floor(Math.random() * 99);
  let limit_Repositories_320 = 320 + Math.floor(Math.random() * 99);
  let owner_Repositories_320 = "owner_Repositories_320_" + Math.floor(Math.random()*1000);
  let page_Repositories_320 = 320 + Math.floor(Math.random() * 99);
  let repo_Repositories_320 = "repo_Repositories_320_" + Math.floor(Math.random()*1000);
  let username_Repositories_320 = "username_Repositories_320";
  createCurrentUserRepo(body_Repositories_320, id_Repositories_320, limit_Repositories_320, owner_Repositories_320, page_Repositories_320, repo_Repositories_320, username_Repositories_320, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_320);
  // -> Updating Repositories
  let body_Repositories_upd_320 = { "id": 1, "name": "body_Repositories_upd_320_obj" };
  let id_Repositories_upd_320 = id_Repositories_320;
  let limit_Repositories_upd_320 = 320 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_320 = "owner_Repositories_upd_320_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_320 = 320 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_320 = "repo_Repositories_upd_320_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_320 = "username_Repositories_upd_320";
  userCurrentPutSubscription(body_Repositories_upd_320, id_Repositories_upd_320, limit_Repositories_upd_320, owner_Repositories_upd_320, page_Repositories_upd_320, repo_Repositories_upd_320, username_Repositories_upd_320, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_320);
  // -> Deleting Parent Repositories (Relational Intent Race)
  userCurrentDeleteSubscription(owner_Repositories_320, repo_Repositories_320);

});

bthread("crud:Forks:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Forks
  let body_Forks_330 = { "id": 1, "name": "body_Forks_330_obj" };
  let id_Forks_330 = RepositoriesId;
  let limit_Forks_330 = 330 + Math.floor(Math.random() * 99);
  let owner_Forks_330 = "owner_Forks_330_" + Math.floor(Math.random()*1000);
  let page_Forks_330 = 330 + Math.floor(Math.random() * 99);
  let repo_Forks_330 = "repo_Forks_330_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_330, id_Forks_330, limit_Forks_330, owner_Forks_330, page_Forks_330, repo_Forks_330, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_330);
  verifyForksExists(id_Forks_330);
});

bthread("crud:Issue:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issue
  let body_Issue_340 = { "id": 1, "name": "body_Issue_340_obj" };
  let id_Issue_340 = RepositoriesId;
  let limit_Issue_340 = 340 + Math.floor(Math.random() * 99);
  let name_Issue_340 = "name_Issue_340_" + Math.floor(Math.random()*1000);
  let owner_Issue_340 = "owner_Issue_340_" + Math.floor(Math.random()*1000);
  let page_Issue_340 = 340 + Math.floor(Math.random() * 99);
  let repo_Issue_340 = "repo_Issue_340_" + Math.floor(Math.random()*1000);
  let state_Issue_340 = "state_Issue_340_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_340, id_Issue_340, limit_Issue_340, name_Issue_340, owner_Issue_340, page_Issue_340, repo_Issue_340, state_Issue_340, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_340);
  // -> Updating Issue
  let body_Issue_upd_340 = { "id": 1, "name": "body_Issue_upd_340_obj" };
  let id_Issue_upd_340 = id_Issue_340;
  let limit_Issue_upd_340 = 340 + Math.floor(Math.random() * 99);
  let name_Issue_upd_340 = "name_Issue_upd_340_" + Math.floor(Math.random()*1000);
  let owner_Issue_upd_340 = "owner_Issue_upd_340_" + Math.floor(Math.random()*1000);
  let page_Issue_upd_340 = 340 + Math.floor(Math.random() * 99);
  let repo_Issue_upd_340 = "repo_Issue_upd_340_" + Math.floor(Math.random()*1000);
  let state_Issue_upd_340 = "state_Issue_upd_340_" + Math.floor(Math.random()*1000);
  issueEditComment(body_Issue_upd_340, id_Issue_upd_340, limit_Issue_upd_340, name_Issue_upd_340, owner_Issue_upd_340, page_Issue_upd_340, repo_Issue_upd_340, state_Issue_upd_340, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_340);
  // -> Deleting Leaf Issue (Standard)
  issueDeleteComment(owner_Issue_340, repo_Issue_340, id_Issue_340);
  verifyIssueDoesNotExist(id_Issue_340);

});

bthread("crud:IssueCommentAttachments:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_350 = "attachment_IssueCommentAttachments_350_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_350 = 350 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_350 = { "id": 1, "name": "body_IssueCommentAttachments_350_obj" };
  let id_IssueCommentAttachments_350 = IssuesId;
  let name_IssueCommentAttachments_350 = "name_IssueCommentAttachments_350_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_350 = "owner_IssueCommentAttachments_350_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_350 = "repo_IssueCommentAttachments_350_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_350, attachment_id_IssueCommentAttachments_350, body_IssueCommentAttachments_350, id_IssueCommentAttachments_350, name_IssueCommentAttachments_350, owner_IssueCommentAttachments_350, repo_IssueCommentAttachments_350, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_350);
  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_350 = "attachment_IssueCommentAttachments_upd_350_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_350 = 350 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_upd_350 = { "id": 1, "name": "body_IssueCommentAttachments_upd_350_obj" };
  let id_IssueCommentAttachments_upd_350 = id_IssueCommentAttachments_350;
  let name_IssueCommentAttachments_upd_350 = "name_IssueCommentAttachments_upd_350_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_350 = "owner_IssueCommentAttachments_upd_350_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_350 = "repo_IssueCommentAttachments_upd_350_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_350, attachment_id_IssueCommentAttachments_upd_350, body_IssueCommentAttachments_upd_350, id_IssueCommentAttachments_upd_350, name_IssueCommentAttachments_upd_350, owner_IssueCommentAttachments_upd_350, repo_IssueCommentAttachments_upd_350, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_350);
  // -> Deleting Leaf IssueCommentAttachments (Standard)
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_350, repo_IssueCommentAttachments_350, id_IssueCommentAttachments_350, attachment_id_IssueCommentAttachments_350);
  verifyIssueCommentAttachmentsDoesNotExist(id_IssueCommentAttachments_350);

});

bthread("crud:IssueCommentReactions:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_360 = { "id": 1, "name": "content_IssueCommentReactions_360_obj" };
  let id_IssueCommentReactions_360 = IssuesId;
  let owner_IssueCommentReactions_360 = "owner_IssueCommentReactions_360";
  let repo_IssueCommentReactions_360 = "repo_IssueCommentReactions_360_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_360, id_IssueCommentReactions_360, owner_IssueCommentReactions_360, repo_IssueCommentReactions_360, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_360);
  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_360);
  // -> Deleting Leaf IssueCommentReactions (Standard)
  issueDeleteCommentReaction(owner_IssueCommentReactions_360, repo_IssueCommentReactions_360, id_IssueCommentReactions_360);
  verifyIssueCommentReactionsDoesNotExist(owner_IssueCommentReactions_360);

});

bthread("crud:IssueAttachments:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_370 = "attachment_IssueAttachments_370_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_370 = 370 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_370 = { "id": 1, "name": "body_IssueAttachments_370_obj" };
  let id_IssueAttachments_370 = IssuesId;
  let index_IssueAttachments_370 = 370 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_370 = "name_IssueAttachments_370_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_370 = "owner_IssueAttachments_370_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_370 = "repo_IssueAttachments_370_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_370, attachment_id_IssueAttachments_370, body_IssueAttachments_370, id_IssueAttachments_370, index_IssueAttachments_370, name_IssueAttachments_370, owner_IssueAttachments_370, repo_IssueAttachments_370, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_370);
  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_370 = "attachment_IssueAttachments_upd_370_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_370 = 370 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_upd_370 = { "id": 1, "name": "body_IssueAttachments_upd_370_obj" };
  let id_IssueAttachments_upd_370 = id_IssueAttachments_370;
  let index_IssueAttachments_upd_370 = 370 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_upd_370 = "name_IssueAttachments_upd_370_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_370 = "owner_IssueAttachments_upd_370_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_370 = "repo_IssueAttachments_upd_370_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_370, attachment_id_IssueAttachments_upd_370, body_IssueAttachments_upd_370, id_IssueAttachments_upd_370, index_IssueAttachments_upd_370, name_IssueAttachments_upd_370, owner_IssueAttachments_upd_370, repo_IssueAttachments_upd_370, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_370);
  // -> Deleting Leaf IssueAttachments (Standard)
  issueDeleteIssueAttachment(owner_IssueAttachments_370, repo_IssueAttachments_370, index_IssueAttachments_370, attachment_id_IssueAttachments_370);
  verifyIssueAttachmentsDoesNotExist(id_IssueAttachments_370);

});

bthread("crud:IssueBlocks:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_380 = { "id": 1, "name": "body_IssueBlocks_380_obj" };
  let index_IssueBlocks_380 = "index_IssueBlocks_380_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_380 = 380 + Math.floor(Math.random() * 99);
  let owner_IssueBlocks_380 = "owner_IssueBlocks_380";
  let page_IssueBlocks_380 = 380 + Math.floor(Math.random() * 99);
  let repo_IssueBlocks_380 = "repo_IssueBlocks_380_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_380, index_IssueBlocks_380, limit_IssueBlocks_380, owner_IssueBlocks_380, page_IssueBlocks_380, repo_IssueBlocks_380, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueBlocksExists(owner_IssueBlocks_380);
  verifyIssueBlocksExists(owner_IssueBlocks_380);
  // -> Deleting Leaf IssueBlocks (Standard)
  issueRemoveIssueBlocking(owner_IssueBlocks_380, repo_IssueBlocks_380, index_IssueBlocks_380);
  verifyIssueBlocksDoesNotExist(owner_IssueBlocks_380);

});

bthread("crud:IssueComments:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_390 = "before_IssueComments_390_" + Math.floor(Math.random()*1000);
  let body_IssueComments_390 = { "id": 1, "name": "body_IssueComments_390_obj" };
  let id_IssueComments_390 = IssuesId;
  let index_IssueComments_390 = 390 + Math.floor(Math.random() * 99);
  let owner_IssueComments_390 = "owner_IssueComments_390_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_390 = "repo_IssueComments_390_" + Math.floor(Math.random()*1000);
  let since_IssueComments_390 = "since_IssueComments_390_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_390, body_IssueComments_390, id_IssueComments_390, index_IssueComments_390, owner_IssueComments_390, repo_IssueComments_390, since_IssueComments_390, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_390);
  // -> Updating IssueComments
  let before_IssueComments_upd_390 = "before_IssueComments_upd_390_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_390 = { "id": 1, "name": "body_IssueComments_upd_390_obj" };
  let id_IssueComments_upd_390 = id_IssueComments_390;
  let index_IssueComments_upd_390 = 390 + Math.floor(Math.random() * 99);
  let owner_IssueComments_upd_390 = "owner_IssueComments_upd_390_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_390 = "repo_IssueComments_upd_390_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_390 = "since_IssueComments_upd_390_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_390, body_IssueComments_upd_390, id_IssueComments_upd_390, index_IssueComments_upd_390, owner_IssueComments_upd_390, repo_IssueComments_upd_390, since_IssueComments_upd_390, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_390);
  // -> Deleting Leaf IssueComments (Standard)
  issueDeleteCommentDeprecated(owner_IssueComments_390, repo_IssueComments_390, index_IssueComments_390, id_IssueComments_390);
  verifyIssueCommentsDoesNotExist(id_IssueComments_390);

});

bthread("crud:IssueSubscriptions:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Repositories": "id", "Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let UsersId = captured["Users"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_400 = RepositoriesId;
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
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
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

bthread("crud:Keys:linear:1", function () {
  // -> Creating Keys
  let body_Keys_420 = { "id": 1, "name": "body_Keys_420_obj" };
  let fingerprint_Keys_420 = "fingerprint_Keys_420_" + Math.floor(Math.random()*1000);
  let id_Keys_420 = 420 + Math.floor(Math.random() * 99);
  let limit_Keys_420 = 420 + Math.floor(Math.random() * 99);
  let page_Keys_420 = 420 + Math.floor(Math.random() * 99);
  userCurrentPostKey(body_Keys_420, fingerprint_Keys_420, id_Keys_420, limit_Keys_420, page_Keys_420, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_420);
  verifyKeysExists(id_Keys_420);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_420);
  verifyKeysDoesNotExist(id_Keys_420);

});

bthread("crud:MirrorSync:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating MirrorSync
  let id_MirrorSync_430 = RepositoriesId;
  let owner_MirrorSync_430 = "owner_MirrorSync_430_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_430 = "repo_MirrorSync_430_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_430, owner_MirrorSync_430, repo_MirrorSync_430, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_430);
  verifyMirrorSyncExists(id_MirrorSync_430);
});

bthread("crud:PullRequests:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PullRequests
  let body_PullRequests_440 = { "id": 1, "name": "body_PullRequests_440_obj" };
  let id_PullRequests_440 = RepositoriesId;
  let index_PullRequests_440 = 440 + Math.floor(Math.random() * 99);
  let limit_PullRequests_440 = 440 + Math.floor(Math.random() * 99);
  let owner_PullRequests_440 = "owner_PullRequests_440_" + Math.floor(Math.random()*1000);
  let page_PullRequests_440 = 440 + Math.floor(Math.random() * 99);
  let repo_PullRequests_440 = "repo_PullRequests_440_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_440 = "skip_to_PullRequests_440_" + Math.floor(Math.random()*1000);
  let style_PullRequests_440 = "style_PullRequests_440_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_440 = "whitespace_PullRequests_440_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_440, id_PullRequests_440, index_PullRequests_440, limit_PullRequests_440, owner_PullRequests_440, page_PullRequests_440, repo_PullRequests_440, skip_to_PullRequests_440, style_PullRequests_440, whitespace_PullRequests_440, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_440);
  // -> Updating PullRequests
  let body_PullRequests_upd_440 = { "id": 1, "name": "body_PullRequests_upd_440_obj" };
  let id_PullRequests_upd_440 = id_PullRequests_440;
  let index_PullRequests_upd_440 = 440 + Math.floor(Math.random() * 99);
  let limit_PullRequests_upd_440 = 440 + Math.floor(Math.random() * 99);
  let owner_PullRequests_upd_440 = "owner_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_440 = 440 + Math.floor(Math.random() * 99);
  let repo_PullRequests_upd_440 = "repo_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_440 = "skip_to_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  let style_PullRequests_upd_440 = "style_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_440 = "whitespace_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_440, id_PullRequests_upd_440, index_PullRequests_upd_440, limit_PullRequests_upd_440, owner_PullRequests_upd_440, page_PullRequests_upd_440, repo_PullRequests_upd_440, skip_to_PullRequests_upd_440, style_PullRequests_upd_440, whitespace_PullRequests_upd_440, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_440);
  // -> Deleting Parent PullRequests (Relational Intent Race)
  repoCancelScheduledAutoMerge(owner_PullRequests_440, repo_PullRequests_440, index_PullRequests_440);

});

bthread("crud:PullReviewRequests:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"Repositories": "id", "PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_450 = { "id": 1, "name": "body_PullReviewRequests_450_obj" };
  let index_PullReviewRequests_450 = 450 + Math.floor(Math.random() * 99);
  let owner_PullReviewRequests_450 = "owner_PullReviewRequests_450";
  let repo_PullReviewRequests_450 = "repo_PullReviewRequests_450_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_450, index_PullReviewRequests_450, owner_PullReviewRequests_450, repo_PullReviewRequests_450, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewRequestsExists(owner_PullReviewRequests_450);
  verifyPullReviewRequestsExists(owner_PullReviewRequests_450);
  // -> Deleting Leaf PullReviewRequests (Standard)
  repoDeletePullReviewRequests(owner_PullReviewRequests_450, repo_PullReviewRequests_450, index_PullReviewRequests_450);
  verifyPullReviewRequestsDoesNotExist(owner_PullReviewRequests_450);

});

bthread("crud:PullReviews:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"Repositories": "id", "PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_460 = { "id": 1, "name": "body_PullReviews_460_obj" };
  let id_PullReviews_460 = PullRequestsId;
  let index_PullReviews_460 = 460 + Math.floor(Math.random() * 99);
  let limit_PullReviews_460 = 460 + Math.floor(Math.random() * 99);
  let owner_PullReviews_460 = "owner_PullReviews_460_" + Math.floor(Math.random()*1000);
  let page_PullReviews_460 = 460 + Math.floor(Math.random() * 99);
  let repo_PullReviews_460 = "repo_PullReviews_460_" + Math.floor(Math.random()*1000);
  repoCreatePullReview(body_PullReviews_460, id_PullReviews_460, index_PullReviews_460, limit_PullReviews_460, owner_PullReviews_460, page_PullReviews_460, repo_PullReviews_460, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewsExists(id_PullReviews_460);
  verifyPullReviewsExists(id_PullReviews_460);
  // -> Deleting Parent PullReviews (Relational Intent Race)
  repoDeletePullReview(owner_PullReviews_460, repo_PullReviews_460, index_PullReviews_460, id_PullReviews_460);

});

bthread("crud:PullReviewDismissals:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"Repositories": "id", "PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_470 = { "id": 1, "name": "body_PullReviewDismissals_470_obj" };
  let id_PullReviewDismissals_470 = PullReviewsId;
  let index_PullReviewDismissals_470 = 470 + Math.floor(Math.random() * 99);
  let owner_PullReviewDismissals_470 = "owner_PullReviewDismissals_470_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_470 = "repo_PullReviewDismissals_470_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_470, id_PullReviewDismissals_470, index_PullReviewDismissals_470, owner_PullReviewDismissals_470, repo_PullReviewDismissals_470, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewDismissalsExists(id_PullReviewDismissals_470);
  verifyPullReviewDismissalsExists(id_PullReviewDismissals_470);
});

bthread("crud:PullReviewUndismissals:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"Repositories": "id", "PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_480 = PullReviewsId;
  let index_PullReviewUndismissals_480 = 480 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_480 = "owner_PullReviewUndismissals_480_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_480 = "repo_PullReviewUndismissals_480_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_480, index_PullReviewUndismissals_480, owner_PullReviewUndismissals_480, repo_PullReviewUndismissals_480, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_480);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_480);
});

bthread("crud:PushMirrors:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_490 = RepositoriesId;
  let limit_PushMirrors_490 = 490 + Math.floor(Math.random() * 99);
  let name_PushMirrors_490 = "name_PushMirrors_490_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_490 = "owner_PushMirrors_490_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_490 = 490 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_490 = "repo_PushMirrors_490_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_490, limit_PushMirrors_490, name_PushMirrors_490, owner_PushMirrors_490, page_PushMirrors_490, repo_PushMirrors_490, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_490);
  verifyPushMirrorsExists(id_PushMirrors_490);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_490, repo_PushMirrors_490, name_PushMirrors_490);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_490);

});

bthread("crud:Releases:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Releases
  let body_Releases_500 = { "id": 1, "name": "body_Releases_500_obj" };
  let draft_Releases_500 = true;
  let id_Releases_500 = RepositoriesId;
  let limit_Releases_500 = 500 + Math.floor(Math.random() * 99);
  let owner_Releases_500 = "owner_Releases_500_" + Math.floor(Math.random()*1000);
  let page_Releases_500 = 500 + Math.floor(Math.random() * 99);
  let pre_release_Releases_500 = true;
  let repo_Releases_500 = "repo_Releases_500_" + Math.floor(Math.random()*1000);
  let tag_Releases_500 = "tag_Releases_500_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_500, draft_Releases_500, id_Releases_500, limit_Releases_500, owner_Releases_500, page_Releases_500, pre_release_Releases_500, repo_Releases_500, tag_Releases_500, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_500);
  // -> Updating Releases
  let body_Releases_upd_500 = { "id": 1, "name": "body_Releases_upd_500_obj" };
  let draft_Releases_upd_500 = true;
  let id_Releases_upd_500 = id_Releases_500;
  let limit_Releases_upd_500 = 500 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_500 = "owner_Releases_upd_500_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_500 = 500 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_500 = true;
  let repo_Releases_upd_500 = "repo_Releases_upd_500_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_500 = "tag_Releases_upd_500_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_500, draft_Releases_upd_500, id_Releases_upd_500, limit_Releases_upd_500, owner_Releases_upd_500, page_Releases_upd_500, pre_release_Releases_upd_500, repo_Releases_upd_500, tag_Releases_upd_500, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_500);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_500, repo_Releases_500, tag_Releases_500);

});

bthread("crud:ReleaseAttachments:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Repositories": "id", "Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_510 = "attachment_ReleaseAttachments_510_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_510 = 510 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_510 = { "id": 1, "name": "body_ReleaseAttachments_510_obj" };
  let id_ReleaseAttachments_510 = ReleasesId;
  let name_ReleaseAttachments_510 = "name_ReleaseAttachments_510_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_510 = "owner_ReleaseAttachments_510_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_510 = "repo_ReleaseAttachments_510_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_510, attachment_id_ReleaseAttachments_510, body_ReleaseAttachments_510, id_ReleaseAttachments_510, name_ReleaseAttachments_510, owner_ReleaseAttachments_510, repo_ReleaseAttachments_510, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_510);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_510 = "attachment_ReleaseAttachments_upd_510_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_510 = 510 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_510 = { "id": 1, "name": "body_ReleaseAttachments_upd_510_obj" };
  let id_ReleaseAttachments_upd_510 = id_ReleaseAttachments_510;
  let name_ReleaseAttachments_upd_510 = "name_ReleaseAttachments_upd_510_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_510 = "owner_ReleaseAttachments_upd_510_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_510 = "repo_ReleaseAttachments_upd_510_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_510, attachment_id_ReleaseAttachments_upd_510, body_ReleaseAttachments_upd_510, id_ReleaseAttachments_upd_510, name_ReleaseAttachments_upd_510, owner_ReleaseAttachments_upd_510, repo_ReleaseAttachments_upd_510, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_510);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_510, repo_ReleaseAttachments_510, id_ReleaseAttachments_510, attachment_id_ReleaseAttachments_510);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_510);

});

bthread("crud:TagProtections:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating TagProtections
  let body_TagProtections_520 = { "id": 1, "name": "body_TagProtections_520_obj" };
  let id_TagProtections_520 = RepositoriesId;
  let owner_TagProtections_520 = "owner_TagProtections_520_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_520 = "repo_TagProtections_520_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_520, id_TagProtections_520, owner_TagProtections_520, repo_TagProtections_520, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_520);
  // -> Updating TagProtections
  let body_TagProtections_upd_520 = { "id": 1, "name": "body_TagProtections_upd_520_obj" };
  let id_TagProtections_upd_520 = id_TagProtections_520;
  let owner_TagProtections_upd_520 = "owner_TagProtections_upd_520_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_520 = "repo_TagProtections_upd_520_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_520, id_TagProtections_upd_520, owner_TagProtections_upd_520, repo_TagProtections_upd_520, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_520);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_520, repo_TagProtections_520, id_TagProtections_520);
  verifyTagProtectionsDoesNotExist(id_TagProtections_520);

});

bthread("crud:Tags:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Tags
  let body_Tags_530 = { "id": 1, "name": "body_Tags_530_obj" };
  let id_Tags_530 = RepositoriesId;
  let limit_Tags_530 = 530 + Math.floor(Math.random() * 99);
  let owner_Tags_530 = "owner_Tags_530_" + Math.floor(Math.random()*1000);
  let page_Tags_530 = 530 + Math.floor(Math.random() * 99);
  let repo_Tags_530 = "repo_Tags_530_" + Math.floor(Math.random()*1000);
  let tag_Tags_530 = "tag_Tags_530_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_530, id_Tags_530, limit_Tags_530, owner_Tags_530, page_Tags_530, repo_Tags_530, tag_Tags_530, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_530);
  verifyTagsExists(id_Tags_530);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_530, repo_Tags_530, tag_Tags_530);
  verifyTagsDoesNotExist(id_Tags_530);

});

bthread("crud:Topics:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Topics
  let body_Topics_540 = { "id": 1, "name": "body_Topics_540_obj" };
  let limit_Topics_540 = 540 + Math.floor(Math.random() * 99);
  let owner_Topics_540 = "owner_Topics_540";
  let page_Topics_540 = 540 + Math.floor(Math.random() * 99);
  let q_Topics_540 = "q_Topics_540_" + Math.floor(Math.random()*1000);
  let repo_Topics_540 = "repo_Topics_540_" + Math.floor(Math.random()*1000);
  let topic_Topics_540 = "topic_Topics_540_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_540, limit_Topics_540, owner_Topics_540, page_Topics_540, q_Topics_540, repo_Topics_540, topic_Topics_540, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_540);
  // -> Updating Topics
  let body_Topics_upd_540 = { "id": 1, "name": "body_Topics_upd_540_obj" };
  let limit_Topics_upd_540 = 540 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_540 = owner_Topics_540;
  let page_Topics_upd_540 = 540 + Math.floor(Math.random() * 99);
  let q_Topics_upd_540 = "q_Topics_upd_540_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_540 = "repo_Topics_upd_540_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_540 = "topic_Topics_upd_540_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_540, limit_Topics_upd_540, owner_Topics_upd_540, page_Topics_upd_540, q_Topics_upd_540, repo_Topics_upd_540, topic_Topics_upd_540, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_540);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_540, repo_Topics_540, topic_Topics_540);
  verifyTopicsDoesNotExist(owner_Topics_540);

});

bthread("crud:RepositoryTransfer:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Repositories": "id", "Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let UsersId = captured["Users"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_550 = { "id": 1, "name": "body_RepositoryTransfer_550_obj" };
  let id_RepositoryTransfer_550 = RepositoriesId;
  let owner_RepositoryTransfer_550 = "owner_RepositoryTransfer_550_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_550 = "repo_RepositoryTransfer_550_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_550 = "transferOptions_RepositoryTransfer_550_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_550, id_RepositoryTransfer_550, owner_RepositoryTransfer_550, repo_RepositoryTransfer_550, transferOptions_RepositoryTransfer_550, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_550);
  verifyRepositoryTransferExists(id_RepositoryTransfer_550);
});

bthread("crud:WikiPages:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating WikiPages
  let body_WikiPages_560 = { "id": 1, "name": "body_WikiPages_560_obj" };
  let id_WikiPages_560 = RepositoriesId;
  let limit_WikiPages_560 = 560 + Math.floor(Math.random() * 99);
  let owner_WikiPages_560 = "owner_WikiPages_560_" + Math.floor(Math.random()*1000);
  let page_WikiPages_560 = 560 + Math.floor(Math.random() * 99);
  let pageName_WikiPages_560 = "pageName_WikiPages_560_" + Math.floor(Math.random()*1000);
  let repo_WikiPages_560 = "repo_WikiPages_560_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPages_560 = "wikiPageOptions_WikiPages_560_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPages_560, id_WikiPages_560, limit_WikiPages_560, owner_WikiPages_560, page_WikiPages_560, pageName_WikiPages_560, repo_WikiPages_560, wikiPageOptions_WikiPages_560, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPagesExists(id_WikiPages_560);
  // -> Updating WikiPages
  let body_WikiPages_upd_560 = { "id": 1, "name": "body_WikiPages_upd_560_obj" };
  let id_WikiPages_upd_560 = id_WikiPages_560;
  let limit_WikiPages_upd_560 = 560 + Math.floor(Math.random() * 99);
  let owner_WikiPages_upd_560 = "owner_WikiPages_upd_560_" + Math.floor(Math.random()*1000);
  let page_WikiPages_upd_560 = 560 + Math.floor(Math.random() * 99);
  let pageName_WikiPages_upd_560 = "pageName_WikiPages_upd_560_" + Math.floor(Math.random()*1000);
  let repo_WikiPages_upd_560 = "repo_WikiPages_upd_560_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPages_upd_560 = "wikiPageOptions_WikiPages_upd_560_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPages_upd_560, id_WikiPages_upd_560, limit_WikiPages_upd_560, owner_WikiPages_upd_560, page_WikiPages_upd_560, pageName_WikiPages_upd_560, repo_WikiPages_upd_560, wikiPageOptions_WikiPages_upd_560, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPagesExists(id_WikiPages_560);
  // -> Deleting Leaf WikiPages (Standard)
  repoDeleteWikiPage(owner_WikiPages_560, repo_WikiPages_560, pageName_WikiPages_560);
  verifyWikiPagesDoesNotExist(id_WikiPages_560);

});

bthread("crud:TeamMembers:linear:1", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_570 = OrganizationTeamsId;
  let limit_TeamMembers_570 = 570 + Math.floor(Math.random() * 99);
  let page_TeamMembers_570 = 570 + Math.floor(Math.random() * 99);
  let username_TeamMembers_570 = "username_TeamMembers_570";
  orgAddTeamMember(id_TeamMembers_570, limit_TeamMembers_570, page_TeamMembers_570, username_TeamMembers_570, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_570);
  verifyTeamMembersExists(id_TeamMembers_570);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_570);
  verifyTeamMembersDoesNotExist(id_TeamMembers_570);

});

bthread("crud:TeamRepos:linear:1", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  deps["OrganizationRepos"] = matchAnyOrganizationReposAdded();
  let pkMap = {"OrganizationTeams": "id", "OrganizationRepos": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  let OrganizationReposId = captured["OrganizationRepos"];
  // -> Creating TeamRepos
  let id_TeamRepos_580 = OrganizationReposId;
  let limit_TeamRepos_580 = 580 + Math.floor(Math.random() * 99);
  let org_TeamRepos_580 = "org_TeamRepos_580_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_580 = 580 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_580 = "repo_TeamRepos_580_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_580, limit_TeamRepos_580, org_TeamRepos_580, page_TeamRepos_580, repo_TeamRepos_580, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_580);
  verifyTeamReposExists(id_TeamRepos_580);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_580);
  verifyTeamReposDoesNotExist(id_TeamRepos_580);

});

bthread("crud:UserVariables:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_590 = { "id": 1, "name": "body_UserVariables_590_obj" };
  let variablename_UserVariables_590 = "variablename_UserVariables_590";
  createUserVariable(body_UserVariables_590, variablename_UserVariables_590, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_590);
  // -> Updating UserVariables
  let body_UserVariables_upd_590 = { "id": 1, "name": "body_UserVariables_upd_590_obj" };
  let variablename_UserVariables_upd_590 = variablename_UserVariables_590;
  updateUserVariable(body_UserVariables_upd_590, variablename_UserVariables_upd_590, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_590);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_590);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_590);

});

bthread("crud:OAuth2Applications:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_600 = { "id": 1, "name": "body_OAuth2Applications_600_obj" };
  let id_OAuth2Applications_600 = 600 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_600 = 600 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_600 = 600 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_600, id_OAuth2Applications_600, limit_OAuth2Applications_600, page_OAuth2Applications_600, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_600);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_600 = { "id": 1, "name": "body_OAuth2Applications_upd_600_obj" };
  let id_OAuth2Applications_upd_600 = id_OAuth2Applications_600;
  let limit_OAuth2Applications_upd_600 = 600 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_600 = 600 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_600, id_OAuth2Applications_upd_600, limit_OAuth2Applications_upd_600, page_OAuth2Applications_upd_600, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_600);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_600);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_600);

});

bthread("crud:UserAvatar:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_610 = { "id": 1, "name": "body_UserAvatar_610_obj" };
  let id_UserAvatar_610 = 610 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_610, id_UserAvatar_610, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_610);
  verifyUserAvatarExists(id_UserAvatar_610);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_610);
  verifyUserAvatarDoesNotExist(id_UserAvatar_610);

});

bthread("crud:UserEmails:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_620 = { "id": 1, "name": "body_UserEmails_620_obj" };
  let id_UserEmails_620 = 620 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_620, id_UserEmails_620, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_620);
  verifyUserEmailsExists(id_UserEmails_620);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_620);
  verifyUserEmailsDoesNotExist(id_UserEmails_620);

});

bthread("crud:GPGKeys:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_630 = { "id": 1, "name": "Form_GPGKeys_630_obj" };
  let id_GPGKeys_630 = 630 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_630 = 630 + Math.floor(Math.random() * 99);
  let page_GPGKeys_630 = 630 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_630, id_GPGKeys_630, limit_GPGKeys_630, page_GPGKeys_630, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_630);
  verifyGPGKeysExists(id_GPGKeys_630);
  // -> Deleting Parent GPGKeys (Relational Intent Race)
  userCurrentDeleteGPGKey(id_GPGKeys_630);

});

bthread("crud:GPGKeyVerification:linear:1", function () {
  let deps = {};
  deps["GPGKeys"] = matchAnyGPGKeysAdded();
  let pkMap = {"GPGKeys": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let GPGKeysId = captured["GPGKeys"];
  // -> Creating GPGKeyVerification
  let body_GPGKeyVerification_640 = { "id": 1, "name": "body_GPGKeyVerification_640_obj" };
  let id_GPGKeyVerification_640 = GPGKeysId;
  userVerifyGPGKey(body_GPGKeyVerification_640, id_GPGKeyVerification_640, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_640);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_640);
});

bthread("crud:UserStarred:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Users": "username", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating UserStarred
  let limit_UserStarred_650 = 650 + Math.floor(Math.random() * 99);
  let owner_UserStarred_650 = "owner_UserStarred_650";
  let page_UserStarred_650 = 650 + Math.floor(Math.random() * 99);
  let repo_UserStarred_650 = "repo_UserStarred_650_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_650, owner_UserStarred_650, page_UserStarred_650, repo_UserStarred_650, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_650);
  verifyUserStarredExists(owner_UserStarred_650);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_650, repo_UserStarred_650);
  verifyUserStarredDoesNotExist(owner_UserStarred_650);

});

bthread("crud:ActivityPub:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating ActivityPub
  let user_id_ActivityPub_660 = UsersId;
  activitypubPersonInbox(user_id_ActivityPub_660, { expectedResponseCodes: [200, 201, 204] });

  verifyActivityPubExists(user_id_ActivityPub_660);
  verifyActivityPubExists(user_id_ActivityPub_660);
});

bthread("crud:AdminCron:linear:2", function () {
  // -> Creating AdminCron
  let id_AdminCron_670 = 670 + Math.floor(Math.random() * 99);
  let limit_AdminCron_670 = 670 + Math.floor(Math.random() * 99);
  let page_AdminCron_670 = 670 + Math.floor(Math.random() * 99);
  let task_AdminCron_670 = "task_AdminCron_670_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_670, limit_AdminCron_670, page_AdminCron_670, task_AdminCron_670, { expectedResponseCodes: [200, 201, 204] });

  verifyAdminCronExists(id_AdminCron_670);
  verifyAdminCronExists(id_AdminCron_670);
});

bthread("crud:Hooks:linear:2", function () {
  // -> Creating Hooks
  let body_Hooks_680 = { "id": 1, "name": "body_Hooks_680_obj" };
  let id_Hooks_680 = 680 + Math.floor(Math.random() * 99);
  let limit_Hooks_680 = 680 + Math.floor(Math.random() * 99);
  let page_Hooks_680 = 680 + Math.floor(Math.random() * 99);
  userCreateHook(body_Hooks_680, id_Hooks_680, limit_Hooks_680, page_Hooks_680, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_680);
  // -> Updating Hooks
  let body_Hooks_upd_680 = { "id": 1, "name": "body_Hooks_upd_680_obj" };
  let id_Hooks_upd_680 = id_Hooks_680;
  let limit_Hooks_upd_680 = 680 + Math.floor(Math.random() * 99);
  let page_Hooks_upd_680 = 680 + Math.floor(Math.random() * 99);
  userEditHook(body_Hooks_upd_680, id_Hooks_upd_680, limit_Hooks_upd_680, page_Hooks_upd_680, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_680);
  // -> Deleting Leaf Hooks (Standard)
  userDeleteHook(id_Hooks_680);
  verifyHooksDoesNotExist(id_Hooks_680);

});

bthread("crud:UnadoptedRepositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Users": "username", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_690 = 690 + Math.floor(Math.random() * 99);
  let owner_UnadoptedRepositories_690 = "owner_UnadoptedRepositories_690";
  let page_UnadoptedRepositories_690 = 690 + Math.floor(Math.random() * 99);
  let pattern_UnadoptedRepositories_690 = "pattern_UnadoptedRepositories_690_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_690 = "repo_UnadoptedRepositories_690_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_690, owner_UnadoptedRepositories_690, page_UnadoptedRepositories_690, pattern_UnadoptedRepositories_690, repo_UnadoptedRepositories_690, { expectedResponseCodes: [200, 201, 204] });

  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_690);
  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_690);
  // -> Deleting Leaf UnadoptedRepositories (Standard)
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_690, repo_UnadoptedRepositories_690);
  verifyUnadoptedRepositoriesDoesNotExist(owner_UnadoptedRepositories_690);

});

bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let EditUserOption_Users_700 = "EditUserOption_Users_700_" + Math.floor(Math.random()*1000);
  let body_Users_700 = { "id": 1, "name": "body_Users_700_obj" };
  let limit_Users_700 = 700 + Math.floor(Math.random() * 99);
  let page_Users_700 = 700 + Math.floor(Math.random() * 99);
  let token_Users_700 = "token_Users_700_" + Math.floor(Math.random()*1000);
  let username_Users_700 = "username_Users_700";
  userCreateToken(EditUserOption_Users_700, body_Users_700, limit_Users_700, page_Users_700, token_Users_700, username_Users_700, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_700);
  // -> Updating Users
  let EditUserOption_Users_upd_700 = "EditUserOption_Users_upd_700_" + Math.floor(Math.random()*1000);
  let body_Users_upd_700 = { "id": 1, "name": "body_Users_upd_700_obj" };
  let limit_Users_upd_700 = 700 + Math.floor(Math.random() * 99);
  let page_Users_upd_700 = 700 + Math.floor(Math.random() * 99);
  let token_Users_upd_700 = "token_Users_upd_700_" + Math.floor(Math.random()*1000);
  let username_Users_upd_700 = username_Users_700;
  adminEditUser(EditUserOption_Users_upd_700, body_Users_upd_700, limit_Users_upd_700, page_Users_upd_700, token_Users_upd_700, username_Users_upd_700, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_700);
  // -> Deleting Parent Users (Relational Intent Race)
  userDeleteAccessToken(username_Users_700, token_Users_700);

});

bthread("crud:UserBadges:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_710 = "UserBadgeOption_UserBadges_710_" + Math.floor(Math.random()*1000);
  let body_UserBadges_710 = { "id": 1, "name": "body_UserBadges_710_obj" };
  let username_UserBadges_710 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_710, body_UserBadges_710, username_UserBadges_710, { expectedResponseCodes: [200, 201, 204] });

  verifyUserBadgesExists(username_UserBadges_710);
  verifyUserBadgesExists(username_UserBadges_710);
  // -> Deleting Leaf UserBadges (Standard)
  adminDeleteUserBadges(username_UserBadges_710);
  verifyUserBadgesDoesNotExist(username_UserBadges_710);

});

bthread("crud:UserKeys:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserKeys
  let key_UserKeys_720 = "key_UserKeys_720_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_720 = "purge_UserKeys_720_" + Math.floor(Math.random()*1000);
  let username_UserKeys_720 = UsersId;
  adminCreatePublicKey(key_UserKeys_720, purge_UserKeys_720, username_UserKeys_720, { expectedResponseCodes: [200, 201, 204] });

  verifyUserKeysExists(username_UserKeys_720);
  verifyUserKeysExists(username_UserKeys_720);
  // -> Deleting Leaf UserKeys (Standard)
  adminDeleteUser(username_UserKeys_720);
  verifyUserKeysDoesNotExist(username_UserKeys_720);

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
  let id_UserOrganizations_730 = 730 + Math.floor(Math.random() * 99);
  let organization_UserOrganizations_730 = "organization_UserOrganizations_730_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_730 = UsersId;
  adminCreateOrg(id_UserOrganizations_730, organization_UserOrganizations_730, username_UserOrganizations_730, { expectedResponseCodes: [200, 201, 204] });

  verifyUserOrganizationsExists(id_UserOrganizations_730);
  verifyUserOrganizationsExists(id_UserOrganizations_730);
});

bthread("crud:UserRename:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_740 = "body_UserRename_740_" + Math.floor(Math.random()*1000);
  let id_UserRename_740 = 740 + Math.floor(Math.random() * 99);
  let username_UserRename_740 = UsersId;
  adminRenameUser(body_UserRename_740, id_UserRename_740, username_UserRename_740, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRenameExists(id_UserRename_740);
  verifyUserRenameExists(id_UserRename_740);
});

bthread("crud:UserRepositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_750 = 750 + Math.floor(Math.random() * 99);
  let repository_UserRepositories_750 = "repository_UserRepositories_750_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_750 = UsersId;
  adminCreateRepo(id_UserRepositories_750, repository_UserRepositories_750, username_UserRepositories_750, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRepositoriesExists(id_UserRepositories_750);
  verifyUserRepositoriesExists(id_UserRepositories_750);
});

bthread("crud:Markdown:linear:2", function () {
  // -> Creating Markdown
  let body_Markdown_760 = "body_Markdown_760_" + Math.floor(Math.random()*1000);
  let id_Markdown_760 = 760 + Math.floor(Math.random() * 99);
  renderMarkdown(body_Markdown_760, id_Markdown_760, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkdownExists(id_Markdown_760);
  verifyMarkdownExists(id_Markdown_760);
});

bthread("crud:Markup:linear:2", function () {
  // -> Creating Markup
  let body_Markup_770 = { "id": 1, "name": "body_Markup_770_obj" };
  let id_Markup_770 = 770 + Math.floor(Math.random() * 99);
  renderMarkup(body_Markup_770, id_Markup_770, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkupExists(id_Markup_770);
  verifyMarkupExists(id_Markup_770);
});

bthread("crud:Organization:linear:2", function () {
  // -> Creating Organization
  let body_Organization_780 = { "id": 1, "name": "body_Organization_780_obj" };
  let limit_Organization_780 = 780 + Math.floor(Math.random() * 99);
  let org_Organization_780 = "org_Organization_780";
  let page_Organization_780 = 780 + Math.floor(Math.random() * 99);
  let secretname_Organization_780 = "secretname_Organization_780_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_780, limit_Organization_780, org_Organization_780, page_Organization_780, secretname_Organization_780, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_780);
  // -> Updating Organization
  let body_Organization_upd_780 = { "id": 1, "name": "body_Organization_upd_780_obj" };
  let limit_Organization_upd_780 = 780 + Math.floor(Math.random() * 99);
  let org_Organization_upd_780 = org_Organization_780;
  let page_Organization_upd_780 = 780 + Math.floor(Math.random() * 99);
  let secretname_Organization_upd_780 = "secretname_Organization_upd_780_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_780, limit_Organization_upd_780, org_Organization_upd_780, page_Organization_upd_780, secretname_Organization_upd_780, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_780);
  // -> Deleting Parent Organization (Relational Intent Race)
  orgDelete(org_Organization_780);

});

bthread("crud:Variables:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_790 = "CreateVariableOption_Variables_790_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_790 = "2025-01-25T12:00:00Z";
  let body_Variables_790 = { "id": 1, "name": "body_Variables_790_obj" };
  let id_Variables_790 = RepositoriesId;
  let limit_Variables_790 = 790 + Math.floor(Math.random() * 99);
  let owner_Variables_790 = "owner_Variables_790_" + Math.floor(Math.random()*1000);
  let page_Variables_790 = 790 + Math.floor(Math.random() * 99);
  let repo_Variables_790 = "repo_Variables_790_" + Math.floor(Math.random()*1000);
  let variablename_Variables_790 = "variablename_Variables_790_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_790, UpdateVariableOption_Variables_790, body_Variables_790, id_Variables_790, limit_Variables_790, owner_Variables_790, page_Variables_790, repo_Variables_790, variablename_Variables_790, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_790);
  // -> Updating Variables
  let CreateVariableOption_Variables_upd_790 = "CreateVariableOption_Variables_upd_790_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_790 = "2025-01-25T12:00:00Z";
  let body_Variables_upd_790 = { "id": 1, "name": "body_Variables_upd_790_obj" };
  let id_Variables_upd_790 = id_Variables_790;
  let limit_Variables_upd_790 = 790 + Math.floor(Math.random() * 99);
  let owner_Variables_upd_790 = "owner_Variables_upd_790_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_790 = 790 + Math.floor(Math.random() * 99);
  let repo_Variables_upd_790 = "repo_Variables_upd_790_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_790 = "variablename_Variables_upd_790_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_790, UpdateVariableOption_Variables_upd_790, body_Variables_upd_790, id_Variables_upd_790, limit_Variables_upd_790, owner_Variables_upd_790, page_Variables_upd_790, repo_Variables_upd_790, variablename_Variables_upd_790, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_790);
  // -> Deleting Leaf Variables (Standard)
  deleteRepoVariable(owner_Variables_790, repo_Variables_790, variablename_Variables_790);
  verifyVariablesDoesNotExist(id_Variables_790);

});

bthread("crud:Avatar:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating Avatar
  let UpdateUserAvatarOption_Avatar_800 = "2025-01-25T12:00:00Z";
  let body_Avatar_800 = { "id": 1, "name": "body_Avatar_800_obj" };
  let org_Avatar_800 = OrganizationId;
  orgUpdateAvatar(UpdateUserAvatarOption_Avatar_800, body_Avatar_800, org_Avatar_800, { expectedResponseCodes: [200, 201, 204] });

  verifyAvatarExists(org_Avatar_800);
  verifyAvatarExists(org_Avatar_800);
  // -> Deleting Leaf Avatar (Standard)
  orgDeleteAvatar(org_Avatar_800);
  verifyAvatarDoesNotExist(org_Avatar_800);

});

bthread("crud:Labels:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Labels
  let body_Labels_810 = { "id": 1, "name": "body_Labels_810_obj" };
  let id_Labels_810 = RepositoriesId;
  let limit_Labels_810 = 810 + Math.floor(Math.random() * 99);
  let owner_Labels_810 = "owner_Labels_810_" + Math.floor(Math.random()*1000);
  let page_Labels_810 = 810 + Math.floor(Math.random() * 99);
  let repo_Labels_810 = "repo_Labels_810_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_810, id_Labels_810, limit_Labels_810, owner_Labels_810, page_Labels_810, repo_Labels_810, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_810);
  // -> Updating Labels
  let body_Labels_upd_810 = { "id": 1, "name": "body_Labels_upd_810_obj" };
  let id_Labels_upd_810 = id_Labels_810;
  let limit_Labels_upd_810 = 810 + Math.floor(Math.random() * 99);
  let owner_Labels_upd_810 = "owner_Labels_upd_810_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_810 = 810 + Math.floor(Math.random() * 99);
  let repo_Labels_upd_810 = "repo_Labels_upd_810_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_810, id_Labels_upd_810, limit_Labels_upd_810, owner_Labels_upd_810, page_Labels_upd_810, repo_Labels_upd_810, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_810);
  // -> Deleting Leaf Labels (Standard)
  issueDeleteLabel(owner_Labels_810, repo_Labels_810, id_Labels_810);
  verifyLabelsDoesNotExist(id_Labels_810);

});

bthread("crud:OrganizationRepos:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_820 = { "id": 1, "name": "body_OrganizationRepos_820_obj" };
  let id_OrganizationRepos_820 = 820 + Math.floor(Math.random() * 99);
  let limit_OrganizationRepos_820 = 820 + Math.floor(Math.random() * 99);
  let org_OrganizationRepos_820 = OrganizationId;
  let page_OrganizationRepos_820 = 820 + Math.floor(Math.random() * 99);
  createOrgRepo(body_OrganizationRepos_820, id_OrganizationRepos_820, limit_OrganizationRepos_820, org_OrganizationRepos_820, page_OrganizationRepos_820, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationReposExists(id_OrganizationRepos_820);
  verifyOrganizationReposExists(id_OrganizationRepos_820);
});

bthread("crud:OrganizationTeams:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_830 = { "id": 1, "name": "body_OrganizationTeams_830_obj" };
  let id_OrganizationTeams_830 = 830 + Math.floor(Math.random() * 99);
  let limit_OrganizationTeams_830 = 830 + Math.floor(Math.random() * 99);
  let org_OrganizationTeams_830 = OrganizationId;
  let page_OrganizationTeams_830 = 830 + Math.floor(Math.random() * 99);
  orgCreateTeam(body_OrganizationTeams_830, id_OrganizationTeams_830, limit_OrganizationTeams_830, org_OrganizationTeams_830, page_OrganizationTeams_830, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationTeamsExists(id_OrganizationTeams_830);
  verifyOrganizationTeamsExists(id_OrganizationTeams_830);
});

bthread("crud:Issues:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issues
  let content_Issues_840 = { "id": 1, "name": "content_Issues_840_obj" };
  let id_Issues_840 = RepositoriesId;
  let index_Issues_840 = 840 + Math.floor(Math.random() * 99);
  let limit_Issues_840 = 840 + Math.floor(Math.random() * 99);
  let owner_Issues_840 = "owner_Issues_840_" + Math.floor(Math.random()*1000);
  let page_Issues_840 = 840 + Math.floor(Math.random() * 99);
  let position_Issues_840 = 840 + Math.floor(Math.random() * 99);
  let repo_Issues_840 = "repo_Issues_840_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_840, id_Issues_840, index_Issues_840, limit_Issues_840, owner_Issues_840, page_Issues_840, position_Issues_840, repo_Issues_840, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_840);
  // -> Updating Issues
  let content_Issues_upd_840 = { "id": 1, "name": "content_Issues_upd_840_obj" };
  let id_Issues_upd_840 = id_Issues_840;
  let index_Issues_upd_840 = 840 + Math.floor(Math.random() * 99);
  let limit_Issues_upd_840 = 840 + Math.floor(Math.random() * 99);
  let owner_Issues_upd_840 = "owner_Issues_upd_840_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_840 = 840 + Math.floor(Math.random() * 99);
  let position_Issues_upd_840 = 840 + Math.floor(Math.random() * 99);
  let repo_Issues_upd_840 = "repo_Issues_upd_840_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_840, id_Issues_upd_840, index_Issues_upd_840, limit_Issues_upd_840, owner_Issues_upd_840, page_Issues_upd_840, position_Issues_upd_840, repo_Issues_upd_840, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_840);
  // -> Deleting Parent Issues (Relational Intent Race)
  issueDeleteTime(owner_Issues_840, repo_Issues_840, index_Issues_840, id_Issues_840);

});

bthread("crud:Repository:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Repository
  let EditRepoOption_Repository_850 = "EditRepoOption_Repository_850_" + Math.floor(Math.random()*1000);
  let body_Repository_850 = { "id": 1, "name": "body_Repository_850_obj" };
  let id_Repository_850 = RepositoriesId;
  let limit_Repository_850 = 850 + Math.floor(Math.random() * 99);
  let owner_Repository_850 = "owner_Repository_850_" + Math.floor(Math.random()*1000);
  let page_Repository_850 = 850 + Math.floor(Math.random() * 99);
  let repo_Repository_850 = "repo_Repository_850_" + Math.floor(Math.random()*1000);
  repoMergeUpstream(EditRepoOption_Repository_850, body_Repository_850, id_Repository_850, limit_Repository_850, owner_Repository_850, page_Repository_850, repo_Repository_850, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_850);
  // -> Updating Repository
  let EditRepoOption_Repository_upd_850 = "EditRepoOption_Repository_upd_850_" + Math.floor(Math.random()*1000);
  let body_Repository_upd_850 = { "id": 1, "name": "body_Repository_upd_850_obj" };
  let id_Repository_upd_850 = id_Repository_850;
  let limit_Repository_upd_850 = 850 + Math.floor(Math.random() * 99);
  let owner_Repository_upd_850 = "owner_Repository_upd_850_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_850 = 850 + Math.floor(Math.random() * 99);
  let repo_Repository_upd_850 = "repo_Repository_upd_850_" + Math.floor(Math.random()*1000);
  repoEdit(EditRepoOption_Repository_upd_850, body_Repository_upd_850, id_Repository_upd_850, limit_Repository_upd_850, owner_Repository_upd_850, page_Repository_upd_850, repo_Repository_upd_850, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_850);
  // -> Deleting Leaf Repository (Standard)
  repoDeleteAvatar(owner_Repository_850, repo_Repository_850);
  verifyRepositoryDoesNotExist(id_Repository_850);

});

bthread("crud:Branches:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_860 = "CreateBranchRepoOption_Branches_860_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_860 = "2025-01-25T12:00:00Z";
  let body_Branches_860 = { "id": 1, "name": "body_Branches_860_obj" };
  let branch_Branches_860 = "branch_Branches_860_" + Math.floor(Math.random()*1000);
  let id_Branches_860 = RepositoriesId;
  let limit_Branches_860 = 860 + Math.floor(Math.random() * 99);
  let owner_Branches_860 = "owner_Branches_860_" + Math.floor(Math.random()*1000);
  let page_Branches_860 = 860 + Math.floor(Math.random() * 99);
  let repo_Branches_860 = "repo_Branches_860_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_860, UpdateBranchRepoOption_Branches_860, body_Branches_860, branch_Branches_860, id_Branches_860, limit_Branches_860, owner_Branches_860, page_Branches_860, repo_Branches_860, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_860);
  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_860 = "CreateBranchRepoOption_Branches_upd_860_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_860 = "2025-01-25T12:00:00Z";
  let body_Branches_upd_860 = { "id": 1, "name": "body_Branches_upd_860_obj" };
  let branch_Branches_upd_860 = "branch_Branches_upd_860_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_860 = id_Branches_860;
  let limit_Branches_upd_860 = 860 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_860 = "owner_Branches_upd_860_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_860 = 860 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_860 = "repo_Branches_upd_860_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_860, UpdateBranchRepoOption_Branches_upd_860, body_Branches_upd_860, branch_Branches_upd_860, id_Branches_upd_860, limit_Branches_upd_860, owner_Branches_upd_860, page_Branches_upd_860, repo_Branches_upd_860, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_860);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_860, repo_Branches_860, branch_Branches_860);
  verifyBranchesDoesNotExist(id_Branches_860);

});

bthread("crud:Collaborators:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_870 = "AddCollaboratorOption_Collaborators_870_" + Math.floor(Math.random()*1000);
  let body_Collaborators_870 = { "id": 1, "name": "body_Collaborators_870_obj" };
  let collaborator_Collaborators_870 = "collaborator_Collaborators_870_" + Math.floor(Math.random()*1000);
  let id_Collaborators_870 = RepositoriesId;
  let limit_Collaborators_870 = 870 + Math.floor(Math.random() * 99);
  let owner_Collaborators_870 = "owner_Collaborators_870_" + Math.floor(Math.random()*1000);
  let page_Collaborators_870 = 870 + Math.floor(Math.random() * 99);
  let repo_Collaborators_870 = "repo_Collaborators_870_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_870, body_Collaborators_870, collaborator_Collaborators_870, id_Collaborators_870, limit_Collaborators_870, owner_Collaborators_870, page_Collaborators_870, repo_Collaborators_870, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_870);
  verifyCollaboratorsExists(id_Collaborators_870);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_870, repo_Collaborators_870, collaborator_Collaborators_870);
  verifyCollaboratorsDoesNotExist(id_Collaborators_870);

});

bthread("crud:Repositories:linear:2", function () {
  // -> Creating Repositories
  let body_Repositories_880 = { "id": 1, "name": "body_Repositories_880_obj" };
  let id_Repositories_880 = 880 + Math.floor(Math.random() * 99);
  let limit_Repositories_880 = 880 + Math.floor(Math.random() * 99);
  let owner_Repositories_880 = "owner_Repositories_880_" + Math.floor(Math.random()*1000);
  let page_Repositories_880 = 880 + Math.floor(Math.random() * 99);
  let repo_Repositories_880 = "repo_Repositories_880_" + Math.floor(Math.random()*1000);
  let username_Repositories_880 = "username_Repositories_880";
  createCurrentUserRepo(body_Repositories_880, id_Repositories_880, limit_Repositories_880, owner_Repositories_880, page_Repositories_880, repo_Repositories_880, username_Repositories_880, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_880);
  // -> Updating Repositories
  let body_Repositories_upd_880 = { "id": 1, "name": "body_Repositories_upd_880_obj" };
  let id_Repositories_upd_880 = id_Repositories_880;
  let limit_Repositories_upd_880 = 880 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_880 = "owner_Repositories_upd_880_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_880 = 880 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_880 = "repo_Repositories_upd_880_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_880 = "username_Repositories_upd_880";
  userCurrentPutSubscription(body_Repositories_upd_880, id_Repositories_upd_880, limit_Repositories_upd_880, owner_Repositories_upd_880, page_Repositories_upd_880, repo_Repositories_upd_880, username_Repositories_upd_880, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_880);
  // -> Deleting Parent Repositories (Relational Intent Race)
  userCurrentDeleteSubscription(owner_Repositories_880, repo_Repositories_880);

});

bthread("crud:Forks:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Forks
  let body_Forks_890 = { "id": 1, "name": "body_Forks_890_obj" };
  let id_Forks_890 = RepositoriesId;
  let limit_Forks_890 = 890 + Math.floor(Math.random() * 99);
  let owner_Forks_890 = "owner_Forks_890_" + Math.floor(Math.random()*1000);
  let page_Forks_890 = 890 + Math.floor(Math.random() * 99);
  let repo_Forks_890 = "repo_Forks_890_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_890, id_Forks_890, limit_Forks_890, owner_Forks_890, page_Forks_890, repo_Forks_890, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_890);
  verifyForksExists(id_Forks_890);
});

bthread("crud:Issue:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issue
  let body_Issue_900 = { "id": 1, "name": "body_Issue_900_obj" };
  let id_Issue_900 = RepositoriesId;
  let limit_Issue_900 = 900 + Math.floor(Math.random() * 99);
  let name_Issue_900 = "name_Issue_900_" + Math.floor(Math.random()*1000);
  let owner_Issue_900 = "owner_Issue_900_" + Math.floor(Math.random()*1000);
  let page_Issue_900 = 900 + Math.floor(Math.random() * 99);
  let repo_Issue_900 = "repo_Issue_900_" + Math.floor(Math.random()*1000);
  let state_Issue_900 = "state_Issue_900_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_900, id_Issue_900, limit_Issue_900, name_Issue_900, owner_Issue_900, page_Issue_900, repo_Issue_900, state_Issue_900, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_900);
  // -> Updating Issue
  let body_Issue_upd_900 = { "id": 1, "name": "body_Issue_upd_900_obj" };
  let id_Issue_upd_900 = id_Issue_900;
  let limit_Issue_upd_900 = 900 + Math.floor(Math.random() * 99);
  let name_Issue_upd_900 = "name_Issue_upd_900_" + Math.floor(Math.random()*1000);
  let owner_Issue_upd_900 = "owner_Issue_upd_900_" + Math.floor(Math.random()*1000);
  let page_Issue_upd_900 = 900 + Math.floor(Math.random() * 99);
  let repo_Issue_upd_900 = "repo_Issue_upd_900_" + Math.floor(Math.random()*1000);
  let state_Issue_upd_900 = "state_Issue_upd_900_" + Math.floor(Math.random()*1000);
  issueEditComment(body_Issue_upd_900, id_Issue_upd_900, limit_Issue_upd_900, name_Issue_upd_900, owner_Issue_upd_900, page_Issue_upd_900, repo_Issue_upd_900, state_Issue_upd_900, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_900);
  // -> Deleting Leaf Issue (Standard)
  issueDeleteComment(owner_Issue_900, repo_Issue_900, id_Issue_900);
  verifyIssueDoesNotExist(id_Issue_900);

});

bthread("crud:IssueCommentAttachments:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_910 = "attachment_IssueCommentAttachments_910_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_910 = 910 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_910 = { "id": 1, "name": "body_IssueCommentAttachments_910_obj" };
  let id_IssueCommentAttachments_910 = IssuesId;
  let name_IssueCommentAttachments_910 = "name_IssueCommentAttachments_910_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_910 = "owner_IssueCommentAttachments_910_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_910 = "repo_IssueCommentAttachments_910_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_910, attachment_id_IssueCommentAttachments_910, body_IssueCommentAttachments_910, id_IssueCommentAttachments_910, name_IssueCommentAttachments_910, owner_IssueCommentAttachments_910, repo_IssueCommentAttachments_910, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_910);
  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_910 = "attachment_IssueCommentAttachments_upd_910_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_910 = 910 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_upd_910 = { "id": 1, "name": "body_IssueCommentAttachments_upd_910_obj" };
  let id_IssueCommentAttachments_upd_910 = id_IssueCommentAttachments_910;
  let name_IssueCommentAttachments_upd_910 = "name_IssueCommentAttachments_upd_910_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_910 = "owner_IssueCommentAttachments_upd_910_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_910 = "repo_IssueCommentAttachments_upd_910_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_910, attachment_id_IssueCommentAttachments_upd_910, body_IssueCommentAttachments_upd_910, id_IssueCommentAttachments_upd_910, name_IssueCommentAttachments_upd_910, owner_IssueCommentAttachments_upd_910, repo_IssueCommentAttachments_upd_910, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_910);
  // -> Deleting Leaf IssueCommentAttachments (Standard)
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_910, repo_IssueCommentAttachments_910, id_IssueCommentAttachments_910, attachment_id_IssueCommentAttachments_910);
  verifyIssueCommentAttachmentsDoesNotExist(id_IssueCommentAttachments_910);

});

bthread("crud:IssueCommentReactions:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_920 = { "id": 1, "name": "content_IssueCommentReactions_920_obj" };
  let id_IssueCommentReactions_920 = IssuesId;
  let owner_IssueCommentReactions_920 = "owner_IssueCommentReactions_920";
  let repo_IssueCommentReactions_920 = "repo_IssueCommentReactions_920_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_920, id_IssueCommentReactions_920, owner_IssueCommentReactions_920, repo_IssueCommentReactions_920, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_920);
  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_920);
  // -> Deleting Leaf IssueCommentReactions (Standard)
  issueDeleteCommentReaction(owner_IssueCommentReactions_920, repo_IssueCommentReactions_920, id_IssueCommentReactions_920);
  verifyIssueCommentReactionsDoesNotExist(owner_IssueCommentReactions_920);

});

bthread("crud:IssueAttachments:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_930 = "attachment_IssueAttachments_930_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_930 = 930 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_930 = { "id": 1, "name": "body_IssueAttachments_930_obj" };
  let id_IssueAttachments_930 = IssuesId;
  let index_IssueAttachments_930 = 930 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_930 = "name_IssueAttachments_930_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_930 = "owner_IssueAttachments_930_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_930 = "repo_IssueAttachments_930_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_930, attachment_id_IssueAttachments_930, body_IssueAttachments_930, id_IssueAttachments_930, index_IssueAttachments_930, name_IssueAttachments_930, owner_IssueAttachments_930, repo_IssueAttachments_930, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_930);
  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_930 = "attachment_IssueAttachments_upd_930_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_930 = 930 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_upd_930 = { "id": 1, "name": "body_IssueAttachments_upd_930_obj" };
  let id_IssueAttachments_upd_930 = id_IssueAttachments_930;
  let index_IssueAttachments_upd_930 = 930 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_upd_930 = "name_IssueAttachments_upd_930_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_930 = "owner_IssueAttachments_upd_930_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_930 = "repo_IssueAttachments_upd_930_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_930, attachment_id_IssueAttachments_upd_930, body_IssueAttachments_upd_930, id_IssueAttachments_upd_930, index_IssueAttachments_upd_930, name_IssueAttachments_upd_930, owner_IssueAttachments_upd_930, repo_IssueAttachments_upd_930, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_930);
  // -> Deleting Leaf IssueAttachments (Standard)
  issueDeleteIssueAttachment(owner_IssueAttachments_930, repo_IssueAttachments_930, index_IssueAttachments_930, attachment_id_IssueAttachments_930);
  verifyIssueAttachmentsDoesNotExist(id_IssueAttachments_930);

});

bthread("crud:IssueBlocks:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_940 = { "id": 1, "name": "body_IssueBlocks_940_obj" };
  let index_IssueBlocks_940 = "index_IssueBlocks_940_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_940 = 940 + Math.floor(Math.random() * 99);
  let owner_IssueBlocks_940 = "owner_IssueBlocks_940";
  let page_IssueBlocks_940 = 940 + Math.floor(Math.random() * 99);
  let repo_IssueBlocks_940 = "repo_IssueBlocks_940_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_940, index_IssueBlocks_940, limit_IssueBlocks_940, owner_IssueBlocks_940, page_IssueBlocks_940, repo_IssueBlocks_940, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueBlocksExists(owner_IssueBlocks_940);
  verifyIssueBlocksExists(owner_IssueBlocks_940);
  // -> Deleting Leaf IssueBlocks (Standard)
  issueRemoveIssueBlocking(owner_IssueBlocks_940, repo_IssueBlocks_940, index_IssueBlocks_940);
  verifyIssueBlocksDoesNotExist(owner_IssueBlocks_940);

});

bthread("crud:IssueComments:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_950 = "before_IssueComments_950_" + Math.floor(Math.random()*1000);
  let body_IssueComments_950 = { "id": 1, "name": "body_IssueComments_950_obj" };
  let id_IssueComments_950 = IssuesId;
  let index_IssueComments_950 = 950 + Math.floor(Math.random() * 99);
  let owner_IssueComments_950 = "owner_IssueComments_950_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_950 = "repo_IssueComments_950_" + Math.floor(Math.random()*1000);
  let since_IssueComments_950 = "since_IssueComments_950_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_950, body_IssueComments_950, id_IssueComments_950, index_IssueComments_950, owner_IssueComments_950, repo_IssueComments_950, since_IssueComments_950, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_950);
  // -> Updating IssueComments
  let before_IssueComments_upd_950 = "before_IssueComments_upd_950_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_950 = { "id": 1, "name": "body_IssueComments_upd_950_obj" };
  let id_IssueComments_upd_950 = id_IssueComments_950;
  let index_IssueComments_upd_950 = 950 + Math.floor(Math.random() * 99);
  let owner_IssueComments_upd_950 = "owner_IssueComments_upd_950_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_950 = "repo_IssueComments_upd_950_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_950 = "since_IssueComments_upd_950_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_950, body_IssueComments_upd_950, id_IssueComments_upd_950, index_IssueComments_upd_950, owner_IssueComments_upd_950, repo_IssueComments_upd_950, since_IssueComments_upd_950, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_950);
  // -> Deleting Leaf IssueComments (Standard)
  issueDeleteCommentDeprecated(owner_IssueComments_950, repo_IssueComments_950, index_IssueComments_950, id_IssueComments_950);
  verifyIssueCommentsDoesNotExist(id_IssueComments_950);

});

bthread("crud:IssueSubscriptions:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Repositories": "id", "Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let UsersId = captured["Users"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_960 = RepositoriesId;
  let index_IssueSubscriptions_960 = 960 + Math.floor(Math.random() * 99);
  let limit_IssueSubscriptions_960 = 960 + Math.floor(Math.random() * 99);
  let owner_IssueSubscriptions_960 = "owner_IssueSubscriptions_960_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_960 = 960 + Math.floor(Math.random() * 99);
  let repo_IssueSubscriptions_960 = "repo_IssueSubscriptions_960_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_960 = "user_IssueSubscriptions_960_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_960, index_IssueSubscriptions_960, limit_IssueSubscriptions_960, owner_IssueSubscriptions_960, page_IssueSubscriptions_960, repo_IssueSubscriptions_960, user_IssueSubscriptions_960, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueSubscriptionsExists(id_IssueSubscriptions_960);
  verifyIssueSubscriptionsExists(id_IssueSubscriptions_960);
  // -> Deleting Leaf IssueSubscriptions (Standard)
  issueDeleteSubscription(owner_IssueSubscriptions_960, repo_IssueSubscriptions_960, index_IssueSubscriptions_960, user_IssueSubscriptions_960);
  verifyIssueSubscriptionsDoesNotExist(id_IssueSubscriptions_960);

});

bthread("crud:IssueTimes:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_970 = "before_IssueTimes_970_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_970 = { "id": 1, "name": "body_IssueTimes_970_obj" };
  let index_IssueTimes_970 = 970 + Math.floor(Math.random() * 99);
  let limit_IssueTimes_970 = 970 + Math.floor(Math.random() * 99);
  let owner_IssueTimes_970 = "owner_IssueTimes_970";
  let page_IssueTimes_970 = 970 + Math.floor(Math.random() * 99);
  let repo_IssueTimes_970 = "repo_IssueTimes_970_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_970 = "since_IssueTimes_970_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_970 = "user_IssueTimes_970_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_970, body_IssueTimes_970, index_IssueTimes_970, limit_IssueTimes_970, owner_IssueTimes_970, page_IssueTimes_970, repo_IssueTimes_970, since_IssueTimes_970, user_IssueTimes_970, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueTimesExists(owner_IssueTimes_970);
  verifyIssueTimesExists(owner_IssueTimes_970);
  // -> Deleting Leaf IssueTimes (Standard)
  issueResetTime(owner_IssueTimes_970, repo_IssueTimes_970, index_IssueTimes_970);
  verifyIssueTimesDoesNotExist(owner_IssueTimes_970);

});

bthread("crud:Keys:linear:2", function () {
  // -> Creating Keys
  let body_Keys_980 = { "id": 1, "name": "body_Keys_980_obj" };
  let fingerprint_Keys_980 = "fingerprint_Keys_980_" + Math.floor(Math.random()*1000);
  let id_Keys_980 = 980 + Math.floor(Math.random() * 99);
  let limit_Keys_980 = 980 + Math.floor(Math.random() * 99);
  let page_Keys_980 = 980 + Math.floor(Math.random() * 99);
  userCurrentPostKey(body_Keys_980, fingerprint_Keys_980, id_Keys_980, limit_Keys_980, page_Keys_980, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_980);
  verifyKeysExists(id_Keys_980);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_980);
  verifyKeysDoesNotExist(id_Keys_980);

});

bthread("crud:MirrorSync:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating MirrorSync
  let id_MirrorSync_990 = RepositoriesId;
  let owner_MirrorSync_990 = "owner_MirrorSync_990_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_990 = "repo_MirrorSync_990_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_990, owner_MirrorSync_990, repo_MirrorSync_990, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_990);
  verifyMirrorSyncExists(id_MirrorSync_990);
});

bthread("crud:PullRequests:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PullRequests
  let body_PullRequests_1000 = { "id": 1, "name": "body_PullRequests_1000_obj" };
  let id_PullRequests_1000 = RepositoriesId;
  let index_PullRequests_1000 = 1000 + Math.floor(Math.random() * 99);
  let limit_PullRequests_1000 = 1000 + Math.floor(Math.random() * 99);
  let owner_PullRequests_1000 = "owner_PullRequests_1000_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1000 = 1000 + Math.floor(Math.random() * 99);
  let repo_PullRequests_1000 = "repo_PullRequests_1000_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1000 = "skip_to_PullRequests_1000_" + Math.floor(Math.random()*1000);
  let style_PullRequests_1000 = "style_PullRequests_1000_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1000 = "whitespace_PullRequests_1000_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_1000, id_PullRequests_1000, index_PullRequests_1000, limit_PullRequests_1000, owner_PullRequests_1000, page_PullRequests_1000, repo_PullRequests_1000, skip_to_PullRequests_1000, style_PullRequests_1000, whitespace_PullRequests_1000, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1000);
  // -> Updating PullRequests
  let body_PullRequests_upd_1000 = { "id": 1, "name": "body_PullRequests_upd_1000_obj" };
  let id_PullRequests_upd_1000 = id_PullRequests_1000;
  let index_PullRequests_upd_1000 = 1000 + Math.floor(Math.random() * 99);
  let limit_PullRequests_upd_1000 = 1000 + Math.floor(Math.random() * 99);
  let owner_PullRequests_upd_1000 = "owner_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1000 = 1000 + Math.floor(Math.random() * 99);
  let repo_PullRequests_upd_1000 = "repo_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1000 = "skip_to_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  let style_PullRequests_upd_1000 = "style_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1000 = "whitespace_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1000, id_PullRequests_upd_1000, index_PullRequests_upd_1000, limit_PullRequests_upd_1000, owner_PullRequests_upd_1000, page_PullRequests_upd_1000, repo_PullRequests_upd_1000, skip_to_PullRequests_upd_1000, style_PullRequests_upd_1000, whitespace_PullRequests_upd_1000, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1000);
  // -> Deleting Parent PullRequests (Relational Intent Race)
  repoCancelScheduledAutoMerge(owner_PullRequests_1000, repo_PullRequests_1000, index_PullRequests_1000);

});

bthread("crud:PullReviewRequests:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"Repositories": "id", "PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1010 = { "id": 1, "name": "body_PullReviewRequests_1010_obj" };
  let index_PullReviewRequests_1010 = 1010 + Math.floor(Math.random() * 99);
  let owner_PullReviewRequests_1010 = "owner_PullReviewRequests_1010";
  let repo_PullReviewRequests_1010 = "repo_PullReviewRequests_1010_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1010, index_PullReviewRequests_1010, owner_PullReviewRequests_1010, repo_PullReviewRequests_1010, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewRequestsExists(owner_PullReviewRequests_1010);
  verifyPullReviewRequestsExists(owner_PullReviewRequests_1010);
  // -> Deleting Leaf PullReviewRequests (Standard)
  repoDeletePullReviewRequests(owner_PullReviewRequests_1010, repo_PullReviewRequests_1010, index_PullReviewRequests_1010);
  verifyPullReviewRequestsDoesNotExist(owner_PullReviewRequests_1010);

});

bthread("crud:PullReviews:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"Repositories": "id", "PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1020 = { "id": 1, "name": "body_PullReviews_1020_obj" };
  let id_PullReviews_1020 = PullRequestsId;
  let index_PullReviews_1020 = 1020 + Math.floor(Math.random() * 99);
  let limit_PullReviews_1020 = 1020 + Math.floor(Math.random() * 99);
  let owner_PullReviews_1020 = "owner_PullReviews_1020_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1020 = 1020 + Math.floor(Math.random() * 99);
  let repo_PullReviews_1020 = "repo_PullReviews_1020_" + Math.floor(Math.random()*1000);
  repoCreatePullReview(body_PullReviews_1020, id_PullReviews_1020, index_PullReviews_1020, limit_PullReviews_1020, owner_PullReviews_1020, page_PullReviews_1020, repo_PullReviews_1020, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewsExists(id_PullReviews_1020);
  verifyPullReviewsExists(id_PullReviews_1020);
  // -> Deleting Parent PullReviews (Relational Intent Race)
  repoDeletePullReview(owner_PullReviews_1020, repo_PullReviews_1020, index_PullReviews_1020, id_PullReviews_1020);

});

bthread("crud:PullReviewDismissals:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"Repositories": "id", "PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1030 = { "id": 1, "name": "body_PullReviewDismissals_1030_obj" };
  let id_PullReviewDismissals_1030 = PullReviewsId;
  let index_PullReviewDismissals_1030 = 1030 + Math.floor(Math.random() * 99);
  let owner_PullReviewDismissals_1030 = "owner_PullReviewDismissals_1030_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1030 = "repo_PullReviewDismissals_1030_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1030, id_PullReviewDismissals_1030, index_PullReviewDismissals_1030, owner_PullReviewDismissals_1030, repo_PullReviewDismissals_1030, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1030);
  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1030);
});

bthread("crud:PullReviewUndismissals:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"Repositories": "id", "PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1040 = PullReviewsId;
  let index_PullReviewUndismissals_1040 = 1040 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_1040 = "owner_PullReviewUndismissals_1040_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1040 = "repo_PullReviewUndismissals_1040_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1040, index_PullReviewUndismissals_1040, owner_PullReviewUndismissals_1040, repo_PullReviewUndismissals_1040, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1040);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1040);
});

bthread("crud:PushMirrors:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_1050 = RepositoriesId;
  let limit_PushMirrors_1050 = 1050 + Math.floor(Math.random() * 99);
  let name_PushMirrors_1050 = "name_PushMirrors_1050_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1050 = "owner_PushMirrors_1050_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1050 = 1050 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_1050 = "repo_PushMirrors_1050_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1050, limit_PushMirrors_1050, name_PushMirrors_1050, owner_PushMirrors_1050, page_PushMirrors_1050, repo_PushMirrors_1050, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_1050);
  verifyPushMirrorsExists(id_PushMirrors_1050);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_1050, repo_PushMirrors_1050, name_PushMirrors_1050);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_1050);

});

bthread("crud:Releases:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Releases
  let body_Releases_1060 = { "id": 1, "name": "body_Releases_1060_obj" };
  let draft_Releases_1060 = true;
  let id_Releases_1060 = RepositoriesId;
  let limit_Releases_1060 = 1060 + Math.floor(Math.random() * 99);
  let owner_Releases_1060 = "owner_Releases_1060_" + Math.floor(Math.random()*1000);
  let page_Releases_1060 = 1060 + Math.floor(Math.random() * 99);
  let pre_release_Releases_1060 = true;
  let repo_Releases_1060 = "repo_Releases_1060_" + Math.floor(Math.random()*1000);
  let tag_Releases_1060 = "tag_Releases_1060_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_1060, draft_Releases_1060, id_Releases_1060, limit_Releases_1060, owner_Releases_1060, page_Releases_1060, pre_release_Releases_1060, repo_Releases_1060, tag_Releases_1060, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1060);
  // -> Updating Releases
  let body_Releases_upd_1060 = { "id": 1, "name": "body_Releases_upd_1060_obj" };
  let draft_Releases_upd_1060 = true;
  let id_Releases_upd_1060 = id_Releases_1060;
  let limit_Releases_upd_1060 = 1060 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_1060 = "owner_Releases_upd_1060_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1060 = 1060 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_1060 = true;
  let repo_Releases_upd_1060 = "repo_Releases_upd_1060_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_1060 = "tag_Releases_upd_1060_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_1060, draft_Releases_upd_1060, id_Releases_upd_1060, limit_Releases_upd_1060, owner_Releases_upd_1060, page_Releases_upd_1060, pre_release_Releases_upd_1060, repo_Releases_upd_1060, tag_Releases_upd_1060, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1060);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_1060, repo_Releases_1060, tag_Releases_1060);

});

bthread("crud:ReleaseAttachments:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Repositories": "id", "Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1070 = "attachment_ReleaseAttachments_1070_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1070 = 1070 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_1070 = { "id": 1, "name": "body_ReleaseAttachments_1070_obj" };
  let id_ReleaseAttachments_1070 = ReleasesId;
  let name_ReleaseAttachments_1070 = "name_ReleaseAttachments_1070_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1070 = "owner_ReleaseAttachments_1070_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1070 = "repo_ReleaseAttachments_1070_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1070, attachment_id_ReleaseAttachments_1070, body_ReleaseAttachments_1070, id_ReleaseAttachments_1070, name_ReleaseAttachments_1070, owner_ReleaseAttachments_1070, repo_ReleaseAttachments_1070, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1070);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1070 = "attachment_ReleaseAttachments_upd_1070_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1070 = 1070 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_1070 = { "id": 1, "name": "body_ReleaseAttachments_upd_1070_obj" };
  let id_ReleaseAttachments_upd_1070 = id_ReleaseAttachments_1070;
  let name_ReleaseAttachments_upd_1070 = "name_ReleaseAttachments_upd_1070_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1070 = "owner_ReleaseAttachments_upd_1070_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1070 = "repo_ReleaseAttachments_upd_1070_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1070, attachment_id_ReleaseAttachments_upd_1070, body_ReleaseAttachments_upd_1070, id_ReleaseAttachments_upd_1070, name_ReleaseAttachments_upd_1070, owner_ReleaseAttachments_upd_1070, repo_ReleaseAttachments_upd_1070, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1070);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1070, repo_ReleaseAttachments_1070, id_ReleaseAttachments_1070, attachment_id_ReleaseAttachments_1070);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_1070);

});

bthread("crud:TagProtections:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating TagProtections
  let body_TagProtections_1080 = { "id": 1, "name": "body_TagProtections_1080_obj" };
  let id_TagProtections_1080 = RepositoriesId;
  let owner_TagProtections_1080 = "owner_TagProtections_1080_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1080 = "repo_TagProtections_1080_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1080, id_TagProtections_1080, owner_TagProtections_1080, repo_TagProtections_1080, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1080);
  // -> Updating TagProtections
  let body_TagProtections_upd_1080 = { "id": 1, "name": "body_TagProtections_upd_1080_obj" };
  let id_TagProtections_upd_1080 = id_TagProtections_1080;
  let owner_TagProtections_upd_1080 = "owner_TagProtections_upd_1080_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1080 = "repo_TagProtections_upd_1080_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1080, id_TagProtections_upd_1080, owner_TagProtections_upd_1080, repo_TagProtections_upd_1080, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1080);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_1080, repo_TagProtections_1080, id_TagProtections_1080);
  verifyTagProtectionsDoesNotExist(id_TagProtections_1080);

});

bthread("crud:Tags:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Tags
  let body_Tags_1090 = { "id": 1, "name": "body_Tags_1090_obj" };
  let id_Tags_1090 = RepositoriesId;
  let limit_Tags_1090 = 1090 + Math.floor(Math.random() * 99);
  let owner_Tags_1090 = "owner_Tags_1090_" + Math.floor(Math.random()*1000);
  let page_Tags_1090 = 1090 + Math.floor(Math.random() * 99);
  let repo_Tags_1090 = "repo_Tags_1090_" + Math.floor(Math.random()*1000);
  let tag_Tags_1090 = "tag_Tags_1090_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1090, id_Tags_1090, limit_Tags_1090, owner_Tags_1090, page_Tags_1090, repo_Tags_1090, tag_Tags_1090, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_1090);
  verifyTagsExists(id_Tags_1090);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_1090, repo_Tags_1090, tag_Tags_1090);
  verifyTagsDoesNotExist(id_Tags_1090);

});

bthread("crud:Topics:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Topics
  let body_Topics_1100 = { "id": 1, "name": "body_Topics_1100_obj" };
  let limit_Topics_1100 = 1100 + Math.floor(Math.random() * 99);
  let owner_Topics_1100 = "owner_Topics_1100";
  let page_Topics_1100 = 1100 + Math.floor(Math.random() * 99);
  let q_Topics_1100 = "q_Topics_1100_" + Math.floor(Math.random()*1000);
  let repo_Topics_1100 = "repo_Topics_1100_" + Math.floor(Math.random()*1000);
  let topic_Topics_1100 = "topic_Topics_1100_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1100, limit_Topics_1100, owner_Topics_1100, page_Topics_1100, q_Topics_1100, repo_Topics_1100, topic_Topics_1100, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1100);
  // -> Updating Topics
  let body_Topics_upd_1100 = { "id": 1, "name": "body_Topics_upd_1100_obj" };
  let limit_Topics_upd_1100 = 1100 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_1100 = owner_Topics_1100;
  let page_Topics_upd_1100 = 1100 + Math.floor(Math.random() * 99);
  let q_Topics_upd_1100 = "q_Topics_upd_1100_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1100 = "repo_Topics_upd_1100_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1100 = "topic_Topics_upd_1100_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1100, limit_Topics_upd_1100, owner_Topics_upd_1100, page_Topics_upd_1100, q_Topics_upd_1100, repo_Topics_upd_1100, topic_Topics_upd_1100, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1100);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_1100, repo_Topics_1100, topic_Topics_1100);
  verifyTopicsDoesNotExist(owner_Topics_1100);

});

bthread("crud:RepositoryTransfer:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Repositories": "id", "Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let UsersId = captured["Users"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1110 = { "id": 1, "name": "body_RepositoryTransfer_1110_obj" };
  let id_RepositoryTransfer_1110 = RepositoriesId;
  let owner_RepositoryTransfer_1110 = "owner_RepositoryTransfer_1110_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1110 = "repo_RepositoryTransfer_1110_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1110 = "transferOptions_RepositoryTransfer_1110_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1110, id_RepositoryTransfer_1110, owner_RepositoryTransfer_1110, repo_RepositoryTransfer_1110, transferOptions_RepositoryTransfer_1110, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_1110);
  verifyRepositoryTransferExists(id_RepositoryTransfer_1110);
});

bthread("crud:WikiPages:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating WikiPages
  let body_WikiPages_1120 = { "id": 1, "name": "body_WikiPages_1120_obj" };
  let id_WikiPages_1120 = RepositoriesId;
  let limit_WikiPages_1120 = 1120 + Math.floor(Math.random() * 99);
  let owner_WikiPages_1120 = "owner_WikiPages_1120_" + Math.floor(Math.random()*1000);
  let page_WikiPages_1120 = 1120 + Math.floor(Math.random() * 99);
  let pageName_WikiPages_1120 = "pageName_WikiPages_1120_" + Math.floor(Math.random()*1000);
  let repo_WikiPages_1120 = "repo_WikiPages_1120_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPages_1120 = "wikiPageOptions_WikiPages_1120_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPages_1120, id_WikiPages_1120, limit_WikiPages_1120, owner_WikiPages_1120, page_WikiPages_1120, pageName_WikiPages_1120, repo_WikiPages_1120, wikiPageOptions_WikiPages_1120, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPagesExists(id_WikiPages_1120);
  // -> Updating WikiPages
  let body_WikiPages_upd_1120 = { "id": 1, "name": "body_WikiPages_upd_1120_obj" };
  let id_WikiPages_upd_1120 = id_WikiPages_1120;
  let limit_WikiPages_upd_1120 = 1120 + Math.floor(Math.random() * 99);
  let owner_WikiPages_upd_1120 = "owner_WikiPages_upd_1120_" + Math.floor(Math.random()*1000);
  let page_WikiPages_upd_1120 = 1120 + Math.floor(Math.random() * 99);
  let pageName_WikiPages_upd_1120 = "pageName_WikiPages_upd_1120_" + Math.floor(Math.random()*1000);
  let repo_WikiPages_upd_1120 = "repo_WikiPages_upd_1120_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPages_upd_1120 = "wikiPageOptions_WikiPages_upd_1120_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPages_upd_1120, id_WikiPages_upd_1120, limit_WikiPages_upd_1120, owner_WikiPages_upd_1120, page_WikiPages_upd_1120, pageName_WikiPages_upd_1120, repo_WikiPages_upd_1120, wikiPageOptions_WikiPages_upd_1120, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPagesExists(id_WikiPages_1120);
  // -> Deleting Leaf WikiPages (Standard)
  repoDeleteWikiPage(owner_WikiPages_1120, repo_WikiPages_1120, pageName_WikiPages_1120);
  verifyWikiPagesDoesNotExist(id_WikiPages_1120);

});

bthread("crud:TeamMembers:linear:2", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1130 = OrganizationTeamsId;
  let limit_TeamMembers_1130 = 1130 + Math.floor(Math.random() * 99);
  let page_TeamMembers_1130 = 1130 + Math.floor(Math.random() * 99);
  let username_TeamMembers_1130 = "username_TeamMembers_1130";
  orgAddTeamMember(id_TeamMembers_1130, limit_TeamMembers_1130, page_TeamMembers_1130, username_TeamMembers_1130, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_1130);
  verifyTeamMembersExists(id_TeamMembers_1130);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_1130);
  verifyTeamMembersDoesNotExist(id_TeamMembers_1130);

});

bthread("crud:TeamRepos:linear:2", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  deps["OrganizationRepos"] = matchAnyOrganizationReposAdded();
  let pkMap = {"OrganizationTeams": "id", "OrganizationRepos": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  let OrganizationReposId = captured["OrganizationRepos"];
  // -> Creating TeamRepos
  let id_TeamRepos_1140 = OrganizationReposId;
  let limit_TeamRepos_1140 = 1140 + Math.floor(Math.random() * 99);
  let org_TeamRepos_1140 = "org_TeamRepos_1140_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_1140 = 1140 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_1140 = "repo_TeamRepos_1140_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1140, limit_TeamRepos_1140, org_TeamRepos_1140, page_TeamRepos_1140, repo_TeamRepos_1140, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_1140);
  verifyTeamReposExists(id_TeamRepos_1140);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_1140);
  verifyTeamReposDoesNotExist(id_TeamRepos_1140);

});

bthread("crud:UserVariables:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_1150 = { "id": 1, "name": "body_UserVariables_1150_obj" };
  let variablename_UserVariables_1150 = "variablename_UserVariables_1150";
  createUserVariable(body_UserVariables_1150, variablename_UserVariables_1150, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1150);
  // -> Updating UserVariables
  let body_UserVariables_upd_1150 = { "id": 1, "name": "body_UserVariables_upd_1150_obj" };
  let variablename_UserVariables_upd_1150 = variablename_UserVariables_1150;
  updateUserVariable(body_UserVariables_upd_1150, variablename_UserVariables_upd_1150, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1150);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_1150);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_1150);

});

bthread("crud:OAuth2Applications:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1160 = { "id": 1, "name": "body_OAuth2Applications_1160_obj" };
  let id_OAuth2Applications_1160 = 1160 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_1160 = 1160 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_1160 = 1160 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_1160, id_OAuth2Applications_1160, limit_OAuth2Applications_1160, page_OAuth2Applications_1160, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1160);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1160 = { "id": 1, "name": "body_OAuth2Applications_upd_1160_obj" };
  let id_OAuth2Applications_upd_1160 = id_OAuth2Applications_1160;
  let limit_OAuth2Applications_upd_1160 = 1160 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_1160 = 1160 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1160, id_OAuth2Applications_upd_1160, limit_OAuth2Applications_upd_1160, page_OAuth2Applications_upd_1160, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1160);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_1160);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_1160);

});

bthread("crud:UserAvatar:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_1170 = { "id": 1, "name": "body_UserAvatar_1170_obj" };
  let id_UserAvatar_1170 = 1170 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_1170, id_UserAvatar_1170, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_1170);
  verifyUserAvatarExists(id_UserAvatar_1170);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_1170);
  verifyUserAvatarDoesNotExist(id_UserAvatar_1170);

});

bthread("crud:UserEmails:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_1180 = { "id": 1, "name": "body_UserEmails_1180_obj" };
  let id_UserEmails_1180 = 1180 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_1180, id_UserEmails_1180, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_1180);
  verifyUserEmailsExists(id_UserEmails_1180);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_1180);
  verifyUserEmailsDoesNotExist(id_UserEmails_1180);

});

bthread("crud:GPGKeys:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_1190 = { "id": 1, "name": "Form_GPGKeys_1190_obj" };
  let id_GPGKeys_1190 = 1190 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_1190 = 1190 + Math.floor(Math.random() * 99);
  let page_GPGKeys_1190 = 1190 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_1190, id_GPGKeys_1190, limit_GPGKeys_1190, page_GPGKeys_1190, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_1190);
  verifyGPGKeysExists(id_GPGKeys_1190);
  // -> Deleting Parent GPGKeys (Relational Intent Race)
  userCurrentDeleteGPGKey(id_GPGKeys_1190);

});

bthread("crud:GPGKeyVerification:linear:2", function () {
  let deps = {};
  deps["GPGKeys"] = matchAnyGPGKeysAdded();
  let pkMap = {"GPGKeys": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let GPGKeysId = captured["GPGKeys"];
  // -> Creating GPGKeyVerification
  let body_GPGKeyVerification_1200 = { "id": 1, "name": "body_GPGKeyVerification_1200_obj" };
  let id_GPGKeyVerification_1200 = GPGKeysId;
  userVerifyGPGKey(body_GPGKeyVerification_1200, id_GPGKeyVerification_1200, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1200);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1200);
});

bthread("crud:UserStarred:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Users": "username", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating UserStarred
  let limit_UserStarred_1210 = 1210 + Math.floor(Math.random() * 99);
  let owner_UserStarred_1210 = "owner_UserStarred_1210";
  let page_UserStarred_1210 = 1210 + Math.floor(Math.random() * 99);
  let repo_UserStarred_1210 = "repo_UserStarred_1210_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1210, owner_UserStarred_1210, page_UserStarred_1210, repo_UserStarred_1210, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_1210);
  verifyUserStarredExists(owner_UserStarred_1210);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_1210, repo_UserStarred_1210);
  verifyUserStarredDoesNotExist(owner_UserStarred_1210);

});

bthread("crud:ActivityPub:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating ActivityPub
  let user_id_ActivityPub_1220 = UsersId;
  activitypubPersonInbox(user_id_ActivityPub_1220, { expectedResponseCodes: [200, 201, 204] });

  verifyActivityPubExists(user_id_ActivityPub_1220);
  verifyActivityPubExists(user_id_ActivityPub_1220);
});

bthread("crud:AdminCron:linear:3", function () {
  // -> Creating AdminCron
  let id_AdminCron_1230 = 1230 + Math.floor(Math.random() * 99);
  let limit_AdminCron_1230 = 1230 + Math.floor(Math.random() * 99);
  let page_AdminCron_1230 = 1230 + Math.floor(Math.random() * 99);
  let task_AdminCron_1230 = "task_AdminCron_1230_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_1230, limit_AdminCron_1230, page_AdminCron_1230, task_AdminCron_1230, { expectedResponseCodes: [200, 201, 204] });

  verifyAdminCronExists(id_AdminCron_1230);
  verifyAdminCronExists(id_AdminCron_1230);
});

bthread("crud:Hooks:linear:3", function () {
  // -> Creating Hooks
  let body_Hooks_1240 = { "id": 1, "name": "body_Hooks_1240_obj" };
  let id_Hooks_1240 = 1240 + Math.floor(Math.random() * 99);
  let limit_Hooks_1240 = 1240 + Math.floor(Math.random() * 99);
  let page_Hooks_1240 = 1240 + Math.floor(Math.random() * 99);
  userCreateHook(body_Hooks_1240, id_Hooks_1240, limit_Hooks_1240, page_Hooks_1240, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_1240);
  // -> Updating Hooks
  let body_Hooks_upd_1240 = { "id": 1, "name": "body_Hooks_upd_1240_obj" };
  let id_Hooks_upd_1240 = id_Hooks_1240;
  let limit_Hooks_upd_1240 = 1240 + Math.floor(Math.random() * 99);
  let page_Hooks_upd_1240 = 1240 + Math.floor(Math.random() * 99);
  userEditHook(body_Hooks_upd_1240, id_Hooks_upd_1240, limit_Hooks_upd_1240, page_Hooks_upd_1240, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_1240);
  // -> Deleting Leaf Hooks (Standard)
  userDeleteHook(id_Hooks_1240);
  verifyHooksDoesNotExist(id_Hooks_1240);

});

bthread("crud:UnadoptedRepositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Users": "username", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_1250 = 1250 + Math.floor(Math.random() * 99);
  let owner_UnadoptedRepositories_1250 = "owner_UnadoptedRepositories_1250";
  let page_UnadoptedRepositories_1250 = 1250 + Math.floor(Math.random() * 99);
  let pattern_UnadoptedRepositories_1250 = "pattern_UnadoptedRepositories_1250_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_1250 = "repo_UnadoptedRepositories_1250_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_1250, owner_UnadoptedRepositories_1250, page_UnadoptedRepositories_1250, pattern_UnadoptedRepositories_1250, repo_UnadoptedRepositories_1250, { expectedResponseCodes: [200, 201, 204] });

  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_1250);
  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_1250);
  // -> Deleting Leaf UnadoptedRepositories (Standard)
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_1250, repo_UnadoptedRepositories_1250);
  verifyUnadoptedRepositoriesDoesNotExist(owner_UnadoptedRepositories_1250);

});

bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let EditUserOption_Users_1260 = "EditUserOption_Users_1260_" + Math.floor(Math.random()*1000);
  let body_Users_1260 = { "id": 1, "name": "body_Users_1260_obj" };
  let limit_Users_1260 = 1260 + Math.floor(Math.random() * 99);
  let page_Users_1260 = 1260 + Math.floor(Math.random() * 99);
  let token_Users_1260 = "token_Users_1260_" + Math.floor(Math.random()*1000);
  let username_Users_1260 = "username_Users_1260";
  userCreateToken(EditUserOption_Users_1260, body_Users_1260, limit_Users_1260, page_Users_1260, token_Users_1260, username_Users_1260, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_1260);
  // -> Updating Users
  let EditUserOption_Users_upd_1260 = "EditUserOption_Users_upd_1260_" + Math.floor(Math.random()*1000);
  let body_Users_upd_1260 = { "id": 1, "name": "body_Users_upd_1260_obj" };
  let limit_Users_upd_1260 = 1260 + Math.floor(Math.random() * 99);
  let page_Users_upd_1260 = 1260 + Math.floor(Math.random() * 99);
  let token_Users_upd_1260 = "token_Users_upd_1260_" + Math.floor(Math.random()*1000);
  let username_Users_upd_1260 = username_Users_1260;
  adminEditUser(EditUserOption_Users_upd_1260, body_Users_upd_1260, limit_Users_upd_1260, page_Users_upd_1260, token_Users_upd_1260, username_Users_upd_1260, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_1260);
  // -> Deleting Parent Users (Relational Intent Race)
  userDeleteAccessToken(username_Users_1260, token_Users_1260);

});

bthread("crud:UserBadges:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_1270 = "UserBadgeOption_UserBadges_1270_" + Math.floor(Math.random()*1000);
  let body_UserBadges_1270 = { "id": 1, "name": "body_UserBadges_1270_obj" };
  let username_UserBadges_1270 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_1270, body_UserBadges_1270, username_UserBadges_1270, { expectedResponseCodes: [200, 201, 204] });

  verifyUserBadgesExists(username_UserBadges_1270);
  verifyUserBadgesExists(username_UserBadges_1270);
  // -> Deleting Leaf UserBadges (Standard)
  adminDeleteUserBadges(username_UserBadges_1270);
  verifyUserBadgesDoesNotExist(username_UserBadges_1270);

});

bthread("crud:UserKeys:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserKeys
  let key_UserKeys_1280 = "key_UserKeys_1280_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_1280 = "purge_UserKeys_1280_" + Math.floor(Math.random()*1000);
  let username_UserKeys_1280 = UsersId;
  adminCreatePublicKey(key_UserKeys_1280, purge_UserKeys_1280, username_UserKeys_1280, { expectedResponseCodes: [200, 201, 204] });

  verifyUserKeysExists(username_UserKeys_1280);
  verifyUserKeysExists(username_UserKeys_1280);
  // -> Deleting Leaf UserKeys (Standard)
  adminDeleteUser(username_UserKeys_1280);
  verifyUserKeysDoesNotExist(username_UserKeys_1280);

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
  let id_UserOrganizations_1290 = 1290 + Math.floor(Math.random() * 99);
  let organization_UserOrganizations_1290 = "organization_UserOrganizations_1290_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_1290 = UsersId;
  adminCreateOrg(id_UserOrganizations_1290, organization_UserOrganizations_1290, username_UserOrganizations_1290, { expectedResponseCodes: [200, 201, 204] });

  verifyUserOrganizationsExists(id_UserOrganizations_1290);
  verifyUserOrganizationsExists(id_UserOrganizations_1290);
});

bthread("crud:UserRename:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_1300 = "body_UserRename_1300_" + Math.floor(Math.random()*1000);
  let id_UserRename_1300 = 1300 + Math.floor(Math.random() * 99);
  let username_UserRename_1300 = UsersId;
  adminRenameUser(body_UserRename_1300, id_UserRename_1300, username_UserRename_1300, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRenameExists(id_UserRename_1300);
  verifyUserRenameExists(id_UserRename_1300);
});

bthread("crud:UserRepositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_1310 = 1310 + Math.floor(Math.random() * 99);
  let repository_UserRepositories_1310 = "repository_UserRepositories_1310_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_1310 = UsersId;
  adminCreateRepo(id_UserRepositories_1310, repository_UserRepositories_1310, username_UserRepositories_1310, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRepositoriesExists(id_UserRepositories_1310);
  verifyUserRepositoriesExists(id_UserRepositories_1310);
});

bthread("crud:Markdown:linear:3", function () {
  // -> Creating Markdown
  let body_Markdown_1320 = "body_Markdown_1320_" + Math.floor(Math.random()*1000);
  let id_Markdown_1320 = 1320 + Math.floor(Math.random() * 99);
  renderMarkdown(body_Markdown_1320, id_Markdown_1320, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkdownExists(id_Markdown_1320);
  verifyMarkdownExists(id_Markdown_1320);
});

bthread("crud:Markup:linear:3", function () {
  // -> Creating Markup
  let body_Markup_1330 = { "id": 1, "name": "body_Markup_1330_obj" };
  let id_Markup_1330 = 1330 + Math.floor(Math.random() * 99);
  renderMarkup(body_Markup_1330, id_Markup_1330, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkupExists(id_Markup_1330);
  verifyMarkupExists(id_Markup_1330);
});

bthread("crud:Organization:linear:3", function () {
  // -> Creating Organization
  let body_Organization_1340 = { "id": 1, "name": "body_Organization_1340_obj" };
  let limit_Organization_1340 = 1340 + Math.floor(Math.random() * 99);
  let org_Organization_1340 = "org_Organization_1340";
  let page_Organization_1340 = 1340 + Math.floor(Math.random() * 99);
  let secretname_Organization_1340 = "secretname_Organization_1340_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_1340, limit_Organization_1340, org_Organization_1340, page_Organization_1340, secretname_Organization_1340, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_1340);
  // -> Updating Organization
  let body_Organization_upd_1340 = { "id": 1, "name": "body_Organization_upd_1340_obj" };
  let limit_Organization_upd_1340 = 1340 + Math.floor(Math.random() * 99);
  let org_Organization_upd_1340 = org_Organization_1340;
  let page_Organization_upd_1340 = 1340 + Math.floor(Math.random() * 99);
  let secretname_Organization_upd_1340 = "secretname_Organization_upd_1340_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_1340, limit_Organization_upd_1340, org_Organization_upd_1340, page_Organization_upd_1340, secretname_Organization_upd_1340, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_1340);
  // -> Deleting Parent Organization (Relational Intent Race)
  orgDelete(org_Organization_1340);

});

bthread("crud:Variables:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_1350 = "CreateVariableOption_Variables_1350_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_1350 = "2025-01-25T12:00:00Z";
  let body_Variables_1350 = { "id": 1, "name": "body_Variables_1350_obj" };
  let id_Variables_1350 = RepositoriesId;
  let limit_Variables_1350 = 1350 + Math.floor(Math.random() * 99);
  let owner_Variables_1350 = "owner_Variables_1350_" + Math.floor(Math.random()*1000);
  let page_Variables_1350 = 1350 + Math.floor(Math.random() * 99);
  let repo_Variables_1350 = "repo_Variables_1350_" + Math.floor(Math.random()*1000);
  let variablename_Variables_1350 = "variablename_Variables_1350_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_1350, UpdateVariableOption_Variables_1350, body_Variables_1350, id_Variables_1350, limit_Variables_1350, owner_Variables_1350, page_Variables_1350, repo_Variables_1350, variablename_Variables_1350, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_1350);
  // -> Updating Variables
  let CreateVariableOption_Variables_upd_1350 = "CreateVariableOption_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_1350 = "2025-01-25T12:00:00Z";
  let body_Variables_upd_1350 = { "id": 1, "name": "body_Variables_upd_1350_obj" };
  let id_Variables_upd_1350 = id_Variables_1350;
  let limit_Variables_upd_1350 = 1350 + Math.floor(Math.random() * 99);
  let owner_Variables_upd_1350 = "owner_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_1350 = 1350 + Math.floor(Math.random() * 99);
  let repo_Variables_upd_1350 = "repo_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_1350 = "variablename_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_1350, UpdateVariableOption_Variables_upd_1350, body_Variables_upd_1350, id_Variables_upd_1350, limit_Variables_upd_1350, owner_Variables_upd_1350, page_Variables_upd_1350, repo_Variables_upd_1350, variablename_Variables_upd_1350, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_1350);
  // -> Deleting Leaf Variables (Standard)
  deleteRepoVariable(owner_Variables_1350, repo_Variables_1350, variablename_Variables_1350);
  verifyVariablesDoesNotExist(id_Variables_1350);

});

bthread("crud:Avatar:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating Avatar
  let UpdateUserAvatarOption_Avatar_1360 = "2025-01-25T12:00:00Z";
  let body_Avatar_1360 = { "id": 1, "name": "body_Avatar_1360_obj" };
  let org_Avatar_1360 = OrganizationId;
  orgUpdateAvatar(UpdateUserAvatarOption_Avatar_1360, body_Avatar_1360, org_Avatar_1360, { expectedResponseCodes: [200, 201, 204] });

  verifyAvatarExists(org_Avatar_1360);
  verifyAvatarExists(org_Avatar_1360);
  // -> Deleting Leaf Avatar (Standard)
  orgDeleteAvatar(org_Avatar_1360);
  verifyAvatarDoesNotExist(org_Avatar_1360);

});

bthread("crud:Labels:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Labels
  let body_Labels_1370 = { "id": 1, "name": "body_Labels_1370_obj" };
  let id_Labels_1370 = RepositoriesId;
  let limit_Labels_1370 = 1370 + Math.floor(Math.random() * 99);
  let owner_Labels_1370 = "owner_Labels_1370_" + Math.floor(Math.random()*1000);
  let page_Labels_1370 = 1370 + Math.floor(Math.random() * 99);
  let repo_Labels_1370 = "repo_Labels_1370_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_1370, id_Labels_1370, limit_Labels_1370, owner_Labels_1370, page_Labels_1370, repo_Labels_1370, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_1370);
  // -> Updating Labels
  let body_Labels_upd_1370 = { "id": 1, "name": "body_Labels_upd_1370_obj" };
  let id_Labels_upd_1370 = id_Labels_1370;
  let limit_Labels_upd_1370 = 1370 + Math.floor(Math.random() * 99);
  let owner_Labels_upd_1370 = "owner_Labels_upd_1370_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_1370 = 1370 + Math.floor(Math.random() * 99);
  let repo_Labels_upd_1370 = "repo_Labels_upd_1370_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_1370, id_Labels_upd_1370, limit_Labels_upd_1370, owner_Labels_upd_1370, page_Labels_upd_1370, repo_Labels_upd_1370, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_1370);
  // -> Deleting Leaf Labels (Standard)
  issueDeleteLabel(owner_Labels_1370, repo_Labels_1370, id_Labels_1370);
  verifyLabelsDoesNotExist(id_Labels_1370);

});

bthread("crud:OrganizationRepos:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_1380 = { "id": 1, "name": "body_OrganizationRepos_1380_obj" };
  let id_OrganizationRepos_1380 = 1380 + Math.floor(Math.random() * 99);
  let limit_OrganizationRepos_1380 = 1380 + Math.floor(Math.random() * 99);
  let org_OrganizationRepos_1380 = OrganizationId;
  let page_OrganizationRepos_1380 = 1380 + Math.floor(Math.random() * 99);
  createOrgRepo(body_OrganizationRepos_1380, id_OrganizationRepos_1380, limit_OrganizationRepos_1380, org_OrganizationRepos_1380, page_OrganizationRepos_1380, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationReposExists(id_OrganizationRepos_1380);
  verifyOrganizationReposExists(id_OrganizationRepos_1380);
});

bthread("crud:OrganizationTeams:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_1390 = { "id": 1, "name": "body_OrganizationTeams_1390_obj" };
  let id_OrganizationTeams_1390 = 1390 + Math.floor(Math.random() * 99);
  let limit_OrganizationTeams_1390 = 1390 + Math.floor(Math.random() * 99);
  let org_OrganizationTeams_1390 = OrganizationId;
  let page_OrganizationTeams_1390 = 1390 + Math.floor(Math.random() * 99);
  orgCreateTeam(body_OrganizationTeams_1390, id_OrganizationTeams_1390, limit_OrganizationTeams_1390, org_OrganizationTeams_1390, page_OrganizationTeams_1390, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationTeamsExists(id_OrganizationTeams_1390);
  verifyOrganizationTeamsExists(id_OrganizationTeams_1390);
});

bthread("crud:Issues:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issues
  let content_Issues_1400 = { "id": 1, "name": "content_Issues_1400_obj" };
  let id_Issues_1400 = RepositoriesId;
  let index_Issues_1400 = 1400 + Math.floor(Math.random() * 99);
  let limit_Issues_1400 = 1400 + Math.floor(Math.random() * 99);
  let owner_Issues_1400 = "owner_Issues_1400_" + Math.floor(Math.random()*1000);
  let page_Issues_1400 = 1400 + Math.floor(Math.random() * 99);
  let position_Issues_1400 = 1400 + Math.floor(Math.random() * 99);
  let repo_Issues_1400 = "repo_Issues_1400_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_1400, id_Issues_1400, index_Issues_1400, limit_Issues_1400, owner_Issues_1400, page_Issues_1400, position_Issues_1400, repo_Issues_1400, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_1400);
  // -> Updating Issues
  let content_Issues_upd_1400 = { "id": 1, "name": "content_Issues_upd_1400_obj" };
  let id_Issues_upd_1400 = id_Issues_1400;
  let index_Issues_upd_1400 = 1400 + Math.floor(Math.random() * 99);
  let limit_Issues_upd_1400 = 1400 + Math.floor(Math.random() * 99);
  let owner_Issues_upd_1400 = "owner_Issues_upd_1400_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_1400 = 1400 + Math.floor(Math.random() * 99);
  let position_Issues_upd_1400 = 1400 + Math.floor(Math.random() * 99);
  let repo_Issues_upd_1400 = "repo_Issues_upd_1400_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_1400, id_Issues_upd_1400, index_Issues_upd_1400, limit_Issues_upd_1400, owner_Issues_upd_1400, page_Issues_upd_1400, position_Issues_upd_1400, repo_Issues_upd_1400, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_1400);
  // -> Deleting Parent Issues (Relational Intent Race)
  issueDeleteTime(owner_Issues_1400, repo_Issues_1400, index_Issues_1400, id_Issues_1400);

});

bthread("crud:Repository:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Repository
  let EditRepoOption_Repository_1410 = "EditRepoOption_Repository_1410_" + Math.floor(Math.random()*1000);
  let body_Repository_1410 = { "id": 1, "name": "body_Repository_1410_obj" };
  let id_Repository_1410 = RepositoriesId;
  let limit_Repository_1410 = 1410 + Math.floor(Math.random() * 99);
  let owner_Repository_1410 = "owner_Repository_1410_" + Math.floor(Math.random()*1000);
  let page_Repository_1410 = 1410 + Math.floor(Math.random() * 99);
  let repo_Repository_1410 = "repo_Repository_1410_" + Math.floor(Math.random()*1000);
  repoMergeUpstream(EditRepoOption_Repository_1410, body_Repository_1410, id_Repository_1410, limit_Repository_1410, owner_Repository_1410, page_Repository_1410, repo_Repository_1410, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_1410);
  // -> Updating Repository
  let EditRepoOption_Repository_upd_1410 = "EditRepoOption_Repository_upd_1410_" + Math.floor(Math.random()*1000);
  let body_Repository_upd_1410 = { "id": 1, "name": "body_Repository_upd_1410_obj" };
  let id_Repository_upd_1410 = id_Repository_1410;
  let limit_Repository_upd_1410 = 1410 + Math.floor(Math.random() * 99);
  let owner_Repository_upd_1410 = "owner_Repository_upd_1410_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_1410 = 1410 + Math.floor(Math.random() * 99);
  let repo_Repository_upd_1410 = "repo_Repository_upd_1410_" + Math.floor(Math.random()*1000);
  repoEdit(EditRepoOption_Repository_upd_1410, body_Repository_upd_1410, id_Repository_upd_1410, limit_Repository_upd_1410, owner_Repository_upd_1410, page_Repository_upd_1410, repo_Repository_upd_1410, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_1410);
  // -> Deleting Leaf Repository (Standard)
  repoDeleteAvatar(owner_Repository_1410, repo_Repository_1410);
  verifyRepositoryDoesNotExist(id_Repository_1410);

});

bthread("crud:Branches:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_1420 = "CreateBranchRepoOption_Branches_1420_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_1420 = "2025-01-25T12:00:00Z";
  let body_Branches_1420 = { "id": 1, "name": "body_Branches_1420_obj" };
  let branch_Branches_1420 = "branch_Branches_1420_" + Math.floor(Math.random()*1000);
  let id_Branches_1420 = RepositoriesId;
  let limit_Branches_1420 = 1420 + Math.floor(Math.random() * 99);
  let owner_Branches_1420 = "owner_Branches_1420_" + Math.floor(Math.random()*1000);
  let page_Branches_1420 = 1420 + Math.floor(Math.random() * 99);
  let repo_Branches_1420 = "repo_Branches_1420_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_1420, UpdateBranchRepoOption_Branches_1420, body_Branches_1420, branch_Branches_1420, id_Branches_1420, limit_Branches_1420, owner_Branches_1420, page_Branches_1420, repo_Branches_1420, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_1420);
  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_1420 = "CreateBranchRepoOption_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_1420 = "2025-01-25T12:00:00Z";
  let body_Branches_upd_1420 = { "id": 1, "name": "body_Branches_upd_1420_obj" };
  let branch_Branches_upd_1420 = "branch_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_1420 = id_Branches_1420;
  let limit_Branches_upd_1420 = 1420 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_1420 = "owner_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_1420 = 1420 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_1420 = "repo_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_1420, UpdateBranchRepoOption_Branches_upd_1420, body_Branches_upd_1420, branch_Branches_upd_1420, id_Branches_upd_1420, limit_Branches_upd_1420, owner_Branches_upd_1420, page_Branches_upd_1420, repo_Branches_upd_1420, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_1420);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_1420, repo_Branches_1420, branch_Branches_1420);
  verifyBranchesDoesNotExist(id_Branches_1420);

});

bthread("crud:Collaborators:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_1430 = "AddCollaboratorOption_Collaborators_1430_" + Math.floor(Math.random()*1000);
  let body_Collaborators_1430 = { "id": 1, "name": "body_Collaborators_1430_obj" };
  let collaborator_Collaborators_1430 = "collaborator_Collaborators_1430_" + Math.floor(Math.random()*1000);
  let id_Collaborators_1430 = RepositoriesId;
  let limit_Collaborators_1430 = 1430 + Math.floor(Math.random() * 99);
  let owner_Collaborators_1430 = "owner_Collaborators_1430_" + Math.floor(Math.random()*1000);
  let page_Collaborators_1430 = 1430 + Math.floor(Math.random() * 99);
  let repo_Collaborators_1430 = "repo_Collaborators_1430_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_1430, body_Collaborators_1430, collaborator_Collaborators_1430, id_Collaborators_1430, limit_Collaborators_1430, owner_Collaborators_1430, page_Collaborators_1430, repo_Collaborators_1430, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_1430);
  verifyCollaboratorsExists(id_Collaborators_1430);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_1430, repo_Collaborators_1430, collaborator_Collaborators_1430);
  verifyCollaboratorsDoesNotExist(id_Collaborators_1430);

});

bthread("crud:Repositories:linear:3", function () {
  // -> Creating Repositories
  let body_Repositories_1440 = { "id": 1, "name": "body_Repositories_1440_obj" };
  let id_Repositories_1440 = 1440 + Math.floor(Math.random() * 99);
  let limit_Repositories_1440 = 1440 + Math.floor(Math.random() * 99);
  let owner_Repositories_1440 = "owner_Repositories_1440_" + Math.floor(Math.random()*1000);
  let page_Repositories_1440 = 1440 + Math.floor(Math.random() * 99);
  let repo_Repositories_1440 = "repo_Repositories_1440_" + Math.floor(Math.random()*1000);
  let username_Repositories_1440 = "username_Repositories_1440";
  createCurrentUserRepo(body_Repositories_1440, id_Repositories_1440, limit_Repositories_1440, owner_Repositories_1440, page_Repositories_1440, repo_Repositories_1440, username_Repositories_1440, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_1440);
  // -> Updating Repositories
  let body_Repositories_upd_1440 = { "id": 1, "name": "body_Repositories_upd_1440_obj" };
  let id_Repositories_upd_1440 = id_Repositories_1440;
  let limit_Repositories_upd_1440 = 1440 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_1440 = "owner_Repositories_upd_1440_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_1440 = 1440 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_1440 = "repo_Repositories_upd_1440_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_1440 = "username_Repositories_upd_1440";
  userCurrentPutSubscription(body_Repositories_upd_1440, id_Repositories_upd_1440, limit_Repositories_upd_1440, owner_Repositories_upd_1440, page_Repositories_upd_1440, repo_Repositories_upd_1440, username_Repositories_upd_1440, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_1440);
  // -> Deleting Parent Repositories (Relational Intent Race)
  userCurrentDeleteSubscription(owner_Repositories_1440, repo_Repositories_1440);

});

bthread("crud:Forks:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Forks
  let body_Forks_1450 = { "id": 1, "name": "body_Forks_1450_obj" };
  let id_Forks_1450 = RepositoriesId;
  let limit_Forks_1450 = 1450 + Math.floor(Math.random() * 99);
  let owner_Forks_1450 = "owner_Forks_1450_" + Math.floor(Math.random()*1000);
  let page_Forks_1450 = 1450 + Math.floor(Math.random() * 99);
  let repo_Forks_1450 = "repo_Forks_1450_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_1450, id_Forks_1450, limit_Forks_1450, owner_Forks_1450, page_Forks_1450, repo_Forks_1450, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_1450);
  verifyForksExists(id_Forks_1450);
});

bthread("crud:Issue:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issue
  let body_Issue_1460 = { "id": 1, "name": "body_Issue_1460_obj" };
  let id_Issue_1460 = RepositoriesId;
  let limit_Issue_1460 = 1460 + Math.floor(Math.random() * 99);
  let name_Issue_1460 = "name_Issue_1460_" + Math.floor(Math.random()*1000);
  let owner_Issue_1460 = "owner_Issue_1460_" + Math.floor(Math.random()*1000);
  let page_Issue_1460 = 1460 + Math.floor(Math.random() * 99);
  let repo_Issue_1460 = "repo_Issue_1460_" + Math.floor(Math.random()*1000);
  let state_Issue_1460 = "state_Issue_1460_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_1460, id_Issue_1460, limit_Issue_1460, name_Issue_1460, owner_Issue_1460, page_Issue_1460, repo_Issue_1460, state_Issue_1460, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_1460);
  // -> Updating Issue
  let body_Issue_upd_1460 = { "id": 1, "name": "body_Issue_upd_1460_obj" };
  let id_Issue_upd_1460 = id_Issue_1460;
  let limit_Issue_upd_1460 = 1460 + Math.floor(Math.random() * 99);
  let name_Issue_upd_1460 = "name_Issue_upd_1460_" + Math.floor(Math.random()*1000);
  let owner_Issue_upd_1460 = "owner_Issue_upd_1460_" + Math.floor(Math.random()*1000);
  let page_Issue_upd_1460 = 1460 + Math.floor(Math.random() * 99);
  let repo_Issue_upd_1460 = "repo_Issue_upd_1460_" + Math.floor(Math.random()*1000);
  let state_Issue_upd_1460 = "state_Issue_upd_1460_" + Math.floor(Math.random()*1000);
  issueEditComment(body_Issue_upd_1460, id_Issue_upd_1460, limit_Issue_upd_1460, name_Issue_upd_1460, owner_Issue_upd_1460, page_Issue_upd_1460, repo_Issue_upd_1460, state_Issue_upd_1460, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_1460);
  // -> Deleting Leaf Issue (Standard)
  issueDeleteComment(owner_Issue_1460, repo_Issue_1460, id_Issue_1460);
  verifyIssueDoesNotExist(id_Issue_1460);

});

bthread("crud:IssueCommentAttachments:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_1470 = "attachment_IssueCommentAttachments_1470_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_1470 = 1470 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_1470 = { "id": 1, "name": "body_IssueCommentAttachments_1470_obj" };
  let id_IssueCommentAttachments_1470 = IssuesId;
  let name_IssueCommentAttachments_1470 = "name_IssueCommentAttachments_1470_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_1470 = "owner_IssueCommentAttachments_1470_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_1470 = "repo_IssueCommentAttachments_1470_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_1470, attachment_id_IssueCommentAttachments_1470, body_IssueCommentAttachments_1470, id_IssueCommentAttachments_1470, name_IssueCommentAttachments_1470, owner_IssueCommentAttachments_1470, repo_IssueCommentAttachments_1470, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_1470);
  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_1470 = "attachment_IssueCommentAttachments_upd_1470_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_1470 = 1470 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_upd_1470 = { "id": 1, "name": "body_IssueCommentAttachments_upd_1470_obj" };
  let id_IssueCommentAttachments_upd_1470 = id_IssueCommentAttachments_1470;
  let name_IssueCommentAttachments_upd_1470 = "name_IssueCommentAttachments_upd_1470_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_1470 = "owner_IssueCommentAttachments_upd_1470_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_1470 = "repo_IssueCommentAttachments_upd_1470_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_1470, attachment_id_IssueCommentAttachments_upd_1470, body_IssueCommentAttachments_upd_1470, id_IssueCommentAttachments_upd_1470, name_IssueCommentAttachments_upd_1470, owner_IssueCommentAttachments_upd_1470, repo_IssueCommentAttachments_upd_1470, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_1470);
  // -> Deleting Leaf IssueCommentAttachments (Standard)
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_1470, repo_IssueCommentAttachments_1470, id_IssueCommentAttachments_1470, attachment_id_IssueCommentAttachments_1470);
  verifyIssueCommentAttachmentsDoesNotExist(id_IssueCommentAttachments_1470);

});

bthread("crud:IssueCommentReactions:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_1480 = { "id": 1, "name": "content_IssueCommentReactions_1480_obj" };
  let id_IssueCommentReactions_1480 = IssuesId;
  let owner_IssueCommentReactions_1480 = "owner_IssueCommentReactions_1480";
  let repo_IssueCommentReactions_1480 = "repo_IssueCommentReactions_1480_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_1480, id_IssueCommentReactions_1480, owner_IssueCommentReactions_1480, repo_IssueCommentReactions_1480, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_1480);
  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_1480);
  // -> Deleting Leaf IssueCommentReactions (Standard)
  issueDeleteCommentReaction(owner_IssueCommentReactions_1480, repo_IssueCommentReactions_1480, id_IssueCommentReactions_1480);
  verifyIssueCommentReactionsDoesNotExist(owner_IssueCommentReactions_1480);

});

bthread("crud:IssueAttachments:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_1490 = "attachment_IssueAttachments_1490_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_1490 = 1490 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_1490 = { "id": 1, "name": "body_IssueAttachments_1490_obj" };
  let id_IssueAttachments_1490 = IssuesId;
  let index_IssueAttachments_1490 = 1490 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_1490 = "name_IssueAttachments_1490_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_1490 = "owner_IssueAttachments_1490_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_1490 = "repo_IssueAttachments_1490_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_1490, attachment_id_IssueAttachments_1490, body_IssueAttachments_1490, id_IssueAttachments_1490, index_IssueAttachments_1490, name_IssueAttachments_1490, owner_IssueAttachments_1490, repo_IssueAttachments_1490, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_1490);
  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_1490 = "attachment_IssueAttachments_upd_1490_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_1490 = 1490 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_upd_1490 = { "id": 1, "name": "body_IssueAttachments_upd_1490_obj" };
  let id_IssueAttachments_upd_1490 = id_IssueAttachments_1490;
  let index_IssueAttachments_upd_1490 = 1490 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_upd_1490 = "name_IssueAttachments_upd_1490_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_1490 = "owner_IssueAttachments_upd_1490_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_1490 = "repo_IssueAttachments_upd_1490_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_1490, attachment_id_IssueAttachments_upd_1490, body_IssueAttachments_upd_1490, id_IssueAttachments_upd_1490, index_IssueAttachments_upd_1490, name_IssueAttachments_upd_1490, owner_IssueAttachments_upd_1490, repo_IssueAttachments_upd_1490, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_1490);
  // -> Deleting Leaf IssueAttachments (Standard)
  issueDeleteIssueAttachment(owner_IssueAttachments_1490, repo_IssueAttachments_1490, index_IssueAttachments_1490, attachment_id_IssueAttachments_1490);
  verifyIssueAttachmentsDoesNotExist(id_IssueAttachments_1490);

});

bthread("crud:IssueBlocks:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_1500 = { "id": 1, "name": "body_IssueBlocks_1500_obj" };
  let index_IssueBlocks_1500 = "index_IssueBlocks_1500_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_1500 = 1500 + Math.floor(Math.random() * 99);
  let owner_IssueBlocks_1500 = "owner_IssueBlocks_1500";
  let page_IssueBlocks_1500 = 1500 + Math.floor(Math.random() * 99);
  let repo_IssueBlocks_1500 = "repo_IssueBlocks_1500_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_1500, index_IssueBlocks_1500, limit_IssueBlocks_1500, owner_IssueBlocks_1500, page_IssueBlocks_1500, repo_IssueBlocks_1500, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueBlocksExists(owner_IssueBlocks_1500);
  verifyIssueBlocksExists(owner_IssueBlocks_1500);
  // -> Deleting Leaf IssueBlocks (Standard)
  issueRemoveIssueBlocking(owner_IssueBlocks_1500, repo_IssueBlocks_1500, index_IssueBlocks_1500);
  verifyIssueBlocksDoesNotExist(owner_IssueBlocks_1500);

});

bthread("crud:IssueComments:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_1510 = "before_IssueComments_1510_" + Math.floor(Math.random()*1000);
  let body_IssueComments_1510 = { "id": 1, "name": "body_IssueComments_1510_obj" };
  let id_IssueComments_1510 = IssuesId;
  let index_IssueComments_1510 = 1510 + Math.floor(Math.random() * 99);
  let owner_IssueComments_1510 = "owner_IssueComments_1510_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_1510 = "repo_IssueComments_1510_" + Math.floor(Math.random()*1000);
  let since_IssueComments_1510 = "since_IssueComments_1510_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_1510, body_IssueComments_1510, id_IssueComments_1510, index_IssueComments_1510, owner_IssueComments_1510, repo_IssueComments_1510, since_IssueComments_1510, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_1510);
  // -> Updating IssueComments
  let before_IssueComments_upd_1510 = "before_IssueComments_upd_1510_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_1510 = { "id": 1, "name": "body_IssueComments_upd_1510_obj" };
  let id_IssueComments_upd_1510 = id_IssueComments_1510;
  let index_IssueComments_upd_1510 = 1510 + Math.floor(Math.random() * 99);
  let owner_IssueComments_upd_1510 = "owner_IssueComments_upd_1510_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_1510 = "repo_IssueComments_upd_1510_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_1510 = "since_IssueComments_upd_1510_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_1510, body_IssueComments_upd_1510, id_IssueComments_upd_1510, index_IssueComments_upd_1510, owner_IssueComments_upd_1510, repo_IssueComments_upd_1510, since_IssueComments_upd_1510, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_1510);
  // -> Deleting Leaf IssueComments (Standard)
  issueDeleteCommentDeprecated(owner_IssueComments_1510, repo_IssueComments_1510, index_IssueComments_1510, id_IssueComments_1510);
  verifyIssueCommentsDoesNotExist(id_IssueComments_1510);

});

bthread("crud:IssueSubscriptions:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Repositories": "id", "Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let UsersId = captured["Users"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_1520 = RepositoriesId;
  let index_IssueSubscriptions_1520 = 1520 + Math.floor(Math.random() * 99);
  let limit_IssueSubscriptions_1520 = 1520 + Math.floor(Math.random() * 99);
  let owner_IssueSubscriptions_1520 = "owner_IssueSubscriptions_1520_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_1520 = 1520 + Math.floor(Math.random() * 99);
  let repo_IssueSubscriptions_1520 = "repo_IssueSubscriptions_1520_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_1520 = "user_IssueSubscriptions_1520_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_1520, index_IssueSubscriptions_1520, limit_IssueSubscriptions_1520, owner_IssueSubscriptions_1520, page_IssueSubscriptions_1520, repo_IssueSubscriptions_1520, user_IssueSubscriptions_1520, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueSubscriptionsExists(id_IssueSubscriptions_1520);
  verifyIssueSubscriptionsExists(id_IssueSubscriptions_1520);
  // -> Deleting Leaf IssueSubscriptions (Standard)
  issueDeleteSubscription(owner_IssueSubscriptions_1520, repo_IssueSubscriptions_1520, index_IssueSubscriptions_1520, user_IssueSubscriptions_1520);
  verifyIssueSubscriptionsDoesNotExist(id_IssueSubscriptions_1520);

});

bthread("crud:IssueTimes:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repositories": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_1530 = "before_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_1530 = { "id": 1, "name": "body_IssueTimes_1530_obj" };
  let index_IssueTimes_1530 = 1530 + Math.floor(Math.random() * 99);
  let limit_IssueTimes_1530 = 1530 + Math.floor(Math.random() * 99);
  let owner_IssueTimes_1530 = "owner_IssueTimes_1530";
  let page_IssueTimes_1530 = 1530 + Math.floor(Math.random() * 99);
  let repo_IssueTimes_1530 = "repo_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_1530 = "since_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_1530 = "user_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_1530, body_IssueTimes_1530, index_IssueTimes_1530, limit_IssueTimes_1530, owner_IssueTimes_1530, page_IssueTimes_1530, repo_IssueTimes_1530, since_IssueTimes_1530, user_IssueTimes_1530, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueTimesExists(owner_IssueTimes_1530);
  verifyIssueTimesExists(owner_IssueTimes_1530);
  // -> Deleting Leaf IssueTimes (Standard)
  issueResetTime(owner_IssueTimes_1530, repo_IssueTimes_1530, index_IssueTimes_1530);
  verifyIssueTimesDoesNotExist(owner_IssueTimes_1530);

});

bthread("crud:Keys:linear:3", function () {
  // -> Creating Keys
  let body_Keys_1540 = { "id": 1, "name": "body_Keys_1540_obj" };
  let fingerprint_Keys_1540 = "fingerprint_Keys_1540_" + Math.floor(Math.random()*1000);
  let id_Keys_1540 = 1540 + Math.floor(Math.random() * 99);
  let limit_Keys_1540 = 1540 + Math.floor(Math.random() * 99);
  let page_Keys_1540 = 1540 + Math.floor(Math.random() * 99);
  userCurrentPostKey(body_Keys_1540, fingerprint_Keys_1540, id_Keys_1540, limit_Keys_1540, page_Keys_1540, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_1540);
  verifyKeysExists(id_Keys_1540);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_1540);
  verifyKeysDoesNotExist(id_Keys_1540);

});

bthread("crud:MirrorSync:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating MirrorSync
  let id_MirrorSync_1550 = RepositoriesId;
  let owner_MirrorSync_1550 = "owner_MirrorSync_1550_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_1550 = "repo_MirrorSync_1550_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_1550, owner_MirrorSync_1550, repo_MirrorSync_1550, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_1550);
  verifyMirrorSyncExists(id_MirrorSync_1550);
});

bthread("crud:PullRequests:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PullRequests
  let body_PullRequests_1560 = { "id": 1, "name": "body_PullRequests_1560_obj" };
  let id_PullRequests_1560 = RepositoriesId;
  let index_PullRequests_1560 = 1560 + Math.floor(Math.random() * 99);
  let limit_PullRequests_1560 = 1560 + Math.floor(Math.random() * 99);
  let owner_PullRequests_1560 = "owner_PullRequests_1560_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1560 = 1560 + Math.floor(Math.random() * 99);
  let repo_PullRequests_1560 = "repo_PullRequests_1560_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1560 = "skip_to_PullRequests_1560_" + Math.floor(Math.random()*1000);
  let style_PullRequests_1560 = "style_PullRequests_1560_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1560 = "whitespace_PullRequests_1560_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_1560, id_PullRequests_1560, index_PullRequests_1560, limit_PullRequests_1560, owner_PullRequests_1560, page_PullRequests_1560, repo_PullRequests_1560, skip_to_PullRequests_1560, style_PullRequests_1560, whitespace_PullRequests_1560, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1560);
  // -> Updating PullRequests
  let body_PullRequests_upd_1560 = { "id": 1, "name": "body_PullRequests_upd_1560_obj" };
  let id_PullRequests_upd_1560 = id_PullRequests_1560;
  let index_PullRequests_upd_1560 = 1560 + Math.floor(Math.random() * 99);
  let limit_PullRequests_upd_1560 = 1560 + Math.floor(Math.random() * 99);
  let owner_PullRequests_upd_1560 = "owner_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1560 = 1560 + Math.floor(Math.random() * 99);
  let repo_PullRequests_upd_1560 = "repo_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1560 = "skip_to_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  let style_PullRequests_upd_1560 = "style_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1560 = "whitespace_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1560, id_PullRequests_upd_1560, index_PullRequests_upd_1560, limit_PullRequests_upd_1560, owner_PullRequests_upd_1560, page_PullRequests_upd_1560, repo_PullRequests_upd_1560, skip_to_PullRequests_upd_1560, style_PullRequests_upd_1560, whitespace_PullRequests_upd_1560, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1560);
  // -> Deleting Parent PullRequests (Relational Intent Race)
  repoCancelScheduledAutoMerge(owner_PullRequests_1560, repo_PullRequests_1560, index_PullRequests_1560);

});

bthread("crud:PullReviewRequests:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"Repositories": "id", "PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1570 = { "id": 1, "name": "body_PullReviewRequests_1570_obj" };
  let index_PullReviewRequests_1570 = 1570 + Math.floor(Math.random() * 99);
  let owner_PullReviewRequests_1570 = "owner_PullReviewRequests_1570";
  let repo_PullReviewRequests_1570 = "repo_PullReviewRequests_1570_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1570, index_PullReviewRequests_1570, owner_PullReviewRequests_1570, repo_PullReviewRequests_1570, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewRequestsExists(owner_PullReviewRequests_1570);
  verifyPullReviewRequestsExists(owner_PullReviewRequests_1570);
  // -> Deleting Leaf PullReviewRequests (Standard)
  repoDeletePullReviewRequests(owner_PullReviewRequests_1570, repo_PullReviewRequests_1570, index_PullReviewRequests_1570);
  verifyPullReviewRequestsDoesNotExist(owner_PullReviewRequests_1570);

});

bthread("crud:PullReviews:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"Repositories": "id", "PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1580 = { "id": 1, "name": "body_PullReviews_1580_obj" };
  let id_PullReviews_1580 = PullRequestsId;
  let index_PullReviews_1580 = 1580 + Math.floor(Math.random() * 99);
  let limit_PullReviews_1580 = 1580 + Math.floor(Math.random() * 99);
  let owner_PullReviews_1580 = "owner_PullReviews_1580_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1580 = 1580 + Math.floor(Math.random() * 99);
  let repo_PullReviews_1580 = "repo_PullReviews_1580_" + Math.floor(Math.random()*1000);
  repoCreatePullReview(body_PullReviews_1580, id_PullReviews_1580, index_PullReviews_1580, limit_PullReviews_1580, owner_PullReviews_1580, page_PullReviews_1580, repo_PullReviews_1580, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewsExists(id_PullReviews_1580);
  verifyPullReviewsExists(id_PullReviews_1580);
  // -> Deleting Parent PullReviews (Relational Intent Race)
  repoDeletePullReview(owner_PullReviews_1580, repo_PullReviews_1580, index_PullReviews_1580, id_PullReviews_1580);

});

bthread("crud:PullReviewDismissals:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"Repositories": "id", "PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1590 = { "id": 1, "name": "body_PullReviewDismissals_1590_obj" };
  let id_PullReviewDismissals_1590 = PullReviewsId;
  let index_PullReviewDismissals_1590 = 1590 + Math.floor(Math.random() * 99);
  let owner_PullReviewDismissals_1590 = "owner_PullReviewDismissals_1590_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1590 = "repo_PullReviewDismissals_1590_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1590, id_PullReviewDismissals_1590, index_PullReviewDismissals_1590, owner_PullReviewDismissals_1590, repo_PullReviewDismissals_1590, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1590);
  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1590);
});

bthread("crud:PullReviewUndismissals:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"Repositories": "id", "PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1600 = PullReviewsId;
  let index_PullReviewUndismissals_1600 = 1600 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_1600 = "owner_PullReviewUndismissals_1600_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1600 = "repo_PullReviewUndismissals_1600_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1600, index_PullReviewUndismissals_1600, owner_PullReviewUndismissals_1600, repo_PullReviewUndismissals_1600, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1600);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1600);
});

bthread("crud:PushMirrors:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_1610 = RepositoriesId;
  let limit_PushMirrors_1610 = 1610 + Math.floor(Math.random() * 99);
  let name_PushMirrors_1610 = "name_PushMirrors_1610_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1610 = "owner_PushMirrors_1610_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1610 = 1610 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_1610 = "repo_PushMirrors_1610_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1610, limit_PushMirrors_1610, name_PushMirrors_1610, owner_PushMirrors_1610, page_PushMirrors_1610, repo_PushMirrors_1610, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_1610);
  verifyPushMirrorsExists(id_PushMirrors_1610);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_1610, repo_PushMirrors_1610, name_PushMirrors_1610);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_1610);

});

bthread("crud:Releases:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Releases
  let body_Releases_1620 = { "id": 1, "name": "body_Releases_1620_obj" };
  let draft_Releases_1620 = true;
  let id_Releases_1620 = RepositoriesId;
  let limit_Releases_1620 = 1620 + Math.floor(Math.random() * 99);
  let owner_Releases_1620 = "owner_Releases_1620_" + Math.floor(Math.random()*1000);
  let page_Releases_1620 = 1620 + Math.floor(Math.random() * 99);
  let pre_release_Releases_1620 = true;
  let repo_Releases_1620 = "repo_Releases_1620_" + Math.floor(Math.random()*1000);
  let tag_Releases_1620 = "tag_Releases_1620_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_1620, draft_Releases_1620, id_Releases_1620, limit_Releases_1620, owner_Releases_1620, page_Releases_1620, pre_release_Releases_1620, repo_Releases_1620, tag_Releases_1620, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1620);
  // -> Updating Releases
  let body_Releases_upd_1620 = { "id": 1, "name": "body_Releases_upd_1620_obj" };
  let draft_Releases_upd_1620 = true;
  let id_Releases_upd_1620 = id_Releases_1620;
  let limit_Releases_upd_1620 = 1620 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_1620 = "owner_Releases_upd_1620_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1620 = 1620 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_1620 = true;
  let repo_Releases_upd_1620 = "repo_Releases_upd_1620_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_1620 = "tag_Releases_upd_1620_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_1620, draft_Releases_upd_1620, id_Releases_upd_1620, limit_Releases_upd_1620, owner_Releases_upd_1620, page_Releases_upd_1620, pre_release_Releases_upd_1620, repo_Releases_upd_1620, tag_Releases_upd_1620, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1620);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_1620, repo_Releases_1620, tag_Releases_1620);

});

bthread("crud:ReleaseAttachments:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Repositories": "id", "Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1630 = "attachment_ReleaseAttachments_1630_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1630 = 1630 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_1630 = { "id": 1, "name": "body_ReleaseAttachments_1630_obj" };
  let id_ReleaseAttachments_1630 = ReleasesId;
  let name_ReleaseAttachments_1630 = "name_ReleaseAttachments_1630_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1630 = "owner_ReleaseAttachments_1630_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1630 = "repo_ReleaseAttachments_1630_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1630, attachment_id_ReleaseAttachments_1630, body_ReleaseAttachments_1630, id_ReleaseAttachments_1630, name_ReleaseAttachments_1630, owner_ReleaseAttachments_1630, repo_ReleaseAttachments_1630, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1630);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1630 = "attachment_ReleaseAttachments_upd_1630_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1630 = 1630 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_1630 = { "id": 1, "name": "body_ReleaseAttachments_upd_1630_obj" };
  let id_ReleaseAttachments_upd_1630 = id_ReleaseAttachments_1630;
  let name_ReleaseAttachments_upd_1630 = "name_ReleaseAttachments_upd_1630_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1630 = "owner_ReleaseAttachments_upd_1630_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1630 = "repo_ReleaseAttachments_upd_1630_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1630, attachment_id_ReleaseAttachments_upd_1630, body_ReleaseAttachments_upd_1630, id_ReleaseAttachments_upd_1630, name_ReleaseAttachments_upd_1630, owner_ReleaseAttachments_upd_1630, repo_ReleaseAttachments_upd_1630, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1630);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1630, repo_ReleaseAttachments_1630, id_ReleaseAttachments_1630, attachment_id_ReleaseAttachments_1630);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_1630);

});

bthread("crud:TagProtections:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating TagProtections
  let body_TagProtections_1640 = { "id": 1, "name": "body_TagProtections_1640_obj" };
  let id_TagProtections_1640 = RepositoriesId;
  let owner_TagProtections_1640 = "owner_TagProtections_1640_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1640 = "repo_TagProtections_1640_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1640, id_TagProtections_1640, owner_TagProtections_1640, repo_TagProtections_1640, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1640);
  // -> Updating TagProtections
  let body_TagProtections_upd_1640 = { "id": 1, "name": "body_TagProtections_upd_1640_obj" };
  let id_TagProtections_upd_1640 = id_TagProtections_1640;
  let owner_TagProtections_upd_1640 = "owner_TagProtections_upd_1640_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1640 = "repo_TagProtections_upd_1640_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1640, id_TagProtections_upd_1640, owner_TagProtections_upd_1640, repo_TagProtections_upd_1640, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1640);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_1640, repo_TagProtections_1640, id_TagProtections_1640);
  verifyTagProtectionsDoesNotExist(id_TagProtections_1640);

});

bthread("crud:Tags:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Tags
  let body_Tags_1650 = { "id": 1, "name": "body_Tags_1650_obj" };
  let id_Tags_1650 = RepositoriesId;
  let limit_Tags_1650 = 1650 + Math.floor(Math.random() * 99);
  let owner_Tags_1650 = "owner_Tags_1650_" + Math.floor(Math.random()*1000);
  let page_Tags_1650 = 1650 + Math.floor(Math.random() * 99);
  let repo_Tags_1650 = "repo_Tags_1650_" + Math.floor(Math.random()*1000);
  let tag_Tags_1650 = "tag_Tags_1650_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1650, id_Tags_1650, limit_Tags_1650, owner_Tags_1650, page_Tags_1650, repo_Tags_1650, tag_Tags_1650, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_1650);
  verifyTagsExists(id_Tags_1650);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_1650, repo_Tags_1650, tag_Tags_1650);
  verifyTagsDoesNotExist(id_Tags_1650);

});

bthread("crud:Topics:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Topics
  let body_Topics_1660 = { "id": 1, "name": "body_Topics_1660_obj" };
  let limit_Topics_1660 = 1660 + Math.floor(Math.random() * 99);
  let owner_Topics_1660 = "owner_Topics_1660";
  let page_Topics_1660 = 1660 + Math.floor(Math.random() * 99);
  let q_Topics_1660 = "q_Topics_1660_" + Math.floor(Math.random()*1000);
  let repo_Topics_1660 = "repo_Topics_1660_" + Math.floor(Math.random()*1000);
  let topic_Topics_1660 = "topic_Topics_1660_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1660, limit_Topics_1660, owner_Topics_1660, page_Topics_1660, q_Topics_1660, repo_Topics_1660, topic_Topics_1660, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1660);
  // -> Updating Topics
  let body_Topics_upd_1660 = { "id": 1, "name": "body_Topics_upd_1660_obj" };
  let limit_Topics_upd_1660 = 1660 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_1660 = owner_Topics_1660;
  let page_Topics_upd_1660 = 1660 + Math.floor(Math.random() * 99);
  let q_Topics_upd_1660 = "q_Topics_upd_1660_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1660 = "repo_Topics_upd_1660_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1660 = "topic_Topics_upd_1660_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1660, limit_Topics_upd_1660, owner_Topics_upd_1660, page_Topics_upd_1660, q_Topics_upd_1660, repo_Topics_upd_1660, topic_Topics_upd_1660, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1660);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_1660, repo_Topics_1660, topic_Topics_1660);
  verifyTopicsDoesNotExist(owner_Topics_1660);

});

bthread("crud:RepositoryTransfer:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Repositories": "id", "Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  let UsersId = captured["Users"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1670 = { "id": 1, "name": "body_RepositoryTransfer_1670_obj" };
  let id_RepositoryTransfer_1670 = RepositoriesId;
  let owner_RepositoryTransfer_1670 = "owner_RepositoryTransfer_1670_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1670 = "repo_RepositoryTransfer_1670_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1670 = "transferOptions_RepositoryTransfer_1670_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1670, id_RepositoryTransfer_1670, owner_RepositoryTransfer_1670, repo_RepositoryTransfer_1670, transferOptions_RepositoryTransfer_1670, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_1670);
  verifyRepositoryTransferExists(id_RepositoryTransfer_1670);
});

bthread("crud:WikiPages:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating WikiPages
  let body_WikiPages_1680 = { "id": 1, "name": "body_WikiPages_1680_obj" };
  let id_WikiPages_1680 = RepositoriesId;
  let limit_WikiPages_1680 = 1680 + Math.floor(Math.random() * 99);
  let owner_WikiPages_1680 = "owner_WikiPages_1680_" + Math.floor(Math.random()*1000);
  let page_WikiPages_1680 = 1680 + Math.floor(Math.random() * 99);
  let pageName_WikiPages_1680 = "pageName_WikiPages_1680_" + Math.floor(Math.random()*1000);
  let repo_WikiPages_1680 = "repo_WikiPages_1680_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPages_1680 = "wikiPageOptions_WikiPages_1680_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPages_1680, id_WikiPages_1680, limit_WikiPages_1680, owner_WikiPages_1680, page_WikiPages_1680, pageName_WikiPages_1680, repo_WikiPages_1680, wikiPageOptions_WikiPages_1680, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPagesExists(id_WikiPages_1680);
  // -> Updating WikiPages
  let body_WikiPages_upd_1680 = { "id": 1, "name": "body_WikiPages_upd_1680_obj" };
  let id_WikiPages_upd_1680 = id_WikiPages_1680;
  let limit_WikiPages_upd_1680 = 1680 + Math.floor(Math.random() * 99);
  let owner_WikiPages_upd_1680 = "owner_WikiPages_upd_1680_" + Math.floor(Math.random()*1000);
  let page_WikiPages_upd_1680 = 1680 + Math.floor(Math.random() * 99);
  let pageName_WikiPages_upd_1680 = "pageName_WikiPages_upd_1680_" + Math.floor(Math.random()*1000);
  let repo_WikiPages_upd_1680 = "repo_WikiPages_upd_1680_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPages_upd_1680 = "wikiPageOptions_WikiPages_upd_1680_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPages_upd_1680, id_WikiPages_upd_1680, limit_WikiPages_upd_1680, owner_WikiPages_upd_1680, page_WikiPages_upd_1680, pageName_WikiPages_upd_1680, repo_WikiPages_upd_1680, wikiPageOptions_WikiPages_upd_1680, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPagesExists(id_WikiPages_1680);
  // -> Deleting Leaf WikiPages (Standard)
  repoDeleteWikiPage(owner_WikiPages_1680, repo_WikiPages_1680, pageName_WikiPages_1680);
  verifyWikiPagesDoesNotExist(id_WikiPages_1680);

});

bthread("crud:TeamMembers:linear:3", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1690 = OrganizationTeamsId;
  let limit_TeamMembers_1690 = 1690 + Math.floor(Math.random() * 99);
  let page_TeamMembers_1690 = 1690 + Math.floor(Math.random() * 99);
  let username_TeamMembers_1690 = "username_TeamMembers_1690";
  orgAddTeamMember(id_TeamMembers_1690, limit_TeamMembers_1690, page_TeamMembers_1690, username_TeamMembers_1690, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_1690);
  verifyTeamMembersExists(id_TeamMembers_1690);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_1690);
  verifyTeamMembersDoesNotExist(id_TeamMembers_1690);

});

bthread("crud:TeamRepos:linear:3", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  deps["OrganizationRepos"] = matchAnyOrganizationReposAdded();
  let pkMap = {"OrganizationTeams": "id", "OrganizationRepos": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  let OrganizationReposId = captured["OrganizationRepos"];
  // -> Creating TeamRepos
  let id_TeamRepos_1700 = OrganizationReposId;
  let limit_TeamRepos_1700 = 1700 + Math.floor(Math.random() * 99);
  let org_TeamRepos_1700 = "org_TeamRepos_1700_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_1700 = 1700 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_1700 = "repo_TeamRepos_1700_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1700, limit_TeamRepos_1700, org_TeamRepos_1700, page_TeamRepos_1700, repo_TeamRepos_1700, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_1700);
  verifyTeamReposExists(id_TeamRepos_1700);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_1700);
  verifyTeamReposDoesNotExist(id_TeamRepos_1700);

});

bthread("crud:UserVariables:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_1710 = { "id": 1, "name": "body_UserVariables_1710_obj" };
  let variablename_UserVariables_1710 = "variablename_UserVariables_1710";
  createUserVariable(body_UserVariables_1710, variablename_UserVariables_1710, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1710);
  // -> Updating UserVariables
  let body_UserVariables_upd_1710 = { "id": 1, "name": "body_UserVariables_upd_1710_obj" };
  let variablename_UserVariables_upd_1710 = variablename_UserVariables_1710;
  updateUserVariable(body_UserVariables_upd_1710, variablename_UserVariables_upd_1710, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1710);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_1710);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_1710);

});

bthread("crud:OAuth2Applications:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1720 = { "id": 1, "name": "body_OAuth2Applications_1720_obj" };
  let id_OAuth2Applications_1720 = 1720 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_1720 = 1720 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_1720 = 1720 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_1720, id_OAuth2Applications_1720, limit_OAuth2Applications_1720, page_OAuth2Applications_1720, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1720);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1720 = { "id": 1, "name": "body_OAuth2Applications_upd_1720_obj" };
  let id_OAuth2Applications_upd_1720 = id_OAuth2Applications_1720;
  let limit_OAuth2Applications_upd_1720 = 1720 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_1720 = 1720 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1720, id_OAuth2Applications_upd_1720, limit_OAuth2Applications_upd_1720, page_OAuth2Applications_upd_1720, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1720);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_1720);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_1720);

});

bthread("crud:UserAvatar:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_1730 = { "id": 1, "name": "body_UserAvatar_1730_obj" };
  let id_UserAvatar_1730 = 1730 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_1730, id_UserAvatar_1730, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_1730);
  verifyUserAvatarExists(id_UserAvatar_1730);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_1730);
  verifyUserAvatarDoesNotExist(id_UserAvatar_1730);

});

bthread("crud:UserEmails:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_1740 = { "id": 1, "name": "body_UserEmails_1740_obj" };
  let id_UserEmails_1740 = 1740 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_1740, id_UserEmails_1740, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_1740);
  verifyUserEmailsExists(id_UserEmails_1740);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_1740);
  verifyUserEmailsDoesNotExist(id_UserEmails_1740);

});

bthread("crud:GPGKeys:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_1750 = { "id": 1, "name": "Form_GPGKeys_1750_obj" };
  let id_GPGKeys_1750 = 1750 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_1750 = 1750 + Math.floor(Math.random() * 99);
  let page_GPGKeys_1750 = 1750 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_1750, id_GPGKeys_1750, limit_GPGKeys_1750, page_GPGKeys_1750, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_1750);
  verifyGPGKeysExists(id_GPGKeys_1750);
  // -> Deleting Parent GPGKeys (Relational Intent Race)
  userCurrentDeleteGPGKey(id_GPGKeys_1750);

});

bthread("crud:GPGKeyVerification:linear:3", function () {
  let deps = {};
  deps["GPGKeys"] = matchAnyGPGKeysAdded();
  let pkMap = {"GPGKeys": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let GPGKeysId = captured["GPGKeys"];
  // -> Creating GPGKeyVerification
  let body_GPGKeyVerification_1760 = { "id": 1, "name": "body_GPGKeyVerification_1760_obj" };
  let id_GPGKeyVerification_1760 = GPGKeysId;
  userVerifyGPGKey(body_GPGKeyVerification_1760, id_GPGKeyVerification_1760, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1760);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1760);
});

bthread("crud:UserStarred:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Users": "username", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating UserStarred
  let limit_UserStarred_1770 = 1770 + Math.floor(Math.random() * 99);
  let owner_UserStarred_1770 = "owner_UserStarred_1770";
  let page_UserStarred_1770 = 1770 + Math.floor(Math.random() * 99);
  let repo_UserStarred_1770 = "repo_UserStarred_1770_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1770, owner_UserStarred_1770, page_UserStarred_1770, repo_UserStarred_1770, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_1770);
  verifyUserStarredExists(owner_UserStarred_1770);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_1770, repo_UserStarred_1770);
  verifyUserStarredDoesNotExist(owner_UserStarred_1770);

});

// --- PHASE 1: GLOBAL HYPER-SEEDING for gitea ---
// --- Hyper-Story Constellation Copy 1 ---
// --- Hyper-Story Constellation Copy 2 ---
// --- Hyper-Story Constellation Copy 3 ---