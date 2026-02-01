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

bthread("monitor:Issue:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAdded() });
    let idVal = e.data.id || e.data.id;
    verifyIssueExists(idVal);
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
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
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
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
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
  // -> Deleting Leaf Organization (Standard)
  orgDelete(org_Organization_220);
  verifyOrganizationDoesNotExist(org_Organization_220);

});

bthread("crud:OrgVariables:linear:1", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrgVariables
  let body_OrgVariables_230 = "body_OrgVariables_230_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_230 = "org_OrgVariables_230";
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

bthread("crud:Avatar:linear:1", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating Avatar
  let body_Avatar_240 = { "id": 1, "name": "body_Avatar_240_obj" };
  let org_Avatar_240 = "org_Avatar_240";
  orgUpdateAvatar(body_Avatar_240, org_Avatar_240, { expectedResponseCodes: [200, 201, 204] });

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
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_260 = { "id": 1, "name": "body_OrganizationRepos_260_obj" };
  let id_OrganizationRepos_260 = 260 + Math.floor(Math.random() * 99);
  let limit_OrganizationRepos_260 = 260 + Math.floor(Math.random() * 99);
  let org_OrganizationRepos_260 = "org_OrganizationRepos_260_" + Math.floor(Math.random()*1000);
  let page_OrganizationRepos_260 = 260 + Math.floor(Math.random() * 99);
  createOrgRepo(body_OrganizationRepos_260, id_OrganizationRepos_260, limit_OrganizationRepos_260, org_OrganizationRepos_260, page_OrganizationRepos_260, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationReposExists(id_OrganizationRepos_260);
  verifyOrganizationReposExists(id_OrganizationRepos_260);
});

bthread("crud:OrganizationTeams:linear:1", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_270 = { "id": 1, "name": "body_OrganizationTeams_270_obj" };
  let id_OrganizationTeams_270 = 270 + Math.floor(Math.random() * 99);
  let limit_OrganizationTeams_270 = 270 + Math.floor(Math.random() * 99);
  let org_OrganizationTeams_270 = "org_OrganizationTeams_270_" + Math.floor(Math.random()*1000);
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
  let body_Repository_290 = { "id": 1, "name": "body_Repository_290_obj" };
  let id_Repository_290 = RepositoriesId;
  let limit_Repository_290 = 290 + Math.floor(Math.random() * 99);
  let owner_Repository_290 = "owner_Repository_290_" + Math.floor(Math.random()*1000);
  let page_Repository_290 = 290 + Math.floor(Math.random() * 99);
  let repo_Repository_290 = "repo_Repository_290_" + Math.floor(Math.random()*1000);
  let sha_Repository_290 = "sha_Repository_290_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_290, id_Repository_290, limit_Repository_290, owner_Repository_290, page_Repository_290, repo_Repository_290, sha_Repository_290, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_290);
  // -> Updating Repository
  let body_Repository_upd_290 = { "id": 1, "name": "body_Repository_upd_290_obj" };
  let id_Repository_upd_290 = id_Repository_290;
  let limit_Repository_upd_290 = 290 + Math.floor(Math.random() * 99);
  let owner_Repository_upd_290 = "owner_Repository_upd_290_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_290 = 290 + Math.floor(Math.random() * 99);
  let repo_Repository_upd_290 = "repo_Repository_upd_290_" + Math.floor(Math.random()*1000);
  let sha_Repository_upd_290 = "sha_Repository_upd_290_" + Math.floor(Math.random()*1000);
  userCurrentPutSubscription(body_Repository_upd_290, id_Repository_upd_290, limit_Repository_upd_290, owner_Repository_upd_290, page_Repository_upd_290, repo_Repository_upd_290, sha_Repository_upd_290, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_290);
  // -> Deleting Leaf Repository (Standard)
  userCurrentDeleteSubscription(owner_Repository_290, repo_Repository_290);
  verifyRepositoryDoesNotExist(id_Repository_290);

});

bthread("crud:Variables:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_300 = "CreateVariableOption_Variables_300_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_300 = "2025-01-25T12:00:00Z";
  let body_Variables_300 = { "id": 1, "name": "body_Variables_300_obj" };
  let id_Variables_300 = RepositoriesId;
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
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_310 = "CreateBranchRepoOption_Branches_310_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_310 = "2025-01-25T12:00:00Z";
  let body_Branches_310 = { "id": 1, "name": "body_Branches_310_obj" };
  let branch_Branches_310 = "branch_Branches_310_" + Math.floor(Math.random()*1000);
  let id_Branches_310 = RepositoriesId;
  let limit_Branches_310 = 310 + Math.floor(Math.random() * 99);
  let owner_Branches_310 = "owner_Branches_310_" + Math.floor(Math.random()*1000);
  let page_Branches_310 = 310 + Math.floor(Math.random() * 99);
  let repo_Branches_310 = "repo_Branches_310_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_310, UpdateBranchRepoOption_Branches_310, body_Branches_310, branch_Branches_310, id_Branches_310, limit_Branches_310, owner_Branches_310, page_Branches_310, repo_Branches_310, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_310);
  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_310 = "CreateBranchRepoOption_Branches_upd_310_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_310 = "2025-01-25T12:00:00Z";
  let body_Branches_upd_310 = { "id": 1, "name": "body_Branches_upd_310_obj" };
  let branch_Branches_upd_310 = "branch_Branches_upd_310_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_310 = id_Branches_310;
  let limit_Branches_upd_310 = 310 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_310 = "owner_Branches_upd_310_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_310 = 310 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_310 = "repo_Branches_upd_310_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_310, UpdateBranchRepoOption_Branches_upd_310, body_Branches_upd_310, branch_Branches_upd_310, id_Branches_upd_310, limit_Branches_upd_310, owner_Branches_upd_310, page_Branches_upd_310, repo_Branches_upd_310, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_310);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_310, repo_Branches_310, branch_Branches_310);
  verifyBranchesDoesNotExist(id_Branches_310);

});

bthread("crud:Collaborators:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_320 = "AddCollaboratorOption_Collaborators_320_" + Math.floor(Math.random()*1000);
  let body_Collaborators_320 = { "id": 1, "name": "body_Collaborators_320_obj" };
  let collaborator_Collaborators_320 = "collaborator_Collaborators_320_" + Math.floor(Math.random()*1000);
  let id_Collaborators_320 = RepositoriesId;
  let limit_Collaborators_320 = 320 + Math.floor(Math.random() * 99);
  let owner_Collaborators_320 = "owner_Collaborators_320_" + Math.floor(Math.random()*1000);
  let page_Collaborators_320 = 320 + Math.floor(Math.random() * 99);
  let repo_Collaborators_320 = "repo_Collaborators_320_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_320, body_Collaborators_320, collaborator_Collaborators_320, id_Collaborators_320, limit_Collaborators_320, owner_Collaborators_320, page_Collaborators_320, repo_Collaborators_320, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_320);
  verifyCollaboratorsExists(id_Collaborators_320);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_320, repo_Collaborators_320, collaborator_Collaborators_320);
  verifyCollaboratorsDoesNotExist(id_Collaborators_320);

});

bthread("crud:Repositories:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repositories
  let body_Repositories_330 = { "id": 1, "name": "body_Repositories_330_obj" };
  let filepath_Repositories_330 = "filepath_Repositories_330_" + Math.floor(Math.random()*1000);
  let id_Repositories_330 = 330 + Math.floor(Math.random() * 99);
  let limit_Repositories_330 = 330 + Math.floor(Math.random() * 99);
  let owner_Repositories_330 = "owner_Repositories_330_" + Math.floor(Math.random()*1000);
  let page_Repositories_330 = 330 + Math.floor(Math.random() * 99);
  let repo_Repositories_330 = "repo_Repositories_330_" + Math.floor(Math.random()*1000);
  let username_Repositories_330 = UsersId;
  createCurrentUserRepo(body_Repositories_330, filepath_Repositories_330, id_Repositories_330, limit_Repositories_330, owner_Repositories_330, page_Repositories_330, repo_Repositories_330, username_Repositories_330, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_330);
  // -> Updating Repositories
  let body_Repositories_upd_330 = { "id": 1, "name": "body_Repositories_upd_330_obj" };
  let filepath_Repositories_upd_330 = "filepath_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_330 = id_Repositories_330;
  let limit_Repositories_upd_330 = 330 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_330 = "owner_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_330 = 330 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_330 = "repo_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_330 = "username_Repositories_upd_330";
  repoUpdateFile(body_Repositories_upd_330, filepath_Repositories_upd_330, id_Repositories_upd_330, limit_Repositories_upd_330, owner_Repositories_upd_330, page_Repositories_upd_330, repo_Repositories_upd_330, username_Repositories_upd_330, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_330);
  // -> Deleting Parent Repositories (Relational Intent Race)
  repoDeleteFile(owner_Repositories_330, repo_Repositories_330, filepath_Repositories_330);

});

bthread("crud:Forks:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Forks
  let body_Forks_340 = { "id": 1, "name": "body_Forks_340_obj" };
  let id_Forks_340 = RepositoriesId;
  let limit_Forks_340 = 340 + Math.floor(Math.random() * 99);
  let owner_Forks_340 = "owner_Forks_340_" + Math.floor(Math.random()*1000);
  let page_Forks_340 = 340 + Math.floor(Math.random() * 99);
  let repo_Forks_340 = "repo_Forks_340_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_340, id_Forks_340, limit_Forks_340, owner_Forks_340, page_Forks_340, repo_Forks_340, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_340);
  verifyForksExists(id_Forks_340);
});

bthread("crud:Issue:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issue
  let body_Issue_350 = { "id": 1, "name": "body_Issue_350_obj" };
  let id_Issue_350 = RepositoriesId;
  let limit_Issue_350 = 350 + Math.floor(Math.random() * 99);
  let name_Issue_350 = "name_Issue_350_" + Math.floor(Math.random()*1000);
  let owner_Issue_350 = "owner_Issue_350_" + Math.floor(Math.random()*1000);
  let page_Issue_350 = 350 + Math.floor(Math.random() * 99);
  let repo_Issue_350 = "repo_Issue_350_" + Math.floor(Math.random()*1000);
  let state_Issue_350 = "state_Issue_350_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_350, id_Issue_350, limit_Issue_350, name_Issue_350, owner_Issue_350, page_Issue_350, repo_Issue_350, state_Issue_350, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_350);
  verifyIssueExists(id_Issue_350);
});

bthread("crud:IssueComments:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_360 = "before_IssueComments_360_" + Math.floor(Math.random()*1000);
  let body_IssueComments_360 = { "id": 1, "name": "body_IssueComments_360_obj" };
  let id_IssueComments_360 = IssuesId;
  let index_IssueComments_360 = 360 + Math.floor(Math.random() * 99);
  let owner_IssueComments_360 = "owner_IssueComments_360_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_360 = "repo_IssueComments_360_" + Math.floor(Math.random()*1000);
  let since_IssueComments_360 = "since_IssueComments_360_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_360, body_IssueComments_360, id_IssueComments_360, index_IssueComments_360, owner_IssueComments_360, repo_IssueComments_360, since_IssueComments_360, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_360);
  // -> Updating IssueComments
  let before_IssueComments_upd_360 = "before_IssueComments_upd_360_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_360 = { "id": 1, "name": "body_IssueComments_upd_360_obj" };
  let id_IssueComments_upd_360 = id_IssueComments_360;
  let index_IssueComments_upd_360 = 360 + Math.floor(Math.random() * 99);
  let owner_IssueComments_upd_360 = "owner_IssueComments_upd_360_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_360 = "repo_IssueComments_upd_360_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_360 = "since_IssueComments_upd_360_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_360, body_IssueComments_upd_360, id_IssueComments_upd_360, index_IssueComments_upd_360, owner_IssueComments_upd_360, repo_IssueComments_upd_360, since_IssueComments_upd_360, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_360);
  // -> Deleting Parent IssueComments (Relational Intent Race)
  issueDeleteCommentDeprecated(owner_IssueComments_360, repo_IssueComments_360, index_IssueComments_360, id_IssueComments_360);

});

bthread("crud:IssueCommentAttachments:linear:1", function () {
  let deps = {};
  deps["IssueComments"] = matchAnyIssueCommentsAdded();
  let pkMap = {"IssueComments": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssueCommentsId = captured["IssueComments"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_370 = "attachment_IssueCommentAttachments_370_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_370 = 370 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_370 = { "id": 1, "name": "body_IssueCommentAttachments_370_obj" };
  let id_IssueCommentAttachments_370 = IssueCommentsId;
  let name_IssueCommentAttachments_370 = "name_IssueCommentAttachments_370_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_370 = "owner_IssueCommentAttachments_370_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_370 = "repo_IssueCommentAttachments_370_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_370, attachment_id_IssueCommentAttachments_370, body_IssueCommentAttachments_370, id_IssueCommentAttachments_370, name_IssueCommentAttachments_370, owner_IssueCommentAttachments_370, repo_IssueCommentAttachments_370, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_370);
  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_370 = "attachment_IssueCommentAttachments_upd_370_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_370 = 370 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_upd_370 = { "id": 1, "name": "body_IssueCommentAttachments_upd_370_obj" };
  let id_IssueCommentAttachments_upd_370 = id_IssueCommentAttachments_370;
  let name_IssueCommentAttachments_upd_370 = "name_IssueCommentAttachments_upd_370_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_370 = "owner_IssueCommentAttachments_upd_370_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_370 = "repo_IssueCommentAttachments_upd_370_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_370, attachment_id_IssueCommentAttachments_upd_370, body_IssueCommentAttachments_upd_370, id_IssueCommentAttachments_upd_370, name_IssueCommentAttachments_upd_370, owner_IssueCommentAttachments_upd_370, repo_IssueCommentAttachments_upd_370, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_370);
  // -> Deleting Leaf IssueCommentAttachments (Standard)
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_370, repo_IssueCommentAttachments_370, id_IssueCommentAttachments_370, attachment_id_IssueCommentAttachments_370);
  verifyIssueCommentAttachmentsDoesNotExist(id_IssueCommentAttachments_370);

});

bthread("crud:IssueCommentReactions:linear:1", function () {
  let deps = {};
  deps["IssueComments"] = matchAnyIssueCommentsAdded();
  let pkMap = {"IssueComments": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssueCommentsId = captured["IssueComments"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_380 = { "id": 1, "name": "content_IssueCommentReactions_380_obj" };
  let id_IssueCommentReactions_380 = IssueCommentsId;
  let owner_IssueCommentReactions_380 = "owner_IssueCommentReactions_380";
  let repo_IssueCommentReactions_380 = "repo_IssueCommentReactions_380_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_380, id_IssueCommentReactions_380, owner_IssueCommentReactions_380, repo_IssueCommentReactions_380, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_380);
  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_380);
  // -> Deleting Leaf IssueCommentReactions (Standard)
  issueDeleteCommentReaction(owner_IssueCommentReactions_380, repo_IssueCommentReactions_380, id_IssueCommentReactions_380);
  verifyIssueCommentReactionsDoesNotExist(owner_IssueCommentReactions_380);

});

bthread("crud:IssueAttachments:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_390 = "attachment_IssueAttachments_390_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_390 = 390 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_390 = { "id": 1, "name": "body_IssueAttachments_390_obj" };
  let id_IssueAttachments_390 = IssuesId;
  let index_IssueAttachments_390 = 390 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_390 = "name_IssueAttachments_390_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_390 = "owner_IssueAttachments_390_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_390 = "repo_IssueAttachments_390_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_390, attachment_id_IssueAttachments_390, body_IssueAttachments_390, id_IssueAttachments_390, index_IssueAttachments_390, name_IssueAttachments_390, owner_IssueAttachments_390, repo_IssueAttachments_390, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_390);
  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_390 = "attachment_IssueAttachments_upd_390_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_390 = 390 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_upd_390 = { "id": 1, "name": "body_IssueAttachments_upd_390_obj" };
  let id_IssueAttachments_upd_390 = id_IssueAttachments_390;
  let index_IssueAttachments_upd_390 = 390 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_upd_390 = "name_IssueAttachments_upd_390_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_390 = "owner_IssueAttachments_upd_390_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_390 = "repo_IssueAttachments_upd_390_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_390, attachment_id_IssueAttachments_upd_390, body_IssueAttachments_upd_390, id_IssueAttachments_upd_390, index_IssueAttachments_upd_390, name_IssueAttachments_upd_390, owner_IssueAttachments_upd_390, repo_IssueAttachments_upd_390, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_390);
  // -> Deleting Leaf IssueAttachments (Standard)
  issueDeleteIssueAttachment(owner_IssueAttachments_390, repo_IssueAttachments_390, index_IssueAttachments_390, attachment_id_IssueAttachments_390);
  verifyIssueAttachmentsDoesNotExist(id_IssueAttachments_390);

});

bthread("crud:IssueBlocks:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_400 = { "id": 1, "name": "body_IssueBlocks_400_obj" };
  let index_IssueBlocks_400 = "index_IssueBlocks_400_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_400 = 400 + Math.floor(Math.random() * 99);
  let owner_IssueBlocks_400 = "owner_IssueBlocks_400";
  let page_IssueBlocks_400 = 400 + Math.floor(Math.random() * 99);
  let repo_IssueBlocks_400 = "repo_IssueBlocks_400_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_400, index_IssueBlocks_400, limit_IssueBlocks_400, owner_IssueBlocks_400, page_IssueBlocks_400, repo_IssueBlocks_400, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueBlocksExists(owner_IssueBlocks_400);
  verifyIssueBlocksExists(owner_IssueBlocks_400);
  // -> Deleting Leaf IssueBlocks (Standard)
  issueRemoveIssueBlocking(owner_IssueBlocks_400, repo_IssueBlocks_400, index_IssueBlocks_400);
  verifyIssueBlocksDoesNotExist(owner_IssueBlocks_400);

});

bthread("crud:IssueSubscriptions:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_410 = IssuesId;
  let index_IssueSubscriptions_410 = 410 + Math.floor(Math.random() * 99);
  let limit_IssueSubscriptions_410 = 410 + Math.floor(Math.random() * 99);
  let owner_IssueSubscriptions_410 = "owner_IssueSubscriptions_410_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_410 = 410 + Math.floor(Math.random() * 99);
  let repo_IssueSubscriptions_410 = "repo_IssueSubscriptions_410_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_410 = "user_IssueSubscriptions_410_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_410, index_IssueSubscriptions_410, limit_IssueSubscriptions_410, owner_IssueSubscriptions_410, page_IssueSubscriptions_410, repo_IssueSubscriptions_410, user_IssueSubscriptions_410, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueSubscriptionsExists(id_IssueSubscriptions_410);
  verifyIssueSubscriptionsExists(id_IssueSubscriptions_410);
  // -> Deleting Leaf IssueSubscriptions (Standard)
  issueDeleteSubscription(owner_IssueSubscriptions_410, repo_IssueSubscriptions_410, index_IssueSubscriptions_410, user_IssueSubscriptions_410);
  verifyIssueSubscriptionsDoesNotExist(id_IssueSubscriptions_410);

});

bthread("crud:IssueTimes:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_420 = "before_IssueTimes_420_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_420 = { "id": 1, "name": "body_IssueTimes_420_obj" };
  let index_IssueTimes_420 = 420 + Math.floor(Math.random() * 99);
  let limit_IssueTimes_420 = 420 + Math.floor(Math.random() * 99);
  let owner_IssueTimes_420 = "owner_IssueTimes_420";
  let page_IssueTimes_420 = 420 + Math.floor(Math.random() * 99);
  let repo_IssueTimes_420 = "repo_IssueTimes_420_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_420 = "since_IssueTimes_420_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_420 = "user_IssueTimes_420_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_420, body_IssueTimes_420, index_IssueTimes_420, limit_IssueTimes_420, owner_IssueTimes_420, page_IssueTimes_420, repo_IssueTimes_420, since_IssueTimes_420, user_IssueTimes_420, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueTimesExists(owner_IssueTimes_420);
  verifyIssueTimesExists(owner_IssueTimes_420);
  // -> Deleting Leaf IssueTimes (Standard)
  issueResetTime(owner_IssueTimes_420, repo_IssueTimes_420, index_IssueTimes_420);
  verifyIssueTimesDoesNotExist(owner_IssueTimes_420);

});

