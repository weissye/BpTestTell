// Auto-generated HLS stories
//@provengo summon rest


// Story: crud:Attachment:read_only
bp.registerBThread("crud:Attachment:read_only", function () {
  let attachment_id = 200;
  verifyAttachmentExists(200);
});

// Story: crud:User:nondet:1:1
bp.registerBThread("crud:User:nondet:1:1", function () {
  let user_id = "user_id_210";
  let email = "email_210";
  createUser("user_id_210", "email_210");
  tryToAddExistingUser("user_id_210", "email_210");
  verifyUserExists("user_id_210", "email_210");
  updateUser("user_id_210", "email_210");
  deactivateUser("user_id_210", "email_210");
  tryToDeleteANonExistingUser("user_id_210", "email_210");
  verifyUserDoesNotExist("user_id_210", "email_210");
});

// Story: crud:User:nondet:1:2
bp.registerBThread("crud:User:nondet:1:2", function () {
  let user_id = "user_id_211";
  let email = "email_211";
  createUser("user_id_211", "email_211");
  tryToAddExistingUser("user_id_211", "email_211");
  updateUser("user_id_211", "email_211");
  verifyUserExists("user_id_211", "email_211");
  deactivateUser("user_id_211", "email_211");
  tryToDeleteANonExistingUser("user_id_211", "email_211");
  verifyUserDoesNotExist("user_id_211", "email_211");
});

// Story: crud:User:nondet:negative:dup-add
bp.registerBThread("crud:User:nondet:negative:dup-add", function () {
  let user_id = "user_id_216";
  let email = "email_216";
  createUser("user_id_216", "email_216");
  verifyUserExists("user_id_216", "email_216");
  tryToAddExistingUser("user_id_216", "email_216");
  verifyUserExists("user_id_216", "email_216");
});

// Story: crud:User:nondet:existing:update
bp.registerBThread("crud:User:nondet:existing:update", function () {
  let ev = waitForAnyUserAdded();
  let args = Object.values(ev);
  block(matchDeletedUser.apply(null, args), function () {
    verifyUserExists.apply(null, args);
    updateUser.apply(null, args);
    verifyUserExists.apply(null, args);
  });
});

// Story: monitor:User:add
bp.registerBThread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:UserStatus:read_only
bp.registerBThread("crud:UserStatus:read_only", function () {
  let user_id = "user_id_220";
  let status_text = "status_text_220";
  let emoji_name = "emoji_name_220";
  let emoji_code = "emoji_code_220";
  let reaction_type = "reaction_type_220";
  verifyUserStatusExists("user_id_220", "status_text_220", "emoji_name_220", "emoji_code_220", "reaction_type_220");
});

// Story: crud:UserPresence:read_only
bp.registerBThread("crud:UserPresence:read_only", function () {
  let user_id_or_email = "user_id_or_email_240";
  verifyUserPresenceExists("user_id_or_email_240");
});

// Story: crud:AlertWords:nondet:1:1
bp.registerBThread("crud:AlertWords:nondet:1:1", function () {
  let alert_words = "alert_words_260";
  addAlertWords("alert_words_260");
  tryToAddExistingAlertWords("alert_words_260");
  verifyAlertWordsExists("alert_words_260");
  removeAlertWords("alert_words_260");
  tryToDeleteANonExistingAlertWords("alert_words_260");
  verifyAlertWordsDoesNotExist("alert_words_260");
});

// Story: crud:AlertWords:nondet:1:2
bp.registerBThread("crud:AlertWords:nondet:1:2", function () {
  let alert_words = "alert_words_261";
  addAlertWords("alert_words_261");
  tryToAddExistingAlertWords("alert_words_261");
  verifyAlertWordsExists("alert_words_261");
  removeAlertWords("alert_words_261");
  tryToDeleteANonExistingAlertWords("alert_words_261");
  verifyAlertWordsDoesNotExist("alert_words_261");
});

// Story: crud:AlertWords:nondet:negative:dup-add
bp.registerBThread("crud:AlertWords:nondet:negative:dup-add", function () {
  let alert_words = "alert_words_266";
  addAlertWords("alert_words_266");
  verifyAlertWordsExists("alert_words_266");
  tryToAddExistingAlertWords("alert_words_266");
  verifyAlertWordsExists("alert_words_266");
});

// Story: monitor:AlertWords:add
bp.registerBThread("monitor:AlertWords:add", function () {
  while (true) {
    let ev = waitForAnyAlertWordsAdded();
    let args = Object.values(ev);
    block(matchDeletedAlertWords.apply(null, args), function () {
      verifyAlertWordsExists.apply(null, args);
    });
  }
});

// Story: crud:MutedUser:nondet:1:1
bp.registerBThread("crud:MutedUser:nondet:1:1", function () {
  let muted_user_id = "muted_user_id_270";
  muteUser("muted_user_id_270");
  tryToAddExistingMutedUser("muted_user_id_270");
  verifyMutedUserExists("muted_user_id_270");
  unmuteUser("muted_user_id_270");
  tryToDeleteANonExistingMutedUser("muted_user_id_270");
  verifyMutedUserDoesNotExist("muted_user_id_270");
});

// Story: crud:MutedUser:nondet:1:2
bp.registerBThread("crud:MutedUser:nondet:1:2", function () {
  let muted_user_id = "muted_user_id_271";
  muteUser("muted_user_id_271");
  tryToAddExistingMutedUser("muted_user_id_271");
  verifyMutedUserExists("muted_user_id_271");
  unmuteUser("muted_user_id_271");
  tryToDeleteANonExistingMutedUser("muted_user_id_271");
  verifyMutedUserDoesNotExist("muted_user_id_271");
});

// Story: crud:MutedUser:nondet:negative:dup-add
bp.registerBThread("crud:MutedUser:nondet:negative:dup-add", function () {
  let muted_user_id = "muted_user_id_276";
  muteUser("muted_user_id_276");
  verifyMutedUserExists("muted_user_id_276");
  tryToAddExistingMutedUser("muted_user_id_276");
  verifyMutedUserExists("muted_user_id_276");
});

// Story: monitor:MutedUser:add
bp.registerBThread("monitor:MutedUser:add", function () {
  while (true) {
    let ev = waitForAnyMutedUserAdded();
    let args = Object.values(ev);
    block(matchDeletedMutedUser.apply(null, args), function () {
      verifyMutedUserExists.apply(null, args);
    });
  }
});

// Story: crud:ApnsDeviceToken:nondet:1:1
bp.registerBThread("crud:ApnsDeviceToken:nondet:1:1", function () {
  let token = "token_280";
  let appid = 280;
  addApnsToken("token_280", 280);
  tryToAddExistingApnsDeviceToken("token_280", 280);
  verifyApnsDeviceTokenExists("token_280", 280);
  removeApnsToken("token_280", 280);
  tryToDeleteANonExistingApnsDeviceToken("token_280", 280);
  verifyApnsDeviceTokenDoesNotExist("token_280", 280);
});

