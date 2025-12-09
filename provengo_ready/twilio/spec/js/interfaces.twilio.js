//@provengo summon rest
// === Auto-generated interfaces for twilio ===
var host = (typeof host !== 'undefined') ? host : 'api.twilio.com';
var port = (typeof port !== 'undefined') ? port : 443;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'https';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function ListAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts.json";
  var description = "Retrieves a collection of Accounts belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts.json";
  var description = "Create a new Twilio Subaccount from the account making the request";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid, "Status": Status}) });
}

function FetchAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + Sid + ".json";
  var description = "Fetch the account specified by the provided Account Sid";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + Sid + ".json";
  var description = "Modify the properties of a given Account";
  var body = {
    "FriendlyName": String(FriendlyName),
    "Status": String(Status),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid, "Status": Status}) });
}

// No verifyAccountsExists generated: Primary Key "Sid" is not in POST body (Server-Generated ID).
function waitForAccountsAdded(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  waitFor(matchSuccess("Create a new Twilio Subaccount from the account making the request"));
}

function matchAnyAccountsAdded() {
  return bp.EventSet("Any Accounts Added", function(e) {
      return e.name.startsWith("Done: Create a new Twilio Subaccount from the account making the request");
  });
}

function ListAddress(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses.json";
  var description = "Retrieve a list of addresses associated with the account";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateAddress(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses.json";
  var description = "Create a new address resource";
  var body = {
    "City": String(City),
    "CustomerName": String(CustomerName),
    "FriendlyName": String(FriendlyName),
    "IsoCountry": String(IsoCountry),
    "PostalCode": String(PostalCode),
    "Region": String(Region),
    "Street": String(Street),
    "StreetSecondary": String(StreetSecondary),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "City": City, "CustomerName": CustomerName, "EmergencyEnabled": EmergencyEnabled, "FriendlyName": FriendlyName, "IsoCountry": IsoCountry, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PostalCode": PostalCode, "Region": Region, "Sid": Sid, "Street": Street, "StreetSecondary": StreetSecondary}) });
}

function FetchAddress(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Fetch a specific address resource";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateAddress(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Update a specific address resource";
  var body = {
    "City": String(City),
    "CustomerName": String(CustomerName),
    "FriendlyName": String(FriendlyName),
    "PostalCode": String(PostalCode),
    "Region": String(Region),
    "Street": String(Street),
    "StreetSecondary": String(StreetSecondary),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "City": City, "CustomerName": CustomerName, "EmergencyEnabled": EmergencyEnabled, "FriendlyName": FriendlyName, "IsoCountry": IsoCountry, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PostalCode": PostalCode, "Region": Region, "Sid": Sid, "Street": Street, "StreetSecondary": StreetSecondary}) });
}

function DeleteAddress(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Delete a specific address resource";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyAddressesExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForAddressesAdded(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary) {
  waitFor(matchSuccess("Create a new address resource"));
}

function matchAnyAddressesAdded() {
  return bp.EventSet("Any Addresses Added", function(e) {
      return e.name.startsWith("Done: Create a new address resource");
  });
}

function ListApplication(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications.json";
  var description = "Retrieve a list of applications representing an application within the requesting account";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateApplication(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications.json";
  var description = "Create a new application within your account";
  var body = {
    "FriendlyName": String(FriendlyName),
    "MessageStatusCallback": String(MessageStatusCallback),
    "PublicApplicationConnectEnabled": PublicApplicationConnectEnabled,
    "SmsFallbackMethod": String(SmsFallbackMethod),
    "SmsFallbackUrl": String(SmsFallbackUrl),
    "SmsMethod": String(SmsMethod),
    "SmsStatusCallback": String(SmsStatusCallback),
    "SmsUrl": String(SmsUrl),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "MessageStatusCallback": MessageStatusCallback, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PublicApplicationConnectEnabled": PublicApplicationConnectEnabled, "Sid": Sid, "SmsFallbackMethod": SmsFallbackMethod, "SmsFallbackUrl": SmsFallbackUrl, "SmsMethod": SmsMethod, "SmsStatusCallback": SmsStatusCallback, "SmsUrl": SmsUrl, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "VoiceCallerIdLookup": VoiceCallerIdLookup, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceUrl": VoiceUrl}) });
}

function DeleteApplication(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Delete the application by the specified application sid";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function FetchApplication(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Fetch the application specified by the provided sid";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateApplication(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Updates the application's properties";
  var body = {
    "FriendlyName": String(FriendlyName),
    "MessageStatusCallback": String(MessageStatusCallback),
    "PublicApplicationConnectEnabled": PublicApplicationConnectEnabled,
    "SmsFallbackMethod": String(SmsFallbackMethod),
    "SmsFallbackUrl": String(SmsFallbackUrl),
    "SmsMethod": String(SmsMethod),
    "SmsStatusCallback": String(SmsStatusCallback),
    "SmsUrl": String(SmsUrl),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "MessageStatusCallback": MessageStatusCallback, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PublicApplicationConnectEnabled": PublicApplicationConnectEnabled, "Sid": Sid, "SmsFallbackMethod": SmsFallbackMethod, "SmsFallbackUrl": SmsFallbackUrl, "SmsMethod": SmsMethod, "SmsStatusCallback": SmsStatusCallback, "SmsUrl": SmsUrl, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "VoiceCallerIdLookup": VoiceCallerIdLookup, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceUrl": VoiceUrl}) });
}

// No verifyApplicationsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForApplicationsAdded(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  waitFor(matchSuccess("Create a new application within your account"));
}

function matchAnyApplicationsAdded() {
  return bp.EventSet("Any Applications Added", function(e) {
      return e.name.startsWith("Done: Create a new application within your account");
  });
}

function ListAuthorizedConnectApp(AccountSid, ConnectAppSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AuthorizedConnectApps.json";
  var description = "Retrieve a list of authorized-connect-apps belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchAuthorizedConnectApp(AccountSid, ConnectAppSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AuthorizedConnectApps/" + ConnectAppSid + ".json";
  var description = "Fetch an instance of an authorized-connect-app";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyAuthorizedConnectAppsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyAuthorizedConnectAppsAdded() {
  return bp.EventSet("Any AuthorizedConnectApps Added", function(e) {
      return e.name.startsWith("Done: Create AuthorizedConnectApps");
  });
}

function ListAvailablePhoneNumberTollFree(AccountSid, AreaCode, Beta, Contains, CountryCode, Distance, ExcludeAllAddressRequired, ExcludeForeignAddressRequired, ExcludeLocalAddressRequired, FaxEnabled, InLata, InLocality, InPostalCode, InRateCenter, InRegion, MmsEnabled, NearLatLong, NearNumber, Page, PageSize, PageToken, SmsEnabled, VoiceEnabled) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers/" + CountryCode + "/TollFree.json";
  var description = "Available toll free phone numbers";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchAvailablePhoneNumberCountry(AccountSid, AreaCode, Beta, Contains, CountryCode, Distance, ExcludeAllAddressRequired, ExcludeForeignAddressRequired, ExcludeLocalAddressRequired, FaxEnabled, InLata, InLocality, InPostalCode, InRateCenter, InRegion, MmsEnabled, NearLatLong, NearNumber, Page, PageSize, PageToken, SmsEnabled, VoiceEnabled) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers/" + CountryCode + ".json";
  var description = "Fetch available phone number information for a specific country";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyAvailablePhoneNumbersExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyAvailablePhoneNumbersAdded() {
  return bp.EventSet("Any AvailablePhoneNumbers Added", function(e) {
      return e.name.startsWith("Done: Create AvailablePhoneNumbers");
  });
}

function FetchBalance(AccountSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Balance.json";
  var description = "Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyBalanceExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyBalanceAdded() {
  return bp.EventSet("Any Balance Added", function(e) {
      return e.name.startsWith("Done: Create Balance");
  });
}

function ListCall(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "Retrieves a collection of calls made to and from your account";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateCall(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections";
  var body = {
    "ApplicationSid": String(ApplicationSid),
    "AsyncAmd": String(AsyncAmd),
    "AsyncAmdStatusCallback": String(AsyncAmdStatusCallback),
    "AsyncAmdStatusCallbackMethod": String(AsyncAmdStatusCallbackMethod),
    "Byoc": String(Byoc),
    "CallReason": String(CallReason),
    "CallToken": String(CallToken),
    "CallerId": String(CallerId),
    "ClientNotificationUrl": String(ClientNotificationUrl),
    "FallbackMethod": String(FallbackMethod),
    "FallbackUrl": String(FallbackUrl),
    "From": String(From),
    "IfMachine": String(IfMachine),
    "MachineDetection": String(MachineDetection),
    "MachineDetectionSilenceTimeout": Number(MachineDetectionSilenceTimeout),
    "MachineDetectionSpeechEndThreshold": Number(MachineDetectionSpeechEndThreshold),
    "MachineDetectionSpeechThreshold": Number(MachineDetectionSpeechThreshold),
    "MachineDetectionTimeout": Number(MachineDetectionTimeout),
    "Method": String(Method),
    "Record": Record,
    "SendDigits": String(SendDigits),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "TimeLimit": Number(TimeLimit),
    "Timeout": Number(Timeout),
    "To": String(To),
    "Transcribe": Transcribe,
    "TranscriptionConfiguration": String(TranscriptionConfiguration),
    "Trim": String(Trim),
    "Url": String(Url),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "ApplicationSid": ApplicationSid, "AsyncAmd": AsyncAmd, "AsyncAmdStatusCallback": AsyncAmdStatusCallback, "AsyncAmdStatusCallbackMethod": AsyncAmdStatusCallbackMethod, "Byoc": Byoc, "CallReason": CallReason, "CallToken": CallToken, "CallerId": CallerId, "ClientNotificationUrl": ClientNotificationUrl, "EndTime": EndTime, "EndTime_": EndTime_, "EndTime_": EndTime_, "FallbackMethod": FallbackMethod, "FallbackUrl": FallbackUrl, "From": From, "IfMachine": IfMachine, "MachineDetection": MachineDetection, "MachineDetectionSilenceTimeout": MachineDetectionSilenceTimeout, "MachineDetectionSpeechEndThreshold": MachineDetectionSpeechEndThreshold, "MachineDetectionSpeechThreshold": MachineDetectionSpeechThreshold, "MachineDetectionTimeout": MachineDetectionTimeout, "Method": Method, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "ParentCallSid": ParentCallSid, "Record": Record, "SendDigits": SendDigits, "Sid": Sid, "StartTime": StartTime, "StartTime_": StartTime_, "StartTime_": StartTime_, "Status": Status, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "TimeLimit": TimeLimit, "Timeout": Timeout, "To": To, "Transcribe": Transcribe, "TranscriptionConfiguration": TranscriptionConfiguration, "Trim": Trim, "Twiml": Twiml, "Url": Url}) });
}