bthread("crud:RepositoryKeys:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_430 = { "id": 1, "name": "body_RepositoryKeys_430_obj" };
  let fingerprint_RepositoryKeys_430 = "fingerprint_RepositoryKeys_430_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_430 = RepositoriesId;
  let key_id_RepositoryKeys_430 = 430 + Math.floor(Math.random() * 99);
  let limit_RepositoryKeys_430 = 430 + Math.floor(Math.random() * 99);
  let owner_RepositoryKeys_430 = "owner_RepositoryKeys_430_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_430 = 430 + Math.floor(Math.random() * 99);
  let repo_RepositoryKeys_430 = "repo_RepositoryKeys_430_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_430, fingerprint_RepositoryKeys_430, id_RepositoryKeys_430, key_id_RepositoryKeys_430, limit_RepositoryKeys_430, owner_RepositoryKeys_430, page_RepositoryKeys_430, repo_RepositoryKeys_430, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryKeysExists(id_RepositoryKeys_430);
  verifyRepositoryKeysExists(id_RepositoryKeys_430);
  // -> Deleting Leaf RepositoryKeys (Standard)
  repoDeleteKey(owner_RepositoryKeys_430, repo_RepositoryKeys_430, id_RepositoryKeys_430);
  verifyRepositoryKeysDoesNotExist(id_RepositoryKeys_430);

});

bthread("crud:MirrorSync:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating MirrorSync
  let id_MirrorSync_440 = RepositoriesId;
  let owner_MirrorSync_440 = "owner_MirrorSync_440_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_440 = "repo_MirrorSync_440_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_440, owner_MirrorSync_440, repo_MirrorSync_440, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_440);
  verifyMirrorSyncExists(id_MirrorSync_440);
});

bthread("crud:PullRequests:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PullRequests
  let body_PullRequests_450 = { "id": 1, "name": "body_PullRequests_450_obj" };
  let id_PullRequests_450 = RepositoriesId;
  let index_PullRequests_450 = 450 + Math.floor(Math.random() * 99);
  let limit_PullRequests_450 = 450 + Math.floor(Math.random() * 99);
  let owner_PullRequests_450 = "owner_PullRequests_450_" + Math.floor(Math.random()*1000);
  let page_PullRequests_450 = 450 + Math.floor(Math.random() * 99);
  let repo_PullRequests_450 = "repo_PullRequests_450_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_450 = "skip_to_PullRequests_450_" + Math.floor(Math.random()*1000);
  let style_PullRequests_450 = "style_PullRequests_450_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_450 = "whitespace_PullRequests_450_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_450, id_PullRequests_450, index_PullRequests_450, limit_PullRequests_450, owner_PullRequests_450, page_PullRequests_450, repo_PullRequests_450, skip_to_PullRequests_450, style_PullRequests_450, whitespace_PullRequests_450, { expectedResponseCodes: [200, 201, 204] });

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
  let style_PullRequests_upd_450 = "style_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_450 = "whitespace_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_450, id_PullRequests_upd_450, index_PullRequests_upd_450, limit_PullRequests_upd_450, owner_PullRequests_upd_450, page_PullRequests_upd_450, repo_PullRequests_upd_450, skip_to_PullRequests_upd_450, style_PullRequests_upd_450, whitespace_PullRequests_upd_450, { expectedResponseCodes: [200, 201, 204] });

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
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_490 = PullReviewsId;
  let index_PullReviewUndismissals_490 = 490 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_490 = "owner_PullReviewUndismissals_490_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_490 = "repo_PullReviewUndismissals_490_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_490, index_PullReviewUndismissals_490, owner_PullReviewUndismissals_490, repo_PullReviewUndismissals_490, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_490);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_490);
});

bthread("crud:PushMirrors:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_500 = RepositoriesId;
  let limit_PushMirrors_500 = 500 + Math.floor(Math.random() * 99);
  let name_PushMirrors_500 = "name_PushMirrors_500_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_500 = "owner_PushMirrors_500_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_500 = 500 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_500 = "repo_PushMirrors_500_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_500, limit_PushMirrors_500, name_PushMirrors_500, owner_PushMirrors_500, page_PushMirrors_500, repo_PushMirrors_500, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_500);
  verifyPushMirrorsExists(id_PushMirrors_500);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_500, repo_PushMirrors_500, name_PushMirrors_500);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_500);

});

bthread("crud:Releases:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Releases
  let CreateReleaseOption_Releases_510 = "CreateReleaseOption_Releases_510_" + Math.floor(Math.random()*1000);
  let body_Releases_510 = { "id": 1, "name": "body_Releases_510_obj" };
  let draft_Releases_510 = true;
  let id_Releases_510 = RepositoriesId;
  let limit_Releases_510 = 510 + Math.floor(Math.random() * 99);
  let owner_Releases_510 = "owner_Releases_510_" + Math.floor(Math.random()*1000);
  let page_Releases_510 = 510 + Math.floor(Math.random() * 99);
  let pre_release_Releases_510 = true;
  let repo_Releases_510 = "repo_Releases_510_" + Math.floor(Math.random()*1000);
  let tag_Releases_510 = "tag_Releases_510_" + Math.floor(Math.random()*1000);
  repoCreateRelease(CreateReleaseOption_Releases_510, body_Releases_510, draft_Releases_510, id_Releases_510, limit_Releases_510, owner_Releases_510, page_Releases_510, pre_release_Releases_510, repo_Releases_510, tag_Releases_510, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_510);
  // -> Updating Releases
  let CreateReleaseOption_Releases_upd_510 = "CreateReleaseOption_Releases_upd_510_" + Math.floor(Math.random()*1000);
  let body_Releases_upd_510 = { "id": 1, "name": "body_Releases_upd_510_obj" };
  let draft_Releases_upd_510 = true;
  let id_Releases_upd_510 = id_Releases_510;
  let limit_Releases_upd_510 = 510 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_510 = "owner_Releases_upd_510_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_510 = 510 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_510 = true;
  let repo_Releases_upd_510 = "repo_Releases_upd_510_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_510 = "tag_Releases_upd_510_" + Math.floor(Math.random()*1000);
  repoEditRelease(CreateReleaseOption_Releases_upd_510, body_Releases_upd_510, draft_Releases_upd_510, id_Releases_upd_510, limit_Releases_upd_510, owner_Releases_upd_510, page_Releases_upd_510, pre_release_Releases_upd_510, repo_Releases_upd_510, tag_Releases_upd_510, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_510);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_510, repo_Releases_510, tag_Releases_510);

});

bthread("crud:ReleaseAttachments:linear:1", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_520 = "attachment_ReleaseAttachments_520_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_520 = 520 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_520 = { "id": 1, "name": "body_ReleaseAttachments_520_obj" };
  let id_ReleaseAttachments_520 = ReleasesId;
  let name_ReleaseAttachments_520 = "name_ReleaseAttachments_520_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_520 = "owner_ReleaseAttachments_520_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_520 = "repo_ReleaseAttachments_520_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_520, attachment_id_ReleaseAttachments_520, body_ReleaseAttachments_520, id_ReleaseAttachments_520, name_ReleaseAttachments_520, owner_ReleaseAttachments_520, repo_ReleaseAttachments_520, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_520);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_520 = "attachment_ReleaseAttachments_upd_520_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_520 = 520 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_520 = { "id": 1, "name": "body_ReleaseAttachments_upd_520_obj" };
  let id_ReleaseAttachments_upd_520 = id_ReleaseAttachments_520;
  let name_ReleaseAttachments_upd_520 = "name_ReleaseAttachments_upd_520_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_520 = "owner_ReleaseAttachments_upd_520_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_520 = "repo_ReleaseAttachments_upd_520_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_520, attachment_id_ReleaseAttachments_upd_520, body_ReleaseAttachments_upd_520, id_ReleaseAttachments_upd_520, name_ReleaseAttachments_upd_520, owner_ReleaseAttachments_upd_520, repo_ReleaseAttachments_upd_520, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_520);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_520, repo_ReleaseAttachments_520, id_ReleaseAttachments_520, attachment_id_ReleaseAttachments_520);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_520);

});

bthread("crud:TagProtections:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating TagProtections
  let body_TagProtections_530 = { "id": 1, "name": "body_TagProtections_530_obj" };
  let id_TagProtections_530 = RepositoriesId;
  let owner_TagProtections_530 = "owner_TagProtections_530_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_530 = "repo_TagProtections_530_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_530, id_TagProtections_530, owner_TagProtections_530, repo_TagProtections_530, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_530);
  // -> Updating TagProtections
  let body_TagProtections_upd_530 = { "id": 1, "name": "body_TagProtections_upd_530_obj" };
  let id_TagProtections_upd_530 = id_TagProtections_530;
  let owner_TagProtections_upd_530 = "owner_TagProtections_upd_530_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_530 = "repo_TagProtections_upd_530_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_530, id_TagProtections_upd_530, owner_TagProtections_upd_530, repo_TagProtections_upd_530, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_530);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_530, repo_TagProtections_530, id_TagProtections_530);
  verifyTagProtectionsDoesNotExist(id_TagProtections_530);

});

bthread("crud:Tags:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Tags
  let body_Tags_540 = { "id": 1, "name": "body_Tags_540_obj" };
  let id_Tags_540 = RepositoriesId;
  let limit_Tags_540 = 540 + Math.floor(Math.random() * 99);
  let owner_Tags_540 = "owner_Tags_540_" + Math.floor(Math.random()*1000);
  let page_Tags_540 = 540 + Math.floor(Math.random() * 99);
  let repo_Tags_540 = "repo_Tags_540_" + Math.floor(Math.random()*1000);
  let tag_Tags_540 = "tag_Tags_540_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_540, id_Tags_540, limit_Tags_540, owner_Tags_540, page_Tags_540, repo_Tags_540, tag_Tags_540, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_540);
  verifyTagsExists(id_Tags_540);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_540, repo_Tags_540, tag_Tags_540);
  verifyTagsDoesNotExist(id_Tags_540);

});

bthread("crud:Topics:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Topics
  let body_Topics_550 = { "id": 1, "name": "body_Topics_550_obj" };
  let limit_Topics_550 = 550 + Math.floor(Math.random() * 99);
  let owner_Topics_550 = "owner_Topics_550";
  let page_Topics_550 = 550 + Math.floor(Math.random() * 99);
  let q_Topics_550 = "q_Topics_550_" + Math.floor(Math.random()*1000);
  let repo_Topics_550 = "repo_Topics_550_" + Math.floor(Math.random()*1000);
  let topic_Topics_550 = "topic_Topics_550_" + Math.floor(Math.random()*1000);
  let topic1_Topics_550 = "topic1_Topics_550_" + Math.floor(Math.random()*1000);
  let topic2_Topics_550 = "topic2_Topics_550_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_550, limit_Topics_550, owner_Topics_550, page_Topics_550, q_Topics_550, repo_Topics_550, topic_Topics_550, topic1_Topics_550, topic2_Topics_550, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_550);
  // -> Updating Topics
  let body_Topics_upd_550 = { "id": 1, "name": "body_Topics_upd_550_obj" };
  let limit_Topics_upd_550 = 550 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_550 = owner_Topics_550;
  let page_Topics_upd_550 = 550 + Math.floor(Math.random() * 99);
  let q_Topics_upd_550 = "q_Topics_upd_550_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_550 = "repo_Topics_upd_550_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_550 = "topic_Topics_upd_550_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_550 = "topic1_Topics_upd_550_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_550 = "topic2_Topics_upd_550_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_550, limit_Topics_upd_550, owner_Topics_upd_550, page_Topics_upd_550, q_Topics_upd_550, repo_Topics_upd_550, topic_Topics_upd_550, topic1_Topics_upd_550, topic2_Topics_upd_550, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_550);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_550, repo_Topics_550, topic_Topics_550);
  verifyTopicsDoesNotExist(owner_Topics_550);

});

bthread("crud:RepositoryTransfer:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_560 = { "id": 1, "name": "body_RepositoryTransfer_560_obj" };
  let id_RepositoryTransfer_560 = RepositoriesId;
  let owner_RepositoryTransfer_560 = "owner_RepositoryTransfer_560_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_560 = "repo_RepositoryTransfer_560_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_560 = "transferOptions_RepositoryTransfer_560_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_560, id_RepositoryTransfer_560, owner_RepositoryTransfer_560, repo_RepositoryTransfer_560, transferOptions_RepositoryTransfer_560, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_560);
  verifyRepositoryTransferExists(id_RepositoryTransfer_560);
});

bthread("crud:WikiPage:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating WikiPage
  let body_WikiPage_570 = { "id": 1, "name": "body_WikiPage_570_obj" };
  let id_WikiPage_570 = RepositoriesId;
  let owner_WikiPage_570 = "owner_WikiPage_570_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_570 = "pageName_WikiPage_570_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_570 = "repo_WikiPage_570_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_570 = "wikiPageOptions_WikiPage_570_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_570, id_WikiPage_570, owner_WikiPage_570, pageName_WikiPage_570, repo_WikiPage_570, wikiPageOptions_WikiPage_570, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_570);
  // -> Updating WikiPage
  let body_WikiPage_upd_570 = { "id": 1, "name": "body_WikiPage_upd_570_obj" };
  let id_WikiPage_upd_570 = id_WikiPage_570;
  let owner_WikiPage_upd_570 = "owner_WikiPage_upd_570_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_570 = "pageName_WikiPage_upd_570_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_570 = "repo_WikiPage_upd_570_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_570 = "wikiPageOptions_WikiPage_upd_570_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_570, id_WikiPage_upd_570, owner_WikiPage_upd_570, pageName_WikiPage_upd_570, repo_WikiPage_upd_570, wikiPageOptions_WikiPage_upd_570, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_570);
  // -> Deleting Leaf WikiPage (Standard)
  repoDeleteWikiPage(owner_WikiPage_570, repo_WikiPage_570, pageName_WikiPage_570);
  verifyWikiPageDoesNotExist(id_WikiPage_570);

});

bthread("crud:TeamMembers:linear:1", function () {
  let deps = {};
  deps["Teams"] = matchAnyTeamsAdded();
  let pkMap = {"Teams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let TeamsId = captured["Teams"];
  // -> Creating TeamMembers
  let id_TeamMembers_580 = TeamsId;
  let limit_TeamMembers_580 = 580 + Math.floor(Math.random() * 99);
  let page_TeamMembers_580 = 580 + Math.floor(Math.random() * 99);
  let username_TeamMembers_580 = "username_TeamMembers_580";
  orgAddTeamMember(id_TeamMembers_580, limit_TeamMembers_580, page_TeamMembers_580, username_TeamMembers_580, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_580);
  verifyTeamMembersExists(id_TeamMembers_580);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_580);
  verifyTeamMembersDoesNotExist(id_TeamMembers_580);

});

bthread("crud:TeamRepos:linear:1", function () {
  let deps = {};
  deps["Teams"] = matchAnyTeamsAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Teams": "id", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let TeamsId = captured["Teams"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating TeamRepos
  let id_TeamRepos_590 = RepositoriesId;
  let limit_TeamRepos_590 = 590 + Math.floor(Math.random() * 99);
  let org_TeamRepos_590 = "org_TeamRepos_590_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_590 = 590 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_590 = "repo_TeamRepos_590_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_590, limit_TeamRepos_590, org_TeamRepos_590, page_TeamRepos_590, repo_TeamRepos_590, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_590);
  verifyTeamReposExists(id_TeamRepos_590);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_590);
  verifyTeamReposDoesNotExist(id_TeamRepos_590);

});

bthread("crud:UserVariables:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_600 = { "id": 1, "name": "body_UserVariables_600_obj" };
  let variablename_UserVariables_600 = "variablename_UserVariables_600";
  createUserVariable(body_UserVariables_600, variablename_UserVariables_600, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_600);
  // -> Updating UserVariables
  let body_UserVariables_upd_600 = { "id": 1, "name": "body_UserVariables_upd_600_obj" };
  let variablename_UserVariables_upd_600 = variablename_UserVariables_600;
  updateUserVariable(body_UserVariables_upd_600, variablename_UserVariables_upd_600, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_600);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_600);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_600);

});

bthread("crud:OAuth2Applications:linear:1", function () {
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_610 = { "id": 1, "name": "body_OAuth2Applications_610_obj" };
  let id_OAuth2Applications_610 = 610 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_610 = 610 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_610 = 610 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_610, id_OAuth2Applications_610, limit_OAuth2Applications_610, page_OAuth2Applications_610, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_610);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_610 = { "id": 1, "name": "body_OAuth2Applications_upd_610_obj" };
  let id_OAuth2Applications_upd_610 = id_OAuth2Applications_610;
  let limit_OAuth2Applications_upd_610 = 610 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_610 = 610 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_610, id_OAuth2Applications_upd_610, limit_OAuth2Applications_upd_610, page_OAuth2Applications_upd_610, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_610);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_610);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_610);

});

bthread("crud:UserAvatar:linear:1", function () {
  // -> Creating UserAvatar
  let body_UserAvatar_620 = { "id": 1, "name": "body_UserAvatar_620_obj" };
  let id_UserAvatar_620 = 620 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_620, id_UserAvatar_620, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_620);
  verifyUserAvatarExists(id_UserAvatar_620);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_620);
  verifyUserAvatarDoesNotExist(id_UserAvatar_620);

});

bthread("crud:UserEmails:linear:1", function () {
  // -> Creating UserEmails
  let body_UserEmails_630 = { "id": 1, "name": "body_UserEmails_630_obj" };
  let id_UserEmails_630 = 630 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_630, id_UserEmails_630, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_630);
  verifyUserEmailsExists(id_UserEmails_630);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_630);
  verifyUserEmailsDoesNotExist(id_UserEmails_630);

});

bthread("crud:GPGKeys:linear:1", function () {
  // -> Creating GPGKeys
  let Form_GPGKeys_640 = { "id": 1, "name": "Form_GPGKeys_640_obj" };
  let id_GPGKeys_640 = 640 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_640 = 640 + Math.floor(Math.random() * 99);
  let page_GPGKeys_640 = 640 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_640, id_GPGKeys_640, limit_GPGKeys_640, page_GPGKeys_640, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_640);
  verifyGPGKeysExists(id_GPGKeys_640);
  // -> Deleting Leaf GPGKeys (Standard)
  userCurrentDeleteGPGKey(id_GPGKeys_640);
  verifyGPGKeysDoesNotExist(id_GPGKeys_640);

});

bthread("crud:GPGKeyVerification:linear:1", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_650 = 650 + Math.floor(Math.random() * 99);
  userVerifyGPGKey(id_GPGKeyVerification_650, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_650);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_650);
});

bthread("crud:Keys:linear:1", function () {
  // -> Creating Keys
  let body_Keys_660 = { "id": 1, "name": "body_Keys_660_obj" };
  let fingerprint_Keys_660 = "fingerprint_Keys_660_" + Math.floor(Math.random()*1000);
  let id_Keys_660 = 660 + Math.floor(Math.random() * 99);
  let limit_Keys_660 = 660 + Math.floor(Math.random() * 99);
  let page_Keys_660 = 660 + Math.floor(Math.random() * 99);
  userCurrentPostKey(body_Keys_660, fingerprint_Keys_660, id_Keys_660, limit_Keys_660, page_Keys_660, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_660);
  verifyKeysExists(id_Keys_660);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_660);
  verifyKeysDoesNotExist(id_Keys_660);

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
  let limit_UserStarred_670 = 670 + Math.floor(Math.random() * 99);
  let owner_UserStarred_670 = "owner_UserStarred_670";
  let page_UserStarred_670 = 670 + Math.floor(Math.random() * 99);
  let repo_UserStarred_670 = "repo_UserStarred_670_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_670, owner_UserStarred_670, page_UserStarred_670, repo_UserStarred_670, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_670);
  verifyUserStarredExists(owner_UserStarred_670);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_670, repo_UserStarred_670);
  verifyUserStarredDoesNotExist(owner_UserStarred_670);

});

bthread("crud:ActivityPub:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating ActivityPub
  let user_id_ActivityPub_680 = UsersId;
  activitypubPersonInbox(user_id_ActivityPub_680, { expectedResponseCodes: [200, 201, 204] });

  verifyActivityPubExists(user_id_ActivityPub_680);
  verifyActivityPubExists(user_id_ActivityPub_680);
});