// Story: crud:ApnsDeviceToken:nondet:1:2
bp.registerBThread("crud:ApnsDeviceToken:nondet:1:2", function () {
  let token = "token_281";
  let appid = 281;
  addApnsToken("token_281", 281);
  tryToAddExistingApnsDeviceToken("token_281", 281);
  verifyApnsDeviceTokenExists("token_281", 281);
  removeApnsToken("token_281", 281);
  tryToDeleteANonExistingApnsDeviceToken("token_281", 281);
  verifyApnsDeviceTokenDoesNotExist("token_281", 281);
});

// Story: crud:ApnsDeviceToken:nondet:negative:dup-add
bp.registerBThread("crud:ApnsDeviceToken:nondet:negative:dup-add", function () {
  let token = "token_286";
  let appid = 286;
  addApnsToken("token_286", 286);
  verifyApnsDeviceTokenExists("token_286", 286);
  tryToAddExistingApnsDeviceToken("token_286", 286);
  verifyApnsDeviceTokenExists("token_286", 286);
});

// Story: monitor:ApnsDeviceToken:add
bp.registerBThread("monitor:ApnsDeviceToken:add", function () {
  while (true) {
    let ev = waitForAnyApnsDeviceTokenAdded();
    let args = Object.values(ev);
    block(matchDeletedApnsDeviceToken.apply(null, args), function () {
      verifyApnsDeviceTokenExists.apply(null, args);
    });
  }
});

// Story: crud:FcmToken:nondet:1:1
bp.registerBThread("crud:FcmToken:nondet:1:1", function () {
  let token = "token_290";
  addFcmToken("token_290");
  tryToAddExistingFcmToken("token_290");
  verifyFcmTokenExists("token_290");
  removeFcmToken("token_290");
  tryToDeleteANonExistingFcmToken("token_290");
  verifyFcmTokenDoesNotExist("token_290");
});

// Story: crud:FcmToken:nondet:1:2
bp.registerBThread("crud:FcmToken:nondet:1:2", function () {
  let token = "token_291";
  addFcmToken("token_291");
  tryToAddExistingFcmToken("token_291");
  verifyFcmTokenExists("token_291");
  removeFcmToken("token_291");
  tryToDeleteANonExistingFcmToken("token_291");
  verifyFcmTokenDoesNotExist("token_291");
});

// Story: crud:FcmToken:nondet:negative:dup-add
bp.registerBThread("crud:FcmToken:nondet:negative:dup-add", function () {
  let token = "token_296";
  addFcmToken("token_296");
  verifyFcmTokenExists("token_296");
  tryToAddExistingFcmToken("token_296");
  verifyFcmTokenExists("token_296");
});

// Story: monitor:FcmToken:add
bp.registerBThread("monitor:FcmToken:add", function () {
  while (true) {
    let ev = waitForAnyFcmTokenAdded();
    let args = Object.values(ev);
    block(matchDeletedFcmToken.apply(null, args), function () {
      verifyFcmTokenExists.apply(null, args);
    });
  }
});

// Story: crud:UserGroup:nondet:1:1
bp.registerBThread("crud:UserGroup:nondet:1:1", function () {
  let name = "name_320";
  let description = "description_320";
  let members = "members_320";
  let subgroups = "subgroups_320";
  let can_add_members_group = "can_add_members_group_320";
  let can_join_group = "can_join_group_320";
  let can_leave_group = "can_leave_group_320";
  let can_manage_group = "can_manage_group_320";
  let can_mention_group = "can_mention_group_320";
  let can_remove_members_group = "can_remove_members_group_320";
  let user_group_id = "user_group_id_320";
  let deactivated = "deactivated_320";
  let include_deactivated_groups = "include_deactivated_groups_320";
  createUserGroup("name_320", "description_320", "members_320", "subgroups_320", "can_add_members_group_320", "can_join_group_320", "can_leave_group_320", "can_manage_group_320", "can_mention_group_320", "can_remove_members_group_320", "user_group_id_320", "deactivated_320", "include_deactivated_groups_320");
  tryToAddExistingUserGroup("name_320", "description_320", "members_320", "subgroups_320", "can_add_members_group_320", "can_join_group_320", "can_leave_group_320", "can_manage_group_320", "can_mention_group_320", "can_remove_members_group_320", "user_group_id_320", "deactivated_320", "include_deactivated_groups_320");
  verifyUserGroupExists("name_320", "description_320", "members_320", "subgroups_320", "can_add_members_group_320", "can_join_group_320", "can_leave_group_320", "can_manage_group_320", "can_mention_group_320", "can_remove_members_group_320", "user_group_id_320", "deactivated_320", "include_deactivated_groups_320");
  updateUserGroup("name_320", "description_320", "members_320", "subgroups_320", "can_add_members_group_320", "can_join_group_320", "can_leave_group_320", "can_manage_group_320", "can_mention_group_320", "can_remove_members_group_320", "user_group_id_320", "deactivated_320", "include_deactivated_groups_320");
  deactivateUserGroup("name_320", "description_320", "members_320", "subgroups_320", "can_add_members_group_320", "can_join_group_320", "can_leave_group_320", "can_manage_group_320", "can_mention_group_320", "can_remove_members_group_320", "user_group_id_320", "deactivated_320", "include_deactivated_groups_320");
  tryToDeleteANonExistingUserGroup("name_320", "description_320", "members_320", "subgroups_320", "can_add_members_group_320", "can_join_group_320", "can_leave_group_320", "can_manage_group_320", "can_mention_group_320", "can_remove_members_group_320", "user_group_id_320", "deactivated_320", "include_deactivated_groups_320");
  verifyUserGroupDoesNotExist("name_320", "description_320", "members_320", "subgroups_320", "can_add_members_group_320", "can_join_group_320", "can_leave_group_320", "can_manage_group_320", "can_mention_group_320", "can_remove_members_group_320", "user_group_id_320", "deactivated_320", "include_deactivated_groups_320");
});

