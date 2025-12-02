// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        // 1. Try basic capture
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        // 2. Try using pkMap if available
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        // 3. Try fallback scan for any ID-like field
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
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

// Story: crud:UserPresence:read_only
bthread("crud:UserPresence:read_only", function () {

  verifyUserPresenceExists(user_id_or_email);
});

// Story: crud:AlertWords:nondet:1:1
bthread("crud:AlertWords:nondet:1:1", function () {

  addAlertWords();
  // waitForAlertWordsAdded();
  tryToAddExistingAlertWords();
  verifyAlertWordsExists();
  removeAlertWords();
  tryToDeleteANonExistingAlertWords();
  verifyAlertWordsDoesNotExist();
});

// Story: crud:AlertWords:nondet:1:2
bthread("crud:AlertWords:nondet:1:2", function () {

  addAlertWords();
  // waitForAlertWordsAdded();
  tryToAddExistingAlertWords();
  verifyAlertWordsExists();
  removeAlertWords();
  tryToDeleteANonExistingAlertWords();
  verifyAlertWordsDoesNotExist();
});

// Story: crud:AlertWords:nondet:negative:dup-add
bthread("crud:AlertWords:nondet:negative:dup-add", function () {

  addAlertWords();
  // waitForAlertWordsAdded();
  verifyAlertWordsExists();
  tryToAddExistingAlertWords();
  verifyAlertWordsExists();
});

// Story: crud:MutedUser:nondet:1:1
bthread("crud:MutedUser:nondet:1:1", function () {

  // Dependency Barrier
  let deps = {};
  deps["muted_user_id"] = matchAnyUserAdded();
  let pkMap = {"muted_user_id": "user_id"};
  let captured = resolveDependencies(deps, pkMap);
  muted_user_id = captured["muted_user_id"];
  muteUser(muted_user_id);
  // waitForMutedUserAdded(muted_user_id);
  tryToAddExistingMutedUser(muted_user_id);
  verifyMutedUserExists(muted_user_id);
  unmuteUser(muted_user_id);
  tryToDeleteANonExistingMutedUser(muted_user_id);
  verifyMutedUserDoesNotExist(muted_user_id);
});

// Story: crud:MutedUser:nondet:1:2
bthread("crud:MutedUser:nondet:1:2", function () {

  // Dependency Barrier
  let deps = {};
  deps["muted_user_id"] = matchAnyUserAdded();
  let pkMap = {"muted_user_id": "user_id"};
  let captured = resolveDependencies(deps, pkMap);
  muted_user_id = captured["muted_user_id"];
  muteUser(muted_user_id);
  // waitForMutedUserAdded(muted_user_id);
  tryToAddExistingMutedUser(muted_user_id);
  verifyMutedUserExists(muted_user_id);
  unmuteUser(muted_user_id);
  tryToDeleteANonExistingMutedUser(muted_user_id);
  verifyMutedUserDoesNotExist(muted_user_id);
});

// Story: crud:MutedUser:nondet:negative:dup-add
bthread("crud:MutedUser:nondet:negative:dup-add", function () {

  // Dependency Barrier
  let deps = {};
  deps["muted_user_id"] = matchAnyUserAdded();
  let pkMap = {"muted_user_id": "user_id"};
  let captured = resolveDependencies(deps, pkMap);
  muted_user_id = captured["muted_user_id"];
  muteUser(muted_user_id);
  // waitForMutedUserAdded(muted_user_id);
  verifyMutedUserExists(muted_user_id);
  tryToAddExistingMutedUser(muted_user_id);
  verifyMutedUserExists(muted_user_id);
});

// Story: crud:ApnsDeviceToken:nondet:1:1
bthread("crud:ApnsDeviceToken:nondet:1:1", function () {

  addApnsToken();
  // waitForApnsDeviceTokenAdded();
  tryToAddExistingApnsDeviceToken();
  verifyApnsDeviceTokenExists();
  removeApnsToken();
  tryToDeleteANonExistingApnsDeviceToken();
  verifyApnsDeviceTokenDoesNotExist();
});