bthread("crud:AdminCron:linear:2", function () {
  // -> Creating AdminCron
  let id_AdminCron_690 = 690 + Math.floor(Math.random() * 99);
  let limit_AdminCron_690 = 690 + Math.floor(Math.random() * 99);
  let page_AdminCron_690 = 690 + Math.floor(Math.random() * 99);
  let task_AdminCron_690 = "task_AdminCron_690_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_690, limit_AdminCron_690, page_AdminCron_690, task_AdminCron_690, { expectedResponseCodes: [200, 201, 204] });

  verifyAdminCronExists(id_AdminCron_690);
  verifyAdminCronExists(id_AdminCron_690);
});

bthread("crud:Hooks:linear:2", function () {
  // -> Creating Hooks
  let body_Hooks_700 = { "id": 1, "name": "body_Hooks_700_obj" };
  let id_Hooks_700 = 700 + Math.floor(Math.random() * 99);
  let limit_Hooks_700 = 700 + Math.floor(Math.random() * 99);
  let page_Hooks_700 = 700 + Math.floor(Math.random() * 99);
  userCreateHook(body_Hooks_700, id_Hooks_700, limit_Hooks_700, page_Hooks_700, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_700);
  // -> Updating Hooks
  let body_Hooks_upd_700 = { "id": 1, "name": "body_Hooks_upd_700_obj" };
  let id_Hooks_upd_700 = id_Hooks_700;
  let limit_Hooks_upd_700 = 700 + Math.floor(Math.random() * 99);
  let page_Hooks_upd_700 = 700 + Math.floor(Math.random() * 99);
  userEditHook(body_Hooks_upd_700, id_Hooks_upd_700, limit_Hooks_upd_700, page_Hooks_upd_700, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_700);
  // -> Deleting Leaf Hooks (Standard)
  userDeleteHook(id_Hooks_700);
  verifyHooksDoesNotExist(id_Hooks_700);

});

bthread("crud:UnadoptedRepositories:linear:2", function () {
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_710 = 710 + Math.floor(Math.random() * 99);
  let owner_UnadoptedRepositories_710 = "owner_UnadoptedRepositories_710";
  let page_UnadoptedRepositories_710 = 710 + Math.floor(Math.random() * 99);
  let pattern_UnadoptedRepositories_710 = "pattern_UnadoptedRepositories_710_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_710 = "repo_UnadoptedRepositories_710_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_710, owner_UnadoptedRepositories_710, page_UnadoptedRepositories_710, pattern_UnadoptedRepositories_710, repo_UnadoptedRepositories_710, { expectedResponseCodes: [200, 201, 204] });

  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_710);
  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_710);
  // -> Deleting Leaf UnadoptedRepositories (Standard)
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_710, repo_UnadoptedRepositories_710);
  verifyUnadoptedRepositoriesDoesNotExist(owner_UnadoptedRepositories_710);

});

bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let CreateUserOption_Users_720 = "CreateUserOption_Users_720_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_720 = "EditUserOption_Users_720_" + Math.floor(Math.random()*1000);
  let body_Users_720 = { "id": 1, "name": "body_Users_720_obj" };
  let limit_Users_720 = 720 + Math.floor(Math.random() * 99);
  let page_Users_720 = 720 + Math.floor(Math.random() * 99);
  let purge_Users_720 = true;
  let token_Users_720 = "token_Users_720_" + Math.floor(Math.random()*1000);
  let username_Users_720 = "username_Users_720";
  adminCreateUser(CreateUserOption_Users_720, EditUserOption_Users_720, body_Users_720, limit_Users_720, page_Users_720, purge_Users_720, token_Users_720, username_Users_720, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_720);
  // -> Updating Users
  let CreateUserOption_Users_upd_720 = "CreateUserOption_Users_upd_720_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_upd_720 = "EditUserOption_Users_upd_720_" + Math.floor(Math.random()*1000);
  let body_Users_upd_720 = { "id": 1, "name": "body_Users_upd_720_obj" };
  let limit_Users_upd_720 = 720 + Math.floor(Math.random() * 99);
  let page_Users_upd_720 = 720 + Math.floor(Math.random() * 99);
  let purge_Users_upd_720 = true;
  let token_Users_upd_720 = "token_Users_upd_720_" + Math.floor(Math.random()*1000);
  let username_Users_upd_720 = username_Users_720;
  adminEditUser(CreateUserOption_Users_upd_720, EditUserOption_Users_upd_720, body_Users_upd_720, limit_Users_upd_720, page_Users_upd_720, purge_Users_upd_720, token_Users_upd_720, username_Users_upd_720, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_720);
  // -> Deleting Parent Users (Relational Intent Race)
  adminDeleteUser(username_Users_720);

});

bthread("crud:UserBadges:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_730 = "UserBadgeOption_UserBadges_730_" + Math.floor(Math.random()*1000);
  let body_UserBadges_730 = { "id": 1, "name": "body_UserBadges_730_obj" };
  let username_UserBadges_730 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_730, body_UserBadges_730, username_UserBadges_730, { expectedResponseCodes: [200, 201, 204] });

  verifyUserBadgesExists(username_UserBadges_730);
  verifyUserBadgesExists(username_UserBadges_730);
  // -> Deleting Leaf UserBadges (Standard)
  adminDeleteUserBadges(username_UserBadges_730);
  verifyUserBadgesDoesNotExist(username_UserBadges_730);

});

bthread("crud:UserKeys:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserKeys
  let key_UserKeys_740 = "key_UserKeys_740_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_740 = "purge_UserKeys_740_" + Math.floor(Math.random()*1000);
  let username_UserKeys_740 = UsersId;
  adminCreatePublicKey(key_UserKeys_740, purge_UserKeys_740, username_UserKeys_740, { expectedResponseCodes: [200, 201, 204] });

  verifyUserKeysExists(username_UserKeys_740);
  verifyUserKeysExists(username_UserKeys_740);
  // -> Deleting Leaf UserKeys (Standard)
  adminDeleteUser(username_UserKeys_740);
  verifyUserKeysDoesNotExist(username_UserKeys_740);

});

bthread("crud:UserOrganizations:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_750 = 750 + Math.floor(Math.random() * 99);
  let organization_UserOrganizations_750 = "organization_UserOrganizations_750_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_750 = UsersId;
  adminCreateOrg(id_UserOrganizations_750, organization_UserOrganizations_750, username_UserOrganizations_750, { expectedResponseCodes: [200, 201, 204] });

  verifyUserOrganizationsExists(id_UserOrganizations_750);
  verifyUserOrganizationsExists(id_UserOrganizations_750);
});

bthread("crud:UserRename:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_760 = "body_UserRename_760_" + Math.floor(Math.random()*1000);
  let id_UserRename_760 = 760 + Math.floor(Math.random() * 99);
  let username_UserRename_760 = UsersId;
  adminRenameUser(body_UserRename_760, id_UserRename_760, username_UserRename_760, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRenameExists(id_UserRename_760);
  verifyUserRenameExists(id_UserRename_760);
});

bthread("crud:UserRepositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_770 = 770 + Math.floor(Math.random() * 99);
  let repository_UserRepositories_770 = "repository_UserRepositories_770_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_770 = UsersId;
  adminCreateRepo(id_UserRepositories_770, repository_UserRepositories_770, username_UserRepositories_770, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRepositoriesExists(id_UserRepositories_770);
  verifyUserRepositoriesExists(id_UserRepositories_770);
});

bthread("crud:Markdown:linear:2", function () {
  // -> Creating Markdown
  let body_Markdown_780 = "body_Markdown_780_" + Math.floor(Math.random()*1000);
  let id_Markdown_780 = 780 + Math.floor(Math.random() * 99);
  renderMarkdown(body_Markdown_780, id_Markdown_780, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkdownExists(id_Markdown_780);
  verifyMarkdownExists(id_Markdown_780);
});

bthread("crud:Markup:linear:2", function () {
  // -> Creating Markup
  let body_Markup_790 = { "id": 1, "name": "body_Markup_790_obj" };
  let id_Markup_790 = 790 + Math.floor(Math.random() * 99);
  renderMarkup(body_Markup_790, id_Markup_790, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkupExists(id_Markup_790);
  verifyMarkupExists(id_Markup_790);
});

bthread("crud:Organization:linear:2", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating Organization
  let body_Organization_800 = { "id": 1, "name": "body_Organization_800_obj" };
  let limit_Organization_800 = 800 + Math.floor(Math.random() * 99);
  let org_Organization_800 = "org_Organization_800";
  let page_Organization_800 = 800 + Math.floor(Math.random() * 99);
  let secretname_Organization_800 = "secretname_Organization_800_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_800, limit_Organization_800, org_Organization_800, page_Organization_800, secretname_Organization_800, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_800);
  // -> Updating Organization
  let body_Organization_upd_800 = { "id": 1, "name": "body_Organization_upd_800_obj" };
  let limit_Organization_upd_800 = 800 + Math.floor(Math.random() * 99);
  let org_Organization_upd_800 = org_Organization_800;
  let page_Organization_upd_800 = 800 + Math.floor(Math.random() * 99);
  let secretname_Organization_upd_800 = "secretname_Organization_upd_800_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_800, limit_Organization_upd_800, org_Organization_upd_800, page_Organization_upd_800, secretname_Organization_upd_800, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_800);
  // -> Deleting Leaf Organization (Standard)
  orgDelete(org_Organization_800);
  verifyOrganizationDoesNotExist(org_Organization_800);

});

bthread("crud:OrgVariables:linear:2", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrgVariables
  let body_OrgVariables_810 = "body_OrgVariables_810_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_810 = "org_OrgVariables_810";
  let variablename_OrgVariables_810 = "variablename_OrgVariables_810_" + Math.floor(Math.random()*1000);
  createOrgVariable(body_OrgVariables_810, org_OrgVariables_810, variablename_OrgVariables_810, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_810);
  // -> Updating OrgVariables
  let body_OrgVariables_upd_810 = "body_OrgVariables_upd_810_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_upd_810 = org_OrgVariables_810;
  let variablename_OrgVariables_upd_810 = "variablename_OrgVariables_upd_810_" + Math.floor(Math.random()*1000);
  orgEdit(body_OrgVariables_upd_810, org_OrgVariables_upd_810, variablename_OrgVariables_upd_810, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_810);
  // -> Deleting Leaf OrgVariables (Standard)
  orgDelete(org_OrgVariables_810);
  verifyOrgVariablesDoesNotExist(org_OrgVariables_810);

});

bthread("crud:Avatar:linear:2", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating Avatar
  let body_Avatar_820 = { "id": 1, "name": "body_Avatar_820_obj" };
  let org_Avatar_820 = "org_Avatar_820";
  orgUpdateAvatar(body_Avatar_820, org_Avatar_820, { expectedResponseCodes: [200, 201, 204] });

  verifyAvatarExists(org_Avatar_820);
  verifyAvatarExists(org_Avatar_820);
  // -> Deleting Leaf Avatar (Standard)
  orgDeleteAvatar(org_Avatar_820);
  verifyAvatarDoesNotExist(org_Avatar_820);

});

bthread("crud:Labels:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Labels
  let body_Labels_830 = { "id": 1, "name": "body_Labels_830_obj" };
  let id_Labels_830 = RepositoriesId;
  let limit_Labels_830 = 830 + Math.floor(Math.random() * 99);
  let owner_Labels_830 = "owner_Labels_830_" + Math.floor(Math.random()*1000);
  let page_Labels_830 = 830 + Math.floor(Math.random() * 99);
  let repo_Labels_830 = "repo_Labels_830_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_830, id_Labels_830, limit_Labels_830, owner_Labels_830, page_Labels_830, repo_Labels_830, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_830);
  // -> Updating Labels
  let body_Labels_upd_830 = { "id": 1, "name": "body_Labels_upd_830_obj" };
  let id_Labels_upd_830 = id_Labels_830;
  let limit_Labels_upd_830 = 830 + Math.floor(Math.random() * 99);
  let owner_Labels_upd_830 = "owner_Labels_upd_830_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_830 = 830 + Math.floor(Math.random() * 99);
  let repo_Labels_upd_830 = "repo_Labels_upd_830_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_830, id_Labels_upd_830, limit_Labels_upd_830, owner_Labels_upd_830, page_Labels_upd_830, repo_Labels_upd_830, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_830);
  // -> Deleting Leaf Labels (Standard)
  issueDeleteLabel(owner_Labels_830, repo_Labels_830, id_Labels_830);
  verifyLabelsDoesNotExist(id_Labels_830);

});

bthread("crud:OrganizationRepos:linear:2", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_840 = { "id": 1, "name": "body_OrganizationRepos_840_obj" };
  let id_OrganizationRepos_840 = 840 + Math.floor(Math.random() * 99);
  let limit_OrganizationRepos_840 = 840 + Math.floor(Math.random() * 99);
  let org_OrganizationRepos_840 = "org_OrganizationRepos_840_" + Math.floor(Math.random()*1000);
  let page_OrganizationRepos_840 = 840 + Math.floor(Math.random() * 99);
  createOrgRepo(body_OrganizationRepos_840, id_OrganizationRepos_840, limit_OrganizationRepos_840, org_OrganizationRepos_840, page_OrganizationRepos_840, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationReposExists(id_OrganizationRepos_840);
  verifyOrganizationReposExists(id_OrganizationRepos_840);
});

bthread("crud:OrganizationTeams:linear:2", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_850 = { "id": 1, "name": "body_OrganizationTeams_850_obj" };
  let id_OrganizationTeams_850 = 850 + Math.floor(Math.random() * 99);
  let limit_OrganizationTeams_850 = 850 + Math.floor(Math.random() * 99);
  let org_OrganizationTeams_850 = "org_OrganizationTeams_850_" + Math.floor(Math.random()*1000);
  let page_OrganizationTeams_850 = 850 + Math.floor(Math.random() * 99);
  orgCreateTeam(body_OrganizationTeams_850, id_OrganizationTeams_850, limit_OrganizationTeams_850, org_OrganizationTeams_850, page_OrganizationTeams_850, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationTeamsExists(id_OrganizationTeams_850);
  verifyOrganizationTeamsExists(id_OrganizationTeams_850);
});

bthread("crud:Issues:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issues
  let content_Issues_860 = { "id": 1, "name": "content_Issues_860_obj" };
  let id_Issues_860 = RepositoriesId;
  let index_Issues_860 = 860 + Math.floor(Math.random() * 99);
  let limit_Issues_860 = 860 + Math.floor(Math.random() * 99);
  let owner_Issues_860 = "owner_Issues_860_" + Math.floor(Math.random()*1000);
  let page_Issues_860 = 860 + Math.floor(Math.random() * 99);
  let position_Issues_860 = 860 + Math.floor(Math.random() * 99);
  let repo_Issues_860 = "repo_Issues_860_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_860, id_Issues_860, index_Issues_860, limit_Issues_860, owner_Issues_860, page_Issues_860, position_Issues_860, repo_Issues_860, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_860);
  // -> Updating Issues
  let content_Issues_upd_860 = { "id": 1, "name": "content_Issues_upd_860_obj" };
  let id_Issues_upd_860 = id_Issues_860;
  let index_Issues_upd_860 = 860 + Math.floor(Math.random() * 99);
  let limit_Issues_upd_860 = 860 + Math.floor(Math.random() * 99);
  let owner_Issues_upd_860 = "owner_Issues_upd_860_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_860 = 860 + Math.floor(Math.random() * 99);
  let position_Issues_upd_860 = 860 + Math.floor(Math.random() * 99);
  let repo_Issues_upd_860 = "repo_Issues_upd_860_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_860, id_Issues_upd_860, index_Issues_upd_860, limit_Issues_upd_860, owner_Issues_upd_860, page_Issues_upd_860, position_Issues_upd_860, repo_Issues_upd_860, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_860);
  // -> Deleting Parent Issues (Relational Intent Race)
  issueDeleteTime(owner_Issues_860, repo_Issues_860, index_Issues_860, id_Issues_860);

});

bthread("crud:Repository:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Repository
  let body_Repository_870 = { "id": 1, "name": "body_Repository_870_obj" };
  let id_Repository_870 = RepositoriesId;
  let limit_Repository_870 = 870 + Math.floor(Math.random() * 99);
  let owner_Repository_870 = "owner_Repository_870_" + Math.floor(Math.random()*1000);
  let page_Repository_870 = 870 + Math.floor(Math.random() * 99);
  let repo_Repository_870 = "repo_Repository_870_" + Math.floor(Math.random()*1000);
  let sha_Repository_870 = "sha_Repository_870_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_870, id_Repository_870, limit_Repository_870, owner_Repository_870, page_Repository_870, repo_Repository_870, sha_Repository_870, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_870);
  // -> Updating Repository
  let body_Repository_upd_870 = { "id": 1, "name": "body_Repository_upd_870_obj" };
  let id_Repository_upd_870 = id_Repository_870;
  let limit_Repository_upd_870 = 870 + Math.floor(Math.random() * 99);
  let owner_Repository_upd_870 = "owner_Repository_upd_870_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_870 = 870 + Math.floor(Math.random() * 99);
  let repo_Repository_upd_870 = "repo_Repository_upd_870_" + Math.floor(Math.random()*1000);
  let sha_Repository_upd_870 = "sha_Repository_upd_870_" + Math.floor(Math.random()*1000);
  userCurrentPutSubscription(body_Repository_upd_870, id_Repository_upd_870, limit_Repository_upd_870, owner_Repository_upd_870, page_Repository_upd_870, repo_Repository_upd_870, sha_Repository_upd_870, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_870);
  // -> Deleting Leaf Repository (Standard)
  userCurrentDeleteSubscription(owner_Repository_870, repo_Repository_870);
  verifyRepositoryDoesNotExist(id_Repository_870);

});

bthread("crud:Variables:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_880 = "CreateVariableOption_Variables_880_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_880 = "2025-01-25T12:00:00Z";
  let body_Variables_880 = { "id": 1, "name": "body_Variables_880_obj" };
  let id_Variables_880 = RepositoriesId;
  let limit_Variables_880 = 880 + Math.floor(Math.random() * 99);
  let owner_Variables_880 = "owner_Variables_880_" + Math.floor(Math.random()*1000);
  let page_Variables_880 = 880 + Math.floor(Math.random() * 99);
  let repo_Variables_880 = "repo_Variables_880_" + Math.floor(Math.random()*1000);
  let variablename_Variables_880 = "variablename_Variables_880_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_880, UpdateVariableOption_Variables_880, body_Variables_880, id_Variables_880, limit_Variables_880, owner_Variables_880, page_Variables_880, repo_Variables_880, variablename_Variables_880, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_880);
  // -> Updating Variables
  let CreateVariableOption_Variables_upd_880 = "CreateVariableOption_Variables_upd_880_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_880 = "2025-01-25T12:00:00Z";
  let body_Variables_upd_880 = { "id": 1, "name": "body_Variables_upd_880_obj" };
  let id_Variables_upd_880 = id_Variables_880;
  let limit_Variables_upd_880 = 880 + Math.floor(Math.random() * 99);
  let owner_Variables_upd_880 = "owner_Variables_upd_880_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_880 = 880 + Math.floor(Math.random() * 99);
  let repo_Variables_upd_880 = "repo_Variables_upd_880_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_880 = "variablename_Variables_upd_880_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_880, UpdateVariableOption_Variables_upd_880, body_Variables_upd_880, id_Variables_upd_880, limit_Variables_upd_880, owner_Variables_upd_880, page_Variables_upd_880, repo_Variables_upd_880, variablename_Variables_upd_880, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_880);
  // -> Deleting Leaf Variables (Standard)
  deleteRepoVariable(owner_Variables_880, repo_Variables_880, variablename_Variables_880);
  verifyVariablesDoesNotExist(id_Variables_880);

});