// Story: crud:UserGroup:nondet:1:2
bp.registerBThread("crud:UserGroup:nondet:1:2", function () {
  let name = "name_321";
  let description = "description_321";
  let members = "members_321";
  let subgroups = "subgroups_321";
  let can_add_members_group = "can_add_members_group_321";
  let can_join_group = "can_join_group_321";
  let can_leave_group = "can_leave_group_321";
  let can_manage_group = "can_manage_group_321";
  let can_mention_group = "can_mention_group_321";
  let can_remove_members_group = "can_remove_members_group_321";
  let user_group_id = "user_group_id_321";
  let deactivated = "deactivated_321";
  let include_deactivated_groups = "include_deactivated_groups_321";
  createUserGroup("name_321", "description_321", "members_321", "subgroups_321", "can_add_members_group_321", "can_join_group_321", "can_leave_group_321", "can_manage_group_321", "can_mention_group_321", "can_remove_members_group_321", "user_group_id_321", "deactivated_321", "include_deactivated_groups_321");
  tryToAddExistingUserGroup("name_321", "description_321", "members_321", "subgroups_321", "can_add_members_group_321", "can_join_group_321", "can_leave_group_321", "can_manage_group_321", "can_mention_group_321", "can_remove_members_group_321", "user_group_id_321", "deactivated_321", "include_deactivated_groups_321");
  updateUserGroup("name_321", "description_321", "members_321", "subgroups_321", "can_add_members_group_321", "can_join_group_321", "can_leave_group_321", "can_manage_group_321", "can_mention_group_321", "can_remove_members_group_321", "user_group_id_321", "deactivated_321", "include_deactivated_groups_321");
  verifyUserGroupExists("name_321", "description_321", "members_321", "subgroups_321", "can_add_members_group_321", "can_join_group_321", "can_leave_group_321", "can_manage_group_321", "can_mention_group_321", "can_remove_members_group_321", "user_group_id_321", "deactivated_321", "include_deactivated_groups_321");
  deactivateUserGroup("name_321", "description_321", "members_321", "subgroups_321", "can_add_members_group_321", "can_join_group_321", "can_leave_group_321", "can_manage_group_321", "can_mention_group_321", "can_remove_members_group_321", "user_group_id_321", "deactivated_321", "include_deactivated_groups_321");
  tryToDeleteANonExistingUserGroup("name_321", "description_321", "members_321", "subgroups_321", "can_add_members_group_321", "can_join_group_321", "can_leave_group_321", "can_manage_group_321", "can_mention_group_321", "can_remove_members_group_321", "user_group_id_321", "deactivated_321", "include_deactivated_groups_321");
  verifyUserGroupDoesNotExist("name_321", "description_321", "members_321", "subgroups_321", "can_add_members_group_321", "can_join_group_321", "can_leave_group_321", "can_manage_group_321", "can_mention_group_321", "can_remove_members_group_321", "user_group_id_321", "deactivated_321", "include_deactivated_groups_321");
});

// Story: crud:UserGroup:nondet:negative:dup-add
bp.registerBThread("crud:UserGroup:nondet:negative:dup-add", function () {
  let name = "name_326";
  let description = "description_326";
  let members = "members_326";
  let subgroups = "subgroups_326";
  let can_add_members_group = "can_add_members_group_326";
  let can_join_group = "can_join_group_326";
  let can_leave_group = "can_leave_group_326";
  let can_manage_group = "can_manage_group_326";
  let can_mention_group = "can_mention_group_326";
  let can_remove_members_group = "can_remove_members_group_326";
  let user_group_id = "user_group_id_326";
  let deactivated = "deactivated_326";
  let include_deactivated_groups = "include_deactivated_groups_326";
  createUserGroup("name_326", "description_326", "members_326", "subgroups_326", "can_add_members_group_326", "can_join_group_326", "can_leave_group_326", "can_manage_group_326", "can_mention_group_326", "can_remove_members_group_326", "user_group_id_326", "deactivated_326", "include_deactivated_groups_326");
  verifyUserGroupExists("name_326", "description_326", "members_326", "subgroups_326", "can_add_members_group_326", "can_join_group_326", "can_leave_group_326", "can_manage_group_326", "can_mention_group_326", "can_remove_members_group_326", "user_group_id_326", "deactivated_326", "include_deactivated_groups_326");
  tryToAddExistingUserGroup("name_326", "description_326", "members_326", "subgroups_326", "can_add_members_group_326", "can_join_group_326", "can_leave_group_326", "can_manage_group_326", "can_mention_group_326", "can_remove_members_group_326", "user_group_id_326", "deactivated_326", "include_deactivated_groups_326");
  verifyUserGroupExists("name_326", "description_326", "members_326", "subgroups_326", "can_add_members_group_326", "can_join_group_326", "can_leave_group_326", "can_manage_group_326", "can_mention_group_326", "can_remove_members_group_326", "user_group_id_326", "deactivated_326", "include_deactivated_groups_326");
});

// Story: crud:UserGroup:nondet:existing:update
bp.registerBThread("crud:UserGroup:nondet:existing:update", function () {
  let ev = waitForAnyUserGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedUserGroup.apply(null, args), function () {
    verifyUserGroupExists.apply(null, args);
    updateUserGroup.apply(null, args);
    verifyUserGroupExists.apply(null, args);
  });
});

// Story: monitor:UserGroup:add
bp.registerBThread("monitor:UserGroup:add", function () {
  while (true) {
    let ev = waitForAnyUserGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedUserGroup.apply(null, args), function () {
      verifyUserGroupExists.apply(null, args);
    });
  }
});

// Story: crud:UserGroupMembers:read_only
bp.registerBThread("crud:UserGroupMembers:read_only", function () {
  let user_group_id = "user_group_id_330";
  let direct_member_only = "direct_member_only_330";
  let delete = "delete_330";
  let add = "add_330";
  let delete_subgroups = "delete_subgroups_330";
  let add_subgroups = "add_subgroups_330";
  verifyUserGroupMembersExists("user_group_id_330", "direct_member_only_330", "delete_330", "add_330", "delete_subgroups_330", "add_subgroups_330");
});

// Story: crud:UserGroupSubgroups:read_only
bp.registerBThread("crud:UserGroupSubgroups:read_only", function () {
  let user_group_id = "user_group_id_340";
  let direct_subgroup_only = "direct_subgroup_only_340";
  let delete = "delete_340";
  let add = "add_340";
  verifyUserGroupSubgroupsExists("user_group_id_340", "direct_subgroup_only_340", "delete_340", "add_340");
});

// Story: crud:UserGroupMembership:read_only
bp.registerBThread("crud:UserGroupMembership:read_only", function () {
  let user_group_id = "user_group_id_350";
  let user_id = "user_id_350";
  let direct_member_only = "direct_member_only_350";
  verifyUserGroupMembershipExists("user_group_id_350", "user_id_350", "direct_member_only_350");
});

// Story: crud:OwnUser:read_only
bp.registerBThread("crud:OwnUser:read_only", function () {

  verifyOwnUserExists();
});

// Story: crud:Channel:nondet:1:1
bp.registerBThread("crud:Channel:nondet:1:1", function () {
  let name = "name_380";
  let subscribers = "subscribers_380";
  let stream_id = 380;
  let include_public = "include_public_380";
  let include_web_public = "include_web_public_380";
  let include_subscribed = "include_subscribed_380";
  let exclude_archived = "exclude_archived_380";
  let include_all_active = "include_all_active_380";
  let include_all = "include_all_380";
  let include_default = "include_default_380";
  let include_owner_subscribed = "include_owner_subscribed_380";
  let include_can_access_content = "include_can_access_content_380";
  createChannel("name_380", "subscribers_380", 380, "include_public_380", "include_web_public_380", "include_subscribed_380", "exclude_archived_380", "include_all_active_380", "include_all_380", "include_default_380", "include_owner_subscribed_380", "include_can_access_content_380");
  tryToAddExistingChannel("name_380", "subscribers_380", 380, "include_public_380", "include_web_public_380", "include_subscribed_380", "exclude_archived_380", "include_all_active_380", "include_all_380", "include_default_380", "include_owner_subscribed_380", "include_can_access_content_380");
  verifyChannelExists("name_380", "subscribers_380", 380, "include_public_380", "include_web_public_380", "include_subscribed_380", "exclude_archived_380", "include_all_active_380", "include_all_380", "include_default_380", "include_owner_subscribed_380", "include_can_access_content_380");
  updateChannel("name_380", "subscribers_380", 380, "include_public_380", "include_web_public_380", "include_subscribed_380", "exclude_archived_380", "include_all_active_380", "include_all_380", "include_default_380", "include_owner_subscribed_380", "include_can_access_content_380");
  archiveChannel("name_380", "subscribers_380", 380, "include_public_380", "include_web_public_380", "include_subscribed_380", "exclude_archived_380", "include_all_active_380", "include_all_380", "include_default_380", "include_owner_subscribed_380", "include_can_access_content_380");
  tryToDeleteANonExistingChannel("name_380", "subscribers_380", 380, "include_public_380", "include_web_public_380", "include_subscribed_380", "exclude_archived_380", "include_all_active_380", "include_all_380", "include_default_380", "include_owner_subscribed_380", "include_can_access_content_380");
  verifyChannelDoesNotExist("name_380", "subscribers_380", 380, "include_public_380", "include_web_public_380", "include_subscribed_380", "exclude_archived_380", "include_all_active_380", "include_all_380", "include_default_380", "include_owner_subscribed_380", "include_can_access_content_380");
});

