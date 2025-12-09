// Auto-generated stories for twilio
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
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

// Story: crud:Addresses:linear:1
bthread("crud:Addresses:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let City = "City_260";
  let CustomerName = "CustomerName_260";
  let EmergencyEnabled = "EmergencyEnabled_260";
  let FriendlyName = "FriendlyName_260";
  let IsoCountry = "IsoCountry_260";
  let Page = "Page_260";
  let PageSize = "PageSize_260";
  let PageToken = "PageToken_260";
  let PostalCode = "PostalCode_260";
  let Region = "Region_260";
  let Sid = "Sid_260";
  let Street = "Street_260";
  let StreetSecondary = "StreetSecondary_260";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateAddress(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary);
});

// Story: crud:Addresses:linear:2
bthread("crud:Addresses:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let City = "City_270";
  let CustomerName = "CustomerName_270";
  let EmergencyEnabled = "EmergencyEnabled_270";
  let FriendlyName = "FriendlyName_270";
  let IsoCountry = "IsoCountry_270";
  let Page = "Page_270";
  let PageSize = "PageSize_270";
  let PageToken = "PageToken_270";
  let PostalCode = "PostalCode_270";
  let Region = "Region_270";
  let Sid = "Sid_270";
  let Street = "Street_270";
  let StreetSecondary = "StreetSecondary_270";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateAddress(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary);
});

// Story: crud:Addresses:linear:3
bthread("crud:Addresses:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let City = "City_280";
  let CustomerName = "CustomerName_280";
  let EmergencyEnabled = "EmergencyEnabled_280";
  let FriendlyName = "FriendlyName_280";
  let IsoCountry = "IsoCountry_280";
  let Page = "Page_280";
  let PageSize = "PageSize_280";
  let PageToken = "PageToken_280";
  let PostalCode = "PostalCode_280";
  let Region = "Region_280";
  let Sid = "Sid_280";
  let Street = "Street_280";
  let StreetSecondary = "StreetSecondary_280";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateAddress(AccountSid, City, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, PostalCode, Region, Sid, Street, StreetSecondary);
});

// Story: crud:Applications:linear:1
bthread("crud:Applications:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_310";
  let MessageStatusCallback = "MessageStatusCallback_310";
  let Page = "Page_310";
  let PageSize = "PageSize_310";
  let PageToken = "PageToken_310";
  let PublicApplicationConnectEnabled = true;
  let Sid = "Sid_310";
  let SmsFallbackMethod = "SmsFallbackMethod_310";
  let SmsFallbackUrl = "SmsFallbackUrl_310";
  let SmsMethod = "SmsMethod_310";
  let SmsStatusCallback = "SmsStatusCallback_310";
  let SmsUrl = "SmsUrl_310";
  let StatusCallback = "StatusCallback_310";
  let StatusCallbackMethod = "StatusCallbackMethod_310";
  let VoiceCallerIdLookup = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_310";
  let VoiceFallbackUrl = "VoiceFallbackUrl_310";
  let VoiceMethod = "VoiceMethod_310";
  let VoiceUrl = "VoiceUrl_310";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateApplication(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl);
});

// Story: crud:Applications:linear:2
bthread("crud:Applications:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_320";
  let MessageStatusCallback = "MessageStatusCallback_320";
  let Page = "Page_320";
  let PageSize = "PageSize_320";
  let PageToken = "PageToken_320";
  let PublicApplicationConnectEnabled = true;
  let Sid = "Sid_320";
  let SmsFallbackMethod = "SmsFallbackMethod_320";
  let SmsFallbackUrl = "SmsFallbackUrl_320";
  let SmsMethod = "SmsMethod_320";
  let SmsStatusCallback = "SmsStatusCallback_320";
  let SmsUrl = "SmsUrl_320";
  let StatusCallback = "StatusCallback_320";
  let StatusCallbackMethod = "StatusCallbackMethod_320";
  let VoiceCallerIdLookup = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_320";
  let VoiceFallbackUrl = "VoiceFallbackUrl_320";
  let VoiceMethod = "VoiceMethod_320";
  let VoiceUrl = "VoiceUrl_320";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateApplication(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl);
});

// Story: crud:Applications:linear:3
bthread("crud:Applications:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_330";
  let MessageStatusCallback = "MessageStatusCallback_330";
  let Page = "Page_330";
  let PageSize = "PageSize_330";
  let PageToken = "PageToken_330";
  let PublicApplicationConnectEnabled = true;
  let Sid = "Sid_330";
  let SmsFallbackMethod = "SmsFallbackMethod_330";
  let SmsFallbackUrl = "SmsFallbackUrl_330";
  let SmsMethod = "SmsMethod_330";
  let SmsStatusCallback = "SmsStatusCallback_330";
  let SmsUrl = "SmsUrl_330";
  let StatusCallback = "StatusCallback_330";
  let StatusCallbackMethod = "StatusCallbackMethod_330";
  let VoiceCallerIdLookup = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_330";
  let VoiceFallbackUrl = "VoiceFallbackUrl_330";
  let VoiceMethod = "VoiceMethod_330";
  let VoiceUrl = "VoiceUrl_330";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateApplication(AccountSid, FriendlyName, MessageStatusCallback, Page, PageSize, PageToken, PublicApplicationConnectEnabled, Sid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsStatusCallback, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl);
});

// Story: crud:Calls:linear:1
bthread("crud:Calls:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let ApplicationSid = "ApplicationSid_510";
  let AsyncAmd = "AsyncAmd_510";
  let AsyncAmdStatusCallback = "AsyncAmdStatusCallback_510";
  let AsyncAmdStatusCallbackMethod = "AsyncAmdStatusCallbackMethod_510";
  let Byoc = "Byoc_510";
  let CallReason = "CallReason_510";
  let CallToken = "CallToken_510";
  let CallerId = "CallerId_510";
  let ClientNotificationUrl = "ClientNotificationUrl_510";
  let EndTime = "EndTime_510";
  let EndTime_ = "EndTime<_510";
  let EndTime_ = "EndTime>_510";
  let FallbackMethod = "FallbackMethod_510";
  let FallbackUrl = "FallbackUrl_510";
  let From = "From_510";
  let IfMachine = "IfMachine_510";
  let MachineDetection = "MachineDetection_510";
  let MachineDetectionSilenceTimeout = 510;
  let MachineDetectionSpeechEndThreshold = 510;
  let MachineDetectionSpeechThreshold = 510;
  let MachineDetectionTimeout = 510;
  let Method = "Method_510";
  let Page = "Page_510";
  let PageSize = "PageSize_510";
  let PageToken = "PageToken_510";
  let ParentCallSid = "ParentCallSid_510";
  let Record = true;
  let SendDigits = "SendDigits_510";
  let Sid = "Sid_510";
  let StartTime = "StartTime_510";
  let StartTime_ = "StartTime<_510";
  let StartTime_ = "StartTime>_510";
  let Status = "Status_510";
  let StatusCallback = "StatusCallback_510";
  let StatusCallbackMethod = "StatusCallbackMethod_510";
  let TimeLimit = 510;
  let Timeout = 510;
  let To = "To_510";
  let Transcribe = true;
  let TranscriptionConfiguration = "TranscriptionConfiguration_510";
  let Trim = "Trim_510";
  let Twiml = "Twiml_510";
  let Url = "Url_510";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateCall(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url);
});