function FetchCall(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Fetch the call specified by the provided Call SID";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateCall(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Initiates a call redirect or terminates a call";
  var body = {
    "FallbackMethod": String(FallbackMethod),
    "FallbackUrl": String(FallbackUrl),
    "Method": String(Method),
    "Status": String(Status),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "TimeLimit": Number(TimeLimit),
    "Twiml": String(Twiml),
    "Url": String(Url),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "ApplicationSid": ApplicationSid, "AsyncAmd": AsyncAmd, "AsyncAmdStatusCallback": AsyncAmdStatusCallback, "AsyncAmdStatusCallbackMethod": AsyncAmdStatusCallbackMethod, "Byoc": Byoc, "CallReason": CallReason, "CallToken": CallToken, "CallerId": CallerId, "ClientNotificationUrl": ClientNotificationUrl, "EndTime": EndTime, "EndTime_": EndTime_, "EndTime_": EndTime_, "FallbackMethod": FallbackMethod, "FallbackUrl": FallbackUrl, "From": From, "IfMachine": IfMachine, "MachineDetection": MachineDetection, "MachineDetectionSilenceTimeout": MachineDetectionSilenceTimeout, "MachineDetectionSpeechEndThreshold": MachineDetectionSpeechEndThreshold, "MachineDetectionSpeechThreshold": MachineDetectionSpeechThreshold, "MachineDetectionTimeout": MachineDetectionTimeout, "Method": Method, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "ParentCallSid": ParentCallSid, "Record": Record, "SendDigits": SendDigits, "Sid": Sid, "StartTime": StartTime, "StartTime_": StartTime_, "StartTime_": StartTime_, "Status": Status, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "TimeLimit": TimeLimit, "Timeout": Timeout, "To": To, "Transcribe": Transcribe, "TranscriptionConfiguration": TranscriptionConfiguration, "Trim": Trim, "Twiml": Twiml, "Url": Url}) });
}

