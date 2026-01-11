// Auto-generated stories for gitea
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  bp.log.info("DEBUG: [resolveDependencies] Starting resolution for: " + Object.keys(deps).join(", "));
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught Event: " + e.name);
    for (let k in deps) {
      if (deps[k].contains(e)) {
        // Resolution with common Gitea key-mapping (index <-> number)
        let val = (e.data && (e.data[k] || e.data.number || (e.data.parameters && e.data.parameters[k])));
        if (!val && pkMap && pkMap[k]) val = e.data[pkMap[k]];
        if (val !== undefined && val !== null && val !== "undefined") {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] SUCCESS: Resolved " + k + " -> " + val);
            delete deps[k];
        } else {
            bp.log.warn("DEBUG: [resolveDependencies] MISSING DATA for key: " + k);
            if(e.data) bp.log.warn("DEBUG: [resolveDependencies] Available keys: " + Object.keys(e.data).join(", "));
        }
      }
    }
  }
  return captured;
}

// --- Monitors ---
bthread("monitor:ActivityPub:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyActivityPubAdded() });
    let targetId = e.data.user-id || e.data.id || e.data.index || e.data.number;
    verifyActivityPubExists(targetId);
  }
});

bthread("monitor:AdminCron:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAdminCronAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyAdminCronExists(targetId);
  }
});

bthread("monitor:Hooks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyHooksAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedHooks(), function() { verifyHooksExists(targetId); });
  }
});

bthread("monitor:UnadoptedRepositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUnadoptedRepositoriesAdded() });
    let targetId = e.data.owner || e.data.id || e.data.index || e.data.number;
    block(matchDeletedUnadoptedRepositories(), function() { verifyUnadoptedRepositoriesExists(targetId); });
  }
});

bthread("monitor:Users:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let targetId = e.data.username || e.data.id || e.data.index || e.data.number;
    block(matchDeletedUsers(), function() { verifyUsersExists(targetId); });
  }
});

bthread("monitor:UserBadges:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserBadgesAdded() });
    let targetId = e.data.username || e.data.id || e.data.index || e.data.number;
    block(matchDeletedUserBadges(), function() { verifyUserBadgesExists(targetId); });
  }
});

bthread("monitor:UserKeys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserKeysAdded() });
    let targetId = e.data.username || e.data.id || e.data.index || e.data.number;
    block(matchDeletedUserKeys(), function() { verifyUserKeysExists(targetId); });
  }
});

bthread("monitor:UserOrganizations:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserOrganizationsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyUserOrganizationsExists(targetId);
  }
});

bthread("monitor:UserRename:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserRenameAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyUserRenameExists(targetId);
  }
});

bthread("monitor:UserRepositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserRepositoriesAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyUserRepositoriesExists(targetId);
  }
});

bthread("monitor:Markdown:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMarkdownAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyMarkdownExists(targetId);
  }
});

bthread("monitor:Markup:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMarkupAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyMarkupExists(targetId);
  }
});

bthread("monitor:Organization:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationAdded() });
    let targetId = e.data.org || e.data.id || e.data.index || e.data.number;
    block(matchDeletedOrganization(), function() { verifyOrganizationExists(targetId); });
  }
});

bthread("monitor:Variables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyVariablesAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedVariables(), function() { verifyVariablesExists(targetId); });
  }
});

bthread("monitor:Avatar:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAvatarAdded() });
    let targetId = e.data.org || e.data.id || e.data.index || e.data.number;
    block(matchDeletedAvatar(), function() { verifyAvatarExists(targetId); });
  }
});

bthread("monitor:Labels:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLabelsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedLabels(), function() { verifyLabelsExists(targetId); });
  }
});

bthread("monitor:OrganizationRepos:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationReposAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyOrganizationReposExists(targetId);
  }
});

bthread("monitor:OrganizationTeams:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationTeamsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyOrganizationTeamsExists(targetId);
  }
});

bthread("monitor:Issues:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssuesAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedIssues(), function() { verifyIssuesExists(targetId); });
  }
});

bthread("monitor:Repository:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedRepository(), function() { verifyRepositoryExists(targetId); });
  }
});

bthread("monitor:Branches:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBranchesAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedBranches(), function() { verifyBranchesExists(targetId); });
  }
});

bthread("monitor:Collaborators:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCollaboratorsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedCollaborators(), function() { verifyCollaboratorsExists(targetId); });
  }
});

bthread("monitor:Repositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoriesAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedRepositories(), function() { verifyRepositoriesExists(targetId); });
  }
});

bthread("monitor:Forks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyForksAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyForksExists(targetId);
  }
});

bthread("monitor:Issue:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyIssueExists(targetId);
  }
});

bthread("monitor:IssueCommentAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentAttachmentsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedIssueCommentAttachments(), function() { verifyIssueCommentAttachmentsExists(targetId); });
  }
});

bthread("monitor:IssueCommentReactions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentReactionsAdded() });
    let targetId = e.data.owner || e.data.id || e.data.index || e.data.number;
    block(matchDeletedIssueCommentReactions(), function() { verifyIssueCommentReactionsExists(targetId); });
  }
});

bthread("monitor:IssueAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAttachmentsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedIssueAttachments(), function() { verifyIssueAttachmentsExists(targetId); });
  }
});

bthread("monitor:IssueBlocks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueBlocksAdded() });
    let targetId = e.data.owner || e.data.id || e.data.index || e.data.number;
    block(matchDeletedIssueBlocks(), function() { verifyIssueBlocksExists(targetId); });
  }
});

bthread("monitor:IssueComments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedIssueComments(), function() { verifyIssueCommentsExists(targetId); });
  }
});

bthread("monitor:IssueSubscriptions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueSubscriptionsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedIssueSubscriptions(), function() { verifyIssueSubscriptionsExists(targetId); });
  }
});

bthread("monitor:IssueTimes:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueTimesAdded() });
    let targetId = e.data.owner || e.data.id || e.data.index || e.data.number;
    block(matchDeletedIssueTimes(), function() { verifyIssueTimesExists(targetId); });
  }
});

bthread("monitor:Keys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyKeysAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedKeys(), function() { verifyKeysExists(targetId); });
  }
});

bthread("monitor:MirrorSync:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMirrorSyncAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyMirrorSyncExists(targetId);
  }
});

bthread("monitor:PullRequests:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullRequestsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedPullRequests(), function() { verifyPullRequestsExists(targetId); });
  }
});

bthread("monitor:PullReviewRequests:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewRequestsAdded() });
    let targetId = e.data.owner || e.data.id || e.data.index || e.data.number;
    block(matchDeletedPullReviewRequests(), function() { verifyPullReviewRequestsExists(targetId); });
  }
});

bthread("monitor:PullReviews:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedPullReviews(), function() { verifyPullReviewsExists(targetId); });
  }
});

bthread("monitor:PullReviewDismissals:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewDismissalsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyPullReviewDismissalsExists(targetId);
  }
});

bthread("monitor:PullReviewUndismissals:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewUndismissalsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyPullReviewUndismissalsExists(targetId);
  }
});

bthread("monitor:PushMirrors:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPushMirrorsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedPushMirrors(), function() { verifyPushMirrorsExists(targetId); });
  }
});

bthread("monitor:Releases:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleasesAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedReleases(), function() { verifyReleasesExists(targetId); });
  }
});

bthread("monitor:ReleaseAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleaseAttachmentsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedReleaseAttachments(), function() { verifyReleaseAttachmentsExists(targetId); });
  }
});

bthread("monitor:TagProtections:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTagProtectionsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedTagProtections(), function() { verifyTagProtectionsExists(targetId); });
  }
});

bthread("monitor:Tags:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTagsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedTags(), function() { verifyTagsExists(targetId); });
  }
});

bthread("monitor:Topics:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTopicsAdded() });
    let targetId = e.data.owner || e.data.id || e.data.index || e.data.number;
    block(matchDeletedTopics(), function() { verifyTopicsExists(targetId); });
  }
});

bthread("monitor:RepositoryTransfer:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryTransferAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyRepositoryTransferExists(targetId);
  }
});

bthread("monitor:WikiPage:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWikiPageAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedWikiPage(), function() { verifyWikiPageExists(targetId); });
  }
});

bthread("monitor:TeamMembers:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamMembersAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedTeamMembers(), function() { verifyTeamMembersExists(targetId); });
  }
});

bthread("monitor:TeamRepos:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamReposAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedTeamRepos(), function() { verifyTeamReposExists(targetId); });
  }
});

bthread("monitor:UserVariables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserVariablesAdded() });
    let targetId = e.data.variablename || e.data.id || e.data.index || e.data.number;
    block(matchDeletedUserVariables(), function() { verifyUserVariablesExists(targetId); });
  }
});

bthread("monitor:OAuth2Applications:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOAuth2ApplicationsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedOAuth2Applications(), function() { verifyOAuth2ApplicationsExists(targetId); });
  }
});

bthread("monitor:UserAvatar:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserAvatarAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedUserAvatar(), function() { verifyUserAvatarExists(targetId); });
  }
});

bthread("monitor:UserEmails:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserEmailsAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedUserEmails(), function() { verifyUserEmailsExists(targetId); });
  }
});

bthread("monitor:GPGKeys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGPGKeysAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    block(matchDeletedGPGKeys(), function() { verifyGPGKeysExists(targetId); });
  }
});

bthread("monitor:GPGKeyVerification:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGPGKeyVerificationAdded() });
    let targetId = e.data.id || e.data.id || e.data.index || e.data.number;
    verifyGPGKeyVerificationExists(targetId);
  }
});

bthread("monitor:UserStarred:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserStarredAdded() });
    let targetId = e.data.owner || e.data.id || e.data.index || e.data.number;
    block(matchDeletedUserStarred(), function() { verifyUserStarredExists(targetId); });
  }
});

