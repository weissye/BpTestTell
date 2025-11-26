// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let username = "username_200";
  addUser("username_200");
  tryToAddExistingUser("username_200");
  verifyUserExists(username);
  updateUser(username, "username_200");
  deleteUser(username);
  tryToDeleteANonExistingUser(username);
  verifyUserDoesNotExist(username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let username = "username_201";
  addUser("username_201");
  tryToAddExistingUser("username_201");
  updateUser(username, "username_201");
  verifyUserExists(username);
  deleteUser(username);
  tryToDeleteANonExistingUser(username);
  verifyUserDoesNotExist(username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let username = "username_206";
  addUser("username_206");
  verifyUserExists(username);
  tryToAddExistingUser("username_206");
  verifyUserExists(username);
});

// Story: crud:User:nondet:existing:update
bthread("crud:User:nondet:existing:update", function () {
  let ev = waitForAnyUserAdded();
  let args = Object.values(ev);
  block(matchDeletedUser.apply(null, args), function () {
    // verifyUserExists.apply(null, args);
    // updateUser.apply(null, args);
  });
});

// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      // verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let id = 210;
  addWebhook(210);
  tryToAddExistingWebhook(210);
  verifyWebhookExists(id);
  updateWebhook(id, 210);
  deleteWebhook(id);
  tryToDeleteANonExistingWebhook(id);
  verifyWebhookDoesNotExist(id);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let id = 211;
  addWebhook(211);
  tryToAddExistingWebhook(211);
  updateWebhook(id, 211);
  verifyWebhookExists(id);
  deleteWebhook(id);
  tryToDeleteANonExistingWebhook(id);
  verifyWebhookDoesNotExist(id);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let id = 216;
  addWebhook(216);
  verifyWebhookExists(id);
  tryToAddExistingWebhook(216);
  verifyWebhookExists(id);
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

// Story: crud:Activity:read_only
bthread("crud:Activity:read_only", function () {
  let org = "org_220";
  // Read-only check for Activity
  verifyActivityExists(org);
});

// Story: crud:Organization:nondet:1:1
bthread("crud:Organization:nondet:1:1", function () {
  let org = "org_240";
  addOrganization("org_240");
  tryToAddExistingOrganization("org_240");
  verifyOrganizationExists(org);
  updateOrganization(org, "org_240");
  deleteOrganization(org);
  tryToDeleteANonExistingOrganization(org);
  verifyOrganizationDoesNotExist(org);
});

// Story: crud:Organization:nondet:1:2
bthread("crud:Organization:nondet:1:2", function () {
  let org = "org_241";
  addOrganization("org_241");
  tryToAddExistingOrganization("org_241");
  updateOrganization(org, "org_241");
  verifyOrganizationExists(org);
  deleteOrganization(org);
  tryToDeleteANonExistingOrganization(org);
  verifyOrganizationDoesNotExist(org);
});

// Story: crud:Organization:nondet:negative:dup-add
bthread("crud:Organization:nondet:negative:dup-add", function () {
  let org = "org_246";
  addOrganization("org_246");
  verifyOrganizationExists(org);
  tryToAddExistingOrganization("org_246");
  verifyOrganizationExists(org);
});

// Story: crud:Organization:nondet:existing:update
bthread("crud:Organization:nondet:existing:update", function () {
  let ev = waitForAnyOrganizationAdded();
  let args = Object.values(ev);
  block(matchDeletedOrganization.apply(null, args), function () {
    // verifyOrganizationExists.apply(null, args);
    // updateOrganization.apply(null, args);
  });
});

// Story: monitor:Organization:add
bthread("monitor:Organization:add", function () {
  while (true) {
    let ev = waitForAnyOrganizationAdded();
    let args = Object.values(ev);
    block(matchDeletedOrganization.apply(null, args), function () {
      // verifyOrganizationExists.apply(null, args);
    });
  }
});

// Story: crud:Repository:nondet:1:1
bthread("crud:Repository:nondet:1:1", function () {
  let owner = "owner_250";
  let repo = "repo_250";
  addRepository("owner_250", "repo_250");
  tryToAddExistingRepository("owner_250", "repo_250");
  verifyRepositoryExists(owner);
  updateRepository(owner, "owner_250", "repo_250");
  deleteRepository(owner);
  tryToDeleteANonExistingRepository(owner);
  verifyRepositoryDoesNotExist(owner);
});

// Story: crud:Repository:nondet:1:2
bthread("crud:Repository:nondet:1:2", function () {
  let owner = "owner_251";
  let repo = "repo_251";
  addRepository("owner_251", "repo_251");
  tryToAddExistingRepository("owner_251", "repo_251");
  updateRepository(owner, "owner_251", "repo_251");
  verifyRepositoryExists(owner);
  deleteRepository(owner);
  tryToDeleteANonExistingRepository(owner);
  verifyRepositoryDoesNotExist(owner);
});