function DeleteCall(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyCallsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForCallsAdded(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url) {
  waitFor(matchSuccess("Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections"));
}

function matchAnyCallsAdded() {
  return bp.EventSet("Any Calls Added", function(e) {
      return e.name.startsWith("Done: Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections");
  });
}

function ListCallEvent(AccountSid, CallSid, Page, PageSize, PageToken, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Events.json";
  var description = "Retrieve a list of all events for a call.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyEventsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyEventsAdded() {
  return bp.EventSet("Any Events Added", function(e) {
      return e.name.startsWith("Done: Create Events");
  });
}

function ListNotification(AccountSid, Log, MessageDate, MessageDate_, MessageDate_, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Notifications.json";
  var description = "Retrieve a list of notifications belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchNotification(AccountSid, Log, MessageDate, MessageDate_, MessageDate_, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Notifications/" + Sid + ".json";
  var description = "Fetch a notification belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyNotificationsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyNotificationsAdded() {
  return bp.EventSet("Any Notifications Added", function(e) {
      return e.name.startsWith("Done: Create Notifications");
  });
}

function ListRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings.json";
  var description = "Retrieve a list of recordings belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateCallRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings.json";
  var description = "Create a recording for the call.";
  var body = {
    "RecordingChannels": String(RecordingChannels),
    "RecordingStatusCallback": String(RecordingStatusCallback),
    "RecordingStatusCallbackEvent": String(RecordingStatusCallbackEvent),
    "RecordingStatusCallbackMethod": String(RecordingStatusCallbackMethod),
    "RecordingTrack": String(RecordingTrack),
    "Trim": String(Trim),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "ConferenceSid": ConferenceSid, "DateCreated": DateCreated, "DateCreated_": DateCreated_, "DateCreated_": DateCreated_, "IncludeSoftDeleted": IncludeSoftDeleted, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PauseBehavior": PauseBehavior, "RecordingChannels": RecordingChannels, "RecordingStatusCallback": RecordingStatusCallback, "RecordingStatusCallbackEvent": RecordingStatusCallbackEvent, "RecordingStatusCallbackMethod": RecordingStatusCallbackMethod, "RecordingTrack": RecordingTrack, "Sid": Sid, "Status": Status, "Trim": Trim}) });
}

function FetchRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + Sid + ".json";
  var description = "Fetch an instance of a recording";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateCallRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings/" + Sid + ".json";
  var description = "Changes the status of the recording to paused, stopped, or in-progress.";
  var body = {
    "PauseBehavior": String(PauseBehavior),
    "Status": String(Status),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "ConferenceSid": ConferenceSid, "DateCreated": DateCreated, "DateCreated_": DateCreated_, "DateCreated_": DateCreated_, "IncludeSoftDeleted": IncludeSoftDeleted, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PauseBehavior": PauseBehavior, "RecordingChannels": RecordingChannels, "RecordingStatusCallback": RecordingStatusCallback, "RecordingStatusCallbackEvent": RecordingStatusCallbackEvent, "RecordingStatusCallbackMethod": RecordingStatusCallbackMethod, "RecordingTrack": RecordingTrack, "Sid": Sid, "Status": Status, "Trim": Trim}) });
}

function DeleteRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + Sid + ".json";
  var description = "Delete a recording from your account";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyRecordingsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForRecordingsAdded(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim) {
  waitFor(matchSuccess("Create a recording for the call."));
}

function matchAnyRecordingsAdded() {
  return bp.EventSet("Any Recordings Added", function(e) {
      return e.name.startsWith("Done: Create a recording for the call.");
  });
}

function ListConference(AccountSid, AnnounceMethod, AnnounceUrl, DateCreated, DateCreated_, DateCreated_, DateUpdated, DateUpdated_, DateUpdated_, FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences.json";
  var description = "Retrieve a list of conferences belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchConference(AccountSid, AnnounceMethod, AnnounceUrl, DateCreated, DateCreated_, DateCreated_, DateUpdated, DateUpdated_, DateUpdated_, FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + Sid + ".json";
  var description = "Fetch an instance of a conference";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateConference(AccountSid, AnnounceMethod, AnnounceUrl, DateCreated, DateCreated_, DateCreated_, DateUpdated, DateUpdated_, DateUpdated_, FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + Sid + ".json";
  var description = "POST UpdateConference";
  var body = {
    "AnnounceMethod": String(AnnounceMethod),
    "AnnounceUrl": String(AnnounceUrl),
    "Status": String(Status),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AnnounceMethod": AnnounceMethod, "AnnounceUrl": AnnounceUrl, "DateCreated": DateCreated, "DateCreated_": DateCreated_, "DateCreated_": DateCreated_, "DateUpdated": DateUpdated, "DateUpdated_": DateUpdated_, "DateUpdated_": DateUpdated_, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid, "Status": Status}) });
}

// No verifyConferencesExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyConferencesAdded() {
  return bp.EventSet("Any Conferences Added", function(e) {
      return e.name.startsWith("Done: Create Conferences");
  });
}

function ListConferenceRecording(AccountSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, Page, PageSize, PageToken, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings.json";
  var description = "Retrieve a list of recordings belonging to the call used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchConferenceRecording(AccountSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, Page, PageSize, PageToken, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Fetch an instance of a recording for a call";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateConferenceRecording(AccountSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, Page, PageSize, PageToken, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.";
  var body = {
    "PauseBehavior": String(PauseBehavior),
    "Status": String(Status),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "ConferenceSid": ConferenceSid, "DateCreated": DateCreated, "DateCreated_": DateCreated_, "DateCreated_": DateCreated_, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PauseBehavior": PauseBehavior, "Sid": Sid, "Status": Status}) });
}

function DeleteConferenceRecording(AccountSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, Page, PageSize, PageToken, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Delete a recording from your account";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyConferenceRecordingsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyConferenceRecordingsAdded() {
  return bp.EventSet("Any ConferenceRecordings Added", function(e) {
      return e.name.startsWith("Done: Create ConferenceRecordings");
  });
}

function FetchConnectApp(AccountSid, AuthorizeRedirectUrl, CompanyName, DeauthorizeCallbackMethod, DeauthorizeCallbackUrl, Description, FriendlyName, HomepageUrl, Page, PageSize, PageToken, Permissions, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Fetch an instance of a connect-app";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateConnectApp(AccountSid, AuthorizeRedirectUrl, CompanyName, DeauthorizeCallbackMethod, DeauthorizeCallbackUrl, Description, FriendlyName, HomepageUrl, Page, PageSize, PageToken, Permissions, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Update a connect-app with the specified parameters";
  var body = {
    "AuthorizeRedirectUrl": String(AuthorizeRedirectUrl),
    "CompanyName": String(CompanyName),
    "DeauthorizeCallbackMethod": String(DeauthorizeCallbackMethod),
    "DeauthorizeCallbackUrl": String(DeauthorizeCallbackUrl),
    "Description": String(Description),
    "FriendlyName": String(FriendlyName),
    "HomepageUrl": String(HomepageUrl),
    "Permissions": String(Permissions),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AuthorizeRedirectUrl": AuthorizeRedirectUrl, "CompanyName": CompanyName, "DeauthorizeCallbackMethod": DeauthorizeCallbackMethod, "DeauthorizeCallbackUrl": DeauthorizeCallbackUrl, "Description": Description, "FriendlyName": FriendlyName, "HomepageUrl": HomepageUrl, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Permissions": Permissions, "Sid": Sid}) });
}

function DeleteConnectApp(AccountSid, AuthorizeRedirectUrl, CompanyName, DeauthorizeCallbackMethod, DeauthorizeCallbackUrl, Description, FriendlyName, HomepageUrl, Page, PageSize, PageToken, Permissions, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Delete an instance of a connect-app";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function ListConnectApp(AccountSid, AuthorizeRedirectUrl, CompanyName, DeauthorizeCallbackMethod, DeauthorizeCallbackUrl, Description, FriendlyName, HomepageUrl, Page, PageSize, PageToken, Permissions, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps.json";
  var description = "Retrieve a list of connect-apps belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyConnectAppsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyConnectAppsAdded() {
  return bp.EventSet("Any ConnectApps Added", function(e) {
      return e.name.startsWith("Done: Create ConnectApps");
  });
}

function ListDependentPhoneNumber(AccountSid, AddressSid, Page, PageSize, PageToken, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + AddressSid + "/DependentPhoneNumbers.json";
  var description = "Phone numbers dependent on an Address resource";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyDependentPhoneNumbersExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyDependentPhoneNumbersAdded() {
  return bp.EventSet("Any DependentPhoneNumbers Added", function(e) {
      return e.name.startsWith("Done: Create DependentPhoneNumbers");
  });
}

function ListIncomingPhoneNumber(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers.json";
  var description = "Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateIncomingPhoneNumber(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers.json";
  var description = "Purchase a phone-number for the account.";
  var body = {
    "AddressSid": String(AddressSid),
    "ApiVersion": String(ApiVersion),
    "AreaCode": String(AreaCode),
    "BundleSid": String(BundleSid),
    "EmergencyAddressSid": String(EmergencyAddressSid),
    "EmergencyStatus": String(EmergencyStatus),
    "FriendlyName": String(FriendlyName),
    "IdentitySid": String(IdentitySid),
    "PhoneNumber": String(PhoneNumber),
    "SmsApplicationSid": String(SmsApplicationSid),
    "SmsFallbackMethod": String(SmsFallbackMethod),
    "SmsFallbackUrl": String(SmsFallbackUrl),
    "SmsMethod": String(SmsMethod),
    "SmsUrl": String(SmsUrl),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "VoiceApplicationSid": String(VoiceApplicationSid),
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AddressSid": AddressSid, "ApiVersion": ApiVersion, "AreaCode": AreaCode, "Beta": Beta, "BundleSid": BundleSid, "EmergencyAddressSid": EmergencyAddressSid, "EmergencyStatus": EmergencyStatus, "FriendlyName": FriendlyName, "IdentitySid": IdentitySid, "Origin": Origin, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PhoneNumber": PhoneNumber, "Sid": Sid, "SmsApplicationSid": SmsApplicationSid, "SmsFallbackMethod": SmsFallbackMethod, "SmsFallbackUrl": SmsFallbackUrl, "SmsMethod": SmsMethod, "SmsUrl": SmsUrl, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "VoiceApplicationSid": VoiceApplicationSid, "VoiceCallerIdLookup": VoiceCallerIdLookup, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceUrl": VoiceUrl}) });
}

function FetchIncomingPhoneNumber(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Fetch an incoming-phone-number belonging to the account used to make the request.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateIncomingPhoneNumber(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Update an incoming-phone-number instance.";
  var body = {
    "AccountSid": String(AccountSid),
    "AddressSid": String(AddressSid),
    "ApiVersion": String(ApiVersion),
    "BundleSid": String(BundleSid),
    "EmergencyAddressSid": String(EmergencyAddressSid),
    "EmergencyStatus": String(EmergencyStatus),
    "FriendlyName": String(FriendlyName),
    "IdentitySid": String(IdentitySid),
    "SmsApplicationSid": String(SmsApplicationSid),
    "SmsFallbackMethod": String(SmsFallbackMethod),
    "SmsFallbackUrl": String(SmsFallbackUrl),
    "SmsMethod": String(SmsMethod),
    "SmsUrl": String(SmsUrl),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "VoiceApplicationSid": String(VoiceApplicationSid),
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AddressSid": AddressSid, "ApiVersion": ApiVersion, "AreaCode": AreaCode, "Beta": Beta, "BundleSid": BundleSid, "EmergencyAddressSid": EmergencyAddressSid, "EmergencyStatus": EmergencyStatus, "FriendlyName": FriendlyName, "IdentitySid": IdentitySid, "Origin": Origin, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PhoneNumber": PhoneNumber, "Sid": Sid, "SmsApplicationSid": SmsApplicationSid, "SmsFallbackMethod": SmsFallbackMethod, "SmsFallbackUrl": SmsFallbackUrl, "SmsMethod": SmsMethod, "SmsUrl": SmsUrl, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "VoiceApplicationSid": VoiceApplicationSid, "VoiceCallerIdLookup": VoiceCallerIdLookup, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceUrl": VoiceUrl}) });
}

function DeleteIncomingPhoneNumber(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Delete a phone-numbers belonging to the account used to make the request.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyIncomingPhoneNumbersExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForIncomingPhoneNumbersAdded(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl) {
  waitFor(matchSuccess("Purchase a phone-number for the account."));
}

function matchAnyIncomingPhoneNumbersAdded() {
  return bp.EventSet("Any IncomingPhoneNumbers Added", function(e) {
      return e.name.startsWith("Done: Purchase a phone-number for the account.");
  });
}

function FetchIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + Sid + ".json";
  var description = "Fetch an instance of an Add-on installation currently assigned to this Number.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteIncomingPhoneNumberAssignedAddOn(AccountSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + Sid + ".json";
  var description = "Remove the assignment of an Add-on installation from the Number specified.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyAssignedAddOnsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyAssignedAddOnsAdded() {
  return bp.EventSet("Any AssignedAddOns Added", function(e) {
      return e.name.startsWith("Done: Create AssignedAddOns");
  });
}

function ListIncomingPhoneNumberLocal(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/Local.json";
  var description = "Incoming local phone numbers on a Twilio account/project";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateIncomingPhoneNumberLocal(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/Local.json";
  var description = "Create a new local incoming phone number";
  var body = {
    "AddressSid": String(AddressSid),
    "ApiVersion": String(ApiVersion),
    "BundleSid": String(BundleSid),
    "EmergencyAddressSid": String(EmergencyAddressSid),
    "EmergencyStatus": String(EmergencyStatus),
    "FriendlyName": String(FriendlyName),
    "IdentitySid": String(IdentitySid),
    "PhoneNumber": String(PhoneNumber),
    "SmsApplicationSid": String(SmsApplicationSid),
    "SmsFallbackMethod": String(SmsFallbackMethod),
    "SmsFallbackUrl": String(SmsFallbackUrl),
    "SmsMethod": String(SmsMethod),
    "SmsUrl": String(SmsUrl),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "VoiceApplicationSid": String(VoiceApplicationSid),
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AddressSid": AddressSid, "ApiVersion": ApiVersion, "Beta": Beta, "BundleSid": BundleSid, "EmergencyAddressSid": EmergencyAddressSid, "EmergencyStatus": EmergencyStatus, "FriendlyName": FriendlyName, "IdentitySid": IdentitySid, "Origin": Origin, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PhoneNumber": PhoneNumber, "SmsApplicationSid": SmsApplicationSid, "SmsFallbackMethod": SmsFallbackMethod, "SmsFallbackUrl": SmsFallbackUrl, "SmsMethod": SmsMethod, "SmsUrl": SmsUrl, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "VoiceApplicationSid": VoiceApplicationSid, "VoiceCallerIdLookup": VoiceCallerIdLookup, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceUrl": VoiceUrl, "id": id}) });
}

// No verifyIncomingPhoneNumbersLocalExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForIncomingPhoneNumbersLocalAdded(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  waitFor(matchSuccess("Create a new local incoming phone number"));
}

function matchAnyIncomingPhoneNumbersLocalAdded() {
  return bp.EventSet("Any IncomingPhoneNumbersLocal Added", function(e) {
      return e.name.startsWith("Done: Create a new local incoming phone number");
  });
}

function ListIncomingPhoneNumberMobile(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/Mobile.json";
  var description = "Incoming mobile phone numbers on a Twilio account/project";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateIncomingPhoneNumberMobile(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/Mobile.json";
  var description = "Create a new mobile incoming phone number";
  var body = {
    "AddressSid": String(AddressSid),
    "ApiVersion": String(ApiVersion),
    "BundleSid": String(BundleSid),
    "EmergencyAddressSid": String(EmergencyAddressSid),
    "EmergencyStatus": String(EmergencyStatus),
    "FriendlyName": String(FriendlyName),
    "IdentitySid": String(IdentitySid),
    "PhoneNumber": String(PhoneNumber),
    "SmsApplicationSid": String(SmsApplicationSid),
    "SmsFallbackMethod": String(SmsFallbackMethod),
    "SmsFallbackUrl": String(SmsFallbackUrl),
    "SmsMethod": String(SmsMethod),
    "SmsUrl": String(SmsUrl),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "VoiceApplicationSid": String(VoiceApplicationSid),
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AddressSid": AddressSid, "ApiVersion": ApiVersion, "Beta": Beta, "BundleSid": BundleSid, "EmergencyAddressSid": EmergencyAddressSid, "EmergencyStatus": EmergencyStatus, "FriendlyName": FriendlyName, "IdentitySid": IdentitySid, "Origin": Origin, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PhoneNumber": PhoneNumber, "SmsApplicationSid": SmsApplicationSid, "SmsFallbackMethod": SmsFallbackMethod, "SmsFallbackUrl": SmsFallbackUrl, "SmsMethod": SmsMethod, "SmsUrl": SmsUrl, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "VoiceApplicationSid": VoiceApplicationSid, "VoiceCallerIdLookup": VoiceCallerIdLookup, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceUrl": VoiceUrl, "id": id}) });
}

// No verifyIncomingPhoneNumbersMobileExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForIncomingPhoneNumbersMobileAdded(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  waitFor(matchSuccess("Create a new mobile incoming phone number"));
}

function matchAnyIncomingPhoneNumbersMobileAdded() {
  return bp.EventSet("Any IncomingPhoneNumbersMobile Added", function(e) {
      return e.name.startsWith("Done: Create a new mobile incoming phone number");
  });
}

function ListIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, Page, PageSize, PageToken, ResourceSid, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "Retrieve a list of Add-on installations currently assigned to this Number.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, Page, PageSize, PageToken, ResourceSid, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "Assign an Add-on installation to the Number specified.";
  var body = {
    "InstalledAddOnSid": String(InstalledAddOnSid),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "InstalledAddOnSid": InstalledAddOnSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "ResourceSid": ResourceSid, "id": id}) });
}

// No verifyIncomingPhoneNumberAssignedAddOnsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForIncomingPhoneNumberAssignedAddOnsAdded(AccountSid, InstalledAddOnSid, Page, PageSize, PageToken, ResourceSid, id) {
  waitFor(matchSuccess("Assign an Add-on installation to the Number specified."));
}

function matchAnyIncomingPhoneNumberAssignedAddOnsAdded() {
  return bp.EventSet("Any IncomingPhoneNumberAssignedAddOns Added", function(e) {
      return e.name.startsWith("Done: Assign an Add-on installation to the Number specified.");
  });
}

function ListIncomingPhoneNumberAssignedAddOnExtension(AccountSid, AssignedAddOnSid, Page, PageSize, PageToken, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + AssignedAddOnSid + "/Extensions.json";
  var description = "Retrieve a list of Extensions for the Assigned Add-on.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchIncomingPhoneNumberAssignedAddOnExtension(AccountSid, AssignedAddOnSid, Page, PageSize, PageToken, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + AssignedAddOnSid + "/Extensions/" + Sid + ".json";
  var description = "Fetch an instance of an Extension for the Assigned Add-on.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyIncomingPhoneNumberAssignedAddOnExtensionsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyIncomingPhoneNumberAssignedAddOnExtensionsAdded() {
  return bp.EventSet("Any IncomingPhoneNumberAssignedAddOnExtensions Added", function(e) {
      return e.name.startsWith("Done: Create IncomingPhoneNumberAssignedAddOnExtensions");
  });
}

function ListIncomingPhoneNumberTollFree(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/TollFree.json";
  var description = "Incoming toll free phone numbers on a Twilio account/project";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateIncomingPhoneNumberTollFree(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/TollFree.json";
  var description = "Create a new incoming toll free phone number";
  var body = {
    "AddressSid": String(AddressSid),
    "ApiVersion": String(ApiVersion),
    "BundleSid": String(BundleSid),
    "EmergencyAddressSid": String(EmergencyAddressSid),
    "EmergencyStatus": String(EmergencyStatus),
    "FriendlyName": String(FriendlyName),
    "IdentitySid": String(IdentitySid),
    "PhoneNumber": String(PhoneNumber),
    "SmsApplicationSid": String(SmsApplicationSid),
    "SmsFallbackMethod": String(SmsFallbackMethod),
    "SmsFallbackUrl": String(SmsFallbackUrl),
    "SmsMethod": String(SmsMethod),
    "SmsUrl": String(SmsUrl),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "VoiceApplicationSid": String(VoiceApplicationSid),
    "VoiceCallerIdLookup": VoiceCallerIdLookup,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AddressSid": AddressSid, "ApiVersion": ApiVersion, "Beta": Beta, "BundleSid": BundleSid, "EmergencyAddressSid": EmergencyAddressSid, "EmergencyStatus": EmergencyStatus, "FriendlyName": FriendlyName, "IdentitySid": IdentitySid, "Origin": Origin, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PhoneNumber": PhoneNumber, "SmsApplicationSid": SmsApplicationSid, "SmsFallbackMethod": SmsFallbackMethod, "SmsFallbackUrl": SmsFallbackUrl, "SmsMethod": SmsMethod, "SmsUrl": SmsUrl, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "VoiceApplicationSid": VoiceApplicationSid, "VoiceCallerIdLookup": VoiceCallerIdLookup, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceUrl": VoiceUrl, "id": id}) });
}

// No verifyIncomingPhoneNumbersTollFreeExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForIncomingPhoneNumbersTollFreeAdded(AccountSid, AddressSid, ApiVersion, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl, id) {
  waitFor(matchSuccess("Create a new incoming toll free phone number"));
}

function matchAnyIncomingPhoneNumbersTollFreeAdded() {
  return bp.EventSet("Any IncomingPhoneNumbersTollFree Added", function(e) {
      return e.name.startsWith("Done: Create a new incoming toll free phone number");
  });
}

function ListKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys.json";
  var description = "API keys";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateNewKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys.json";
  var description = "Create a new API key";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Fetch a specific API key";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Update a specific API key";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function DeleteKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Delete a specific API key";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyKeysExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForKeysAdded(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a new API key"));
}

