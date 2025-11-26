//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(`${protocol}://${host}:${port}`, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: account ----

function fetchAccount(Sid, FriendlyName, Status, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + Sid + ".json";
  var description = "Fetch account with Sid " + Sid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listAccounts(Sid, FriendlyName, Status, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts.json";
  var description = "List accounts filtered by FriendlyName " + FriendlyName + " and Status " + Status;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createAccount(Sid, FriendlyName, Status, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts.json";
  var description = "Create account with FriendlyName " + FriendlyName;
  var body = {
    "FriendlyName": FriendlyName,
  };
  return svc.post(url, body, { description: description });
}

function updateAccount(Sid, FriendlyName, Status, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + Sid + ".json";
  var description = "Update account " + Sid + " with FriendlyName " + FriendlyName + " and Status " + Status;
  var body = {
    "FriendlyName": FriendlyName,
    "Status": Status,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingAccount(Sid, FriendlyName, Status, PageSize, Page, PageToken) {
  return createAccount(Sid, FriendlyName, Status, PageSize, Page, PageToken);
}

function verifyAccountExists(Sid, FriendlyName, Status, PageSize, Page, PageToken) {
  return fetchAccount(Sid, FriendlyName, Status, PageSize, Page, PageToken);
}

function verifyAccountDoesNotExist(Sid, FriendlyName, Status, PageSize, Page, PageToken) {
  return fetchAccount(Sid, FriendlyName, Status, PageSize, Page, PageToken);
}

// ---- Entity: address ----

function fetchAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Fetch address " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listAddresses(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses.json";
  var description = "List addresses for account " + AccountSid + " filtered by customer name " + CustomerName + " and friendly name " + FriendlyName;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses.json";
  var description = "Create address for account " + AccountSid + " with customer name " + CustomerName;
  var body = {
    "CustomerName": CustomerName,
    "Street": Street,
    "City": City,
    "Region": Region,
    "PostalCode": PostalCode,
    "IsoCountry": IsoCountry,
  };
  return svc.post(url, body, { description: description });
}

function deleteAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Delete address " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function updateAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Update address " + Sid + " for account " + AccountSid + " with customer name " + CustomerName;
  var body = {
    "FriendlyName": FriendlyName,
    "CustomerName": CustomerName,
    "Street": Street,
    "City": City,
    "Region": Region,
    "PostalCode": PostalCode,
    "EmergencyEnabled": EmergencyEnabled,
    "AutoCorrectAddress": AutoCorrectAddress,
    "StreetSecondary": StreetSecondary,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  return createAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary);
}

function verifyAddressExists(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  return fetchAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary);
}

function verifyAddressDoesNotExist(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  return fetchAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary);
}

function tryToDeleteANonExistingAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary) {
  return deleteAddress(AccountSid, Sid, CustomerName, FriendlyName, EmergencyEnabled, IsoCountry, PageSize, Page, PageToken, Street, City, Region, PostalCode, AutoCorrectAddress, StreetSecondary);
}

// ---- Entity: application ----

