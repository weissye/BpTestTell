// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// --- pick() shim: prefer BPjs nondet, else random fallback ---
if (typeof pick === 'undefined') {
  function pick(options) {
    if (typeof bp !== 'undefined' && typeof bp.pickFrom === 'function') {
      return bp.pickFrom(options); // nondeterministic exploration
    }
    // fallback for plain JS execution
    return options[Math.floor(Math.random() * options.length)];
  }
}

// ===== ACTIVE LIFECYCLES =====


bthread("AlertwordLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAlertword(x.id);
  updateAlertword(x.id);
  updateAlertword(x.id);
  verifyAlertwordExists(x.id);
  verifyAlertwordUpdated(x.id);
  deleteAlertword(x.id);
});

bthread("AndroidgcmregidLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAndroidgcmregid(x.id);
  updateAndroidgcmregid(x.id);
  updateAndroidgcmregid(x.id);
  verifyAndroidgcmregidExists(x.id);
  verifyAndroidgcmregidUpdated(x.id);
  deleteAndroidgcmregid(x.id);
});

bthread("ApnsdevicetokenLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApnsdevicetoken(x.id);
  updateApnsdevicetoken(x.id);
  updateApnsdevicetoken(x.id);
  verifyApnsdevicetokenExists(x.id);
  verifyApnsdevicetokenUpdated(x.id);
  deleteApnsdevicetoken(x.id);
});

bthread("AttachmentLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttachment(x.id);
  updateAttachment(x.id);
  updateAttachment(x.id);
  verifyAttachmentExists(x.id);
  verifyAttachmentUpdated(x.id);
  deleteAttachment(x.id);
});

bthread("BigbluebuttonLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBigbluebutton(x.id);
  updateBigbluebutton(x.id);
  updateBigbluebutton(x.id);
  verifyBigbluebuttonExists(x.id);
  verifyBigbluebuttonUpdated(x.id);
  deleteBigbluebutton(x.id);
});

bthread("CallLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCall(x.id);
  updateCall(x.id);
  updateCall(x.id);
  verifyCallExists(x.id);
  verifyCallUpdated(x.id);
  deleteCall(x.id);
});

bthread("ChannelLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChannel(x.id);
  updateChannel(x.id);
  updateChannel(x.id);
  verifyChannelExists(x.id);
  verifyChannelUpdated(x.id);
  deleteChannel(x.id);
});

bthread("ChannelfolderLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChannelfolder(x.id);
  updateChannelfolder(x.id);
  updateChannelfolder(x.id);
  verifyChannelfolderExists(x.id);
  verifyChannelfolderUpdated(x.id);
  deleteChannelfolder(x.id);
});

bthread("ConsentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConsent(x.id);
  updateConsent(x.id);
  updateConsent(x.id);
  verifyConsentExists(x.id);
  verifyConsentUpdated(x.id);
  deleteConsent(x.id);
});

bthread("CreateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCreate(x.id);
  updateCreate(x.id);
  updateCreate(x.id);
  verifyCreateExists(x.id);
  verifyCreateUpdated(x.id);
  deleteCreate(x.id);
});

bthread("DeactivateLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeactivate(x.id);
  updateDeactivate(x.id);
  updateDeactivate(x.id);
  verifyDeactivateExists(x.id);
  verifyDeactivateUpdated(x.id);
  deleteDeactivate(x.id);
});

bthread("DefaultstreamLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultstream(x.id);
  updateDefaultstream(x.id);
  updateDefaultstream(x.id);
  verifyDefaultstreamExists(x.id);
  verifyDefaultstreamUpdated(x.id);
  deleteDefaultstream(x.id);
});

bthread("DeletetopicLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeletetopic(x.id);
  updateDeletetopic(x.id);
  updateDeletetopic(x.id);
  verifyDeletetopicExists(x.id);
  verifyDeletetopicUpdated(x.id);
  deleteDeletetopic(x.id);
});

bthread("DevfetchapikeyLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDevfetchapikey(x.id);
  updateDevfetchapikey(x.id);
  updateDevfetchapikey(x.id);
  verifyDevfetchapikeyExists(x.id);
  verifyDevfetchapikeyUpdated(x.id);
  deleteDevfetchapikey(x.id);
});

bthread("DraftLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDraft(x.id);
  updateDraft(x.id);
  updateDraft(x.id);
  verifyDraftExists(x.id);
  verifyDraftUpdated(x.id);
  deleteDraft(x.id);
});

bthread("E2eeLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addE2ee(x.id);
  updateE2ee(x.id);
  updateE2ee(x.id);
  verifyE2eeExists(x.id);
  verifyE2eeUpdated(x.id);
  deleteE2ee(x.id);
});

bthread("EmailaddresLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEmailaddres(x.id);
  updateEmailaddres(x.id);
  updateEmailaddres(x.id);
  verifyEmailaddresExists(x.id);
  verifyEmailaddresUpdated(x.id);
  deleteEmailaddres(x.id);
});

bthread("EmojiLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEmoji(x.id);
  updateEmoji(x.id);
  updateEmoji(x.id);
  verifyEmojiExists(x.id);
  verifyEmojiUpdated(x.id);
  deleteEmoji(x.id);
});

bthread("EventLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEvent(x.id);
  updateEvent(x.id);
  updateEvent(x.id);
  verifyEventExists(x.id);
  verifyEventUpdated(x.id);
  deleteEvent(x.id);
});

bthread("ExportLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExport(x.id);
  updateExport(x.id);
  updateExport(x.id);
  verifyExportExists(x.id);
  verifyExportUpdated(x.id);
  deleteExport(x.id);
});

bthread("FetchapikeyLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFetchapikey(x.id);
  updateFetchapikey(x.id);
  updateFetchapikey(x.id);
  verifyFetchapikeyExists(x.id);
  verifyFetchapikeyUpdated(x.id);
  deleteFetchapikey(x.id);
});

bthread("FilterLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFilter(x.id);
  updateFilter(x.id);
  updateFilter(x.id);
  verifyFilterExists(x.id);
  verifyFilterUpdated(x.id);
  deleteFilter(x.id);
});

bthread("FlagLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFlag(x.id);
  updateFlag(x.id);
  updateFlag(x.id);
  verifyFlagExists(x.id);
  verifyFlagUpdated(x.id);
  deleteFlag(x.id);
});

bthread("GetstreamidLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGetstreamid(x.id);
  updateGetstreamid(x.id);
  updateGetstreamid(x.id);
  verifyGetstreamidExists(x.id);
  verifyGetstreamidUpdated(x.id);
  deleteGetstreamid(x.id);
});

bthread("HistoryLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHistory(x.id);
  updateHistory(x.id);
  updateHistory(x.id);
  verifyHistoryExists(x.id);
  verifyHistoryUpdated(x.id);
  deleteHistory(x.id);
});

bthread("InviteLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInvite(x.id);
  updateInvite(x.id);
  updateInvite(x.id);
  verifyInviteExists(x.id);
  verifyInviteUpdated(x.id);
  deleteInvite(x.id);
});

bthread("LinkifierLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLinkifier(x.id);
  updateLinkifier(x.id);
  updateLinkifier(x.id);
  verifyLinkifierExists(x.id);
  verifyLinkifierUpdated(x.id);
  deleteLinkifier(x.id);
});

bthread("MarkallasreadLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarkallasread(x.id);
  updateMarkallasread(x.id);
  updateMarkallasread(x.id);
  verifyMarkallasreadExists(x.id);
  verifyMarkallasreadUpdated(x.id);
  deleteMarkallasread(x.id);
});

bthread("MarkstreamasreadLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarkstreamasread(x.id);
  updateMarkstreamasread(x.id);
  updateMarkstreamasread(x.id);
  verifyMarkstreamasreadExists(x.id);
  verifyMarkstreamasreadUpdated(x.id);
  deleteMarkstreamasread(x.id);
});

bthread("MarktopicasreadLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarktopicasread(x.id);
  updateMarktopicasread(x.id);
  updateMarktopicasread(x.id);
  verifyMarktopicasreadExists(x.id);
  verifyMarktopicasreadUpdated(x.id);
  deleteMarktopicasread(x.id);
});

bthread("MatchesnarrowLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMatchesnarrow(x.id);
  updateMatchesnarrow(x.id);
  updateMatchesnarrow(x.id);
  verifyMatchesnarrowExists(x.id);
  verifyMatchesnarrowUpdated(x.id);
  deleteMatchesnarrow(x.id);
});

bthread("MeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMe(x.id);
  updateMe(x.id);
  updateMe(x.id);
  verifyMeExists(x.id);
  verifyMeUpdated(x.id);
  deleteMe(x.id);
});

bthread("MemberLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMember(x.id);
  updateMember(x.id);
  updateMember(x.id);
  verifyMemberExists(x.id);
  verifyMemberUpdated(x.id);
  deleteMember(x.id);
});

bthread("MessageLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMessage(x.id);
  updateMessage(x.id);
  updateMessage(x.id);
  verifyMessageExists(x.id);
  verifyMessageUpdated(x.id);
  deleteMessage(x.id);
});

bthread("MobilepushLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMobilepush(x.id);
  updateMobilepush(x.id);
  updateMobilepush(x.id);
  verifyMobilepushExists(x.id);
  verifyMobilepushUpdated(x.id);
  deleteMobilepush(x.id);
});

bthread("MultiuseLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMultiuse(x.id);
  updateMultiuse(x.id);
  updateMultiuse(x.id);
  verifyMultiuseExists(x.id);
  verifyMultiuseUpdated(x.id);
  deleteMultiuse(x.id);
});

bthread("MutedtopicLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMutedtopic(x.id);
  updateMutedtopic(x.id);
  updateMutedtopic(x.id);
  verifyMutedtopicExists(x.id);
  verifyMutedtopicUpdated(x.id);
  deleteMutedtopic(x.id);
});

