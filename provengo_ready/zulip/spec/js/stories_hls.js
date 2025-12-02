// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
      }
    }
  }
  return captured;
}

// Story: crud:Attachment:read_only
bthread("crud:Attachment:read_only", function () {
  let attachment_id = 200;
  verifyAttachmentExists(attachment_id);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let email = "email_210";
  let user_id = 210;
  createUser(email, user_id);
  // waitForUserAdded(email, user_id);
  tryToAddExistingUser(email, user_id);
  verifyUserExists(email, user_id);
  updateUser(email, user_id);
  deactivateUser(email, user_id);
  tryToDeleteANonExistingUser(email, user_id);
  verifyUserDoesNotExist(email, user_id);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let email = "email_211";
  let user_id = 211;
  createUser(email, user_id);
  // waitForUserAdded(email, user_id);
  tryToAddExistingUser(email, user_id);
  updateUser(email, user_id);
  verifyUserExists(email, user_id);
  deactivateUser(email, user_id);
  tryToDeleteANonExistingUser(email, user_id);
  verifyUserDoesNotExist(email, user_id);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let email = "email_216";
  let user_id = 216;
  createUser(email, user_id);
  // waitForUserAdded(email, user_id);
  verifyUserExists(email, user_id);
  tryToAddExistingUser(email, user_id);
  verifyUserExists(email, user_id);
});

// Story: crud:UserStatus:read_only
bthread("crud:UserStatus:read_only", function () {

  verifyUserStatusExists(user_id);
});

// Story: crud:UserPresence:read_only
bthread("crud:UserPresence:read_only", function () {

  verifyUserPresenceExists(user_id_or_email);
});

// Story: crud:UserAlertWords:nondet:1:1
bthread("crud:UserAlertWords:nondet:1:1", function () {

  addAlertWords();
  // waitForUserAlertWordsAdded();
  tryToAddExistingUserAlertWords();
  verifyUserAlertWordsExists();
  removeAlertWords();
  tryToDeleteANonExistingUserAlertWords();
  verifyUserAlertWordsDoesNotExist();
});

// Story: crud:UserAlertWords:nondet:1:2
bthread("crud:UserAlertWords:nondet:1:2", function () {

  addAlertWords();
  // waitForUserAlertWordsAdded();
  tryToAddExistingUserAlertWords();
  verifyUserAlertWordsExists();
  removeAlertWords();
  tryToDeleteANonExistingUserAlertWords();
  verifyUserAlertWordsDoesNotExist();
});

// Story: crud:UserAlertWords:nondet:negative:dup-add
bthread("crud:UserAlertWords:nondet:negative:dup-add", function () {

  addAlertWords();
  // waitForUserAlertWordsAdded();
  verifyUserAlertWordsExists();
  tryToAddExistingUserAlertWords();
  verifyUserAlertWordsExists();
});

