// HLS (active + passive) – jira_cloud
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("jira_cloud: Seed Projects", function () {
    addProject("PR-001");
    addProject("PR-002");
    addProject("PR-003");
    updateProject("PR-003", { "note": "seeded" });
  });
  
    bthread("jira_cloud: Issue lifecycle", function () {
    addIssue("IS-100");
    updateIssue("IS-100", { "status": "ready" });
    deleteIssue("IS-100");
    verifyIssueDoesNotExist("IS-100");
  });
  
    bthread("jira_cloud: Contention on Comment", function () {
    addComment("CO-200");
    tryAddComment("CO-200"); // duplicate should be blocked
    updateComment("CO-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Project add verification", function () {
    const ev = waitForAnyProjectAdded();
    block(matchDeleteProject(ev.projectId || ev.id || ev.key), function () {
      verifyProjectExists(ev.projectId || ev.id || ev.key);
    });
  });
  
    bthread("Project update verification", function () {
    const ev = waitForAnyProjectUpdated();
    block(matchDeleteProject(ev.projectId || ev.id || ev.key), function () {
      verifyProjectUpdated(ev.projectId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Project deletion verification", function () {
    const ev = waitForAnyProjectDeleted();
    block(matchAddProject(ev.projectId || ev.id || ev.key, ANY), function () {
      verifyProjectDoesNotExist(ev.projectId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Project)", function () {
    const ev = waitForAnyProjectDeleted();
    block(matchUpdateProject(ev.projectId || ev.id || ev.key, ANY), function () {
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
  
    bthread("Comment add verification", function () {
    const ev = waitForAnyCommentAdded();
    block(matchDeleteComment(ev.commentId || ev.id || ev.key), function () {
      verifyCommentExists(ev.commentId || ev.id || ev.key);
    });
  });
  
    bthread("Comment update verification", function () {
    const ev = waitForAnyCommentUpdated();
    block(matchDeleteComment(ev.commentId || ev.id || ev.key), function () {
      verifyCommentUpdated(ev.commentId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Comment deletion verification", function () {
    const ev = waitForAnyCommentDeleted();
    block(matchAddComment(ev.commentId || ev.id || ev.key, ANY), function () {
      verifyCommentDoesNotExist(ev.commentId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Comment)", function () {
    const ev = waitForAnyCommentDeleted();
    block(matchUpdateComment(ev.commentId || ev.id || ev.key, ANY), function () {
    });
  });

} // end if MODE