bthread("crud:Branches:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_890 = "CreateBranchRepoOption_Branches_890_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_890 = "2025-01-25T12:00:00Z";
  let body_Branches_890 = { "id": 1, "name": "body_Branches_890_obj" };
  let branch_Branches_890 = "branch_Branches_890_" + Math.floor(Math.random()*1000);
  let id_Branches_890 = RepositoriesId;
  let limit_Branches_890 = 890 + Math.floor(Math.random() * 99);
  let owner_Branches_890 = "owner_Branches_890_" + Math.floor(Math.random()*1000);
  let page_Branches_890 = 890 + Math.floor(Math.random() * 99);
  let repo_Branches_890 = "repo_Branches_890_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_890, UpdateBranchRepoOption_Branches_890, body_Branches_890, branch_Branches_890, id_Branches_890, limit_Branches_890, owner_Branches_890, page_Branches_890, repo_Branches_890, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_890);
  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_890 = "CreateBranchRepoOption_Branches_upd_890_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_890 = "2025-01-25T12:00:00Z";
  let body_Branches_upd_890 = { "id": 1, "name": "body_Branches_upd_890_obj" };
  let branch_Branches_upd_890 = "branch_Branches_upd_890_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_890 = id_Branches_890;
  let limit_Branches_upd_890 = 890 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_890 = "owner_Branches_upd_890_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_890 = 890 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_890 = "repo_Branches_upd_890_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_890, UpdateBranchRepoOption_Branches_upd_890, body_Branches_upd_890, branch_Branches_upd_890, id_Branches_upd_890, limit_Branches_upd_890, owner_Branches_upd_890, page_Branches_upd_890, repo_Branches_upd_890, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_890);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_890, repo_Branches_890, branch_Branches_890);
  verifyBranchesDoesNotExist(id_Branches_890);

});

bthread("crud:Collaborators:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_900 = "AddCollaboratorOption_Collaborators_900_" + Math.floor(Math.random()*1000);
  let body_Collaborators_900 = { "id": 1, "name": "body_Collaborators_900_obj" };
  let collaborator_Collaborators_900 = "collaborator_Collaborators_900_" + Math.floor(Math.random()*1000);
  let id_Collaborators_900 = RepositoriesId;
  let limit_Collaborators_900 = 900 + Math.floor(Math.random() * 99);
  let owner_Collaborators_900 = "owner_Collaborators_900_" + Math.floor(Math.random()*1000);
  let page_Collaborators_900 = 900 + Math.floor(Math.random() * 99);
  let repo_Collaborators_900 = "repo_Collaborators_900_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_900, body_Collaborators_900, collaborator_Collaborators_900, id_Collaborators_900, limit_Collaborators_900, owner_Collaborators_900, page_Collaborators_900, repo_Collaborators_900, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_900);
  verifyCollaboratorsExists(id_Collaborators_900);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_900, repo_Collaborators_900, collaborator_Collaborators_900);
  verifyCollaboratorsDoesNotExist(id_Collaborators_900);

});

bthread("crud:Repositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repositories
  let body_Repositories_910 = { "id": 1, "name": "body_Repositories_910_obj" };
  let filepath_Repositories_910 = "filepath_Repositories_910_" + Math.floor(Math.random()*1000);
  let id_Repositories_910 = 910 + Math.floor(Math.random() * 99);
  let limit_Repositories_910 = 910 + Math.floor(Math.random() * 99);
  let owner_Repositories_910 = "owner_Repositories_910_" + Math.floor(Math.random()*1000);
  let page_Repositories_910 = 910 + Math.floor(Math.random() * 99);
  let repo_Repositories_910 = "repo_Repositories_910_" + Math.floor(Math.random()*1000);
  let username_Repositories_910 = UsersId;
  createCurrentUserRepo(body_Repositories_910, filepath_Repositories_910, id_Repositories_910, limit_Repositories_910, owner_Repositories_910, page_Repositories_910, repo_Repositories_910, username_Repositories_910, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_910);
  // -> Updating Repositories
  let body_Repositories_upd_910 = { "id": 1, "name": "body_Repositories_upd_910_obj" };
  let filepath_Repositories_upd_910 = "filepath_Repositories_upd_910_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_910 = id_Repositories_910;
  let limit_Repositories_upd_910 = 910 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_910 = "owner_Repositories_upd_910_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_910 = 910 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_910 = "repo_Repositories_upd_910_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_910 = "username_Repositories_upd_910";
  repoUpdateFile(body_Repositories_upd_910, filepath_Repositories_upd_910, id_Repositories_upd_910, limit_Repositories_upd_910, owner_Repositories_upd_910, page_Repositories_upd_910, repo_Repositories_upd_910, username_Repositories_upd_910, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_910);
  // -> Deleting Parent Repositories (Relational Intent Race)
  repoDeleteFile(owner_Repositories_910, repo_Repositories_910, filepath_Repositories_910);

});

bthread("crud:Forks:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Forks
  let body_Forks_920 = { "id": 1, "name": "body_Forks_920_obj" };
  let id_Forks_920 = RepositoriesId;
  let limit_Forks_920 = 920 + Math.floor(Math.random() * 99);
  let owner_Forks_920 = "owner_Forks_920_" + Math.floor(Math.random()*1000);
  let page_Forks_920 = 920 + Math.floor(Math.random() * 99);
  let repo_Forks_920 = "repo_Forks_920_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_920, id_Forks_920, limit_Forks_920, owner_Forks_920, page_Forks_920, repo_Forks_920, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_920);
  verifyForksExists(id_Forks_920);
});

bthread("crud:Issue:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issue
  let body_Issue_930 = { "id": 1, "name": "body_Issue_930_obj" };
  let id_Issue_930 = RepositoriesId;
  let limit_Issue_930 = 930 + Math.floor(Math.random() * 99);
  let name_Issue_930 = "name_Issue_930_" + Math.floor(Math.random()*1000);
  let owner_Issue_930 = "owner_Issue_930_" + Math.floor(Math.random()*1000);
  let page_Issue_930 = 930 + Math.floor(Math.random() * 99);
  let repo_Issue_930 = "repo_Issue_930_" + Math.floor(Math.random()*1000);
  let state_Issue_930 = "state_Issue_930_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_930, id_Issue_930, limit_Issue_930, name_Issue_930, owner_Issue_930, page_Issue_930, repo_Issue_930, state_Issue_930, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_930);
  verifyIssueExists(id_Issue_930);
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
  // -> Deleting Parent IssueComments (Relational Intent Race)
  issueDeleteCommentDeprecated(owner_IssueComments_940, repo_IssueComments_940, index_IssueComments_940, id_IssueComments_940);

});

bthread("crud:IssueCommentAttachments:linear:2", function () {
  let deps = {};
  deps["IssueComments"] = matchAnyIssueCommentsAdded();
  let pkMap = {"IssueComments": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssueCommentsId = captured["IssueComments"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_950 = "attachment_IssueCommentAttachments_950_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_950 = 950 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_950 = { "id": 1, "name": "body_IssueCommentAttachments_950_obj" };
  let id_IssueCommentAttachments_950 = IssueCommentsId;
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
  deps["IssueComments"] = matchAnyIssueCommentsAdded();
  let pkMap = {"IssueComments": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssueCommentsId = captured["IssueComments"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_960 = { "id": 1, "name": "content_IssueCommentReactions_960_obj" };
  let id_IssueCommentReactions_960 = IssueCommentsId;
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
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_1010 = { "id": 1, "name": "body_RepositoryKeys_1010_obj" };
  let fingerprint_RepositoryKeys_1010 = "fingerprint_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_1010 = RepositoriesId;
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

bthread("crud:MirrorSync:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating MirrorSync
  let id_MirrorSync_1020 = RepositoriesId;
  let owner_MirrorSync_1020 = "owner_MirrorSync_1020_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_1020 = "repo_MirrorSync_1020_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_1020, owner_MirrorSync_1020, repo_MirrorSync_1020, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_1020);
  verifyMirrorSyncExists(id_MirrorSync_1020);
});

bthread("crud:PullRequests:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PullRequests
  let body_PullRequests_1030 = { "id": 1, "name": "body_PullRequests_1030_obj" };
  let id_PullRequests_1030 = RepositoriesId;
  let index_PullRequests_1030 = 1030 + Math.floor(Math.random() * 99);
  let limit_PullRequests_1030 = 1030 + Math.floor(Math.random() * 99);
  let owner_PullRequests_1030 = "owner_PullRequests_1030_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1030 = 1030 + Math.floor(Math.random() * 99);
  let repo_PullRequests_1030 = "repo_PullRequests_1030_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1030 = "skip_to_PullRequests_1030_" + Math.floor(Math.random()*1000);
  let style_PullRequests_1030 = "style_PullRequests_1030_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1030 = "whitespace_PullRequests_1030_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_1030, id_PullRequests_1030, index_PullRequests_1030, limit_PullRequests_1030, owner_PullRequests_1030, page_PullRequests_1030, repo_PullRequests_1030, skip_to_PullRequests_1030, style_PullRequests_1030, whitespace_PullRequests_1030, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1030);
  // -> Updating PullRequests
  let body_PullRequests_upd_1030 = { "id": 1, "name": "body_PullRequests_upd_1030_obj" };
  let id_PullRequests_upd_1030 = id_PullRequests_1030;
  let index_PullRequests_upd_1030 = 1030 + Math.floor(Math.random() * 99);
  let limit_PullRequests_upd_1030 = 1030 + Math.floor(Math.random() * 99);
  let owner_PullRequests_upd_1030 = "owner_PullRequests_upd_1030_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1030 = 1030 + Math.floor(Math.random() * 99);
  let repo_PullRequests_upd_1030 = "repo_PullRequests_upd_1030_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1030 = "skip_to_PullRequests_upd_1030_" + Math.floor(Math.random()*1000);
  let style_PullRequests_upd_1030 = "style_PullRequests_upd_1030_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1030 = "whitespace_PullRequests_upd_1030_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1030, id_PullRequests_upd_1030, index_PullRequests_upd_1030, limit_PullRequests_upd_1030, owner_PullRequests_upd_1030, page_PullRequests_upd_1030, repo_PullRequests_upd_1030, skip_to_PullRequests_upd_1030, style_PullRequests_upd_1030, whitespace_PullRequests_upd_1030, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1030);
  // -> Deleting Parent PullRequests (Relational Intent Race)
  repoCancelScheduledAutoMerge(owner_PullRequests_1030, repo_PullRequests_1030, index_PullRequests_1030);

});

bthread("crud:PullReviewRequests:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1040 = { "id": 1, "name": "body_PullReviewRequests_1040_obj" };
  let index_PullReviewRequests_1040 = 1040 + Math.floor(Math.random() * 99);
  let owner_PullReviewRequests_1040 = "owner_PullReviewRequests_1040";
  let repo_PullReviewRequests_1040 = "repo_PullReviewRequests_1040_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1040, index_PullReviewRequests_1040, owner_PullReviewRequests_1040, repo_PullReviewRequests_1040, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewRequestsExists(owner_PullReviewRequests_1040);
  verifyPullReviewRequestsExists(owner_PullReviewRequests_1040);
  // -> Deleting Leaf PullReviewRequests (Standard)
  repoDeletePullReviewRequests(owner_PullReviewRequests_1040, repo_PullReviewRequests_1040, index_PullReviewRequests_1040);
  verifyPullReviewRequestsDoesNotExist(owner_PullReviewRequests_1040);

});

bthread("crud:PullReviews:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1050 = { "id": 1, "name": "body_PullReviews_1050_obj" };
  let id_PullReviews_1050 = PullRequestsId;
  let index_PullReviews_1050 = 1050 + Math.floor(Math.random() * 99);
  let limit_PullReviews_1050 = 1050 + Math.floor(Math.random() * 99);
  let owner_PullReviews_1050 = "owner_PullReviews_1050_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1050 = 1050 + Math.floor(Math.random() * 99);
  let repo_PullReviews_1050 = "repo_PullReviews_1050_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_1050, id_PullReviews_1050, index_PullReviews_1050, limit_PullReviews_1050, owner_PullReviews_1050, page_PullReviews_1050, repo_PullReviews_1050, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewsExists(id_PullReviews_1050);
  verifyPullReviewsExists(id_PullReviews_1050);
  // -> Deleting Parent PullReviews (Relational Intent Race)
  repoDeletePullReview(owner_PullReviews_1050, repo_PullReviews_1050, index_PullReviews_1050, id_PullReviews_1050);

});

bthread("crud:PullReviewDismissals:linear:2", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1060 = { "id": 1, "name": "body_PullReviewDismissals_1060_obj" };
  let id_PullReviewDismissals_1060 = PullReviewsId;
  let index_PullReviewDismissals_1060 = 1060 + Math.floor(Math.random() * 99);
  let owner_PullReviewDismissals_1060 = "owner_PullReviewDismissals_1060_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1060 = "repo_PullReviewDismissals_1060_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1060, id_PullReviewDismissals_1060, index_PullReviewDismissals_1060, owner_PullReviewDismissals_1060, repo_PullReviewDismissals_1060, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1060);
  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1060);
});

bthread("crud:PullReviewUndismissals:linear:2", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1070 = PullReviewsId;
  let index_PullReviewUndismissals_1070 = 1070 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_1070 = "owner_PullReviewUndismissals_1070_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1070 = "repo_PullReviewUndismissals_1070_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1070, index_PullReviewUndismissals_1070, owner_PullReviewUndismissals_1070, repo_PullReviewUndismissals_1070, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1070);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1070);
});

bthread("crud:PushMirrors:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_1080 = RepositoriesId;
  let limit_PushMirrors_1080 = 1080 + Math.floor(Math.random() * 99);
  let name_PushMirrors_1080 = "name_PushMirrors_1080_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1080 = "owner_PushMirrors_1080_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1080 = 1080 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_1080 = "repo_PushMirrors_1080_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1080, limit_PushMirrors_1080, name_PushMirrors_1080, owner_PushMirrors_1080, page_PushMirrors_1080, repo_PushMirrors_1080, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_1080);
  verifyPushMirrorsExists(id_PushMirrors_1080);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_1080, repo_PushMirrors_1080, name_PushMirrors_1080);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_1080);

});

bthread("crud:Releases:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Releases
  let CreateReleaseOption_Releases_1090 = "CreateReleaseOption_Releases_1090_" + Math.floor(Math.random()*1000);
  let body_Releases_1090 = { "id": 1, "name": "body_Releases_1090_obj" };
  let draft_Releases_1090 = true;
  let id_Releases_1090 = RepositoriesId;
  let limit_Releases_1090 = 1090 + Math.floor(Math.random() * 99);
  let owner_Releases_1090 = "owner_Releases_1090_" + Math.floor(Math.random()*1000);
  let page_Releases_1090 = 1090 + Math.floor(Math.random() * 99);
  let pre_release_Releases_1090 = true;
  let repo_Releases_1090 = "repo_Releases_1090_" + Math.floor(Math.random()*1000);
  let tag_Releases_1090 = "tag_Releases_1090_" + Math.floor(Math.random()*1000);
  repoCreateRelease(CreateReleaseOption_Releases_1090, body_Releases_1090, draft_Releases_1090, id_Releases_1090, limit_Releases_1090, owner_Releases_1090, page_Releases_1090, pre_release_Releases_1090, repo_Releases_1090, tag_Releases_1090, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1090);
  // -> Updating Releases
  let CreateReleaseOption_Releases_upd_1090 = "CreateReleaseOption_Releases_upd_1090_" + Math.floor(Math.random()*1000);
  let body_Releases_upd_1090 = { "id": 1, "name": "body_Releases_upd_1090_obj" };
  let draft_Releases_upd_1090 = true;
  let id_Releases_upd_1090 = id_Releases_1090;
  let limit_Releases_upd_1090 = 1090 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_1090 = "owner_Releases_upd_1090_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1090 = 1090 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_1090 = true;
  let repo_Releases_upd_1090 = "repo_Releases_upd_1090_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_1090 = "tag_Releases_upd_1090_" + Math.floor(Math.random()*1000);
  repoEditRelease(CreateReleaseOption_Releases_upd_1090, body_Releases_upd_1090, draft_Releases_upd_1090, id_Releases_upd_1090, limit_Releases_upd_1090, owner_Releases_upd_1090, page_Releases_upd_1090, pre_release_Releases_upd_1090, repo_Releases_upd_1090, tag_Releases_upd_1090, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1090);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_1090, repo_Releases_1090, tag_Releases_1090);

});

bthread("crud:ReleaseAttachments:linear:2", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1100 = "attachment_ReleaseAttachments_1100_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1100 = 1100 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_1100 = { "id": 1, "name": "body_ReleaseAttachments_1100_obj" };
  let id_ReleaseAttachments_1100 = ReleasesId;
  let name_ReleaseAttachments_1100 = "name_ReleaseAttachments_1100_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1100 = "owner_ReleaseAttachments_1100_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1100 = "repo_ReleaseAttachments_1100_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1100, attachment_id_ReleaseAttachments_1100, body_ReleaseAttachments_1100, id_ReleaseAttachments_1100, name_ReleaseAttachments_1100, owner_ReleaseAttachments_1100, repo_ReleaseAttachments_1100, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1100);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1100 = "attachment_ReleaseAttachments_upd_1100_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1100 = 1100 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_1100 = { "id": 1, "name": "body_ReleaseAttachments_upd_1100_obj" };
  let id_ReleaseAttachments_upd_1100 = id_ReleaseAttachments_1100;
  let name_ReleaseAttachments_upd_1100 = "name_ReleaseAttachments_upd_1100_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1100 = "owner_ReleaseAttachments_upd_1100_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1100 = "repo_ReleaseAttachments_upd_1100_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1100, attachment_id_ReleaseAttachments_upd_1100, body_ReleaseAttachments_upd_1100, id_ReleaseAttachments_upd_1100, name_ReleaseAttachments_upd_1100, owner_ReleaseAttachments_upd_1100, repo_ReleaseAttachments_upd_1100, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1100);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1100, repo_ReleaseAttachments_1100, id_ReleaseAttachments_1100, attachment_id_ReleaseAttachments_1100);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_1100);

});

bthread("crud:TagProtections:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating TagProtections
  let body_TagProtections_1110 = { "id": 1, "name": "body_TagProtections_1110_obj" };
  let id_TagProtections_1110 = RepositoriesId;
  let owner_TagProtections_1110 = "owner_TagProtections_1110_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1110 = "repo_TagProtections_1110_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1110, id_TagProtections_1110, owner_TagProtections_1110, repo_TagProtections_1110, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1110);
  // -> Updating TagProtections
  let body_TagProtections_upd_1110 = { "id": 1, "name": "body_TagProtections_upd_1110_obj" };
  let id_TagProtections_upd_1110 = id_TagProtections_1110;
  let owner_TagProtections_upd_1110 = "owner_TagProtections_upd_1110_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1110 = "repo_TagProtections_upd_1110_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1110, id_TagProtections_upd_1110, owner_TagProtections_upd_1110, repo_TagProtections_upd_1110, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1110);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_1110, repo_TagProtections_1110, id_TagProtections_1110);
  verifyTagProtectionsDoesNotExist(id_TagProtections_1110);

});

bthread("crud:Tags:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Tags
  let body_Tags_1120 = { "id": 1, "name": "body_Tags_1120_obj" };
  let id_Tags_1120 = RepositoriesId;
  let limit_Tags_1120 = 1120 + Math.floor(Math.random() * 99);
  let owner_Tags_1120 = "owner_Tags_1120_" + Math.floor(Math.random()*1000);
  let page_Tags_1120 = 1120 + Math.floor(Math.random() * 99);
  let repo_Tags_1120 = "repo_Tags_1120_" + Math.floor(Math.random()*1000);
  let tag_Tags_1120 = "tag_Tags_1120_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1120, id_Tags_1120, limit_Tags_1120, owner_Tags_1120, page_Tags_1120, repo_Tags_1120, tag_Tags_1120, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_1120);
  verifyTagsExists(id_Tags_1120);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_1120, repo_Tags_1120, tag_Tags_1120);
  verifyTagsDoesNotExist(id_Tags_1120);

});