bthread("MuteduserLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMuteduser(x.id);
  updateMuteduser(x.id);
  updateMuteduser(x.id);
  verifyMuteduserExists(x.id);
  verifyMuteduserUpdated(x.id);
  deleteMuteduser(x.id);
});

bthread("NarrowLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNarrow(x.id);
  updateNarrow(x.id);
  updateNarrow(x.id);
  verifyNarrowExists(x.id);
  verifyNarrowUpdated(x.id);
  deleteNarrow(x.id);
});

bthread("NavigationviewLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNavigationview(x.id);
  updateNavigationview(x.id);
  updateNavigationview(x.id);
  verifyNavigationviewExists(x.id);
  verifyNavigationviewUpdated(x.id);
  deleteNavigationview(x.id);
});

bthread("PlaygroundLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPlayground(x.id);
  updatePlayground(x.id);
  updatePlayground(x.id);
  verifyPlaygroundExists(x.id);
  verifyPlaygroundUpdated(x.id);
  deletePlayground(x.id);
});

bthread("PresenceLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPresence(x.id);
  updatePresence(x.id);
  updatePresence(x.id);
  verifyPresenceExists(x.id);
  verifyPresenceUpdated(x.id);
  deletePresence(x.id);
});

bthread("ProfilefieldLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProfilefield(x.id);
  updateProfilefield(x.id);
  updateProfilefield(x.id);
  verifyProfilefieldExists(x.id);
  verifyProfilefieldUpdated(x.id);
  deleteProfilefield(x.id);
});

bthread("PropertyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProperty(x.id);
  updateProperty(x.id);
  updateProperty(x.id);
  verifyPropertyExists(x.id);
  verifyPropertyUpdated(x.id);
  deleteProperty(x.id);
});

bthread("PushLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPush(x.id);
  updatePush(x.id);
  updatePush(x.id);
  verifyPushExists(x.id);
  verifyPushUpdated(x.id);
  deletePush(x.id);
});

bthread("ReactionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReaction(x.id);
  updateReaction(x.id);
  updateReaction(x.id);
  verifyReactionExists(x.id);
  verifyReactionUpdated(x.id);
  deleteReaction(x.id);
});

bthread("ReactivateLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReactivate(x.id);
  updateReactivate(x.id);
  updateReactivate(x.id);
  verifyReactivateExists(x.id);
  verifyReactivateUpdated(x.id);
  deleteReactivate(x.id);
});

bthread("ReadreceiptLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReadreceipt(x.id);
  updateReadreceipt(x.id);
  updateReadreceipt(x.id);
  verifyReadreceiptExists(x.id);
  verifyReadreceiptUpdated(x.id);
  deleteReadreceipt(x.id);
});

bthread("RealmLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRealm(x.id);
  updateRealm(x.id);
  updateRealm(x.id);
  verifyRealmExists(x.id);
  verifyRealmUpdated(x.id);
  deleteRealm(x.id);
});

bthread("RealtimeLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRealtime(x.id);
  updateRealtime(x.id);
  updateRealtime(x.id);
  verifyRealtimeExists(x.id);
  verifyRealtimeUpdated(x.id);
  deleteRealtime(x.id);
});

bthread("RegisterLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegister(x.id);
  updateRegister(x.id);
  updateRegister(x.id);
  verifyRegisterExists(x.id);
  verifyRegisterUpdated(x.id);
  deleteRegister(x.id);
});

bthread("ReminderLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReminder(x.id);
  updateReminder(x.id);
  updateReminder(x.id);
  verifyReminderExists(x.id);
  verifyReminderUpdated(x.id);
  deleteReminder(x.id);
});

bthread("RemoteLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRemote(x.id);
  updateRemote(x.id);
  updateRemote(x.id);
  verifyRemoteExists(x.id);
  verifyRemoteUpdated(x.id);
  deleteRemote(x.id);
});

bthread("RenderLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRender(x.id);
  updateRender(x.id);
  updateRender(x.id);
  verifyRenderExists(x.id);
  verifyRenderUpdated(x.id);
  deleteRender(x.id);
});

bthread("ReportLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReport(x.id);
  updateReport(x.id);
  updateReport(x.id);
  verifyReportExists(x.id);
  verifyReportUpdated(x.id);
  deleteReport(x.id);
});

bthread("ResendLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addResend(x.id);
  updateResend(x.id);
  updateResend(x.id);
  verifyResendExists(x.id);
  verifyResendUpdated(x.id);
  deleteResend(x.id);
});

bthread("ResterrorhandlingLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addResterrorhandling(x.id);
  updateResterrorhandling(x.id);
  updateResterrorhandling(x.id);
  verifyResterrorhandlingExists(x.id);
  verifyResterrorhandlingUpdated(x.id);
  deleteResterrorhandling(x.id);
});

bthread("SavedsnippetLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSavedsnippet(x.id);
  updateSavedsnippet(x.id);
  updateSavedsnippet(x.id);
  verifySavedsnippetExists(x.id);
  verifySavedsnippetUpdated(x.id);
  deleteSavedsnippet(x.id);
});

bthread("ScheduledmessageLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScheduledmessage(x.id);
  updateScheduledmessage(x.id);
  updateScheduledmessage(x.id);
  verifyScheduledmessageExists(x.id);
  verifyScheduledmessageUpdated(x.id);
  deleteScheduledmessage(x.id);
});

bthread("ServersettingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addServersetting(x.id);
  updateServersetting(x.id);
  updateServersetting(x.id);
  verifyServersettingExists(x.id);
  verifyServersettingUpdated(x.id);
  deleteServersetting(x.id);
});

bthread("SettingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSetting(x.id);
  updateSetting(x.id);
  updateSetting(x.id);
  verifySettingExists(x.id);
  verifySettingUpdated(x.id);
  deleteSetting(x.id);
});

bthread("StatuLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStatu(x.id);
  updateStatu(x.id);
  updateStatu(x.id);
  verifyStatuExists(x.id);
  verifyStatuUpdated(x.id);
  deleteStatu(x.id);
});

bthread("StreamLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStream(x.id);
  updateStream(x.id);
  updateStream(x.id);
  verifyStreamExists(x.id);
  verifyStreamUpdated(x.id);
  deleteStream(x.id);
});

bthread("SubgroupLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubgroup(x.id);
  updateSubgroup(x.id);
  updateSubgroup(x.id);
  verifySubgroupExists(x.id);
  verifySubgroupUpdated(x.id);
  deleteSubgroup(x.id);
});

bthread("SubscriptionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubscription(x.id);
  updateSubscription(x.id);
  updateSubscription(x.id);
  verifySubscriptionExists(x.id);
  verifySubscriptionUpdated(x.id);
  deleteSubscription(x.id);
});

bthread("TestnotificationLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTestnotification(x.id);
  updateTestnotification(x.id);
  updateTestnotification(x.id);
  verifyTestnotificationExists(x.id);
  verifyTestnotificationUpdated(x.id);
  deleteTestnotification(x.id);
});

bthread("TestwelcomebotcustommessageLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTestwelcomebotcustommessage(x.id);
  updateTestwelcomebotcustommessage(x.id);
  updateTestwelcomebotcustommessage(x.id);
  verifyTestwelcomebotcustommessageExists(x.id);
  verifyTestwelcomebotcustommessageUpdated(x.id);
  deleteTestwelcomebotcustommessage(x.id);
});

bthread("TopicLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTopic(x.id);
  updateTopic(x.id);
  updateTopic(x.id);
  verifyTopicExists(x.id);
  verifyTopicUpdated(x.id);
  deleteTopic(x.id);
});

bthread("TypingLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTyping(x.id);
  updateTyping(x.id);
  updateTyping(x.id);
  verifyTypingExists(x.id);
  verifyTypingUpdated(x.id);
  deleteTyping(x.id);
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUser(x.id);
  updateUser(x.id);
  updateUser(x.id);
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
  deleteUser(x.id);
});

bthread("UsergroupLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsergroup(x.id);
  updateUsergroup(x.id);
  updateUsergroup(x.id);
  verifyUsergroupExists(x.id);
  verifyUsergroupUpdated(x.id);
  deleteUsergroup(x.id);
});

bthread("UsersettingsdefaultLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsersettingsdefault(x.id);
  updateUsersettingsdefault(x.id);
  updateUsersettingsdefault(x.id);
  verifyUsersettingsdefaultExists(x.id);
  verifyUsersettingsdefaultUpdated(x.id);
  deleteUsersettingsdefault(x.id);
});

bthread("UsertopicLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsertopic(x.id);
  updateUsertopic(x.id);
  updateUsertopic(x.id);
  verifyUsertopicExists(x.id);
  verifyUsertopicUpdated(x.id);
  deleteUsertopic(x.id);
});

bthread("UseruploadLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserupload(x.id);
  updateUserupload(x.id);
  updateUserupload(x.id);
  verifyUseruploadExists(x.id);
  verifyUseruploadUpdated(x.id);
  deleteUserupload(x.id);
});

