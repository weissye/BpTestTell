/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_call(id) {
  try { tryToDeleteANonExistingCall(id); } catch (_e) {}
  addCall(id);
  verifyCallExists(id);
  tryToAddExistingCall(id);
  deleteCall(id);
  verifyCallDoesNotExist(id);
}

function lifecycle_channel_folder(channel_folder_id) {
  try { tryToDeleteANonExistingChannel_folder(channel_folder_id); } catch (_e) {}
  addChannel_folder(channel_folder_id);
  verifyChannel_folderExists(channel_folder_id);
  tryToAddExistingChannel_folder(channel_folder_id);
  deleteChannel_folder(channel_folder_id);
  verifyChannel_folderDoesNotExist(channel_folder_id);
}

function lifecycle_channel(id) {
  try { tryToDeleteANonExistingChannel(id); } catch (_e) {}
  addChannel(id);
  verifyChannelExists(id);
  tryToAddExistingChannel(id);
  deleteChannel(id);
  verifyChannelDoesNotExist(id);
}

function lifecycle_default_stream(id) {
  try { tryToDeleteANonExistingDefault_stream(id); } catch (_e) {}
  addDefault_stream(id);
  verifyDefault_streamExists(id);
  tryToAddExistingDefault_stream(id);
  deleteDefault_stream(id);
  verifyDefault_streamDoesNotExist(id);
}

function lifecycle_dev_fetch_api_key(id) {
  try { tryToDeleteANonExistingDev_fetch_api_key(id); } catch (_e) {}
  addDev_fetch_api_key(id);
  verifyDev_fetch_api_keyExists(id);
  tryToAddExistingDev_fetch_api_key(id);
  deleteDev_fetch_api_key(id);
  verifyDev_fetch_api_keyDoesNotExist(id);
}

function lifecycle_draft(id) {
  try { tryToDeleteANonExistingDraft(id); } catch (_e) {}
  addDraft(id);
  verifyDraftExists(id);
  tryToAddExistingDraft(id);
  deleteDraft(id);
  verifyDraftDoesNotExist(id);
}

function lifecycle_event(id) {
  try { tryToDeleteANonExistingEvent(id); } catch (_e) {}
  addEvent(id);
  verifyEventExists(id);
  tryToAddExistingEvent(id);
  deleteEvent(id);
  verifyEventDoesNotExist(id);
}

function lifecycle_export(id) {
  try { tryToDeleteANonExistingExport(id); } catch (_e) {}
  addExport(id);
  verifyExportExists(id);
  tryToAddExistingExport(id);
  deleteExport(id);
  verifyExportDoesNotExist(id);
}

function lifecycle_fetch_api_key(id) {
  try { tryToDeleteANonExistingFetch_api_key(id); } catch (_e) {}
  addFetch_api_key(id);
  verifyFetch_api_keyExists(id);
  tryToAddExistingFetch_api_key(id);
  deleteFetch_api_key(id);
  verifyFetch_api_keyDoesNotExist(id);
}

function lifecycle_get_stream_id(id) {
  try { tryToDeleteANonExistingGet_stream_id(id); } catch (_e) {}
  addGet_stream_id(id);
  verifyGet_stream_idExists(id);
  tryToAddExistingGet_stream_id(id);
  deleteGet_stream_id(id);
  verifyGet_stream_idDoesNotExist(id);
}

function lifecycle_invite(invite_id) {
  try { tryToDeleteANonExistingInvite(invite_id); } catch (_e) {}
  addInvite(invite_id);
  verifyInviteExists(invite_id);
  tryToAddExistingInvite(invite_id);
  deleteInvite(invite_id);
  verifyInviteDoesNotExist(invite_id);
}

function lifecycle_mark_all_as_read(id) {
  try { tryToDeleteANonExistingMark_all_as_read(id); } catch (_e) {}
  addMark_all_as_read(id);
  verifyMark_all_as_readExists(id);
  tryToAddExistingMark_all_as_read(id);
  deleteMark_all_as_read(id);
  verifyMark_all_as_readDoesNotExist(id);
}

function lifecycle_mark_stream_as_read(id) {
  try { tryToDeleteANonExistingMark_stream_as_read(id); } catch (_e) {}
  addMark_stream_as_read(id);
  verifyMark_stream_as_readExists(id);
  tryToAddExistingMark_stream_as_read(id);
  deleteMark_stream_as_read(id);
  verifyMark_stream_as_readDoesNotExist(id);
}

function lifecycle_mark_topic_as_read(id) {
  try { tryToDeleteANonExistingMark_topic_as_read(id); } catch (_e) {}
  addMark_topic_as_read(id);
  verifyMark_topic_as_readExists(id);
  tryToAddExistingMark_topic_as_read(id);
  deleteMark_topic_as_read(id);
  verifyMark_topic_as_readDoesNotExist(id);
}

function lifecycle_message(message_id) {
  try { tryToDeleteANonExistingMessage(message_id); } catch (_e) {}
  addMessage(message_id);
  verifyMessageExists(message_id);
  tryToAddExistingMessage(message_id);
  deleteMessage(message_id);
  verifyMessageDoesNotExist(message_id);
}

function lifecycle_mobile_push(id) {
  try { tryToDeleteANonExistingMobile_push(id); } catch (_e) {}
  addMobile_push(id);
  verifyMobile_pushExists(id);
  tryToAddExistingMobile_push(id);
  deleteMobile_push(id);
  verifyMobile_pushDoesNotExist(id);
}