bthread("crud:Topics:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Topics
  let body_Topics_1130 = { "id": 1, "name": "body_Topics_1130_obj" };
  let limit_Topics_1130 = 1130 + Math.floor(Math.random() * 99);
  let owner_Topics_1130 = "owner_Topics_1130";
  let page_Topics_1130 = 1130 + Math.floor(Math.random() * 99);
  let q_Topics_1130 = "q_Topics_1130_" + Math.floor(Math.random()*1000);
  let repo_Topics_1130 = "repo_Topics_1130_" + Math.floor(Math.random()*1000);
  let topic_Topics_1130 = "topic_Topics_1130_" + Math.floor(Math.random()*1000);
  let topic1_Topics_1130 = "topic1_Topics_1130_" + Math.floor(Math.random()*1000);
  let topic2_Topics_1130 = "topic2_Topics_1130_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1130, limit_Topics_1130, owner_Topics_1130, page_Topics_1130, q_Topics_1130, repo_Topics_1130, topic_Topics_1130, topic1_Topics_1130, topic2_Topics_1130, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1130);
  // -> Updating Topics
  let body_Topics_upd_1130 = { "id": 1, "name": "body_Topics_upd_1130_obj" };
  let limit_Topics_upd_1130 = 1130 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_1130 = owner_Topics_1130;
  let page_Topics_upd_1130 = 1130 + Math.floor(Math.random() * 99);
  let q_Topics_upd_1130 = "q_Topics_upd_1130_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1130 = "repo_Topics_upd_1130_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1130 = "topic_Topics_upd_1130_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_1130 = "topic1_Topics_upd_1130_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_1130 = "topic2_Topics_upd_1130_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1130, limit_Topics_upd_1130, owner_Topics_upd_1130, page_Topics_upd_1130, q_Topics_upd_1130, repo_Topics_upd_1130, topic_Topics_upd_1130, topic1_Topics_upd_1130, topic2_Topics_upd_1130, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1130);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_1130, repo_Topics_1130, topic_Topics_1130);
  verifyTopicsDoesNotExist(owner_Topics_1130);

});

bthread("crud:RepositoryTransfer:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1140 = { "id": 1, "name": "body_RepositoryTransfer_1140_obj" };
  let id_RepositoryTransfer_1140 = RepositoriesId;
  let owner_RepositoryTransfer_1140 = "owner_RepositoryTransfer_1140_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1140 = "repo_RepositoryTransfer_1140_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1140 = "transferOptions_RepositoryTransfer_1140_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1140, id_RepositoryTransfer_1140, owner_RepositoryTransfer_1140, repo_RepositoryTransfer_1140, transferOptions_RepositoryTransfer_1140, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_1140);
  verifyRepositoryTransferExists(id_RepositoryTransfer_1140);
});

bthread("crud:WikiPage:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating WikiPage
  let body_WikiPage_1150 = { "id": 1, "name": "body_WikiPage_1150_obj" };
  let id_WikiPage_1150 = RepositoriesId;
  let owner_WikiPage_1150 = "owner_WikiPage_1150_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_1150 = "pageName_WikiPage_1150_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_1150 = "repo_WikiPage_1150_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_1150 = "wikiPageOptions_WikiPage_1150_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_1150, id_WikiPage_1150, owner_WikiPage_1150, pageName_WikiPage_1150, repo_WikiPage_1150, wikiPageOptions_WikiPage_1150, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_1150);
  // -> Updating WikiPage
  let body_WikiPage_upd_1150 = { "id": 1, "name": "body_WikiPage_upd_1150_obj" };
  let id_WikiPage_upd_1150 = id_WikiPage_1150;
  let owner_WikiPage_upd_1150 = "owner_WikiPage_upd_1150_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_1150 = "pageName_WikiPage_upd_1150_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_1150 = "repo_WikiPage_upd_1150_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_1150 = "wikiPageOptions_WikiPage_upd_1150_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_1150, id_WikiPage_upd_1150, owner_WikiPage_upd_1150, pageName_WikiPage_upd_1150, repo_WikiPage_upd_1150, wikiPageOptions_WikiPage_upd_1150, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_1150);
  // -> Deleting Leaf WikiPage (Standard)
  repoDeleteWikiPage(owner_WikiPage_1150, repo_WikiPage_1150, pageName_WikiPage_1150);
  verifyWikiPageDoesNotExist(id_WikiPage_1150);

});

bthread("crud:TeamMembers:linear:2", function () {
  let deps = {};
  deps["Teams"] = matchAnyTeamsAdded();
  let pkMap = {"Teams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let TeamsId = captured["Teams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1160 = TeamsId;
  let limit_TeamMembers_1160 = 1160 + Math.floor(Math.random() * 99);
  let page_TeamMembers_1160 = 1160 + Math.floor(Math.random() * 99);
  let username_TeamMembers_1160 = "username_TeamMembers_1160";
  orgAddTeamMember(id_TeamMembers_1160, limit_TeamMembers_1160, page_TeamMembers_1160, username_TeamMembers_1160, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_1160);
  verifyTeamMembersExists(id_TeamMembers_1160);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_1160);
  verifyTeamMembersDoesNotExist(id_TeamMembers_1160);

});

bthread("crud:TeamRepos:linear:2", function () {
  let deps = {};
  deps["Teams"] = matchAnyTeamsAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Teams": "id", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let TeamsId = captured["Teams"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating TeamRepos
  let id_TeamRepos_1170 = RepositoriesId;
  let limit_TeamRepos_1170 = 1170 + Math.floor(Math.random() * 99);
  let org_TeamRepos_1170 = "org_TeamRepos_1170_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_1170 = 1170 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_1170 = "repo_TeamRepos_1170_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1170, limit_TeamRepos_1170, org_TeamRepos_1170, page_TeamRepos_1170, repo_TeamRepos_1170, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_1170);
  verifyTeamReposExists(id_TeamRepos_1170);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_1170);
  verifyTeamReposDoesNotExist(id_TeamRepos_1170);

});

bthread("crud:UserVariables:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_1180 = { "id": 1, "name": "body_UserVariables_1180_obj" };
  let variablename_UserVariables_1180 = "variablename_UserVariables_1180";
  createUserVariable(body_UserVariables_1180, variablename_UserVariables_1180, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1180);
  // -> Updating UserVariables
  let body_UserVariables_upd_1180 = { "id": 1, "name": "body_UserVariables_upd_1180_obj" };
  let variablename_UserVariables_upd_1180 = variablename_UserVariables_1180;
  updateUserVariable(body_UserVariables_upd_1180, variablename_UserVariables_upd_1180, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1180);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_1180);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_1180);

});

bthread("crud:OAuth2Applications:linear:2", function () {
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1190 = { "id": 1, "name": "body_OAuth2Applications_1190_obj" };
  let id_OAuth2Applications_1190 = 1190 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_1190 = 1190 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_1190 = 1190 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_1190, id_OAuth2Applications_1190, limit_OAuth2Applications_1190, page_OAuth2Applications_1190, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1190);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1190 = { "id": 1, "name": "body_OAuth2Applications_upd_1190_obj" };
  let id_OAuth2Applications_upd_1190 = id_OAuth2Applications_1190;
  let limit_OAuth2Applications_upd_1190 = 1190 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_1190 = 1190 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1190, id_OAuth2Applications_upd_1190, limit_OAuth2Applications_upd_1190, page_OAuth2Applications_upd_1190, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1190);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_1190);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_1190);

});

bthread("crud:UserAvatar:linear:2", function () {
  // -> Creating UserAvatar
  let body_UserAvatar_1200 = { "id": 1, "name": "body_UserAvatar_1200_obj" };
  let id_UserAvatar_1200 = 1200 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_1200, id_UserAvatar_1200, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_1200);
  verifyUserAvatarExists(id_UserAvatar_1200);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_1200);
  verifyUserAvatarDoesNotExist(id_UserAvatar_1200);

});

bthread("crud:UserEmails:linear:2", function () {
  // -> Creating UserEmails
  let body_UserEmails_1210 = { "id": 1, "name": "body_UserEmails_1210_obj" };
  let id_UserEmails_1210 = 1210 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_1210, id_UserEmails_1210, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_1210);
  verifyUserEmailsExists(id_UserEmails_1210);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_1210);
  verifyUserEmailsDoesNotExist(id_UserEmails_1210);

});

bthread("crud:GPGKeys:linear:2", function () {
  // -> Creating GPGKeys
  let Form_GPGKeys_1220 = { "id": 1, "name": "Form_GPGKeys_1220_obj" };
  let id_GPGKeys_1220 = 1220 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_1220 = 1220 + Math.floor(Math.random() * 99);
  let page_GPGKeys_1220 = 1220 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_1220, id_GPGKeys_1220, limit_GPGKeys_1220, page_GPGKeys_1220, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_1220);
  verifyGPGKeysExists(id_GPGKeys_1220);
  // -> Deleting Leaf GPGKeys (Standard)
  userCurrentDeleteGPGKey(id_GPGKeys_1220);
  verifyGPGKeysDoesNotExist(id_GPGKeys_1220);

});

bthread("crud:GPGKeyVerification:linear:2", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_1230 = 1230 + Math.floor(Math.random() * 99);
  userVerifyGPGKey(id_GPGKeyVerification_1230, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1230);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1230);
});

bthread("crud:Keys:linear:2", function () {
  // -> Creating Keys
  let body_Keys_1240 = { "id": 1, "name": "body_Keys_1240_obj" };
  let fingerprint_Keys_1240 = "fingerprint_Keys_1240_" + Math.floor(Math.random()*1000);
  let id_Keys_1240 = 1240 + Math.floor(Math.random() * 99);
  let limit_Keys_1240 = 1240 + Math.floor(Math.random() * 99);
  let page_Keys_1240 = 1240 + Math.floor(Math.random() * 99);
  userCurrentPostKey(body_Keys_1240, fingerprint_Keys_1240, id_Keys_1240, limit_Keys_1240, page_Keys_1240, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_1240);
  verifyKeysExists(id_Keys_1240);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_1240);
  verifyKeysDoesNotExist(id_Keys_1240);

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
  let limit_UserStarred_1250 = 1250 + Math.floor(Math.random() * 99);
  let owner_UserStarred_1250 = "owner_UserStarred_1250";
  let page_UserStarred_1250 = 1250 + Math.floor(Math.random() * 99);
  let repo_UserStarred_1250 = "repo_UserStarred_1250_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1250, owner_UserStarred_1250, page_UserStarred_1250, repo_UserStarred_1250, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_1250);
  verifyUserStarredExists(owner_UserStarred_1250);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_1250, repo_UserStarred_1250);
  verifyUserStarredDoesNotExist(owner_UserStarred_1250);

});

bthread("crud:ActivityPub:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating ActivityPub
  let user_id_ActivityPub_1260 = UsersId;
  activitypubPersonInbox(user_id_ActivityPub_1260, { expectedResponseCodes: [200, 201, 204] });

  verifyActivityPubExists(user_id_ActivityPub_1260);
  verifyActivityPubExists(user_id_ActivityPub_1260);
});

bthread("crud:AdminCron:linear:3", function () {
  // -> Creating AdminCron
  let id_AdminCron_1270 = 1270 + Math.floor(Math.random() * 99);
  let limit_AdminCron_1270 = 1270 + Math.floor(Math.random() * 99);
  let page_AdminCron_1270 = 1270 + Math.floor(Math.random() * 99);
  let task_AdminCron_1270 = "task_AdminCron_1270_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_1270, limit_AdminCron_1270, page_AdminCron_1270, task_AdminCron_1270, { expectedResponseCodes: [200, 201, 204] });

  verifyAdminCronExists(id_AdminCron_1270);
  verifyAdminCronExists(id_AdminCron_1270);
});

bthread("crud:Hooks:linear:3", function () {
  // -> Creating Hooks
  let body_Hooks_1280 = { "id": 1, "name": "body_Hooks_1280_obj" };
  let id_Hooks_1280 = 1280 + Math.floor(Math.random() * 99);
  let limit_Hooks_1280 = 1280 + Math.floor(Math.random() * 99);
  let page_Hooks_1280 = 1280 + Math.floor(Math.random() * 99);
  userCreateHook(body_Hooks_1280, id_Hooks_1280, limit_Hooks_1280, page_Hooks_1280, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_1280);
  // -> Updating Hooks
  let body_Hooks_upd_1280 = { "id": 1, "name": "body_Hooks_upd_1280_obj" };
  let id_Hooks_upd_1280 = id_Hooks_1280;
  let limit_Hooks_upd_1280 = 1280 + Math.floor(Math.random() * 99);
  let page_Hooks_upd_1280 = 1280 + Math.floor(Math.random() * 99);
  userEditHook(body_Hooks_upd_1280, id_Hooks_upd_1280, limit_Hooks_upd_1280, page_Hooks_upd_1280, { expectedResponseCodes: [200, 201, 204] });

  verifyHooksExists(id_Hooks_1280);
  // -> Deleting Leaf Hooks (Standard)
  userDeleteHook(id_Hooks_1280);
  verifyHooksDoesNotExist(id_Hooks_1280);

});

bthread("crud:UnadoptedRepositories:linear:3", function () {
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_1290 = 1290 + Math.floor(Math.random() * 99);
  let owner_UnadoptedRepositories_1290 = "owner_UnadoptedRepositories_1290";
  let page_UnadoptedRepositories_1290 = 1290 + Math.floor(Math.random() * 99);
  let pattern_UnadoptedRepositories_1290 = "pattern_UnadoptedRepositories_1290_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_1290 = "repo_UnadoptedRepositories_1290_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_1290, owner_UnadoptedRepositories_1290, page_UnadoptedRepositories_1290, pattern_UnadoptedRepositories_1290, repo_UnadoptedRepositories_1290, { expectedResponseCodes: [200, 201, 204] });

  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_1290);
  verifyUnadoptedRepositoriesExists(owner_UnadoptedRepositories_1290);
  // -> Deleting Leaf UnadoptedRepositories (Standard)
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_1290, repo_UnadoptedRepositories_1290);
  verifyUnadoptedRepositoriesDoesNotExist(owner_UnadoptedRepositories_1290);

});

bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let CreateUserOption_Users_1300 = "CreateUserOption_Users_1300_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_1300 = "EditUserOption_Users_1300_" + Math.floor(Math.random()*1000);
  let body_Users_1300 = { "id": 1, "name": "body_Users_1300_obj" };
  let limit_Users_1300 = 1300 + Math.floor(Math.random() * 99);
  let page_Users_1300 = 1300 + Math.floor(Math.random() * 99);
  let purge_Users_1300 = true;
  let token_Users_1300 = "token_Users_1300_" + Math.floor(Math.random()*1000);
  let username_Users_1300 = "username_Users_1300";
  adminCreateUser(CreateUserOption_Users_1300, EditUserOption_Users_1300, body_Users_1300, limit_Users_1300, page_Users_1300, purge_Users_1300, token_Users_1300, username_Users_1300, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_1300);
  // -> Updating Users
  let CreateUserOption_Users_upd_1300 = "CreateUserOption_Users_upd_1300_" + Math.floor(Math.random()*1000);
  let EditUserOption_Users_upd_1300 = "EditUserOption_Users_upd_1300_" + Math.floor(Math.random()*1000);
  let body_Users_upd_1300 = { "id": 1, "name": "body_Users_upd_1300_obj" };
  let limit_Users_upd_1300 = 1300 + Math.floor(Math.random() * 99);
  let page_Users_upd_1300 = 1300 + Math.floor(Math.random() * 99);
  let purge_Users_upd_1300 = true;
  let token_Users_upd_1300 = "token_Users_upd_1300_" + Math.floor(Math.random()*1000);
  let username_Users_upd_1300 = username_Users_1300;
  adminEditUser(CreateUserOption_Users_upd_1300, EditUserOption_Users_upd_1300, body_Users_upd_1300, limit_Users_upd_1300, page_Users_upd_1300, purge_Users_upd_1300, token_Users_upd_1300, username_Users_upd_1300, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(username_Users_1300);
  // -> Deleting Parent Users (Relational Intent Race)
  adminDeleteUser(username_Users_1300);

});

bthread("crud:UserBadges:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_1310 = "UserBadgeOption_UserBadges_1310_" + Math.floor(Math.random()*1000);
  let body_UserBadges_1310 = { "id": 1, "name": "body_UserBadges_1310_obj" };
  let username_UserBadges_1310 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_1310, body_UserBadges_1310, username_UserBadges_1310, { expectedResponseCodes: [200, 201, 204] });

  verifyUserBadgesExists(username_UserBadges_1310);
  verifyUserBadgesExists(username_UserBadges_1310);
  // -> Deleting Leaf UserBadges (Standard)
  adminDeleteUserBadges(username_UserBadges_1310);
  verifyUserBadgesDoesNotExist(username_UserBadges_1310);

});

bthread("crud:UserKeys:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserKeys
  let key_UserKeys_1320 = "key_UserKeys_1320_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_1320 = "purge_UserKeys_1320_" + Math.floor(Math.random()*1000);
  let username_UserKeys_1320 = UsersId;
  adminCreatePublicKey(key_UserKeys_1320, purge_UserKeys_1320, username_UserKeys_1320, { expectedResponseCodes: [200, 201, 204] });

  verifyUserKeysExists(username_UserKeys_1320);
  verifyUserKeysExists(username_UserKeys_1320);
  // -> Deleting Leaf UserKeys (Standard)
  adminDeleteUser(username_UserKeys_1320);
  verifyUserKeysDoesNotExist(username_UserKeys_1320);

});

bthread("crud:UserOrganizations:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_1330 = 1330 + Math.floor(Math.random() * 99);
  let organization_UserOrganizations_1330 = "organization_UserOrganizations_1330_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_1330 = UsersId;
  adminCreateOrg(id_UserOrganizations_1330, organization_UserOrganizations_1330, username_UserOrganizations_1330, { expectedResponseCodes: [200, 201, 204] });

  verifyUserOrganizationsExists(id_UserOrganizations_1330);
  verifyUserOrganizationsExists(id_UserOrganizations_1330);
});

bthread("crud:UserRename:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_1340 = "body_UserRename_1340_" + Math.floor(Math.random()*1000);
  let id_UserRename_1340 = 1340 + Math.floor(Math.random() * 99);
  let username_UserRename_1340 = UsersId;
  adminRenameUser(body_UserRename_1340, id_UserRename_1340, username_UserRename_1340, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRenameExists(id_UserRename_1340);
  verifyUserRenameExists(id_UserRename_1340);
});

bthread("crud:UserRepositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_1350 = 1350 + Math.floor(Math.random() * 99);
  let repository_UserRepositories_1350 = "repository_UserRepositories_1350_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_1350 = UsersId;
  adminCreateRepo(id_UserRepositories_1350, repository_UserRepositories_1350, username_UserRepositories_1350, { expectedResponseCodes: [200, 201, 204] });

  verifyUserRepositoriesExists(id_UserRepositories_1350);
  verifyUserRepositoriesExists(id_UserRepositories_1350);
});

bthread("crud:Markdown:linear:3", function () {
  // -> Creating Markdown
  let body_Markdown_1360 = "body_Markdown_1360_" + Math.floor(Math.random()*1000);
  let id_Markdown_1360 = 1360 + Math.floor(Math.random() * 99);
  renderMarkdown(body_Markdown_1360, id_Markdown_1360, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkdownExists(id_Markdown_1360);
  verifyMarkdownExists(id_Markdown_1360);
});

bthread("crud:Markup:linear:3", function () {
  // -> Creating Markup
  let body_Markup_1370 = { "id": 1, "name": "body_Markup_1370_obj" };
  let id_Markup_1370 = 1370 + Math.floor(Math.random() * 99);
  renderMarkup(body_Markup_1370, id_Markup_1370, { expectedResponseCodes: [200, 201, 204] });

  verifyMarkupExists(id_Markup_1370);
  verifyMarkupExists(id_Markup_1370);
});

bthread("crud:Organization:linear:3", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating Organization
  let body_Organization_1380 = { "id": 1, "name": "body_Organization_1380_obj" };
  let limit_Organization_1380 = 1380 + Math.floor(Math.random() * 99);
  let org_Organization_1380 = "org_Organization_1380";
  let page_Organization_1380 = 1380 + Math.floor(Math.random() * 99);
  let secretname_Organization_1380 = "secretname_Organization_1380_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_1380, limit_Organization_1380, org_Organization_1380, page_Organization_1380, secretname_Organization_1380, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_1380);
  // -> Updating Organization
  let body_Organization_upd_1380 = { "id": 1, "name": "body_Organization_upd_1380_obj" };
  let limit_Organization_upd_1380 = 1380 + Math.floor(Math.random() * 99);
  let org_Organization_upd_1380 = org_Organization_1380;
  let page_Organization_upd_1380 = 1380 + Math.floor(Math.random() * 99);
  let secretname_Organization_upd_1380 = "secretname_Organization_upd_1380_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_1380, limit_Organization_upd_1380, org_Organization_upd_1380, page_Organization_upd_1380, secretname_Organization_upd_1380, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationExists(org_Organization_1380);
  // -> Deleting Leaf Organization (Standard)
  orgDelete(org_Organization_1380);
  verifyOrganizationDoesNotExist(org_Organization_1380);

});

