// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:User:read_only
bthread("crud:User:read_only", function () {
  let accountId = 200;
  // Read-only check for User
  verifyUserExists(accountId);
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let webhookId = 210;
  addWebhook(210);
  tryToAddExistingWebhook(210);
  verifyWebhookExists(webhookId);
  updateWebhook(webhookId, 210);
  deleteWebhook(webhookId);
  tryToDeleteANonExistingWebhook(webhookId);
  verifyWebhookDoesNotExist(webhookId);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let webhookId = 211;
  addWebhook(211);
  tryToAddExistingWebhook(211);
  updateWebhook(webhookId, 211);
  verifyWebhookExists(webhookId);
  deleteWebhook(webhookId);
  tryToDeleteANonExistingWebhook(webhookId);
  verifyWebhookDoesNotExist(webhookId);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let webhookId = 216;
  addWebhook(216);
  verifyWebhookExists(webhookId);
  tryToAddExistingWebhook(216);
  verifyWebhookExists(webhookId);
});

// Story: crud:Webhook:nondet:existing:update
bthread("crud:Webhook:nondet:existing:update", function () {
  let ev = waitForAnyWebhookAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhook.apply(null, args), function () {
    // verifyWebhookExists.apply(null, args);
    // updateWebhook.apply(null, args);
  });
});

// Story: monitor:Webhook:add
bthread("monitor:Webhook:add", function () {
  while (true) {
    let ev = waitForAnyWebhookAdded();
    let args = Object.values(ev);
    block(matchDeletedWebhook.apply(null, args), function () {
      // verifyWebhookExists.apply(null, args);
    });
  }
});

// Story: crud:Project:nondet:1:1
bthread("crud:Project:nondet:1:1", function () {
  let projectIdOrKey = 220;
  addProject(220);
  tryToAddExistingProject(220);
  verifyProjectExists(projectIdOrKey);
  updateProject(projectIdOrKey, 220);
  deleteProject(projectIdOrKey);
  tryToDeleteANonExistingProject(projectIdOrKey);
  verifyProjectDoesNotExist(projectIdOrKey);
});

// Story: crud:Project:nondet:1:2
bthread("crud:Project:nondet:1:2", function () {
  let projectIdOrKey = 221;
  addProject(221);
  tryToAddExistingProject(221);
  updateProject(projectIdOrKey, 221);
  verifyProjectExists(projectIdOrKey);
  deleteProject(projectIdOrKey);
  tryToDeleteANonExistingProject(projectIdOrKey);
  verifyProjectDoesNotExist(projectIdOrKey);
});

// Story: crud:Project:nondet:negative:dup-add
bthread("crud:Project:nondet:negative:dup-add", function () {
  let projectIdOrKey = 226;
  addProject(226);
  verifyProjectExists(projectIdOrKey);
  tryToAddExistingProject(226);
  verifyProjectExists(projectIdOrKey);
});

// Story: crud:Project:nondet:existing:update
bthread("crud:Project:nondet:existing:update", function () {
  let ev = waitForAnyProjectAdded();
  let args = Object.values(ev);
  block(matchDeletedProject.apply(null, args), function () {
    // verifyProjectExists.apply(null, args);
    // updateProject.apply(null, args);
  });
});

// Story: monitor:Project:add
bthread("monitor:Project:add", function () {
  while (true) {
    let ev = waitForAnyProjectAdded();
    let args = Object.values(ev);
    block(matchDeletedProject.apply(null, args), function () {
      // verifyProjectExists.apply(null, args);
    });
  }
});

// Story: crud:Issue:nondet:1:1
bthread("crud:Issue:nondet:1:1", function () {
  let issueIdOrKey = 230;
  addIssue(230);
  tryToAddExistingIssue(230);
  verifyIssueExists(issueIdOrKey);
  updateIssue(issueIdOrKey, 230);
  deleteIssue(issueIdOrKey);
  tryToDeleteANonExistingIssue(issueIdOrKey);
  verifyIssueDoesNotExist(issueIdOrKey);
});

// Story: crud:Issue:nondet:1:2
bthread("crud:Issue:nondet:1:2", function () {
  let issueIdOrKey = 231;
  addIssue(231);
  tryToAddExistingIssue(231);
  updateIssue(issueIdOrKey, 231);
  verifyIssueExists(issueIdOrKey);
  deleteIssue(issueIdOrKey);
  tryToDeleteANonExistingIssue(issueIdOrKey);
  verifyIssueDoesNotExist(issueIdOrKey);
});

// Story: crud:Issue:nondet:negative:dup-add
bthread("crud:Issue:nondet:negative:dup-add", function () {
  let issueIdOrKey = 236;
  addIssue(236);
  verifyIssueExists(issueIdOrKey);
  tryToAddExistingIssue(236);
  verifyIssueExists(issueIdOrKey);
});

// Story: crud:Issue:nondet:existing:update
bthread("crud:Issue:nondet:existing:update", function () {
  let ev = waitForAnyIssueAdded();
  let args = Object.values(ev);
  block(matchDeletedIssue.apply(null, args), function () {
    // verifyIssueExists.apply(null, args);
    // updateIssue.apply(null, args);
  });
});

// Story: monitor:Issue:add
bthread("monitor:Issue:add", function () {
  while (true) {
    let ev = waitForAnyIssueAdded();
    let args = Object.values(ev);
    block(matchDeletedIssue.apply(null, args), function () {
      // verifyIssueExists.apply(null, args);
    });
  }
});

// Story: crud:WebhookRegistration:nondet:1:1
bthread("crud:WebhookRegistration:nondet:1:1", function () {
  let webhookId = 240;
  addWebhookRegistration(240);
  tryToAddExistingWebhookRegistration(240);
  verifyWebhookRegistrationExists(webhookId);
  updateWebhookRegistration(webhookId, 240);
  deleteWebhookRegistration(webhookId);
  tryToDeleteANonExistingWebhookRegistration(webhookId);
  verifyWebhookRegistrationDoesNotExist(webhookId);
});

// Story: crud:WebhookRegistration:nondet:1:2
bthread("crud:WebhookRegistration:nondet:1:2", function () {
  let webhookId = 241;
  addWebhookRegistration(241);
  tryToAddExistingWebhookRegistration(241);
  updateWebhookRegistration(webhookId, 241);
  verifyWebhookRegistrationExists(webhookId);
  deleteWebhookRegistration(webhookId);
  tryToDeleteANonExistingWebhookRegistration(webhookId);
  verifyWebhookRegistrationDoesNotExist(webhookId);
});

// Story: crud:WebhookRegistration:nondet:negative:dup-add
bthread("crud:WebhookRegistration:nondet:negative:dup-add", function () {
  let webhookId = 246;
  addWebhookRegistration(246);
  verifyWebhookRegistrationExists(webhookId);
  tryToAddExistingWebhookRegistration(246);
  verifyWebhookRegistrationExists(webhookId);
});

// Story: crud:WebhookRegistration:nondet:existing:update
bthread("crud:WebhookRegistration:nondet:existing:update", function () {
  let ev = waitForAnyWebhookRegistrationAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhookRegistration.apply(null, args), function () {
    // verifyWebhookRegistrationExists.apply(null, args);
    // updateWebhookRegistration.apply(null, args);
  });
});

// Story: monitor:WebhookRegistration:add
bthread("monitor:WebhookRegistration:add", function () {
  while (true) {
    let ev = waitForAnyWebhookRegistrationAdded();
    let args = Object.values(ev);
    block(matchDeletedWebhookRegistration.apply(null, args), function () {
      // verifyWebhookRegistrationExists.apply(null, args);
    });
  }
});