bthread("ZulipoutgoingwebhookLifecycle", function () {
  const x = pick([{id: "Z001"}, {id: "Z002"}]);
  addZulipoutgoingwebhook(x.id);
  updateZulipoutgoingwebhook(x.id);
  updateZulipoutgoingwebhook(x.id);
  verifyZulipoutgoingwebhookExists(x.id);
  verifyZulipoutgoingwebhookUpdated(x.id);
  deleteZulipoutgoingwebhook(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Alertword create verification", function () {
  const e = waitForAnyAlertwordAdded();
  block(matchDeleteAlertword(e.id, ANY), function () {
    verifyAlertwordExists(e.id);
  });
});

bthread("Alertword update verification", function () {
  const e = waitForAnyAlertwordUpdated();
  block(matchDeleteAlertword(e.id, ANY), function () {
    verifyAlertwordUpdated(e.id);
  });
});

bthread("Alertword delete verification", function () {
  const e = waitForAnyAlertwordDeleted();
  block(matchAddAlertword(e.id, ANY), function () {
    verifyAlertwordDoesNotExist(e.id);
  });
});

bthread("Androidgcmregid create verification", function () {
  const e = waitForAnyAndroidgcmregidAdded();
  block(matchDeleteAndroidgcmregid(e.id, ANY), function () {
    verifyAndroidgcmregidExists(e.id);
  });
});

bthread("Androidgcmregid update verification", function () {
  const e = waitForAnyAndroidgcmregidUpdated();
  block(matchDeleteAndroidgcmregid(e.id, ANY), function () {
    verifyAndroidgcmregidUpdated(e.id);
  });
});

bthread("Androidgcmregid delete verification", function () {
  const e = waitForAnyAndroidgcmregidDeleted();
  block(matchAddAndroidgcmregid(e.id, ANY), function () {
    verifyAndroidgcmregidDoesNotExist(e.id);
  });
});

bthread("Apnsdevicetoken create verification", function () {
  const e = waitForAnyApnsdevicetokenAdded();
  block(matchDeleteApnsdevicetoken(e.id, ANY), function () {
    verifyApnsdevicetokenExists(e.id);
  });
});

bthread("Apnsdevicetoken update verification", function () {
  const e = waitForAnyApnsdevicetokenUpdated();
  block(matchDeleteApnsdevicetoken(e.id, ANY), function () {
    verifyApnsdevicetokenUpdated(e.id);
  });
});

bthread("Apnsdevicetoken delete verification", function () {
  const e = waitForAnyApnsdevicetokenDeleted();
  block(matchAddApnsdevicetoken(e.id, ANY), function () {
    verifyApnsdevicetokenDoesNotExist(e.id);
  });
});

bthread("Attachment create verification", function () {
  const e = waitForAnyAttachmentAdded();
  block(matchDeleteAttachment(e.id, ANY), function () {
    verifyAttachmentExists(e.id);
  });
});

bthread("Attachment update verification", function () {
  const e = waitForAnyAttachmentUpdated();
  block(matchDeleteAttachment(e.id, ANY), function () {
    verifyAttachmentUpdated(e.id);
  });
});

bthread("Attachment delete verification", function () {
  const e = waitForAnyAttachmentDeleted();
  block(matchAddAttachment(e.id, ANY), function () {
    verifyAttachmentDoesNotExist(e.id);
  });
});

bthread("Bigbluebutton create verification", function () {
  const e = waitForAnyBigbluebuttonAdded();
  block(matchDeleteBigbluebutton(e.id, ANY), function () {
    verifyBigbluebuttonExists(e.id);
  });
});

bthread("Bigbluebutton update verification", function () {
  const e = waitForAnyBigbluebuttonUpdated();
  block(matchDeleteBigbluebutton(e.id, ANY), function () {
    verifyBigbluebuttonUpdated(e.id);
  });
});

bthread("Bigbluebutton delete verification", function () {
  const e = waitForAnyBigbluebuttonDeleted();
  block(matchAddBigbluebutton(e.id, ANY), function () {
    verifyBigbluebuttonDoesNotExist(e.id);
  });
});

bthread("Call create verification", function () {
  const e = waitForAnyCallAdded();
  block(matchDeleteCall(e.id, ANY), function () {
    verifyCallExists(e.id);
  });
});

bthread("Call update verification", function () {
  const e = waitForAnyCallUpdated();
  block(matchDeleteCall(e.id, ANY), function () {
    verifyCallUpdated(e.id);
  });
});

bthread("Call delete verification", function () {
  const e = waitForAnyCallDeleted();
  block(matchAddCall(e.id, ANY), function () {
    verifyCallDoesNotExist(e.id);
  });
});

bthread("Channel create verification", function () {
  const e = waitForAnyChannelAdded();
  block(matchDeleteChannel(e.id, ANY), function () {
    verifyChannelExists(e.id);
  });
});

bthread("Channel update verification", function () {
  const e = waitForAnyChannelUpdated();
  block(matchDeleteChannel(e.id, ANY), function () {
    verifyChannelUpdated(e.id);
  });
});

bthread("Channel delete verification", function () {
  const e = waitForAnyChannelDeleted();
  block(matchAddChannel(e.id, ANY), function () {
    verifyChannelDoesNotExist(e.id);
  });
});

bthread("Channelfolder create verification", function () {
  const e = waitForAnyChannelfolderAdded();
  block(matchDeleteChannelfolder(e.id, ANY), function () {
    verifyChannelfolderExists(e.id);
  });
});

bthread("Channelfolder update verification", function () {
  const e = waitForAnyChannelfolderUpdated();
  block(matchDeleteChannelfolder(e.id, ANY), function () {
    verifyChannelfolderUpdated(e.id);
  });
});

bthread("Channelfolder delete verification", function () {
  const e = waitForAnyChannelfolderDeleted();
  block(matchAddChannelfolder(e.id, ANY), function () {
    verifyChannelfolderDoesNotExist(e.id);
  });
});

bthread("Consent create verification", function () {
  const e = waitForAnyConsentAdded();
  block(matchDeleteConsent(e.id, ANY), function () {
    verifyConsentExists(e.id);
  });
});

bthread("Consent update verification", function () {
  const e = waitForAnyConsentUpdated();
  block(matchDeleteConsent(e.id, ANY), function () {
    verifyConsentUpdated(e.id);
  });
});

bthread("Consent delete verification", function () {
  const e = waitForAnyConsentDeleted();
  block(matchAddConsent(e.id, ANY), function () {
    verifyConsentDoesNotExist(e.id);
  });
});

bthread("Create create verification", function () {
  const e = waitForAnyCreateAdded();
  block(matchDeleteCreate(e.id, ANY), function () {
    verifyCreateExists(e.id);
  });
});

bthread("Create update verification", function () {
  const e = waitForAnyCreateUpdated();
  block(matchDeleteCreate(e.id, ANY), function () {
    verifyCreateUpdated(e.id);
  });
});

bthread("Create delete verification", function () {
  const e = waitForAnyCreateDeleted();
  block(matchAddCreate(e.id, ANY), function () {
    verifyCreateDoesNotExist(e.id);
  });
});

bthread("Deactivate create verification", function () {
  const e = waitForAnyDeactivateAdded();
  block(matchDeleteDeactivate(e.id, ANY), function () {
    verifyDeactivateExists(e.id);
  });
});

bthread("Deactivate update verification", function () {
  const e = waitForAnyDeactivateUpdated();
  block(matchDeleteDeactivate(e.id, ANY), function () {
    verifyDeactivateUpdated(e.id);
  });
});

bthread("Deactivate delete verification", function () {
  const e = waitForAnyDeactivateDeleted();
  block(matchAddDeactivate(e.id, ANY), function () {
    verifyDeactivateDoesNotExist(e.id);
  });
});

bthread("Defaultstream create verification", function () {
  const e = waitForAnyDefaultstreamAdded();
  block(matchDeleteDefaultstream(e.id, ANY), function () {
    verifyDefaultstreamExists(e.id);
  });
});

bthread("Defaultstream update verification", function () {
  const e = waitForAnyDefaultstreamUpdated();
  block(matchDeleteDefaultstream(e.id, ANY), function () {
    verifyDefaultstreamUpdated(e.id);
  });
});

bthread("Defaultstream delete verification", function () {
  const e = waitForAnyDefaultstreamDeleted();
  block(matchAddDefaultstream(e.id, ANY), function () {
    verifyDefaultstreamDoesNotExist(e.id);
  });
});

bthread("Deletetopic create verification", function () {
  const e = waitForAnyDeletetopicAdded();
  block(matchDeleteDeletetopic(e.id, ANY), function () {
    verifyDeletetopicExists(e.id);
  });
});

bthread("Deletetopic update verification", function () {
  const e = waitForAnyDeletetopicUpdated();
  block(matchDeleteDeletetopic(e.id, ANY), function () {
    verifyDeletetopicUpdated(e.id);
  });
});

bthread("Deletetopic delete verification", function () {
  const e = waitForAnyDeletetopicDeleted();
  block(matchAddDeletetopic(e.id, ANY), function () {
    verifyDeletetopicDoesNotExist(e.id);
  });
});

bthread("Devfetchapikey create verification", function () {
  const e = waitForAnyDevfetchapikeyAdded();
  block(matchDeleteDevfetchapikey(e.id, ANY), function () {
    verifyDevfetchapikeyExists(e.id);
  });
});

bthread("Devfetchapikey update verification", function () {
  const e = waitForAnyDevfetchapikeyUpdated();
  block(matchDeleteDevfetchapikey(e.id, ANY), function () {
    verifyDevfetchapikeyUpdated(e.id);
  });
});

bthread("Devfetchapikey delete verification", function () {
  const e = waitForAnyDevfetchapikeyDeleted();
  block(matchAddDevfetchapikey(e.id, ANY), function () {
    verifyDevfetchapikeyDoesNotExist(e.id);
  });
});

bthread("Draft create verification", function () {
  const e = waitForAnyDraftAdded();
  block(matchDeleteDraft(e.id, ANY), function () {
    verifyDraftExists(e.id);
  });
});

bthread("Draft update verification", function () {
  const e = waitForAnyDraftUpdated();
  block(matchDeleteDraft(e.id, ANY), function () {
    verifyDraftUpdated(e.id);
  });
});

bthread("Draft delete verification", function () {
  const e = waitForAnyDraftDeleted();
  block(matchAddDraft(e.id, ANY), function () {
    verifyDraftDoesNotExist(e.id);
  });
});

bthread("E2ee create verification", function () {
  const e = waitForAnyE2eeAdded();
  block(matchDeleteE2ee(e.id, ANY), function () {
    verifyE2eeExists(e.id);
  });
});

bthread("E2ee update verification", function () {
  const e = waitForAnyE2eeUpdated();
  block(matchDeleteE2ee(e.id, ANY), function () {
    verifyE2eeUpdated(e.id);
  });
});

bthread("E2ee delete verification", function () {
  const e = waitForAnyE2eeDeleted();
  block(matchAddE2ee(e.id, ANY), function () {
    verifyE2eeDoesNotExist(e.id);
  });
});

bthread("Emailaddres create verification", function () {
  const e = waitForAnyEmailaddresAdded();
  block(matchDeleteEmailaddres(e.id, ANY), function () {
    verifyEmailaddresExists(e.id);
  });
});

bthread("Emailaddres update verification", function () {
  const e = waitForAnyEmailaddresUpdated();
  block(matchDeleteEmailaddres(e.id, ANY), function () {
    verifyEmailaddresUpdated(e.id);
  });
});

bthread("Emailaddres delete verification", function () {
  const e = waitForAnyEmailaddresDeleted();
  block(matchAddEmailaddres(e.id, ANY), function () {
    verifyEmailaddresDoesNotExist(e.id);
  });
});

bthread("Emoji create verification", function () {
  const e = waitForAnyEmojiAdded();
  block(matchDeleteEmoji(e.id, ANY), function () {
    verifyEmojiExists(e.id);
  });
});

bthread("Emoji update verification", function () {
  const e = waitForAnyEmojiUpdated();
  block(matchDeleteEmoji(e.id, ANY), function () {
    verifyEmojiUpdated(e.id);
  });
});

bthread("Emoji delete verification", function () {
  const e = waitForAnyEmojiDeleted();
  block(matchAddEmoji(e.id, ANY), function () {
    verifyEmojiDoesNotExist(e.id);
  });
});

bthread("Event create verification", function () {
  const e = waitForAnyEventAdded();
  block(matchDeleteEvent(e.id, ANY), function () {
    verifyEventExists(e.id);
  });
});

bthread("Event update verification", function () {
  const e = waitForAnyEventUpdated();
  block(matchDeleteEvent(e.id, ANY), function () {
    verifyEventUpdated(e.id);
  });
});

bthread("Event delete verification", function () {
  const e = waitForAnyEventDeleted();
  block(matchAddEvent(e.id, ANY), function () {
    verifyEventDoesNotExist(e.id);
  });
});

bthread("Export create verification", function () {
  const e = waitForAnyExportAdded();
  block(matchDeleteExport(e.id, ANY), function () {
    verifyExportExists(e.id);
  });
});

bthread("Export update verification", function () {
  const e = waitForAnyExportUpdated();
  block(matchDeleteExport(e.id, ANY), function () {
    verifyExportUpdated(e.id);
  });
});

bthread("Export delete verification", function () {
  const e = waitForAnyExportDeleted();
  block(matchAddExport(e.id, ANY), function () {
    verifyExportDoesNotExist(e.id);
  });
});

bthread("Fetchapikey create verification", function () {
  const e = waitForAnyFetchapikeyAdded();
  block(matchDeleteFetchapikey(e.id, ANY), function () {
    verifyFetchapikeyExists(e.id);
  });
});

bthread("Fetchapikey update verification", function () {
  const e = waitForAnyFetchapikeyUpdated();
  block(matchDeleteFetchapikey(e.id, ANY), function () {
    verifyFetchapikeyUpdated(e.id);
  });
});

bthread("Fetchapikey delete verification", function () {
  const e = waitForAnyFetchapikeyDeleted();
  block(matchAddFetchapikey(e.id, ANY), function () {
    verifyFetchapikeyDoesNotExist(e.id);
  });
});

bthread("Filter create verification", function () {
  const e = waitForAnyFilterAdded();
  block(matchDeleteFilter(e.id, ANY), function () {
    verifyFilterExists(e.id);
  });
});

bthread("Filter update verification", function () {
  const e = waitForAnyFilterUpdated();
  block(matchDeleteFilter(e.id, ANY), function () {
    verifyFilterUpdated(e.id);
  });
});

bthread("Filter delete verification", function () {
  const e = waitForAnyFilterDeleted();
  block(matchAddFilter(e.id, ANY), function () {
    verifyFilterDoesNotExist(e.id);
  });
});

bthread("Flag create verification", function () {
  const e = waitForAnyFlagAdded();
  block(matchDeleteFlag(e.id, ANY), function () {
    verifyFlagExists(e.id);
  });
});

bthread("Flag update verification", function () {
  const e = waitForAnyFlagUpdated();
  block(matchDeleteFlag(e.id, ANY), function () {
    verifyFlagUpdated(e.id);
  });
});

bthread("Flag delete verification", function () {
  const e = waitForAnyFlagDeleted();
  block(matchAddFlag(e.id, ANY), function () {
    verifyFlagDoesNotExist(e.id);
  });
});

bthread("Getstreamid create verification", function () {
  const e = waitForAnyGetstreamidAdded();
  block(matchDeleteGetstreamid(e.id, ANY), function () {
    verifyGetstreamidExists(e.id);
  });
});

bthread("Getstreamid update verification", function () {
  const e = waitForAnyGetstreamidUpdated();
  block(matchDeleteGetstreamid(e.id, ANY), function () {
    verifyGetstreamidUpdated(e.id);
  });
});

bthread("Getstreamid delete verification", function () {
  const e = waitForAnyGetstreamidDeleted();
  block(matchAddGetstreamid(e.id, ANY), function () {
    verifyGetstreamidDoesNotExist(e.id);
  });
});

bthread("History create verification", function () {
  const e = waitForAnyHistoryAdded();
  block(matchDeleteHistory(e.id, ANY), function () {
    verifyHistoryExists(e.id);
  });
});

bthread("History update verification", function () {
  const e = waitForAnyHistoryUpdated();
  block(matchDeleteHistory(e.id, ANY), function () {
    verifyHistoryUpdated(e.id);
  });
});

bthread("History delete verification", function () {
  const e = waitForAnyHistoryDeleted();
  block(matchAddHistory(e.id, ANY), function () {
    verifyHistoryDoesNotExist(e.id);
  });
});

bthread("Invite create verification", function () {
  const e = waitForAnyInviteAdded();
  block(matchDeleteInvite(e.id, ANY), function () {
    verifyInviteExists(e.id);
  });
});

bthread("Invite update verification", function () {
  const e = waitForAnyInviteUpdated();
  block(matchDeleteInvite(e.id, ANY), function () {
    verifyInviteUpdated(e.id);
  });
});

bthread("Invite delete verification", function () {
  const e = waitForAnyInviteDeleted();
  block(matchAddInvite(e.id, ANY), function () {
    verifyInviteDoesNotExist(e.id);
  });
});

bthread("Linkifier create verification", function () {
  const e = waitForAnyLinkifierAdded();
  block(matchDeleteLinkifier(e.id, ANY), function () {
    verifyLinkifierExists(e.id);
  });
});

bthread("Linkifier update verification", function () {
  const e = waitForAnyLinkifierUpdated();
  block(matchDeleteLinkifier(e.id, ANY), function () {
    verifyLinkifierUpdated(e.id);
  });
});

bthread("Linkifier delete verification", function () {
  const e = waitForAnyLinkifierDeleted();
  block(matchAddLinkifier(e.id, ANY), function () {
    verifyLinkifierDoesNotExist(e.id);
  });
});

bthread("Markallasread create verification", function () {
  const e = waitForAnyMarkallasreadAdded();
  block(matchDeleteMarkallasread(e.id, ANY), function () {
    verifyMarkallasreadExists(e.id);
  });
});

bthread("Markallasread update verification", function () {
  const e = waitForAnyMarkallasreadUpdated();
  block(matchDeleteMarkallasread(e.id, ANY), function () {
    verifyMarkallasreadUpdated(e.id);
  });
});

bthread("Markallasread delete verification", function () {
  const e = waitForAnyMarkallasreadDeleted();
  block(matchAddMarkallasread(e.id, ANY), function () {
    verifyMarkallasreadDoesNotExist(e.id);
  });
});

bthread("Markstreamasread create verification", function () {
  const e = waitForAnyMarkstreamasreadAdded();
  block(matchDeleteMarkstreamasread(e.id, ANY), function () {
    verifyMarkstreamasreadExists(e.id);
  });
});

bthread("Markstreamasread update verification", function () {
  const e = waitForAnyMarkstreamasreadUpdated();
  block(matchDeleteMarkstreamasread(e.id, ANY), function () {
    verifyMarkstreamasreadUpdated(e.id);
  });
});

bthread("Markstreamasread delete verification", function () {
  const e = waitForAnyMarkstreamasreadDeleted();
  block(matchAddMarkstreamasread(e.id, ANY), function () {
    verifyMarkstreamasreadDoesNotExist(e.id);
  });
});

bthread("Marktopicasread create verification", function () {
  const e = waitForAnyMarktopicasreadAdded();
  block(matchDeleteMarktopicasread(e.id, ANY), function () {
    verifyMarktopicasreadExists(e.id);
  });
});

bthread("Marktopicasread update verification", function () {
  const e = waitForAnyMarktopicasreadUpdated();
  block(matchDeleteMarktopicasread(e.id, ANY), function () {
    verifyMarktopicasreadUpdated(e.id);
  });
});

bthread("Marktopicasread delete verification", function () {
  const e = waitForAnyMarktopicasreadDeleted();
  block(matchAddMarktopicasread(e.id, ANY), function () {
    verifyMarktopicasreadDoesNotExist(e.id);
  });
});

bthread("Matchesnarrow create verification", function () {
  const e = waitForAnyMatchesnarrowAdded();
  block(matchDeleteMatchesnarrow(e.id, ANY), function () {
    verifyMatchesnarrowExists(e.id);
  });
});

bthread("Matchesnarrow update verification", function () {
  const e = waitForAnyMatchesnarrowUpdated();
  block(matchDeleteMatchesnarrow(e.id, ANY), function () {
    verifyMatchesnarrowUpdated(e.id);
  });
});

bthread("Matchesnarrow delete verification", function () {
  const e = waitForAnyMatchesnarrowDeleted();
  block(matchAddMatchesnarrow(e.id, ANY), function () {
    verifyMatchesnarrowDoesNotExist(e.id);
  });
});

bthread("Me create verification", function () {
  const e = waitForAnyMeAdded();
  block(matchDeleteMe(e.id, ANY), function () {
    verifyMeExists(e.id);
  });
});

bthread("Me update verification", function () {
  const e = waitForAnyMeUpdated();
  block(matchDeleteMe(e.id, ANY), function () {
    verifyMeUpdated(e.id);
  });
});

bthread("Me delete verification", function () {
  const e = waitForAnyMeDeleted();
  block(matchAddMe(e.id, ANY), function () {
    verifyMeDoesNotExist(e.id);
  });
});

bthread("Member create verification", function () {
  const e = waitForAnyMemberAdded();
  block(matchDeleteMember(e.id, ANY), function () {
    verifyMemberExists(e.id);
  });
});

bthread("Member update verification", function () {
  const e = waitForAnyMemberUpdated();
  block(matchDeleteMember(e.id, ANY), function () {
    verifyMemberUpdated(e.id);
  });
});

bthread("Member delete verification", function () {
  const e = waitForAnyMemberDeleted();
  block(matchAddMember(e.id, ANY), function () {
    verifyMemberDoesNotExist(e.id);
  });
});

bthread("Message create verification", function () {
  const e = waitForAnyMessageAdded();
  block(matchDeleteMessage(e.id, ANY), function () {
    verifyMessageExists(e.id);
  });
});

bthread("Message update verification", function () {
  const e = waitForAnyMessageUpdated();
  block(matchDeleteMessage(e.id, ANY), function () {
    verifyMessageUpdated(e.id);
  });
});

bthread("Message delete verification", function () {
  const e = waitForAnyMessageDeleted();
  block(matchAddMessage(e.id, ANY), function () {
    verifyMessageDoesNotExist(e.id);
  });
});

bthread("Mobilepush create verification", function () {
  const e = waitForAnyMobilepushAdded();
  block(matchDeleteMobilepush(e.id, ANY), function () {
    verifyMobilepushExists(e.id);
  });
});

bthread("Mobilepush update verification", function () {
  const e = waitForAnyMobilepushUpdated();
  block(matchDeleteMobilepush(e.id, ANY), function () {
    verifyMobilepushUpdated(e.id);
  });
});

bthread("Mobilepush delete verification", function () {
  const e = waitForAnyMobilepushDeleted();
  block(matchAddMobilepush(e.id, ANY), function () {
    verifyMobilepushDoesNotExist(e.id);
  });
});

bthread("Multiuse create verification", function () {
  const e = waitForAnyMultiuseAdded();
  block(matchDeleteMultiuse(e.id, ANY), function () {
    verifyMultiuseExists(e.id);
  });
});

bthread("Multiuse update verification", function () {
  const e = waitForAnyMultiuseUpdated();
  block(matchDeleteMultiuse(e.id, ANY), function () {
    verifyMultiuseUpdated(e.id);
  });
});

bthread("Multiuse delete verification", function () {
  const e = waitForAnyMultiuseDeleted();
  block(matchAddMultiuse(e.id, ANY), function () {
    verifyMultiuseDoesNotExist(e.id);
  });
});

bthread("Mutedtopic create verification", function () {
  const e = waitForAnyMutedtopicAdded();
  block(matchDeleteMutedtopic(e.id, ANY), function () {
    verifyMutedtopicExists(e.id);
  });
});

bthread("Mutedtopic update verification", function () {
  const e = waitForAnyMutedtopicUpdated();
  block(matchDeleteMutedtopic(e.id, ANY), function () {
    verifyMutedtopicUpdated(e.id);
  });
});

bthread("Mutedtopic delete verification", function () {
  const e = waitForAnyMutedtopicDeleted();
  block(matchAddMutedtopic(e.id, ANY), function () {
    verifyMutedtopicDoesNotExist(e.id);
  });
});

bthread("Muteduser create verification", function () {
  const e = waitForAnyMuteduserAdded();
  block(matchDeleteMuteduser(e.id, ANY), function () {
    verifyMuteduserExists(e.id);
  });
});

bthread("Muteduser update verification", function () {
  const e = waitForAnyMuteduserUpdated();
  block(matchDeleteMuteduser(e.id, ANY), function () {
    verifyMuteduserUpdated(e.id);
  });
});

bthread("Muteduser delete verification", function () {
  const e = waitForAnyMuteduserDeleted();
  block(matchAddMuteduser(e.id, ANY), function () {
    verifyMuteduserDoesNotExist(e.id);
  });
});

bthread("Narrow create verification", function () {
  const e = waitForAnyNarrowAdded();
  block(matchDeleteNarrow(e.id, ANY), function () {
    verifyNarrowExists(e.id);
  });
});

bthread("Narrow update verification", function () {
  const e = waitForAnyNarrowUpdated();
  block(matchDeleteNarrow(e.id, ANY), function () {
    verifyNarrowUpdated(e.id);
  });
});

bthread("Narrow delete verification", function () {
  const e = waitForAnyNarrowDeleted();
  block(matchAddNarrow(e.id, ANY), function () {
    verifyNarrowDoesNotExist(e.id);
  });
});

bthread("Navigationview create verification", function () {
  const e = waitForAnyNavigationviewAdded();
  block(matchDeleteNavigationview(e.id, ANY), function () {
    verifyNavigationviewExists(e.id);
  });
});

bthread("Navigationview update verification", function () {
  const e = waitForAnyNavigationviewUpdated();
  block(matchDeleteNavigationview(e.id, ANY), function () {
    verifyNavigationviewUpdated(e.id);
  });
});

bthread("Navigationview delete verification", function () {
  const e = waitForAnyNavigationviewDeleted();
  block(matchAddNavigationview(e.id, ANY), function () {
    verifyNavigationviewDoesNotExist(e.id);
  });
});

bthread("Playground create verification", function () {
  const e = waitForAnyPlaygroundAdded();
  block(matchDeletePlayground(e.id, ANY), function () {
    verifyPlaygroundExists(e.id);
  });
});

bthread("Playground update verification", function () {
  const e = waitForAnyPlaygroundUpdated();
  block(matchDeletePlayground(e.id, ANY), function () {
    verifyPlaygroundUpdated(e.id);
  });
});

bthread("Playground delete verification", function () {
  const e = waitForAnyPlaygroundDeleted();
  block(matchAddPlayground(e.id, ANY), function () {
    verifyPlaygroundDoesNotExist(e.id);
  });
});

bthread("Presence create verification", function () {
  const e = waitForAnyPresenceAdded();
  block(matchDeletePresence(e.id, ANY), function () {
    verifyPresenceExists(e.id);
  });
});

bthread("Presence update verification", function () {
  const e = waitForAnyPresenceUpdated();
  block(matchDeletePresence(e.id, ANY), function () {
    verifyPresenceUpdated(e.id);
  });
});

bthread("Presence delete verification", function () {
  const e = waitForAnyPresenceDeleted();
  block(matchAddPresence(e.id, ANY), function () {
    verifyPresenceDoesNotExist(e.id);
  });
});

bthread("Profilefield create verification", function () {
  const e = waitForAnyProfilefieldAdded();
  block(matchDeleteProfilefield(e.id, ANY), function () {
    verifyProfilefieldExists(e.id);
  });
});

bthread("Profilefield update verification", function () {
  const e = waitForAnyProfilefieldUpdated();
  block(matchDeleteProfilefield(e.id, ANY), function () {
    verifyProfilefieldUpdated(e.id);
  });
});

bthread("Profilefield delete verification", function () {
  const e = waitForAnyProfilefieldDeleted();
  block(matchAddProfilefield(e.id, ANY), function () {
    verifyProfilefieldDoesNotExist(e.id);
  });
});

bthread("Property create verification", function () {
  const e = waitForAnyPropertyAdded();
  block(matchDeleteProperty(e.id, ANY), function () {
    verifyPropertyExists(e.id);
  });
});

bthread("Property update verification", function () {
  const e = waitForAnyPropertyUpdated();
  block(matchDeleteProperty(e.id, ANY), function () {
    verifyPropertyUpdated(e.id);
  });
});

bthread("Property delete verification", function () {
  const e = waitForAnyPropertyDeleted();
  block(matchAddProperty(e.id, ANY), function () {
    verifyPropertyDoesNotExist(e.id);
  });
});

bthread("Push create verification", function () {
  const e = waitForAnyPushAdded();
  block(matchDeletePush(e.id, ANY), function () {
    verifyPushExists(e.id);
  });
});

bthread("Push update verification", function () {
  const e = waitForAnyPushUpdated();
  block(matchDeletePush(e.id, ANY), function () {
    verifyPushUpdated(e.id);
  });
});

bthread("Push delete verification", function () {
  const e = waitForAnyPushDeleted();
  block(matchAddPush(e.id, ANY), function () {
    verifyPushDoesNotExist(e.id);
  });
});

bthread("Reaction create verification", function () {
  const e = waitForAnyReactionAdded();
  block(matchDeleteReaction(e.id, ANY), function () {
    verifyReactionExists(e.id);
  });
});

bthread("Reaction update verification", function () {
  const e = waitForAnyReactionUpdated();
  block(matchDeleteReaction(e.id, ANY), function () {
    verifyReactionUpdated(e.id);
  });
});

bthread("Reaction delete verification", function () {
  const e = waitForAnyReactionDeleted();
  block(matchAddReaction(e.id, ANY), function () {
    verifyReactionDoesNotExist(e.id);
  });
});

bthread("Reactivate create verification", function () {
  const e = waitForAnyReactivateAdded();
  block(matchDeleteReactivate(e.id, ANY), function () {
    verifyReactivateExists(e.id);
  });
});

bthread("Reactivate update verification", function () {
  const e = waitForAnyReactivateUpdated();
  block(matchDeleteReactivate(e.id, ANY), function () {
    verifyReactivateUpdated(e.id);
  });
});

bthread("Reactivate delete verification", function () {
  const e = waitForAnyReactivateDeleted();
  block(matchAddReactivate(e.id, ANY), function () {
    verifyReactivateDoesNotExist(e.id);
  });
});

bthread("Readreceipt create verification", function () {
  const e = waitForAnyReadreceiptAdded();
  block(matchDeleteReadreceipt(e.id, ANY), function () {
    verifyReadreceiptExists(e.id);
  });
});

bthread("Readreceipt update verification", function () {
  const e = waitForAnyReadreceiptUpdated();
  block(matchDeleteReadreceipt(e.id, ANY), function () {
    verifyReadreceiptUpdated(e.id);
  });
});

bthread("Readreceipt delete verification", function () {
  const e = waitForAnyReadreceiptDeleted();
  block(matchAddReadreceipt(e.id, ANY), function () {
    verifyReadreceiptDoesNotExist(e.id);
  });
});

bthread("Realm create verification", function () {
  const e = waitForAnyRealmAdded();
  block(matchDeleteRealm(e.id, ANY), function () {
    verifyRealmExists(e.id);
  });
});

bthread("Realm update verification", function () {
  const e = waitForAnyRealmUpdated();
  block(matchDeleteRealm(e.id, ANY), function () {
    verifyRealmUpdated(e.id);
  });
});

bthread("Realm delete verification", function () {
  const e = waitForAnyRealmDeleted();
  block(matchAddRealm(e.id, ANY), function () {
    verifyRealmDoesNotExist(e.id);
  });
});

bthread("Realtime create verification", function () {
  const e = waitForAnyRealtimeAdded();
  block(matchDeleteRealtime(e.id, ANY), function () {
    verifyRealtimeExists(e.id);
  });
});

bthread("Realtime update verification", function () {
  const e = waitForAnyRealtimeUpdated();
  block(matchDeleteRealtime(e.id, ANY), function () {
    verifyRealtimeUpdated(e.id);
  });
});

bthread("Realtime delete verification", function () {
  const e = waitForAnyRealtimeDeleted();
  block(matchAddRealtime(e.id, ANY), function () {
    verifyRealtimeDoesNotExist(e.id);
  });
});

bthread("Register create verification", function () {
  const e = waitForAnyRegisterAdded();
  block(matchDeleteRegister(e.id, ANY), function () {
    verifyRegisterExists(e.id);
  });
});

bthread("Register update verification", function () {
  const e = waitForAnyRegisterUpdated();
  block(matchDeleteRegister(e.id, ANY), function () {
    verifyRegisterUpdated(e.id);
  });
});

bthread("Register delete verification", function () {
  const e = waitForAnyRegisterDeleted();
  block(matchAddRegister(e.id, ANY), function () {
    verifyRegisterDoesNotExist(e.id);
  });
});

bthread("Reminder create verification", function () {
  const e = waitForAnyReminderAdded();
  block(matchDeleteReminder(e.id, ANY), function () {
    verifyReminderExists(e.id);
  });
});

bthread("Reminder update verification", function () {
  const e = waitForAnyReminderUpdated();
  block(matchDeleteReminder(e.id, ANY), function () {
    verifyReminderUpdated(e.id);
  });
});

bthread("Reminder delete verification", function () {
  const e = waitForAnyReminderDeleted();
  block(matchAddReminder(e.id, ANY), function () {
    verifyReminderDoesNotExist(e.id);
  });
});

bthread("Remote create verification", function () {
  const e = waitForAnyRemoteAdded();
  block(matchDeleteRemote(e.id, ANY), function () {
    verifyRemoteExists(e.id);
  });
});

bthread("Remote update verification", function () {
  const e = waitForAnyRemoteUpdated();
  block(matchDeleteRemote(e.id, ANY), function () {
    verifyRemoteUpdated(e.id);
  });
});

bthread("Remote delete verification", function () {
  const e = waitForAnyRemoteDeleted();
  block(matchAddRemote(e.id, ANY), function () {
    verifyRemoteDoesNotExist(e.id);
  });
});

bthread("Render create verification", function () {
  const e = waitForAnyRenderAdded();
  block(matchDeleteRender(e.id, ANY), function () {
    verifyRenderExists(e.id);
  });
});

bthread("Render update verification", function () {
  const e = waitForAnyRenderUpdated();
  block(matchDeleteRender(e.id, ANY), function () {
    verifyRenderUpdated(e.id);
  });
});

bthread("Render delete verification", function () {
  const e = waitForAnyRenderDeleted();
  block(matchAddRender(e.id, ANY), function () {
    verifyRenderDoesNotExist(e.id);
  });
});

bthread("Report create verification", function () {
  const e = waitForAnyReportAdded();
  block(matchDeleteReport(e.id, ANY), function () {
    verifyReportExists(e.id);
  });
});

bthread("Report update verification", function () {
  const e = waitForAnyReportUpdated();
  block(matchDeleteReport(e.id, ANY), function () {
    verifyReportUpdated(e.id);
  });
});

bthread("Report delete verification", function () {
  const e = waitForAnyReportDeleted();
  block(matchAddReport(e.id, ANY), function () {
    verifyReportDoesNotExist(e.id);
  });
});

bthread("Resend create verification", function () {
  const e = waitForAnyResendAdded();
  block(matchDeleteResend(e.id, ANY), function () {
    verifyResendExists(e.id);
  });
});

bthread("Resend update verification", function () {
  const e = waitForAnyResendUpdated();
  block(matchDeleteResend(e.id, ANY), function () {
    verifyResendUpdated(e.id);
  });
});

bthread("Resend delete verification", function () {
  const e = waitForAnyResendDeleted();
  block(matchAddResend(e.id, ANY), function () {
    verifyResendDoesNotExist(e.id);
  });
});

bthread("Resterrorhandling create verification", function () {
  const e = waitForAnyResterrorhandlingAdded();
  block(matchDeleteResterrorhandling(e.id, ANY), function () {
    verifyResterrorhandlingExists(e.id);
  });
});

bthread("Resterrorhandling update verification", function () {
  const e = waitForAnyResterrorhandlingUpdated();
  block(matchDeleteResterrorhandling(e.id, ANY), function () {
    verifyResterrorhandlingUpdated(e.id);
  });
});

bthread("Resterrorhandling delete verification", function () {
  const e = waitForAnyResterrorhandlingDeleted();
  block(matchAddResterrorhandling(e.id, ANY), function () {
    verifyResterrorhandlingDoesNotExist(e.id);
  });
});

bthread("Savedsnippet create verification", function () {
  const e = waitForAnySavedsnippetAdded();
  block(matchDeleteSavedsnippet(e.id, ANY), function () {
    verifySavedsnippetExists(e.id);
  });
});

bthread("Savedsnippet update verification", function () {
  const e = waitForAnySavedsnippetUpdated();
  block(matchDeleteSavedsnippet(e.id, ANY), function () {
    verifySavedsnippetUpdated(e.id);
  });
});

bthread("Savedsnippet delete verification", function () {
  const e = waitForAnySavedsnippetDeleted();
  block(matchAddSavedsnippet(e.id, ANY), function () {
    verifySavedsnippetDoesNotExist(e.id);
  });
});

bthread("Scheduledmessage create verification", function () {
  const e = waitForAnyScheduledmessageAdded();
  block(matchDeleteScheduledmessage(e.id, ANY), function () {
    verifyScheduledmessageExists(e.id);
  });
});

bthread("Scheduledmessage update verification", function () {
  const e = waitForAnyScheduledmessageUpdated();
  block(matchDeleteScheduledmessage(e.id, ANY), function () {
    verifyScheduledmessageUpdated(e.id);
  });
});

bthread("Scheduledmessage delete verification", function () {
  const e = waitForAnyScheduledmessageDeleted();
  block(matchAddScheduledmessage(e.id, ANY), function () {
    verifyScheduledmessageDoesNotExist(e.id);
  });
});

bthread("Serversetting create verification", function () {
  const e = waitForAnyServersettingAdded();
  block(matchDeleteServersetting(e.id, ANY), function () {
    verifyServersettingExists(e.id);
  });
});

bthread("Serversetting update verification", function () {
  const e = waitForAnyServersettingUpdated();
  block(matchDeleteServersetting(e.id, ANY), function () {
    verifyServersettingUpdated(e.id);
  });
});

bthread("Serversetting delete verification", function () {
  const e = waitForAnyServersettingDeleted();
  block(matchAddServersetting(e.id, ANY), function () {
    verifyServersettingDoesNotExist(e.id);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  block(matchDeleteSetting(e.id, ANY), function () {
    verifySettingExists(e.id);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  block(matchDeleteSetting(e.id, ANY), function () {
    verifySettingUpdated(e.id);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  block(matchAddSetting(e.id, ANY), function () {
    verifySettingDoesNotExist(e.id);
  });
});

bthread("Statu create verification", function () {
  const e = waitForAnyStatuAdded();
  block(matchDeleteStatu(e.id, ANY), function () {
    verifyStatuExists(e.id);
  });
});

bthread("Statu update verification", function () {
  const e = waitForAnyStatuUpdated();
  block(matchDeleteStatu(e.id, ANY), function () {
    verifyStatuUpdated(e.id);
  });
});

bthread("Statu delete verification", function () {
  const e = waitForAnyStatuDeleted();
  block(matchAddStatu(e.id, ANY), function () {
    verifyStatuDoesNotExist(e.id);
  });
});

bthread("Stream create verification", function () {
  const e = waitForAnyStreamAdded();
  block(matchDeleteStream(e.id, ANY), function () {
    verifyStreamExists(e.id);
  });
});

bthread("Stream update verification", function () {
  const e = waitForAnyStreamUpdated();
  block(matchDeleteStream(e.id, ANY), function () {
    verifyStreamUpdated(e.id);
  });
});

bthread("Stream delete verification", function () {
  const e = waitForAnyStreamDeleted();
  block(matchAddStream(e.id, ANY), function () {
    verifyStreamDoesNotExist(e.id);
  });
});

bthread("Subgroup create verification", function () {
  const e = waitForAnySubgroupAdded();
  block(matchDeleteSubgroup(e.id, ANY), function () {
    verifySubgroupExists(e.id);
  });
});

bthread("Subgroup update verification", function () {
  const e = waitForAnySubgroupUpdated();
  block(matchDeleteSubgroup(e.id, ANY), function () {
    verifySubgroupUpdated(e.id);
  });
});

bthread("Subgroup delete verification", function () {
  const e = waitForAnySubgroupDeleted();
  block(matchAddSubgroup(e.id, ANY), function () {
    verifySubgroupDoesNotExist(e.id);
  });
});

bthread("Subscription create verification", function () {
  const e = waitForAnySubscriptionAdded();
  block(matchDeleteSubscription(e.id, ANY), function () {
    verifySubscriptionExists(e.id);
  });
});

bthread("Subscription update verification", function () {
  const e = waitForAnySubscriptionUpdated();
  block(matchDeleteSubscription(e.id, ANY), function () {
    verifySubscriptionUpdated(e.id);
  });
});

bthread("Subscription delete verification", function () {
  const e = waitForAnySubscriptionDeleted();
  block(matchAddSubscription(e.id, ANY), function () {
    verifySubscriptionDoesNotExist(e.id);
  });
});

bthread("Testnotification create verification", function () {
  const e = waitForAnyTestnotificationAdded();
  block(matchDeleteTestnotification(e.id, ANY), function () {
    verifyTestnotificationExists(e.id);
  });
});

bthread("Testnotification update verification", function () {
  const e = waitForAnyTestnotificationUpdated();
  block(matchDeleteTestnotification(e.id, ANY), function () {
    verifyTestnotificationUpdated(e.id);
  });
});

bthread("Testnotification delete verification", function () {
  const e = waitForAnyTestnotificationDeleted();
  block(matchAddTestnotification(e.id, ANY), function () {
    verifyTestnotificationDoesNotExist(e.id);
  });
});

bthread("Testwelcomebotcustommessage create verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageAdded();
  block(matchDeleteTestwelcomebotcustommessage(e.id, ANY), function () {
    verifyTestwelcomebotcustommessageExists(e.id);
  });
});

bthread("Testwelcomebotcustommessage update verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageUpdated();
  block(matchDeleteTestwelcomebotcustommessage(e.id, ANY), function () {
    verifyTestwelcomebotcustommessageUpdated(e.id);
  });
});

bthread("Testwelcomebotcustommessage delete verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageDeleted();
  block(matchAddTestwelcomebotcustommessage(e.id, ANY), function () {
    verifyTestwelcomebotcustommessageDoesNotExist(e.id);
  });
});

bthread("Topic create verification", function () {
  const e = waitForAnyTopicAdded();
  block(matchDeleteTopic(e.id, ANY), function () {
    verifyTopicExists(e.id);
  });
});

bthread("Topic update verification", function () {
  const e = waitForAnyTopicUpdated();
  block(matchDeleteTopic(e.id, ANY), function () {
    verifyTopicUpdated(e.id);
  });
});

bthread("Topic delete verification", function () {
  const e = waitForAnyTopicDeleted();
  block(matchAddTopic(e.id, ANY), function () {
    verifyTopicDoesNotExist(e.id);
  });
});

bthread("Typing create verification", function () {
  const e = waitForAnyTypingAdded();
  block(matchDeleteTyping(e.id, ANY), function () {
    verifyTypingExists(e.id);
  });
});

bthread("Typing update verification", function () {
  const e = waitForAnyTypingUpdated();
  block(matchDeleteTyping(e.id, ANY), function () {
    verifyTypingUpdated(e.id);
  });
});

bthread("Typing delete verification", function () {
  const e = waitForAnyTypingDeleted();
  block(matchAddTyping(e.id, ANY), function () {
    verifyTypingDoesNotExist(e.id);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserExists(e.id);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserUpdated(e.id);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  block(matchAddUser(e.id, ANY), function () {
    verifyUserDoesNotExist(e.id);
  });
});

bthread("Usergroup create verification", function () {
  const e = waitForAnyUsergroupAdded();
  block(matchDeleteUsergroup(e.id, ANY), function () {
    verifyUsergroupExists(e.id);
  });
});

bthread("Usergroup update verification", function () {
  const e = waitForAnyUsergroupUpdated();
  block(matchDeleteUsergroup(e.id, ANY), function () {
    verifyUsergroupUpdated(e.id);
  });
});

bthread("Usergroup delete verification", function () {
  const e = waitForAnyUsergroupDeleted();
  block(matchAddUsergroup(e.id, ANY), function () {
    verifyUsergroupDoesNotExist(e.id);
  });
});

bthread("Usersettingsdefault create verification", function () {
  const e = waitForAnyUsersettingsdefaultAdded();
  block(matchDeleteUsersettingsdefault(e.id, ANY), function () {
    verifyUsersettingsdefaultExists(e.id);
  });
});

bthread("Usersettingsdefault update verification", function () {
  const e = waitForAnyUsersettingsdefaultUpdated();
  block(matchDeleteUsersettingsdefault(e.id, ANY), function () {
    verifyUsersettingsdefaultUpdated(e.id);
  });
});

bthread("Usersettingsdefault delete verification", function () {
  const e = waitForAnyUsersettingsdefaultDeleted();
  block(matchAddUsersettingsdefault(e.id, ANY), function () {
    verifyUsersettingsdefaultDoesNotExist(e.id);
  });
});

bthread("Usertopic create verification", function () {
  const e = waitForAnyUsertopicAdded();
  block(matchDeleteUsertopic(e.id, ANY), function () {
    verifyUsertopicExists(e.id);
  });
});

bthread("Usertopic update verification", function () {
  const e = waitForAnyUsertopicUpdated();
  block(matchDeleteUsertopic(e.id, ANY), function () {
    verifyUsertopicUpdated(e.id);
  });
});

bthread("Usertopic delete verification", function () {
  const e = waitForAnyUsertopicDeleted();
  block(matchAddUsertopic(e.id, ANY), function () {
    verifyUsertopicDoesNotExist(e.id);
  });
});

bthread("Userupload create verification", function () {
  const e = waitForAnyUseruploadAdded();
  block(matchDeleteUserupload(e.id, ANY), function () {
    verifyUseruploadExists(e.id);
  });
});

bthread("Userupload update verification", function () {
  const e = waitForAnyUseruploadUpdated();
  block(matchDeleteUserupload(e.id, ANY), function () {
    verifyUseruploadUpdated(e.id);
  });
});

bthread("Userupload delete verification", function () {
  const e = waitForAnyUseruploadDeleted();
  block(matchAddUserupload(e.id, ANY), function () {
    verifyUseruploadDoesNotExist(e.id);
  });
});

bthread("Zulipoutgoingwebhook create verification", function () {
  const e = waitForAnyZulipoutgoingwebhookAdded();
  block(matchDeleteZulipoutgoingwebhook(e.id, ANY), function () {
    verifyZulipoutgoingwebhookExists(e.id);
  });
});

bthread("Zulipoutgoingwebhook update verification", function () {
  const e = waitForAnyZulipoutgoingwebhookUpdated();
  block(matchDeleteZulipoutgoingwebhook(e.id, ANY), function () {
    verifyZulipoutgoingwebhookUpdated(e.id);
  });
});

bthread("Zulipoutgoingwebhook delete verification", function () {
  const e = waitForAnyZulipoutgoingwebhookDeleted();
  block(matchAddZulipoutgoingwebhook(e.id, ANY), function () {
    verifyZulipoutgoingwebhookDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Alertword", function () {
  const x = waitForAnyAlertwordAdded();
  block(matchAddAlertword(x.id, ANY), function () {});
});

bthread("Guard: Unique Androidgcmregid", function () {
  const x = waitForAnyAndroidgcmregidAdded();
  block(matchAddAndroidgcmregid(x.id, ANY), function () {});
});

bthread("Guard: Unique Apnsdevicetoken", function () {
  const x = waitForAnyApnsdevicetokenAdded();
  block(matchAddApnsdevicetoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  block(matchAddAttachment(x.id, ANY), function () {});
});

bthread("Guard: Unique Bigbluebutton", function () {
  const x = waitForAnyBigbluebuttonAdded();
  block(matchAddBigbluebutton(x.id, ANY), function () {});
});

bthread("Guard: Unique Call", function () {
  const x = waitForAnyCallAdded();
  block(matchAddCall(x.id, ANY), function () {});
});

bthread("Guard: Unique Channel", function () {
  const x = waitForAnyChannelAdded();
  block(matchAddChannel(x.id, ANY), function () {});
});

bthread("Guard: Unique Channelfolder", function () {
  const x = waitForAnyChannelfolderAdded();
  block(matchAddChannelfolder(x.id, ANY), function () {});
});

bthread("Guard: Unique Consent", function () {
  const x = waitForAnyConsentAdded();
  block(matchAddConsent(x.id, ANY), function () {});
});

bthread("Guard: Unique Create", function () {
  const x = waitForAnyCreateAdded();
  block(matchAddCreate(x.id, ANY), function () {});
});

bthread("Guard: Unique Deactivate", function () {
  const x = waitForAnyDeactivateAdded();
  block(matchAddDeactivate(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultstream", function () {
  const x = waitForAnyDefaultstreamAdded();
  block(matchAddDefaultstream(x.id, ANY), function () {});
});

bthread("Guard: Unique Deletetopic", function () {
  const x = waitForAnyDeletetopicAdded();
  block(matchAddDeletetopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Devfetchapikey", function () {
  const x = waitForAnyDevfetchapikeyAdded();
  block(matchAddDevfetchapikey(x.id, ANY), function () {});
});

bthread("Guard: Unique Draft", function () {
  const x = waitForAnyDraftAdded();
  block(matchAddDraft(x.id, ANY), function () {});
});

bthread("Guard: Unique E2ee", function () {
  const x = waitForAnyE2eeAdded();
  block(matchAddE2ee(x.id, ANY), function () {});
});

bthread("Guard: Unique Emailaddres", function () {
  const x = waitForAnyEmailaddresAdded();
  block(matchAddEmailaddres(x.id, ANY), function () {});
});

bthread("Guard: Unique Emoji", function () {
  const x = waitForAnyEmojiAdded();
  block(matchAddEmoji(x.id, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  block(matchAddEvent(x.id, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  block(matchAddExport(x.id, ANY), function () {});
});

bthread("Guard: Unique Fetchapikey", function () {
  const x = waitForAnyFetchapikeyAdded();
  block(matchAddFetchapikey(x.id, ANY), function () {});
});

bthread("Guard: Unique Filter", function () {
  const x = waitForAnyFilterAdded();
  block(matchAddFilter(x.id, ANY), function () {});
});

bthread("Guard: Unique Flag", function () {
  const x = waitForAnyFlagAdded();
  block(matchAddFlag(x.id, ANY), function () {});
});

bthread("Guard: Unique Getstreamid", function () {
  const x = waitForAnyGetstreamidAdded();
  block(matchAddGetstreamid(x.id, ANY), function () {});
});

bthread("Guard: Unique History", function () {
  const x = waitForAnyHistoryAdded();
  block(matchAddHistory(x.id, ANY), function () {});
});

bthread("Guard: Unique Invite", function () {
  const x = waitForAnyInviteAdded();
  block(matchAddInvite(x.id, ANY), function () {});
});

bthread("Guard: Unique Linkifier", function () {
  const x = waitForAnyLinkifierAdded();
  block(matchAddLinkifier(x.id, ANY), function () {});
});

bthread("Guard: Unique Markallasread", function () {
  const x = waitForAnyMarkallasreadAdded();
  block(matchAddMarkallasread(x.id, ANY), function () {});
});

bthread("Guard: Unique Markstreamasread", function () {
  const x = waitForAnyMarkstreamasreadAdded();
  block(matchAddMarkstreamasread(x.id, ANY), function () {});
});

bthread("Guard: Unique Marktopicasread", function () {
  const x = waitForAnyMarktopicasreadAdded();
  block(matchAddMarktopicasread(x.id, ANY), function () {});
});

bthread("Guard: Unique Matchesnarrow", function () {
  const x = waitForAnyMatchesnarrowAdded();
  block(matchAddMatchesnarrow(x.id, ANY), function () {});
});

bthread("Guard: Unique Me", function () {
  const x = waitForAnyMeAdded();
  block(matchAddMe(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Message", function () {
  const x = waitForAnyMessageAdded();
  block(matchAddMessage(x.id, ANY), function () {});
});

bthread("Guard: Unique Mobilepush", function () {
  const x = waitForAnyMobilepushAdded();
  block(matchAddMobilepush(x.id, ANY), function () {});
});

bthread("Guard: Unique Multiuse", function () {
  const x = waitForAnyMultiuseAdded();
  block(matchAddMultiuse(x.id, ANY), function () {});
});

bthread("Guard: Unique Mutedtopic", function () {
  const x = waitForAnyMutedtopicAdded();
  block(matchAddMutedtopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Muteduser", function () {
  const x = waitForAnyMuteduserAdded();
  block(matchAddMuteduser(x.id, ANY), function () {});
});

bthread("Guard: Unique Narrow", function () {
  const x = waitForAnyNarrowAdded();
  block(matchAddNarrow(x.id, ANY), function () {});
});

bthread("Guard: Unique Navigationview", function () {
  const x = waitForAnyNavigationviewAdded();
  block(matchAddNavigationview(x.id, ANY), function () {});
});

bthread("Guard: Unique Playground", function () {
  const x = waitForAnyPlaygroundAdded();
  block(matchAddPlayground(x.id, ANY), function () {});
});

bthread("Guard: Unique Presence", function () {
  const x = waitForAnyPresenceAdded();
  block(matchAddPresence(x.id, ANY), function () {});
});

bthread("Guard: Unique Profilefield", function () {
  const x = waitForAnyProfilefieldAdded();
  block(matchAddProfilefield(x.id, ANY), function () {});
});

bthread("Guard: Unique Property", function () {
  const x = waitForAnyPropertyAdded();
  block(matchAddProperty(x.id, ANY), function () {});
});

bthread("Guard: Unique Push", function () {
  const x = waitForAnyPushAdded();
  block(matchAddPush(x.id, ANY), function () {});
});

bthread("Guard: Unique Reaction", function () {
  const x = waitForAnyReactionAdded();
  block(matchAddReaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Reactivate", function () {
  const x = waitForAnyReactivateAdded();
  block(matchAddReactivate(x.id, ANY), function () {});
});

bthread("Guard: Unique Readreceipt", function () {
  const x = waitForAnyReadreceiptAdded();
  block(matchAddReadreceipt(x.id, ANY), function () {});
});

bthread("Guard: Unique Realm", function () {
  const x = waitForAnyRealmAdded();
  block(matchAddRealm(x.id, ANY), function () {});
});

bthread("Guard: Unique Realtime", function () {
  const x = waitForAnyRealtimeAdded();
  block(matchAddRealtime(x.id, ANY), function () {});
});

bthread("Guard: Unique Register", function () {
  const x = waitForAnyRegisterAdded();
  block(matchAddRegister(x.id, ANY), function () {});
});

bthread("Guard: Unique Reminder", function () {
  const x = waitForAnyReminderAdded();
  block(matchAddReminder(x.id, ANY), function () {});
});

bthread("Guard: Unique Remote", function () {
  const x = waitForAnyRemoteAdded();
  block(matchAddRemote(x.id, ANY), function () {});
});

bthread("Guard: Unique Render", function () {
  const x = waitForAnyRenderAdded();
  block(matchAddRender(x.id, ANY), function () {});
});

bthread("Guard: Unique Report", function () {
  const x = waitForAnyReportAdded();
  block(matchAddReport(x.id, ANY), function () {});
});

bthread("Guard: Unique Resend", function () {
  const x = waitForAnyResendAdded();
  block(matchAddResend(x.id, ANY), function () {});
});

bthread("Guard: Unique Resterrorhandling", function () {
  const x = waitForAnyResterrorhandlingAdded();
  block(matchAddResterrorhandling(x.id, ANY), function () {});
});

bthread("Guard: Unique Savedsnippet", function () {
  const x = waitForAnySavedsnippetAdded();
  block(matchAddSavedsnippet(x.id, ANY), function () {});
});

bthread("Guard: Unique Scheduledmessage", function () {
  const x = waitForAnyScheduledmessageAdded();
  block(matchAddScheduledmessage(x.id, ANY), function () {});
});

bthread("Guard: Unique Serversetting", function () {
  const x = waitForAnyServersettingAdded();
  block(matchAddServersetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  block(matchAddSetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  block(matchAddStatu(x.id, ANY), function () {});
});

bthread("Guard: Unique Stream", function () {
  const x = waitForAnyStreamAdded();
  block(matchAddStream(x.id, ANY), function () {});
});

bthread("Guard: Unique Subgroup", function () {
  const x = waitForAnySubgroupAdded();
  block(matchAddSubgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  block(matchAddSubscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Testnotification", function () {
  const x = waitForAnyTestnotificationAdded();
  block(matchAddTestnotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Testwelcomebotcustommessage", function () {
  const x = waitForAnyTestwelcomebotcustommessageAdded();
  block(matchAddTestwelcomebotcustommessage(x.id, ANY), function () {});
});

bthread("Guard: Unique Topic", function () {
  const x = waitForAnyTopicAdded();
  block(matchAddTopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Typing", function () {
  const x = waitForAnyTypingAdded();
  block(matchAddTyping(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Usergroup", function () {
  const x = waitForAnyUsergroupAdded();
  block(matchAddUsergroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Usersettingsdefault", function () {
  const x = waitForAnyUsersettingsdefaultAdded();
  block(matchAddUsersettingsdefault(x.id, ANY), function () {});
});

bthread("Guard: Unique Usertopic", function () {
  const x = waitForAnyUsertopicAdded();
  block(matchAddUsertopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Userupload", function () {
  const x = waitForAnyUseruploadAdded();
  block(matchAddUserupload(x.id, ANY), function () {});
});

bthread("Guard: Unique Zulipoutgoingwebhook", function () {
  const x = waitForAnyZulipoutgoingwebhookAdded();
  block(matchAddZulipoutgoingwebhook(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