bthread("crud:OrgVariables:linear:3", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrgVariables
  let body_OrgVariables_1390 = "body_OrgVariables_1390_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_1390 = "org_OrgVariables_1390";
  let variablename_OrgVariables_1390 = "variablename_OrgVariables_1390_" + Math.floor(Math.random()*1000);
  createOrgVariable(body_OrgVariables_1390, org_OrgVariables_1390, variablename_OrgVariables_1390, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_1390);
  // -> Updating OrgVariables
  let body_OrgVariables_upd_1390 = "body_OrgVariables_upd_1390_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_upd_1390 = org_OrgVariables_1390;
  let variablename_OrgVariables_upd_1390 = "variablename_OrgVariables_upd_1390_" + Math.floor(Math.random()*1000);
  orgEdit(body_OrgVariables_upd_1390, org_OrgVariables_upd_1390, variablename_OrgVariables_upd_1390, { expectedResponseCodes: [200, 201, 204] });

  verifyOrgVariablesExists(org_OrgVariables_1390);
  // -> Deleting Leaf OrgVariables (Standard)
  orgDelete(org_OrgVariables_1390);
  verifyOrgVariablesDoesNotExist(org_OrgVariables_1390);

});

bthread("crud:Avatar:linear:3", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating Avatar
  let body_Avatar_1400 = { "id": 1, "name": "body_Avatar_1400_obj" };
  let org_Avatar_1400 = "org_Avatar_1400";
  orgUpdateAvatar(body_Avatar_1400, org_Avatar_1400, { expectedResponseCodes: [200, 201, 204] });

  verifyAvatarExists(org_Avatar_1400);
  verifyAvatarExists(org_Avatar_1400);
  // -> Deleting Leaf Avatar (Standard)
  orgDeleteAvatar(org_Avatar_1400);
  verifyAvatarDoesNotExist(org_Avatar_1400);

});

bthread("crud:Labels:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Labels
  let body_Labels_1410 = { "id": 1, "name": "body_Labels_1410_obj" };
  let id_Labels_1410 = RepositoriesId;
  let limit_Labels_1410 = 1410 + Math.floor(Math.random() * 99);
  let owner_Labels_1410 = "owner_Labels_1410_" + Math.floor(Math.random()*1000);
  let page_Labels_1410 = 1410 + Math.floor(Math.random() * 99);
  let repo_Labels_1410 = "repo_Labels_1410_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_1410, id_Labels_1410, limit_Labels_1410, owner_Labels_1410, page_Labels_1410, repo_Labels_1410, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_1410);
  // -> Updating Labels
  let body_Labels_upd_1410 = { "id": 1, "name": "body_Labels_upd_1410_obj" };
  let id_Labels_upd_1410 = id_Labels_1410;
  let limit_Labels_upd_1410 = 1410 + Math.floor(Math.random() * 99);
  let owner_Labels_upd_1410 = "owner_Labels_upd_1410_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_1410 = 1410 + Math.floor(Math.random() * 99);
  let repo_Labels_upd_1410 = "repo_Labels_upd_1410_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_1410, id_Labels_upd_1410, limit_Labels_upd_1410, owner_Labels_upd_1410, page_Labels_upd_1410, repo_Labels_upd_1410, { expectedResponseCodes: [200, 201, 204] });

  verifyLabelsExists(id_Labels_1410);
  // -> Deleting Leaf Labels (Standard)
  issueDeleteLabel(owner_Labels_1410, repo_Labels_1410, id_Labels_1410);
  verifyLabelsDoesNotExist(id_Labels_1410);

});

bthread("crud:OrganizationRepos:linear:3", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_1420 = { "id": 1, "name": "body_OrganizationRepos_1420_obj" };
  let id_OrganizationRepos_1420 = 1420 + Math.floor(Math.random() * 99);
  let limit_OrganizationRepos_1420 = 1420 + Math.floor(Math.random() * 99);
  let org_OrganizationRepos_1420 = "org_OrganizationRepos_1420_" + Math.floor(Math.random()*1000);
  let page_OrganizationRepos_1420 = 1420 + Math.floor(Math.random() * 99);
  createOrgRepo(body_OrganizationRepos_1420, id_OrganizationRepos_1420, limit_OrganizationRepos_1420, org_OrganizationRepos_1420, page_OrganizationRepos_1420, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationReposExists(id_OrganizationRepos_1420);
  verifyOrganizationReposExists(id_OrganizationRepos_1420);
});

bthread("crud:OrganizationTeams:linear:3", function () {
  let deps = {};
  deps["Organizations"] = matchAnyOrganizationsAdded();
  let pkMap = {"Organizations": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationsId = captured["Organizations"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_1430 = { "id": 1, "name": "body_OrganizationTeams_1430_obj" };
  let id_OrganizationTeams_1430 = 1430 + Math.floor(Math.random() * 99);
  let limit_OrganizationTeams_1430 = 1430 + Math.floor(Math.random() * 99);
  let org_OrganizationTeams_1430 = "org_OrganizationTeams_1430_" + Math.floor(Math.random()*1000);
  let page_OrganizationTeams_1430 = 1430 + Math.floor(Math.random() * 99);
  orgCreateTeam(body_OrganizationTeams_1430, id_OrganizationTeams_1430, limit_OrganizationTeams_1430, org_OrganizationTeams_1430, page_OrganizationTeams_1430, { expectedResponseCodes: [200, 201, 204] });

  verifyOrganizationTeamsExists(id_OrganizationTeams_1430);
  verifyOrganizationTeamsExists(id_OrganizationTeams_1430);
});

bthread("crud:Issues:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issues
  let content_Issues_1440 = { "id": 1, "name": "content_Issues_1440_obj" };
  let id_Issues_1440 = RepositoriesId;
  let index_Issues_1440 = 1440 + Math.floor(Math.random() * 99);
  let limit_Issues_1440 = 1440 + Math.floor(Math.random() * 99);
  let owner_Issues_1440 = "owner_Issues_1440_" + Math.floor(Math.random()*1000);
  let page_Issues_1440 = 1440 + Math.floor(Math.random() * 99);
  let position_Issues_1440 = 1440 + Math.floor(Math.random() * 99);
  let repo_Issues_1440 = "repo_Issues_1440_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_1440, id_Issues_1440, index_Issues_1440, limit_Issues_1440, owner_Issues_1440, page_Issues_1440, position_Issues_1440, repo_Issues_1440, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_1440);
  // -> Updating Issues
  let content_Issues_upd_1440 = { "id": 1, "name": "content_Issues_upd_1440_obj" };
  let id_Issues_upd_1440 = id_Issues_1440;
  let index_Issues_upd_1440 = 1440 + Math.floor(Math.random() * 99);
  let limit_Issues_upd_1440 = 1440 + Math.floor(Math.random() * 99);
  let owner_Issues_upd_1440 = "owner_Issues_upd_1440_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_1440 = 1440 + Math.floor(Math.random() * 99);
  let position_Issues_upd_1440 = 1440 + Math.floor(Math.random() * 99);
  let repo_Issues_upd_1440 = "repo_Issues_upd_1440_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_1440, id_Issues_upd_1440, index_Issues_upd_1440, limit_Issues_upd_1440, owner_Issues_upd_1440, page_Issues_upd_1440, position_Issues_upd_1440, repo_Issues_upd_1440, { expectedResponseCodes: [200, 201, 204] });

  verifyIssuesExists(id_Issues_1440);
  // -> Deleting Parent Issues (Relational Intent Race)
  issueDeleteTime(owner_Issues_1440, repo_Issues_1440, index_Issues_1440, id_Issues_1440);

});

bthread("crud:Repository:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Repository
  let body_Repository_1450 = { "id": 1, "name": "body_Repository_1450_obj" };
  let id_Repository_1450 = RepositoriesId;
  let limit_Repository_1450 = 1450 + Math.floor(Math.random() * 99);
  let owner_Repository_1450 = "owner_Repository_1450_" + Math.floor(Math.random()*1000);
  let page_Repository_1450 = 1450 + Math.floor(Math.random() * 99);
  let repo_Repository_1450 = "repo_Repository_1450_" + Math.floor(Math.random()*1000);
  let sha_Repository_1450 = "sha_Repository_1450_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_1450, id_Repository_1450, limit_Repository_1450, owner_Repository_1450, page_Repository_1450, repo_Repository_1450, sha_Repository_1450, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_1450);
  // -> Updating Repository
  let body_Repository_upd_1450 = { "id": 1, "name": "body_Repository_upd_1450_obj" };
  let id_Repository_upd_1450 = id_Repository_1450;
  let limit_Repository_upd_1450 = 1450 + Math.floor(Math.random() * 99);
  let owner_Repository_upd_1450 = "owner_Repository_upd_1450_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_1450 = 1450 + Math.floor(Math.random() * 99);
  let repo_Repository_upd_1450 = "repo_Repository_upd_1450_" + Math.floor(Math.random()*1000);
  let sha_Repository_upd_1450 = "sha_Repository_upd_1450_" + Math.floor(Math.random()*1000);
  userCurrentPutSubscription(body_Repository_upd_1450, id_Repository_upd_1450, limit_Repository_upd_1450, owner_Repository_upd_1450, page_Repository_upd_1450, repo_Repository_upd_1450, sha_Repository_upd_1450, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryExists(id_Repository_1450);
  // -> Deleting Leaf Repository (Standard)
  userCurrentDeleteSubscription(owner_Repository_1450, repo_Repository_1450);
  verifyRepositoryDoesNotExist(id_Repository_1450);

});

bthread("crud:Variables:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_1460 = "CreateVariableOption_Variables_1460_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_1460 = "2025-01-25T12:00:00Z";
  let body_Variables_1460 = { "id": 1, "name": "body_Variables_1460_obj" };
  let id_Variables_1460 = RepositoriesId;
  let limit_Variables_1460 = 1460 + Math.floor(Math.random() * 99);
  let owner_Variables_1460 = "owner_Variables_1460_" + Math.floor(Math.random()*1000);
  let page_Variables_1460 = 1460 + Math.floor(Math.random() * 99);
  let repo_Variables_1460 = "repo_Variables_1460_" + Math.floor(Math.random()*1000);
  let variablename_Variables_1460 = "variablename_Variables_1460_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_1460, UpdateVariableOption_Variables_1460, body_Variables_1460, id_Variables_1460, limit_Variables_1460, owner_Variables_1460, page_Variables_1460, repo_Variables_1460, variablename_Variables_1460, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_1460);
  // -> Updating Variables
  let CreateVariableOption_Variables_upd_1460 = "CreateVariableOption_Variables_upd_1460_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_1460 = "2025-01-25T12:00:00Z";
  let body_Variables_upd_1460 = { "id": 1, "name": "body_Variables_upd_1460_obj" };
  let id_Variables_upd_1460 = id_Variables_1460;
  let limit_Variables_upd_1460 = 1460 + Math.floor(Math.random() * 99);
  let owner_Variables_upd_1460 = "owner_Variables_upd_1460_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_1460 = 1460 + Math.floor(Math.random() * 99);
  let repo_Variables_upd_1460 = "repo_Variables_upd_1460_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_1460 = "variablename_Variables_upd_1460_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_1460, UpdateVariableOption_Variables_upd_1460, body_Variables_upd_1460, id_Variables_upd_1460, limit_Variables_upd_1460, owner_Variables_upd_1460, page_Variables_upd_1460, repo_Variables_upd_1460, variablename_Variables_upd_1460, { expectedResponseCodes: [200, 201, 204] });

  verifyVariablesExists(id_Variables_1460);
  // -> Deleting Leaf Variables (Standard)
  deleteRepoVariable(owner_Variables_1460, repo_Variables_1460, variablename_Variables_1460);
  verifyVariablesDoesNotExist(id_Variables_1460);

});

bthread("crud:Branches:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_1470 = "CreateBranchRepoOption_Branches_1470_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_1470 = "2025-01-25T12:00:00Z";
  let body_Branches_1470 = { "id": 1, "name": "body_Branches_1470_obj" };
  let branch_Branches_1470 = "branch_Branches_1470_" + Math.floor(Math.random()*1000);
  let id_Branches_1470 = RepositoriesId;
  let limit_Branches_1470 = 1470 + Math.floor(Math.random() * 99);
  let owner_Branches_1470 = "owner_Branches_1470_" + Math.floor(Math.random()*1000);
  let page_Branches_1470 = 1470 + Math.floor(Math.random() * 99);
  let repo_Branches_1470 = "repo_Branches_1470_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_1470, UpdateBranchRepoOption_Branches_1470, body_Branches_1470, branch_Branches_1470, id_Branches_1470, limit_Branches_1470, owner_Branches_1470, page_Branches_1470, repo_Branches_1470, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_1470);
  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_1470 = "CreateBranchRepoOption_Branches_upd_1470_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_1470 = "2025-01-25T12:00:00Z";
  let body_Branches_upd_1470 = { "id": 1, "name": "body_Branches_upd_1470_obj" };
  let branch_Branches_upd_1470 = "branch_Branches_upd_1470_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_1470 = id_Branches_1470;
  let limit_Branches_upd_1470 = 1470 + Math.floor(Math.random() * 99);
  let owner_Branches_upd_1470 = "owner_Branches_upd_1470_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_1470 = 1470 + Math.floor(Math.random() * 99);
  let repo_Branches_upd_1470 = "repo_Branches_upd_1470_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_1470, UpdateBranchRepoOption_Branches_upd_1470, body_Branches_upd_1470, branch_Branches_upd_1470, id_Branches_upd_1470, limit_Branches_upd_1470, owner_Branches_upd_1470, page_Branches_upd_1470, repo_Branches_upd_1470, { expectedResponseCodes: [200, 201, 204] });

  verifyBranchesExists(id_Branches_1470);
  // -> Deleting Leaf Branches (Standard)
  repoDeleteBranch(owner_Branches_1470, repo_Branches_1470, branch_Branches_1470);
  verifyBranchesDoesNotExist(id_Branches_1470);

});

bthread("crud:Collaborators:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_1480 = "AddCollaboratorOption_Collaborators_1480_" + Math.floor(Math.random()*1000);
  let body_Collaborators_1480 = { "id": 1, "name": "body_Collaborators_1480_obj" };
  let collaborator_Collaborators_1480 = "collaborator_Collaborators_1480_" + Math.floor(Math.random()*1000);
  let id_Collaborators_1480 = RepositoriesId;
  let limit_Collaborators_1480 = 1480 + Math.floor(Math.random() * 99);
  let owner_Collaborators_1480 = "owner_Collaborators_1480_" + Math.floor(Math.random()*1000);
  let page_Collaborators_1480 = 1480 + Math.floor(Math.random() * 99);
  let repo_Collaborators_1480 = "repo_Collaborators_1480_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_1480, body_Collaborators_1480, collaborator_Collaborators_1480, id_Collaborators_1480, limit_Collaborators_1480, owner_Collaborators_1480, page_Collaborators_1480, repo_Collaborators_1480, { expectedResponseCodes: [200, 201, 204] });

  verifyCollaboratorsExists(id_Collaborators_1480);
  verifyCollaboratorsExists(id_Collaborators_1480);
  // -> Deleting Leaf Collaborators (Standard)
  repoDeleteCollaborator(owner_Collaborators_1480, repo_Collaborators_1480, collaborator_Collaborators_1480);
  verifyCollaboratorsDoesNotExist(id_Collaborators_1480);

});

bthread("crud:Repositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repositories
  let body_Repositories_1490 = { "id": 1, "name": "body_Repositories_1490_obj" };
  let filepath_Repositories_1490 = "filepath_Repositories_1490_" + Math.floor(Math.random()*1000);
  let id_Repositories_1490 = 1490 + Math.floor(Math.random() * 99);
  let limit_Repositories_1490 = 1490 + Math.floor(Math.random() * 99);
  let owner_Repositories_1490 = "owner_Repositories_1490_" + Math.floor(Math.random()*1000);
  let page_Repositories_1490 = 1490 + Math.floor(Math.random() * 99);
  let repo_Repositories_1490 = "repo_Repositories_1490_" + Math.floor(Math.random()*1000);
  let username_Repositories_1490 = UsersId;
  createCurrentUserRepo(body_Repositories_1490, filepath_Repositories_1490, id_Repositories_1490, limit_Repositories_1490, owner_Repositories_1490, page_Repositories_1490, repo_Repositories_1490, username_Repositories_1490, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_1490);
  // -> Updating Repositories
  let body_Repositories_upd_1490 = { "id": 1, "name": "body_Repositories_upd_1490_obj" };
  let filepath_Repositories_upd_1490 = "filepath_Repositories_upd_1490_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_1490 = id_Repositories_1490;
  let limit_Repositories_upd_1490 = 1490 + Math.floor(Math.random() * 99);
  let owner_Repositories_upd_1490 = "owner_Repositories_upd_1490_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_1490 = 1490 + Math.floor(Math.random() * 99);
  let repo_Repositories_upd_1490 = "repo_Repositories_upd_1490_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_1490 = "username_Repositories_upd_1490";
  repoUpdateFile(body_Repositories_upd_1490, filepath_Repositories_upd_1490, id_Repositories_upd_1490, limit_Repositories_upd_1490, owner_Repositories_upd_1490, page_Repositories_upd_1490, repo_Repositories_upd_1490, username_Repositories_upd_1490, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoriesExists(id_Repositories_1490);
  // -> Deleting Parent Repositories (Relational Intent Race)
  repoDeleteFile(owner_Repositories_1490, repo_Repositories_1490, filepath_Repositories_1490);

});

bthread("crud:Forks:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Forks
  let body_Forks_1500 = { "id": 1, "name": "body_Forks_1500_obj" };
  let id_Forks_1500 = RepositoriesId;
  let limit_Forks_1500 = 1500 + Math.floor(Math.random() * 99);
  let owner_Forks_1500 = "owner_Forks_1500_" + Math.floor(Math.random()*1000);
  let page_Forks_1500 = 1500 + Math.floor(Math.random() * 99);
  let repo_Forks_1500 = "repo_Forks_1500_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_1500, id_Forks_1500, limit_Forks_1500, owner_Forks_1500, page_Forks_1500, repo_Forks_1500, { expectedResponseCodes: [200, 201, 204] });

  verifyForksExists(id_Forks_1500);
  verifyForksExists(id_Forks_1500);
});

bthread("crud:Issue:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Issue
  let body_Issue_1510 = { "id": 1, "name": "body_Issue_1510_obj" };
  let id_Issue_1510 = RepositoriesId;
  let limit_Issue_1510 = 1510 + Math.floor(Math.random() * 99);
  let name_Issue_1510 = "name_Issue_1510_" + Math.floor(Math.random()*1000);
  let owner_Issue_1510 = "owner_Issue_1510_" + Math.floor(Math.random()*1000);
  let page_Issue_1510 = 1510 + Math.floor(Math.random() * 99);
  let repo_Issue_1510 = "repo_Issue_1510_" + Math.floor(Math.random()*1000);
  let state_Issue_1510 = "state_Issue_1510_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_1510, id_Issue_1510, limit_Issue_1510, name_Issue_1510, owner_Issue_1510, page_Issue_1510, repo_Issue_1510, state_Issue_1510, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueExists(id_Issue_1510);
  verifyIssueExists(id_Issue_1510);
});

