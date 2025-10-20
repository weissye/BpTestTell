// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("20100401Lifecycle", function () {
  const x = pick([{id: "2001"}, {id: "2002"}]);
  add20100401(x.id);
  update20100401(x.id);
  update20100401(x.id);
  verify20100401Exists(x.id);
  verify20100401Updated(x.id);
});

bthread("AccountLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccount(x.id);
  updateAccount(x.id);
  updateAccount(x.id);
  verifyAccountExists(x.id);
  verifyAccountUpdated(x.id);
});

bthread("AccountsjsonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccountsjson(x.id);
  updateAccountsjson(x.id);
  updateAccountsjson(x.id);
  verifyAccountsjsonExists(x.id);
  verifyAccountsjsonUpdated(x.id);
});

bthread("AddonresultLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAddonresult(x.id);
  updateAddonresult(x.id);
  updateAddonresult(x.id);
  verifyAddonresultExists(x.id);
  verifyAddonresultUpdated(x.id);
});

bthread("AddonresultsjsonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAddonresultsjson(x.id);
  updateAddonresultsjson(x.id);
  updateAddonresultsjson(x.id);
  verifyAddonresultsjsonExists(x.id);
  verifyAddonresultsjsonUpdated(x.id);
});

bthread("AddressLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAddress(x.id);
  updateAddress(x.id);
  updateAddress(x.id);
  verifyAddressExists(x.id);
  verifyAddressUpdated(x.id);
});

bthread("AddressesjsonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAddressesjson(x.id);
  updateAddressesjson(x.id);
  updateAddressesjson(x.id);
  verifyAddressesjsonExists(x.id);
  verifyAddressesjsonUpdated(x.id);
});

bthread("AlltimejsonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAlltimejson(x.id);
  updateAlltimejson(x.id);
  updateAlltimejson(x.id);
  verifyAlltimejsonExists(x.id);
  verifyAlltimejsonUpdated(x.id);
});

bthread("ApplicationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApplication(x.id);
  updateApplication(x.id);
  updateApplication(x.id);
  verifyApplicationExists(x.id);
  verifyApplicationUpdated(x.id);
});

bthread("ApplicationsjsonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApplicationsjson(x.id);
  updateApplicationsjson(x.id);
  updateApplicationsjson(x.id);
  verifyApplicationsjsonExists(x.id);
  verifyApplicationsjsonUpdated(x.id);
});

bthread("AssignedaddonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssignedaddon(x.id);
  updateAssignedaddon(x.id);
  updateAssignedaddon(x.id);
  verifyAssignedaddonExists(x.id);
  verifyAssignedaddonUpdated(x.id);
});

bthread("AssignedaddonsjsonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssignedaddonsjson(x.id);
  updateAssignedaddonsjson(x.id);
  updateAssignedaddonsjson(x.id);
  verifyAssignedaddonsjsonExists(x.id);
  verifyAssignedaddonsjsonUpdated(x.id);
});

bthread("AuthLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuth(x.id);
  updateAuth(x.id);
  updateAuth(x.id);
  verifyAuthExists(x.id);
  verifyAuthUpdated(x.id);
});

bthread("AuthorizedconnectappLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuthorizedconnectapp(x.id);
  updateAuthorizedconnectapp(x.id);
  updateAuthorizedconnectapp(x.id);
  verifyAuthorizedconnectappExists(x.id);
  verifyAuthorizedconnectappUpdated(x.id);
});

bthread("AuthorizedconnectappsjsonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuthorizedconnectappsjson(x.id);
  updateAuthorizedconnectappsjson(x.id);
  updateAuthorizedconnectappsjson(x.id);
  verifyAuthorizedconnectappsjsonExists(x.id);
  verifyAuthorizedconnectappsjsonUpdated(x.id);
});

bthread("AvailablephonenumberLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailablephonenumber(x.id);
  updateAvailablephonenumber(x.id);
  updateAvailablephonenumber(x.id);
  verifyAvailablephonenumberExists(x.id);
  verifyAvailablephonenumberUpdated(x.id);
});

bthread("AvailablephonenumbersjsonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailablephonenumbersjson(x.id);
  updateAvailablephonenumbersjson(x.id);
  updateAvailablephonenumbersjson(x.id);
  verifyAvailablephonenumbersjsonExists(x.id);
  verifyAvailablephonenumbersjsonUpdated(x.id);
});

bthread("BalancejsonLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBalancejson(x.id);
  updateBalancejson(x.id);
  updateBalancejson(x.id);
  verifyBalancejsonExists(x.id);
  verifyBalancejsonUpdated(x.id);
});

bthread("CallLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCall(x.id);
  updateCall(x.id);
  updateCall(x.id);
  verifyCallExists(x.id);
  verifyCallUpdated(x.id);
});

bthread("CallsidjsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCallsidjson(x.id);
  updateCallsidjson(x.id);
  updateCallsidjson(x.id);
  verifyCallsidjsonExists(x.id);
  verifyCallsidjsonUpdated(x.id);
});

bthread("CallsjsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCallsjson(x.id);
  updateCallsjson(x.id);
  updateCallsjson(x.id);
  verifyCallsjsonExists(x.id);
  verifyCallsjsonUpdated(x.id);
});

bthread("ConferenceLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConference(x.id);
  updateConference(x.id);
  updateConference(x.id);
  verifyConferenceExists(x.id);
  verifyConferenceUpdated(x.id);
});

bthread("ConferencesjsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConferencesjson(x.id);
  updateConferencesjson(x.id);
  updateConferencesjson(x.id);
  verifyConferencesjsonExists(x.id);
  verifyConferencesjsonUpdated(x.id);
});

bthread("ConnectappLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConnectapp(x.id);
  updateConnectapp(x.id);
  updateConnectapp(x.id);
  verifyConnectappExists(x.id);
  verifyConnectappUpdated(x.id);
});

bthread("ConnectappsidjsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConnectappsidjson(x.id);
  updateConnectappsidjson(x.id);
  updateConnectappsidjson(x.id);
  verifyConnectappsidjsonExists(x.id);
  verifyConnectappsidjsonUpdated(x.id);
});

bthread("ConnectappsjsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConnectappsjson(x.id);
  updateConnectappsjson(x.id);
  updateConnectappsjson(x.id);
  verifyConnectappsjsonExists(x.id);
  verifyConnectappsjsonUpdated(x.id);
});

bthread("CountrycodejsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCountrycodejson(x.id);
  updateCountrycodejson(x.id);
  updateCountrycodejson(x.id);
  verifyCountrycodejsonExists(x.id);
  verifyCountrycodejsonUpdated(x.id);
});

bthread("CredentialLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredential(x.id);
  updateCredential(x.id);
  updateCredential(x.id);
  verifyCredentialExists(x.id);
  verifyCredentialUpdated(x.id);
});

bthread("CredentiallistLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredentiallist(x.id);
  updateCredentiallist(x.id);
  updateCredentiallist(x.id);
  verifyCredentiallistExists(x.id);
  verifyCredentiallistUpdated(x.id);
});

bthread("CredentiallistmappingLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredentiallistmapping(x.id);
  updateCredentiallistmapping(x.id);
  updateCredentiallistmapping(x.id);
  verifyCredentiallistmappingExists(x.id);
  verifyCredentiallistmappingUpdated(x.id);
});

bthread("CredentiallistmappingsjsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredentiallistmappingsjson(x.id);
  updateCredentiallistmappingsjson(x.id);
  updateCredentiallistmappingsjson(x.id);
  verifyCredentiallistmappingsjsonExists(x.id);
  verifyCredentiallistmappingsjsonUpdated(x.id);
});

bthread("CredentiallistsjsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredentiallistsjson(x.id);
  updateCredentiallistsjson(x.id);
  updateCredentiallistsjson(x.id);
  verifyCredentiallistsjsonExists(x.id);
  verifyCredentiallistsjsonUpdated(x.id);
});

bthread("CredentialsjsonLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredentialsjson(x.id);
  updateCredentialsjson(x.id);
  updateCredentialsjson(x.id);
  verifyCredentialsjsonExists(x.id);
  verifyCredentialsjsonUpdated(x.id);
});

bthread("DailyjsonLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDailyjson(x.id);
  updateDailyjson(x.id);
  updateDailyjson(x.id);
  verifyDailyjsonExists(x.id);
  verifyDailyjsonUpdated(x.id);
});

bthread("DatajsonLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDatajson(x.id);
  updateDatajson(x.id);
  updateDatajson(x.id);
  verifyDatajsonExists(x.id);
  verifyDatajsonUpdated(x.id);
});

bthread("DependentphonenumbersjsonLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDependentphonenumbersjson(x.id);
  updateDependentphonenumbersjson(x.id);
  updateDependentphonenumbersjson(x.id);
  verifyDependentphonenumbersjsonExists(x.id);
  verifyDependentphonenumbersjsonUpdated(x.id);
});

bthread("DomainLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDomain(x.id);
  updateDomain(x.id);
  updateDomain(x.id);
  verifyDomainExists(x.id);
  verifyDomainUpdated(x.id);
});

bthread("DomainsjsonLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDomainsjson(x.id);
  updateDomainsjson(x.id);
  updateDomainsjson(x.id);
  verifyDomainsjsonExists(x.id);
  verifyDomainsjsonUpdated(x.id);
});

bthread("EventsjsonLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEventsjson(x.id);
  updateEventsjson(x.id);
  updateEventsjson(x.id);
  verifyEventsjsonExists(x.id);
  verifyEventsjsonUpdated(x.id);
});

bthread("ExtensionLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExtension(x.id);
  updateExtension(x.id);
  updateExtension(x.id);
  verifyExtensionExists(x.id);
  verifyExtensionUpdated(x.id);
});

bthread("ExtensionsjsonLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExtensionsjson(x.id);
  updateExtensionsjson(x.id);
  updateExtensionsjson(x.id);
  verifyExtensionsjsonExists(x.id);
  verifyExtensionsjsonUpdated(x.id);
});

bthread("FeedbackjsonLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFeedbackjson(x.id);
  updateFeedbackjson(x.id);
  updateFeedbackjson(x.id);
  verifyFeedbackjsonExists(x.id);
  verifyFeedbackjsonUpdated(x.id);
});

bthread("IncomingphonenumberLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIncomingphonenumber(x.id);
  updateIncomingphonenumber(x.id);
  updateIncomingphonenumber(x.id);
  verifyIncomingphonenumberExists(x.id);
  verifyIncomingphonenumberUpdated(x.id);
});

bthread("IncomingphonenumbersjsonLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIncomingphonenumbersjson(x.id);
  updateIncomingphonenumbersjson(x.id);
  updateIncomingphonenumbersjson(x.id);
  verifyIncomingphonenumbersjsonExists(x.id);
  verifyIncomingphonenumbersjsonUpdated(x.id);
});

bthread("IpaccesscontrollistLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpaccesscontrollist(x.id);
  updateIpaccesscontrollist(x.id);
  updateIpaccesscontrollist(x.id);
  verifyIpaccesscontrollistExists(x.id);
  verifyIpaccesscontrollistUpdated(x.id);
});

bthread("IpaccesscontrollistmappingLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpaccesscontrollistmapping(x.id);
  updateIpaccesscontrollistmapping(x.id);
  updateIpaccesscontrollistmapping(x.id);
  verifyIpaccesscontrollistmappingExists(x.id);
  verifyIpaccesscontrollistmappingUpdated(x.id);
});

bthread("IpaccesscontrollistmappingsjsonLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpaccesscontrollistmappingsjson(x.id);
  updateIpaccesscontrollistmappingsjson(x.id);
  updateIpaccesscontrollistmappingsjson(x.id);
  verifyIpaccesscontrollistmappingsjsonExists(x.id);
  verifyIpaccesscontrollistmappingsjsonUpdated(x.id);
});

bthread("IpaccesscontrollistsjsonLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpaccesscontrollistsjson(x.id);
  updateIpaccesscontrollistsjson(x.id);
  updateIpaccesscontrollistsjson(x.id);
  verifyIpaccesscontrollistsjsonExists(x.id);
  verifyIpaccesscontrollistsjsonUpdated(x.id);
});

bthread("IpaddressLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpaddress(x.id);
  updateIpaddress(x.id);
  updateIpaddress(x.id);
  verifyIpaddressExists(x.id);
  verifyIpaddressUpdated(x.id);
});

bthread("IpaddressesjsonLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpaddressesjson(x.id);
  updateIpaddressesjson(x.id);
  updateIpaddressesjson(x.id);
  verifyIpaddressesjsonExists(x.id);
  verifyIpaddressesjsonUpdated(x.id);
});

bthread("KeyLifecycle", function () {
  const x = pick([{id: "K001"}, {id: "K002"}]);
  addKey(x.id);
  updateKey(x.id);
  updateKey(x.id);
  verifyKeyExists(x.id);
  verifyKeyUpdated(x.id);
});

bthread("KeysjsonLifecycle", function () {
  const x = pick([{id: "K001"}, {id: "K002"}]);
  addKeysjson(x.id);
  updateKeysjson(x.id);
  updateKeysjson(x.id);
  verifyKeysjsonExists(x.id);
  verifyKeysjsonUpdated(x.id);
});

bthread("LastmonthjsonLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLastmonthjson(x.id);
  updateLastmonthjson(x.id);
  updateLastmonthjson(x.id);
  verifyLastmonthjsonExists(x.id);
  verifyLastmonthjsonUpdated(x.id);
});

bthread("LocaljsonLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLocaljson(x.id);
  updateLocaljson(x.id);
  updateLocaljson(x.id);
  verifyLocaljsonExists(x.id);
  verifyLocaljsonUpdated(x.id);
});

bthread("MachinetomachinejsonLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMachinetomachinejson(x.id);
  updateMachinetomachinejson(x.id);
  updateMachinetomachinejson(x.id);
  verifyMachinetomachinejsonExists(x.id);
  verifyMachinetomachinejsonUpdated(x.id);
});