// Story: crud:Channel:nondet:1:2
bp.registerBThread("crud:Channel:nondet:1:2", function () {
  let name = "name_381";
  let subscribers = "subscribers_381";
  let stream_id = 381;
  let include_public = "include_public_381";
  let include_web_public = "include_web_public_381";
  let include_subscribed = "include_subscribed_381";
  let exclude_archived = "exclude_archived_381";
  let include_all_active = "include_all_active_381";
  let include_all = "include_all_381";
  let include_default = "include_default_381";
  let include_owner_subscribed = "include_owner_subscribed_381";
  let include_can_access_content = "include_can_access_content_381";
  createChannel("name_381", "subscribers_381", 381, "include_public_381", "include_web_public_381", "include_subscribed_381", "exclude_archived_381", "include_all_active_381", "include_all_381", "include_default_381", "include_owner_subscribed_381", "include_can_access_content_381");
  tryToAddExistingChannel("name_381", "subscribers_381", 381, "include_public_381", "include_web_public_381", "include_subscribed_381", "exclude_archived_381", "include_all_active_381", "include_all_381", "include_default_381", "include_owner_subscribed_381", "include_can_access_content_381");
  updateChannel("name_381", "subscribers_381", 381, "include_public_381", "include_web_public_381", "include_subscribed_381", "exclude_archived_381", "include_all_active_381", "include_all_381", "include_default_381", "include_owner_subscribed_381", "include_can_access_content_381");
  verifyChannelExists("name_381", "subscribers_381", 381, "include_public_381", "include_web_public_381", "include_subscribed_381", "exclude_archived_381", "include_all_active_381", "include_all_381", "include_default_381", "include_owner_subscribed_381", "include_can_access_content_381");
  archiveChannel("name_381", "subscribers_381", 381, "include_public_381", "include_web_public_381", "include_subscribed_381", "exclude_archived_381", "include_all_active_381", "include_all_381", "include_default_381", "include_owner_subscribed_381", "include_can_access_content_381");
  tryToDeleteANonExistingChannel("name_381", "subscribers_381", 381, "include_public_381", "include_web_public_381", "include_subscribed_381", "exclude_archived_381", "include_all_active_381", "include_all_381", "include_default_381", "include_owner_subscribed_381", "include_can_access_content_381");
  verifyChannelDoesNotExist("name_381", "subscribers_381", 381, "include_public_381", "include_web_public_381", "include_subscribed_381", "exclude_archived_381", "include_all_active_381", "include_all_381", "include_default_381", "include_owner_subscribed_381", "include_can_access_content_381");
});

// Story: crud:Channel:nondet:negative:dup-add
bp.registerBThread("crud:Channel:nondet:negative:dup-add", function () {
  let name = "name_386";
  let subscribers = "subscribers_386";
  let stream_id = 386;
  let include_public = "include_public_386";
  let include_web_public = "include_web_public_386";
  let include_subscribed = "include_subscribed_386";
  let exclude_archived = "exclude_archived_386";
  let include_all_active = "include_all_active_386";
  let include_all = "include_all_386";
  let include_default = "include_default_386";
  let include_owner_subscribed = "include_owner_subscribed_386";
  let include_can_access_content = "include_can_access_content_386";
  createChannel("name_386", "subscribers_386", 386, "include_public_386", "include_web_public_386", "include_subscribed_386", "exclude_archived_386", "include_all_active_386", "include_all_386", "include_default_386", "include_owner_subscribed_386", "include_can_access_content_386");
  verifyChannelExists("name_386", "subscribers_386", 386, "include_public_386", "include_web_public_386", "include_subscribed_386", "exclude_archived_386", "include_all_active_386", "include_all_386", "include_default_386", "include_owner_subscribed_386", "include_can_access_content_386");
  tryToAddExistingChannel("name_386", "subscribers_386", 386, "include_public_386", "include_web_public_386", "include_subscribed_386", "exclude_archived_386", "include_all_active_386", "include_all_386", "include_default_386", "include_owner_subscribed_386", "include_can_access_content_386");
  verifyChannelExists("name_386", "subscribers_386", 386, "include_public_386", "include_web_public_386", "include_subscribed_386", "exclude_archived_386", "include_all_active_386", "include_all_386", "include_default_386", "include_owner_subscribed_386", "include_can_access_content_386");
});

// Story: crud:Channel:nondet:existing:update
bp.registerBThread("crud:Channel:nondet:existing:update", function () {
  let ev = waitForAnyChannelAdded();
  let args = Object.values(ev);
  block(matchDeletedChannel.apply(null, args), function () {
    verifyChannelExists.apply(null, args);
    updateChannel.apply(null, args);
    verifyChannelExists.apply(null, args);
  });
});

// Story: monitor:Channel:add
bp.registerBThread("monitor:Channel:add", function () {
  while (true) {
    let ev = waitForAnyChannelAdded();
    let args = Object.values(ev);
    block(matchDeletedChannel.apply(null, args), function () {
      verifyChannelExists.apply(null, args);
    });
  }
});

// Story: crud:DefaultChannel:nondet:1:1
bp.registerBThread("crud:DefaultChannel:nondet:1:1", function () {
  let stream_id = 390;
  addDefaultStream(390);
  tryToAddExistingDefaultChannel(390);
  verifyDefaultChannelExists(390);
  removeDefaultStream(390);
  tryToDeleteANonExistingDefaultChannel(390);
  verifyDefaultChannelDoesNotExist(390);
});

// Story: crud:DefaultChannel:nondet:1:2
bp.registerBThread("crud:DefaultChannel:nondet:1:2", function () {
  let stream_id = 391;
  addDefaultStream(391);
  tryToAddExistingDefaultChannel(391);
  verifyDefaultChannelExists(391);
  removeDefaultStream(391);
  tryToDeleteANonExistingDefaultChannel(391);
  verifyDefaultChannelDoesNotExist(391);
});