// Story: crud:Calls:linear:2
bthread("crud:Calls:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let ApplicationSid = "ApplicationSid_520";
  let AsyncAmd = "AsyncAmd_520";
  let AsyncAmdStatusCallback = "AsyncAmdStatusCallback_520";
  let AsyncAmdStatusCallbackMethod = "AsyncAmdStatusCallbackMethod_520";
  let Byoc = "Byoc_520";
  let CallReason = "CallReason_520";
  let CallToken = "CallToken_520";
  let CallerId = "CallerId_520";
  let ClientNotificationUrl = "ClientNotificationUrl_520";
  let EndTime = "EndTime_520";
  let EndTime_ = "EndTime<_520";
  let EndTime_ = "EndTime>_520";
  let FallbackMethod = "FallbackMethod_520";
  let FallbackUrl = "FallbackUrl_520";
  let From = "From_520";
  let IfMachine = "IfMachine_520";
  let MachineDetection = "MachineDetection_520";
  let MachineDetectionSilenceTimeout = 520;
  let MachineDetectionSpeechEndThreshold = 520;
  let MachineDetectionSpeechThreshold = 520;
  let MachineDetectionTimeout = 520;
  let Method = "Method_520";
  let Page = "Page_520";
  let PageSize = "PageSize_520";
  let PageToken = "PageToken_520";
  let ParentCallSid = "ParentCallSid_520";
  let Record = true;
  let SendDigits = "SendDigits_520";
  let Sid = "Sid_520";
  let StartTime = "StartTime_520";
  let StartTime_ = "StartTime<_520";
  let StartTime_ = "StartTime>_520";
  let Status = "Status_520";
  let StatusCallback = "StatusCallback_520";
  let StatusCallbackMethod = "StatusCallbackMethod_520";
  let TimeLimit = 520;
  let Timeout = 520;
  let To = "To_520";
  let Transcribe = true;
  let TranscriptionConfiguration = "TranscriptionConfiguration_520";
  let Trim = "Trim_520";
  let Twiml = "Twiml_520";
  let Url = "Url_520";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateCall(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url);
});

// Story: crud:Calls:linear:3
bthread("crud:Calls:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let ApplicationSid = "ApplicationSid_530";
  let AsyncAmd = "AsyncAmd_530";
  let AsyncAmdStatusCallback = "AsyncAmdStatusCallback_530";
  let AsyncAmdStatusCallbackMethod = "AsyncAmdStatusCallbackMethod_530";
  let Byoc = "Byoc_530";
  let CallReason = "CallReason_530";
  let CallToken = "CallToken_530";
  let CallerId = "CallerId_530";
  let ClientNotificationUrl = "ClientNotificationUrl_530";
  let EndTime = "EndTime_530";
  let EndTime_ = "EndTime<_530";
  let EndTime_ = "EndTime>_530";
  let FallbackMethod = "FallbackMethod_530";
  let FallbackUrl = "FallbackUrl_530";
  let From = "From_530";
  let IfMachine = "IfMachine_530";
  let MachineDetection = "MachineDetection_530";
  let MachineDetectionSilenceTimeout = 530;
  let MachineDetectionSpeechEndThreshold = 530;
  let MachineDetectionSpeechThreshold = 530;
  let MachineDetectionTimeout = 530;
  let Method = "Method_530";
  let Page = "Page_530";
  let PageSize = "PageSize_530";
  let PageToken = "PageToken_530";
  let ParentCallSid = "ParentCallSid_530";
  let Record = true;
  let SendDigits = "SendDigits_530";
  let Sid = "Sid_530";
  let StartTime = "StartTime_530";
  let StartTime_ = "StartTime<_530";
  let StartTime_ = "StartTime>_530";
  let Status = "Status_530";
  let StatusCallback = "StatusCallback_530";
  let StatusCallbackMethod = "StatusCallbackMethod_530";
  let TimeLimit = 530;
  let Timeout = 530;
  let To = "To_530";
  let Transcribe = true;
  let TranscriptionConfiguration = "TranscriptionConfiguration_530";
  let Trim = "Trim_530";
  let Twiml = "Twiml_530";
  let Url = "Url_530";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateCall(AccountSid, ApplicationSid, AsyncAmd, AsyncAmdStatusCallback, AsyncAmdStatusCallbackMethod, Byoc, CallReason, CallToken, CallerId, ClientNotificationUrl, EndTime, EndTime_, EndTime_, FallbackMethod, FallbackUrl, From, IfMachine, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Method, Page, PageSize, PageToken, ParentCallSid, Record, SendDigits, Sid, StartTime, StartTime_, StartTime_, Status, StatusCallback, StatusCallbackMethod, TimeLimit, Timeout, To, Transcribe, TranscriptionConfiguration, Trim, Twiml, Url);
});

// Story: crud:Recordings:linear:1
bthread("crud:Recordings:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let CallSid = "CallSid_660";
  let ConferenceSid = "ConferenceSid_660";
  let DateCreated = "DateCreated_660";
  let DateCreated_ = "DateCreated<_660";
  let DateCreated_ = "DateCreated>_660";
  let IncludeSoftDeleted = "IncludeSoftDeleted_660";
  let Page = "Page_660";
  let PageSize = "PageSize_660";
  let PageToken = "PageToken_660";
  let PauseBehavior = "PauseBehavior_660";
  let RecordingChannels = "RecordingChannels_660";
  let RecordingStatusCallback = "RecordingStatusCallback_660";
  let RecordingStatusCallbackEvent = "RecordingStatusCallbackEvent_660";
  let RecordingStatusCallbackMethod = "RecordingStatusCallbackMethod_660";
  let RecordingTrack = "RecordingTrack_660";
  let Sid = "Sid_660";
  let Status = "Status_660";
  let Trim = "Trim_660";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateCallRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim);
});

