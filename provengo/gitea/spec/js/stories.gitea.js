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
    let targetId = (e.data["user-id"] !== undefined) ? e.data["user-id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyActivityPubExists(targetId);
  }
});

bthread("monitor:AdminCron:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAdminCronAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyAdminCronExists(targetId);
  }
});

bthread("monitor:Hooks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyHooksAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedHooks(), function() { verifyHooksExists(targetId); });
  }
});

bthread("monitor:UnadoptedRepositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUnadoptedRepositoriesAdded() });
    let targetId = (e.data["owner"] !== undefined) ? e.data["owner"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedUnadoptedRepositories(), function() { verifyUnadoptedRepositoriesExists(targetId); });
  }
});

bthread("monitor:Users:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let targetId = (e.data["username"] !== undefined) ? e.data["username"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedUsers(), function() { verifyUsersExists(targetId); });
  }
});

bthread("monitor:UserBadges:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserBadgesAdded() });
    let targetId = (e.data["username"] !== undefined) ? e.data["username"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedUserBadges(), function() { verifyUserBadgesExists(targetId); });
  }
});

bthread("monitor:UserKeys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserKeysAdded() });
    let targetId = (e.data["username"] !== undefined) ? e.data["username"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedUserKeys(), function() { verifyUserKeysExists(targetId); });
  }
});

bthread("monitor:UserOrganizations:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserOrganizationsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyUserOrganizationsExists(targetId);
  }
});

bthread("monitor:UserRename:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserRenameAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyUserRenameExists(targetId);
  }
});

bthread("monitor:UserRepositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserRepositoriesAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyUserRepositoriesExists(targetId);
  }
});

bthread("monitor:Markdown:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMarkdownAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyMarkdownExists(targetId);
  }
});

bthread("monitor:Markup:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMarkupAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyMarkupExists(targetId);
  }
});

bthread("monitor:Organization:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationAdded() });
    let targetId = (e.data["org"] !== undefined) ? e.data["org"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedOrganization(), function() { verifyOrganizationExists(targetId); });
  }
});

bthread("monitor:OrgVariables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrgVariablesAdded() });
    let targetId = (e.data["org"] !== undefined) ? e.data["org"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedOrgVariables(), function() { verifyOrgVariablesExists(targetId); });
  }
});

bthread("monitor:Avatar:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAvatarAdded() });
    let targetId = (e.data["org"] !== undefined) ? e.data["org"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedAvatar(), function() { verifyAvatarExists(targetId); });
  }
});

bthread("monitor:Labels:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLabelsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedLabels(), function() { verifyLabelsExists(targetId); });
  }
});

bthread("monitor:OrganizationRepos:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationReposAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyOrganizationReposExists(targetId);
  }
});

bthread("monitor:OrganizationTeams:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationTeamsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyOrganizationTeamsExists(targetId);
  }
});

bthread("monitor:Issues:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssuesAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedIssues(), function() { verifyIssuesExists(targetId); });
  }
});

bthread("monitor:Repository:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedRepository(), function() { verifyRepositoryExists(targetId); });
  }
});

bthread("monitor:Variables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyVariablesAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedVariables(), function() { verifyVariablesExists(targetId); });
  }
});

bthread("monitor:Branches:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBranchesAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedBranches(), function() { verifyBranchesExists(targetId); });
  }
});

bthread("monitor:Collaborators:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCollaboratorsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedCollaborators(), function() { verifyCollaboratorsExists(targetId); });
  }
});

bthread("monitor:Repositories:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoriesAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedRepositories(), function() { verifyRepositoriesExists(targetId); });
  }
});

bthread("monitor:Forks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyForksAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyForksExists(targetId);
  }
});

bthread("monitor:IssueCommentAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentAttachmentsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedIssueCommentAttachments(), function() { verifyIssueCommentAttachmentsExists(targetId); });
  }
});

bthread("monitor:IssueCommentReactions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentReactionsAdded() });
    let targetId = (e.data["owner"] !== undefined) ? e.data["owner"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedIssueCommentReactions(), function() { verifyIssueCommentReactionsExists(targetId); });
  }
});

bthread("monitor:IssueAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAttachmentsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedIssueAttachments(), function() { verifyIssueAttachmentsExists(targetId); });
  }
});

bthread("monitor:IssueBlocks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueBlocksAdded() });
    let targetId = (e.data["owner"] !== undefined) ? e.data["owner"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedIssueBlocks(), function() { verifyIssueBlocksExists(targetId); });
  }
});

bthread("monitor:IssueComments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueCommentsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedIssueComments(), function() { verifyIssueCommentsExists(targetId); });
  }
});

bthread("monitor:IssueSubscriptions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueSubscriptionsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedIssueSubscriptions(), function() { verifyIssueSubscriptionsExists(targetId); });
  }
});

bthread("monitor:IssueTimes:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueTimesAdded() });
    let targetId = (e.data["owner"] !== undefined) ? e.data["owner"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedIssueTimes(), function() { verifyIssueTimesExists(targetId); });
  }
});

bthread("monitor:RepositoryKeys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryKeysAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedRepositoryKeys(), function() { verifyRepositoryKeysExists(targetId); });
  }
});

bthread("monitor:Issue:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyIssueAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyIssueExists(targetId);
  }
});

bthread("monitor:MirrorSync:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMirrorSyncAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyMirrorSyncExists(targetId);
  }
});

bthread("monitor:PullRequests:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullRequestsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedPullRequests(), function() { verifyPullRequestsExists(targetId); });
  }
});

bthread("monitor:PullReviewRequests:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewRequestsAdded() });
    let targetId = (e.data["owner"] !== undefined) ? e.data["owner"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedPullReviewRequests(), function() { verifyPullReviewRequestsExists(targetId); });
  }
});

bthread("monitor:PullReviews:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedPullReviews(), function() { verifyPullReviewsExists(targetId); });
  }
});

bthread("monitor:PullReviewDismissals:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewDismissalsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyPullReviewDismissalsExists(targetId);
  }
});

bthread("monitor:PullReviewUndismissals:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullReviewUndismissalsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyPullReviewUndismissalsExists(targetId);
  }
});

bthread("monitor:PullRequestUpdate:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPullRequestUpdateAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyPullRequestUpdateExists(targetId);
  }
});

bthread("monitor:PushMirrors:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPushMirrorsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedPushMirrors(), function() { verifyPushMirrorsExists(targetId); });
  }
});

bthread("monitor:Releases:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleasesAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedReleases(), function() { verifyReleasesExists(targetId); });
  }
});

bthread("monitor:ReleaseAttachments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyReleaseAttachmentsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedReleaseAttachments(), function() { verifyReleaseAttachmentsExists(targetId); });
  }
});

bthread("monitor:TagProtections:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTagProtectionsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedTagProtections(), function() { verifyTagProtectionsExists(targetId); });
  }
});

bthread("monitor:Tags:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTagsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedTags(), function() { verifyTagsExists(targetId); });
  }
});

bthread("monitor:Topics:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTopicsAdded() });
    let targetId = (e.data["owner"] !== undefined) ? e.data["owner"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedTopics(), function() { verifyTopicsExists(targetId); });
  }
});

bthread("monitor:RepositoryTransfer:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepositoryTransferAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyRepositoryTransferExists(targetId);
  }
});

bthread("monitor:WikiPage:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWikiPageAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedWikiPage(), function() { verifyWikiPageExists(targetId); });
  }
});

bthread("monitor:TeamMembers:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamMembersAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedTeamMembers(), function() { verifyTeamMembersExists(targetId); });
  }
});

bthread("monitor:TeamRepos:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTeamReposAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedTeamRepos(), function() { verifyTeamReposExists(targetId); });
  }
});

bthread("monitor:UserVariables:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserVariablesAdded() });
    let targetId = (e.data["variablename"] !== undefined) ? e.data["variablename"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedUserVariables(), function() { verifyUserVariablesExists(targetId); });
  }
});

bthread("monitor:OAuth2Applications:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOAuth2ApplicationsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedOAuth2Applications(), function() { verifyOAuth2ApplicationsExists(targetId); });
  }
});

bthread("monitor:UserAvatar:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserAvatarAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedUserAvatar(), function() { verifyUserAvatarExists(targetId); });
  }
});

bthread("monitor:UserEmails:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserEmailsAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedUserEmails(), function() { verifyUserEmailsExists(targetId); });
  }
});

bthread("monitor:GPGKeys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGPGKeysAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedGPGKeys(), function() { verifyGPGKeysExists(targetId); });
  }
});

bthread("monitor:GPGKeyVerification:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGPGKeyVerificationAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    verifyGPGKeyVerificationExists(targetId);
  }
});

bthread("monitor:Keys:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyKeysAdded() });
    let targetId = (e.data["id"] !== undefined) ? e.data["id"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
    block(matchDeletedKeys(), function() { verifyKeysExists(targetId); });
  }
});