bthread("MediaLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMedia(x.id);
  updateMedia(x.id);
  updateMedia(x.id);
  verifyMediaExists(x.id);
  verifyMediaUpdated(x.id);
});

bthread("MediajsonLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMediajson(x.id);
  updateMediajson(x.id);
  updateMediajson(x.id);
  verifyMediajsonExists(x.id);
  verifyMediajsonUpdated(x.id);
});

bthread("MemberLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMember(x.id);
  updateMember(x.id);
  updateMember(x.id);
  verifyMemberExists(x.id);
  verifyMemberUpdated(x.id);
});

bthread("MembersjsonLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMembersjson(x.id);
  updateMembersjson(x.id);
  updateMembersjson(x.id);
  verifyMembersjsonExists(x.id);
  verifyMembersjsonUpdated(x.id);
});

bthread("MessageLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMessage(x.id);
  updateMessage(x.id);
  updateMessage(x.id);
  verifyMessageExists(x.id);
  verifyMessageUpdated(x.id);
});

bthread("MessagesjsonLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMessagesjson(x.id);
  updateMessagesjson(x.id);
  updateMessagesjson(x.id);
  verifyMessagesjsonExists(x.id);
  verifyMessagesjsonUpdated(x.id);
});

bthread("MobilejsonLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMobilejson(x.id);
  updateMobilejson(x.id);
  updateMobilejson(x.id);
  verifyMobilejsonExists(x.id);
  verifyMobilejsonUpdated(x.id);
});

bthread("MonthlyjsonLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMonthlyjson(x.id);
  updateMonthlyjson(x.id);
  updateMonthlyjson(x.id);
  verifyMonthlyjsonExists(x.id);
  verifyMonthlyjsonUpdated(x.id);
});

bthread("NationaljsonLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNationaljson(x.id);
  updateNationaljson(x.id);
  updateNationaljson(x.id);
  verifyNationaljsonExists(x.id);
  verifyNationaljsonUpdated(x.id);
});

bthread("NotificationLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotification(x.id);
  updateNotification(x.id);
  updateNotification(x.id);
  verifyNotificationExists(x.id);
  verifyNotificationUpdated(x.id);
});

bthread("NotificationsjsonLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotificationsjson(x.id);
  updateNotificationsjson(x.id);
  updateNotificationsjson(x.id);
  verifyNotificationsjsonExists(x.id);
  verifyNotificationsjsonUpdated(x.id);
});

bthread("OutgoingcalleridLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOutgoingcallerid(x.id);
  updateOutgoingcallerid(x.id);
  updateOutgoingcallerid(x.id);
  verifyOutgoingcalleridExists(x.id);
  verifyOutgoingcalleridUpdated(x.id);
});

bthread("OutgoingcalleridsjsonLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOutgoingcalleridsjson(x.id);
  updateOutgoingcalleridsjson(x.id);
  updateOutgoingcalleridsjson(x.id);
  verifyOutgoingcalleridsjsonExists(x.id);
  verifyOutgoingcalleridsjsonUpdated(x.id);
});

bthread("ParticipantLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addParticipant(x.id);
  updateParticipant(x.id);
  updateParticipant(x.id);
  verifyParticipantExists(x.id);
  verifyParticipantUpdated(x.id);
});

bthread("ParticipantsjsonLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addParticipantsjson(x.id);
  updateParticipantsjson(x.id);
  updateParticipantsjson(x.id);
  verifyParticipantsjsonExists(x.id);
  verifyParticipantsjsonUpdated(x.id);
});

bthread("PayloadLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPayload(x.id);
  updatePayload(x.id);
  updatePayload(x.id);
  verifyPayloadExists(x.id);
  verifyPayloadUpdated(x.id);
});

bthread("PayloadsjsonLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPayloadsjson(x.id);
  updatePayloadsjson(x.id);
  updatePayloadsjson(x.id);
  verifyPayloadsjsonExists(x.id);
  verifyPayloadsjsonUpdated(x.id);
});

bthread("PaymentLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPayment(x.id);
  updatePayment(x.id);
  updatePayment(x.id);
  verifyPaymentExists(x.id);
  verifyPaymentUpdated(x.id);
});

bthread("PaymentsjsonLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPaymentsjson(x.id);
  updatePaymentsjson(x.id);
  updatePaymentsjson(x.id);
  verifyPaymentsjsonExists(x.id);
  verifyPaymentsjsonUpdated(x.id);
});

bthread("QueueLifecycle", function () {
  const x = pick([{id: "Q001"}, {id: "Q002"}]);
  addQueue(x.id);
  updateQueue(x.id);
  updateQueue(x.id);
  verifyQueueExists(x.id);
  verifyQueueUpdated(x.id);
});

bthread("QueuesjsonLifecycle", function () {
  const x = pick([{id: "Q001"}, {id: "Q002"}]);
  addQueuesjson(x.id);
  updateQueuesjson(x.id);
  updateQueuesjson(x.id);
  verifyQueuesjsonExists(x.id);
  verifyQueuesjsonUpdated(x.id);
});

bthread("RecordLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRecord(x.id);
  updateRecord(x.id);
  updateRecord(x.id);
  verifyRecordExists(x.id);
  verifyRecordUpdated(x.id);
});

bthread("RecordingLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRecording(x.id);
  updateRecording(x.id);
  updateRecording(x.id);
  verifyRecordingExists(x.id);
  verifyRecordingUpdated(x.id);
});

bthread("RecordingsjsonLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRecordingsjson(x.id);
  updateRecordingsjson(x.id);
  updateRecordingsjson(x.id);
  verifyRecordingsjsonExists(x.id);
  verifyRecordingsjsonUpdated(x.id);
});

bthread("RecordsjsonLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRecordsjson(x.id);
  updateRecordsjson(x.id);
  updateRecordsjson(x.id);
  verifyRecordsjsonExists(x.id);
  verifyRecordsjsonUpdated(x.id);
});

bthread("RegistrationLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegistration(x.id);
  updateRegistration(x.id);
  updateRegistration(x.id);
  verifyRegistrationExists(x.id);
  verifyRegistrationUpdated(x.id);
});

bthread("SharedcostjsonLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSharedcostjson(x.id);
  updateSharedcostjson(x.id);
  updateSharedcostjson(x.id);
  verifySharedcostjsonExists(x.id);
  verifySharedcostjsonUpdated(x.id);
});

bthread("ShortcodeLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addShortcode(x.id);
  updateShortcode(x.id);
  updateShortcode(x.id);
  verifyShortcodeExists(x.id);
  verifyShortcodeUpdated(x.id);
});

bthread("ShortcodesjsonLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addShortcodesjson(x.id);
  updateShortcodesjson(x.id);
  updateShortcodesjson(x.id);
  verifyShortcodesjsonExists(x.id);
  verifyShortcodesjsonUpdated(x.id);
});

bthread("SidjsonLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSidjson(x.id);
  updateSidjson(x.id);
  updateSidjson(x.id);
  verifySidjsonExists(x.id);
  verifySidjsonUpdated(x.id);
});

bthread("SigningkeyLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSigningkey(x.id);
  updateSigningkey(x.id);
  updateSigningkey(x.id);
  verifySigningkeyExists(x.id);
  verifySigningkeyUpdated(x.id);
});

bthread("SigningkeysjsonLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSigningkeysjson(x.id);
  updateSigningkeysjson(x.id);
  updateSigningkeysjson(x.id);
  verifySigningkeysjsonExists(x.id);
  verifySigningkeysjsonUpdated(x.id);
});

bthread("SipLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSip(x.id);
  updateSip(x.id);
  updateSip(x.id);
  verifySipExists(x.id);
  verifySipUpdated(x.id);
});

bthread("SiprecLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSiprec(x.id);
  updateSiprec(x.id);
  updateSiprec(x.id);
  verifySiprecExists(x.id);
  verifySiprecUpdated(x.id);
});

bthread("SiprecjsonLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSiprecjson(x.id);
  updateSiprecjson(x.id);
  updateSiprecjson(x.id);
  verifySiprecjsonExists(x.id);
  verifySiprecjsonUpdated(x.id);
});

bthread("SmLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSm(x.id);
  updateSm(x.id);
  updateSm(x.id);
  verifySmExists(x.id);
  verifySmUpdated(x.id);
});

bthread("StreamLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStream(x.id);
  updateStream(x.id);
  updateStream(x.id);
  verifyStreamExists(x.id);
  verifyStreamUpdated(x.id);
});

bthread("StreamsjsonLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStreamsjson(x.id);
  updateStreamsjson(x.id);
  updateStreamsjson(x.id);
  verifyStreamsjsonExists(x.id);
  verifyStreamsjsonUpdated(x.id);
});

bthread("ThismonthjsonLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addThismonthjson(x.id);
  updateThismonthjson(x.id);
  updateThismonthjson(x.id);
  verifyThismonthjsonExists(x.id);
  verifyThismonthjsonUpdated(x.id);
});

bthread("TodayjsonLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTodayjson(x.id);
  updateTodayjson(x.id);
  updateTodayjson(x.id);
  verifyTodayjsonExists(x.id);
  verifyTodayjsonUpdated(x.id);
});

bthread("TokensjsonLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTokensjson(x.id);
  updateTokensjson(x.id);
  updateTokensjson(x.id);
  verifyTokensjsonExists(x.id);
  verifyTokensjsonUpdated(x.id);
});

bthread("TollfreejsonLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTollfreejson(x.id);
  updateTollfreejson(x.id);
  updateTollfreejson(x.id);
  verifyTollfreejsonExists(x.id);
  verifyTollfreejsonUpdated(x.id);
});

bthread("TranscriptionLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTranscription(x.id);
  updateTranscription(x.id);
  updateTranscription(x.id);
  verifyTranscriptionExists(x.id);
  verifyTranscriptionUpdated(x.id);
});

bthread("TranscriptionsjsonLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTranscriptionsjson(x.id);
  updateTranscriptionsjson(x.id);
  updateTranscriptionsjson(x.id);
  verifyTranscriptionsjsonExists(x.id);
  verifyTranscriptionsjsonUpdated(x.id);
});

bthread("TriggerLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTrigger(x.id);
  updateTrigger(x.id);
  updateTrigger(x.id);
  verifyTriggerExists(x.id);
  verifyTriggerUpdated(x.id);
});

bthread("TriggersjsonLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTriggersjson(x.id);
  updateTriggersjson(x.id);
  updateTriggersjson(x.id);
  verifyTriggersjsonExists(x.id);
  verifyTriggersjsonUpdated(x.id);
});

bthread("UsageLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsage(x.id);
  updateUsage(x.id);
  updateUsage(x.id);
  verifyUsageExists(x.id);
  verifyUsageUpdated(x.id);
});

bthread("UserdefinedmessagesjsonLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserdefinedmessagesjson(x.id);
  updateUserdefinedmessagesjson(x.id);
  updateUserdefinedmessagesjson(x.id);
  verifyUserdefinedmessagesjsonExists(x.id);
  verifyUserdefinedmessagesjsonUpdated(x.id);
});

bthread("UserdefinedmessagesubscriptionLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserdefinedmessagesubscription(x.id);
  updateUserdefinedmessagesubscription(x.id);
  updateUserdefinedmessagesubscription(x.id);
  verifyUserdefinedmessagesubscriptionExists(x.id);
  verifyUserdefinedmessagesubscriptionUpdated(x.id);
});

bthread("UserdefinedmessagesubscriptionsjsonLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserdefinedmessagesubscriptionsjson(x.id);
  updateUserdefinedmessagesubscriptionsjson(x.id);
  updateUserdefinedmessagesubscriptionsjson(x.id);
  verifyUserdefinedmessagesubscriptionsjsonExists(x.id);
  verifyUserdefinedmessagesubscriptionsjsonUpdated(x.id);
});

bthread("VoipjsonLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVoipjson(x.id);
  updateVoipjson(x.id);
  updateVoipjson(x.id);
  verifyVoipjsonExists(x.id);
  verifyVoipjsonUpdated(x.id);
});

bthread("YearlyjsonLifecycle", function () {
  const x = pick([{id: "Y001"}, {id: "Y002"}]);
  addYearlyjson(x.id);
  updateYearlyjson(x.id);
  updateYearlyjson(x.id);
  verifyYearlyjsonExists(x.id);
  verifyYearlyjsonUpdated(x.id);
});