// Story: crud:Recordings:linear:2
bthread("crud:Recordings:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let CallSid = "CallSid_670";
  let ConferenceSid = "ConferenceSid_670";
  let DateCreated = "DateCreated_670";
  let DateCreated_ = "DateCreated<_670";
  let DateCreated_ = "DateCreated>_670";
  let IncludeSoftDeleted = "IncludeSoftDeleted_670";
  let Page = "Page_670";
  let PageSize = "PageSize_670";
  let PageToken = "PageToken_670";
  let PauseBehavior = "PauseBehavior_670";
  let RecordingChannels = "RecordingChannels_670";
  let RecordingStatusCallback = "RecordingStatusCallback_670";
  let RecordingStatusCallbackEvent = "RecordingStatusCallbackEvent_670";
  let RecordingStatusCallbackMethod = "RecordingStatusCallbackMethod_670";
  let RecordingTrack = "RecordingTrack_670";
  let Sid = "Sid_670";
  let Status = "Status_670";
  let Trim = "Trim_670";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateCallRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim);
});

// Story: crud:Recordings:linear:3
bthread("crud:Recordings:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let CallSid = "CallSid_680";
  let ConferenceSid = "ConferenceSid_680";
  let DateCreated = "DateCreated_680";
  let DateCreated_ = "DateCreated<_680";
  let DateCreated_ = "DateCreated>_680";
  let IncludeSoftDeleted = "IncludeSoftDeleted_680";
  let Page = "Page_680";
  let PageSize = "PageSize_680";
  let PageToken = "PageToken_680";
  let PauseBehavior = "PauseBehavior_680";
  let RecordingChannels = "RecordingChannels_680";
  let RecordingStatusCallback = "RecordingStatusCallback_680";
  let RecordingStatusCallbackEvent = "RecordingStatusCallbackEvent_680";
  let RecordingStatusCallbackMethod = "RecordingStatusCallbackMethod_680";
  let RecordingTrack = "RecordingTrack_680";
  let Sid = "Sid_680";
  let Status = "Status_680";
  let Trim = "Trim_680";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateCallRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated_, DateCreated_, IncludeSoftDeleted, Page, PageSize, PageToken, PauseBehavior, RecordingChannels, RecordingStatusCallback, RecordingStatusCallbackEvent, RecordingStatusCallbackMethod, RecordingTrack, Sid, Status, Trim);
});

// Story: crud:IncomingPhoneNumbers:linear:1
bthread("crud:IncomingPhoneNumbers:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let AddressSid = "AddressSid_910";
  let ApiVersion = "ApiVersion_910";
  let AreaCode = "AreaCode_910";
  let Beta = "Beta_910";
  let BundleSid = "BundleSid_910";
  let EmergencyAddressSid = "EmergencyAddressSid_910";
  let EmergencyStatus = "EmergencyStatus_910";
  let FriendlyName = "FriendlyName_910";
  let IdentitySid = "IdentitySid_910";
  let Origin = "Origin_910";
  let Page = "Page_910";
  let PageSize = "PageSize_910";
  let PageToken = "PageToken_910";
  let PhoneNumber = "PhoneNumber_910";
  let Sid = "Sid_910";
  let SmsApplicationSid = "SmsApplicationSid_910";
  let SmsFallbackMethod = "SmsFallbackMethod_910";
  let SmsFallbackUrl = "SmsFallbackUrl_910";
  let SmsMethod = "SmsMethod_910";
  let SmsUrl = "SmsUrl_910";
  let StatusCallback = "StatusCallback_910";
  let StatusCallbackMethod = "StatusCallbackMethod_910";
  let VoiceApplicationSid = "VoiceApplicationSid_910";
  let VoiceCallerIdLookup = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_910";
  let VoiceFallbackUrl = "VoiceFallbackUrl_910";
  let VoiceMethod = "VoiceMethod_910";
  let VoiceUrl = "VoiceUrl_910";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateIncomingPhoneNumber(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl);
});

// Story: crud:IncomingPhoneNumbers:linear:2
bthread("crud:IncomingPhoneNumbers:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let AddressSid = "AddressSid_920";
  let ApiVersion = "ApiVersion_920";
  let AreaCode = "AreaCode_920";
  let Beta = "Beta_920";
  let BundleSid = "BundleSid_920";
  let EmergencyAddressSid = "EmergencyAddressSid_920";
  let EmergencyStatus = "EmergencyStatus_920";
  let FriendlyName = "FriendlyName_920";
  let IdentitySid = "IdentitySid_920";
  let Origin = "Origin_920";
  let Page = "Page_920";
  let PageSize = "PageSize_920";
  let PageToken = "PageToken_920";
  let PhoneNumber = "PhoneNumber_920";
  let Sid = "Sid_920";
  let SmsApplicationSid = "SmsApplicationSid_920";
  let SmsFallbackMethod = "SmsFallbackMethod_920";
  let SmsFallbackUrl = "SmsFallbackUrl_920";
  let SmsMethod = "SmsMethod_920";
  let SmsUrl = "SmsUrl_920";
  let StatusCallback = "StatusCallback_920";
  let StatusCallbackMethod = "StatusCallbackMethod_920";
  let VoiceApplicationSid = "VoiceApplicationSid_920";
  let VoiceCallerIdLookup = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_920";
  let VoiceFallbackUrl = "VoiceFallbackUrl_920";
  let VoiceMethod = "VoiceMethod_920";
  let VoiceUrl = "VoiceUrl_920";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateIncomingPhoneNumber(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl);
});