bthread("crud:IssueComments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_1520 = "before_IssueComments_1520_" + Math.floor(Math.random()*1000);
  let body_IssueComments_1520 = { "id": 1, "name": "body_IssueComments_1520_obj" };
  let id_IssueComments_1520 = IssuesId;
  let index_IssueComments_1520 = 1520 + Math.floor(Math.random() * 99);
  let owner_IssueComments_1520 = "owner_IssueComments_1520_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_1520 = "repo_IssueComments_1520_" + Math.floor(Math.random()*1000);
  let since_IssueComments_1520 = "since_IssueComments_1520_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_1520, body_IssueComments_1520, id_IssueComments_1520, index_IssueComments_1520, owner_IssueComments_1520, repo_IssueComments_1520, since_IssueComments_1520, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_1520);
  // -> Updating IssueComments
  let before_IssueComments_upd_1520 = "before_IssueComments_upd_1520_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_1520 = { "id": 1, "name": "body_IssueComments_upd_1520_obj" };
  let id_IssueComments_upd_1520 = id_IssueComments_1520;
  let index_IssueComments_upd_1520 = 1520 + Math.floor(Math.random() * 99);
  let owner_IssueComments_upd_1520 = "owner_IssueComments_upd_1520_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_1520 = "repo_IssueComments_upd_1520_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_1520 = "since_IssueComments_upd_1520_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_1520, body_IssueComments_upd_1520, id_IssueComments_upd_1520, index_IssueComments_upd_1520, owner_IssueComments_upd_1520, repo_IssueComments_upd_1520, since_IssueComments_upd_1520, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentsExists(id_IssueComments_1520);
  // -> Deleting Parent IssueComments (Relational Intent Race)
  issueDeleteCommentDeprecated(owner_IssueComments_1520, repo_IssueComments_1520, index_IssueComments_1520, id_IssueComments_1520);

});

bthread("crud:IssueCommentAttachments:linear:3", function () {
  let deps = {};
  deps["IssueComments"] = matchAnyIssueCommentsAdded();
  let pkMap = {"IssueComments": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssueCommentsId = captured["IssueComments"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_1530 = "attachment_IssueCommentAttachments_1530_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_1530 = 1530 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_1530 = { "id": 1, "name": "body_IssueCommentAttachments_1530_obj" };
  let id_IssueCommentAttachments_1530 = IssueCommentsId;
  let name_IssueCommentAttachments_1530 = "name_IssueCommentAttachments_1530_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_1530 = "owner_IssueCommentAttachments_1530_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_1530 = "repo_IssueCommentAttachments_1530_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_1530, attachment_id_IssueCommentAttachments_1530, body_IssueCommentAttachments_1530, id_IssueCommentAttachments_1530, name_IssueCommentAttachments_1530, owner_IssueCommentAttachments_1530, repo_IssueCommentAttachments_1530, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_1530);
  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_1530 = "attachment_IssueCommentAttachments_upd_1530_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_1530 = 1530 + Math.floor(Math.random() * 99);
  let body_IssueCommentAttachments_upd_1530 = { "id": 1, "name": "body_IssueCommentAttachments_upd_1530_obj" };
  let id_IssueCommentAttachments_upd_1530 = id_IssueCommentAttachments_1530;
  let name_IssueCommentAttachments_upd_1530 = "name_IssueCommentAttachments_upd_1530_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_1530 = "owner_IssueCommentAttachments_upd_1530_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_1530 = "repo_IssueCommentAttachments_upd_1530_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_1530, attachment_id_IssueCommentAttachments_upd_1530, body_IssueCommentAttachments_upd_1530, id_IssueCommentAttachments_upd_1530, name_IssueCommentAttachments_upd_1530, owner_IssueCommentAttachments_upd_1530, repo_IssueCommentAttachments_upd_1530, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentAttachmentsExists(id_IssueCommentAttachments_1530);
  // -> Deleting Leaf IssueCommentAttachments (Standard)
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_1530, repo_IssueCommentAttachments_1530, id_IssueCommentAttachments_1530, attachment_id_IssueCommentAttachments_1530);
  verifyIssueCommentAttachmentsDoesNotExist(id_IssueCommentAttachments_1530);

});

bthread("crud:IssueCommentReactions:linear:3", function () {
  let deps = {};
  deps["IssueComments"] = matchAnyIssueCommentsAdded();
  let pkMap = {"IssueComments": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssueCommentsId = captured["IssueComments"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_1540 = { "id": 1, "name": "content_IssueCommentReactions_1540_obj" };
  let id_IssueCommentReactions_1540 = IssueCommentsId;
  let owner_IssueCommentReactions_1540 = "owner_IssueCommentReactions_1540";
  let repo_IssueCommentReactions_1540 = "repo_IssueCommentReactions_1540_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_1540, id_IssueCommentReactions_1540, owner_IssueCommentReactions_1540, repo_IssueCommentReactions_1540, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_1540);
  verifyIssueCommentReactionsExists(owner_IssueCommentReactions_1540);
  // -> Deleting Leaf IssueCommentReactions (Standard)
  issueDeleteCommentReaction(owner_IssueCommentReactions_1540, repo_IssueCommentReactions_1540, id_IssueCommentReactions_1540);
  verifyIssueCommentReactionsDoesNotExist(owner_IssueCommentReactions_1540);

});

bthread("crud:IssueAttachments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_1550 = "attachment_IssueAttachments_1550_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_1550 = 1550 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_1550 = { "id": 1, "name": "body_IssueAttachments_1550_obj" };
  let id_IssueAttachments_1550 = IssuesId;
  let index_IssueAttachments_1550 = 1550 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_1550 = "name_IssueAttachments_1550_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_1550 = "owner_IssueAttachments_1550_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_1550 = "repo_IssueAttachments_1550_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_1550, attachment_id_IssueAttachments_1550, body_IssueAttachments_1550, id_IssueAttachments_1550, index_IssueAttachments_1550, name_IssueAttachments_1550, owner_IssueAttachments_1550, repo_IssueAttachments_1550, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_1550);
  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_1550 = "attachment_IssueAttachments_upd_1550_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_1550 = 1550 + Math.floor(Math.random() * 99);
  let body_IssueAttachments_upd_1550 = { "id": 1, "name": "body_IssueAttachments_upd_1550_obj" };
  let id_IssueAttachments_upd_1550 = id_IssueAttachments_1550;
  let index_IssueAttachments_upd_1550 = 1550 + Math.floor(Math.random() * 99);
  let name_IssueAttachments_upd_1550 = "name_IssueAttachments_upd_1550_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_1550 = "owner_IssueAttachments_upd_1550_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_1550 = "repo_IssueAttachments_upd_1550_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_1550, attachment_id_IssueAttachments_upd_1550, body_IssueAttachments_upd_1550, id_IssueAttachments_upd_1550, index_IssueAttachments_upd_1550, name_IssueAttachments_upd_1550, owner_IssueAttachments_upd_1550, repo_IssueAttachments_upd_1550, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueAttachmentsExists(id_IssueAttachments_1550);
  // -> Deleting Leaf IssueAttachments (Standard)
  issueDeleteIssueAttachment(owner_IssueAttachments_1550, repo_IssueAttachments_1550, index_IssueAttachments_1550, attachment_id_IssueAttachments_1550);
  verifyIssueAttachmentsDoesNotExist(id_IssueAttachments_1550);

});

bthread("crud:IssueBlocks:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_1560 = { "id": 1, "name": "body_IssueBlocks_1560_obj" };
  let index_IssueBlocks_1560 = "index_IssueBlocks_1560_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_1560 = 1560 + Math.floor(Math.random() * 99);
  let owner_IssueBlocks_1560 = "owner_IssueBlocks_1560";
  let page_IssueBlocks_1560 = 1560 + Math.floor(Math.random() * 99);
  let repo_IssueBlocks_1560 = "repo_IssueBlocks_1560_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_1560, index_IssueBlocks_1560, limit_IssueBlocks_1560, owner_IssueBlocks_1560, page_IssueBlocks_1560, repo_IssueBlocks_1560, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueBlocksExists(owner_IssueBlocks_1560);
  verifyIssueBlocksExists(owner_IssueBlocks_1560);
  // -> Deleting Leaf IssueBlocks (Standard)
  issueRemoveIssueBlocking(owner_IssueBlocks_1560, repo_IssueBlocks_1560, index_IssueBlocks_1560);
  verifyIssueBlocksDoesNotExist(owner_IssueBlocks_1560);

});

bthread("crud:IssueSubscriptions:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_1570 = IssuesId;
  let index_IssueSubscriptions_1570 = 1570 + Math.floor(Math.random() * 99);
  let limit_IssueSubscriptions_1570 = 1570 + Math.floor(Math.random() * 99);
  let owner_IssueSubscriptions_1570 = "owner_IssueSubscriptions_1570_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_1570 = 1570 + Math.floor(Math.random() * 99);
  let repo_IssueSubscriptions_1570 = "repo_IssueSubscriptions_1570_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_1570 = "user_IssueSubscriptions_1570_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_1570, index_IssueSubscriptions_1570, limit_IssueSubscriptions_1570, owner_IssueSubscriptions_1570, page_IssueSubscriptions_1570, repo_IssueSubscriptions_1570, user_IssueSubscriptions_1570, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueSubscriptionsExists(id_IssueSubscriptions_1570);
  verifyIssueSubscriptionsExists(id_IssueSubscriptions_1570);
  // -> Deleting Leaf IssueSubscriptions (Standard)
  issueDeleteSubscription(owner_IssueSubscriptions_1570, repo_IssueSubscriptions_1570, index_IssueSubscriptions_1570, user_IssueSubscriptions_1570);
  verifyIssueSubscriptionsDoesNotExist(id_IssueSubscriptions_1570);

});

bthread("crud:IssueTimes:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_1580 = "before_IssueTimes_1580_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_1580 = { "id": 1, "name": "body_IssueTimes_1580_obj" };
  let index_IssueTimes_1580 = 1580 + Math.floor(Math.random() * 99);
  let limit_IssueTimes_1580 = 1580 + Math.floor(Math.random() * 99);
  let owner_IssueTimes_1580 = "owner_IssueTimes_1580";
  let page_IssueTimes_1580 = 1580 + Math.floor(Math.random() * 99);
  let repo_IssueTimes_1580 = "repo_IssueTimes_1580_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_1580 = "since_IssueTimes_1580_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_1580 = "user_IssueTimes_1580_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_1580, body_IssueTimes_1580, index_IssueTimes_1580, limit_IssueTimes_1580, owner_IssueTimes_1580, page_IssueTimes_1580, repo_IssueTimes_1580, since_IssueTimes_1580, user_IssueTimes_1580, { expectedResponseCodes: [200, 201, 204] });

  verifyIssueTimesExists(owner_IssueTimes_1580);
  verifyIssueTimesExists(owner_IssueTimes_1580);
  // -> Deleting Leaf IssueTimes (Standard)
  issueResetTime(owner_IssueTimes_1580, repo_IssueTimes_1580, index_IssueTimes_1580);
  verifyIssueTimesDoesNotExist(owner_IssueTimes_1580);

});

bthread("crud:RepositoryKeys:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_1590 = { "id": 1, "name": "body_RepositoryKeys_1590_obj" };
  let fingerprint_RepositoryKeys_1590 = "fingerprint_RepositoryKeys_1590_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_1590 = RepositoriesId;
  let key_id_RepositoryKeys_1590 = 1590 + Math.floor(Math.random() * 99);
  let limit_RepositoryKeys_1590 = 1590 + Math.floor(Math.random() * 99);
  let owner_RepositoryKeys_1590 = "owner_RepositoryKeys_1590_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_1590 = 1590 + Math.floor(Math.random() * 99);
  let repo_RepositoryKeys_1590 = "repo_RepositoryKeys_1590_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_1590, fingerprint_RepositoryKeys_1590, id_RepositoryKeys_1590, key_id_RepositoryKeys_1590, limit_RepositoryKeys_1590, owner_RepositoryKeys_1590, page_RepositoryKeys_1590, repo_RepositoryKeys_1590, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryKeysExists(id_RepositoryKeys_1590);
  verifyRepositoryKeysExists(id_RepositoryKeys_1590);
  // -> Deleting Leaf RepositoryKeys (Standard)
  repoDeleteKey(owner_RepositoryKeys_1590, repo_RepositoryKeys_1590, id_RepositoryKeys_1590);
  verifyRepositoryKeysDoesNotExist(id_RepositoryKeys_1590);

});

bthread("crud:MirrorSync:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating MirrorSync
  let id_MirrorSync_1600 = RepositoriesId;
  let owner_MirrorSync_1600 = "owner_MirrorSync_1600_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_1600 = "repo_MirrorSync_1600_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_1600, owner_MirrorSync_1600, repo_MirrorSync_1600, { expectedResponseCodes: [200, 201, 204] });

  verifyMirrorSyncExists(id_MirrorSync_1600);
  verifyMirrorSyncExists(id_MirrorSync_1600);
});

bthread("crud:PullRequests:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PullRequests
  let body_PullRequests_1610 = { "id": 1, "name": "body_PullRequests_1610_obj" };
  let id_PullRequests_1610 = RepositoriesId;
  let index_PullRequests_1610 = 1610 + Math.floor(Math.random() * 99);
  let limit_PullRequests_1610 = 1610 + Math.floor(Math.random() * 99);
  let owner_PullRequests_1610 = "owner_PullRequests_1610_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1610 = 1610 + Math.floor(Math.random() * 99);
  let repo_PullRequests_1610 = "repo_PullRequests_1610_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1610 = "skip_to_PullRequests_1610_" + Math.floor(Math.random()*1000);
  let style_PullRequests_1610 = "style_PullRequests_1610_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1610 = "whitespace_PullRequests_1610_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_1610, id_PullRequests_1610, index_PullRequests_1610, limit_PullRequests_1610, owner_PullRequests_1610, page_PullRequests_1610, repo_PullRequests_1610, skip_to_PullRequests_1610, style_PullRequests_1610, whitespace_PullRequests_1610, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1610);
  // -> Updating PullRequests
  let body_PullRequests_upd_1610 = { "id": 1, "name": "body_PullRequests_upd_1610_obj" };
  let id_PullRequests_upd_1610 = id_PullRequests_1610;
  let index_PullRequests_upd_1610 = 1610 + Math.floor(Math.random() * 99);
  let limit_PullRequests_upd_1610 = 1610 + Math.floor(Math.random() * 99);
  let owner_PullRequests_upd_1610 = "owner_PullRequests_upd_1610_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1610 = 1610 + Math.floor(Math.random() * 99);
  let repo_PullRequests_upd_1610 = "repo_PullRequests_upd_1610_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1610 = "skip_to_PullRequests_upd_1610_" + Math.floor(Math.random()*1000);
  let style_PullRequests_upd_1610 = "style_PullRequests_upd_1610_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1610 = "whitespace_PullRequests_upd_1610_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1610, id_PullRequests_upd_1610, index_PullRequests_upd_1610, limit_PullRequests_upd_1610, owner_PullRequests_upd_1610, page_PullRequests_upd_1610, repo_PullRequests_upd_1610, skip_to_PullRequests_upd_1610, style_PullRequests_upd_1610, whitespace_PullRequests_upd_1610, { expectedResponseCodes: [200, 201, 204] });

  verifyPullRequestsExists(id_PullRequests_1610);
  // -> Deleting Parent PullRequests (Relational Intent Race)
  repoCancelScheduledAutoMerge(owner_PullRequests_1610, repo_PullRequests_1610, index_PullRequests_1610);

});

bthread("crud:PullReviewRequests:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1620 = { "id": 1, "name": "body_PullReviewRequests_1620_obj" };
  let index_PullReviewRequests_1620 = 1620 + Math.floor(Math.random() * 99);
  let owner_PullReviewRequests_1620 = "owner_PullReviewRequests_1620";
  let repo_PullReviewRequests_1620 = "repo_PullReviewRequests_1620_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1620, index_PullReviewRequests_1620, owner_PullReviewRequests_1620, repo_PullReviewRequests_1620, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewRequestsExists(owner_PullReviewRequests_1620);
  verifyPullReviewRequestsExists(owner_PullReviewRequests_1620);
  // -> Deleting Leaf PullReviewRequests (Standard)
  repoDeletePullReviewRequests(owner_PullReviewRequests_1620, repo_PullReviewRequests_1620, index_PullReviewRequests_1620);
  verifyPullReviewRequestsDoesNotExist(owner_PullReviewRequests_1620);

});

bthread("crud:PullReviews:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1630 = { "id": 1, "name": "body_PullReviews_1630_obj" };
  let id_PullReviews_1630 = PullRequestsId;
  let index_PullReviews_1630 = 1630 + Math.floor(Math.random() * 99);
  let limit_PullReviews_1630 = 1630 + Math.floor(Math.random() * 99);
  let owner_PullReviews_1630 = "owner_PullReviews_1630_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1630 = 1630 + Math.floor(Math.random() * 99);
  let repo_PullReviews_1630 = "repo_PullReviews_1630_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_1630, id_PullReviews_1630, index_PullReviews_1630, limit_PullReviews_1630, owner_PullReviews_1630, page_PullReviews_1630, repo_PullReviews_1630, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewsExists(id_PullReviews_1630);
  verifyPullReviewsExists(id_PullReviews_1630);
  // -> Deleting Parent PullReviews (Relational Intent Race)
  repoDeletePullReview(owner_PullReviews_1630, repo_PullReviews_1630, index_PullReviews_1630, id_PullReviews_1630);

});

bthread("crud:PullReviewDismissals:linear:3", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1640 = { "id": 1, "name": "body_PullReviewDismissals_1640_obj" };
  let id_PullReviewDismissals_1640 = PullReviewsId;
  let index_PullReviewDismissals_1640 = 1640 + Math.floor(Math.random() * 99);
  let owner_PullReviewDismissals_1640 = "owner_PullReviewDismissals_1640_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1640 = "repo_PullReviewDismissals_1640_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1640, id_PullReviewDismissals_1640, index_PullReviewDismissals_1640, owner_PullReviewDismissals_1640, repo_PullReviewDismissals_1640, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1640);
  verifyPullReviewDismissalsExists(id_PullReviewDismissals_1640);
});

bthread("crud:PullReviewUndismissals:linear:3", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1650 = PullReviewsId;
  let index_PullReviewUndismissals_1650 = 1650 + Math.floor(Math.random() * 99);
  let owner_PullReviewUndismissals_1650 = "owner_PullReviewUndismissals_1650_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1650 = "repo_PullReviewUndismissals_1650_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1650, index_PullReviewUndismissals_1650, owner_PullReviewUndismissals_1650, repo_PullReviewUndismissals_1650, { expectedResponseCodes: [200, 201, 204] });

  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1650);
  verifyPullReviewUndismissalsExists(id_PullReviewUndismissals_1650);
});

bthread("crud:PushMirrors:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_1660 = RepositoriesId;
  let limit_PushMirrors_1660 = 1660 + Math.floor(Math.random() * 99);
  let name_PushMirrors_1660 = "name_PushMirrors_1660_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1660 = "owner_PushMirrors_1660_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1660 = 1660 + Math.floor(Math.random() * 99);
  let repo_PushMirrors_1660 = "repo_PushMirrors_1660_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1660, limit_PushMirrors_1660, name_PushMirrors_1660, owner_PushMirrors_1660, page_PushMirrors_1660, repo_PushMirrors_1660, { expectedResponseCodes: [200, 201, 204] });

  verifyPushMirrorsExists(id_PushMirrors_1660);
  verifyPushMirrorsExists(id_PushMirrors_1660);
  // -> Deleting Leaf PushMirrors (Standard)
  repoDeletePushMirror(owner_PushMirrors_1660, repo_PushMirrors_1660, name_PushMirrors_1660);
  verifyPushMirrorsDoesNotExist(id_PushMirrors_1660);

});