function lifecycle_navigation_view(fragment) {
  try { tryToDeleteANonExistingNavigation_view(fragment); } catch (_e) {}
  addNavigation_view(fragment);
  verifyNavigation_viewExists(fragment);
  tryToAddExistingNavigation_view(fragment);
  deleteNavigation_view(fragment);
  verifyNavigation_viewDoesNotExist(fragment);
}

function lifecycle_real_time(id) {
  try { tryToDeleteANonExistingReal_time(id); } catch (_e) {}
  addReal_time(id);
  verifyReal_timeExists(id);
  tryToAddExistingReal_time(id);
  deleteReal_time(id);
  verifyReal_timeDoesNotExist(id);
}

function lifecycle_realm(id) {
  try { tryToDeleteANonExistingRealm(id); } catch (_e) {}
  addRealm(id);
  verifyRealmExists(id);
  tryToAddExistingRealm(id);
  deleteRealm(id);
  verifyRealmDoesNotExist(id);
}

function lifecycle_register(id) {
  try { tryToDeleteANonExistingRegister(id); } catch (_e) {}
  addRegister(id);
  verifyRegisterExists(id);
  tryToAddExistingRegister(id);
  deleteRegister(id);
  verifyRegisterDoesNotExist(id);
}

function lifecycle_reminder(reminder_id) {
  try { tryToDeleteANonExistingReminder(reminder_id); } catch (_e) {}
  addReminder(reminder_id);
  verifyReminderExists(reminder_id);
  tryToAddExistingReminder(reminder_id);
  deleteReminder(reminder_id);
  verifyReminderDoesNotExist(reminder_id);
}

function lifecycle_remote(id) {
  try { tryToDeleteANonExistingRemote(id); } catch (_e) {}
  addRemote(id);
  verifyRemoteExists(id);
  tryToAddExistingRemote(id);
  deleteRemote(id);
  verifyRemoteDoesNotExist(id);
}

function lifecycle_rest_error_handling(id) {
  try { tryToDeleteANonExistingRest_error_handling(id); } catch (_e) {}
  addRest_error_handling(id);
  verifyRest_error_handlingExists(id);
  tryToAddExistingRest_error_handling(id);
  deleteRest_error_handling(id);
  verifyRest_error_handlingDoesNotExist(id);
}

function lifecycle_saved_snippet(id) {
  try { tryToDeleteANonExistingSaved_snippet(id); } catch (_e) {}
  addSaved_snippet(id);
  verifySaved_snippetExists(id);
  tryToAddExistingSaved_snippet(id);
  deleteSaved_snippet(id);
  verifySaved_snippetDoesNotExist(id);
}

function lifecycle_scheduled_message(scheduled_message_id) {
  try { tryToDeleteANonExistingScheduled_message(scheduled_message_id); } catch (_e) {}
  addScheduled_message(scheduled_message_id);
  verifyScheduled_messageExists(scheduled_message_id);
  tryToAddExistingScheduled_message(scheduled_message_id);
  deleteScheduled_message(scheduled_message_id);
  verifyScheduled_messageDoesNotExist(scheduled_message_id);
}

function lifecycle_server_setting(id) {
  try { tryToDeleteANonExistingServer_setting(id); } catch (_e) {}
  addServer_setting(id);
  verifyServer_settingExists(id);
  tryToAddExistingServer_setting(id);
  deleteServer_setting(id);
  verifyServer_settingDoesNotExist(id);
}

function lifecycle_stream(stream_id) {
  try { tryToDeleteANonExistingStream(stream_id); } catch (_e) {}
  addStream(stream_id);
  verifyStreamExists(stream_id);
  tryToAddExistingStream(stream_id);
  deleteStream(stream_id);
  verifyStreamDoesNotExist(stream_id);
}

function lifecycle_user_group(user_group_id) {
  try { tryToDeleteANonExistingUser_group(user_group_id); } catch (_e) {}
  addUser_group(user_group_id);
  verifyUser_groupExists(user_group_id);
  tryToAddExistingUser_group(user_group_id);
  deleteUser_group(user_group_id);
  verifyUser_groupDoesNotExist(user_group_id);
}

function lifecycle_user_topic(id) {
  try { tryToDeleteANonExistingUser_topic(id); } catch (_e) {}
  addUser_topic(id);
  verifyUser_topicExists(id);
  tryToAddExistingUser_topic(id);
  deleteUser_topic(id);
  verifyUser_topicDoesNotExist(id);
}

function lifecycle_user_upload(realm_id_str, filename) {
  try { tryToDeleteANonExistingUser_upload(realm_id_str, filename); } catch (_e) {}
  addUser_upload(realm_id_str, filename);
  verifyUser_uploadExists(realm_id_str, filename);
  tryToAddExistingUser_upload(realm_id_str, filename);
  deleteUser_upload(realm_id_str, filename);
  verifyUser_uploadDoesNotExist(realm_id_str, filename);
}

function lifecycle_user(user_id, stream_id, email) {
  try { tryToDeleteANonExistingUser(user_id, stream_id, email); } catch (_e) {}
  addUser(user_id, stream_id, email);
  verifyUserExists(user_id, stream_id, email);
  tryToAddExistingUser(user_id, stream_id, email);
  deleteUser(user_id, stream_id, email);
  verifyUserDoesNotExist(user_id, stream_id, email);
}

function lifecycle_zulip_outgoing_webhook(id) {
  try { tryToDeleteANonExistingZulip_outgoing_webhook(id); } catch (_e) {}
  addZulip_outgoing_webhook(id);
  verifyZulip_outgoing_webhookExists(id);
  tryToAddExistingZulip_outgoing_webhook(id);
  deleteZulip_outgoing_webhook(id);
  verifyZulip_outgoing_webhookDoesNotExist(id);
}