// Story: crud:IncomingPhoneNumbers:linear:3
bthread("crud:IncomingPhoneNumbers:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let AddressSid = "AddressSid_930";
  let ApiVersion = "ApiVersion_930";
  let AreaCode = "AreaCode_930";
  let Beta = "Beta_930";
  let BundleSid = "BundleSid_930";
  let EmergencyAddressSid = "EmergencyAddressSid_930";
  let EmergencyStatus = "EmergencyStatus_930";
  let FriendlyName = "FriendlyName_930";
  let IdentitySid = "IdentitySid_930";
  let Origin = "Origin_930";
  let Page = "Page_930";
  let PageSize = "PageSize_930";
  let PageToken = "PageToken_930";
  let PhoneNumber = "PhoneNumber_930";
  let Sid = "Sid_930";
  let SmsApplicationSid = "SmsApplicationSid_930";
  let SmsFallbackMethod = "SmsFallbackMethod_930";
  let SmsFallbackUrl = "SmsFallbackUrl_930";
  let SmsMethod = "SmsMethod_930";
  let SmsUrl = "SmsUrl_930";
  let StatusCallback = "StatusCallback_930";
  let StatusCallbackMethod = "StatusCallbackMethod_930";
  let VoiceApplicationSid = "VoiceApplicationSid_930";
  let VoiceCallerIdLookup = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_930";
  let VoiceFallbackUrl = "VoiceFallbackUrl_930";
  let VoiceMethod = "VoiceMethod_930";
  let VoiceUrl = "VoiceUrl_930";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateIncomingPhoneNumber(AccountSid, AddressSid, ApiVersion, AreaCode, Beta, BundleSid, EmergencyAddressSid, EmergencyStatus, FriendlyName, IdentitySid, Origin, Page, PageSize, PageToken, PhoneNumber, Sid, SmsApplicationSid, SmsFallbackMethod, SmsFallbackUrl, SmsMethod, SmsUrl, StatusCallback, StatusCallbackMethod, VoiceApplicationSid, VoiceCallerIdLookup, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceUrl);
});

// Story: crud:Keys:linear:1
bthread("crud:Keys:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1260";
  let Page = "Page_1260";
  let PageSize = "PageSize_1260";
  let PageToken = "PageToken_1260";
  let Sid = "Sid_1260";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateNewKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:Keys:linear:2
bthread("crud:Keys:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1270";
  let Page = "Page_1270";
  let PageSize = "PageSize_1270";
  let PageToken = "PageToken_1270";
  let Sid = "Sid_1270";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateNewKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:Keys:linear:3
bthread("crud:Keys:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1280";
  let Page = "Page_1280";
  let PageSize = "PageSize_1280";
  let PageToken = "PageToken_1280";
  let Sid = "Sid_1280";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateNewKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:Messages:linear:1
bthread("crud:Messages:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let ApplicationSid = "ApplicationSid_1360";
  let Body = "Body_1360";
  let ContentSid = "ContentSid_1360";
  let ContentVariables = "ContentVariables_1360";
  let DateSent = "DateSent_1360";
  let DateSent_ = "DateSent<_1360";
  let DateSent_ = "DateSent>_1360";
  let ForceDelivery = true;
  let From = "From_1360";
  let MaxPrice = 1360;
  let MediaUrl = "MediaUrl_1360";
  let MessagingServiceSid = "MessagingServiceSid_1360";
  let Page = "Page_1360";
  let PageSize = "PageSize_1360";
  let PageToken = "PageToken_1360";
  let PersistentAction = "PersistentAction_1360";
  let ProvideFeedback = true;
  let RiskCheck = "RiskCheck_1360";
  let ScheduleType = "ScheduleType_1360";
  let SendAsMms = true;
  let SendAt = "SendAt_1360";
  let ShortenUrls = true;
  let Sid = "Sid_1360";
  let SmartEncoded = true;
  let Status = "Status_1360";
  let StatusCallback = "StatusCallback_1360";
  let Tags = "Tags_1360";
  let To = "To_1360";
  let TrafficType = "TrafficType_1360";
  let ValidityPeriod = 1360;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateMessage(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod);
});

// Story: crud:Messages:linear:2
bthread("crud:Messages:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let ApplicationSid = "ApplicationSid_1370";
  let Body = "Body_1370";
  let ContentSid = "ContentSid_1370";
  let ContentVariables = "ContentVariables_1370";
  let DateSent = "DateSent_1370";
  let DateSent_ = "DateSent<_1370";
  let DateSent_ = "DateSent>_1370";
  let ForceDelivery = true;
  let From = "From_1370";
  let MaxPrice = 1370;
  let MediaUrl = "MediaUrl_1370";
  let MessagingServiceSid = "MessagingServiceSid_1370";
  let Page = "Page_1370";
  let PageSize = "PageSize_1370";
  let PageToken = "PageToken_1370";
  let PersistentAction = "PersistentAction_1370";
  let ProvideFeedback = true;
  let RiskCheck = "RiskCheck_1370";
  let ScheduleType = "ScheduleType_1370";
  let SendAsMms = true;
  let SendAt = "SendAt_1370";
  let ShortenUrls = true;
  let Sid = "Sid_1370";
  let SmartEncoded = true;
  let Status = "Status_1370";
  let StatusCallback = "StatusCallback_1370";
  let Tags = "Tags_1370";
  let To = "To_1370";
  let TrafficType = "TrafficType_1370";
  let ValidityPeriod = 1370;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateMessage(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod);
});

// Story: crud:Messages:linear:3
bthread("crud:Messages:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let ApplicationSid = "ApplicationSid_1380";
  let Body = "Body_1380";
  let ContentSid = "ContentSid_1380";
  let ContentVariables = "ContentVariables_1380";
  let DateSent = "DateSent_1380";
  let DateSent_ = "DateSent<_1380";
  let DateSent_ = "DateSent>_1380";
  let ForceDelivery = true;
  let From = "From_1380";
  let MaxPrice = 1380;
  let MediaUrl = "MediaUrl_1380";
  let MessagingServiceSid = "MessagingServiceSid_1380";
  let Page = "Page_1380";
  let PageSize = "PageSize_1380";
  let PageToken = "PageToken_1380";
  let PersistentAction = "PersistentAction_1380";
  let ProvideFeedback = true;
  let RiskCheck = "RiskCheck_1380";
  let ScheduleType = "ScheduleType_1380";
  let SendAsMms = true;
  let SendAt = "SendAt_1380";
  let ShortenUrls = true;
  let Sid = "Sid_1380";
  let SmartEncoded = true;
  let Status = "Status_1380";
  let StatusCallback = "StatusCallback_1380";
  let Tags = "Tags_1380";
  let To = "To_1380";
  let TrafficType = "TrafficType_1380";
  let ValidityPeriod = 1380;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateMessage(AccountSid, ApplicationSid, Body, ContentSid, ContentVariables, DateSent, DateSent_, DateSent_, ForceDelivery, From, MaxPrice, MediaUrl, MessagingServiceSid, Page, PageSize, PageToken, PersistentAction, ProvideFeedback, RiskCheck, ScheduleType, SendAsMms, SendAt, ShortenUrls, Sid, SmartEncoded, Status, StatusCallback, Tags, To, TrafficType, ValidityPeriod);
});