bthread("YesterdayjsonLifecycle", function () {
  const x = pick([{id: "Y001"}, {id: "Y002"}]);
  addYesterdayjson(x.id);
  updateYesterdayjson(x.id);
  updateYesterdayjson(x.id);
  verifyYesterdayjsonExists(x.id);
  verifyYesterdayjsonUpdated(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("20100401 create verification", function () {
  const e = waitForAny20100401Added();
  block(matchDelete20100401(e.id, ANY), function () {
    verify20100401Exists(e.id);
  });
});

bthread("20100401 update verification", function () {
  const e = waitForAny20100401Updated();
  block(matchDelete20100401(e.id, ANY), function () {
    verify20100401Updated(e.id);
  });
});

bthread("20100401 delete verification", function () {
  const e = waitForAny20100401Deleted();
  block(matchAdd20100401(e.id, ANY), function () {
    verify20100401DoesNotExist(e.id);
  });
});

bthread("Account create verification", function () {
  const e = waitForAnyAccountAdded();
  block(matchDeleteAccount(e.id, ANY), function () {
    verifyAccountExists(e.id);
  });
});

bthread("Account update verification", function () {
  const e = waitForAnyAccountUpdated();
  block(matchDeleteAccount(e.id, ANY), function () {
    verifyAccountUpdated(e.id);
  });
});

bthread("Account delete verification", function () {
  const e = waitForAnyAccountDeleted();
  block(matchAddAccount(e.id, ANY), function () {
    verifyAccountDoesNotExist(e.id);
  });
});

bthread("Accountsjson create verification", function () {
  const e = waitForAnyAccountsjsonAdded();
  block(matchDeleteAccountsjson(e.id, ANY), function () {
    verifyAccountsjsonExists(e.id);
  });
});

bthread("Accountsjson update verification", function () {
  const e = waitForAnyAccountsjsonUpdated();
  block(matchDeleteAccountsjson(e.id, ANY), function () {
    verifyAccountsjsonUpdated(e.id);
  });
});

bthread("Accountsjson delete verification", function () {
  const e = waitForAnyAccountsjsonDeleted();
  block(matchAddAccountsjson(e.id, ANY), function () {
    verifyAccountsjsonDoesNotExist(e.id);
  });
});

bthread("Addonresult create verification", function () {
  const e = waitForAnyAddonresultAdded();
  block(matchDeleteAddonresult(e.id, ANY), function () {
    verifyAddonresultExists(e.id);
  });
});

bthread("Addonresult update verification", function () {
  const e = waitForAnyAddonresultUpdated();
  block(matchDeleteAddonresult(e.id, ANY), function () {
    verifyAddonresultUpdated(e.id);
  });
});

bthread("Addonresult delete verification", function () {
  const e = waitForAnyAddonresultDeleted();
  block(matchAddAddonresult(e.id, ANY), function () {
    verifyAddonresultDoesNotExist(e.id);
  });
});

bthread("Addonresultsjson create verification", function () {
  const e = waitForAnyAddonresultsjsonAdded();
  block(matchDeleteAddonresultsjson(e.id, ANY), function () {
    verifyAddonresultsjsonExists(e.id);
  });
});

bthread("Addonresultsjson update verification", function () {
  const e = waitForAnyAddonresultsjsonUpdated();
  block(matchDeleteAddonresultsjson(e.id, ANY), function () {
    verifyAddonresultsjsonUpdated(e.id);
  });
});

bthread("Addonresultsjson delete verification", function () {
  const e = waitForAnyAddonresultsjsonDeleted();
  block(matchAddAddonresultsjson(e.id, ANY), function () {
    verifyAddonresultsjsonDoesNotExist(e.id);
  });
});

bthread("Address create verification", function () {
  const e = waitForAnyAddressAdded();
  block(matchDeleteAddress(e.id, ANY), function () {
    verifyAddressExists(e.id);
  });
});

bthread("Address update verification", function () {
  const e = waitForAnyAddressUpdated();
  block(matchDeleteAddress(e.id, ANY), function () {
    verifyAddressUpdated(e.id);
  });
});

bthread("Address delete verification", function () {
  const e = waitForAnyAddressDeleted();
  block(matchAddAddress(e.id, ANY), function () {
    verifyAddressDoesNotExist(e.id);
  });
});

bthread("Addressesjson create verification", function () {
  const e = waitForAnyAddressesjsonAdded();
  block(matchDeleteAddressesjson(e.id, ANY), function () {
    verifyAddressesjsonExists(e.id);
  });
});

bthread("Addressesjson update verification", function () {
  const e = waitForAnyAddressesjsonUpdated();
  block(matchDeleteAddressesjson(e.id, ANY), function () {
    verifyAddressesjsonUpdated(e.id);
  });
});

bthread("Addressesjson delete verification", function () {
  const e = waitForAnyAddressesjsonDeleted();
  block(matchAddAddressesjson(e.id, ANY), function () {
    verifyAddressesjsonDoesNotExist(e.id);
  });
});

bthread("Alltimejson create verification", function () {
  const e = waitForAnyAlltimejsonAdded();
  block(matchDeleteAlltimejson(e.id, ANY), function () {
    verifyAlltimejsonExists(e.id);
  });
});

bthread("Alltimejson update verification", function () {
  const e = waitForAnyAlltimejsonUpdated();
  block(matchDeleteAlltimejson(e.id, ANY), function () {
    verifyAlltimejsonUpdated(e.id);
  });
});

bthread("Alltimejson delete verification", function () {
  const e = waitForAnyAlltimejsonDeleted();
  block(matchAddAlltimejson(e.id, ANY), function () {
    verifyAlltimejsonDoesNotExist(e.id);
  });
});

bthread("Application create verification", function () {
  const e = waitForAnyApplicationAdded();
  block(matchDeleteApplication(e.id, ANY), function () {
    verifyApplicationExists(e.id);
  });
});

bthread("Application update verification", function () {
  const e = waitForAnyApplicationUpdated();
  block(matchDeleteApplication(e.id, ANY), function () {
    verifyApplicationUpdated(e.id);
  });
});

bthread("Application delete verification", function () {
  const e = waitForAnyApplicationDeleted();
  block(matchAddApplication(e.id, ANY), function () {
    verifyApplicationDoesNotExist(e.id);
  });
});

bthread("Applicationsjson create verification", function () {
  const e = waitForAnyApplicationsjsonAdded();
  block(matchDeleteApplicationsjson(e.id, ANY), function () {
    verifyApplicationsjsonExists(e.id);
  });
});

bthread("Applicationsjson update verification", function () {
  const e = waitForAnyApplicationsjsonUpdated();
  block(matchDeleteApplicationsjson(e.id, ANY), function () {
    verifyApplicationsjsonUpdated(e.id);
  });
});

bthread("Applicationsjson delete verification", function () {
  const e = waitForAnyApplicationsjsonDeleted();
  block(matchAddApplicationsjson(e.id, ANY), function () {
    verifyApplicationsjsonDoesNotExist(e.id);
  });
});

bthread("Assignedaddon create verification", function () {
  const e = waitForAnyAssignedaddonAdded();
  block(matchDeleteAssignedaddon(e.id, ANY), function () {
    verifyAssignedaddonExists(e.id);
  });
});

bthread("Assignedaddon update verification", function () {
  const e = waitForAnyAssignedaddonUpdated();
  block(matchDeleteAssignedaddon(e.id, ANY), function () {
    verifyAssignedaddonUpdated(e.id);
  });
});

bthread("Assignedaddon delete verification", function () {
  const e = waitForAnyAssignedaddonDeleted();
  block(matchAddAssignedaddon(e.id, ANY), function () {
    verifyAssignedaddonDoesNotExist(e.id);
  });
});

bthread("Assignedaddonsjson create verification", function () {
  const e = waitForAnyAssignedaddonsjsonAdded();
  block(matchDeleteAssignedaddonsjson(e.id, ANY), function () {
    verifyAssignedaddonsjsonExists(e.id);
  });
});

bthread("Assignedaddonsjson update verification", function () {
  const e = waitForAnyAssignedaddonsjsonUpdated();
  block(matchDeleteAssignedaddonsjson(e.id, ANY), function () {
    verifyAssignedaddonsjsonUpdated(e.id);
  });
});

bthread("Assignedaddonsjson delete verification", function () {
  const e = waitForAnyAssignedaddonsjsonDeleted();
  block(matchAddAssignedaddonsjson(e.id, ANY), function () {
    verifyAssignedaddonsjsonDoesNotExist(e.id);
  });
});

bthread("Auth create verification", function () {
  const e = waitForAnyAuthAdded();
  block(matchDeleteAuth(e.id, ANY), function () {
    verifyAuthExists(e.id);
  });
});

bthread("Auth update verification", function () {
  const e = waitForAnyAuthUpdated();
  block(matchDeleteAuth(e.id, ANY), function () {
    verifyAuthUpdated(e.id);
  });
});

bthread("Auth delete verification", function () {
  const e = waitForAnyAuthDeleted();
  block(matchAddAuth(e.id, ANY), function () {
    verifyAuthDoesNotExist(e.id);
  });
});

bthread("Authorizedconnectapp create verification", function () {
  const e = waitForAnyAuthorizedconnectappAdded();
  block(matchDeleteAuthorizedconnectapp(e.id, ANY), function () {
    verifyAuthorizedconnectappExists(e.id);
  });
});

bthread("Authorizedconnectapp update verification", function () {
  const e = waitForAnyAuthorizedconnectappUpdated();
  block(matchDeleteAuthorizedconnectapp(e.id, ANY), function () {
    verifyAuthorizedconnectappUpdated(e.id);
  });
});

bthread("Authorizedconnectapp delete verification", function () {
  const e = waitForAnyAuthorizedconnectappDeleted();
  block(matchAddAuthorizedconnectapp(e.id, ANY), function () {
    verifyAuthorizedconnectappDoesNotExist(e.id);
  });
});

bthread("Authorizedconnectappsjson create verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonAdded();
  block(matchDeleteAuthorizedconnectappsjson(e.id, ANY), function () {
    verifyAuthorizedconnectappsjsonExists(e.id);
  });
});

bthread("Authorizedconnectappsjson update verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonUpdated();
  block(matchDeleteAuthorizedconnectappsjson(e.id, ANY), function () {
    verifyAuthorizedconnectappsjsonUpdated(e.id);
  });
});

bthread("Authorizedconnectappsjson delete verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonDeleted();
  block(matchAddAuthorizedconnectappsjson(e.id, ANY), function () {
    verifyAuthorizedconnectappsjsonDoesNotExist(e.id);
  });
});

bthread("Availablephonenumber create verification", function () {
  const e = waitForAnyAvailablephonenumberAdded();
  block(matchDeleteAvailablephonenumber(e.id, ANY), function () {
    verifyAvailablephonenumberExists(e.id);
  });
});

bthread("Availablephonenumber update verification", function () {
  const e = waitForAnyAvailablephonenumberUpdated();
  block(matchDeleteAvailablephonenumber(e.id, ANY), function () {
    verifyAvailablephonenumberUpdated(e.id);
  });
});

bthread("Availablephonenumber delete verification", function () {
  const e = waitForAnyAvailablephonenumberDeleted();
  block(matchAddAvailablephonenumber(e.id, ANY), function () {
    verifyAvailablephonenumberDoesNotExist(e.id);
  });
});

bthread("Availablephonenumbersjson create verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonAdded();
  block(matchDeleteAvailablephonenumbersjson(e.id, ANY), function () {
    verifyAvailablephonenumbersjsonExists(e.id);
  });
});

bthread("Availablephonenumbersjson update verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonUpdated();
  block(matchDeleteAvailablephonenumbersjson(e.id, ANY), function () {
    verifyAvailablephonenumbersjsonUpdated(e.id);
  });
});

bthread("Availablephonenumbersjson delete verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonDeleted();
  block(matchAddAvailablephonenumbersjson(e.id, ANY), function () {
    verifyAvailablephonenumbersjsonDoesNotExist(e.id);
  });
});

bthread("Balancejson create verification", function () {
  const e = waitForAnyBalancejsonAdded();
  block(matchDeleteBalancejson(e.id, ANY), function () {
    verifyBalancejsonExists(e.id);
  });
});

bthread("Balancejson update verification", function () {
  const e = waitForAnyBalancejsonUpdated();
  block(matchDeleteBalancejson(e.id, ANY), function () {
    verifyBalancejsonUpdated(e.id);
  });
});