function fetchApplication(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Fetch application with AccountSid " + AccountSid + " and Sid " + Sid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listApplications(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications.json";
  var description = "List applications for AccountSid " + AccountSid + " filtered by FriendlyName " + FriendlyName;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createApplication(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications.json";
  var description = "Create application with AccountSid " + AccountSid + " and FriendlyName " + FriendlyName;
  var body = {
    "ApiVersion": ApiVersion,
    "VoiceUrl": VoiceUrl,
    "VoiceMethod": VoiceMethod,
    "VoiceFallbackUrl": VoiceFallbackUrl,
    "VoiceFallbackMethod": VoiceFallbackMethod,
    "StatusCallback": StatusCallback,
    "StatusCallbackMethod": StatusCallbackMethod,
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "SmsUrl": SmsUrl,
    "SmsMethod": SmsMethod,
    "SmsFallbackUrl": SmsFallbackUrl,
    "SmsFallbackMethod": SmsFallbackMethod,
    "SmsStatusCallback": SmsStatusCallback,
    "MessageStatusCallback": MessageStatusCallback,
    "FriendlyName": FriendlyName,
    "PublicApplicationConnectEnabled": PublicApplicationConnectEnabled,
  };
  return svc.post(url, body, { description: description });
}

function deleteApplication(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Delete application with AccountSid " + AccountSid + " and Sid " + Sid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function updateApplication(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Update application with AccountSid " + AccountSid + " and Sid " + Sid;
  var body = {
    "FriendlyName": FriendlyName,
    "ApiVersion": ApiVersion,
    "VoiceUrl": VoiceUrl,
    "VoiceMethod": VoiceMethod,
    "VoiceFallbackUrl": VoiceFallbackUrl,
    "VoiceFallbackMethod": VoiceFallbackMethod,
    "StatusCallback": StatusCallback,
    "StatusCallbackMethod": StatusCallbackMethod,
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "SmsUrl": SmsUrl,
    "SmsMethod": SmsMethod,
    "SmsFallbackUrl": SmsFallbackUrl,
    "SmsFallbackMethod": SmsFallbackMethod,
    "SmsStatusCallback": SmsStatusCallback,
    "MessageStatusCallback": MessageStatusCallback,
    "PublicApplicationConnectEnabled": PublicApplicationConnectEnabled,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingApplication(AccountSid, Sid, FriendlyName) {
  return createApplication(AccountSid, Sid, FriendlyName);
}

function verifyApplicationExists(AccountSid, Sid, FriendlyName) {
  return fetchApplication(AccountSid, Sid, FriendlyName);
}

function verifyApplicationDoesNotExist(AccountSid, Sid, FriendlyName) {
  return fetchApplication(AccountSid, Sid, FriendlyName);
}

function tryToDeleteANonExistingApplication(AccountSid, Sid, FriendlyName) {
  return deleteApplication(AccountSid, Sid, FriendlyName);
}

// ---- Entity: authorizedConnectApp ----

function fetchAuthorizedConnectApp(AccountSid, ConnectAppSid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AuthorizedConnectApps/" + ConnectAppSid + ".json";
  var description = "Fetch an instance of authorized-connect-app " + ConnectAppSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listAuthorizedConnectApps(AccountSid, ConnectAppSid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AuthorizedConnectApps.json";
  var description = "List authorized-connect-apps for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyAuthorizedConnectAppExists(AccountSid, ConnectAppSid, PageSize, Page, PageToken) {
  return fetchAuthorizedConnectApp(AccountSid, ConnectAppSid, PageSize, Page, PageToken);
}

function verifyAuthorizedConnectAppDoesNotExist(AccountSid, ConnectAppSid, PageSize, Page, PageToken) {
  return fetchAuthorizedConnectApp(AccountSid, ConnectAppSid, PageSize, Page, PageToken);
}

// ---- Entity: availablePhoneNumber ----

function listAvailablePhoneNumbers(AccountSid, CountryCode) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers/" + CountryCode + ".json";
  var description = "List available phone numbers for country " + CountryCode + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: balance ----

function getBalance(AccountSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Balance.json";
  var description = "Get balance for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyBalanceExists(AccountSid) {
  return getBalance(AccountSid);
}

function verifyBalanceDoesNotExist(AccountSid) {
  return getBalance(AccountSid);
}

// ---- Entity: call ----

function fetchCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Fetch call " + Sid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCalls(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "List calls in account " + AccountSid + " filtered by To=" + To + " From=" + From + " Status=" + Status;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "Create call from " + From + " to " + To + " in account " + AccountSid;
  var body = {
    "To": To,
    "From": From,
    "Method": Method,
    "FallbackUrl": FallbackUrl,
    "FallbackMethod": FallbackMethod,
    "StatusCallback": StatusCallback,
    "StatusCallbackEvent": StatusCallbackEvent,
    "StatusCallbackMethod": StatusCallbackMethod,
    "SendDigits": SendDigits,
    "Timeout": Timeout,
    "Record": Record,
    "RecordingChannels": RecordingChannels,
    "RecordingStatusCallback": RecordingStatusCallback,
    "RecordingStatusCallbackMethod": RecordingStatusCallbackMethod,
    "SipAuthUsername": SipAuthUsername,
    "SipAuthPassword": SipAuthPassword,
    "MachineDetection": MachineDetection,
    "MachineDetectionTimeout": MachineDetectionTimeout,
    "RecordingStatusCallbackEvent": RecordingStatusCallbackEvent,
    "Trim": Trim,
    "CallerId": CallerId,
    "MachineDetectionSpeechThreshold": MachineDetectionSpeechThreshold,
    "MachineDetectionSpeechEndThreshold": MachineDetectionSpeechEndThreshold,
    "MachineDetectionSilenceTimeout": MachineDetectionSilenceTimeout,
    "AsyncAmd": AsyncAmd,
    "AsyncAmdStatusCallback": AsyncAmdStatusCallback,
    "AsyncAmdStatusCallbackMethod": AsyncAmdStatusCallbackMethod,
    "Byoc": Byoc,
    "CallReason": CallReason,
    "CallToken": CallToken,
    "RecordingTrack": RecordingTrack,
    "TimeLimit": TimeLimit,
    "Url": Url,
    "Twiml": Twiml,
    "ApplicationSid": ApplicationSid,
  };
  return svc.post(url, body, { description: description });
}

function deleteCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Delete call " + Sid + " in account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function updateCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Update call " + Sid + " in account " + AccountSid;
  var body = {
    "Url": Url,
    "Method": Method,
    "Status": Status,
    "FallbackUrl": FallbackUrl,
    "FallbackMethod": FallbackMethod,
    "StatusCallback": StatusCallback,
    "StatusCallbackMethod": StatusCallbackMethod,
    "Twiml": Twiml,
    "TimeLimit": TimeLimit,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  return createCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken);
}

function verifyCallExists(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  return fetchCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken);
}

function verifyCallDoesNotExist(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  return fetchCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken) {
  return deleteCall(AccountSid, Sid, To, From, ParentCallSid, Status, StartTime, StartTime<, StartTime>, EndTime, EndTime<, EndTime>, PageSize, Page, PageToken);
}

// ---- Entity: callEvent ----

function listCallEvents(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Events.json";
  var description = "List events for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: callNotification ----

function fetchCallNotification(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Notifications/" + Sid + ".json";
  var description = "Fetch call notification " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCallNotifications(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Notifications.json";
  var description = "List call notifications for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyCallNotificationExists(AccountSid, CallSid, Sid) {
  return fetchCallNotification(AccountSid, CallSid, Sid);
}

function verifyCallNotificationDoesNotExist(AccountSid, CallSid, Sid) {
  return fetchCallNotification(AccountSid, CallSid, Sid);
}

// ---- Entity: callRecording ----

function fetchCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings/" + Sid + ".json";
  var description = "Fetch call recording " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCallRecordings(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings.json";
  var description = "List call recordings for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings.json";
  var description = "Create call recording for call " + CallSid + " in account " + AccountSid;
  var body = {
    "RecordingStatusCallbackEvent": RecordingStatusCallbackEvent,
    "RecordingStatusCallback": RecordingStatusCallback,
    "RecordingStatusCallbackMethod": RecordingStatusCallbackMethod,
    "Trim": Trim,
    "RecordingChannels": RecordingChannels,
    "RecordingTrack": RecordingTrack,
  };
  return svc.post(url, body, { description: description });
}

function updateCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings/" + Sid + ".json";
  var description = "Update call recording " + Sid + " for call " + CallSid + " in account " + AccountSid + " with status {Status}";
  var body = {
    "Status": Status,
    "PauseBehavior": PauseBehavior,
  };
  return svc.post(url, body, { description: description });
}

function deleteCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings/" + Sid + ".json";
  var description = "Delete call recording " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function tryToAddExistingCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  return createCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken);
}

function verifyCallRecordingExists(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  return fetchCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken);
}

function verifyCallRecordingDoesNotExist(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  return fetchCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken) {
  return deleteCallRecording(AccountSid, CallSid, Sid, DateCreated, DateCreated<, DateCreated>, PageSize, Page, PageToken);
}

// ---- Entity: conference ----