// Story: crud:ApnsDeviceToken:nondet:1:2
bthread("crud:ApnsDeviceToken:nondet:1:2", function () {

  addApnsToken();
  // waitForApnsDeviceTokenAdded();
  tryToAddExistingApnsDeviceToken();
  verifyApnsDeviceTokenExists();
  removeApnsToken();
  tryToDeleteANonExistingApnsDeviceToken();
  verifyApnsDeviceTokenDoesNotExist();
});

// Story: crud:ApnsDeviceToken:nondet:negative:dup-add
bthread("crud:ApnsDeviceToken:nondet:negative:dup-add", function () {

  addApnsToken();
  // waitForApnsDeviceTokenAdded();
  verifyApnsDeviceTokenExists();
  tryToAddExistingApnsDeviceToken();
  verifyApnsDeviceTokenExists();
});

// Story: crud:AndroidGcmRegId:nondet:1:1
bthread("crud:AndroidGcmRegId:nondet:1:1", function () {

  addFcmToken();
  // waitForAndroidGcmRegIdAdded();
  tryToAddExistingAndroidGcmRegId();
  verifyAndroidGcmRegIdExists();
  removeFcmToken();
  tryToDeleteANonExistingAndroidGcmRegId();
  verifyAndroidGcmRegIdDoesNotExist();
});

// Story: crud:AndroidGcmRegId:nondet:1:2
bthread("crud:AndroidGcmRegId:nondet:1:2", function () {

  addFcmToken();
  // waitForAndroidGcmRegIdAdded();
  tryToAddExistingAndroidGcmRegId();
  verifyAndroidGcmRegIdExists();
  removeFcmToken();
  tryToDeleteANonExistingAndroidGcmRegId();
  verifyAndroidGcmRegIdDoesNotExist();
});

// Story: crud:AndroidGcmRegId:nondet:negative:dup-add
bthread("crud:AndroidGcmRegId:nondet:negative:dup-add", function () {

  addFcmToken();
  // waitForAndroidGcmRegIdAdded();
  verifyAndroidGcmRegIdExists();
  tryToAddExistingAndroidGcmRegId();
  verifyAndroidGcmRegIdExists();
});

// Story: crud:UserGroup:read_only
bthread("crud:UserGroup:read_only", function () {

  verifyUserGroupExists(user_group_id);
});

// Story: crud:UserGroupSubgroups:read_only
bthread("crud:UserGroupSubgroups:read_only", function () {
  let direct_subgroup_only = "direct_subgroup_only_320";
  verifyUserGroupSubgroupsExists(direct_subgroup_only, user_group_id);
});

// Story: crud:UserGroupMember:read_only
bthread("crud:UserGroupMember:read_only", function () {
  let direct_member_only = "direct_member_only_330";
  verifyUserGroupMemberExists(direct_member_only, user_group_id, user_id);
});

// Story: crud:Channel:nondet:1:1
bthread("crud:Channel:nondet:1:1", function () {
  let name = "name_340";
  let stream_id = 340;
  createChannel(name, stream_id);
  // waitForChannelAdded(name, stream_id);
  tryToAddExistingChannel(name, stream_id);
  verifyChannelExists(name, stream_id);
  updateChannel(name, stream_id);
  archiveChannel(name, stream_id);
  tryToDeleteANonExistingChannel(name, stream_id);
  verifyChannelDoesNotExist(name, stream_id);
});

// Story: crud:Channel:nondet:1:2
bthread("crud:Channel:nondet:1:2", function () {
  let name = "name_341";
  let stream_id = 341;
  createChannel(name, stream_id);
  // waitForChannelAdded(name, stream_id);
  tryToAddExistingChannel(name, stream_id);
  updateChannel(name, stream_id);
  verifyChannelExists(name, stream_id);
  archiveChannel(name, stream_id);
  tryToDeleteANonExistingChannel(name, stream_id);
  verifyChannelDoesNotExist(name, stream_id);
});

// Story: crud:Channel:nondet:negative:dup-add
bthread("crud:Channel:nondet:negative:dup-add", function () {
  let name = "name_346";
  let stream_id = 346;
  createChannel(name, stream_id);
  // waitForChannelAdded(name, stream_id);
  verifyChannelExists(name, stream_id);
  tryToAddExistingChannel(name, stream_id);
  verifyChannelExists(name, stream_id);
});

