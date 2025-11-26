// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:action:read_only
bthread("crud:action:read_only", function () {
  let idAction = 200;
  let key = "key_200";
  let token = "token_200";
  // Read-only check for action
  verifyactionExists(key);
});

// Story: crud:board:read_only
bthread("crud:board:read_only", function () {
  let key = "key_210";
  let token = "token_210";
  // Read-only check for board
  verifyboardExists(key);
});

// Story: crud:boardsChecklists:read_only
bthread("crud:boardsChecklists:read_only", function () {
  let idBoard = 220;
  let key = "key_220";
  let token = "token_220";
  // Read-only check for boardsChecklists
  verifyboardsChecklistsExists(key);
});

// Story: crud:boardsLabels:read_only
bthread("crud:boardsLabels:read_only", function () {
  let idBoard = 230;
  let key = "key_230";
  let token = "token_230";
  // Read-only check for boardsLabels
  verifyboardsLabelsExists(key);
});

// Story: crud:boardsLists:read_only
bthread("crud:boardsLists:read_only", function () {
  let idBoard = 240;
  let key = "key_240";
  let token = "token_240";
  // Read-only check for boardsLists
  verifyboardsListsExists(key);
});

// Story: crud:boardsMembers:read_only
bthread("crud:boardsMembers:read_only", function () {
  let idBoard = 250;
  let key = "key_250";
  let token = "token_250";
  // Read-only check for boardsMembers
  verifyboardsMembersExists(key);
});

// Story: crud:boardsMemberships:read_only
bthread("crud:boardsMemberships:read_only", function () {
  let idBoard = 270;
  let key = "key_270";
  let token = "token_270";
  // Read-only check for boardsMemberships
  verifyboardsMembershipsExists(key);
});

// Story: crud:boardsMembershipsByIdMembership:read_only
bthread("crud:boardsMembershipsByIdMembership:read_only", function () {
  let idBoard = 280;
  let idMembership = 280;
  let key = "key_280";
  let token = "token_280";
  // Read-only check for boardsMembershipsByIdMembership
  verifyboardsMembershipsByIdMembershipExists(key);
});

// Story: crud:list:read_only
bthread("crud:list:read_only", function () {
  let idBoard = 290;
  let key = "key_290";
  let token = "token_290";
  // Read-only check for list
  verifylistExists(key);
});

// Story: crud:card:read_only
bthread("crud:card:read_only", function () {
  let idBoard = 300;
  let idCard = 300;
  let key = "key_300";
  let token = "token_300";
  // Read-only check for card
  verifycardExists(key);
});

// Story: crud:member:read_only
bthread("crud:member:read_only", function () {
  let idMember = 310;
  let key = "key_310";
  let token = "token_310";
  // Read-only check for member
  verifymemberExists(key);
});

// Story: crud:webhook:nondet:1:1
bthread("crud:webhook:nondet:1:1", function () {
  let key = "key_320";
  let token = "token_320";
  addWebhook("key_320", "token_320");
  tryToAddExistingwebhook("key_320", "token_320");
  verifywebhookExists(key);
  updateWebhook(key, "key_320", "token_320");
  deleteWebhook(key);
  tryToDeleteANonExistingwebhook(key);
  verifywebhookDoesNotExist(key);
});

// Story: crud:webhook:nondet:1:2
bthread("crud:webhook:nondet:1:2", function () {
  let key = "key_321";
  let token = "token_321";
  addWebhook("key_321", "token_321");
  tryToAddExistingwebhook("key_321", "token_321");
  updateWebhook(key, "key_321", "token_321");
  verifywebhookExists(key);
  deleteWebhook(key);
  tryToDeleteANonExistingwebhook(key);
  verifywebhookDoesNotExist(key);
});

// Story: crud:webhook:nondet:negative:dup-add
bthread("crud:webhook:nondet:negative:dup-add", function () {
  let key = "key_326";
  let token = "token_326";
  addWebhook("key_326", "token_326");
  verifywebhookExists(key);
  tryToAddExistingwebhook("key_326", "token_326");
  verifywebhookExists(key);
});

// Story: crud:webhook:nondet:existing:update
bthread("crud:webhook:nondet:existing:update", function () {
  let ev = waitForAnywebhookAdded();
  let args = Object.values(ev);
  block(matchDeletedwebhook.apply(null, args), function () {
    // verifywebhookExists.apply(null, args);
    // updateWebhook.apply(null, args);
  });
});

// Story: monitor:webhook:add
bthread("monitor:webhook:add", function () {
  while (true) {
    let ev = waitForAnywebhookAdded();
    let args = Object.values(ev);
    block(matchDeletedwebhook.apply(null, args), function () {
      // verifywebhookExists.apply(null, args);
    });
  }
});

// Story: crud:settings:read_only
bthread("crud:settings:read_only", function () {
  let key = "key_330";
  let token = "token_330";
  // Read-only check for settings
  verifysettingsExists(key);
});

// Story: crud:user:read_only
bthread("crud:user:read_only", function () {
  let idUser = 340;
  let key = "key_340";
  let token = "token_340";
  // Read-only check for user
  verifyuserExists(key);
});