bthread("Balancejson delete verification", function () {
  const e = waitForAnyBalancejsonDeleted();
  block(matchAddBalancejson(e.id, ANY), function () {
    verifyBalancejsonDoesNotExist(e.id);
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

bthread("Callsidjson create verification", function () {
  const e = waitForAnyCallsidjsonAdded();
  block(matchDeleteCallsidjson(e.id, ANY), function () {
    verifyCallsidjsonExists(e.id);
  });
});

bthread("Callsidjson update verification", function () {
  const e = waitForAnyCallsidjsonUpdated();
  block(matchDeleteCallsidjson(e.id, ANY), function () {
    verifyCallsidjsonUpdated(e.id);
  });
});

bthread("Callsidjson delete verification", function () {
  const e = waitForAnyCallsidjsonDeleted();
  block(matchAddCallsidjson(e.id, ANY), function () {
    verifyCallsidjsonDoesNotExist(e.id);
  });
});

bthread("Callsjson create verification", function () {
  const e = waitForAnyCallsjsonAdded();
  block(matchDeleteCallsjson(e.id, ANY), function () {
    verifyCallsjsonExists(e.id);
  });
});

bthread("Callsjson update verification", function () {
  const e = waitForAnyCallsjsonUpdated();
  block(matchDeleteCallsjson(e.id, ANY), function () {
    verifyCallsjsonUpdated(e.id);
  });
});

bthread("Callsjson delete verification", function () {
  const e = waitForAnyCallsjsonDeleted();
  block(matchAddCallsjson(e.id, ANY), function () {
    verifyCallsjsonDoesNotExist(e.id);
  });
});

bthread("Conference create verification", function () {
  const e = waitForAnyConferenceAdded();
  block(matchDeleteConference(e.id, ANY), function () {
    verifyConferenceExists(e.id);
  });
});

bthread("Conference update verification", function () {
  const e = waitForAnyConferenceUpdated();
  block(matchDeleteConference(e.id, ANY), function () {
    verifyConferenceUpdated(e.id);
  });
});

bthread("Conference delete verification", function () {
  const e = waitForAnyConferenceDeleted();
  block(matchAddConference(e.id, ANY), function () {
    verifyConferenceDoesNotExist(e.id);
  });
});

bthread("Conferencesjson create verification", function () {
  const e = waitForAnyConferencesjsonAdded();
  block(matchDeleteConferencesjson(e.id, ANY), function () {
    verifyConferencesjsonExists(e.id);
  });
});

bthread("Conferencesjson update verification", function () {
  const e = waitForAnyConferencesjsonUpdated();
  block(matchDeleteConferencesjson(e.id, ANY), function () {
    verifyConferencesjsonUpdated(e.id);
  });
});

bthread("Conferencesjson delete verification", function () {
  const e = waitForAnyConferencesjsonDeleted();
  block(matchAddConferencesjson(e.id, ANY), function () {
    verifyConferencesjsonDoesNotExist(e.id);
  });
});

bthread("Connectapp create verification", function () {
  const e = waitForAnyConnectappAdded();
  block(matchDeleteConnectapp(e.id, ANY), function () {
    verifyConnectappExists(e.id);
  });
});

bthread("Connectapp update verification", function () {
  const e = waitForAnyConnectappUpdated();
  block(matchDeleteConnectapp(e.id, ANY), function () {
    verifyConnectappUpdated(e.id);
  });
});

bthread("Connectapp delete verification", function () {
  const e = waitForAnyConnectappDeleted();
  block(matchAddConnectapp(e.id, ANY), function () {
    verifyConnectappDoesNotExist(e.id);
  });
});

bthread("Connectappsidjson create verification", function () {
  const e = waitForAnyConnectappsidjsonAdded();
  block(matchDeleteConnectappsidjson(e.id, ANY), function () {
    verifyConnectappsidjsonExists(e.id);
  });
});

bthread("Connectappsidjson update verification", function () {
  const e = waitForAnyConnectappsidjsonUpdated();
  block(matchDeleteConnectappsidjson(e.id, ANY), function () {
    verifyConnectappsidjsonUpdated(e.id);
  });
});

bthread("Connectappsidjson delete verification", function () {
  const e = waitForAnyConnectappsidjsonDeleted();
  block(matchAddConnectappsidjson(e.id, ANY), function () {
    verifyConnectappsidjsonDoesNotExist(e.id);
  });
});

bthread("Connectappsjson create verification", function () {
  const e = waitForAnyConnectappsjsonAdded();
  block(matchDeleteConnectappsjson(e.id, ANY), function () {
    verifyConnectappsjsonExists(e.id);
  });
});

bthread("Connectappsjson update verification", function () {
  const e = waitForAnyConnectappsjsonUpdated();
  block(matchDeleteConnectappsjson(e.id, ANY), function () {
    verifyConnectappsjsonUpdated(e.id);
  });
});

bthread("Connectappsjson delete verification", function () {
  const e = waitForAnyConnectappsjsonDeleted();
  block(matchAddConnectappsjson(e.id, ANY), function () {
    verifyConnectappsjsonDoesNotExist(e.id);
  });
});

bthread("Countrycodejson create verification", function () {
  const e = waitForAnyCountrycodejsonAdded();
  block(matchDeleteCountrycodejson(e.id, ANY), function () {
    verifyCountrycodejsonExists(e.id);
  });
});

bthread("Countrycodejson update verification", function () {
  const e = waitForAnyCountrycodejsonUpdated();
  block(matchDeleteCountrycodejson(e.id, ANY), function () {
    verifyCountrycodejsonUpdated(e.id);
  });
});

bthread("Countrycodejson delete verification", function () {
  const e = waitForAnyCountrycodejsonDeleted();
  block(matchAddCountrycodejson(e.id, ANY), function () {
    verifyCountrycodejsonDoesNotExist(e.id);
  });
});

bthread("Credential create verification", function () {
  const e = waitForAnyCredentialAdded();
  block(matchDeleteCredential(e.id, ANY), function () {
    verifyCredentialExists(e.id);
  });
});

bthread("Credential update verification", function () {
  const e = waitForAnyCredentialUpdated();
  block(matchDeleteCredential(e.id, ANY), function () {
    verifyCredentialUpdated(e.id);
  });
});

bthread("Credential delete verification", function () {
  const e = waitForAnyCredentialDeleted();
  block(matchAddCredential(e.id, ANY), function () {
    verifyCredentialDoesNotExist(e.id);
  });
});

bthread("Credentiallist create verification", function () {
  const e = waitForAnyCredentiallistAdded();
  block(matchDeleteCredentiallist(e.id, ANY), function () {
    verifyCredentiallistExists(e.id);
  });
});

bthread("Credentiallist update verification", function () {
  const e = waitForAnyCredentiallistUpdated();
  block(matchDeleteCredentiallist(e.id, ANY), function () {
    verifyCredentiallistUpdated(e.id);
  });
});

bthread("Credentiallist delete verification", function () {
  const e = waitForAnyCredentiallistDeleted();
  block(matchAddCredentiallist(e.id, ANY), function () {
    verifyCredentiallistDoesNotExist(e.id);
  });
});

bthread("Credentiallistmapping create verification", function () {
  const e = waitForAnyCredentiallistmappingAdded();
  block(matchDeleteCredentiallistmapping(e.id, ANY), function () {
    verifyCredentiallistmappingExists(e.id);
  });
});

bthread("Credentiallistmapping update verification", function () {
  const e = waitForAnyCredentiallistmappingUpdated();
  block(matchDeleteCredentiallistmapping(e.id, ANY), function () {
    verifyCredentiallistmappingUpdated(e.id);
  });
});

bthread("Credentiallistmapping delete verification", function () {
  const e = waitForAnyCredentiallistmappingDeleted();
  block(matchAddCredentiallistmapping(e.id, ANY), function () {
    verifyCredentiallistmappingDoesNotExist(e.id);
  });
});

bthread("Credentiallistmappingsjson create verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonAdded();
  block(matchDeleteCredentiallistmappingsjson(e.id, ANY), function () {
    verifyCredentiallistmappingsjsonExists(e.id);
  });
});

bthread("Credentiallistmappingsjson update verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonUpdated();
  block(matchDeleteCredentiallistmappingsjson(e.id, ANY), function () {
    verifyCredentiallistmappingsjsonUpdated(e.id);
  });
});

bthread("Credentiallistmappingsjson delete verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonDeleted();
  block(matchAddCredentiallistmappingsjson(e.id, ANY), function () {
    verifyCredentiallistmappingsjsonDoesNotExist(e.id);
  });
});

bthread("Credentiallistsjson create verification", function () {
  const e = waitForAnyCredentiallistsjsonAdded();
  block(matchDeleteCredentiallistsjson(e.id, ANY), function () {
    verifyCredentiallistsjsonExists(e.id);
  });
});

bthread("Credentiallistsjson update verification", function () {
  const e = waitForAnyCredentiallistsjsonUpdated();
  block(matchDeleteCredentiallistsjson(e.id, ANY), function () {
    verifyCredentiallistsjsonUpdated(e.id);
  });
});

bthread("Credentiallistsjson delete verification", function () {
  const e = waitForAnyCredentiallistsjsonDeleted();
  block(matchAddCredentiallistsjson(e.id, ANY), function () {
    verifyCredentiallistsjsonDoesNotExist(e.id);
  });
});

bthread("Credentialsjson create verification", function () {
  const e = waitForAnyCredentialsjsonAdded();
  block(matchDeleteCredentialsjson(e.id, ANY), function () {
    verifyCredentialsjsonExists(e.id);
  });
});

bthread("Credentialsjson update verification", function () {
  const e = waitForAnyCredentialsjsonUpdated();
  block(matchDeleteCredentialsjson(e.id, ANY), function () {
    verifyCredentialsjsonUpdated(e.id);
  });
});

bthread("Credentialsjson delete verification", function () {
  const e = waitForAnyCredentialsjsonDeleted();
  block(matchAddCredentialsjson(e.id, ANY), function () {
    verifyCredentialsjsonDoesNotExist(e.id);
  });
});

bthread("Dailyjson create verification", function () {
  const e = waitForAnyDailyjsonAdded();
  block(matchDeleteDailyjson(e.id, ANY), function () {
    verifyDailyjsonExists(e.id);
  });
});

bthread("Dailyjson update verification", function () {
  const e = waitForAnyDailyjsonUpdated();
  block(matchDeleteDailyjson(e.id, ANY), function () {
    verifyDailyjsonUpdated(e.id);
  });
});

bthread("Dailyjson delete verification", function () {
  const e = waitForAnyDailyjsonDeleted();
  block(matchAddDailyjson(e.id, ANY), function () {
    verifyDailyjsonDoesNotExist(e.id);
  });
});

bthread("Datajson create verification", function () {
  const e = waitForAnyDatajsonAdded();
  block(matchDeleteDatajson(e.id, ANY), function () {
    verifyDatajsonExists(e.id);
  });
});

bthread("Datajson update verification", function () {
  const e = waitForAnyDatajsonUpdated();
  block(matchDeleteDatajson(e.id, ANY), function () {
    verifyDatajsonUpdated(e.id);
  });
});

bthread("Datajson delete verification", function () {
  const e = waitForAnyDatajsonDeleted();
  block(matchAddDatajson(e.id, ANY), function () {
    verifyDatajsonDoesNotExist(e.id);
  });
});

bthread("Dependentphonenumbersjson create verification", function () {
  const e = waitForAnyDependentphonenumbersjsonAdded();
  block(matchDeleteDependentphonenumbersjson(e.id, ANY), function () {
    verifyDependentphonenumbersjsonExists(e.id);
  });
});

bthread("Dependentphonenumbersjson update verification", function () {
  const e = waitForAnyDependentphonenumbersjsonUpdated();
  block(matchDeleteDependentphonenumbersjson(e.id, ANY), function () {
    verifyDependentphonenumbersjsonUpdated(e.id);
  });
});

bthread("Dependentphonenumbersjson delete verification", function () {
  const e = waitForAnyDependentphonenumbersjsonDeleted();
  block(matchAddDependentphonenumbersjson(e.id, ANY), function () {
    verifyDependentphonenumbersjsonDoesNotExist(e.id);
  });
});

bthread("Domain create verification", function () {
  const e = waitForAnyDomainAdded();
  block(matchDeleteDomain(e.id, ANY), function () {
    verifyDomainExists(e.id);
  });
});

bthread("Domain update verification", function () {
  const e = waitForAnyDomainUpdated();
  block(matchDeleteDomain(e.id, ANY), function () {
    verifyDomainUpdated(e.id);
  });
});

bthread("Domain delete verification", function () {
  const e = waitForAnyDomainDeleted();
  block(matchAddDomain(e.id, ANY), function () {
    verifyDomainDoesNotExist(e.id);
  });
});

bthread("Domainsjson create verification", function () {
  const e = waitForAnyDomainsjsonAdded();
  block(matchDeleteDomainsjson(e.id, ANY), function () {
    verifyDomainsjsonExists(e.id);
  });
});

bthread("Domainsjson update verification", function () {
  const e = waitForAnyDomainsjsonUpdated();
  block(matchDeleteDomainsjson(e.id, ANY), function () {
    verifyDomainsjsonUpdated(e.id);
  });
});

bthread("Domainsjson delete verification", function () {
  const e = waitForAnyDomainsjsonDeleted();
  block(matchAddDomainsjson(e.id, ANY), function () {
    verifyDomainsjsonDoesNotExist(e.id);
  });
});

bthread("Eventsjson create verification", function () {
  const e = waitForAnyEventsjsonAdded();
  block(matchDeleteEventsjson(e.id, ANY), function () {
    verifyEventsjsonExists(e.id);
  });
});

bthread("Eventsjson update verification", function () {
  const e = waitForAnyEventsjsonUpdated();
  block(matchDeleteEventsjson(e.id, ANY), function () {
    verifyEventsjsonUpdated(e.id);
  });
});

bthread("Eventsjson delete verification", function () {
  const e = waitForAnyEventsjsonDeleted();
  block(matchAddEventsjson(e.id, ANY), function () {
    verifyEventsjsonDoesNotExist(e.id);
  });
});

bthread("Extension create verification", function () {
  const e = waitForAnyExtensionAdded();
  block(matchDeleteExtension(e.id, ANY), function () {
    verifyExtensionExists(e.id);
  });
});

bthread("Extension update verification", function () {
  const e = waitForAnyExtensionUpdated();
  block(matchDeleteExtension(e.id, ANY), function () {
    verifyExtensionUpdated(e.id);
  });
});

bthread("Extension delete verification", function () {
  const e = waitForAnyExtensionDeleted();
  block(matchAddExtension(e.id, ANY), function () {
    verifyExtensionDoesNotExist(e.id);
  });
});

bthread("Extensionsjson create verification", function () {
  const e = waitForAnyExtensionsjsonAdded();
  block(matchDeleteExtensionsjson(e.id, ANY), function () {
    verifyExtensionsjsonExists(e.id);
  });
});

bthread("Extensionsjson update verification", function () {
  const e = waitForAnyExtensionsjsonUpdated();
  block(matchDeleteExtensionsjson(e.id, ANY), function () {
    verifyExtensionsjsonUpdated(e.id);
  });
});

bthread("Extensionsjson delete verification", function () {
  const e = waitForAnyExtensionsjsonDeleted();
  block(matchAddExtensionsjson(e.id, ANY), function () {
    verifyExtensionsjsonDoesNotExist(e.id);
  });
});

bthread("Feedbackjson create verification", function () {
  const e = waitForAnyFeedbackjsonAdded();
  block(matchDeleteFeedbackjson(e.id, ANY), function () {
    verifyFeedbackjsonExists(e.id);
  });
});

bthread("Feedbackjson update verification", function () {
  const e = waitForAnyFeedbackjsonUpdated();
  block(matchDeleteFeedbackjson(e.id, ANY), function () {
    verifyFeedbackjsonUpdated(e.id);
  });
});

bthread("Feedbackjson delete verification", function () {
  const e = waitForAnyFeedbackjsonDeleted();
  block(matchAddFeedbackjson(e.id, ANY), function () {
    verifyFeedbackjsonDoesNotExist(e.id);
  });
});

bthread("Incomingphonenumber create verification", function () {
  const e = waitForAnyIncomingphonenumberAdded();
  block(matchDeleteIncomingphonenumber(e.id, ANY), function () {
    verifyIncomingphonenumberExists(e.id);
  });
});

bthread("Incomingphonenumber update verification", function () {
  const e = waitForAnyIncomingphonenumberUpdated();
  block(matchDeleteIncomingphonenumber(e.id, ANY), function () {
    verifyIncomingphonenumberUpdated(e.id);
  });
});

bthread("Incomingphonenumber delete verification", function () {
  const e = waitForAnyIncomingphonenumberDeleted();
  block(matchAddIncomingphonenumber(e.id, ANY), function () {
    verifyIncomingphonenumberDoesNotExist(e.id);
  });
});

bthread("Incomingphonenumbersjson create verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonAdded();
  block(matchDeleteIncomingphonenumbersjson(e.id, ANY), function () {
    verifyIncomingphonenumbersjsonExists(e.id);
  });
});