bthread("crud:Releases:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Releases
  let CreateReleaseOption_Releases_1670 = "CreateReleaseOption_Releases_1670_" + Math.floor(Math.random()*1000);
  let body_Releases_1670 = { "id": 1, "name": "body_Releases_1670_obj" };
  let draft_Releases_1670 = true;
  let id_Releases_1670 = RepositoriesId;
  let limit_Releases_1670 = 1670 + Math.floor(Math.random() * 99);
  let owner_Releases_1670 = "owner_Releases_1670_" + Math.floor(Math.random()*1000);
  let page_Releases_1670 = 1670 + Math.floor(Math.random() * 99);
  let pre_release_Releases_1670 = true;
  let repo_Releases_1670 = "repo_Releases_1670_" + Math.floor(Math.random()*1000);
  let tag_Releases_1670 = "tag_Releases_1670_" + Math.floor(Math.random()*1000);
  repoCreateRelease(CreateReleaseOption_Releases_1670, body_Releases_1670, draft_Releases_1670, id_Releases_1670, limit_Releases_1670, owner_Releases_1670, page_Releases_1670, pre_release_Releases_1670, repo_Releases_1670, tag_Releases_1670, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1670);
  // -> Updating Releases
  let CreateReleaseOption_Releases_upd_1670 = "CreateReleaseOption_Releases_upd_1670_" + Math.floor(Math.random()*1000);
  let body_Releases_upd_1670 = { "id": 1, "name": "body_Releases_upd_1670_obj" };
  let draft_Releases_upd_1670 = true;
  let id_Releases_upd_1670 = id_Releases_1670;
  let limit_Releases_upd_1670 = 1670 + Math.floor(Math.random() * 99);
  let owner_Releases_upd_1670 = "owner_Releases_upd_1670_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1670 = 1670 + Math.floor(Math.random() * 99);
  let pre_release_Releases_upd_1670 = true;
  let repo_Releases_upd_1670 = "repo_Releases_upd_1670_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_1670 = "tag_Releases_upd_1670_" + Math.floor(Math.random()*1000);
  repoEditRelease(CreateReleaseOption_Releases_upd_1670, body_Releases_upd_1670, draft_Releases_upd_1670, id_Releases_upd_1670, limit_Releases_upd_1670, owner_Releases_upd_1670, page_Releases_upd_1670, pre_release_Releases_upd_1670, repo_Releases_upd_1670, tag_Releases_upd_1670, { expectedResponseCodes: [200, 201, 204] });

  verifyReleasesExists(id_Releases_1670);
  // -> Deleting Parent Releases (Relational Intent Race)
  repoDeleteReleaseByTag(owner_Releases_1670, repo_Releases_1670, tag_Releases_1670);

});

bthread("crud:ReleaseAttachments:linear:3", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1680 = "attachment_ReleaseAttachments_1680_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1680 = 1680 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_1680 = { "id": 1, "name": "body_ReleaseAttachments_1680_obj" };
  let id_ReleaseAttachments_1680 = ReleasesId;
  let name_ReleaseAttachments_1680 = "name_ReleaseAttachments_1680_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1680 = "owner_ReleaseAttachments_1680_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1680 = "repo_ReleaseAttachments_1680_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1680, attachment_id_ReleaseAttachments_1680, body_ReleaseAttachments_1680, id_ReleaseAttachments_1680, name_ReleaseAttachments_1680, owner_ReleaseAttachments_1680, repo_ReleaseAttachments_1680, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1680);
  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1680 = "attachment_ReleaseAttachments_upd_1680_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1680 = 1680 + Math.floor(Math.random() * 99);
  let body_ReleaseAttachments_upd_1680 = { "id": 1, "name": "body_ReleaseAttachments_upd_1680_obj" };
  let id_ReleaseAttachments_upd_1680 = id_ReleaseAttachments_1680;
  let name_ReleaseAttachments_upd_1680 = "name_ReleaseAttachments_upd_1680_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1680 = "owner_ReleaseAttachments_upd_1680_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1680 = "repo_ReleaseAttachments_upd_1680_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1680, attachment_id_ReleaseAttachments_upd_1680, body_ReleaseAttachments_upd_1680, id_ReleaseAttachments_upd_1680, name_ReleaseAttachments_upd_1680, owner_ReleaseAttachments_upd_1680, repo_ReleaseAttachments_upd_1680, { expectedResponseCodes: [200, 201, 204] });

  verifyReleaseAttachmentsExists(id_ReleaseAttachments_1680);
  // -> Deleting Leaf ReleaseAttachments (Standard)
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1680, repo_ReleaseAttachments_1680, id_ReleaseAttachments_1680, attachment_id_ReleaseAttachments_1680);
  verifyReleaseAttachmentsDoesNotExist(id_ReleaseAttachments_1680);

});

bthread("crud:TagProtections:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating TagProtections
  let body_TagProtections_1690 = { "id": 1, "name": "body_TagProtections_1690_obj" };
  let id_TagProtections_1690 = RepositoriesId;
  let owner_TagProtections_1690 = "owner_TagProtections_1690_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1690 = "repo_TagProtections_1690_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1690, id_TagProtections_1690, owner_TagProtections_1690, repo_TagProtections_1690, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1690);
  // -> Updating TagProtections
  let body_TagProtections_upd_1690 = { "id": 1, "name": "body_TagProtections_upd_1690_obj" };
  let id_TagProtections_upd_1690 = id_TagProtections_1690;
  let owner_TagProtections_upd_1690 = "owner_TagProtections_upd_1690_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1690 = "repo_TagProtections_upd_1690_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1690, id_TagProtections_upd_1690, owner_TagProtections_upd_1690, repo_TagProtections_upd_1690, { expectedResponseCodes: [200, 201, 204] });

  verifyTagProtectionsExists(id_TagProtections_1690);
  // -> Deleting Leaf TagProtections (Standard)
  repoDeleteTagProtection(owner_TagProtections_1690, repo_TagProtections_1690, id_TagProtections_1690);
  verifyTagProtectionsDoesNotExist(id_TagProtections_1690);

});

bthread("crud:Tags:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Tags
  let body_Tags_1700 = { "id": 1, "name": "body_Tags_1700_obj" };
  let id_Tags_1700 = RepositoriesId;
  let limit_Tags_1700 = 1700 + Math.floor(Math.random() * 99);
  let owner_Tags_1700 = "owner_Tags_1700_" + Math.floor(Math.random()*1000);
  let page_Tags_1700 = 1700 + Math.floor(Math.random() * 99);
  let repo_Tags_1700 = "repo_Tags_1700_" + Math.floor(Math.random()*1000);
  let tag_Tags_1700 = "tag_Tags_1700_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1700, id_Tags_1700, limit_Tags_1700, owner_Tags_1700, page_Tags_1700, repo_Tags_1700, tag_Tags_1700, { expectedResponseCodes: [200, 201, 204] });

  verifyTagsExists(id_Tags_1700);
  verifyTagsExists(id_Tags_1700);
  // -> Deleting Leaf Tags (Standard)
  repoDeleteTag(owner_Tags_1700, repo_Tags_1700, tag_Tags_1700);
  verifyTagsDoesNotExist(id_Tags_1700);

});

bthread("crud:Topics:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Topics
  let body_Topics_1710 = { "id": 1, "name": "body_Topics_1710_obj" };
  let limit_Topics_1710 = 1710 + Math.floor(Math.random() * 99);
  let owner_Topics_1710 = "owner_Topics_1710";
  let page_Topics_1710 = 1710 + Math.floor(Math.random() * 99);
  let q_Topics_1710 = "q_Topics_1710_" + Math.floor(Math.random()*1000);
  let repo_Topics_1710 = "repo_Topics_1710_" + Math.floor(Math.random()*1000);
  let topic_Topics_1710 = "topic_Topics_1710_" + Math.floor(Math.random()*1000);
  let topic1_Topics_1710 = "topic1_Topics_1710_" + Math.floor(Math.random()*1000);
  let topic2_Topics_1710 = "topic2_Topics_1710_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1710, limit_Topics_1710, owner_Topics_1710, page_Topics_1710, q_Topics_1710, repo_Topics_1710, topic_Topics_1710, topic1_Topics_1710, topic2_Topics_1710, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1710);
  // -> Updating Topics
  let body_Topics_upd_1710 = { "id": 1, "name": "body_Topics_upd_1710_obj" };
  let limit_Topics_upd_1710 = 1710 + Math.floor(Math.random() * 99);
  let owner_Topics_upd_1710 = owner_Topics_1710;
  let page_Topics_upd_1710 = 1710 + Math.floor(Math.random() * 99);
  let q_Topics_upd_1710 = "q_Topics_upd_1710_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1710 = "repo_Topics_upd_1710_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1710 = "topic_Topics_upd_1710_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_1710 = "topic1_Topics_upd_1710_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_1710 = "topic2_Topics_upd_1710_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1710, limit_Topics_upd_1710, owner_Topics_upd_1710, page_Topics_upd_1710, q_Topics_upd_1710, repo_Topics_upd_1710, topic_Topics_upd_1710, topic1_Topics_upd_1710, topic2_Topics_upd_1710, { expectedResponseCodes: [200, 201, 204] });

  verifyTopicsExists(owner_Topics_1710);
  // -> Deleting Leaf Topics (Standard)
  repoDeleteTopic(owner_Topics_1710, repo_Topics_1710, topic_Topics_1710);
  verifyTopicsDoesNotExist(owner_Topics_1710);

});

bthread("crud:RepositoryTransfer:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1720 = { "id": 1, "name": "body_RepositoryTransfer_1720_obj" };
  let id_RepositoryTransfer_1720 = RepositoriesId;
  let owner_RepositoryTransfer_1720 = "owner_RepositoryTransfer_1720_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1720 = "repo_RepositoryTransfer_1720_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1720 = "transferOptions_RepositoryTransfer_1720_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1720, id_RepositoryTransfer_1720, owner_RepositoryTransfer_1720, repo_RepositoryTransfer_1720, transferOptions_RepositoryTransfer_1720, { expectedResponseCodes: [200, 201, 204] });

  verifyRepositoryTransferExists(id_RepositoryTransfer_1720);
  verifyRepositoryTransferExists(id_RepositoryTransfer_1720);
});

bthread("crud:WikiPage:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating WikiPage
  let body_WikiPage_1730 = { "id": 1, "name": "body_WikiPage_1730_obj" };
  let id_WikiPage_1730 = RepositoriesId;
  let owner_WikiPage_1730 = "owner_WikiPage_1730_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_1730 = "pageName_WikiPage_1730_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_1730 = "repo_WikiPage_1730_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_1730 = "wikiPageOptions_WikiPage_1730_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_1730, id_WikiPage_1730, owner_WikiPage_1730, pageName_WikiPage_1730, repo_WikiPage_1730, wikiPageOptions_WikiPage_1730, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_1730);
  // -> Updating WikiPage
  let body_WikiPage_upd_1730 = { "id": 1, "name": "body_WikiPage_upd_1730_obj" };
  let id_WikiPage_upd_1730 = id_WikiPage_1730;
  let owner_WikiPage_upd_1730 = "owner_WikiPage_upd_1730_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_1730 = "pageName_WikiPage_upd_1730_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_1730 = "repo_WikiPage_upd_1730_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_1730 = "wikiPageOptions_WikiPage_upd_1730_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_1730, id_WikiPage_upd_1730, owner_WikiPage_upd_1730, pageName_WikiPage_upd_1730, repo_WikiPage_upd_1730, wikiPageOptions_WikiPage_upd_1730, { expectedResponseCodes: [200, 201, 204] });

  verifyWikiPageExists(id_WikiPage_1730);
  // -> Deleting Leaf WikiPage (Standard)
  repoDeleteWikiPage(owner_WikiPage_1730, repo_WikiPage_1730, pageName_WikiPage_1730);
  verifyWikiPageDoesNotExist(id_WikiPage_1730);

});

bthread("crud:TeamMembers:linear:3", function () {
  let deps = {};
  deps["Teams"] = matchAnyTeamsAdded();
  let pkMap = {"Teams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let TeamsId = captured["Teams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1740 = TeamsId;
  let limit_TeamMembers_1740 = 1740 + Math.floor(Math.random() * 99);
  let page_TeamMembers_1740 = 1740 + Math.floor(Math.random() * 99);
  let username_TeamMembers_1740 = "username_TeamMembers_1740";
  orgAddTeamMember(id_TeamMembers_1740, limit_TeamMembers_1740, page_TeamMembers_1740, username_TeamMembers_1740, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamMembersExists(id_TeamMembers_1740);
  verifyTeamMembersExists(id_TeamMembers_1740);
  // -> Deleting Leaf TeamMembers (Standard)
  orgDeleteTeam(id_TeamMembers_1740);
  verifyTeamMembersDoesNotExist(id_TeamMembers_1740);

});

bthread("crud:TeamRepos:linear:3", function () {
  let deps = {};
  deps["Teams"] = matchAnyTeamsAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Teams": "id", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let TeamsId = captured["Teams"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating TeamRepos
  let id_TeamRepos_1750 = RepositoriesId;
  let limit_TeamRepos_1750 = 1750 + Math.floor(Math.random() * 99);
  let org_TeamRepos_1750 = "org_TeamRepos_1750_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_1750 = 1750 + Math.floor(Math.random() * 99);
  let repo_TeamRepos_1750 = "repo_TeamRepos_1750_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1750, limit_TeamRepos_1750, org_TeamRepos_1750, page_TeamRepos_1750, repo_TeamRepos_1750, { expectedResponseCodes: [200, 201, 204] });

  verifyTeamReposExists(id_TeamRepos_1750);
  verifyTeamReposExists(id_TeamRepos_1750);
  // -> Deleting Leaf TeamRepos (Standard)
  orgDeleteTeam(id_TeamRepos_1750);
  verifyTeamReposDoesNotExist(id_TeamRepos_1750);

});

bthread("crud:UserVariables:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_1760 = { "id": 1, "name": "body_UserVariables_1760_obj" };
  let variablename_UserVariables_1760 = "variablename_UserVariables_1760";
  createUserVariable(body_UserVariables_1760, variablename_UserVariables_1760, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1760);
  // -> Updating UserVariables
  let body_UserVariables_upd_1760 = { "id": 1, "name": "body_UserVariables_upd_1760_obj" };
  let variablename_UserVariables_upd_1760 = variablename_UserVariables_1760;
  updateUserVariable(body_UserVariables_upd_1760, variablename_UserVariables_upd_1760, { expectedResponseCodes: [200, 201, 204] });

  verifyUserVariablesExists(variablename_UserVariables_1760);
  // -> Deleting Leaf UserVariables (Standard)
  deleteUserVariable(variablename_UserVariables_1760);
  verifyUserVariablesDoesNotExist(variablename_UserVariables_1760);

});

bthread("crud:OAuth2Applications:linear:3", function () {
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1770 = { "id": 1, "name": "body_OAuth2Applications_1770_obj" };
  let id_OAuth2Applications_1770 = 1770 + Math.floor(Math.random() * 99);
  let limit_OAuth2Applications_1770 = 1770 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_1770 = 1770 + Math.floor(Math.random() * 99);
  userCreateOAuth2Application(body_OAuth2Applications_1770, id_OAuth2Applications_1770, limit_OAuth2Applications_1770, page_OAuth2Applications_1770, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1770);
  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1770 = { "id": 1, "name": "body_OAuth2Applications_upd_1770_obj" };
  let id_OAuth2Applications_upd_1770 = id_OAuth2Applications_1770;
  let limit_OAuth2Applications_upd_1770 = 1770 + Math.floor(Math.random() * 99);
  let page_OAuth2Applications_upd_1770 = 1770 + Math.floor(Math.random() * 99);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1770, id_OAuth2Applications_upd_1770, limit_OAuth2Applications_upd_1770, page_OAuth2Applications_upd_1770, { expectedResponseCodes: [200, 201, 204] });

  verifyOAuth2ApplicationsExists(id_OAuth2Applications_1770);
  // -> Deleting Leaf OAuth2Applications (Standard)
  userDeleteOAuth2Application(id_OAuth2Applications_1770);
  verifyOAuth2ApplicationsDoesNotExist(id_OAuth2Applications_1770);

});

bthread("crud:UserAvatar:linear:3", function () {
  // -> Creating UserAvatar
  let body_UserAvatar_1780 = { "id": 1, "name": "body_UserAvatar_1780_obj" };
  let id_UserAvatar_1780 = 1780 + Math.floor(Math.random() * 99);
  userUpdateAvatar(body_UserAvatar_1780, id_UserAvatar_1780, { expectedResponseCodes: [200, 201, 204] });

  verifyUserAvatarExists(id_UserAvatar_1780);
  verifyUserAvatarExists(id_UserAvatar_1780);
  // -> Deleting Leaf UserAvatar (Standard)
  userDeleteAvatar(id_UserAvatar_1780);
  verifyUserAvatarDoesNotExist(id_UserAvatar_1780);

});

bthread("crud:UserEmails:linear:3", function () {
  // -> Creating UserEmails
  let body_UserEmails_1790 = { "id": 1, "name": "body_UserEmails_1790_obj" };
  let id_UserEmails_1790 = 1790 + Math.floor(Math.random() * 99);
  userAddEmail(body_UserEmails_1790, id_UserEmails_1790, { expectedResponseCodes: [200, 201, 204] });

  verifyUserEmailsExists(id_UserEmails_1790);
  verifyUserEmailsExists(id_UserEmails_1790);
  // -> Deleting Leaf UserEmails (Standard)
  userDeleteEmail(id_UserEmails_1790);
  verifyUserEmailsDoesNotExist(id_UserEmails_1790);

});

bthread("crud:GPGKeys:linear:3", function () {
  // -> Creating GPGKeys
  let Form_GPGKeys_1800 = { "id": 1, "name": "Form_GPGKeys_1800_obj" };
  let id_GPGKeys_1800 = 1800 + Math.floor(Math.random() * 99);
  let limit_GPGKeys_1800 = 1800 + Math.floor(Math.random() * 99);
  let page_GPGKeys_1800 = 1800 + Math.floor(Math.random() * 99);
  userCurrentPostGPGKey(Form_GPGKeys_1800, id_GPGKeys_1800, limit_GPGKeys_1800, page_GPGKeys_1800, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeysExists(id_GPGKeys_1800);
  verifyGPGKeysExists(id_GPGKeys_1800);
  // -> Deleting Leaf GPGKeys (Standard)
  userCurrentDeleteGPGKey(id_GPGKeys_1800);
  verifyGPGKeysDoesNotExist(id_GPGKeys_1800);

});

bthread("crud:GPGKeyVerification:linear:3", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_1810 = 1810 + Math.floor(Math.random() * 99);
  userVerifyGPGKey(id_GPGKeyVerification_1810, { expectedResponseCodes: [200, 201, 204] });

  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1810);
  verifyGPGKeyVerificationExists(id_GPGKeyVerification_1810);
});

bthread("crud:Keys:linear:3", function () {
  // -> Creating Keys
  let body_Keys_1820 = { "id": 1, "name": "body_Keys_1820_obj" };
  let fingerprint_Keys_1820 = "fingerprint_Keys_1820_" + Math.floor(Math.random()*1000);
  let id_Keys_1820 = 1820 + Math.floor(Math.random() * 99);
  let limit_Keys_1820 = 1820 + Math.floor(Math.random() * 99);
  let page_Keys_1820 = 1820 + Math.floor(Math.random() * 99);
  userCurrentPostKey(body_Keys_1820, fingerprint_Keys_1820, id_Keys_1820, limit_Keys_1820, page_Keys_1820, { expectedResponseCodes: [200, 201, 204] });

  verifyKeysExists(id_Keys_1820);
  verifyKeysExists(id_Keys_1820);
  // -> Deleting Leaf Keys (Standard)
  userCurrentDeleteKey(id_Keys_1820);
  verifyKeysDoesNotExist(id_Keys_1820);

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
  let limit_UserStarred_1830 = 1830 + Math.floor(Math.random() * 99);
  let owner_UserStarred_1830 = "owner_UserStarred_1830";
  let page_UserStarred_1830 = 1830 + Math.floor(Math.random() * 99);
  let repo_UserStarred_1830 = "repo_UserStarred_1830_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1830, owner_UserStarred_1830, page_UserStarred_1830, repo_UserStarred_1830, { expectedResponseCodes: [200, 201, 204] });

  verifyUserStarredExists(owner_UserStarred_1830);
  verifyUserStarredExists(owner_UserStarred_1830);
  // -> Deleting Leaf UserStarred (Standard)
  userCurrentDeleteStar(owner_UserStarred_1830, repo_UserStarred_1830);
  verifyUserStarredDoesNotExist(owner_UserStarred_1830);

});

// --- PHASE 1: GLOBAL HYPER-SEEDING for gitea ---
// --- Hyper-Story Constellation Copy 1 ---
// --- Hyper-Story Constellation Copy 2 ---
// --- Hyper-Story Constellation Copy 3 ---