function fetchConference(AccountSid, Sid, FriendlyName, Status, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + Sid + ".json";
  var description = "Fetch conference " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listConference(AccountSid, Sid, FriendlyName, Status, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences.json";
  var description = "List conferences for account " + AccountSid + " filtered by FriendlyName " + FriendlyName + " and Status " + Status;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateConference(AccountSid, Sid, FriendlyName, Status, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + Sid + ".json";
  var description = "Update conference " + Sid + " for account " + AccountSid + " with status " + Status + " announceUrl {AnnounceUrl} announceMethod {AnnounceMethod}";
  var body = {
    "Status": Status,
    "AnnounceUrl": AnnounceUrl,
    "AnnounceMethod": AnnounceMethod,
  };
  return svc.post(url, body, { description: description });
}

function verifyConferenceExists(AccountSid, Sid, FriendlyName, Status, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, PageSize, Page, PageToken) {
  return fetchConference(AccountSid, Sid, FriendlyName, Status, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, PageSize, Page, PageToken);
}

function verifyConferenceDoesNotExist(AccountSid, Sid, FriendlyName, Status, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, PageSize, Page, PageToken) {
  return fetchConference(AccountSid, Sid, FriendlyName, Status, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, PageSize, Page, PageToken);
}

// ---- Entity: conferenceRecording ----

function fetchConferenceRecording(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Fetch conference recording " + Sid + " for conference " + ConferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listConferenceRecordings(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings.json";
  var description = "List recordings for conference " + ConferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listConferenceRecordings(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings.json";
  var description = "List conference recordings for conference " + ConferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateConferenceRecording(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Update conference recording " + Sid + " for conference " + ConferenceSid + " in account " + AccountSid + " with status " + Status;
  var body = {
    "Status": Status,
    "PauseBehavior": PauseBehavior,
  };
  return svc.post(url, body, { description: description });
}

function deleteConferenceRecording(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Delete conference recording " + Sid + " for conference " + ConferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function tryToAddExistingConferenceRecording(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  return listConferenceRecordings(AccountSid, ConferenceSid, Sid, Status, PauseBehavior);
}

function verifyConferenceRecordingExists(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  return fetchConferenceRecording(AccountSid, ConferenceSid, Sid, Status, PauseBehavior);
}

function verifyConferenceRecordingDoesNotExist(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  return fetchConferenceRecording(AccountSid, ConferenceSid, Sid, Status, PauseBehavior);
}

function tryToDeleteANonExistingConferenceRecording(AccountSid, ConferenceSid, Sid, Status, PauseBehavior) {
  return deleteConferenceRecording(AccountSid, ConferenceSid, Sid, Status, PauseBehavior);
}

// ---- Entity: connectApp ----

function fetchConnectApp(AccountSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Fetch connect-app " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listConnectApps(AccountSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps.json";
  var description = "List connect-apps for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateConnectApp(AccountSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Update connect-app " + Sid + " for account " + AccountSid;
  var body = {
    "AuthorizeRedirectUrl": AuthorizeRedirectUrl,
    "CompanyName": CompanyName,
    "DeauthorizeCallbackMethod": DeauthorizeCallbackMethod,
    "DeauthorizeCallbackUrl": DeauthorizeCallbackUrl,
    "Description": Description,
    "FriendlyName": FriendlyName,
    "HomepageUrl": HomepageUrl,
    "Permissions": Permissions,
  };
  return svc.post(url, body, { description: description });
}

function deleteConnectApp(AccountSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Delete connect-app " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function verifyConnectAppExists(AccountSid, Sid, PageSize, Page, PageToken) {
  return fetchConnectApp(AccountSid, Sid, PageSize, Page, PageToken);
}

function verifyConnectAppDoesNotExist(AccountSid, Sid, PageSize, Page, PageToken) {
  return fetchConnectApp(AccountSid, Sid, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingConnectApp(AccountSid, Sid, PageSize, Page, PageToken) {
  return deleteConnectApp(AccountSid, Sid, PageSize, Page, PageToken);
}

// ---- Entity: dependentPhoneNumber ----

function listDependentPhoneNumbers(AccountSid, AddressSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + AddressSid + "/DependentPhoneNumbers.json";
  var description = "List dependent phone numbers for address " + AddressSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: incomingPhoneNumber ----

function fetchIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Fetch incoming phone number " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listIncomingPhoneNumbers(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers.json";
  var description = "List incoming phone numbers for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers.json";
  var description = "Create incoming phone number " + PhoneNumber + " for account " + AccountSid;
  var body = {
    "ApiVersion": ApiVersion,
    "FriendlyName": FriendlyName,
    "SmsApplicationSid": SmsApplicationSid,
    "SmsFallbackMethod": SmsFallbackMethod,
    "SmsFallbackUrl": SmsFallbackUrl,
    "SmsMethod": SmsMethod,
    "SmsUrl": SmsUrl,
    "StatusCallback": StatusCallback,
    "StatusCallbackMethod": StatusCallbackMethod,
    "VoiceApplicationSid": VoiceApplicationSid,
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": VoiceFallbackMethod,
    "VoiceFallbackUrl": VoiceFallbackUrl,
    "VoiceMethod": VoiceMethod,
    "VoiceUrl": VoiceUrl,
    "EmergencyStatus": EmergencyStatus,
    "EmergencyAddressSid": EmergencyAddressSid,
    "TrunkSid": TrunkSid,
    "IdentitySid": IdentitySid,
    "AddressSid": AddressSid,
    "VoiceReceiveMode": VoiceReceiveMode,
    "BundleSid": BundleSid,
    "PhoneNumber": PhoneNumber,
    "AreaCode": AreaCode,
  };
  return svc.post(url, body, { description: description });
}

function deleteIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Delete incoming phone number " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function updateIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Update incoming phone number " + Sid + " for account " + AccountSid;
  var body = {
    "AccountSid": AccountSid,
    "ApiVersion": ApiVersion,
    "FriendlyName": FriendlyName,
    "SmsApplicationSid": SmsApplicationSid,
    "SmsFallbackMethod": SmsFallbackMethod,
    "SmsFallbackUrl": SmsFallbackUrl,
    "SmsMethod": SmsMethod,
    "SmsUrl": SmsUrl,
    "StatusCallback": StatusCallback,
    "StatusCallbackMethod": StatusCallbackMethod,
    "VoiceApplicationSid": VoiceApplicationSid,
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": VoiceFallbackMethod,
    "VoiceFallbackUrl": VoiceFallbackUrl,
    "VoiceMethod": VoiceMethod,
    "VoiceUrl": VoiceUrl,
    "EmergencyStatus": EmergencyStatus,
    "EmergencyAddressSid": EmergencyAddressSid,
    "TrunkSid": TrunkSid,
    "VoiceReceiveMode": VoiceReceiveMode,
    "IdentitySid": IdentitySid,
    "AddressSid": AddressSid,
    "BundleSid": BundleSid,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  return createIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken);
}

function verifyIncomingPhoneNumberExists(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  return fetchIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken);
}

function verifyIncomingPhoneNumberDoesNotExist(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  return fetchIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken) {
  return deleteIncomingPhoneNumber(AccountSid, Sid, Beta, FriendlyName, PhoneNumber, Origin, PageSize, Page, PageToken);
}

// ---- Entity: assignedAddOn ----

function getAssignedAddOn(AccountSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + Sid + ".json";
  var description = "Get assigned add-on " + Sid + " for resource " + ResourceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listAssignedAddOns(AccountSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "List assigned add-ons for resource " + ResourceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyAssignedAddOnExists(AccountSid, ResourceSid, Sid) {
  return getAssignedAddOn(AccountSid, ResourceSid, Sid);
}

function verifyAssignedAddOnDoesNotExist(AccountSid, ResourceSid, Sid) {
  return getAssignedAddOn(AccountSid, ResourceSid, Sid);
}

// ---- Entity: extension ----

function getExtension(AccountSid, ResourceSid, AssignedAddOnSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + AssignedAddOnSid + "/Extensions/" + Sid + ".json";
  var description = "Get extension " + Sid + " for assigned add-on " + AssignedAddOnSid + " and resource " + ResourceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listExtensions(AccountSid, ResourceSid, AssignedAddOnSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + AssignedAddOnSid + "/Extensions.json";
  var description = "List extensions for assigned add-on " + AssignedAddOnSid + " and resource " + ResourceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyExtensionExists(AccountSid, ResourceSid, AssignedAddOnSid, Sid) {
  return getExtension(AccountSid, ResourceSid, AssignedAddOnSid, Sid);
}

function verifyExtensionDoesNotExist(AccountSid, ResourceSid, AssignedAddOnSid, Sid) {
  return getExtension(AccountSid, ResourceSid, AssignedAddOnSid, Sid);
}

// ---- Entity: key ----

function fetchKey(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Fetch key " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listKeys(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys.json";
  var description = "List keys for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateKey(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Update key " + Sid + " for account " + AccountSid + " with FriendlyName {FriendlyName}";
  var body = {
    "FriendlyName": FriendlyName,
  };
  return svc.post(url, body, { description: description });
}

function deleteKey(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Delete key " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function verifyKeyExists(AccountSid, Sid) {
  return fetchKey(AccountSid, Sid);
}

function verifyKeyDoesNotExist(AccountSid, Sid) {
  return fetchKey(AccountSid, Sid);
}

function tryToDeleteANonExistingKey(AccountSid, Sid) {
  return deleteKey(AccountSid, Sid);
}

// ---- Entity: messageMedia ----

function getMessageMedia(AccountSid, MessageSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + MessageSid + "/Media/" + Sid + ".json";
  var description = "Get media " + Sid + " for message " + MessageSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listMessageMedia(AccountSid, MessageSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + MessageSid + "/Media.json";
  var description = "List media for message " + MessageSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyMessageMediaExists(AccountSid, MessageSid, Sid) {
  return getMessageMedia(AccountSid, MessageSid, Sid);
}

function verifyMessageMediaDoesNotExist(AccountSid, MessageSid, Sid) {
  return getMessageMedia(AccountSid, MessageSid, Sid);
}

// ---- Entity: queueMember ----

function getQueueMember(AccountSid, QueueSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members/" + CallSid + ".json";
  var description = "Get member " + CallSid + " of queue " + QueueSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listQueueMembers(AccountSid, QueueSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members.json";
  var description = "List members of queue " + QueueSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyQueueMemberExists(AccountSid, QueueSid, CallSid) {
  return getQueueMember(AccountSid, QueueSid, CallSid);
}

function verifyQueueMemberDoesNotExist(AccountSid, QueueSid, CallSid) {
  return getQueueMember(AccountSid, QueueSid, CallSid);
}

// ---- Entity: message ----

function fetchMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Fetch message " + Sid + " from account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listMessages(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages.json";
  var description = "List messages for account " + AccountSid + " filtered by To " + To + " and From " + From;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages.json";
  var description = "Send a message to " + To + " from " + From + " in account " + AccountSid;
  var body = {
    "To": To,
    "StatusCallback": StatusCallback,
    "ApplicationSid": ApplicationSid,
    "MaxPrice": MaxPrice,
    "ProvideFeedback": ProvideFeedback,
    "Attempt": Attempt,
    "ValidityPeriod": ValidityPeriod,
    "ForceDelivery": ForceDelivery,
    "ContentRetention": ContentRetention,
    "AddressRetention": AddressRetention,
    "SmartEncoded": SmartEncoded,
    "PersistentAction": PersistentAction,
    "TrafficType": TrafficType,
    "ShortenUrls": ShortenUrls,
    "ScheduleType": ScheduleType,
    "SendAt": SendAt,
    "SendAsMms": SendAsMms,
    "ContentVariables": ContentVariables,
    "RiskCheck": RiskCheck,
    "From": From,
    "MessagingServiceSid": MessagingServiceSid,
    "Body": Body,
    "MediaUrl": MediaUrl,
    "ContentSid": ContentSid,
  };
  return svc.post(url, body, { description: description });
}

function deleteMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Delete message " + Sid + " from account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function updateMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Update message " + Sid + " in account " + AccountSid;
  var body = {
    "Body": Body,
    "Status": Status,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  return createMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken);
}

function verifyMessageExists(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  return fetchMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken);
}

function verifyMessageDoesNotExist(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  return fetchMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken) {
  return deleteMessage(AccountSid, Sid, To, From, DateSent, DateSent<, DateSent>, PageSize, Page, PageToken);
}

// ---- Entity: messageFeedback ----

function listMessageFeedback(AccountSid, MessageSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + MessageSid + "/Feedback.json";
  var description = "List feedback for message " + MessageSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: signingKey ----

function fetchSigningKey(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "Fetch signing key " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listSigningKeys(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys.json";
  var description = "List signing keys for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateSigningKey(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "Update signing key " + Sid + " for account " + AccountSid + " with FriendlyName " + FriendlyName;
  var body = {
    "FriendlyName": FriendlyName,
  };
  return svc.post(url, body, { description: description });
}

function deleteSigningKey(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "Delete signing key " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function verifySigningKeyExists(AccountSid, Sid, FriendlyName) {
  return fetchSigningKey(AccountSid, Sid, FriendlyName);
}

function verifySigningKeyDoesNotExist(AccountSid, Sid, FriendlyName) {
  return fetchSigningKey(AccountSid, Sid, FriendlyName);
}

function tryToDeleteANonExistingSigningKey(AccountSid, Sid, FriendlyName) {
  return deleteSigningKey(AccountSid, Sid, FriendlyName);
}

// ---- Entity: notification ----

function fetchNotification(AccountSid, Sid, Log, MessageDate, MessageDate<, MessageDate>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Notifications/" + Sid + ".json";
  var description = "Fetch notification " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listNotifications(AccountSid, Sid, Log, MessageDate, MessageDate<, MessageDate>, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Notifications.json";
  var description = "List notifications for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyNotificationExists(AccountSid, Sid, Log, MessageDate, MessageDate<, MessageDate>, PageSize, Page, PageToken) {
  return fetchNotification(AccountSid, Sid, Log, MessageDate, MessageDate<, MessageDate>, PageSize, Page, PageToken);
}

function verifyNotificationDoesNotExist(AccountSid, Sid, Log, MessageDate, MessageDate<, MessageDate>, PageSize, Page, PageToken) {
  return fetchNotification(AccountSid, Sid, Log, MessageDate, MessageDate<, MessageDate>, PageSize, Page, PageToken);
}

// ---- Entity: outgoingCallerId ----

function fetchOutgoingCallerId(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Fetch outgoing-caller-id with Sid " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listOutgoingCallerIds(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds.json";
  var description = "List outgoing caller IDs for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateOutgoingCallerId(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Update outgoing-caller-id with Sid " + Sid + " for account " + AccountSid + " setting FriendlyName " + FriendlyName;
  var body = {
    "FriendlyName": FriendlyName,
  };
  return svc.post(url, body, { description: description });
}

function deleteOutgoingCallerId(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Delete outgoing-caller-id with Sid " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function verifyOutgoingCallerIdExists(AccountSid, Sid, FriendlyName) {
  return fetchOutgoingCallerId(AccountSid, Sid, FriendlyName);
}

function verifyOutgoingCallerIdDoesNotExist(AccountSid, Sid, FriendlyName) {
  return fetchOutgoingCallerId(AccountSid, Sid, FriendlyName);
}

function tryToDeleteANonExistingOutgoingCallerId(AccountSid, Sid, FriendlyName) {
  return deleteOutgoingCallerId(AccountSid, Sid, FriendlyName);
}

// ---- Entity: conferenceParticipant ----

function getConferenceParticipant(AccountSid, ConferenceSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Get participant " + CallSid + " in conference " + ConferenceSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listConferenceParticipants(AccountSid, ConferenceSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "List participants in conference " + ConferenceSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyConferenceParticipantExists(AccountSid, ConferenceSid, CallSid) {
  return getConferenceParticipant(AccountSid, ConferenceSid, CallSid);
}

function verifyConferenceParticipantDoesNotExist(AccountSid, ConferenceSid, CallSid) {
  return getConferenceParticipant(AccountSid, ConferenceSid, CallSid);
}

// ---- Entity: callPayment ----

function getCallPayment(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments/" + Sid + ".json";
  var description = "Get payment " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCallPayments(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments.json";
  var description = "List payments for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyCallPaymentExists(AccountSid, CallSid, Sid) {
  return getCallPayment(AccountSid, CallSid, Sid);
}

function verifyCallPaymentDoesNotExist(AccountSid, CallSid, Sid) {
  return getCallPayment(AccountSid, CallSid, Sid);
}

// ---- Entity: queue ----

function fetchQueue(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Fetch queue " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listQueues(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues.json";
  var description = "List queues for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createQueue(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues.json";
  var description = "Create queue {FriendlyName} for account " + AccountSid;
  var body = {
    "FriendlyName": FriendlyName,
    "MaxSize": MaxSize,
  };
  return svc.post(url, body, { description: description });
}

function updateQueue(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Update queue " + Sid + " for account " + AccountSid + " with FriendlyName {FriendlyName} and MaxSize {MaxSize}";
  var body = {
    "FriendlyName": FriendlyName,
    "MaxSize": MaxSize,
  };
  return svc.post(url, body, { description: description });
}

function deleteQueue(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Delete queue " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function tryToAddExistingQueue(AccountSid, Sid) {
  return createQueue(AccountSid, Sid);
}

function verifyQueueExists(AccountSid, Sid) {
  return fetchQueue(AccountSid, Sid);
}

function verifyQueueDoesNotExist(AccountSid, Sid) {
  return fetchQueue(AccountSid, Sid);
}

function tryToDeleteANonExistingQueue(AccountSid, Sid) {
  return deleteQueue(AccountSid, Sid);
}

// ---- Entity: callTranscription ----

function getCallTranscription(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions/" + Sid + ".json";
  var description = "Get transcription " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCallTranscriptions(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions.json";
  var description = "List transcriptions for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyCallTranscriptionExists(AccountSid, CallSid, Sid) {
  return getCallTranscription(AccountSid, CallSid, Sid);
}

function verifyCallTranscriptionDoesNotExist(AccountSid, CallSid, Sid) {
  return getCallTranscription(AccountSid, CallSid, Sid);
}

// ---- Entity: recording ----

function fetchRecording(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + Sid + ".json";
  var description = "Fetch recording " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listRecordings(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings.json";
  var description = "List recordings for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function deleteRecording(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + Sid + ".json";
  var description = "Delete recording " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function verifyRecordingExists(AccountSid, Sid) {
  return fetchRecording(AccountSid, Sid);
}

function verifyRecordingDoesNotExist(AccountSid, Sid) {
  return fetchRecording(AccountSid, Sid);
}

function tryToDeleteANonExistingRecording(AccountSid, Sid) {
  return deleteRecording(AccountSid, Sid);
}

// ---- Entity: addOnResult ----

function getAddOnResult(AccountSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Get add-on result " + Sid + " for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listAddOnResults(AccountSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults.json";
  var description = "List add-on results for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyAddOnResultExists(AccountSid, ReferenceSid, Sid) {
  return getAddOnResult(AccountSid, ReferenceSid, Sid);
}

function verifyAddOnResultDoesNotExist(AccountSid, ReferenceSid, Sid) {
  return getAddOnResult(AccountSid, ReferenceSid, Sid);
}

// ---- Entity: payload ----

function getPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Get payload " + Sid + " for add-on result " + AddOnResultSid + " and recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listPayloads(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads.json";
  var description = "List payloads for add-on result " + AddOnResultSid + " and recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyPayloadExists(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  return getPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid);
}

function verifyPayloadDoesNotExist(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  return getPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid);
}

// ---- Entity: payloadData ----

function getPayloadData(AccountSid, ReferenceSid, AddOnResultSid, PayloadSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + PayloadSid + "/Data.json";
  var description = "Get data for payload " + PayloadSid + " of add-on result " + AddOnResultSid + " and recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyPayloadDataExists(AccountSid, ReferenceSid, AddOnResultSid, PayloadSid) {
  return getPayloadData(AccountSid, ReferenceSid, AddOnResultSid, PayloadSid);
}

function verifyPayloadDataDoesNotExist(AccountSid, ReferenceSid, AddOnResultSid, PayloadSid) {
  return getPayloadData(AccountSid, ReferenceSid, AddOnResultSid, PayloadSid);
}

// ---- Entity: recordingTranscription ----

function fetchRecordingTranscription(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions/" + Sid + ".json";
  var description = "Fetch recording transcription " + Sid + " for recording " + RecordingSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listRecordingTranscriptions(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions.json";
  var description = "List recording transcriptions for recording " + RecordingSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function deleteRecordingTranscription(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions/" + Sid + ".json";
  var description = "Delete recording transcription " + Sid + " for recording " + RecordingSid + " in account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function verifyRecordingTranscriptionExists(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken) {
  return fetchRecordingTranscription(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken);
}

function verifyRecordingTranscriptionDoesNotExist(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken) {
  return fetchRecordingTranscription(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingRecordingTranscription(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken) {
  return deleteRecordingTranscription(AccountSid, RecordingSid, Sid, PageSize, Page, PageToken);
}

// ---- Entity: shortCode ----

function fetchShortCode(AccountSid, Sid, FriendlyName, ShortCode, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes/" + Sid + ".json";
  var description = "Fetch an instance of a short code with AccountSid " + AccountSid + " and Sid " + Sid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listShortCode(AccountSid, Sid, FriendlyName, ShortCode, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes.json";
  var description = "Retrieve a list of short-codes belonging to the account with AccountSid " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateShortCode(AccountSid, Sid, FriendlyName, ShortCode, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes/" + Sid + ".json";
  var description = "Update short code with AccountSid " + AccountSid + " and Sid " + Sid;
  var body = {
    "FriendlyName": FriendlyName,
    "ApiVersion": ApiVersion,
    "SmsUrl": SmsUrl,
    "SmsMethod": SmsMethod,
    "SmsFallbackUrl": SmsFallbackUrl,
    "SmsFallbackMethod": SmsFallbackMethod,
  };
  return svc.post(url, body, { description: description });
}

function verifyShortCodeExists(AccountSid, Sid, FriendlyName, ShortCode, PageSize, Page, PageToken) {
  return fetchShortCode(AccountSid, Sid, FriendlyName, ShortCode, PageSize, Page, PageToken);
}

function verifyShortCodeDoesNotExist(AccountSid, Sid, FriendlyName, ShortCode, PageSize, Page, PageToken) {
  return fetchShortCode(AccountSid, Sid, FriendlyName, ShortCode, PageSize, Page, PageToken);
}

// ---- Entity: sip ----

function getSIP(AccountSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP.json";
  var description = "Get SIP settings for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifySIPExists(AccountSid) {
  return getSIP(AccountSid);
}

function verifySIPDoesNotExist(AccountSid) {
  return getSIP(AccountSid);
}

// ---- Entity: sipDomainAuth ----

function getSIPDomainAuth(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth.json";
  var description = "Get auth for SIP domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifySIPDomainAuthExists(AccountSid, DomainSid) {
  return getSIPDomainAuth(AccountSid, DomainSid);
}

function verifySIPDomainAuthDoesNotExist(AccountSid, DomainSid) {
  return getSIPDomainAuth(AccountSid, DomainSid);
}

// ---- Entity: sipDomainAuthCall ----

function listSIPDomainAuthCalls(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls.json";
  var description = "List auth calls for SIP domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: credentialListMapping ----

function fetchCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings/" + Sid + ".json";
  var description = "Fetch credential list mapping " + Sid + " in domain " + DomainSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCredentialListMappings(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings.json";
  var description = "List credential list mappings in domain " + DomainSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings.json";
  var description = "Create credential list mapping with CredentialListSid {CredentialListSid} in domain " + DomainSid + " for account " + AccountSid;
  var body = {
    "CredentialListSid": CredentialListSid,
  };
  return svc.post(url, body, { description: description });
}

function deleteCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings/" + Sid + ".json";
  var description = "Delete credential list mapping " + Sid + " in domain " + DomainSid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function tryToAddExistingCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  return createCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken);
}

function verifyCredentialListMappingExists(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  return fetchCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken);
}

function verifyCredentialListMappingDoesNotExist(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  return fetchCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  return deleteCredentialListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken);
}

// ---- Entity: ipAccessControlListMapping ----

function fetchIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Fetch IP Access Control List mapping " + Sid + " for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listIpAccessControlListMappings(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings.json";
  var description = "List IP Access Control List mappings for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings.json";
  var description = "Create IP Access Control List mapping with IpAccessControlListSid {IpAccessControlListSid} for domain " + DomainSid + " in account " + AccountSid;
  var body = {
    "IpAccessControlListSid": IpAccessControlListSid,
  };
  return svc.post(url, body, { description: description });
}

function deleteIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Delete IP Access Control List mapping " + Sid + " for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function tryToAddExistingIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  return createIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken);
}

function verifyIpAccessControlListMappingExists(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  return fetchIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken);
}

function verifyIpAccessControlListMappingDoesNotExist(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  return fetchIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken) {
  return deleteIpAccessControlListMapping(AccountSid, DomainSid, Sid, PageSize, Page, PageToken);
}

// ---- Entity: registration ----

function listRegistrations(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations.json";
  var description = "List registrations for SIP domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: credentialList ----

function fetchCredentialList(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Get credential list " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCredentialLists(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "List all credential lists for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createCredentialList(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "Create credential list " + FriendlyName + " for account " + AccountSid;
  var body = {
    "FriendlyName": FriendlyName,
  };
  return svc.post(url, body, { description: description });
}

function deleteCredentialList(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Delete credential list " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function updateCredentialList(AccountSid, Sid, FriendlyName) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Update credential list " + Sid + " with name " + FriendlyName + " for account " + AccountSid;
  var body = {
    "FriendlyName": FriendlyName,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingCredentialList(AccountSid, Sid, FriendlyName) {
  return createCredentialList(AccountSid, Sid, FriendlyName);
}

function verifyCredentialListExists(AccountSid, Sid, FriendlyName) {
  return fetchCredentialList(AccountSid, Sid, FriendlyName);
}

function verifyCredentialListDoesNotExist(AccountSid, Sid, FriendlyName) {
  return fetchCredentialList(AccountSid, Sid, FriendlyName);
}

function tryToDeleteANonExistingCredentialList(AccountSid, Sid, FriendlyName) {
  return deleteCredentialList(AccountSid, Sid, FriendlyName);
}

// ---- Entity: credentialListEntity ----

function getCredentialList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Get credential list " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCredentialLists(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "List credential lists for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyCredentialListEntityExists(AccountSid, Sid) {
  return getCredentialList(AccountSid, Sid);
}

function verifyCredentialListEntityDoesNotExist(AccountSid, Sid) {
  return getCredentialList(AccountSid, Sid);
}

// ---- Entity: domainCredentialListMapping ----

function getDomainCredentialListMapping(AccountSid, DomainSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/CredentialListMappings/" + Sid + ".json";
  var description = "Get credential list mapping " + Sid + " for SIP domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listDomainCredentialListMappings(AccountSid, DomainSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/CredentialListMappings.json";
  var description = "List credential list mappings for SIP domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyDomainCredentialListMappingExists(AccountSid, DomainSid, Sid) {
  return getDomainCredentialListMapping(AccountSid, DomainSid, Sid);
}

function verifyDomainCredentialListMappingDoesNotExist(AccountSid, DomainSid, Sid) {
  return getDomainCredentialListMapping(AccountSid, DomainSid, Sid);
}

// ---- Entity: sipDomain ----

function getSIPDomain(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + Sid + ".json";
  var description = "Get SIP domain " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listSIPDomains(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains.json";
  var description = "List SIP domains for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifySIPDomainExists(AccountSid, Sid) {
  return getSIPDomain(AccountSid, Sid);
}

function verifySIPDomainDoesNotExist(AccountSid, Sid) {
  return getSIPDomain(AccountSid, Sid);
}

// ---- Entity: ipAccessControlList ----

function getIpAccessControlList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + Sid + ".json";
  var description = "Get IP access control list " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listIpAccessControlLists(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists.json";
  var description = "List IP access control lists for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyIpAccessControlListExists(AccountSid, Sid) {
  return getIpAccessControlList(AccountSid, Sid);
}

function verifyIpAccessControlListDoesNotExist(AccountSid, Sid) {
  return getIpAccessControlList(AccountSid, Sid);
}

// ---- Entity: ipAddress ----

function getIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses/" + Sid + ".json";
  var description = "Get IP address " + Sid + " for IP access control list " + IpAccessControlListSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listIpAddresses(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses.json";
  var description = "List IP addresses for IP access control list " + IpAccessControlListSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyIpAddressExists(AccountSid, IpAccessControlListSid, Sid) {
  return getIpAddress(AccountSid, IpAccessControlListSid, Sid);
}

function verifyIpAddressDoesNotExist(AccountSid, IpAccessControlListSid, Sid) {
  return getIpAddress(AccountSid, IpAccessControlListSid, Sid);
}

// ---- Entity: callSiprec ----

function getCallSiprec(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec/" + Sid + ".json";
  var description = "Get SIPREC " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCallSiprecs(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "List SIPREC for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyCallSiprecExists(AccountSid, CallSid, Sid) {
  return getCallSiprec(AccountSid, CallSid, Sid);
}

function verifyCallSiprecDoesNotExist(AccountSid, CallSid, Sid) {
  return getCallSiprec(AccountSid, CallSid, Sid);
}

// ---- Entity: callStream ----

function getCallStream(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Streams/" + Sid + ".json";
  var description = "Get stream " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listCallStreams(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Streams.json";
  var description = "List streams for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyCallStreamExists(AccountSid, CallSid, Sid) {
  return getCallStream(AccountSid, CallSid, Sid);
}

function verifyCallStreamDoesNotExist(AccountSid, CallSid, Sid) {
  return getCallStream(AccountSid, CallSid, Sid);
}

// ---- Entity: token ----

function listTokens(AccountSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Tokens.json";
  var description = "List tokens for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: transcription ----

function getTranscription(AccountSid, Sid, CallSid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Transcriptions/" + Sid + ".json";
  var description = "Get transcription " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listTranscriptions(AccountSid, Sid, CallSid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Transcriptions.json";
  var description = "List transcriptions for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createTranscription(AccountSid, Sid, CallSid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions.json";
  var description = "Create transcription for call " + CallSid + " in account " + AccountSid + " with name {Name}";
  var body = {
    "Name": Name,
    "Track": Track,
    "StatusCallbackUrl": StatusCallbackUrl,
    "StatusCallbackMethod": StatusCallbackMethod,
    "InboundTrackLabel": InboundTrackLabel,
    "OutboundTrackLabel": OutboundTrackLabel,
    "PartialResults": PartialResults,
    "LanguageCode": LanguageCode,
    "TranscriptionEngine": TranscriptionEngine,
    "ProfanityFilter": ProfanityFilter,
    "SpeechModel": SpeechModel,
    "Hints": Hints,
    "EnableAutomaticPunctuation": EnableAutomaticPunctuation,
    "IntelligenceService": IntelligenceService,
  };
  return svc.post(url, body, { description: description });
}

function updateTranscription(AccountSid, Sid, CallSid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions/" + Sid + ".json";
  var description = "Update transcription " + Sid + " for call " + CallSid + " in account " + AccountSid + " with status " + Status;
  var body = {
    "Status": Status,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingTranscription(AccountSid, Sid, CallSid, Status) {
  return createTranscription(AccountSid, Sid, CallSid, Status);
}

function verifyTranscriptionExists(AccountSid, Sid, CallSid, Status) {
  return getTranscription(AccountSid, Sid, CallSid, Status);
}

function verifyTranscriptionDoesNotExist(AccountSid, Sid, CallSid, Status) {
  return getTranscription(AccountSid, Sid, CallSid, Status);
}

// ---- Entity: usage ----

function getUsage(AccountSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage.json";
  var description = "Get usage for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyUsageExists(AccountSid) {
  return getUsage(AccountSid);
}

function verifyUsageDoesNotExist(AccountSid) {
  return getUsage(AccountSid);
}

// ---- Entity: usageRecord ----

function listUsageRecords(AccountSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Records.json";
  var description = "List usage records for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: usageTrigger ----

function getUsageTrigger(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers/" + Sid + ".json";
  var description = "Get usage trigger " + Sid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listUsageTriggers(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers.json";
  var description = "List usage triggers for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyUsageTriggerExists(AccountSid, Sid) {
  return getUsageTrigger(AccountSid, Sid);
}

function verifyUsageTriggerDoesNotExist(AccountSid, Sid) {
  return getUsageTrigger(AccountSid, Sid);
}

// ---- Entity: userDefinedMessage ----

function listUserDefinedMessages(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/UserDefinedMessages.json";
  var description = "List user defined messages for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

// ---- Entity: userDefinedMessageSubscription ----

function getUserDefinedMessageSubscription(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/UserDefinedMessageSubscriptions/" + Sid + ".json";
  var description = "Get user defined message subscription " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listUserDefinedMessageSubscriptions(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/UserDefinedMessageSubscriptions.json";
  var description = "List user defined message subscriptions for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyUserDefinedMessageSubscriptionExists(AccountSid, CallSid, Sid) {
  return getUserDefinedMessageSubscription(AccountSid, CallSid, Sid);
}

function verifyUserDefinedMessageSubscriptionDoesNotExist(AccountSid, CallSid, Sid) {
  return getUserDefinedMessageSubscription(AccountSid, CallSid, Sid);
}

// ---- Entity: availablePhoneNumberCountry ----

function fetchAvailablePhoneNumberCountry(AccountSid, CountryCode, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers/" + CountryCode + ".json";
  var description = "Fetch available phone number country " + CountryCode + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listAvailablePhoneNumberCountry(AccountSid, CountryCode, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers.json";
  var description = "List available phone number countries for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyAvailablePhoneNumberCountryExists(AccountSid, CountryCode, PageSize, Page, PageToken) {
  return fetchAvailablePhoneNumberCountry(AccountSid, CountryCode, PageSize, Page, PageToken);
}

function verifyAvailablePhoneNumberCountryDoesNotExist(AccountSid, CountryCode, PageSize, Page, PageToken) {
  return fetchAvailablePhoneNumberCountry(AccountSid, CountryCode, PageSize, Page, PageToken);
}

// ---- Entity: incomingPhoneNumberAssignedAddOn ----

function fetchIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + Sid + ".json";
  var description = "Fetch an instance of an Add-on installation currently assigned to this Number with Sid " + Sid + " for Account " + AccountSid + " and Phone Number " + ResourceSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function deleteIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + Sid + ".json";
  var description = "Remove the assignment of an Add-on installation with Sid " + Sid + " from the Number " + ResourceSid + " for Account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function listIncomingPhoneNumberAssignedAddOns(AccountSid, ResourceSid, Sid, InstalledAddOnSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "Retrieve a list of Add-on installations currently assigned to Number " + ResourceSid + " for Account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function createIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "Assign an Add-on installation with InstalledAddOnSid " + InstalledAddOnSid + " to Number " + ResourceSid + " for Account " + AccountSid;
  var body = {
    "InstalledAddOnSid": InstalledAddOnSid,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid) {
  return createIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid);
}

function verifyIncomingPhoneNumberAssignedAddOnExists(AccountSid, ResourceSid, Sid, InstalledAddOnSid) {
  return fetchIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid);
}

function verifyIncomingPhoneNumberAssignedAddOnDoesNotExist(AccountSid, ResourceSid, Sid, InstalledAddOnSid) {
  return fetchIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid);
}

function tryToDeleteANonExistingIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid) {
  return deleteIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid, InstalledAddOnSid);
}

// ---- Entity: assigned add-on extension ----

function fetchAssignedAddOnExtension(AccountSid, ResourceSid, AssignedAddOnSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + AssignedAddOnSid + "/Extensions/" + Sid + ".json";
  var description = "Fetch an instance of an Extension for the Assigned Add-on with Sid " + Sid + " under AssignedAddOnSid " + AssignedAddOnSid + " for PhoneNumber " + ResourceSid + " in Account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function listAssignedAddOnExtensions(AccountSid, ResourceSid, AssignedAddOnSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + AssignedAddOnSid + "/Extensions.json";
  var description = "Retrieve a list of Extensions for the Assigned Add-on with AssignedAddOnSid " + AssignedAddOnSid + " for PhoneNumber " + ResourceSid + " in Account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyAssignedAddOnExtensionExists(AccountSid, ResourceSid, AssignedAddOnSid, Sid, PageSize, Page, PageToken) {
  return fetchAssignedAddOnExtension(AccountSid, ResourceSid, AssignedAddOnSid, Sid, PageSize, Page, PageToken);
}

function verifyAssignedAddOnExtensionDoesNotExist(AccountSid, ResourceSid, AssignedAddOnSid, Sid, PageSize, Page, PageToken) {
  return fetchAssignedAddOnExtension(AccountSid, ResourceSid, AssignedAddOnSid, Sid, PageSize, Page, PageToken);
}

// ---- Entity: member ----

function fetchMember(AccountSid, QueueSid, CallSid, Url, Method, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members/" + CallSid + ".json";
  var description = "Fetch member with CallSid " + CallSid + " in queue " + QueueSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateMember(AccountSid, QueueSid, CallSid, Url, Method, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members/" + CallSid + ".json";
  var description = "Update member with CallSid " + CallSid + " in queue " + QueueSid + " for account " + AccountSid + " with Url " + Url + " and Method " + Method;
  var body = {
    "Url": Url,
    "Method": Method,
  };
  return svc.post(url, body, { description: description });
}

function listMembers(AccountSid, QueueSid, CallSid, Url, Method, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members.json";
  var description = "List members in queue " + QueueSid + " for account " + AccountSid + " with PageSize " + PageSize + ", Page " + Page + ", PageToken " + PageToken;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyMemberExists(AccountSid, QueueSid, CallSid, Url, Method, PageSize, Page, PageToken) {
  return fetchMember(AccountSid, QueueSid, CallSid, Url, Method, PageSize, Page, PageToken);
}

function verifyMemberDoesNotExist(AccountSid, QueueSid, CallSid, Url, Method, PageSize, Page, PageToken) {
  return fetchMember(AccountSid, QueueSid, CallSid, Url, Method, PageSize, Page, PageToken);
}

// ---- Entity: signing key list ----

function listSigningKeys(AccountSid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys.json";
  var description = "List signing keys for account " + AccountSid + " with page size " + PageSize + ", page " + Page + ", and page token " + PageToken;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifySigningKeyListExists(AccountSid, PageSize, Page, PageToken) {
  return listSigningKeys(AccountSid, PageSize, Page, PageToken);
}

function verifySigningKeyListDoesNotExist(AccountSid, PageSize, Page, PageToken) {
  return listSigningKeys(AccountSid, PageSize, Page, PageToken);
}

// ---- Entity: participant ----

function createParticipant(AccountSid, ConferenceSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "Create participant from {From} to {To} in conference " + ConferenceSid + " for account " + AccountSid;
  var body = {
    "From": From,
    "To": To,
  };
  return svc.post(url, body, { description: description });
}

function fetchParticipant(AccountSid, ConferenceSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Fetch participant " + CallSid + " in conference " + ConferenceSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function updateParticipant(AccountSid, ConferenceSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Update participant " + CallSid + " in conference " + ConferenceSid + " for account " + AccountSid;
  var body = {
    "Muted": Muted,
    "Hold": Hold,
    "HoldUrl": HoldUrl,
    "HoldMethod": HoldMethod,
    "AnnounceUrl": AnnounceUrl,
    "AnnounceMethod": AnnounceMethod,
    "WaitUrl": WaitUrl,
    "WaitMethod": WaitMethod,
    "BeepOnExit": BeepOnExit,
    "EndConferenceOnExit": EndConferenceOnExit,
    "Coaching": Coaching,
    "CallSidToCoach": CallSidToCoach,
  };
  return svc.post(url, body, { description: description });
}

function deleteParticipant(AccountSid, ConferenceSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Delete participant " + CallSid + " in conference " + ConferenceSid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function listParticipants(AccountSid, ConferenceSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "List participants in conference " + ConferenceSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function tryToAddExistingParticipant(AccountSid, ConferenceSid, CallSid) {
  return createParticipant(AccountSid, ConferenceSid, CallSid);
}

function verifyParticipantExists(AccountSid, ConferenceSid, CallSid) {
  return fetchParticipant(AccountSid, ConferenceSid, CallSid);
}

function verifyParticipantDoesNotExist(AccountSid, ConferenceSid, CallSid) {
  return fetchParticipant(AccountSid, ConferenceSid, CallSid);
}

function tryToDeleteANonExistingParticipant(AccountSid, ConferenceSid, CallSid) {
  return deleteParticipant(AccountSid, ConferenceSid, CallSid);
}

// ---- Entity: payments ----

function createPayments(AccountSid, CallSid, IdempotencyKey, StatusCallback, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments.json";
  var description = "Create payments session for call " + CallSid + " in account " + AccountSid + " with IdempotencyKey " + IdempotencyKey + " and StatusCallback " + StatusCallback;
  var body = {
    "IdempotencyKey": IdempotencyKey,
    "StatusCallback": StatusCallback,
    "BankAccountType": BankAccountType,
    "ChargeAmount": ChargeAmount,
    "Currency": Currency,
    "Description": Description,
    "Input": Input,
    "MinPostalCodeLength": MinPostalCodeLength,
    "Parameter": Parameter,
    "PaymentConnector": PaymentConnector,
    "PaymentMethod": PaymentMethod,
    "PostalCode": PostalCode,
    "SecurityCode": SecurityCode,
    "Timeout": Timeout,
    "TokenType": TokenType,
    "ValidCardTypes": ValidCardTypes,
  };
  return svc.post(url, body, { description: description });
}

function updatePayments(AccountSid, CallSid, IdempotencyKey, StatusCallback, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments/" + Sid + ".json";
  var description = "Update payments session " + Sid + " for call " + CallSid + " in account " + AccountSid + " with IdempotencyKey " + IdempotencyKey + " and StatusCallback " + StatusCallback;
  var body = {
    "IdempotencyKey": IdempotencyKey,
    "StatusCallback": StatusCallback,
    "Capture": Capture,
    "Status": Status,
  };
  return svc.post(url, body, { description: description });
}

function tryToAddExistingPayments(AccountSid, CallSid, IdempotencyKey, StatusCallback, Sid) {
  return createPayments(AccountSid, CallSid, IdempotencyKey, StatusCallback, Sid);
}

// ---- Entity: recording add-on result ----

function fetchRecordingAddOnResult(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Fetch an instance of an AddOnResult with Sid " + Sid + " for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function deleteRecordingAddOnResult(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Delete AddOnResult with Sid " + Sid + " for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function listRecordingAddOnResults(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults.json";
  var description = "List AddOnResults for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyRecordingAddOnResultExists(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken) {
  return fetchRecordingAddOnResult(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken);
}

function verifyRecordingAddOnResultDoesNotExist(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken) {
  return fetchRecordingAddOnResult(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken);
}

function tryToDeleteANonExistingRecordingAddOnResult(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken) {
  return deleteRecordingAddOnResult(AccountSid, ReferenceSid, Sid, PageSize, Page, PageToken);
}

// ---- Entity: recordingAddOnResultPayload ----

function fetchRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Fetch recording add-on result payload " + Sid + " for AddOnResult " + AddOnResultSid + " in recording " + ReferenceSid + " of account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function deleteRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Delete recording add-on result payload " + Sid + " for AddOnResult " + AddOnResultSid + " in recording " + ReferenceSid + " of account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function verifyRecordingAddOnResultPayloadExists(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  return fetchRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid);
}

function verifyRecordingAddOnResultPayloadDoesNotExist(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  return fetchRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid);
}

function tryToDeleteANonExistingRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid) {
  return deleteRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, Sid);
}

// ---- Entity: recordingAddOnResultPayloadList ----

function listRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, PageSize, Page, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads.json";
  var description = "List recording add-on result payloads for AddOnResult " + AddOnResultSid + " in recording " + ReferenceSid + " of account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function verifyRecordingAddOnResultPayloadListExists(AccountSid, ReferenceSid, AddOnResultSid, PageSize, Page, PageToken) {
  return listRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, PageSize, Page, PageToken);
}

function verifyRecordingAddOnResultPayloadListDoesNotExist(AccountSid, ReferenceSid, AddOnResultSid, PageSize, Page, PageToken) {
  return listRecordingAddOnResultPayload(AccountSid, ReferenceSid, AddOnResultSid, PageSize, Page, PageToken);
}

// ---- Entity: sip credential ----

function createSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials.json";
  var description = "Create sip credential {Username} in credential list " + CredentialListSid + " for account " + AccountSid;
  var body = {
    "Username": Username,
    "Password": Password,
  };
  return svc.post(url, body, { description: description });
}

function deleteSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Delete sip credential " + Sid + " from credential list " + CredentialListSid + " for account " + AccountSid;
  var body = undefined;
  return svc.delete(url, { description: description });
}

function updateSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Update sip credential " + Sid + " in credential list " + CredentialListSid + " for account " + AccountSid + " with new password";
  var body = {
    "Password": Password,
  };
  return svc.post(url, body, { description: description });
}

function fetchSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Fetch sip credential " + Sid + " from credential list " + CredentialListSid + " for account " + AccountSid;
  var body = undefined;
  return svc.get(url, { description: description });
}

function tryToAddExistingSipCredential(AccountSid, CredentialListSid, Sid) {
  return createSipCredential(AccountSid, CredentialListSid, Sid);
}

function verifySipCredentialExists(AccountSid, CredentialListSid, Sid) {
  return fetchSipCredential(AccountSid, CredentialListSid, Sid);
}

function verifySipCredentialDoesNotExist(AccountSid, CredentialListSid, Sid) {
  return fetchSipCredential(AccountSid, CredentialListSid, Sid);
}

function tryToDeleteANonExistingSipCredential(AccountSid, CredentialListSid, Sid) {
  return deleteSipCredential(AccountSid, CredentialListSid, Sid);
}