// Story: crud:DefaultChannel:nondet:negative:dup-add
bp.registerBThread("crud:DefaultChannel:nondet:negative:dup-add", function () {
  let stream_id = 396;
  addDefaultStream(396);
  verifyDefaultChannelExists(396);
  tryToAddExistingDefaultChannel(396);
  verifyDefaultChannelExists(396);
});

// Story: monitor:DefaultChannel:add
bp.registerBThread("monitor:DefaultChannel:add", function () {
  while (true) {
    let ev = waitForAnyDefaultChannelAdded();
    let args = Object.values(ev);
    block(matchDeletedDefaultChannel.apply(null, args), function () {
      verifyDefaultChannelExists.apply(null, args);
    });
  }
});

// Story: crud:Subscription:nondet:1:1
bp.registerBThread("crud:Subscription:nondet:1:1", function () {
  let name = "name_400";
  let subscriptions = "subscriptions_400";
  let IncludeSubscribers = "IncludeSubscribers_400";
  let user_id = "user_id_400";
  let stream_id = 400;
  subscribe("name_400", "subscriptions_400", "IncludeSubscribers_400", "user_id_400", 400);
  tryToAddExistingSubscription("name_400", "subscriptions_400", "IncludeSubscribers_400", "user_id_400", 400);
  verifySubscriptionExists("name_400", "subscriptions_400", "IncludeSubscribers_400", "user_id_400", 400);
  updateSubscriptions("name_400", "subscriptions_400", "IncludeSubscribers_400", "user_id_400", 400);
  unsubscribe("name_400", "subscriptions_400", "IncludeSubscribers_400", "user_id_400", 400);
  tryToDeleteANonExistingSubscription("name_400", "subscriptions_400", "IncludeSubscribers_400", "user_id_400", 400);
  verifySubscriptionDoesNotExist("name_400", "subscriptions_400", "IncludeSubscribers_400", "user_id_400", 400);
});

// Story: crud:Subscription:nondet:1:2
bp.registerBThread("crud:Subscription:nondet:1:2", function () {
  let name = "name_401";
  let subscriptions = "subscriptions_401";
  let IncludeSubscribers = "IncludeSubscribers_401";
  let user_id = "user_id_401";
  let stream_id = 401;
  subscribe("name_401", "subscriptions_401", "IncludeSubscribers_401", "user_id_401", 401);
  tryToAddExistingSubscription("name_401", "subscriptions_401", "IncludeSubscribers_401", "user_id_401", 401);
  updateSubscriptions("name_401", "subscriptions_401", "IncludeSubscribers_401", "user_id_401", 401);
  verifySubscriptionExists("name_401", "subscriptions_401", "IncludeSubscribers_401", "user_id_401", 401);
  unsubscribe("name_401", "subscriptions_401", "IncludeSubscribers_401", "user_id_401", 401);
  tryToDeleteANonExistingSubscription("name_401", "subscriptions_401", "IncludeSubscribers_401", "user_id_401", 401);
  verifySubscriptionDoesNotExist("name_401", "subscriptions_401", "IncludeSubscribers_401", "user_id_401", 401);
});

// Story: crud:Subscription:nondet:negative:dup-add
bp.registerBThread("crud:Subscription:nondet:negative:dup-add", function () {
  let name = "name_406";
  let subscriptions = "subscriptions_406";
  let IncludeSubscribers = "IncludeSubscribers_406";
  let user_id = "user_id_406";
  let stream_id = 406;
  subscribe("name_406", "subscriptions_406", "IncludeSubscribers_406", "user_id_406", 406);
  verifySubscriptionExists("name_406", "subscriptions_406", "IncludeSubscribers_406", "user_id_406", 406);
  tryToAddExistingSubscription("name_406", "subscriptions_406", "IncludeSubscribers_406", "user_id_406", 406);
  verifySubscriptionExists("name_406", "subscriptions_406", "IncludeSubscribers_406", "user_id_406", 406);
});

// Story: crud:Subscription:nondet:existing:update
bp.registerBThread("crud:Subscription:nondet:existing:update", function () {
  let ev = waitForAnySubscriptionAdded();
  let args = Object.values(ev);
  block(matchDeletedSubscription.apply(null, args), function () {
    verifySubscriptionExists.apply(null, args);
    updateSubscriptions.apply(null, args);
    verifySubscriptionExists.apply(null, args);
  });
});

// Story: monitor:Subscription:add
bp.registerBThread("monitor:Subscription:add", function () {
  while (true) {
    let ev = waitForAnySubscriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedSubscription.apply(null, args), function () {
      verifySubscriptionExists.apply(null, args);
    });
  }
});

// Story: crud:Topic:read_only
bp.registerBThread("crud:Topic:read_only", function () {
  let stream_id = 410;
  let allow_empty_topic_name = "allow_empty_topic_name_410";
  let topic_name = "topic_name_410";
  let topic = "topic_410";
  let op = "op_410";
  let visibility_policy = "visibility_policy_410";
  verifyTopicExists(410, "allow_empty_topic_name_410", "topic_name_410", "topic_410", "op_410", "visibility_policy_410");
});

// Story: crud:ChannelFolder:read_only
bp.registerBThread("crud:ChannelFolder:read_only", function () {
  let name = "name_420";
  let include_archived = "include_archived_420";
  let channel_folder_id = 420;
  verifyChannelFolderExists("name_420", "include_archived_420", 420);
});

// Story: crud:Message:read_only
bp.registerBThread("crud:Message:read_only", function () {
  let message_id = 430;
  verifyMessageExists(430);
});

// Story: crud:MessageReaction:nondet:1:1
bp.registerBThread("crud:MessageReaction:nondet:1:1", function () {
  let message_id = 440;
  let emoji_name = "emoji_name_440";
  addReaction(440, "emoji_name_440");
  tryToAddExistingMessageReaction(440, "emoji_name_440");
  verifyMessageReactionExists(440, "emoji_name_440");
  removeReaction(440, "emoji_name_440");
  tryToDeleteANonExistingMessageReaction(440, "emoji_name_440");
  verifyMessageReactionDoesNotExist(440, "emoji_name_440");
});

// Story: crud:MessageReaction:nondet:1:2
bp.registerBThread("crud:MessageReaction:nondet:1:2", function () {
  let message_id = 441;
  let emoji_name = "emoji_name_441";
  addReaction(441, "emoji_name_441");
  tryToAddExistingMessageReaction(441, "emoji_name_441");
  verifyMessageReactionExists(441, "emoji_name_441");
  removeReaction(441, "emoji_name_441");
  tryToDeleteANonExistingMessageReaction(441, "emoji_name_441");
  verifyMessageReactionDoesNotExist(441, "emoji_name_441");
});

// Story: crud:MessageReaction:nondet:negative:dup-add
bp.registerBThread("crud:MessageReaction:nondet:negative:dup-add", function () {
  let message_id = 446;
  let emoji_name = "emoji_name_446";
  addReaction(446, "emoji_name_446");
  verifyMessageReactionExists(446, "emoji_name_446");
  tryToAddExistingMessageReaction(446, "emoji_name_446");
  verifyMessageReactionExists(446, "emoji_name_446");
});