// Story: crud:DefaultChannel:nondet:1:1
bthread("crud:DefaultChannel:nondet:1:1", function () {
  let stream_id = 350;
  addDefaultStream(stream_id);
  // waitForDefaultChannelAdded(stream_id);
  tryToAddExistingDefaultChannel(stream_id);
  verifyDefaultChannelExists(stream_id);
  removeDefaultStream(stream_id);
  tryToDeleteANonExistingDefaultChannel(stream_id);
  verifyDefaultChannelDoesNotExist(stream_id);
});

// Story: crud:DefaultChannel:nondet:1:2
bthread("crud:DefaultChannel:nondet:1:2", function () {
  let stream_id = 351;
  addDefaultStream(stream_id);
  // waitForDefaultChannelAdded(stream_id);
  tryToAddExistingDefaultChannel(stream_id);
  verifyDefaultChannelExists(stream_id);
  removeDefaultStream(stream_id);
  tryToDeleteANonExistingDefaultChannel(stream_id);
  verifyDefaultChannelDoesNotExist(stream_id);
});

// Story: crud:DefaultChannel:nondet:negative:dup-add
bthread("crud:DefaultChannel:nondet:negative:dup-add", function () {
  let stream_id = 356;
  addDefaultStream(stream_id);
  // waitForDefaultChannelAdded(stream_id);
  verifyDefaultChannelExists(stream_id);
  tryToAddExistingDefaultChannel(stream_id);
  verifyDefaultChannelExists(stream_id);
});

// Story: crud:SubscriptionStatus:read_only
bthread("crud:SubscriptionStatus:read_only", function () {
  let stream_id = 380;
  verifySubscriptionStatusExists(stream_id, user_id);
});

// Story: crud:ChannelSubscribers:read_only
bthread("crud:ChannelSubscribers:read_only", function () {
  let stream_id = 400;
  verifyChannelSubscribersExists(stream_id);
});

// Story: crud:ChannelId:read_only
bthread("crud:ChannelId:read_only", function () {
  let stream = "stream_410";
  verifyChannelIdExists(stream);
});

// Story: crud:Channels:read_only
bthread("crud:Channels:read_only", function () {
  let exclude_archived = "exclude_archived_420";
  let include_all = "include_all_420";
  let include_all_active = "include_all_active_420";
  let include_can_access_content = "include_can_access_content_420";
  let include_default = "include_default_420";
  let include_owner_subscribed = "include_owner_subscribed_420";
  let include_public = "include_public_420";
  let include_subscribed = "include_subscribed_420";
  let include_web_public = "include_web_public_420";
  verifyChannelsExists(exclude_archived, include_all, include_all_active, include_can_access_content, include_default, include_owner_subscribed, include_public, include_subscribed, include_web_public);
});

// Story: crud:ChannelEmailAddress:read_only
bthread("crud:ChannelEmailAddress:read_only", function () {
  let sender_id = 430;
  let stream_id = 430;
  verifyChannelEmailAddressExists(sender_id, stream_id);
});

// Story: crud:ChannelFolder:read_only
bthread("crud:ChannelFolder:read_only", function () {
  let name = "name_440";
  verifyChannelFolderExists(channel_folder_id, name);
});

// Story: crud:Message:nondet:1:1
bthread("crud:Message:nondet:1:1", function () {
  let allow_empty_topic_name = "allow_empty_topic_name_460";
  let message_id = 460;
  sendMessage(allow_empty_topic_name, message_id);
  // waitForMessageAdded(allow_empty_topic_name, message_id);
  tryToAddExistingMessage(allow_empty_topic_name, message_id);
  verifyMessageExists(allow_empty_topic_name, message_id);
  updateMessage(allow_empty_topic_name, message_id);
  deleteMessage(allow_empty_topic_name, message_id);
  tryToDeleteANonExistingMessage(allow_empty_topic_name, message_id);
  verifyMessageDoesNotExist(allow_empty_topic_name, message_id);
});

