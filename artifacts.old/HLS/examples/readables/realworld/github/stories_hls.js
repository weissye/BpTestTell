// HLS (active + passive) – github
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("github: Seed Repos", function () {
    addRepo("RE-001");
    addRepo("RE-002");
    addRepo("RE-003");
    updateRepo("RE-003", { "note": "seeded" });
  });
  
    bthread("github: Issue lifecycle", function () {
    addIssue("IS-100");
    updateIssue("IS-100", { "status": "ready" });
    deleteIssue("IS-100");
    verifyIssueDoesNotExist("IS-100");
  });
  
    bthread("github: Contention on PullRequest", function () {
    addPullRequest("PU-200");
    tryAddPullRequest("PU-200"); // duplicate should be blocked
    updatePullRequest("PU-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Repo add verification", function () {
    const ev = waitForAnyRepoAdded();
    block(matchDeleteRepo(ev.repoId || ev.id || ev.key), function () {
      verifyRepoExists(ev.repoId || ev.id || ev.key);
    });
  });
  
    bthread("Repo update verification", function () {
    const ev = waitForAnyRepoUpdated();
    block(matchDeleteRepo(ev.repoId || ev.id || ev.key), function () {
      verifyRepoUpdated(ev.repoId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Repo deletion verification", function () {
    const ev = waitForAnyRepoDeleted();
    block(matchAddRepo(ev.repoId || ev.id || ev.key, ANY), function () {
      verifyRepoDoesNotExist(ev.repoId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Repo)", function () {
    const ev = waitForAnyRepoDeleted();
    block(matchUpdateRepo(ev.repoId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Issue add verification", function () {
    const ev = waitForAnyIssueAdded();
    block(matchDeleteIssue(ev.issueId || ev.id || ev.key), function () {
      verifyIssueExists(ev.issueId || ev.id || ev.key);
    });
  });
  
    bthread("Issue update verification", function () {
    const ev = waitForAnyIssueUpdated();
    block(matchDeleteIssue(ev.issueId || ev.id || ev.key), function () {
      verifyIssueUpdated(ev.issueId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Issue deletion verification", function () {
    const ev = waitForAnyIssueDeleted();
    block(matchAddIssue(ev.issueId || ev.id || ev.key, ANY), function () {
      verifyIssueDoesNotExist(ev.issueId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Issue)", function () {
    const ev = waitForAnyIssueDeleted();
    block(matchUpdateIssue(ev.issueId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("PullRequest add verification", function () {
    const ev = waitForAnyPullRequestAdded();
    block(matchDeletePullRequest(ev.pullRequestId || ev.id || ev.key), function () {
      verifyPullRequestExists(ev.pullRequestId || ev.id || ev.key);
    });
  });
  
    bthread("PullRequest update verification", function () {
    const ev = waitForAnyPullRequestUpdated();
    block(matchDeletePullRequest(ev.pullRequestId || ev.id || ev.key), function () {
      verifyPullRequestUpdated(ev.pullRequestId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("PullRequest deletion verification", function () {
    const ev = waitForAnyPullRequestDeleted();
    block(matchAddPullRequest(ev.pullRequestId || ev.id || ev.key, ANY), function () {
      verifyPullRequestDoesNotExist(ev.pullRequestId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (PullRequest)", function () {
    const ev = waitForAnyPullRequestDeleted();
    block(matchUpdatePullRequest(ev.pullRequestId || ev.id || ev.key, ANY), function () {
    });
  });

} // end if MODE