// Story: crud:OutgoingCallerIds:linear:1
bthread("crud:OutgoingCallerIds:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let CallDelay = 1510;
  let Extension = "Extension_1510";
  let FriendlyName = "FriendlyName_1510";
  let Page = "Page_1510";
  let PageSize = "PageSize_1510";
  let PageToken = "PageToken_1510";
  let PhoneNumber = "PhoneNumber_1510";
  let Sid = "Sid_1510";
  let StatusCallback = "StatusCallback_1510";
  let StatusCallbackMethod = "StatusCallbackMethod_1510";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateValidationRequest(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod);
});

// Story: crud:OutgoingCallerIds:linear:2
bthread("crud:OutgoingCallerIds:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let CallDelay = 1520;
  let Extension = "Extension_1520";
  let FriendlyName = "FriendlyName_1520";
  let Page = "Page_1520";
  let PageSize = "PageSize_1520";
  let PageToken = "PageToken_1520";
  let PhoneNumber = "PhoneNumber_1520";
  let Sid = "Sid_1520";
  let StatusCallback = "StatusCallback_1520";
  let StatusCallbackMethod = "StatusCallbackMethod_1520";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateValidationRequest(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod);
});

// Story: crud:OutgoingCallerIds:linear:3
bthread("crud:OutgoingCallerIds:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let CallDelay = 1530;
  let Extension = "Extension_1530";
  let FriendlyName = "FriendlyName_1530";
  let Page = "Page_1530";
  let PageSize = "PageSize_1530";
  let PageToken = "PageToken_1530";
  let PhoneNumber = "PhoneNumber_1530";
  let Sid = "Sid_1530";
  let StatusCallback = "StatusCallback_1530";
  let StatusCallbackMethod = "StatusCallbackMethod_1530";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateValidationRequest(AccountSid, CallDelay, Extension, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid, StatusCallback, StatusCallbackMethod);
});

// Story: crud:SigningKeys:linear:1
bthread("crud:SigningKeys:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1560";
  let Page = "Page_1560";
  let PageSize = "PageSize_1560";
  let PageToken = "PageToken_1560";
  let Sid = "Sid_1560";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateNewSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:SigningKeys:linear:2
bthread("crud:SigningKeys:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1570";
  let Page = "Page_1570";
  let PageSize = "PageSize_1570";
  let PageToken = "PageToken_1570";
  let Sid = "Sid_1570";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateNewSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:SigningKeys:linear:3
bthread("crud:SigningKeys:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1580";
  let Page = "Page_1580";
  let PageSize = "PageSize_1580";
  let PageToken = "PageToken_1580";
  let Sid = "Sid_1580";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateNewSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:Participants:linear:1
bthread("crud:Participants:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let AmdStatusCallback = "AmdStatusCallback_1660";
  let AmdStatusCallbackMethod = "AmdStatusCallbackMethod_1660";
  let AnnounceMethod = "AnnounceMethod_1660";
  let AnnounceUrl = "AnnounceUrl_1660";
  let Beep = "Beep_1660";
  let BeepOnExit = "BeepOnExit_1660";
  let CallSid = "CallSid_1660";
  let CallSidToCoach = "CallSidToCoach_1660";
  let CallToken = "CallToken_1660";
  let CallerDisplayName = "CallerDisplayName_1660";
  let ClientNotificationUrl = "ClientNotificationUrl_1660";
  let Coaching = "Coaching_1660";
  let ConferenceSid = "ConferenceSid_1660";
  let EarlyMedia = true;
  let EndConferenceOnExit = "EndConferenceOnExit_1660";
  let From = "From_1660";
  let Hold = "Hold_1660";
  let HoldMethod = "HoldMethod_1660";
  let HoldUrl = "HoldUrl_1660";
  let Label = "Label_1660";
  let MachineDetection = "MachineDetection_1660";
  let MachineDetectionSilenceTimeout = 1660;
  let MachineDetectionSpeechEndThreshold = 1660;
  let MachineDetectionSpeechThreshold = 1660;
  let MachineDetectionTimeout = 1660;
  let Muted = true;
  let Page = "Page_1660";
  let PageSize = "PageSize_1660";
  let PageToken = "PageToken_1660";
  let Record = true;
  let StatusCallback = "StatusCallback_1660";
  let StatusCallbackEvent = "StatusCallbackEvent_1660";
  let StatusCallbackMethod = "StatusCallbackMethod_1660";
  let TimeLimit = 1660;
  let To = "To_1660";
  let Trim = "Trim_1660";
  let WaitMethod = "WaitMethod_1660";
  let WaitUrl = "WaitUrl_1660";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateParticipant(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl);
});

// Story: crud:Participants:linear:2
bthread("crud:Participants:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let AmdStatusCallback = "AmdStatusCallback_1670";
  let AmdStatusCallbackMethod = "AmdStatusCallbackMethod_1670";
  let AnnounceMethod = "AnnounceMethod_1670";
  let AnnounceUrl = "AnnounceUrl_1670";
  let Beep = "Beep_1670";
  let BeepOnExit = "BeepOnExit_1670";
  let CallSid = "CallSid_1670";
  let CallSidToCoach = "CallSidToCoach_1670";
  let CallToken = "CallToken_1670";
  let CallerDisplayName = "CallerDisplayName_1670";
  let ClientNotificationUrl = "ClientNotificationUrl_1670";
  let Coaching = "Coaching_1670";
  let ConferenceSid = "ConferenceSid_1670";
  let EarlyMedia = true;
  let EndConferenceOnExit = "EndConferenceOnExit_1670";
  let From = "From_1670";
  let Hold = "Hold_1670";
  let HoldMethod = "HoldMethod_1670";
  let HoldUrl = "HoldUrl_1670";
  let Label = "Label_1670";
  let MachineDetection = "MachineDetection_1670";
  let MachineDetectionSilenceTimeout = 1670;
  let MachineDetectionSpeechEndThreshold = 1670;
  let MachineDetectionSpeechThreshold = 1670;
  let MachineDetectionTimeout = 1670;
  let Muted = true;
  let Page = "Page_1670";
  let PageSize = "PageSize_1670";
  let PageToken = "PageToken_1670";
  let Record = true;
  let StatusCallback = "StatusCallback_1670";
  let StatusCallbackEvent = "StatusCallbackEvent_1670";
  let StatusCallbackMethod = "StatusCallbackMethod_1670";
  let TimeLimit = 1670;
  let To = "To_1670";
  let Trim = "Trim_1670";
  let WaitMethod = "WaitMethod_1670";
  let WaitUrl = "WaitUrl_1670";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateParticipant(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl);
});

// Story: crud:Participants:linear:3
bthread("crud:Participants:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let AmdStatusCallback = "AmdStatusCallback_1680";
  let AmdStatusCallbackMethod = "AmdStatusCallbackMethod_1680";
  let AnnounceMethod = "AnnounceMethod_1680";
  let AnnounceUrl = "AnnounceUrl_1680";
  let Beep = "Beep_1680";
  let BeepOnExit = "BeepOnExit_1680";
  let CallSid = "CallSid_1680";
  let CallSidToCoach = "CallSidToCoach_1680";
  let CallToken = "CallToken_1680";
  let CallerDisplayName = "CallerDisplayName_1680";
  let ClientNotificationUrl = "ClientNotificationUrl_1680";
  let Coaching = "Coaching_1680";
  let ConferenceSid = "ConferenceSid_1680";
  let EarlyMedia = true;
  let EndConferenceOnExit = "EndConferenceOnExit_1680";
  let From = "From_1680";
  let Hold = "Hold_1680";
  let HoldMethod = "HoldMethod_1680";
  let HoldUrl = "HoldUrl_1680";
  let Label = "Label_1680";
  let MachineDetection = "MachineDetection_1680";
  let MachineDetectionSilenceTimeout = 1680;
  let MachineDetectionSpeechEndThreshold = 1680;
  let MachineDetectionSpeechThreshold = 1680;
  let MachineDetectionTimeout = 1680;
  let Muted = true;
  let Page = "Page_1680";
  let PageSize = "PageSize_1680";
  let PageToken = "PageToken_1680";
  let Record = true;
  let StatusCallback = "StatusCallback_1680";
  let StatusCallbackEvent = "StatusCallbackEvent_1680";
  let StatusCallbackMethod = "StatusCallbackMethod_1680";
  let TimeLimit = 1680;
  let To = "To_1680";
  let Trim = "Trim_1680";
  let WaitMethod = "WaitMethod_1680";
  let WaitUrl = "WaitUrl_1680";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateParticipant(AccountSid, AmdStatusCallback, AmdStatusCallbackMethod, AnnounceMethod, AnnounceUrl, Beep, BeepOnExit, CallSid, CallSidToCoach, CallToken, CallerDisplayName, ClientNotificationUrl, Coaching, ConferenceSid, EarlyMedia, EndConferenceOnExit, From, Hold, HoldMethod, HoldUrl, Label, MachineDetection, MachineDetectionSilenceTimeout, MachineDetectionSpeechEndThreshold, MachineDetectionSpeechThreshold, MachineDetectionTimeout, Muted, Page, PageSize, PageToken, Record, StatusCallback, StatusCallbackEvent, StatusCallbackMethod, TimeLimit, To, Trim, WaitMethod, WaitUrl);
});