// Story: crud:Message:nondet:1:2
bthread("crud:Message:nondet:1:2", function () {
  let allow_empty_topic_name = "allow_empty_topic_name_461";
  let message_id = 461;
  sendMessage(allow_empty_topic_name, message_id);
  // waitForMessageAdded(allow_empty_topic_name, message_id);
  tryToAddExistingMessage(allow_empty_topic_name, message_id);
  updateMessage(allow_empty_topic_name, message_id);
  verifyMessageExists(allow_empty_topic_name, message_id);
  deleteMessage(allow_empty_topic_name, message_id);
  tryToDeleteANonExistingMessage(allow_empty_topic_name, message_id);
  verifyMessageDoesNotExist(allow_empty_topic_name, message_id);
});

// Story: crud:Message:nondet:negative:dup-add
bthread("crud:Message:nondet:negative:dup-add", function () {
  let allow_empty_topic_name = "allow_empty_topic_name_466";
  let message_id = 466;
  sendMessage(allow_empty_topic_name, message_id);
  // waitForMessageAdded(allow_empty_topic_name, message_id);
  verifyMessageExists(allow_empty_topic_name, message_id);
  tryToAddExistingMessage(allow_empty_topic_name, message_id);
  verifyMessageExists(allow_empty_topic_name, message_id);
});

// Story: crud:Reaction:nondet:1:1
bthread("crud:Reaction:nondet:1:1", function () {
  let emoji_name = "emoji_name_480";
  // Dependency Barrier
  let deps = {};
  deps["message_id"] = matchAnyMessageAdded();
  let pkMap = {"message_id": "message_id"};
  let captured = resolveDependencies(deps, pkMap);
  message_id = captured["message_id"];
  addReaction(emoji_name, message_id);
  // waitForReactionAdded(emoji_name, message_id);
  tryToAddExistingReaction(emoji_name, message_id);
  verifyReactionExists(emoji_name, message_id);
  removeReaction(emoji_name, message_id);
  tryToDeleteANonExistingReaction(emoji_name, message_id);
  verifyReactionDoesNotExist(emoji_name, message_id);
});

// Story: crud:Reaction:nondet:1:2
bthread("crud:Reaction:nondet:1:2", function () {
  let emoji_name = "emoji_name_481";
  // Dependency Barrier
  let deps = {};
  deps["message_id"] = matchAnyMessageAdded();
  let pkMap = {"message_id": "message_id"};
  let captured = resolveDependencies(deps, pkMap);
  message_id = captured["message_id"];
  addReaction(emoji_name, message_id);
  // waitForReactionAdded(emoji_name, message_id);
  tryToAddExistingReaction(emoji_name, message_id);
  verifyReactionExists(emoji_name, message_id);
  removeReaction(emoji_name, message_id);
  tryToDeleteANonExistingReaction(emoji_name, message_id);
  verifyReactionDoesNotExist(emoji_name, message_id);
});

// Story: crud:Reaction:nondet:negative:dup-add
bthread("crud:Reaction:nondet:negative:dup-add", function () {
  let emoji_name = "emoji_name_486";
  // Dependency Barrier
  let deps = {};
  deps["message_id"] = matchAnyMessageAdded();
  let pkMap = {"message_id": "message_id"};
  let captured = resolveDependencies(deps, pkMap);
  message_id = captured["message_id"];
  addReaction(emoji_name, message_id);
  // waitForReactionAdded(emoji_name, message_id);
  verifyReactionExists(emoji_name, message_id);
  tryToAddExistingReaction(emoji_name, message_id);
  verifyReactionExists(emoji_name, message_id);
});

// Story: crud:MessageMatch:read_only
bthread("crud:MessageMatch:read_only", function () {
  let msg_ids = "msg_ids_540";
  let narrow = "narrow_540";
  verifyMessageMatchExists(msg_ids, narrow);
});

// Story: crud:UserUpload:read_only
bthread("crud:UserUpload:read_only", function () {
  let filename = "filename_550";
  let realm_id_str = 550;
  verifyUserUploadExists(filename, realm_id_str);
});

// Story: crud:Emoji:nondet:1:1
bthread("crud:Emoji:nondet:1:1", function () {
  let emoji_name = 560;
  uploadCustomEmoji(emoji_name);
  // waitForEmojiAdded(emoji_name);
  tryToAddExistingEmoji(emoji_name);
  verifyEmojiExists(emoji_name);
  deactivateCustomEmoji(emoji_name);
  tryToDeleteANonExistingEmoji(emoji_name);
  verifyEmojiDoesNotExist(emoji_name);
});