bthread("Incomingphonenumbersjson update verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonUpdated();
  block(matchDeleteIncomingphonenumbersjson(e.id, ANY), function () {
    verifyIncomingphonenumbersjsonUpdated(e.id);
  });
});

bthread("Incomingphonenumbersjson delete verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonDeleted();
  block(matchAddIncomingphonenumbersjson(e.id, ANY), function () {
    verifyIncomingphonenumbersjsonDoesNotExist(e.id);
  });
});

bthread("Ipaccesscontrollist create verification", function () {
  const e = waitForAnyIpaccesscontrollistAdded();
  block(matchDeleteIpaccesscontrollist(e.id, ANY), function () {
    verifyIpaccesscontrollistExists(e.id);
  });
});

bthread("Ipaccesscontrollist update verification", function () {
  const e = waitForAnyIpaccesscontrollistUpdated();
  block(matchDeleteIpaccesscontrollist(e.id, ANY), function () {
    verifyIpaccesscontrollistUpdated(e.id);
  });
});

bthread("Ipaccesscontrollist delete verification", function () {
  const e = waitForAnyIpaccesscontrollistDeleted();
  block(matchAddIpaccesscontrollist(e.id, ANY), function () {
    verifyIpaccesscontrollistDoesNotExist(e.id);
  });
});

bthread("Ipaccesscontrollistmapping create verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingAdded();
  block(matchDeleteIpaccesscontrollistmapping(e.id, ANY), function () {
    verifyIpaccesscontrollistmappingExists(e.id);
  });
});

bthread("Ipaccesscontrollistmapping update verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingUpdated();
  block(matchDeleteIpaccesscontrollistmapping(e.id, ANY), function () {
    verifyIpaccesscontrollistmappingUpdated(e.id);
  });
});

bthread("Ipaccesscontrollistmapping delete verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingDeleted();
  block(matchAddIpaccesscontrollistmapping(e.id, ANY), function () {
    verifyIpaccesscontrollistmappingDoesNotExist(e.id);
  });
});

bthread("Ipaccesscontrollistmappingsjson create verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonAdded();
  block(matchDeleteIpaccesscontrollistmappingsjson(e.id, ANY), function () {
    verifyIpaccesscontrollistmappingsjsonExists(e.id);
  });
});

bthread("Ipaccesscontrollistmappingsjson update verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonUpdated();
  block(matchDeleteIpaccesscontrollistmappingsjson(e.id, ANY), function () {
    verifyIpaccesscontrollistmappingsjsonUpdated(e.id);
  });
});

bthread("Ipaccesscontrollistmappingsjson delete verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonDeleted();
  block(matchAddIpaccesscontrollistmappingsjson(e.id, ANY), function () {
    verifyIpaccesscontrollistmappingsjsonDoesNotExist(e.id);
  });
});

bthread("Ipaccesscontrollistsjson create verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonAdded();
  block(matchDeleteIpaccesscontrollistsjson(e.id, ANY), function () {
    verifyIpaccesscontrollistsjsonExists(e.id);
  });
});

bthread("Ipaccesscontrollistsjson update verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonUpdated();
  block(matchDeleteIpaccesscontrollistsjson(e.id, ANY), function () {
    verifyIpaccesscontrollistsjsonUpdated(e.id);
  });
});

bthread("Ipaccesscontrollistsjson delete verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonDeleted();
  block(matchAddIpaccesscontrollistsjson(e.id, ANY), function () {
    verifyIpaccesscontrollistsjsonDoesNotExist(e.id);
  });
});

bthread("Ipaddress create verification", function () {
  const e = waitForAnyIpaddressAdded();
  block(matchDeleteIpaddress(e.id, ANY), function () {
    verifyIpaddressExists(e.id);
  });
});

bthread("Ipaddress update verification", function () {
  const e = waitForAnyIpaddressUpdated();
  block(matchDeleteIpaddress(e.id, ANY), function () {
    verifyIpaddressUpdated(e.id);
  });
});

bthread("Ipaddress delete verification", function () {
  const e = waitForAnyIpaddressDeleted();
  block(matchAddIpaddress(e.id, ANY), function () {
    verifyIpaddressDoesNotExist(e.id);
  });
});

bthread("Ipaddressesjson create verification", function () {
  const e = waitForAnyIpaddressesjsonAdded();
  block(matchDeleteIpaddressesjson(e.id, ANY), function () {
    verifyIpaddressesjsonExists(e.id);
  });
});

bthread("Ipaddressesjson update verification", function () {
  const e = waitForAnyIpaddressesjsonUpdated();
  block(matchDeleteIpaddressesjson(e.id, ANY), function () {
    verifyIpaddressesjsonUpdated(e.id);
  });
});

bthread("Ipaddressesjson delete verification", function () {
  const e = waitForAnyIpaddressesjsonDeleted();
  block(matchAddIpaddressesjson(e.id, ANY), function () {
    verifyIpaddressesjsonDoesNotExist(e.id);
  });
});

bthread("Key create verification", function () {
  const e = waitForAnyKeyAdded();
  block(matchDeleteKey(e.id, ANY), function () {
    verifyKeyExists(e.id);
  });
});

bthread("Key update verification", function () {
  const e = waitForAnyKeyUpdated();
  block(matchDeleteKey(e.id, ANY), function () {
    verifyKeyUpdated(e.id);
  });
});

bthread("Key delete verification", function () {
  const e = waitForAnyKeyDeleted();
  block(matchAddKey(e.id, ANY), function () {
    verifyKeyDoesNotExist(e.id);
  });
});

bthread("Keysjson create verification", function () {
  const e = waitForAnyKeysjsonAdded();
  block(matchDeleteKeysjson(e.id, ANY), function () {
    verifyKeysjsonExists(e.id);
  });
});

bthread("Keysjson update verification", function () {
  const e = waitForAnyKeysjsonUpdated();
  block(matchDeleteKeysjson(e.id, ANY), function () {
    verifyKeysjsonUpdated(e.id);
  });
});

bthread("Keysjson delete verification", function () {
  const e = waitForAnyKeysjsonDeleted();
  block(matchAddKeysjson(e.id, ANY), function () {
    verifyKeysjsonDoesNotExist(e.id);
  });
});

bthread("Lastmonthjson create verification", function () {
  const e = waitForAnyLastmonthjsonAdded();
  block(matchDeleteLastmonthjson(e.id, ANY), function () {
    verifyLastmonthjsonExists(e.id);
  });
});

bthread("Lastmonthjson update verification", function () {
  const e = waitForAnyLastmonthjsonUpdated();
  block(matchDeleteLastmonthjson(e.id, ANY), function () {
    verifyLastmonthjsonUpdated(e.id);
  });
});

bthread("Lastmonthjson delete verification", function () {
  const e = waitForAnyLastmonthjsonDeleted();
  block(matchAddLastmonthjson(e.id, ANY), function () {
    verifyLastmonthjsonDoesNotExist(e.id);
  });
});

bthread("Localjson create verification", function () {
  const e = waitForAnyLocaljsonAdded();
  block(matchDeleteLocaljson(e.id, ANY), function () {
    verifyLocaljsonExists(e.id);
  });
});

bthread("Localjson update verification", function () {
  const e = waitForAnyLocaljsonUpdated();
  block(matchDeleteLocaljson(e.id, ANY), function () {
    verifyLocaljsonUpdated(e.id);
  });
});

bthread("Localjson delete verification", function () {
  const e = waitForAnyLocaljsonDeleted();
  block(matchAddLocaljson(e.id, ANY), function () {
    verifyLocaljsonDoesNotExist(e.id);
  });
});

bthread("Machinetomachinejson create verification", function () {
  const e = waitForAnyMachinetomachinejsonAdded();
  block(matchDeleteMachinetomachinejson(e.id, ANY), function () {
    verifyMachinetomachinejsonExists(e.id);
  });
});

bthread("Machinetomachinejson update verification", function () {
  const e = waitForAnyMachinetomachinejsonUpdated();
  block(matchDeleteMachinetomachinejson(e.id, ANY), function () {
    verifyMachinetomachinejsonUpdated(e.id);
  });
});

bthread("Machinetomachinejson delete verification", function () {
  const e = waitForAnyMachinetomachinejsonDeleted();
  block(matchAddMachinetomachinejson(e.id, ANY), function () {
    verifyMachinetomachinejsonDoesNotExist(e.id);
  });
});

bthread("Media create verification", function () {
  const e = waitForAnyMediaAdded();
  block(matchDeleteMedia(e.id, ANY), function () {
    verifyMediaExists(e.id);
  });
});

bthread("Media update verification", function () {
  const e = waitForAnyMediaUpdated();
  block(matchDeleteMedia(e.id, ANY), function () {
    verifyMediaUpdated(e.id);
  });
});

bthread("Media delete verification", function () {
  const e = waitForAnyMediaDeleted();
  block(matchAddMedia(e.id, ANY), function () {
    verifyMediaDoesNotExist(e.id);
  });
});

bthread("Mediajson create verification", function () {
  const e = waitForAnyMediajsonAdded();
  block(matchDeleteMediajson(e.id, ANY), function () {
    verifyMediajsonExists(e.id);
  });
});

bthread("Mediajson update verification", function () {
  const e = waitForAnyMediajsonUpdated();
  block(matchDeleteMediajson(e.id, ANY), function () {
    verifyMediajsonUpdated(e.id);
  });
});