function matchAnyKeysAdded() {
  return bp.EventSet("Any Keys Added", function(e) {
      return e.name.startsWith("Done: Create a new API key");
  });
}

function ListMedia(AccountSid, DateCreated, DateCreated_, DateCreated_, MessageSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + MessageSid + "/Media.json";
  var description = "Read a list of Media resources associated with a specific Message resource";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchMedia(AccountSid, DateCreated, DateCreated_, DateCreated_, MessageSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + MessageSid + "/Media/" + Sid + ".json";
  var description = "Fetch a single Media resource associated with a specific Message resource";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteMedia(AccountSid, DateCreated, DateCreated_, DateCreated_, MessageSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + MessageSid + "/Media/" + Sid + ".json";
  var description = "Delete the Media resource.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyMediaExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyMediaAdded() {
  return bp.EventSet("Any Media Added", function(e) {
      return e.name.startsWith("Done: Create Media");
  });
}

function ListMessage(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages.json";
  var description = "Retrieve a list of Message resources associated with a Twilio Account";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateMessage(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages.json";
  var description = "Send a message";
  var body = {
    "ApplicationSid": String(ApplicationSid),
    "Body": String(Body),
    "From": String(From),
    "MediaUrl": [String(MediaUrl)],
    "PersistentAction": [String(PersistentAction)],
    "StatusCallback": String(StatusCallback),
    "Tags": String(Tags),
    "To": String(To),
    "MessagingServiceSid": String(MessagingServiceSid),
    "ScheduleType": String(ScheduleType),
    "ContentSid": String(ContentSid),
    "ContentVariables": String(ContentVariables),
    "ForceDelivery": ForceDelivery,
    "MaxPrice": Number(MaxPrice),
    "ProvideFeedback": ProvideFeedback,
    "RiskCheck": String(RiskCheck),
    "SendAsMms": SendAsMms,
    "SendAt": String(SendAt),
    "ShortenUrls": ShortenUrls,
    "SmartEncoded": SmartEncoded,
    "TrafficType": String(TrafficType),
    "ValidityPeriod": Number(ValidityPeriod),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "ApplicationSid": ApplicationSid, "Body": Body, "ContentSid": ContentSid, "ContentVariables": ContentVariables, "DateSent": DateSent, "DateSent_": DateSent_, "DateSent_": DateSent_, "ForceDelivery": ForceDelivery, "From": From, "MaxPrice": MaxPrice, "MediaUrl": MediaUrl, "MessagingServiceSid": MessagingServiceSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PersistentAction": PersistentAction, "ProvideFeedback": ProvideFeedback, "RiskCheck": RiskCheck, "ScheduleType": ScheduleType, "SendAsMms": SendAsMms, "SendAt": SendAt, "ShortenUrls": ShortenUrls, "Sid": Sid, "SmartEncoded": SmartEncoded, "Status": Status, "StatusCallback": StatusCallback, "Tags": Tags, "To": To, "TrafficType": TrafficType, "ValidityPeriod": ValidityPeriod}) });
}

function FetchMessage(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Fetch a specific Message";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateMessage(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Update a Message resource (used to redact Message `body` text and to cancel not-yet-sent messages)";
  var body = {
    "Body": String(Body),
    "Status": String(Status),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "ApplicationSid": ApplicationSid, "Body": Body, "ContentSid": ContentSid, "ContentVariables": ContentVariables, "DateSent": DateSent, "DateSent_": DateSent_, "DateSent_": DateSent_, "ForceDelivery": ForceDelivery, "From": From, "MaxPrice": MaxPrice, "MediaUrl": MediaUrl, "MessagingServiceSid": MessagingServiceSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PersistentAction": PersistentAction, "ProvideFeedback": ProvideFeedback, "RiskCheck": RiskCheck, "ScheduleType": ScheduleType, "SendAsMms": SendAsMms, "SendAt": SendAt, "ShortenUrls": ShortenUrls, "Sid": Sid, "SmartEncoded": SmartEncoded, "Status": Status, "StatusCallback": StatusCallback, "Tags": Tags, "To": To, "TrafficType": TrafficType, "ValidityPeriod": ValidityPeriod}) });
}

function DeleteMessage(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Deletes a Message resource from your account";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyMessagesExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForMessagesAdded(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod) {
  waitFor(matchSuccess("Send a message"));
}

function matchAnyMessagesAdded() {
  return bp.EventSet("Any Messages Added", function(e) {
      return e.name.startsWith("Done: Send a message");
  });
}

function CreateMessageFeedback(AccountSid, MessageSid, Outcome, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + MessageSid + "/Feedback.json";
  var description = "Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message";
  var body = {
    "Outcome": String(Outcome),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "MessageSid": MessageSid, "Outcome": Outcome, "id": id}) });
}

// No verifyMessageFeedbackExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForMessageFeedbackAdded(AccountSid, MessageSid, Outcome, id) {
  waitFor(matchSuccess("Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message"));
}

function matchAnyMessageFeedbackAdded() {
  return bp.EventSet("Any MessageFeedback Added", function(e) {
      return e.name.startsWith("Done: Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message");
  });
}

function ListMember(AccountSid, CallSid, Method, Page, PageSize, PageToken, QueueSid, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members.json";
  var description = "Retrieve the members of the queue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchMember(AccountSid, CallSid, Method, Page, PageSize, PageToken, QueueSid, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members/" + CallSid + ".json";
  var description = "Fetch a specific member from the queue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateMember(AccountSid, CallSid, Method, Page, PageSize, PageToken, QueueSid, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members/" + CallSid + ".json";
  var description = "Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL";
  var body = {
    "Method": String(Method),
    "Url": String(Url),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "Method": Method, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "QueueSid": QueueSid, "Url": Url}) });
}

// No verifyQueueMembersExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyQueueMembersAdded() {
  return bp.EventSet("Any QueueMembers Added", function(e) {
      return e.name.startsWith("Done: Create QueueMembers");
  });
}

function ListOutgoingCallerId(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds.json";
  var description = "Retrieve a list of outgoing-caller-ids belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateValidationRequest(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds.json";
  var description = "Create a new validation request for an outgoing caller ID";
  var body = {
    "CallDelay": Number(CallDelay),
    "Extension": String(Extension),
    "FriendlyName": String(FriendlyName),
    "PhoneNumber": String(PhoneNumber),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallDelay": CallDelay, "Extension": Extension, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PhoneNumber": PhoneNumber, "Sid": Sid, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod}) });
}