// Story: monitor:MessageReaction:add
bp.registerBThread("monitor:MessageReaction:add", function () {
  while (true) {
    let ev = waitForAnyMessageReactionAdded();
    let args = Object.values(ev);
    block(matchDeletedMessageReaction.apply(null, args), function () {
      verifyMessageReactionExists.apply(null, args);
    });
  }
});

// Story: crud:MessageHistory:read_only
bp.registerBThread("crud:MessageHistory:read_only", function () {
  let message_id = 480;
  verifyMessageHistoryExists(480);
});

// Story: crud:MessageReadReceipt:read_only
bp.registerBThread("crud:MessageReadReceipt:read_only", function () {
  let message_id = 490;
  verifyMessageReadReceiptExists(490);
});

// Story: crud:MessageMatchNarrow:read_only
bp.registerBThread("crud:MessageMatchNarrow:read_only", function () {
  let msg_ids = 500;
  let narrow = "narrow_500";
  verifyMessageMatchNarrowExists(500, "narrow_500");
});

// Story: crud:UserUploadFile:read_only
bp.registerBThread("crud:UserUploadFile:read_only", function () {
  let realm_id_str = 570;
  let filename = "filename_570";
  verifyUserUploadFileExists(570, "filename_570");
});

// Story: crud:Emoji:nondet:1:1
bp.registerBThread("crud:Emoji:nondet:1:1", function () {
  let emoji_name = "emoji_name_580";
  uploadCustomEmoji("emoji_name_580");
  tryToAddExistingEmoji("emoji_name_580");
  verifyEmojiExists("emoji_name_580");
  deactivateCustomEmoji("emoji_name_580");
  tryToDeleteANonExistingEmoji("emoji_name_580");
  verifyEmojiDoesNotExist("emoji_name_580");
});

// Story: crud:Emoji:nondet:1:2
bp.registerBThread("crud:Emoji:nondet:1:2", function () {
  let emoji_name = "emoji_name_581";
  uploadCustomEmoji("emoji_name_581");
  tryToAddExistingEmoji("emoji_name_581");
  verifyEmojiExists("emoji_name_581");
  deactivateCustomEmoji("emoji_name_581");
  tryToDeleteANonExistingEmoji("emoji_name_581");
  verifyEmojiDoesNotExist("emoji_name_581");
});

// Story: crud:Emoji:nondet:negative:dup-add
bp.registerBThread("crud:Emoji:nondet:negative:dup-add", function () {
  let emoji_name = "emoji_name_586";
  uploadCustomEmoji("emoji_name_586");
  verifyEmojiExists("emoji_name_586");
  tryToAddExistingEmoji("emoji_name_586");
  verifyEmojiExists("emoji_name_586");
});

// Story: monitor:Emoji:add
bp.registerBThread("monitor:Emoji:add", function () {
  while (true) {
    let ev = waitForAnyEmojiAdded();
    let args = Object.values(ev);
    block(matchDeletedEmoji.apply(null, args), function () {
      verifyEmojiExists.apply(null, args);
    });
  }
});

// Story: crud:CustomProfileField:read_only
bp.registerBThread("crud:CustomProfileField:read_only", function () {

  verifyCustomProfileFieldExists();
});

// Story: crud:Linkifier:nondet:1:1
bp.registerBThread("crud:Linkifier:nondet:1:1", function () {
  let filter_id = 600;
  addLinkifier(600);
  tryToAddExistingLinkifier(600);
  verifyLinkifierExists(600);
  updateLinkifier(600);
  removeLinkifier(600);
  tryToDeleteANonExistingLinkifier(600);
  verifyLinkifierDoesNotExist(600);
});

// Story: crud:Linkifier:nondet:1:2
bp.registerBThread("crud:Linkifier:nondet:1:2", function () {
  let filter_id = 601;
  addLinkifier(601);
  tryToAddExistingLinkifier(601);
  updateLinkifier(601);
  verifyLinkifierExists(601);
  removeLinkifier(601);
  tryToDeleteANonExistingLinkifier(601);
  verifyLinkifierDoesNotExist(601);
});

// Story: crud:Linkifier:nondet:negative:dup-add
bp.registerBThread("crud:Linkifier:nondet:negative:dup-add", function () {
  let filter_id = 606;
  addLinkifier(606);
  verifyLinkifierExists(606);
  tryToAddExistingLinkifier(606);
  verifyLinkifierExists(606);
});

// Story: crud:Linkifier:nondet:existing:update
bp.registerBThread("crud:Linkifier:nondet:existing:update", function () {
  let ev = waitForAnyLinkifierAdded();
  let args = Object.values(ev);
  block(matchDeletedLinkifier.apply(null, args), function () {
    verifyLinkifierExists.apply(null, args);
    updateLinkifier.apply(null, args);
    verifyLinkifierExists.apply(null, args);
  });
});

// Story: monitor:Linkifier:add
bp.registerBThread("monitor:Linkifier:add", function () {
  while (true) {
    let ev = waitForAnyLinkifierAdded();
    let args = Object.values(ev);
    block(matchDeletedLinkifier.apply(null, args), function () {
      verifyLinkifierExists.apply(null, args);
    });
  }
});

// Story: crud:CodePlayground:nondet:1:1
bp.registerBThread("crud:CodePlayground:nondet:1:1", function () {
  let playground_id = 610;
  addCodePlayground(610);
  tryToAddExistingCodePlayground(610);
  verifyCodePlaygroundExists(610);
  removeCodePlayground(610);
  tryToDeleteANonExistingCodePlayground(610);
  verifyCodePlaygroundDoesNotExist(610);
});

// Story: crud:CodePlayground:nondet:1:2
bp.registerBThread("crud:CodePlayground:nondet:1:2", function () {
  let playground_id = 611;
  addCodePlayground(611);
  tryToAddExistingCodePlayground(611);
  verifyCodePlaygroundExists(611);
  removeCodePlayground(611);
  tryToDeleteANonExistingCodePlayground(611);
  verifyCodePlaygroundDoesNotExist(611);
});

// Story: crud:CodePlayground:nondet:negative:dup-add
bp.registerBThread("crud:CodePlayground:nondet:negative:dup-add", function () {
  let playground_id = 616;
  addCodePlayground(616);
  verifyCodePlaygroundExists(616);
  tryToAddExistingCodePlayground(616);
  verifyCodePlaygroundExists(616);
});

// Story: monitor:CodePlayground:add
bp.registerBThread("monitor:CodePlayground:add", function () {
  while (true) {
    let ev = waitForAnyCodePlaygroundAdded();
    let args = Object.values(ev);
    block(matchDeletedCodePlayground.apply(null, args), function () {
      verifyCodePlaygroundExists.apply(null, args);
    });
  }
});

// Story: crud:RealmExport:read_only
bp.registerBThread("crud:RealmExport:read_only", function () {

  verifyRealmExportExists();
});