// Story: crud:Repository:nondet:negative:dup-add
bthread("crud:Repository:nondet:negative:dup-add", function () {
  let owner = "owner_256";
  let repo = "repo_256";
  addRepository("owner_256", "repo_256");
  verifyRepositoryExists(owner);
  tryToAddExistingRepository("owner_256", "repo_256");
  verifyRepositoryExists(owner);
});

// Story: crud:Repository:nondet:existing:update
bthread("crud:Repository:nondet:existing:update", function () {
  let ev = waitForAnyRepositoryAdded();
  let args = Object.values(ev);
  block(matchDeletedRepository.apply(null, args), function () {
    // verifyRepositoryExists.apply(null, args);
    // updateRepository.apply(null, args);
  });
});

// Story: monitor:Repository:add
bthread("monitor:Repository:add", function () {
  while (true) {
    let ev = waitForAnyRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedRepository.apply(null, args), function () {
      // verifyRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:Branch:nondet:1:1
bthread("crud:Branch:nondet:1:1", function () {
  let owner = "owner_260";
  let repo = "repo_260";
  let branch = "branch_260";
  addBranch("owner_260", "repo_260", "branch_260");
  tryToAddExistingBranch("owner_260", "repo_260", "branch_260");
  verifyBranchExists(owner);
  updateBranch(owner, "owner_260", "repo_260", "branch_260");
  deleteBranch(owner);
  tryToDeleteANonExistingBranch(owner);
  verifyBranchDoesNotExist(owner);
});

// Story: crud:Branch:nondet:1:2
bthread("crud:Branch:nondet:1:2", function () {
  let owner = "owner_261";
  let repo = "repo_261";
  let branch = "branch_261";
  addBranch("owner_261", "repo_261", "branch_261");
  tryToAddExistingBranch("owner_261", "repo_261", "branch_261");
  updateBranch(owner, "owner_261", "repo_261", "branch_261");
  verifyBranchExists(owner);
  deleteBranch(owner);
  tryToDeleteANonExistingBranch(owner);
  verifyBranchDoesNotExist(owner);
});

// Story: crud:Branch:nondet:negative:dup-add
bthread("crud:Branch:nondet:negative:dup-add", function () {
  let owner = "owner_266";
  let repo = "repo_266";
  let branch = "branch_266";
  addBranch("owner_266", "repo_266", "branch_266");
  verifyBranchExists(owner);
  tryToAddExistingBranch("owner_266", "repo_266", "branch_266");
  verifyBranchExists(owner);
});

// Story: crud:Branch:nondet:existing:update
bthread("crud:Branch:nondet:existing:update", function () {
  let ev = waitForAnyBranchAdded();
  let args = Object.values(ev);
  block(matchDeletedBranch.apply(null, args), function () {
    // verifyBranchExists.apply(null, args);
    // updateBranch.apply(null, args);
  });
});

// Story: monitor:Branch:add
bthread("monitor:Branch:add", function () {
  while (true) {
    let ev = waitForAnyBranchAdded();
    let args = Object.values(ev);
    block(matchDeletedBranch.apply(null, args), function () {
      // verifyBranchExists.apply(null, args);
    });
  }
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let org = "org_270";
  let id = 270;
  addLabel("org_270", 270);
  tryToAddExistingLabel("org_270", 270);
  verifyLabelExists(id);
  updateLabel(id, "org_270", 270);
  deleteLabel(id);
  tryToDeleteANonExistingLabel(id);
  verifyLabelDoesNotExist(id);
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let org = "org_271";
  let id = 271;
  addLabel("org_271", 271);
  tryToAddExistingLabel("org_271", 271);
  updateLabel(id, "org_271", 271);
  verifyLabelExists(id);
  deleteLabel(id);
  tryToDeleteANonExistingLabel(id);
  verifyLabelDoesNotExist(id);
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let org = "org_276";
  let id = 276;
  addLabel("org_276", 276);
  verifyLabelExists(id);
  tryToAddExistingLabel("org_276", 276);
  verifyLabelExists(id);
});

// Story: crud:Label:nondet:existing:update
bthread("crud:Label:nondet:existing:update", function () {
  let ev = waitForAnyLabelAdded();
  let args = Object.values(ev);
  block(matchDeletedLabel.apply(null, args), function () {
    // verifyLabelExists.apply(null, args);
    // updateLabel.apply(null, args);
  });
});

// Story: monitor:Label:add
bthread("monitor:Label:add", function () {
  while (true) {
    let ev = waitForAnyLabelAdded();
    let args = Object.values(ev);
    block(matchDeletedLabel.apply(null, args), function () {
      // verifyLabelExists.apply(null, args);
    });
  }
});