function FetchOutgoingCallerId(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Fetch an outgoing-caller-id belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateOutgoingCallerId(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Updates the caller-id";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallDelay": CallDelay, "Extension": Extension, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PhoneNumber": PhoneNumber, "Sid": Sid, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod}) });
}

function DeleteOutgoingCallerId(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Delete the caller-id specified from the account";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyOutgoingCallerIdsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForOutgoingCallerIdsAdded(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod) {
  waitFor(matchSuccess("Create a new validation request for an outgoing caller ID"));
}

function matchAnyOutgoingCallerIdsAdded() {
  return bp.EventSet("Any OutgoingCallerIds Added", function(e) {
      return e.name.startsWith("Done: Create a new validation request for an outgoing caller ID");
  });
}

function ListSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys.json";
  var description = "Retrieve a list of signing keys belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateNewSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys.json";
  var description = "Create a new Signing Key for the account making the request.";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "GET FetchSigningKey";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "DELETE DeleteSigningKey";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function UpdateSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "POST UpdateSigningKey";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

// No verifySigningKeysExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForSigningKeysAdded(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a new Signing Key for the account making the request."));
}

function matchAnySigningKeysAdded() {
  return bp.EventSet("Any SigningKeys Added", function(e) {
      return e.name.startsWith("Done: Create a new Signing Key for the account making the request.");
  });
}

function CreatePayments(AccountSid, CallSid, Capture, ChargeAmount, Currency, Description, IdempotencyKey, Input, Parameter, PaymentConnector, PaymentMethod, PostalCode, SecurityCode, Sid, Status, StatusCallback, ValidCardTypes) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments.json";
  var description = "create an instance of payments. This will start a new payments session";
  var body = {
    "ChargeAmount": Number(ChargeAmount),
    "Currency": String(Currency),
    "Description": String(Description),
    "IdempotencyKey": String(IdempotencyKey),
    "Input": String(Input),
    "Parameter": String(Parameter),
    "PaymentConnector": String(PaymentConnector),
    "PaymentMethod": String(PaymentMethod),
    "PostalCode": PostalCode,
    "SecurityCode": SecurityCode,
    "StatusCallback": String(StatusCallback),
    "ValidCardTypes": String(ValidCardTypes),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "Capture": Capture, "ChargeAmount": ChargeAmount, "Currency": Currency, "Description": Description, "IdempotencyKey": IdempotencyKey, "Input": Input, "Parameter": Parameter, "PaymentConnector": PaymentConnector, "PaymentMethod": PaymentMethod, "PostalCode": PostalCode, "SecurityCode": SecurityCode, "Sid": Sid, "Status": Status, "StatusCallback": StatusCallback, "ValidCardTypes": ValidCardTypes}) });
}

function UpdatePayments(AccountSid, CallSid, Capture, ChargeAmount, Currency, Description, IdempotencyKey, Input, Parameter, PaymentConnector, PaymentMethod, PostalCode, SecurityCode, Sid, Status, StatusCallback, ValidCardTypes) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments/" + Sid + ".json";
  var description = "update an instance of payments with different phases of payment flows.";
  var body = {
    "Capture": String(Capture),
    "IdempotencyKey": String(IdempotencyKey),
    "Status": String(Status),
    "StatusCallback": String(StatusCallback),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "Capture": Capture, "ChargeAmount": ChargeAmount, "Currency": Currency, "Description": Description, "IdempotencyKey": IdempotencyKey, "Input": Input, "Parameter": Parameter, "PaymentConnector": PaymentConnector, "PaymentMethod": PaymentMethod, "PostalCode": PostalCode, "SecurityCode": SecurityCode, "Sid": Sid, "Status": Status, "StatusCallback": StatusCallback, "ValidCardTypes": ValidCardTypes}) });
}

// No verifyPaymentsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForPaymentsAdded(AccountSid, CallSid, Capture, ChargeAmount, Currency, Description, IdempotencyKey, Input, Parameter, PaymentConnector, PaymentMethod, PostalCode, SecurityCode, Sid, Status, StatusCallback, ValidCardTypes) {
  waitFor(matchSuccess("create an instance of payments. This will start a new payments session"));
}

function matchAnyPaymentsAdded() {
  return bp.EventSet("Any Payments Added", function(e) {
      return e.name.startsWith("Done: create an instance of payments. This will start a new payments session");
  });
}

function ListParticipant(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "Retrieve a list of participants belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateParticipant(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "POST CreateParticipant";
  var body = {
    "AmdStatusCallback": String(AmdStatusCallback),
    "AmdStatusCallbackMethod": String(AmdStatusCallbackMethod),
    "Beep": String(Beep),
    "CallToken": String(CallToken),
    "CallerDisplayName": String(CallerDisplayName),
    "ClientNotificationUrl": String(ClientNotificationUrl),
    "EarlyMedia": EarlyMedia,
    "From": String(From),
    "Label": String(Label),
    "MachineDetection": String(MachineDetection),
    "MachineDetectionSilenceTimeout": Number(MachineDetectionSilenceTimeout),
    "MachineDetectionSpeechEndThreshold": Number(MachineDetectionSpeechEndThreshold),
    "MachineDetectionSpeechThreshold": Number(MachineDetectionSpeechThreshold),
    "MachineDetectionTimeout": Number(MachineDetectionTimeout),
    "Muted": Muted,
    "Record": Record,
    "StatusCallback": String(StatusCallback),
    "StatusCallbackEvent": String(StatusCallbackEvent),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "TimeLimit": Number(TimeLimit),
    "To": String(To),
    "Trim": String(Trim),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AmdStatusCallback": AmdStatusCallback, "AmdStatusCallbackMethod": AmdStatusCallbackMethod, "AnnounceMethod": AnnounceMethod, "AnnounceUrl": AnnounceUrl, "Beep": Beep, "BeepOnExit": BeepOnExit, "CallSid": CallSid, "CallSidToCoach": CallSidToCoach, "CallToken": CallToken, "CallerDisplayName": CallerDisplayName, "ClientNotificationUrl": ClientNotificationUrl, "Coaching": Coaching, "ConferenceSid": ConferenceSid, "EarlyMedia": EarlyMedia, "EndConferenceOnExit": EndConferenceOnExit, "From": From, "Hold": Hold, "HoldMethod": HoldMethod, "HoldUrl": HoldUrl, "Label": Label, "MachineDetection": MachineDetection, "MachineDetectionSilenceTimeout": MachineDetectionSilenceTimeout, "MachineDetectionSpeechEndThreshold": MachineDetectionSpeechEndThreshold, "MachineDetectionSpeechThreshold": MachineDetectionSpeechThreshold, "MachineDetectionTimeout": MachineDetectionTimeout, "Muted": Muted, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Record": Record, "StatusCallback": StatusCallback, "StatusCallbackEvent": StatusCallbackEvent, "StatusCallbackMethod": StatusCallbackMethod, "TimeLimit": TimeLimit, "To": To, "Trim": Trim, "WaitMethod": WaitMethod, "WaitUrl": WaitUrl}) });
}

