// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Events:read_only
bthread("crud:Events:read_only", function () {
  let queue_id = 220;
  let last_event_id = 220;
  let dont_block = "dont_block_220";
  // Read-only check for Events
  verifyEventsExists(queue_id);
});

// Story: crud:Users:read_only
bthread("crud:Users:read_only", function () {
  let user_id = 230;
  // Read-only check for Users
  verifyUsersExists(user_id);
});

// Story: crud:Webhooks:nondet:1:1
bthread("crud:Webhooks:nondet:1:1", function () {
  let webhook_id = 240;
  addWebhook(240);
  tryToAddExistingWebhooks(240);
  verifyWebhooksExists(webhook_id);
  updateWebhook(webhook_id, 240);
  deleteWebhook(webhook_id);
  tryToDeleteANonExistingWebhooks(webhook_id);
  verifyWebhooksDoesNotExist(webhook_id);
});

// Story: crud:Webhooks:nondet:1:2
bthread("crud:Webhooks:nondet:1:2", function () {
  let webhook_id = 241;
  addWebhook(241);
  tryToAddExistingWebhooks(241);
  updateWebhook(webhook_id, 241);
  verifyWebhooksExists(webhook_id);
  deleteWebhook(webhook_id);
  tryToDeleteANonExistingWebhooks(webhook_id);
  verifyWebhooksDoesNotExist(webhook_id);
});

// Story: crud:Webhooks:nondet:negative:dup-add
bthread("crud:Webhooks:nondet:negative:dup-add", function () {
  let webhook_id = 246;
  addWebhook(246);
  verifyWebhooksExists(webhook_id);
  tryToAddExistingWebhooks(246);
  verifyWebhooksExists(webhook_id);
});

// Story: crud:Webhooks:nondet:existing:update
bthread("crud:Webhooks:nondet:existing:update", function () {
  let ev = waitForAnyWebhooksAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhooks.apply(null, args), function () {
    // verifyWebhooksExists.apply(null, args);
    // updateWebhook.apply(null, args);
  });
});

// Story: monitor:Webhooks:add
bthread("monitor:Webhooks:add", function () {
  while (true) {
    let ev = waitForAnyWebhooksAdded();
    let args = Object.values(ev);
    block(matchDeletedWebhooks.apply(null, args), function () {
      // verifyWebhooksExists.apply(null, args);
    });
  }
});

// Story: crud:Settings:read_only
bthread("crud:Settings:read_only", function () {

  // Read-only check for Settings
  verifySettingsExists(id);
});

// Story: crud:Activity:read_only
bthread("crud:Activity:read_only", function () {

  // Read-only check for Activity
  verifyActivityExists(id);
});