// Story: crud:Emoji:nondet:1:2
bthread("crud:Emoji:nondet:1:2", function () {
  let emoji_name = 561;
  uploadCustomEmoji(emoji_name);
  // waitForEmojiAdded(emoji_name);
  tryToAddExistingEmoji(emoji_name);
  verifyEmojiExists(emoji_name);
  deactivateCustomEmoji(emoji_name);
  tryToDeleteANonExistingEmoji(emoji_name);
  verifyEmojiDoesNotExist(emoji_name);
});

// Story: crud:Emoji:nondet:negative:dup-add
bthread("crud:Emoji:nondet:negative:dup-add", function () {
  let emoji_name = 566;
  uploadCustomEmoji(emoji_name);
  // waitForEmojiAdded(emoji_name);
  verifyEmojiExists(emoji_name);
  tryToAddExistingEmoji(emoji_name);
  verifyEmojiExists(emoji_name);
});

// Story: crud:ProfileField:read_only
bthread("crud:ProfileField:read_only", function () {

  verifyProfileFieldExists();
});

// Story: crud:Linkifier:nondet:1:1
bthread("crud:Linkifier:nondet:1:1", function () {
  let filter_id = 590;
  addLinkifier(filter_id);
  // waitForLinkifierAdded(filter_id);
  tryToAddExistingLinkifier(filter_id);
  verifyLinkifierExists(filter_id);
  updateLinkifier(filter_id);
  removeLinkifier(filter_id);
  tryToDeleteANonExistingLinkifier(filter_id);
  verifyLinkifierDoesNotExist(filter_id);
});

// Story: crud:Linkifier:nondet:1:2
bthread("crud:Linkifier:nondet:1:2", function () {
  let filter_id = 591;
  addLinkifier(filter_id);
  // waitForLinkifierAdded(filter_id);
  tryToAddExistingLinkifier(filter_id);
  updateLinkifier(filter_id);
  verifyLinkifierExists(filter_id);
  removeLinkifier(filter_id);
  tryToDeleteANonExistingLinkifier(filter_id);
  verifyLinkifierDoesNotExist(filter_id);
});

// Story: crud:Linkifier:nondet:negative:dup-add
bthread("crud:Linkifier:nondet:negative:dup-add", function () {
  let filter_id = 596;
  addLinkifier(filter_id);
  // waitForLinkifierAdded(filter_id);
  verifyLinkifierExists(filter_id);
  tryToAddExistingLinkifier(filter_id);
  verifyLinkifierExists(filter_id);
});

// Story: crud:CodePlayground:nondet:1:1
bthread("crud:CodePlayground:nondet:1:1", function () {
  let playground_id = 600;
  addCodePlayground(playground_id);
  // waitForCodePlaygroundAdded(playground_id);
  tryToAddExistingCodePlayground(playground_id);
  verifyCodePlaygroundExists(playground_id);
  removeCodePlayground(playground_id);
  tryToDeleteANonExistingCodePlayground(playground_id);
  verifyCodePlaygroundDoesNotExist(playground_id);
});

// Story: crud:CodePlayground:nondet:1:2
bthread("crud:CodePlayground:nondet:1:2", function () {
  let playground_id = 601;
  addCodePlayground(playground_id);
  // waitForCodePlaygroundAdded(playground_id);
  tryToAddExistingCodePlayground(playground_id);
  verifyCodePlaygroundExists(playground_id);
  removeCodePlayground(playground_id);
  tryToDeleteANonExistingCodePlayground(playground_id);
  verifyCodePlaygroundDoesNotExist(playground_id);
});

// Story: crud:CodePlayground:nondet:negative:dup-add
bthread("crud:CodePlayground:nondet:negative:dup-add", function () {
  let playground_id = 606;
  addCodePlayground(playground_id);
  // waitForCodePlaygroundAdded(playground_id);
  verifyCodePlaygroundExists(playground_id);
  tryToAddExistingCodePlayground(playground_id);
  verifyCodePlaygroundExists(playground_id);
});