function FetchParticipant(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Fetch an instance of a participant";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateParticipant(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Update the properties of the participant";
  var body = {
    "AnnounceMethod": String(AnnounceMethod),
    "AnnounceUrl": String(AnnounceUrl),
    "BeepOnExit": BeepOnExit,
    "CallSidToCoach": String(CallSidToCoach),
    "Coaching": Coaching,
    "EndConferenceOnExit": EndConferenceOnExit,
    "Hold": Hold,
    "HoldMethod": String(HoldMethod),
    "HoldUrl": String(HoldUrl),
    "Muted": Muted,
    "WaitMethod": String(WaitMethod),
    "WaitUrl": String(WaitUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "AmdStatusCallback": AmdStatusCallback, "AmdStatusCallbackMethod": AmdStatusCallbackMethod, "AnnounceMethod": AnnounceMethod, "AnnounceUrl": AnnounceUrl, "Beep": Beep, "BeepOnExit": BeepOnExit, "CallSid": CallSid, "CallSidToCoach": CallSidToCoach, "CallToken": CallToken, "CallerDisplayName": CallerDisplayName, "ClientNotificationUrl": ClientNotificationUrl, "Coaching": Coaching, "ConferenceSid": ConferenceSid, "EarlyMedia": EarlyMedia, "EndConferenceOnExit": EndConferenceOnExit, "From": From, "Hold": Hold, "HoldMethod": HoldMethod, "HoldUrl": HoldUrl, "Label": Label, "MachineDetection": MachineDetection, "MachineDetectionSilenceTimeout": MachineDetectionSilenceTimeout, "MachineDetectionSpeechEndThreshold": MachineDetectionSpeechEndThreshold, "MachineDetectionSpeechThreshold": MachineDetectionSpeechThreshold, "MachineDetectionTimeout": MachineDetectionTimeout, "Muted": Muted, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Record": Record, "StatusCallback": StatusCallback, "StatusCallbackEvent": StatusCallbackEvent, "StatusCallbackMethod": StatusCallbackMethod, "TimeLimit": TimeLimit, "To": To, "Trim": Trim, "WaitMethod": WaitMethod, "WaitUrl": WaitUrl}) });
}

function DeleteParticipant(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Kick a participant from a given conference";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyParticipantsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForParticipantsAdded(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl) {
  waitFor(matchSuccess(""));
}

function matchAnyParticipantsAdded() {
  return bp.EventSet("Any Participants Added", function(e) {
      return e.name.startsWith("Done: ");
  });
}

function FetchQueue(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Fetch an instance of a queue identified by the QueueSid";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateQueue(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Update the queue with the new parameters";
  var body = {
    "FriendlyName": String(FriendlyName),
    "MaxSize": Number(MaxSize),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "MaxSize": MaxSize, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function DeleteQueue(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Remove an empty queue";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function ListQueue(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues.json";
  var description = "Retrieve a list of queues belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateQueue(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues.json";
  var description = "Create a queue";
  var body = {
    "FriendlyName": String(FriendlyName),
    "MaxSize": Number(MaxSize),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "MaxSize": MaxSize, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

// No verifyQueuesExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForQueuesAdded(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a queue"));
}

function matchAnyQueuesAdded() {
  return bp.EventSet("Any Queues Added", function(e) {
      return e.name.startsWith("Done: Create a queue");
  });
}

function CreateRealtimeTranscription(AccountSid, CallSid, EnableAutomaticPunctuation, Hints, InboundTrackLabel, IntelligenceService, LanguageCode, Name, OutboundTrackLabel, Page, PageSize, PageToken, PartialResults, ProfanityFilter, Sid, SpeechModel, Status, StatusCallbackMethod, StatusCallbackUrl, Track, TranscriptionEngine) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions.json";
  var description = "Create a Transcription";
  var body = {
    "EnableAutomaticPunctuation": EnableAutomaticPunctuation,
    "Hints": String(Hints),
    "InboundTrackLabel": String(InboundTrackLabel),
    "IntelligenceService": String(IntelligenceService),
    "LanguageCode": String(LanguageCode),
    "Name": String(Name),
    "OutboundTrackLabel": String(OutboundTrackLabel),
    "PartialResults": PartialResults,
    "ProfanityFilter": ProfanityFilter,
    "SpeechModel": String(SpeechModel),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "StatusCallbackUrl": String(StatusCallbackUrl),
    "Track": String(Track),
    "TranscriptionEngine": String(TranscriptionEngine),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "EnableAutomaticPunctuation": EnableAutomaticPunctuation, "Hints": Hints, "InboundTrackLabel": InboundTrackLabel, "IntelligenceService": IntelligenceService, "LanguageCode": LanguageCode, "Name": Name, "OutboundTrackLabel": OutboundTrackLabel, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PartialResults": PartialResults, "ProfanityFilter": ProfanityFilter, "Sid": Sid, "SpeechModel": SpeechModel, "Status": Status, "StatusCallbackMethod": StatusCallbackMethod, "StatusCallbackUrl": StatusCallbackUrl, "Track": Track, "TranscriptionEngine": TranscriptionEngine}) });
}

function UpdateRealtimeTranscription(AccountSid, CallSid, EnableAutomaticPunctuation, Hints, InboundTrackLabel, IntelligenceService, LanguageCode, Name, OutboundTrackLabel, Page, PageSize, PageToken, PartialResults, ProfanityFilter, Sid, SpeechModel, Status, StatusCallbackMethod, StatusCallbackUrl, Track, TranscriptionEngine) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions/" + Sid + ".json";
  var description = "Stop a Transcription using either the SID of the Transcription resource or the `name` used when creating the resource";
  var body = {
    "Status": String(Status),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "EnableAutomaticPunctuation": EnableAutomaticPunctuation, "Hints": Hints, "InboundTrackLabel": InboundTrackLabel, "IntelligenceService": IntelligenceService, "LanguageCode": LanguageCode, "Name": Name, "OutboundTrackLabel": OutboundTrackLabel, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "PartialResults": PartialResults, "ProfanityFilter": ProfanityFilter, "Sid": Sid, "SpeechModel": SpeechModel, "Status": Status, "StatusCallbackMethod": StatusCallbackMethod, "StatusCallbackUrl": StatusCallbackUrl, "Track": Track, "TranscriptionEngine": TranscriptionEngine}) });
}

function ListTranscription(AccountSid, CallSid, EnableAutomaticPunctuation, Hints, InboundTrackLabel, IntelligenceService, LanguageCode, Name, OutboundTrackLabel, Page, PageSize, PageToken, PartialResults, ProfanityFilter, Sid, SpeechModel, Status, StatusCallbackMethod, StatusCallbackUrl, Track, TranscriptionEngine) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Transcriptions.json";
  var description = "Retrieve a list of transcriptions belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyTranscriptionsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForTranscriptionsAdded(AccountSid, CallSid, EnableAutomaticPunctuation, Hints, InboundTrackLabel, IntelligenceService, LanguageCode, Name, OutboundTrackLabel, Page, PageSize, PageToken, PartialResults, ProfanityFilter, Sid, SpeechModel, Status, StatusCallbackMethod, StatusCallbackUrl, Track, TranscriptionEngine) {
  waitFor(matchSuccess("Create a Transcription"));
}

function matchAnyTranscriptionsAdded() {
  return bp.EventSet("Any Transcriptions Added", function(e) {
      return e.name.startsWith("Done: Create a Transcription");
  });
}

function ListRecordingAddOnResult(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults.json";
  var description = "Retrieve a list of results belonging to the recording";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchRecordingAddOnResult(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Fetch an instance of an AddOnResult";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteRecordingAddOnResult(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Delete a result and purge all associated Payloads";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyAddOnResultsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyAddOnResultsAdded() {
  return bp.EventSet("Any AddOnResults Added", function(e) {
      return e.name.startsWith("Done: Create AddOnResults");
  });
}

function ListRecordingAddOnResultPayload(AccountSid, AddOnResultSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads.json";
  var description = "Retrieve a list of payloads belonging to the AddOnResult";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchRecordingAddOnResultPayload(AccountSid, AddOnResultSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Fetch an instance of a result payload";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteRecordingAddOnResultPayload(AccountSid, AddOnResultSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Delete a payload from the result along with all associated Data";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyPayloadsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyPayloadsAdded() {
  return bp.EventSet("Any Payloads Added", function(e) {
      return e.name.startsWith("Done: Create Payloads");
  });
}

function FetchRecordingAddOnResultPayloadData(AccountSid, AddOnResultSid, PayloadSid, ReferenceSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + PayloadSid + "/Data.json";
  var description = "Fetch an instance of a result payload";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [307] });
}

// No verifyPayloadDataExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyPayloadDataAdded() {
  return bp.EventSet("Any PayloadData Added", function(e) {
      return e.name.startsWith("Done: Create PayloadData");
  });
}

function ListRecordingTranscription(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions.json";
  var description = "References to text transcriptions of call recordings";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchRecordingTranscription(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions/" + Sid + ".json";
  var description = "References to text transcriptions of call recordings";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteRecordingTranscription(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions/" + Sid + ".json";
  var description = "References to text transcriptions of call recordings";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyRecordingTranscriptionsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyRecordingTranscriptionsAdded() {
  return bp.EventSet("Any RecordingTranscriptions Added", function(e) {
      return e.name.startsWith("Done: Create RecordingTranscriptions");
  });
}

function ListShortCode(AccountSid, ApiVersion, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes.json";
  var description = "Messaging short codes";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function FetchShortCode(AccountSid, ApiVersion, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes/" + Sid + ".json";
  var description = "Messaging short codes";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateShortCode(AccountSid, ApiVersion, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes/" + Sid + ".json";
  var description = "Update a short code with the following parameters";
  var body = {
    "ApiVersion": String(ApiVersion),
    "FriendlyName": String(FriendlyName),
    "SmsFallbackMethod": String(SmsFallbackMethod),
    "SmsFallbackUrl": String(SmsFallbackUrl),
    "SmsMethod": String(SmsMethod),
    "SmsUrl": String(SmsUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "ApiVersion": ApiVersion, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "ShortCode": ShortCode, "Sid": Sid, "SmsFallbackMethod": SmsFallbackMethod, "SmsFallbackUrl": SmsFallbackUrl, "SmsMethod": SmsMethod, "SmsUrl": SmsUrl}) });
}

// No verifyShortCodesExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyShortCodesAdded() {
  return bp.EventSet("Any ShortCodes Added", function(e) {
      return e.name.startsWith("Done: Create ShortCodes");
  });
}

// No verifySIPExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnySIPAdded() {
  return bp.EventSet("Any SIP Added", function(e) {
      return e.name.startsWith("Done: Create SIP");
  });
}

// No verifyAuthExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyAuthAdded() {
  return bp.EventSet("Any Auth Added", function(e) {
      return e.name.startsWith("Done: Create Auth");
  });
}

// No verifyAuthCallsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyAuthCallsAdded() {
  return bp.EventSet("Any AuthCalls Added", function(e) {
      return e.name.startsWith("Done: Create AuthCalls");
  });
}

function ListSipAuthCallsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/CredentialListMappings.json";
  var description = "Retrieve a list of credential list mappings belonging to the domain used in the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipAuthCallsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/CredentialListMappings.json";
  var description = "Create a new credential list mapping resource";
  var body = {
    "CredentialListSid": String(CredentialListSid),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CredentialListSid": CredentialListSid, "DomainSid": DomainSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchSipAuthCallsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/CredentialListMappings/" + Sid + ".json";
  var description = "Fetch a specific instance of a credential list mapping";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteSipAuthCallsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/CredentialListMappings/" + Sid + ".json";
  var description = "Delete a credential list mapping from the requested domain";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyAuthCallsCredentialListMappingExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForAuthCallsCredentialListMappingAdded(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a new credential list mapping resource"));
}

function matchAnyAuthCallsCredentialListMappingAdded() {
  return bp.EventSet("Any AuthCallsCredentialListMapping Added", function(e) {
      return e.name.startsWith("Done: Create a new credential list mapping resource");
  });
}

function ListSipAuthCallsIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings.json";
  var description = "Retrieve a list of IP Access Control List mappings belonging to the domain used in the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipAuthCallsIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings.json";
  var description = "Create a new IP Access Control List mapping";
  var body = {
    "IpAccessControlListSid": String(IpAccessControlListSid),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "DomainSid": DomainSid, "IpAccessControlListSid": IpAccessControlListSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchSipAuthCallsIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Fetch a specific instance of an IP Access Control List mapping";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteSipAuthCallsIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Delete an IP Access Control List mapping from the requested domain";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifySipAuthCallsIpAccessControlListMappingExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForSipAuthCallsIpAccessControlListMappingAdded(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a new IP Access Control List mapping"));
}

function matchAnySipAuthCallsIpAccessControlListMappingAdded() {
  return bp.EventSet("Any SipAuthCallsIpAccessControlListMapping Added", function(e) {
      return e.name.startsWith("Done: Create a new IP Access Control List mapping");
  });
}

function ListSipAuthRegistrationsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings.json";
  var description = "Retrieve a list of credential list mappings belonging to the domain used in the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipAuthRegistrationsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings.json";
  var description = "Create a new credential list mapping resource";
  var body = {
    "CredentialListSid": String(CredentialListSid),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CredentialListSid": CredentialListSid, "DomainSid": DomainSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchSipAuthRegistrationsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings/" + Sid + ".json";
  var description = "Fetch a specific instance of a credential list mapping";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteSipAuthRegistrationsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings/" + Sid + ".json";
  var description = "Delete a credential list mapping from the requested domain";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifySipAuthRegistrationsCredentialListMappingExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForSipAuthRegistrationsCredentialListMappingAdded(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a new credential list mapping resource"));
}

function matchAnySipAuthRegistrationsCredentialListMappingAdded() {
  return bp.EventSet("Any SipAuthRegistrationsCredentialListMapping Added", function(e) {
      return e.name.startsWith("Done: Create a new credential list mapping resource");
  });
}

function ListSipCredentialList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "Get All Credential Lists";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipCredentialList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "Create a Credential List";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchSipCredentialList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Get a Credential List";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateSipCredentialList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Update a Credential List";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function DeleteSipCredentialList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Delete a Credential List";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyCredentialListsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForCredentialListsAdded(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a Credential List"));
}