bthread("Mediajson delete verification", function () {
  const e = waitForAnyMediajsonDeleted();
  block(matchAddMediajson(e.id, ANY), function () {
    verifyMediajsonDoesNotExist(e.id);
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

bthread("Membersjson create verification", function () {
  const e = waitForAnyMembersjsonAdded();
  block(matchDeleteMembersjson(e.id, ANY), function () {
    verifyMembersjsonExists(e.id);
  });
});

bthread("Membersjson update verification", function () {
  const e = waitForAnyMembersjsonUpdated();
  block(matchDeleteMembersjson(e.id, ANY), function () {
    verifyMembersjsonUpdated(e.id);
  });
});

bthread("Membersjson delete verification", function () {
  const e = waitForAnyMembersjsonDeleted();
  block(matchAddMembersjson(e.id, ANY), function () {
    verifyMembersjsonDoesNotExist(e.id);
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

bthread("Messagesjson create verification", function () {
  const e = waitForAnyMessagesjsonAdded();
  block(matchDeleteMessagesjson(e.id, ANY), function () {
    verifyMessagesjsonExists(e.id);
  });
});

bthread("Messagesjson update verification", function () {
  const e = waitForAnyMessagesjsonUpdated();
  block(matchDeleteMessagesjson(e.id, ANY), function () {
    verifyMessagesjsonUpdated(e.id);
  });
});

bthread("Messagesjson delete verification", function () {
  const e = waitForAnyMessagesjsonDeleted();
  block(matchAddMessagesjson(e.id, ANY), function () {
    verifyMessagesjsonDoesNotExist(e.id);
  });
});

bthread("Mobilejson create verification", function () {
  const e = waitForAnyMobilejsonAdded();
  block(matchDeleteMobilejson(e.id, ANY), function () {
    verifyMobilejsonExists(e.id);
  });
});

bthread("Mobilejson update verification", function () {
  const e = waitForAnyMobilejsonUpdated();
  block(matchDeleteMobilejson(e.id, ANY), function () {
    verifyMobilejsonUpdated(e.id);
  });
});

bthread("Mobilejson delete verification", function () {
  const e = waitForAnyMobilejsonDeleted();
  block(matchAddMobilejson(e.id, ANY), function () {
    verifyMobilejsonDoesNotExist(e.id);
  });
});

bthread("Monthlyjson create verification", function () {
  const e = waitForAnyMonthlyjsonAdded();
  block(matchDeleteMonthlyjson(e.id, ANY), function () {
    verifyMonthlyjsonExists(e.id);
  });
});

bthread("Monthlyjson update verification", function () {
  const e = waitForAnyMonthlyjsonUpdated();
  block(matchDeleteMonthlyjson(e.id, ANY), function () {
    verifyMonthlyjsonUpdated(e.id);
  });
});

bthread("Monthlyjson delete verification", function () {
  const e = waitForAnyMonthlyjsonDeleted();
  block(matchAddMonthlyjson(e.id, ANY), function () {
    verifyMonthlyjsonDoesNotExist(e.id);
  });
});

bthread("Nationaljson create verification", function () {
  const e = waitForAnyNationaljsonAdded();
  block(matchDeleteNationaljson(e.id, ANY), function () {
    verifyNationaljsonExists(e.id);
  });
});

bthread("Nationaljson update verification", function () {
  const e = waitForAnyNationaljsonUpdated();
  block(matchDeleteNationaljson(e.id, ANY), function () {
    verifyNationaljsonUpdated(e.id);
  });
});

bthread("Nationaljson delete verification", function () {
  const e = waitForAnyNationaljsonDeleted();
  block(matchAddNationaljson(e.id, ANY), function () {
    verifyNationaljsonDoesNotExist(e.id);
  });
});

bthread("Notification create verification", function () {
  const e = waitForAnyNotificationAdded();
  block(matchDeleteNotification(e.id, ANY), function () {
    verifyNotificationExists(e.id);
  });
});

bthread("Notification update verification", function () {
  const e = waitForAnyNotificationUpdated();
  block(matchDeleteNotification(e.id, ANY), function () {
    verifyNotificationUpdated(e.id);
  });
});

bthread("Notification delete verification", function () {
  const e = waitForAnyNotificationDeleted();
  block(matchAddNotification(e.id, ANY), function () {
    verifyNotificationDoesNotExist(e.id);
  });
});

bthread("Notificationsjson create verification", function () {
  const e = waitForAnyNotificationsjsonAdded();
  block(matchDeleteNotificationsjson(e.id, ANY), function () {
    verifyNotificationsjsonExists(e.id);
  });
});

bthread("Notificationsjson update verification", function () {
  const e = waitForAnyNotificationsjsonUpdated();
  block(matchDeleteNotificationsjson(e.id, ANY), function () {
    verifyNotificationsjsonUpdated(e.id);
  });
});

bthread("Notificationsjson delete verification", function () {
  const e = waitForAnyNotificationsjsonDeleted();
  block(matchAddNotificationsjson(e.id, ANY), function () {
    verifyNotificationsjsonDoesNotExist(e.id);
  });
});

bthread("Outgoingcallerid create verification", function () {
  const e = waitForAnyOutgoingcalleridAdded();
  block(matchDeleteOutgoingcallerid(e.id, ANY), function () {
    verifyOutgoingcalleridExists(e.id);
  });
});

bthread("Outgoingcallerid update verification", function () {
  const e = waitForAnyOutgoingcalleridUpdated();
  block(matchDeleteOutgoingcallerid(e.id, ANY), function () {
    verifyOutgoingcalleridUpdated(e.id);
  });
});

bthread("Outgoingcallerid delete verification", function () {
  const e = waitForAnyOutgoingcalleridDeleted();
  block(matchAddOutgoingcallerid(e.id, ANY), function () {
    verifyOutgoingcalleridDoesNotExist(e.id);
  });
});

bthread("Outgoingcalleridsjson create verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonAdded();
  block(matchDeleteOutgoingcalleridsjson(e.id, ANY), function () {
    verifyOutgoingcalleridsjsonExists(e.id);
  });
});

bthread("Outgoingcalleridsjson update verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonUpdated();
  block(matchDeleteOutgoingcalleridsjson(e.id, ANY), function () {
    verifyOutgoingcalleridsjsonUpdated(e.id);
  });
});

bthread("Outgoingcalleridsjson delete verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonDeleted();
  block(matchAddOutgoingcalleridsjson(e.id, ANY), function () {
    verifyOutgoingcalleridsjsonDoesNotExist(e.id);
  });
});

bthread("Participant create verification", function () {
  const e = waitForAnyParticipantAdded();
  block(matchDeleteParticipant(e.id, ANY), function () {
    verifyParticipantExists(e.id);
  });
});

bthread("Participant update verification", function () {
  const e = waitForAnyParticipantUpdated();
  block(matchDeleteParticipant(e.id, ANY), function () {
    verifyParticipantUpdated(e.id);
  });
});

bthread("Participant delete verification", function () {
  const e = waitForAnyParticipantDeleted();
  block(matchAddParticipant(e.id, ANY), function () {
    verifyParticipantDoesNotExist(e.id);
  });
});

bthread("Participantsjson create verification", function () {
  const e = waitForAnyParticipantsjsonAdded();
  block(matchDeleteParticipantsjson(e.id, ANY), function () {
    verifyParticipantsjsonExists(e.id);
  });
});

bthread("Participantsjson update verification", function () {
  const e = waitForAnyParticipantsjsonUpdated();
  block(matchDeleteParticipantsjson(e.id, ANY), function () {
    verifyParticipantsjsonUpdated(e.id);
  });
});

bthread("Participantsjson delete verification", function () {
  const e = waitForAnyParticipantsjsonDeleted();
  block(matchAddParticipantsjson(e.id, ANY), function () {
    verifyParticipantsjsonDoesNotExist(e.id);
  });
});

bthread("Payload create verification", function () {
  const e = waitForAnyPayloadAdded();
  block(matchDeletePayload(e.id, ANY), function () {
    verifyPayloadExists(e.id);
  });
});

bthread("Payload update verification", function () {
  const e = waitForAnyPayloadUpdated();
  block(matchDeletePayload(e.id, ANY), function () {
    verifyPayloadUpdated(e.id);
  });
});

bthread("Payload delete verification", function () {
  const e = waitForAnyPayloadDeleted();
  block(matchAddPayload(e.id, ANY), function () {
    verifyPayloadDoesNotExist(e.id);
  });
});

bthread("Payloadsjson create verification", function () {
  const e = waitForAnyPayloadsjsonAdded();
  block(matchDeletePayloadsjson(e.id, ANY), function () {
    verifyPayloadsjsonExists(e.id);
  });
});

bthread("Payloadsjson update verification", function () {
  const e = waitForAnyPayloadsjsonUpdated();
  block(matchDeletePayloadsjson(e.id, ANY), function () {
    verifyPayloadsjsonUpdated(e.id);
  });
});

bthread("Payloadsjson delete verification", function () {
  const e = waitForAnyPayloadsjsonDeleted();
  block(matchAddPayloadsjson(e.id, ANY), function () {
    verifyPayloadsjsonDoesNotExist(e.id);
  });
});

bthread("Payment create verification", function () {
  const e = waitForAnyPaymentAdded();
  block(matchDeletePayment(e.id, ANY), function () {
    verifyPaymentExists(e.id);
  });
});

bthread("Payment update verification", function () {
  const e = waitForAnyPaymentUpdated();
  block(matchDeletePayment(e.id, ANY), function () {
    verifyPaymentUpdated(e.id);
  });
});

bthread("Payment delete verification", function () {
  const e = waitForAnyPaymentDeleted();
  block(matchAddPayment(e.id, ANY), function () {
    verifyPaymentDoesNotExist(e.id);
  });
});

bthread("Paymentsjson create verification", function () {
  const e = waitForAnyPaymentsjsonAdded();
  block(matchDeletePaymentsjson(e.id, ANY), function () {
    verifyPaymentsjsonExists(e.id);
  });
});

bthread("Paymentsjson update verification", function () {
  const e = waitForAnyPaymentsjsonUpdated();
  block(matchDeletePaymentsjson(e.id, ANY), function () {
    verifyPaymentsjsonUpdated(e.id);
  });
});

bthread("Paymentsjson delete verification", function () {
  const e = waitForAnyPaymentsjsonDeleted();
  block(matchAddPaymentsjson(e.id, ANY), function () {
    verifyPaymentsjsonDoesNotExist(e.id);
  });
});

bthread("Queue create verification", function () {
  const e = waitForAnyQueueAdded();
  block(matchDeleteQueue(e.id, ANY), function () {
    verifyQueueExists(e.id);
  });
});

bthread("Queue update verification", function () {
  const e = waitForAnyQueueUpdated();
  block(matchDeleteQueue(e.id, ANY), function () {
    verifyQueueUpdated(e.id);
  });
});

bthread("Queue delete verification", function () {
  const e = waitForAnyQueueDeleted();
  block(matchAddQueue(e.id, ANY), function () {
    verifyQueueDoesNotExist(e.id);
  });
});

bthread("Queuesjson create verification", function () {
  const e = waitForAnyQueuesjsonAdded();
  block(matchDeleteQueuesjson(e.id, ANY), function () {
    verifyQueuesjsonExists(e.id);
  });
});

bthread("Queuesjson update verification", function () {
  const e = waitForAnyQueuesjsonUpdated();
  block(matchDeleteQueuesjson(e.id, ANY), function () {
    verifyQueuesjsonUpdated(e.id);
  });
});

bthread("Queuesjson delete verification", function () {
  const e = waitForAnyQueuesjsonDeleted();
  block(matchAddQueuesjson(e.id, ANY), function () {
    verifyQueuesjsonDoesNotExist(e.id);
  });
});

bthread("Record create verification", function () {
  const e = waitForAnyRecordAdded();
  block(matchDeleteRecord(e.id, ANY), function () {
    verifyRecordExists(e.id);
  });
});

bthread("Record update verification", function () {
  const e = waitForAnyRecordUpdated();
  block(matchDeleteRecord(e.id, ANY), function () {
    verifyRecordUpdated(e.id);
  });
});

bthread("Record delete verification", function () {
  const e = waitForAnyRecordDeleted();
  block(matchAddRecord(e.id, ANY), function () {
    verifyRecordDoesNotExist(e.id);
  });
});

bthread("Recording create verification", function () {
  const e = waitForAnyRecordingAdded();
  block(matchDeleteRecording(e.id, ANY), function () {
    verifyRecordingExists(e.id);
  });
});

bthread("Recording update verification", function () {
  const e = waitForAnyRecordingUpdated();
  block(matchDeleteRecording(e.id, ANY), function () {
    verifyRecordingUpdated(e.id);
  });
});

bthread("Recording delete verification", function () {
  const e = waitForAnyRecordingDeleted();
  block(matchAddRecording(e.id, ANY), function () {
    verifyRecordingDoesNotExist(e.id);
  });
});

bthread("Recordingsjson create verification", function () {
  const e = waitForAnyRecordingsjsonAdded();
  block(matchDeleteRecordingsjson(e.id, ANY), function () {
    verifyRecordingsjsonExists(e.id);
  });
});

bthread("Recordingsjson update verification", function () {
  const e = waitForAnyRecordingsjsonUpdated();
  block(matchDeleteRecordingsjson(e.id, ANY), function () {
    verifyRecordingsjsonUpdated(e.id);
  });
});

bthread("Recordingsjson delete verification", function () {
  const e = waitForAnyRecordingsjsonDeleted();
  block(matchAddRecordingsjson(e.id, ANY), function () {
    verifyRecordingsjsonDoesNotExist(e.id);
  });
});

bthread("Recordsjson create verification", function () {
  const e = waitForAnyRecordsjsonAdded();
  block(matchDeleteRecordsjson(e.id, ANY), function () {
    verifyRecordsjsonExists(e.id);
  });
});

bthread("Recordsjson update verification", function () {
  const e = waitForAnyRecordsjsonUpdated();
  block(matchDeleteRecordsjson(e.id, ANY), function () {
    verifyRecordsjsonUpdated(e.id);
  });
});

bthread("Recordsjson delete verification", function () {
  const e = waitForAnyRecordsjsonDeleted();
  block(matchAddRecordsjson(e.id, ANY), function () {
    verifyRecordsjsonDoesNotExist(e.id);
  });
});

bthread("Registration create verification", function () {
  const e = waitForAnyRegistrationAdded();
  block(matchDeleteRegistration(e.id, ANY), function () {
    verifyRegistrationExists(e.id);
  });
});

bthread("Registration update verification", function () {
  const e = waitForAnyRegistrationUpdated();
  block(matchDeleteRegistration(e.id, ANY), function () {
    verifyRegistrationUpdated(e.id);
  });
});

bthread("Registration delete verification", function () {
  const e = waitForAnyRegistrationDeleted();
  block(matchAddRegistration(e.id, ANY), function () {
    verifyRegistrationDoesNotExist(e.id);
  });
});

bthread("Sharedcostjson create verification", function () {
  const e = waitForAnySharedcostjsonAdded();
  block(matchDeleteSharedcostjson(e.id, ANY), function () {
    verifySharedcostjsonExists(e.id);
  });
});

bthread("Sharedcostjson update verification", function () {
  const e = waitForAnySharedcostjsonUpdated();
  block(matchDeleteSharedcostjson(e.id, ANY), function () {
    verifySharedcostjsonUpdated(e.id);
  });
});

bthread("Sharedcostjson delete verification", function () {
  const e = waitForAnySharedcostjsonDeleted();
  block(matchAddSharedcostjson(e.id, ANY), function () {
    verifySharedcostjsonDoesNotExist(e.id);
  });
});

bthread("Shortcode create verification", function () {
  const e = waitForAnyShortcodeAdded();
  block(matchDeleteShortcode(e.id, ANY), function () {
    verifyShortcodeExists(e.id);
  });
});

bthread("Shortcode update verification", function () {
  const e = waitForAnyShortcodeUpdated();
  block(matchDeleteShortcode(e.id, ANY), function () {
    verifyShortcodeUpdated(e.id);
  });
});

bthread("Shortcode delete verification", function () {
  const e = waitForAnyShortcodeDeleted();
  block(matchAddShortcode(e.id, ANY), function () {
    verifyShortcodeDoesNotExist(e.id);
  });
});

bthread("Shortcodesjson create verification", function () {
  const e = waitForAnyShortcodesjsonAdded();
  block(matchDeleteShortcodesjson(e.id, ANY), function () {
    verifyShortcodesjsonExists(e.id);
  });
});

bthread("Shortcodesjson update verification", function () {
  const e = waitForAnyShortcodesjsonUpdated();
  block(matchDeleteShortcodesjson(e.id, ANY), function () {
    verifyShortcodesjsonUpdated(e.id);
  });
});

bthread("Shortcodesjson delete verification", function () {
  const e = waitForAnyShortcodesjsonDeleted();
  block(matchAddShortcodesjson(e.id, ANY), function () {
    verifyShortcodesjsonDoesNotExist(e.id);
  });
});

bthread("Sidjson create verification", function () {
  const e = waitForAnySidjsonAdded();
  block(matchDeleteSidjson(e.id, ANY), function () {
    verifySidjsonExists(e.id);
  });
});

bthread("Sidjson update verification", function () {
  const e = waitForAnySidjsonUpdated();
  block(matchDeleteSidjson(e.id, ANY), function () {
    verifySidjsonUpdated(e.id);
  });
});

bthread("Sidjson delete verification", function () {
  const e = waitForAnySidjsonDeleted();
  block(matchAddSidjson(e.id, ANY), function () {
    verifySidjsonDoesNotExist(e.id);
  });
});

bthread("Signingkey create verification", function () {
  const e = waitForAnySigningkeyAdded();
  block(matchDeleteSigningkey(e.id, ANY), function () {
    verifySigningkeyExists(e.id);
  });
});

bthread("Signingkey update verification", function () {
  const e = waitForAnySigningkeyUpdated();
  block(matchDeleteSigningkey(e.id, ANY), function () {
    verifySigningkeyUpdated(e.id);
  });
});

bthread("Signingkey delete verification", function () {
  const e = waitForAnySigningkeyDeleted();
  block(matchAddSigningkey(e.id, ANY), function () {
    verifySigningkeyDoesNotExist(e.id);
  });
});

bthread("Signingkeysjson create verification", function () {
  const e = waitForAnySigningkeysjsonAdded();
  block(matchDeleteSigningkeysjson(e.id, ANY), function () {
    verifySigningkeysjsonExists(e.id);
  });
});

bthread("Signingkeysjson update verification", function () {
  const e = waitForAnySigningkeysjsonUpdated();
  block(matchDeleteSigningkeysjson(e.id, ANY), function () {
    verifySigningkeysjsonUpdated(e.id);
  });
});

bthread("Signingkeysjson delete verification", function () {
  const e = waitForAnySigningkeysjsonDeleted();
  block(matchAddSigningkeysjson(e.id, ANY), function () {
    verifySigningkeysjsonDoesNotExist(e.id);
  });
});

bthread("Sip create verification", function () {
  const e = waitForAnySipAdded();
  block(matchDeleteSip(e.id, ANY), function () {
    verifySipExists(e.id);
  });
});

bthread("Sip update verification", function () {
  const e = waitForAnySipUpdated();
  block(matchDeleteSip(e.id, ANY), function () {
    verifySipUpdated(e.id);
  });
});

bthread("Sip delete verification", function () {
  const e = waitForAnySipDeleted();
  block(matchAddSip(e.id, ANY), function () {
    verifySipDoesNotExist(e.id);
  });
});

bthread("Siprec create verification", function () {
  const e = waitForAnySiprecAdded();
  block(matchDeleteSiprec(e.id, ANY), function () {
    verifySiprecExists(e.id);
  });
});

bthread("Siprec update verification", function () {
  const e = waitForAnySiprecUpdated();
  block(matchDeleteSiprec(e.id, ANY), function () {
    verifySiprecUpdated(e.id);
  });
});

bthread("Siprec delete verification", function () {
  const e = waitForAnySiprecDeleted();
  block(matchAddSiprec(e.id, ANY), function () {
    verifySiprecDoesNotExist(e.id);
  });
});

bthread("Siprecjson create verification", function () {
  const e = waitForAnySiprecjsonAdded();
  block(matchDeleteSiprecjson(e.id, ANY), function () {
    verifySiprecjsonExists(e.id);
  });
});

bthread("Siprecjson update verification", function () {
  const e = waitForAnySiprecjsonUpdated();
  block(matchDeleteSiprecjson(e.id, ANY), function () {
    verifySiprecjsonUpdated(e.id);
  });
});

bthread("Siprecjson delete verification", function () {
  const e = waitForAnySiprecjsonDeleted();
  block(matchAddSiprecjson(e.id, ANY), function () {
    verifySiprecjsonDoesNotExist(e.id);
  });
});

bthread("Sm create verification", function () {
  const e = waitForAnySmAdded();
  block(matchDeleteSm(e.id, ANY), function () {
    verifySmExists(e.id);
  });
});

bthread("Sm update verification", function () {
  const e = waitForAnySmUpdated();
  block(matchDeleteSm(e.id, ANY), function () {
    verifySmUpdated(e.id);
  });
});

bthread("Sm delete verification", function () {
  const e = waitForAnySmDeleted();
  block(matchAddSm(e.id, ANY), function () {
    verifySmDoesNotExist(e.id);
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

bthread("Streamsjson create verification", function () {
  const e = waitForAnyStreamsjsonAdded();
  block(matchDeleteStreamsjson(e.id, ANY), function () {
    verifyStreamsjsonExists(e.id);
  });
});

bthread("Streamsjson update verification", function () {
  const e = waitForAnyStreamsjsonUpdated();
  block(matchDeleteStreamsjson(e.id, ANY), function () {
    verifyStreamsjsonUpdated(e.id);
  });
});

bthread("Streamsjson delete verification", function () {
  const e = waitForAnyStreamsjsonDeleted();
  block(matchAddStreamsjson(e.id, ANY), function () {
    verifyStreamsjsonDoesNotExist(e.id);
  });
});

bthread("Thismonthjson create verification", function () {
  const e = waitForAnyThismonthjsonAdded();
  block(matchDeleteThismonthjson(e.id, ANY), function () {
    verifyThismonthjsonExists(e.id);
  });
});

bthread("Thismonthjson update verification", function () {
  const e = waitForAnyThismonthjsonUpdated();
  block(matchDeleteThismonthjson(e.id, ANY), function () {
    verifyThismonthjsonUpdated(e.id);
  });
});

bthread("Thismonthjson delete verification", function () {
  const e = waitForAnyThismonthjsonDeleted();
  block(matchAddThismonthjson(e.id, ANY), function () {
    verifyThismonthjsonDoesNotExist(e.id);
  });
});

bthread("Todayjson create verification", function () {
  const e = waitForAnyTodayjsonAdded();
  block(matchDeleteTodayjson(e.id, ANY), function () {
    verifyTodayjsonExists(e.id);
  });
});

bthread("Todayjson update verification", function () {
  const e = waitForAnyTodayjsonUpdated();
  block(matchDeleteTodayjson(e.id, ANY), function () {
    verifyTodayjsonUpdated(e.id);
  });
});

bthread("Todayjson delete verification", function () {
  const e = waitForAnyTodayjsonDeleted();
  block(matchAddTodayjson(e.id, ANY), function () {
    verifyTodayjsonDoesNotExist(e.id);
  });
});

bthread("Tokensjson create verification", function () {
  const e = waitForAnyTokensjsonAdded();
  block(matchDeleteTokensjson(e.id, ANY), function () {
    verifyTokensjsonExists(e.id);
  });
});

bthread("Tokensjson update verification", function () {
  const e = waitForAnyTokensjsonUpdated();
  block(matchDeleteTokensjson(e.id, ANY), function () {
    verifyTokensjsonUpdated(e.id);
  });
});

bthread("Tokensjson delete verification", function () {
  const e = waitForAnyTokensjsonDeleted();
  block(matchAddTokensjson(e.id, ANY), function () {
    verifyTokensjsonDoesNotExist(e.id);
  });
});

bthread("Tollfreejson create verification", function () {
  const e = waitForAnyTollfreejsonAdded();
  block(matchDeleteTollfreejson(e.id, ANY), function () {
    verifyTollfreejsonExists(e.id);
  });
});

bthread("Tollfreejson update verification", function () {
  const e = waitForAnyTollfreejsonUpdated();
  block(matchDeleteTollfreejson(e.id, ANY), function () {
    verifyTollfreejsonUpdated(e.id);
  });
});

bthread("Tollfreejson delete verification", function () {
  const e = waitForAnyTollfreejsonDeleted();
  block(matchAddTollfreejson(e.id, ANY), function () {
    verifyTollfreejsonDoesNotExist(e.id);
  });
});

bthread("Transcription create verification", function () {
  const e = waitForAnyTranscriptionAdded();
  block(matchDeleteTranscription(e.id, ANY), function () {
    verifyTranscriptionExists(e.id);
  });
});

bthread("Transcription update verification", function () {
  const e = waitForAnyTranscriptionUpdated();
  block(matchDeleteTranscription(e.id, ANY), function () {
    verifyTranscriptionUpdated(e.id);
  });
});

bthread("Transcription delete verification", function () {
  const e = waitForAnyTranscriptionDeleted();
  block(matchAddTranscription(e.id, ANY), function () {
    verifyTranscriptionDoesNotExist(e.id);
  });
});

bthread("Transcriptionsjson create verification", function () {
  const e = waitForAnyTranscriptionsjsonAdded();
  block(matchDeleteTranscriptionsjson(e.id, ANY), function () {
    verifyTranscriptionsjsonExists(e.id);
  });
});

bthread("Transcriptionsjson update verification", function () {
  const e = waitForAnyTranscriptionsjsonUpdated();
  block(matchDeleteTranscriptionsjson(e.id, ANY), function () {
    verifyTranscriptionsjsonUpdated(e.id);
  });
});

bthread("Transcriptionsjson delete verification", function () {
  const e = waitForAnyTranscriptionsjsonDeleted();
  block(matchAddTranscriptionsjson(e.id, ANY), function () {
    verifyTranscriptionsjsonDoesNotExist(e.id);
  });
});

bthread("Trigger create verification", function () {
  const e = waitForAnyTriggerAdded();
  block(matchDeleteTrigger(e.id, ANY), function () {
    verifyTriggerExists(e.id);
  });
});

bthread("Trigger update verification", function () {
  const e = waitForAnyTriggerUpdated();
  block(matchDeleteTrigger(e.id, ANY), function () {
    verifyTriggerUpdated(e.id);
  });
});

bthread("Trigger delete verification", function () {
  const e = waitForAnyTriggerDeleted();
  block(matchAddTrigger(e.id, ANY), function () {
    verifyTriggerDoesNotExist(e.id);
  });
});

bthread("Triggersjson create verification", function () {
  const e = waitForAnyTriggersjsonAdded();
  block(matchDeleteTriggersjson(e.id, ANY), function () {
    verifyTriggersjsonExists(e.id);
  });
});

bthread("Triggersjson update verification", function () {
  const e = waitForAnyTriggersjsonUpdated();
  block(matchDeleteTriggersjson(e.id, ANY), function () {
    verifyTriggersjsonUpdated(e.id);
  });
});

bthread("Triggersjson delete verification", function () {
  const e = waitForAnyTriggersjsonDeleted();
  block(matchAddTriggersjson(e.id, ANY), function () {
    verifyTriggersjsonDoesNotExist(e.id);
  });
});

bthread("Usage create verification", function () {
  const e = waitForAnyUsageAdded();
  block(matchDeleteUsage(e.id, ANY), function () {
    verifyUsageExists(e.id);
  });
});

bthread("Usage update verification", function () {
  const e = waitForAnyUsageUpdated();
  block(matchDeleteUsage(e.id, ANY), function () {
    verifyUsageUpdated(e.id);
  });
});

bthread("Usage delete verification", function () {
  const e = waitForAnyUsageDeleted();
  block(matchAddUsage(e.id, ANY), function () {
    verifyUsageDoesNotExist(e.id);
  });
});

bthread("Userdefinedmessagesjson create verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonAdded();
  block(matchDeleteUserdefinedmessagesjson(e.id, ANY), function () {
    verifyUserdefinedmessagesjsonExists(e.id);
  });
});

bthread("Userdefinedmessagesjson update verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonUpdated();
  block(matchDeleteUserdefinedmessagesjson(e.id, ANY), function () {
    verifyUserdefinedmessagesjsonUpdated(e.id);
  });
});

bthread("Userdefinedmessagesjson delete verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonDeleted();
  block(matchAddUserdefinedmessagesjson(e.id, ANY), function () {
    verifyUserdefinedmessagesjsonDoesNotExist(e.id);
  });
});

bthread("Userdefinedmessagesubscription create verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionAdded();
  block(matchDeleteUserdefinedmessagesubscription(e.id, ANY), function () {
    verifyUserdefinedmessagesubscriptionExists(e.id);
  });
});

bthread("Userdefinedmessagesubscription update verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionUpdated();
  block(matchDeleteUserdefinedmessagesubscription(e.id, ANY), function () {
    verifyUserdefinedmessagesubscriptionUpdated(e.id);
  });
});

bthread("Userdefinedmessagesubscription delete verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionDeleted();
  block(matchAddUserdefinedmessagesubscription(e.id, ANY), function () {
    verifyUserdefinedmessagesubscriptionDoesNotExist(e.id);
  });
});

bthread("Userdefinedmessagesubscriptionsjson create verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonAdded();
  block(matchDeleteUserdefinedmessagesubscriptionsjson(e.id, ANY), function () {
    verifyUserdefinedmessagesubscriptionsjsonExists(e.id);
  });
});

bthread("Userdefinedmessagesubscriptionsjson update verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonUpdated();
  block(matchDeleteUserdefinedmessagesubscriptionsjson(e.id, ANY), function () {
    verifyUserdefinedmessagesubscriptionsjsonUpdated(e.id);
  });
});

bthread("Userdefinedmessagesubscriptionsjson delete verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonDeleted();
  block(matchAddUserdefinedmessagesubscriptionsjson(e.id, ANY), function () {
    verifyUserdefinedmessagesubscriptionsjsonDoesNotExist(e.id);
  });
});