// Story: crud:UserMute:nondet:1:1
bthread("crud:UserMute:nondet:1:1", function () {

  // Dependency Barrier
  let deps = {};
  deps["muted_user_id"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  muted_user_id = captured["muted_user_id"];
  if (!muted_user_id) muted_user_id = captured["user_id"];
  if (!muted_user_id) muted_user_id = captured["email"];
  muteUser(muted_user_id);
  // waitForUserMuteAdded(muted_user_id);
  tryToAddExistingUserMute(muted_user_id);
  verifyUserMuteExists(muted_user_id);
  unmuteUser(muted_user_id);
  tryToDeleteANonExistingUserMute(muted_user_id);
  verifyUserMuteDoesNotExist(muted_user_id);
});

// Story: crud:UserMute:nondet:1:2
bthread("crud:UserMute:nondet:1:2", function () {

  // Dependency Barrier
  let deps = {};
  deps["muted_user_id"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  muted_user_id = captured["muted_user_id"];
  if (!muted_user_id) muted_user_id = captured["user_id"];
  if (!muted_user_id) muted_user_id = captured["email"];
  muteUser(muted_user_id);
  // waitForUserMuteAdded(muted_user_id);
  tryToAddExistingUserMute(muted_user_id);
  verifyUserMuteExists(muted_user_id);
  unmuteUser(muted_user_id);
  tryToDeleteANonExistingUserMute(muted_user_id);
  verifyUserMuteDoesNotExist(muted_user_id);
});

// Story: crud:UserMute:nondet:negative:dup-add
bthread("crud:UserMute:nondet:negative:dup-add", function () {

  // Dependency Barrier
  let deps = {};
  deps["muted_user_id"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  muted_user_id = captured["muted_user_id"];
  if (!muted_user_id) muted_user_id = captured["user_id"];
  if (!muted_user_id) muted_user_id = captured["email"];
  muteUser(muted_user_id);
  // waitForUserMuteAdded(muted_user_id);
  verifyUserMuteExists(muted_user_id);
  tryToAddExistingUserMute(muted_user_id);
  verifyUserMuteExists(muted_user_id);
});

// Story: crud:UserApnsDeviceToken:nondet:1:1
bthread("crud:UserApnsDeviceToken:nondet:1:1", function () {

  addApnsToken();
  // waitForUserApnsDeviceTokenAdded();
  tryToAddExistingUserApnsDeviceToken();
  verifyUserApnsDeviceTokenExists();
  removeApnsToken();
  tryToDeleteANonExistingUserApnsDeviceToken();
  verifyUserApnsDeviceTokenDoesNotExist();
});

// Story: crud:UserApnsDeviceToken:nondet:1:2
bthread("crud:UserApnsDeviceToken:nondet:1:2", function () {

  addApnsToken();
  // waitForUserApnsDeviceTokenAdded();
  tryToAddExistingUserApnsDeviceToken();
  verifyUserApnsDeviceTokenExists();
  removeApnsToken();
  tryToDeleteANonExistingUserApnsDeviceToken();
  verifyUserApnsDeviceTokenDoesNotExist();
});

// Story: crud:UserApnsDeviceToken:nondet:negative:dup-add
bthread("crud:UserApnsDeviceToken:nondet:negative:dup-add", function () {

  addApnsToken();
  // waitForUserApnsDeviceTokenAdded();
  verifyUserApnsDeviceTokenExists();
  tryToAddExistingUserApnsDeviceToken();
  verifyUserApnsDeviceTokenExists();
});

// Story: crud:UserFcmToken:nondet:1:1
bthread("crud:UserFcmToken:nondet:1:1", function () {

  addFcmToken();
  // waitForUserFcmTokenAdded();
  tryToAddExistingUserFcmToken();
  verifyUserFcmTokenExists();
  removeFcmToken();
  tryToDeleteANonExistingUserFcmToken();
  verifyUserFcmTokenDoesNotExist();
});

// Story: crud:UserFcmToken:nondet:1:2
bthread("crud:UserFcmToken:nondet:1:2", function () {

  addFcmToken();
  // waitForUserFcmTokenAdded();
  tryToAddExistingUserFcmToken();
  verifyUserFcmTokenExists();
  removeFcmToken();
  tryToDeleteANonExistingUserFcmToken();
  verifyUserFcmTokenDoesNotExist();
});

// Story: crud:UserFcmToken:nondet:negative:dup-add
bthread("crud:UserFcmToken:nondet:negative:dup-add", function () {

  addFcmToken();
  // waitForUserFcmTokenAdded();
  verifyUserFcmTokenExists();
  tryToAddExistingUserFcmToken();
  verifyUserFcmTokenExists();
});

// Story: crud:UserGroup:nondet:1:1
bthread("crud:UserGroup:nondet:1:1", function () {

  // Dependency Barrier
  let deps = {};
  deps["user_group_id"] = matchAnyUserAdded();
  deps["user_id"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  user_group_id = captured["user_group_id"];
  if (!user_group_id) user_group_id = captured["user_id"];
  if (!user_group_id) user_group_id = captured["email"];
  user_id = captured["user_id"];
  if (!user_id) user_id = captured["user_id"];
  if (!user_id) user_id = captured["email"];
  createUserGroup(user_group_id, user_id);
  // waitForUserGroupAdded(user_group_id, user_id);
  tryToAddExistingUserGroup(user_group_id, user_id);
  verifyUserGroupExists(user_group_id, user_id);
  updateUserGroup(user_group_id, user_id);
  deactivateUserGroup(user_group_id, user_id);
  tryToDeleteANonExistingUserGroup(user_group_id, user_id);
  verifyUserGroupDoesNotExist(user_group_id, user_id);
});

// Story: crud:UserGroup:nondet:1:2
bthread("crud:UserGroup:nondet:1:2", function () {

  // Dependency Barrier
  let deps = {};
  deps["user_group_id"] = matchAnyUserAdded();
  deps["user_id"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  user_group_id = captured["user_group_id"];
  if (!user_group_id) user_group_id = captured["user_id"];
  if (!user_group_id) user_group_id = captured["email"];
  user_id = captured["user_id"];
  if (!user_id) user_id = captured["user_id"];
  if (!user_id) user_id = captured["email"];
  createUserGroup(user_group_id, user_id);
  // waitForUserGroupAdded(user_group_id, user_id);
  tryToAddExistingUserGroup(user_group_id, user_id);
  updateUserGroup(user_group_id, user_id);
  verifyUserGroupExists(user_group_id, user_id);
  deactivateUserGroup(user_group_id, user_id);
  tryToDeleteANonExistingUserGroup(user_group_id, user_id);
  verifyUserGroupDoesNotExist(user_group_id, user_id);
});

// Story: crud:UserGroup:nondet:negative:dup-add
bthread("crud:UserGroup:nondet:negative:dup-add", function () {

  // Dependency Barrier
  let deps = {};
  deps["user_group_id"] = matchAnyUserAdded();
  deps["user_id"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  user_group_id = captured["user_group_id"];
  if (!user_group_id) user_group_id = captured["user_id"];
  if (!user_group_id) user_group_id = captured["email"];
  user_id = captured["user_id"];
  if (!user_id) user_id = captured["user_id"];
  if (!user_id) user_id = captured["email"];
  createUserGroup(user_group_id, user_id);
  // waitForUserGroupAdded(user_group_id, user_id);
  verifyUserGroupExists(user_group_id, user_id);
  tryToAddExistingUserGroup(user_group_id, user_id);
  verifyUserGroupExists(user_group_id, user_id);
});

// Story: crud:Message:read_only
bthread("crud:Message:read_only", function () {
  let message_id = 310;
  verifyMessageExists(message_id);
});

// Story: crud:MessageHistory:read_only
bthread("crud:MessageHistory:read_only", function () {

  verifyMessageHistoryExists(message_id);
});

// Story: crud:MessageReaction:nondet:1:1
bthread("crud:MessageReaction:nondet:1:1", function () {
  let emoji_code = "emoji_code_330";
  let emoji_name = "emoji_name_330";
  let reaction_type = "reaction_type_330";
  // Dependency Barrier
  let deps = {};
  deps["message_id"] = matchAnyMessageAdded();
  let captured = resolveDependencies(deps);
  message_id = captured["message_id"];
  if (!message_id) message_id = captured["message_id"];
  addReaction(emoji_code, emoji_name, message_id, reaction_type);
  // waitForMessageReactionAdded(emoji_code, emoji_name, message_id, reaction_type);
  tryToAddExistingMessageReaction(emoji_code, emoji_name, message_id, reaction_type);
  verifyMessageReactionExists(emoji_code, emoji_name, message_id, reaction_type);
  removeReaction(emoji_code, emoji_name, message_id, reaction_type);
  tryToDeleteANonExistingMessageReaction(emoji_code, emoji_name, message_id, reaction_type);
  verifyMessageReactionDoesNotExist(emoji_code, emoji_name, message_id, reaction_type);
});

// Story: crud:MessageReaction:nondet:1:2
bthread("crud:MessageReaction:nondet:1:2", function () {
  let emoji_code = "emoji_code_331";
  let emoji_name = "emoji_name_331";
  let reaction_type = "reaction_type_331";
  // Dependency Barrier
  let deps = {};
  deps["message_id"] = matchAnyMessageAdded();
  let captured = resolveDependencies(deps);
  message_id = captured["message_id"];
  if (!message_id) message_id = captured["message_id"];
  addReaction(emoji_code, emoji_name, message_id, reaction_type);
  // waitForMessageReactionAdded(emoji_code, emoji_name, message_id, reaction_type);
  tryToAddExistingMessageReaction(emoji_code, emoji_name, message_id, reaction_type);
  verifyMessageReactionExists(emoji_code, emoji_name, message_id, reaction_type);
  removeReaction(emoji_code, emoji_name, message_id, reaction_type);
  tryToDeleteANonExistingMessageReaction(emoji_code, emoji_name, message_id, reaction_type);
  verifyMessageReactionDoesNotExist(emoji_code, emoji_name, message_id, reaction_type);
});

// Story: crud:MessageReaction:nondet:negative:dup-add
bthread("crud:MessageReaction:nondet:negative:dup-add", function () {
  let emoji_code = "emoji_code_336";
  let emoji_name = "emoji_name_336";
  let reaction_type = "reaction_type_336";
  // Dependency Barrier
  let deps = {};
  deps["message_id"] = matchAnyMessageAdded();
  let captured = resolveDependencies(deps);
  message_id = captured["message_id"];
  if (!message_id) message_id = captured["message_id"];
  addReaction(emoji_code, emoji_name, message_id, reaction_type);
  // waitForMessageReactionAdded(emoji_code, emoji_name, message_id, reaction_type);
  verifyMessageReactionExists(emoji_code, emoji_name, message_id, reaction_type);
  tryToAddExistingMessageReaction(emoji_code, emoji_name, message_id, reaction_type);
  verifyMessageReactionExists(emoji_code, emoji_name, message_id, reaction_type);
});

// Story: crud:MessageReadReceipt:read_only
bthread("crud:MessageReadReceipt:read_only", function () {

  verifyMessageReadReceiptExists(message_id);
});

// Story: crud:UserUploadFile:read_only
bthread("crud:UserUploadFile:read_only", function () {
  let filename = "filename_430";
  let realm_id_str = 430;
  verifyUserUploadFileExists(filename, realm_id_str);
});

// Story: crud:EventQueue:nondet:1:1
bthread("crud:EventQueue:nondet:1:1", function () {
  let all_public_streams = "all_public_streams_440";
  let apply_markdown = "apply_markdown_440";
  let client_capabilities = "client_capabilities_440";
  let client_gravatar = "client_gravatar_440";
  let dont_block = "dont_block_440";
  let event_types = "event_types_440";
  let fetch_event_types = "fetch_event_types_440";
  let include_subscribers = "include_subscribers_440";
  let last_event_id = 440;
  let narrow = "narrow_440";
  let presence_history_limit_days = "presence_history_limit_days_440";
  let queue_id = 440;
  let slim_presence = "slim_presence_440";
  registerQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  // waitForEventQueueAdded(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  tryToAddExistingEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  verifyEventQueueExists(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  deleteQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  tryToDeleteANonExistingEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  verifyEventQueueDoesNotExist(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
});

// Story: crud:EventQueue:nondet:1:2
bthread("crud:EventQueue:nondet:1:2", function () {
  let all_public_streams = "all_public_streams_441";
  let apply_markdown = "apply_markdown_441";
  let client_capabilities = "client_capabilities_441";
  let client_gravatar = "client_gravatar_441";
  let dont_block = "dont_block_441";
  let event_types = "event_types_441";
  let fetch_event_types = "fetch_event_types_441";
  let include_subscribers = "include_subscribers_441";
  let last_event_id = 441;
  let narrow = "narrow_441";
  let presence_history_limit_days = "presence_history_limit_days_441";
  let queue_id = 441;
  let slim_presence = "slim_presence_441";
  registerQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  // waitForEventQueueAdded(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  tryToAddExistingEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  verifyEventQueueExists(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  deleteQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  tryToDeleteANonExistingEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  verifyEventQueueDoesNotExist(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
});

// Story: crud:EventQueue:nondet:negative:dup-add
bthread("crud:EventQueue:nondet:negative:dup-add", function () {
  let all_public_streams = "all_public_streams_446";
  let apply_markdown = "apply_markdown_446";
  let client_capabilities = "client_capabilities_446";
  let client_gravatar = "client_gravatar_446";
  let dont_block = "dont_block_446";
  let event_types = "event_types_446";
  let fetch_event_types = "fetch_event_types_446";
  let include_subscribers = "include_subscribers_446";
  let last_event_id = 446;
  let narrow = "narrow_446";
  let presence_history_limit_days = "presence_history_limit_days_446";
  let queue_id = 446;
  let slim_presence = "slim_presence_446";
  registerQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  // waitForEventQueueAdded(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  verifyEventQueueExists(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  tryToAddExistingEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
  verifyEventQueueExists(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence);
});

// Story: crud:Reminder:nondet:1:1
bthread("crud:Reminder:nondet:1:1", function () {
  let reminder_id = 470;
  createMessageReminder(reminder_id);
  // waitForReminderAdded(reminder_id);
  tryToAddExistingReminder(reminder_id);
  verifyReminderExists(reminder_id);
  deleteReminder(reminder_id);
  tryToDeleteANonExistingReminder(reminder_id);
  verifyReminderDoesNotExist(reminder_id);
});

// Story: crud:Reminder:nondet:1:2
bthread("crud:Reminder:nondet:1:2", function () {
  let reminder_id = 471;
  createMessageReminder(reminder_id);
  // waitForReminderAdded(reminder_id);
  tryToAddExistingReminder(reminder_id);
  verifyReminderExists(reminder_id);
  deleteReminder(reminder_id);
  tryToDeleteANonExistingReminder(reminder_id);
  verifyReminderDoesNotExist(reminder_id);
});

// Story: crud:Reminder:nondet:negative:dup-add
bthread("crud:Reminder:nondet:negative:dup-add", function () {
  let reminder_id = 476;
  createMessageReminder(reminder_id);
  // waitForReminderAdded(reminder_id);
  verifyReminderExists(reminder_id);
  tryToAddExistingReminder(reminder_id);
  verifyReminderExists(reminder_id);
});