function matchAnyCredentialListsAdded() {
  return bp.EventSet("Any CredentialLists Added", function(e) {
      return e.name.startsWith("Done: Create a Credential List");
  });
}

function ListSipCredential(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials.json";
  var description = "Retrieve a list of credentials.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipCredential(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials.json";
  var description = "Create a new credential resource.";
  var body = {
    "Username": String(Username),
    "Password": String(Password),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CredentialListSid": CredentialListSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Password": Password, "Sid": Sid, "Username": Username}) });
}

function FetchSipCredential(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Fetch a single credential.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateSipCredential(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Update a credential resource.";
  var body = {
    "Password": String(Password),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CredentialListSid": CredentialListSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Password": Password, "Sid": Sid, "Username": Username}) });
}

function DeleteSipCredential(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Delete a credential resource.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyCredentialsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForCredentialsAdded(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username) {
  waitFor(matchSuccess("Create a new credential resource."));
}

function matchAnyCredentialsAdded() {
  return bp.EventSet("Any Credentials Added", function(e) {
      return e.name.startsWith("Done: Create a new credential resource.");
  });
}

function ListSipCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/CredentialListMappings.json";
  var description = "Read multiple CredentialListMapping resources from an account.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/CredentialListMappings.json";
  var description = "Create a CredentialListMapping resource for an account.";
  var body = {
    "CredentialListSid": String(CredentialListSid),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CredentialListSid": CredentialListSid, "DomainSid": DomainSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "id": id}) });
}

// No verifyCredentialListMappingsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForCredentialListMappingsAdded(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, id) {
  waitFor(matchSuccess("Create a CredentialListMapping resource for an account."));
}

function matchAnyCredentialListMappingsAdded() {
  return bp.EventSet("Any CredentialListMappings Added", function(e) {
      return e.name.startsWith("Done: Create a CredentialListMapping resource for an account.");
  });
}

function ListSipDomain(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains.json";
  var description = "Retrieve a list of domains belonging to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipDomain(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains.json";
  var description = "Create a new Domain";
  var body = {
    "ByocTrunkSid": String(ByocTrunkSid),
    "DomainName": String(DomainName),
    "EmergencyCallerSid": String(EmergencyCallerSid),
    "EmergencyCallingEnabled": EmergencyCallingEnabled,
    "FriendlyName": String(FriendlyName),
    "Secure": Secure,
    "SipRegistration": SipRegistration,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceStatusCallbackMethod": String(VoiceStatusCallbackMethod),
    "VoiceStatusCallbackUrl": String(VoiceStatusCallbackUrl),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "ByocTrunkSid": ByocTrunkSid, "DomainName": DomainName, "EmergencyCallerSid": EmergencyCallerSid, "EmergencyCallingEnabled": EmergencyCallingEnabled, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Secure": Secure, "Sid": Sid, "SipRegistration": SipRegistration, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceStatusCallbackMethod": VoiceStatusCallbackMethod, "VoiceStatusCallbackUrl": VoiceStatusCallbackUrl, "VoiceUrl": VoiceUrl}) });
}

function FetchSipDomain(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + Sid + ".json";
  var description = "Fetch an instance of a Domain";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateSipDomain(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + Sid + ".json";
  var description = "Update the attributes of a domain";
  var body = {
    "ByocTrunkSid": String(ByocTrunkSid),
    "DomainName": String(DomainName),
    "EmergencyCallerSid": String(EmergencyCallerSid),
    "EmergencyCallingEnabled": EmergencyCallingEnabled,
    "FriendlyName": String(FriendlyName),
    "Secure": Secure,
    "SipRegistration": SipRegistration,
    "VoiceFallbackMethod": String(VoiceFallbackMethod),
    "VoiceFallbackUrl": String(VoiceFallbackUrl),
    "VoiceMethod": String(VoiceMethod),
    "VoiceStatusCallbackMethod": String(VoiceStatusCallbackMethod),
    "VoiceStatusCallbackUrl": String(VoiceStatusCallbackUrl),
    "VoiceUrl": String(VoiceUrl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "ByocTrunkSid": ByocTrunkSid, "DomainName": DomainName, "EmergencyCallerSid": EmergencyCallerSid, "EmergencyCallingEnabled": EmergencyCallingEnabled, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Secure": Secure, "Sid": Sid, "SipRegistration": SipRegistration, "VoiceFallbackMethod": VoiceFallbackMethod, "VoiceFallbackUrl": VoiceFallbackUrl, "VoiceMethod": VoiceMethod, "VoiceStatusCallbackMethod": VoiceStatusCallbackMethod, "VoiceStatusCallbackUrl": VoiceStatusCallbackUrl, "VoiceUrl": VoiceUrl}) });
}

function DeleteSipDomain(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + Sid + ".json";
  var description = "Delete an instance of a Domain";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifySipDomainsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForSipDomainsAdded(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl) {
  waitFor(matchSuccess("Create a new Domain"));
}

function matchAnySipDomainsAdded() {
  return bp.EventSet("Any SipDomains Added", function(e) {
      return e.name.startsWith("Done: Create a new Domain");
  });
}

function FetchSipCredentialListMapping(AccountSid, DomainSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/CredentialListMappings/" + Sid + ".json";
  var description = "Fetch a single CredentialListMapping resource from an account.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteSipCredentialListMapping(AccountSid, DomainSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/CredentialListMappings/" + Sid + ".json";
  var description = "Delete a CredentialListMapping resource from an account.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifySipCredentialListMappingsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnySipCredentialListMappingsAdded() {
  return bp.EventSet("Any SipCredentialListMappings Added", function(e) {
      return e.name.startsWith("Done: Create SipCredentialListMappings");
  });
}

function ListSipIpAccessControlList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists.json";
  var description = "Retrieve a list of IpAccessControlLists that belong to the account used to make the request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipIpAccessControlList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists.json";
  var description = "Create a new IpAccessControlList resource";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchSipIpAccessControlList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + Sid + ".json";
  var description = "Fetch a specific instance of an IpAccessControlList";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateSipIpAccessControlList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + Sid + ".json";
  var description = "Rename an IpAccessControlList";
  var body = {
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function DeleteSipIpAccessControlList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + Sid + ".json";
  var description = "Delete an IpAccessControlList from the requested account";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifySipIpAccessControlListsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForSipIpAccessControlListsAdded(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a new IpAccessControlList resource"));
}

function matchAnySipIpAccessControlListsAdded() {
  return bp.EventSet("Any SipIpAccessControlLists Added", function(e) {
      return e.name.startsWith("Done: Create a new IpAccessControlList resource");
  });
}

function CreateSiprec(AccountSid, CallSid, ConnectorName, Name, Parameter1_Name, Parameter1_Value, Parameter2_Name, Parameter2_Value, Parameter3_Name, Parameter3_Value, Sid, Status, StatusCallback, StatusCallbackMethod, Track) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "Create a Siprec";
  var body = {
    "ConnectorName": String(ConnectorName),
    "Name": String(Name),
    "Parameter1.Name": String(Parameter1_Name),
    "Parameter1.Value": String(Parameter1_Value),
    "Parameter2.Name": String(Parameter2_Name),
    "Parameter2.Value": String(Parameter2_Value),
    "Parameter3.Name": String(Parameter3_Name),
    "Parameter3.Value": String(Parameter3_Value),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "Track": String(Track),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "ConnectorName": ConnectorName, "Name": Name, "Parameter1_Name": Parameter1_Name, "Parameter1_Value": Parameter1_Value, "Parameter2_Name": Parameter2_Name, "Parameter2_Value": Parameter2_Value, "Parameter3_Name": Parameter3_Name, "Parameter3_Value": Parameter3_Value, "Sid": Sid, "Status": Status, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "Track": Track}) });
}

function UpdateSiprec(AccountSid, CallSid, ConnectorName, Name, Parameter1_Name, Parameter1_Value, Parameter2_Name, Parameter2_Value, Parameter3_Name, Parameter3_Value, Sid, Status, StatusCallback, StatusCallbackMethod, Track) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec/" + Sid + ".json";
  var description = "Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource";
  var body = {
    "Status": String(Status),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "ConnectorName": ConnectorName, "Name": Name, "Parameter1_Name": Parameter1_Name, "Parameter1_Value": Parameter1_Value, "Parameter2_Name": Parameter2_Name, "Parameter2_Value": Parameter2_Value, "Parameter3_Name": Parameter3_Name, "Parameter3_Value": Parameter3_Value, "Sid": Sid, "Status": Status, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "Track": Track}) });
}

// No verifySiprecExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForSiprecAdded(AccountSid, CallSid, ConnectorName, Name, Parameter1_Name, Parameter1_Value, Parameter2_Name, Parameter2_Value, Parameter3_Name, Parameter3_Value, Sid, Status, StatusCallback, StatusCallbackMethod, Track) {
  waitFor(matchSuccess("Create a Siprec"));
}

function matchAnySiprecAdded() {
  return bp.EventSet("Any Siprec Added", function(e) {
      return e.name.startsWith("Done: Create a Siprec");
  });
}

function ListSipIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/IpAccessControlListMappings.json";
  var description = "Retrieve a list of IpAccessControlListMapping resources.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/IpAccessControlListMappings.json";
  var description = "Create a new IpAccessControlListMapping resource.";
  var body = {
    "IpAccessControlListSid": String(IpAccessControlListSid),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "DomainSid": DomainSid, "IpAccessControlListSid": IpAccessControlListSid, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchSipIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Fetch an IpAccessControlListMapping resource.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteSipIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Delete an IpAccessControlListMapping resource.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyIpAccessControlListMappingExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForIpAccessControlListMappingAdded(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a new IpAccessControlListMapping resource."));
}

function matchAnyIpAccessControlListMappingAdded() {
  return bp.EventSet("Any IpAccessControlListMapping Added", function(e) {
      return e.name.startsWith("Done: Create a new IpAccessControlListMapping resource.");
  });
}

function ListSipIpAddress(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses.json";
  var description = "Read multiple IpAddress resources.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateSipIpAddress(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses.json";
  var description = "Create a new IpAddress resource.";
  var body = {
    "CidrPrefixLength": Number(CidrPrefixLength),
    "FriendlyName": String(FriendlyName),
    "IpAddress": String(IpAddress),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CidrPrefixLength": CidrPrefixLength, "FriendlyName": FriendlyName, "IpAccessControlListSid": IpAccessControlListSid, "IpAddress": IpAddress, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function FetchSipIpAddress(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses/" + Sid + ".json";
  var description = "Read one IpAddress resource.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateSipIpAddress(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses/" + Sid + ".json";
  var description = "Update an IpAddress resource.";
  var body = {
    "CidrPrefixLength": Number(CidrPrefixLength),
    "FriendlyName": String(FriendlyName),
    "IpAddress": String(IpAddress),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CidrPrefixLength": CidrPrefixLength, "FriendlyName": FriendlyName, "IpAccessControlListSid": IpAccessControlListSid, "IpAddress": IpAddress, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Sid": Sid}) });
}

function DeleteSipIpAddress(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses/" + Sid + ".json";
  var description = "Delete an IpAddress resource.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyIpAddressExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForIpAddressAdded(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid) {
  waitFor(matchSuccess("Create a new IpAddress resource."));
}

function matchAnyIpAddressAdded() {
  return bp.EventSet("Any IpAddress Added", function(e) {
      return e.name.startsWith("Done: Create a new IpAddress resource.");
  });
}

function CreateStream(AccountSid, CallSid, Name, Parameter1_Name, Parameter1_Value, Sid, Status, StatusCallback, StatusCallbackMethod, Track, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Streams.json";
  var description = "Create a Stream";
  var body = {
    "Name": String(Name),
    "Parameter1.Name": String(Parameter1_Name),
    "Parameter1.Value": String(Parameter1_Value),
    "StatusCallback": String(StatusCallback),
    "StatusCallbackMethod": String(StatusCallbackMethod),
    "Track": String(Track),
    "Url": String(Url),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "Name": Name, "Parameter1_Name": Parameter1_Name, "Parameter1_Value": Parameter1_Value, "Sid": Sid, "Status": Status, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "Track": Track, "Url": Url}) });
}

function UpdateStream(AccountSid, CallSid, Name, Parameter1_Name, Parameter1_Value, Sid, Status, StatusCallback, StatusCallbackMethod, Track, Url) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Streams/" + Sid + ".json";
  var description = "Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource";
  var body = {
    "Status": String(Status),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "Name": Name, "Parameter1_Name": Parameter1_Name, "Parameter1_Value": Parameter1_Value, "Sid": Sid, "Status": Status, "StatusCallback": StatusCallback, "StatusCallbackMethod": StatusCallbackMethod, "Track": Track, "Url": Url}) });
}

// No verifyStreamExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForStreamAdded(AccountSid, CallSid, Name, Parameter1_Name, Parameter1_Value, Sid, Status, StatusCallback, StatusCallbackMethod, Track, Url) {
  waitFor(matchSuccess("Create a Stream"));
}

function matchAnyStreamAdded() {
  return bp.EventSet("Any Stream Added", function(e) {
      return e.name.startsWith("Done: Create a Stream");
  });
}

function CreateToken(AccountSid, Ttl, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Tokens.json";
  var description = "Create a new token for ICE servers";
  var body = {
    "Ttl": Number(Ttl),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "Ttl": Ttl, "id": id}) });
}

// No verifyTokenExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForTokenAdded(AccountSid, Ttl, id) {
  waitFor(matchSuccess("Create a new token for ICE servers"));
}

function matchAnyTokenAdded() {
  return bp.EventSet("Any Token Added", function(e) {
      return e.name.startsWith("Done: Create a new token for ICE servers");
  });
}

function FetchTranscription(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Transcriptions/" + Sid + ".json";
  var description = "Fetch an instance of a Transcription";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function DeleteTranscription(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Transcriptions/" + Sid + ".json";
  var description = "Delete a transcription from the account used to make the request";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyTranscriptionExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function matchAnyTranscriptionAdded() {
  return bp.EventSet("Any Transcription Added", function(e) {
      return e.name.startsWith("Done: Create Transcription");
  });
}

function ListUsageRecordYearly(AccountSid, Category, EndDate, IncludeSubaccounts, Page, PageSize, PageToken, StartDate, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Records/Yearly.json";
  var description = "Usage records summarized by year";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function ListUsageRecordAllTime(AccountSid, Category, EndDate, IncludeSubaccounts, Page, PageSize, PageToken, StartDate, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Records/AllTime.json";
  var description = "Usage records for all time";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function ListUsageRecordDaily(AccountSid, Category, EndDate, IncludeSubaccounts, Page, PageSize, PageToken, StartDate, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Records/Daily.json";
  var description = "Usage records summarized by day";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyUsageRecordsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyUsageRecordsAdded() {
  return bp.EventSet("Any UsageRecords Added", function(e) {
      return e.name.startsWith("Done: Create UsageRecords");
  });
}

function CreateUserDefinedMessageSubscription(AccountSid, CallSid, Callback, IdempotencyKey, Method, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/UserDefinedMessageSubscriptions.json";
  var description = "Subscribe to User Defined Messages for a given Call SID.";
  var body = {
    "Callback": String(Callback),
    "IdempotencyKey": String(IdempotencyKey),
    "Method": String(Method),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "Callback": Callback, "IdempotencyKey": IdempotencyKey, "Method": Method, "Sid": Sid}) });
}

function DeleteUserDefinedMessageSubscription(AccountSid, CallSid, Callback, IdempotencyKey, Method, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/UserDefinedMessageSubscriptions/" + Sid + ".json";
  var description = "Delete a specific User Defined Message Subscription.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyUserDefinedMessageSubscriptionsExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForUserDefinedMessageSubscriptionsAdded(AccountSid, CallSid, Callback, IdempotencyKey, Method, Sid) {
  waitFor(matchSuccess("Subscribe to User Defined Messages for a given Call SID."));
}

function matchAnyUserDefinedMessageSubscriptionsAdded() {
  return bp.EventSet("Any UserDefinedMessageSubscriptions Added", function(e) {
      return e.name.startsWith("Done: Subscribe to User Defined Messages for a given Call SID.");
  });
}

function CreateUserDefinedMessage(AccountSid, CallSid, Content, IdempotencyKey, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/UserDefinedMessages.json";
  var description = "Create a new User Defined Message for the given Call SID.";
  var body = {
    "Content": String(Content),
    "IdempotencyKey": String(IdempotencyKey),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallSid": CallSid, "Content": Content, "IdempotencyKey": IdempotencyKey, "id": id}) });
}

// No verifyUserDefinedMessagesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForUserDefinedMessagesAdded(AccountSid, CallSid, Content, IdempotencyKey, id) {
  waitFor(matchSuccess("Create a new User Defined Message for the given Call SID."));
}

function matchAnyUserDefinedMessagesAdded() {
  return bp.EventSet("Any UserDefinedMessages Added", function(e) {
      return e.name.startsWith("Done: Create a new User Defined Message for the given Call SID.");
  });
}

function ListUsageRecordYesterday(AccountSid, Category, EndDate, IncludeSubaccounts, Page, PageSize, PageToken, StartDate, id) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Records/Yesterday.json";
  var description = "Retrieve usage records for yesterday.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyUsageRecordsYesterdayExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyUsageRecordsYesterdayAdded() {
  return bp.EventSet("Any UsageRecordsYesterday Added", function(e) {
      return e.name.startsWith("Done: Create UsageRecordsYesterday");
  });
}

function ListUsageTrigger(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers.json";
  var description = "Retrieve a list of usage-triggers belonging to the account used to make the request.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function CreateUsageTrigger(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers.json";
  var description = "Create a new UsageTrigger.";
  var body = {
    "CallbackMethod": String(CallbackMethod),
    "CallbackUrl": String(CallbackUrl),
    "FriendlyName": String(FriendlyName),
    "Recurring": String(Recurring),
    "TriggerBy": String(TriggerBy),
    "TriggerValue": String(TriggerValue),
    "UsageCategory": String(UsageCategory),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallbackMethod": CallbackMethod, "CallbackUrl": CallbackUrl, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Recurring": Recurring, "Sid": Sid, "TriggerBy": TriggerBy, "TriggerValue": TriggerValue, "UsageCategory": UsageCategory}) });
}

function FetchUsageTrigger(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers/" + Sid + ".json";
  var description = "Fetch an instance of a usage-trigger.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function UpdateUsageTrigger(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers/" + Sid + ".json";
  var description = "Update an instance of a usage trigger.";
  var body = {
    "CallbackMethod": String(CallbackMethod),
    "CallbackUrl": String(CallbackUrl),
    "FriendlyName": String(FriendlyName),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AccountSid": AccountSid, "CallbackMethod": CallbackMethod, "CallbackUrl": CallbackUrl, "FriendlyName": FriendlyName, "Page": Page, "PageSize": PageSize, "PageToken": PageToken, "Recurring": Recurring, "Sid": Sid, "TriggerBy": TriggerBy, "TriggerValue": TriggerValue, "UsageCategory": UsageCategory}) });
}

function DeleteUsageTrigger(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers/" + Sid + ".json";
  var description = "Delete an instance of a usage trigger.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyUsageTriggersExists generated: Primary Key "AccountSid" is not in POST body (Server-Generated ID).
function waitForUsageTriggersAdded(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory) {
  waitFor(matchSuccess("Create a new UsageTrigger."));
}

function matchAnyUsageTriggersAdded() {
  return bp.EventSet("Any UsageTriggers Added", function(e) {
      return e.name.startsWith("Done: Create a new UsageTrigger.");
  });
}