bthread("crud:ActivityPub:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating ActivityPub
  let user_id_ActivityPub_100 = UsersId;
  activitypubPersonInbox(user_id_ActivityPub_100, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:AdminCron:linear:1", function () {
  // -> Creating AdminCron
  let id_AdminCron_110 = "id_AdminCron_110_" + Math.floor(Math.random()*1000);
  let limit_AdminCron_110 = Math.floor(Math.random() * 1000);
  let page_AdminCron_110 = Math.floor(Math.random() * 1000);
  let task_AdminCron_110 = "task_AdminCron_110_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_110, limit_AdminCron_110, page_AdminCron_110, task_AdminCron_110, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Hooks:linear:1", function () {
  // -> Creating Hooks
  let body_Hooks_120 = {};
  let id_Hooks_120 = Math.floor(Math.random() * 1000);
  let limit_Hooks_120 = Math.floor(Math.random() * 1000);
  let page_Hooks_120 = Math.floor(Math.random() * 1000);
  userCreateHook(body_Hooks_120, id_Hooks_120, limit_Hooks_120, page_Hooks_120, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Hooks
  let body_Hooks_upd_120 = {};
  let id_Hooks_upd_120 = id_Hooks_120;
  let limit_Hooks_upd_120 = Math.floor(Math.random() * 1000);
  let page_Hooks_upd_120 = Math.floor(Math.random() * 1000);
  userEditHook(body_Hooks_upd_120, id_Hooks_upd_120, limit_Hooks_upd_120, page_Hooks_upd_120, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Hooks
  userDeleteHook(id_Hooks_120, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UnadoptedRepositories:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_130 = Math.floor(Math.random() * 1000);
  let owner_UnadoptedRepositories_130 = "owner_UnadoptedRepositories_130_" + Math.floor(Math.random()*1000);
  let page_UnadoptedRepositories_130 = Math.floor(Math.random() * 1000);
  let pattern_UnadoptedRepositories_130 = "pattern_UnadoptedRepositories_130_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_130 = "repo_UnadoptedRepositories_130_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_130, owner_UnadoptedRepositories_130, page_UnadoptedRepositories_130, pattern_UnadoptedRepositories_130, repo_UnadoptedRepositories_130, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UnadoptedRepositories
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_130, repo_UnadoptedRepositories_130, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Users:linear:1", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_140 = "CreateAccessTokenOption_Users_140_" + Math.floor(Math.random()*1000);
  let body_Users_140 = {};
  let limit_Users_140 = Math.floor(Math.random() * 1000);
  let page_Users_140 = Math.floor(Math.random() * 1000);
  let purge_Users_140 = true;
  let token_Users_140 = "token_Users_140_" + Math.floor(Math.random()*1000);
  let username_Users_140 = "username_Users_140_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_140, body_Users_140, limit_Users_140, page_Users_140, purge_Users_140, token_Users_140, username_Users_140, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let CreateAccessTokenOption_Users_upd_140 = "CreateAccessTokenOption_Users_upd_140_" + Math.floor(Math.random()*1000);
  let body_Users_upd_140 = {};
  let limit_Users_upd_140 = Math.floor(Math.random() * 1000);
  let page_Users_upd_140 = Math.floor(Math.random() * 1000);
  let purge_Users_upd_140 = true;
  let token_Users_upd_140 = "token_Users_upd_140_" + Math.floor(Math.random()*1000);
  let username_Users_upd_140 = username_Users_140;
  adminEditUser(CreateAccessTokenOption_Users_upd_140, body_Users_upd_140, limit_Users_upd_140, page_Users_upd_140, purge_Users_upd_140, token_Users_upd_140, username_Users_upd_140, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserBadges:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let body_UserBadges_150 = {};
  let username_UserBadges_150 = UsersId;
  adminAddUserBadges(body_UserBadges_150, username_UserBadges_150, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserBadges
  adminDeleteUserBadges(username_UserBadges_150, { expectedResponseCodes: [200, 201, 204] });

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

  // -> Deleting UserKeys
  adminDeleteUser(username_UserKeys_160, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserOrganizations:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_170 = "id_UserOrganizations_170_" + Math.floor(Math.random()*1000);
  let organization_UserOrganizations_170 = "organization_UserOrganizations_170_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_170 = UsersId;
  adminCreateOrg(id_UserOrganizations_170, organization_UserOrganizations_170, username_UserOrganizations_170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRename:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_180 = "body_UserRename_180_" + Math.floor(Math.random()*1000);
  let id_UserRename_180 = "id_UserRename_180_" + Math.floor(Math.random()*1000);
  let username_UserRename_180 = UsersId;
  adminRenameUser(body_UserRename_180, id_UserRename_180, username_UserRename_180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRepositories:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_190 = "id_UserRepositories_190_" + Math.floor(Math.random()*1000);
  let repository_UserRepositories_190 = "repository_UserRepositories_190_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_190 = UsersId;
  adminCreateRepo(id_UserRepositories_190, repository_UserRepositories_190, username_UserRepositories_190, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markdown:linear:1", function () {
  // -> Creating Markdown
  let body_Markdown_200 = "body_Markdown_200_" + Math.floor(Math.random()*1000);
  let id_Markdown_200 = "id_Markdown_200_" + Math.floor(Math.random()*1000);
  renderMarkdown(body_Markdown_200, id_Markdown_200, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markup:linear:1", function () {
  // -> Creating Markup
  let body_Markup_210 = {};
  let id_Markup_210 = "id_Markup_210_" + Math.floor(Math.random()*1000);
  renderMarkup(body_Markup_210, id_Markup_210, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Organization:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Organization
  let body_Organization_220 = {};
  let limit_Organization_220 = Math.floor(Math.random() * 1000);
  let org_Organization_220 = "org_Organization_220_" + Math.floor(Math.random()*1000);
  let page_Organization_220 = Math.floor(Math.random() * 1000);
  let secretname_Organization_220 = "secretname_Organization_220_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_220, limit_Organization_220, org_Organization_220, page_Organization_220, secretname_Organization_220, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Organization
  let body_Organization_upd_220 = {};
  let limit_Organization_upd_220 = Math.floor(Math.random() * 1000);
  let org_Organization_upd_220 = org_Organization_220;
  let page_Organization_upd_220 = Math.floor(Math.random() * 1000);
  let secretname_Organization_upd_220 = "secretname_Organization_upd_220_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_220, limit_Organization_upd_220, org_Organization_upd_220, page_Organization_upd_220, secretname_Organization_upd_220, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Variables:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_230 = "CreateVariableOption_Variables_230_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_230 = "UpdateVariableOption_Variables_230_" + Math.floor(Math.random()*1000);
  let body_Variables_230 = {};
  let id_Variables_230 = RepositoriesId;
  let limit_Variables_230 = Math.floor(Math.random() * 1000);
  let owner_Variables_230 = "owner_Variables_230_" + Math.floor(Math.random()*1000);
  let page_Variables_230 = Math.floor(Math.random() * 1000);
  let repo_Variables_230 = "repo_Variables_230_" + Math.floor(Math.random()*1000);
  let variablename_Variables_230 = "variablename_Variables_230_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_230, UpdateVariableOption_Variables_230, body_Variables_230, id_Variables_230, limit_Variables_230, owner_Variables_230, page_Variables_230, repo_Variables_230, variablename_Variables_230, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Variables
  let CreateVariableOption_Variables_upd_230 = "CreateVariableOption_Variables_upd_230_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_230 = "UpdateVariableOption_Variables_upd_230_" + Math.floor(Math.random()*1000);
  let body_Variables_upd_230 = {};
  let id_Variables_upd_230 = id_Variables_230;
  let limit_Variables_upd_230 = Math.floor(Math.random() * 1000);
  let owner_Variables_upd_230 = "owner_Variables_upd_230_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_230 = Math.floor(Math.random() * 1000);
  let repo_Variables_upd_230 = "repo_Variables_upd_230_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_230 = "variablename_Variables_upd_230_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_230, UpdateVariableOption_Variables_upd_230, body_Variables_upd_230, id_Variables_upd_230, limit_Variables_upd_230, owner_Variables_upd_230, page_Variables_upd_230, repo_Variables_upd_230, variablename_Variables_upd_230, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Variables
  deleteRepoVariable(owner_Variables_230, repo_Variables_230, variablename_Variables_230, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Avatar:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating Avatar
  let body_Avatar_240 = {};
  let org_Avatar_240 = OrganizationId;
  orgUpdateAvatar(body_Avatar_240, org_Avatar_240, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Avatar
  orgDeleteAvatar(org_Avatar_240, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Labels:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Labels
  let body_Labels_250 = {};
  let color_Labels_250 = "color_Labels_250_" + Math.floor(Math.random()*1000);
  let description_Labels_250 = "description_Labels_250_" + Math.floor(Math.random()*1000);
  let id_Labels_250 = RepositoryId;
  let limit_Labels_250 = Math.floor(Math.random() * 1000);
  let name_Labels_250 = "name_Labels_250_" + Math.floor(Math.random()*1000);
  let owner_Labels_250 = "owner_Labels_250_" + Math.floor(Math.random()*1000);
  let page_Labels_250 = Math.floor(Math.random() * 1000);
  let repo_Labels_250 = "repo_Labels_250_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_250, color_Labels_250, description_Labels_250, id_Labels_250, limit_Labels_250, name_Labels_250, owner_Labels_250, page_Labels_250, repo_Labels_250, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Labels
  let body_Labels_upd_250 = {};
  let color_Labels_upd_250 = "color_Labels_upd_250_" + Math.floor(Math.random()*1000);
  let description_Labels_upd_250 = "description_Labels_upd_250_" + Math.floor(Math.random()*1000);
  let id_Labels_upd_250 = id_Labels_250;
  let limit_Labels_upd_250 = Math.floor(Math.random() * 1000);
  let name_Labels_upd_250 = "name_Labels_upd_250_" + Math.floor(Math.random()*1000);
  let owner_Labels_upd_250 = "owner_Labels_upd_250_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_250 = Math.floor(Math.random() * 1000);
  let repo_Labels_upd_250 = "repo_Labels_upd_250_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_250, color_Labels_upd_250, description_Labels_upd_250, id_Labels_upd_250, limit_Labels_upd_250, name_Labels_upd_250, owner_Labels_upd_250, page_Labels_upd_250, repo_Labels_upd_250, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Labels
  issueDeleteLabel(owner_Labels_250, repo_Labels_250, id_Labels_250, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationRepos:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_260 = {};
  let id_OrganizationRepos_260 = "id_OrganizationRepos_260_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_260 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_260 = OrganizationId;
  let page_OrganizationRepos_260 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_260, id_OrganizationRepos_260, limit_OrganizationRepos_260, org_OrganizationRepos_260, page_OrganizationRepos_260, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationTeams:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_270 = {};
  let id_OrganizationTeams_270 = "id_OrganizationTeams_270_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_270 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_270 = OrganizationId;
  let page_OrganizationTeams_270 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_270, id_OrganizationTeams_270, limit_OrganizationTeams_270, org_OrganizationTeams_270, page_OrganizationTeams_270, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issues:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issues
  let content_Issues_280 = {};
  let id_Issues_280 = RepositoryId;
  let index_Issues_280 = Math.floor(Math.random() * 1000);
  let limit_Issues_280 = Math.floor(Math.random() * 1000);
  let owner_Issues_280 = "owner_Issues_280_" + Math.floor(Math.random()*1000);
  let page_Issues_280 = Math.floor(Math.random() * 1000);
  let position_Issues_280 = Math.floor(Math.random() * 1000);
  let repo_Issues_280 = "repo_Issues_280_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_280, id_Issues_280, index_Issues_280, limit_Issues_280, owner_Issues_280, page_Issues_280, position_Issues_280, repo_Issues_280, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Issues
  let content_Issues_upd_280 = {};
  let id_Issues_upd_280 = id_Issues_280;
  let index_Issues_upd_280 = Math.floor(Math.random() * 1000);
  let limit_Issues_upd_280 = Math.floor(Math.random() * 1000);
  let owner_Issues_upd_280 = "owner_Issues_upd_280_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_280 = Math.floor(Math.random() * 1000);
  let position_Issues_upd_280 = Math.floor(Math.random() * 1000);
  let repo_Issues_upd_280 = "repo_Issues_upd_280_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_280, id_Issues_upd_280, index_Issues_upd_280, limit_Issues_upd_280, owner_Issues_upd_280, page_Issues_upd_280, position_Issues_upd_280, repo_Issues_upd_280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repository:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Repository
  let body_Repository_290 = {};
  let id_Repository_290 = RepositoriesId;
  let limit_Repository_290 = Math.floor(Math.random() * 1000);
  let owner_Repository_290 = "owner_Repository_290_" + Math.floor(Math.random()*1000);
  let page_Repository_290 = Math.floor(Math.random() * 1000);
  let repo_Repository_290 = "repo_Repository_290_" + Math.floor(Math.random()*1000);
  let sha_Repository_290 = "sha_Repository_290_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_290, id_Repository_290, limit_Repository_290, owner_Repository_290, page_Repository_290, repo_Repository_290, sha_Repository_290, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repository
  let body_Repository_upd_290 = {};
  let id_Repository_upd_290 = id_Repository_290;
  let limit_Repository_upd_290 = Math.floor(Math.random() * 1000);
  let owner_Repository_upd_290 = "owner_Repository_upd_290_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_290 = Math.floor(Math.random() * 1000);
  let repo_Repository_upd_290 = "repo_Repository_upd_290_" + Math.floor(Math.random()*1000);
  let sha_Repository_upd_290 = "sha_Repository_upd_290_" + Math.floor(Math.random()*1000);
  userCurrentPutSubscription(body_Repository_upd_290, id_Repository_upd_290, limit_Repository_upd_290, owner_Repository_upd_290, page_Repository_upd_290, repo_Repository_upd_290, sha_Repository_upd_290, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Branches:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_300 = "CreateBranchRepoOption_Branches_300_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_300 = "UpdateBranchRepoOption_Branches_300_" + Math.floor(Math.random()*1000);
  let body_Branches_300 = {};
  let branch_Branches_300 = "branch_Branches_300_" + Math.floor(Math.random()*1000);
  let id_Branches_300 = RepositoryId;
  let limit_Branches_300 = Math.floor(Math.random() * 1000);
  let owner_Branches_300 = "owner_Branches_300_" + Math.floor(Math.random()*1000);
  let page_Branches_300 = Math.floor(Math.random() * 1000);
  let repo_Branches_300 = "repo_Branches_300_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_300, UpdateBranchRepoOption_Branches_300, body_Branches_300, branch_Branches_300, id_Branches_300, limit_Branches_300, owner_Branches_300, page_Branches_300, repo_Branches_300, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_300 = "CreateBranchRepoOption_Branches_upd_300_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_300 = "UpdateBranchRepoOption_Branches_upd_300_" + Math.floor(Math.random()*1000);
  let body_Branches_upd_300 = {};
  let branch_Branches_upd_300 = "branch_Branches_upd_300_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_300 = id_Branches_300;
  let limit_Branches_upd_300 = Math.floor(Math.random() * 1000);
  let owner_Branches_upd_300 = "owner_Branches_upd_300_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_300 = Math.floor(Math.random() * 1000);
  let repo_Branches_upd_300 = "repo_Branches_upd_300_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_300, UpdateBranchRepoOption_Branches_upd_300, body_Branches_upd_300, branch_Branches_upd_300, id_Branches_upd_300, limit_Branches_upd_300, owner_Branches_upd_300, page_Branches_upd_300, repo_Branches_upd_300, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_300, repo_Branches_300, branch_Branches_300, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Collaborators:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_310 = "AddCollaboratorOption_Collaborators_310_" + Math.floor(Math.random()*1000);
  let body_Collaborators_310 = {};
  let collaborator_Collaborators_310 = "collaborator_Collaborators_310_" + Math.floor(Math.random()*1000);
  let id_Collaborators_310 = RepositoryId;
  let limit_Collaborators_310 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_310 = "owner_Collaborators_310_" + Math.floor(Math.random()*1000);
  let page_Collaborators_310 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_310 = "repo_Collaborators_310_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_310, body_Collaborators_310, collaborator_Collaborators_310, id_Collaborators_310, limit_Collaborators_310, owner_Collaborators_310, page_Collaborators_310, repo_Collaborators_310, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_310, repo_Collaborators_310, collaborator_Collaborators_310, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repositories:linear:1", function () {
  // -> Creating Repositories
  let body_Repositories_320 = {};
  let filepath_Repositories_320 = "filepath_Repositories_320_" + Math.floor(Math.random()*1000);
  let id_Repositories_320 = Math.floor(Math.random() * 1000);
  let limit_Repositories_320 = Math.floor(Math.random() * 1000);
  let owner_Repositories_320 = "owner_Repositories_320_" + Math.floor(Math.random()*1000);
  let page_Repositories_320 = Math.floor(Math.random() * 1000);
  let repo_Repositories_320 = "repo_Repositories_320_" + Math.floor(Math.random()*1000);
  let username_Repositories_320 = "username_Repositories_320_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_320, filepath_Repositories_320, id_Repositories_320, limit_Repositories_320, owner_Repositories_320, page_Repositories_320, repo_Repositories_320, username_Repositories_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repositories
  let body_Repositories_upd_320 = {};
  let filepath_Repositories_upd_320 = "filepath_Repositories_upd_320_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_320 = id_Repositories_320;
  let limit_Repositories_upd_320 = Math.floor(Math.random() * 1000);
  let owner_Repositories_upd_320 = "owner_Repositories_upd_320_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_320 = Math.floor(Math.random() * 1000);
  let repo_Repositories_upd_320 = "repo_Repositories_upd_320_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_320 = "username_Repositories_upd_320_" + Math.floor(Math.random()*1000);
  repoUpdateFile(body_Repositories_upd_320, filepath_Repositories_upd_320, id_Repositories_upd_320, limit_Repositories_upd_320, owner_Repositories_upd_320, page_Repositories_upd_320, repo_Repositories_upd_320, username_Repositories_upd_320, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Forks:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_330 = {};
  let id_Forks_330 = RepositoryId;
  let limit_Forks_330 = Math.floor(Math.random() * 1000);
  let owner_Forks_330 = "owner_Forks_330_" + Math.floor(Math.random()*1000);
  let page_Forks_330 = Math.floor(Math.random() * 1000);
  let repo_Forks_330 = "repo_Forks_330_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_330, id_Forks_330, limit_Forks_330, owner_Forks_330, page_Forks_330, repo_Forks_330, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issue:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issue
  let body_Issue_340 = {};
  let id_Issue_340 = RepositoryId;
  let limit_Issue_340 = Math.floor(Math.random() * 1000);
  let name_Issue_340 = "name_Issue_340_" + Math.floor(Math.random()*1000);
  let owner_Issue_340 = "owner_Issue_340_" + Math.floor(Math.random()*1000);
  let page_Issue_340 = Math.floor(Math.random() * 1000);
  let repo_Issue_340 = "repo_Issue_340_" + Math.floor(Math.random()*1000);
  let state_Issue_340 = "state_Issue_340_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_340, id_Issue_340, limit_Issue_340, name_Issue_340, owner_Issue_340, page_Issue_340, repo_Issue_340, state_Issue_340, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentAttachments:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_350 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_350 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_350 = {};
  let id_IssueCommentAttachments_350 = IssuesId;
  let name_IssueCommentAttachments_350 = "name_IssueCommentAttachments_350_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_350 = "owner_IssueCommentAttachments_350_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_350 = "repo_IssueCommentAttachments_350_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_350, attachment_id_IssueCommentAttachments_350, body_IssueCommentAttachments_350, id_IssueCommentAttachments_350, name_IssueCommentAttachments_350, owner_IssueCommentAttachments_350, repo_IssueCommentAttachments_350, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_350 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_350 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_upd_350 = {};
  let id_IssueCommentAttachments_upd_350 = id_IssueCommentAttachments_350;
  let name_IssueCommentAttachments_upd_350 = "name_IssueCommentAttachments_upd_350_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_350 = "owner_IssueCommentAttachments_upd_350_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_350 = "repo_IssueCommentAttachments_upd_350_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_350, attachment_id_IssueCommentAttachments_upd_350, body_IssueCommentAttachments_upd_350, id_IssueCommentAttachments_upd_350, name_IssueCommentAttachments_upd_350, owner_IssueCommentAttachments_upd_350, repo_IssueCommentAttachments_upd_350, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_350, repo_IssueCommentAttachments_350, id_IssueCommentAttachments_350, attachment_id_IssueCommentAttachments_350, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentReactions:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_360 = {};
  let id_IssueCommentReactions_360 = IssuesId;
  let owner_IssueCommentReactions_360 = "owner_IssueCommentReactions_360_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_360 = "repo_IssueCommentReactions_360_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_360, id_IssueCommentReactions_360, owner_IssueCommentReactions_360, repo_IssueCommentReactions_360, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_360, repo_IssueCommentReactions_360, id_IssueCommentReactions_360, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueAttachments:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_370 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_370 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_370 = {};
  let id_IssueAttachments_370 = IssuesId;
  let index_IssueAttachments_370 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_370 = "name_IssueAttachments_370_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_370 = "owner_IssueAttachments_370_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_370 = "repo_IssueAttachments_370_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_370, attachment_id_IssueAttachments_370, body_IssueAttachments_370, id_IssueAttachments_370, index_IssueAttachments_370, name_IssueAttachments_370, owner_IssueAttachments_370, repo_IssueAttachments_370, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_370 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_370 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_upd_370 = {};
  let id_IssueAttachments_upd_370 = id_IssueAttachments_370;
  let index_IssueAttachments_upd_370 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_upd_370 = "name_IssueAttachments_upd_370_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_370 = "owner_IssueAttachments_upd_370_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_370 = "repo_IssueAttachments_upd_370_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_370, attachment_id_IssueAttachments_upd_370, body_IssueAttachments_upd_370, id_IssueAttachments_upd_370, index_IssueAttachments_upd_370, name_IssueAttachments_upd_370, owner_IssueAttachments_upd_370, repo_IssueAttachments_upd_370, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_370, repo_IssueAttachments_370, index_IssueAttachments_370, attachment_id_IssueAttachments_370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueBlocks:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_380 = {};
  let index_IssueBlocks_380 = "index_IssueBlocks_380_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_380 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_380 = "owner_IssueBlocks_380_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_380 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_380 = "repo_IssueBlocks_380_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_380, index_IssueBlocks_380, limit_IssueBlocks_380, owner_IssueBlocks_380, page_IssueBlocks_380, repo_IssueBlocks_380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_380, repo_IssueBlocks_380, index_IssueBlocks_380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueComments:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_390 = "before_IssueComments_390_" + Math.floor(Math.random()*1000);
  let body_IssueComments_390 = {};
  let id_IssueComments_390 = IssuesId;
  let index_IssueComments_390 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_390 = "owner_IssueComments_390_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_390 = "repo_IssueComments_390_" + Math.floor(Math.random()*1000);
  let since_IssueComments_390 = "since_IssueComments_390_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_390, body_IssueComments_390, id_IssueComments_390, index_IssueComments_390, owner_IssueComments_390, repo_IssueComments_390, since_IssueComments_390, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueComments
  let before_IssueComments_upd_390 = "before_IssueComments_upd_390_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_390 = {};
  let id_IssueComments_upd_390 = id_IssueComments_390;
  let index_IssueComments_upd_390 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_upd_390 = "owner_IssueComments_upd_390_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_390 = "repo_IssueComments_upd_390_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_390 = "since_IssueComments_upd_390_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_390, body_IssueComments_upd_390, id_IssueComments_upd_390, index_IssueComments_upd_390, owner_IssueComments_upd_390, repo_IssueComments_upd_390, since_IssueComments_upd_390, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_390, repo_IssueComments_390, index_IssueComments_390, id_IssueComments_390, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueSubscriptions:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_400 = IssuesId;
  let index_IssueSubscriptions_400 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_400 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_400 = "owner_IssueSubscriptions_400_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_400 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_400 = "repo_IssueSubscriptions_400_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_400 = "user_IssueSubscriptions_400_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_400, index_IssueSubscriptions_400, limit_IssueSubscriptions_400, owner_IssueSubscriptions_400, page_IssueSubscriptions_400, repo_IssueSubscriptions_400, user_IssueSubscriptions_400, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_400, repo_IssueSubscriptions_400, index_IssueSubscriptions_400, user_IssueSubscriptions_400, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueTimes:linear:1", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_410 = "before_IssueTimes_410_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_410 = {};
  let index_IssueTimes_410 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_410 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_410 = "owner_IssueTimes_410_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_410 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_410 = "repo_IssueTimes_410_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_410 = "since_IssueTimes_410_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_410 = "user_IssueTimes_410_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_410, body_IssueTimes_410, index_IssueTimes_410, limit_IssueTimes_410, owner_IssueTimes_410, page_IssueTimes_410, repo_IssueTimes_410, since_IssueTimes_410, user_IssueTimes_410, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_410, repo_IssueTimes_410, index_IssueTimes_410, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Keys:linear:1", function () {
  // -> Creating Keys
  let body_Keys_420 = {};
  let fingerprint_Keys_420 = "fingerprint_Keys_420_" + Math.floor(Math.random()*1000);
  let id_Keys_420 = Math.floor(Math.random() * 1000);
  let limit_Keys_420 = Math.floor(Math.random() * 1000);
  let page_Keys_420 = Math.floor(Math.random() * 1000);
  userCurrentPostKey(body_Keys_420, fingerprint_Keys_420, id_Keys_420, limit_Keys_420, page_Keys_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Keys
  userCurrentDeleteKey(id_Keys_420, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:PullRequests:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_440 = {};
  let id_PullRequests_440 = RepositoryId;
  let index_PullRequests_440 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_440 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_440 = "owner_PullRequests_440_" + Math.floor(Math.random()*1000);
  let page_PullRequests_440 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_440 = "repo_PullRequests_440_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_440 = "skip-to_PullRequests_440_" + Math.floor(Math.random()*1000);
  let style_PullRequests_440 = "style_PullRequests_440_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_440 = "whitespace_PullRequests_440_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_440, id_PullRequests_440, index_PullRequests_440, limit_PullRequests_440, owner_PullRequests_440, page_PullRequests_440, repo_PullRequests_440, skip_to_PullRequests_440, style_PullRequests_440, whitespace_PullRequests_440, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating PullRequests
  let body_PullRequests_upd_440 = {};
  let id_PullRequests_upd_440 = id_PullRequests_440;
  let index_PullRequests_upd_440 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_upd_440 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_upd_440 = "owner_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_440 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_upd_440 = "repo_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_440 = "skip-to_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  let style_PullRequests_upd_440 = "style_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_440 = "whitespace_PullRequests_upd_440_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_440, id_PullRequests_upd_440, index_PullRequests_upd_440, limit_PullRequests_upd_440, owner_PullRequests_upd_440, page_PullRequests_upd_440, repo_PullRequests_upd_440, skip_to_PullRequests_upd_440, style_PullRequests_upd_440, whitespace_PullRequests_upd_440, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewRequests:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_450 = {};
  let index_PullReviewRequests_450 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_450 = "owner_PullReviewRequests_450_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_450 = "repo_PullReviewRequests_450_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_450, index_PullReviewRequests_450, owner_PullReviewRequests_450, repo_PullReviewRequests_450, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_450, repo_PullReviewRequests_450, index_PullReviewRequests_450, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviews:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_460 = {};
  let id_PullReviews_460 = PullRequestsId;
  let index_PullReviews_460 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_460 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_460 = "owner_PullReviews_460_" + Math.floor(Math.random()*1000);
  let page_PullReviews_460 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_460 = "repo_PullReviews_460_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_460, id_PullReviews_460, index_PullReviews_460, limit_PullReviews_460, owner_PullReviews_460, page_PullReviews_460, repo_PullReviews_460, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewDismissals:linear:1", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_470 = {};
  let id_PullReviewDismissals_470 = PullReviewsId;
  let index_PullReviewDismissals_470 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_470 = "owner_PullReviewDismissals_470_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_470 = "repo_PullReviewDismissals_470_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_470, id_PullReviewDismissals_470, index_PullReviewDismissals_470, owner_PullReviewDismissals_470, repo_PullReviewDismissals_470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewUndismissals:linear:1", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_480 = PullReviewsId;
  let index_PullReviewUndismissals_480 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_480 = "owner_PullReviewUndismissals_480_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_480 = "repo_PullReviewUndismissals_480_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_480, index_PullReviewUndismissals_480, owner_PullReviewUndismissals_480, repo_PullReviewUndismissals_480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PushMirrors:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_490 = RepositoriesId;
  let limit_PushMirrors_490 = Math.floor(Math.random() * 1000);
  let name_PushMirrors_490 = "name_PushMirrors_490_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_490 = "owner_PushMirrors_490_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_490 = Math.floor(Math.random() * 1000);
  let repo_PushMirrors_490 = "repo_PushMirrors_490_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_490, limit_PushMirrors_490, name_PushMirrors_490, owner_PushMirrors_490, page_PushMirrors_490, repo_PushMirrors_490, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PushMirrors
  repoDeletePushMirror(owner_PushMirrors_490, repo_PushMirrors_490, name_PushMirrors_490, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Releases:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_500 = {};
  let draft_Releases_500 = true;
  let id_Releases_500 = RepositoryId;
  let limit_Releases_500 = Math.floor(Math.random() * 1000);
  let owner_Releases_500 = "owner_Releases_500_" + Math.floor(Math.random()*1000);
  let page_Releases_500 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_500 = true;
  let repo_Releases_500 = "repo_Releases_500_" + Math.floor(Math.random()*1000);
  let tag_Releases_500 = "tag_Releases_500_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_500, draft_Releases_500, id_Releases_500, limit_Releases_500, owner_Releases_500, page_Releases_500, pre_release_Releases_500, repo_Releases_500, tag_Releases_500, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Releases
  let body_Releases_upd_500 = {};
  let draft_Releases_upd_500 = true;
  let id_Releases_upd_500 = id_Releases_500;
  let limit_Releases_upd_500 = Math.floor(Math.random() * 1000);
  let owner_Releases_upd_500 = "owner_Releases_upd_500_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_500 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_upd_500 = true;
  let repo_Releases_upd_500 = "repo_Releases_upd_500_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_500 = "tag_Releases_upd_500_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_500, draft_Releases_upd_500, id_Releases_upd_500, limit_Releases_upd_500, owner_Releases_upd_500, page_Releases_upd_500, pre_release_Releases_upd_500, repo_Releases_upd_500, tag_Releases_upd_500, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:ReleaseAttachments:linear:1", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_510 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_510 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_510 = {};
  let id_ReleaseAttachments_510 = ReleasesId;
  let name_ReleaseAttachments_510 = "name_ReleaseAttachments_510_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_510 = "owner_ReleaseAttachments_510_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_510 = "repo_ReleaseAttachments_510_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_510, attachment_id_ReleaseAttachments_510, body_ReleaseAttachments_510, id_ReleaseAttachments_510, name_ReleaseAttachments_510, owner_ReleaseAttachments_510, repo_ReleaseAttachments_510, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_510 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_510 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_upd_510 = {};
  let id_ReleaseAttachments_upd_510 = id_ReleaseAttachments_510;
  let name_ReleaseAttachments_upd_510 = "name_ReleaseAttachments_upd_510_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_510 = "owner_ReleaseAttachments_upd_510_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_510 = "repo_ReleaseAttachments_upd_510_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_510, attachment_id_ReleaseAttachments_upd_510, body_ReleaseAttachments_upd_510, id_ReleaseAttachments_upd_510, name_ReleaseAttachments_upd_510, owner_ReleaseAttachments_upd_510, repo_ReleaseAttachments_upd_510, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_510, repo_ReleaseAttachments_510, id_ReleaseAttachments_510, attachment_id_ReleaseAttachments_510, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TagProtections:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_520 = {};
  let id_TagProtections_520 = RepositoryId;
  let owner_TagProtections_520 = "owner_TagProtections_520_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_520 = "repo_TagProtections_520_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_520, id_TagProtections_520, owner_TagProtections_520, repo_TagProtections_520, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating TagProtections
  let body_TagProtections_upd_520 = {};
  let id_TagProtections_upd_520 = id_TagProtections_520;
  let owner_TagProtections_upd_520 = "owner_TagProtections_upd_520_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_520 = "repo_TagProtections_upd_520_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_520, id_TagProtections_upd_520, owner_TagProtections_upd_520, repo_TagProtections_upd_520, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_520, repo_TagProtections_520, id_TagProtections_520, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Tags:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_530 = {};
  let id_Tags_530 = RepositoryId;
  let limit_Tags_530 = Math.floor(Math.random() * 1000);
  let owner_Tags_530 = "owner_Tags_530_" + Math.floor(Math.random()*1000);
  let page_Tags_530 = Math.floor(Math.random() * 1000);
  let repo_Tags_530 = "repo_Tags_530_" + Math.floor(Math.random()*1000);
  let tag_Tags_530 = "tag_Tags_530_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_530, id_Tags_530, limit_Tags_530, owner_Tags_530, page_Tags_530, repo_Tags_530, tag_Tags_530, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Tags
  repoDeleteTag(owner_Tags_530, repo_Tags_530, tag_Tags_530, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Topics:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_540 = {};
  let limit_Topics_540 = Math.floor(Math.random() * 1000);
  let owner_Topics_540 = "owner_Topics_540_" + Math.floor(Math.random()*1000);
  let page_Topics_540 = Math.floor(Math.random() * 1000);
  let q_Topics_540 = "q_Topics_540_" + Math.floor(Math.random()*1000);
  let repo_Topics_540 = "repo_Topics_540_" + Math.floor(Math.random()*1000);
  let topic_Topics_540 = "topic_Topics_540_" + Math.floor(Math.random()*1000);
  let topic1_Topics_540 = "topic1_Topics_540_" + Math.floor(Math.random()*1000);
  let topic2_Topics_540 = "topic2_Topics_540_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_540, limit_Topics_540, owner_Topics_540, page_Topics_540, q_Topics_540, repo_Topics_540, topic_Topics_540, topic1_Topics_540, topic2_Topics_540, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Topics
  let body_Topics_upd_540 = {};
  let limit_Topics_upd_540 = Math.floor(Math.random() * 1000);
  let owner_Topics_upd_540 = owner_Topics_540;
  let page_Topics_upd_540 = Math.floor(Math.random() * 1000);
  let q_Topics_upd_540 = "q_Topics_upd_540_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_540 = "repo_Topics_upd_540_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_540 = "topic_Topics_upd_540_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_540 = "topic1_Topics_upd_540_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_540 = "topic2_Topics_upd_540_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_540, limit_Topics_upd_540, owner_Topics_upd_540, page_Topics_upd_540, q_Topics_upd_540, repo_Topics_upd_540, topic_Topics_upd_540, topic1_Topics_upd_540, topic2_Topics_upd_540, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_540, repo_Topics_540, topic_Topics_540, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:RepositoryTransfer:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_550 = {};
  let id_RepositoryTransfer_550 = RepositoriesId;
  let owner_RepositoryTransfer_550 = "owner_RepositoryTransfer_550_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_550 = "repo_RepositoryTransfer_550_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_550 = "transferOptions_RepositoryTransfer_550_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_550, id_RepositoryTransfer_550, owner_RepositoryTransfer_550, repo_RepositoryTransfer_550, transferOptions_RepositoryTransfer_550, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:WikiPage:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_560 = {};
  let id_WikiPage_560 = RepositoryId;
  let owner_WikiPage_560 = "owner_WikiPage_560_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_560 = "pageName_WikiPage_560_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_560 = "repo_WikiPage_560_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_560 = "wikiPageOptions_WikiPage_560_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_560, id_WikiPage_560, owner_WikiPage_560, pageName_WikiPage_560, repo_WikiPage_560, wikiPageOptions_WikiPage_560, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating WikiPage
  let body_WikiPage_upd_560 = {};
  let id_WikiPage_upd_560 = id_WikiPage_560;
  let owner_WikiPage_upd_560 = "owner_WikiPage_upd_560_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_560 = "pageName_WikiPage_upd_560_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_560 = "repo_WikiPage_upd_560_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_560 = "wikiPageOptions_WikiPage_upd_560_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_560, id_WikiPage_upd_560, owner_WikiPage_upd_560, pageName_WikiPage_upd_560, repo_WikiPage_upd_560, wikiPageOptions_WikiPage_upd_560, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_560, repo_WikiPage_560, pageName_WikiPage_560, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamMembers:linear:1", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_570 = OrganizationTeamsId;
  let limit_TeamMembers_570 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_570 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_570 = "username_TeamMembers_570_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_570, limit_TeamMembers_570, page_TeamMembers_570, username_TeamMembers_570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamRepos:linear:1", function () {
  let deps = {};
  deps["OrganizationRepos"] = matchAnyOrganizationReposAdded();
  let pkMap = {"OrganizationRepos": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationReposId = captured["OrganizationRepos"];
  // -> Creating TeamRepos
  let id_TeamRepos_580 = OrganizationReposId;
  let limit_TeamRepos_580 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_580 = "org_TeamRepos_580_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_580 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_580 = "repo_TeamRepos_580_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_580, limit_TeamRepos_580, org_TeamRepos_580, page_TeamRepos_580, repo_TeamRepos_580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserVariables:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_590 = {};
  let variablename_UserVariables_590 = "variablename_UserVariables_590_" + Math.floor(Math.random()*1000);
  createUserVariable(body_UserVariables_590, variablename_UserVariables_590, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating UserVariables
  let body_UserVariables_upd_590 = {};
  let variablename_UserVariables_upd_590 = variablename_UserVariables_590;
  updateUserVariable(body_UserVariables_upd_590, variablename_UserVariables_upd_590, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserVariables
  deleteUserVariable(variablename_UserVariables_590, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OAuth2Applications:linear:1", function () {
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_600 = {};
  let id_OAuth2Applications_600 = Math.floor(Math.random() * 1000);
  let limit_OAuth2Applications_600 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_600 = Math.floor(Math.random() * 1000);
  userCreateOAuth2Application(body_OAuth2Applications_600, id_OAuth2Applications_600, limit_OAuth2Applications_600, page_OAuth2Applications_600, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_600 = {};
  let id_OAuth2Applications_upd_600 = id_OAuth2Applications_600;
  let limit_OAuth2Applications_upd_600 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_upd_600 = Math.floor(Math.random() * 1000);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_600, id_OAuth2Applications_upd_600, limit_OAuth2Applications_upd_600, page_OAuth2Applications_upd_600, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OAuth2Applications
  userDeleteOAuth2Application(id_OAuth2Applications_600, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserAvatar:linear:1", function () {
  // -> Creating UserAvatar
  let body_UserAvatar_610 = {};
  let id_UserAvatar_610 = "id_UserAvatar_610_" + Math.floor(Math.random()*1000);
  userUpdateAvatar(body_UserAvatar_610, id_UserAvatar_610, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserAvatar
  userDeleteAvatar(id_UserAvatar_610, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserEmails:linear:1", function () {
  // -> Creating UserEmails
  let body_UserEmails_620 = {};
  let id_UserEmails_620 = "id_UserEmails_620_" + Math.floor(Math.random()*1000);
  userAddEmail(body_UserEmails_620, id_UserEmails_620, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserEmails
  userDeleteEmail(id_UserEmails_620, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeys:linear:1", function () {
  // -> Creating GPGKeys
  let Form_GPGKeys_630 = {};
  let id_GPGKeys_630 = Math.floor(Math.random() * 1000);
  let limit_GPGKeys_630 = Math.floor(Math.random() * 1000);
  let page_GPGKeys_630 = Math.floor(Math.random() * 1000);
  userCurrentPostGPGKey(Form_GPGKeys_630, id_GPGKeys_630, limit_GPGKeys_630, page_GPGKeys_630, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GPGKeys
  userCurrentDeleteGPGKey(id_GPGKeys_630, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeyVerification:linear:1", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_640 = "id_GPGKeyVerification_640_" + Math.floor(Math.random()*1000);
  userVerifyGPGKey(id_GPGKeyVerification_640, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserStarred:linear:1", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating UserStarred
  let limit_UserStarred_650 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_650 = "owner_UserStarred_650_" + Math.floor(Math.random()*1000);
  let page_UserStarred_650 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_650 = "repo_UserStarred_650_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_650, owner_UserStarred_650, page_UserStarred_650, repo_UserStarred_650, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_650, repo_UserStarred_650, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:AdminCron:linear:2", function () {
  // -> Creating AdminCron
  let id_AdminCron_670 = "id_AdminCron_670_" + Math.floor(Math.random()*1000);
  let limit_AdminCron_670 = Math.floor(Math.random() * 1000);
  let page_AdminCron_670 = Math.floor(Math.random() * 1000);
  let task_AdminCron_670 = "task_AdminCron_670_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_670, limit_AdminCron_670, page_AdminCron_670, task_AdminCron_670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Hooks:linear:2", function () {
  // -> Creating Hooks
  let body_Hooks_680 = {};
  let id_Hooks_680 = Math.floor(Math.random() * 1000);
  let limit_Hooks_680 = Math.floor(Math.random() * 1000);
  let page_Hooks_680 = Math.floor(Math.random() * 1000);
  userCreateHook(body_Hooks_680, id_Hooks_680, limit_Hooks_680, page_Hooks_680, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Hooks
  let body_Hooks_upd_680 = {};
  let id_Hooks_upd_680 = id_Hooks_680;
  let limit_Hooks_upd_680 = Math.floor(Math.random() * 1000);
  let page_Hooks_upd_680 = Math.floor(Math.random() * 1000);
  userEditHook(body_Hooks_upd_680, id_Hooks_upd_680, limit_Hooks_upd_680, page_Hooks_upd_680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Hooks
  userDeleteHook(id_Hooks_680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UnadoptedRepositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_690 = Math.floor(Math.random() * 1000);
  let owner_UnadoptedRepositories_690 = "owner_UnadoptedRepositories_690_" + Math.floor(Math.random()*1000);
  let page_UnadoptedRepositories_690 = Math.floor(Math.random() * 1000);
  let pattern_UnadoptedRepositories_690 = "pattern_UnadoptedRepositories_690_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_690 = "repo_UnadoptedRepositories_690_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_690, owner_UnadoptedRepositories_690, page_UnadoptedRepositories_690, pattern_UnadoptedRepositories_690, repo_UnadoptedRepositories_690, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UnadoptedRepositories
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_690, repo_UnadoptedRepositories_690, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_700 = "CreateAccessTokenOption_Users_700_" + Math.floor(Math.random()*1000);
  let body_Users_700 = {};
  let limit_Users_700 = Math.floor(Math.random() * 1000);
  let page_Users_700 = Math.floor(Math.random() * 1000);
  let purge_Users_700 = true;
  let token_Users_700 = "token_Users_700_" + Math.floor(Math.random()*1000);
  let username_Users_700 = "username_Users_700_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_700, body_Users_700, limit_Users_700, page_Users_700, purge_Users_700, token_Users_700, username_Users_700, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let CreateAccessTokenOption_Users_upd_700 = "CreateAccessTokenOption_Users_upd_700_" + Math.floor(Math.random()*1000);
  let body_Users_upd_700 = {};
  let limit_Users_upd_700 = Math.floor(Math.random() * 1000);
  let page_Users_upd_700 = Math.floor(Math.random() * 1000);
  let purge_Users_upd_700 = true;
  let token_Users_upd_700 = "token_Users_upd_700_" + Math.floor(Math.random()*1000);
  let username_Users_upd_700 = username_Users_700;
  adminEditUser(CreateAccessTokenOption_Users_upd_700, body_Users_upd_700, limit_Users_upd_700, page_Users_upd_700, purge_Users_upd_700, token_Users_upd_700, username_Users_upd_700, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserBadges:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let body_UserBadges_710 = {};
  let username_UserBadges_710 = UsersId;
  adminAddUserBadges(body_UserBadges_710, username_UserBadges_710, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserBadges
  adminDeleteUserBadges(username_UserBadges_710, { expectedResponseCodes: [200, 201, 204] });

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

  // -> Deleting UserKeys
  adminDeleteUser(username_UserKeys_720, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserOrganizations:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_730 = "id_UserOrganizations_730_" + Math.floor(Math.random()*1000);
  let organization_UserOrganizations_730 = "organization_UserOrganizations_730_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_730 = UsersId;
  adminCreateOrg(id_UserOrganizations_730, organization_UserOrganizations_730, username_UserOrganizations_730, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRename:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_740 = "body_UserRename_740_" + Math.floor(Math.random()*1000);
  let id_UserRename_740 = "id_UserRename_740_" + Math.floor(Math.random()*1000);
  let username_UserRename_740 = UsersId;
  adminRenameUser(body_UserRename_740, id_UserRename_740, username_UserRename_740, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRepositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_750 = "id_UserRepositories_750_" + Math.floor(Math.random()*1000);
  let repository_UserRepositories_750 = "repository_UserRepositories_750_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_750 = UsersId;
  adminCreateRepo(id_UserRepositories_750, repository_UserRepositories_750, username_UserRepositories_750, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markdown:linear:2", function () {
  // -> Creating Markdown
  let body_Markdown_760 = "body_Markdown_760_" + Math.floor(Math.random()*1000);
  let id_Markdown_760 = "id_Markdown_760_" + Math.floor(Math.random()*1000);
  renderMarkdown(body_Markdown_760, id_Markdown_760, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markup:linear:2", function () {
  // -> Creating Markup
  let body_Markup_770 = {};
  let id_Markup_770 = "id_Markup_770_" + Math.floor(Math.random()*1000);
  renderMarkup(body_Markup_770, id_Markup_770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Organization:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Organization
  let body_Organization_780 = {};
  let limit_Organization_780 = Math.floor(Math.random() * 1000);
  let org_Organization_780 = "org_Organization_780_" + Math.floor(Math.random()*1000);
  let page_Organization_780 = Math.floor(Math.random() * 1000);
  let secretname_Organization_780 = "secretname_Organization_780_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_780, limit_Organization_780, org_Organization_780, page_Organization_780, secretname_Organization_780, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Organization
  let body_Organization_upd_780 = {};
  let limit_Organization_upd_780 = Math.floor(Math.random() * 1000);
  let org_Organization_upd_780 = org_Organization_780;
  let page_Organization_upd_780 = Math.floor(Math.random() * 1000);
  let secretname_Organization_upd_780 = "secretname_Organization_upd_780_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_780, limit_Organization_upd_780, org_Organization_upd_780, page_Organization_upd_780, secretname_Organization_upd_780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Variables:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_790 = "CreateVariableOption_Variables_790_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_790 = "UpdateVariableOption_Variables_790_" + Math.floor(Math.random()*1000);
  let body_Variables_790 = {};
  let id_Variables_790 = RepositoriesId;
  let limit_Variables_790 = Math.floor(Math.random() * 1000);
  let owner_Variables_790 = "owner_Variables_790_" + Math.floor(Math.random()*1000);
  let page_Variables_790 = Math.floor(Math.random() * 1000);
  let repo_Variables_790 = "repo_Variables_790_" + Math.floor(Math.random()*1000);
  let variablename_Variables_790 = "variablename_Variables_790_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_790, UpdateVariableOption_Variables_790, body_Variables_790, id_Variables_790, limit_Variables_790, owner_Variables_790, page_Variables_790, repo_Variables_790, variablename_Variables_790, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Variables
  let CreateVariableOption_Variables_upd_790 = "CreateVariableOption_Variables_upd_790_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_790 = "UpdateVariableOption_Variables_upd_790_" + Math.floor(Math.random()*1000);
  let body_Variables_upd_790 = {};
  let id_Variables_upd_790 = id_Variables_790;
  let limit_Variables_upd_790 = Math.floor(Math.random() * 1000);
  let owner_Variables_upd_790 = "owner_Variables_upd_790_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_790 = Math.floor(Math.random() * 1000);
  let repo_Variables_upd_790 = "repo_Variables_upd_790_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_790 = "variablename_Variables_upd_790_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_790, UpdateVariableOption_Variables_upd_790, body_Variables_upd_790, id_Variables_upd_790, limit_Variables_upd_790, owner_Variables_upd_790, page_Variables_upd_790, repo_Variables_upd_790, variablename_Variables_upd_790, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Variables
  deleteRepoVariable(owner_Variables_790, repo_Variables_790, variablename_Variables_790, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Avatar:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating Avatar
  let body_Avatar_800 = {};
  let org_Avatar_800 = OrganizationId;
  orgUpdateAvatar(body_Avatar_800, org_Avatar_800, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Avatar
  orgDeleteAvatar(org_Avatar_800, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Labels:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Labels
  let body_Labels_810 = {};
  let color_Labels_810 = "color_Labels_810_" + Math.floor(Math.random()*1000);
  let description_Labels_810 = "description_Labels_810_" + Math.floor(Math.random()*1000);
  let id_Labels_810 = RepositoryId;
  let limit_Labels_810 = Math.floor(Math.random() * 1000);
  let name_Labels_810 = "name_Labels_810_" + Math.floor(Math.random()*1000);
  let owner_Labels_810 = "owner_Labels_810_" + Math.floor(Math.random()*1000);
  let page_Labels_810 = Math.floor(Math.random() * 1000);
  let repo_Labels_810 = "repo_Labels_810_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_810, color_Labels_810, description_Labels_810, id_Labels_810, limit_Labels_810, name_Labels_810, owner_Labels_810, page_Labels_810, repo_Labels_810, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Labels
  let body_Labels_upd_810 = {};
  let color_Labels_upd_810 = "color_Labels_upd_810_" + Math.floor(Math.random()*1000);
  let description_Labels_upd_810 = "description_Labels_upd_810_" + Math.floor(Math.random()*1000);
  let id_Labels_upd_810 = id_Labels_810;
  let limit_Labels_upd_810 = Math.floor(Math.random() * 1000);
  let name_Labels_upd_810 = "name_Labels_upd_810_" + Math.floor(Math.random()*1000);
  let owner_Labels_upd_810 = "owner_Labels_upd_810_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_810 = Math.floor(Math.random() * 1000);
  let repo_Labels_upd_810 = "repo_Labels_upd_810_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_810, color_Labels_upd_810, description_Labels_upd_810, id_Labels_upd_810, limit_Labels_upd_810, name_Labels_upd_810, owner_Labels_upd_810, page_Labels_upd_810, repo_Labels_upd_810, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Labels
  issueDeleteLabel(owner_Labels_810, repo_Labels_810, id_Labels_810, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationRepos:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_820 = {};
  let id_OrganizationRepos_820 = "id_OrganizationRepos_820_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_820 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_820 = OrganizationId;
  let page_OrganizationRepos_820 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_820, id_OrganizationRepos_820, limit_OrganizationRepos_820, org_OrganizationRepos_820, page_OrganizationRepos_820, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationTeams:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_830 = {};
  let id_OrganizationTeams_830 = "id_OrganizationTeams_830_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_830 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_830 = OrganizationId;
  let page_OrganizationTeams_830 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_830, id_OrganizationTeams_830, limit_OrganizationTeams_830, org_OrganizationTeams_830, page_OrganizationTeams_830, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issues:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issues
  let content_Issues_840 = {};
  let id_Issues_840 = RepositoryId;
  let index_Issues_840 = Math.floor(Math.random() * 1000);
  let limit_Issues_840 = Math.floor(Math.random() * 1000);
  let owner_Issues_840 = "owner_Issues_840_" + Math.floor(Math.random()*1000);
  let page_Issues_840 = Math.floor(Math.random() * 1000);
  let position_Issues_840 = Math.floor(Math.random() * 1000);
  let repo_Issues_840 = "repo_Issues_840_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_840, id_Issues_840, index_Issues_840, limit_Issues_840, owner_Issues_840, page_Issues_840, position_Issues_840, repo_Issues_840, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Issues
  let content_Issues_upd_840 = {};
  let id_Issues_upd_840 = id_Issues_840;
  let index_Issues_upd_840 = Math.floor(Math.random() * 1000);
  let limit_Issues_upd_840 = Math.floor(Math.random() * 1000);
  let owner_Issues_upd_840 = "owner_Issues_upd_840_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_840 = Math.floor(Math.random() * 1000);
  let position_Issues_upd_840 = Math.floor(Math.random() * 1000);
  let repo_Issues_upd_840 = "repo_Issues_upd_840_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_840, id_Issues_upd_840, index_Issues_upd_840, limit_Issues_upd_840, owner_Issues_upd_840, page_Issues_upd_840, position_Issues_upd_840, repo_Issues_upd_840, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repository:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Repository
  let body_Repository_850 = {};
  let id_Repository_850 = RepositoriesId;
  let limit_Repository_850 = Math.floor(Math.random() * 1000);
  let owner_Repository_850 = "owner_Repository_850_" + Math.floor(Math.random()*1000);
  let page_Repository_850 = Math.floor(Math.random() * 1000);
  let repo_Repository_850 = "repo_Repository_850_" + Math.floor(Math.random()*1000);
  let sha_Repository_850 = "sha_Repository_850_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_850, id_Repository_850, limit_Repository_850, owner_Repository_850, page_Repository_850, repo_Repository_850, sha_Repository_850, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repository
  let body_Repository_upd_850 = {};
  let id_Repository_upd_850 = id_Repository_850;
  let limit_Repository_upd_850 = Math.floor(Math.random() * 1000);
  let owner_Repository_upd_850 = "owner_Repository_upd_850_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_850 = Math.floor(Math.random() * 1000);
  let repo_Repository_upd_850 = "repo_Repository_upd_850_" + Math.floor(Math.random()*1000);
  let sha_Repository_upd_850 = "sha_Repository_upd_850_" + Math.floor(Math.random()*1000);
  userCurrentPutSubscription(body_Repository_upd_850, id_Repository_upd_850, limit_Repository_upd_850, owner_Repository_upd_850, page_Repository_upd_850, repo_Repository_upd_850, sha_Repository_upd_850, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Branches:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_860 = "CreateBranchRepoOption_Branches_860_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_860 = "UpdateBranchRepoOption_Branches_860_" + Math.floor(Math.random()*1000);
  let body_Branches_860 = {};
  let branch_Branches_860 = "branch_Branches_860_" + Math.floor(Math.random()*1000);
  let id_Branches_860 = RepositoryId;
  let limit_Branches_860 = Math.floor(Math.random() * 1000);
  let owner_Branches_860 = "owner_Branches_860_" + Math.floor(Math.random()*1000);
  let page_Branches_860 = Math.floor(Math.random() * 1000);
  let repo_Branches_860 = "repo_Branches_860_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_860, UpdateBranchRepoOption_Branches_860, body_Branches_860, branch_Branches_860, id_Branches_860, limit_Branches_860, owner_Branches_860, page_Branches_860, repo_Branches_860, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_860 = "CreateBranchRepoOption_Branches_upd_860_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_860 = "UpdateBranchRepoOption_Branches_upd_860_" + Math.floor(Math.random()*1000);
  let body_Branches_upd_860 = {};
  let branch_Branches_upd_860 = "branch_Branches_upd_860_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_860 = id_Branches_860;
  let limit_Branches_upd_860 = Math.floor(Math.random() * 1000);
  let owner_Branches_upd_860 = "owner_Branches_upd_860_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_860 = Math.floor(Math.random() * 1000);
  let repo_Branches_upd_860 = "repo_Branches_upd_860_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_860, UpdateBranchRepoOption_Branches_upd_860, body_Branches_upd_860, branch_Branches_upd_860, id_Branches_upd_860, limit_Branches_upd_860, owner_Branches_upd_860, page_Branches_upd_860, repo_Branches_upd_860, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_860, repo_Branches_860, branch_Branches_860, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Collaborators:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_870 = "AddCollaboratorOption_Collaborators_870_" + Math.floor(Math.random()*1000);
  let body_Collaborators_870 = {};
  let collaborator_Collaborators_870 = "collaborator_Collaborators_870_" + Math.floor(Math.random()*1000);
  let id_Collaborators_870 = RepositoryId;
  let limit_Collaborators_870 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_870 = "owner_Collaborators_870_" + Math.floor(Math.random()*1000);
  let page_Collaborators_870 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_870 = "repo_Collaborators_870_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_870, body_Collaborators_870, collaborator_Collaborators_870, id_Collaborators_870, limit_Collaborators_870, owner_Collaborators_870, page_Collaborators_870, repo_Collaborators_870, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_870, repo_Collaborators_870, collaborator_Collaborators_870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repositories:linear:2", function () {
  // -> Creating Repositories
  let body_Repositories_880 = {};
  let filepath_Repositories_880 = "filepath_Repositories_880_" + Math.floor(Math.random()*1000);
  let id_Repositories_880 = Math.floor(Math.random() * 1000);
  let limit_Repositories_880 = Math.floor(Math.random() * 1000);
  let owner_Repositories_880 = "owner_Repositories_880_" + Math.floor(Math.random()*1000);
  let page_Repositories_880 = Math.floor(Math.random() * 1000);
  let repo_Repositories_880 = "repo_Repositories_880_" + Math.floor(Math.random()*1000);
  let username_Repositories_880 = "username_Repositories_880_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_880, filepath_Repositories_880, id_Repositories_880, limit_Repositories_880, owner_Repositories_880, page_Repositories_880, repo_Repositories_880, username_Repositories_880, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repositories
  let body_Repositories_upd_880 = {};
  let filepath_Repositories_upd_880 = "filepath_Repositories_upd_880_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_880 = id_Repositories_880;
  let limit_Repositories_upd_880 = Math.floor(Math.random() * 1000);
  let owner_Repositories_upd_880 = "owner_Repositories_upd_880_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_880 = Math.floor(Math.random() * 1000);
  let repo_Repositories_upd_880 = "repo_Repositories_upd_880_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_880 = "username_Repositories_upd_880_" + Math.floor(Math.random()*1000);
  repoUpdateFile(body_Repositories_upd_880, filepath_Repositories_upd_880, id_Repositories_upd_880, limit_Repositories_upd_880, owner_Repositories_upd_880, page_Repositories_upd_880, repo_Repositories_upd_880, username_Repositories_upd_880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Forks:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_890 = {};
  let id_Forks_890 = RepositoryId;
  let limit_Forks_890 = Math.floor(Math.random() * 1000);
  let owner_Forks_890 = "owner_Forks_890_" + Math.floor(Math.random()*1000);
  let page_Forks_890 = Math.floor(Math.random() * 1000);
  let repo_Forks_890 = "repo_Forks_890_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_890, id_Forks_890, limit_Forks_890, owner_Forks_890, page_Forks_890, repo_Forks_890, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issue:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issue
  let body_Issue_900 = {};
  let id_Issue_900 = RepositoryId;
  let limit_Issue_900 = Math.floor(Math.random() * 1000);
  let name_Issue_900 = "name_Issue_900_" + Math.floor(Math.random()*1000);
  let owner_Issue_900 = "owner_Issue_900_" + Math.floor(Math.random()*1000);
  let page_Issue_900 = Math.floor(Math.random() * 1000);
  let repo_Issue_900 = "repo_Issue_900_" + Math.floor(Math.random()*1000);
  let state_Issue_900 = "state_Issue_900_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_900, id_Issue_900, limit_Issue_900, name_Issue_900, owner_Issue_900, page_Issue_900, repo_Issue_900, state_Issue_900, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentAttachments:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_910 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_910 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_910 = {};
  let id_IssueCommentAttachments_910 = IssuesId;
  let name_IssueCommentAttachments_910 = "name_IssueCommentAttachments_910_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_910 = "owner_IssueCommentAttachments_910_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_910 = "repo_IssueCommentAttachments_910_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_910, attachment_id_IssueCommentAttachments_910, body_IssueCommentAttachments_910, id_IssueCommentAttachments_910, name_IssueCommentAttachments_910, owner_IssueCommentAttachments_910, repo_IssueCommentAttachments_910, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_910 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_910 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_upd_910 = {};
  let id_IssueCommentAttachments_upd_910 = id_IssueCommentAttachments_910;
  let name_IssueCommentAttachments_upd_910 = "name_IssueCommentAttachments_upd_910_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_910 = "owner_IssueCommentAttachments_upd_910_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_910 = "repo_IssueCommentAttachments_upd_910_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_910, attachment_id_IssueCommentAttachments_upd_910, body_IssueCommentAttachments_upd_910, id_IssueCommentAttachments_upd_910, name_IssueCommentAttachments_upd_910, owner_IssueCommentAttachments_upd_910, repo_IssueCommentAttachments_upd_910, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_910, repo_IssueCommentAttachments_910, id_IssueCommentAttachments_910, attachment_id_IssueCommentAttachments_910, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentReactions:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_920 = {};
  let id_IssueCommentReactions_920 = IssuesId;
  let owner_IssueCommentReactions_920 = "owner_IssueCommentReactions_920_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_920 = "repo_IssueCommentReactions_920_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_920, id_IssueCommentReactions_920, owner_IssueCommentReactions_920, repo_IssueCommentReactions_920, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_920, repo_IssueCommentReactions_920, id_IssueCommentReactions_920, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueAttachments:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_930 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_930 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_930 = {};
  let id_IssueAttachments_930 = IssuesId;
  let index_IssueAttachments_930 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_930 = "name_IssueAttachments_930_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_930 = "owner_IssueAttachments_930_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_930 = "repo_IssueAttachments_930_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_930, attachment_id_IssueAttachments_930, body_IssueAttachments_930, id_IssueAttachments_930, index_IssueAttachments_930, name_IssueAttachments_930, owner_IssueAttachments_930, repo_IssueAttachments_930, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_930 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_930 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_upd_930 = {};
  let id_IssueAttachments_upd_930 = id_IssueAttachments_930;
  let index_IssueAttachments_upd_930 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_upd_930 = "name_IssueAttachments_upd_930_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_930 = "owner_IssueAttachments_upd_930_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_930 = "repo_IssueAttachments_upd_930_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_930, attachment_id_IssueAttachments_upd_930, body_IssueAttachments_upd_930, id_IssueAttachments_upd_930, index_IssueAttachments_upd_930, name_IssueAttachments_upd_930, owner_IssueAttachments_upd_930, repo_IssueAttachments_upd_930, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_930, repo_IssueAttachments_930, index_IssueAttachments_930, attachment_id_IssueAttachments_930, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueBlocks:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_940 = {};
  let index_IssueBlocks_940 = "index_IssueBlocks_940_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_940 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_940 = "owner_IssueBlocks_940_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_940 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_940 = "repo_IssueBlocks_940_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_940, index_IssueBlocks_940, limit_IssueBlocks_940, owner_IssueBlocks_940, page_IssueBlocks_940, repo_IssueBlocks_940, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_940, repo_IssueBlocks_940, index_IssueBlocks_940, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueComments:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_950 = "before_IssueComments_950_" + Math.floor(Math.random()*1000);
  let body_IssueComments_950 = {};
  let id_IssueComments_950 = IssuesId;
  let index_IssueComments_950 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_950 = "owner_IssueComments_950_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_950 = "repo_IssueComments_950_" + Math.floor(Math.random()*1000);
  let since_IssueComments_950 = "since_IssueComments_950_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_950, body_IssueComments_950, id_IssueComments_950, index_IssueComments_950, owner_IssueComments_950, repo_IssueComments_950, since_IssueComments_950, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueComments
  let before_IssueComments_upd_950 = "before_IssueComments_upd_950_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_950 = {};
  let id_IssueComments_upd_950 = id_IssueComments_950;
  let index_IssueComments_upd_950 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_upd_950 = "owner_IssueComments_upd_950_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_950 = "repo_IssueComments_upd_950_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_950 = "since_IssueComments_upd_950_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_950, body_IssueComments_upd_950, id_IssueComments_upd_950, index_IssueComments_upd_950, owner_IssueComments_upd_950, repo_IssueComments_upd_950, since_IssueComments_upd_950, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_950, repo_IssueComments_950, index_IssueComments_950, id_IssueComments_950, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueSubscriptions:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_960 = IssuesId;
  let index_IssueSubscriptions_960 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_960 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_960 = "owner_IssueSubscriptions_960_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_960 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_960 = "repo_IssueSubscriptions_960_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_960 = "user_IssueSubscriptions_960_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_960, index_IssueSubscriptions_960, limit_IssueSubscriptions_960, owner_IssueSubscriptions_960, page_IssueSubscriptions_960, repo_IssueSubscriptions_960, user_IssueSubscriptions_960, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_960, repo_IssueSubscriptions_960, index_IssueSubscriptions_960, user_IssueSubscriptions_960, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueTimes:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_970 = "before_IssueTimes_970_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_970 = {};
  let index_IssueTimes_970 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_970 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_970 = "owner_IssueTimes_970_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_970 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_970 = "repo_IssueTimes_970_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_970 = "since_IssueTimes_970_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_970 = "user_IssueTimes_970_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_970, body_IssueTimes_970, index_IssueTimes_970, limit_IssueTimes_970, owner_IssueTimes_970, page_IssueTimes_970, repo_IssueTimes_970, since_IssueTimes_970, user_IssueTimes_970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_970, repo_IssueTimes_970, index_IssueTimes_970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Keys:linear:2", function () {
  // -> Creating Keys
  let body_Keys_980 = {};
  let fingerprint_Keys_980 = "fingerprint_Keys_980_" + Math.floor(Math.random()*1000);
  let id_Keys_980 = Math.floor(Math.random() * 1000);
  let limit_Keys_980 = Math.floor(Math.random() * 1000);
  let page_Keys_980 = Math.floor(Math.random() * 1000);
  userCurrentPostKey(body_Keys_980, fingerprint_Keys_980, id_Keys_980, limit_Keys_980, page_Keys_980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Keys
  userCurrentDeleteKey(id_Keys_980, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:PullRequests:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_1000 = {};
  let id_PullRequests_1000 = RepositoryId;
  let index_PullRequests_1000 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_1000 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_1000 = "owner_PullRequests_1000_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1000 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_1000 = "repo_PullRequests_1000_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1000 = "skip-to_PullRequests_1000_" + Math.floor(Math.random()*1000);
  let style_PullRequests_1000 = "style_PullRequests_1000_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1000 = "whitespace_PullRequests_1000_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_1000, id_PullRequests_1000, index_PullRequests_1000, limit_PullRequests_1000, owner_PullRequests_1000, page_PullRequests_1000, repo_PullRequests_1000, skip_to_PullRequests_1000, style_PullRequests_1000, whitespace_PullRequests_1000, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating PullRequests
  let body_PullRequests_upd_1000 = {};
  let id_PullRequests_upd_1000 = id_PullRequests_1000;
  let index_PullRequests_upd_1000 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_upd_1000 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_upd_1000 = "owner_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1000 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_upd_1000 = "repo_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1000 = "skip-to_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  let style_PullRequests_upd_1000 = "style_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1000 = "whitespace_PullRequests_upd_1000_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1000, id_PullRequests_upd_1000, index_PullRequests_upd_1000, limit_PullRequests_upd_1000, owner_PullRequests_upd_1000, page_PullRequests_upd_1000, repo_PullRequests_upd_1000, skip_to_PullRequests_upd_1000, style_PullRequests_upd_1000, whitespace_PullRequests_upd_1000, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewRequests:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1010 = {};
  let index_PullReviewRequests_1010 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_1010 = "owner_PullReviewRequests_1010_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_1010 = "repo_PullReviewRequests_1010_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1010, index_PullReviewRequests_1010, owner_PullReviewRequests_1010, repo_PullReviewRequests_1010, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_1010, repo_PullReviewRequests_1010, index_PullReviewRequests_1010, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviews:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1020 = {};
  let id_PullReviews_1020 = PullRequestsId;
  let index_PullReviews_1020 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_1020 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_1020 = "owner_PullReviews_1020_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1020 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_1020 = "repo_PullReviews_1020_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_1020, id_PullReviews_1020, index_PullReviews_1020, limit_PullReviews_1020, owner_PullReviews_1020, page_PullReviews_1020, repo_PullReviews_1020, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewDismissals:linear:2", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1030 = {};
  let id_PullReviewDismissals_1030 = PullReviewsId;
  let index_PullReviewDismissals_1030 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_1030 = "owner_PullReviewDismissals_1030_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1030 = "repo_PullReviewDismissals_1030_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1030, id_PullReviewDismissals_1030, index_PullReviewDismissals_1030, owner_PullReviewDismissals_1030, repo_PullReviewDismissals_1030, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewUndismissals:linear:2", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1040 = PullReviewsId;
  let index_PullReviewUndismissals_1040 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_1040 = "owner_PullReviewUndismissals_1040_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1040 = "repo_PullReviewUndismissals_1040_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1040, index_PullReviewUndismissals_1040, owner_PullReviewUndismissals_1040, repo_PullReviewUndismissals_1040, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PushMirrors:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_1050 = RepositoriesId;
  let limit_PushMirrors_1050 = Math.floor(Math.random() * 1000);
  let name_PushMirrors_1050 = "name_PushMirrors_1050_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1050 = "owner_PushMirrors_1050_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1050 = Math.floor(Math.random() * 1000);
  let repo_PushMirrors_1050 = "repo_PushMirrors_1050_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1050, limit_PushMirrors_1050, name_PushMirrors_1050, owner_PushMirrors_1050, page_PushMirrors_1050, repo_PushMirrors_1050, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PushMirrors
  repoDeletePushMirror(owner_PushMirrors_1050, repo_PushMirrors_1050, name_PushMirrors_1050, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Releases:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_1060 = {};
  let draft_Releases_1060 = true;
  let id_Releases_1060 = RepositoryId;
  let limit_Releases_1060 = Math.floor(Math.random() * 1000);
  let owner_Releases_1060 = "owner_Releases_1060_" + Math.floor(Math.random()*1000);
  let page_Releases_1060 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_1060 = true;
  let repo_Releases_1060 = "repo_Releases_1060_" + Math.floor(Math.random()*1000);
  let tag_Releases_1060 = "tag_Releases_1060_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_1060, draft_Releases_1060, id_Releases_1060, limit_Releases_1060, owner_Releases_1060, page_Releases_1060, pre_release_Releases_1060, repo_Releases_1060, tag_Releases_1060, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Releases
  let body_Releases_upd_1060 = {};
  let draft_Releases_upd_1060 = true;
  let id_Releases_upd_1060 = id_Releases_1060;
  let limit_Releases_upd_1060 = Math.floor(Math.random() * 1000);
  let owner_Releases_upd_1060 = "owner_Releases_upd_1060_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1060 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_upd_1060 = true;
  let repo_Releases_upd_1060 = "repo_Releases_upd_1060_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_1060 = "tag_Releases_upd_1060_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_1060, draft_Releases_upd_1060, id_Releases_upd_1060, limit_Releases_upd_1060, owner_Releases_upd_1060, page_Releases_upd_1060, pre_release_Releases_upd_1060, repo_Releases_upd_1060, tag_Releases_upd_1060, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:ReleaseAttachments:linear:2", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1070 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1070 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_1070 = {};
  let id_ReleaseAttachments_1070 = ReleasesId;
  let name_ReleaseAttachments_1070 = "name_ReleaseAttachments_1070_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1070 = "owner_ReleaseAttachments_1070_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1070 = "repo_ReleaseAttachments_1070_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1070, attachment_id_ReleaseAttachments_1070, body_ReleaseAttachments_1070, id_ReleaseAttachments_1070, name_ReleaseAttachments_1070, owner_ReleaseAttachments_1070, repo_ReleaseAttachments_1070, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1070 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1070 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_upd_1070 = {};
  let id_ReleaseAttachments_upd_1070 = id_ReleaseAttachments_1070;
  let name_ReleaseAttachments_upd_1070 = "name_ReleaseAttachments_upd_1070_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1070 = "owner_ReleaseAttachments_upd_1070_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1070 = "repo_ReleaseAttachments_upd_1070_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1070, attachment_id_ReleaseAttachments_upd_1070, body_ReleaseAttachments_upd_1070, id_ReleaseAttachments_upd_1070, name_ReleaseAttachments_upd_1070, owner_ReleaseAttachments_upd_1070, repo_ReleaseAttachments_upd_1070, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1070, repo_ReleaseAttachments_1070, id_ReleaseAttachments_1070, attachment_id_ReleaseAttachments_1070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TagProtections:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_1080 = {};
  let id_TagProtections_1080 = RepositoryId;
  let owner_TagProtections_1080 = "owner_TagProtections_1080_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1080 = "repo_TagProtections_1080_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1080, id_TagProtections_1080, owner_TagProtections_1080, repo_TagProtections_1080, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating TagProtections
  let body_TagProtections_upd_1080 = {};
  let id_TagProtections_upd_1080 = id_TagProtections_1080;
  let owner_TagProtections_upd_1080 = "owner_TagProtections_upd_1080_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1080 = "repo_TagProtections_upd_1080_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1080, id_TagProtections_upd_1080, owner_TagProtections_upd_1080, repo_TagProtections_upd_1080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_1080, repo_TagProtections_1080, id_TagProtections_1080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Tags:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_1090 = {};
  let id_Tags_1090 = RepositoryId;
  let limit_Tags_1090 = Math.floor(Math.random() * 1000);
  let owner_Tags_1090 = "owner_Tags_1090_" + Math.floor(Math.random()*1000);
  let page_Tags_1090 = Math.floor(Math.random() * 1000);
  let repo_Tags_1090 = "repo_Tags_1090_" + Math.floor(Math.random()*1000);
  let tag_Tags_1090 = "tag_Tags_1090_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1090, id_Tags_1090, limit_Tags_1090, owner_Tags_1090, page_Tags_1090, repo_Tags_1090, tag_Tags_1090, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Tags
  repoDeleteTag(owner_Tags_1090, repo_Tags_1090, tag_Tags_1090, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Topics:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_1100 = {};
  let limit_Topics_1100 = Math.floor(Math.random() * 1000);
  let owner_Topics_1100 = "owner_Topics_1100_" + Math.floor(Math.random()*1000);
  let page_Topics_1100 = Math.floor(Math.random() * 1000);
  let q_Topics_1100 = "q_Topics_1100_" + Math.floor(Math.random()*1000);
  let repo_Topics_1100 = "repo_Topics_1100_" + Math.floor(Math.random()*1000);
  let topic_Topics_1100 = "topic_Topics_1100_" + Math.floor(Math.random()*1000);
  let topic1_Topics_1100 = "topic1_Topics_1100_" + Math.floor(Math.random()*1000);
  let topic2_Topics_1100 = "topic2_Topics_1100_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1100, limit_Topics_1100, owner_Topics_1100, page_Topics_1100, q_Topics_1100, repo_Topics_1100, topic_Topics_1100, topic1_Topics_1100, topic2_Topics_1100, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Topics
  let body_Topics_upd_1100 = {};
  let limit_Topics_upd_1100 = Math.floor(Math.random() * 1000);
  let owner_Topics_upd_1100 = owner_Topics_1100;
  let page_Topics_upd_1100 = Math.floor(Math.random() * 1000);
  let q_Topics_upd_1100 = "q_Topics_upd_1100_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1100 = "repo_Topics_upd_1100_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1100 = "topic_Topics_upd_1100_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_1100 = "topic1_Topics_upd_1100_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_1100 = "topic2_Topics_upd_1100_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1100, limit_Topics_upd_1100, owner_Topics_upd_1100, page_Topics_upd_1100, q_Topics_upd_1100, repo_Topics_upd_1100, topic_Topics_upd_1100, topic1_Topics_upd_1100, topic2_Topics_upd_1100, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_1100, repo_Topics_1100, topic_Topics_1100, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:RepositoryTransfer:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1110 = {};
  let id_RepositoryTransfer_1110 = RepositoriesId;
  let owner_RepositoryTransfer_1110 = "owner_RepositoryTransfer_1110_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1110 = "repo_RepositoryTransfer_1110_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1110 = "transferOptions_RepositoryTransfer_1110_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1110, id_RepositoryTransfer_1110, owner_RepositoryTransfer_1110, repo_RepositoryTransfer_1110, transferOptions_RepositoryTransfer_1110, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:WikiPage:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_1120 = {};
  let id_WikiPage_1120 = RepositoryId;
  let owner_WikiPage_1120 = "owner_WikiPage_1120_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_1120 = "pageName_WikiPage_1120_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_1120 = "repo_WikiPage_1120_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_1120 = "wikiPageOptions_WikiPage_1120_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_1120, id_WikiPage_1120, owner_WikiPage_1120, pageName_WikiPage_1120, repo_WikiPage_1120, wikiPageOptions_WikiPage_1120, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating WikiPage
  let body_WikiPage_upd_1120 = {};
  let id_WikiPage_upd_1120 = id_WikiPage_1120;
  let owner_WikiPage_upd_1120 = "owner_WikiPage_upd_1120_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_1120 = "pageName_WikiPage_upd_1120_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_1120 = "repo_WikiPage_upd_1120_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_1120 = "wikiPageOptions_WikiPage_upd_1120_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_1120, id_WikiPage_upd_1120, owner_WikiPage_upd_1120, pageName_WikiPage_upd_1120, repo_WikiPage_upd_1120, wikiPageOptions_WikiPage_upd_1120, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_1120, repo_WikiPage_1120, pageName_WikiPage_1120, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamMembers:linear:2", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1130 = OrganizationTeamsId;
  let limit_TeamMembers_1130 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_1130 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_1130 = "username_TeamMembers_1130_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_1130, limit_TeamMembers_1130, page_TeamMembers_1130, username_TeamMembers_1130, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_1130, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamRepos:linear:2", function () {
  let deps = {};
  deps["OrganizationRepos"] = matchAnyOrganizationReposAdded();
  let pkMap = {"OrganizationRepos": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationReposId = captured["OrganizationRepos"];
  // -> Creating TeamRepos
  let id_TeamRepos_1140 = OrganizationReposId;
  let limit_TeamRepos_1140 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_1140 = "org_TeamRepos_1140_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_1140 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_1140 = "repo_TeamRepos_1140_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1140, limit_TeamRepos_1140, org_TeamRepos_1140, page_TeamRepos_1140, repo_TeamRepos_1140, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_1140, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserVariables:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_1150 = {};
  let variablename_UserVariables_1150 = "variablename_UserVariables_1150_" + Math.floor(Math.random()*1000);
  createUserVariable(body_UserVariables_1150, variablename_UserVariables_1150, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating UserVariables
  let body_UserVariables_upd_1150 = {};
  let variablename_UserVariables_upd_1150 = variablename_UserVariables_1150;
  updateUserVariable(body_UserVariables_upd_1150, variablename_UserVariables_upd_1150, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserVariables
  deleteUserVariable(variablename_UserVariables_1150, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OAuth2Applications:linear:2", function () {
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1160 = {};
  let id_OAuth2Applications_1160 = Math.floor(Math.random() * 1000);
  let limit_OAuth2Applications_1160 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_1160 = Math.floor(Math.random() * 1000);
  userCreateOAuth2Application(body_OAuth2Applications_1160, id_OAuth2Applications_1160, limit_OAuth2Applications_1160, page_OAuth2Applications_1160, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1160 = {};
  let id_OAuth2Applications_upd_1160 = id_OAuth2Applications_1160;
  let limit_OAuth2Applications_upd_1160 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_upd_1160 = Math.floor(Math.random() * 1000);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1160, id_OAuth2Applications_upd_1160, limit_OAuth2Applications_upd_1160, page_OAuth2Applications_upd_1160, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OAuth2Applications
  userDeleteOAuth2Application(id_OAuth2Applications_1160, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserAvatar:linear:2", function () {
  // -> Creating UserAvatar
  let body_UserAvatar_1170 = {};
  let id_UserAvatar_1170 = "id_UserAvatar_1170_" + Math.floor(Math.random()*1000);
  userUpdateAvatar(body_UserAvatar_1170, id_UserAvatar_1170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserAvatar
  userDeleteAvatar(id_UserAvatar_1170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserEmails:linear:2", function () {
  // -> Creating UserEmails
  let body_UserEmails_1180 = {};
  let id_UserEmails_1180 = "id_UserEmails_1180_" + Math.floor(Math.random()*1000);
  userAddEmail(body_UserEmails_1180, id_UserEmails_1180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserEmails
  userDeleteEmail(id_UserEmails_1180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeys:linear:2", function () {
  // -> Creating GPGKeys
  let Form_GPGKeys_1190 = {};
  let id_GPGKeys_1190 = Math.floor(Math.random() * 1000);
  let limit_GPGKeys_1190 = Math.floor(Math.random() * 1000);
  let page_GPGKeys_1190 = Math.floor(Math.random() * 1000);
  userCurrentPostGPGKey(Form_GPGKeys_1190, id_GPGKeys_1190, limit_GPGKeys_1190, page_GPGKeys_1190, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GPGKeys
  userCurrentDeleteGPGKey(id_GPGKeys_1190, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeyVerification:linear:2", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_1200 = "id_GPGKeyVerification_1200_" + Math.floor(Math.random()*1000);
  userVerifyGPGKey(id_GPGKeyVerification_1200, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserStarred:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating UserStarred
  let limit_UserStarred_1210 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_1210 = "owner_UserStarred_1210_" + Math.floor(Math.random()*1000);
  let page_UserStarred_1210 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_1210 = "repo_UserStarred_1210_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1210, owner_UserStarred_1210, page_UserStarred_1210, repo_UserStarred_1210, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_1210, repo_UserStarred_1210, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:AdminCron:linear:3", function () {
  // -> Creating AdminCron
  let id_AdminCron_1230 = "id_AdminCron_1230_" + Math.floor(Math.random()*1000);
  let limit_AdminCron_1230 = Math.floor(Math.random() * 1000);
  let page_AdminCron_1230 = Math.floor(Math.random() * 1000);
  let task_AdminCron_1230 = "task_AdminCron_1230_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_1230, limit_AdminCron_1230, page_AdminCron_1230, task_AdminCron_1230, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Hooks:linear:3", function () {
  // -> Creating Hooks
  let body_Hooks_1240 = {};
  let id_Hooks_1240 = Math.floor(Math.random() * 1000);
  let limit_Hooks_1240 = Math.floor(Math.random() * 1000);
  let page_Hooks_1240 = Math.floor(Math.random() * 1000);
  userCreateHook(body_Hooks_1240, id_Hooks_1240, limit_Hooks_1240, page_Hooks_1240, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Hooks
  let body_Hooks_upd_1240 = {};
  let id_Hooks_upd_1240 = id_Hooks_1240;
  let limit_Hooks_upd_1240 = Math.floor(Math.random() * 1000);
  let page_Hooks_upd_1240 = Math.floor(Math.random() * 1000);
  userEditHook(body_Hooks_upd_1240, id_Hooks_upd_1240, limit_Hooks_upd_1240, page_Hooks_upd_1240, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Hooks
  userDeleteHook(id_Hooks_1240, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UnadoptedRepositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_1250 = Math.floor(Math.random() * 1000);
  let owner_UnadoptedRepositories_1250 = "owner_UnadoptedRepositories_1250_" + Math.floor(Math.random()*1000);
  let page_UnadoptedRepositories_1250 = Math.floor(Math.random() * 1000);
  let pattern_UnadoptedRepositories_1250 = "pattern_UnadoptedRepositories_1250_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_1250 = "repo_UnadoptedRepositories_1250_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_1250, owner_UnadoptedRepositories_1250, page_UnadoptedRepositories_1250, pattern_UnadoptedRepositories_1250, repo_UnadoptedRepositories_1250, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UnadoptedRepositories
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_1250, repo_UnadoptedRepositories_1250, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_1260 = "CreateAccessTokenOption_Users_1260_" + Math.floor(Math.random()*1000);
  let body_Users_1260 = {};
  let limit_Users_1260 = Math.floor(Math.random() * 1000);
  let page_Users_1260 = Math.floor(Math.random() * 1000);
  let purge_Users_1260 = true;
  let token_Users_1260 = "token_Users_1260_" + Math.floor(Math.random()*1000);
  let username_Users_1260 = "username_Users_1260_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_1260, body_Users_1260, limit_Users_1260, page_Users_1260, purge_Users_1260, token_Users_1260, username_Users_1260, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let CreateAccessTokenOption_Users_upd_1260 = "CreateAccessTokenOption_Users_upd_1260_" + Math.floor(Math.random()*1000);
  let body_Users_upd_1260 = {};
  let limit_Users_upd_1260 = Math.floor(Math.random() * 1000);
  let page_Users_upd_1260 = Math.floor(Math.random() * 1000);
  let purge_Users_upd_1260 = true;
  let token_Users_upd_1260 = "token_Users_upd_1260_" + Math.floor(Math.random()*1000);
  let username_Users_upd_1260 = username_Users_1260;
  adminEditUser(CreateAccessTokenOption_Users_upd_1260, body_Users_upd_1260, limit_Users_upd_1260, page_Users_upd_1260, purge_Users_upd_1260, token_Users_upd_1260, username_Users_upd_1260, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserBadges:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let body_UserBadges_1270 = {};
  let username_UserBadges_1270 = UsersId;
  adminAddUserBadges(body_UserBadges_1270, username_UserBadges_1270, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserBadges
  adminDeleteUserBadges(username_UserBadges_1270, { expectedResponseCodes: [200, 201, 204] });

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

  // -> Deleting UserKeys
  adminDeleteUser(username_UserKeys_1280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserOrganizations:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_1290 = "id_UserOrganizations_1290_" + Math.floor(Math.random()*1000);
  let organization_UserOrganizations_1290 = "organization_UserOrganizations_1290_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_1290 = UsersId;
  adminCreateOrg(id_UserOrganizations_1290, organization_UserOrganizations_1290, username_UserOrganizations_1290, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRename:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_1300 = "body_UserRename_1300_" + Math.floor(Math.random()*1000);
  let id_UserRename_1300 = "id_UserRename_1300_" + Math.floor(Math.random()*1000);
  let username_UserRename_1300 = UsersId;
  adminRenameUser(body_UserRename_1300, id_UserRename_1300, username_UserRename_1300, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRepositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_1310 = "id_UserRepositories_1310_" + Math.floor(Math.random()*1000);
  let repository_UserRepositories_1310 = "repository_UserRepositories_1310_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_1310 = UsersId;
  adminCreateRepo(id_UserRepositories_1310, repository_UserRepositories_1310, username_UserRepositories_1310, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markdown:linear:3", function () {
  // -> Creating Markdown
  let body_Markdown_1320 = "body_Markdown_1320_" + Math.floor(Math.random()*1000);
  let id_Markdown_1320 = "id_Markdown_1320_" + Math.floor(Math.random()*1000);
  renderMarkdown(body_Markdown_1320, id_Markdown_1320, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markup:linear:3", function () {
  // -> Creating Markup
  let body_Markup_1330 = {};
  let id_Markup_1330 = "id_Markup_1330_" + Math.floor(Math.random()*1000);
  renderMarkup(body_Markup_1330, id_Markup_1330, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Organization:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Organization
  let body_Organization_1340 = {};
  let limit_Organization_1340 = Math.floor(Math.random() * 1000);
  let org_Organization_1340 = "org_Organization_1340_" + Math.floor(Math.random()*1000);
  let page_Organization_1340 = Math.floor(Math.random() * 1000);
  let secretname_Organization_1340 = "secretname_Organization_1340_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_1340, limit_Organization_1340, org_Organization_1340, page_Organization_1340, secretname_Organization_1340, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Organization
  let body_Organization_upd_1340 = {};
  let limit_Organization_upd_1340 = Math.floor(Math.random() * 1000);
  let org_Organization_upd_1340 = org_Organization_1340;
  let page_Organization_upd_1340 = Math.floor(Math.random() * 1000);
  let secretname_Organization_upd_1340 = "secretname_Organization_upd_1340_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_1340, limit_Organization_upd_1340, org_Organization_upd_1340, page_Organization_upd_1340, secretname_Organization_upd_1340, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Variables:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Variables
  let CreateVariableOption_Variables_1350 = "CreateVariableOption_Variables_1350_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_1350 = "UpdateVariableOption_Variables_1350_" + Math.floor(Math.random()*1000);
  let body_Variables_1350 = {};
  let id_Variables_1350 = RepositoriesId;
  let limit_Variables_1350 = Math.floor(Math.random() * 1000);
  let owner_Variables_1350 = "owner_Variables_1350_" + Math.floor(Math.random()*1000);
  let page_Variables_1350 = Math.floor(Math.random() * 1000);
  let repo_Variables_1350 = "repo_Variables_1350_" + Math.floor(Math.random()*1000);
  let variablename_Variables_1350 = "variablename_Variables_1350_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_1350, UpdateVariableOption_Variables_1350, body_Variables_1350, id_Variables_1350, limit_Variables_1350, owner_Variables_1350, page_Variables_1350, repo_Variables_1350, variablename_Variables_1350, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Variables
  let CreateVariableOption_Variables_upd_1350 = "CreateVariableOption_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_1350 = "UpdateVariableOption_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  let body_Variables_upd_1350 = {};
  let id_Variables_upd_1350 = id_Variables_1350;
  let limit_Variables_upd_1350 = Math.floor(Math.random() * 1000);
  let owner_Variables_upd_1350 = "owner_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_1350 = Math.floor(Math.random() * 1000);
  let repo_Variables_upd_1350 = "repo_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_1350 = "variablename_Variables_upd_1350_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_1350, UpdateVariableOption_Variables_upd_1350, body_Variables_upd_1350, id_Variables_upd_1350, limit_Variables_upd_1350, owner_Variables_upd_1350, page_Variables_upd_1350, repo_Variables_upd_1350, variablename_Variables_upd_1350, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Variables
  deleteRepoVariable(owner_Variables_1350, repo_Variables_1350, variablename_Variables_1350, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Avatar:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating Avatar
  let body_Avatar_1360 = {};
  let org_Avatar_1360 = OrganizationId;
  orgUpdateAvatar(body_Avatar_1360, org_Avatar_1360, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Avatar
  orgDeleteAvatar(org_Avatar_1360, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Labels:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Labels
  let body_Labels_1370 = {};
  let color_Labels_1370 = "color_Labels_1370_" + Math.floor(Math.random()*1000);
  let description_Labels_1370 = "description_Labels_1370_" + Math.floor(Math.random()*1000);
  let id_Labels_1370 = RepositoryId;
  let limit_Labels_1370 = Math.floor(Math.random() * 1000);
  let name_Labels_1370 = "name_Labels_1370_" + Math.floor(Math.random()*1000);
  let owner_Labels_1370 = "owner_Labels_1370_" + Math.floor(Math.random()*1000);
  let page_Labels_1370 = Math.floor(Math.random() * 1000);
  let repo_Labels_1370 = "repo_Labels_1370_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_1370, color_Labels_1370, description_Labels_1370, id_Labels_1370, limit_Labels_1370, name_Labels_1370, owner_Labels_1370, page_Labels_1370, repo_Labels_1370, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Labels
  let body_Labels_upd_1370 = {};
  let color_Labels_upd_1370 = "color_Labels_upd_1370_" + Math.floor(Math.random()*1000);
  let description_Labels_upd_1370 = "description_Labels_upd_1370_" + Math.floor(Math.random()*1000);
  let id_Labels_upd_1370 = id_Labels_1370;
  let limit_Labels_upd_1370 = Math.floor(Math.random() * 1000);
  let name_Labels_upd_1370 = "name_Labels_upd_1370_" + Math.floor(Math.random()*1000);
  let owner_Labels_upd_1370 = "owner_Labels_upd_1370_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_1370 = Math.floor(Math.random() * 1000);
  let repo_Labels_upd_1370 = "repo_Labels_upd_1370_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_1370, color_Labels_upd_1370, description_Labels_upd_1370, id_Labels_upd_1370, limit_Labels_upd_1370, name_Labels_upd_1370, owner_Labels_upd_1370, page_Labels_upd_1370, repo_Labels_upd_1370, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Labels
  issueDeleteLabel(owner_Labels_1370, repo_Labels_1370, id_Labels_1370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationRepos:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_1380 = {};
  let id_OrganizationRepos_1380 = "id_OrganizationRepos_1380_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_1380 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_1380 = OrganizationId;
  let page_OrganizationRepos_1380 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_1380, id_OrganizationRepos_1380, limit_OrganizationRepos_1380, org_OrganizationRepos_1380, page_OrganizationRepos_1380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationTeams:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_1390 = {};
  let id_OrganizationTeams_1390 = "id_OrganizationTeams_1390_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_1390 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_1390 = OrganizationId;
  let page_OrganizationTeams_1390 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_1390, id_OrganizationTeams_1390, limit_OrganizationTeams_1390, org_OrganizationTeams_1390, page_OrganizationTeams_1390, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issues:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issues
  let content_Issues_1400 = {};
  let id_Issues_1400 = RepositoryId;
  let index_Issues_1400 = Math.floor(Math.random() * 1000);
  let limit_Issues_1400 = Math.floor(Math.random() * 1000);
  let owner_Issues_1400 = "owner_Issues_1400_" + Math.floor(Math.random()*1000);
  let page_Issues_1400 = Math.floor(Math.random() * 1000);
  let position_Issues_1400 = Math.floor(Math.random() * 1000);
  let repo_Issues_1400 = "repo_Issues_1400_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_1400, id_Issues_1400, index_Issues_1400, limit_Issues_1400, owner_Issues_1400, page_Issues_1400, position_Issues_1400, repo_Issues_1400, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Issues
  let content_Issues_upd_1400 = {};
  let id_Issues_upd_1400 = id_Issues_1400;
  let index_Issues_upd_1400 = Math.floor(Math.random() * 1000);
  let limit_Issues_upd_1400 = Math.floor(Math.random() * 1000);
  let owner_Issues_upd_1400 = "owner_Issues_upd_1400_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_1400 = Math.floor(Math.random() * 1000);
  let position_Issues_upd_1400 = Math.floor(Math.random() * 1000);
  let repo_Issues_upd_1400 = "repo_Issues_upd_1400_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_1400, id_Issues_upd_1400, index_Issues_upd_1400, limit_Issues_upd_1400, owner_Issues_upd_1400, page_Issues_upd_1400, position_Issues_upd_1400, repo_Issues_upd_1400, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repository:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating Repository
  let body_Repository_1410 = {};
  let id_Repository_1410 = RepositoriesId;
  let limit_Repository_1410 = Math.floor(Math.random() * 1000);
  let owner_Repository_1410 = "owner_Repository_1410_" + Math.floor(Math.random()*1000);
  let page_Repository_1410 = Math.floor(Math.random() * 1000);
  let repo_Repository_1410 = "repo_Repository_1410_" + Math.floor(Math.random()*1000);
  let sha_Repository_1410 = "sha_Repository_1410_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_1410, id_Repository_1410, limit_Repository_1410, owner_Repository_1410, page_Repository_1410, repo_Repository_1410, sha_Repository_1410, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repository
  let body_Repository_upd_1410 = {};
  let id_Repository_upd_1410 = id_Repository_1410;
  let limit_Repository_upd_1410 = Math.floor(Math.random() * 1000);
  let owner_Repository_upd_1410 = "owner_Repository_upd_1410_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_1410 = Math.floor(Math.random() * 1000);
  let repo_Repository_upd_1410 = "repo_Repository_upd_1410_" + Math.floor(Math.random()*1000);
  let sha_Repository_upd_1410 = "sha_Repository_upd_1410_" + Math.floor(Math.random()*1000);
  userCurrentPutSubscription(body_Repository_upd_1410, id_Repository_upd_1410, limit_Repository_upd_1410, owner_Repository_upd_1410, page_Repository_upd_1410, repo_Repository_upd_1410, sha_Repository_upd_1410, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Branches:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let CreateBranchRepoOption_Branches_1420 = "CreateBranchRepoOption_Branches_1420_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_1420 = "UpdateBranchRepoOption_Branches_1420_" + Math.floor(Math.random()*1000);
  let body_Branches_1420 = {};
  let branch_Branches_1420 = "branch_Branches_1420_" + Math.floor(Math.random()*1000);
  let id_Branches_1420 = RepositoryId;
  let limit_Branches_1420 = Math.floor(Math.random() * 1000);
  let owner_Branches_1420 = "owner_Branches_1420_" + Math.floor(Math.random()*1000);
  let page_Branches_1420 = Math.floor(Math.random() * 1000);
  let repo_Branches_1420 = "repo_Branches_1420_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_1420, UpdateBranchRepoOption_Branches_1420, body_Branches_1420, branch_Branches_1420, id_Branches_1420, limit_Branches_1420, owner_Branches_1420, page_Branches_1420, repo_Branches_1420, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Branches
  let CreateBranchRepoOption_Branches_upd_1420 = "CreateBranchRepoOption_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_upd_1420 = "UpdateBranchRepoOption_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  let body_Branches_upd_1420 = {};
  let branch_Branches_upd_1420 = "branch_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_1420 = id_Branches_1420;
  let limit_Branches_upd_1420 = Math.floor(Math.random() * 1000);
  let owner_Branches_upd_1420 = "owner_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_1420 = Math.floor(Math.random() * 1000);
  let repo_Branches_upd_1420 = "repo_Branches_upd_1420_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(CreateBranchRepoOption_Branches_upd_1420, UpdateBranchRepoOption_Branches_upd_1420, body_Branches_upd_1420, branch_Branches_upd_1420, id_Branches_upd_1420, limit_Branches_upd_1420, owner_Branches_upd_1420, page_Branches_upd_1420, repo_Branches_upd_1420, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_1420, repo_Branches_1420, branch_Branches_1420, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Collaborators:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_1430 = "AddCollaboratorOption_Collaborators_1430_" + Math.floor(Math.random()*1000);
  let body_Collaborators_1430 = {};
  let collaborator_Collaborators_1430 = "collaborator_Collaborators_1430_" + Math.floor(Math.random()*1000);
  let id_Collaborators_1430 = RepositoryId;
  let limit_Collaborators_1430 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_1430 = "owner_Collaborators_1430_" + Math.floor(Math.random()*1000);
  let page_Collaborators_1430 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_1430 = "repo_Collaborators_1430_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_1430, body_Collaborators_1430, collaborator_Collaborators_1430, id_Collaborators_1430, limit_Collaborators_1430, owner_Collaborators_1430, page_Collaborators_1430, repo_Collaborators_1430, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_1430, repo_Collaborators_1430, collaborator_Collaborators_1430, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repositories:linear:3", function () {
  // -> Creating Repositories
  let body_Repositories_1440 = {};
  let filepath_Repositories_1440 = "filepath_Repositories_1440_" + Math.floor(Math.random()*1000);
  let id_Repositories_1440 = Math.floor(Math.random() * 1000);
  let limit_Repositories_1440 = Math.floor(Math.random() * 1000);
  let owner_Repositories_1440 = "owner_Repositories_1440_" + Math.floor(Math.random()*1000);
  let page_Repositories_1440 = Math.floor(Math.random() * 1000);
  let repo_Repositories_1440 = "repo_Repositories_1440_" + Math.floor(Math.random()*1000);
  let username_Repositories_1440 = "username_Repositories_1440_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_1440, filepath_Repositories_1440, id_Repositories_1440, limit_Repositories_1440, owner_Repositories_1440, page_Repositories_1440, repo_Repositories_1440, username_Repositories_1440, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repositories
  let body_Repositories_upd_1440 = {};
  let filepath_Repositories_upd_1440 = "filepath_Repositories_upd_1440_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_1440 = id_Repositories_1440;
  let limit_Repositories_upd_1440 = Math.floor(Math.random() * 1000);
  let owner_Repositories_upd_1440 = "owner_Repositories_upd_1440_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_1440 = Math.floor(Math.random() * 1000);
  let repo_Repositories_upd_1440 = "repo_Repositories_upd_1440_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_1440 = "username_Repositories_upd_1440_" + Math.floor(Math.random()*1000);
  repoUpdateFile(body_Repositories_upd_1440, filepath_Repositories_upd_1440, id_Repositories_upd_1440, limit_Repositories_upd_1440, owner_Repositories_upd_1440, page_Repositories_upd_1440, repo_Repositories_upd_1440, username_Repositories_upd_1440, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Forks:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_1450 = {};
  let id_Forks_1450 = RepositoryId;
  let limit_Forks_1450 = Math.floor(Math.random() * 1000);
  let owner_Forks_1450 = "owner_Forks_1450_" + Math.floor(Math.random()*1000);
  let page_Forks_1450 = Math.floor(Math.random() * 1000);
  let repo_Forks_1450 = "repo_Forks_1450_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_1450, id_Forks_1450, limit_Forks_1450, owner_Forks_1450, page_Forks_1450, repo_Forks_1450, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issue:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issue
  let body_Issue_1460 = {};
  let id_Issue_1460 = RepositoryId;
  let limit_Issue_1460 = Math.floor(Math.random() * 1000);
  let name_Issue_1460 = "name_Issue_1460_" + Math.floor(Math.random()*1000);
  let owner_Issue_1460 = "owner_Issue_1460_" + Math.floor(Math.random()*1000);
  let page_Issue_1460 = Math.floor(Math.random() * 1000);
  let repo_Issue_1460 = "repo_Issue_1460_" + Math.floor(Math.random()*1000);
  let state_Issue_1460 = "state_Issue_1460_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_1460, id_Issue_1460, limit_Issue_1460, name_Issue_1460, owner_Issue_1460, page_Issue_1460, repo_Issue_1460, state_Issue_1460, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentAttachments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_1470 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_1470 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_1470 = {};
  let id_IssueCommentAttachments_1470 = IssuesId;
  let name_IssueCommentAttachments_1470 = "name_IssueCommentAttachments_1470_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_1470 = "owner_IssueCommentAttachments_1470_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_1470 = "repo_IssueCommentAttachments_1470_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_1470, attachment_id_IssueCommentAttachments_1470, body_IssueCommentAttachments_1470, id_IssueCommentAttachments_1470, name_IssueCommentAttachments_1470, owner_IssueCommentAttachments_1470, repo_IssueCommentAttachments_1470, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_1470 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_1470 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_upd_1470 = {};
  let id_IssueCommentAttachments_upd_1470 = id_IssueCommentAttachments_1470;
  let name_IssueCommentAttachments_upd_1470 = "name_IssueCommentAttachments_upd_1470_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_1470 = "owner_IssueCommentAttachments_upd_1470_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_1470 = "repo_IssueCommentAttachments_upd_1470_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_1470, attachment_id_IssueCommentAttachments_upd_1470, body_IssueCommentAttachments_upd_1470, id_IssueCommentAttachments_upd_1470, name_IssueCommentAttachments_upd_1470, owner_IssueCommentAttachments_upd_1470, repo_IssueCommentAttachments_upd_1470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_1470, repo_IssueCommentAttachments_1470, id_IssueCommentAttachments_1470, attachment_id_IssueCommentAttachments_1470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentReactions:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_1480 = {};
  let id_IssueCommentReactions_1480 = IssuesId;
  let owner_IssueCommentReactions_1480 = "owner_IssueCommentReactions_1480_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_1480 = "repo_IssueCommentReactions_1480_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_1480, id_IssueCommentReactions_1480, owner_IssueCommentReactions_1480, repo_IssueCommentReactions_1480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_1480, repo_IssueCommentReactions_1480, id_IssueCommentReactions_1480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueAttachments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_1490 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_1490 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_1490 = {};
  let id_IssueAttachments_1490 = IssuesId;
  let index_IssueAttachments_1490 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_1490 = "name_IssueAttachments_1490_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_1490 = "owner_IssueAttachments_1490_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_1490 = "repo_IssueAttachments_1490_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_1490, attachment_id_IssueAttachments_1490, body_IssueAttachments_1490, id_IssueAttachments_1490, index_IssueAttachments_1490, name_IssueAttachments_1490, owner_IssueAttachments_1490, repo_IssueAttachments_1490, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_1490 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_1490 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_upd_1490 = {};
  let id_IssueAttachments_upd_1490 = id_IssueAttachments_1490;
  let index_IssueAttachments_upd_1490 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_upd_1490 = "name_IssueAttachments_upd_1490_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_1490 = "owner_IssueAttachments_upd_1490_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_1490 = "repo_IssueAttachments_upd_1490_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_1490, attachment_id_IssueAttachments_upd_1490, body_IssueAttachments_upd_1490, id_IssueAttachments_upd_1490, index_IssueAttachments_upd_1490, name_IssueAttachments_upd_1490, owner_IssueAttachments_upd_1490, repo_IssueAttachments_upd_1490, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_1490, repo_IssueAttachments_1490, index_IssueAttachments_1490, attachment_id_IssueAttachments_1490, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueBlocks:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_1500 = {};
  let index_IssueBlocks_1500 = "index_IssueBlocks_1500_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_1500 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_1500 = "owner_IssueBlocks_1500_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_1500 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_1500 = "repo_IssueBlocks_1500_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_1500, index_IssueBlocks_1500, limit_IssueBlocks_1500, owner_IssueBlocks_1500, page_IssueBlocks_1500, repo_IssueBlocks_1500, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_1500, repo_IssueBlocks_1500, index_IssueBlocks_1500, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueComments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_1510 = "before_IssueComments_1510_" + Math.floor(Math.random()*1000);
  let body_IssueComments_1510 = {};
  let id_IssueComments_1510 = IssuesId;
  let index_IssueComments_1510 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_1510 = "owner_IssueComments_1510_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_1510 = "repo_IssueComments_1510_" + Math.floor(Math.random()*1000);
  let since_IssueComments_1510 = "since_IssueComments_1510_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_1510, body_IssueComments_1510, id_IssueComments_1510, index_IssueComments_1510, owner_IssueComments_1510, repo_IssueComments_1510, since_IssueComments_1510, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueComments
  let before_IssueComments_upd_1510 = "before_IssueComments_upd_1510_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_1510 = {};
  let id_IssueComments_upd_1510 = id_IssueComments_1510;
  let index_IssueComments_upd_1510 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_upd_1510 = "owner_IssueComments_upd_1510_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_1510 = "repo_IssueComments_upd_1510_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_1510 = "since_IssueComments_upd_1510_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_1510, body_IssueComments_upd_1510, id_IssueComments_upd_1510, index_IssueComments_upd_1510, owner_IssueComments_upd_1510, repo_IssueComments_upd_1510, since_IssueComments_upd_1510, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_1510, repo_IssueComments_1510, index_IssueComments_1510, id_IssueComments_1510, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueSubscriptions:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_1520 = IssuesId;
  let index_IssueSubscriptions_1520 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_1520 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_1520 = "owner_IssueSubscriptions_1520_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_1520 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_1520 = "repo_IssueSubscriptions_1520_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_1520 = "user_IssueSubscriptions_1520_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_1520, index_IssueSubscriptions_1520, limit_IssueSubscriptions_1520, owner_IssueSubscriptions_1520, page_IssueSubscriptions_1520, repo_IssueSubscriptions_1520, user_IssueSubscriptions_1520, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_1520, repo_IssueSubscriptions_1520, index_IssueSubscriptions_1520, user_IssueSubscriptions_1520, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueTimes:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_1530 = "before_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_1530 = {};
  let index_IssueTimes_1530 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_1530 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_1530 = "owner_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_1530 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_1530 = "repo_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_1530 = "since_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_1530 = "user_IssueTimes_1530_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_1530, body_IssueTimes_1530, index_IssueTimes_1530, limit_IssueTimes_1530, owner_IssueTimes_1530, page_IssueTimes_1530, repo_IssueTimes_1530, since_IssueTimes_1530, user_IssueTimes_1530, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_1530, repo_IssueTimes_1530, index_IssueTimes_1530, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Keys:linear:3", function () {
  // -> Creating Keys
  let body_Keys_1540 = {};
  let fingerprint_Keys_1540 = "fingerprint_Keys_1540_" + Math.floor(Math.random()*1000);
  let id_Keys_1540 = Math.floor(Math.random() * 1000);
  let limit_Keys_1540 = Math.floor(Math.random() * 1000);
  let page_Keys_1540 = Math.floor(Math.random() * 1000);
  userCurrentPostKey(body_Keys_1540, fingerprint_Keys_1540, id_Keys_1540, limit_Keys_1540, page_Keys_1540, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Keys
  userCurrentDeleteKey(id_Keys_1540, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:PullRequests:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_1560 = {};
  let id_PullRequests_1560 = RepositoryId;
  let index_PullRequests_1560 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_1560 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_1560 = "owner_PullRequests_1560_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1560 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_1560 = "repo_PullRequests_1560_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1560 = "skip-to_PullRequests_1560_" + Math.floor(Math.random()*1000);
  let style_PullRequests_1560 = "style_PullRequests_1560_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1560 = "whitespace_PullRequests_1560_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_1560, id_PullRequests_1560, index_PullRequests_1560, limit_PullRequests_1560, owner_PullRequests_1560, page_PullRequests_1560, repo_PullRequests_1560, skip_to_PullRequests_1560, style_PullRequests_1560, whitespace_PullRequests_1560, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating PullRequests
  let body_PullRequests_upd_1560 = {};
  let id_PullRequests_upd_1560 = id_PullRequests_1560;
  let index_PullRequests_upd_1560 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_upd_1560 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_upd_1560 = "owner_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1560 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_upd_1560 = "repo_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1560 = "skip-to_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  let style_PullRequests_upd_1560 = "style_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1560 = "whitespace_PullRequests_upd_1560_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1560, id_PullRequests_upd_1560, index_PullRequests_upd_1560, limit_PullRequests_upd_1560, owner_PullRequests_upd_1560, page_PullRequests_upd_1560, repo_PullRequests_upd_1560, skip_to_PullRequests_upd_1560, style_PullRequests_upd_1560, whitespace_PullRequests_upd_1560, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewRequests:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1570 = {};
  let index_PullReviewRequests_1570 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_1570 = "owner_PullReviewRequests_1570_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_1570 = "repo_PullReviewRequests_1570_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1570, index_PullReviewRequests_1570, owner_PullReviewRequests_1570, repo_PullReviewRequests_1570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_1570, repo_PullReviewRequests_1570, index_PullReviewRequests_1570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviews:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1580 = {};
  let id_PullReviews_1580 = PullRequestsId;
  let index_PullReviews_1580 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_1580 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_1580 = "owner_PullReviews_1580_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1580 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_1580 = "repo_PullReviews_1580_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_1580, id_PullReviews_1580, index_PullReviews_1580, limit_PullReviews_1580, owner_PullReviews_1580, page_PullReviews_1580, repo_PullReviews_1580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewDismissals:linear:3", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1590 = {};
  let id_PullReviewDismissals_1590 = PullReviewsId;
  let index_PullReviewDismissals_1590 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_1590 = "owner_PullReviewDismissals_1590_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1590 = "repo_PullReviewDismissals_1590_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1590, id_PullReviewDismissals_1590, index_PullReviewDismissals_1590, owner_PullReviewDismissals_1590, repo_PullReviewDismissals_1590, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewUndismissals:linear:3", function () {
  let deps = {};
  deps["PullReviews"] = matchAnyPullReviewsAdded();
  let pkMap = {"PullReviews": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullReviewsId = captured["PullReviews"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1600 = PullReviewsId;
  let index_PullReviewUndismissals_1600 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_1600 = "owner_PullReviewUndismissals_1600_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1600 = "repo_PullReviewUndismissals_1600_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1600, index_PullReviewUndismissals_1600, owner_PullReviewUndismissals_1600, repo_PullReviewUndismissals_1600, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PushMirrors:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating PushMirrors
  let id_PushMirrors_1610 = RepositoriesId;
  let limit_PushMirrors_1610 = Math.floor(Math.random() * 1000);
  let name_PushMirrors_1610 = "name_PushMirrors_1610_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1610 = "owner_PushMirrors_1610_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1610 = Math.floor(Math.random() * 1000);
  let repo_PushMirrors_1610 = "repo_PushMirrors_1610_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1610, limit_PushMirrors_1610, name_PushMirrors_1610, owner_PushMirrors_1610, page_PushMirrors_1610, repo_PushMirrors_1610, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PushMirrors
  repoDeletePushMirror(owner_PushMirrors_1610, repo_PushMirrors_1610, name_PushMirrors_1610, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Releases:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_1620 = {};
  let draft_Releases_1620 = true;
  let id_Releases_1620 = RepositoryId;
  let limit_Releases_1620 = Math.floor(Math.random() * 1000);
  let owner_Releases_1620 = "owner_Releases_1620_" + Math.floor(Math.random()*1000);
  let page_Releases_1620 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_1620 = true;
  let repo_Releases_1620 = "repo_Releases_1620_" + Math.floor(Math.random()*1000);
  let tag_Releases_1620 = "tag_Releases_1620_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_1620, draft_Releases_1620, id_Releases_1620, limit_Releases_1620, owner_Releases_1620, page_Releases_1620, pre_release_Releases_1620, repo_Releases_1620, tag_Releases_1620, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Releases
  let body_Releases_upd_1620 = {};
  let draft_Releases_upd_1620 = true;
  let id_Releases_upd_1620 = id_Releases_1620;
  let limit_Releases_upd_1620 = Math.floor(Math.random() * 1000);
  let owner_Releases_upd_1620 = "owner_Releases_upd_1620_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1620 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_upd_1620 = true;
  let repo_Releases_upd_1620 = "repo_Releases_upd_1620_" + Math.floor(Math.random()*1000);
  let tag_Releases_upd_1620 = "tag_Releases_upd_1620_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_1620, draft_Releases_upd_1620, id_Releases_upd_1620, limit_Releases_upd_1620, owner_Releases_upd_1620, page_Releases_upd_1620, pre_release_Releases_upd_1620, repo_Releases_upd_1620, tag_Releases_upd_1620, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:ReleaseAttachments:linear:3", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1630 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1630 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_1630 = {};
  let id_ReleaseAttachments_1630 = ReleasesId;
  let name_ReleaseAttachments_1630 = "name_ReleaseAttachments_1630_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1630 = "owner_ReleaseAttachments_1630_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1630 = "repo_ReleaseAttachments_1630_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1630, attachment_id_ReleaseAttachments_1630, body_ReleaseAttachments_1630, id_ReleaseAttachments_1630, name_ReleaseAttachments_1630, owner_ReleaseAttachments_1630, repo_ReleaseAttachments_1630, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1630 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1630 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_upd_1630 = {};
  let id_ReleaseAttachments_upd_1630 = id_ReleaseAttachments_1630;
  let name_ReleaseAttachments_upd_1630 = "name_ReleaseAttachments_upd_1630_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1630 = "owner_ReleaseAttachments_upd_1630_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1630 = "repo_ReleaseAttachments_upd_1630_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1630, attachment_id_ReleaseAttachments_upd_1630, body_ReleaseAttachments_upd_1630, id_ReleaseAttachments_upd_1630, name_ReleaseAttachments_upd_1630, owner_ReleaseAttachments_upd_1630, repo_ReleaseAttachments_upd_1630, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1630, repo_ReleaseAttachments_1630, id_ReleaseAttachments_1630, attachment_id_ReleaseAttachments_1630, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TagProtections:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_1640 = {};
  let id_TagProtections_1640 = RepositoryId;
  let owner_TagProtections_1640 = "owner_TagProtections_1640_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1640 = "repo_TagProtections_1640_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1640, id_TagProtections_1640, owner_TagProtections_1640, repo_TagProtections_1640, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating TagProtections
  let body_TagProtections_upd_1640 = {};
  let id_TagProtections_upd_1640 = id_TagProtections_1640;
  let owner_TagProtections_upd_1640 = "owner_TagProtections_upd_1640_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1640 = "repo_TagProtections_upd_1640_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1640, id_TagProtections_upd_1640, owner_TagProtections_upd_1640, repo_TagProtections_upd_1640, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_1640, repo_TagProtections_1640, id_TagProtections_1640, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Tags:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_1650 = {};
  let id_Tags_1650 = RepositoryId;
  let limit_Tags_1650 = Math.floor(Math.random() * 1000);
  let owner_Tags_1650 = "owner_Tags_1650_" + Math.floor(Math.random()*1000);
  let page_Tags_1650 = Math.floor(Math.random() * 1000);
  let repo_Tags_1650 = "repo_Tags_1650_" + Math.floor(Math.random()*1000);
  let tag_Tags_1650 = "tag_Tags_1650_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1650, id_Tags_1650, limit_Tags_1650, owner_Tags_1650, page_Tags_1650, repo_Tags_1650, tag_Tags_1650, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Tags
  repoDeleteTag(owner_Tags_1650, repo_Tags_1650, tag_Tags_1650, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Topics:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_1660 = {};
  let limit_Topics_1660 = Math.floor(Math.random() * 1000);
  let owner_Topics_1660 = "owner_Topics_1660_" + Math.floor(Math.random()*1000);
  let page_Topics_1660 = Math.floor(Math.random() * 1000);
  let q_Topics_1660 = "q_Topics_1660_" + Math.floor(Math.random()*1000);
  let repo_Topics_1660 = "repo_Topics_1660_" + Math.floor(Math.random()*1000);
  let topic_Topics_1660 = "topic_Topics_1660_" + Math.floor(Math.random()*1000);
  let topic1_Topics_1660 = "topic1_Topics_1660_" + Math.floor(Math.random()*1000);
  let topic2_Topics_1660 = "topic2_Topics_1660_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1660, limit_Topics_1660, owner_Topics_1660, page_Topics_1660, q_Topics_1660, repo_Topics_1660, topic_Topics_1660, topic1_Topics_1660, topic2_Topics_1660, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Topics
  let body_Topics_upd_1660 = {};
  let limit_Topics_upd_1660 = Math.floor(Math.random() * 1000);
  let owner_Topics_upd_1660 = owner_Topics_1660;
  let page_Topics_upd_1660 = Math.floor(Math.random() * 1000);
  let q_Topics_upd_1660 = "q_Topics_upd_1660_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1660 = "repo_Topics_upd_1660_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1660 = "topic_Topics_upd_1660_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_1660 = "topic1_Topics_upd_1660_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_1660 = "topic2_Topics_upd_1660_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1660, limit_Topics_upd_1660, owner_Topics_upd_1660, page_Topics_upd_1660, q_Topics_upd_1660, repo_Topics_upd_1660, topic_Topics_upd_1660, topic1_Topics_upd_1660, topic2_Topics_upd_1660, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_1660, repo_Topics_1660, topic_Topics_1660, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:RepositoryTransfer:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1670 = {};
  let id_RepositoryTransfer_1670 = RepositoriesId;
  let owner_RepositoryTransfer_1670 = "owner_RepositoryTransfer_1670_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1670 = "repo_RepositoryTransfer_1670_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1670 = "transferOptions_RepositoryTransfer_1670_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1670, id_RepositoryTransfer_1670, owner_RepositoryTransfer_1670, repo_RepositoryTransfer_1670, transferOptions_RepositoryTransfer_1670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:WikiPage:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_1680 = {};
  let id_WikiPage_1680 = RepositoryId;
  let owner_WikiPage_1680 = "owner_WikiPage_1680_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_1680 = "pageName_WikiPage_1680_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_1680 = "repo_WikiPage_1680_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_1680 = "wikiPageOptions_WikiPage_1680_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_1680, id_WikiPage_1680, owner_WikiPage_1680, pageName_WikiPage_1680, repo_WikiPage_1680, wikiPageOptions_WikiPage_1680, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating WikiPage
  let body_WikiPage_upd_1680 = {};
  let id_WikiPage_upd_1680 = id_WikiPage_1680;
  let owner_WikiPage_upd_1680 = "owner_WikiPage_upd_1680_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_1680 = "pageName_WikiPage_upd_1680_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_1680 = "repo_WikiPage_upd_1680_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_1680 = "wikiPageOptions_WikiPage_upd_1680_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_1680, id_WikiPage_upd_1680, owner_WikiPage_upd_1680, pageName_WikiPage_upd_1680, repo_WikiPage_upd_1680, wikiPageOptions_WikiPage_upd_1680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_1680, repo_WikiPage_1680, pageName_WikiPage_1680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamMembers:linear:3", function () {
  let deps = {};
  deps["OrganizationTeams"] = matchAnyOrganizationTeamsAdded();
  let pkMap = {"OrganizationTeams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationTeamsId = captured["OrganizationTeams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1690 = OrganizationTeamsId;
  let limit_TeamMembers_1690 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_1690 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_1690 = "username_TeamMembers_1690_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_1690, limit_TeamMembers_1690, page_TeamMembers_1690, username_TeamMembers_1690, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_1690, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamRepos:linear:3", function () {
  let deps = {};
  deps["OrganizationRepos"] = matchAnyOrganizationReposAdded();
  let pkMap = {"OrganizationRepos": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationReposId = captured["OrganizationRepos"];
  // -> Creating TeamRepos
  let id_TeamRepos_1700 = OrganizationReposId;
  let limit_TeamRepos_1700 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_1700 = "org_TeamRepos_1700_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_1700 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_1700 = "repo_TeamRepos_1700_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1700, limit_TeamRepos_1700, org_TeamRepos_1700, page_TeamRepos_1700, repo_TeamRepos_1700, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_1700, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserVariables:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_1710 = {};
  let variablename_UserVariables_1710 = "variablename_UserVariables_1710_" + Math.floor(Math.random()*1000);
  createUserVariable(body_UserVariables_1710, variablename_UserVariables_1710, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating UserVariables
  let body_UserVariables_upd_1710 = {};
  let variablename_UserVariables_upd_1710 = variablename_UserVariables_1710;
  updateUserVariable(body_UserVariables_upd_1710, variablename_UserVariables_upd_1710, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserVariables
  deleteUserVariable(variablename_UserVariables_1710, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OAuth2Applications:linear:3", function () {
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1720 = {};
  let id_OAuth2Applications_1720 = Math.floor(Math.random() * 1000);
  let limit_OAuth2Applications_1720 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_1720 = Math.floor(Math.random() * 1000);
  userCreateOAuth2Application(body_OAuth2Applications_1720, id_OAuth2Applications_1720, limit_OAuth2Applications_1720, page_OAuth2Applications_1720, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1720 = {};
  let id_OAuth2Applications_upd_1720 = id_OAuth2Applications_1720;
  let limit_OAuth2Applications_upd_1720 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_upd_1720 = Math.floor(Math.random() * 1000);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1720, id_OAuth2Applications_upd_1720, limit_OAuth2Applications_upd_1720, page_OAuth2Applications_upd_1720, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OAuth2Applications
  userDeleteOAuth2Application(id_OAuth2Applications_1720, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserAvatar:linear:3", function () {
  // -> Creating UserAvatar
  let body_UserAvatar_1730 = {};
  let id_UserAvatar_1730 = "id_UserAvatar_1730_" + Math.floor(Math.random()*1000);
  userUpdateAvatar(body_UserAvatar_1730, id_UserAvatar_1730, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserAvatar
  userDeleteAvatar(id_UserAvatar_1730, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserEmails:linear:3", function () {
  // -> Creating UserEmails
  let body_UserEmails_1740 = {};
  let id_UserEmails_1740 = "id_UserEmails_1740_" + Math.floor(Math.random()*1000);
  userAddEmail(body_UserEmails_1740, id_UserEmails_1740, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserEmails
  userDeleteEmail(id_UserEmails_1740, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeys:linear:3", function () {
  // -> Creating GPGKeys
  let Form_GPGKeys_1750 = {};
  let id_GPGKeys_1750 = Math.floor(Math.random() * 1000);
  let limit_GPGKeys_1750 = Math.floor(Math.random() * 1000);
  let page_GPGKeys_1750 = Math.floor(Math.random() * 1000);
  userCurrentPostGPGKey(Form_GPGKeys_1750, id_GPGKeys_1750, limit_GPGKeys_1750, page_GPGKeys_1750, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GPGKeys
  userCurrentDeleteGPGKey(id_GPGKeys_1750, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeyVerification:linear:3", function () {
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_1760 = "id_GPGKeyVerification_1760_" + Math.floor(Math.random()*1000);
  userVerifyGPGKey(id_GPGKeyVerification_1760, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserStarred:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating UserStarred
  let limit_UserStarred_1770 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_1770 = "owner_UserStarred_1770_" + Math.floor(Math.random()*1000);
  let page_UserStarred_1770 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_1770 = "repo_UserStarred_1770_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1770, owner_UserStarred_1770, page_UserStarred_1770, repo_UserStarred_1770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_1770, repo_UserStarred_1770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_ActivityPub", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_1780 = "CreateAccessTokenOption_Users_1780_" + Math.floor(Math.random()*1000);
  let body_Users_1780 = {};
  let limit_Users_1780 = Math.floor(Math.random() * 1000);
  let page_Users_1780 = Math.floor(Math.random() * 1000);
  let purge_Users_1780 = true;
  let token_Users_1780 = "token_Users_1780_" + Math.floor(Math.random()*1000);
  let username_Users_1780 = "username_Users_1780_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_1780, body_Users_1780, limit_Users_1780, page_Users_1780, purge_Users_1780, token_Users_1780, username_Users_1780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating ActivityPub
  let user_id_ActivityPub_1780 = username_Users_1780;
  activitypubPersonInbox(user_id_ActivityPub_1780, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  adminDeleteUser(username_Users_1780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UnadoptedRepositories", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_1880 = "CreateAccessTokenOption_Users_1880_" + Math.floor(Math.random()*1000);
  let body_Users_1880 = {};
  let limit_Users_1880 = Math.floor(Math.random() * 1000);
  let page_Users_1880 = Math.floor(Math.random() * 1000);
  let purge_Users_1880 = true;
  let token_Users_1880 = "token_Users_1880_" + Math.floor(Math.random()*1000);
  let username_Users_1880 = "username_Users_1880_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_1880, body_Users_1880, limit_Users_1880, page_Users_1880, purge_Users_1880, token_Users_1880, username_Users_1880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_1880 = Math.floor(Math.random() * 1000);
  let owner_UnadoptedRepositories_1880 = "owner_UnadoptedRepositories_1880_" + Math.floor(Math.random()*1000);
  let page_UnadoptedRepositories_1880 = Math.floor(Math.random() * 1000);
  let pattern_UnadoptedRepositories_1880 = "pattern_UnadoptedRepositories_1880_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_1880 = "repo_UnadoptedRepositories_1880_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_1880, owner_UnadoptedRepositories_1880, page_UnadoptedRepositories_1880, pattern_UnadoptedRepositories_1880, repo_UnadoptedRepositories_1880, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UnadoptedRepositories
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_1880, repo_UnadoptedRepositories_1880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  adminDeleteUser(username_Users_1880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserBadges", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_1980 = "CreateAccessTokenOption_Users_1980_" + Math.floor(Math.random()*1000);
  let body_Users_1980 = {};
  let limit_Users_1980 = Math.floor(Math.random() * 1000);
  let page_Users_1980 = Math.floor(Math.random() * 1000);
  let purge_Users_1980 = true;
  let token_Users_1980 = "token_Users_1980_" + Math.floor(Math.random()*1000);
  let username_Users_1980 = "username_Users_1980_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_1980, body_Users_1980, limit_Users_1980, page_Users_1980, purge_Users_1980, token_Users_1980, username_Users_1980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserBadges
  let body_UserBadges_1980 = {};
  let username_UserBadges_1980 = username_Users_1980;
  adminAddUserBadges(body_UserBadges_1980, username_UserBadges_1980, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserBadges
  adminDeleteUserBadges(username_UserBadges_1980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  adminDeleteUser(username_Users_1980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserKeys", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2080 = "CreateAccessTokenOption_Users_2080_" + Math.floor(Math.random()*1000);
  let body_Users_2080 = {};
  let limit_Users_2080 = Math.floor(Math.random() * 1000);
  let page_Users_2080 = Math.floor(Math.random() * 1000);
  let purge_Users_2080 = true;
  let token_Users_2080 = "token_Users_2080_" + Math.floor(Math.random()*1000);
  let username_Users_2080 = "username_Users_2080_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2080, body_Users_2080, limit_Users_2080, page_Users_2080, purge_Users_2080, token_Users_2080, username_Users_2080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserKeys
  let key_UserKeys_2080 = "key_UserKeys_2080_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_2080 = "purge_UserKeys_2080_" + Math.floor(Math.random()*1000);
  let username_UserKeys_2080 = username_Users_2080;
  adminCreatePublicKey(key_UserKeys_2080, purge_UserKeys_2080, username_UserKeys_2080, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserKeys
  adminDeleteUser(username_UserKeys_2080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  adminDeleteUser(username_Users_2080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserOrganizations", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2180 = "CreateAccessTokenOption_Users_2180_" + Math.floor(Math.random()*1000);
  let body_Users_2180 = {};
  let limit_Users_2180 = Math.floor(Math.random() * 1000);
  let page_Users_2180 = Math.floor(Math.random() * 1000);
  let purge_Users_2180 = true;
  let token_Users_2180 = "token_Users_2180_" + Math.floor(Math.random()*1000);
  let username_Users_2180 = "username_Users_2180_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2180, body_Users_2180, limit_Users_2180, page_Users_2180, purge_Users_2180, token_Users_2180, username_Users_2180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserOrganizations
  let id_UserOrganizations_2180 = "id_UserOrganizations_2180_" + Math.floor(Math.random()*1000);
  let organization_UserOrganizations_2180 = "organization_UserOrganizations_2180_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_2180 = username_Users_2180;
  adminCreateOrg(id_UserOrganizations_2180, organization_UserOrganizations_2180, username_UserOrganizations_2180, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  adminDeleteUser(username_Users_2180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserRename", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2280 = "CreateAccessTokenOption_Users_2280_" + Math.floor(Math.random()*1000);
  let body_Users_2280 = {};
  let limit_Users_2280 = Math.floor(Math.random() * 1000);
  let page_Users_2280 = Math.floor(Math.random() * 1000);
  let purge_Users_2280 = true;
  let token_Users_2280 = "token_Users_2280_" + Math.floor(Math.random()*1000);
  let username_Users_2280 = "username_Users_2280_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2280, body_Users_2280, limit_Users_2280, page_Users_2280, purge_Users_2280, token_Users_2280, username_Users_2280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserRename
  let body_UserRename_2280 = "body_UserRename_2280_" + Math.floor(Math.random()*1000);
  let id_UserRename_2280 = "id_UserRename_2280_" + Math.floor(Math.random()*1000);
  let username_UserRename_2280 = username_Users_2280;
  adminRenameUser(body_UserRename_2280, id_UserRename_2280, username_UserRename_2280, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  adminDeleteUser(username_Users_2280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserRepositories", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2380 = "CreateAccessTokenOption_Users_2380_" + Math.floor(Math.random()*1000);
  let body_Users_2380 = {};
  let limit_Users_2380 = Math.floor(Math.random() * 1000);
  let page_Users_2380 = Math.floor(Math.random() * 1000);
  let purge_Users_2380 = true;
  let token_Users_2380 = "token_Users_2380_" + Math.floor(Math.random()*1000);
  let username_Users_2380 = "username_Users_2380_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2380, body_Users_2380, limit_Users_2380, page_Users_2380, purge_Users_2380, token_Users_2380, username_Users_2380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserRepositories
  let id_UserRepositories_2380 = "id_UserRepositories_2380_" + Math.floor(Math.random()*1000);
  let repository_UserRepositories_2380 = "repository_UserRepositories_2380_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_2380 = username_Users_2380;
  adminCreateRepo(id_UserRepositories_2380, repository_UserRepositories_2380, username_UserRepositories_2380, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  adminDeleteUser(username_Users_2380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_Organization_Avatar", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2480 = "CreateAccessTokenOption_Users_2480_" + Math.floor(Math.random()*1000);
  let body_Users_2480 = {};
  let limit_Users_2480 = Math.floor(Math.random() * 1000);
  let page_Users_2480 = Math.floor(Math.random() * 1000);
  let purge_Users_2480 = true;
  let token_Users_2480 = "token_Users_2480_" + Math.floor(Math.random()*1000);
  let username_Users_2480 = "username_Users_2480_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2480, body_Users_2480, limit_Users_2480, page_Users_2480, purge_Users_2480, token_Users_2480, username_Users_2480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_2480 = {};
  let limit_Organization_2480 = Math.floor(Math.random() * 1000);
  let org_Organization_2480 = "org_Organization_2480_" + Math.floor(Math.random()*1000);
  let page_Organization_2480 = Math.floor(Math.random() * 1000);
  let secretname_Organization_2480 = "secretname_Organization_2480_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_2480, limit_Organization_2480, org_Organization_2480, page_Organization_2480, secretname_Organization_2480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Avatar
  let body_Avatar_2480 = {};
  let org_Avatar_2480 = org_Organization_2480;
  orgUpdateAvatar(body_Avatar_2480, org_Avatar_2480, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Avatar
  orgDeleteAvatar(org_Avatar_2480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_2480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  adminDeleteUser(username_Users_2480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_Organization_OrganizationRepos_TeamRepos", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2580 = "CreateAccessTokenOption_Users_2580_" + Math.floor(Math.random()*1000);
  let body_Users_2580 = {};
  let limit_Users_2580 = Math.floor(Math.random() * 1000);
  let page_Users_2580 = Math.floor(Math.random() * 1000);
  let purge_Users_2580 = true;
  let token_Users_2580 = "token_Users_2580_" + Math.floor(Math.random()*1000);
  let username_Users_2580 = "username_Users_2580_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2580, body_Users_2580, limit_Users_2580, page_Users_2580, purge_Users_2580, token_Users_2580, username_Users_2580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_2580 = {};
  let limit_Organization_2580 = Math.floor(Math.random() * 1000);
  let org_Organization_2580 = "org_Organization_2580_" + Math.floor(Math.random()*1000);
  let page_Organization_2580 = Math.floor(Math.random() * 1000);
  let secretname_Organization_2580 = "secretname_Organization_2580_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_2580, limit_Organization_2580, org_Organization_2580, page_Organization_2580, secretname_Organization_2580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrganizationRepos
  let body_OrganizationRepos_2580 = {};
  let id_OrganizationRepos_2580 = "id_OrganizationRepos_2580_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_2580 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_2580 = org_Organization_2580;
  let page_OrganizationRepos_2580 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_2580, id_OrganizationRepos_2580, limit_OrganizationRepos_2580, org_OrganizationRepos_2580, page_OrganizationRepos_2580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamRepos
  let id_TeamRepos_2580 = id_OrganizationRepos_2580;
  let limit_TeamRepos_2580 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_2580 = "org_TeamRepos_2580_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_2580 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_2580 = "repo_TeamRepos_2580_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_2580, limit_TeamRepos_2580, org_TeamRepos_2580, page_TeamRepos_2580, repo_TeamRepos_2580, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_2580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_2580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  adminDeleteUser(username_Users_2580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_Organization_OrganizationTeams_TeamMembers", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2680 = "CreateAccessTokenOption_Users_2680_" + Math.floor(Math.random()*1000);
  let body_Users_2680 = {};
  let limit_Users_2680 = Math.floor(Math.random() * 1000);
  let page_Users_2680 = Math.floor(Math.random() * 1000);
  let purge_Users_2680 = true;
  let token_Users_2680 = "token_Users_2680_" + Math.floor(Math.random()*1000);
  let username_Users_2680 = "username_Users_2680_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2680, body_Users_2680, limit_Users_2680, page_Users_2680, purge_Users_2680, token_Users_2680, username_Users_2680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_2680 = {};
  let limit_Organization_2680 = Math.floor(Math.random() * 1000);
  let org_Organization_2680 = "org_Organization_2680_" + Math.floor(Math.random()*1000);
  let page_Organization_2680 = Math.floor(Math.random() * 1000);
  let secretname_Organization_2680 = "secretname_Organization_2680_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_2680, limit_Organization_2680, org_Organization_2680, page_Organization_2680, secretname_Organization_2680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrganizationTeams
  let body_OrganizationTeams_2680 = {};
  let id_OrganizationTeams_2680 = "id_OrganizationTeams_2680_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_2680 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_2680 = org_Organization_2680;
  let page_OrganizationTeams_2680 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_2680, id_OrganizationTeams_2680, limit_OrganizationTeams_2680, org_OrganizationTeams_2680, page_OrganizationTeams_2680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamMembers
  let id_TeamMembers_2680 = id_OrganizationTeams_2680;
  let limit_TeamMembers_2680 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_2680 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_2680 = "username_TeamMembers_2680_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_2680, limit_TeamMembers_2680, page_TeamMembers_2680, username_TeamMembers_2680, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_2680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_2680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  adminDeleteUser(username_Users_2680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserVariables", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2780 = "CreateAccessTokenOption_Users_2780_" + Math.floor(Math.random()*1000);
  let body_Users_2780 = {};
  let limit_Users_2780 = Math.floor(Math.random() * 1000);
  let page_Users_2780 = Math.floor(Math.random() * 1000);
  let purge_Users_2780 = true;
  let token_Users_2780 = "token_Users_2780_" + Math.floor(Math.random()*1000);
  let username_Users_2780 = "username_Users_2780_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2780, body_Users_2780, limit_Users_2780, page_Users_2780, purge_Users_2780, token_Users_2780, username_Users_2780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserVariables
  let body_UserVariables_2780 = {};
  let variablename_UserVariables_2780 = "variablename_UserVariables_2780_" + Math.floor(Math.random()*1000);
  createUserVariable(body_UserVariables_2780, variablename_UserVariables_2780, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserVariables
  deleteUserVariable(variablename_UserVariables_2780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  adminDeleteUser(username_Users_2780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_Avatar", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2880 = "CreateAccessTokenOption_Users_2880_" + Math.floor(Math.random()*1000);
  let body_Users_2880 = {};
  let limit_Users_2880 = Math.floor(Math.random() * 1000);
  let page_Users_2880 = Math.floor(Math.random() * 1000);
  let purge_Users_2880 = true;
  let token_Users_2880 = "token_Users_2880_" + Math.floor(Math.random()*1000);
  let username_Users_2880 = "username_Users_2880_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2880, body_Users_2880, limit_Users_2880, page_Users_2880, purge_Users_2880, token_Users_2880, username_Users_2880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_2880 = {};
  let limit_Organization_2880 = Math.floor(Math.random() * 1000);
  let org_Organization_2880 = "org_Organization_2880_" + Math.floor(Math.random()*1000);
  let page_Organization_2880 = Math.floor(Math.random() * 1000);
  let secretname_Organization_2880 = "secretname_Organization_2880_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_2880, limit_Organization_2880, org_Organization_2880, page_Organization_2880, secretname_Organization_2880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Avatar
  let body_Avatar_2880 = {};
  let org_Avatar_2880 = org_Organization_2880;
  orgUpdateAvatar(body_Avatar_2880, org_Avatar_2880, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Avatar
  orgDeleteAvatar(org_Avatar_2880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_2880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_OrganizationRepos_TeamRepos", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_2980 = "CreateAccessTokenOption_Users_2980_" + Math.floor(Math.random()*1000);
  let body_Users_2980 = {};
  let limit_Users_2980 = Math.floor(Math.random() * 1000);
  let page_Users_2980 = Math.floor(Math.random() * 1000);
  let purge_Users_2980 = true;
  let token_Users_2980 = "token_Users_2980_" + Math.floor(Math.random()*1000);
  let username_Users_2980 = "username_Users_2980_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_2980, body_Users_2980, limit_Users_2980, page_Users_2980, purge_Users_2980, token_Users_2980, username_Users_2980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_2980 = {};
  let limit_Organization_2980 = Math.floor(Math.random() * 1000);
  let org_Organization_2980 = "org_Organization_2980_" + Math.floor(Math.random()*1000);
  let page_Organization_2980 = Math.floor(Math.random() * 1000);
  let secretname_Organization_2980 = "secretname_Organization_2980_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_2980, limit_Organization_2980, org_Organization_2980, page_Organization_2980, secretname_Organization_2980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrganizationRepos
  let body_OrganizationRepos_2980 = {};
  let id_OrganizationRepos_2980 = "id_OrganizationRepos_2980_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_2980 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_2980 = org_Organization_2980;
  let page_OrganizationRepos_2980 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_2980, id_OrganizationRepos_2980, limit_OrganizationRepos_2980, org_OrganizationRepos_2980, page_OrganizationRepos_2980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamRepos
  let id_TeamRepos_2980 = id_OrganizationRepos_2980;
  let limit_TeamRepos_2980 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_2980 = "org_TeamRepos_2980_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_2980 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_2980 = "repo_TeamRepos_2980_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_2980, limit_TeamRepos_2980, org_TeamRepos_2980, page_TeamRepos_2980, repo_TeamRepos_2980, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_2980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_2980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_OrganizationTeams_TeamMembers", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_3080 = "CreateAccessTokenOption_Users_3080_" + Math.floor(Math.random()*1000);
  let body_Users_3080 = {};
  let limit_Users_3080 = Math.floor(Math.random() * 1000);
  let page_Users_3080 = Math.floor(Math.random() * 1000);
  let purge_Users_3080 = true;
  let token_Users_3080 = "token_Users_3080_" + Math.floor(Math.random()*1000);
  let username_Users_3080 = "username_Users_3080_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_3080, body_Users_3080, limit_Users_3080, page_Users_3080, purge_Users_3080, token_Users_3080, username_Users_3080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_3080 = {};
  let limit_Organization_3080 = Math.floor(Math.random() * 1000);
  let org_Organization_3080 = "org_Organization_3080_" + Math.floor(Math.random()*1000);
  let page_Organization_3080 = Math.floor(Math.random() * 1000);
  let secretname_Organization_3080 = "secretname_Organization_3080_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_3080, limit_Organization_3080, org_Organization_3080, page_Organization_3080, secretname_Organization_3080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrganizationTeams
  let body_OrganizationTeams_3080 = {};
  let id_OrganizationTeams_3080 = "id_OrganizationTeams_3080_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_3080 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_3080 = org_Organization_3080;
  let page_OrganizationTeams_3080 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_3080, id_OrganizationTeams_3080, limit_OrganizationTeams_3080, org_OrganizationTeams_3080, page_OrganizationTeams_3080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamMembers
  let id_TeamMembers_3080 = id_OrganizationTeams_3080;
  let limit_TeamMembers_3080 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_3080 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_3080 = "username_TeamMembers_3080_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_3080, limit_TeamMembers_3080, page_TeamMembers_3080, username_TeamMembers_3080, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_3080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_3080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:OrganizationRepos_TeamRepos", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_3180 = "CreateAccessTokenOption_Users_3180_" + Math.floor(Math.random()*1000);
  let body_Users_3180 = {};
  let limit_Users_3180 = Math.floor(Math.random() * 1000);
  let page_Users_3180 = Math.floor(Math.random() * 1000);
  let purge_Users_3180 = true;
  let token_Users_3180 = "token_Users_3180_" + Math.floor(Math.random()*1000);
  let username_Users_3180 = "username_Users_3180_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_3180, body_Users_3180, limit_Users_3180, page_Users_3180, purge_Users_3180, token_Users_3180, username_Users_3180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_3180 = {};
  let limit_Organization_3180 = Math.floor(Math.random() * 1000);
  let org_Organization_3180 = "org_Organization_3180_" + Math.floor(Math.random()*1000);
  let page_Organization_3180 = Math.floor(Math.random() * 1000);
  let secretname_Organization_3180 = "secretname_Organization_3180_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_3180, limit_Organization_3180, org_Organization_3180, page_Organization_3180, secretname_Organization_3180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrganizationRepos
  let body_OrganizationRepos_3180 = {};
  let id_OrganizationRepos_3180 = "id_OrganizationRepos_3180_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_3180 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_3180 = org_Organization_3180;
  let page_OrganizationRepos_3180 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_3180, id_OrganizationRepos_3180, limit_OrganizationRepos_3180, org_OrganizationRepos_3180, page_OrganizationRepos_3180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamRepos
  let id_TeamRepos_3180 = id_OrganizationRepos_3180;
  let limit_TeamRepos_3180 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_3180 = "org_TeamRepos_3180_" + Math.floor(Math.random()*1000);
  let page_TeamRepos_3180 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_3180 = "repo_TeamRepos_3180_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_3180, limit_TeamRepos_3180, org_TeamRepos_3180, page_TeamRepos_3180, repo_TeamRepos_3180, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_3180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:OrganizationTeams_TeamMembers", function () {
  // -> Creating Users
  let CreateAccessTokenOption_Users_3280 = "CreateAccessTokenOption_Users_3280_" + Math.floor(Math.random()*1000);
  let body_Users_3280 = {};
  let limit_Users_3280 = Math.floor(Math.random() * 1000);
  let page_Users_3280 = Math.floor(Math.random() * 1000);
  let purge_Users_3280 = true;
  let token_Users_3280 = "token_Users_3280_" + Math.floor(Math.random()*1000);
  let username_Users_3280 = "username_Users_3280_" + Math.floor(Math.random()*1000);
  adminCreateUser(CreateAccessTokenOption_Users_3280, body_Users_3280, limit_Users_3280, page_Users_3280, purge_Users_3280, token_Users_3280, username_Users_3280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_3280 = {};
  let limit_Organization_3280 = Math.floor(Math.random() * 1000);
  let org_Organization_3280 = "org_Organization_3280_" + Math.floor(Math.random()*1000);
  let page_Organization_3280 = Math.floor(Math.random() * 1000);
  let secretname_Organization_3280 = "secretname_Organization_3280_" + Math.floor(Math.random()*1000);
  createOrgRepoDeprecated(body_Organization_3280, limit_Organization_3280, org_Organization_3280, page_Organization_3280, secretname_Organization_3280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrganizationTeams
  let body_OrganizationTeams_3280 = {};
  let id_OrganizationTeams_3280 = "id_OrganizationTeams_3280_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_3280 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_3280 = org_Organization_3280;
  let page_OrganizationTeams_3280 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_3280, id_OrganizationTeams_3280, limit_OrganizationTeams_3280, org_OrganizationTeams_3280, page_OrganizationTeams_3280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamMembers
  let id_TeamMembers_3280 = id_OrganizationTeams_3280;
  let limit_TeamMembers_3280 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_3280 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_3280 = "username_TeamMembers_3280_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_3280, limit_TeamMembers_3280, page_TeamMembers_3280, username_TeamMembers_3280, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_3280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueCommentAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_3380 = {};
  let filepath_Repositories_3380 = "filepath_Repositories_3380_" + Math.floor(Math.random()*1000);
  let id_Repositories_3380 = Math.floor(Math.random() * 1000);
  let limit_Repositories_3380 = Math.floor(Math.random() * 1000);
  let owner_Repositories_3380 = "owner_Repositories_3380_" + Math.floor(Math.random()*1000);
  let page_Repositories_3380 = Math.floor(Math.random() * 1000);
  let repo_Repositories_3380 = "repo_Repositories_3380_" + Math.floor(Math.random()*1000);
  let username_Repositories_3380 = "username_Repositories_3380_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_3380, filepath_Repositories_3380, id_Repositories_3380, limit_Repositories_3380, owner_Repositories_3380, page_Repositories_3380, repo_Repositories_3380, username_Repositories_3380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_3380 = {};
  let id_Repository_3380 = id_Repositories_3380;
  let limit_Repository_3380 = Math.floor(Math.random() * 1000);
  let owner_Repository_3380 = "owner_Repository_3380_" + Math.floor(Math.random()*1000);
  let page_Repository_3380 = Math.floor(Math.random() * 1000);
  let repo_Repository_3380 = "repo_Repository_3380_" + Math.floor(Math.random()*1000);
  let sha_Repository_3380 = "sha_Repository_3380_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_3380, id_Repository_3380, limit_Repository_3380, owner_Repository_3380, page_Repository_3380, repo_Repository_3380, sha_Repository_3380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_3380 = {};
  let id_Issues_3380 = id_Repository_3380;
  let index_Issues_3380 = Math.floor(Math.random() * 1000);
  let limit_Issues_3380 = Math.floor(Math.random() * 1000);
  let owner_Issues_3380 = "owner_Issues_3380_" + Math.floor(Math.random()*1000);
  let page_Issues_3380 = Math.floor(Math.random() * 1000);
  let position_Issues_3380 = Math.floor(Math.random() * 1000);
  let repo_Issues_3380 = "repo_Issues_3380_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_3380, id_Issues_3380, index_Issues_3380, limit_Issues_3380, owner_Issues_3380, page_Issues_3380, position_Issues_3380, repo_Issues_3380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_3380 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_3380 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_3380 = {};
  let id_IssueCommentAttachments_3380 = id_Issues_3380;
  let name_IssueCommentAttachments_3380 = "name_IssueCommentAttachments_3380_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_3380 = "owner_IssueCommentAttachments_3380_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_3380 = "repo_IssueCommentAttachments_3380_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_3380, attachment_id_IssueCommentAttachments_3380, body_IssueCommentAttachments_3380, id_IssueCommentAttachments_3380, name_IssueCommentAttachments_3380, owner_IssueCommentAttachments_3380, repo_IssueCommentAttachments_3380, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_3380, repo_IssueCommentAttachments_3380, id_IssueCommentAttachments_3380, attachment_id_IssueCommentAttachments_3380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_3380, repo_Issues_3380, index_Issues_3380, id_Issues_3380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueCommentReactions", function () {
  // -> Creating Repositories
  let body_Repositories_3480 = {};
  let filepath_Repositories_3480 = "filepath_Repositories_3480_" + Math.floor(Math.random()*1000);
  let id_Repositories_3480 = Math.floor(Math.random() * 1000);
  let limit_Repositories_3480 = Math.floor(Math.random() * 1000);
  let owner_Repositories_3480 = "owner_Repositories_3480_" + Math.floor(Math.random()*1000);
  let page_Repositories_3480 = Math.floor(Math.random() * 1000);
  let repo_Repositories_3480 = "repo_Repositories_3480_" + Math.floor(Math.random()*1000);
  let username_Repositories_3480 = "username_Repositories_3480_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_3480, filepath_Repositories_3480, id_Repositories_3480, limit_Repositories_3480, owner_Repositories_3480, page_Repositories_3480, repo_Repositories_3480, username_Repositories_3480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_3480 = {};
  let id_Repository_3480 = id_Repositories_3480;
  let limit_Repository_3480 = Math.floor(Math.random() * 1000);
  let owner_Repository_3480 = "owner_Repository_3480_" + Math.floor(Math.random()*1000);
  let page_Repository_3480 = Math.floor(Math.random() * 1000);
  let repo_Repository_3480 = "repo_Repository_3480_" + Math.floor(Math.random()*1000);
  let sha_Repository_3480 = "sha_Repository_3480_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_3480, id_Repository_3480, limit_Repository_3480, owner_Repository_3480, page_Repository_3480, repo_Repository_3480, sha_Repository_3480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_3480 = {};
  let id_Issues_3480 = id_Repository_3480;
  let index_Issues_3480 = Math.floor(Math.random() * 1000);
  let limit_Issues_3480 = Math.floor(Math.random() * 1000);
  let owner_Issues_3480 = "owner_Issues_3480_" + Math.floor(Math.random()*1000);
  let page_Issues_3480 = Math.floor(Math.random() * 1000);
  let position_Issues_3480 = Math.floor(Math.random() * 1000);
  let repo_Issues_3480 = "repo_Issues_3480_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_3480, id_Issues_3480, index_Issues_3480, limit_Issues_3480, owner_Issues_3480, page_Issues_3480, position_Issues_3480, repo_Issues_3480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_3480 = {};
  let id_IssueCommentReactions_3480 = id_Issues_3480;
  let owner_IssueCommentReactions_3480 = "owner_IssueCommentReactions_3480_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_3480 = "repo_IssueCommentReactions_3480_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_3480, id_IssueCommentReactions_3480, owner_IssueCommentReactions_3480, repo_IssueCommentReactions_3480, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_3480, repo_IssueCommentReactions_3480, id_IssueCommentReactions_3480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_3480, repo_Issues_3480, index_Issues_3480, id_Issues_3480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_3580 = {};
  let filepath_Repositories_3580 = "filepath_Repositories_3580_" + Math.floor(Math.random()*1000);
  let id_Repositories_3580 = Math.floor(Math.random() * 1000);
  let limit_Repositories_3580 = Math.floor(Math.random() * 1000);
  let owner_Repositories_3580 = "owner_Repositories_3580_" + Math.floor(Math.random()*1000);
  let page_Repositories_3580 = Math.floor(Math.random() * 1000);
  let repo_Repositories_3580 = "repo_Repositories_3580_" + Math.floor(Math.random()*1000);
  let username_Repositories_3580 = "username_Repositories_3580_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_3580, filepath_Repositories_3580, id_Repositories_3580, limit_Repositories_3580, owner_Repositories_3580, page_Repositories_3580, repo_Repositories_3580, username_Repositories_3580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_3580 = {};
  let id_Repository_3580 = id_Repositories_3580;
  let limit_Repository_3580 = Math.floor(Math.random() * 1000);
  let owner_Repository_3580 = "owner_Repository_3580_" + Math.floor(Math.random()*1000);
  let page_Repository_3580 = Math.floor(Math.random() * 1000);
  let repo_Repository_3580 = "repo_Repository_3580_" + Math.floor(Math.random()*1000);
  let sha_Repository_3580 = "sha_Repository_3580_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_3580, id_Repository_3580, limit_Repository_3580, owner_Repository_3580, page_Repository_3580, repo_Repository_3580, sha_Repository_3580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_3580 = {};
  let id_Issues_3580 = id_Repository_3580;
  let index_Issues_3580 = Math.floor(Math.random() * 1000);
  let limit_Issues_3580 = Math.floor(Math.random() * 1000);
  let owner_Issues_3580 = "owner_Issues_3580_" + Math.floor(Math.random()*1000);
  let page_Issues_3580 = Math.floor(Math.random() * 1000);
  let position_Issues_3580 = Math.floor(Math.random() * 1000);
  let repo_Issues_3580 = "repo_Issues_3580_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_3580, id_Issues_3580, index_Issues_3580, limit_Issues_3580, owner_Issues_3580, page_Issues_3580, position_Issues_3580, repo_Issues_3580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueAttachments
  let attachment_IssueAttachments_3580 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_3580 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_3580 = {};
  let id_IssueAttachments_3580 = id_Issues_3580;
  let index_IssueAttachments_3580 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_3580 = "name_IssueAttachments_3580_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_3580 = "owner_IssueAttachments_3580_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_3580 = "repo_IssueAttachments_3580_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_3580, attachment_id_IssueAttachments_3580, body_IssueAttachments_3580, id_IssueAttachments_3580, index_IssueAttachments_3580, name_IssueAttachments_3580, owner_IssueAttachments_3580, repo_IssueAttachments_3580, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_3580, repo_IssueAttachments_3580, index_IssueAttachments_3580, attachment_id_IssueAttachments_3580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_3580, repo_Issues_3580, index_Issues_3580, id_Issues_3580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueBlocks", function () {
  // -> Creating Repositories
  let body_Repositories_3680 = {};
  let filepath_Repositories_3680 = "filepath_Repositories_3680_" + Math.floor(Math.random()*1000);
  let id_Repositories_3680 = Math.floor(Math.random() * 1000);
  let limit_Repositories_3680 = Math.floor(Math.random() * 1000);
  let owner_Repositories_3680 = "owner_Repositories_3680_" + Math.floor(Math.random()*1000);
  let page_Repositories_3680 = Math.floor(Math.random() * 1000);
  let repo_Repositories_3680 = "repo_Repositories_3680_" + Math.floor(Math.random()*1000);
  let username_Repositories_3680 = "username_Repositories_3680_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_3680, filepath_Repositories_3680, id_Repositories_3680, limit_Repositories_3680, owner_Repositories_3680, page_Repositories_3680, repo_Repositories_3680, username_Repositories_3680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_3680 = {};
  let id_Repository_3680 = id_Repositories_3680;
  let limit_Repository_3680 = Math.floor(Math.random() * 1000);
  let owner_Repository_3680 = "owner_Repository_3680_" + Math.floor(Math.random()*1000);
  let page_Repository_3680 = Math.floor(Math.random() * 1000);
  let repo_Repository_3680 = "repo_Repository_3680_" + Math.floor(Math.random()*1000);
  let sha_Repository_3680 = "sha_Repository_3680_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_3680, id_Repository_3680, limit_Repository_3680, owner_Repository_3680, page_Repository_3680, repo_Repository_3680, sha_Repository_3680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_3680 = {};
  let id_Issues_3680 = id_Repository_3680;
  let index_Issues_3680 = Math.floor(Math.random() * 1000);
  let limit_Issues_3680 = Math.floor(Math.random() * 1000);
  let owner_Issues_3680 = "owner_Issues_3680_" + Math.floor(Math.random()*1000);
  let page_Issues_3680 = Math.floor(Math.random() * 1000);
  let position_Issues_3680 = Math.floor(Math.random() * 1000);
  let repo_Issues_3680 = "repo_Issues_3680_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_3680, id_Issues_3680, index_Issues_3680, limit_Issues_3680, owner_Issues_3680, page_Issues_3680, position_Issues_3680, repo_Issues_3680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueBlocks
  let body_IssueBlocks_3680 = {};
  let index_IssueBlocks_3680 = "index_IssueBlocks_3680_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_3680 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_3680 = "owner_IssueBlocks_3680_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_3680 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_3680 = "repo_IssueBlocks_3680_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_3680, index_IssueBlocks_3680, limit_IssueBlocks_3680, owner_IssueBlocks_3680, page_IssueBlocks_3680, repo_IssueBlocks_3680, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_3680, repo_IssueBlocks_3680, index_IssueBlocks_3680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_3680, repo_Issues_3680, index_Issues_3680, id_Issues_3680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueComments", function () {
  // -> Creating Repositories
  let body_Repositories_3780 = {};
  let filepath_Repositories_3780 = "filepath_Repositories_3780_" + Math.floor(Math.random()*1000);
  let id_Repositories_3780 = Math.floor(Math.random() * 1000);
  let limit_Repositories_3780 = Math.floor(Math.random() * 1000);
  let owner_Repositories_3780 = "owner_Repositories_3780_" + Math.floor(Math.random()*1000);
  let page_Repositories_3780 = Math.floor(Math.random() * 1000);
  let repo_Repositories_3780 = "repo_Repositories_3780_" + Math.floor(Math.random()*1000);
  let username_Repositories_3780 = "username_Repositories_3780_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_3780, filepath_Repositories_3780, id_Repositories_3780, limit_Repositories_3780, owner_Repositories_3780, page_Repositories_3780, repo_Repositories_3780, username_Repositories_3780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_3780 = {};
  let id_Repository_3780 = id_Repositories_3780;
  let limit_Repository_3780 = Math.floor(Math.random() * 1000);
  let owner_Repository_3780 = "owner_Repository_3780_" + Math.floor(Math.random()*1000);
  let page_Repository_3780 = Math.floor(Math.random() * 1000);
  let repo_Repository_3780 = "repo_Repository_3780_" + Math.floor(Math.random()*1000);
  let sha_Repository_3780 = "sha_Repository_3780_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_3780, id_Repository_3780, limit_Repository_3780, owner_Repository_3780, page_Repository_3780, repo_Repository_3780, sha_Repository_3780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_3780 = {};
  let id_Issues_3780 = id_Repository_3780;
  let index_Issues_3780 = Math.floor(Math.random() * 1000);
  let limit_Issues_3780 = Math.floor(Math.random() * 1000);
  let owner_Issues_3780 = "owner_Issues_3780_" + Math.floor(Math.random()*1000);
  let page_Issues_3780 = Math.floor(Math.random() * 1000);
  let position_Issues_3780 = Math.floor(Math.random() * 1000);
  let repo_Issues_3780 = "repo_Issues_3780_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_3780, id_Issues_3780, index_Issues_3780, limit_Issues_3780, owner_Issues_3780, page_Issues_3780, position_Issues_3780, repo_Issues_3780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueComments
  let before_IssueComments_3780 = "before_IssueComments_3780_" + Math.floor(Math.random()*1000);
  let body_IssueComments_3780 = {};
  let id_IssueComments_3780 = id_Issues_3780;
  let index_IssueComments_3780 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_3780 = "owner_IssueComments_3780_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_3780 = "repo_IssueComments_3780_" + Math.floor(Math.random()*1000);
  let since_IssueComments_3780 = "since_IssueComments_3780_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_3780, body_IssueComments_3780, id_IssueComments_3780, index_IssueComments_3780, owner_IssueComments_3780, repo_IssueComments_3780, since_IssueComments_3780, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_3780, repo_IssueComments_3780, index_IssueComments_3780, id_IssueComments_3780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_3780, repo_Issues_3780, index_Issues_3780, id_Issues_3780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueSubscriptions", function () {
  // -> Creating Repositories
  let body_Repositories_3880 = {};
  let filepath_Repositories_3880 = "filepath_Repositories_3880_" + Math.floor(Math.random()*1000);
  let id_Repositories_3880 = Math.floor(Math.random() * 1000);
  let limit_Repositories_3880 = Math.floor(Math.random() * 1000);
  let owner_Repositories_3880 = "owner_Repositories_3880_" + Math.floor(Math.random()*1000);
  let page_Repositories_3880 = Math.floor(Math.random() * 1000);
  let repo_Repositories_3880 = "repo_Repositories_3880_" + Math.floor(Math.random()*1000);
  let username_Repositories_3880 = "username_Repositories_3880_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_3880, filepath_Repositories_3880, id_Repositories_3880, limit_Repositories_3880, owner_Repositories_3880, page_Repositories_3880, repo_Repositories_3880, username_Repositories_3880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_3880 = {};
  let id_Repository_3880 = id_Repositories_3880;
  let limit_Repository_3880 = Math.floor(Math.random() * 1000);
  let owner_Repository_3880 = "owner_Repository_3880_" + Math.floor(Math.random()*1000);
  let page_Repository_3880 = Math.floor(Math.random() * 1000);
  let repo_Repository_3880 = "repo_Repository_3880_" + Math.floor(Math.random()*1000);
  let sha_Repository_3880 = "sha_Repository_3880_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_3880, id_Repository_3880, limit_Repository_3880, owner_Repository_3880, page_Repository_3880, repo_Repository_3880, sha_Repository_3880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_3880 = {};
  let id_Issues_3880 = id_Repository_3880;
  let index_Issues_3880 = Math.floor(Math.random() * 1000);
  let limit_Issues_3880 = Math.floor(Math.random() * 1000);
  let owner_Issues_3880 = "owner_Issues_3880_" + Math.floor(Math.random()*1000);
  let page_Issues_3880 = Math.floor(Math.random() * 1000);
  let position_Issues_3880 = Math.floor(Math.random() * 1000);
  let repo_Issues_3880 = "repo_Issues_3880_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_3880, id_Issues_3880, index_Issues_3880, limit_Issues_3880, owner_Issues_3880, page_Issues_3880, position_Issues_3880, repo_Issues_3880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_3880 = id_Issues_3880;
  let index_IssueSubscriptions_3880 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_3880 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_3880 = "owner_IssueSubscriptions_3880_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_3880 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_3880 = "repo_IssueSubscriptions_3880_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_3880 = "user_IssueSubscriptions_3880_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_3880, index_IssueSubscriptions_3880, limit_IssueSubscriptions_3880, owner_IssueSubscriptions_3880, page_IssueSubscriptions_3880, repo_IssueSubscriptions_3880, user_IssueSubscriptions_3880, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_3880, repo_IssueSubscriptions_3880, index_IssueSubscriptions_3880, user_IssueSubscriptions_3880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_3880, repo_Issues_3880, index_Issues_3880, id_Issues_3880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueTimes", function () {
  // -> Creating Repositories
  let body_Repositories_3980 = {};
  let filepath_Repositories_3980 = "filepath_Repositories_3980_" + Math.floor(Math.random()*1000);
  let id_Repositories_3980 = Math.floor(Math.random() * 1000);
  let limit_Repositories_3980 = Math.floor(Math.random() * 1000);
  let owner_Repositories_3980 = "owner_Repositories_3980_" + Math.floor(Math.random()*1000);
  let page_Repositories_3980 = Math.floor(Math.random() * 1000);
  let repo_Repositories_3980 = "repo_Repositories_3980_" + Math.floor(Math.random()*1000);
  let username_Repositories_3980 = "username_Repositories_3980_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_3980, filepath_Repositories_3980, id_Repositories_3980, limit_Repositories_3980, owner_Repositories_3980, page_Repositories_3980, repo_Repositories_3980, username_Repositories_3980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_3980 = {};
  let id_Repository_3980 = id_Repositories_3980;
  let limit_Repository_3980 = Math.floor(Math.random() * 1000);
  let owner_Repository_3980 = "owner_Repository_3980_" + Math.floor(Math.random()*1000);
  let page_Repository_3980 = Math.floor(Math.random() * 1000);
  let repo_Repository_3980 = "repo_Repository_3980_" + Math.floor(Math.random()*1000);
  let sha_Repository_3980 = "sha_Repository_3980_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_3980, id_Repository_3980, limit_Repository_3980, owner_Repository_3980, page_Repository_3980, repo_Repository_3980, sha_Repository_3980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_3980 = {};
  let id_Issues_3980 = id_Repository_3980;
  let index_Issues_3980 = Math.floor(Math.random() * 1000);
  let limit_Issues_3980 = Math.floor(Math.random() * 1000);
  let owner_Issues_3980 = "owner_Issues_3980_" + Math.floor(Math.random()*1000);
  let page_Issues_3980 = Math.floor(Math.random() * 1000);
  let position_Issues_3980 = Math.floor(Math.random() * 1000);
  let repo_Issues_3980 = "repo_Issues_3980_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_3980, id_Issues_3980, index_Issues_3980, limit_Issues_3980, owner_Issues_3980, page_Issues_3980, position_Issues_3980, repo_Issues_3980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueTimes
  let before_IssueTimes_3980 = "before_IssueTimes_3980_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_3980 = {};
  let index_IssueTimes_3980 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_3980 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_3980 = "owner_IssueTimes_3980_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_3980 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_3980 = "repo_IssueTimes_3980_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_3980 = "since_IssueTimes_3980_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_3980 = "user_IssueTimes_3980_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_3980, body_IssueTimes_3980, index_IssueTimes_3980, limit_IssueTimes_3980, owner_IssueTimes_3980, page_IssueTimes_3980, repo_IssueTimes_3980, since_IssueTimes_3980, user_IssueTimes_3980, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_3980, repo_IssueTimes_3980, index_IssueTimes_3980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_3980, repo_Issues_3980, index_Issues_3980, id_Issues_3980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Labels", function () {
  // -> Creating Repositories
  let body_Repositories_4080 = {};
  let filepath_Repositories_4080 = "filepath_Repositories_4080_" + Math.floor(Math.random()*1000);
  let id_Repositories_4080 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4080 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4080 = "owner_Repositories_4080_" + Math.floor(Math.random()*1000);
  let page_Repositories_4080 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4080 = "repo_Repositories_4080_" + Math.floor(Math.random()*1000);
  let username_Repositories_4080 = "username_Repositories_4080_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4080, filepath_Repositories_4080, id_Repositories_4080, limit_Repositories_4080, owner_Repositories_4080, page_Repositories_4080, repo_Repositories_4080, username_Repositories_4080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4080 = {};
  let id_Repository_4080 = id_Repositories_4080;
  let limit_Repository_4080 = Math.floor(Math.random() * 1000);
  let owner_Repository_4080 = "owner_Repository_4080_" + Math.floor(Math.random()*1000);
  let page_Repository_4080 = Math.floor(Math.random() * 1000);
  let repo_Repository_4080 = "repo_Repository_4080_" + Math.floor(Math.random()*1000);
  let sha_Repository_4080 = "sha_Repository_4080_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4080, id_Repository_4080, limit_Repository_4080, owner_Repository_4080, page_Repository_4080, repo_Repository_4080, sha_Repository_4080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Labels
  let body_Labels_4080 = {};
  let color_Labels_4080 = "color_Labels_4080_" + Math.floor(Math.random()*1000);
  let description_Labels_4080 = "description_Labels_4080_" + Math.floor(Math.random()*1000);
  let id_Labels_4080 = id_Repository_4080;
  let limit_Labels_4080 = Math.floor(Math.random() * 1000);
  let name_Labels_4080 = "name_Labels_4080_" + Math.floor(Math.random()*1000);
  let owner_Labels_4080 = "owner_Labels_4080_" + Math.floor(Math.random()*1000);
  let page_Labels_4080 = Math.floor(Math.random() * 1000);
  let repo_Labels_4080 = "repo_Labels_4080_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_4080, color_Labels_4080, description_Labels_4080, id_Labels_4080, limit_Labels_4080, name_Labels_4080, owner_Labels_4080, page_Labels_4080, repo_Labels_4080, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Labels
  issueDeleteLabel(owner_Labels_4080, repo_Labels_4080, id_Labels_4080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4080, repo_Repository_4080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueCommentAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_4180 = {};
  let filepath_Repositories_4180 = "filepath_Repositories_4180_" + Math.floor(Math.random()*1000);
  let id_Repositories_4180 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4180 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4180 = "owner_Repositories_4180_" + Math.floor(Math.random()*1000);
  let page_Repositories_4180 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4180 = "repo_Repositories_4180_" + Math.floor(Math.random()*1000);
  let username_Repositories_4180 = "username_Repositories_4180_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4180, filepath_Repositories_4180, id_Repositories_4180, limit_Repositories_4180, owner_Repositories_4180, page_Repositories_4180, repo_Repositories_4180, username_Repositories_4180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4180 = {};
  let id_Repository_4180 = id_Repositories_4180;
  let limit_Repository_4180 = Math.floor(Math.random() * 1000);
  let owner_Repository_4180 = "owner_Repository_4180_" + Math.floor(Math.random()*1000);
  let page_Repository_4180 = Math.floor(Math.random() * 1000);
  let repo_Repository_4180 = "repo_Repository_4180_" + Math.floor(Math.random()*1000);
  let sha_Repository_4180 = "sha_Repository_4180_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4180, id_Repository_4180, limit_Repository_4180, owner_Repository_4180, page_Repository_4180, repo_Repository_4180, sha_Repository_4180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4180 = {};
  let id_Issues_4180 = id_Repository_4180;
  let index_Issues_4180 = Math.floor(Math.random() * 1000);
  let limit_Issues_4180 = Math.floor(Math.random() * 1000);
  let owner_Issues_4180 = "owner_Issues_4180_" + Math.floor(Math.random()*1000);
  let page_Issues_4180 = Math.floor(Math.random() * 1000);
  let position_Issues_4180 = Math.floor(Math.random() * 1000);
  let repo_Issues_4180 = "repo_Issues_4180_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4180, id_Issues_4180, index_Issues_4180, limit_Issues_4180, owner_Issues_4180, page_Issues_4180, position_Issues_4180, repo_Issues_4180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_4180 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_4180 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_4180 = {};
  let id_IssueCommentAttachments_4180 = id_Issues_4180;
  let name_IssueCommentAttachments_4180 = "name_IssueCommentAttachments_4180_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_4180 = "owner_IssueCommentAttachments_4180_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_4180 = "repo_IssueCommentAttachments_4180_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_4180, attachment_id_IssueCommentAttachments_4180, body_IssueCommentAttachments_4180, id_IssueCommentAttachments_4180, name_IssueCommentAttachments_4180, owner_IssueCommentAttachments_4180, repo_IssueCommentAttachments_4180, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_4180, repo_IssueCommentAttachments_4180, id_IssueCommentAttachments_4180, attachment_id_IssueCommentAttachments_4180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4180, repo_Issues_4180, index_Issues_4180, id_Issues_4180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4180, repo_Repository_4180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueCommentReactions", function () {
  // -> Creating Repositories
  let body_Repositories_4280 = {};
  let filepath_Repositories_4280 = "filepath_Repositories_4280_" + Math.floor(Math.random()*1000);
  let id_Repositories_4280 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4280 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4280 = "owner_Repositories_4280_" + Math.floor(Math.random()*1000);
  let page_Repositories_4280 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4280 = "repo_Repositories_4280_" + Math.floor(Math.random()*1000);
  let username_Repositories_4280 = "username_Repositories_4280_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4280, filepath_Repositories_4280, id_Repositories_4280, limit_Repositories_4280, owner_Repositories_4280, page_Repositories_4280, repo_Repositories_4280, username_Repositories_4280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4280 = {};
  let id_Repository_4280 = id_Repositories_4280;
  let limit_Repository_4280 = Math.floor(Math.random() * 1000);
  let owner_Repository_4280 = "owner_Repository_4280_" + Math.floor(Math.random()*1000);
  let page_Repository_4280 = Math.floor(Math.random() * 1000);
  let repo_Repository_4280 = "repo_Repository_4280_" + Math.floor(Math.random()*1000);
  let sha_Repository_4280 = "sha_Repository_4280_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4280, id_Repository_4280, limit_Repository_4280, owner_Repository_4280, page_Repository_4280, repo_Repository_4280, sha_Repository_4280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4280 = {};
  let id_Issues_4280 = id_Repository_4280;
  let index_Issues_4280 = Math.floor(Math.random() * 1000);
  let limit_Issues_4280 = Math.floor(Math.random() * 1000);
  let owner_Issues_4280 = "owner_Issues_4280_" + Math.floor(Math.random()*1000);
  let page_Issues_4280 = Math.floor(Math.random() * 1000);
  let position_Issues_4280 = Math.floor(Math.random() * 1000);
  let repo_Issues_4280 = "repo_Issues_4280_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4280, id_Issues_4280, index_Issues_4280, limit_Issues_4280, owner_Issues_4280, page_Issues_4280, position_Issues_4280, repo_Issues_4280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_4280 = {};
  let id_IssueCommentReactions_4280 = id_Issues_4280;
  let owner_IssueCommentReactions_4280 = "owner_IssueCommentReactions_4280_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_4280 = "repo_IssueCommentReactions_4280_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_4280, id_IssueCommentReactions_4280, owner_IssueCommentReactions_4280, repo_IssueCommentReactions_4280, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_4280, repo_IssueCommentReactions_4280, id_IssueCommentReactions_4280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4280, repo_Issues_4280, index_Issues_4280, id_Issues_4280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4280, repo_Repository_4280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_4380 = {};
  let filepath_Repositories_4380 = "filepath_Repositories_4380_" + Math.floor(Math.random()*1000);
  let id_Repositories_4380 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4380 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4380 = "owner_Repositories_4380_" + Math.floor(Math.random()*1000);
  let page_Repositories_4380 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4380 = "repo_Repositories_4380_" + Math.floor(Math.random()*1000);
  let username_Repositories_4380 = "username_Repositories_4380_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4380, filepath_Repositories_4380, id_Repositories_4380, limit_Repositories_4380, owner_Repositories_4380, page_Repositories_4380, repo_Repositories_4380, username_Repositories_4380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4380 = {};
  let id_Repository_4380 = id_Repositories_4380;
  let limit_Repository_4380 = Math.floor(Math.random() * 1000);
  let owner_Repository_4380 = "owner_Repository_4380_" + Math.floor(Math.random()*1000);
  let page_Repository_4380 = Math.floor(Math.random() * 1000);
  let repo_Repository_4380 = "repo_Repository_4380_" + Math.floor(Math.random()*1000);
  let sha_Repository_4380 = "sha_Repository_4380_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4380, id_Repository_4380, limit_Repository_4380, owner_Repository_4380, page_Repository_4380, repo_Repository_4380, sha_Repository_4380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4380 = {};
  let id_Issues_4380 = id_Repository_4380;
  let index_Issues_4380 = Math.floor(Math.random() * 1000);
  let limit_Issues_4380 = Math.floor(Math.random() * 1000);
  let owner_Issues_4380 = "owner_Issues_4380_" + Math.floor(Math.random()*1000);
  let page_Issues_4380 = Math.floor(Math.random() * 1000);
  let position_Issues_4380 = Math.floor(Math.random() * 1000);
  let repo_Issues_4380 = "repo_Issues_4380_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4380, id_Issues_4380, index_Issues_4380, limit_Issues_4380, owner_Issues_4380, page_Issues_4380, position_Issues_4380, repo_Issues_4380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueAttachments
  let attachment_IssueAttachments_4380 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_4380 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_4380 = {};
  let id_IssueAttachments_4380 = id_Issues_4380;
  let index_IssueAttachments_4380 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_4380 = "name_IssueAttachments_4380_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_4380 = "owner_IssueAttachments_4380_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_4380 = "repo_IssueAttachments_4380_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_4380, attachment_id_IssueAttachments_4380, body_IssueAttachments_4380, id_IssueAttachments_4380, index_IssueAttachments_4380, name_IssueAttachments_4380, owner_IssueAttachments_4380, repo_IssueAttachments_4380, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_4380, repo_IssueAttachments_4380, index_IssueAttachments_4380, attachment_id_IssueAttachments_4380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4380, repo_Issues_4380, index_Issues_4380, id_Issues_4380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4380, repo_Repository_4380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueBlocks", function () {
  // -> Creating Repositories
  let body_Repositories_4480 = {};
  let filepath_Repositories_4480 = "filepath_Repositories_4480_" + Math.floor(Math.random()*1000);
  let id_Repositories_4480 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4480 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4480 = "owner_Repositories_4480_" + Math.floor(Math.random()*1000);
  let page_Repositories_4480 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4480 = "repo_Repositories_4480_" + Math.floor(Math.random()*1000);
  let username_Repositories_4480 = "username_Repositories_4480_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4480, filepath_Repositories_4480, id_Repositories_4480, limit_Repositories_4480, owner_Repositories_4480, page_Repositories_4480, repo_Repositories_4480, username_Repositories_4480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4480 = {};
  let id_Repository_4480 = id_Repositories_4480;
  let limit_Repository_4480 = Math.floor(Math.random() * 1000);
  let owner_Repository_4480 = "owner_Repository_4480_" + Math.floor(Math.random()*1000);
  let page_Repository_4480 = Math.floor(Math.random() * 1000);
  let repo_Repository_4480 = "repo_Repository_4480_" + Math.floor(Math.random()*1000);
  let sha_Repository_4480 = "sha_Repository_4480_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4480, id_Repository_4480, limit_Repository_4480, owner_Repository_4480, page_Repository_4480, repo_Repository_4480, sha_Repository_4480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4480 = {};
  let id_Issues_4480 = id_Repository_4480;
  let index_Issues_4480 = Math.floor(Math.random() * 1000);
  let limit_Issues_4480 = Math.floor(Math.random() * 1000);
  let owner_Issues_4480 = "owner_Issues_4480_" + Math.floor(Math.random()*1000);
  let page_Issues_4480 = Math.floor(Math.random() * 1000);
  let position_Issues_4480 = Math.floor(Math.random() * 1000);
  let repo_Issues_4480 = "repo_Issues_4480_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4480, id_Issues_4480, index_Issues_4480, limit_Issues_4480, owner_Issues_4480, page_Issues_4480, position_Issues_4480, repo_Issues_4480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueBlocks
  let body_IssueBlocks_4480 = {};
  let index_IssueBlocks_4480 = "index_IssueBlocks_4480_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_4480 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_4480 = "owner_IssueBlocks_4480_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_4480 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_4480 = "repo_IssueBlocks_4480_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_4480, index_IssueBlocks_4480, limit_IssueBlocks_4480, owner_IssueBlocks_4480, page_IssueBlocks_4480, repo_IssueBlocks_4480, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_4480, repo_IssueBlocks_4480, index_IssueBlocks_4480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4480, repo_Issues_4480, index_Issues_4480, id_Issues_4480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4480, repo_Repository_4480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueComments", function () {
  // -> Creating Repositories
  let body_Repositories_4580 = {};
  let filepath_Repositories_4580 = "filepath_Repositories_4580_" + Math.floor(Math.random()*1000);
  let id_Repositories_4580 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4580 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4580 = "owner_Repositories_4580_" + Math.floor(Math.random()*1000);
  let page_Repositories_4580 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4580 = "repo_Repositories_4580_" + Math.floor(Math.random()*1000);
  let username_Repositories_4580 = "username_Repositories_4580_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4580, filepath_Repositories_4580, id_Repositories_4580, limit_Repositories_4580, owner_Repositories_4580, page_Repositories_4580, repo_Repositories_4580, username_Repositories_4580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4580 = {};
  let id_Repository_4580 = id_Repositories_4580;
  let limit_Repository_4580 = Math.floor(Math.random() * 1000);
  let owner_Repository_4580 = "owner_Repository_4580_" + Math.floor(Math.random()*1000);
  let page_Repository_4580 = Math.floor(Math.random() * 1000);
  let repo_Repository_4580 = "repo_Repository_4580_" + Math.floor(Math.random()*1000);
  let sha_Repository_4580 = "sha_Repository_4580_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4580, id_Repository_4580, limit_Repository_4580, owner_Repository_4580, page_Repository_4580, repo_Repository_4580, sha_Repository_4580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4580 = {};
  let id_Issues_4580 = id_Repository_4580;
  let index_Issues_4580 = Math.floor(Math.random() * 1000);
  let limit_Issues_4580 = Math.floor(Math.random() * 1000);
  let owner_Issues_4580 = "owner_Issues_4580_" + Math.floor(Math.random()*1000);
  let page_Issues_4580 = Math.floor(Math.random() * 1000);
  let position_Issues_4580 = Math.floor(Math.random() * 1000);
  let repo_Issues_4580 = "repo_Issues_4580_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4580, id_Issues_4580, index_Issues_4580, limit_Issues_4580, owner_Issues_4580, page_Issues_4580, position_Issues_4580, repo_Issues_4580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueComments
  let before_IssueComments_4580 = "before_IssueComments_4580_" + Math.floor(Math.random()*1000);
  let body_IssueComments_4580 = {};
  let id_IssueComments_4580 = id_Issues_4580;
  let index_IssueComments_4580 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_4580 = "owner_IssueComments_4580_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_4580 = "repo_IssueComments_4580_" + Math.floor(Math.random()*1000);
  let since_IssueComments_4580 = "since_IssueComments_4580_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_4580, body_IssueComments_4580, id_IssueComments_4580, index_IssueComments_4580, owner_IssueComments_4580, repo_IssueComments_4580, since_IssueComments_4580, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_4580, repo_IssueComments_4580, index_IssueComments_4580, id_IssueComments_4580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4580, repo_Issues_4580, index_Issues_4580, id_Issues_4580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4580, repo_Repository_4580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueSubscriptions", function () {
  // -> Creating Repositories
  let body_Repositories_4680 = {};
  let filepath_Repositories_4680 = "filepath_Repositories_4680_" + Math.floor(Math.random()*1000);
  let id_Repositories_4680 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4680 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4680 = "owner_Repositories_4680_" + Math.floor(Math.random()*1000);
  let page_Repositories_4680 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4680 = "repo_Repositories_4680_" + Math.floor(Math.random()*1000);
  let username_Repositories_4680 = "username_Repositories_4680_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4680, filepath_Repositories_4680, id_Repositories_4680, limit_Repositories_4680, owner_Repositories_4680, page_Repositories_4680, repo_Repositories_4680, username_Repositories_4680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4680 = {};
  let id_Repository_4680 = id_Repositories_4680;
  let limit_Repository_4680 = Math.floor(Math.random() * 1000);
  let owner_Repository_4680 = "owner_Repository_4680_" + Math.floor(Math.random()*1000);
  let page_Repository_4680 = Math.floor(Math.random() * 1000);
  let repo_Repository_4680 = "repo_Repository_4680_" + Math.floor(Math.random()*1000);
  let sha_Repository_4680 = "sha_Repository_4680_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4680, id_Repository_4680, limit_Repository_4680, owner_Repository_4680, page_Repository_4680, repo_Repository_4680, sha_Repository_4680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4680 = {};
  let id_Issues_4680 = id_Repository_4680;
  let index_Issues_4680 = Math.floor(Math.random() * 1000);
  let limit_Issues_4680 = Math.floor(Math.random() * 1000);
  let owner_Issues_4680 = "owner_Issues_4680_" + Math.floor(Math.random()*1000);
  let page_Issues_4680 = Math.floor(Math.random() * 1000);
  let position_Issues_4680 = Math.floor(Math.random() * 1000);
  let repo_Issues_4680 = "repo_Issues_4680_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4680, id_Issues_4680, index_Issues_4680, limit_Issues_4680, owner_Issues_4680, page_Issues_4680, position_Issues_4680, repo_Issues_4680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_4680 = id_Issues_4680;
  let index_IssueSubscriptions_4680 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_4680 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_4680 = "owner_IssueSubscriptions_4680_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_4680 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_4680 = "repo_IssueSubscriptions_4680_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_4680 = "user_IssueSubscriptions_4680_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_4680, index_IssueSubscriptions_4680, limit_IssueSubscriptions_4680, owner_IssueSubscriptions_4680, page_IssueSubscriptions_4680, repo_IssueSubscriptions_4680, user_IssueSubscriptions_4680, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_4680, repo_IssueSubscriptions_4680, index_IssueSubscriptions_4680, user_IssueSubscriptions_4680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4680, repo_Issues_4680, index_Issues_4680, id_Issues_4680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4680, repo_Repository_4680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueTimes", function () {
  // -> Creating Repositories
  let body_Repositories_4780 = {};
  let filepath_Repositories_4780 = "filepath_Repositories_4780_" + Math.floor(Math.random()*1000);
  let id_Repositories_4780 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4780 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4780 = "owner_Repositories_4780_" + Math.floor(Math.random()*1000);
  let page_Repositories_4780 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4780 = "repo_Repositories_4780_" + Math.floor(Math.random()*1000);
  let username_Repositories_4780 = "username_Repositories_4780_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4780, filepath_Repositories_4780, id_Repositories_4780, limit_Repositories_4780, owner_Repositories_4780, page_Repositories_4780, repo_Repositories_4780, username_Repositories_4780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4780 = {};
  let id_Repository_4780 = id_Repositories_4780;
  let limit_Repository_4780 = Math.floor(Math.random() * 1000);
  let owner_Repository_4780 = "owner_Repository_4780_" + Math.floor(Math.random()*1000);
  let page_Repository_4780 = Math.floor(Math.random() * 1000);
  let repo_Repository_4780 = "repo_Repository_4780_" + Math.floor(Math.random()*1000);
  let sha_Repository_4780 = "sha_Repository_4780_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4780, id_Repository_4780, limit_Repository_4780, owner_Repository_4780, page_Repository_4780, repo_Repository_4780, sha_Repository_4780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4780 = {};
  let id_Issues_4780 = id_Repository_4780;
  let index_Issues_4780 = Math.floor(Math.random() * 1000);
  let limit_Issues_4780 = Math.floor(Math.random() * 1000);
  let owner_Issues_4780 = "owner_Issues_4780_" + Math.floor(Math.random()*1000);
  let page_Issues_4780 = Math.floor(Math.random() * 1000);
  let position_Issues_4780 = Math.floor(Math.random() * 1000);
  let repo_Issues_4780 = "repo_Issues_4780_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4780, id_Issues_4780, index_Issues_4780, limit_Issues_4780, owner_Issues_4780, page_Issues_4780, position_Issues_4780, repo_Issues_4780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueTimes
  let before_IssueTimes_4780 = "before_IssueTimes_4780_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_4780 = {};
  let index_IssueTimes_4780 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_4780 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_4780 = "owner_IssueTimes_4780_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_4780 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_4780 = "repo_IssueTimes_4780_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_4780 = "since_IssueTimes_4780_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_4780 = "user_IssueTimes_4780_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_4780, body_IssueTimes_4780, index_IssueTimes_4780, limit_IssueTimes_4780, owner_IssueTimes_4780, page_IssueTimes_4780, repo_IssueTimes_4780, since_IssueTimes_4780, user_IssueTimes_4780, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_4780, repo_IssueTimes_4780, index_IssueTimes_4780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4780, repo_Issues_4780, index_Issues_4780, id_Issues_4780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4780, repo_Repository_4780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Branches", function () {
  // -> Creating Repositories
  let body_Repositories_4880 = {};
  let filepath_Repositories_4880 = "filepath_Repositories_4880_" + Math.floor(Math.random()*1000);
  let id_Repositories_4880 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4880 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4880 = "owner_Repositories_4880_" + Math.floor(Math.random()*1000);
  let page_Repositories_4880 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4880 = "repo_Repositories_4880_" + Math.floor(Math.random()*1000);
  let username_Repositories_4880 = "username_Repositories_4880_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4880, filepath_Repositories_4880, id_Repositories_4880, limit_Repositories_4880, owner_Repositories_4880, page_Repositories_4880, repo_Repositories_4880, username_Repositories_4880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4880 = {};
  let id_Repository_4880 = id_Repositories_4880;
  let limit_Repository_4880 = Math.floor(Math.random() * 1000);
  let owner_Repository_4880 = "owner_Repository_4880_" + Math.floor(Math.random()*1000);
  let page_Repository_4880 = Math.floor(Math.random() * 1000);
  let repo_Repository_4880 = "repo_Repository_4880_" + Math.floor(Math.random()*1000);
  let sha_Repository_4880 = "sha_Repository_4880_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4880, id_Repository_4880, limit_Repository_4880, owner_Repository_4880, page_Repository_4880, repo_Repository_4880, sha_Repository_4880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Branches
  let CreateBranchRepoOption_Branches_4880 = "CreateBranchRepoOption_Branches_4880_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_4880 = "UpdateBranchRepoOption_Branches_4880_" + Math.floor(Math.random()*1000);
  let body_Branches_4880 = {};
  let branch_Branches_4880 = "branch_Branches_4880_" + Math.floor(Math.random()*1000);
  let id_Branches_4880 = id_Repository_4880;
  let limit_Branches_4880 = Math.floor(Math.random() * 1000);
  let owner_Branches_4880 = "owner_Branches_4880_" + Math.floor(Math.random()*1000);
  let page_Branches_4880 = Math.floor(Math.random() * 1000);
  let repo_Branches_4880 = "repo_Branches_4880_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_4880, UpdateBranchRepoOption_Branches_4880, body_Branches_4880, branch_Branches_4880, id_Branches_4880, limit_Branches_4880, owner_Branches_4880, page_Branches_4880, repo_Branches_4880, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_4880, repo_Branches_4880, branch_Branches_4880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4880, repo_Repository_4880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Collaborators", function () {
  // -> Creating Repositories
  let body_Repositories_4980 = {};
  let filepath_Repositories_4980 = "filepath_Repositories_4980_" + Math.floor(Math.random()*1000);
  let id_Repositories_4980 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4980 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4980 = "owner_Repositories_4980_" + Math.floor(Math.random()*1000);
  let page_Repositories_4980 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4980 = "repo_Repositories_4980_" + Math.floor(Math.random()*1000);
  let username_Repositories_4980 = "username_Repositories_4980_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_4980, filepath_Repositories_4980, id_Repositories_4980, limit_Repositories_4980, owner_Repositories_4980, page_Repositories_4980, repo_Repositories_4980, username_Repositories_4980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_4980 = {};
  let id_Repository_4980 = id_Repositories_4980;
  let limit_Repository_4980 = Math.floor(Math.random() * 1000);
  let owner_Repository_4980 = "owner_Repository_4980_" + Math.floor(Math.random()*1000);
  let page_Repository_4980 = Math.floor(Math.random() * 1000);
  let repo_Repository_4980 = "repo_Repository_4980_" + Math.floor(Math.random()*1000);
  let sha_Repository_4980 = "sha_Repository_4980_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4980, id_Repository_4980, limit_Repository_4980, owner_Repository_4980, page_Repository_4980, repo_Repository_4980, sha_Repository_4980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_4980 = "AddCollaboratorOption_Collaborators_4980_" + Math.floor(Math.random()*1000);
  let body_Collaborators_4980 = {};
  let collaborator_Collaborators_4980 = "collaborator_Collaborators_4980_" + Math.floor(Math.random()*1000);
  let id_Collaborators_4980 = id_Repository_4980;
  let limit_Collaborators_4980 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_4980 = "owner_Collaborators_4980_" + Math.floor(Math.random()*1000);
  let page_Collaborators_4980 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_4980 = "repo_Collaborators_4980_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_4980, body_Collaborators_4980, collaborator_Collaborators_4980, id_Collaborators_4980, limit_Collaborators_4980, owner_Collaborators_4980, page_Collaborators_4980, repo_Collaborators_4980, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_4980, repo_Collaborators_4980, collaborator_Collaborators_4980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_4980, repo_Repository_4980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Forks", function () {
  // -> Creating Repositories
  let body_Repositories_5080 = {};
  let filepath_Repositories_5080 = "filepath_Repositories_5080_" + Math.floor(Math.random()*1000);
  let id_Repositories_5080 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5080 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5080 = "owner_Repositories_5080_" + Math.floor(Math.random()*1000);
  let page_Repositories_5080 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5080 = "repo_Repositories_5080_" + Math.floor(Math.random()*1000);
  let username_Repositories_5080 = "username_Repositories_5080_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5080, filepath_Repositories_5080, id_Repositories_5080, limit_Repositories_5080, owner_Repositories_5080, page_Repositories_5080, repo_Repositories_5080, username_Repositories_5080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5080 = {};
  let id_Repository_5080 = id_Repositories_5080;
  let limit_Repository_5080 = Math.floor(Math.random() * 1000);
  let owner_Repository_5080 = "owner_Repository_5080_" + Math.floor(Math.random()*1000);
  let page_Repository_5080 = Math.floor(Math.random() * 1000);
  let repo_Repository_5080 = "repo_Repository_5080_" + Math.floor(Math.random()*1000);
  let sha_Repository_5080 = "sha_Repository_5080_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5080, id_Repository_5080, limit_Repository_5080, owner_Repository_5080, page_Repository_5080, repo_Repository_5080, sha_Repository_5080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Forks
  let body_Forks_5080 = {};
  let id_Forks_5080 = id_Repository_5080;
  let limit_Forks_5080 = Math.floor(Math.random() * 1000);
  let owner_Forks_5080 = "owner_Forks_5080_" + Math.floor(Math.random()*1000);
  let page_Forks_5080 = Math.floor(Math.random() * 1000);
  let repo_Forks_5080 = "repo_Forks_5080_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_5080, id_Forks_5080, limit_Forks_5080, owner_Forks_5080, page_Forks_5080, repo_Forks_5080, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5080, repo_Repository_5080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issue", function () {
  // -> Creating Repositories
  let body_Repositories_5180 = {};
  let filepath_Repositories_5180 = "filepath_Repositories_5180_" + Math.floor(Math.random()*1000);
  let id_Repositories_5180 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5180 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5180 = "owner_Repositories_5180_" + Math.floor(Math.random()*1000);
  let page_Repositories_5180 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5180 = "repo_Repositories_5180_" + Math.floor(Math.random()*1000);
  let username_Repositories_5180 = "username_Repositories_5180_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5180, filepath_Repositories_5180, id_Repositories_5180, limit_Repositories_5180, owner_Repositories_5180, page_Repositories_5180, repo_Repositories_5180, username_Repositories_5180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5180 = {};
  let id_Repository_5180 = id_Repositories_5180;
  let limit_Repository_5180 = Math.floor(Math.random() * 1000);
  let owner_Repository_5180 = "owner_Repository_5180_" + Math.floor(Math.random()*1000);
  let page_Repository_5180 = Math.floor(Math.random() * 1000);
  let repo_Repository_5180 = "repo_Repository_5180_" + Math.floor(Math.random()*1000);
  let sha_Repository_5180 = "sha_Repository_5180_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5180, id_Repository_5180, limit_Repository_5180, owner_Repository_5180, page_Repository_5180, repo_Repository_5180, sha_Repository_5180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issue
  let body_Issue_5180 = {};
  let id_Issue_5180 = id_Repository_5180;
  let limit_Issue_5180 = Math.floor(Math.random() * 1000);
  let name_Issue_5180 = "name_Issue_5180_" + Math.floor(Math.random()*1000);
  let owner_Issue_5180 = "owner_Issue_5180_" + Math.floor(Math.random()*1000);
  let page_Issue_5180 = Math.floor(Math.random() * 1000);
  let repo_Issue_5180 = "repo_Issue_5180_" + Math.floor(Math.random()*1000);
  let state_Issue_5180 = "state_Issue_5180_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_5180, id_Issue_5180, limit_Issue_5180, name_Issue_5180, owner_Issue_5180, page_Issue_5180, repo_Issue_5180, state_Issue_5180, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5180, repo_Repository_5180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PullRequests_PullReviewRequests", function () {
  // -> Creating Repositories
  let body_Repositories_5280 = {};
  let filepath_Repositories_5280 = "filepath_Repositories_5280_" + Math.floor(Math.random()*1000);
  let id_Repositories_5280 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5280 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5280 = "owner_Repositories_5280_" + Math.floor(Math.random()*1000);
  let page_Repositories_5280 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5280 = "repo_Repositories_5280_" + Math.floor(Math.random()*1000);
  let username_Repositories_5280 = "username_Repositories_5280_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5280, filepath_Repositories_5280, id_Repositories_5280, limit_Repositories_5280, owner_Repositories_5280, page_Repositories_5280, repo_Repositories_5280, username_Repositories_5280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5280 = {};
  let id_Repository_5280 = id_Repositories_5280;
  let limit_Repository_5280 = Math.floor(Math.random() * 1000);
  let owner_Repository_5280 = "owner_Repository_5280_" + Math.floor(Math.random()*1000);
  let page_Repository_5280 = Math.floor(Math.random() * 1000);
  let repo_Repository_5280 = "repo_Repository_5280_" + Math.floor(Math.random()*1000);
  let sha_Repository_5280 = "sha_Repository_5280_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5280, id_Repository_5280, limit_Repository_5280, owner_Repository_5280, page_Repository_5280, repo_Repository_5280, sha_Repository_5280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_5280 = {};
  let id_PullRequests_5280 = id_Repository_5280;
  let index_PullRequests_5280 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_5280 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_5280 = "owner_PullRequests_5280_" + Math.floor(Math.random()*1000);
  let page_PullRequests_5280 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_5280 = "repo_PullRequests_5280_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_5280 = "skip-to_PullRequests_5280_" + Math.floor(Math.random()*1000);
  let style_PullRequests_5280 = "style_PullRequests_5280_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_5280 = "whitespace_PullRequests_5280_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_5280, id_PullRequests_5280, index_PullRequests_5280, limit_PullRequests_5280, owner_PullRequests_5280, page_PullRequests_5280, repo_PullRequests_5280, skip_to_PullRequests_5280, style_PullRequests_5280, whitespace_PullRequests_5280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewRequests
  let body_PullReviewRequests_5280 = {};
  let index_PullReviewRequests_5280 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_5280 = "owner_PullReviewRequests_5280_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_5280 = "repo_PullReviewRequests_5280_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_5280, index_PullReviewRequests_5280, owner_PullReviewRequests_5280, repo_PullReviewRequests_5280, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_5280, repo_PullReviewRequests_5280, index_PullReviewRequests_5280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_5280, repo_PullRequests_5280, index_PullRequests_5280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5280, repo_Repository_5280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PullRequests_PullReviews_PullReviewDismissals", function () {
  // -> Creating Repositories
  let body_Repositories_5380 = {};
  let filepath_Repositories_5380 = "filepath_Repositories_5380_" + Math.floor(Math.random()*1000);
  let id_Repositories_5380 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5380 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5380 = "owner_Repositories_5380_" + Math.floor(Math.random()*1000);
  let page_Repositories_5380 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5380 = "repo_Repositories_5380_" + Math.floor(Math.random()*1000);
  let username_Repositories_5380 = "username_Repositories_5380_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5380, filepath_Repositories_5380, id_Repositories_5380, limit_Repositories_5380, owner_Repositories_5380, page_Repositories_5380, repo_Repositories_5380, username_Repositories_5380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5380 = {};
  let id_Repository_5380 = id_Repositories_5380;
  let limit_Repository_5380 = Math.floor(Math.random() * 1000);
  let owner_Repository_5380 = "owner_Repository_5380_" + Math.floor(Math.random()*1000);
  let page_Repository_5380 = Math.floor(Math.random() * 1000);
  let repo_Repository_5380 = "repo_Repository_5380_" + Math.floor(Math.random()*1000);
  let sha_Repository_5380 = "sha_Repository_5380_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5380, id_Repository_5380, limit_Repository_5380, owner_Repository_5380, page_Repository_5380, repo_Repository_5380, sha_Repository_5380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_5380 = {};
  let id_PullRequests_5380 = id_Repository_5380;
  let index_PullRequests_5380 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_5380 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_5380 = "owner_PullRequests_5380_" + Math.floor(Math.random()*1000);
  let page_PullRequests_5380 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_5380 = "repo_PullRequests_5380_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_5380 = "skip-to_PullRequests_5380_" + Math.floor(Math.random()*1000);
  let style_PullRequests_5380 = "style_PullRequests_5380_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_5380 = "whitespace_PullRequests_5380_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_5380, id_PullRequests_5380, index_PullRequests_5380, limit_PullRequests_5380, owner_PullRequests_5380, page_PullRequests_5380, repo_PullRequests_5380, skip_to_PullRequests_5380, style_PullRequests_5380, whitespace_PullRequests_5380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_5380 = {};
  let id_PullReviews_5380 = id_PullRequests_5380;
  let index_PullReviews_5380 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_5380 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_5380 = "owner_PullReviews_5380_" + Math.floor(Math.random()*1000);
  let page_PullReviews_5380 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_5380 = "repo_PullReviews_5380_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_5380, id_PullReviews_5380, index_PullReviews_5380, limit_PullReviews_5380, owner_PullReviews_5380, page_PullReviews_5380, repo_PullReviews_5380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_5380 = {};
  let id_PullReviewDismissals_5380 = id_PullReviews_5380;
  let index_PullReviewDismissals_5380 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_5380 = "owner_PullReviewDismissals_5380_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_5380 = "repo_PullReviewDismissals_5380_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_5380, id_PullReviewDismissals_5380, index_PullReviewDismissals_5380, owner_PullReviewDismissals_5380, repo_PullReviewDismissals_5380, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_5380, repo_PullReviews_5380, index_PullReviews_5380, id_PullReviews_5380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_5380, repo_PullRequests_5380, index_PullRequests_5380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5380, repo_Repository_5380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PullRequests_PullReviews_PullReviewUndismissals", function () {
  // -> Creating Repositories
  let body_Repositories_5480 = {};
  let filepath_Repositories_5480 = "filepath_Repositories_5480_" + Math.floor(Math.random()*1000);
  let id_Repositories_5480 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5480 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5480 = "owner_Repositories_5480_" + Math.floor(Math.random()*1000);
  let page_Repositories_5480 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5480 = "repo_Repositories_5480_" + Math.floor(Math.random()*1000);
  let username_Repositories_5480 = "username_Repositories_5480_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5480, filepath_Repositories_5480, id_Repositories_5480, limit_Repositories_5480, owner_Repositories_5480, page_Repositories_5480, repo_Repositories_5480, username_Repositories_5480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5480 = {};
  let id_Repository_5480 = id_Repositories_5480;
  let limit_Repository_5480 = Math.floor(Math.random() * 1000);
  let owner_Repository_5480 = "owner_Repository_5480_" + Math.floor(Math.random()*1000);
  let page_Repository_5480 = Math.floor(Math.random() * 1000);
  let repo_Repository_5480 = "repo_Repository_5480_" + Math.floor(Math.random()*1000);
  let sha_Repository_5480 = "sha_Repository_5480_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5480, id_Repository_5480, limit_Repository_5480, owner_Repository_5480, page_Repository_5480, repo_Repository_5480, sha_Repository_5480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_5480 = {};
  let id_PullRequests_5480 = id_Repository_5480;
  let index_PullRequests_5480 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_5480 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_5480 = "owner_PullRequests_5480_" + Math.floor(Math.random()*1000);
  let page_PullRequests_5480 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_5480 = "repo_PullRequests_5480_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_5480 = "skip-to_PullRequests_5480_" + Math.floor(Math.random()*1000);
  let style_PullRequests_5480 = "style_PullRequests_5480_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_5480 = "whitespace_PullRequests_5480_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_5480, id_PullRequests_5480, index_PullRequests_5480, limit_PullRequests_5480, owner_PullRequests_5480, page_PullRequests_5480, repo_PullRequests_5480, skip_to_PullRequests_5480, style_PullRequests_5480, whitespace_PullRequests_5480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_5480 = {};
  let id_PullReviews_5480 = id_PullRequests_5480;
  let index_PullReviews_5480 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_5480 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_5480 = "owner_PullReviews_5480_" + Math.floor(Math.random()*1000);
  let page_PullReviews_5480 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_5480 = "repo_PullReviews_5480_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_5480, id_PullReviews_5480, index_PullReviews_5480, limit_PullReviews_5480, owner_PullReviews_5480, page_PullReviews_5480, repo_PullReviews_5480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_5480 = id_PullReviews_5480;
  let index_PullReviewUndismissals_5480 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_5480 = "owner_PullReviewUndismissals_5480_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_5480 = "repo_PullReviewUndismissals_5480_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_5480, index_PullReviewUndismissals_5480, owner_PullReviewUndismissals_5480, repo_PullReviewUndismissals_5480, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_5480, repo_PullReviews_5480, index_PullReviews_5480, id_PullReviews_5480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_5480, repo_PullRequests_5480, index_PullRequests_5480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5480, repo_Repository_5480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Releases_ReleaseAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_5580 = {};
  let filepath_Repositories_5580 = "filepath_Repositories_5580_" + Math.floor(Math.random()*1000);
  let id_Repositories_5580 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5580 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5580 = "owner_Repositories_5580_" + Math.floor(Math.random()*1000);
  let page_Repositories_5580 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5580 = "repo_Repositories_5580_" + Math.floor(Math.random()*1000);
  let username_Repositories_5580 = "username_Repositories_5580_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5580, filepath_Repositories_5580, id_Repositories_5580, limit_Repositories_5580, owner_Repositories_5580, page_Repositories_5580, repo_Repositories_5580, username_Repositories_5580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5580 = {};
  let id_Repository_5580 = id_Repositories_5580;
  let limit_Repository_5580 = Math.floor(Math.random() * 1000);
  let owner_Repository_5580 = "owner_Repository_5580_" + Math.floor(Math.random()*1000);
  let page_Repository_5580 = Math.floor(Math.random() * 1000);
  let repo_Repository_5580 = "repo_Repository_5580_" + Math.floor(Math.random()*1000);
  let sha_Repository_5580 = "sha_Repository_5580_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5580, id_Repository_5580, limit_Repository_5580, owner_Repository_5580, page_Repository_5580, repo_Repository_5580, sha_Repository_5580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Releases
  let body_Releases_5580 = {};
  let draft_Releases_5580 = true;
  let id_Releases_5580 = id_Repository_5580;
  let limit_Releases_5580 = Math.floor(Math.random() * 1000);
  let owner_Releases_5580 = "owner_Releases_5580_" + Math.floor(Math.random()*1000);
  let page_Releases_5580 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_5580 = true;
  let repo_Releases_5580 = "repo_Releases_5580_" + Math.floor(Math.random()*1000);
  let tag_Releases_5580 = "tag_Releases_5580_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_5580, draft_Releases_5580, id_Releases_5580, limit_Releases_5580, owner_Releases_5580, page_Releases_5580, pre_release_Releases_5580, repo_Releases_5580, tag_Releases_5580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_5580 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_5580 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_5580 = {};
  let id_ReleaseAttachments_5580 = id_Releases_5580;
  let name_ReleaseAttachments_5580 = "name_ReleaseAttachments_5580_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_5580 = "owner_ReleaseAttachments_5580_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_5580 = "repo_ReleaseAttachments_5580_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_5580, attachment_id_ReleaseAttachments_5580, body_ReleaseAttachments_5580, id_ReleaseAttachments_5580, name_ReleaseAttachments_5580, owner_ReleaseAttachments_5580, repo_ReleaseAttachments_5580, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_5580, repo_ReleaseAttachments_5580, id_ReleaseAttachments_5580, attachment_id_ReleaseAttachments_5580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Releases
  repoDeleteReleaseByTag(owner_Releases_5580, repo_Releases_5580, tag_Releases_5580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5580, repo_Repository_5580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_TagProtections", function () {
  // -> Creating Repositories
  let body_Repositories_5680 = {};
  let filepath_Repositories_5680 = "filepath_Repositories_5680_" + Math.floor(Math.random()*1000);
  let id_Repositories_5680 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5680 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5680 = "owner_Repositories_5680_" + Math.floor(Math.random()*1000);
  let page_Repositories_5680 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5680 = "repo_Repositories_5680_" + Math.floor(Math.random()*1000);
  let username_Repositories_5680 = "username_Repositories_5680_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5680, filepath_Repositories_5680, id_Repositories_5680, limit_Repositories_5680, owner_Repositories_5680, page_Repositories_5680, repo_Repositories_5680, username_Repositories_5680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5680 = {};
  let id_Repository_5680 = id_Repositories_5680;
  let limit_Repository_5680 = Math.floor(Math.random() * 1000);
  let owner_Repository_5680 = "owner_Repository_5680_" + Math.floor(Math.random()*1000);
  let page_Repository_5680 = Math.floor(Math.random() * 1000);
  let repo_Repository_5680 = "repo_Repository_5680_" + Math.floor(Math.random()*1000);
  let sha_Repository_5680 = "sha_Repository_5680_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5680, id_Repository_5680, limit_Repository_5680, owner_Repository_5680, page_Repository_5680, repo_Repository_5680, sha_Repository_5680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TagProtections
  let body_TagProtections_5680 = {};
  let id_TagProtections_5680 = id_Repository_5680;
  let owner_TagProtections_5680 = "owner_TagProtections_5680_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_5680 = "repo_TagProtections_5680_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_5680, id_TagProtections_5680, owner_TagProtections_5680, repo_TagProtections_5680, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_5680, repo_TagProtections_5680, id_TagProtections_5680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5680, repo_Repository_5680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Tags", function () {
  // -> Creating Repositories
  let body_Repositories_5780 = {};
  let filepath_Repositories_5780 = "filepath_Repositories_5780_" + Math.floor(Math.random()*1000);
  let id_Repositories_5780 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5780 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5780 = "owner_Repositories_5780_" + Math.floor(Math.random()*1000);
  let page_Repositories_5780 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5780 = "repo_Repositories_5780_" + Math.floor(Math.random()*1000);
  let username_Repositories_5780 = "username_Repositories_5780_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5780, filepath_Repositories_5780, id_Repositories_5780, limit_Repositories_5780, owner_Repositories_5780, page_Repositories_5780, repo_Repositories_5780, username_Repositories_5780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5780 = {};
  let id_Repository_5780 = id_Repositories_5780;
  let limit_Repository_5780 = Math.floor(Math.random() * 1000);
  let owner_Repository_5780 = "owner_Repository_5780_" + Math.floor(Math.random()*1000);
  let page_Repository_5780 = Math.floor(Math.random() * 1000);
  let repo_Repository_5780 = "repo_Repository_5780_" + Math.floor(Math.random()*1000);
  let sha_Repository_5780 = "sha_Repository_5780_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5780, id_Repository_5780, limit_Repository_5780, owner_Repository_5780, page_Repository_5780, repo_Repository_5780, sha_Repository_5780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Tags
  let body_Tags_5780 = {};
  let id_Tags_5780 = id_Repository_5780;
  let limit_Tags_5780 = Math.floor(Math.random() * 1000);
  let owner_Tags_5780 = "owner_Tags_5780_" + Math.floor(Math.random()*1000);
  let page_Tags_5780 = Math.floor(Math.random() * 1000);
  let repo_Tags_5780 = "repo_Tags_5780_" + Math.floor(Math.random()*1000);
  let tag_Tags_5780 = "tag_Tags_5780_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_5780, id_Tags_5780, limit_Tags_5780, owner_Tags_5780, page_Tags_5780, repo_Tags_5780, tag_Tags_5780, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Tags
  repoDeleteTag(owner_Tags_5780, repo_Tags_5780, tag_Tags_5780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5780, repo_Repository_5780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Topics", function () {
  // -> Creating Repositories
  let body_Repositories_5880 = {};
  let filepath_Repositories_5880 = "filepath_Repositories_5880_" + Math.floor(Math.random()*1000);
  let id_Repositories_5880 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5880 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5880 = "owner_Repositories_5880_" + Math.floor(Math.random()*1000);
  let page_Repositories_5880 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5880 = "repo_Repositories_5880_" + Math.floor(Math.random()*1000);
  let username_Repositories_5880 = "username_Repositories_5880_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5880, filepath_Repositories_5880, id_Repositories_5880, limit_Repositories_5880, owner_Repositories_5880, page_Repositories_5880, repo_Repositories_5880, username_Repositories_5880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5880 = {};
  let id_Repository_5880 = id_Repositories_5880;
  let limit_Repository_5880 = Math.floor(Math.random() * 1000);
  let owner_Repository_5880 = "owner_Repository_5880_" + Math.floor(Math.random()*1000);
  let page_Repository_5880 = Math.floor(Math.random() * 1000);
  let repo_Repository_5880 = "repo_Repository_5880_" + Math.floor(Math.random()*1000);
  let sha_Repository_5880 = "sha_Repository_5880_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5880, id_Repository_5880, limit_Repository_5880, owner_Repository_5880, page_Repository_5880, repo_Repository_5880, sha_Repository_5880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Topics
  let body_Topics_5880 = {};
  let limit_Topics_5880 = Math.floor(Math.random() * 1000);
  let owner_Topics_5880 = "owner_Topics_5880_" + Math.floor(Math.random()*1000);
  let page_Topics_5880 = Math.floor(Math.random() * 1000);
  let q_Topics_5880 = "q_Topics_5880_" + Math.floor(Math.random()*1000);
  let repo_Topics_5880 = "repo_Topics_5880_" + Math.floor(Math.random()*1000);
  let topic_Topics_5880 = "topic_Topics_5880_" + Math.floor(Math.random()*1000);
  let topic1_Topics_5880 = "topic1_Topics_5880_" + Math.floor(Math.random()*1000);
  let topic2_Topics_5880 = "topic2_Topics_5880_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_5880, limit_Topics_5880, owner_Topics_5880, page_Topics_5880, q_Topics_5880, repo_Topics_5880, topic_Topics_5880, topic1_Topics_5880, topic2_Topics_5880, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_5880, repo_Topics_5880, topic_Topics_5880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5880, repo_Repository_5880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_WikiPage", function () {
  // -> Creating Repositories
  let body_Repositories_5980 = {};
  let filepath_Repositories_5980 = "filepath_Repositories_5980_" + Math.floor(Math.random()*1000);
  let id_Repositories_5980 = Math.floor(Math.random() * 1000);
  let limit_Repositories_5980 = Math.floor(Math.random() * 1000);
  let owner_Repositories_5980 = "owner_Repositories_5980_" + Math.floor(Math.random()*1000);
  let page_Repositories_5980 = Math.floor(Math.random() * 1000);
  let repo_Repositories_5980 = "repo_Repositories_5980_" + Math.floor(Math.random()*1000);
  let username_Repositories_5980 = "username_Repositories_5980_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_5980, filepath_Repositories_5980, id_Repositories_5980, limit_Repositories_5980, owner_Repositories_5980, page_Repositories_5980, repo_Repositories_5980, username_Repositories_5980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_5980 = {};
  let id_Repository_5980 = id_Repositories_5980;
  let limit_Repository_5980 = Math.floor(Math.random() * 1000);
  let owner_Repository_5980 = "owner_Repository_5980_" + Math.floor(Math.random()*1000);
  let page_Repository_5980 = Math.floor(Math.random() * 1000);
  let repo_Repository_5980 = "repo_Repository_5980_" + Math.floor(Math.random()*1000);
  let sha_Repository_5980 = "sha_Repository_5980_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5980, id_Repository_5980, limit_Repository_5980, owner_Repository_5980, page_Repository_5980, repo_Repository_5980, sha_Repository_5980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating WikiPage
  let body_WikiPage_5980 = {};
  let id_WikiPage_5980 = id_Repository_5980;
  let owner_WikiPage_5980 = "owner_WikiPage_5980_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_5980 = "pageName_WikiPage_5980_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_5980 = "repo_WikiPage_5980_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_5980 = "wikiPageOptions_WikiPage_5980_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_5980, id_WikiPage_5980, owner_WikiPage_5980, pageName_WikiPage_5980, repo_WikiPage_5980, wikiPageOptions_WikiPage_5980, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_5980, repo_WikiPage_5980, pageName_WikiPage_5980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5980, repo_Repository_5980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Variables", function () {
  // -> Creating Repositories
  let body_Repositories_6080 = {};
  let filepath_Repositories_6080 = "filepath_Repositories_6080_" + Math.floor(Math.random()*1000);
  let id_Repositories_6080 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6080 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6080 = "owner_Repositories_6080_" + Math.floor(Math.random()*1000);
  let page_Repositories_6080 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6080 = "repo_Repositories_6080_" + Math.floor(Math.random()*1000);
  let username_Repositories_6080 = "username_Repositories_6080_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6080, filepath_Repositories_6080, id_Repositories_6080, limit_Repositories_6080, owner_Repositories_6080, page_Repositories_6080, repo_Repositories_6080, username_Repositories_6080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Variables
  let CreateVariableOption_Variables_6080 = "CreateVariableOption_Variables_6080_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_6080 = "UpdateVariableOption_Variables_6080_" + Math.floor(Math.random()*1000);
  let body_Variables_6080 = {};
  let id_Variables_6080 = id_Repositories_6080;
  let limit_Variables_6080 = Math.floor(Math.random() * 1000);
  let owner_Variables_6080 = "owner_Variables_6080_" + Math.floor(Math.random()*1000);
  let page_Variables_6080 = Math.floor(Math.random() * 1000);
  let repo_Variables_6080 = "repo_Variables_6080_" + Math.floor(Math.random()*1000);
  let variablename_Variables_6080 = "variablename_Variables_6080_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_6080, UpdateVariableOption_Variables_6080, body_Variables_6080, id_Variables_6080, limit_Variables_6080, owner_Variables_6080, page_Variables_6080, repo_Variables_6080, variablename_Variables_6080, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Variables
  deleteRepoVariable(owner_Variables_6080, repo_Variables_6080, variablename_Variables_6080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6080, repo_Repositories_6080, filepath_Repositories_6080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Labels", function () {
  // -> Creating Repositories
  let body_Repositories_6180 = {};
  let filepath_Repositories_6180 = "filepath_Repositories_6180_" + Math.floor(Math.random()*1000);
  let id_Repositories_6180 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6180 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6180 = "owner_Repositories_6180_" + Math.floor(Math.random()*1000);
  let page_Repositories_6180 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6180 = "repo_Repositories_6180_" + Math.floor(Math.random()*1000);
  let username_Repositories_6180 = "username_Repositories_6180_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6180, filepath_Repositories_6180, id_Repositories_6180, limit_Repositories_6180, owner_Repositories_6180, page_Repositories_6180, repo_Repositories_6180, username_Repositories_6180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6180 = {};
  let id_Repository_6180 = id_Repositories_6180;
  let limit_Repository_6180 = Math.floor(Math.random() * 1000);
  let owner_Repository_6180 = "owner_Repository_6180_" + Math.floor(Math.random()*1000);
  let page_Repository_6180 = Math.floor(Math.random() * 1000);
  let repo_Repository_6180 = "repo_Repository_6180_" + Math.floor(Math.random()*1000);
  let sha_Repository_6180 = "sha_Repository_6180_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6180, id_Repository_6180, limit_Repository_6180, owner_Repository_6180, page_Repository_6180, repo_Repository_6180, sha_Repository_6180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Labels
  let body_Labels_6180 = {};
  let color_Labels_6180 = "color_Labels_6180_" + Math.floor(Math.random()*1000);
  let description_Labels_6180 = "description_Labels_6180_" + Math.floor(Math.random()*1000);
  let id_Labels_6180 = id_Repository_6180;
  let limit_Labels_6180 = Math.floor(Math.random() * 1000);
  let name_Labels_6180 = "name_Labels_6180_" + Math.floor(Math.random()*1000);
  let owner_Labels_6180 = "owner_Labels_6180_" + Math.floor(Math.random()*1000);
  let page_Labels_6180 = Math.floor(Math.random() * 1000);
  let repo_Labels_6180 = "repo_Labels_6180_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_6180, color_Labels_6180, description_Labels_6180, id_Labels_6180, limit_Labels_6180, name_Labels_6180, owner_Labels_6180, page_Labels_6180, repo_Labels_6180, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Labels
  issueDeleteLabel(owner_Labels_6180, repo_Labels_6180, id_Labels_6180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6180, repo_Repository_6180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6180, repo_Repositories_6180, filepath_Repositories_6180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Issues_IssueCommentAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_6280 = {};
  let filepath_Repositories_6280 = "filepath_Repositories_6280_" + Math.floor(Math.random()*1000);
  let id_Repositories_6280 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6280 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6280 = "owner_Repositories_6280_" + Math.floor(Math.random()*1000);
  let page_Repositories_6280 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6280 = "repo_Repositories_6280_" + Math.floor(Math.random()*1000);
  let username_Repositories_6280 = "username_Repositories_6280_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6280, filepath_Repositories_6280, id_Repositories_6280, limit_Repositories_6280, owner_Repositories_6280, page_Repositories_6280, repo_Repositories_6280, username_Repositories_6280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6280 = {};
  let id_Repository_6280 = id_Repositories_6280;
  let limit_Repository_6280 = Math.floor(Math.random() * 1000);
  let owner_Repository_6280 = "owner_Repository_6280_" + Math.floor(Math.random()*1000);
  let page_Repository_6280 = Math.floor(Math.random() * 1000);
  let repo_Repository_6280 = "repo_Repository_6280_" + Math.floor(Math.random()*1000);
  let sha_Repository_6280 = "sha_Repository_6280_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6280, id_Repository_6280, limit_Repository_6280, owner_Repository_6280, page_Repository_6280, repo_Repository_6280, sha_Repository_6280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6280 = {};
  let id_Issues_6280 = id_Repository_6280;
  let index_Issues_6280 = Math.floor(Math.random() * 1000);
  let limit_Issues_6280 = Math.floor(Math.random() * 1000);
  let owner_Issues_6280 = "owner_Issues_6280_" + Math.floor(Math.random()*1000);
  let page_Issues_6280 = Math.floor(Math.random() * 1000);
  let position_Issues_6280 = Math.floor(Math.random() * 1000);
  let repo_Issues_6280 = "repo_Issues_6280_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6280, id_Issues_6280, index_Issues_6280, limit_Issues_6280, owner_Issues_6280, page_Issues_6280, position_Issues_6280, repo_Issues_6280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_6280 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_6280 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_6280 = {};
  let id_IssueCommentAttachments_6280 = id_Issues_6280;
  let name_IssueCommentAttachments_6280 = "name_IssueCommentAttachments_6280_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_6280 = "owner_IssueCommentAttachments_6280_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_6280 = "repo_IssueCommentAttachments_6280_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_6280, attachment_id_IssueCommentAttachments_6280, body_IssueCommentAttachments_6280, id_IssueCommentAttachments_6280, name_IssueCommentAttachments_6280, owner_IssueCommentAttachments_6280, repo_IssueCommentAttachments_6280, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_6280, repo_IssueCommentAttachments_6280, id_IssueCommentAttachments_6280, attachment_id_IssueCommentAttachments_6280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_6280, repo_Issues_6280, index_Issues_6280, id_Issues_6280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6280, repo_Repository_6280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6280, repo_Repositories_6280, filepath_Repositories_6280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Issues_IssueCommentReactions", function () {
  // -> Creating Repositories
  let body_Repositories_6380 = {};
  let filepath_Repositories_6380 = "filepath_Repositories_6380_" + Math.floor(Math.random()*1000);
  let id_Repositories_6380 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6380 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6380 = "owner_Repositories_6380_" + Math.floor(Math.random()*1000);
  let page_Repositories_6380 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6380 = "repo_Repositories_6380_" + Math.floor(Math.random()*1000);
  let username_Repositories_6380 = "username_Repositories_6380_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6380, filepath_Repositories_6380, id_Repositories_6380, limit_Repositories_6380, owner_Repositories_6380, page_Repositories_6380, repo_Repositories_6380, username_Repositories_6380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6380 = {};
  let id_Repository_6380 = id_Repositories_6380;
  let limit_Repository_6380 = Math.floor(Math.random() * 1000);
  let owner_Repository_6380 = "owner_Repository_6380_" + Math.floor(Math.random()*1000);
  let page_Repository_6380 = Math.floor(Math.random() * 1000);
  let repo_Repository_6380 = "repo_Repository_6380_" + Math.floor(Math.random()*1000);
  let sha_Repository_6380 = "sha_Repository_6380_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6380, id_Repository_6380, limit_Repository_6380, owner_Repository_6380, page_Repository_6380, repo_Repository_6380, sha_Repository_6380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6380 = {};
  let id_Issues_6380 = id_Repository_6380;
  let index_Issues_6380 = Math.floor(Math.random() * 1000);
  let limit_Issues_6380 = Math.floor(Math.random() * 1000);
  let owner_Issues_6380 = "owner_Issues_6380_" + Math.floor(Math.random()*1000);
  let page_Issues_6380 = Math.floor(Math.random() * 1000);
  let position_Issues_6380 = Math.floor(Math.random() * 1000);
  let repo_Issues_6380 = "repo_Issues_6380_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6380, id_Issues_6380, index_Issues_6380, limit_Issues_6380, owner_Issues_6380, page_Issues_6380, position_Issues_6380, repo_Issues_6380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_6380 = {};
  let id_IssueCommentReactions_6380 = id_Issues_6380;
  let owner_IssueCommentReactions_6380 = "owner_IssueCommentReactions_6380_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_6380 = "repo_IssueCommentReactions_6380_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_6380, id_IssueCommentReactions_6380, owner_IssueCommentReactions_6380, repo_IssueCommentReactions_6380, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_6380, repo_IssueCommentReactions_6380, id_IssueCommentReactions_6380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_6380, repo_Issues_6380, index_Issues_6380, id_Issues_6380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6380, repo_Repository_6380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6380, repo_Repositories_6380, filepath_Repositories_6380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Issues_IssueAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_6480 = {};
  let filepath_Repositories_6480 = "filepath_Repositories_6480_" + Math.floor(Math.random()*1000);
  let id_Repositories_6480 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6480 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6480 = "owner_Repositories_6480_" + Math.floor(Math.random()*1000);
  let page_Repositories_6480 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6480 = "repo_Repositories_6480_" + Math.floor(Math.random()*1000);
  let username_Repositories_6480 = "username_Repositories_6480_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6480, filepath_Repositories_6480, id_Repositories_6480, limit_Repositories_6480, owner_Repositories_6480, page_Repositories_6480, repo_Repositories_6480, username_Repositories_6480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6480 = {};
  let id_Repository_6480 = id_Repositories_6480;
  let limit_Repository_6480 = Math.floor(Math.random() * 1000);
  let owner_Repository_6480 = "owner_Repository_6480_" + Math.floor(Math.random()*1000);
  let page_Repository_6480 = Math.floor(Math.random() * 1000);
  let repo_Repository_6480 = "repo_Repository_6480_" + Math.floor(Math.random()*1000);
  let sha_Repository_6480 = "sha_Repository_6480_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6480, id_Repository_6480, limit_Repository_6480, owner_Repository_6480, page_Repository_6480, repo_Repository_6480, sha_Repository_6480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6480 = {};
  let id_Issues_6480 = id_Repository_6480;
  let index_Issues_6480 = Math.floor(Math.random() * 1000);
  let limit_Issues_6480 = Math.floor(Math.random() * 1000);
  let owner_Issues_6480 = "owner_Issues_6480_" + Math.floor(Math.random()*1000);
  let page_Issues_6480 = Math.floor(Math.random() * 1000);
  let position_Issues_6480 = Math.floor(Math.random() * 1000);
  let repo_Issues_6480 = "repo_Issues_6480_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6480, id_Issues_6480, index_Issues_6480, limit_Issues_6480, owner_Issues_6480, page_Issues_6480, position_Issues_6480, repo_Issues_6480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueAttachments
  let attachment_IssueAttachments_6480 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_6480 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_6480 = {};
  let id_IssueAttachments_6480 = id_Issues_6480;
  let index_IssueAttachments_6480 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_6480 = "name_IssueAttachments_6480_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_6480 = "owner_IssueAttachments_6480_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_6480 = "repo_IssueAttachments_6480_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_6480, attachment_id_IssueAttachments_6480, body_IssueAttachments_6480, id_IssueAttachments_6480, index_IssueAttachments_6480, name_IssueAttachments_6480, owner_IssueAttachments_6480, repo_IssueAttachments_6480, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_6480, repo_IssueAttachments_6480, index_IssueAttachments_6480, attachment_id_IssueAttachments_6480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_6480, repo_Issues_6480, index_Issues_6480, id_Issues_6480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6480, repo_Repository_6480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6480, repo_Repositories_6480, filepath_Repositories_6480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Issues_IssueBlocks", function () {
  // -> Creating Repositories
  let body_Repositories_6580 = {};
  let filepath_Repositories_6580 = "filepath_Repositories_6580_" + Math.floor(Math.random()*1000);
  let id_Repositories_6580 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6580 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6580 = "owner_Repositories_6580_" + Math.floor(Math.random()*1000);
  let page_Repositories_6580 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6580 = "repo_Repositories_6580_" + Math.floor(Math.random()*1000);
  let username_Repositories_6580 = "username_Repositories_6580_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6580, filepath_Repositories_6580, id_Repositories_6580, limit_Repositories_6580, owner_Repositories_6580, page_Repositories_6580, repo_Repositories_6580, username_Repositories_6580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6580 = {};
  let id_Repository_6580 = id_Repositories_6580;
  let limit_Repository_6580 = Math.floor(Math.random() * 1000);
  let owner_Repository_6580 = "owner_Repository_6580_" + Math.floor(Math.random()*1000);
  let page_Repository_6580 = Math.floor(Math.random() * 1000);
  let repo_Repository_6580 = "repo_Repository_6580_" + Math.floor(Math.random()*1000);
  let sha_Repository_6580 = "sha_Repository_6580_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6580, id_Repository_6580, limit_Repository_6580, owner_Repository_6580, page_Repository_6580, repo_Repository_6580, sha_Repository_6580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6580 = {};
  let id_Issues_6580 = id_Repository_6580;
  let index_Issues_6580 = Math.floor(Math.random() * 1000);
  let limit_Issues_6580 = Math.floor(Math.random() * 1000);
  let owner_Issues_6580 = "owner_Issues_6580_" + Math.floor(Math.random()*1000);
  let page_Issues_6580 = Math.floor(Math.random() * 1000);
  let position_Issues_6580 = Math.floor(Math.random() * 1000);
  let repo_Issues_6580 = "repo_Issues_6580_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6580, id_Issues_6580, index_Issues_6580, limit_Issues_6580, owner_Issues_6580, page_Issues_6580, position_Issues_6580, repo_Issues_6580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueBlocks
  let body_IssueBlocks_6580 = {};
  let index_IssueBlocks_6580 = "index_IssueBlocks_6580_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_6580 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_6580 = "owner_IssueBlocks_6580_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_6580 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_6580 = "repo_IssueBlocks_6580_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_6580, index_IssueBlocks_6580, limit_IssueBlocks_6580, owner_IssueBlocks_6580, page_IssueBlocks_6580, repo_IssueBlocks_6580, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_6580, repo_IssueBlocks_6580, index_IssueBlocks_6580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_6580, repo_Issues_6580, index_Issues_6580, id_Issues_6580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6580, repo_Repository_6580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6580, repo_Repositories_6580, filepath_Repositories_6580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Issues_IssueComments", function () {
  // -> Creating Repositories
  let body_Repositories_6680 = {};
  let filepath_Repositories_6680 = "filepath_Repositories_6680_" + Math.floor(Math.random()*1000);
  let id_Repositories_6680 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6680 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6680 = "owner_Repositories_6680_" + Math.floor(Math.random()*1000);
  let page_Repositories_6680 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6680 = "repo_Repositories_6680_" + Math.floor(Math.random()*1000);
  let username_Repositories_6680 = "username_Repositories_6680_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6680, filepath_Repositories_6680, id_Repositories_6680, limit_Repositories_6680, owner_Repositories_6680, page_Repositories_6680, repo_Repositories_6680, username_Repositories_6680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6680 = {};
  let id_Repository_6680 = id_Repositories_6680;
  let limit_Repository_6680 = Math.floor(Math.random() * 1000);
  let owner_Repository_6680 = "owner_Repository_6680_" + Math.floor(Math.random()*1000);
  let page_Repository_6680 = Math.floor(Math.random() * 1000);
  let repo_Repository_6680 = "repo_Repository_6680_" + Math.floor(Math.random()*1000);
  let sha_Repository_6680 = "sha_Repository_6680_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6680, id_Repository_6680, limit_Repository_6680, owner_Repository_6680, page_Repository_6680, repo_Repository_6680, sha_Repository_6680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6680 = {};
  let id_Issues_6680 = id_Repository_6680;
  let index_Issues_6680 = Math.floor(Math.random() * 1000);
  let limit_Issues_6680 = Math.floor(Math.random() * 1000);
  let owner_Issues_6680 = "owner_Issues_6680_" + Math.floor(Math.random()*1000);
  let page_Issues_6680 = Math.floor(Math.random() * 1000);
  let position_Issues_6680 = Math.floor(Math.random() * 1000);
  let repo_Issues_6680 = "repo_Issues_6680_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6680, id_Issues_6680, index_Issues_6680, limit_Issues_6680, owner_Issues_6680, page_Issues_6680, position_Issues_6680, repo_Issues_6680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueComments
  let before_IssueComments_6680 = "before_IssueComments_6680_" + Math.floor(Math.random()*1000);
  let body_IssueComments_6680 = {};
  let id_IssueComments_6680 = id_Issues_6680;
  let index_IssueComments_6680 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_6680 = "owner_IssueComments_6680_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_6680 = "repo_IssueComments_6680_" + Math.floor(Math.random()*1000);
  let since_IssueComments_6680 = "since_IssueComments_6680_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_6680, body_IssueComments_6680, id_IssueComments_6680, index_IssueComments_6680, owner_IssueComments_6680, repo_IssueComments_6680, since_IssueComments_6680, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_6680, repo_IssueComments_6680, index_IssueComments_6680, id_IssueComments_6680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_6680, repo_Issues_6680, index_Issues_6680, id_Issues_6680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6680, repo_Repository_6680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6680, repo_Repositories_6680, filepath_Repositories_6680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Issues_IssueSubscriptions", function () {
  // -> Creating Repositories
  let body_Repositories_6780 = {};
  let filepath_Repositories_6780 = "filepath_Repositories_6780_" + Math.floor(Math.random()*1000);
  let id_Repositories_6780 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6780 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6780 = "owner_Repositories_6780_" + Math.floor(Math.random()*1000);
  let page_Repositories_6780 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6780 = "repo_Repositories_6780_" + Math.floor(Math.random()*1000);
  let username_Repositories_6780 = "username_Repositories_6780_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6780, filepath_Repositories_6780, id_Repositories_6780, limit_Repositories_6780, owner_Repositories_6780, page_Repositories_6780, repo_Repositories_6780, username_Repositories_6780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6780 = {};
  let id_Repository_6780 = id_Repositories_6780;
  let limit_Repository_6780 = Math.floor(Math.random() * 1000);
  let owner_Repository_6780 = "owner_Repository_6780_" + Math.floor(Math.random()*1000);
  let page_Repository_6780 = Math.floor(Math.random() * 1000);
  let repo_Repository_6780 = "repo_Repository_6780_" + Math.floor(Math.random()*1000);
  let sha_Repository_6780 = "sha_Repository_6780_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6780, id_Repository_6780, limit_Repository_6780, owner_Repository_6780, page_Repository_6780, repo_Repository_6780, sha_Repository_6780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6780 = {};
  let id_Issues_6780 = id_Repository_6780;
  let index_Issues_6780 = Math.floor(Math.random() * 1000);
  let limit_Issues_6780 = Math.floor(Math.random() * 1000);
  let owner_Issues_6780 = "owner_Issues_6780_" + Math.floor(Math.random()*1000);
  let page_Issues_6780 = Math.floor(Math.random() * 1000);
  let position_Issues_6780 = Math.floor(Math.random() * 1000);
  let repo_Issues_6780 = "repo_Issues_6780_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6780, id_Issues_6780, index_Issues_6780, limit_Issues_6780, owner_Issues_6780, page_Issues_6780, position_Issues_6780, repo_Issues_6780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_6780 = id_Issues_6780;
  let index_IssueSubscriptions_6780 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_6780 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_6780 = "owner_IssueSubscriptions_6780_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_6780 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_6780 = "repo_IssueSubscriptions_6780_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_6780 = "user_IssueSubscriptions_6780_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_6780, index_IssueSubscriptions_6780, limit_IssueSubscriptions_6780, owner_IssueSubscriptions_6780, page_IssueSubscriptions_6780, repo_IssueSubscriptions_6780, user_IssueSubscriptions_6780, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_6780, repo_IssueSubscriptions_6780, index_IssueSubscriptions_6780, user_IssueSubscriptions_6780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_6780, repo_Issues_6780, index_Issues_6780, id_Issues_6780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6780, repo_Repository_6780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6780, repo_Repositories_6780, filepath_Repositories_6780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Issues_IssueTimes", function () {
  // -> Creating Repositories
  let body_Repositories_6880 = {};
  let filepath_Repositories_6880 = "filepath_Repositories_6880_" + Math.floor(Math.random()*1000);
  let id_Repositories_6880 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6880 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6880 = "owner_Repositories_6880_" + Math.floor(Math.random()*1000);
  let page_Repositories_6880 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6880 = "repo_Repositories_6880_" + Math.floor(Math.random()*1000);
  let username_Repositories_6880 = "username_Repositories_6880_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6880, filepath_Repositories_6880, id_Repositories_6880, limit_Repositories_6880, owner_Repositories_6880, page_Repositories_6880, repo_Repositories_6880, username_Repositories_6880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6880 = {};
  let id_Repository_6880 = id_Repositories_6880;
  let limit_Repository_6880 = Math.floor(Math.random() * 1000);
  let owner_Repository_6880 = "owner_Repository_6880_" + Math.floor(Math.random()*1000);
  let page_Repository_6880 = Math.floor(Math.random() * 1000);
  let repo_Repository_6880 = "repo_Repository_6880_" + Math.floor(Math.random()*1000);
  let sha_Repository_6880 = "sha_Repository_6880_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6880, id_Repository_6880, limit_Repository_6880, owner_Repository_6880, page_Repository_6880, repo_Repository_6880, sha_Repository_6880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6880 = {};
  let id_Issues_6880 = id_Repository_6880;
  let index_Issues_6880 = Math.floor(Math.random() * 1000);
  let limit_Issues_6880 = Math.floor(Math.random() * 1000);
  let owner_Issues_6880 = "owner_Issues_6880_" + Math.floor(Math.random()*1000);
  let page_Issues_6880 = Math.floor(Math.random() * 1000);
  let position_Issues_6880 = Math.floor(Math.random() * 1000);
  let repo_Issues_6880 = "repo_Issues_6880_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6880, id_Issues_6880, index_Issues_6880, limit_Issues_6880, owner_Issues_6880, page_Issues_6880, position_Issues_6880, repo_Issues_6880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueTimes
  let before_IssueTimes_6880 = "before_IssueTimes_6880_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_6880 = {};
  let index_IssueTimes_6880 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_6880 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_6880 = "owner_IssueTimes_6880_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_6880 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_6880 = "repo_IssueTimes_6880_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_6880 = "since_IssueTimes_6880_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_6880 = "user_IssueTimes_6880_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_6880, body_IssueTimes_6880, index_IssueTimes_6880, limit_IssueTimes_6880, owner_IssueTimes_6880, page_IssueTimes_6880, repo_IssueTimes_6880, since_IssueTimes_6880, user_IssueTimes_6880, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_6880, repo_IssueTimes_6880, index_IssueTimes_6880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_6880, repo_Issues_6880, index_Issues_6880, id_Issues_6880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6880, repo_Repository_6880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6880, repo_Repositories_6880, filepath_Repositories_6880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Branches", function () {
  // -> Creating Repositories
  let body_Repositories_6980 = {};
  let filepath_Repositories_6980 = "filepath_Repositories_6980_" + Math.floor(Math.random()*1000);
  let id_Repositories_6980 = Math.floor(Math.random() * 1000);
  let limit_Repositories_6980 = Math.floor(Math.random() * 1000);
  let owner_Repositories_6980 = "owner_Repositories_6980_" + Math.floor(Math.random()*1000);
  let page_Repositories_6980 = Math.floor(Math.random() * 1000);
  let repo_Repositories_6980 = "repo_Repositories_6980_" + Math.floor(Math.random()*1000);
  let username_Repositories_6980 = "username_Repositories_6980_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_6980, filepath_Repositories_6980, id_Repositories_6980, limit_Repositories_6980, owner_Repositories_6980, page_Repositories_6980, repo_Repositories_6980, username_Repositories_6980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_6980 = {};
  let id_Repository_6980 = id_Repositories_6980;
  let limit_Repository_6980 = Math.floor(Math.random() * 1000);
  let owner_Repository_6980 = "owner_Repository_6980_" + Math.floor(Math.random()*1000);
  let page_Repository_6980 = Math.floor(Math.random() * 1000);
  let repo_Repository_6980 = "repo_Repository_6980_" + Math.floor(Math.random()*1000);
  let sha_Repository_6980 = "sha_Repository_6980_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6980, id_Repository_6980, limit_Repository_6980, owner_Repository_6980, page_Repository_6980, repo_Repository_6980, sha_Repository_6980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Branches
  let CreateBranchRepoOption_Branches_6980 = "CreateBranchRepoOption_Branches_6980_" + Math.floor(Math.random()*1000);
  let UpdateBranchRepoOption_Branches_6980 = "UpdateBranchRepoOption_Branches_6980_" + Math.floor(Math.random()*1000);
  let body_Branches_6980 = {};
  let branch_Branches_6980 = "branch_Branches_6980_" + Math.floor(Math.random()*1000);
  let id_Branches_6980 = id_Repository_6980;
  let limit_Branches_6980 = Math.floor(Math.random() * 1000);
  let owner_Branches_6980 = "owner_Branches_6980_" + Math.floor(Math.random()*1000);
  let page_Branches_6980 = Math.floor(Math.random() * 1000);
  let repo_Branches_6980 = "repo_Branches_6980_" + Math.floor(Math.random()*1000);
  repoCreateBranch(CreateBranchRepoOption_Branches_6980, UpdateBranchRepoOption_Branches_6980, body_Branches_6980, branch_Branches_6980, id_Branches_6980, limit_Branches_6980, owner_Branches_6980, page_Branches_6980, repo_Branches_6980, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_6980, repo_Branches_6980, branch_Branches_6980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6980, repo_Repository_6980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_6980, repo_Repositories_6980, filepath_Repositories_6980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Collaborators", function () {
  // -> Creating Repositories
  let body_Repositories_7080 = {};
  let filepath_Repositories_7080 = "filepath_Repositories_7080_" + Math.floor(Math.random()*1000);
  let id_Repositories_7080 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7080 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7080 = "owner_Repositories_7080_" + Math.floor(Math.random()*1000);
  let page_Repositories_7080 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7080 = "repo_Repositories_7080_" + Math.floor(Math.random()*1000);
  let username_Repositories_7080 = "username_Repositories_7080_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7080, filepath_Repositories_7080, id_Repositories_7080, limit_Repositories_7080, owner_Repositories_7080, page_Repositories_7080, repo_Repositories_7080, username_Repositories_7080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7080 = {};
  let id_Repository_7080 = id_Repositories_7080;
  let limit_Repository_7080 = Math.floor(Math.random() * 1000);
  let owner_Repository_7080 = "owner_Repository_7080_" + Math.floor(Math.random()*1000);
  let page_Repository_7080 = Math.floor(Math.random() * 1000);
  let repo_Repository_7080 = "repo_Repository_7080_" + Math.floor(Math.random()*1000);
  let sha_Repository_7080 = "sha_Repository_7080_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7080, id_Repository_7080, limit_Repository_7080, owner_Repository_7080, page_Repository_7080, repo_Repository_7080, sha_Repository_7080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Collaborators
  let AddCollaboratorOption_Collaborators_7080 = "AddCollaboratorOption_Collaborators_7080_" + Math.floor(Math.random()*1000);
  let body_Collaborators_7080 = {};
  let collaborator_Collaborators_7080 = "collaborator_Collaborators_7080_" + Math.floor(Math.random()*1000);
  let id_Collaborators_7080 = id_Repository_7080;
  let limit_Collaborators_7080 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_7080 = "owner_Collaborators_7080_" + Math.floor(Math.random()*1000);
  let page_Collaborators_7080 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_7080 = "repo_Collaborators_7080_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(AddCollaboratorOption_Collaborators_7080, body_Collaborators_7080, collaborator_Collaborators_7080, id_Collaborators_7080, limit_Collaborators_7080, owner_Collaborators_7080, page_Collaborators_7080, repo_Collaborators_7080, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_7080, repo_Collaborators_7080, collaborator_Collaborators_7080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7080, repo_Repository_7080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7080, repo_Repositories_7080, filepath_Repositories_7080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Forks", function () {
  // -> Creating Repositories
  let body_Repositories_7180 = {};
  let filepath_Repositories_7180 = "filepath_Repositories_7180_" + Math.floor(Math.random()*1000);
  let id_Repositories_7180 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7180 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7180 = "owner_Repositories_7180_" + Math.floor(Math.random()*1000);
  let page_Repositories_7180 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7180 = "repo_Repositories_7180_" + Math.floor(Math.random()*1000);
  let username_Repositories_7180 = "username_Repositories_7180_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7180, filepath_Repositories_7180, id_Repositories_7180, limit_Repositories_7180, owner_Repositories_7180, page_Repositories_7180, repo_Repositories_7180, username_Repositories_7180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7180 = {};
  let id_Repository_7180 = id_Repositories_7180;
  let limit_Repository_7180 = Math.floor(Math.random() * 1000);
  let owner_Repository_7180 = "owner_Repository_7180_" + Math.floor(Math.random()*1000);
  let page_Repository_7180 = Math.floor(Math.random() * 1000);
  let repo_Repository_7180 = "repo_Repository_7180_" + Math.floor(Math.random()*1000);
  let sha_Repository_7180 = "sha_Repository_7180_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7180, id_Repository_7180, limit_Repository_7180, owner_Repository_7180, page_Repository_7180, repo_Repository_7180, sha_Repository_7180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Forks
  let body_Forks_7180 = {};
  let id_Forks_7180 = id_Repository_7180;
  let limit_Forks_7180 = Math.floor(Math.random() * 1000);
  let owner_Forks_7180 = "owner_Forks_7180_" + Math.floor(Math.random()*1000);
  let page_Forks_7180 = Math.floor(Math.random() * 1000);
  let repo_Forks_7180 = "repo_Forks_7180_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_7180, id_Forks_7180, limit_Forks_7180, owner_Forks_7180, page_Forks_7180, repo_Forks_7180, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7180, repo_Repository_7180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7180, repo_Repositories_7180, filepath_Repositories_7180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Issue", function () {
  // -> Creating Repositories
  let body_Repositories_7280 = {};
  let filepath_Repositories_7280 = "filepath_Repositories_7280_" + Math.floor(Math.random()*1000);
  let id_Repositories_7280 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7280 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7280 = "owner_Repositories_7280_" + Math.floor(Math.random()*1000);
  let page_Repositories_7280 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7280 = "repo_Repositories_7280_" + Math.floor(Math.random()*1000);
  let username_Repositories_7280 = "username_Repositories_7280_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7280, filepath_Repositories_7280, id_Repositories_7280, limit_Repositories_7280, owner_Repositories_7280, page_Repositories_7280, repo_Repositories_7280, username_Repositories_7280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7280 = {};
  let id_Repository_7280 = id_Repositories_7280;
  let limit_Repository_7280 = Math.floor(Math.random() * 1000);
  let owner_Repository_7280 = "owner_Repository_7280_" + Math.floor(Math.random()*1000);
  let page_Repository_7280 = Math.floor(Math.random() * 1000);
  let repo_Repository_7280 = "repo_Repository_7280_" + Math.floor(Math.random()*1000);
  let sha_Repository_7280 = "sha_Repository_7280_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7280, id_Repository_7280, limit_Repository_7280, owner_Repository_7280, page_Repository_7280, repo_Repository_7280, sha_Repository_7280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issue
  let body_Issue_7280 = {};
  let id_Issue_7280 = id_Repository_7280;
  let limit_Issue_7280 = Math.floor(Math.random() * 1000);
  let name_Issue_7280 = "name_Issue_7280_" + Math.floor(Math.random()*1000);
  let owner_Issue_7280 = "owner_Issue_7280_" + Math.floor(Math.random()*1000);
  let page_Issue_7280 = Math.floor(Math.random() * 1000);
  let repo_Issue_7280 = "repo_Issue_7280_" + Math.floor(Math.random()*1000);
  let state_Issue_7280 = "state_Issue_7280_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_7280, id_Issue_7280, limit_Issue_7280, name_Issue_7280, owner_Issue_7280, page_Issue_7280, repo_Issue_7280, state_Issue_7280, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7280, repo_Repository_7280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7280, repo_Repositories_7280, filepath_Repositories_7280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_PullRequests_PullReviewRequests", function () {
  // -> Creating Repositories
  let body_Repositories_7380 = {};
  let filepath_Repositories_7380 = "filepath_Repositories_7380_" + Math.floor(Math.random()*1000);
  let id_Repositories_7380 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7380 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7380 = "owner_Repositories_7380_" + Math.floor(Math.random()*1000);
  let page_Repositories_7380 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7380 = "repo_Repositories_7380_" + Math.floor(Math.random()*1000);
  let username_Repositories_7380 = "username_Repositories_7380_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7380, filepath_Repositories_7380, id_Repositories_7380, limit_Repositories_7380, owner_Repositories_7380, page_Repositories_7380, repo_Repositories_7380, username_Repositories_7380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7380 = {};
  let id_Repository_7380 = id_Repositories_7380;
  let limit_Repository_7380 = Math.floor(Math.random() * 1000);
  let owner_Repository_7380 = "owner_Repository_7380_" + Math.floor(Math.random()*1000);
  let page_Repository_7380 = Math.floor(Math.random() * 1000);
  let repo_Repository_7380 = "repo_Repository_7380_" + Math.floor(Math.random()*1000);
  let sha_Repository_7380 = "sha_Repository_7380_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7380, id_Repository_7380, limit_Repository_7380, owner_Repository_7380, page_Repository_7380, repo_Repository_7380, sha_Repository_7380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_7380 = {};
  let id_PullRequests_7380 = id_Repository_7380;
  let index_PullRequests_7380 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_7380 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_7380 = "owner_PullRequests_7380_" + Math.floor(Math.random()*1000);
  let page_PullRequests_7380 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_7380 = "repo_PullRequests_7380_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_7380 = "skip-to_PullRequests_7380_" + Math.floor(Math.random()*1000);
  let style_PullRequests_7380 = "style_PullRequests_7380_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_7380 = "whitespace_PullRequests_7380_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_7380, id_PullRequests_7380, index_PullRequests_7380, limit_PullRequests_7380, owner_PullRequests_7380, page_PullRequests_7380, repo_PullRequests_7380, skip_to_PullRequests_7380, style_PullRequests_7380, whitespace_PullRequests_7380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewRequests
  let body_PullReviewRequests_7380 = {};
  let index_PullReviewRequests_7380 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_7380 = "owner_PullReviewRequests_7380_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_7380 = "repo_PullReviewRequests_7380_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_7380, index_PullReviewRequests_7380, owner_PullReviewRequests_7380, repo_PullReviewRequests_7380, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_7380, repo_PullReviewRequests_7380, index_PullReviewRequests_7380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_7380, repo_PullRequests_7380, index_PullRequests_7380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7380, repo_Repository_7380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7380, repo_Repositories_7380, filepath_Repositories_7380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_PullRequests_PullReviews_PullReviewDismissals", function () {
  // -> Creating Repositories
  let body_Repositories_7480 = {};
  let filepath_Repositories_7480 = "filepath_Repositories_7480_" + Math.floor(Math.random()*1000);
  let id_Repositories_7480 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7480 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7480 = "owner_Repositories_7480_" + Math.floor(Math.random()*1000);
  let page_Repositories_7480 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7480 = "repo_Repositories_7480_" + Math.floor(Math.random()*1000);
  let username_Repositories_7480 = "username_Repositories_7480_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7480, filepath_Repositories_7480, id_Repositories_7480, limit_Repositories_7480, owner_Repositories_7480, page_Repositories_7480, repo_Repositories_7480, username_Repositories_7480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7480 = {};
  let id_Repository_7480 = id_Repositories_7480;
  let limit_Repository_7480 = Math.floor(Math.random() * 1000);
  let owner_Repository_7480 = "owner_Repository_7480_" + Math.floor(Math.random()*1000);
  let page_Repository_7480 = Math.floor(Math.random() * 1000);
  let repo_Repository_7480 = "repo_Repository_7480_" + Math.floor(Math.random()*1000);
  let sha_Repository_7480 = "sha_Repository_7480_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7480, id_Repository_7480, limit_Repository_7480, owner_Repository_7480, page_Repository_7480, repo_Repository_7480, sha_Repository_7480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_7480 = {};
  let id_PullRequests_7480 = id_Repository_7480;
  let index_PullRequests_7480 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_7480 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_7480 = "owner_PullRequests_7480_" + Math.floor(Math.random()*1000);
  let page_PullRequests_7480 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_7480 = "repo_PullRequests_7480_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_7480 = "skip-to_PullRequests_7480_" + Math.floor(Math.random()*1000);
  let style_PullRequests_7480 = "style_PullRequests_7480_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_7480 = "whitespace_PullRequests_7480_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_7480, id_PullRequests_7480, index_PullRequests_7480, limit_PullRequests_7480, owner_PullRequests_7480, page_PullRequests_7480, repo_PullRequests_7480, skip_to_PullRequests_7480, style_PullRequests_7480, whitespace_PullRequests_7480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_7480 = {};
  let id_PullReviews_7480 = id_PullRequests_7480;
  let index_PullReviews_7480 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_7480 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_7480 = "owner_PullReviews_7480_" + Math.floor(Math.random()*1000);
  let page_PullReviews_7480 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_7480 = "repo_PullReviews_7480_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_7480, id_PullReviews_7480, index_PullReviews_7480, limit_PullReviews_7480, owner_PullReviews_7480, page_PullReviews_7480, repo_PullReviews_7480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_7480 = {};
  let id_PullReviewDismissals_7480 = id_PullReviews_7480;
  let index_PullReviewDismissals_7480 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_7480 = "owner_PullReviewDismissals_7480_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_7480 = "repo_PullReviewDismissals_7480_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_7480, id_PullReviewDismissals_7480, index_PullReviewDismissals_7480, owner_PullReviewDismissals_7480, repo_PullReviewDismissals_7480, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_7480, repo_PullReviews_7480, index_PullReviews_7480, id_PullReviews_7480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_7480, repo_PullRequests_7480, index_PullRequests_7480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7480, repo_Repository_7480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7480, repo_Repositories_7480, filepath_Repositories_7480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_PullRequests_PullReviews_PullReviewUndismissals", function () {
  // -> Creating Repositories
  let body_Repositories_7580 = {};
  let filepath_Repositories_7580 = "filepath_Repositories_7580_" + Math.floor(Math.random()*1000);
  let id_Repositories_7580 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7580 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7580 = "owner_Repositories_7580_" + Math.floor(Math.random()*1000);
  let page_Repositories_7580 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7580 = "repo_Repositories_7580_" + Math.floor(Math.random()*1000);
  let username_Repositories_7580 = "username_Repositories_7580_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7580, filepath_Repositories_7580, id_Repositories_7580, limit_Repositories_7580, owner_Repositories_7580, page_Repositories_7580, repo_Repositories_7580, username_Repositories_7580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7580 = {};
  let id_Repository_7580 = id_Repositories_7580;
  let limit_Repository_7580 = Math.floor(Math.random() * 1000);
  let owner_Repository_7580 = "owner_Repository_7580_" + Math.floor(Math.random()*1000);
  let page_Repository_7580 = Math.floor(Math.random() * 1000);
  let repo_Repository_7580 = "repo_Repository_7580_" + Math.floor(Math.random()*1000);
  let sha_Repository_7580 = "sha_Repository_7580_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7580, id_Repository_7580, limit_Repository_7580, owner_Repository_7580, page_Repository_7580, repo_Repository_7580, sha_Repository_7580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_7580 = {};
  let id_PullRequests_7580 = id_Repository_7580;
  let index_PullRequests_7580 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_7580 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_7580 = "owner_PullRequests_7580_" + Math.floor(Math.random()*1000);
  let page_PullRequests_7580 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_7580 = "repo_PullRequests_7580_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_7580 = "skip-to_PullRequests_7580_" + Math.floor(Math.random()*1000);
  let style_PullRequests_7580 = "style_PullRequests_7580_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_7580 = "whitespace_PullRequests_7580_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_7580, id_PullRequests_7580, index_PullRequests_7580, limit_PullRequests_7580, owner_PullRequests_7580, page_PullRequests_7580, repo_PullRequests_7580, skip_to_PullRequests_7580, style_PullRequests_7580, whitespace_PullRequests_7580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_7580 = {};
  let id_PullReviews_7580 = id_PullRequests_7580;
  let index_PullReviews_7580 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_7580 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_7580 = "owner_PullReviews_7580_" + Math.floor(Math.random()*1000);
  let page_PullReviews_7580 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_7580 = "repo_PullReviews_7580_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_7580, id_PullReviews_7580, index_PullReviews_7580, limit_PullReviews_7580, owner_PullReviews_7580, page_PullReviews_7580, repo_PullReviews_7580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_7580 = id_PullReviews_7580;
  let index_PullReviewUndismissals_7580 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_7580 = "owner_PullReviewUndismissals_7580_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_7580 = "repo_PullReviewUndismissals_7580_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_7580, index_PullReviewUndismissals_7580, owner_PullReviewUndismissals_7580, repo_PullReviewUndismissals_7580, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_7580, repo_PullReviews_7580, index_PullReviews_7580, id_PullReviews_7580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_7580, repo_PullRequests_7580, index_PullRequests_7580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7580, repo_Repository_7580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7580, repo_Repositories_7580, filepath_Repositories_7580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Releases_ReleaseAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_7680 = {};
  let filepath_Repositories_7680 = "filepath_Repositories_7680_" + Math.floor(Math.random()*1000);
  let id_Repositories_7680 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7680 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7680 = "owner_Repositories_7680_" + Math.floor(Math.random()*1000);
  let page_Repositories_7680 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7680 = "repo_Repositories_7680_" + Math.floor(Math.random()*1000);
  let username_Repositories_7680 = "username_Repositories_7680_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7680, filepath_Repositories_7680, id_Repositories_7680, limit_Repositories_7680, owner_Repositories_7680, page_Repositories_7680, repo_Repositories_7680, username_Repositories_7680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7680 = {};
  let id_Repository_7680 = id_Repositories_7680;
  let limit_Repository_7680 = Math.floor(Math.random() * 1000);
  let owner_Repository_7680 = "owner_Repository_7680_" + Math.floor(Math.random()*1000);
  let page_Repository_7680 = Math.floor(Math.random() * 1000);
  let repo_Repository_7680 = "repo_Repository_7680_" + Math.floor(Math.random()*1000);
  let sha_Repository_7680 = "sha_Repository_7680_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7680, id_Repository_7680, limit_Repository_7680, owner_Repository_7680, page_Repository_7680, repo_Repository_7680, sha_Repository_7680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Releases
  let body_Releases_7680 = {};
  let draft_Releases_7680 = true;
  let id_Releases_7680 = id_Repository_7680;
  let limit_Releases_7680 = Math.floor(Math.random() * 1000);
  let owner_Releases_7680 = "owner_Releases_7680_" + Math.floor(Math.random()*1000);
  let page_Releases_7680 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_7680 = true;
  let repo_Releases_7680 = "repo_Releases_7680_" + Math.floor(Math.random()*1000);
  let tag_Releases_7680 = "tag_Releases_7680_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_7680, draft_Releases_7680, id_Releases_7680, limit_Releases_7680, owner_Releases_7680, page_Releases_7680, pre_release_Releases_7680, repo_Releases_7680, tag_Releases_7680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_7680 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_7680 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_7680 = {};
  let id_ReleaseAttachments_7680 = id_Releases_7680;
  let name_ReleaseAttachments_7680 = "name_ReleaseAttachments_7680_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_7680 = "owner_ReleaseAttachments_7680_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_7680 = "repo_ReleaseAttachments_7680_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_7680, attachment_id_ReleaseAttachments_7680, body_ReleaseAttachments_7680, id_ReleaseAttachments_7680, name_ReleaseAttachments_7680, owner_ReleaseAttachments_7680, repo_ReleaseAttachments_7680, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_7680, repo_ReleaseAttachments_7680, id_ReleaseAttachments_7680, attachment_id_ReleaseAttachments_7680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Releases
  repoDeleteReleaseByTag(owner_Releases_7680, repo_Releases_7680, tag_Releases_7680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7680, repo_Repository_7680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7680, repo_Repositories_7680, filepath_Repositories_7680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_TagProtections", function () {
  // -> Creating Repositories
  let body_Repositories_7780 = {};
  let filepath_Repositories_7780 = "filepath_Repositories_7780_" + Math.floor(Math.random()*1000);
  let id_Repositories_7780 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7780 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7780 = "owner_Repositories_7780_" + Math.floor(Math.random()*1000);
  let page_Repositories_7780 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7780 = "repo_Repositories_7780_" + Math.floor(Math.random()*1000);
  let username_Repositories_7780 = "username_Repositories_7780_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7780, filepath_Repositories_7780, id_Repositories_7780, limit_Repositories_7780, owner_Repositories_7780, page_Repositories_7780, repo_Repositories_7780, username_Repositories_7780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7780 = {};
  let id_Repository_7780 = id_Repositories_7780;
  let limit_Repository_7780 = Math.floor(Math.random() * 1000);
  let owner_Repository_7780 = "owner_Repository_7780_" + Math.floor(Math.random()*1000);
  let page_Repository_7780 = Math.floor(Math.random() * 1000);
  let repo_Repository_7780 = "repo_Repository_7780_" + Math.floor(Math.random()*1000);
  let sha_Repository_7780 = "sha_Repository_7780_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7780, id_Repository_7780, limit_Repository_7780, owner_Repository_7780, page_Repository_7780, repo_Repository_7780, sha_Repository_7780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TagProtections
  let body_TagProtections_7780 = {};
  let id_TagProtections_7780 = id_Repository_7780;
  let owner_TagProtections_7780 = "owner_TagProtections_7780_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_7780 = "repo_TagProtections_7780_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_7780, id_TagProtections_7780, owner_TagProtections_7780, repo_TagProtections_7780, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_7780, repo_TagProtections_7780, id_TagProtections_7780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7780, repo_Repository_7780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7780, repo_Repositories_7780, filepath_Repositories_7780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Tags", function () {
  // -> Creating Repositories
  let body_Repositories_7880 = {};
  let filepath_Repositories_7880 = "filepath_Repositories_7880_" + Math.floor(Math.random()*1000);
  let id_Repositories_7880 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7880 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7880 = "owner_Repositories_7880_" + Math.floor(Math.random()*1000);
  let page_Repositories_7880 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7880 = "repo_Repositories_7880_" + Math.floor(Math.random()*1000);
  let username_Repositories_7880 = "username_Repositories_7880_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7880, filepath_Repositories_7880, id_Repositories_7880, limit_Repositories_7880, owner_Repositories_7880, page_Repositories_7880, repo_Repositories_7880, username_Repositories_7880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7880 = {};
  let id_Repository_7880 = id_Repositories_7880;
  let limit_Repository_7880 = Math.floor(Math.random() * 1000);
  let owner_Repository_7880 = "owner_Repository_7880_" + Math.floor(Math.random()*1000);
  let page_Repository_7880 = Math.floor(Math.random() * 1000);
  let repo_Repository_7880 = "repo_Repository_7880_" + Math.floor(Math.random()*1000);
  let sha_Repository_7880 = "sha_Repository_7880_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7880, id_Repository_7880, limit_Repository_7880, owner_Repository_7880, page_Repository_7880, repo_Repository_7880, sha_Repository_7880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Tags
  let body_Tags_7880 = {};
  let id_Tags_7880 = id_Repository_7880;
  let limit_Tags_7880 = Math.floor(Math.random() * 1000);
  let owner_Tags_7880 = "owner_Tags_7880_" + Math.floor(Math.random()*1000);
  let page_Tags_7880 = Math.floor(Math.random() * 1000);
  let repo_Tags_7880 = "repo_Tags_7880_" + Math.floor(Math.random()*1000);
  let tag_Tags_7880 = "tag_Tags_7880_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_7880, id_Tags_7880, limit_Tags_7880, owner_Tags_7880, page_Tags_7880, repo_Tags_7880, tag_Tags_7880, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Tags
  repoDeleteTag(owner_Tags_7880, repo_Tags_7880, tag_Tags_7880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7880, repo_Repository_7880, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7880, repo_Repositories_7880, filepath_Repositories_7880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_Topics", function () {
  // -> Creating Repositories
  let body_Repositories_7980 = {};
  let filepath_Repositories_7980 = "filepath_Repositories_7980_" + Math.floor(Math.random()*1000);
  let id_Repositories_7980 = Math.floor(Math.random() * 1000);
  let limit_Repositories_7980 = Math.floor(Math.random() * 1000);
  let owner_Repositories_7980 = "owner_Repositories_7980_" + Math.floor(Math.random()*1000);
  let page_Repositories_7980 = Math.floor(Math.random() * 1000);
  let repo_Repositories_7980 = "repo_Repositories_7980_" + Math.floor(Math.random()*1000);
  let username_Repositories_7980 = "username_Repositories_7980_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_7980, filepath_Repositories_7980, id_Repositories_7980, limit_Repositories_7980, owner_Repositories_7980, page_Repositories_7980, repo_Repositories_7980, username_Repositories_7980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_7980 = {};
  let id_Repository_7980 = id_Repositories_7980;
  let limit_Repository_7980 = Math.floor(Math.random() * 1000);
  let owner_Repository_7980 = "owner_Repository_7980_" + Math.floor(Math.random()*1000);
  let page_Repository_7980 = Math.floor(Math.random() * 1000);
  let repo_Repository_7980 = "repo_Repository_7980_" + Math.floor(Math.random()*1000);
  let sha_Repository_7980 = "sha_Repository_7980_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7980, id_Repository_7980, limit_Repository_7980, owner_Repository_7980, page_Repository_7980, repo_Repository_7980, sha_Repository_7980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Topics
  let body_Topics_7980 = {};
  let limit_Topics_7980 = Math.floor(Math.random() * 1000);
  let owner_Topics_7980 = "owner_Topics_7980_" + Math.floor(Math.random()*1000);
  let page_Topics_7980 = Math.floor(Math.random() * 1000);
  let q_Topics_7980 = "q_Topics_7980_" + Math.floor(Math.random()*1000);
  let repo_Topics_7980 = "repo_Topics_7980_" + Math.floor(Math.random()*1000);
  let topic_Topics_7980 = "topic_Topics_7980_" + Math.floor(Math.random()*1000);
  let topic1_Topics_7980 = "topic1_Topics_7980_" + Math.floor(Math.random()*1000);
  let topic2_Topics_7980 = "topic2_Topics_7980_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_7980, limit_Topics_7980, owner_Topics_7980, page_Topics_7980, q_Topics_7980, repo_Topics_7980, topic_Topics_7980, topic1_Topics_7980, topic2_Topics_7980, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_7980, repo_Topics_7980, topic_Topics_7980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7980, repo_Repository_7980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_7980, repo_Repositories_7980, filepath_Repositories_7980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_Repository_WikiPage", function () {
  // -> Creating Repositories
  let body_Repositories_8080 = {};
  let filepath_Repositories_8080 = "filepath_Repositories_8080_" + Math.floor(Math.random()*1000);
  let id_Repositories_8080 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8080 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8080 = "owner_Repositories_8080_" + Math.floor(Math.random()*1000);
  let page_Repositories_8080 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8080 = "repo_Repositories_8080_" + Math.floor(Math.random()*1000);
  let username_Repositories_8080 = "username_Repositories_8080_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8080, filepath_Repositories_8080, id_Repositories_8080, limit_Repositories_8080, owner_Repositories_8080, page_Repositories_8080, repo_Repositories_8080, username_Repositories_8080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_8080 = {};
  let id_Repository_8080 = id_Repositories_8080;
  let limit_Repository_8080 = Math.floor(Math.random() * 1000);
  let owner_Repository_8080 = "owner_Repository_8080_" + Math.floor(Math.random()*1000);
  let page_Repository_8080 = Math.floor(Math.random() * 1000);
  let repo_Repository_8080 = "repo_Repository_8080_" + Math.floor(Math.random()*1000);
  let sha_Repository_8080 = "sha_Repository_8080_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8080, id_Repository_8080, limit_Repository_8080, owner_Repository_8080, page_Repository_8080, repo_Repository_8080, sha_Repository_8080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating WikiPage
  let body_WikiPage_8080 = {};
  let id_WikiPage_8080 = id_Repository_8080;
  let owner_WikiPage_8080 = "owner_WikiPage_8080_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_8080 = "pageName_WikiPage_8080_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_8080 = "repo_WikiPage_8080_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_8080 = "wikiPageOptions_WikiPage_8080_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_8080, id_WikiPage_8080, owner_WikiPage_8080, pageName_WikiPage_8080, repo_WikiPage_8080, wikiPageOptions_WikiPage_8080, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_8080, repo_WikiPage_8080, pageName_WikiPage_8080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_8080, repo_Repository_8080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_8080, repo_Repositories_8080, filepath_Repositories_8080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_MirrorSync", function () {
  // -> Creating Repositories
  let body_Repositories_8180 = {};
  let filepath_Repositories_8180 = "filepath_Repositories_8180_" + Math.floor(Math.random()*1000);
  let id_Repositories_8180 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8180 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8180 = "owner_Repositories_8180_" + Math.floor(Math.random()*1000);
  let page_Repositories_8180 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8180 = "repo_Repositories_8180_" + Math.floor(Math.random()*1000);
  let username_Repositories_8180 = "username_Repositories_8180_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8180, filepath_Repositories_8180, id_Repositories_8180, limit_Repositories_8180, owner_Repositories_8180, page_Repositories_8180, repo_Repositories_8180, username_Repositories_8180, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating MirrorSync
  let id_MirrorSync_8180 = id_Repositories_8180;
  let owner_MirrorSync_8180 = "owner_MirrorSync_8180_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_8180 = "repo_MirrorSync_8180_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_8180, owner_MirrorSync_8180, repo_MirrorSync_8180, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_8180, repo_Repositories_8180, filepath_Repositories_8180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_PushMirrors", function () {
  // -> Creating Repositories
  let body_Repositories_8280 = {};
  let filepath_Repositories_8280 = "filepath_Repositories_8280_" + Math.floor(Math.random()*1000);
  let id_Repositories_8280 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8280 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8280 = "owner_Repositories_8280_" + Math.floor(Math.random()*1000);
  let page_Repositories_8280 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8280 = "repo_Repositories_8280_" + Math.floor(Math.random()*1000);
  let username_Repositories_8280 = "username_Repositories_8280_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8280, filepath_Repositories_8280, id_Repositories_8280, limit_Repositories_8280, owner_Repositories_8280, page_Repositories_8280, repo_Repositories_8280, username_Repositories_8280, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PushMirrors
  let id_PushMirrors_8280 = id_Repositories_8280;
  let limit_PushMirrors_8280 = Math.floor(Math.random() * 1000);
  let name_PushMirrors_8280 = "name_PushMirrors_8280_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_8280 = "owner_PushMirrors_8280_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_8280 = Math.floor(Math.random() * 1000);
  let repo_PushMirrors_8280 = "repo_PushMirrors_8280_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_8280, limit_PushMirrors_8280, name_PushMirrors_8280, owner_PushMirrors_8280, page_PushMirrors_8280, repo_PushMirrors_8280, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PushMirrors
  repoDeletePushMirror(owner_PushMirrors_8280, repo_PushMirrors_8280, name_PushMirrors_8280, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_8280, repo_Repositories_8280, filepath_Repositories_8280, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_RepositoryTransfer", function () {
  // -> Creating Repositories
  let body_Repositories_8380 = {};
  let filepath_Repositories_8380 = "filepath_Repositories_8380_" + Math.floor(Math.random()*1000);
  let id_Repositories_8380 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8380 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8380 = "owner_Repositories_8380_" + Math.floor(Math.random()*1000);
  let page_Repositories_8380 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8380 = "repo_Repositories_8380_" + Math.floor(Math.random()*1000);
  let username_Repositories_8380 = "username_Repositories_8380_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8380, filepath_Repositories_8380, id_Repositories_8380, limit_Repositories_8380, owner_Repositories_8380, page_Repositories_8380, repo_Repositories_8380, username_Repositories_8380, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_8380 = {};
  let id_RepositoryTransfer_8380 = id_Repositories_8380;
  let owner_RepositoryTransfer_8380 = "owner_RepositoryTransfer_8380_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_8380 = "repo_RepositoryTransfer_8380_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_8380 = "transferOptions_RepositoryTransfer_8380_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_8380, id_RepositoryTransfer_8380, owner_RepositoryTransfer_8380, repo_RepositoryTransfer_8380, transferOptions_RepositoryTransfer_8380, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_8380, repo_Repositories_8380, filepath_Repositories_8380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_UserStarred", function () {
  // -> Creating Repositories
  let body_Repositories_8480 = {};
  let filepath_Repositories_8480 = "filepath_Repositories_8480_" + Math.floor(Math.random()*1000);
  let id_Repositories_8480 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8480 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8480 = "owner_Repositories_8480_" + Math.floor(Math.random()*1000);
  let page_Repositories_8480 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8480 = "repo_Repositories_8480_" + Math.floor(Math.random()*1000);
  let username_Repositories_8480 = "username_Repositories_8480_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8480, filepath_Repositories_8480, id_Repositories_8480, limit_Repositories_8480, owner_Repositories_8480, page_Repositories_8480, repo_Repositories_8480, username_Repositories_8480, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserStarred
  let limit_UserStarred_8480 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_8480 = "owner_UserStarred_8480_" + Math.floor(Math.random()*1000);
  let page_UserStarred_8480 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_8480 = "repo_UserStarred_8480_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_8480, owner_UserStarred_8480, page_UserStarred_8480, repo_UserStarred_8480, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_8480, repo_UserStarred_8480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_8480, repo_Repositories_8480, filepath_Repositories_8480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullRequests_PullReviewRequests", function () {
  // -> Creating Repositories
  let body_Repositories_8580 = {};
  let filepath_Repositories_8580 = "filepath_Repositories_8580_" + Math.floor(Math.random()*1000);
  let id_Repositories_8580 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8580 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8580 = "owner_Repositories_8580_" + Math.floor(Math.random()*1000);
  let page_Repositories_8580 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8580 = "repo_Repositories_8580_" + Math.floor(Math.random()*1000);
  let username_Repositories_8580 = "username_Repositories_8580_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8580, filepath_Repositories_8580, id_Repositories_8580, limit_Repositories_8580, owner_Repositories_8580, page_Repositories_8580, repo_Repositories_8580, username_Repositories_8580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_8580 = {};
  let id_Repository_8580 = id_Repositories_8580;
  let limit_Repository_8580 = Math.floor(Math.random() * 1000);
  let owner_Repository_8580 = "owner_Repository_8580_" + Math.floor(Math.random()*1000);
  let page_Repository_8580 = Math.floor(Math.random() * 1000);
  let repo_Repository_8580 = "repo_Repository_8580_" + Math.floor(Math.random()*1000);
  let sha_Repository_8580 = "sha_Repository_8580_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8580, id_Repository_8580, limit_Repository_8580, owner_Repository_8580, page_Repository_8580, repo_Repository_8580, sha_Repository_8580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8580 = {};
  let id_PullRequests_8580 = id_Repository_8580;
  let index_PullRequests_8580 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8580 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8580 = "owner_PullRequests_8580_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8580 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8580 = "repo_PullRequests_8580_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8580 = "skip-to_PullRequests_8580_" + Math.floor(Math.random()*1000);
  let style_PullRequests_8580 = "style_PullRequests_8580_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8580 = "whitespace_PullRequests_8580_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_8580, id_PullRequests_8580, index_PullRequests_8580, limit_PullRequests_8580, owner_PullRequests_8580, page_PullRequests_8580, repo_PullRequests_8580, skip_to_PullRequests_8580, style_PullRequests_8580, whitespace_PullRequests_8580, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewRequests
  let body_PullReviewRequests_8580 = {};
  let index_PullReviewRequests_8580 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_8580 = "owner_PullReviewRequests_8580_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_8580 = "repo_PullReviewRequests_8580_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_8580, index_PullReviewRequests_8580, owner_PullReviewRequests_8580, repo_PullReviewRequests_8580, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_8580, repo_PullReviewRequests_8580, index_PullReviewRequests_8580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_8580, repo_PullRequests_8580, index_PullRequests_8580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullRequests_PullReviews_PullReviewDismissals", function () {
  // -> Creating Repositories
  let body_Repositories_8680 = {};
  let filepath_Repositories_8680 = "filepath_Repositories_8680_" + Math.floor(Math.random()*1000);
  let id_Repositories_8680 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8680 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8680 = "owner_Repositories_8680_" + Math.floor(Math.random()*1000);
  let page_Repositories_8680 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8680 = "repo_Repositories_8680_" + Math.floor(Math.random()*1000);
  let username_Repositories_8680 = "username_Repositories_8680_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8680, filepath_Repositories_8680, id_Repositories_8680, limit_Repositories_8680, owner_Repositories_8680, page_Repositories_8680, repo_Repositories_8680, username_Repositories_8680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_8680 = {};
  let id_Repository_8680 = id_Repositories_8680;
  let limit_Repository_8680 = Math.floor(Math.random() * 1000);
  let owner_Repository_8680 = "owner_Repository_8680_" + Math.floor(Math.random()*1000);
  let page_Repository_8680 = Math.floor(Math.random() * 1000);
  let repo_Repository_8680 = "repo_Repository_8680_" + Math.floor(Math.random()*1000);
  let sha_Repository_8680 = "sha_Repository_8680_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8680, id_Repository_8680, limit_Repository_8680, owner_Repository_8680, page_Repository_8680, repo_Repository_8680, sha_Repository_8680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8680 = {};
  let id_PullRequests_8680 = id_Repository_8680;
  let index_PullRequests_8680 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8680 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8680 = "owner_PullRequests_8680_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8680 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8680 = "repo_PullRequests_8680_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8680 = "skip-to_PullRequests_8680_" + Math.floor(Math.random()*1000);
  let style_PullRequests_8680 = "style_PullRequests_8680_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8680 = "whitespace_PullRequests_8680_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_8680, id_PullRequests_8680, index_PullRequests_8680, limit_PullRequests_8680, owner_PullRequests_8680, page_PullRequests_8680, repo_PullRequests_8680, skip_to_PullRequests_8680, style_PullRequests_8680, whitespace_PullRequests_8680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_8680 = {};
  let id_PullReviews_8680 = id_PullRequests_8680;
  let index_PullReviews_8680 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_8680 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_8680 = "owner_PullReviews_8680_" + Math.floor(Math.random()*1000);
  let page_PullReviews_8680 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_8680 = "repo_PullReviews_8680_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_8680, id_PullReviews_8680, index_PullReviews_8680, limit_PullReviews_8680, owner_PullReviews_8680, page_PullReviews_8680, repo_PullReviews_8680, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_8680 = {};
  let id_PullReviewDismissals_8680 = id_PullReviews_8680;
  let index_PullReviewDismissals_8680 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_8680 = "owner_PullReviewDismissals_8680_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_8680 = "repo_PullReviewDismissals_8680_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_8680, id_PullReviewDismissals_8680, index_PullReviewDismissals_8680, owner_PullReviewDismissals_8680, repo_PullReviewDismissals_8680, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_8680, repo_PullReviews_8680, index_PullReviews_8680, id_PullReviews_8680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_8680, repo_PullRequests_8680, index_PullRequests_8680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullRequests_PullReviews_PullReviewUndismissals", function () {
  // -> Creating Repositories
  let body_Repositories_8780 = {};
  let filepath_Repositories_8780 = "filepath_Repositories_8780_" + Math.floor(Math.random()*1000);
  let id_Repositories_8780 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8780 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8780 = "owner_Repositories_8780_" + Math.floor(Math.random()*1000);
  let page_Repositories_8780 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8780 = "repo_Repositories_8780_" + Math.floor(Math.random()*1000);
  let username_Repositories_8780 = "username_Repositories_8780_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8780, filepath_Repositories_8780, id_Repositories_8780, limit_Repositories_8780, owner_Repositories_8780, page_Repositories_8780, repo_Repositories_8780, username_Repositories_8780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_8780 = {};
  let id_Repository_8780 = id_Repositories_8780;
  let limit_Repository_8780 = Math.floor(Math.random() * 1000);
  let owner_Repository_8780 = "owner_Repository_8780_" + Math.floor(Math.random()*1000);
  let page_Repository_8780 = Math.floor(Math.random() * 1000);
  let repo_Repository_8780 = "repo_Repository_8780_" + Math.floor(Math.random()*1000);
  let sha_Repository_8780 = "sha_Repository_8780_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8780, id_Repository_8780, limit_Repository_8780, owner_Repository_8780, page_Repository_8780, repo_Repository_8780, sha_Repository_8780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8780 = {};
  let id_PullRequests_8780 = id_Repository_8780;
  let index_PullRequests_8780 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8780 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8780 = "owner_PullRequests_8780_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8780 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8780 = "repo_PullRequests_8780_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8780 = "skip-to_PullRequests_8780_" + Math.floor(Math.random()*1000);
  let style_PullRequests_8780 = "style_PullRequests_8780_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8780 = "whitespace_PullRequests_8780_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_8780, id_PullRequests_8780, index_PullRequests_8780, limit_PullRequests_8780, owner_PullRequests_8780, page_PullRequests_8780, repo_PullRequests_8780, skip_to_PullRequests_8780, style_PullRequests_8780, whitespace_PullRequests_8780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_8780 = {};
  let id_PullReviews_8780 = id_PullRequests_8780;
  let index_PullReviews_8780 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_8780 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_8780 = "owner_PullReviews_8780_" + Math.floor(Math.random()*1000);
  let page_PullReviews_8780 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_8780 = "repo_PullReviews_8780_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_8780, id_PullReviews_8780, index_PullReviews_8780, limit_PullReviews_8780, owner_PullReviews_8780, page_PullReviews_8780, repo_PullReviews_8780, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_8780 = id_PullReviews_8780;
  let index_PullReviewUndismissals_8780 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_8780 = "owner_PullReviewUndismissals_8780_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_8780 = "repo_PullReviewUndismissals_8780_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_8780, index_PullReviewUndismissals_8780, owner_PullReviewUndismissals_8780, repo_PullReviewUndismissals_8780, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_8780, repo_PullReviews_8780, index_PullReviews_8780, id_PullReviews_8780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_8780, repo_PullRequests_8780, index_PullRequests_8780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullReviews_PullReviewDismissals", function () {
  // -> Creating Repositories
  let body_Repositories_8880 = {};
  let filepath_Repositories_8880 = "filepath_Repositories_8880_" + Math.floor(Math.random()*1000);
  let id_Repositories_8880 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8880 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8880 = "owner_Repositories_8880_" + Math.floor(Math.random()*1000);
  let page_Repositories_8880 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8880 = "repo_Repositories_8880_" + Math.floor(Math.random()*1000);
  let username_Repositories_8880 = "username_Repositories_8880_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8880, filepath_Repositories_8880, id_Repositories_8880, limit_Repositories_8880, owner_Repositories_8880, page_Repositories_8880, repo_Repositories_8880, username_Repositories_8880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_8880 = {};
  let id_Repository_8880 = id_Repositories_8880;
  let limit_Repository_8880 = Math.floor(Math.random() * 1000);
  let owner_Repository_8880 = "owner_Repository_8880_" + Math.floor(Math.random()*1000);
  let page_Repository_8880 = Math.floor(Math.random() * 1000);
  let repo_Repository_8880 = "repo_Repository_8880_" + Math.floor(Math.random()*1000);
  let sha_Repository_8880 = "sha_Repository_8880_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8880, id_Repository_8880, limit_Repository_8880, owner_Repository_8880, page_Repository_8880, repo_Repository_8880, sha_Repository_8880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8880 = {};
  let id_PullRequests_8880 = id_Repository_8880;
  let index_PullRequests_8880 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8880 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8880 = "owner_PullRequests_8880_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8880 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8880 = "repo_PullRequests_8880_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8880 = "skip-to_PullRequests_8880_" + Math.floor(Math.random()*1000);
  let style_PullRequests_8880 = "style_PullRequests_8880_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8880 = "whitespace_PullRequests_8880_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_8880, id_PullRequests_8880, index_PullRequests_8880, limit_PullRequests_8880, owner_PullRequests_8880, page_PullRequests_8880, repo_PullRequests_8880, skip_to_PullRequests_8880, style_PullRequests_8880, whitespace_PullRequests_8880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_8880 = {};
  let id_PullReviews_8880 = id_PullRequests_8880;
  let index_PullReviews_8880 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_8880 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_8880 = "owner_PullReviews_8880_" + Math.floor(Math.random()*1000);
  let page_PullReviews_8880 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_8880 = "repo_PullReviews_8880_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_8880, id_PullReviews_8880, index_PullReviews_8880, limit_PullReviews_8880, owner_PullReviews_8880, page_PullReviews_8880, repo_PullReviews_8880, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_8880 = {};
  let id_PullReviewDismissals_8880 = id_PullReviews_8880;
  let index_PullReviewDismissals_8880 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_8880 = "owner_PullReviewDismissals_8880_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_8880 = "repo_PullReviewDismissals_8880_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_8880, id_PullReviewDismissals_8880, index_PullReviewDismissals_8880, owner_PullReviewDismissals_8880, repo_PullReviewDismissals_8880, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_8880, repo_PullReviews_8880, index_PullReviews_8880, id_PullReviews_8880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullReviews_PullReviewUndismissals", function () {
  // -> Creating Repositories
  let body_Repositories_8980 = {};
  let filepath_Repositories_8980 = "filepath_Repositories_8980_" + Math.floor(Math.random()*1000);
  let id_Repositories_8980 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8980 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8980 = "owner_Repositories_8980_" + Math.floor(Math.random()*1000);
  let page_Repositories_8980 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8980 = "repo_Repositories_8980_" + Math.floor(Math.random()*1000);
  let username_Repositories_8980 = "username_Repositories_8980_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_8980, filepath_Repositories_8980, id_Repositories_8980, limit_Repositories_8980, owner_Repositories_8980, page_Repositories_8980, repo_Repositories_8980, username_Repositories_8980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_8980 = {};
  let id_Repository_8980 = id_Repositories_8980;
  let limit_Repository_8980 = Math.floor(Math.random() * 1000);
  let owner_Repository_8980 = "owner_Repository_8980_" + Math.floor(Math.random()*1000);
  let page_Repository_8980 = Math.floor(Math.random() * 1000);
  let repo_Repository_8980 = "repo_Repository_8980_" + Math.floor(Math.random()*1000);
  let sha_Repository_8980 = "sha_Repository_8980_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8980, id_Repository_8980, limit_Repository_8980, owner_Repository_8980, page_Repository_8980, repo_Repository_8980, sha_Repository_8980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8980 = {};
  let id_PullRequests_8980 = id_Repository_8980;
  let index_PullRequests_8980 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8980 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8980 = "owner_PullRequests_8980_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8980 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8980 = "repo_PullRequests_8980_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8980 = "skip-to_PullRequests_8980_" + Math.floor(Math.random()*1000);
  let style_PullRequests_8980 = "style_PullRequests_8980_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8980 = "whitespace_PullRequests_8980_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(body_PullRequests_8980, id_PullRequests_8980, index_PullRequests_8980, limit_PullRequests_8980, owner_PullRequests_8980, page_PullRequests_8980, repo_PullRequests_8980, skip_to_PullRequests_8980, style_PullRequests_8980, whitespace_PullRequests_8980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_8980 = {};
  let id_PullReviews_8980 = id_PullRequests_8980;
  let index_PullReviews_8980 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_8980 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_8980 = "owner_PullReviews_8980_" + Math.floor(Math.random()*1000);
  let page_PullReviews_8980 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_8980 = "repo_PullReviews_8980_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_8980, id_PullReviews_8980, index_PullReviews_8980, limit_PullReviews_8980, owner_PullReviews_8980, page_PullReviews_8980, repo_PullReviews_8980, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_8980 = id_PullReviews_8980;
  let index_PullReviewUndismissals_8980 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_8980 = "owner_PullReviewUndismissals_8980_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_8980 = "repo_PullReviewUndismissals_8980_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_8980, index_PullReviewUndismissals_8980, owner_PullReviewUndismissals_8980, repo_PullReviewUndismissals_8980, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_8980, repo_PullReviews_8980, index_PullReviews_8980, id_PullReviews_8980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Releases_ReleaseAttachments", function () {
  // -> Creating Repositories
  let body_Repositories_9080 = {};
  let filepath_Repositories_9080 = "filepath_Repositories_9080_" + Math.floor(Math.random()*1000);
  let id_Repositories_9080 = Math.floor(Math.random() * 1000);
  let limit_Repositories_9080 = Math.floor(Math.random() * 1000);
  let owner_Repositories_9080 = "owner_Repositories_9080_" + Math.floor(Math.random()*1000);
  let page_Repositories_9080 = Math.floor(Math.random() * 1000);
  let repo_Repositories_9080 = "repo_Repositories_9080_" + Math.floor(Math.random()*1000);
  let username_Repositories_9080 = "username_Repositories_9080_" + Math.floor(Math.random()*1000);
  createCurrentUserRepo(body_Repositories_9080, filepath_Repositories_9080, id_Repositories_9080, limit_Repositories_9080, owner_Repositories_9080, page_Repositories_9080, repo_Repositories_9080, username_Repositories_9080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repository
  let body_Repository_9080 = {};
  let id_Repository_9080 = id_Repositories_9080;
  let limit_Repository_9080 = Math.floor(Math.random() * 1000);
  let owner_Repository_9080 = "owner_Repository_9080_" + Math.floor(Math.random()*1000);
  let page_Repository_9080 = Math.floor(Math.random() * 1000);
  let repo_Repository_9080 = "repo_Repository_9080_" + Math.floor(Math.random()*1000);
  let sha_Repository_9080 = "sha_Repository_9080_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_9080, id_Repository_9080, limit_Repository_9080, owner_Repository_9080, page_Repository_9080, repo_Repository_9080, sha_Repository_9080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Releases
  let body_Releases_9080 = {};
  let draft_Releases_9080 = true;
  let id_Releases_9080 = id_Repository_9080;
  let limit_Releases_9080 = Math.floor(Math.random() * 1000);
  let owner_Releases_9080 = "owner_Releases_9080_" + Math.floor(Math.random()*1000);
  let page_Releases_9080 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_9080 = true;
  let repo_Releases_9080 = "repo_Releases_9080_" + Math.floor(Math.random()*1000);
  let tag_Releases_9080 = "tag_Releases_9080_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_9080, draft_Releases_9080, id_Releases_9080, limit_Releases_9080, owner_Releases_9080, page_Releases_9080, pre_release_Releases_9080, repo_Releases_9080, tag_Releases_9080, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_9080 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_9080 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_9080 = {};
  let id_ReleaseAttachments_9080 = id_Releases_9080;
  let name_ReleaseAttachments_9080 = "name_ReleaseAttachments_9080_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_9080 = "owner_ReleaseAttachments_9080_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_9080 = "repo_ReleaseAttachments_9080_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_9080, attachment_id_ReleaseAttachments_9080, body_ReleaseAttachments_9080, id_ReleaseAttachments_9080, name_ReleaseAttachments_9080, owner_ReleaseAttachments_9080, repo_ReleaseAttachments_9080, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_9080, repo_ReleaseAttachments_9080, id_ReleaseAttachments_9080, attachment_id_ReleaseAttachments_9080, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Releases
  repoDeleteReleaseByTag(owner_Releases_9080, repo_Releases_9080, tag_Releases_9080, { expectedResponseCodes: [200, 201, 204] });

});
