//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

// Lazy initialization to ensure variables are resolved
var _svc = null;
function getSvc() {
  if (!_svc) {
    var baseURL = protocol + "://" + host + ":" + port;
    bp.log.info("Initializing RESTSession with URL: " + baseURL);
    _svc = new RESTSession(baseURL, "provengo-client", {
      headers: { "Content-Type": "application/json" },
    });
  }
  return _svc;
}

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: attachment ----

function getAttachments(attachment_id) {
  var url = "/attachments";
  var description = "Get attachments";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function removeAttachment(attachment_id) {
  var url = "/attachments/" + attachment_id;
  var description = "Delete attachment with id " + attachment_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function verifyAttachmentExists(attachment_id) {
  return getAttachments(attachment_id);
}

function verifyAttachmentDoesNotExist(attachment_id) {
  return getAttachments(attachment_id);
}

function tryToDeleteANonExistingAttachment(attachment_id) {
  return removeAttachment(attachment_id);
}

// ---- Entity: user ----

function getUser(user_id, email) {
  var url = "/users/" + user_id;
  var description = "Get user with id " + user_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function getUserByEmail(user_id, email) {
  var url = "/users/" + email;
  var description = "Get user with email " + email;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function createUser(user_id, email) {
  var url = "/users";
  var description = "Create user with email " + email + " and full_name {full_name}";
  var body = {
    "email": email,
    "password": password,
    "full_name": full_name,
  };
  return getSvc().post(url, body, { description: description });
}

function updateUser(user_id, email) {
  var url = "/users/" + user_id;
  var description = "Update user with id " + user_id;
  var body = undefined;
  return getSvc().patch(url, body, { description: description });
}

function updateUserByEmail(user_id, email) {
  var url = "/users/" + email;
  var description = "Update user with email " + email;
  var body = undefined;
  return getSvc().patch(url, body, { description: description });
}

function deactivateUser(user_id, email) {
  var url = "/users/" + user_id;
  var description = "Deactivate user with id " + user_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function reactivateUser(user_id, email) {
  var url = "/users/" + user_id + "/reactivate";
  var description = "Reactivate user with id " + user_id;
  var body = undefined;
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingUser(user_id, email) {
  return createUser(user_id, email);
}

function verifyUserExists(user_id, email) {
  return getUser(user_id, email);
}

function verifyUserDoesNotExist(user_id, email) {
  return getUser(user_id, email);
}

function tryToDeleteANonExistingUser(user_id, email) {
  return deactivateUser(user_id, email);
}

// ---- Entity: user status ----

function getUserStatus(user_id, status_text, emoji_name, emoji_code, reaction_type) {
  var url = "/users/" + user_id + "/status";
  var description = "Get status for user with id " + user_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function updateStatusForUser(user_id, status_text, emoji_name, emoji_code, reaction_type) {
  var url = "/users/" + user_id + "/status";
  var description = "Update status for user with id " + user_id;
  var body = {
    "status_text": status_text,
    "emoji_name": emoji_name,
    "emoji_code": emoji_code,
    "reaction_type": reaction_type,
  };
  return getSvc().post(url, body, { description: description });
}

function verifyUserStatusExists(user_id, status_text, emoji_name, emoji_code, reaction_type) {
  return getUserStatus(user_id, status_text, emoji_name, emoji_code, reaction_type);
}

function verifyUserStatusDoesNotExist(user_id, status_text, emoji_name, emoji_code, reaction_type) {
  return getUserStatus(user_id, status_text, emoji_name, emoji_code, reaction_type);
}

// ---- Entity: own user status ----

function updateStatus(status_text, emoji_name, emoji_code, reaction_type) {
  var url = "/users/me/status";
  var description = "Update own user status";
  var body = {
    "status_text": status_text,
    "emoji_name": emoji_name,
    "emoji_code": emoji_code,
    "reaction_type": reaction_type,
  };
  return getSvc().post(url, body, { description: description });
}

// ---- Entity: user presence ----

function getUserPresence(user_id_or_email) {
  var url = "/users/" + user_id_or_email + "/presence";
  var description = "Get presence for user " + user_id_or_email;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function verifyUserPresenceExists(user_id_or_email) {
  return getUserPresence(user_id_or_email);
}

function verifyUserPresenceDoesNotExist(user_id_or_email) {
  return getUserPresence(user_id_or_email);
}

// ---- Entity: own user presence ----

function updatePresence(last_update_id, history_limit_days, new_user_input, ping_only, slim_presence, status) {
  var url = "/users/me/presence";
  var description = "Update own user presence";
  var body = {
    "last_update_id": last_update_id,
    "history_limit_days": history_limit_days,
    "new_user_input": new_user_input,
    "ping_only": ping_only,
    "slim_presence": slim_presence,
    "status": status,
  };
  return getSvc().post(url, body, { description: description });
}

// ---- Entity: alert words ----

function getAlertWords(alert_words) {
  var url = "/users/me/alert_words";
  var description = "Get all alert words";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function addAlertWords(alert_words) {
  var url = "/users/me/alert_words";
  var description = "Add alert words " + alert_words;
  var body = {
    "alert_words": alert_words,
  };
  return getSvc().post(url, body, { description: description });
}

function removeAlertWords(alert_words) {
  var url = "/users/me/alert_words";
  var description = "Remove alert words " + alert_words;
  var body = {
    "alert_words": alert_words,
  };
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingAlertWords(alert_words) {
  return addAlertWords(alert_words);
}

function verifyAlertWordsExists(alert_words) {
  return getAlertWords(alert_words);
}

function verifyAlertWordsDoesNotExist(alert_words) {
  return getAlertWords(alert_words);
}

function tryToDeleteANonExistingAlertWords(alert_words) {
  return removeAlertWords(alert_words);
}

// ---- Entity: muted user ----

function muteUser(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Mute user with id " + muted_user_id;
  var body = undefined;
  return getSvc().post(url, body, { description: description });
}

function unmuteUser(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Unmute user with id " + muted_user_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingMutedUser(muted_user_id) {
  return muteUser(muted_user_id);
}

function tryToDeleteANonExistingMutedUser(muted_user_id) {
  return unmuteUser(muted_user_id);
}

// ---- Entity: APNs device token ----

function addApnsToken(token, appid) {
  var url = "/users/me/apns_device_token";
  var description = "Add APNs device token " + token + " for appid " + appid;
  var body = {
    "token": token,
    "appid": appid,
  };
  return getSvc().post(url, body, { description: description });
}

function removeApnsToken(token, appid) {
  var url = "/users/me/apns_device_token";
  var description = "Remove APNs device token " + token;
  var body = {
    "token": token,
  };
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingApnsDeviceToken(token, appid) {
  return addApnsToken(token, appid);
}

function tryToDeleteANonExistingApnsDeviceToken(token, appid) {
  return removeApnsToken(token, appid);
}

// ---- Entity: FCM registration token ----

function addFcmToken(token) {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Add FCM registration token " + token;
  var body = {
    "token": token,
  };
  return getSvc().post(url, body, { description: description });
}

function removeFcmToken(token) {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Remove FCM registration token " + token;
  var body = {
    "token": token,
  };
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingFcmToken(token) {
  return addFcmToken(token);
}

function tryToDeleteANonExistingFcmToken(token) {
  return removeFcmToken(token);
}

// ---- Entity: typing status ----

function setTypingStatus(op, type, to, stream_id, topic) {
  var url = "/typing";
  var description = "Set typing status with op " + op + " and type " + type;
  var body = {
    "op": op,
    "type": type,
    "to": to,
    "stream_id": stream_id,
    "topic": topic,
  };
  return getSvc().post(url, body, { description: description });
}

// ---- Entity: message typing status ----

function setTypingStatusForMessageEdit(message_id, op) {
  var url = "/messages/" + message_id + "/typing";
  var description = "Set typing status for message edit with message_id " + message_id + " and op " + op;
  var body = {
    "op": op,
  };
  return getSvc().post(url, body, { description: description });
}

// ---- Entity: user group ----

function createUserGroup(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups) {
  var url = "/user_groups/create";
  var description = "Create user group with name " + name + " and description " + description;
  var body = {
    "name": name,
    "description": description,
    "members": members,
    "subgroups": subgroups,
    "can_add_members_group": can_add_members_group,
    "can_join_group": can_join_group,
    "can_leave_group": can_leave_group,
    "can_manage_group": can_manage_group,
    "can_mention_group": can_mention_group,
    "can_remove_members_group": can_remove_members_group,
  };
  return getSvc().post(url, body, { description: description });
}

function updateUserGroup(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups) {
  var url = "/user_groups/" + user_group_id;
  var description = "Update user group with id " + user_group_id;
  var body = {
    "name": name,
    "description": description,
    "can_add_members_group": can_add_members_group,
    "can_join_group": can_join_group,
    "can_leave_group": can_leave_group,
    "can_manage_group": can_manage_group,
    "can_mention_group": can_mention_group,
    "can_remove_members_group": can_remove_members_group,
    "deactivated": deactivated,
  };
  return getSvc().patch(url, body, { description: description });
}

function deactivateUserGroup(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups) {
  var url = "/user_groups/" + user_group_id + "/deactivate";
  var description = "Deactivate user group with id " + user_group_id;
  var body = undefined;
  return getSvc().post(url, body, { description: description });
}

function getUserGroups(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups) {
  var url = "/user_groups";
  var description = "Get user groups";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function tryToAddExistingUserGroup(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups) {
  return createUserGroup(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups);
}

function verifyUserGroupExists(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups) {
  return getUserGroups(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups);
}

function verifyUserGroupDoesNotExist(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups) {
  return getUserGroups(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups);
}

function tryToDeleteANonExistingUserGroup(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups) {
  return deactivateUserGroup(name, description, members, subgroups, can_add_members_group, can_join_group, can_leave_group, can_manage_group, can_mention_group, can_remove_members_group, user_group_id, deactivated, include_deactivated_groups);
}

// ---- Entity: user group members ----

function getUserGroupMembers(user_group_id, direct_member_only, delete, add, delete_subgroups, add_subgroups) {
  var url = "/user_groups/" + user_group_id + "/members";
  var description = "Get members of user group with id " + user_group_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function updateUserGroupMembers(user_group_id, direct_member_only, delete, add, delete_subgroups, add_subgroups) {
  var url = "/user_groups/" + user_group_id + "/members";
  var description = "Update members of user group with id " + user_group_id;
  var body = {
    "delete": delete,
    "add": add,
    "delete_subgroups": delete_subgroups,
    "add_subgroups": add_subgroups,
  };
  return getSvc().post(url, body, { description: description });
}

function verifyUserGroupMembersExists(user_group_id, direct_member_only, delete, add, delete_subgroups, add_subgroups) {
  return getUserGroupMembers(user_group_id, direct_member_only, delete, add, delete_subgroups, add_subgroups);
}

function verifyUserGroupMembersDoesNotExist(user_group_id, direct_member_only, delete, add, delete_subgroups, add_subgroups) {
  return getUserGroupMembers(user_group_id, direct_member_only, delete, add, delete_subgroups, add_subgroups);
}

// ---- Entity: user group subgroups ----

function getUserGroupSubgroups(user_group_id, direct_subgroup_only, delete, add) {
  var url = "/user_groups/" + user_group_id + "/subgroups";
  var description = "Get subgroups of user group with id " + user_group_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function updateUserGroupSubgroups(user_group_id, direct_subgroup_only, delete, add) {
  var url = "/user_groups/" + user_group_id + "/subgroups";
  var description = "Update subgroups of user group with id " + user_group_id;
  var body = {
    "delete": delete,
    "add": add,
  };
  return getSvc().post(url, body, { description: description });
}

function verifyUserGroupSubgroupsExists(user_group_id, direct_subgroup_only, delete, add) {
  return getUserGroupSubgroups(user_group_id, direct_subgroup_only, delete, add);
}

function verifyUserGroupSubgroupsDoesNotExist(user_group_id, direct_subgroup_only, delete, add) {
  return getUserGroupSubgroups(user_group_id, direct_subgroup_only, delete, add);
}

// ---- Entity: user group membership ----

function getIsUserGroupMember(user_group_id, user_id, direct_member_only) {
  var url = "/user_groups/" + user_group_id + "/members/" + user_id;
  var description = "Get membership status of user " + user_id + " in user group " + user_group_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function verifyUserGroupMembershipExists(user_group_id, user_id, direct_member_only) {
  return getIsUserGroupMember(user_group_id, user_id, direct_member_only);
}

function verifyUserGroupMembershipDoesNotExist(user_group_id, user_id, direct_member_only) {
  return getIsUserGroupMember(user_group_id, user_id, direct_member_only);
}

// ---- Entity: own user ----

function getOwnUser() {
  var url = "/users/me";
  var description = "Get own user";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function deactivateOwnUser() {
  var url = "/users/me";
  var description = "Deactivate own user";
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function verifyOwnUserExists() {
  return getOwnUser();
}

function verifyOwnUserDoesNotExist() {
  return getOwnUser();
}

function tryToDeleteANonExistingOwnUser() {
  return deactivateOwnUser();
}

// ---- Entity: settings ----

function updateSettings(full_name, email, old_password, new_password, twenty_four_hour_time, web_mark_read_on_scroll_policy, web_channel_default_view, starred_message_counts, receives_typing_notifications, web_suggest_update_timezone, fluid_layout_width, high_contrast_mode, web_font_size_px, web_line_height_percent, color_scheme, enable_drafts_synchronization, translate_emoticons, display_emoji_reaction_users, web_escape_navigates_to_home_view, left_side_userlist, demote_inactive_streams, user_list_style, web_animate_image_previews, web_stream_unreads_count_display_policy, hide_ai_features, web_left_sidebar_show_channel_folders, web_left_sidebar_unreads_count_summary, timezone, enable_stream_desktop_notifications, enable_stream_email_notifications, enable_stream_push_notifications, enable_stream_audible_notifications, enable_desktop_notifications, enable_sounds, email_notifications_batching_period_seconds, enable_offline_email_notifications, enable_offline_push_notifications, enable_online_push_notifications, enable_followed_topic_desktop_notifications, enable_followed_topic_email_notifications, enable_followed_topic_push_notifications, enable_followed_topic_audible_notifications, enable_digest_emails, enable_marketing_emails, enable_login_emails, message_content_in_email_notifications, pm_content_in_desktop_notifications, wildcard_mentions_notify, enable_followed_topic_wildcard_mentions_notify, desktop_icon_count_display, realm_name_in_email_notifications_policy, automatically_follow_topics_policy, automatically_unmute_topics_in_muted_streams_policy, automatically_follow_topics_where_mentioned, resolved_topic_notice_auto_read_policy, presence_enabled, enter_sends, send_private_typing_notifications, send_stream_typing_notifications, send_read_receipts, allow_private_data_export, email_address_visibility, web_navigate_to_sent_message) {
  var url = "/settings";
  var description = "Update settings";
  var body = {
    "full_name": full_name,
    "email": email,
    "old_password": old_password,
    "new_password": new_password,
    "twenty_four_hour_time": twenty_four_hour_time,
    "web_mark_read_on_scroll_policy": web_mark_read_on_scroll_policy,
    "web_channel_default_view": web_channel_default_view,
    "starred_message_counts": starred_message_counts,
    "receives_typing_notifications": receives_typing_notifications,
    "web_suggest_update_timezone": web_suggest_update_timezone,
    "fluid_layout_width": fluid_layout_width,
    "high_contrast_mode": high_contrast_mode,
    "web_font_size_px": web_font_size_px,
    "web_line_height_percent": web_line_height_percent,
    "color_scheme": color_scheme,
    "enable_drafts_synchronization": enable_drafts_synchronization,
    "translate_emoticons": translate_emoticons,
    "display_emoji_reaction_users": display_emoji_reaction_users,
    "web_escape_navigates_to_home_view": web_escape_navigates_to_home_view,
    "left_side_userlist": left_side_userlist,
    "demote_inactive_streams": demote_inactive_streams,
    "user_list_style": user_list_style,
    "web_animate_image_previews": web_animate_image_previews,
    "web_stream_unreads_count_display_policy": web_stream_unreads_count_display_policy,
    "hide_ai_features": hide_ai_features,
    "web_left_sidebar_show_channel_folders": web_left_sidebar_show_channel_folders,
    "web_left_sidebar_unreads_count_summary": web_left_sidebar_unreads_count_summary,
    "timezone": timezone,
    "enable_stream_desktop_notifications": enable_stream_desktop_notifications,
    "enable_stream_email_notifications": enable_stream_email_notifications,
    "enable_stream_push_notifications": enable_stream_push_notifications,
    "enable_stream_audible_notifications": enable_stream_audible_notifications,
    "enable_desktop_notifications": enable_desktop_notifications,
    "enable_sounds": enable_sounds,
    "email_notifications_batching_period_seconds": email_notifications_batching_period_seconds,
    "enable_offline_email_notifications": enable_offline_email_notifications,
    "enable_offline_push_notifications": enable_offline_push_notifications,
    "enable_online_push_notifications": enable_online_push_notifications,
    "enable_followed_topic_desktop_notifications": enable_followed_topic_desktop_notifications,
    "enable_followed_topic_email_notifications": enable_followed_topic_email_notifications,
    "enable_followed_topic_push_notifications": enable_followed_topic_push_notifications,
    "enable_followed_topic_audible_notifications": enable_followed_topic_audible_notifications,
    "enable_digest_emails": enable_digest_emails,
    "enable_marketing_emails": enable_marketing_emails,
    "enable_login_emails": enable_login_emails,
    "message_content_in_email_notifications": message_content_in_email_notifications,
    "pm_content_in_desktop_notifications": pm_content_in_desktop_notifications,
    "wildcard_mentions_notify": wildcard_mentions_notify,
    "enable_followed_topic_wildcard_mentions_notify": enable_followed_topic_wildcard_mentions_notify,
    "desktop_icon_count_display": desktop_icon_count_display,
    "realm_name_in_email_notifications_policy": realm_name_in_email_notifications_policy,
    "automatically_follow_topics_policy": automatically_follow_topics_policy,
    "automatically_unmute_topics_in_muted_streams_policy": automatically_unmute_topics_in_muted_streams_policy,
    "automatically_follow_topics_where_mentioned": automatically_follow_topics_where_mentioned,
    "resolved_topic_notice_auto_read_policy": resolved_topic_notice_auto_read_policy,
    "presence_enabled": presence_enabled,
    "enter_sends": enter_sends,
    "send_private_typing_notifications": send_private_typing_notifications,
    "send_stream_typing_notifications": send_stream_typing_notifications,
    "send_read_receipts": send_read_receipts,
    "allow_private_data_export": allow_private_data_export,
    "email_address_visibility": email_address_visibility,
    "web_navigate_to_sent_message": web_navigate_to_sent_message,
  };
  return getSvc().patch(url, body, { description: description });
}

// ---- Entity: channel ----

function createChannel(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  var url = "/channels/create";
  var description = "Create channel " + name + " with subscribers " + subscribers;
  var body = {
    "name": name,
    "subscribers": subscribers,
    "description": description,
    "announce": announce,
    "invite_only": invite_only,
    "is_web_public": is_web_public,
    "is_default_stream": is_default_stream,
    "folder_id": folder_id,
    "topics_policy": topics_policy,
    "history_public_to_subscribers": history_public_to_subscribers,
    "message_retention_days": message_retention_days,
    "can_add_subscribers_group": can_add_subscribers_group,
    "can_delete_any_message_group": can_delete_any_message_group,
    "can_delete_own_message_group": can_delete_own_message_group,
    "can_remove_subscribers_group": can_remove_subscribers_group,
    "can_administer_channel_group": can_administer_channel_group,
    "can_move_messages_out_of_channel_group": can_move_messages_out_of_channel_group,
    "can_move_messages_within_channel_group": can_move_messages_within_channel_group,
    "can_send_message_group": can_send_message_group,
    "can_subscribe_group": can_subscribe_group,
    "can_resolve_topics_group": can_resolve_topics_group,
  };
  return getSvc().post(url, body, { description: description });
}

function archiveChannel(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  var url = "/streams/" + stream_id;
  var description = "Archive channel with id " + stream_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function updateChannel(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  var url = "/streams/" + stream_id;
  var description = "Update channel " + stream_id + " with new_name {new_name}";
  var body = {
    "description": description,
    "new_name": new_name,
    "is_private": is_private,
    "is_web_public": is_web_public,
    "history_public_to_subscribers": history_public_to_subscribers,
    "is_default_stream": is_default_stream,
    "message_retention_days": message_retention_days,
    "is_archived": is_archived,
    "folder_id": folder_id,
    "topics_policy": topics_policy,
    "can_add_subscribers_group": can_add_subscribers_group,
    "can_remove_subscribers_group": can_remove_subscribers_group,
    "can_administer_channel_group": can_administer_channel_group,
    "can_delete_any_message_group": can_delete_any_message_group,
    "can_delete_own_message_group": can_delete_own_message_group,
    "can_move_messages_out_of_channel_group": can_move_messages_out_of_channel_group,
    "can_move_messages_within_channel_group": can_move_messages_within_channel_group,
    "can_send_message_group": can_send_message_group,
    "can_subscribe_group": can_subscribe_group,
    "can_resolve_topics_group": can_resolve_topics_group,
  };
  return getSvc().patch(url, body, { description: description });
}

function getChannelById(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  var url = "/streams/" + stream_id;
  var description = "Get channel with id " + stream_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function getChannels(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  var url = "/streams";
  var description = "Get all channels";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function tryToAddExistingChannel(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  return createChannel(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content);
}

function verifyChannelExists(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  return getChannelById(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content);
}

function verifyChannelDoesNotExist(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  return getChannelById(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content);
}

function tryToDeleteANonExistingChannel(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content) {
  return archiveChannel(name, subscribers, stream_id, include_public, include_web_public, include_subscribed, exclude_archived, include_all_active, include_all, include_default, include_owner_subscribed, include_can_access_content);
}

// ---- Entity: default channel ----

function addDefaultStream(stream_id) {
  var url = "/default_streams";
  var description = "Add default channel with id " + stream_id;
  var body = {
    "stream_id": stream_id,
  };
  return getSvc().post(url, body, { description: description });
}

function removeDefaultStream(stream_id) {
  var url = "/default_streams";
  var description = "Remove default channel with id " + stream_id;
  var body = {
    "stream_id": stream_id,
  };
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingDefaultChannel(stream_id) {
  return addDefaultStream(stream_id);
}

function tryToDeleteANonExistingDefaultChannel(stream_id) {
  return removeDefaultStream(stream_id);
}

// ---- Entity: subscription ----

function subscribe(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  var url = "/users/me/subscriptions";
  var description = "Subscribe to channel " + name;
  var body = {
    "subscriptions": "[{"name": "{name}", "description": "{description}"}]",
    "principals": principals,
    "authorization_errors_fatal": authorization_errors_fatal,
    "announce": announce,
    "invite_only": invite_only,
    "is_web_public": is_web_public,
    "is_default_stream": is_default_stream,
    "history_public_to_subscribers": history_public_to_subscribers,
    "message_retention_days": message_retention_days,
    "topics_policy": topics_policy,
    "can_add_subscribers_group": can_add_subscribers_group,
    "can_remove_subscribers_group": can_remove_subscribers_group,
    "can_administer_channel_group": can_administer_channel_group,
    "can_delete_any_message_group": can_delete_any_message_group,
    "can_delete_own_message_group": can_delete_own_message_group,
    "can_move_messages_out_of_channel_group": can_move_messages_out_of_channel_group,
    "can_move_messages_within_channel_group": can_move_messages_within_channel_group,
    "can_send_message_group": can_send_message_group,
    "can_subscribe_group": can_subscribe_group,
    "can_resolve_topics_group": can_resolve_topics_group,
    "folder_id": folder_id,
    "send_new_subscription_messages": send_new_subscription_messages,
  };
  return getSvc().post(url, body, { description: description });
}

function updateSubscriptions(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  var url = "/users/me/subscriptions";
  var description = "Update subscriptions by adding {add} and deleting {delete}";
  var body = {
    "add": add,
    "delete": delete,
  };
  return getSvc().patch(url, body, { description: description });
}

function unsubscribe(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  var url = "/users/me/subscriptions";
  var description = "Unsubscribe from channels " + subscriptions;
  var body = {
    "subscriptions": subscriptions,
    "principals": principals,
  };
  return getSvc().delete(url, { description: description });
}

function getSubscriptions(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  var url = "/users/me/subscriptions";
  var description = "Get subscribed channels";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function getSubscriptionStatus(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  var url = "/users/" + user_id + "/subscriptions/" + stream_id;
  var description = "Get subscription status for user " + user_id + " and channel " + stream_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function updateSubscriptionSettings(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  var url = "/users/me/subscriptions/properties";
  var description = "Update subscription settings for stream_id " + stream_id + " property {property} to {value}";
  var body = {
    "subscription_data": subscription_data,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingSubscription(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  return subscribe(name, subscriptions, IncludeSubscribers, user_id, stream_id);
}

function verifySubscriptionExists(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  return getSubscriptions(name, subscriptions, IncludeSubscribers, user_id, stream_id);
}

function verifySubscriptionDoesNotExist(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  return getSubscriptions(name, subscriptions, IncludeSubscribers, user_id, stream_id);
}

function tryToDeleteANonExistingSubscription(name, subscriptions, IncludeSubscribers, user_id, stream_id) {
  return unsubscribe(name, subscriptions, IncludeSubscribers, user_id, stream_id);
}

// ---- Entity: topic ----

function getStreamTopics(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy) {
  var url = "/users/me/" + stream_id + "/topics";
  var description = "Get topics in channel " + stream_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function deleteTopic(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy) {
  var url = "/streams/" + stream_id + "/delete_topic";
  var description = "Delete topic " + topic_name + " in channel " + stream_id;
  var body = {
    "topic_name": topic_name,
  };
  return getSvc().post(url, body, { description: description });
}

function muteTopic(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy) {
  var url = "/users/me/subscriptions/muted_topics";
  var description = "Mute topic " + topic + " in channel " + stream_id + " with operation " + op;
  var body = {
    "stream_id": stream_id,
    "stream": stream,
    "topic": topic,
    "op": op,
  };
  return getSvc().patch(url, body, { description: description });
}

function updateUserTopic(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy) {
  var url = "/user_topics";
  var description = "Update personal preferences for topic " + topic + " in channel " + stream_id + " with visibility_policy " + visibility_policy;
  var body = {
    "stream_id": stream_id,
    "topic": topic,
    "visibility_policy": visibility_policy,
  };
  return getSvc().post(url, body, { description: description });
}

function verifyTopicExists(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy) {
  return getStreamTopics(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy);
}

function verifyTopicDoesNotExist(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy) {
  return getStreamTopics(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy);
}

function tryToDeleteANonExistingTopic(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy) {
  return deleteTopic(stream_id, allow_empty_topic_name, topic_name, topic, op, visibility_policy);
}

// ---- Entity: channel folder ----

function createChannelFolder(name, include_archived, channel_folder_id) {
  var url = "/channel_folders/create";
  var description = "Create channel folder " + name;
  var body = {
    "name": name,
    "description": description,
  };
  return getSvc().post(url, body, { description: description });
}

function getChannelFolders(name, include_archived, channel_folder_id) {
  var url = "/channel_folders";
  var description = "Get channel folders";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function updateChannelFolder(name, include_archived, channel_folder_id) {
  var url = "/channel_folders/" + channel_folder_id;
  var description = "Update channel folder " + channel_folder_id + " with name " + name;
  var body = {
    "name": name,
    "description": description,
    "is_archived": is_archived,
  };
  return getSvc().patch(url, body, { description: description });
}

function patchChannelFolders(name, include_archived, channel_folder_id) {
  var url = "/channel_folders";
  var description = "Reorder channel folders with order {order}";
  var body = {
    "order": order,
  };
  return getSvc().patch(url, body, { description: description });
}

function tryToAddExistingChannelFolder(name, include_archived, channel_folder_id) {
  return createChannelFolder(name, include_archived, channel_folder_id);
}

function verifyChannelFolderExists(name, include_archived, channel_folder_id) {
  return getChannelFolders(name, include_archived, channel_folder_id);
}

function verifyChannelFolderDoesNotExist(name, include_archived, channel_folder_id) {
  return getChannelFolders(name, include_archived, channel_folder_id);
}

// ---- Entity: message ----

function getMessage(message_id) {
  var url = "/messages/" + message_id;
  var description = "Fetch message " + message_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function updateMessage(message_id) {
  var url = "/messages/" + message_id;
  var description = "Edit message " + message_id + " with topic {topic} and content {content}";
  var body = {
    "topic": topic,
    "propagate_mode": propagate_mode,
    "send_notification_to_old_thread": send_notification_to_old_thread,
    "send_notification_to_new_thread": send_notification_to_new_thread,
    "content": content,
    "prev_content_sha256": prev_content_sha256,
    "stream_id": stream_id,
  };
  return getSvc().patch(url, body, { description: description });
}

function deleteMessage(message_id) {
  var url = "/messages/" + message_id;
  var description = "Delete message " + message_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function verifyMessageExists(message_id) {
  return getMessage(message_id);
}

function verifyMessageDoesNotExist(message_id) {
  return getMessage(message_id);
}

function tryToDeleteANonExistingMessage(message_id) {
  return deleteMessage(message_id);
}

// ---- Entity: message reaction ----

function addReaction(message_id, emoji_name) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Add reaction " + emoji_name + " to message " + message_id;
  var body = {
    "emoji_name": emoji_name,
    "emoji_code": emoji_code,
    "reaction_type": reaction_type,
  };
  return getSvc().post(url, body, { description: description });
}

function removeReaction(message_id, emoji_name) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Remove reaction " + emoji_name + " from message " + message_id;
  var body = {
    "emoji_name": emoji_name,
    "emoji_code": emoji_code,
    "reaction_type": reaction_type,
  };
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingMessageReaction(message_id, emoji_name) {
  return addReaction(message_id, emoji_name);
}

function tryToDeleteANonExistingMessageReaction(message_id, emoji_name) {
  return removeReaction(message_id, emoji_name);
}

// ---- Entity: message flag ----

function updateMessageFlags(messages, op, flag) {
  var url = "/messages/flags";
  var description = "Update message flags with operation " + op + " and flag " + flag + " on messages " + messages;
  var body = {
    "messages": messages,
    "op": op,
    "flag": flag,
  };
  return getSvc().post(url, body, { description: description });
}

// ---- Entity: message flag narrow ----

function updateMessageFlagsForNarrow(anchor, num_before, num_after, narrow, op, flag) {
  var url = "/messages/flags/narrow";
  var description = "Update message flags for narrow with operation " + op + " and flag " + flag + " anchored at " + anchor;
  var body = {
    "anchor": anchor,
    "include_anchor": include_anchor,
    "num_before": num_before,
    "num_after": num_after,
    "narrow": narrow,
    "op": op,
    "flag": flag,
  };
  return getSvc().post(url, body, { description: description });
}

// ---- Entity: message report ----

function reportMessage(message_id, report_type) {
  var url = "/messages/" + message_id + "/report";
  var description = "Report message " + message_id + " with type " + report_type;
  var body = {
    "report_type": report_type,
    "description": description,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingMessageReport(message_id, report_type) {
  return reportMessage(message_id, report_type);
}

// ---- Entity: message history ----

function getMessageHistory(message_id) {
  var url = "/messages/" + message_id + "/history";
  var description = "Get edit history for message " + message_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function verifyMessageHistoryExists(message_id) {
  return getMessageHistory(message_id);
}

function verifyMessageHistoryDoesNotExist(message_id) {
  return getMessageHistory(message_id);
}

// ---- Entity: message read receipt ----

function getReadReceipts(message_id) {
  var url = "/messages/" + message_id + "/read_receipts";
  var description = "Get read receipts for message " + message_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function verifyMessageReadReceiptExists(message_id) {
  return getReadReceipts(message_id);
}

function verifyMessageReadReceiptDoesNotExist(message_id) {
  return getReadReceipts(message_id);
}

// ---- Entity: message match narrow ----

function checkMessagesMatchNarrow(msg_ids, narrow) {
  var url = "/messages/matches_narrow";
  var description = "Check if messages " + msg_ids + " match narrow";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function verifyMessageMatchNarrowExists(msg_ids, narrow) {
  return checkMessagesMatchNarrow(msg_ids, narrow);
}

function verifyMessageMatchNarrowDoesNotExist(msg_ids, narrow) {
  return checkMessagesMatchNarrow(msg_ids, narrow);
}

// ---- Entity: message ----

function sendMessage(type, to, content) {
  var url = "/messages";
  var description = "Send message of type " + type + " to " + to + " with content";
  var body = {
    "type": type,
    "to": to,
    "content": content,
    "topic": topic,
    "queue_id": queue_id,
    "local_id": local_id,
    "read_by_sender": read_by_sender,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingMessageSend(type, to, content) {
  return sendMessage(type, to, content);
}

// ---- Entity: mark stream as read ----

function markStreamAsRead(stream_id) {
  var url = "/mark_stream_as_read";
  var description = "Mark all messages in stream " + stream_id + " as read";
  var body = {
    "stream_id": stream_id,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingMarkStreamAsRead(stream_id) {
  return markStreamAsRead(stream_id);
}

// ---- Entity: mark topic as read ----

function markTopicAsRead(stream_id, topic_name) {
  var url = "/mark_topic_as_read";
  var description = "Mark all messages in topic " + topic_name + " of stream " + stream_id + " as read";
  var body = {
    "stream_id": stream_id,
    "topic_name": topic_name,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingMarkTopicAsRead(stream_id, topic_name) {
  return markTopicAsRead(stream_id, topic_name);
}

// ---- Entity: mark all as read ----

function markAllAsRead() {
  var url = "/mark_all_as_read";
  var description = "Mark all messages as read";
  var body = undefined;
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingMarkAllAsRead() {
  return markAllAsRead();
}

// ---- Entity: message render ----

function renderMessage(content) {
  var url = "/messages/render";
  var description = "Render message content";
  var body = {
    "content": content,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingMessageRender(content) {
  return renderMessage(content);
}

// ---- Entity: user upload ----

function uploadFile(filename) {
  var url = "/user_uploads";
  var description = "Upload file " + filename;
  var body = {
    "filename": filename,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingUserUpload(filename) {
  return uploadFile(filename);
}

// ---- Entity: user upload file ----

function getFileTemporaryUrl(realm_id_str, filename) {
  var url = "/user_uploads/" + realm_id_str + "/" + filename;
  var description = "Get temporary URL for uploaded file " + filename + " in realm " + realm_id_str;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function verifyUserUploadFileExists(realm_id_str, filename) {
  return getFileTemporaryUrl(realm_id_str, filename);
}

function verifyUserUploadFileDoesNotExist(realm_id_str, filename) {
  return getFileTemporaryUrl(realm_id_str, filename);
}

// ---- Entity: emoji ----

function uploadCustomEmoji(emoji_name) {
  var url = "/realm/emoji/" + emoji_name;
  var description = "Upload custom emoji " + emoji_name + " with filename {filename}";
  var body = {
    "filename": filename,
  };
  return getSvc().post(url, body, { description: description });
}

function deactivateCustomEmoji(emoji_name) {
  var url = "/realm/emoji/" + emoji_name;
  var description = "Deactivate custom emoji " + emoji_name;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function getCustomEmoji(emoji_name) {
  var url = "/realm/emoji";
  var description = "Get all custom emoji";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function tryToAddExistingEmoji(emoji_name) {
  return uploadCustomEmoji(emoji_name);
}

function verifyEmojiExists(emoji_name) {
  return getCustomEmoji(emoji_name);
}

function verifyEmojiDoesNotExist(emoji_name) {
  return getCustomEmoji(emoji_name);
}

function tryToDeleteANonExistingEmoji(emoji_name) {
  return deactivateCustomEmoji(emoji_name);
}

// ---- Entity: custom profile field ----

function createCustomProfileField() {
  var url = "/realm/profile_fields";
  var description = "Create custom profile field with field_type {field_type}";
  var body = {
    "field_type": field_type,
    "name": name,
    "hint": hint,
    "field_data": field_data,
    "display_in_profile_summary": display_in_profile_summary,
    "required": required,
    "editable_by_user": editable_by_user,
  };
  return getSvc().post(url, body, { description: description });
}

function reorderCustomProfileFields() {
  var url = "/realm/profile_fields";
  var description = "Reorder custom profile fields with order {order}";
  var body = {
    "order": order,
  };
  return getSvc().patch(url, body, { description: description });
}

function getCustomProfileFields() {
  var url = "/realm/profile_fields";
  var description = "Get all custom profile fields";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function tryToAddExistingCustomProfileField() {
  return createCustomProfileField();
}

function verifyCustomProfileFieldExists() {
  return getCustomProfileFields();
}

function verifyCustomProfileFieldDoesNotExist() {
  return getCustomProfileFields();
}

// ---- Entity: linkifier ----

function addLinkifier(filter_id) {
  var url = "/realm/filters";
  var description = "Add linkifier with pattern {pattern} and url_template {url_template}";
  var body = {
    "pattern": pattern,
    "url_template": url_template,
  };
  return getSvc().post(url, body, { description: description });
}

function removeLinkifier(filter_id) {
  var url = "/realm/filters/" + filter_id;
  var description = "Remove linkifier with id " + filter_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function updateLinkifier(filter_id) {
  var url = "/realm/filters/" + filter_id;
  var description = "Update linkifier " + filter_id + " with pattern {pattern} and url_template {url_template}";
  var body = {
    "pattern": pattern,
    "url_template": url_template,
  };
  return getSvc().patch(url, body, { description: description });
}

function getLinkifiers(filter_id) {
  var url = "/realm/linkifiers";
  var description = "Get linkifiers";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function tryToAddExistingLinkifier(filter_id) {
  return addLinkifier(filter_id);
}

function verifyLinkifierExists(filter_id) {
  return getLinkifiers(filter_id);
}

function verifyLinkifierDoesNotExist(filter_id) {
  return getLinkifiers(filter_id);
}

function tryToDeleteANonExistingLinkifier(filter_id) {
  return removeLinkifier(filter_id);
}

// ---- Entity: code playground ----

function addCodePlayground(playground_id) {
  var url = "/realm/playgrounds";
  var description = "Add code playground {name} with language {pygments_language} and url_template {url_template}";
  var body = {
    "name": name,
    "pygments_language": pygments_language,
    "url_template": url_template,
  };
  return getSvc().post(url, body, { description: description });
}

function removeCodePlayground(playground_id) {
  var url = "/realm/playgrounds/" + playground_id;
  var description = "Remove code playground with id " + playground_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingCodePlayground(playground_id) {
  return addCodePlayground(playground_id);
}

function tryToDeleteANonExistingCodePlayground(playground_id) {
  return removeCodePlayground(playground_id);
}

// ---- Entity: realm user settings defaults ----

function updateRealmUserSettingsDefaults() {
  var url = "/realm/user_settings_defaults";
  var description = "Update realm user settings defaults";
  var body = {
    "starred_message_counts": starred_message_counts,
    "receives_typing_notifications": receives_typing_notifications,
    "web_suggest_update_timezone": web_suggest_update_timezone,
    "fluid_layout_width": fluid_layout_width,
    "high_contrast_mode": high_contrast_mode,
    "web_mark_read_on_scroll_policy": web_mark_read_on_scroll_policy,
    "web_channel_default_view": web_channel_default_view,
    "web_font_size_px": web_font_size_px,
    "web_line_height_percent": web_line_height_percent,
    "color_scheme": color_scheme,
    "enable_drafts_synchronization": enable_drafts_synchronization,
    "translate_emoticons": translate_emoticons,
    "display_emoji_reaction_users": display_emoji_reaction_users,
    "web_escape_navigates_to_home_view": web_escape_navigates_to_home_view,
    "left_side_userlist": left_side_userlist,
    "demote_inactive_streams": demote_inactive_streams,
    "user_list_style": user_list_style,
    "web_stream_unreads_count_display_policy": web_stream_unreads_count_display_policy,
    "hide_ai_features": hide_ai_features,
    "web_left_sidebar_show_channel_folders": web_left_sidebar_show_channel_folders,
    "web_left_sidebar_unreads_count_summary": web_left_sidebar_unreads_count_summary,
    "enable_stream_desktop_notifications": enable_stream_desktop_notifications,
    "enable_stream_email_notifications": enable_stream_email_notifications,
    "enable_stream_push_notifications": enable_stream_push_notifications,
    "enable_stream_audible_notifications": enable_stream_audible_notifications,
    "enable_desktop_notifications": enable_desktop_notifications,
    "enable_sounds": enable_sounds,
    "enable_followed_topic_desktop_notifications": enable_followed_topic_desktop_notifications,
    "enable_followed_topic_email_notifications": enable_followed_topic_email_notifications,
    "enable_followed_topic_push_notifications": enable_followed_topic_push_notifications,
    "enable_followed_topic_audible_notifications": enable_followed_topic_audible_notifications,
    "email_notifications_batching_period_seconds": email_notifications_batching_period_seconds,
    "enable_offline_email_notifications": enable_offline_email_notifications,
    "enable_offline_push_notifications": enable_offline_push_notifications,
    "enable_online_push_notifications": enable_online_push_notifications,
    "enable_digest_emails": enable_digest_emails,
    "message_content_in_email_notifications": message_content_in_email_notifications,
    "pm_content_in_desktop_notifications": pm_content_in_desktop_notifications,
    "wildcard_mentions_notify": wildcard_mentions_notify,
    "enable_followed_topic_wildcard_mentions_notify": enable_followed_topic_wildcard_mentions_notify,
    "desktop_icon_count_display": desktop_icon_count_display,
    "realm_name_in_email_notifications_policy": realm_name_in_email_notifications_policy,
    "automatically_follow_topics_policy": automatically_follow_topics_policy,
    "automatically_unmute_topics_in_muted_streams_policy": automatically_unmute_topics_in_muted_streams_policy,
    "automatically_follow_topics_where_mentioned": automatically_follow_topics_where_mentioned,
    "resolved_topic_notice_auto_read_policy": resolved_topic_notice_auto_read_policy,
    "presence_enabled": presence_enabled,
    "enter_sends": enter_sends,
    "twenty_four_hour_time": twenty_four_hour_time,
    "send_private_typing_notifications": send_private_typing_notifications,
    "send_stream_typing_notifications": send_stream_typing_notifications,
    "send_read_receipts": send_read_receipts,
    "email_address_visibility": email_address_visibility,
    "web_navigate_to_sent_message": web_navigate_to_sent_message,
  };
  return getSvc().patch(url, body, { description: description });
}

// ---- Entity: realm export ----

function getRealmExports() {
  var url = "/export/realm";
  var description = "Get all data exports";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function exportRealm() {
  var url = "/export/realm";
  var description = "Create data export with export_type {export_type}";
  var body = {
    "export_type": export_type,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingRealmExport() {
  return exportRealm();
}

function verifyRealmExportExists() {
  return getRealmExports();
}

function verifyRealmExportDoesNotExist() {
  return getRealmExports();
}

// ---- Entity: welcome bot custom message ----

function testWelcomeBotCustomMessage() {
  var url = "/realm/test_welcome_bot_custom_message";
  var description = "Test welcome bot custom message with text {welcome_message_custom_text}";
  var body = {
    "welcome_message_custom_text": welcome_message_custom_text,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingWelcomeBotCustomMessage() {
  return testWelcomeBotCustomMessage();
}

// ---- Entity: invite ----

function getInvites(invite_id) {
  var url = "/invites";
  var description = "Get all invitations";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function sendInvites(invite_id) {
  var url = "/invites";
  var description = "Send invitations to {invitee_emails}";
  var body = {
    "invitee_emails": invitee_emails,
    "stream_ids": stream_ids,
  };
  return getSvc().post(url, body, { description: description });
}

function revokeEmailInvite(invite_id) {
  var url = "/invites/" + invite_id;
  var description = "Revoke email invitation with id " + invite_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function otherInvite(invite_id) {
  var url = "";
  var description = "";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function tryToAddExistingInvite(invite_id) {
  return sendInvites(invite_id);
}

function verifyInviteExists(invite_id) {
  return getInvites(invite_id);
}

function verifyInviteDoesNotExist(invite_id) {
  return getInvites(invite_id);
}

function tryToDeleteANonExistingInvite(invite_id) {
  return revokeEmailInvite(invite_id);
}

// ---- Entity: invite link ----

function createInviteLink(invite_id) {
  var url = "/invites/multiuse";
  var description = "Create a reusable invitation link";
  var body = undefined;
  return getSvc().post(url, body, { description: description });
}

function revokeInviteLink(invite_id) {
  var url = "/invites/multiuse/" + invite_id;
  var description = "Revoke reusable invitation link with id " + invite_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingInviteLink(invite_id) {
  return createInviteLink(invite_id);
}

function tryToDeleteANonExistingInviteLink(invite_id) {
  return revokeInviteLink(invite_id);
}

// ---- Entity: event queue ----

function getEvents(queue_id, last_event_id, dont_block) {
  var url = "/events";
  var description = "Get events from event queue " + queue_id + " since last_event_id " + last_event_id;
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function deleteQueue(queue_id, last_event_id, dont_block) {
  var url = "/events";
  var description = "Delete event queue " + queue_id;
  var body = {
    "queue_id": queue_id,
  };
  return getSvc().delete(url, { description: description });
}

function verifyEventQueueExists(queue_id, last_event_id, dont_block) {
  return getEvents(queue_id, last_event_id, dont_block);
}

function verifyEventQueueDoesNotExist(queue_id, last_event_id, dont_block) {
  return getEvents(queue_id, last_event_id, dont_block);
}

function tryToDeleteANonExistingEventQueue(queue_id, last_event_id, dont_block) {
  return deleteQueue(queue_id, last_event_id, dont_block);
}

// ---- Entity: register queue ----

function registerQueue() {
  var url = "/register";
  var description = "Register an event queue with apply_markdown {apply_markdown}, client_gravatar {client_gravatar}, include_subscribers {include_subscribers}, slim_presence {slim_presence}, presence_history_limit_days {presence_history_limit_days}, event_types {event_types}, all_public_streams {all_public_streams}, client_capabilities {client_capabilities}, fetch_event_types {fetch_event_types}, narrow {narrow}";
  var body = {
    "apply_markdown": apply_markdown,
    "client_gravatar": client_gravatar,
    "include_subscribers": include_subscribers,
    "slim_presence": slim_presence,
    "presence_history_limit_days": presence_history_limit_days,
    "event_types": event_types,
    "all_public_streams": all_public_streams,
    "client_capabilities": client_capabilities,
    "fetch_event_types": fetch_event_types,
    "narrow": narrow,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingRegisterQueue() {
  return registerQueue();
}

// ---- Entity: real time ----

function postRealTime() {
  var url = "/real-time";
  var description = "Post real-time event subscription with event_types {event_types}, narrow {narrow}, all_public_streams {all_public_streams}";
  var body = {
    "event_types": event_types,
    "narrow": narrow,
    "all_public_streams": all_public_streams,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingRealTime() {
  return postRealTime();
}

// ---- Entity: draft ----

function createDrafts(draft_id) {
  var url = "/drafts";
  var description = "Create drafts";
  var body = {
    "drafts": "[{type}, {to}, {topic}, {content}, {timestamp}]",
  };
  return getSvc().post(url, body, { description: description });
}

function getDrafts(draft_id) {
  var url = "/drafts";
  var description = "Get drafts";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function editDraft(draft_id) {
  var url = "/drafts/" + draft_id;
  var description = "Edit draft " + draft_id;
  var body = {
    "draft": type, to, topic, content, timestamp,
  };
  return getSvc().patch(url, body, { description: description });
}

function deleteDraft(draft_id) {
  var url = "/drafts/" + draft_id;
  var description = "Delete draft " + draft_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingDraft(draft_id) {
  return createDrafts(draft_id);
}

function verifyDraftExists(draft_id) {
  return getDrafts(draft_id);
}

function verifyDraftDoesNotExist(draft_id) {
  return getDrafts(draft_id);
}

function tryToDeleteANonExistingDraft(draft_id) {
  return deleteDraft(draft_id);
}

// ---- Entity: saved snippet ----

function createSavedSnippet(saved_snippet_id) {
  var url = "/saved_snippets";
  var description = "Create saved snippet {title}";
  var body = {
    "title": title,
    "content": content,
  };
  return getSvc().post(url, body, { description: description });
}

function getSavedSnippets(saved_snippet_id) {
  var url = "/saved_snippets";
  var description = "Get all saved snippets";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function editSavedSnippet(saved_snippet_id) {
  var url = "/saved_snippets/" + saved_snippet_id;
  var description = "Edit saved snippet " + saved_snippet_id + " with title {title}";
  var body = {
    "title": title,
    "content": content,
  };
  return getSvc().patch(url, body, { description: description });
}

function deleteSavedSnippet(saved_snippet_id) {
  var url = "/saved_snippets/" + saved_snippet_id;
  var description = "Delete saved snippet " + saved_snippet_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingSavedSnippet(saved_snippet_id) {
  return createSavedSnippet(saved_snippet_id);
}

function verifySavedSnippetExists(saved_snippet_id) {
  return getSavedSnippets(saved_snippet_id);
}

function verifySavedSnippetDoesNotExist(saved_snippet_id) {
  return getSavedSnippets(saved_snippet_id);
}

function tryToDeleteANonExistingSavedSnippet(saved_snippet_id) {
  return deleteSavedSnippet(saved_snippet_id);
}

// ---- Entity: mobile push test notification ----

function sendTestNotification(token) {
  var url = "/mobile_push/test_notification";
  var description = "Send a test notification to mobile device with token " + token;
  var body = {
    "token": token,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingMobilePushTestNotification(token) {
  return sendTestNotification(token);
}

// ---- Entity: mobile push e2ee test notification ----

function sendE2EETestNotification(push_account_id) {
  var url = "/mobile_push/e2ee/test_notification";
  var description = "Send an E2EE test notification to mobile device with push_account_id " + push_account_id;
  var body = {
    "push_account_id": push_account_id,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingMobilePushE2EETestNotification(push_account_id) {
  return sendE2EETestNotification(push_account_id);
}

// ---- Entity: push device registration ----

function registerPushDevice(token_kind, push_account_id, push_public_key, bouncer_public_key, encrypted_push_registration) {
  var url = "/mobile_push/register";
  var description = "Register push device with push_account_id " + push_account_id + " and token_kind " + token_kind;
  var body = {
    "token_kind": token_kind,
    "push_account_id": push_account_id,
    "push_public_key": push_public_key,
    "bouncer_public_key": bouncer_public_key,
    "encrypted_push_registration": encrypted_push_registration,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingPushDeviceRegistration(token_kind, push_account_id, push_public_key, bouncer_public_key, encrypted_push_registration) {
  return registerPushDevice(token_kind, push_account_id, push_public_key, bouncer_public_key, encrypted_push_registration);
}

// ---- Entity: remote push device registration ----

function registerRemotePushDevice(realm_uuid, push_account_id, encrypted_push_registration, bouncer_public_key) {
  var url = "/remotes/push/e2ee/register";
  var description = "Register remote push device with push_account_id " + push_account_id + " in realm " + realm_uuid;
  var body = {
    "realm_uuid": realm_uuid,
    "push_account_id": push_account_id,
    "encrypted_push_registration": encrypted_push_registration,
    "bouncer_public_key": bouncer_public_key,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingRemotePushDeviceRegistration(realm_uuid, push_account_id, encrypted_push_registration, bouncer_public_key) {
  return registerRemotePushDevice(realm_uuid, push_account_id, encrypted_push_registration, bouncer_public_key);
}

// ---- Entity: api key ----

function fetchApiKey(username, password) {
  var url = "/fetch_api_key";
  var description = "Fetch an API key for user " + username;
  var body = {
    "username": username,
    "password": password,
  };
  return getSvc().post(url, body, { description: description });
}

function devFetchApiKey(username, password) {
  var url = "/dev_fetch_api_key";
  var description = "Fetch a development API key for user " + username;
  var body = {
    "username": username,
  };
  return getSvc().post(url, body, { description: description });
}

function tryToAddExistingApiKey(username, password) {
  return fetchApiKey(username, password);
}

// ---- Entity: navigation view ----

function addNavigationView(fragment) {
  var url = "/navigation_views";
  var description = "Add a navigation view";
  var body = undefined;
  return getSvc().post(url, body, { description: description });
}

function getNavigationViews(fragment) {
  var url = "/navigation_views";
  var description = "Get all navigation views";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function editNavigationView(fragment) {
  var url = "/navigation_views/" + fragment;
  var description = "Update the navigation view " + fragment;
  var body = {
    "is_pinned": is_pinned,
    "name": name,
  };
  return getSvc().patch(url, body, { description: description });
}

function removeNavigationView(fragment) {
  var url = "/navigation_views/" + fragment;
  var description = "Remove the navigation view " + fragment;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingNavigationView(fragment) {
  return addNavigationView(fragment);
}

function verifyNavigationViewExists(fragment) {
  return getNavigationViews(fragment);
}

function verifyNavigationViewDoesNotExist(fragment) {
  return getNavigationViews(fragment);
}

function tryToDeleteANonExistingNavigationView(fragment) {
  return removeNavigationView(fragment);
}

// ---- Entity: reminder ----

function createReminder(message_id, scheduled_delivery_timestamp, note, reminder_id) {
  var url = "/reminders";
  var description = "Create a reminder with message_id " + message_id + " scheduled_delivery_timestamp " + scheduled_delivery_timestamp + " and note " + note;
  var body = {
    "message_id": message_id,
    "scheduled_delivery_timestamp": scheduled_delivery_timestamp,
    "note": note,
  };
  return getSvc().post(url, body, { description: description });
}

function getReminders(message_id, scheduled_delivery_timestamp, note, reminder_id) {
  var url = "/reminders";
  var description = "Get reminders";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function deleteReminder(message_id, scheduled_delivery_timestamp, note, reminder_id) {
  var url = "/reminders/" + reminder_id;
  var description = "Delete reminder with id " + reminder_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingReminder(message_id, scheduled_delivery_timestamp, note, reminder_id) {
  return createReminder(message_id, scheduled_delivery_timestamp, note, reminder_id);
}

function verifyReminderExists(message_id, scheduled_delivery_timestamp, note, reminder_id) {
  return getReminders(message_id, scheduled_delivery_timestamp, note, reminder_id);
}

function verifyReminderDoesNotExist(message_id, scheduled_delivery_timestamp, note, reminder_id) {
  return getReminders(message_id, scheduled_delivery_timestamp, note, reminder_id);
}

function tryToDeleteANonExistingReminder(message_id, scheduled_delivery_timestamp, note, reminder_id) {
  return deleteReminder(message_id, scheduled_delivery_timestamp, note, reminder_id);
}

// ---- Entity: scheduled message ----

function createScheduledMessage(scheduled_message_id) {
  var url = "/scheduled_messages";
  var description = "Create scheduled message of type {type} to {to} scheduled at {scheduled_delivery_timestamp}";
  var body = {
    "type": type,
    "to": to,
    "content": content,
    "scheduled_delivery_timestamp": scheduled_delivery_timestamp,
  };
  return getSvc().post(url, body, { description: description });
}

function getScheduledMessages(scheduled_message_id) {
  var url = "/scheduled_messages";
  var description = "Get scheduled messages";
  var body = undefined;
  return getSvc().get(url, { description: description });
}

function updateScheduledMessage(scheduled_message_id) {
  var url = "/scheduled_messages/" + scheduled_message_id;
  var description = "Update scheduled message " + scheduled_message_id;
  var body = {
    "type": type,
    "to": to,
    "content": content,
    "topic": topic,
    "scheduled_delivery_timestamp": scheduled_delivery_timestamp,
  };
  return getSvc().patch(url, body, { description: description });
}

function deleteScheduledMessage(scheduled_message_id) {
  var url = "/scheduled_messages/" + scheduled_message_id;
  var description = "Delete scheduled message " + scheduled_message_id;
  var body = undefined;
  return getSvc().delete(url, { description: description });
}

function tryToAddExistingScheduledMessage(scheduled_message_id) {
  return createScheduledMessage(scheduled_message_id);
}

function verifyScheduledMessageExists(scheduled_message_id) {
  return getScheduledMessages(scheduled_message_id);
}

function verifyScheduledMessageDoesNotExist(scheduled_message_id) {
  return getScheduledMessages(scheduled_message_id);
}

function tryToDeleteANonExistingScheduledMessage(scheduled_message_id) {
  return deleteScheduledMessage(scheduled_message_id);
}