bthread("monitor:UserStarred:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserStarredAdded() });
    let targetId = (e.data["owner"] !== undefined) ? e.data["owner"] : (e.data["id"] !== undefined ? e.data["id"] : (e.data["index"] !== undefined ? e.data["index"] : e.data["number"]));
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
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
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
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
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
  let EditUserOption_Users_140 = "EditUserOption_Users_140_" + Math.floor(Math.random()*1000);
  let body_Users_140 = {};
  let limit_Users_140 = Math.floor(Math.random() * 1000);
  let page_Users_140 = Math.floor(Math.random() * 1000);
  let token_Users_140 = "token_Users_140_" + Math.floor(Math.random()*1000);
  let username_Users_140 = "username_Users_140_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_140, body_Users_140, limit_Users_140, page_Users_140, token_Users_140, username_Users_140, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let EditUserOption_Users_upd_140 = "EditUserOption_Users_upd_140_" + Math.floor(Math.random()*1000);
  let body_Users_upd_140 = {};
  let limit_Users_upd_140 = Math.floor(Math.random() * 1000);
  let page_Users_upd_140 = Math.floor(Math.random() * 1000);
  let token_Users_upd_140 = "token_Users_upd_140_" + Math.floor(Math.random()*1000);
  let username_Users_upd_140 = username_Users_140;
  adminEditUser(EditUserOption_Users_upd_140, body_Users_upd_140, limit_Users_upd_140, page_Users_upd_140, token_Users_upd_140, username_Users_upd_140, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserBadges:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_150 = "UserBadgeOption_UserBadges_150_" + Math.floor(Math.random()*1000);
  let body_UserBadges_150 = {};
  let username_UserBadges_150 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_150, body_UserBadges_150, username_UserBadges_150, { expectedResponseCodes: [200, 201, 204] });

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
  // -> Creating Organization
  let body_Organization_220 = {};
  let limit_Organization_220 = Math.floor(Math.random() * 1000);
  let org_Organization_220 = "org_Organization_220_" + Math.floor(Math.random()*1000);
  let organization_Organization_220 = {};
  let page_Organization_220 = Math.floor(Math.random() * 1000);
  let secretname_Organization_220 = "secretname_Organization_220_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_220, limit_Organization_220, org_Organization_220, organization_Organization_220, page_Organization_220, secretname_Organization_220, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Organization
  let body_Organization_upd_220 = {};
  let limit_Organization_upd_220 = Math.floor(Math.random() * 1000);
  let org_Organization_upd_220 = org_Organization_220;
  let organization_Organization_upd_220 = {};
  let page_Organization_upd_220 = Math.floor(Math.random() * 1000);
  let secretname_Organization_upd_220 = "secretname_Organization_upd_220_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_220, limit_Organization_upd_220, org_Organization_upd_220, organization_Organization_upd_220, page_Organization_upd_220, secretname_Organization_upd_220, { expectedResponseCodes: [200, 201, 204] });

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

  // -> Updating OrgVariables
  let body_OrgVariables_upd_230 = "body_OrgVariables_upd_230_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_upd_230 = org_OrgVariables_230;
  let variablename_OrgVariables_upd_230 = "variablename_OrgVariables_upd_230_" + Math.floor(Math.random()*1000);
  orgEdit(body_OrgVariables_upd_230, org_OrgVariables_upd_230, variablename_OrgVariables_upd_230, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OrgVariables
  orgDelete(org_OrgVariables_230, { expectedResponseCodes: [200, 201, 204] });

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
  // -> Creating Repository
  let body_Repository_290 = {};
  let id_Repository_290 = "id_Repository_290_" + Math.floor(Math.random()*1000);
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

bthread("crud:Variables:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Variables
  let CreateVariableOption_Variables_300 = "CreateVariableOption_Variables_300_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_300 = "UpdateVariableOption_Variables_300_" + Math.floor(Math.random()*1000);
  let body_Variables_300 = {};
  let id_Variables_300 = RepositoryId;
  let limit_Variables_300 = Math.floor(Math.random() * 1000);
  let owner_Variables_300 = "owner_Variables_300_" + Math.floor(Math.random()*1000);
  let page_Variables_300 = Math.floor(Math.random() * 1000);
  let repo_Variables_300 = "repo_Variables_300_" + Math.floor(Math.random()*1000);
  let variablename_Variables_300 = "variablename_Variables_300_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_300, UpdateVariableOption_Variables_300, body_Variables_300, id_Variables_300, limit_Variables_300, owner_Variables_300, page_Variables_300, repo_Variables_300, variablename_Variables_300, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Variables
  let CreateVariableOption_Variables_upd_300 = "CreateVariableOption_Variables_upd_300_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_300 = "UpdateVariableOption_Variables_upd_300_" + Math.floor(Math.random()*1000);
  let body_Variables_upd_300 = {};
  let id_Variables_upd_300 = id_Variables_300;
  let limit_Variables_upd_300 = Math.floor(Math.random() * 1000);
  let owner_Variables_upd_300 = "owner_Variables_upd_300_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_300 = Math.floor(Math.random() * 1000);
  let repo_Variables_upd_300 = "repo_Variables_upd_300_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_300 = "variablename_Variables_upd_300_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_300, UpdateVariableOption_Variables_upd_300, body_Variables_upd_300, id_Variables_upd_300, limit_Variables_upd_300, owner_Variables_upd_300, page_Variables_upd_300, repo_Variables_upd_300, variablename_Variables_upd_300, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Variables
  deleteRepoVariable(owner_Variables_300, repo_Variables_300, variablename_Variables_300, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Branches:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let body_Branches_310 = {};
  let branch_Branches_310 = "branch_Branches_310_" + Math.floor(Math.random()*1000);
  let id_Branches_310 = RepositoryId;
  let limit_Branches_310 = Math.floor(Math.random() * 1000);
  let owner_Branches_310 = "owner_Branches_310_" + Math.floor(Math.random()*1000);
  let page_Branches_310 = Math.floor(Math.random() * 1000);
  let repo_Branches_310 = "repo_Branches_310_" + Math.floor(Math.random()*1000);
  repoCreateBranch(body_Branches_310, branch_Branches_310, id_Branches_310, limit_Branches_310, owner_Branches_310, page_Branches_310, repo_Branches_310, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Branches
  let body_Branches_upd_310 = {};
  let branch_Branches_upd_310 = "branch_Branches_upd_310_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_310 = id_Branches_310;
  let limit_Branches_upd_310 = Math.floor(Math.random() * 1000);
  let owner_Branches_upd_310 = "owner_Branches_upd_310_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_310 = Math.floor(Math.random() * 1000);
  let repo_Branches_upd_310 = "repo_Branches_upd_310_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(body_Branches_upd_310, branch_Branches_upd_310, id_Branches_upd_310, limit_Branches_upd_310, owner_Branches_upd_310, page_Branches_upd_310, repo_Branches_upd_310, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_310, repo_Branches_310, branch_Branches_310, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Collaborators:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let body_Collaborators_320 = {};
  let collaborator_Collaborators_320 = "collaborator_Collaborators_320_" + Math.floor(Math.random()*1000);
  let id_Collaborators_320 = RepositoryId;
  let limit_Collaborators_320 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_320 = "owner_Collaborators_320_" + Math.floor(Math.random()*1000);
  let page_Collaborators_320 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_320 = "repo_Collaborators_320_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(body_Collaborators_320, collaborator_Collaborators_320, id_Collaborators_320, limit_Collaborators_320, owner_Collaborators_320, page_Collaborators_320, repo_Collaborators_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_320, repo_Collaborators_320, collaborator_Collaborators_320, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repositories:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repositories
  let body_Repositories_330 = {};
  let filepath_Repositories_330 = "filepath_Repositories_330_" + Math.floor(Math.random()*1000);
  let id_Repositories_330 = Math.floor(Math.random() * 1000);
  let limit_Repositories_330 = Math.floor(Math.random() * 1000);
  let owner_Repositories_330 = "owner_Repositories_330_" + Math.floor(Math.random()*1000);
  let page_Repositories_330 = Math.floor(Math.random() * 1000);
  let repo_Repositories_330 = "repo_Repositories_330_" + Math.floor(Math.random()*1000);
  let username_Repositories_330 = UsersId;
  createCurrentUserRepo(body_Repositories_330, filepath_Repositories_330, id_Repositories_330, limit_Repositories_330, owner_Repositories_330, page_Repositories_330, repo_Repositories_330, username_Repositories_330, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repositories
  let body_Repositories_upd_330 = {};
  let filepath_Repositories_upd_330 = "filepath_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_330 = id_Repositories_330;
  let limit_Repositories_upd_330 = Math.floor(Math.random() * 1000);
  let owner_Repositories_upd_330 = "owner_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_330 = Math.floor(Math.random() * 1000);
  let repo_Repositories_upd_330 = "repo_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_330 = "username_Repositories_upd_330_" + Math.floor(Math.random()*1000);
  repoUpdateFile(body_Repositories_upd_330, filepath_Repositories_upd_330, id_Repositories_upd_330, limit_Repositories_upd_330, owner_Repositories_upd_330, page_Repositories_upd_330, repo_Repositories_upd_330, username_Repositories_upd_330, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Forks:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_340 = {};
  let id_Forks_340 = RepositoryId;
  let limit_Forks_340 = Math.floor(Math.random() * 1000);
  let owner_Forks_340 = "owner_Forks_340_" + Math.floor(Math.random()*1000);
  let page_Forks_340 = Math.floor(Math.random() * 1000);
  let repo_Forks_340 = "repo_Forks_340_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_340, id_Forks_340, limit_Forks_340, owner_Forks_340, page_Forks_340, repo_Forks_340, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentAttachments:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repository": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
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
  deps["Repository"] = matchAnyRepositoryAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repository": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
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

bthread("crud:RepositoryKeys:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_420 = {};
  let fingerprint_RepositoryKeys_420 = "fingerprint_RepositoryKeys_420_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_420 = RepositoryId;
  let key_RepositoryKeys_420 = "key_RepositoryKeys_420_" + Math.floor(Math.random()*1000);
  let key_id_RepositoryKeys_420 = Math.floor(Math.random() * 1000);
  let limit_RepositoryKeys_420 = Math.floor(Math.random() * 1000);
  let owner_RepositoryKeys_420 = "owner_RepositoryKeys_420_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_420 = Math.floor(Math.random() * 1000);
  let read_only_RepositoryKeys_420 = "read_only_RepositoryKeys_420_" + Math.floor(Math.random()*1000);
  let repo_RepositoryKeys_420 = "repo_RepositoryKeys_420_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_420, fingerprint_RepositoryKeys_420, id_RepositoryKeys_420, key_RepositoryKeys_420, key_id_RepositoryKeys_420, limit_RepositoryKeys_420, owner_RepositoryKeys_420, page_RepositoryKeys_420, read_only_RepositoryKeys_420, repo_RepositoryKeys_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting RepositoryKeys
  repoDeleteKey(owner_RepositoryKeys_420, repo_RepositoryKeys_420, id_RepositoryKeys_420, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issue:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issue
  let body_Issue_430 = {};
  let id_Issue_430 = RepositoryId;
  let limit_Issue_430 = Math.floor(Math.random() * 1000);
  let name_Issue_430 = "name_Issue_430_" + Math.floor(Math.random()*1000);
  let owner_Issue_430 = "owner_Issue_430_" + Math.floor(Math.random()*1000);
  let page_Issue_430 = Math.floor(Math.random() * 1000);
  let repo_Issue_430 = "repo_Issue_430_" + Math.floor(Math.random()*1000);
  let state_Issue_430 = "state_Issue_430_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_430, id_Issue_430, limit_Issue_430, name_Issue_430, owner_Issue_430, page_Issue_430, repo_Issue_430, state_Issue_430, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:PullRequests:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_450 = {};
  let id_PullRequests_450 = RepositoryId;
  let index_PullRequests_450 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_450 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_450 = "owner_PullRequests_450_" + Math.floor(Math.random()*1000);
  let page_PullRequests_450 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_450 = "repo_PullRequests_450_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_450 = "skip-to_PullRequests_450_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_450 = "whitespace_PullRequests_450_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_450, id_PullRequests_450, index_PullRequests_450, limit_PullRequests_450, owner_PullRequests_450, page_PullRequests_450, repo_PullRequests_450, skip_to_PullRequests_450, whitespace_PullRequests_450, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating PullRequests
  let body_PullRequests_upd_450 = {};
  let id_PullRequests_upd_450 = id_PullRequests_450;
  let index_PullRequests_upd_450 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_upd_450 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_upd_450 = "owner_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_450 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_upd_450 = "repo_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_450 = "skip-to_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_450 = "whitespace_PullRequests_upd_450_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_450, id_PullRequests_upd_450, index_PullRequests_upd_450, limit_PullRequests_upd_450, owner_PullRequests_upd_450, page_PullRequests_upd_450, repo_PullRequests_upd_450, skip_to_PullRequests_upd_450, whitespace_PullRequests_upd_450, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewRequests:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_460 = {};
  let index_PullReviewRequests_460 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_460 = "owner_PullReviewRequests_460_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_460 = "repo_PullReviewRequests_460_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_460, index_PullReviewRequests_460, owner_PullReviewRequests_460, repo_PullReviewRequests_460, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_460, repo_PullReviewRequests_460, index_PullReviewRequests_460, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviews:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_470 = {};
  let id_PullReviews_470 = PullRequestsId;
  let index_PullReviews_470 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_470 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_470 = "owner_PullReviews_470_" + Math.floor(Math.random()*1000);
  let page_PullReviews_470 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_470 = "repo_PullReviews_470_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_470, id_PullReviews_470, index_PullReviews_470, limit_PullReviews_470, owner_PullReviews_470, page_PullReviews_470, repo_PullReviews_470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_470, repo_PullReviews_470, index_PullReviews_470, id_PullReviews_470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewDismissals:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_480 = {};
  let id_PullReviewDismissals_480 = PullRequestsId;
  let index_PullReviewDismissals_480 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_480 = "owner_PullReviewDismissals_480_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_480 = "repo_PullReviewDismissals_480_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_480, id_PullReviewDismissals_480, index_PullReviewDismissals_480, owner_PullReviewDismissals_480, repo_PullReviewDismissals_480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewUndismissals:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_490 = PullRequestsId;
  let index_PullReviewUndismissals_490 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_490 = "owner_PullReviewUndismissals_490_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_490 = "repo_PullReviewUndismissals_490_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_490, index_PullReviewUndismissals_490, owner_PullReviewUndismissals_490, repo_PullReviewUndismissals_490, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullRequestUpdate:linear:1", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullRequestUpdate
  let id_PullRequestUpdate_500 = PullRequestsId;
  let index_PullRequestUpdate_500 = Math.floor(Math.random() * 1000);
  let owner_PullRequestUpdate_500 = "owner_PullRequestUpdate_500_" + Math.floor(Math.random()*1000);
  let repo_PullRequestUpdate_500 = "repo_PullRequestUpdate_500_" + Math.floor(Math.random()*1000);
  let style_PullRequestUpdate_500 = "style_PullRequestUpdate_500_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(id_PullRequestUpdate_500, index_PullRequestUpdate_500, owner_PullRequestUpdate_500, repo_PullRequestUpdate_500, style_PullRequestUpdate_500, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PushMirrors:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PushMirrors
  let id_PushMirrors_510 = RepositoryId;
  let limit_PushMirrors_510 = Math.floor(Math.random() * 1000);
  let name_PushMirrors_510 = "name_PushMirrors_510_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_510 = "owner_PushMirrors_510_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_510 = Math.floor(Math.random() * 1000);
  let repo_PushMirrors_510 = "repo_PushMirrors_510_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_510, limit_PushMirrors_510, name_PushMirrors_510, owner_PushMirrors_510, page_PushMirrors_510, repo_PushMirrors_510, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PushMirrors
  repoDeletePushMirror(owner_PushMirrors_510, repo_PushMirrors_510, name_PushMirrors_510, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Releases:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_520 = {};
  let draft_Releases_520 = true;
  let id_Releases_520 = RepositoryId;
  let limit_Releases_520 = Math.floor(Math.random() * 1000);
  let owner_Releases_520 = "owner_Releases_520_" + Math.floor(Math.random()*1000);
  let page_Releases_520 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_520 = true;
  let repo_Releases_520 = "repo_Releases_520_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_520, draft_Releases_520, id_Releases_520, limit_Releases_520, owner_Releases_520, page_Releases_520, pre_release_Releases_520, repo_Releases_520, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Releases
  let body_Releases_upd_520 = {};
  let draft_Releases_upd_520 = true;
  let id_Releases_upd_520 = id_Releases_520;
  let limit_Releases_upd_520 = Math.floor(Math.random() * 1000);
  let owner_Releases_upd_520 = "owner_Releases_upd_520_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_520 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_upd_520 = true;
  let repo_Releases_upd_520 = "repo_Releases_upd_520_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_520, draft_Releases_upd_520, id_Releases_upd_520, limit_Releases_upd_520, owner_Releases_upd_520, page_Releases_upd_520, pre_release_Releases_upd_520, repo_Releases_upd_520, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:ReleaseAttachments:linear:1", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_530 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_530 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_530 = {};
  let id_ReleaseAttachments_530 = ReleasesId;
  let name_ReleaseAttachments_530 = "name_ReleaseAttachments_530_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_530 = "owner_ReleaseAttachments_530_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_530 = "repo_ReleaseAttachments_530_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_530, attachment_id_ReleaseAttachments_530, body_ReleaseAttachments_530, id_ReleaseAttachments_530, name_ReleaseAttachments_530, owner_ReleaseAttachments_530, repo_ReleaseAttachments_530, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_530 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_530 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_upd_530 = {};
  let id_ReleaseAttachments_upd_530 = id_ReleaseAttachments_530;
  let name_ReleaseAttachments_upd_530 = "name_ReleaseAttachments_upd_530_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_530 = "owner_ReleaseAttachments_upd_530_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_530 = "repo_ReleaseAttachments_upd_530_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_530, attachment_id_ReleaseAttachments_upd_530, body_ReleaseAttachments_upd_530, id_ReleaseAttachments_upd_530, name_ReleaseAttachments_upd_530, owner_ReleaseAttachments_upd_530, repo_ReleaseAttachments_upd_530, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_530, repo_ReleaseAttachments_530, id_ReleaseAttachments_530, attachment_id_ReleaseAttachments_530, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TagProtections:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_540 = {};
  let id_TagProtections_540 = RepositoryId;
  let owner_TagProtections_540 = "owner_TagProtections_540_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_540 = "repo_TagProtections_540_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_540, id_TagProtections_540, owner_TagProtections_540, repo_TagProtections_540, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating TagProtections
  let body_TagProtections_upd_540 = {};
  let id_TagProtections_upd_540 = id_TagProtections_540;
  let owner_TagProtections_upd_540 = "owner_TagProtections_upd_540_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_540 = "repo_TagProtections_upd_540_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_540, id_TagProtections_upd_540, owner_TagProtections_upd_540, repo_TagProtections_upd_540, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_540, repo_TagProtections_540, id_TagProtections_540, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Tags:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_550 = {};
  let id_Tags_550 = RepositoryId;
  let limit_Tags_550 = Math.floor(Math.random() * 1000);
  let owner_Tags_550 = "owner_Tags_550_" + Math.floor(Math.random()*1000);
  let page_Tags_550 = Math.floor(Math.random() * 1000);
  let repo_Tags_550 = "repo_Tags_550_" + Math.floor(Math.random()*1000);
  let tag_Tags_550 = "tag_Tags_550_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_550, id_Tags_550, limit_Tags_550, owner_Tags_550, page_Tags_550, repo_Tags_550, tag_Tags_550, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Tags
  repoDeleteTag(owner_Tags_550, repo_Tags_550, tag_Tags_550, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Topics:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_560 = {};
  let limit_Topics_560 = Math.floor(Math.random() * 1000);
  let owner_Topics_560 = "owner_Topics_560_" + Math.floor(Math.random()*1000);
  let page_Topics_560 = Math.floor(Math.random() * 1000);
  let q_Topics_560 = "q_Topics_560_" + Math.floor(Math.random()*1000);
  let repo_Topics_560 = "repo_Topics_560_" + Math.floor(Math.random()*1000);
  let topic_Topics_560 = "topic_Topics_560_" + Math.floor(Math.random()*1000);
  let topic1_Topics_560 = "topic1_Topics_560_" + Math.floor(Math.random()*1000);
  let topic2_Topics_560 = "topic2_Topics_560_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_560, limit_Topics_560, owner_Topics_560, page_Topics_560, q_Topics_560, repo_Topics_560, topic_Topics_560, topic1_Topics_560, topic2_Topics_560, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Topics
  let body_Topics_upd_560 = {};
  let limit_Topics_upd_560 = Math.floor(Math.random() * 1000);
  let owner_Topics_upd_560 = owner_Topics_560;
  let page_Topics_upd_560 = Math.floor(Math.random() * 1000);
  let q_Topics_upd_560 = "q_Topics_upd_560_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_560 = "repo_Topics_upd_560_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_560 = "topic_Topics_upd_560_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_560 = "topic1_Topics_upd_560_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_560 = "topic2_Topics_upd_560_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_560, limit_Topics_upd_560, owner_Topics_upd_560, page_Topics_upd_560, q_Topics_upd_560, repo_Topics_upd_560, topic_Topics_upd_560, topic1_Topics_upd_560, topic2_Topics_upd_560, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_560, repo_Topics_560, topic_Topics_560, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:RepositoryTransfer:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_570 = {};
  let id_RepositoryTransfer_570 = RepositoryId;
  let owner_RepositoryTransfer_570 = "owner_RepositoryTransfer_570_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_570 = "repo_RepositoryTransfer_570_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_570 = "transferOptions_RepositoryTransfer_570_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_570, id_RepositoryTransfer_570, owner_RepositoryTransfer_570, repo_RepositoryTransfer_570, transferOptions_RepositoryTransfer_570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:WikiPage:linear:1", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_580 = {};
  let id_WikiPage_580 = RepositoryId;
  let owner_WikiPage_580 = "owner_WikiPage_580_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_580 = "pageName_WikiPage_580_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_580 = "repo_WikiPage_580_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_580 = "wikiPageOptions_WikiPage_580_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_580, id_WikiPage_580, owner_WikiPage_580, pageName_WikiPage_580, repo_WikiPage_580, wikiPageOptions_WikiPage_580, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating WikiPage
  let body_WikiPage_upd_580 = {};
  let id_WikiPage_upd_580 = id_WikiPage_580;
  let owner_WikiPage_upd_580 = "owner_WikiPage_upd_580_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_580 = "pageName_WikiPage_upd_580_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_580 = "repo_WikiPage_upd_580_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_580 = "wikiPageOptions_WikiPage_upd_580_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_580, id_WikiPage_upd_580, owner_WikiPage_upd_580, pageName_WikiPage_upd_580, repo_WikiPage_upd_580, wikiPageOptions_WikiPage_upd_580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_580, repo_WikiPage_580, pageName_WikiPage_580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamMembers:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  deps["Teams"] = matchAnyTeamsAdded();
  let pkMap = {"Organization": "org", "Teams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  let TeamsId = captured["Teams"];
  // -> Creating TeamMembers
  let id_TeamMembers_590 = TeamsId;
  let limit_TeamMembers_590 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_590 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_590 = "username_TeamMembers_590_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_590, limit_TeamMembers_590, page_TeamMembers_590, username_TeamMembers_590, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_590, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamRepos:linear:1", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  deps["Teams"] = matchAnyTeamsAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Organization": "org", "Teams": "id", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  let TeamsId = captured["Teams"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating TeamRepos
  let id_TeamRepos_600 = RepositoriesId;
  let limit_TeamRepos_600 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_600 = OrganizationId;
  let page_TeamRepos_600 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_600 = "repo_TeamRepos_600_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_600, limit_TeamRepos_600, org_TeamRepos_600, page_TeamRepos_600, repo_TeamRepos_600, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_600, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserVariables:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_610 = {};
  let variablename_UserVariables_610 = "variablename_UserVariables_610_" + Math.floor(Math.random()*1000);
  createUserVariable(body_UserVariables_610, variablename_UserVariables_610, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating UserVariables
  let body_UserVariables_upd_610 = {};
  let variablename_UserVariables_upd_610 = variablename_UserVariables_610;
  updateUserVariable(body_UserVariables_upd_610, variablename_UserVariables_upd_610, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserVariables
  deleteUserVariable(variablename_UserVariables_610, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OAuth2Applications:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_620 = {};
  let id_OAuth2Applications_620 = Math.floor(Math.random() * 1000);
  let limit_OAuth2Applications_620 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_620 = Math.floor(Math.random() * 1000);
  userCreateOAuth2Application(body_OAuth2Applications_620, id_OAuth2Applications_620, limit_OAuth2Applications_620, page_OAuth2Applications_620, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_620 = {};
  let id_OAuth2Applications_upd_620 = id_OAuth2Applications_620;
  let limit_OAuth2Applications_upd_620 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_upd_620 = Math.floor(Math.random() * 1000);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_620, id_OAuth2Applications_upd_620, limit_OAuth2Applications_upd_620, page_OAuth2Applications_upd_620, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OAuth2Applications
  userDeleteOAuth2Application(id_OAuth2Applications_620, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserAvatar:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_630 = {};
  let id_UserAvatar_630 = "id_UserAvatar_630_" + Math.floor(Math.random()*1000);
  userUpdateAvatar(body_UserAvatar_630, id_UserAvatar_630, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserAvatar
  userDeleteAvatar(id_UserAvatar_630, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserEmails:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_640 = {};
  let id_UserEmails_640 = "id_UserEmails_640_" + Math.floor(Math.random()*1000);
  userAddEmail(body_UserEmails_640, id_UserEmails_640, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserEmails
  userDeleteEmail(id_UserEmails_640, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeys:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_650 = {};
  let id_GPGKeys_650 = Math.floor(Math.random() * 1000);
  let limit_GPGKeys_650 = Math.floor(Math.random() * 1000);
  let page_GPGKeys_650 = Math.floor(Math.random() * 1000);
  userCurrentPostGPGKey(Form_GPGKeys_650, id_GPGKeys_650, limit_GPGKeys_650, page_GPGKeys_650, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GPGKeys
  userCurrentDeleteGPGKey(id_GPGKeys_650, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeyVerification:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_660 = "id_GPGKeyVerification_660_" + Math.floor(Math.random()*1000);
  userVerifyGPGKey(id_GPGKeyVerification_660, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Keys:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Keys
  let body_Keys_670 = {};
  let fingerprint_Keys_670 = "fingerprint_Keys_670_" + Math.floor(Math.random()*1000);
  let id_Keys_670 = Math.floor(Math.random() * 1000);
  let limit_Keys_670 = Math.floor(Math.random() * 1000);
  let page_Keys_670 = Math.floor(Math.random() * 1000);
  userCurrentPostKey(body_Keys_670, fingerprint_Keys_670, id_Keys_670, limit_Keys_670, page_Keys_670, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Keys
  userCurrentDeleteKey(id_Keys_670, { expectedResponseCodes: [200, 201, 204] });

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
  let limit_UserStarred_680 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_680 = "owner_UserStarred_680_" + Math.floor(Math.random()*1000);
  let page_UserStarred_680 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_680 = "repo_UserStarred_680_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_680, owner_UserStarred_680, page_UserStarred_680, repo_UserStarred_680, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_680, repo_UserStarred_680, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:AdminCron:linear:2", function () {
  // -> Creating AdminCron
  let id_AdminCron_700 = "id_AdminCron_700_" + Math.floor(Math.random()*1000);
  let limit_AdminCron_700 = Math.floor(Math.random() * 1000);
  let page_AdminCron_700 = Math.floor(Math.random() * 1000);
  let task_AdminCron_700 = "task_AdminCron_700_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_700, limit_AdminCron_700, page_AdminCron_700, task_AdminCron_700, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Hooks:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Hooks
  let body_Hooks_710 = {};
  let id_Hooks_710 = Math.floor(Math.random() * 1000);
  let limit_Hooks_710 = Math.floor(Math.random() * 1000);
  let page_Hooks_710 = Math.floor(Math.random() * 1000);
  userCreateHook(body_Hooks_710, id_Hooks_710, limit_Hooks_710, page_Hooks_710, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Hooks
  let body_Hooks_upd_710 = {};
  let id_Hooks_upd_710 = id_Hooks_710;
  let limit_Hooks_upd_710 = Math.floor(Math.random() * 1000);
  let page_Hooks_upd_710 = Math.floor(Math.random() * 1000);
  userEditHook(body_Hooks_upd_710, id_Hooks_upd_710, limit_Hooks_upd_710, page_Hooks_upd_710, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Hooks
  userDeleteHook(id_Hooks_710, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UnadoptedRepositories:linear:2", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_720 = Math.floor(Math.random() * 1000);
  let owner_UnadoptedRepositories_720 = "owner_UnadoptedRepositories_720_" + Math.floor(Math.random()*1000);
  let page_UnadoptedRepositories_720 = Math.floor(Math.random() * 1000);
  let pattern_UnadoptedRepositories_720 = "pattern_UnadoptedRepositories_720_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_720 = "repo_UnadoptedRepositories_720_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_720, owner_UnadoptedRepositories_720, page_UnadoptedRepositories_720, pattern_UnadoptedRepositories_720, repo_UnadoptedRepositories_720, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UnadoptedRepositories
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_720, repo_UnadoptedRepositories_720, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let EditUserOption_Users_730 = "EditUserOption_Users_730_" + Math.floor(Math.random()*1000);
  let body_Users_730 = {};
  let limit_Users_730 = Math.floor(Math.random() * 1000);
  let page_Users_730 = Math.floor(Math.random() * 1000);
  let token_Users_730 = "token_Users_730_" + Math.floor(Math.random()*1000);
  let username_Users_730 = "username_Users_730_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_730, body_Users_730, limit_Users_730, page_Users_730, token_Users_730, username_Users_730, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let EditUserOption_Users_upd_730 = "EditUserOption_Users_upd_730_" + Math.floor(Math.random()*1000);
  let body_Users_upd_730 = {};
  let limit_Users_upd_730 = Math.floor(Math.random() * 1000);
  let page_Users_upd_730 = Math.floor(Math.random() * 1000);
  let token_Users_upd_730 = "token_Users_upd_730_" + Math.floor(Math.random()*1000);
  let username_Users_upd_730 = username_Users_730;
  adminEditUser(EditUserOption_Users_upd_730, body_Users_upd_730, limit_Users_upd_730, page_Users_upd_730, token_Users_upd_730, username_Users_upd_730, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserBadges:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_740 = "UserBadgeOption_UserBadges_740_" + Math.floor(Math.random()*1000);
  let body_UserBadges_740 = {};
  let username_UserBadges_740 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_740, body_UserBadges_740, username_UserBadges_740, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserBadges
  adminDeleteUserBadges(username_UserBadges_740, { expectedResponseCodes: [200, 201, 204] });

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

  // -> Deleting UserKeys
  adminDeleteUser(username_UserKeys_750, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserOrganizations:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_760 = "id_UserOrganizations_760_" + Math.floor(Math.random()*1000);
  let organization_UserOrganizations_760 = "organization_UserOrganizations_760_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_760 = UsersId;
  adminCreateOrg(id_UserOrganizations_760, organization_UserOrganizations_760, username_UserOrganizations_760, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRename:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_770 = "body_UserRename_770_" + Math.floor(Math.random()*1000);
  let id_UserRename_770 = "id_UserRename_770_" + Math.floor(Math.random()*1000);
  let username_UserRename_770 = UsersId;
  adminRenameUser(body_UserRename_770, id_UserRename_770, username_UserRename_770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRepositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_780 = "id_UserRepositories_780_" + Math.floor(Math.random()*1000);
  let repository_UserRepositories_780 = "repository_UserRepositories_780_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_780 = UsersId;
  adminCreateRepo(id_UserRepositories_780, repository_UserRepositories_780, username_UserRepositories_780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markdown:linear:2", function () {
  // -> Creating Markdown
  let body_Markdown_790 = "body_Markdown_790_" + Math.floor(Math.random()*1000);
  let id_Markdown_790 = "id_Markdown_790_" + Math.floor(Math.random()*1000);
  renderMarkdown(body_Markdown_790, id_Markdown_790, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markup:linear:2", function () {
  // -> Creating Markup
  let body_Markup_800 = {};
  let id_Markup_800 = "id_Markup_800_" + Math.floor(Math.random()*1000);
  renderMarkup(body_Markup_800, id_Markup_800, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Organization:linear:2", function () {
  // -> Creating Organization
  let body_Organization_810 = {};
  let limit_Organization_810 = Math.floor(Math.random() * 1000);
  let org_Organization_810 = "org_Organization_810_" + Math.floor(Math.random()*1000);
  let organization_Organization_810 = {};
  let page_Organization_810 = Math.floor(Math.random() * 1000);
  let secretname_Organization_810 = "secretname_Organization_810_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_810, limit_Organization_810, org_Organization_810, organization_Organization_810, page_Organization_810, secretname_Organization_810, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Organization
  let body_Organization_upd_810 = {};
  let limit_Organization_upd_810 = Math.floor(Math.random() * 1000);
  let org_Organization_upd_810 = org_Organization_810;
  let organization_Organization_upd_810 = {};
  let page_Organization_upd_810 = Math.floor(Math.random() * 1000);
  let secretname_Organization_upd_810 = "secretname_Organization_upd_810_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_810, limit_Organization_upd_810, org_Organization_upd_810, organization_Organization_upd_810, page_Organization_upd_810, secretname_Organization_upd_810, { expectedResponseCodes: [200, 201, 204] });

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

  // -> Updating OrgVariables
  let body_OrgVariables_upd_820 = "body_OrgVariables_upd_820_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_upd_820 = org_OrgVariables_820;
  let variablename_OrgVariables_upd_820 = "variablename_OrgVariables_upd_820_" + Math.floor(Math.random()*1000);
  orgEdit(body_OrgVariables_upd_820, org_OrgVariables_upd_820, variablename_OrgVariables_upd_820, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OrgVariables
  orgDelete(org_OrgVariables_820, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Avatar:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating Avatar
  let body_Avatar_830 = {};
  let org_Avatar_830 = OrganizationId;
  orgUpdateAvatar(body_Avatar_830, org_Avatar_830, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Avatar
  orgDeleteAvatar(org_Avatar_830, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Labels:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Labels
  let body_Labels_840 = {};
  let color_Labels_840 = "color_Labels_840_" + Math.floor(Math.random()*1000);
  let description_Labels_840 = "description_Labels_840_" + Math.floor(Math.random()*1000);
  let id_Labels_840 = RepositoryId;
  let limit_Labels_840 = Math.floor(Math.random() * 1000);
  let name_Labels_840 = "name_Labels_840_" + Math.floor(Math.random()*1000);
  let owner_Labels_840 = "owner_Labels_840_" + Math.floor(Math.random()*1000);
  let page_Labels_840 = Math.floor(Math.random() * 1000);
  let repo_Labels_840 = "repo_Labels_840_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_840, color_Labels_840, description_Labels_840, id_Labels_840, limit_Labels_840, name_Labels_840, owner_Labels_840, page_Labels_840, repo_Labels_840, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Labels
  let body_Labels_upd_840 = {};
  let color_Labels_upd_840 = "color_Labels_upd_840_" + Math.floor(Math.random()*1000);
  let description_Labels_upd_840 = "description_Labels_upd_840_" + Math.floor(Math.random()*1000);
  let id_Labels_upd_840 = id_Labels_840;
  let limit_Labels_upd_840 = Math.floor(Math.random() * 1000);
  let name_Labels_upd_840 = "name_Labels_upd_840_" + Math.floor(Math.random()*1000);
  let owner_Labels_upd_840 = "owner_Labels_upd_840_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_840 = Math.floor(Math.random() * 1000);
  let repo_Labels_upd_840 = "repo_Labels_upd_840_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_840, color_Labels_upd_840, description_Labels_upd_840, id_Labels_upd_840, limit_Labels_upd_840, name_Labels_upd_840, owner_Labels_upd_840, page_Labels_upd_840, repo_Labels_upd_840, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Labels
  issueDeleteLabel(owner_Labels_840, repo_Labels_840, id_Labels_840, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationRepos:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_850 = {};
  let id_OrganizationRepos_850 = "id_OrganizationRepos_850_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_850 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_850 = OrganizationId;
  let page_OrganizationRepos_850 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_850, id_OrganizationRepos_850, limit_OrganizationRepos_850, org_OrganizationRepos_850, page_OrganizationRepos_850, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationTeams:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_860 = {};
  let id_OrganizationTeams_860 = "id_OrganizationTeams_860_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_860 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_860 = OrganizationId;
  let page_OrganizationTeams_860 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_860, id_OrganizationTeams_860, limit_OrganizationTeams_860, org_OrganizationTeams_860, page_OrganizationTeams_860, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issues:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issues
  let content_Issues_870 = {};
  let id_Issues_870 = RepositoryId;
  let index_Issues_870 = Math.floor(Math.random() * 1000);
  let limit_Issues_870 = Math.floor(Math.random() * 1000);
  let owner_Issues_870 = "owner_Issues_870_" + Math.floor(Math.random()*1000);
  let page_Issues_870 = Math.floor(Math.random() * 1000);
  let position_Issues_870 = Math.floor(Math.random() * 1000);
  let repo_Issues_870 = "repo_Issues_870_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_870, id_Issues_870, index_Issues_870, limit_Issues_870, owner_Issues_870, page_Issues_870, position_Issues_870, repo_Issues_870, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Issues
  let content_Issues_upd_870 = {};
  let id_Issues_upd_870 = id_Issues_870;
  let index_Issues_upd_870 = Math.floor(Math.random() * 1000);
  let limit_Issues_upd_870 = Math.floor(Math.random() * 1000);
  let owner_Issues_upd_870 = "owner_Issues_upd_870_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_870 = Math.floor(Math.random() * 1000);
  let position_Issues_upd_870 = Math.floor(Math.random() * 1000);
  let repo_Issues_upd_870 = "repo_Issues_upd_870_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_870, id_Issues_upd_870, index_Issues_upd_870, limit_Issues_upd_870, owner_Issues_upd_870, page_Issues_upd_870, position_Issues_upd_870, repo_Issues_upd_870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repository:linear:2", function () {
  // -> Creating Repository
  let body_Repository_880 = {};
  let id_Repository_880 = "id_Repository_880_" + Math.floor(Math.random()*1000);
  let limit_Repository_880 = Math.floor(Math.random() * 1000);
  let owner_Repository_880 = "owner_Repository_880_" + Math.floor(Math.random()*1000);
  let page_Repository_880 = Math.floor(Math.random() * 1000);
  let repo_Repository_880 = "repo_Repository_880_" + Math.floor(Math.random()*1000);
  let sha_Repository_880 = "sha_Repository_880_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_880, id_Repository_880, limit_Repository_880, owner_Repository_880, page_Repository_880, repo_Repository_880, sha_Repository_880, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repository
  let body_Repository_upd_880 = {};
  let id_Repository_upd_880 = id_Repository_880;
  let limit_Repository_upd_880 = Math.floor(Math.random() * 1000);
  let owner_Repository_upd_880 = "owner_Repository_upd_880_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_880 = Math.floor(Math.random() * 1000);
  let repo_Repository_upd_880 = "repo_Repository_upd_880_" + Math.floor(Math.random()*1000);
  let sha_Repository_upd_880 = "sha_Repository_upd_880_" + Math.floor(Math.random()*1000);
  userCurrentPutSubscription(body_Repository_upd_880, id_Repository_upd_880, limit_Repository_upd_880, owner_Repository_upd_880, page_Repository_upd_880, repo_Repository_upd_880, sha_Repository_upd_880, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Variables:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Variables
  let CreateVariableOption_Variables_890 = "CreateVariableOption_Variables_890_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_890 = "UpdateVariableOption_Variables_890_" + Math.floor(Math.random()*1000);
  let body_Variables_890 = {};
  let id_Variables_890 = RepositoryId;
  let limit_Variables_890 = Math.floor(Math.random() * 1000);
  let owner_Variables_890 = "owner_Variables_890_" + Math.floor(Math.random()*1000);
  let page_Variables_890 = Math.floor(Math.random() * 1000);
  let repo_Variables_890 = "repo_Variables_890_" + Math.floor(Math.random()*1000);
  let variablename_Variables_890 = "variablename_Variables_890_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_890, UpdateVariableOption_Variables_890, body_Variables_890, id_Variables_890, limit_Variables_890, owner_Variables_890, page_Variables_890, repo_Variables_890, variablename_Variables_890, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Variables
  let CreateVariableOption_Variables_upd_890 = "CreateVariableOption_Variables_upd_890_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_890 = "UpdateVariableOption_Variables_upd_890_" + Math.floor(Math.random()*1000);
  let body_Variables_upd_890 = {};
  let id_Variables_upd_890 = id_Variables_890;
  let limit_Variables_upd_890 = Math.floor(Math.random() * 1000);
  let owner_Variables_upd_890 = "owner_Variables_upd_890_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_890 = Math.floor(Math.random() * 1000);
  let repo_Variables_upd_890 = "repo_Variables_upd_890_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_890 = "variablename_Variables_upd_890_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_890, UpdateVariableOption_Variables_upd_890, body_Variables_upd_890, id_Variables_upd_890, limit_Variables_upd_890, owner_Variables_upd_890, page_Variables_upd_890, repo_Variables_upd_890, variablename_Variables_upd_890, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Variables
  deleteRepoVariable(owner_Variables_890, repo_Variables_890, variablename_Variables_890, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Branches:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let body_Branches_900 = {};
  let branch_Branches_900 = "branch_Branches_900_" + Math.floor(Math.random()*1000);
  let id_Branches_900 = RepositoryId;
  let limit_Branches_900 = Math.floor(Math.random() * 1000);
  let owner_Branches_900 = "owner_Branches_900_" + Math.floor(Math.random()*1000);
  let page_Branches_900 = Math.floor(Math.random() * 1000);
  let repo_Branches_900 = "repo_Branches_900_" + Math.floor(Math.random()*1000);
  repoCreateBranch(body_Branches_900, branch_Branches_900, id_Branches_900, limit_Branches_900, owner_Branches_900, page_Branches_900, repo_Branches_900, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Branches
  let body_Branches_upd_900 = {};
  let branch_Branches_upd_900 = "branch_Branches_upd_900_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_900 = id_Branches_900;
  let limit_Branches_upd_900 = Math.floor(Math.random() * 1000);
  let owner_Branches_upd_900 = "owner_Branches_upd_900_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_900 = Math.floor(Math.random() * 1000);
  let repo_Branches_upd_900 = "repo_Branches_upd_900_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(body_Branches_upd_900, branch_Branches_upd_900, id_Branches_upd_900, limit_Branches_upd_900, owner_Branches_upd_900, page_Branches_upd_900, repo_Branches_upd_900, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_900, repo_Branches_900, branch_Branches_900, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Collaborators:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let body_Collaborators_910 = {};
  let collaborator_Collaborators_910 = "collaborator_Collaborators_910_" + Math.floor(Math.random()*1000);
  let id_Collaborators_910 = RepositoryId;
  let limit_Collaborators_910 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_910 = "owner_Collaborators_910_" + Math.floor(Math.random()*1000);
  let page_Collaborators_910 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_910 = "repo_Collaborators_910_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(body_Collaborators_910, collaborator_Collaborators_910, id_Collaborators_910, limit_Collaborators_910, owner_Collaborators_910, page_Collaborators_910, repo_Collaborators_910, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_910, repo_Collaborators_910, collaborator_Collaborators_910, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repositories:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repositories
  let body_Repositories_920 = {};
  let filepath_Repositories_920 = "filepath_Repositories_920_" + Math.floor(Math.random()*1000);
  let id_Repositories_920 = Math.floor(Math.random() * 1000);
  let limit_Repositories_920 = Math.floor(Math.random() * 1000);
  let owner_Repositories_920 = "owner_Repositories_920_" + Math.floor(Math.random()*1000);
  let page_Repositories_920 = Math.floor(Math.random() * 1000);
  let repo_Repositories_920 = "repo_Repositories_920_" + Math.floor(Math.random()*1000);
  let username_Repositories_920 = UsersId;
  createCurrentUserRepo(body_Repositories_920, filepath_Repositories_920, id_Repositories_920, limit_Repositories_920, owner_Repositories_920, page_Repositories_920, repo_Repositories_920, username_Repositories_920, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repositories
  let body_Repositories_upd_920 = {};
  let filepath_Repositories_upd_920 = "filepath_Repositories_upd_920_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_920 = id_Repositories_920;
  let limit_Repositories_upd_920 = Math.floor(Math.random() * 1000);
  let owner_Repositories_upd_920 = "owner_Repositories_upd_920_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_920 = Math.floor(Math.random() * 1000);
  let repo_Repositories_upd_920 = "repo_Repositories_upd_920_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_920 = "username_Repositories_upd_920_" + Math.floor(Math.random()*1000);
  repoUpdateFile(body_Repositories_upd_920, filepath_Repositories_upd_920, id_Repositories_upd_920, limit_Repositories_upd_920, owner_Repositories_upd_920, page_Repositories_upd_920, repo_Repositories_upd_920, username_Repositories_upd_920, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Forks:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_930 = {};
  let id_Forks_930 = RepositoryId;
  let limit_Forks_930 = Math.floor(Math.random() * 1000);
  let owner_Forks_930 = "owner_Forks_930_" + Math.floor(Math.random()*1000);
  let page_Forks_930 = Math.floor(Math.random() * 1000);
  let repo_Forks_930 = "repo_Forks_930_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_930, id_Forks_930, limit_Forks_930, owner_Forks_930, page_Forks_930, repo_Forks_930, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentAttachments:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repository": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_940 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_940 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_940 = {};
  let id_IssueCommentAttachments_940 = IssuesId;
  let name_IssueCommentAttachments_940 = "name_IssueCommentAttachments_940_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_940 = "owner_IssueCommentAttachments_940_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_940 = "repo_IssueCommentAttachments_940_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_940, attachment_id_IssueCommentAttachments_940, body_IssueCommentAttachments_940, id_IssueCommentAttachments_940, name_IssueCommentAttachments_940, owner_IssueCommentAttachments_940, repo_IssueCommentAttachments_940, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_940 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_940 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_upd_940 = {};
  let id_IssueCommentAttachments_upd_940 = id_IssueCommentAttachments_940;
  let name_IssueCommentAttachments_upd_940 = "name_IssueCommentAttachments_upd_940_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_940 = "owner_IssueCommentAttachments_upd_940_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_940 = "repo_IssueCommentAttachments_upd_940_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_940, attachment_id_IssueCommentAttachments_upd_940, body_IssueCommentAttachments_upd_940, id_IssueCommentAttachments_upd_940, name_IssueCommentAttachments_upd_940, owner_IssueCommentAttachments_upd_940, repo_IssueCommentAttachments_upd_940, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_940, repo_IssueCommentAttachments_940, id_IssueCommentAttachments_940, attachment_id_IssueCommentAttachments_940, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentReactions:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repository": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_950 = {};
  let id_IssueCommentReactions_950 = IssuesId;
  let owner_IssueCommentReactions_950 = "owner_IssueCommentReactions_950_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_950 = "repo_IssueCommentReactions_950_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_950, id_IssueCommentReactions_950, owner_IssueCommentReactions_950, repo_IssueCommentReactions_950, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_950, repo_IssueCommentReactions_950, id_IssueCommentReactions_950, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueAttachments:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_960 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_960 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_960 = {};
  let id_IssueAttachments_960 = IssuesId;
  let index_IssueAttachments_960 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_960 = "name_IssueAttachments_960_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_960 = "owner_IssueAttachments_960_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_960 = "repo_IssueAttachments_960_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_960, attachment_id_IssueAttachments_960, body_IssueAttachments_960, id_IssueAttachments_960, index_IssueAttachments_960, name_IssueAttachments_960, owner_IssueAttachments_960, repo_IssueAttachments_960, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_960 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_960 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_upd_960 = {};
  let id_IssueAttachments_upd_960 = id_IssueAttachments_960;
  let index_IssueAttachments_upd_960 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_upd_960 = "name_IssueAttachments_upd_960_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_960 = "owner_IssueAttachments_upd_960_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_960 = "repo_IssueAttachments_upd_960_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_960, attachment_id_IssueAttachments_upd_960, body_IssueAttachments_upd_960, id_IssueAttachments_upd_960, index_IssueAttachments_upd_960, name_IssueAttachments_upd_960, owner_IssueAttachments_upd_960, repo_IssueAttachments_upd_960, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_960, repo_IssueAttachments_960, index_IssueAttachments_960, attachment_id_IssueAttachments_960, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueBlocks:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_970 = {};
  let index_IssueBlocks_970 = "index_IssueBlocks_970_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_970 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_970 = "owner_IssueBlocks_970_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_970 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_970 = "repo_IssueBlocks_970_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_970, index_IssueBlocks_970, limit_IssueBlocks_970, owner_IssueBlocks_970, page_IssueBlocks_970, repo_IssueBlocks_970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_970, repo_IssueBlocks_970, index_IssueBlocks_970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueComments:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_980 = "before_IssueComments_980_" + Math.floor(Math.random()*1000);
  let body_IssueComments_980 = {};
  let id_IssueComments_980 = IssuesId;
  let index_IssueComments_980 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_980 = "owner_IssueComments_980_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_980 = "repo_IssueComments_980_" + Math.floor(Math.random()*1000);
  let since_IssueComments_980 = "since_IssueComments_980_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_980, body_IssueComments_980, id_IssueComments_980, index_IssueComments_980, owner_IssueComments_980, repo_IssueComments_980, since_IssueComments_980, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueComments
  let before_IssueComments_upd_980 = "before_IssueComments_upd_980_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_980 = {};
  let id_IssueComments_upd_980 = id_IssueComments_980;
  let index_IssueComments_upd_980 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_upd_980 = "owner_IssueComments_upd_980_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_980 = "repo_IssueComments_upd_980_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_980 = "since_IssueComments_upd_980_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_980, body_IssueComments_upd_980, id_IssueComments_upd_980, index_IssueComments_upd_980, owner_IssueComments_upd_980, repo_IssueComments_upd_980, since_IssueComments_upd_980, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_980, repo_IssueComments_980, index_IssueComments_980, id_IssueComments_980, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueSubscriptions:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_990 = IssuesId;
  let index_IssueSubscriptions_990 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_990 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_990 = "owner_IssueSubscriptions_990_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_990 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_990 = "repo_IssueSubscriptions_990_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_990 = "user_IssueSubscriptions_990_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_990, index_IssueSubscriptions_990, limit_IssueSubscriptions_990, owner_IssueSubscriptions_990, page_IssueSubscriptions_990, repo_IssueSubscriptions_990, user_IssueSubscriptions_990, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_990, repo_IssueSubscriptions_990, index_IssueSubscriptions_990, user_IssueSubscriptions_990, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueTimes:linear:2", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_1000 = "before_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_1000 = {};
  let index_IssueTimes_1000 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_1000 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_1000 = "owner_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_1000 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_1000 = "repo_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_1000 = "since_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_1000 = "user_IssueTimes_1000_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_1000, body_IssueTimes_1000, index_IssueTimes_1000, limit_IssueTimes_1000, owner_IssueTimes_1000, page_IssueTimes_1000, repo_IssueTimes_1000, since_IssueTimes_1000, user_IssueTimes_1000, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_1000, repo_IssueTimes_1000, index_IssueTimes_1000, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:RepositoryKeys:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_1010 = {};
  let fingerprint_RepositoryKeys_1010 = "fingerprint_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_1010 = RepositoryId;
  let key_RepositoryKeys_1010 = "key_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  let key_id_RepositoryKeys_1010 = Math.floor(Math.random() * 1000);
  let limit_RepositoryKeys_1010 = Math.floor(Math.random() * 1000);
  let owner_RepositoryKeys_1010 = "owner_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_1010 = Math.floor(Math.random() * 1000);
  let read_only_RepositoryKeys_1010 = "read_only_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  let repo_RepositoryKeys_1010 = "repo_RepositoryKeys_1010_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_1010, fingerprint_RepositoryKeys_1010, id_RepositoryKeys_1010, key_RepositoryKeys_1010, key_id_RepositoryKeys_1010, limit_RepositoryKeys_1010, owner_RepositoryKeys_1010, page_RepositoryKeys_1010, read_only_RepositoryKeys_1010, repo_RepositoryKeys_1010, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting RepositoryKeys
  repoDeleteKey(owner_RepositoryKeys_1010, repo_RepositoryKeys_1010, id_RepositoryKeys_1010, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issue:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issue
  let body_Issue_1020 = {};
  let id_Issue_1020 = RepositoryId;
  let limit_Issue_1020 = Math.floor(Math.random() * 1000);
  let name_Issue_1020 = "name_Issue_1020_" + Math.floor(Math.random()*1000);
  let owner_Issue_1020 = "owner_Issue_1020_" + Math.floor(Math.random()*1000);
  let page_Issue_1020 = Math.floor(Math.random() * 1000);
  let repo_Issue_1020 = "repo_Issue_1020_" + Math.floor(Math.random()*1000);
  let state_Issue_1020 = "state_Issue_1020_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_1020, id_Issue_1020, limit_Issue_1020, name_Issue_1020, owner_Issue_1020, page_Issue_1020, repo_Issue_1020, state_Issue_1020, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:PullRequests:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_1040 = {};
  let id_PullRequests_1040 = RepositoryId;
  let index_PullRequests_1040 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_1040 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_1040 = "owner_PullRequests_1040_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1040 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_1040 = "repo_PullRequests_1040_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1040 = "skip-to_PullRequests_1040_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1040 = "whitespace_PullRequests_1040_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_1040, id_PullRequests_1040, index_PullRequests_1040, limit_PullRequests_1040, owner_PullRequests_1040, page_PullRequests_1040, repo_PullRequests_1040, skip_to_PullRequests_1040, whitespace_PullRequests_1040, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating PullRequests
  let body_PullRequests_upd_1040 = {};
  let id_PullRequests_upd_1040 = id_PullRequests_1040;
  let index_PullRequests_upd_1040 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_upd_1040 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_upd_1040 = "owner_PullRequests_upd_1040_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1040 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_upd_1040 = "repo_PullRequests_upd_1040_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1040 = "skip-to_PullRequests_upd_1040_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1040 = "whitespace_PullRequests_upd_1040_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1040, id_PullRequests_upd_1040, index_PullRequests_upd_1040, limit_PullRequests_upd_1040, owner_PullRequests_upd_1040, page_PullRequests_upd_1040, repo_PullRequests_upd_1040, skip_to_PullRequests_upd_1040, whitespace_PullRequests_upd_1040, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewRequests:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1050 = {};
  let index_PullReviewRequests_1050 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_1050 = "owner_PullReviewRequests_1050_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_1050 = "repo_PullReviewRequests_1050_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1050, index_PullReviewRequests_1050, owner_PullReviewRequests_1050, repo_PullReviewRequests_1050, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_1050, repo_PullReviewRequests_1050, index_PullReviewRequests_1050, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviews:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1060 = {};
  let id_PullReviews_1060 = PullRequestsId;
  let index_PullReviews_1060 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_1060 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_1060 = "owner_PullReviews_1060_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1060 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_1060 = "repo_PullReviews_1060_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_1060, id_PullReviews_1060, index_PullReviews_1060, limit_PullReviews_1060, owner_PullReviews_1060, page_PullReviews_1060, repo_PullReviews_1060, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_1060, repo_PullReviews_1060, index_PullReviews_1060, id_PullReviews_1060, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewDismissals:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1070 = {};
  let id_PullReviewDismissals_1070 = PullRequestsId;
  let index_PullReviewDismissals_1070 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_1070 = "owner_PullReviewDismissals_1070_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1070 = "repo_PullReviewDismissals_1070_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1070, id_PullReviewDismissals_1070, index_PullReviewDismissals_1070, owner_PullReviewDismissals_1070, repo_PullReviewDismissals_1070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewUndismissals:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1080 = PullRequestsId;
  let index_PullReviewUndismissals_1080 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_1080 = "owner_PullReviewUndismissals_1080_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1080 = "repo_PullReviewUndismissals_1080_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1080, index_PullReviewUndismissals_1080, owner_PullReviewUndismissals_1080, repo_PullReviewUndismissals_1080, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullRequestUpdate:linear:2", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullRequestUpdate
  let id_PullRequestUpdate_1090 = PullRequestsId;
  let index_PullRequestUpdate_1090 = Math.floor(Math.random() * 1000);
  let owner_PullRequestUpdate_1090 = "owner_PullRequestUpdate_1090_" + Math.floor(Math.random()*1000);
  let repo_PullRequestUpdate_1090 = "repo_PullRequestUpdate_1090_" + Math.floor(Math.random()*1000);
  let style_PullRequestUpdate_1090 = "style_PullRequestUpdate_1090_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(id_PullRequestUpdate_1090, index_PullRequestUpdate_1090, owner_PullRequestUpdate_1090, repo_PullRequestUpdate_1090, style_PullRequestUpdate_1090, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PushMirrors:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PushMirrors
  let id_PushMirrors_1100 = RepositoryId;
  let limit_PushMirrors_1100 = Math.floor(Math.random() * 1000);
  let name_PushMirrors_1100 = "name_PushMirrors_1100_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1100 = "owner_PushMirrors_1100_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1100 = Math.floor(Math.random() * 1000);
  let repo_PushMirrors_1100 = "repo_PushMirrors_1100_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1100, limit_PushMirrors_1100, name_PushMirrors_1100, owner_PushMirrors_1100, page_PushMirrors_1100, repo_PushMirrors_1100, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PushMirrors
  repoDeletePushMirror(owner_PushMirrors_1100, repo_PushMirrors_1100, name_PushMirrors_1100, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Releases:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_1110 = {};
  let draft_Releases_1110 = true;
  let id_Releases_1110 = RepositoryId;
  let limit_Releases_1110 = Math.floor(Math.random() * 1000);
  let owner_Releases_1110 = "owner_Releases_1110_" + Math.floor(Math.random()*1000);
  let page_Releases_1110 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_1110 = true;
  let repo_Releases_1110 = "repo_Releases_1110_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_1110, draft_Releases_1110, id_Releases_1110, limit_Releases_1110, owner_Releases_1110, page_Releases_1110, pre_release_Releases_1110, repo_Releases_1110, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Releases
  let body_Releases_upd_1110 = {};
  let draft_Releases_upd_1110 = true;
  let id_Releases_upd_1110 = id_Releases_1110;
  let limit_Releases_upd_1110 = Math.floor(Math.random() * 1000);
  let owner_Releases_upd_1110 = "owner_Releases_upd_1110_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1110 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_upd_1110 = true;
  let repo_Releases_upd_1110 = "repo_Releases_upd_1110_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_1110, draft_Releases_upd_1110, id_Releases_upd_1110, limit_Releases_upd_1110, owner_Releases_upd_1110, page_Releases_upd_1110, pre_release_Releases_upd_1110, repo_Releases_upd_1110, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:ReleaseAttachments:linear:2", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1120 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1120 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_1120 = {};
  let id_ReleaseAttachments_1120 = ReleasesId;
  let name_ReleaseAttachments_1120 = "name_ReleaseAttachments_1120_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1120 = "owner_ReleaseAttachments_1120_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1120 = "repo_ReleaseAttachments_1120_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1120, attachment_id_ReleaseAttachments_1120, body_ReleaseAttachments_1120, id_ReleaseAttachments_1120, name_ReleaseAttachments_1120, owner_ReleaseAttachments_1120, repo_ReleaseAttachments_1120, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1120 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1120 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_upd_1120 = {};
  let id_ReleaseAttachments_upd_1120 = id_ReleaseAttachments_1120;
  let name_ReleaseAttachments_upd_1120 = "name_ReleaseAttachments_upd_1120_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1120 = "owner_ReleaseAttachments_upd_1120_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1120 = "repo_ReleaseAttachments_upd_1120_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1120, attachment_id_ReleaseAttachments_upd_1120, body_ReleaseAttachments_upd_1120, id_ReleaseAttachments_upd_1120, name_ReleaseAttachments_upd_1120, owner_ReleaseAttachments_upd_1120, repo_ReleaseAttachments_upd_1120, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1120, repo_ReleaseAttachments_1120, id_ReleaseAttachments_1120, attachment_id_ReleaseAttachments_1120, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TagProtections:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_1130 = {};
  let id_TagProtections_1130 = RepositoryId;
  let owner_TagProtections_1130 = "owner_TagProtections_1130_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1130 = "repo_TagProtections_1130_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1130, id_TagProtections_1130, owner_TagProtections_1130, repo_TagProtections_1130, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating TagProtections
  let body_TagProtections_upd_1130 = {};
  let id_TagProtections_upd_1130 = id_TagProtections_1130;
  let owner_TagProtections_upd_1130 = "owner_TagProtections_upd_1130_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1130 = "repo_TagProtections_upd_1130_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1130, id_TagProtections_upd_1130, owner_TagProtections_upd_1130, repo_TagProtections_upd_1130, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_1130, repo_TagProtections_1130, id_TagProtections_1130, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Tags:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_1140 = {};
  let id_Tags_1140 = RepositoryId;
  let limit_Tags_1140 = Math.floor(Math.random() * 1000);
  let owner_Tags_1140 = "owner_Tags_1140_" + Math.floor(Math.random()*1000);
  let page_Tags_1140 = Math.floor(Math.random() * 1000);
  let repo_Tags_1140 = "repo_Tags_1140_" + Math.floor(Math.random()*1000);
  let tag_Tags_1140 = "tag_Tags_1140_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1140, id_Tags_1140, limit_Tags_1140, owner_Tags_1140, page_Tags_1140, repo_Tags_1140, tag_Tags_1140, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Tags
  repoDeleteTag(owner_Tags_1140, repo_Tags_1140, tag_Tags_1140, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Topics:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_1150 = {};
  let limit_Topics_1150 = Math.floor(Math.random() * 1000);
  let owner_Topics_1150 = "owner_Topics_1150_" + Math.floor(Math.random()*1000);
  let page_Topics_1150 = Math.floor(Math.random() * 1000);
  let q_Topics_1150 = "q_Topics_1150_" + Math.floor(Math.random()*1000);
  let repo_Topics_1150 = "repo_Topics_1150_" + Math.floor(Math.random()*1000);
  let topic_Topics_1150 = "topic_Topics_1150_" + Math.floor(Math.random()*1000);
  let topic1_Topics_1150 = "topic1_Topics_1150_" + Math.floor(Math.random()*1000);
  let topic2_Topics_1150 = "topic2_Topics_1150_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1150, limit_Topics_1150, owner_Topics_1150, page_Topics_1150, q_Topics_1150, repo_Topics_1150, topic_Topics_1150, topic1_Topics_1150, topic2_Topics_1150, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Topics
  let body_Topics_upd_1150 = {};
  let limit_Topics_upd_1150 = Math.floor(Math.random() * 1000);
  let owner_Topics_upd_1150 = owner_Topics_1150;
  let page_Topics_upd_1150 = Math.floor(Math.random() * 1000);
  let q_Topics_upd_1150 = "q_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1150 = "repo_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1150 = "topic_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_1150 = "topic1_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_1150 = "topic2_Topics_upd_1150_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1150, limit_Topics_upd_1150, owner_Topics_upd_1150, page_Topics_upd_1150, q_Topics_upd_1150, repo_Topics_upd_1150, topic_Topics_upd_1150, topic1_Topics_upd_1150, topic2_Topics_upd_1150, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_1150, repo_Topics_1150, topic_Topics_1150, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:RepositoryTransfer:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1160 = {};
  let id_RepositoryTransfer_1160 = RepositoryId;
  let owner_RepositoryTransfer_1160 = "owner_RepositoryTransfer_1160_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1160 = "repo_RepositoryTransfer_1160_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1160 = "transferOptions_RepositoryTransfer_1160_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1160, id_RepositoryTransfer_1160, owner_RepositoryTransfer_1160, repo_RepositoryTransfer_1160, transferOptions_RepositoryTransfer_1160, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:WikiPage:linear:2", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_1170 = {};
  let id_WikiPage_1170 = RepositoryId;
  let owner_WikiPage_1170 = "owner_WikiPage_1170_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_1170 = "pageName_WikiPage_1170_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_1170 = "repo_WikiPage_1170_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_1170 = "wikiPageOptions_WikiPage_1170_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_1170, id_WikiPage_1170, owner_WikiPage_1170, pageName_WikiPage_1170, repo_WikiPage_1170, wikiPageOptions_WikiPage_1170, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating WikiPage
  let body_WikiPage_upd_1170 = {};
  let id_WikiPage_upd_1170 = id_WikiPage_1170;
  let owner_WikiPage_upd_1170 = "owner_WikiPage_upd_1170_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_1170 = "pageName_WikiPage_upd_1170_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_1170 = "repo_WikiPage_upd_1170_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_1170 = "wikiPageOptions_WikiPage_upd_1170_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_1170, id_WikiPage_upd_1170, owner_WikiPage_upd_1170, pageName_WikiPage_upd_1170, repo_WikiPage_upd_1170, wikiPageOptions_WikiPage_upd_1170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_1170, repo_WikiPage_1170, pageName_WikiPage_1170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamMembers:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  deps["Teams"] = matchAnyTeamsAdded();
  let pkMap = {"Organization": "org", "Teams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  let TeamsId = captured["Teams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1180 = TeamsId;
  let limit_TeamMembers_1180 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_1180 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_1180 = "username_TeamMembers_1180_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_1180, limit_TeamMembers_1180, page_TeamMembers_1180, username_TeamMembers_1180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_1180, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamRepos:linear:2", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  deps["Teams"] = matchAnyTeamsAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Organization": "org", "Teams": "id", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  let TeamsId = captured["Teams"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating TeamRepos
  let id_TeamRepos_1190 = RepositoriesId;
  let limit_TeamRepos_1190 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_1190 = OrganizationId;
  let page_TeamRepos_1190 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_1190 = "repo_TeamRepos_1190_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1190, limit_TeamRepos_1190, org_TeamRepos_1190, page_TeamRepos_1190, repo_TeamRepos_1190, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_1190, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserVariables:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_1200 = {};
  let variablename_UserVariables_1200 = "variablename_UserVariables_1200_" + Math.floor(Math.random()*1000);
  createUserVariable(body_UserVariables_1200, variablename_UserVariables_1200, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating UserVariables
  let body_UserVariables_upd_1200 = {};
  let variablename_UserVariables_upd_1200 = variablename_UserVariables_1200;
  updateUserVariable(body_UserVariables_upd_1200, variablename_UserVariables_upd_1200, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserVariables
  deleteUserVariable(variablename_UserVariables_1200, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OAuth2Applications:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1210 = {};
  let id_OAuth2Applications_1210 = Math.floor(Math.random() * 1000);
  let limit_OAuth2Applications_1210 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_1210 = Math.floor(Math.random() * 1000);
  userCreateOAuth2Application(body_OAuth2Applications_1210, id_OAuth2Applications_1210, limit_OAuth2Applications_1210, page_OAuth2Applications_1210, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1210 = {};
  let id_OAuth2Applications_upd_1210 = id_OAuth2Applications_1210;
  let limit_OAuth2Applications_upd_1210 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_upd_1210 = Math.floor(Math.random() * 1000);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1210, id_OAuth2Applications_upd_1210, limit_OAuth2Applications_upd_1210, page_OAuth2Applications_upd_1210, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OAuth2Applications
  userDeleteOAuth2Application(id_OAuth2Applications_1210, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserAvatar:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_1220 = {};
  let id_UserAvatar_1220 = "id_UserAvatar_1220_" + Math.floor(Math.random()*1000);
  userUpdateAvatar(body_UserAvatar_1220, id_UserAvatar_1220, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserAvatar
  userDeleteAvatar(id_UserAvatar_1220, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserEmails:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_1230 = {};
  let id_UserEmails_1230 = "id_UserEmails_1230_" + Math.floor(Math.random()*1000);
  userAddEmail(body_UserEmails_1230, id_UserEmails_1230, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserEmails
  userDeleteEmail(id_UserEmails_1230, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeys:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_1240 = {};
  let id_GPGKeys_1240 = Math.floor(Math.random() * 1000);
  let limit_GPGKeys_1240 = Math.floor(Math.random() * 1000);
  let page_GPGKeys_1240 = Math.floor(Math.random() * 1000);
  userCurrentPostGPGKey(Form_GPGKeys_1240, id_GPGKeys_1240, limit_GPGKeys_1240, page_GPGKeys_1240, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GPGKeys
  userCurrentDeleteGPGKey(id_GPGKeys_1240, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeyVerification:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_1250 = "id_GPGKeyVerification_1250_" + Math.floor(Math.random()*1000);
  userVerifyGPGKey(id_GPGKeyVerification_1250, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Keys:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Keys
  let body_Keys_1260 = {};
  let fingerprint_Keys_1260 = "fingerprint_Keys_1260_" + Math.floor(Math.random()*1000);
  let id_Keys_1260 = Math.floor(Math.random() * 1000);
  let limit_Keys_1260 = Math.floor(Math.random() * 1000);
  let page_Keys_1260 = Math.floor(Math.random() * 1000);
  userCurrentPostKey(body_Keys_1260, fingerprint_Keys_1260, id_Keys_1260, limit_Keys_1260, page_Keys_1260, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Keys
  userCurrentDeleteKey(id_Keys_1260, { expectedResponseCodes: [200, 201, 204] });

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
  let limit_UserStarred_1270 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_1270 = "owner_UserStarred_1270_" + Math.floor(Math.random()*1000);
  let page_UserStarred_1270 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_1270 = "repo_UserStarred_1270_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1270, owner_UserStarred_1270, page_UserStarred_1270, repo_UserStarred_1270, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_1270, repo_UserStarred_1270, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:AdminCron:linear:3", function () {
  // -> Creating AdminCron
  let id_AdminCron_1290 = "id_AdminCron_1290_" + Math.floor(Math.random()*1000);
  let limit_AdminCron_1290 = Math.floor(Math.random() * 1000);
  let page_AdminCron_1290 = Math.floor(Math.random() * 1000);
  let task_AdminCron_1290 = "task_AdminCron_1290_" + Math.floor(Math.random()*1000);
  adminCronRun(id_AdminCron_1290, limit_AdminCron_1290, page_AdminCron_1290, task_AdminCron_1290, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Hooks:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Hooks
  let body_Hooks_1300 = {};
  let id_Hooks_1300 = Math.floor(Math.random() * 1000);
  let limit_Hooks_1300 = Math.floor(Math.random() * 1000);
  let page_Hooks_1300 = Math.floor(Math.random() * 1000);
  userCreateHook(body_Hooks_1300, id_Hooks_1300, limit_Hooks_1300, page_Hooks_1300, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Hooks
  let body_Hooks_upd_1300 = {};
  let id_Hooks_upd_1300 = id_Hooks_1300;
  let limit_Hooks_upd_1300 = Math.floor(Math.random() * 1000);
  let page_Hooks_upd_1300 = Math.floor(Math.random() * 1000);
  userEditHook(body_Hooks_upd_1300, id_Hooks_upd_1300, limit_Hooks_upd_1300, page_Hooks_upd_1300, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Hooks
  userDeleteHook(id_Hooks_1300, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UnadoptedRepositories:linear:3", function () {
  let deps = {};
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoriesId = captured["Repositories"];
  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_1310 = Math.floor(Math.random() * 1000);
  let owner_UnadoptedRepositories_1310 = "owner_UnadoptedRepositories_1310_" + Math.floor(Math.random()*1000);
  let page_UnadoptedRepositories_1310 = Math.floor(Math.random() * 1000);
  let pattern_UnadoptedRepositories_1310 = "pattern_UnadoptedRepositories_1310_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_1310 = "repo_UnadoptedRepositories_1310_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_1310, owner_UnadoptedRepositories_1310, page_UnadoptedRepositories_1310, pattern_UnadoptedRepositories_1310, repo_UnadoptedRepositories_1310, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UnadoptedRepositories
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_1310, repo_UnadoptedRepositories_1310, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let EditUserOption_Users_1320 = "EditUserOption_Users_1320_" + Math.floor(Math.random()*1000);
  let body_Users_1320 = {};
  let limit_Users_1320 = Math.floor(Math.random() * 1000);
  let page_Users_1320 = Math.floor(Math.random() * 1000);
  let token_Users_1320 = "token_Users_1320_" + Math.floor(Math.random()*1000);
  let username_Users_1320 = "username_Users_1320_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_1320, body_Users_1320, limit_Users_1320, page_Users_1320, token_Users_1320, username_Users_1320, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let EditUserOption_Users_upd_1320 = "EditUserOption_Users_upd_1320_" + Math.floor(Math.random()*1000);
  let body_Users_upd_1320 = {};
  let limit_Users_upd_1320 = Math.floor(Math.random() * 1000);
  let page_Users_upd_1320 = Math.floor(Math.random() * 1000);
  let token_Users_upd_1320 = "token_Users_upd_1320_" + Math.floor(Math.random()*1000);
  let username_Users_upd_1320 = username_Users_1320;
  adminEditUser(EditUserOption_Users_upd_1320, body_Users_upd_1320, limit_Users_upd_1320, page_Users_upd_1320, token_Users_upd_1320, username_Users_upd_1320, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserBadges:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_1330 = "UserBadgeOption_UserBadges_1330_" + Math.floor(Math.random()*1000);
  let body_UserBadges_1330 = {};
  let username_UserBadges_1330 = UsersId;
  adminAddUserBadges(UserBadgeOption_UserBadges_1330, body_UserBadges_1330, username_UserBadges_1330, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserBadges
  adminDeleteUserBadges(username_UserBadges_1330, { expectedResponseCodes: [200, 201, 204] });

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

  // -> Deleting UserKeys
  adminDeleteUser(username_UserKeys_1340, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserOrganizations:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserOrganizations
  let id_UserOrganizations_1350 = "id_UserOrganizations_1350_" + Math.floor(Math.random()*1000);
  let organization_UserOrganizations_1350 = "organization_UserOrganizations_1350_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_1350 = UsersId;
  adminCreateOrg(id_UserOrganizations_1350, organization_UserOrganizations_1350, username_UserOrganizations_1350, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRename:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRename
  let body_UserRename_1360 = "body_UserRename_1360_" + Math.floor(Math.random()*1000);
  let id_UserRename_1360 = "id_UserRename_1360_" + Math.floor(Math.random()*1000);
  let username_UserRename_1360 = UsersId;
  adminRenameUser(body_UserRename_1360, id_UserRename_1360, username_UserRename_1360, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserRepositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserRepositories
  let id_UserRepositories_1370 = "id_UserRepositories_1370_" + Math.floor(Math.random()*1000);
  let repository_UserRepositories_1370 = "repository_UserRepositories_1370_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_1370 = UsersId;
  adminCreateRepo(id_UserRepositories_1370, repository_UserRepositories_1370, username_UserRepositories_1370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markdown:linear:3", function () {
  // -> Creating Markdown
  let body_Markdown_1380 = "body_Markdown_1380_" + Math.floor(Math.random()*1000);
  let id_Markdown_1380 = "id_Markdown_1380_" + Math.floor(Math.random()*1000);
  renderMarkdown(body_Markdown_1380, id_Markdown_1380, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Markup:linear:3", function () {
  // -> Creating Markup
  let body_Markup_1390 = {};
  let id_Markup_1390 = "id_Markup_1390_" + Math.floor(Math.random()*1000);
  renderMarkup(body_Markup_1390, id_Markup_1390, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Organization:linear:3", function () {
  // -> Creating Organization
  let body_Organization_1400 = {};
  let limit_Organization_1400 = Math.floor(Math.random() * 1000);
  let org_Organization_1400 = "org_Organization_1400_" + Math.floor(Math.random()*1000);
  let organization_Organization_1400 = {};
  let page_Organization_1400 = Math.floor(Math.random() * 1000);
  let secretname_Organization_1400 = "secretname_Organization_1400_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_1400, limit_Organization_1400, org_Organization_1400, organization_Organization_1400, page_Organization_1400, secretname_Organization_1400, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Organization
  let body_Organization_upd_1400 = {};
  let limit_Organization_upd_1400 = Math.floor(Math.random() * 1000);
  let org_Organization_upd_1400 = org_Organization_1400;
  let organization_Organization_upd_1400 = {};
  let page_Organization_upd_1400 = Math.floor(Math.random() * 1000);
  let secretname_Organization_upd_1400 = "secretname_Organization_upd_1400_" + Math.floor(Math.random()*1000);
  orgEdit(body_Organization_upd_1400, limit_Organization_upd_1400, org_Organization_upd_1400, organization_Organization_upd_1400, page_Organization_upd_1400, secretname_Organization_upd_1400, { expectedResponseCodes: [200, 201, 204] });

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

  // -> Updating OrgVariables
  let body_OrgVariables_upd_1410 = "body_OrgVariables_upd_1410_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_upd_1410 = org_OrgVariables_1410;
  let variablename_OrgVariables_upd_1410 = "variablename_OrgVariables_upd_1410_" + Math.floor(Math.random()*1000);
  orgEdit(body_OrgVariables_upd_1410, org_OrgVariables_upd_1410, variablename_OrgVariables_upd_1410, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OrgVariables
  orgDelete(org_OrgVariables_1410, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Avatar:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating Avatar
  let body_Avatar_1420 = {};
  let org_Avatar_1420 = OrganizationId;
  orgUpdateAvatar(body_Avatar_1420, org_Avatar_1420, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Avatar
  orgDeleteAvatar(org_Avatar_1420, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Labels:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Labels
  let body_Labels_1430 = {};
  let color_Labels_1430 = "color_Labels_1430_" + Math.floor(Math.random()*1000);
  let description_Labels_1430 = "description_Labels_1430_" + Math.floor(Math.random()*1000);
  let id_Labels_1430 = RepositoryId;
  let limit_Labels_1430 = Math.floor(Math.random() * 1000);
  let name_Labels_1430 = "name_Labels_1430_" + Math.floor(Math.random()*1000);
  let owner_Labels_1430 = "owner_Labels_1430_" + Math.floor(Math.random()*1000);
  let page_Labels_1430 = Math.floor(Math.random() * 1000);
  let repo_Labels_1430 = "repo_Labels_1430_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_1430, color_Labels_1430, description_Labels_1430, id_Labels_1430, limit_Labels_1430, name_Labels_1430, owner_Labels_1430, page_Labels_1430, repo_Labels_1430, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Labels
  let body_Labels_upd_1430 = {};
  let color_Labels_upd_1430 = "color_Labels_upd_1430_" + Math.floor(Math.random()*1000);
  let description_Labels_upd_1430 = "description_Labels_upd_1430_" + Math.floor(Math.random()*1000);
  let id_Labels_upd_1430 = id_Labels_1430;
  let limit_Labels_upd_1430 = Math.floor(Math.random() * 1000);
  let name_Labels_upd_1430 = "name_Labels_upd_1430_" + Math.floor(Math.random()*1000);
  let owner_Labels_upd_1430 = "owner_Labels_upd_1430_" + Math.floor(Math.random()*1000);
  let page_Labels_upd_1430 = Math.floor(Math.random() * 1000);
  let repo_Labels_upd_1430 = "repo_Labels_upd_1430_" + Math.floor(Math.random()*1000);
  issueEditLabel(body_Labels_upd_1430, color_Labels_upd_1430, description_Labels_upd_1430, id_Labels_upd_1430, limit_Labels_upd_1430, name_Labels_upd_1430, owner_Labels_upd_1430, page_Labels_upd_1430, repo_Labels_upd_1430, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Labels
  issueDeleteLabel(owner_Labels_1430, repo_Labels_1430, id_Labels_1430, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationRepos:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationRepos
  let body_OrganizationRepos_1440 = {};
  let id_OrganizationRepos_1440 = "id_OrganizationRepos_1440_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_1440 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_1440 = OrganizationId;
  let page_OrganizationRepos_1440 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_1440, id_OrganizationRepos_1440, limit_OrganizationRepos_1440, org_OrganizationRepos_1440, page_OrganizationRepos_1440, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OrganizationTeams:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  let pkMap = {"Organization": "org"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  // -> Creating OrganizationTeams
  let body_OrganizationTeams_1450 = {};
  let id_OrganizationTeams_1450 = "id_OrganizationTeams_1450_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_1450 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_1450 = OrganizationId;
  let page_OrganizationTeams_1450 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_1450, id_OrganizationTeams_1450, limit_OrganizationTeams_1450, org_OrganizationTeams_1450, page_OrganizationTeams_1450, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issues:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issues
  let content_Issues_1460 = {};
  let id_Issues_1460 = RepositoryId;
  let index_Issues_1460 = Math.floor(Math.random() * 1000);
  let limit_Issues_1460 = Math.floor(Math.random() * 1000);
  let owner_Issues_1460 = "owner_Issues_1460_" + Math.floor(Math.random()*1000);
  let page_Issues_1460 = Math.floor(Math.random() * 1000);
  let position_Issues_1460 = Math.floor(Math.random() * 1000);
  let repo_Issues_1460 = "repo_Issues_1460_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_1460, id_Issues_1460, index_Issues_1460, limit_Issues_1460, owner_Issues_1460, page_Issues_1460, position_Issues_1460, repo_Issues_1460, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Issues
  let content_Issues_upd_1460 = {};
  let id_Issues_upd_1460 = id_Issues_1460;
  let index_Issues_upd_1460 = Math.floor(Math.random() * 1000);
  let limit_Issues_upd_1460 = Math.floor(Math.random() * 1000);
  let owner_Issues_upd_1460 = "owner_Issues_upd_1460_" + Math.floor(Math.random()*1000);
  let page_Issues_upd_1460 = Math.floor(Math.random() * 1000);
  let position_Issues_upd_1460 = Math.floor(Math.random() * 1000);
  let repo_Issues_upd_1460 = "repo_Issues_upd_1460_" + Math.floor(Math.random()*1000);
  moveIssuePin(content_Issues_upd_1460, id_Issues_upd_1460, index_Issues_upd_1460, limit_Issues_upd_1460, owner_Issues_upd_1460, page_Issues_upd_1460, position_Issues_upd_1460, repo_Issues_upd_1460, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repository:linear:3", function () {
  // -> Creating Repository
  let body_Repository_1470 = {};
  let id_Repository_1470 = "id_Repository_1470_" + Math.floor(Math.random()*1000);
  let limit_Repository_1470 = Math.floor(Math.random() * 1000);
  let owner_Repository_1470 = "owner_Repository_1470_" + Math.floor(Math.random()*1000);
  let page_Repository_1470 = Math.floor(Math.random() * 1000);
  let repo_Repository_1470 = "repo_Repository_1470_" + Math.floor(Math.random()*1000);
  let sha_Repository_1470 = "sha_Repository_1470_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_1470, id_Repository_1470, limit_Repository_1470, owner_Repository_1470, page_Repository_1470, repo_Repository_1470, sha_Repository_1470, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repository
  let body_Repository_upd_1470 = {};
  let id_Repository_upd_1470 = id_Repository_1470;
  let limit_Repository_upd_1470 = Math.floor(Math.random() * 1000);
  let owner_Repository_upd_1470 = "owner_Repository_upd_1470_" + Math.floor(Math.random()*1000);
  let page_Repository_upd_1470 = Math.floor(Math.random() * 1000);
  let repo_Repository_upd_1470 = "repo_Repository_upd_1470_" + Math.floor(Math.random()*1000);
  let sha_Repository_upd_1470 = "sha_Repository_upd_1470_" + Math.floor(Math.random()*1000);
  userCurrentPutSubscription(body_Repository_upd_1470, id_Repository_upd_1470, limit_Repository_upd_1470, owner_Repository_upd_1470, page_Repository_upd_1470, repo_Repository_upd_1470, sha_Repository_upd_1470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Variables:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Variables
  let CreateVariableOption_Variables_1480 = "CreateVariableOption_Variables_1480_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_1480 = "UpdateVariableOption_Variables_1480_" + Math.floor(Math.random()*1000);
  let body_Variables_1480 = {};
  let id_Variables_1480 = RepositoryId;
  let limit_Variables_1480 = Math.floor(Math.random() * 1000);
  let owner_Variables_1480 = "owner_Variables_1480_" + Math.floor(Math.random()*1000);
  let page_Variables_1480 = Math.floor(Math.random() * 1000);
  let repo_Variables_1480 = "repo_Variables_1480_" + Math.floor(Math.random()*1000);
  let variablename_Variables_1480 = "variablename_Variables_1480_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_1480, UpdateVariableOption_Variables_1480, body_Variables_1480, id_Variables_1480, limit_Variables_1480, owner_Variables_1480, page_Variables_1480, repo_Variables_1480, variablename_Variables_1480, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Variables
  let CreateVariableOption_Variables_upd_1480 = "CreateVariableOption_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_upd_1480 = "UpdateVariableOption_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  let body_Variables_upd_1480 = {};
  let id_Variables_upd_1480 = id_Variables_1480;
  let limit_Variables_upd_1480 = Math.floor(Math.random() * 1000);
  let owner_Variables_upd_1480 = "owner_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  let page_Variables_upd_1480 = Math.floor(Math.random() * 1000);
  let repo_Variables_upd_1480 = "repo_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  let variablename_Variables_upd_1480 = "variablename_Variables_upd_1480_" + Math.floor(Math.random()*1000);
  updateRepoVariable(CreateVariableOption_Variables_upd_1480, UpdateVariableOption_Variables_upd_1480, body_Variables_upd_1480, id_Variables_upd_1480, limit_Variables_upd_1480, owner_Variables_upd_1480, page_Variables_upd_1480, repo_Variables_upd_1480, variablename_Variables_upd_1480, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Variables
  deleteRepoVariable(owner_Variables_1480, repo_Variables_1480, variablename_Variables_1480, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Branches:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Branches
  let body_Branches_1490 = {};
  let branch_Branches_1490 = "branch_Branches_1490_" + Math.floor(Math.random()*1000);
  let id_Branches_1490 = RepositoryId;
  let limit_Branches_1490 = Math.floor(Math.random() * 1000);
  let owner_Branches_1490 = "owner_Branches_1490_" + Math.floor(Math.random()*1000);
  let page_Branches_1490 = Math.floor(Math.random() * 1000);
  let repo_Branches_1490 = "repo_Branches_1490_" + Math.floor(Math.random()*1000);
  repoCreateBranch(body_Branches_1490, branch_Branches_1490, id_Branches_1490, limit_Branches_1490, owner_Branches_1490, page_Branches_1490, repo_Branches_1490, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Branches
  let body_Branches_upd_1490 = {};
  let branch_Branches_upd_1490 = "branch_Branches_upd_1490_" + Math.floor(Math.random()*1000);
  let id_Branches_upd_1490 = id_Branches_1490;
  let limit_Branches_upd_1490 = Math.floor(Math.random() * 1000);
  let owner_Branches_upd_1490 = "owner_Branches_upd_1490_" + Math.floor(Math.random()*1000);
  let page_Branches_upd_1490 = Math.floor(Math.random() * 1000);
  let repo_Branches_upd_1490 = "repo_Branches_upd_1490_" + Math.floor(Math.random()*1000);
  repoUpdateBranch(body_Branches_upd_1490, branch_Branches_upd_1490, id_Branches_upd_1490, limit_Branches_upd_1490, owner_Branches_upd_1490, page_Branches_upd_1490, repo_Branches_upd_1490, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_1490, repo_Branches_1490, branch_Branches_1490, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Collaborators:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Collaborators
  let body_Collaborators_1500 = {};
  let collaborator_Collaborators_1500 = "collaborator_Collaborators_1500_" + Math.floor(Math.random()*1000);
  let id_Collaborators_1500 = RepositoryId;
  let limit_Collaborators_1500 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_1500 = "owner_Collaborators_1500_" + Math.floor(Math.random()*1000);
  let page_Collaborators_1500 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_1500 = "repo_Collaborators_1500_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(body_Collaborators_1500, collaborator_Collaborators_1500, id_Collaborators_1500, limit_Collaborators_1500, owner_Collaborators_1500, page_Collaborators_1500, repo_Collaborators_1500, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_1500, repo_Collaborators_1500, collaborator_Collaborators_1500, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Repositories:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Repositories
  let body_Repositories_1510 = {};
  let filepath_Repositories_1510 = "filepath_Repositories_1510_" + Math.floor(Math.random()*1000);
  let id_Repositories_1510 = Math.floor(Math.random() * 1000);
  let limit_Repositories_1510 = Math.floor(Math.random() * 1000);
  let owner_Repositories_1510 = "owner_Repositories_1510_" + Math.floor(Math.random()*1000);
  let page_Repositories_1510 = Math.floor(Math.random() * 1000);
  let repo_Repositories_1510 = "repo_Repositories_1510_" + Math.floor(Math.random()*1000);
  let username_Repositories_1510 = UsersId;
  createCurrentUserRepo(body_Repositories_1510, filepath_Repositories_1510, id_Repositories_1510, limit_Repositories_1510, owner_Repositories_1510, page_Repositories_1510, repo_Repositories_1510, username_Repositories_1510, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Repositories
  let body_Repositories_upd_1510 = {};
  let filepath_Repositories_upd_1510 = "filepath_Repositories_upd_1510_" + Math.floor(Math.random()*1000);
  let id_Repositories_upd_1510 = id_Repositories_1510;
  let limit_Repositories_upd_1510 = Math.floor(Math.random() * 1000);
  let owner_Repositories_upd_1510 = "owner_Repositories_upd_1510_" + Math.floor(Math.random()*1000);
  let page_Repositories_upd_1510 = Math.floor(Math.random() * 1000);
  let repo_Repositories_upd_1510 = "repo_Repositories_upd_1510_" + Math.floor(Math.random()*1000);
  let username_Repositories_upd_1510 = "username_Repositories_upd_1510_" + Math.floor(Math.random()*1000);
  repoUpdateFile(body_Repositories_upd_1510, filepath_Repositories_upd_1510, id_Repositories_upd_1510, limit_Repositories_upd_1510, owner_Repositories_upd_1510, page_Repositories_upd_1510, repo_Repositories_upd_1510, username_Repositories_upd_1510, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Forks:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Forks
  let body_Forks_1520 = {};
  let id_Forks_1520 = RepositoryId;
  let limit_Forks_1520 = Math.floor(Math.random() * 1000);
  let owner_Forks_1520 = "owner_Forks_1520_" + Math.floor(Math.random()*1000);
  let page_Forks_1520 = Math.floor(Math.random() * 1000);
  let repo_Forks_1520 = "repo_Forks_1520_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_1520, id_Forks_1520, limit_Forks_1520, owner_Forks_1520, page_Forks_1520, repo_Forks_1520, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentAttachments:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repository": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_1530 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_1530 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_1530 = {};
  let id_IssueCommentAttachments_1530 = IssuesId;
  let name_IssueCommentAttachments_1530 = "name_IssueCommentAttachments_1530_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_1530 = "owner_IssueCommentAttachments_1530_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_1530 = "repo_IssueCommentAttachments_1530_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_1530, attachment_id_IssueCommentAttachments_1530, body_IssueCommentAttachments_1530, id_IssueCommentAttachments_1530, name_IssueCommentAttachments_1530, owner_IssueCommentAttachments_1530, repo_IssueCommentAttachments_1530, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueCommentAttachments
  let attachment_IssueCommentAttachments_upd_1530 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_upd_1530 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_upd_1530 = {};
  let id_IssueCommentAttachments_upd_1530 = id_IssueCommentAttachments_1530;
  let name_IssueCommentAttachments_upd_1530 = "name_IssueCommentAttachments_upd_1530_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_upd_1530 = "owner_IssueCommentAttachments_upd_1530_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_upd_1530 = "repo_IssueCommentAttachments_upd_1530_" + Math.floor(Math.random()*1000);
  issueEditIssueCommentAttachment(attachment_IssueCommentAttachments_upd_1530, attachment_id_IssueCommentAttachments_upd_1530, body_IssueCommentAttachments_upd_1530, id_IssueCommentAttachments_upd_1530, name_IssueCommentAttachments_upd_1530, owner_IssueCommentAttachments_upd_1530, repo_IssueCommentAttachments_upd_1530, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_1530, repo_IssueCommentAttachments_1530, id_IssueCommentAttachments_1530, attachment_id_IssueCommentAttachments_1530, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueCommentReactions:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Repository": "id", "Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  let IssuesId = captured["Issues"];
  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_1540 = {};
  let id_IssueCommentReactions_1540 = IssuesId;
  let owner_IssueCommentReactions_1540 = "owner_IssueCommentReactions_1540_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_1540 = "repo_IssueCommentReactions_1540_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_1540, id_IssueCommentReactions_1540, owner_IssueCommentReactions_1540, repo_IssueCommentReactions_1540, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_1540, repo_IssueCommentReactions_1540, id_IssueCommentReactions_1540, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueAttachments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueAttachments
  let attachment_IssueAttachments_1550 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_1550 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_1550 = {};
  let id_IssueAttachments_1550 = IssuesId;
  let index_IssueAttachments_1550 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_1550 = "name_IssueAttachments_1550_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_1550 = "owner_IssueAttachments_1550_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_1550 = "repo_IssueAttachments_1550_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_1550, attachment_id_IssueAttachments_1550, body_IssueAttachments_1550, id_IssueAttachments_1550, index_IssueAttachments_1550, name_IssueAttachments_1550, owner_IssueAttachments_1550, repo_IssueAttachments_1550, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueAttachments
  let attachment_IssueAttachments_upd_1550 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_upd_1550 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_upd_1550 = {};
  let id_IssueAttachments_upd_1550 = id_IssueAttachments_1550;
  let index_IssueAttachments_upd_1550 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_upd_1550 = "name_IssueAttachments_upd_1550_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_upd_1550 = "owner_IssueAttachments_upd_1550_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_upd_1550 = "repo_IssueAttachments_upd_1550_" + Math.floor(Math.random()*1000);
  issueEditIssueAttachment(attachment_IssueAttachments_upd_1550, attachment_id_IssueAttachments_upd_1550, body_IssueAttachments_upd_1550, id_IssueAttachments_upd_1550, index_IssueAttachments_upd_1550, name_IssueAttachments_upd_1550, owner_IssueAttachments_upd_1550, repo_IssueAttachments_upd_1550, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_1550, repo_IssueAttachments_1550, index_IssueAttachments_1550, attachment_id_IssueAttachments_1550, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueBlocks:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueBlocks
  let body_IssueBlocks_1560 = {};
  let index_IssueBlocks_1560 = "index_IssueBlocks_1560_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_1560 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_1560 = "owner_IssueBlocks_1560_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_1560 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_1560 = "repo_IssueBlocks_1560_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_1560, index_IssueBlocks_1560, limit_IssueBlocks_1560, owner_IssueBlocks_1560, page_IssueBlocks_1560, repo_IssueBlocks_1560, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_1560, repo_IssueBlocks_1560, index_IssueBlocks_1560, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueComments:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueComments
  let before_IssueComments_1570 = "before_IssueComments_1570_" + Math.floor(Math.random()*1000);
  let body_IssueComments_1570 = {};
  let id_IssueComments_1570 = IssuesId;
  let index_IssueComments_1570 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_1570 = "owner_IssueComments_1570_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_1570 = "repo_IssueComments_1570_" + Math.floor(Math.random()*1000);
  let since_IssueComments_1570 = "since_IssueComments_1570_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_1570, body_IssueComments_1570, id_IssueComments_1570, index_IssueComments_1570, owner_IssueComments_1570, repo_IssueComments_1570, since_IssueComments_1570, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating IssueComments
  let before_IssueComments_upd_1570 = "before_IssueComments_upd_1570_" + Math.floor(Math.random()*1000);
  let body_IssueComments_upd_1570 = {};
  let id_IssueComments_upd_1570 = id_IssueComments_1570;
  let index_IssueComments_upd_1570 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_upd_1570 = "owner_IssueComments_upd_1570_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_upd_1570 = "repo_IssueComments_upd_1570_" + Math.floor(Math.random()*1000);
  let since_IssueComments_upd_1570 = "since_IssueComments_upd_1570_" + Math.floor(Math.random()*1000);
  issueEditCommentDeprecated(before_IssueComments_upd_1570, body_IssueComments_upd_1570, id_IssueComments_upd_1570, index_IssueComments_upd_1570, owner_IssueComments_upd_1570, repo_IssueComments_upd_1570, since_IssueComments_upd_1570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_1570, repo_IssueComments_1570, index_IssueComments_1570, id_IssueComments_1570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueSubscriptions:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_1580 = IssuesId;
  let index_IssueSubscriptions_1580 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_1580 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_1580 = "owner_IssueSubscriptions_1580_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_1580 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_1580 = "repo_IssueSubscriptions_1580_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_1580 = "user_IssueSubscriptions_1580_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_1580, index_IssueSubscriptions_1580, limit_IssueSubscriptions_1580, owner_IssueSubscriptions_1580, page_IssueSubscriptions_1580, repo_IssueSubscriptions_1580, user_IssueSubscriptions_1580, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_1580, repo_IssueSubscriptions_1580, index_IssueSubscriptions_1580, user_IssueSubscriptions_1580, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:IssueTimes:linear:3", function () {
  let deps = {};
  deps["Issues"] = matchAnyIssuesAdded();
  let pkMap = {"Issues": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let IssuesId = captured["Issues"];
  // -> Creating IssueTimes
  let before_IssueTimes_1590 = "before_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_1590 = {};
  let index_IssueTimes_1590 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_1590 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_1590 = "owner_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_1590 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_1590 = "repo_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_1590 = "since_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_1590 = "user_IssueTimes_1590_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_1590, body_IssueTimes_1590, index_IssueTimes_1590, limit_IssueTimes_1590, owner_IssueTimes_1590, page_IssueTimes_1590, repo_IssueTimes_1590, since_IssueTimes_1590, user_IssueTimes_1590, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_1590, repo_IssueTimes_1590, index_IssueTimes_1590, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:RepositoryKeys:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryKeys
  let body_RepositoryKeys_1600 = {};
  let fingerprint_RepositoryKeys_1600 = "fingerprint_RepositoryKeys_1600_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_1600 = RepositoryId;
  let key_RepositoryKeys_1600 = "key_RepositoryKeys_1600_" + Math.floor(Math.random()*1000);
  let key_id_RepositoryKeys_1600 = Math.floor(Math.random() * 1000);
  let limit_RepositoryKeys_1600 = Math.floor(Math.random() * 1000);
  let owner_RepositoryKeys_1600 = "owner_RepositoryKeys_1600_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_1600 = Math.floor(Math.random() * 1000);
  let read_only_RepositoryKeys_1600 = "read_only_RepositoryKeys_1600_" + Math.floor(Math.random()*1000);
  let repo_RepositoryKeys_1600 = "repo_RepositoryKeys_1600_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_1600, fingerprint_RepositoryKeys_1600, id_RepositoryKeys_1600, key_RepositoryKeys_1600, key_id_RepositoryKeys_1600, limit_RepositoryKeys_1600, owner_RepositoryKeys_1600, page_RepositoryKeys_1600, read_only_RepositoryKeys_1600, repo_RepositoryKeys_1600, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting RepositoryKeys
  repoDeleteKey(owner_RepositoryKeys_1600, repo_RepositoryKeys_1600, id_RepositoryKeys_1600, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Issue:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Issue
  let body_Issue_1610 = {};
  let id_Issue_1610 = RepositoryId;
  let limit_Issue_1610 = Math.floor(Math.random() * 1000);
  let name_Issue_1610 = "name_Issue_1610_" + Math.floor(Math.random()*1000);
  let owner_Issue_1610 = "owner_Issue_1610_" + Math.floor(Math.random()*1000);
  let page_Issue_1610 = Math.floor(Math.random() * 1000);
  let repo_Issue_1610 = "repo_Issue_1610_" + Math.floor(Math.random()*1000);
  let state_Issue_1610 = "state_Issue_1610_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_1610, id_Issue_1610, limit_Issue_1610, name_Issue_1610, owner_Issue_1610, page_Issue_1610, repo_Issue_1610, state_Issue_1610, { expectedResponseCodes: [200, 201, 204] });

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

});

bthread("crud:PullRequests:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PullRequests
  let body_PullRequests_1630 = {};
  let id_PullRequests_1630 = RepositoryId;
  let index_PullRequests_1630 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_1630 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_1630 = "owner_PullRequests_1630_" + Math.floor(Math.random()*1000);
  let page_PullRequests_1630 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_1630 = "repo_PullRequests_1630_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_1630 = "skip-to_PullRequests_1630_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_1630 = "whitespace_PullRequests_1630_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_1630, id_PullRequests_1630, index_PullRequests_1630, limit_PullRequests_1630, owner_PullRequests_1630, page_PullRequests_1630, repo_PullRequests_1630, skip_to_PullRequests_1630, whitespace_PullRequests_1630, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating PullRequests
  let body_PullRequests_upd_1630 = {};
  let id_PullRequests_upd_1630 = id_PullRequests_1630;
  let index_PullRequests_upd_1630 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_upd_1630 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_upd_1630 = "owner_PullRequests_upd_1630_" + Math.floor(Math.random()*1000);
  let page_PullRequests_upd_1630 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_upd_1630 = "repo_PullRequests_upd_1630_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_upd_1630 = "skip-to_PullRequests_upd_1630_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_upd_1630 = "whitespace_PullRequests_upd_1630_" + Math.floor(Math.random()*1000);
  repoEditPullRequest(body_PullRequests_upd_1630, id_PullRequests_upd_1630, index_PullRequests_upd_1630, limit_PullRequests_upd_1630, owner_PullRequests_upd_1630, page_PullRequests_upd_1630, repo_PullRequests_upd_1630, skip_to_PullRequests_upd_1630, whitespace_PullRequests_upd_1630, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewRequests:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewRequests
  let body_PullReviewRequests_1640 = {};
  let index_PullReviewRequests_1640 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_1640 = "owner_PullReviewRequests_1640_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_1640 = "repo_PullReviewRequests_1640_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_1640, index_PullReviewRequests_1640, owner_PullReviewRequests_1640, repo_PullReviewRequests_1640, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_1640, repo_PullReviewRequests_1640, index_PullReviewRequests_1640, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviews:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviews
  let body_PullReviews_1650 = {};
  let id_PullReviews_1650 = PullRequestsId;
  let index_PullReviews_1650 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_1650 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_1650 = "owner_PullReviews_1650_" + Math.floor(Math.random()*1000);
  let page_PullReviews_1650 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_1650 = "repo_PullReviews_1650_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_1650, id_PullReviews_1650, index_PullReviews_1650, limit_PullReviews_1650, owner_PullReviews_1650, page_PullReviews_1650, repo_PullReviews_1650, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_1650, repo_PullReviews_1650, index_PullReviews_1650, id_PullReviews_1650, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewDismissals:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_1660 = {};
  let id_PullReviewDismissals_1660 = PullRequestsId;
  let index_PullReviewDismissals_1660 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_1660 = "owner_PullReviewDismissals_1660_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_1660 = "repo_PullReviewDismissals_1660_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_1660, id_PullReviewDismissals_1660, index_PullReviewDismissals_1660, owner_PullReviewDismissals_1660, repo_PullReviewDismissals_1660, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullReviewUndismissals:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_1670 = PullRequestsId;
  let index_PullReviewUndismissals_1670 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_1670 = "owner_PullReviewUndismissals_1670_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_1670 = "repo_PullReviewUndismissals_1670_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_1670, index_PullReviewUndismissals_1670, owner_PullReviewUndismissals_1670, repo_PullReviewUndismissals_1670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PullRequestUpdate:linear:3", function () {
  let deps = {};
  deps["PullRequests"] = matchAnyPullRequestsAdded();
  let pkMap = {"PullRequests": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let PullRequestsId = captured["PullRequests"];
  // -> Creating PullRequestUpdate
  let id_PullRequestUpdate_1680 = PullRequestsId;
  let index_PullRequestUpdate_1680 = Math.floor(Math.random() * 1000);
  let owner_PullRequestUpdate_1680 = "owner_PullRequestUpdate_1680_" + Math.floor(Math.random()*1000);
  let repo_PullRequestUpdate_1680 = "repo_PullRequestUpdate_1680_" + Math.floor(Math.random()*1000);
  let style_PullRequestUpdate_1680 = "style_PullRequestUpdate_1680_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(id_PullRequestUpdate_1680, index_PullRequestUpdate_1680, owner_PullRequestUpdate_1680, repo_PullRequestUpdate_1680, style_PullRequestUpdate_1680, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:PushMirrors:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating PushMirrors
  let id_PushMirrors_1690 = RepositoryId;
  let limit_PushMirrors_1690 = Math.floor(Math.random() * 1000);
  let name_PushMirrors_1690 = "name_PushMirrors_1690_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_1690 = "owner_PushMirrors_1690_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_1690 = Math.floor(Math.random() * 1000);
  let repo_PushMirrors_1690 = "repo_PushMirrors_1690_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_1690, limit_PushMirrors_1690, name_PushMirrors_1690, owner_PushMirrors_1690, page_PushMirrors_1690, repo_PushMirrors_1690, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PushMirrors
  repoDeletePushMirror(owner_PushMirrors_1690, repo_PushMirrors_1690, name_PushMirrors_1690, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Releases:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Releases
  let body_Releases_1700 = {};
  let draft_Releases_1700 = true;
  let id_Releases_1700 = RepositoryId;
  let limit_Releases_1700 = Math.floor(Math.random() * 1000);
  let owner_Releases_1700 = "owner_Releases_1700_" + Math.floor(Math.random()*1000);
  let page_Releases_1700 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_1700 = true;
  let repo_Releases_1700 = "repo_Releases_1700_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_1700, draft_Releases_1700, id_Releases_1700, limit_Releases_1700, owner_Releases_1700, page_Releases_1700, pre_release_Releases_1700, repo_Releases_1700, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Releases
  let body_Releases_upd_1700 = {};
  let draft_Releases_upd_1700 = true;
  let id_Releases_upd_1700 = id_Releases_1700;
  let limit_Releases_upd_1700 = Math.floor(Math.random() * 1000);
  let owner_Releases_upd_1700 = "owner_Releases_upd_1700_" + Math.floor(Math.random()*1000);
  let page_Releases_upd_1700 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_upd_1700 = true;
  let repo_Releases_upd_1700 = "repo_Releases_upd_1700_" + Math.floor(Math.random()*1000);
  repoEditRelease(body_Releases_upd_1700, draft_Releases_upd_1700, id_Releases_upd_1700, limit_Releases_upd_1700, owner_Releases_upd_1700, page_Releases_upd_1700, pre_release_Releases_upd_1700, repo_Releases_upd_1700, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:ReleaseAttachments:linear:3", function () {
  let deps = {};
  deps["Releases"] = matchAnyReleasesAdded();
  let pkMap = {"Releases": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let ReleasesId = captured["Releases"];
  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_1710 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_1710 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_1710 = {};
  let id_ReleaseAttachments_1710 = ReleasesId;
  let name_ReleaseAttachments_1710 = "name_ReleaseAttachments_1710_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_1710 = "owner_ReleaseAttachments_1710_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_1710 = "repo_ReleaseAttachments_1710_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_1710, attachment_id_ReleaseAttachments_1710, body_ReleaseAttachments_1710, id_ReleaseAttachments_1710, name_ReleaseAttachments_1710, owner_ReleaseAttachments_1710, repo_ReleaseAttachments_1710, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating ReleaseAttachments
  let attachment_ReleaseAttachments_upd_1710 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_upd_1710 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_upd_1710 = {};
  let id_ReleaseAttachments_upd_1710 = id_ReleaseAttachments_1710;
  let name_ReleaseAttachments_upd_1710 = "name_ReleaseAttachments_upd_1710_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_upd_1710 = "owner_ReleaseAttachments_upd_1710_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_upd_1710 = "repo_ReleaseAttachments_upd_1710_" + Math.floor(Math.random()*1000);
  repoEditReleaseAttachment(attachment_ReleaseAttachments_upd_1710, attachment_id_ReleaseAttachments_upd_1710, body_ReleaseAttachments_upd_1710, id_ReleaseAttachments_upd_1710, name_ReleaseAttachments_upd_1710, owner_ReleaseAttachments_upd_1710, repo_ReleaseAttachments_upd_1710, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_1710, repo_ReleaseAttachments_1710, id_ReleaseAttachments_1710, attachment_id_ReleaseAttachments_1710, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TagProtections:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating TagProtections
  let body_TagProtections_1720 = {};
  let id_TagProtections_1720 = RepositoryId;
  let owner_TagProtections_1720 = "owner_TagProtections_1720_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_1720 = "repo_TagProtections_1720_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_1720, id_TagProtections_1720, owner_TagProtections_1720, repo_TagProtections_1720, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating TagProtections
  let body_TagProtections_upd_1720 = {};
  let id_TagProtections_upd_1720 = id_TagProtections_1720;
  let owner_TagProtections_upd_1720 = "owner_TagProtections_upd_1720_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_upd_1720 = "repo_TagProtections_upd_1720_" + Math.floor(Math.random()*1000);
  repoEditTagProtection(body_TagProtections_upd_1720, id_TagProtections_upd_1720, owner_TagProtections_upd_1720, repo_TagProtections_upd_1720, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_1720, repo_TagProtections_1720, id_TagProtections_1720, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Tags:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Tags
  let body_Tags_1730 = {};
  let id_Tags_1730 = RepositoryId;
  let limit_Tags_1730 = Math.floor(Math.random() * 1000);
  let owner_Tags_1730 = "owner_Tags_1730_" + Math.floor(Math.random()*1000);
  let page_Tags_1730 = Math.floor(Math.random() * 1000);
  let repo_Tags_1730 = "repo_Tags_1730_" + Math.floor(Math.random()*1000);
  let tag_Tags_1730 = "tag_Tags_1730_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_1730, id_Tags_1730, limit_Tags_1730, owner_Tags_1730, page_Tags_1730, repo_Tags_1730, tag_Tags_1730, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Tags
  repoDeleteTag(owner_Tags_1730, repo_Tags_1730, tag_Tags_1730, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Topics:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating Topics
  let body_Topics_1740 = {};
  let limit_Topics_1740 = Math.floor(Math.random() * 1000);
  let owner_Topics_1740 = "owner_Topics_1740_" + Math.floor(Math.random()*1000);
  let page_Topics_1740 = Math.floor(Math.random() * 1000);
  let q_Topics_1740 = "q_Topics_1740_" + Math.floor(Math.random()*1000);
  let repo_Topics_1740 = "repo_Topics_1740_" + Math.floor(Math.random()*1000);
  let topic_Topics_1740 = "topic_Topics_1740_" + Math.floor(Math.random()*1000);
  let topic1_Topics_1740 = "topic1_Topics_1740_" + Math.floor(Math.random()*1000);
  let topic2_Topics_1740 = "topic2_Topics_1740_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_1740, limit_Topics_1740, owner_Topics_1740, page_Topics_1740, q_Topics_1740, repo_Topics_1740, topic_Topics_1740, topic1_Topics_1740, topic2_Topics_1740, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Topics
  let body_Topics_upd_1740 = {};
  let limit_Topics_upd_1740 = Math.floor(Math.random() * 1000);
  let owner_Topics_upd_1740 = owner_Topics_1740;
  let page_Topics_upd_1740 = Math.floor(Math.random() * 1000);
  let q_Topics_upd_1740 = "q_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  let repo_Topics_upd_1740 = "repo_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  let topic_Topics_upd_1740 = "topic_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  let topic1_Topics_upd_1740 = "topic1_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  let topic2_Topics_upd_1740 = "topic2_Topics_upd_1740_" + Math.floor(Math.random()*1000);
  repoUpdateTopics(body_Topics_upd_1740, limit_Topics_upd_1740, owner_Topics_upd_1740, page_Topics_upd_1740, q_Topics_upd_1740, repo_Topics_upd_1740, topic_Topics_upd_1740, topic1_Topics_upd_1740, topic2_Topics_upd_1740, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_1740, repo_Topics_1740, topic_Topics_1740, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:RepositoryTransfer:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_1750 = {};
  let id_RepositoryTransfer_1750 = RepositoryId;
  let owner_RepositoryTransfer_1750 = "owner_RepositoryTransfer_1750_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_1750 = "repo_RepositoryTransfer_1750_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_1750 = "transferOptions_RepositoryTransfer_1750_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_1750, id_RepositoryTransfer_1750, owner_RepositoryTransfer_1750, repo_RepositoryTransfer_1750, transferOptions_RepositoryTransfer_1750, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:WikiPage:linear:3", function () {
  let deps = {};
  deps["Repository"] = matchAnyRepositoryAdded();
  let pkMap = {"Repository": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let RepositoryId = captured["Repository"];
  // -> Creating WikiPage
  let body_WikiPage_1760 = {};
  let id_WikiPage_1760 = RepositoryId;
  let owner_WikiPage_1760 = "owner_WikiPage_1760_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_1760 = "pageName_WikiPage_1760_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_1760 = "repo_WikiPage_1760_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_1760 = "wikiPageOptions_WikiPage_1760_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_1760, id_WikiPage_1760, owner_WikiPage_1760, pageName_WikiPage_1760, repo_WikiPage_1760, wikiPageOptions_WikiPage_1760, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating WikiPage
  let body_WikiPage_upd_1760 = {};
  let id_WikiPage_upd_1760 = id_WikiPage_1760;
  let owner_WikiPage_upd_1760 = "owner_WikiPage_upd_1760_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_upd_1760 = "pageName_WikiPage_upd_1760_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_upd_1760 = "repo_WikiPage_upd_1760_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_upd_1760 = "wikiPageOptions_WikiPage_upd_1760_" + Math.floor(Math.random()*1000);
  repoEditWikiPage(body_WikiPage_upd_1760, id_WikiPage_upd_1760, owner_WikiPage_upd_1760, pageName_WikiPage_upd_1760, repo_WikiPage_upd_1760, wikiPageOptions_WikiPage_upd_1760, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_1760, repo_WikiPage_1760, pageName_WikiPage_1760, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamMembers:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  deps["Teams"] = matchAnyTeamsAdded();
  let pkMap = {"Organization": "org", "Teams": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  let TeamsId = captured["Teams"];
  // -> Creating TeamMembers
  let id_TeamMembers_1770 = TeamsId;
  let limit_TeamMembers_1770 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_1770 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_1770 = "username_TeamMembers_1770_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_1770, limit_TeamMembers_1770, page_TeamMembers_1770, username_TeamMembers_1770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_1770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:TeamRepos:linear:3", function () {
  let deps = {};
  deps["Organization"] = matchAnyOrganizationAdded();
  deps["Teams"] = matchAnyTeamsAdded();
  deps["Repositories"] = matchAnyRepositoriesAdded();
  let pkMap = {"Organization": "org", "Teams": "id", "Repositories": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let OrganizationId = captured["Organization"];
  let TeamsId = captured["Teams"];
  let RepositoriesId = captured["Repositories"];
  // -> Creating TeamRepos
  let id_TeamRepos_1780 = RepositoriesId;
  let limit_TeamRepos_1780 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_1780 = OrganizationId;
  let page_TeamRepos_1780 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_1780 = "repo_TeamRepos_1780_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_1780, limit_TeamRepos_1780, org_TeamRepos_1780, page_TeamRepos_1780, repo_TeamRepos_1780, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_1780, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserVariables:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserVariables
  let body_UserVariables_1790 = {};
  let variablename_UserVariables_1790 = "variablename_UserVariables_1790_" + Math.floor(Math.random()*1000);
  createUserVariable(body_UserVariables_1790, variablename_UserVariables_1790, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating UserVariables
  let body_UserVariables_upd_1790 = {};
  let variablename_UserVariables_upd_1790 = variablename_UserVariables_1790;
  updateUserVariable(body_UserVariables_upd_1790, variablename_UserVariables_upd_1790, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserVariables
  deleteUserVariable(variablename_UserVariables_1790, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:OAuth2Applications:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating OAuth2Applications
  let body_OAuth2Applications_1800 = {};
  let id_OAuth2Applications_1800 = Math.floor(Math.random() * 1000);
  let limit_OAuth2Applications_1800 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_1800 = Math.floor(Math.random() * 1000);
  userCreateOAuth2Application(body_OAuth2Applications_1800, id_OAuth2Applications_1800, limit_OAuth2Applications_1800, page_OAuth2Applications_1800, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating OAuth2Applications
  let body_OAuth2Applications_upd_1800 = {};
  let id_OAuth2Applications_upd_1800 = id_OAuth2Applications_1800;
  let limit_OAuth2Applications_upd_1800 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_upd_1800 = Math.floor(Math.random() * 1000);
  userUpdateOAuth2Application(body_OAuth2Applications_upd_1800, id_OAuth2Applications_upd_1800, limit_OAuth2Applications_upd_1800, page_OAuth2Applications_upd_1800, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting OAuth2Applications
  userDeleteOAuth2Application(id_OAuth2Applications_1800, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserAvatar:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserAvatar
  let body_UserAvatar_1810 = {};
  let id_UserAvatar_1810 = "id_UserAvatar_1810_" + Math.floor(Math.random()*1000);
  userUpdateAvatar(body_UserAvatar_1810, id_UserAvatar_1810, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserAvatar
  userDeleteAvatar(id_UserAvatar_1810, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:UserEmails:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating UserEmails
  let body_UserEmails_1820 = {};
  let id_UserEmails_1820 = "id_UserEmails_1820_" + Math.floor(Math.random()*1000);
  userAddEmail(body_UserEmails_1820, id_UserEmails_1820, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserEmails
  userDeleteEmail(id_UserEmails_1820, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeys:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeys
  let Form_GPGKeys_1830 = {};
  let id_GPGKeys_1830 = Math.floor(Math.random() * 1000);
  let limit_GPGKeys_1830 = Math.floor(Math.random() * 1000);
  let page_GPGKeys_1830 = Math.floor(Math.random() * 1000);
  userCurrentPostGPGKey(Form_GPGKeys_1830, id_GPGKeys_1830, limit_GPGKeys_1830, page_GPGKeys_1830, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GPGKeys
  userCurrentDeleteGPGKey(id_GPGKeys_1830, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:GPGKeyVerification:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_1840 = "id_GPGKeyVerification_1840_" + Math.floor(Math.random()*1000);
  userVerifyGPGKey(id_GPGKeyVerification_1840, { expectedResponseCodes: [200, 201, 204] });

});

bthread("crud:Keys:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  let pkMap = {"Users": "username"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  // -> Creating Keys
  let body_Keys_1850 = {};
  let fingerprint_Keys_1850 = "fingerprint_Keys_1850_" + Math.floor(Math.random()*1000);
  let id_Keys_1850 = Math.floor(Math.random() * 1000);
  let limit_Keys_1850 = Math.floor(Math.random() * 1000);
  let page_Keys_1850 = Math.floor(Math.random() * 1000);
  userCurrentPostKey(body_Keys_1850, fingerprint_Keys_1850, id_Keys_1850, limit_Keys_1850, page_Keys_1850, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Keys
  userCurrentDeleteKey(id_Keys_1850, { expectedResponseCodes: [200, 201, 204] });

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
  let limit_UserStarred_1860 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_1860 = "owner_UserStarred_1860_" + Math.floor(Math.random()*1000);
  let page_UserStarred_1860 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_1860 = "repo_UserStarred_1860_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_1860, owner_UserStarred_1860, page_UserStarred_1860, repo_UserStarred_1860, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_1860, repo_UserStarred_1860, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_ActivityPub", function () {
  // -> Creating Users
  let EditUserOption_Users_1870 = "EditUserOption_Users_1870_" + Math.floor(Math.random()*1000);
  let body_Users_1870 = {};
  let limit_Users_1870 = Math.floor(Math.random() * 1000);
  let page_Users_1870 = Math.floor(Math.random() * 1000);
  let token_Users_1870 = "token_Users_1870_" + Math.floor(Math.random()*1000);
  let username_Users_1870 = "username_Users_1870_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_1870, body_Users_1870, limit_Users_1870, page_Users_1870, token_Users_1870, username_Users_1870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating ActivityPub
  let user_id_ActivityPub_1870 = username_Users_1870;
  activitypubPersonInbox(user_id_ActivityPub_1870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  userDeleteAccessToken(username_Users_1870, token_Users_1870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_Hooks", function () {
  // -> Creating Users
  let EditUserOption_Users_1970 = "EditUserOption_Users_1970_" + Math.floor(Math.random()*1000);
  let body_Users_1970 = {};
  let limit_Users_1970 = Math.floor(Math.random() * 1000);
  let page_Users_1970 = Math.floor(Math.random() * 1000);
  let token_Users_1970 = "token_Users_1970_" + Math.floor(Math.random()*1000);
  let username_Users_1970 = "username_Users_1970_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_1970, body_Users_1970, limit_Users_1970, page_Users_1970, token_Users_1970, username_Users_1970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Hooks
  let body_Hooks_1970 = {};
  let id_Hooks_1970 = Math.floor(Math.random() * 1000);
  let limit_Hooks_1970 = Math.floor(Math.random() * 1000);
  let page_Hooks_1970 = Math.floor(Math.random() * 1000);
  userCreateHook(body_Hooks_1970, id_Hooks_1970, limit_Hooks_1970, page_Hooks_1970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Hooks
  userDeleteHook(id_Hooks_1970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_1970, token_Users_1970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserBadges", function () {
  // -> Creating Users
  let EditUserOption_Users_2070 = "EditUserOption_Users_2070_" + Math.floor(Math.random()*1000);
  let body_Users_2070 = {};
  let limit_Users_2070 = Math.floor(Math.random() * 1000);
  let page_Users_2070 = Math.floor(Math.random() * 1000);
  let token_Users_2070 = "token_Users_2070_" + Math.floor(Math.random()*1000);
  let username_Users_2070 = "username_Users_2070_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2070, body_Users_2070, limit_Users_2070, page_Users_2070, token_Users_2070, username_Users_2070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserBadges
  let UserBadgeOption_UserBadges_2070 = "UserBadgeOption_UserBadges_2070_" + Math.floor(Math.random()*1000);
  let body_UserBadges_2070 = {};
  let username_UserBadges_2070 = username_Users_2070;
  adminAddUserBadges(UserBadgeOption_UserBadges_2070, body_UserBadges_2070, username_UserBadges_2070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserBadges
  adminDeleteUserBadges(username_UserBadges_2070, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_2070, token_Users_2070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserKeys", function () {
  // -> Creating Users
  let EditUserOption_Users_2170 = "EditUserOption_Users_2170_" + Math.floor(Math.random()*1000);
  let body_Users_2170 = {};
  let limit_Users_2170 = Math.floor(Math.random() * 1000);
  let page_Users_2170 = Math.floor(Math.random() * 1000);
  let token_Users_2170 = "token_Users_2170_" + Math.floor(Math.random()*1000);
  let username_Users_2170 = "username_Users_2170_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2170, body_Users_2170, limit_Users_2170, page_Users_2170, token_Users_2170, username_Users_2170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserKeys
  let key_UserKeys_2170 = "key_UserKeys_2170_" + Math.floor(Math.random()*1000);
  let purge_UserKeys_2170 = "purge_UserKeys_2170_" + Math.floor(Math.random()*1000);
  let username_UserKeys_2170 = username_Users_2170;
  adminCreatePublicKey(key_UserKeys_2170, purge_UserKeys_2170, username_UserKeys_2170, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserKeys
  adminDeleteUser(username_UserKeys_2170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_2170, token_Users_2170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserOrganizations", function () {
  // -> Creating Users
  let EditUserOption_Users_2270 = "EditUserOption_Users_2270_" + Math.floor(Math.random()*1000);
  let body_Users_2270 = {};
  let limit_Users_2270 = Math.floor(Math.random() * 1000);
  let page_Users_2270 = Math.floor(Math.random() * 1000);
  let token_Users_2270 = "token_Users_2270_" + Math.floor(Math.random()*1000);
  let username_Users_2270 = "username_Users_2270_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2270, body_Users_2270, limit_Users_2270, page_Users_2270, token_Users_2270, username_Users_2270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserOrganizations
  let id_UserOrganizations_2270 = "id_UserOrganizations_2270_" + Math.floor(Math.random()*1000);
  let organization_UserOrganizations_2270 = "organization_UserOrganizations_2270_" + Math.floor(Math.random()*1000);
  let username_UserOrganizations_2270 = username_Users_2270;
  adminCreateOrg(id_UserOrganizations_2270, organization_UserOrganizations_2270, username_UserOrganizations_2270, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  userDeleteAccessToken(username_Users_2270, token_Users_2270, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserRename", function () {
  // -> Creating Users
  let EditUserOption_Users_2370 = "EditUserOption_Users_2370_" + Math.floor(Math.random()*1000);
  let body_Users_2370 = {};
  let limit_Users_2370 = Math.floor(Math.random() * 1000);
  let page_Users_2370 = Math.floor(Math.random() * 1000);
  let token_Users_2370 = "token_Users_2370_" + Math.floor(Math.random()*1000);
  let username_Users_2370 = "username_Users_2370_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2370, body_Users_2370, limit_Users_2370, page_Users_2370, token_Users_2370, username_Users_2370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserRename
  let body_UserRename_2370 = "body_UserRename_2370_" + Math.floor(Math.random()*1000);
  let id_UserRename_2370 = "id_UserRename_2370_" + Math.floor(Math.random()*1000);
  let username_UserRename_2370 = username_Users_2370;
  adminRenameUser(body_UserRename_2370, id_UserRename_2370, username_UserRename_2370, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  userDeleteAccessToken(username_Users_2370, token_Users_2370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserRepositories", function () {
  // -> Creating Users
  let EditUserOption_Users_2470 = "EditUserOption_Users_2470_" + Math.floor(Math.random()*1000);
  let body_Users_2470 = {};
  let limit_Users_2470 = Math.floor(Math.random() * 1000);
  let page_Users_2470 = Math.floor(Math.random() * 1000);
  let token_Users_2470 = "token_Users_2470_" + Math.floor(Math.random()*1000);
  let username_Users_2470 = "username_Users_2470_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2470, body_Users_2470, limit_Users_2470, page_Users_2470, token_Users_2470, username_Users_2470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserRepositories
  let id_UserRepositories_2470 = "id_UserRepositories_2470_" + Math.floor(Math.random()*1000);
  let repository_UserRepositories_2470 = "repository_UserRepositories_2470_" + Math.floor(Math.random()*1000);
  let username_UserRepositories_2470 = username_Users_2470;
  adminCreateRepo(id_UserRepositories_2470, repository_UserRepositories_2470, username_UserRepositories_2470, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  userDeleteAccessToken(username_Users_2470, token_Users_2470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_Repositories_UnadoptedRepositories", function () {
  // -> Creating Users
  let EditUserOption_Users_2570 = "EditUserOption_Users_2570_" + Math.floor(Math.random()*1000);
  let body_Users_2570 = {};
  let limit_Users_2570 = Math.floor(Math.random() * 1000);
  let page_Users_2570 = Math.floor(Math.random() * 1000);
  let token_Users_2570 = "token_Users_2570_" + Math.floor(Math.random()*1000);
  let username_Users_2570 = "username_Users_2570_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2570, body_Users_2570, limit_Users_2570, page_Users_2570, token_Users_2570, username_Users_2570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_2570 = {};
  let filepath_Repositories_2570 = "filepath_Repositories_2570_" + Math.floor(Math.random()*1000);
  let id_Repositories_2570 = Math.floor(Math.random() * 1000);
  let limit_Repositories_2570 = Math.floor(Math.random() * 1000);
  let owner_Repositories_2570 = "owner_Repositories_2570_" + Math.floor(Math.random()*1000);
  let page_Repositories_2570 = Math.floor(Math.random() * 1000);
  let repo_Repositories_2570 = "repo_Repositories_2570_" + Math.floor(Math.random()*1000);
  let username_Repositories_2570 = username_Users_2570;
  createCurrentUserRepo(body_Repositories_2570, filepath_Repositories_2570, id_Repositories_2570, limit_Repositories_2570, owner_Repositories_2570, page_Repositories_2570, repo_Repositories_2570, username_Repositories_2570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_2570 = Math.floor(Math.random() * 1000);
  let owner_UnadoptedRepositories_2570 = "owner_UnadoptedRepositories_2570_" + Math.floor(Math.random()*1000);
  let page_UnadoptedRepositories_2570 = Math.floor(Math.random() * 1000);
  let pattern_UnadoptedRepositories_2570 = "pattern_UnadoptedRepositories_2570_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_2570 = "repo_UnadoptedRepositories_2570_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_2570, owner_UnadoptedRepositories_2570, page_UnadoptedRepositories_2570, pattern_UnadoptedRepositories_2570, repo_UnadoptedRepositories_2570, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UnadoptedRepositories
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_2570, repo_UnadoptedRepositories_2570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_2570, repo_Repositories_2570, filepath_Repositories_2570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_2570, token_Users_2570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_Repositories_TeamRepos", function () {
  // -> Creating Users
  let EditUserOption_Users_2670 = "EditUserOption_Users_2670_" + Math.floor(Math.random()*1000);
  let body_Users_2670 = {};
  let limit_Users_2670 = Math.floor(Math.random() * 1000);
  let page_Users_2670 = Math.floor(Math.random() * 1000);
  let token_Users_2670 = "token_Users_2670_" + Math.floor(Math.random()*1000);
  let username_Users_2670 = "username_Users_2670_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2670, body_Users_2670, limit_Users_2670, page_Users_2670, token_Users_2670, username_Users_2670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_2670 = {};
  let filepath_Repositories_2670 = "filepath_Repositories_2670_" + Math.floor(Math.random()*1000);
  let id_Repositories_2670 = Math.floor(Math.random() * 1000);
  let limit_Repositories_2670 = Math.floor(Math.random() * 1000);
  let owner_Repositories_2670 = "owner_Repositories_2670_" + Math.floor(Math.random()*1000);
  let page_Repositories_2670 = Math.floor(Math.random() * 1000);
  let repo_Repositories_2670 = "repo_Repositories_2670_" + Math.floor(Math.random()*1000);
  let username_Repositories_2670 = username_Users_2670;
  createCurrentUserRepo(body_Repositories_2670, filepath_Repositories_2670, id_Repositories_2670, limit_Repositories_2670, owner_Repositories_2670, page_Repositories_2670, repo_Repositories_2670, username_Repositories_2670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_2670 = {};
  let limit_Organization_2670 = Math.floor(Math.random() * 1000);
  let org_Organization_2670 = "org_Organization_2670_" + Math.floor(Math.random()*1000);
  let organization_Organization_2670 = {};
  let page_Organization_2670 = Math.floor(Math.random() * 1000);
  let secretname_Organization_2670 = "secretname_Organization_2670_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_2670, limit_Organization_2670, org_Organization_2670, organization_Organization_2670, page_Organization_2670, secretname_Organization_2670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamRepos
  let id_TeamRepos_2670 = id_Repositories_2670;
  let limit_TeamRepos_2670 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_2670 = org_Organization_2670;
  let page_TeamRepos_2670 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_2670 = "repo_TeamRepos_2670_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_2670, limit_TeamRepos_2670, org_TeamRepos_2670, page_TeamRepos_2670, repo_TeamRepos_2670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_2670, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_2670, repo_Repositories_2670, filepath_Repositories_2670, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_2670, token_Users_2670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_Repositories_UserStarred", function () {
  // -> Creating Users
  let EditUserOption_Users_2770 = "EditUserOption_Users_2770_" + Math.floor(Math.random()*1000);
  let body_Users_2770 = {};
  let limit_Users_2770 = Math.floor(Math.random() * 1000);
  let page_Users_2770 = Math.floor(Math.random() * 1000);
  let token_Users_2770 = "token_Users_2770_" + Math.floor(Math.random()*1000);
  let username_Users_2770 = "username_Users_2770_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2770, body_Users_2770, limit_Users_2770, page_Users_2770, token_Users_2770, username_Users_2770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_2770 = {};
  let filepath_Repositories_2770 = "filepath_Repositories_2770_" + Math.floor(Math.random()*1000);
  let id_Repositories_2770 = Math.floor(Math.random() * 1000);
  let limit_Repositories_2770 = Math.floor(Math.random() * 1000);
  let owner_Repositories_2770 = "owner_Repositories_2770_" + Math.floor(Math.random()*1000);
  let page_Repositories_2770 = Math.floor(Math.random() * 1000);
  let repo_Repositories_2770 = "repo_Repositories_2770_" + Math.floor(Math.random()*1000);
  let username_Repositories_2770 = username_Users_2770;
  createCurrentUserRepo(body_Repositories_2770, filepath_Repositories_2770, id_Repositories_2770, limit_Repositories_2770, owner_Repositories_2770, page_Repositories_2770, repo_Repositories_2770, username_Repositories_2770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserStarred
  let limit_UserStarred_2770 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_2770 = "owner_UserStarred_2770_" + Math.floor(Math.random()*1000);
  let page_UserStarred_2770 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_2770 = "repo_UserStarred_2770_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_2770, owner_UserStarred_2770, page_UserStarred_2770, repo_UserStarred_2770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_2770, repo_UserStarred_2770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_2770, repo_Repositories_2770, filepath_Repositories_2770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_2770, token_Users_2770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserVariables", function () {
  // -> Creating Users
  let EditUserOption_Users_2870 = "EditUserOption_Users_2870_" + Math.floor(Math.random()*1000);
  let body_Users_2870 = {};
  let limit_Users_2870 = Math.floor(Math.random() * 1000);
  let page_Users_2870 = Math.floor(Math.random() * 1000);
  let token_Users_2870 = "token_Users_2870_" + Math.floor(Math.random()*1000);
  let username_Users_2870 = "username_Users_2870_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2870, body_Users_2870, limit_Users_2870, page_Users_2870, token_Users_2870, username_Users_2870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserVariables
  let body_UserVariables_2870 = {};
  let variablename_UserVariables_2870 = "variablename_UserVariables_2870_" + Math.floor(Math.random()*1000);
  createUserVariable(body_UserVariables_2870, variablename_UserVariables_2870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserVariables
  deleteUserVariable(variablename_UserVariables_2870, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_2870, token_Users_2870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_OAuth2Applications", function () {
  // -> Creating Users
  let EditUserOption_Users_2970 = "EditUserOption_Users_2970_" + Math.floor(Math.random()*1000);
  let body_Users_2970 = {};
  let limit_Users_2970 = Math.floor(Math.random() * 1000);
  let page_Users_2970 = Math.floor(Math.random() * 1000);
  let token_Users_2970 = "token_Users_2970_" + Math.floor(Math.random()*1000);
  let username_Users_2970 = "username_Users_2970_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_2970, body_Users_2970, limit_Users_2970, page_Users_2970, token_Users_2970, username_Users_2970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OAuth2Applications
  let body_OAuth2Applications_2970 = {};
  let id_OAuth2Applications_2970 = Math.floor(Math.random() * 1000);
  let limit_OAuth2Applications_2970 = Math.floor(Math.random() * 1000);
  let page_OAuth2Applications_2970 = Math.floor(Math.random() * 1000);
  userCreateOAuth2Application(body_OAuth2Applications_2970, id_OAuth2Applications_2970, limit_OAuth2Applications_2970, page_OAuth2Applications_2970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting OAuth2Applications
  userDeleteOAuth2Application(id_OAuth2Applications_2970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_2970, token_Users_2970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserAvatar", function () {
  // -> Creating Users
  let EditUserOption_Users_3070 = "EditUserOption_Users_3070_" + Math.floor(Math.random()*1000);
  let body_Users_3070 = {};
  let limit_Users_3070 = Math.floor(Math.random() * 1000);
  let page_Users_3070 = Math.floor(Math.random() * 1000);
  let token_Users_3070 = "token_Users_3070_" + Math.floor(Math.random()*1000);
  let username_Users_3070 = "username_Users_3070_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_3070, body_Users_3070, limit_Users_3070, page_Users_3070, token_Users_3070, username_Users_3070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserAvatar
  let body_UserAvatar_3070 = {};
  let id_UserAvatar_3070 = "id_UserAvatar_3070_" + Math.floor(Math.random()*1000);
  userUpdateAvatar(body_UserAvatar_3070, id_UserAvatar_3070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserAvatar
  userDeleteAvatar(id_UserAvatar_3070, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_3070, token_Users_3070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserEmails", function () {
  // -> Creating Users
  let EditUserOption_Users_3170 = "EditUserOption_Users_3170_" + Math.floor(Math.random()*1000);
  let body_Users_3170 = {};
  let limit_Users_3170 = Math.floor(Math.random() * 1000);
  let page_Users_3170 = Math.floor(Math.random() * 1000);
  let token_Users_3170 = "token_Users_3170_" + Math.floor(Math.random()*1000);
  let username_Users_3170 = "username_Users_3170_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_3170, body_Users_3170, limit_Users_3170, page_Users_3170, token_Users_3170, username_Users_3170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserEmails
  let body_UserEmails_3170 = {};
  let id_UserEmails_3170 = "id_UserEmails_3170_" + Math.floor(Math.random()*1000);
  userAddEmail(body_UserEmails_3170, id_UserEmails_3170, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserEmails
  userDeleteEmail(id_UserEmails_3170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_3170, token_Users_3170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_GPGKeys", function () {
  // -> Creating Users
  let EditUserOption_Users_3270 = "EditUserOption_Users_3270_" + Math.floor(Math.random()*1000);
  let body_Users_3270 = {};
  let limit_Users_3270 = Math.floor(Math.random() * 1000);
  let page_Users_3270 = Math.floor(Math.random() * 1000);
  let token_Users_3270 = "token_Users_3270_" + Math.floor(Math.random()*1000);
  let username_Users_3270 = "username_Users_3270_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_3270, body_Users_3270, limit_Users_3270, page_Users_3270, token_Users_3270, username_Users_3270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GPGKeys
  let Form_GPGKeys_3270 = {};
  let id_GPGKeys_3270 = Math.floor(Math.random() * 1000);
  let limit_GPGKeys_3270 = Math.floor(Math.random() * 1000);
  let page_GPGKeys_3270 = Math.floor(Math.random() * 1000);
  userCurrentPostGPGKey(Form_GPGKeys_3270, id_GPGKeys_3270, limit_GPGKeys_3270, page_GPGKeys_3270, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting GPGKeys
  userCurrentDeleteGPGKey(id_GPGKeys_3270, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_3270, token_Users_3270, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_GPGKeyVerification", function () {
  // -> Creating Users
  let EditUserOption_Users_3370 = "EditUserOption_Users_3370_" + Math.floor(Math.random()*1000);
  let body_Users_3370 = {};
  let limit_Users_3370 = Math.floor(Math.random() * 1000);
  let page_Users_3370 = Math.floor(Math.random() * 1000);
  let token_Users_3370 = "token_Users_3370_" + Math.floor(Math.random()*1000);
  let username_Users_3370 = "username_Users_3370_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_3370, body_Users_3370, limit_Users_3370, page_Users_3370, token_Users_3370, username_Users_3370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GPGKeyVerification
  let id_GPGKeyVerification_3370 = "id_GPGKeyVerification_3370_" + Math.floor(Math.random()*1000);
  userVerifyGPGKey(id_GPGKeyVerification_3370, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Users
  userDeleteAccessToken(username_Users_3370, token_Users_3370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_Keys", function () {
  // -> Creating Users
  let EditUserOption_Users_3470 = "EditUserOption_Users_3470_" + Math.floor(Math.random()*1000);
  let body_Users_3470 = {};
  let limit_Users_3470 = Math.floor(Math.random() * 1000);
  let page_Users_3470 = Math.floor(Math.random() * 1000);
  let token_Users_3470 = "token_Users_3470_" + Math.floor(Math.random()*1000);
  let username_Users_3470 = "username_Users_3470_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_3470, body_Users_3470, limit_Users_3470, page_Users_3470, token_Users_3470, username_Users_3470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Keys
  let body_Keys_3470 = {};
  let fingerprint_Keys_3470 = "fingerprint_Keys_3470_" + Math.floor(Math.random()*1000);
  let id_Keys_3470 = Math.floor(Math.random() * 1000);
  let limit_Keys_3470 = Math.floor(Math.random() * 1000);
  let page_Keys_3470 = Math.floor(Math.random() * 1000);
  userCurrentPostKey(body_Keys_3470, fingerprint_Keys_3470, id_Keys_3470, limit_Keys_3470, page_Keys_3470, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Keys
  userCurrentDeleteKey(id_Keys_3470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_3470, token_Users_3470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Users_UserStarred", function () {
  // -> Creating Users
  let EditUserOption_Users_3570 = "EditUserOption_Users_3570_" + Math.floor(Math.random()*1000);
  let body_Users_3570 = {};
  let limit_Users_3570 = Math.floor(Math.random() * 1000);
  let page_Users_3570 = Math.floor(Math.random() * 1000);
  let token_Users_3570 = "token_Users_3570_" + Math.floor(Math.random()*1000);
  let username_Users_3570 = "username_Users_3570_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_3570, body_Users_3570, limit_Users_3570, page_Users_3570, token_Users_3570, username_Users_3570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_3570 = {};
  let filepath_Repositories_3570 = "filepath_Repositories_3570_" + Math.floor(Math.random()*1000);
  let id_Repositories_3570 = Math.floor(Math.random() * 1000);
  let limit_Repositories_3570 = Math.floor(Math.random() * 1000);
  let owner_Repositories_3570 = "owner_Repositories_3570_" + Math.floor(Math.random()*1000);
  let page_Repositories_3570 = Math.floor(Math.random() * 1000);
  let repo_Repositories_3570 = "repo_Repositories_3570_" + Math.floor(Math.random()*1000);
  let username_Repositories_3570 = username_Users_3570;
  createCurrentUserRepo(body_Repositories_3570, filepath_Repositories_3570, id_Repositories_3570, limit_Repositories_3570, owner_Repositories_3570, page_Repositories_3570, repo_Repositories_3570, username_Repositories_3570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserStarred
  let limit_UserStarred_3570 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_3570 = "owner_UserStarred_3570_" + Math.floor(Math.random()*1000);
  let page_UserStarred_3570 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_3570 = "repo_UserStarred_3570_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_3570, owner_UserStarred_3570, page_UserStarred_3570, repo_UserStarred_3570, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_3570, repo_UserStarred_3570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  userDeleteAccessToken(username_Users_3570, token_Users_3570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_OrgVariables", function () {
  // -> Creating Organization
  let body_Organization_3670 = {};
  let limit_Organization_3670 = Math.floor(Math.random() * 1000);
  let org_Organization_3670 = "org_Organization_3670_" + Math.floor(Math.random()*1000);
  let organization_Organization_3670 = {};
  let page_Organization_3670 = Math.floor(Math.random() * 1000);
  let secretname_Organization_3670 = "secretname_Organization_3670_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_3670, limit_Organization_3670, org_Organization_3670, organization_Organization_3670, page_Organization_3670, secretname_Organization_3670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrgVariables
  let body_OrgVariables_3670 = "body_OrgVariables_3670_" + Math.floor(Math.random()*1000);
  let org_OrgVariables_3670 = org_Organization_3670;
  let variablename_OrgVariables_3670 = "variablename_OrgVariables_3670_" + Math.floor(Math.random()*1000);
  createOrgVariable(body_OrgVariables_3670, org_OrgVariables_3670, variablename_OrgVariables_3670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting OrgVariables
  orgDelete(org_OrgVariables_3670, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_3670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_Avatar", function () {
  // -> Creating Organization
  let body_Organization_3770 = {};
  let limit_Organization_3770 = Math.floor(Math.random() * 1000);
  let org_Organization_3770 = "org_Organization_3770_" + Math.floor(Math.random()*1000);
  let organization_Organization_3770 = {};
  let page_Organization_3770 = Math.floor(Math.random() * 1000);
  let secretname_Organization_3770 = "secretname_Organization_3770_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_3770, limit_Organization_3770, org_Organization_3770, organization_Organization_3770, page_Organization_3770, secretname_Organization_3770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Avatar
  let body_Avatar_3770 = {};
  let org_Avatar_3770 = org_Organization_3770;
  orgUpdateAvatar(body_Avatar_3770, org_Avatar_3770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Avatar
  orgDeleteAvatar(org_Avatar_3770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_3770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_OrganizationRepos", function () {
  // -> Creating Organization
  let body_Organization_3870 = {};
  let limit_Organization_3870 = Math.floor(Math.random() * 1000);
  let org_Organization_3870 = "org_Organization_3870_" + Math.floor(Math.random()*1000);
  let organization_Organization_3870 = {};
  let page_Organization_3870 = Math.floor(Math.random() * 1000);
  let secretname_Organization_3870 = "secretname_Organization_3870_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_3870, limit_Organization_3870, org_Organization_3870, organization_Organization_3870, page_Organization_3870, secretname_Organization_3870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrganizationRepos
  let body_OrganizationRepos_3870 = {};
  let id_OrganizationRepos_3870 = "id_OrganizationRepos_3870_" + Math.floor(Math.random()*1000);
  let limit_OrganizationRepos_3870 = Math.floor(Math.random() * 1000);
  let org_OrganizationRepos_3870 = org_Organization_3870;
  let page_OrganizationRepos_3870 = Math.floor(Math.random() * 1000);
  createOrgRepo(body_OrganizationRepos_3870, id_OrganizationRepos_3870, limit_OrganizationRepos_3870, org_OrganizationRepos_3870, page_OrganizationRepos_3870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Organization
  orgDelete(org_Organization_3870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_OrganizationTeams", function () {
  // -> Creating Organization
  let body_Organization_3970 = {};
  let limit_Organization_3970 = Math.floor(Math.random() * 1000);
  let org_Organization_3970 = "org_Organization_3970_" + Math.floor(Math.random()*1000);
  let organization_Organization_3970 = {};
  let page_Organization_3970 = Math.floor(Math.random() * 1000);
  let secretname_Organization_3970 = "secretname_Organization_3970_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_3970, limit_Organization_3970, org_Organization_3970, organization_Organization_3970, page_Organization_3970, secretname_Organization_3970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating OrganizationTeams
  let body_OrganizationTeams_3970 = {};
  let id_OrganizationTeams_3970 = "id_OrganizationTeams_3970_" + Math.floor(Math.random()*1000);
  let limit_OrganizationTeams_3970 = Math.floor(Math.random() * 1000);
  let org_OrganizationTeams_3970 = org_Organization_3970;
  let page_OrganizationTeams_3970 = Math.floor(Math.random() * 1000);
  orgCreateTeam(body_OrganizationTeams_3970, id_OrganizationTeams_3970, limit_OrganizationTeams_3970, org_OrganizationTeams_3970, page_OrganizationTeams_3970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Organization
  orgDelete(org_Organization_3970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_TeamMembers", function () {
  // -> Creating Organization
  let body_Organization_4070 = {};
  let limit_Organization_4070 = Math.floor(Math.random() * 1000);
  let org_Organization_4070 = "org_Organization_4070_" + Math.floor(Math.random()*1000);
  let organization_Organization_4070 = {};
  let page_Organization_4070 = Math.floor(Math.random() * 1000);
  let secretname_Organization_4070 = "secretname_Organization_4070_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_4070, limit_Organization_4070, org_Organization_4070, organization_Organization_4070, page_Organization_4070, secretname_Organization_4070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamMembers
  let id_TeamMembers_4070 = "id_TeamMembers_4070_" + Math.floor(Math.random()*1000);
  let limit_TeamMembers_4070 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_4070 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_4070 = "username_TeamMembers_4070_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_4070, limit_TeamMembers_4070, page_TeamMembers_4070, username_TeamMembers_4070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_4070, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_4070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Organization_TeamRepos", function () {
  // -> Creating Organization
  let body_Organization_4170 = {};
  let limit_Organization_4170 = Math.floor(Math.random() * 1000);
  let org_Organization_4170 = "org_Organization_4170_" + Math.floor(Math.random()*1000);
  let organization_Organization_4170 = {};
  let page_Organization_4170 = Math.floor(Math.random() * 1000);
  let secretname_Organization_4170 = "secretname_Organization_4170_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_4170, limit_Organization_4170, org_Organization_4170, organization_Organization_4170, page_Organization_4170, secretname_Organization_4170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Users
  let EditUserOption_Users_4170 = "EditUserOption_Users_4170_" + Math.floor(Math.random()*1000);
  let body_Users_4170 = {};
  let limit_Users_4170 = Math.floor(Math.random() * 1000);
  let page_Users_4170 = Math.floor(Math.random() * 1000);
  let token_Users_4170 = "token_Users_4170_" + Math.floor(Math.random()*1000);
  let username_Users_4170 = "username_Users_4170_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_4170, body_Users_4170, limit_Users_4170, page_Users_4170, token_Users_4170, username_Users_4170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_4170 = {};
  let filepath_Repositories_4170 = "filepath_Repositories_4170_" + Math.floor(Math.random()*1000);
  let id_Repositories_4170 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4170 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4170 = "owner_Repositories_4170_" + Math.floor(Math.random()*1000);
  let page_Repositories_4170 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4170 = "repo_Repositories_4170_" + Math.floor(Math.random()*1000);
  let username_Repositories_4170 = username_Users_4170;
  createCurrentUserRepo(body_Repositories_4170, filepath_Repositories_4170, id_Repositories_4170, limit_Repositories_4170, owner_Repositories_4170, page_Repositories_4170, repo_Repositories_4170, username_Repositories_4170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamRepos
  let id_TeamRepos_4170 = id_Repositories_4170;
  let limit_TeamRepos_4170 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_4170 = org_Organization_4170;
  let page_TeamRepos_4170 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_4170 = "repo_TeamRepos_4170_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_4170, limit_TeamRepos_4170, org_TeamRepos_4170, page_TeamRepos_4170, repo_TeamRepos_4170, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_4170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Organization
  orgDelete(org_Organization_4170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Teams_TeamMembers", function () {
  // -> Creating Organization
  let body_Organization_4270 = {};
  let limit_Organization_4270 = Math.floor(Math.random() * 1000);
  let org_Organization_4270 = "org_Organization_4270_" + Math.floor(Math.random()*1000);
  let organization_Organization_4270 = {};
  let page_Organization_4270 = Math.floor(Math.random() * 1000);
  let secretname_Organization_4270 = "secretname_Organization_4270_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_4270, limit_Organization_4270, org_Organization_4270, organization_Organization_4270, page_Organization_4270, secretname_Organization_4270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamMembers
  let id_TeamMembers_4270 = "id_TeamMembers_4270_" + Math.floor(Math.random()*1000);
  let limit_TeamMembers_4270 = Math.floor(Math.random() * 1000);
  let page_TeamMembers_4270 = Math.floor(Math.random() * 1000);
  let username_TeamMembers_4270 = "username_TeamMembers_4270_" + Math.floor(Math.random()*1000);
  orgAddTeamMember(id_TeamMembers_4270, limit_TeamMembers_4270, page_TeamMembers_4270, username_TeamMembers_4270, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamMembers
  orgDeleteTeam(id_TeamMembers_4270, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Teams_TeamRepos", function () {
  // -> Creating Organization
  let body_Organization_4370 = {};
  let limit_Organization_4370 = Math.floor(Math.random() * 1000);
  let org_Organization_4370 = "org_Organization_4370_" + Math.floor(Math.random()*1000);
  let organization_Organization_4370 = {};
  let page_Organization_4370 = Math.floor(Math.random() * 1000);
  let secretname_Organization_4370 = "secretname_Organization_4370_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_4370, limit_Organization_4370, org_Organization_4370, organization_Organization_4370, page_Organization_4370, secretname_Organization_4370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Users
  let EditUserOption_Users_4370 = "EditUserOption_Users_4370_" + Math.floor(Math.random()*1000);
  let body_Users_4370 = {};
  let limit_Users_4370 = Math.floor(Math.random() * 1000);
  let page_Users_4370 = Math.floor(Math.random() * 1000);
  let token_Users_4370 = "token_Users_4370_" + Math.floor(Math.random()*1000);
  let username_Users_4370 = "username_Users_4370_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_4370, body_Users_4370, limit_Users_4370, page_Users_4370, token_Users_4370, username_Users_4370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_4370 = {};
  let filepath_Repositories_4370 = "filepath_Repositories_4370_" + Math.floor(Math.random()*1000);
  let id_Repositories_4370 = Math.floor(Math.random() * 1000);
  let limit_Repositories_4370 = Math.floor(Math.random() * 1000);
  let owner_Repositories_4370 = "owner_Repositories_4370_" + Math.floor(Math.random()*1000);
  let page_Repositories_4370 = Math.floor(Math.random() * 1000);
  let repo_Repositories_4370 = "repo_Repositories_4370_" + Math.floor(Math.random()*1000);
  let username_Repositories_4370 = username_Users_4370;
  createCurrentUserRepo(body_Repositories_4370, filepath_Repositories_4370, id_Repositories_4370, limit_Repositories_4370, owner_Repositories_4370, page_Repositories_4370, repo_Repositories_4370, username_Repositories_4370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamRepos
  let id_TeamRepos_4370 = id_Repositories_4370;
  let limit_TeamRepos_4370 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_4370 = org_Organization_4370;
  let page_TeamRepos_4370 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_4370 = "repo_TeamRepos_4370_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_4370, limit_TeamRepos_4370, org_TeamRepos_4370, page_TeamRepos_4370, repo_TeamRepos_4370, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_4370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueCommentAttachments", function () {
  // -> Creating Repository
  let body_Repository_4470 = {};
  let id_Repository_4470 = "id_Repository_4470_" + Math.floor(Math.random()*1000);
  let limit_Repository_4470 = Math.floor(Math.random() * 1000);
  let owner_Repository_4470 = "owner_Repository_4470_" + Math.floor(Math.random()*1000);
  let page_Repository_4470 = Math.floor(Math.random() * 1000);
  let repo_Repository_4470 = "repo_Repository_4470_" + Math.floor(Math.random()*1000);
  let sha_Repository_4470 = "sha_Repository_4470_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4470, id_Repository_4470, limit_Repository_4470, owner_Repository_4470, page_Repository_4470, repo_Repository_4470, sha_Repository_4470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4470 = {};
  let id_Issues_4470 = id_Repository_4470;
  let index_Issues_4470 = Math.floor(Math.random() * 1000);
  let limit_Issues_4470 = Math.floor(Math.random() * 1000);
  let owner_Issues_4470 = "owner_Issues_4470_" + Math.floor(Math.random()*1000);
  let page_Issues_4470 = Math.floor(Math.random() * 1000);
  let position_Issues_4470 = Math.floor(Math.random() * 1000);
  let repo_Issues_4470 = "repo_Issues_4470_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4470, id_Issues_4470, index_Issues_4470, limit_Issues_4470, owner_Issues_4470, page_Issues_4470, position_Issues_4470, repo_Issues_4470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_4470 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_4470 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_4470 = {};
  let id_IssueCommentAttachments_4470 = id_Issues_4470;
  let name_IssueCommentAttachments_4470 = "name_IssueCommentAttachments_4470_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_4470 = "owner_IssueCommentAttachments_4470_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_4470 = "repo_IssueCommentAttachments_4470_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_4470, attachment_id_IssueCommentAttachments_4470, body_IssueCommentAttachments_4470, id_IssueCommentAttachments_4470, name_IssueCommentAttachments_4470, owner_IssueCommentAttachments_4470, repo_IssueCommentAttachments_4470, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_4470, repo_IssueCommentAttachments_4470, id_IssueCommentAttachments_4470, attachment_id_IssueCommentAttachments_4470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4470, repo_Issues_4470, index_Issues_4470, id_Issues_4470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueCommentReactions", function () {
  // -> Creating Repository
  let body_Repository_4570 = {};
  let id_Repository_4570 = "id_Repository_4570_" + Math.floor(Math.random()*1000);
  let limit_Repository_4570 = Math.floor(Math.random() * 1000);
  let owner_Repository_4570 = "owner_Repository_4570_" + Math.floor(Math.random()*1000);
  let page_Repository_4570 = Math.floor(Math.random() * 1000);
  let repo_Repository_4570 = "repo_Repository_4570_" + Math.floor(Math.random()*1000);
  let sha_Repository_4570 = "sha_Repository_4570_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4570, id_Repository_4570, limit_Repository_4570, owner_Repository_4570, page_Repository_4570, repo_Repository_4570, sha_Repository_4570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4570 = {};
  let id_Issues_4570 = id_Repository_4570;
  let index_Issues_4570 = Math.floor(Math.random() * 1000);
  let limit_Issues_4570 = Math.floor(Math.random() * 1000);
  let owner_Issues_4570 = "owner_Issues_4570_" + Math.floor(Math.random()*1000);
  let page_Issues_4570 = Math.floor(Math.random() * 1000);
  let position_Issues_4570 = Math.floor(Math.random() * 1000);
  let repo_Issues_4570 = "repo_Issues_4570_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4570, id_Issues_4570, index_Issues_4570, limit_Issues_4570, owner_Issues_4570, page_Issues_4570, position_Issues_4570, repo_Issues_4570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_4570 = {};
  let id_IssueCommentReactions_4570 = id_Issues_4570;
  let owner_IssueCommentReactions_4570 = "owner_IssueCommentReactions_4570_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_4570 = "repo_IssueCommentReactions_4570_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_4570, id_IssueCommentReactions_4570, owner_IssueCommentReactions_4570, repo_IssueCommentReactions_4570, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_4570, repo_IssueCommentReactions_4570, id_IssueCommentReactions_4570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4570, repo_Issues_4570, index_Issues_4570, id_Issues_4570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueAttachments", function () {
  // -> Creating Repository
  let body_Repository_4670 = {};
  let id_Repository_4670 = "id_Repository_4670_" + Math.floor(Math.random()*1000);
  let limit_Repository_4670 = Math.floor(Math.random() * 1000);
  let owner_Repository_4670 = "owner_Repository_4670_" + Math.floor(Math.random()*1000);
  let page_Repository_4670 = Math.floor(Math.random() * 1000);
  let repo_Repository_4670 = "repo_Repository_4670_" + Math.floor(Math.random()*1000);
  let sha_Repository_4670 = "sha_Repository_4670_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4670, id_Repository_4670, limit_Repository_4670, owner_Repository_4670, page_Repository_4670, repo_Repository_4670, sha_Repository_4670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4670 = {};
  let id_Issues_4670 = id_Repository_4670;
  let index_Issues_4670 = Math.floor(Math.random() * 1000);
  let limit_Issues_4670 = Math.floor(Math.random() * 1000);
  let owner_Issues_4670 = "owner_Issues_4670_" + Math.floor(Math.random()*1000);
  let page_Issues_4670 = Math.floor(Math.random() * 1000);
  let position_Issues_4670 = Math.floor(Math.random() * 1000);
  let repo_Issues_4670 = "repo_Issues_4670_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4670, id_Issues_4670, index_Issues_4670, limit_Issues_4670, owner_Issues_4670, page_Issues_4670, position_Issues_4670, repo_Issues_4670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueAttachments
  let attachment_IssueAttachments_4670 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_4670 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_4670 = {};
  let id_IssueAttachments_4670 = id_Issues_4670;
  let index_IssueAttachments_4670 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_4670 = "name_IssueAttachments_4670_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_4670 = "owner_IssueAttachments_4670_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_4670 = "repo_IssueAttachments_4670_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_4670, attachment_id_IssueAttachments_4670, body_IssueAttachments_4670, id_IssueAttachments_4670, index_IssueAttachments_4670, name_IssueAttachments_4670, owner_IssueAttachments_4670, repo_IssueAttachments_4670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_4670, repo_IssueAttachments_4670, index_IssueAttachments_4670, attachment_id_IssueAttachments_4670, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4670, repo_Issues_4670, index_Issues_4670, id_Issues_4670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueBlocks", function () {
  // -> Creating Repository
  let body_Repository_4770 = {};
  let id_Repository_4770 = "id_Repository_4770_" + Math.floor(Math.random()*1000);
  let limit_Repository_4770 = Math.floor(Math.random() * 1000);
  let owner_Repository_4770 = "owner_Repository_4770_" + Math.floor(Math.random()*1000);
  let page_Repository_4770 = Math.floor(Math.random() * 1000);
  let repo_Repository_4770 = "repo_Repository_4770_" + Math.floor(Math.random()*1000);
  let sha_Repository_4770 = "sha_Repository_4770_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4770, id_Repository_4770, limit_Repository_4770, owner_Repository_4770, page_Repository_4770, repo_Repository_4770, sha_Repository_4770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4770 = {};
  let id_Issues_4770 = id_Repository_4770;
  let index_Issues_4770 = Math.floor(Math.random() * 1000);
  let limit_Issues_4770 = Math.floor(Math.random() * 1000);
  let owner_Issues_4770 = "owner_Issues_4770_" + Math.floor(Math.random()*1000);
  let page_Issues_4770 = Math.floor(Math.random() * 1000);
  let position_Issues_4770 = Math.floor(Math.random() * 1000);
  let repo_Issues_4770 = "repo_Issues_4770_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4770, id_Issues_4770, index_Issues_4770, limit_Issues_4770, owner_Issues_4770, page_Issues_4770, position_Issues_4770, repo_Issues_4770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueBlocks
  let body_IssueBlocks_4770 = {};
  let index_IssueBlocks_4770 = "index_IssueBlocks_4770_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_4770 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_4770 = "owner_IssueBlocks_4770_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_4770 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_4770 = "repo_IssueBlocks_4770_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_4770, index_IssueBlocks_4770, limit_IssueBlocks_4770, owner_IssueBlocks_4770, page_IssueBlocks_4770, repo_IssueBlocks_4770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_4770, repo_IssueBlocks_4770, index_IssueBlocks_4770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4770, repo_Issues_4770, index_Issues_4770, id_Issues_4770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueComments", function () {
  // -> Creating Repository
  let body_Repository_4870 = {};
  let id_Repository_4870 = "id_Repository_4870_" + Math.floor(Math.random()*1000);
  let limit_Repository_4870 = Math.floor(Math.random() * 1000);
  let owner_Repository_4870 = "owner_Repository_4870_" + Math.floor(Math.random()*1000);
  let page_Repository_4870 = Math.floor(Math.random() * 1000);
  let repo_Repository_4870 = "repo_Repository_4870_" + Math.floor(Math.random()*1000);
  let sha_Repository_4870 = "sha_Repository_4870_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4870, id_Repository_4870, limit_Repository_4870, owner_Repository_4870, page_Repository_4870, repo_Repository_4870, sha_Repository_4870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4870 = {};
  let id_Issues_4870 = id_Repository_4870;
  let index_Issues_4870 = Math.floor(Math.random() * 1000);
  let limit_Issues_4870 = Math.floor(Math.random() * 1000);
  let owner_Issues_4870 = "owner_Issues_4870_" + Math.floor(Math.random()*1000);
  let page_Issues_4870 = Math.floor(Math.random() * 1000);
  let position_Issues_4870 = Math.floor(Math.random() * 1000);
  let repo_Issues_4870 = "repo_Issues_4870_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4870, id_Issues_4870, index_Issues_4870, limit_Issues_4870, owner_Issues_4870, page_Issues_4870, position_Issues_4870, repo_Issues_4870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueComments
  let before_IssueComments_4870 = "before_IssueComments_4870_" + Math.floor(Math.random()*1000);
  let body_IssueComments_4870 = {};
  let id_IssueComments_4870 = id_Issues_4870;
  let index_IssueComments_4870 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_4870 = "owner_IssueComments_4870_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_4870 = "repo_IssueComments_4870_" + Math.floor(Math.random()*1000);
  let since_IssueComments_4870 = "since_IssueComments_4870_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_4870, body_IssueComments_4870, id_IssueComments_4870, index_IssueComments_4870, owner_IssueComments_4870, repo_IssueComments_4870, since_IssueComments_4870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_4870, repo_IssueComments_4870, index_IssueComments_4870, id_IssueComments_4870, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4870, repo_Issues_4870, index_Issues_4870, id_Issues_4870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueSubscriptions", function () {
  // -> Creating Repository
  let body_Repository_4970 = {};
  let id_Repository_4970 = "id_Repository_4970_" + Math.floor(Math.random()*1000);
  let limit_Repository_4970 = Math.floor(Math.random() * 1000);
  let owner_Repository_4970 = "owner_Repository_4970_" + Math.floor(Math.random()*1000);
  let page_Repository_4970 = Math.floor(Math.random() * 1000);
  let repo_Repository_4970 = "repo_Repository_4970_" + Math.floor(Math.random()*1000);
  let sha_Repository_4970 = "sha_Repository_4970_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_4970, id_Repository_4970, limit_Repository_4970, owner_Repository_4970, page_Repository_4970, repo_Repository_4970, sha_Repository_4970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_4970 = {};
  let id_Issues_4970 = id_Repository_4970;
  let index_Issues_4970 = Math.floor(Math.random() * 1000);
  let limit_Issues_4970 = Math.floor(Math.random() * 1000);
  let owner_Issues_4970 = "owner_Issues_4970_" + Math.floor(Math.random()*1000);
  let page_Issues_4970 = Math.floor(Math.random() * 1000);
  let position_Issues_4970 = Math.floor(Math.random() * 1000);
  let repo_Issues_4970 = "repo_Issues_4970_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_4970, id_Issues_4970, index_Issues_4970, limit_Issues_4970, owner_Issues_4970, page_Issues_4970, position_Issues_4970, repo_Issues_4970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_4970 = id_Issues_4970;
  let index_IssueSubscriptions_4970 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_4970 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_4970 = "owner_IssueSubscriptions_4970_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_4970 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_4970 = "repo_IssueSubscriptions_4970_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_4970 = "user_IssueSubscriptions_4970_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_4970, index_IssueSubscriptions_4970, limit_IssueSubscriptions_4970, owner_IssueSubscriptions_4970, page_IssueSubscriptions_4970, repo_IssueSubscriptions_4970, user_IssueSubscriptions_4970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_4970, repo_IssueSubscriptions_4970, index_IssueSubscriptions_4970, user_IssueSubscriptions_4970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_4970, repo_Issues_4970, index_Issues_4970, id_Issues_4970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Issues_IssueTimes", function () {
  // -> Creating Repository
  let body_Repository_5070 = {};
  let id_Repository_5070 = "id_Repository_5070_" + Math.floor(Math.random()*1000);
  let limit_Repository_5070 = Math.floor(Math.random() * 1000);
  let owner_Repository_5070 = "owner_Repository_5070_" + Math.floor(Math.random()*1000);
  let page_Repository_5070 = Math.floor(Math.random() * 1000);
  let repo_Repository_5070 = "repo_Repository_5070_" + Math.floor(Math.random()*1000);
  let sha_Repository_5070 = "sha_Repository_5070_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5070, id_Repository_5070, limit_Repository_5070, owner_Repository_5070, page_Repository_5070, repo_Repository_5070, sha_Repository_5070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_5070 = {};
  let id_Issues_5070 = id_Repository_5070;
  let index_Issues_5070 = Math.floor(Math.random() * 1000);
  let limit_Issues_5070 = Math.floor(Math.random() * 1000);
  let owner_Issues_5070 = "owner_Issues_5070_" + Math.floor(Math.random()*1000);
  let page_Issues_5070 = Math.floor(Math.random() * 1000);
  let position_Issues_5070 = Math.floor(Math.random() * 1000);
  let repo_Issues_5070 = "repo_Issues_5070_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_5070, id_Issues_5070, index_Issues_5070, limit_Issues_5070, owner_Issues_5070, page_Issues_5070, position_Issues_5070, repo_Issues_5070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueTimes
  let before_IssueTimes_5070 = "before_IssueTimes_5070_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_5070 = {};
  let index_IssueTimes_5070 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_5070 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_5070 = "owner_IssueTimes_5070_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_5070 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_5070 = "repo_IssueTimes_5070_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_5070 = "since_IssueTimes_5070_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_5070 = "user_IssueTimes_5070_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_5070, body_IssueTimes_5070, index_IssueTimes_5070, limit_IssueTimes_5070, owner_IssueTimes_5070, page_IssueTimes_5070, repo_IssueTimes_5070, since_IssueTimes_5070, user_IssueTimes_5070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_5070, repo_IssueTimes_5070, index_IssueTimes_5070, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_5070, repo_Issues_5070, index_Issues_5070, id_Issues_5070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Labels", function () {
  // -> Creating Repository
  let body_Repository_5170 = {};
  let id_Repository_5170 = "id_Repository_5170_" + Math.floor(Math.random()*1000);
  let limit_Repository_5170 = Math.floor(Math.random() * 1000);
  let owner_Repository_5170 = "owner_Repository_5170_" + Math.floor(Math.random()*1000);
  let page_Repository_5170 = Math.floor(Math.random() * 1000);
  let repo_Repository_5170 = "repo_Repository_5170_" + Math.floor(Math.random()*1000);
  let sha_Repository_5170 = "sha_Repository_5170_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5170, id_Repository_5170, limit_Repository_5170, owner_Repository_5170, page_Repository_5170, repo_Repository_5170, sha_Repository_5170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Labels
  let body_Labels_5170 = {};
  let color_Labels_5170 = "color_Labels_5170_" + Math.floor(Math.random()*1000);
  let description_Labels_5170 = "description_Labels_5170_" + Math.floor(Math.random()*1000);
  let id_Labels_5170 = id_Repository_5170;
  let limit_Labels_5170 = Math.floor(Math.random() * 1000);
  let name_Labels_5170 = "name_Labels_5170_" + Math.floor(Math.random()*1000);
  let owner_Labels_5170 = "owner_Labels_5170_" + Math.floor(Math.random()*1000);
  let page_Labels_5170 = Math.floor(Math.random() * 1000);
  let repo_Labels_5170 = "repo_Labels_5170_" + Math.floor(Math.random()*1000);
  issueCreateLabel(body_Labels_5170, color_Labels_5170, description_Labels_5170, id_Labels_5170, limit_Labels_5170, name_Labels_5170, owner_Labels_5170, page_Labels_5170, repo_Labels_5170, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Labels
  issueDeleteLabel(owner_Labels_5170, repo_Labels_5170, id_Labels_5170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5170, repo_Repository_5170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueCommentAttachments", function () {
  // -> Creating Repository
  let body_Repository_5270 = {};
  let id_Repository_5270 = "id_Repository_5270_" + Math.floor(Math.random()*1000);
  let limit_Repository_5270 = Math.floor(Math.random() * 1000);
  let owner_Repository_5270 = "owner_Repository_5270_" + Math.floor(Math.random()*1000);
  let page_Repository_5270 = Math.floor(Math.random() * 1000);
  let repo_Repository_5270 = "repo_Repository_5270_" + Math.floor(Math.random()*1000);
  let sha_Repository_5270 = "sha_Repository_5270_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5270, id_Repository_5270, limit_Repository_5270, owner_Repository_5270, page_Repository_5270, repo_Repository_5270, sha_Repository_5270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_5270 = {};
  let id_Issues_5270 = id_Repository_5270;
  let index_Issues_5270 = Math.floor(Math.random() * 1000);
  let limit_Issues_5270 = Math.floor(Math.random() * 1000);
  let owner_Issues_5270 = "owner_Issues_5270_" + Math.floor(Math.random()*1000);
  let page_Issues_5270 = Math.floor(Math.random() * 1000);
  let position_Issues_5270 = Math.floor(Math.random() * 1000);
  let repo_Issues_5270 = "repo_Issues_5270_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_5270, id_Issues_5270, index_Issues_5270, limit_Issues_5270, owner_Issues_5270, page_Issues_5270, position_Issues_5270, repo_Issues_5270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_5270 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_5270 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_5270 = {};
  let id_IssueCommentAttachments_5270 = id_Issues_5270;
  let name_IssueCommentAttachments_5270 = "name_IssueCommentAttachments_5270_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_5270 = "owner_IssueCommentAttachments_5270_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_5270 = "repo_IssueCommentAttachments_5270_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_5270, attachment_id_IssueCommentAttachments_5270, body_IssueCommentAttachments_5270, id_IssueCommentAttachments_5270, name_IssueCommentAttachments_5270, owner_IssueCommentAttachments_5270, repo_IssueCommentAttachments_5270, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_5270, repo_IssueCommentAttachments_5270, id_IssueCommentAttachments_5270, attachment_id_IssueCommentAttachments_5270, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_5270, repo_Issues_5270, index_Issues_5270, id_Issues_5270, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5270, repo_Repository_5270, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueCommentReactions", function () {
  // -> Creating Repository
  let body_Repository_5370 = {};
  let id_Repository_5370 = "id_Repository_5370_" + Math.floor(Math.random()*1000);
  let limit_Repository_5370 = Math.floor(Math.random() * 1000);
  let owner_Repository_5370 = "owner_Repository_5370_" + Math.floor(Math.random()*1000);
  let page_Repository_5370 = Math.floor(Math.random() * 1000);
  let repo_Repository_5370 = "repo_Repository_5370_" + Math.floor(Math.random()*1000);
  let sha_Repository_5370 = "sha_Repository_5370_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5370, id_Repository_5370, limit_Repository_5370, owner_Repository_5370, page_Repository_5370, repo_Repository_5370, sha_Repository_5370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_5370 = {};
  let id_Issues_5370 = id_Repository_5370;
  let index_Issues_5370 = Math.floor(Math.random() * 1000);
  let limit_Issues_5370 = Math.floor(Math.random() * 1000);
  let owner_Issues_5370 = "owner_Issues_5370_" + Math.floor(Math.random()*1000);
  let page_Issues_5370 = Math.floor(Math.random() * 1000);
  let position_Issues_5370 = Math.floor(Math.random() * 1000);
  let repo_Issues_5370 = "repo_Issues_5370_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_5370, id_Issues_5370, index_Issues_5370, limit_Issues_5370, owner_Issues_5370, page_Issues_5370, position_Issues_5370, repo_Issues_5370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_5370 = {};
  let id_IssueCommentReactions_5370 = id_Issues_5370;
  let owner_IssueCommentReactions_5370 = "owner_IssueCommentReactions_5370_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_5370 = "repo_IssueCommentReactions_5370_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_5370, id_IssueCommentReactions_5370, owner_IssueCommentReactions_5370, repo_IssueCommentReactions_5370, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_5370, repo_IssueCommentReactions_5370, id_IssueCommentReactions_5370, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_5370, repo_Issues_5370, index_Issues_5370, id_Issues_5370, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5370, repo_Repository_5370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueAttachments", function () {
  // -> Creating Repository
  let body_Repository_5470 = {};
  let id_Repository_5470 = "id_Repository_5470_" + Math.floor(Math.random()*1000);
  let limit_Repository_5470 = Math.floor(Math.random() * 1000);
  let owner_Repository_5470 = "owner_Repository_5470_" + Math.floor(Math.random()*1000);
  let page_Repository_5470 = Math.floor(Math.random() * 1000);
  let repo_Repository_5470 = "repo_Repository_5470_" + Math.floor(Math.random()*1000);
  let sha_Repository_5470 = "sha_Repository_5470_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5470, id_Repository_5470, limit_Repository_5470, owner_Repository_5470, page_Repository_5470, repo_Repository_5470, sha_Repository_5470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_5470 = {};
  let id_Issues_5470 = id_Repository_5470;
  let index_Issues_5470 = Math.floor(Math.random() * 1000);
  let limit_Issues_5470 = Math.floor(Math.random() * 1000);
  let owner_Issues_5470 = "owner_Issues_5470_" + Math.floor(Math.random()*1000);
  let page_Issues_5470 = Math.floor(Math.random() * 1000);
  let position_Issues_5470 = Math.floor(Math.random() * 1000);
  let repo_Issues_5470 = "repo_Issues_5470_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_5470, id_Issues_5470, index_Issues_5470, limit_Issues_5470, owner_Issues_5470, page_Issues_5470, position_Issues_5470, repo_Issues_5470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueAttachments
  let attachment_IssueAttachments_5470 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueAttachments_5470 = Math.floor(Math.random() * 1000);
  let body_IssueAttachments_5470 = {};
  let id_IssueAttachments_5470 = id_Issues_5470;
  let index_IssueAttachments_5470 = Math.floor(Math.random() * 1000);
  let name_IssueAttachments_5470 = "name_IssueAttachments_5470_" + Math.floor(Math.random()*1000);
  let owner_IssueAttachments_5470 = "owner_IssueAttachments_5470_" + Math.floor(Math.random()*1000);
  let repo_IssueAttachments_5470 = "repo_IssueAttachments_5470_" + Math.floor(Math.random()*1000);
  issueCreateIssueAttachment(attachment_IssueAttachments_5470, attachment_id_IssueAttachments_5470, body_IssueAttachments_5470, id_IssueAttachments_5470, index_IssueAttachments_5470, name_IssueAttachments_5470, owner_IssueAttachments_5470, repo_IssueAttachments_5470, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueAttachments
  issueDeleteIssueAttachment(owner_IssueAttachments_5470, repo_IssueAttachments_5470, index_IssueAttachments_5470, attachment_id_IssueAttachments_5470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_5470, repo_Issues_5470, index_Issues_5470, id_Issues_5470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5470, repo_Repository_5470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueBlocks", function () {
  // -> Creating Repository
  let body_Repository_5570 = {};
  let id_Repository_5570 = "id_Repository_5570_" + Math.floor(Math.random()*1000);
  let limit_Repository_5570 = Math.floor(Math.random() * 1000);
  let owner_Repository_5570 = "owner_Repository_5570_" + Math.floor(Math.random()*1000);
  let page_Repository_5570 = Math.floor(Math.random() * 1000);
  let repo_Repository_5570 = "repo_Repository_5570_" + Math.floor(Math.random()*1000);
  let sha_Repository_5570 = "sha_Repository_5570_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5570, id_Repository_5570, limit_Repository_5570, owner_Repository_5570, page_Repository_5570, repo_Repository_5570, sha_Repository_5570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_5570 = {};
  let id_Issues_5570 = id_Repository_5570;
  let index_Issues_5570 = Math.floor(Math.random() * 1000);
  let limit_Issues_5570 = Math.floor(Math.random() * 1000);
  let owner_Issues_5570 = "owner_Issues_5570_" + Math.floor(Math.random()*1000);
  let page_Issues_5570 = Math.floor(Math.random() * 1000);
  let position_Issues_5570 = Math.floor(Math.random() * 1000);
  let repo_Issues_5570 = "repo_Issues_5570_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_5570, id_Issues_5570, index_Issues_5570, limit_Issues_5570, owner_Issues_5570, page_Issues_5570, position_Issues_5570, repo_Issues_5570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueBlocks
  let body_IssueBlocks_5570 = {};
  let index_IssueBlocks_5570 = "index_IssueBlocks_5570_" + Math.floor(Math.random()*1000);
  let limit_IssueBlocks_5570 = Math.floor(Math.random() * 1000);
  let owner_IssueBlocks_5570 = "owner_IssueBlocks_5570_" + Math.floor(Math.random()*1000);
  let page_IssueBlocks_5570 = Math.floor(Math.random() * 1000);
  let repo_IssueBlocks_5570 = "repo_IssueBlocks_5570_" + Math.floor(Math.random()*1000);
  issueCreateIssueBlocking(body_IssueBlocks_5570, index_IssueBlocks_5570, limit_IssueBlocks_5570, owner_IssueBlocks_5570, page_IssueBlocks_5570, repo_IssueBlocks_5570, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueBlocks
  issueRemoveIssueBlocking(owner_IssueBlocks_5570, repo_IssueBlocks_5570, index_IssueBlocks_5570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_5570, repo_Issues_5570, index_Issues_5570, id_Issues_5570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5570, repo_Repository_5570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueComments", function () {
  // -> Creating Repository
  let body_Repository_5670 = {};
  let id_Repository_5670 = "id_Repository_5670_" + Math.floor(Math.random()*1000);
  let limit_Repository_5670 = Math.floor(Math.random() * 1000);
  let owner_Repository_5670 = "owner_Repository_5670_" + Math.floor(Math.random()*1000);
  let page_Repository_5670 = Math.floor(Math.random() * 1000);
  let repo_Repository_5670 = "repo_Repository_5670_" + Math.floor(Math.random()*1000);
  let sha_Repository_5670 = "sha_Repository_5670_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5670, id_Repository_5670, limit_Repository_5670, owner_Repository_5670, page_Repository_5670, repo_Repository_5670, sha_Repository_5670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_5670 = {};
  let id_Issues_5670 = id_Repository_5670;
  let index_Issues_5670 = Math.floor(Math.random() * 1000);
  let limit_Issues_5670 = Math.floor(Math.random() * 1000);
  let owner_Issues_5670 = "owner_Issues_5670_" + Math.floor(Math.random()*1000);
  let page_Issues_5670 = Math.floor(Math.random() * 1000);
  let position_Issues_5670 = Math.floor(Math.random() * 1000);
  let repo_Issues_5670 = "repo_Issues_5670_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_5670, id_Issues_5670, index_Issues_5670, limit_Issues_5670, owner_Issues_5670, page_Issues_5670, position_Issues_5670, repo_Issues_5670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueComments
  let before_IssueComments_5670 = "before_IssueComments_5670_" + Math.floor(Math.random()*1000);
  let body_IssueComments_5670 = {};
  let id_IssueComments_5670 = id_Issues_5670;
  let index_IssueComments_5670 = Math.floor(Math.random() * 1000);
  let owner_IssueComments_5670 = "owner_IssueComments_5670_" + Math.floor(Math.random()*1000);
  let repo_IssueComments_5670 = "repo_IssueComments_5670_" + Math.floor(Math.random()*1000);
  let since_IssueComments_5670 = "since_IssueComments_5670_" + Math.floor(Math.random()*1000);
  issueCreateComment(before_IssueComments_5670, body_IssueComments_5670, id_IssueComments_5670, index_IssueComments_5670, owner_IssueComments_5670, repo_IssueComments_5670, since_IssueComments_5670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueComments
  issueDeleteCommentDeprecated(owner_IssueComments_5670, repo_IssueComments_5670, index_IssueComments_5670, id_IssueComments_5670, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_5670, repo_Issues_5670, index_Issues_5670, id_Issues_5670, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5670, repo_Repository_5670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueSubscriptions", function () {
  // -> Creating Repository
  let body_Repository_5770 = {};
  let id_Repository_5770 = "id_Repository_5770_" + Math.floor(Math.random()*1000);
  let limit_Repository_5770 = Math.floor(Math.random() * 1000);
  let owner_Repository_5770 = "owner_Repository_5770_" + Math.floor(Math.random()*1000);
  let page_Repository_5770 = Math.floor(Math.random() * 1000);
  let repo_Repository_5770 = "repo_Repository_5770_" + Math.floor(Math.random()*1000);
  let sha_Repository_5770 = "sha_Repository_5770_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5770, id_Repository_5770, limit_Repository_5770, owner_Repository_5770, page_Repository_5770, repo_Repository_5770, sha_Repository_5770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_5770 = {};
  let id_Issues_5770 = id_Repository_5770;
  let index_Issues_5770 = Math.floor(Math.random() * 1000);
  let limit_Issues_5770 = Math.floor(Math.random() * 1000);
  let owner_Issues_5770 = "owner_Issues_5770_" + Math.floor(Math.random()*1000);
  let page_Issues_5770 = Math.floor(Math.random() * 1000);
  let position_Issues_5770 = Math.floor(Math.random() * 1000);
  let repo_Issues_5770 = "repo_Issues_5770_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_5770, id_Issues_5770, index_Issues_5770, limit_Issues_5770, owner_Issues_5770, page_Issues_5770, position_Issues_5770, repo_Issues_5770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueSubscriptions
  let id_IssueSubscriptions_5770 = id_Issues_5770;
  let index_IssueSubscriptions_5770 = Math.floor(Math.random() * 1000);
  let limit_IssueSubscriptions_5770 = Math.floor(Math.random() * 1000);
  let owner_IssueSubscriptions_5770 = "owner_IssueSubscriptions_5770_" + Math.floor(Math.random()*1000);
  let page_IssueSubscriptions_5770 = Math.floor(Math.random() * 1000);
  let repo_IssueSubscriptions_5770 = "repo_IssueSubscriptions_5770_" + Math.floor(Math.random()*1000);
  let user_IssueSubscriptions_5770 = "user_IssueSubscriptions_5770_" + Math.floor(Math.random()*1000);
  issueAddSubscription(id_IssueSubscriptions_5770, index_IssueSubscriptions_5770, limit_IssueSubscriptions_5770, owner_IssueSubscriptions_5770, page_IssueSubscriptions_5770, repo_IssueSubscriptions_5770, user_IssueSubscriptions_5770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueSubscriptions
  issueDeleteSubscription(owner_IssueSubscriptions_5770, repo_IssueSubscriptions_5770, index_IssueSubscriptions_5770, user_IssueSubscriptions_5770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_5770, repo_Issues_5770, index_Issues_5770, id_Issues_5770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5770, repo_Repository_5770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issues_IssueTimes", function () {
  // -> Creating Repository
  let body_Repository_5870 = {};
  let id_Repository_5870 = "id_Repository_5870_" + Math.floor(Math.random()*1000);
  let limit_Repository_5870 = Math.floor(Math.random() * 1000);
  let owner_Repository_5870 = "owner_Repository_5870_" + Math.floor(Math.random()*1000);
  let page_Repository_5870 = Math.floor(Math.random() * 1000);
  let repo_Repository_5870 = "repo_Repository_5870_" + Math.floor(Math.random()*1000);
  let sha_Repository_5870 = "sha_Repository_5870_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5870, id_Repository_5870, limit_Repository_5870, owner_Repository_5870, page_Repository_5870, repo_Repository_5870, sha_Repository_5870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_5870 = {};
  let id_Issues_5870 = id_Repository_5870;
  let index_Issues_5870 = Math.floor(Math.random() * 1000);
  let limit_Issues_5870 = Math.floor(Math.random() * 1000);
  let owner_Issues_5870 = "owner_Issues_5870_" + Math.floor(Math.random()*1000);
  let page_Issues_5870 = Math.floor(Math.random() * 1000);
  let position_Issues_5870 = Math.floor(Math.random() * 1000);
  let repo_Issues_5870 = "repo_Issues_5870_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_5870, id_Issues_5870, index_Issues_5870, limit_Issues_5870, owner_Issues_5870, page_Issues_5870, position_Issues_5870, repo_Issues_5870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueTimes
  let before_IssueTimes_5870 = "before_IssueTimes_5870_" + Math.floor(Math.random()*1000);
  let body_IssueTimes_5870 = {};
  let index_IssueTimes_5870 = Math.floor(Math.random() * 1000);
  let limit_IssueTimes_5870 = Math.floor(Math.random() * 1000);
  let owner_IssueTimes_5870 = "owner_IssueTimes_5870_" + Math.floor(Math.random()*1000);
  let page_IssueTimes_5870 = Math.floor(Math.random() * 1000);
  let repo_IssueTimes_5870 = "repo_IssueTimes_5870_" + Math.floor(Math.random()*1000);
  let since_IssueTimes_5870 = "since_IssueTimes_5870_" + Math.floor(Math.random()*1000);
  let user_IssueTimes_5870 = "user_IssueTimes_5870_" + Math.floor(Math.random()*1000);
  issueAddTime(before_IssueTimes_5870, body_IssueTimes_5870, index_IssueTimes_5870, limit_IssueTimes_5870, owner_IssueTimes_5870, page_IssueTimes_5870, repo_IssueTimes_5870, since_IssueTimes_5870, user_IssueTimes_5870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueTimes
  issueResetTime(owner_IssueTimes_5870, repo_IssueTimes_5870, index_IssueTimes_5870, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Issues
  issueDeleteTime(owner_Issues_5870, repo_Issues_5870, index_Issues_5870, id_Issues_5870, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5870, repo_Repository_5870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Variables", function () {
  // -> Creating Repository
  let body_Repository_5970 = {};
  let id_Repository_5970 = "id_Repository_5970_" + Math.floor(Math.random()*1000);
  let limit_Repository_5970 = Math.floor(Math.random() * 1000);
  let owner_Repository_5970 = "owner_Repository_5970_" + Math.floor(Math.random()*1000);
  let page_Repository_5970 = Math.floor(Math.random() * 1000);
  let repo_Repository_5970 = "repo_Repository_5970_" + Math.floor(Math.random()*1000);
  let sha_Repository_5970 = "sha_Repository_5970_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_5970, id_Repository_5970, limit_Repository_5970, owner_Repository_5970, page_Repository_5970, repo_Repository_5970, sha_Repository_5970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Variables
  let CreateVariableOption_Variables_5970 = "CreateVariableOption_Variables_5970_" + Math.floor(Math.random()*1000);
  let UpdateVariableOption_Variables_5970 = "UpdateVariableOption_Variables_5970_" + Math.floor(Math.random()*1000);
  let body_Variables_5970 = {};
  let id_Variables_5970 = id_Repository_5970;
  let limit_Variables_5970 = Math.floor(Math.random() * 1000);
  let owner_Variables_5970 = "owner_Variables_5970_" + Math.floor(Math.random()*1000);
  let page_Variables_5970 = Math.floor(Math.random() * 1000);
  let repo_Variables_5970 = "repo_Variables_5970_" + Math.floor(Math.random()*1000);
  let variablename_Variables_5970 = "variablename_Variables_5970_" + Math.floor(Math.random()*1000);
  createRepoVariable(CreateVariableOption_Variables_5970, UpdateVariableOption_Variables_5970, body_Variables_5970, id_Variables_5970, limit_Variables_5970, owner_Variables_5970, page_Variables_5970, repo_Variables_5970, variablename_Variables_5970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Variables
  deleteRepoVariable(owner_Variables_5970, repo_Variables_5970, variablename_Variables_5970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_5970, repo_Repository_5970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Branches", function () {
  // -> Creating Repository
  let body_Repository_6070 = {};
  let id_Repository_6070 = "id_Repository_6070_" + Math.floor(Math.random()*1000);
  let limit_Repository_6070 = Math.floor(Math.random() * 1000);
  let owner_Repository_6070 = "owner_Repository_6070_" + Math.floor(Math.random()*1000);
  let page_Repository_6070 = Math.floor(Math.random() * 1000);
  let repo_Repository_6070 = "repo_Repository_6070_" + Math.floor(Math.random()*1000);
  let sha_Repository_6070 = "sha_Repository_6070_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6070, id_Repository_6070, limit_Repository_6070, owner_Repository_6070, page_Repository_6070, repo_Repository_6070, sha_Repository_6070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Branches
  let body_Branches_6070 = {};
  let branch_Branches_6070 = "branch_Branches_6070_" + Math.floor(Math.random()*1000);
  let id_Branches_6070 = id_Repository_6070;
  let limit_Branches_6070 = Math.floor(Math.random() * 1000);
  let owner_Branches_6070 = "owner_Branches_6070_" + Math.floor(Math.random()*1000);
  let page_Branches_6070 = Math.floor(Math.random() * 1000);
  let repo_Branches_6070 = "repo_Branches_6070_" + Math.floor(Math.random()*1000);
  repoCreateBranch(body_Branches_6070, branch_Branches_6070, id_Branches_6070, limit_Branches_6070, owner_Branches_6070, page_Branches_6070, repo_Branches_6070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Branches
  repoDeleteBranch(owner_Branches_6070, repo_Branches_6070, branch_Branches_6070, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6070, repo_Repository_6070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Collaborators", function () {
  // -> Creating Repository
  let body_Repository_6170 = {};
  let id_Repository_6170 = "id_Repository_6170_" + Math.floor(Math.random()*1000);
  let limit_Repository_6170 = Math.floor(Math.random() * 1000);
  let owner_Repository_6170 = "owner_Repository_6170_" + Math.floor(Math.random()*1000);
  let page_Repository_6170 = Math.floor(Math.random() * 1000);
  let repo_Repository_6170 = "repo_Repository_6170_" + Math.floor(Math.random()*1000);
  let sha_Repository_6170 = "sha_Repository_6170_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6170, id_Repository_6170, limit_Repository_6170, owner_Repository_6170, page_Repository_6170, repo_Repository_6170, sha_Repository_6170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Collaborators
  let body_Collaborators_6170 = {};
  let collaborator_Collaborators_6170 = "collaborator_Collaborators_6170_" + Math.floor(Math.random()*1000);
  let id_Collaborators_6170 = id_Repository_6170;
  let limit_Collaborators_6170 = Math.floor(Math.random() * 1000);
  let owner_Collaborators_6170 = "owner_Collaborators_6170_" + Math.floor(Math.random()*1000);
  let page_Collaborators_6170 = Math.floor(Math.random() * 1000);
  let repo_Collaborators_6170 = "repo_Collaborators_6170_" + Math.floor(Math.random()*1000);
  repoAddCollaborator(body_Collaborators_6170, collaborator_Collaborators_6170, id_Collaborators_6170, limit_Collaborators_6170, owner_Collaborators_6170, page_Collaborators_6170, repo_Collaborators_6170, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Collaborators
  repoDeleteCollaborator(owner_Collaborators_6170, repo_Collaborators_6170, collaborator_Collaborators_6170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6170, repo_Repository_6170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Forks", function () {
  // -> Creating Repository
  let body_Repository_6270 = {};
  let id_Repository_6270 = "id_Repository_6270_" + Math.floor(Math.random()*1000);
  let limit_Repository_6270 = Math.floor(Math.random() * 1000);
  let owner_Repository_6270 = "owner_Repository_6270_" + Math.floor(Math.random()*1000);
  let page_Repository_6270 = Math.floor(Math.random() * 1000);
  let repo_Repository_6270 = "repo_Repository_6270_" + Math.floor(Math.random()*1000);
  let sha_Repository_6270 = "sha_Repository_6270_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6270, id_Repository_6270, limit_Repository_6270, owner_Repository_6270, page_Repository_6270, repo_Repository_6270, sha_Repository_6270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Forks
  let body_Forks_6270 = {};
  let id_Forks_6270 = id_Repository_6270;
  let limit_Forks_6270 = Math.floor(Math.random() * 1000);
  let owner_Forks_6270 = "owner_Forks_6270_" + Math.floor(Math.random()*1000);
  let page_Forks_6270 = Math.floor(Math.random() * 1000);
  let repo_Forks_6270 = "repo_Forks_6270_" + Math.floor(Math.random()*1000);
  createFork(body_Forks_6270, id_Forks_6270, limit_Forks_6270, owner_Forks_6270, page_Forks_6270, repo_Forks_6270, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6270, repo_Repository_6270, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_IssueCommentAttachments", function () {
  // -> Creating Repository
  let body_Repository_6370 = {};
  let id_Repository_6370 = "id_Repository_6370_" + Math.floor(Math.random()*1000);
  let limit_Repository_6370 = Math.floor(Math.random() * 1000);
  let owner_Repository_6370 = "owner_Repository_6370_" + Math.floor(Math.random()*1000);
  let page_Repository_6370 = Math.floor(Math.random() * 1000);
  let repo_Repository_6370 = "repo_Repository_6370_" + Math.floor(Math.random()*1000);
  let sha_Repository_6370 = "sha_Repository_6370_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6370, id_Repository_6370, limit_Repository_6370, owner_Repository_6370, page_Repository_6370, repo_Repository_6370, sha_Repository_6370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6370 = {};
  let id_Issues_6370 = id_Repository_6370;
  let index_Issues_6370 = Math.floor(Math.random() * 1000);
  let limit_Issues_6370 = Math.floor(Math.random() * 1000);
  let owner_Issues_6370 = "owner_Issues_6370_" + Math.floor(Math.random()*1000);
  let page_Issues_6370 = Math.floor(Math.random() * 1000);
  let position_Issues_6370 = Math.floor(Math.random() * 1000);
  let repo_Issues_6370 = "repo_Issues_6370_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6370, id_Issues_6370, index_Issues_6370, limit_Issues_6370, owner_Issues_6370, page_Issues_6370, position_Issues_6370, repo_Issues_6370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentAttachments
  let attachment_IssueCommentAttachments_6370 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_IssueCommentAttachments_6370 = Math.floor(Math.random() * 1000);
  let body_IssueCommentAttachments_6370 = {};
  let id_IssueCommentAttachments_6370 = id_Issues_6370;
  let name_IssueCommentAttachments_6370 = "name_IssueCommentAttachments_6370_" + Math.floor(Math.random()*1000);
  let owner_IssueCommentAttachments_6370 = "owner_IssueCommentAttachments_6370_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentAttachments_6370 = "repo_IssueCommentAttachments_6370_" + Math.floor(Math.random()*1000);
  issueCreateIssueCommentAttachment(attachment_IssueCommentAttachments_6370, attachment_id_IssueCommentAttachments_6370, body_IssueCommentAttachments_6370, id_IssueCommentAttachments_6370, name_IssueCommentAttachments_6370, owner_IssueCommentAttachments_6370, repo_IssueCommentAttachments_6370, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentAttachments
  issueDeleteIssueCommentAttachment(owner_IssueCommentAttachments_6370, repo_IssueCommentAttachments_6370, id_IssueCommentAttachments_6370, attachment_id_IssueCommentAttachments_6370, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6370, repo_Repository_6370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_IssueCommentReactions", function () {
  // -> Creating Repository
  let body_Repository_6470 = {};
  let id_Repository_6470 = "id_Repository_6470_" + Math.floor(Math.random()*1000);
  let limit_Repository_6470 = Math.floor(Math.random() * 1000);
  let owner_Repository_6470 = "owner_Repository_6470_" + Math.floor(Math.random()*1000);
  let page_Repository_6470 = Math.floor(Math.random() * 1000);
  let repo_Repository_6470 = "repo_Repository_6470_" + Math.floor(Math.random()*1000);
  let sha_Repository_6470 = "sha_Repository_6470_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6470, id_Repository_6470, limit_Repository_6470, owner_Repository_6470, page_Repository_6470, repo_Repository_6470, sha_Repository_6470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issues
  let content_Issues_6470 = {};
  let id_Issues_6470 = id_Repository_6470;
  let index_Issues_6470 = Math.floor(Math.random() * 1000);
  let limit_Issues_6470 = Math.floor(Math.random() * 1000);
  let owner_Issues_6470 = "owner_Issues_6470_" + Math.floor(Math.random()*1000);
  let page_Issues_6470 = Math.floor(Math.random() * 1000);
  let position_Issues_6470 = Math.floor(Math.random() * 1000);
  let repo_Issues_6470 = "repo_Issues_6470_" + Math.floor(Math.random()*1000);
  issuePostIssueReaction(content_Issues_6470, id_Issues_6470, index_Issues_6470, limit_Issues_6470, owner_Issues_6470, page_Issues_6470, position_Issues_6470, repo_Issues_6470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating IssueCommentReactions
  let content_IssueCommentReactions_6470 = {};
  let id_IssueCommentReactions_6470 = id_Issues_6470;
  let owner_IssueCommentReactions_6470 = "owner_IssueCommentReactions_6470_" + Math.floor(Math.random()*1000);
  let repo_IssueCommentReactions_6470 = "repo_IssueCommentReactions_6470_" + Math.floor(Math.random()*1000);
  issuePostCommentReaction(content_IssueCommentReactions_6470, id_IssueCommentReactions_6470, owner_IssueCommentReactions_6470, repo_IssueCommentReactions_6470, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting IssueCommentReactions
  issueDeleteCommentReaction(owner_IssueCommentReactions_6470, repo_IssueCommentReactions_6470, id_IssueCommentReactions_6470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6470, repo_Repository_6470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_RepositoryKeys", function () {
  // -> Creating Repository
  let body_Repository_6570 = {};
  let id_Repository_6570 = "id_Repository_6570_" + Math.floor(Math.random()*1000);
  let limit_Repository_6570 = Math.floor(Math.random() * 1000);
  let owner_Repository_6570 = "owner_Repository_6570_" + Math.floor(Math.random()*1000);
  let page_Repository_6570 = Math.floor(Math.random() * 1000);
  let repo_Repository_6570 = "repo_Repository_6570_" + Math.floor(Math.random()*1000);
  let sha_Repository_6570 = "sha_Repository_6570_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6570, id_Repository_6570, limit_Repository_6570, owner_Repository_6570, page_Repository_6570, repo_Repository_6570, sha_Repository_6570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating RepositoryKeys
  let body_RepositoryKeys_6570 = {};
  let fingerprint_RepositoryKeys_6570 = "fingerprint_RepositoryKeys_6570_" + Math.floor(Math.random()*1000);
  let id_RepositoryKeys_6570 = id_Repository_6570;
  let key_RepositoryKeys_6570 = "key_RepositoryKeys_6570_" + Math.floor(Math.random()*1000);
  let key_id_RepositoryKeys_6570 = Math.floor(Math.random() * 1000);
  let limit_RepositoryKeys_6570 = Math.floor(Math.random() * 1000);
  let owner_RepositoryKeys_6570 = "owner_RepositoryKeys_6570_" + Math.floor(Math.random()*1000);
  let page_RepositoryKeys_6570 = Math.floor(Math.random() * 1000);
  let read_only_RepositoryKeys_6570 = "read_only_RepositoryKeys_6570_" + Math.floor(Math.random()*1000);
  let repo_RepositoryKeys_6570 = "repo_RepositoryKeys_6570_" + Math.floor(Math.random()*1000);
  repoCreateKey(body_RepositoryKeys_6570, fingerprint_RepositoryKeys_6570, id_RepositoryKeys_6570, key_RepositoryKeys_6570, key_id_RepositoryKeys_6570, limit_RepositoryKeys_6570, owner_RepositoryKeys_6570, page_RepositoryKeys_6570, read_only_RepositoryKeys_6570, repo_RepositoryKeys_6570, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting RepositoryKeys
  repoDeleteKey(owner_RepositoryKeys_6570, repo_RepositoryKeys_6570, id_RepositoryKeys_6570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6570, repo_Repository_6570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Issue", function () {
  // -> Creating Repository
  let body_Repository_6670 = {};
  let id_Repository_6670 = "id_Repository_6670_" + Math.floor(Math.random()*1000);
  let limit_Repository_6670 = Math.floor(Math.random() * 1000);
  let owner_Repository_6670 = "owner_Repository_6670_" + Math.floor(Math.random()*1000);
  let page_Repository_6670 = Math.floor(Math.random() * 1000);
  let repo_Repository_6670 = "repo_Repository_6670_" + Math.floor(Math.random()*1000);
  let sha_Repository_6670 = "sha_Repository_6670_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6670, id_Repository_6670, limit_Repository_6670, owner_Repository_6670, page_Repository_6670, repo_Repository_6670, sha_Repository_6670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Issue
  let body_Issue_6670 = {};
  let id_Issue_6670 = id_Repository_6670;
  let limit_Issue_6670 = Math.floor(Math.random() * 1000);
  let name_Issue_6670 = "name_Issue_6670_" + Math.floor(Math.random()*1000);
  let owner_Issue_6670 = "owner_Issue_6670_" + Math.floor(Math.random()*1000);
  let page_Issue_6670 = Math.floor(Math.random() * 1000);
  let repo_Issue_6670 = "repo_Issue_6670_" + Math.floor(Math.random()*1000);
  let state_Issue_6670 = "state_Issue_6670_" + Math.floor(Math.random()*1000);
  issueCreateMilestone(body_Issue_6670, id_Issue_6670, limit_Issue_6670, name_Issue_6670, owner_Issue_6670, page_Issue_6670, repo_Issue_6670, state_Issue_6670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6670, repo_Repository_6670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_MirrorSync", function () {
  // -> Creating Repository
  let body_Repository_6770 = {};
  let id_Repository_6770 = "id_Repository_6770_" + Math.floor(Math.random()*1000);
  let limit_Repository_6770 = Math.floor(Math.random() * 1000);
  let owner_Repository_6770 = "owner_Repository_6770_" + Math.floor(Math.random()*1000);
  let page_Repository_6770 = Math.floor(Math.random() * 1000);
  let repo_Repository_6770 = "repo_Repository_6770_" + Math.floor(Math.random()*1000);
  let sha_Repository_6770 = "sha_Repository_6770_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6770, id_Repository_6770, limit_Repository_6770, owner_Repository_6770, page_Repository_6770, repo_Repository_6770, sha_Repository_6770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating MirrorSync
  let id_MirrorSync_6770 = id_Repository_6770;
  let owner_MirrorSync_6770 = "owner_MirrorSync_6770_" + Math.floor(Math.random()*1000);
  let repo_MirrorSync_6770 = "repo_MirrorSync_6770_" + Math.floor(Math.random()*1000);
  repoMirrorSync(id_MirrorSync_6770, owner_MirrorSync_6770, repo_MirrorSync_6770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6770, repo_Repository_6770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PullRequests_PullReviewRequests", function () {
  // -> Creating Repository
  let body_Repository_6870 = {};
  let id_Repository_6870 = "id_Repository_6870_" + Math.floor(Math.random()*1000);
  let limit_Repository_6870 = Math.floor(Math.random() * 1000);
  let owner_Repository_6870 = "owner_Repository_6870_" + Math.floor(Math.random()*1000);
  let page_Repository_6870 = Math.floor(Math.random() * 1000);
  let repo_Repository_6870 = "repo_Repository_6870_" + Math.floor(Math.random()*1000);
  let sha_Repository_6870 = "sha_Repository_6870_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6870, id_Repository_6870, limit_Repository_6870, owner_Repository_6870, page_Repository_6870, repo_Repository_6870, sha_Repository_6870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_6870 = {};
  let id_PullRequests_6870 = id_Repository_6870;
  let index_PullRequests_6870 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_6870 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_6870 = "owner_PullRequests_6870_" + Math.floor(Math.random()*1000);
  let page_PullRequests_6870 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_6870 = "repo_PullRequests_6870_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_6870 = "skip-to_PullRequests_6870_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_6870 = "whitespace_PullRequests_6870_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_6870, id_PullRequests_6870, index_PullRequests_6870, limit_PullRequests_6870, owner_PullRequests_6870, page_PullRequests_6870, repo_PullRequests_6870, skip_to_PullRequests_6870, whitespace_PullRequests_6870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewRequests
  let body_PullReviewRequests_6870 = {};
  let index_PullReviewRequests_6870 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_6870 = "owner_PullReviewRequests_6870_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_6870 = "repo_PullReviewRequests_6870_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_6870, index_PullReviewRequests_6870, owner_PullReviewRequests_6870, repo_PullReviewRequests_6870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_6870, repo_PullReviewRequests_6870, index_PullReviewRequests_6870, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_6870, repo_PullRequests_6870, index_PullRequests_6870, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6870, repo_Repository_6870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PullRequests_PullReviews", function () {
  // -> Creating Repository
  let body_Repository_6970 = {};
  let id_Repository_6970 = "id_Repository_6970_" + Math.floor(Math.random()*1000);
  let limit_Repository_6970 = Math.floor(Math.random() * 1000);
  let owner_Repository_6970 = "owner_Repository_6970_" + Math.floor(Math.random()*1000);
  let page_Repository_6970 = Math.floor(Math.random() * 1000);
  let repo_Repository_6970 = "repo_Repository_6970_" + Math.floor(Math.random()*1000);
  let sha_Repository_6970 = "sha_Repository_6970_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_6970, id_Repository_6970, limit_Repository_6970, owner_Repository_6970, page_Repository_6970, repo_Repository_6970, sha_Repository_6970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_6970 = {};
  let id_PullRequests_6970 = id_Repository_6970;
  let index_PullRequests_6970 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_6970 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_6970 = "owner_PullRequests_6970_" + Math.floor(Math.random()*1000);
  let page_PullRequests_6970 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_6970 = "repo_PullRequests_6970_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_6970 = "skip-to_PullRequests_6970_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_6970 = "whitespace_PullRequests_6970_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_6970, id_PullRequests_6970, index_PullRequests_6970, limit_PullRequests_6970, owner_PullRequests_6970, page_PullRequests_6970, repo_PullRequests_6970, skip_to_PullRequests_6970, whitespace_PullRequests_6970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_6970 = {};
  let id_PullReviews_6970 = id_PullRequests_6970;
  let index_PullReviews_6970 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_6970 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_6970 = "owner_PullReviews_6970_" + Math.floor(Math.random()*1000);
  let page_PullReviews_6970 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_6970 = "repo_PullReviews_6970_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_6970, id_PullReviews_6970, index_PullReviews_6970, limit_PullReviews_6970, owner_PullReviews_6970, page_PullReviews_6970, repo_PullReviews_6970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_6970, repo_PullReviews_6970, index_PullReviews_6970, id_PullReviews_6970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_6970, repo_PullRequests_6970, index_PullRequests_6970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_6970, repo_Repository_6970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PullRequests_PullReviewDismissals", function () {
  // -> Creating Repository
  let body_Repository_7070 = {};
  let id_Repository_7070 = "id_Repository_7070_" + Math.floor(Math.random()*1000);
  let limit_Repository_7070 = Math.floor(Math.random() * 1000);
  let owner_Repository_7070 = "owner_Repository_7070_" + Math.floor(Math.random()*1000);
  let page_Repository_7070 = Math.floor(Math.random() * 1000);
  let repo_Repository_7070 = "repo_Repository_7070_" + Math.floor(Math.random()*1000);
  let sha_Repository_7070 = "sha_Repository_7070_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7070, id_Repository_7070, limit_Repository_7070, owner_Repository_7070, page_Repository_7070, repo_Repository_7070, sha_Repository_7070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_7070 = {};
  let id_PullRequests_7070 = id_Repository_7070;
  let index_PullRequests_7070 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_7070 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_7070 = "owner_PullRequests_7070_" + Math.floor(Math.random()*1000);
  let page_PullRequests_7070 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_7070 = "repo_PullRequests_7070_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_7070 = "skip-to_PullRequests_7070_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_7070 = "whitespace_PullRequests_7070_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_7070, id_PullRequests_7070, index_PullRequests_7070, limit_PullRequests_7070, owner_PullRequests_7070, page_PullRequests_7070, repo_PullRequests_7070, skip_to_PullRequests_7070, whitespace_PullRequests_7070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_7070 = {};
  let id_PullReviewDismissals_7070 = id_PullRequests_7070;
  let index_PullReviewDismissals_7070 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_7070 = "owner_PullReviewDismissals_7070_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_7070 = "repo_PullReviewDismissals_7070_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_7070, id_PullReviewDismissals_7070, index_PullReviewDismissals_7070, owner_PullReviewDismissals_7070, repo_PullReviewDismissals_7070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_7070, repo_PullRequests_7070, index_PullRequests_7070, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7070, repo_Repository_7070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PullRequests_PullReviewUndismissals", function () {
  // -> Creating Repository
  let body_Repository_7170 = {};
  let id_Repository_7170 = "id_Repository_7170_" + Math.floor(Math.random()*1000);
  let limit_Repository_7170 = Math.floor(Math.random() * 1000);
  let owner_Repository_7170 = "owner_Repository_7170_" + Math.floor(Math.random()*1000);
  let page_Repository_7170 = Math.floor(Math.random() * 1000);
  let repo_Repository_7170 = "repo_Repository_7170_" + Math.floor(Math.random()*1000);
  let sha_Repository_7170 = "sha_Repository_7170_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7170, id_Repository_7170, limit_Repository_7170, owner_Repository_7170, page_Repository_7170, repo_Repository_7170, sha_Repository_7170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_7170 = {};
  let id_PullRequests_7170 = id_Repository_7170;
  let index_PullRequests_7170 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_7170 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_7170 = "owner_PullRequests_7170_" + Math.floor(Math.random()*1000);
  let page_PullRequests_7170 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_7170 = "repo_PullRequests_7170_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_7170 = "skip-to_PullRequests_7170_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_7170 = "whitespace_PullRequests_7170_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_7170, id_PullRequests_7170, index_PullRequests_7170, limit_PullRequests_7170, owner_PullRequests_7170, page_PullRequests_7170, repo_PullRequests_7170, skip_to_PullRequests_7170, whitespace_PullRequests_7170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_7170 = id_PullRequests_7170;
  let index_PullReviewUndismissals_7170 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_7170 = "owner_PullReviewUndismissals_7170_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_7170 = "repo_PullReviewUndismissals_7170_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_7170, index_PullReviewUndismissals_7170, owner_PullReviewUndismissals_7170, repo_PullReviewUndismissals_7170, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_7170, repo_PullRequests_7170, index_PullRequests_7170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7170, repo_Repository_7170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PullRequests_PullRequestUpdate", function () {
  // -> Creating Repository
  let body_Repository_7270 = {};
  let id_Repository_7270 = "id_Repository_7270_" + Math.floor(Math.random()*1000);
  let limit_Repository_7270 = Math.floor(Math.random() * 1000);
  let owner_Repository_7270 = "owner_Repository_7270_" + Math.floor(Math.random()*1000);
  let page_Repository_7270 = Math.floor(Math.random() * 1000);
  let repo_Repository_7270 = "repo_Repository_7270_" + Math.floor(Math.random()*1000);
  let sha_Repository_7270 = "sha_Repository_7270_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7270, id_Repository_7270, limit_Repository_7270, owner_Repository_7270, page_Repository_7270, repo_Repository_7270, sha_Repository_7270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_7270 = {};
  let id_PullRequests_7270 = id_Repository_7270;
  let index_PullRequests_7270 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_7270 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_7270 = "owner_PullRequests_7270_" + Math.floor(Math.random()*1000);
  let page_PullRequests_7270 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_7270 = "repo_PullRequests_7270_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_7270 = "skip-to_PullRequests_7270_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_7270 = "whitespace_PullRequests_7270_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_7270, id_PullRequests_7270, index_PullRequests_7270, limit_PullRequests_7270, owner_PullRequests_7270, page_PullRequests_7270, repo_PullRequests_7270, skip_to_PullRequests_7270, whitespace_PullRequests_7270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequestUpdate
  let id_PullRequestUpdate_7270 = id_PullRequests_7270;
  let index_PullRequestUpdate_7270 = Math.floor(Math.random() * 1000);
  let owner_PullRequestUpdate_7270 = "owner_PullRequestUpdate_7270_" + Math.floor(Math.random()*1000);
  let repo_PullRequestUpdate_7270 = "repo_PullRequestUpdate_7270_" + Math.floor(Math.random()*1000);
  let style_PullRequestUpdate_7270 = "style_PullRequestUpdate_7270_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(id_PullRequestUpdate_7270, index_PullRequestUpdate_7270, owner_PullRequestUpdate_7270, repo_PullRequestUpdate_7270, style_PullRequestUpdate_7270, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_7270, repo_PullRequests_7270, index_PullRequests_7270, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7270, repo_Repository_7270, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_PushMirrors", function () {
  // -> Creating Repository
  let body_Repository_7370 = {};
  let id_Repository_7370 = "id_Repository_7370_" + Math.floor(Math.random()*1000);
  let limit_Repository_7370 = Math.floor(Math.random() * 1000);
  let owner_Repository_7370 = "owner_Repository_7370_" + Math.floor(Math.random()*1000);
  let page_Repository_7370 = Math.floor(Math.random() * 1000);
  let repo_Repository_7370 = "repo_Repository_7370_" + Math.floor(Math.random()*1000);
  let sha_Repository_7370 = "sha_Repository_7370_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7370, id_Repository_7370, limit_Repository_7370, owner_Repository_7370, page_Repository_7370, repo_Repository_7370, sha_Repository_7370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PushMirrors
  let id_PushMirrors_7370 = id_Repository_7370;
  let limit_PushMirrors_7370 = Math.floor(Math.random() * 1000);
  let name_PushMirrors_7370 = "name_PushMirrors_7370_" + Math.floor(Math.random()*1000);
  let owner_PushMirrors_7370 = "owner_PushMirrors_7370_" + Math.floor(Math.random()*1000);
  let page_PushMirrors_7370 = Math.floor(Math.random() * 1000);
  let repo_PushMirrors_7370 = "repo_PushMirrors_7370_" + Math.floor(Math.random()*1000);
  repoPushMirrorSync(id_PushMirrors_7370, limit_PushMirrors_7370, name_PushMirrors_7370, owner_PushMirrors_7370, page_PushMirrors_7370, repo_PushMirrors_7370, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PushMirrors
  repoDeletePushMirror(owner_PushMirrors_7370, repo_PushMirrors_7370, name_PushMirrors_7370, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7370, repo_Repository_7370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Releases_ReleaseAttachments", function () {
  // -> Creating Repository
  let body_Repository_7470 = {};
  let id_Repository_7470 = "id_Repository_7470_" + Math.floor(Math.random()*1000);
  let limit_Repository_7470 = Math.floor(Math.random() * 1000);
  let owner_Repository_7470 = "owner_Repository_7470_" + Math.floor(Math.random()*1000);
  let page_Repository_7470 = Math.floor(Math.random() * 1000);
  let repo_Repository_7470 = "repo_Repository_7470_" + Math.floor(Math.random()*1000);
  let sha_Repository_7470 = "sha_Repository_7470_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7470, id_Repository_7470, limit_Repository_7470, owner_Repository_7470, page_Repository_7470, repo_Repository_7470, sha_Repository_7470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Releases
  let body_Releases_7470 = {};
  let draft_Releases_7470 = true;
  let id_Releases_7470 = id_Repository_7470;
  let limit_Releases_7470 = Math.floor(Math.random() * 1000);
  let owner_Releases_7470 = "owner_Releases_7470_" + Math.floor(Math.random()*1000);
  let page_Releases_7470 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_7470 = true;
  let repo_Releases_7470 = "repo_Releases_7470_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_7470, draft_Releases_7470, id_Releases_7470, limit_Releases_7470, owner_Releases_7470, page_Releases_7470, pre_release_Releases_7470, repo_Releases_7470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_7470 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_7470 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_7470 = {};
  let id_ReleaseAttachments_7470 = id_Releases_7470;
  let name_ReleaseAttachments_7470 = "name_ReleaseAttachments_7470_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_7470 = "owner_ReleaseAttachments_7470_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_7470 = "repo_ReleaseAttachments_7470_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_7470, attachment_id_ReleaseAttachments_7470, body_ReleaseAttachments_7470, id_ReleaseAttachments_7470, name_ReleaseAttachments_7470, owner_ReleaseAttachments_7470, repo_ReleaseAttachments_7470, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_7470, repo_ReleaseAttachments_7470, id_ReleaseAttachments_7470, attachment_id_ReleaseAttachments_7470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Releases
  repoDeleteRelease(owner_Releases_7470, repo_Releases_7470, id_Releases_7470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7470, repo_Repository_7470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_TagProtections", function () {
  // -> Creating Repository
  let body_Repository_7570 = {};
  let id_Repository_7570 = "id_Repository_7570_" + Math.floor(Math.random()*1000);
  let limit_Repository_7570 = Math.floor(Math.random() * 1000);
  let owner_Repository_7570 = "owner_Repository_7570_" + Math.floor(Math.random()*1000);
  let page_Repository_7570 = Math.floor(Math.random() * 1000);
  let repo_Repository_7570 = "repo_Repository_7570_" + Math.floor(Math.random()*1000);
  let sha_Repository_7570 = "sha_Repository_7570_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7570, id_Repository_7570, limit_Repository_7570, owner_Repository_7570, page_Repository_7570, repo_Repository_7570, sha_Repository_7570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TagProtections
  let body_TagProtections_7570 = {};
  let id_TagProtections_7570 = id_Repository_7570;
  let owner_TagProtections_7570 = "owner_TagProtections_7570_" + Math.floor(Math.random()*1000);
  let repo_TagProtections_7570 = "repo_TagProtections_7570_" + Math.floor(Math.random()*1000);
  repoCreateTagProtection(body_TagProtections_7570, id_TagProtections_7570, owner_TagProtections_7570, repo_TagProtections_7570, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TagProtections
  repoDeleteTagProtection(owner_TagProtections_7570, repo_TagProtections_7570, id_TagProtections_7570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7570, repo_Repository_7570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Tags", function () {
  // -> Creating Repository
  let body_Repository_7670 = {};
  let id_Repository_7670 = "id_Repository_7670_" + Math.floor(Math.random()*1000);
  let limit_Repository_7670 = Math.floor(Math.random() * 1000);
  let owner_Repository_7670 = "owner_Repository_7670_" + Math.floor(Math.random()*1000);
  let page_Repository_7670 = Math.floor(Math.random() * 1000);
  let repo_Repository_7670 = "repo_Repository_7670_" + Math.floor(Math.random()*1000);
  let sha_Repository_7670 = "sha_Repository_7670_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7670, id_Repository_7670, limit_Repository_7670, owner_Repository_7670, page_Repository_7670, repo_Repository_7670, sha_Repository_7670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Tags
  let body_Tags_7670 = {};
  let id_Tags_7670 = id_Repository_7670;
  let limit_Tags_7670 = Math.floor(Math.random() * 1000);
  let owner_Tags_7670 = "owner_Tags_7670_" + Math.floor(Math.random()*1000);
  let page_Tags_7670 = Math.floor(Math.random() * 1000);
  let repo_Tags_7670 = "repo_Tags_7670_" + Math.floor(Math.random()*1000);
  let tag_Tags_7670 = "tag_Tags_7670_" + Math.floor(Math.random()*1000);
  repoCreateTag(body_Tags_7670, id_Tags_7670, limit_Tags_7670, owner_Tags_7670, page_Tags_7670, repo_Tags_7670, tag_Tags_7670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Tags
  repoDeleteTag(owner_Tags_7670, repo_Tags_7670, tag_Tags_7670, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7670, repo_Repository_7670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_Topics", function () {
  // -> Creating Repository
  let body_Repository_7770 = {};
  let id_Repository_7770 = "id_Repository_7770_" + Math.floor(Math.random()*1000);
  let limit_Repository_7770 = Math.floor(Math.random() * 1000);
  let owner_Repository_7770 = "owner_Repository_7770_" + Math.floor(Math.random()*1000);
  let page_Repository_7770 = Math.floor(Math.random() * 1000);
  let repo_Repository_7770 = "repo_Repository_7770_" + Math.floor(Math.random()*1000);
  let sha_Repository_7770 = "sha_Repository_7770_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7770, id_Repository_7770, limit_Repository_7770, owner_Repository_7770, page_Repository_7770, repo_Repository_7770, sha_Repository_7770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Topics
  let body_Topics_7770 = {};
  let limit_Topics_7770 = Math.floor(Math.random() * 1000);
  let owner_Topics_7770 = "owner_Topics_7770_" + Math.floor(Math.random()*1000);
  let page_Topics_7770 = Math.floor(Math.random() * 1000);
  let q_Topics_7770 = "q_Topics_7770_" + Math.floor(Math.random()*1000);
  let repo_Topics_7770 = "repo_Topics_7770_" + Math.floor(Math.random()*1000);
  let topic_Topics_7770 = "topic_Topics_7770_" + Math.floor(Math.random()*1000);
  let topic1_Topics_7770 = "topic1_Topics_7770_" + Math.floor(Math.random()*1000);
  let topic2_Topics_7770 = "topic2_Topics_7770_" + Math.floor(Math.random()*1000);
  repoAddTopic(body_Topics_7770, limit_Topics_7770, owner_Topics_7770, page_Topics_7770, q_Topics_7770, repo_Topics_7770, topic_Topics_7770, topic1_Topics_7770, topic2_Topics_7770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Topics
  repoDeleteTopic(owner_Topics_7770, repo_Topics_7770, topic_Topics_7770, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7770, repo_Repository_7770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_RepositoryTransfer", function () {
  // -> Creating Repository
  let body_Repository_7870 = {};
  let id_Repository_7870 = "id_Repository_7870_" + Math.floor(Math.random()*1000);
  let limit_Repository_7870 = Math.floor(Math.random() * 1000);
  let owner_Repository_7870 = "owner_Repository_7870_" + Math.floor(Math.random()*1000);
  let page_Repository_7870 = Math.floor(Math.random() * 1000);
  let repo_Repository_7870 = "repo_Repository_7870_" + Math.floor(Math.random()*1000);
  let sha_Repository_7870 = "sha_Repository_7870_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7870, id_Repository_7870, limit_Repository_7870, owner_Repository_7870, page_Repository_7870, repo_Repository_7870, sha_Repository_7870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating RepositoryTransfer
  let body_RepositoryTransfer_7870 = {};
  let id_RepositoryTransfer_7870 = id_Repository_7870;
  let owner_RepositoryTransfer_7870 = "owner_RepositoryTransfer_7870_" + Math.floor(Math.random()*1000);
  let repo_RepositoryTransfer_7870 = "repo_RepositoryTransfer_7870_" + Math.floor(Math.random()*1000);
  let transferOptions_RepositoryTransfer_7870 = "transferOptions_RepositoryTransfer_7870_" + Math.floor(Math.random()*1000);
  repoTransfer(body_RepositoryTransfer_7870, id_RepositoryTransfer_7870, owner_RepositoryTransfer_7870, repo_RepositoryTransfer_7870, transferOptions_RepositoryTransfer_7870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7870, repo_Repository_7870, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repository_WikiPage", function () {
  // -> Creating Repository
  let body_Repository_7970 = {};
  let id_Repository_7970 = "id_Repository_7970_" + Math.floor(Math.random()*1000);
  let limit_Repository_7970 = Math.floor(Math.random() * 1000);
  let owner_Repository_7970 = "owner_Repository_7970_" + Math.floor(Math.random()*1000);
  let page_Repository_7970 = Math.floor(Math.random() * 1000);
  let repo_Repository_7970 = "repo_Repository_7970_" + Math.floor(Math.random()*1000);
  let sha_Repository_7970 = "sha_Repository_7970_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_7970, id_Repository_7970, limit_Repository_7970, owner_Repository_7970, page_Repository_7970, repo_Repository_7970, sha_Repository_7970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating WikiPage
  let body_WikiPage_7970 = {};
  let id_WikiPage_7970 = id_Repository_7970;
  let owner_WikiPage_7970 = "owner_WikiPage_7970_" + Math.floor(Math.random()*1000);
  let pageName_WikiPage_7970 = "pageName_WikiPage_7970_" + Math.floor(Math.random()*1000);
  let repo_WikiPage_7970 = "repo_WikiPage_7970_" + Math.floor(Math.random()*1000);
  let wikiPageOptions_WikiPage_7970 = "wikiPageOptions_WikiPage_7970_" + Math.floor(Math.random()*1000);
  repoCreateWikiPage(body_WikiPage_7970, id_WikiPage_7970, owner_WikiPage_7970, pageName_WikiPage_7970, repo_WikiPage_7970, wikiPageOptions_WikiPage_7970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting WikiPage
  repoDeleteWikiPage(owner_WikiPage_7970, repo_WikiPage_7970, pageName_WikiPage_7970, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repository
  userCurrentDeleteSubscription(owner_Repository_7970, repo_Repository_7970, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_UnadoptedRepositories", function () {
  // -> Creating Users
  let EditUserOption_Users_8070 = "EditUserOption_Users_8070_" + Math.floor(Math.random()*1000);
  let body_Users_8070 = {};
  let limit_Users_8070 = Math.floor(Math.random() * 1000);
  let page_Users_8070 = Math.floor(Math.random() * 1000);
  let token_Users_8070 = "token_Users_8070_" + Math.floor(Math.random()*1000);
  let username_Users_8070 = "username_Users_8070_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_8070, body_Users_8070, limit_Users_8070, page_Users_8070, token_Users_8070, username_Users_8070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_8070 = {};
  let filepath_Repositories_8070 = "filepath_Repositories_8070_" + Math.floor(Math.random()*1000);
  let id_Repositories_8070 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8070 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8070 = "owner_Repositories_8070_" + Math.floor(Math.random()*1000);
  let page_Repositories_8070 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8070 = "repo_Repositories_8070_" + Math.floor(Math.random()*1000);
  let username_Repositories_8070 = username_Users_8070;
  createCurrentUserRepo(body_Repositories_8070, filepath_Repositories_8070, id_Repositories_8070, limit_Repositories_8070, owner_Repositories_8070, page_Repositories_8070, repo_Repositories_8070, username_Repositories_8070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UnadoptedRepositories
  let limit_UnadoptedRepositories_8070 = Math.floor(Math.random() * 1000);
  let owner_UnadoptedRepositories_8070 = "owner_UnadoptedRepositories_8070_" + Math.floor(Math.random()*1000);
  let page_UnadoptedRepositories_8070 = Math.floor(Math.random() * 1000);
  let pattern_UnadoptedRepositories_8070 = "pattern_UnadoptedRepositories_8070_" + Math.floor(Math.random()*1000);
  let repo_UnadoptedRepositories_8070 = "repo_UnadoptedRepositories_8070_" + Math.floor(Math.random()*1000);
  adminAdoptRepository(limit_UnadoptedRepositories_8070, owner_UnadoptedRepositories_8070, page_UnadoptedRepositories_8070, pattern_UnadoptedRepositories_8070, repo_UnadoptedRepositories_8070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UnadoptedRepositories
  adminDeleteUnadoptedRepository(owner_UnadoptedRepositories_8070, repo_UnadoptedRepositories_8070, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_8070, repo_Repositories_8070, filepath_Repositories_8070, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_TeamRepos", function () {
  // -> Creating Users
  let EditUserOption_Users_8170 = "EditUserOption_Users_8170_" + Math.floor(Math.random()*1000);
  let body_Users_8170 = {};
  let limit_Users_8170 = Math.floor(Math.random() * 1000);
  let page_Users_8170 = Math.floor(Math.random() * 1000);
  let token_Users_8170 = "token_Users_8170_" + Math.floor(Math.random()*1000);
  let username_Users_8170 = "username_Users_8170_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_8170, body_Users_8170, limit_Users_8170, page_Users_8170, token_Users_8170, username_Users_8170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_8170 = {};
  let filepath_Repositories_8170 = "filepath_Repositories_8170_" + Math.floor(Math.random()*1000);
  let id_Repositories_8170 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8170 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8170 = "owner_Repositories_8170_" + Math.floor(Math.random()*1000);
  let page_Repositories_8170 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8170 = "repo_Repositories_8170_" + Math.floor(Math.random()*1000);
  let username_Repositories_8170 = username_Users_8170;
  createCurrentUserRepo(body_Repositories_8170, filepath_Repositories_8170, id_Repositories_8170, limit_Repositories_8170, owner_Repositories_8170, page_Repositories_8170, repo_Repositories_8170, username_Repositories_8170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Organization
  let body_Organization_8170 = {};
  let limit_Organization_8170 = Math.floor(Math.random() * 1000);
  let org_Organization_8170 = "org_Organization_8170_" + Math.floor(Math.random()*1000);
  let organization_Organization_8170 = {};
  let page_Organization_8170 = Math.floor(Math.random() * 1000);
  let secretname_Organization_8170 = "secretname_Organization_8170_" + Math.floor(Math.random()*1000);
  orgCreate(body_Organization_8170, limit_Organization_8170, org_Organization_8170, organization_Organization_8170, page_Organization_8170, secretname_Organization_8170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating TeamRepos
  let id_TeamRepos_8170 = id_Repositories_8170;
  let limit_TeamRepos_8170 = Math.floor(Math.random() * 1000);
  let org_TeamRepos_8170 = org_Organization_8170;
  let page_TeamRepos_8170 = Math.floor(Math.random() * 1000);
  let repo_TeamRepos_8170 = "repo_TeamRepos_8170_" + Math.floor(Math.random()*1000);
  orgAddTeamRepository(id_TeamRepos_8170, limit_TeamRepos_8170, org_TeamRepos_8170, page_TeamRepos_8170, repo_TeamRepos_8170, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting TeamRepos
  orgDeleteTeam(id_TeamRepos_8170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_8170, repo_Repositories_8170, filepath_Repositories_8170, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Repositories_UserStarred", function () {
  // -> Creating Users
  let EditUserOption_Users_8270 = "EditUserOption_Users_8270_" + Math.floor(Math.random()*1000);
  let body_Users_8270 = {};
  let limit_Users_8270 = Math.floor(Math.random() * 1000);
  let page_Users_8270 = Math.floor(Math.random() * 1000);
  let token_Users_8270 = "token_Users_8270_" + Math.floor(Math.random()*1000);
  let username_Users_8270 = "username_Users_8270_" + Math.floor(Math.random()*1000);
  userCreateToken(EditUserOption_Users_8270, body_Users_8270, limit_Users_8270, page_Users_8270, token_Users_8270, username_Users_8270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Repositories
  let body_Repositories_8270 = {};
  let filepath_Repositories_8270 = "filepath_Repositories_8270_" + Math.floor(Math.random()*1000);
  let id_Repositories_8270 = Math.floor(Math.random() * 1000);
  let limit_Repositories_8270 = Math.floor(Math.random() * 1000);
  let owner_Repositories_8270 = "owner_Repositories_8270_" + Math.floor(Math.random()*1000);
  let page_Repositories_8270 = Math.floor(Math.random() * 1000);
  let repo_Repositories_8270 = "repo_Repositories_8270_" + Math.floor(Math.random()*1000);
  let username_Repositories_8270 = username_Users_8270;
  createCurrentUserRepo(body_Repositories_8270, filepath_Repositories_8270, id_Repositories_8270, limit_Repositories_8270, owner_Repositories_8270, page_Repositories_8270, repo_Repositories_8270, username_Repositories_8270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating UserStarred
  let limit_UserStarred_8270 = Math.floor(Math.random() * 1000);
  let owner_UserStarred_8270 = "owner_UserStarred_8270_" + Math.floor(Math.random()*1000);
  let page_UserStarred_8270 = Math.floor(Math.random() * 1000);
  let repo_UserStarred_8270 = "repo_UserStarred_8270_" + Math.floor(Math.random()*1000);
  userCurrentPutStar(limit_UserStarred_8270, owner_UserStarred_8270, page_UserStarred_8270, repo_UserStarred_8270, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting UserStarred
  userCurrentDeleteStar(owner_UserStarred_8270, repo_UserStarred_8270, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Repositories
  repoDeleteFile(owner_Repositories_8270, repo_Repositories_8270, filepath_Repositories_8270, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullRequests_PullReviewRequests", function () {
  // -> Creating Repository
  let body_Repository_8370 = {};
  let id_Repository_8370 = "id_Repository_8370_" + Math.floor(Math.random()*1000);
  let limit_Repository_8370 = Math.floor(Math.random() * 1000);
  let owner_Repository_8370 = "owner_Repository_8370_" + Math.floor(Math.random()*1000);
  let page_Repository_8370 = Math.floor(Math.random() * 1000);
  let repo_Repository_8370 = "repo_Repository_8370_" + Math.floor(Math.random()*1000);
  let sha_Repository_8370 = "sha_Repository_8370_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8370, id_Repository_8370, limit_Repository_8370, owner_Repository_8370, page_Repository_8370, repo_Repository_8370, sha_Repository_8370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8370 = {};
  let id_PullRequests_8370 = id_Repository_8370;
  let index_PullRequests_8370 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8370 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8370 = "owner_PullRequests_8370_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8370 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8370 = "repo_PullRequests_8370_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8370 = "skip-to_PullRequests_8370_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8370 = "whitespace_PullRequests_8370_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_8370, id_PullRequests_8370, index_PullRequests_8370, limit_PullRequests_8370, owner_PullRequests_8370, page_PullRequests_8370, repo_PullRequests_8370, skip_to_PullRequests_8370, whitespace_PullRequests_8370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewRequests
  let body_PullReviewRequests_8370 = {};
  let index_PullReviewRequests_8370 = Math.floor(Math.random() * 1000);
  let owner_PullReviewRequests_8370 = "owner_PullReviewRequests_8370_" + Math.floor(Math.random()*1000);
  let repo_PullReviewRequests_8370 = "repo_PullReviewRequests_8370_" + Math.floor(Math.random()*1000);
  repoCreatePullReviewRequests(body_PullReviewRequests_8370, index_PullReviewRequests_8370, owner_PullReviewRequests_8370, repo_PullReviewRequests_8370, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviewRequests
  repoDeletePullReviewRequests(owner_PullReviewRequests_8370, repo_PullReviewRequests_8370, index_PullReviewRequests_8370, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_8370, repo_PullRequests_8370, index_PullRequests_8370, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullRequests_PullReviews", function () {
  // -> Creating Repository
  let body_Repository_8470 = {};
  let id_Repository_8470 = "id_Repository_8470_" + Math.floor(Math.random()*1000);
  let limit_Repository_8470 = Math.floor(Math.random() * 1000);
  let owner_Repository_8470 = "owner_Repository_8470_" + Math.floor(Math.random()*1000);
  let page_Repository_8470 = Math.floor(Math.random() * 1000);
  let repo_Repository_8470 = "repo_Repository_8470_" + Math.floor(Math.random()*1000);
  let sha_Repository_8470 = "sha_Repository_8470_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8470, id_Repository_8470, limit_Repository_8470, owner_Repository_8470, page_Repository_8470, repo_Repository_8470, sha_Repository_8470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8470 = {};
  let id_PullRequests_8470 = id_Repository_8470;
  let index_PullRequests_8470 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8470 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8470 = "owner_PullRequests_8470_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8470 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8470 = "repo_PullRequests_8470_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8470 = "skip-to_PullRequests_8470_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8470 = "whitespace_PullRequests_8470_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_8470, id_PullRequests_8470, index_PullRequests_8470, limit_PullRequests_8470, owner_PullRequests_8470, page_PullRequests_8470, repo_PullRequests_8470, skip_to_PullRequests_8470, whitespace_PullRequests_8470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviews
  let body_PullReviews_8470 = {};
  let id_PullReviews_8470 = id_PullRequests_8470;
  let index_PullReviews_8470 = Math.floor(Math.random() * 1000);
  let limit_PullReviews_8470 = Math.floor(Math.random() * 1000);
  let owner_PullReviews_8470 = "owner_PullReviews_8470_" + Math.floor(Math.random()*1000);
  let page_PullReviews_8470 = Math.floor(Math.random() * 1000);
  let repo_PullReviews_8470 = "repo_PullReviews_8470_" + Math.floor(Math.random()*1000);
  repoSubmitPullReview(body_PullReviews_8470, id_PullReviews_8470, index_PullReviews_8470, limit_PullReviews_8470, owner_PullReviews_8470, page_PullReviews_8470, repo_PullReviews_8470, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullReviews
  repoDeletePullReview(owner_PullReviews_8470, repo_PullReviews_8470, index_PullReviews_8470, id_PullReviews_8470, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_8470, repo_PullRequests_8470, index_PullRequests_8470, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullRequests_PullReviewDismissals", function () {
  // -> Creating Repository
  let body_Repository_8570 = {};
  let id_Repository_8570 = "id_Repository_8570_" + Math.floor(Math.random()*1000);
  let limit_Repository_8570 = Math.floor(Math.random() * 1000);
  let owner_Repository_8570 = "owner_Repository_8570_" + Math.floor(Math.random()*1000);
  let page_Repository_8570 = Math.floor(Math.random() * 1000);
  let repo_Repository_8570 = "repo_Repository_8570_" + Math.floor(Math.random()*1000);
  let sha_Repository_8570 = "sha_Repository_8570_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8570, id_Repository_8570, limit_Repository_8570, owner_Repository_8570, page_Repository_8570, repo_Repository_8570, sha_Repository_8570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8570 = {};
  let id_PullRequests_8570 = id_Repository_8570;
  let index_PullRequests_8570 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8570 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8570 = "owner_PullRequests_8570_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8570 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8570 = "repo_PullRequests_8570_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8570 = "skip-to_PullRequests_8570_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8570 = "whitespace_PullRequests_8570_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_8570, id_PullRequests_8570, index_PullRequests_8570, limit_PullRequests_8570, owner_PullRequests_8570, page_PullRequests_8570, repo_PullRequests_8570, skip_to_PullRequests_8570, whitespace_PullRequests_8570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewDismissals
  let body_PullReviewDismissals_8570 = {};
  let id_PullReviewDismissals_8570 = id_PullRequests_8570;
  let index_PullReviewDismissals_8570 = Math.floor(Math.random() * 1000);
  let owner_PullReviewDismissals_8570 = "owner_PullReviewDismissals_8570_" + Math.floor(Math.random()*1000);
  let repo_PullReviewDismissals_8570 = "repo_PullReviewDismissals_8570_" + Math.floor(Math.random()*1000);
  repoDismissPullReview(body_PullReviewDismissals_8570, id_PullReviewDismissals_8570, index_PullReviewDismissals_8570, owner_PullReviewDismissals_8570, repo_PullReviewDismissals_8570, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_8570, repo_PullRequests_8570, index_PullRequests_8570, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullRequests_PullReviewUndismissals", function () {
  // -> Creating Repository
  let body_Repository_8670 = {};
  let id_Repository_8670 = "id_Repository_8670_" + Math.floor(Math.random()*1000);
  let limit_Repository_8670 = Math.floor(Math.random() * 1000);
  let owner_Repository_8670 = "owner_Repository_8670_" + Math.floor(Math.random()*1000);
  let page_Repository_8670 = Math.floor(Math.random() * 1000);
  let repo_Repository_8670 = "repo_Repository_8670_" + Math.floor(Math.random()*1000);
  let sha_Repository_8670 = "sha_Repository_8670_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8670, id_Repository_8670, limit_Repository_8670, owner_Repository_8670, page_Repository_8670, repo_Repository_8670, sha_Repository_8670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8670 = {};
  let id_PullRequests_8670 = id_Repository_8670;
  let index_PullRequests_8670 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8670 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8670 = "owner_PullRequests_8670_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8670 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8670 = "repo_PullRequests_8670_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8670 = "skip-to_PullRequests_8670_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8670 = "whitespace_PullRequests_8670_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_8670, id_PullRequests_8670, index_PullRequests_8670, limit_PullRequests_8670, owner_PullRequests_8670, page_PullRequests_8670, repo_PullRequests_8670, skip_to_PullRequests_8670, whitespace_PullRequests_8670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullReviewUndismissals
  let id_PullReviewUndismissals_8670 = id_PullRequests_8670;
  let index_PullReviewUndismissals_8670 = Math.floor(Math.random() * 1000);
  let owner_PullReviewUndismissals_8670 = "owner_PullReviewUndismissals_8670_" + Math.floor(Math.random()*1000);
  let repo_PullReviewUndismissals_8670 = "repo_PullReviewUndismissals_8670_" + Math.floor(Math.random()*1000);
  repoUnDismissPullReview(id_PullReviewUndismissals_8670, index_PullReviewUndismissals_8670, owner_PullReviewUndismissals_8670, repo_PullReviewUndismissals_8670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_8670, repo_PullRequests_8670, index_PullRequests_8670, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:PullRequests_PullRequestUpdate", function () {
  // -> Creating Repository
  let body_Repository_8770 = {};
  let id_Repository_8770 = "id_Repository_8770_" + Math.floor(Math.random()*1000);
  let limit_Repository_8770 = Math.floor(Math.random() * 1000);
  let owner_Repository_8770 = "owner_Repository_8770_" + Math.floor(Math.random()*1000);
  let page_Repository_8770 = Math.floor(Math.random() * 1000);
  let repo_Repository_8770 = "repo_Repository_8770_" + Math.floor(Math.random()*1000);
  let sha_Repository_8770 = "sha_Repository_8770_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8770, id_Repository_8770, limit_Repository_8770, owner_Repository_8770, page_Repository_8770, repo_Repository_8770, sha_Repository_8770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequests
  let body_PullRequests_8770 = {};
  let id_PullRequests_8770 = id_Repository_8770;
  let index_PullRequests_8770 = Math.floor(Math.random() * 1000);
  let limit_PullRequests_8770 = Math.floor(Math.random() * 1000);
  let owner_PullRequests_8770 = "owner_PullRequests_8770_" + Math.floor(Math.random()*1000);
  let page_PullRequests_8770 = Math.floor(Math.random() * 1000);
  let repo_PullRequests_8770 = "repo_PullRequests_8770_" + Math.floor(Math.random()*1000);
  let skip_to_PullRequests_8770 = "skip-to_PullRequests_8770_" + Math.floor(Math.random()*1000);
  let whitespace_PullRequests_8770 = "whitespace_PullRequests_8770_" + Math.floor(Math.random()*1000);
  repoMergePullRequest(body_PullRequests_8770, id_PullRequests_8770, index_PullRequests_8770, limit_PullRequests_8770, owner_PullRequests_8770, page_PullRequests_8770, repo_PullRequests_8770, skip_to_PullRequests_8770, whitespace_PullRequests_8770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating PullRequestUpdate
  let id_PullRequestUpdate_8770 = id_PullRequests_8770;
  let index_PullRequestUpdate_8770 = Math.floor(Math.random() * 1000);
  let owner_PullRequestUpdate_8770 = "owner_PullRequestUpdate_8770_" + Math.floor(Math.random()*1000);
  let repo_PullRequestUpdate_8770 = "repo_PullRequestUpdate_8770_" + Math.floor(Math.random()*1000);
  let style_PullRequestUpdate_8770 = "style_PullRequestUpdate_8770_" + Math.floor(Math.random()*1000);
  repoUpdatePullRequest(id_PullRequestUpdate_8770, index_PullRequestUpdate_8770, owner_PullRequestUpdate_8770, repo_PullRequestUpdate_8770, style_PullRequestUpdate_8770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PullRequests
  repoCancelScheduledAutoMerge(owner_PullRequests_8770, repo_PullRequests_8770, index_PullRequests_8770, { expectedResponseCodes: [200, 201, 204] });

});

bthread("chain:Releases_ReleaseAttachments", function () {
  // -> Creating Repository
  let body_Repository_8870 = {};
  let id_Repository_8870 = "id_Repository_8870_" + Math.floor(Math.random()*1000);
  let limit_Repository_8870 = Math.floor(Math.random() * 1000);
  let owner_Repository_8870 = "owner_Repository_8870_" + Math.floor(Math.random()*1000);
  let page_Repository_8870 = Math.floor(Math.random() * 1000);
  let repo_Repository_8870 = "repo_Repository_8870_" + Math.floor(Math.random()*1000);
  let sha_Repository_8870 = "sha_Repository_8870_" + Math.floor(Math.random()*1000);
  repoCreateStatus(body_Repository_8870, id_Repository_8870, limit_Repository_8870, owner_Repository_8870, page_Repository_8870, repo_Repository_8870, sha_Repository_8870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Releases
  let body_Releases_8870 = {};
  let draft_Releases_8870 = true;
  let id_Releases_8870 = id_Repository_8870;
  let limit_Releases_8870 = Math.floor(Math.random() * 1000);
  let owner_Releases_8870 = "owner_Releases_8870_" + Math.floor(Math.random()*1000);
  let page_Releases_8870 = Math.floor(Math.random() * 1000);
  let pre_release_Releases_8870 = true;
  let repo_Releases_8870 = "repo_Releases_8870_" + Math.floor(Math.random()*1000);
  repoCreateRelease(body_Releases_8870, draft_Releases_8870, id_Releases_8870, limit_Releases_8870, owner_Releases_8870, page_Releases_8870, pre_release_Releases_8870, repo_Releases_8870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating ReleaseAttachments
  let attachment_ReleaseAttachments_8870 = "val_" + Math.floor(Math.random()*1000);
  let attachment_id_ReleaseAttachments_8870 = Math.floor(Math.random() * 1000);
  let body_ReleaseAttachments_8870 = {};
  let id_ReleaseAttachments_8870 = id_Releases_8870;
  let name_ReleaseAttachments_8870 = "name_ReleaseAttachments_8870_" + Math.floor(Math.random()*1000);
  let owner_ReleaseAttachments_8870 = "owner_ReleaseAttachments_8870_" + Math.floor(Math.random()*1000);
  let repo_ReleaseAttachments_8870 = "repo_ReleaseAttachments_8870_" + Math.floor(Math.random()*1000);
  repoCreateReleaseAttachment(attachment_ReleaseAttachments_8870, attachment_id_ReleaseAttachments_8870, body_ReleaseAttachments_8870, id_ReleaseAttachments_8870, name_ReleaseAttachments_8870, owner_ReleaseAttachments_8870, repo_ReleaseAttachments_8870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting ReleaseAttachments
  repoDeleteReleaseAttachment(owner_ReleaseAttachments_8870, repo_ReleaseAttachments_8870, id_ReleaseAttachments_8870, attachment_id_ReleaseAttachments_8870, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Releases
  repoDeleteRelease(owner_Releases_8870, repo_Releases_8870, id_Releases_8870, { expectedResponseCodes: [200, 201, 204] });

});