// Story: crud:RealmExport:read_only
bthread("crud:RealmExport:read_only", function () {

  verifyRealmExportExists();
});

// Story: crud:RealmExportConsents:read_only
bthread("crud:RealmExportConsents:read_only", function () {

  verifyRealmExportConsentsExists();
});

// Story: crud:ServerSettings:read_only
bthread("crud:ServerSettings:read_only", function () {

  verifyServerSettingsExists();
});

// Story: crud:Invite:nondet:1:1
bthread("crud:Invite:nondet:1:1", function () {
  let invite_id = 650;
  sendInvites(invite_id);
  // waitForInviteAdded(invite_id);
  tryToAddExistingInvite(invite_id);
  verifyInviteExists(invite_id);
  revokeEmailInvite(invite_id);
  tryToDeleteANonExistingInvite(invite_id);
  verifyInviteDoesNotExist(invite_id);
});

// Story: crud:Invite:nondet:1:2
bthread("crud:Invite:nondet:1:2", function () {
  let invite_id = 651;
  sendInvites(invite_id);
  // waitForInviteAdded(invite_id);
  tryToAddExistingInvite(invite_id);
  verifyInviteExists(invite_id);
  revokeEmailInvite(invite_id);
  tryToDeleteANonExistingInvite(invite_id);
  verifyInviteDoesNotExist(invite_id);
});

// Story: crud:Invite:nondet:negative:dup-add
bthread("crud:Invite:nondet:negative:dup-add", function () {
  let invite_id = 656;
  sendInvites(invite_id);
  // waitForInviteAdded(invite_id);
  verifyInviteExists(invite_id);
  tryToAddExistingInvite(invite_id);
  verifyInviteExists(invite_id);
});

// Story: crud:InviteLink:nondet:1:1
bthread("crud:InviteLink:nondet:1:1", function () {

  // Dependency Barrier
  let deps = {};
  deps["invite_id"] = matchAnyInviteAdded();
  let pkMap = {"invite_id": "invite_id"};
  let captured = resolveDependencies(deps, pkMap);
  invite_id = captured["invite_id"];
  createInviteLink(invite_id);
  // waitForInviteLinkAdded(invite_id);
  tryToAddExistingInviteLink(invite_id);
  verifyInviteLinkExists(invite_id);
  revokeInviteLink(invite_id);
  tryToDeleteANonExistingInviteLink(invite_id);
  verifyInviteLinkDoesNotExist(invite_id);
});

// Story: crud:InviteLink:nondet:1:2
bthread("crud:InviteLink:nondet:1:2", function () {

  // Dependency Barrier
  let deps = {};
  deps["invite_id"] = matchAnyInviteAdded();
  let pkMap = {"invite_id": "invite_id"};
  let captured = resolveDependencies(deps, pkMap);
  invite_id = captured["invite_id"];
  createInviteLink(invite_id);
  // waitForInviteLinkAdded(invite_id);
  tryToAddExistingInviteLink(invite_id);
  verifyInviteLinkExists(invite_id);
  revokeInviteLink(invite_id);
  tryToDeleteANonExistingInviteLink(invite_id);
  verifyInviteLinkDoesNotExist(invite_id);
});

// Story: crud:InviteLink:nondet:negative:dup-add
bthread("crud:InviteLink:nondet:negative:dup-add", function () {

  // Dependency Barrier
  let deps = {};
  deps["invite_id"] = matchAnyInviteAdded();
  let pkMap = {"invite_id": "invite_id"};
  let captured = resolveDependencies(deps, pkMap);
  invite_id = captured["invite_id"];
  createInviteLink(invite_id);
  // waitForInviteLinkAdded(invite_id);
  verifyInviteLinkExists(invite_id);
  tryToAddExistingInviteLink(invite_id);
  verifyInviteLinkExists(invite_id);
});

// Story: crud:EventQueue:read_only
bthread("crud:EventQueue:read_only", function () {
  let dont_block = "dont_block_670";
  let last_event_id = 670;
  let queue_id = 670;
  verifyEventQueueExists(dont_block, last_event_id, queue_id);
});