bthread("Voipjson create verification", function () {
  const e = waitForAnyVoipjsonAdded();
  block(matchDeleteVoipjson(e.id, ANY), function () {
    verifyVoipjsonExists(e.id);
  });
});

bthread("Voipjson update verification", function () {
  const e = waitForAnyVoipjsonUpdated();
  block(matchDeleteVoipjson(e.id, ANY), function () {
    verifyVoipjsonUpdated(e.id);
  });
});

bthread("Voipjson delete verification", function () {
  const e = waitForAnyVoipjsonDeleted();
  block(matchAddVoipjson(e.id, ANY), function () {
    verifyVoipjsonDoesNotExist(e.id);
  });
});

bthread("Yearlyjson create verification", function () {
  const e = waitForAnyYearlyjsonAdded();
  block(matchDeleteYearlyjson(e.id, ANY), function () {
    verifyYearlyjsonExists(e.id);
  });
});

bthread("Yearlyjson update verification", function () {
  const e = waitForAnyYearlyjsonUpdated();
  block(matchDeleteYearlyjson(e.id, ANY), function () {
    verifyYearlyjsonUpdated(e.id);
  });
});

bthread("Yearlyjson delete verification", function () {
  const e = waitForAnyYearlyjsonDeleted();
  block(matchAddYearlyjson(e.id, ANY), function () {
    verifyYearlyjsonDoesNotExist(e.id);
  });
});

bthread("Yesterdayjson create verification", function () {
  const e = waitForAnyYesterdayjsonAdded();
  block(matchDeleteYesterdayjson(e.id, ANY), function () {
    verifyYesterdayjsonExists(e.id);
  });
});

bthread("Yesterdayjson update verification", function () {
  const e = waitForAnyYesterdayjsonUpdated();
  block(matchDeleteYesterdayjson(e.id, ANY), function () {
    verifyYesterdayjsonUpdated(e.id);
  });
});