// Story: crud:Invite:nondet:1:1
bp.registerBThread("crud:Invite:nondet:1:1", function () {
  let invite_id = 650;
  sendInvites(650);
  tryToAddExistingInvite(650);
  verifyInviteExists(650);
  revokeEmailInvite(650);
  tryToDeleteANonExistingInvite(650);
  verifyInviteDoesNotExist(650);
});

// Story: crud:Invite:nondet:1:2
bp.registerBThread("crud:Invite:nondet:1:2", function () {
  let invite_id = 651;
  sendInvites(651);
  tryToAddExistingInvite(651);
  verifyInviteExists(651);
  revokeEmailInvite(651);
  tryToDeleteANonExistingInvite(651);
  verifyInviteDoesNotExist(651);
});

// Story: crud:Invite:nondet:negative:dup-add
bp.registerBThread("crud:Invite:nondet:negative:dup-add", function () {
  let invite_id = 656;
  sendInvites(656);
  verifyInviteExists(656);
  tryToAddExistingInvite(656);
  verifyInviteExists(656);
});

// Story: monitor:Invite:add
bp.registerBThread("monitor:Invite:add", function () {
  while (true) {
    let ev = waitForAnyInviteAdded();
    let args = Object.values(ev);
    block(matchDeletedInvite.apply(null, args), function () {
      verifyInviteExists.apply(null, args);
    });
  }
});

// Story: crud:InviteLink:nondet:1:1
bp.registerBThread("crud:InviteLink:nondet:1:1", function () {
  let invite_id = 660;
  createInviteLink(660);
  tryToAddExistingInviteLink(660);
  verifyInviteLinkExists(660);
  revokeInviteLink(660);
  tryToDeleteANonExistingInviteLink(660);
  verifyInviteLinkDoesNotExist(660);
});

// Story: crud:InviteLink:nondet:1:2
bp.registerBThread("crud:InviteLink:nondet:1:2", function () {
  let invite_id = 661;
  createInviteLink(661);
  tryToAddExistingInviteLink(661);
  verifyInviteLinkExists(661);
  revokeInviteLink(661);
  tryToDeleteANonExistingInviteLink(661);
  verifyInviteLinkDoesNotExist(661);
});

// Story: crud:InviteLink:nondet:negative:dup-add
bp.registerBThread("crud:InviteLink:nondet:negative:dup-add", function () {
  let invite_id = 666;
  createInviteLink(666);
  verifyInviteLinkExists(666);
  tryToAddExistingInviteLink(666);
  verifyInviteLinkExists(666);
});

// Story: monitor:InviteLink:add
bp.registerBThread("monitor:InviteLink:add", function () {
  while (true) {
    let ev = waitForAnyInviteLinkAdded();
    let args = Object.values(ev);
    block(matchDeletedInviteLink.apply(null, args), function () {
      verifyInviteLinkExists.apply(null, args);
    });
  }
});

// Story: crud:EventQueue:read_only
bp.registerBThread("crud:EventQueue:read_only", function () {
  let queue_id = 670;
  let last_event_id = 670;
  let dont_block = "dont_block_670";
  verifyEventQueueExists(670, 670, "dont_block_670");
});

// Story: crud:Draft:nondet:1:1
bp.registerBThread("crud:Draft:nondet:1:1", function () {
  let draft_id = 700;
  createDrafts(700);
  tryToAddExistingDraft(700);
  verifyDraftExists(700);
  editDraft(700);
  deleteDraft(700);
  tryToDeleteANonExistingDraft(700);
  verifyDraftDoesNotExist(700);
});

// Story: crud:Draft:nondet:1:2
bp.registerBThread("crud:Draft:nondet:1:2", function () {
  let draft_id = 701;
  createDrafts(701);
  tryToAddExistingDraft(701);
  editDraft(701);
  verifyDraftExists(701);
  deleteDraft(701);
  tryToDeleteANonExistingDraft(701);
  verifyDraftDoesNotExist(701);
});

// Story: crud:Draft:nondet:negative:dup-add
bp.registerBThread("crud:Draft:nondet:negative:dup-add", function () {
  let draft_id = 706;
  createDrafts(706);
  verifyDraftExists(706);
  tryToAddExistingDraft(706);
  verifyDraftExists(706);
});

// Story: crud:Draft:nondet:existing:update
bp.registerBThread("crud:Draft:nondet:existing:update", function () {
  let ev = waitForAnyDraftAdded();
  let args = Object.values(ev);
  block(matchDeletedDraft.apply(null, args), function () {
    verifyDraftExists.apply(null, args);
    editDraft.apply(null, args);
    verifyDraftExists.apply(null, args);
  });
});

// Story: monitor:Draft:add
bp.registerBThread("monitor:Draft:add", function () {
  while (true) {
    let ev = waitForAnyDraftAdded();
    let args = Object.values(ev);
    block(matchDeletedDraft.apply(null, args), function () {
      verifyDraftExists.apply(null, args);
    });
  }
});

// Story: crud:SavedSnippet:nondet:1:1
bp.registerBThread("crud:SavedSnippet:nondet:1:1", function () {
  let saved_snippet_id = 710;
  createSavedSnippet(710);
  tryToAddExistingSavedSnippet(710);
  verifySavedSnippetExists(710);
  editSavedSnippet(710);
  deleteSavedSnippet(710);
  tryToDeleteANonExistingSavedSnippet(710);
  verifySavedSnippetDoesNotExist(710);
});

// Story: crud:SavedSnippet:nondet:1:2
bp.registerBThread("crud:SavedSnippet:nondet:1:2", function () {
  let saved_snippet_id = 711;
  createSavedSnippet(711);
  tryToAddExistingSavedSnippet(711);
  editSavedSnippet(711);
  verifySavedSnippetExists(711);
  deleteSavedSnippet(711);
  tryToDeleteANonExistingSavedSnippet(711);
  verifySavedSnippetDoesNotExist(711);
});

// Story: crud:SavedSnippet:nondet:negative:dup-add
bp.registerBThread("crud:SavedSnippet:nondet:negative:dup-add", function () {
  let saved_snippet_id = 716;
  createSavedSnippet(716);
  verifySavedSnippetExists(716);
  tryToAddExistingSavedSnippet(716);
  verifySavedSnippetExists(716);
});

// Story: crud:SavedSnippet:nondet:existing:update
bp.registerBThread("crud:SavedSnippet:nondet:existing:update", function () {
  let ev = waitForAnySavedSnippetAdded();
  let args = Object.values(ev);
  block(matchDeletedSavedSnippet.apply(null, args), function () {
    verifySavedSnippetExists.apply(null, args);
    editSavedSnippet.apply(null, args);
    verifySavedSnippetExists.apply(null, args);
  });
});

// Story: monitor:SavedSnippet:add
bp.registerBThread("monitor:SavedSnippet:add", function () {
  while (true) {
    let ev = waitForAnySavedSnippetAdded();
    let args = Object.values(ev);
    block(matchDeletedSavedSnippet.apply(null, args), function () {
      verifySavedSnippetExists.apply(null, args);
    });
  }
});