// Story: crud:Draft:nondet:1:1
bthread("crud:Draft:nondet:1:1", function () {
  let draft_id = 700;
  createDrafts(draft_id);
  // waitForDraftAdded(draft_id);
  tryToAddExistingDraft(draft_id);
  verifyDraftExists(draft_id);
  editDraft(draft_id);
  deleteDraft(draft_id);
  tryToDeleteANonExistingDraft(draft_id);
  verifyDraftDoesNotExist(draft_id);
});

// Story: crud:Draft:nondet:1:2
bthread("crud:Draft:nondet:1:2", function () {
  let draft_id = 701;
  createDrafts(draft_id);
  // waitForDraftAdded(draft_id);
  tryToAddExistingDraft(draft_id);
  editDraft(draft_id);
  verifyDraftExists(draft_id);
  deleteDraft(draft_id);
  tryToDeleteANonExistingDraft(draft_id);
  verifyDraftDoesNotExist(draft_id);
});

// Story: crud:Draft:nondet:negative:dup-add
bthread("crud:Draft:nondet:negative:dup-add", function () {
  let draft_id = 706;
  createDrafts(draft_id);
  // waitForDraftAdded(draft_id);
  verifyDraftExists(draft_id);
  tryToAddExistingDraft(draft_id);
  verifyDraftExists(draft_id);
});

// Story: crud:SavedSnippet:nondet:1:1
bthread("crud:SavedSnippet:nondet:1:1", function () {
  let saved_snippet_id = 710;
  createSavedSnippet(saved_snippet_id);
  // waitForSavedSnippetAdded(saved_snippet_id);
  tryToAddExistingSavedSnippet(saved_snippet_id);
  verifySavedSnippetExists(saved_snippet_id);
  editSavedSnippet(saved_snippet_id);
  deleteSavedSnippet(saved_snippet_id);
  tryToDeleteANonExistingSavedSnippet(saved_snippet_id);
  verifySavedSnippetDoesNotExist(saved_snippet_id);
});

// Story: crud:SavedSnippet:nondet:1:2
bthread("crud:SavedSnippet:nondet:1:2", function () {
  let saved_snippet_id = 711;
  createSavedSnippet(saved_snippet_id);
  // waitForSavedSnippetAdded(saved_snippet_id);
  tryToAddExistingSavedSnippet(saved_snippet_id);
  editSavedSnippet(saved_snippet_id);
  verifySavedSnippetExists(saved_snippet_id);
  deleteSavedSnippet(saved_snippet_id);
  tryToDeleteANonExistingSavedSnippet(saved_snippet_id);
  verifySavedSnippetDoesNotExist(saved_snippet_id);
});

// Story: crud:SavedSnippet:nondet:negative:dup-add
bthread("crud:SavedSnippet:nondet:negative:dup-add", function () {
  let saved_snippet_id = 716;
  createSavedSnippet(saved_snippet_id);
  // waitForSavedSnippetAdded(saved_snippet_id);
  verifySavedSnippetExists(saved_snippet_id);
  tryToAddExistingSavedSnippet(saved_snippet_id);
  verifySavedSnippetExists(saved_snippet_id);
});

// Story: crud:NavigationView:nondet:1:1
bthread("crud:NavigationView:nondet:1:1", function () {
  let fragment = 770;
  addNavigationView(fragment);
  // waitForNavigationViewAdded(fragment);
  tryToAddExistingNavigationView(fragment);
  verifyNavigationViewExists(fragment);
  editNavigationView(fragment);
  removeNavigationView(fragment);
  tryToDeleteANonExistingNavigationView(fragment);
  verifyNavigationViewDoesNotExist(fragment);
});

// Story: crud:NavigationView:nondet:1:2
bthread("crud:NavigationView:nondet:1:2", function () {
  let fragment = 771;
  addNavigationView(fragment);
  // waitForNavigationViewAdded(fragment);
  tryToAddExistingNavigationView(fragment);
  editNavigationView(fragment);
  verifyNavigationViewExists(fragment);
  removeNavigationView(fragment);
  tryToDeleteANonExistingNavigationView(fragment);
  verifyNavigationViewDoesNotExist(fragment);
});