bthread("Yesterdayjson delete verification", function () {
  const e = waitForAnyYesterdayjsonDeleted();
  block(matchAddYesterdayjson(e.id, ANY), function () {
    verifyYesterdayjsonDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique 20100401", function () {
  const x = waitForAny20100401Added();
  block(matchAdd20100401(x.id, ANY), function () {});
});

bthread("Guard: Unique Account", function () {
  const x = waitForAnyAccountAdded();
  block(matchAddAccount(x.id, ANY), function () {});
});

bthread("Guard: Unique Accountsjson", function () {
  const x = waitForAnyAccountsjsonAdded();
  block(matchAddAccountsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Addonresult", function () {
  const x = waitForAnyAddonresultAdded();
  block(matchAddAddonresult(x.id, ANY), function () {});
});

bthread("Guard: Unique Addonresultsjson", function () {
  const x = waitForAnyAddonresultsjsonAdded();
  block(matchAddAddonresultsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Address", function () {
  const x = waitForAnyAddressAdded();
  block(matchAddAddress(x.id, ANY), function () {});
});

bthread("Guard: Unique Addressesjson", function () {
  const x = waitForAnyAddressesjsonAdded();
  block(matchAddAddressesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Alltimejson", function () {
  const x = waitForAnyAlltimejsonAdded();
  block(matchAddAlltimejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Application", function () {
  const x = waitForAnyApplicationAdded();
  block(matchAddApplication(x.id, ANY), function () {});
});

bthread("Guard: Unique Applicationsjson", function () {
  const x = waitForAnyApplicationsjsonAdded();
  block(matchAddApplicationsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignedaddon", function () {
  const x = waitForAnyAssignedaddonAdded();
  block(matchAddAssignedaddon(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignedaddonsjson", function () {
  const x = waitForAnyAssignedaddonsjsonAdded();
  block(matchAddAssignedaddonsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Auth", function () {
  const x = waitForAnyAuthAdded();
  block(matchAddAuth(x.id, ANY), function () {});
});

bthread("Guard: Unique Authorizedconnectapp", function () {
  const x = waitForAnyAuthorizedconnectappAdded();
  block(matchAddAuthorizedconnectapp(x.id, ANY), function () {});
});

bthread("Guard: Unique Authorizedconnectappsjson", function () {
  const x = waitForAnyAuthorizedconnectappsjsonAdded();
  block(matchAddAuthorizedconnectappsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Availablephonenumber", function () {
  const x = waitForAnyAvailablephonenumberAdded();
  block(matchAddAvailablephonenumber(x.id, ANY), function () {});
});

bthread("Guard: Unique Availablephonenumbersjson", function () {
  const x = waitForAnyAvailablephonenumbersjsonAdded();
  block(matchAddAvailablephonenumbersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Balancejson", function () {
  const x = waitForAnyBalancejsonAdded();
  block(matchAddBalancejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Call", function () {
  const x = waitForAnyCallAdded();
  block(matchAddCall(x.id, ANY), function () {});
});

bthread("Guard: Unique Callsidjson", function () {
  const x = waitForAnyCallsidjsonAdded();
  block(matchAddCallsidjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Callsjson", function () {
  const x = waitForAnyCallsjsonAdded();
  block(matchAddCallsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Conference", function () {
  const x = waitForAnyConferenceAdded();
  block(matchAddConference(x.id, ANY), function () {});
});

bthread("Guard: Unique Conferencesjson", function () {
  const x = waitForAnyConferencesjsonAdded();
  block(matchAddConferencesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Connectapp", function () {
  const x = waitForAnyConnectappAdded();
  block(matchAddConnectapp(x.id, ANY), function () {});
});

bthread("Guard: Unique Connectappsidjson", function () {
  const x = waitForAnyConnectappsidjsonAdded();
  block(matchAddConnectappsidjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Connectappsjson", function () {
  const x = waitForAnyConnectappsjsonAdded();
  block(matchAddConnectappsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Countrycodejson", function () {
  const x = waitForAnyCountrycodejsonAdded();
  block(matchAddCountrycodejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Credential", function () {
  const x = waitForAnyCredentialAdded();
  block(matchAddCredential(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentiallist", function () {
  const x = waitForAnyCredentiallistAdded();
  block(matchAddCredentiallist(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentiallistmapping", function () {
  const x = waitForAnyCredentiallistmappingAdded();
  block(matchAddCredentiallistmapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentiallistmappingsjson", function () {
  const x = waitForAnyCredentiallistmappingsjsonAdded();
  block(matchAddCredentiallistmappingsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentiallistsjson", function () {
  const x = waitForAnyCredentiallistsjsonAdded();
  block(matchAddCredentiallistsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentialsjson", function () {
  const x = waitForAnyCredentialsjsonAdded();
  block(matchAddCredentialsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Dailyjson", function () {
  const x = waitForAnyDailyjsonAdded();
  block(matchAddDailyjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Datajson", function () {
  const x = waitForAnyDatajsonAdded();
  block(matchAddDatajson(x.id, ANY), function () {});
});

bthread("Guard: Unique Dependentphonenumbersjson", function () {
  const x = waitForAnyDependentphonenumbersjsonAdded();
  block(matchAddDependentphonenumbersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Domain", function () {
  const x = waitForAnyDomainAdded();
  block(matchAddDomain(x.id, ANY), function () {});
});

bthread("Guard: Unique Domainsjson", function () {
  const x = waitForAnyDomainsjsonAdded();
  block(matchAddDomainsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Eventsjson", function () {
  const x = waitForAnyEventsjsonAdded();
  block(matchAddEventsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Extension", function () {
  const x = waitForAnyExtensionAdded();
  block(matchAddExtension(x.id, ANY), function () {});
});

bthread("Guard: Unique Extensionsjson", function () {
  const x = waitForAnyExtensionsjsonAdded();
  block(matchAddExtensionsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Feedbackjson", function () {
  const x = waitForAnyFeedbackjsonAdded();
  block(matchAddFeedbackjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumber", function () {
  const x = waitForAnyIncomingphonenumberAdded();
  block(matchAddIncomingphonenumber(x.id, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbersjson", function () {
  const x = waitForAnyIncomingphonenumbersjsonAdded();
  block(matchAddIncomingphonenumbersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollist", function () {
  const x = waitForAnyIpaccesscontrollistAdded();
  block(matchAddIpaccesscontrollist(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistmapping", function () {
  const x = waitForAnyIpaccesscontrollistmappingAdded();
  block(matchAddIpaccesscontrollistmapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistmappingsjson", function () {
  const x = waitForAnyIpaccesscontrollistmappingsjsonAdded();
  block(matchAddIpaccesscontrollistmappingsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistsjson", function () {
  const x = waitForAnyIpaccesscontrollistsjsonAdded();
  block(matchAddIpaccesscontrollistsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaddress", function () {
  const x = waitForAnyIpaddressAdded();
  block(matchAddIpaddress(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaddressesjson", function () {
  const x = waitForAnyIpaddressesjsonAdded();
  block(matchAddIpaddressesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  block(matchAddKey(x.id, ANY), function () {});
});

bthread("Guard: Unique Keysjson", function () {
  const x = waitForAnyKeysjsonAdded();
  block(matchAddKeysjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Lastmonthjson", function () {
  const x = waitForAnyLastmonthjsonAdded();
  block(matchAddLastmonthjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Localjson", function () {
  const x = waitForAnyLocaljsonAdded();
  block(matchAddLocaljson(x.id, ANY), function () {});
});

bthread("Guard: Unique Machinetomachinejson", function () {
  const x = waitForAnyMachinetomachinejsonAdded();
  block(matchAddMachinetomachinejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Media", function () {
  const x = waitForAnyMediaAdded();
  block(matchAddMedia(x.id, ANY), function () {});
});

bthread("Guard: Unique Mediajson", function () {
  const x = waitForAnyMediajsonAdded();
  block(matchAddMediajson(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Membersjson", function () {
  const x = waitForAnyMembersjsonAdded();
  block(matchAddMembersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Message", function () {
  const x = waitForAnyMessageAdded();
  block(matchAddMessage(x.id, ANY), function () {});
});

bthread("Guard: Unique Messagesjson", function () {
  const x = waitForAnyMessagesjsonAdded();
  block(matchAddMessagesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Mobilejson", function () {
  const x = waitForAnyMobilejsonAdded();
  block(matchAddMobilejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Monthlyjson", function () {
  const x = waitForAnyMonthlyjsonAdded();
  block(matchAddMonthlyjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Nationaljson", function () {
  const x = waitForAnyNationaljsonAdded();
  block(matchAddNationaljson(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Notificationsjson", function () {
  const x = waitForAnyNotificationsjsonAdded();
  block(matchAddNotificationsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Outgoingcallerid", function () {
  const x = waitForAnyOutgoingcalleridAdded();
  block(matchAddOutgoingcallerid(x.id, ANY), function () {});
});

bthread("Guard: Unique Outgoingcalleridsjson", function () {
  const x = waitForAnyOutgoingcalleridsjsonAdded();
  block(matchAddOutgoingcalleridsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Participant", function () {
  const x = waitForAnyParticipantAdded();
  block(matchAddParticipant(x.id, ANY), function () {});
});

bthread("Guard: Unique Participantsjson", function () {
  const x = waitForAnyParticipantsjsonAdded();
  block(matchAddParticipantsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Payload", function () {
  const x = waitForAnyPayloadAdded();
  block(matchAddPayload(x.id, ANY), function () {});
});

bthread("Guard: Unique Payloadsjson", function () {
  const x = waitForAnyPayloadsjsonAdded();
  block(matchAddPayloadsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Payment", function () {
  const x = waitForAnyPaymentAdded();
  block(matchAddPayment(x.id, ANY), function () {});
});

bthread("Guard: Unique Paymentsjson", function () {
  const x = waitForAnyPaymentsjsonAdded();
  block(matchAddPaymentsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Queue", function () {
  const x = waitForAnyQueueAdded();
  block(matchAddQueue(x.id, ANY), function () {});
});

bthread("Guard: Unique Queuesjson", function () {
  const x = waitForAnyQueuesjsonAdded();
  block(matchAddQueuesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Record", function () {
  const x = waitForAnyRecordAdded();
  block(matchAddRecord(x.id, ANY), function () {});
});

bthread("Guard: Unique Recording", function () {
  const x = waitForAnyRecordingAdded();
  block(matchAddRecording(x.id, ANY), function () {});
});

bthread("Guard: Unique Recordingsjson", function () {
  const x = waitForAnyRecordingsjsonAdded();
  block(matchAddRecordingsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Recordsjson", function () {
  const x = waitForAnyRecordsjsonAdded();
  block(matchAddRecordsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Registration", function () {
  const x = waitForAnyRegistrationAdded();
  block(matchAddRegistration(x.id, ANY), function () {});
});

bthread("Guard: Unique Sharedcostjson", function () {
  const x = waitForAnySharedcostjsonAdded();
  block(matchAddSharedcostjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Shortcode", function () {
  const x = waitForAnyShortcodeAdded();
  block(matchAddShortcode(x.id, ANY), function () {});
});

bthread("Guard: Unique Shortcodesjson", function () {
  const x = waitForAnyShortcodesjsonAdded();
  block(matchAddShortcodesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Sidjson", function () {
  const x = waitForAnySidjsonAdded();
  block(matchAddSidjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Signingkey", function () {
  const x = waitForAnySigningkeyAdded();
  block(matchAddSigningkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Signingkeysjson", function () {
  const x = waitForAnySigningkeysjsonAdded();
  block(matchAddSigningkeysjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Sip", function () {
  const x = waitForAnySipAdded();
  block(matchAddSip(x.id, ANY), function () {});
});

bthread("Guard: Unique Siprec", function () {
  const x = waitForAnySiprecAdded();
  block(matchAddSiprec(x.id, ANY), function () {});
});

bthread("Guard: Unique Siprecjson", function () {
  const x = waitForAnySiprecjsonAdded();
  block(matchAddSiprecjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Sm", function () {
  const x = waitForAnySmAdded();
  block(matchAddSm(x.id, ANY), function () {});
});

bthread("Guard: Unique Stream", function () {
  const x = waitForAnyStreamAdded();
  block(matchAddStream(x.id, ANY), function () {});
});

bthread("Guard: Unique Streamsjson", function () {
  const x = waitForAnyStreamsjsonAdded();
  block(matchAddStreamsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Thismonthjson", function () {
  const x = waitForAnyThismonthjsonAdded();
  block(matchAddThismonthjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Todayjson", function () {
  const x = waitForAnyTodayjsonAdded();
  block(matchAddTodayjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Tokensjson", function () {
  const x = waitForAnyTokensjsonAdded();
  block(matchAddTokensjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Tollfreejson", function () {
  const x = waitForAnyTollfreejsonAdded();
  block(matchAddTollfreejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Transcription", function () {
  const x = waitForAnyTranscriptionAdded();
  block(matchAddTranscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Transcriptionsjson", function () {
  const x = waitForAnyTranscriptionsjsonAdded();
  block(matchAddTranscriptionsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Trigger", function () {
  const x = waitForAnyTriggerAdded();
  block(matchAddTrigger(x.id, ANY), function () {});
});

bthread("Guard: Unique Triggersjson", function () {
  const x = waitForAnyTriggersjsonAdded();
  block(matchAddTriggersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Usage", function () {
  const x = waitForAnyUsageAdded();
  block(matchAddUsage(x.id, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesjson", function () {
  const x = waitForAnyUserdefinedmessagesjsonAdded();
  block(matchAddUserdefinedmessagesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesubscription", function () {
  const x = waitForAnyUserdefinedmessagesubscriptionAdded();
  block(matchAddUserdefinedmessagesubscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesubscriptionsjson", function () {
  const x = waitForAnyUserdefinedmessagesubscriptionsjsonAdded();
  block(matchAddUserdefinedmessagesubscriptionsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Voipjson", function () {
  const x = waitForAnyVoipjsonAdded();
  block(matchAddVoipjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Yearlyjson", function () {
  const x = waitForAnyYearlyjsonAdded();
  block(matchAddYearlyjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Yesterdayjson", function () {
  const x = waitForAnyYesterdayjsonAdded();
  block(matchAddYesterdayjson(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