// Story: crud:NavigationView:nondet:1:1
bp.registerBThread("crud:NavigationView:nondet:1:1", function () {
  let fragment = "fragment_770";
  addNavigationView("fragment_770");
  tryToAddExistingNavigationView("fragment_770");
  verifyNavigationViewExists("fragment_770");
  editNavigationView("fragment_770");
  removeNavigationView("fragment_770");
  tryToDeleteANonExistingNavigationView("fragment_770");
  verifyNavigationViewDoesNotExist("fragment_770");
});

// Story: crud:NavigationView:nondet:1:2
bp.registerBThread("crud:NavigationView:nondet:1:2", function () {
  let fragment = "fragment_771";
  addNavigationView("fragment_771");
  tryToAddExistingNavigationView("fragment_771");
  editNavigationView("fragment_771");
  verifyNavigationViewExists("fragment_771");
  removeNavigationView("fragment_771");
  tryToDeleteANonExistingNavigationView("fragment_771");
  verifyNavigationViewDoesNotExist("fragment_771");
});

// Story: crud:NavigationView:nondet:negative:dup-add
bp.registerBThread("crud:NavigationView:nondet:negative:dup-add", function () {
  let fragment = "fragment_776";
  addNavigationView("fragment_776");
  verifyNavigationViewExists("fragment_776");
  tryToAddExistingNavigationView("fragment_776");
  verifyNavigationViewExists("fragment_776");
});

// Story: crud:NavigationView:nondet:existing:update
bp.registerBThread("crud:NavigationView:nondet:existing:update", function () {
  let ev = waitForAnyNavigationViewAdded();
  let args = Object.values(ev);
  block(matchDeletedNavigationView.apply(null, args), function () {
    verifyNavigationViewExists.apply(null, args);
    editNavigationView.apply(null, args);
    verifyNavigationViewExists.apply(null, args);
  });
});

// Story: monitor:NavigationView:add
bp.registerBThread("monitor:NavigationView:add", function () {
  while (true) {
    let ev = waitForAnyNavigationViewAdded();
    let args = Object.values(ev);
    block(matchDeletedNavigationView.apply(null, args), function () {
      verifyNavigationViewExists.apply(null, args);
    });
  }
});

// Story: crud:Reminder:nondet:1:1
bp.registerBThread("crud:Reminder:nondet:1:1", function () {
  let message_id = 780;
  let scheduled_delivery_timestamp = "scheduled_delivery_timestamp_780";
  let note = "note_780";
  let reminder_id = 780;
  createReminder(780, "scheduled_delivery_timestamp_780", "note_780", 780);
  tryToAddExistingReminder(780, "scheduled_delivery_timestamp_780", "note_780", 780);
  verifyReminderExists(780, "scheduled_delivery_timestamp_780", "note_780", 780);
  deleteReminder(780, "scheduled_delivery_timestamp_780", "note_780", 780);
  tryToDeleteANonExistingReminder(780, "scheduled_delivery_timestamp_780", "note_780", 780);
  verifyReminderDoesNotExist(780, "scheduled_delivery_timestamp_780", "note_780", 780);
});

// Story: crud:Reminder:nondet:1:2
bp.registerBThread("crud:Reminder:nondet:1:2", function () {
  let message_id = 781;
  let scheduled_delivery_timestamp = "scheduled_delivery_timestamp_781";
  let note = "note_781";
  let reminder_id = 781;
  createReminder(781, "scheduled_delivery_timestamp_781", "note_781", 781);
  tryToAddExistingReminder(781, "scheduled_delivery_timestamp_781", "note_781", 781);
  verifyReminderExists(781, "scheduled_delivery_timestamp_781", "note_781", 781);
  deleteReminder(781, "scheduled_delivery_timestamp_781", "note_781", 781);
  tryToDeleteANonExistingReminder(781, "scheduled_delivery_timestamp_781", "note_781", 781);
  verifyReminderDoesNotExist(781, "scheduled_delivery_timestamp_781", "note_781", 781);
});

// Story: crud:Reminder:nondet:negative:dup-add
bp.registerBThread("crud:Reminder:nondet:negative:dup-add", function () {
  let message_id = 786;
  let scheduled_delivery_timestamp = "scheduled_delivery_timestamp_786";
  let note = "note_786";
  let reminder_id = 786;
  createReminder(786, "scheduled_delivery_timestamp_786", "note_786", 786);
  verifyReminderExists(786, "scheduled_delivery_timestamp_786", "note_786", 786);
  tryToAddExistingReminder(786, "scheduled_delivery_timestamp_786", "note_786", 786);
  verifyReminderExists(786, "scheduled_delivery_timestamp_786", "note_786", 786);
});

// Story: monitor:Reminder:add
bp.registerBThread("monitor:Reminder:add", function () {
  while (true) {
    let ev = waitForAnyReminderAdded();
    let args = Object.values(ev);
    block(matchDeletedReminder.apply(null, args), function () {
      verifyReminderExists.apply(null, args);
    });
  }
});

// Story: crud:ScheduledMessage:nondet:1:1
bp.registerBThread("crud:ScheduledMessage:nondet:1:1", function () {
  let scheduled_message_id = 790;
  createScheduledMessage(790);
  tryToAddExistingScheduledMessage(790);
  verifyScheduledMessageExists(790);
  updateScheduledMessage(790);
  deleteScheduledMessage(790);
  tryToDeleteANonExistingScheduledMessage(790);
  verifyScheduledMessageDoesNotExist(790);
});

// Story: crud:ScheduledMessage:nondet:1:2
bp.registerBThread("crud:ScheduledMessage:nondet:1:2", function () {
  let scheduled_message_id = 791;
  createScheduledMessage(791);
  tryToAddExistingScheduledMessage(791);
  updateScheduledMessage(791);
  verifyScheduledMessageExists(791);
  deleteScheduledMessage(791);
  tryToDeleteANonExistingScheduledMessage(791);
  verifyScheduledMessageDoesNotExist(791);
});

// Story: crud:ScheduledMessage:nondet:negative:dup-add
bp.registerBThread("crud:ScheduledMessage:nondet:negative:dup-add", function () {
  let scheduled_message_id = 796;
  createScheduledMessage(796);
  verifyScheduledMessageExists(796);
  tryToAddExistingScheduledMessage(796);
  verifyScheduledMessageExists(796);
});

// Story: crud:ScheduledMessage:nondet:existing:update
bp.registerBThread("crud:ScheduledMessage:nondet:existing:update", function () {
  let ev = waitForAnyScheduledMessageAdded();
  let args = Object.values(ev);
  block(matchDeletedScheduledMessage.apply(null, args), function () {
    verifyScheduledMessageExists.apply(null, args);
    updateScheduledMessage.apply(null, args);
    verifyScheduledMessageExists.apply(null, args);
  });
});

// Story: monitor:ScheduledMessage:add
bp.registerBThread("monitor:ScheduledMessage:add", function () {
  while (true) {
    let ev = waitForAnyScheduledMessageAdded();
    let args = Object.values(ev);
    block(matchDeletedScheduledMessage.apply(null, args), function () {
      verifyScheduledMessageExists.apply(null, args);
    });
  }
});