// Story: crud:Queues:linear:1
bthread("crud:Queues:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1710";
  let MaxSize = 1710;
  let Page = "Page_1710";
  let PageSize = "PageSize_1710";
  let PageToken = "PageToken_1710";
  let Sid = "Sid_1710";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateQueue(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid);
});

// Story: crud:Queues:linear:2
bthread("crud:Queues:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1720";
  let MaxSize = 1720;
  let Page = "Page_1720";
  let PageSize = "PageSize_1720";
  let PageToken = "PageToken_1720";
  let Sid = "Sid_1720";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateQueue(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid);
});

// Story: crud:Queues:linear:3
bthread("crud:Queues:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_1730";
  let MaxSize = 1730;
  let Page = "Page_1730";
  let PageSize = "PageSize_1730";
  let PageToken = "PageToken_1730";
  let Sid = "Sid_1730";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateQueue(AccountSid, FriendlyName, MaxSize, Page, PageSize, PageToken, Sid);
});

// Story: crud:AuthCallsCredentialListMapping:linear:1
bthread("crud:AuthCallsCredentialListMapping:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2210";
  let DomainSid = "DomainSid_2210";
  let Page = "Page_2210";
  let PageSize = "PageSize_2210";
  let PageToken = "PageToken_2210";
  let Sid = "Sid_2210";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthCallsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:AuthCallsCredentialListMapping:linear:2
bthread("crud:AuthCallsCredentialListMapping:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2220";
  let DomainSid = "DomainSid_2220";
  let Page = "Page_2220";
  let PageSize = "PageSize_2220";
  let PageToken = "PageToken_2220";
  let Sid = "Sid_2220";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthCallsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:AuthCallsCredentialListMapping:linear:3
bthread("crud:AuthCallsCredentialListMapping:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2230";
  let DomainSid = "DomainSid_2230";
  let Page = "Page_2230";
  let PageSize = "PageSize_2230";
  let PageToken = "PageToken_2230";
  let Sid = "Sid_2230";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthCallsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:SipAuthCallsIpAccessControlListMapping:linear:1
bthread("crud:SipAuthCallsIpAccessControlListMapping:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let DomainSid = "DomainSid_2260";
  let IpAccessControlListSid = "IpAccessControlListSid_2260";
  let Page = "Page_2260";
  let PageSize = "PageSize_2260";
  let PageToken = "PageToken_2260";
  let Sid = "Sid_2260";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthCallsIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:SipAuthCallsIpAccessControlListMapping:linear:2
bthread("crud:SipAuthCallsIpAccessControlListMapping:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let DomainSid = "DomainSid_2270";
  let IpAccessControlListSid = "IpAccessControlListSid_2270";
  let Page = "Page_2270";
  let PageSize = "PageSize_2270";
  let PageToken = "PageToken_2270";
  let Sid = "Sid_2270";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthCallsIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:SipAuthCallsIpAccessControlListMapping:linear:3
bthread("crud:SipAuthCallsIpAccessControlListMapping:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let DomainSid = "DomainSid_2280";
  let IpAccessControlListSid = "IpAccessControlListSid_2280";
  let Page = "Page_2280";
  let PageSize = "PageSize_2280";
  let PageToken = "PageToken_2280";
  let Sid = "Sid_2280";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthCallsIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:SipAuthRegistrationsCredentialListMapping:linear:1
bthread("crud:SipAuthRegistrationsCredentialListMapping:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2310";
  let DomainSid = "DomainSid_2310";
  let Page = "Page_2310";
  let PageSize = "PageSize_2310";
  let PageToken = "PageToken_2310";
  let Sid = "Sid_2310";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthRegistrationsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:SipAuthRegistrationsCredentialListMapping:linear:2
bthread("crud:SipAuthRegistrationsCredentialListMapping:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2320";
  let DomainSid = "DomainSid_2320";
  let Page = "Page_2320";
  let PageSize = "PageSize_2320";
  let PageToken = "PageToken_2320";
  let Sid = "Sid_2320";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthRegistrationsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:SipAuthRegistrationsCredentialListMapping:linear:3
bthread("crud:SipAuthRegistrationsCredentialListMapping:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2330";
  let DomainSid = "DomainSid_2330";
  let Page = "Page_2330";
  let PageSize = "PageSize_2330";
  let PageToken = "PageToken_2330";
  let Sid = "Sid_2330";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipAuthRegistrationsCredentialListMapping(AccountSid, CredentialListSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:CredentialLists:linear:1
bthread("crud:CredentialLists:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_2360";
  let Page = "Page_2360";
  let PageSize = "PageSize_2360";
  let PageToken = "PageToken_2360";
  let Sid = "Sid_2360";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipCredentialList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:CredentialLists:linear:2
bthread("crud:CredentialLists:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_2370";
  let Page = "Page_2370";
  let PageSize = "PageSize_2370";
  let PageToken = "PageToken_2370";
  let Sid = "Sid_2370";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipCredentialList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:CredentialLists:linear:3
bthread("crud:CredentialLists:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_2380";
  let Page = "Page_2380";
  let PageSize = "PageSize_2380";
  let PageToken = "PageToken_2380";
  let Sid = "Sid_2380";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipCredentialList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:Credentials:linear:1
bthread("crud:Credentials:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2410";
  let Page = "Page_2410";
  let PageSize = "PageSize_2410";
  let PageToken = "PageToken_2410";
  let Password = "Password_2410";
  let Sid = "Sid_2410";
  let Username = "Username_2410";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipCredential(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username);
});

// Story: crud:Credentials:linear:2
bthread("crud:Credentials:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2420";
  let Page = "Page_2420";
  let PageSize = "PageSize_2420";
  let PageToken = "PageToken_2420";
  let Password = "Password_2420";
  let Sid = "Sid_2420";
  let Username = "Username_2420";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipCredential(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username);
});

// Story: crud:Credentials:linear:3
bthread("crud:Credentials:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let CredentialListSid = "CredentialListSid_2430";
  let Page = "Page_2430";
  let PageSize = "PageSize_2430";
  let PageToken = "PageToken_2430";
  let Password = "Password_2430";
  let Sid = "Sid_2430";
  let Username = "Username_2430";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipCredential(AccountSid, CredentialListSid, Page, PageSize, PageToken, Password, Sid, Username);
});

// Story: crud:SipDomains:linear:1
bthread("crud:SipDomains:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let ByocTrunkSid = "ByocTrunkSid_2510";
  let DomainName = "DomainName_2510";
  let EmergencyCallerSid = "EmergencyCallerSid_2510";
  let EmergencyCallingEnabled = true;
  let FriendlyName = "FriendlyName_2510";
  let Page = "Page_2510";
  let PageSize = "PageSize_2510";
  let PageToken = "PageToken_2510";
  let Secure = true;
  let Sid = "Sid_2510";
  let SipRegistration = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_2510";
  let VoiceFallbackUrl = "VoiceFallbackUrl_2510";
  let VoiceMethod = "VoiceMethod_2510";
  let VoiceStatusCallbackMethod = "VoiceStatusCallbackMethod_2510";
  let VoiceStatusCallbackUrl = "VoiceStatusCallbackUrl_2510";
  let VoiceUrl = "VoiceUrl_2510";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipDomain(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl);
});

// Story: crud:SipDomains:linear:2
bthread("crud:SipDomains:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let ByocTrunkSid = "ByocTrunkSid_2520";
  let DomainName = "DomainName_2520";
  let EmergencyCallerSid = "EmergencyCallerSid_2520";
  let EmergencyCallingEnabled = true;
  let FriendlyName = "FriendlyName_2520";
  let Page = "Page_2520";
  let PageSize = "PageSize_2520";
  let PageToken = "PageToken_2520";
  let Secure = true;
  let Sid = "Sid_2520";
  let SipRegistration = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_2520";
  let VoiceFallbackUrl = "VoiceFallbackUrl_2520";
  let VoiceMethod = "VoiceMethod_2520";
  let VoiceStatusCallbackMethod = "VoiceStatusCallbackMethod_2520";
  let VoiceStatusCallbackUrl = "VoiceStatusCallbackUrl_2520";
  let VoiceUrl = "VoiceUrl_2520";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipDomain(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl);
});

// Story: crud:SipDomains:linear:3
bthread("crud:SipDomains:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let ByocTrunkSid = "ByocTrunkSid_2530";
  let DomainName = "DomainName_2530";
  let EmergencyCallerSid = "EmergencyCallerSid_2530";
  let EmergencyCallingEnabled = true;
  let FriendlyName = "FriendlyName_2530";
  let Page = "Page_2530";
  let PageSize = "PageSize_2530";
  let PageToken = "PageToken_2530";
  let Secure = true;
  let Sid = "Sid_2530";
  let SipRegistration = true;
  let VoiceFallbackMethod = "VoiceFallbackMethod_2530";
  let VoiceFallbackUrl = "VoiceFallbackUrl_2530";
  let VoiceMethod = "VoiceMethod_2530";
  let VoiceStatusCallbackMethod = "VoiceStatusCallbackMethod_2530";
  let VoiceStatusCallbackUrl = "VoiceStatusCallbackUrl_2530";
  let VoiceUrl = "VoiceUrl_2530";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipDomain(AccountSid, ByocTrunkSid, DomainName, EmergencyCallerSid, EmergencyCallingEnabled, FriendlyName, Page, PageSize, PageToken, Secure, Sid, SipRegistration, VoiceFallbackMethod, VoiceFallbackUrl, VoiceMethod, VoiceStatusCallbackMethod, VoiceStatusCallbackUrl, VoiceUrl);
});

// Story: crud:SipIpAccessControlLists:linear:1
bthread("crud:SipIpAccessControlLists:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_2610";
  let Page = "Page_2610";
  let PageSize = "PageSize_2610";
  let PageToken = "PageToken_2610";
  let Sid = "Sid_2610";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAccessControlList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:SipIpAccessControlLists:linear:2
bthread("crud:SipIpAccessControlLists:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_2620";
  let Page = "Page_2620";
  let PageSize = "PageSize_2620";
  let PageToken = "PageToken_2620";
  let Sid = "Sid_2620";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAccessControlList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:SipIpAccessControlLists:linear:3
bthread("crud:SipIpAccessControlLists:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let FriendlyName = "FriendlyName_2630";
  let Page = "Page_2630";
  let PageSize = "PageSize_2630";
  let PageToken = "PageToken_2630";
  let Sid = "Sid_2630";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAccessControlList(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAccessControlListMapping:linear:1
bthread("crud:IpAccessControlListMapping:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let DomainSid = "DomainSid_2710";
  let IpAccessControlListSid = "IpAccessControlListSid_2710";
  let Page = "Page_2710";
  let PageSize = "PageSize_2710";
  let PageToken = "PageToken_2710";
  let Sid = "Sid_2710";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAccessControlListMapping:linear:2
bthread("crud:IpAccessControlListMapping:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let DomainSid = "DomainSid_2720";
  let IpAccessControlListSid = "IpAccessControlListSid_2720";
  let Page = "Page_2720";
  let PageSize = "PageSize_2720";
  let PageToken = "PageToken_2720";
  let Sid = "Sid_2720";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAccessControlListMapping:linear:3
bthread("crud:IpAccessControlListMapping:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let DomainSid = "DomainSid_2730";
  let IpAccessControlListSid = "IpAccessControlListSid_2730";
  let Page = "Page_2730";
  let PageSize = "PageSize_2730";
  let PageToken = "PageToken_2730";
  let Sid = "Sid_2730";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAccessControlListMapping(AccountSid, DomainSid, IpAccessControlListSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAddress:linear:1
bthread("crud:IpAddress:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let CidrPrefixLength = 2760;
  let FriendlyName = "FriendlyName_2760";
  let IpAccessControlListSid = "IpAccessControlListSid_2760";
  let IpAddress = "IpAddress_2760";
  let Page = "Page_2760";
  let PageSize = "PageSize_2760";
  let PageToken = "PageToken_2760";
  let Sid = "Sid_2760";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAddress(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAddress:linear:2
bthread("crud:IpAddress:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let CidrPrefixLength = 2770;
  let FriendlyName = "FriendlyName_2770";
  let IpAccessControlListSid = "IpAccessControlListSid_2770";
  let IpAddress = "IpAddress_2770";
  let Page = "Page_2770";
  let PageSize = "PageSize_2770";
  let PageToken = "PageToken_2770";
  let Sid = "Sid_2770";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAddress(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAddress:linear:3
bthread("crud:IpAddress:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let CidrPrefixLength = 2780;
  let FriendlyName = "FriendlyName_2780";
  let IpAccessControlListSid = "IpAccessControlListSid_2780";
  let IpAddress = "IpAddress_2780";
  let Page = "Page_2780";
  let PageSize = "PageSize_2780";
  let PageToken = "PageToken_2780";
  let Sid = "Sid_2780";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateSipIpAddress(AccountSid, CidrPrefixLength, FriendlyName, IpAccessControlListSid, IpAddress, Page, PageSize, PageToken, Sid);
});

// Story: crud:UserDefinedMessageSubscriptions:linear:1
bthread("crud:UserDefinedMessageSubscriptions:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let CallSid = "CallSid_3010";
  let Callback = "Callback_3010";
  let IdempotencyKey = "IdempotencyKey_3010";
  let Method = "Method_3010";
  let Sid = "Sid_3010";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateUserDefinedMessageSubscription(AccountSid, CallSid, Callback, IdempotencyKey, Method, Sid);
});

// Story: crud:UserDefinedMessageSubscriptions:linear:2
bthread("crud:UserDefinedMessageSubscriptions:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let CallSid = "CallSid_3020";
  let Callback = "Callback_3020";
  let IdempotencyKey = "IdempotencyKey_3020";
  let Method = "Method_3020";
  let Sid = "Sid_3020";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateUserDefinedMessageSubscription(AccountSid, CallSid, Callback, IdempotencyKey, Method, Sid);
});

// Story: crud:UserDefinedMessageSubscriptions:linear:3
bthread("crud:UserDefinedMessageSubscriptions:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let CallSid = "CallSid_3030";
  let Callback = "Callback_3030";
  let IdempotencyKey = "IdempotencyKey_3030";
  let Method = "Method_3030";
  let Sid = "Sid_3030";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateUserDefinedMessageSubscription(AccountSid, CallSid, Callback, IdempotencyKey, Method, Sid);
});

// Story: crud:UsageTriggers:linear:1
bthread("crud:UsageTriggers:linear:1", function () {
  let AccountSid; // Resolved Dependency
  let CallbackMethod = "CallbackMethod_3160";
  let CallbackUrl = "CallbackUrl_3160";
  let FriendlyName = "FriendlyName_3160";
  let Page = "Page_3160";
  let PageSize = "PageSize_3160";
  let PageToken = "PageToken_3160";
  let Recurring = "Recurring_3160";
  let Sid = "Sid_3160";
  let TriggerBy = "TriggerBy_3160";
  let TriggerValue = "TriggerValue_3160";
  let UsageCategory = "UsageCategory_3160";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateUsageTrigger(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory);
});

// Story: crud:UsageTriggers:linear:2
bthread("crud:UsageTriggers:linear:2", function () {
  let AccountSid; // Resolved Dependency
  let CallbackMethod = "CallbackMethod_3170";
  let CallbackUrl = "CallbackUrl_3170";
  let FriendlyName = "FriendlyName_3170";
  let Page = "Page_3170";
  let PageSize = "PageSize_3170";
  let PageToken = "PageToken_3170";
  let Recurring = "Recurring_3170";
  let Sid = "Sid_3170";
  let TriggerBy = "TriggerBy_3170";
  let TriggerValue = "TriggerValue_3170";
  let UsageCategory = "UsageCategory_3170";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateUsageTrigger(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory);
});

// Story: crud:UsageTriggers:linear:3
bthread("crud:UsageTriggers:linear:3", function () {
  let AccountSid; // Resolved Dependency
  let CallbackMethod = "CallbackMethod_3180";
  let CallbackUrl = "CallbackUrl_3180";
  let FriendlyName = "FriendlyName_3180";
  let Page = "Page_3180";
  let PageSize = "PageSize_3180";
  let PageToken = "PageToken_3180";
  let Recurring = "Recurring_3180";
  let Sid = "Sid_3180";
  let TriggerBy = "TriggerBy_3180";
  let TriggerValue = "TriggerValue_3180";
  let UsageCategory = "UsageCategory_3180";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountsAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CreateUsageTrigger(AccountSid, CallbackMethod, CallbackUrl, FriendlyName, Page, PageSize, PageToken, Recurring, Sid, TriggerBy, TriggerValue, UsageCategory);
});