// Story: crud:NavigationView:nondet:negative:dup-add
bthread("crud:NavigationView:nondet:negative:dup-add", function () {
  let fragment = 776;
  addNavigationView(fragment);
  // waitForNavigationViewAdded(fragment);
  verifyNavigationViewExists(fragment);
  tryToAddExistingNavigationView(fragment);
  verifyNavigationViewExists(fragment);
});

// Story: crud:Reminder:nondet:1:1
bthread("crud:Reminder:nondet:1:1", function () {
  let reminder_id = 780;
  createReminder(reminder_id);
  // waitForReminderAdded(reminder_id);
  tryToAddExistingReminder(reminder_id);
  verifyReminderExists(reminder_id);
  deleteReminder(reminder_id);
  tryToDeleteANonExistingReminder(reminder_id);
  verifyReminderDoesNotExist(reminder_id);
});

// Story: crud:Reminder:nondet:1:2
bthread("crud:Reminder:nondet:1:2", function () {
  let reminder_id = 781;
  createReminder(reminder_id);
  // waitForReminderAdded(reminder_id);
  tryToAddExistingReminder(reminder_id);
  verifyReminderExists(reminder_id);
  deleteReminder(reminder_id);
  tryToDeleteANonExistingReminder(reminder_id);
  verifyReminderDoesNotExist(reminder_id);
});

// Story: crud:Reminder:nondet:negative:dup-add
bthread("crud:Reminder:nondet:negative:dup-add", function () {
  let reminder_id = 786;
  createReminder(reminder_id);
  // waitForReminderAdded(reminder_id);
  verifyReminderExists(reminder_id);
  tryToAddExistingReminder(reminder_id);
  verifyReminderExists(reminder_id);
});

// Story: crud:ScheduledMessage:nondet:1:1
bthread("crud:ScheduledMessage:nondet:1:1", function () {
  let content = "content_790";
  let scheduled_delivery_timestamp = "scheduled_delivery_timestamp_790";
  let to = "to_790";
  let topic = "topic_790";
  let type = "type_790";
  // Dependency Barrier
  let deps = {};
  deps["scheduled_message_id"] = matchAnyMessageAdded();
  let pkMap = {"scheduled_message_id": "message_id"};
  let captured = resolveDependencies(deps, pkMap);
  scheduled_message_id = captured["scheduled_message_id"];
  createScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  // waitForScheduledMessageAdded(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  tryToAddExistingScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  verifyScheduledMessageExists(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  updateScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  deleteScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  tryToDeleteANonExistingScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  verifyScheduledMessageDoesNotExist(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
});

// Story: crud:ScheduledMessage:nondet:1:2
bthread("crud:ScheduledMessage:nondet:1:2", function () {
  let content = "content_791";
  let scheduled_delivery_timestamp = "scheduled_delivery_timestamp_791";
  let to = "to_791";
  let topic = "topic_791";
  let type = "type_791";
  // Dependency Barrier
  let deps = {};
  deps["scheduled_message_id"] = matchAnyMessageAdded();
  let pkMap = {"scheduled_message_id": "message_id"};
  let captured = resolveDependencies(deps, pkMap);
  scheduled_message_id = captured["scheduled_message_id"];
  createScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  // waitForScheduledMessageAdded(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  tryToAddExistingScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  updateScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  verifyScheduledMessageExists(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  deleteScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  tryToDeleteANonExistingScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  verifyScheduledMessageDoesNotExist(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
});

// Story: crud:ScheduledMessage:nondet:negative:dup-add
bthread("crud:ScheduledMessage:nondet:negative:dup-add", function () {
  let content = "content_796";
  let scheduled_delivery_timestamp = "scheduled_delivery_timestamp_796";
  let to = "to_796";
  let topic = "topic_796";
  let type = "type_796";
  // Dependency Barrier
  let deps = {};
  deps["scheduled_message_id"] = matchAnyMessageAdded();
  let pkMap = {"scheduled_message_id": "message_id"};
  let captured = resolveDependencies(deps, pkMap);
  scheduled_message_id = captured["scheduled_message_id"];
  createScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  // waitForScheduledMessageAdded(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  verifyScheduledMessageExists(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  tryToAddExistingScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
  verifyScheduledMessageExists(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
});
