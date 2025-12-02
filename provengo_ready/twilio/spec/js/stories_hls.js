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

// Story: crud:Account:read_only
bthread("crud:Account:read_only", function () {
  let FriendlyName = "FriendlyName_200";
  let Page = "Page_200";
  let PageSize = "PageSize_200";
  let PageToken = "PageToken_200";
  let Sid = 200;
  let Status = "Status_200";
  verifyAccountExists(FriendlyName, Page, PageSize, PageToken, Sid, Status);
});

// Story: crud:Address:nondet:1:1
bthread("crud:Address:nondet:1:1", function () {
  let CustomerName = "CustomerName_210";
  let EmergencyEnabled = "EmergencyEnabled_210";
  let FriendlyName = "FriendlyName_210";
  let IsoCountry = "IsoCountry_210";
  let Page = "Page_210";
  let PageSize = "PageSize_210";
  let PageToken = "PageToken_210";
  let Sid = 210;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  // waitForAddressAdded(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  tryToAddExistingAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  verifyAddressExists(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  updateAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  deleteAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  verifyAddressDoesNotExist(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
});

// Story: crud:Address:nondet:1:2
bthread("crud:Address:nondet:1:2", function () {
  let CustomerName = "CustomerName_211";
  let EmergencyEnabled = "EmergencyEnabled_211";
  let FriendlyName = "FriendlyName_211";
  let IsoCountry = "IsoCountry_211";
  let Page = "Page_211";
  let PageSize = "PageSize_211";
  let PageToken = "PageToken_211";
  let Sid = 211;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  // waitForAddressAdded(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  tryToAddExistingAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  updateAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  verifyAddressExists(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  deleteAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  verifyAddressDoesNotExist(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
});

// Story: crud:Address:nondet:negative:dup-add
bthread("crud:Address:nondet:negative:dup-add", function () {
  let CustomerName = "CustomerName_216";
  let EmergencyEnabled = "EmergencyEnabled_216";
  let FriendlyName = "FriendlyName_216";
  let IsoCountry = "IsoCountry_216";
  let Page = "Page_216";
  let PageSize = "PageSize_216";
  let PageToken = "PageToken_216";
  let Sid = 216;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  // waitForAddressAdded(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  verifyAddressExists(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  tryToAddExistingAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
  verifyAddressExists(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
});

// Story: crud:Application:nondet:1:1
bthread("crud:Application:nondet:1:1", function () {
  let FriendlyName = "FriendlyName_220";
  let Page = "Page_220";
  let PageSize = "PageSize_220";
  let PageToken = "PageToken_220";
  let Sid = 220;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  // waitForApplicationAdded(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  tryToAddExistingApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  verifyApplicationExists(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  updateApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  deleteApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  verifyApplicationDoesNotExist(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:Application:nondet:1:2
bthread("crud:Application:nondet:1:2", function () {
  let FriendlyName = "FriendlyName_221";
  let Page = "Page_221";
  let PageSize = "PageSize_221";
  let PageToken = "PageToken_221";
  let Sid = 221;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  // waitForApplicationAdded(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  tryToAddExistingApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  updateApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  verifyApplicationExists(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  deleteApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  verifyApplicationDoesNotExist(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:Application:nondet:negative:dup-add
bthread("crud:Application:nondet:negative:dup-add", function () {
  let FriendlyName = "FriendlyName_226";
  let Page = "Page_226";
  let PageSize = "PageSize_226";
  let PageToken = "PageToken_226";
  let Sid = 226;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  // waitForApplicationAdded(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  verifyApplicationExists(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  tryToAddExistingApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
  verifyApplicationExists(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:AuthorizedConnectApp:read_only
bthread("crud:AuthorizedConnectApp:read_only", function () {
  let Page = "Page_230";
  let PageSize = "PageSize_230";
  let PageToken = "PageToken_230";
  verifyAuthorizedConnectAppExists(AccountSid, ConnectAppSid, Page, PageSize, PageToken);
});

// Story: crud:AvailablePhoneNumber:read_only
bthread("crud:AvailablePhoneNumber:read_only", function () {
  let CountryCode = "CountryCode_240";
  verifyAvailablePhoneNumberExists(AccountSid, CountryCode);
});

// Story: crud:AvailablePhoneNumbers:read_only
bthread("crud:AvailablePhoneNumbers:read_only", function () {
  let CountryCode = "CountryCode_250";
  let Type = "Type_250";
  verifyAvailablePhoneNumbersExists(AccountSid, CountryCode, Type);
});

// Story: crud:Balance:read_only
bthread("crud:Balance:read_only", function () {

  verifyBalanceExists(AccountSid);
});

// Story: crud:Call:nondet:1:1
bthread("crud:Call:nondet:1:1", function () {
  let EndTime = "EndTime_270";
  let EndTime< = "EndTime<_270";
  let EndTime> = "EndTime>_270";
  let From = "From_270";
  let Page = "Page_270";
  let PageSize = "PageSize_270";
  let PageToken = "PageToken_270";
  let ParentCallSid = 270;
  let Sid = 270;
  let StartTime = "StartTime_270";
  let StartTime< = "StartTime<_270";
  let StartTime> = "StartTime>_270";
  let Status = "Status_270";
  let To = "To_270";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  // waitForCallAdded(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  tryToAddExistingCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  verifyCallExists(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  updateCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  deleteCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  tryToDeleteANonExistingCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  verifyCallDoesNotExist(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
});

// Story: crud:Call:nondet:1:2
bthread("crud:Call:nondet:1:2", function () {
  let EndTime = "EndTime_271";
  let EndTime< = "EndTime<_271";
  let EndTime> = "EndTime>_271";
  let From = "From_271";
  let Page = "Page_271";
  let PageSize = "PageSize_271";
  let PageToken = "PageToken_271";
  let ParentCallSid = 271;
  let Sid = 271;
  let StartTime = "StartTime_271";
  let StartTime< = "StartTime<_271";
  let StartTime> = "StartTime>_271";
  let Status = "Status_271";
  let To = "To_271";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  // waitForCallAdded(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  tryToAddExistingCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  updateCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  verifyCallExists(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  deleteCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  tryToDeleteANonExistingCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  verifyCallDoesNotExist(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
});

// Story: crud:Call:nondet:negative:dup-add
bthread("crud:Call:nondet:negative:dup-add", function () {
  let EndTime = "EndTime_276";
  let EndTime< = "EndTime<_276";
  let EndTime> = "EndTime>_276";
  let From = "From_276";
  let Page = "Page_276";
  let PageSize = "PageSize_276";
  let PageToken = "PageToken_276";
  let ParentCallSid = 276;
  let Sid = 276;
  let StartTime = "StartTime_276";
  let StartTime< = "StartTime<_276";
  let StartTime> = "StartTime>_276";
  let Status = "Status_276";
  let To = "To_276";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  // waitForCallAdded(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  verifyCallExists(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  tryToAddExistingCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
  verifyCallExists(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
});

// Story: crud:CallNotification:read_only
bthread("crud:CallNotification:read_only", function () {
  let Sid = 290;
  verifyCallNotificationExists(AccountSid, CallSid, Sid);
});

// Story: crud:CallRecording:nondet:1:1
bthread("crud:CallRecording:nondet:1:1", function () {
  let Sid = 300;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  createCallRecording(AccountSid, CallSid, Sid);
  // waitForCallRecordingAdded(AccountSid, CallSid, Sid);
  tryToAddExistingCallRecording(AccountSid, CallSid, Sid);
  verifyCallRecordingExists(AccountSid, CallSid, Sid);
  updateCallRecording(AccountSid, CallSid, Sid);
  deleteCallRecording(AccountSid, CallSid, Sid);
  tryToDeleteANonExistingCallRecording(AccountSid, CallSid, Sid);
  verifyCallRecordingDoesNotExist(AccountSid, CallSid, Sid);
});

// Story: crud:CallRecording:nondet:1:2
bthread("crud:CallRecording:nondet:1:2", function () {
  let Sid = 301;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  createCallRecording(AccountSid, CallSid, Sid);
  // waitForCallRecordingAdded(AccountSid, CallSid, Sid);
  tryToAddExistingCallRecording(AccountSid, CallSid, Sid);
  updateCallRecording(AccountSid, CallSid, Sid);
  verifyCallRecordingExists(AccountSid, CallSid, Sid);
  deleteCallRecording(AccountSid, CallSid, Sid);
  tryToDeleteANonExistingCallRecording(AccountSid, CallSid, Sid);
  verifyCallRecordingDoesNotExist(AccountSid, CallSid, Sid);
});

// Story: crud:CallRecording:nondet:negative:dup-add
bthread("crud:CallRecording:nondet:negative:dup-add", function () {
  let Sid = 306;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  createCallRecording(AccountSid, CallSid, Sid);
  // waitForCallRecordingAdded(AccountSid, CallSid, Sid);
  verifyCallRecordingExists(AccountSid, CallSid, Sid);
  tryToAddExistingCallRecording(AccountSid, CallSid, Sid);
  verifyCallRecordingExists(AccountSid, CallSid, Sid);
});

// Story: crud:Conference:read_only
bthread("crud:Conference:read_only", function () {
  let DateCreated = "DateCreated_310";
  let DateCreated< = "DateCreated<_310";
  let DateCreated> = "DateCreated>_310";
  let DateUpdated = "DateUpdated_310";
  let DateUpdated< = "DateUpdated<_310";
  let DateUpdated> = "DateUpdated>_310";
  let FriendlyName = "FriendlyName_310";
  let Page = "Page_310";
  let PageSize = "PageSize_310";
  let PageToken = "PageToken_310";
  let Sid = 310;
  let Status = "Status_310";
  verifyConferenceExists(AccountSid, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, FriendlyName, Page, PageSize, PageToken, Sid, Status);
});

// Story: crud:ConferenceRecording:read_only
bthread("crud:ConferenceRecording:read_only", function () {
  let PauseBehavior = "PauseBehavior_320";
  let Sid = 320;
  let Status = "Status_320";
  verifyConferenceRecordingExists(AccountSid, ConferenceSid, PauseBehavior, Sid, Status);
});

// Story: crud:ConnectApp:read_only
bthread("crud:ConnectApp:read_only", function () {
  let Page = "Page_330";
  let PageSize = "PageSize_330";
  let PageToken = "PageToken_330";
  let Sid = 330;
  verifyConnectAppExists(AccountSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:Queue:nondet:1:1
bthread("crud:Queue:nondet:1:1", function () {
  let FriendlyName = "FriendlyName_340";
  let MaxSize = "MaxSize_340";
  let Sid = 340;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createQueue(AccountSid, FriendlyName, MaxSize, Sid);
  // waitForQueueAdded(AccountSid, FriendlyName, MaxSize, Sid);
  tryToAddExistingQueue(AccountSid, FriendlyName, MaxSize, Sid);
  verifyQueueExists(AccountSid, FriendlyName, MaxSize, Sid);
  updateQueue(AccountSid, FriendlyName, MaxSize, Sid);
  deleteQueue(AccountSid, FriendlyName, MaxSize, Sid);
  tryToDeleteANonExistingQueue(AccountSid, FriendlyName, MaxSize, Sid);
  verifyQueueDoesNotExist(AccountSid, FriendlyName, MaxSize, Sid);
});

// Story: crud:Queue:nondet:1:2
bthread("crud:Queue:nondet:1:2", function () {
  let FriendlyName = "FriendlyName_341";
  let MaxSize = "MaxSize_341";
  let Sid = 341;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createQueue(AccountSid, FriendlyName, MaxSize, Sid);
  // waitForQueueAdded(AccountSid, FriendlyName, MaxSize, Sid);
  tryToAddExistingQueue(AccountSid, FriendlyName, MaxSize, Sid);
  updateQueue(AccountSid, FriendlyName, MaxSize, Sid);
  verifyQueueExists(AccountSid, FriendlyName, MaxSize, Sid);
  deleteQueue(AccountSid, FriendlyName, MaxSize, Sid);
  tryToDeleteANonExistingQueue(AccountSid, FriendlyName, MaxSize, Sid);
  verifyQueueDoesNotExist(AccountSid, FriendlyName, MaxSize, Sid);
});

// Story: crud:Queue:nondet:negative:dup-add
bthread("crud:Queue:nondet:negative:dup-add", function () {
  let FriendlyName = "FriendlyName_346";
  let MaxSize = "MaxSize_346";
  let Sid = 346;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createQueue(AccountSid, FriendlyName, MaxSize, Sid);
  // waitForQueueAdded(AccountSid, FriendlyName, MaxSize, Sid);
  verifyQueueExists(AccountSid, FriendlyName, MaxSize, Sid);
  tryToAddExistingQueue(AccountSid, FriendlyName, MaxSize, Sid);
  verifyQueueExists(AccountSid, FriendlyName, MaxSize, Sid);
});

// Story: crud:Transcription:read_only
bthread("crud:Transcription:read_only", function () {
  let Sid = 350;
  verifyTranscriptionExists(AccountSid, CallSid, RecordingSid, Sid);
});

// Story: crud:Recording:read_only
bthread("crud:Recording:read_only", function () {
  let DateCreated = "DateCreated_360";
  let DateCreated< = "DateCreated<_360";
  let DateCreated> = "DateCreated>_360";
  let IncludeSoftDeleted = "IncludeSoftDeleted_360";
  let Page = "Page_360";
  let PageSize = "PageSize_360";
  let PageToken = "PageToken_360";
  let ReferenceSid = 360;
  let Sid = 360;
  verifyRecordingExists(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid);
});

// Story: crud:AddOnResult:read_only
bthread("crud:AddOnResult:read_only", function () {
  let AddOnResultSid = 370;
  let ReferenceSid = 370;
  let Sid = 370;
  verifyAddOnResultExists(AccountSid, AddOnResultSid, ReferenceSid, Sid);
});

// Story: crud:Payload:read_only
bthread("crud:Payload:read_only", function () {
  let PayloadSid = 380;
  let ReferenceSid = 380;
  let Sid = 380;
  verifyPayloadExists(AccountSid, AddOnResultSid, PayloadSid, ReferenceSid, Sid);
});

// Story: crud:ShortCode:read_only
bthread("crud:ShortCode:read_only", function () {
  let FriendlyName = "FriendlyName_390";
  let Page = "Page_390";
  let PageSize = "PageSize_390";
  let PageToken = "PageToken_390";
  let ShortCode = "ShortCode_390";
  let Sid = 390;
  verifyShortCodeExists(AccountSid, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid);
});

// Story: crud:SigningKey:read_only
bthread("crud:SigningKey:read_only", function () {
  let FriendlyName = "FriendlyName_400";
  let Page = "Page_400";
  let PageSize = "PageSize_400";
  let PageToken = "PageToken_400";
  let Sid = 400;
  verifySigningKeyExists(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
});

// Story: crud:SIP:read_only
bthread("crud:SIP:read_only", function () {

  verifySIPExists(AccountSid);
});

// Story: crud:SIPDomainAuth:read_only
bthread("crud:SIPDomainAuth:read_only", function () {

  verifySIPDomainAuthExists(AccountSid, DomainSid);
});

// Story: crud:SIPDomainAuthCall:read_only
bthread("crud:SIPDomainAuthCall:read_only", function () {

  verifySIPDomainAuthCallExists(AccountSid, DomainSid);
});

// Story: crud:CredentialListMapping:nondet:1:1
bthread("crud:CredentialListMapping:nondet:1:1", function () {
  let Page = "Page_440";
  let PageSize = "PageSize_440";
  let PageToken = "PageToken_440";
  let Sid = 440;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["DomainSid"] = matchAnyDomainAdded();
  let pkMap = {"AccountSid": "Sid", "DomainSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  DomainSid = captured["DomainSid"];
  createCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  // waitForCredentialListMappingAdded(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyCredentialListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  updateCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  deleteCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyCredentialListMappingDoesNotExist(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:CredentialListMapping:nondet:1:2
bthread("crud:CredentialListMapping:nondet:1:2", function () {
  let Page = "Page_441";
  let PageSize = "PageSize_441";
  let PageToken = "PageToken_441";
  let Sid = 441;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["DomainSid"] = matchAnyDomainAdded();
  let pkMap = {"AccountSid": "Sid", "DomainSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  DomainSid = captured["DomainSid"];
  createCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  // waitForCredentialListMappingAdded(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  updateCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyCredentialListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  deleteCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyCredentialListMappingDoesNotExist(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:CredentialListMapping:nondet:negative:dup-add
bthread("crud:CredentialListMapping:nondet:negative:dup-add", function () {
  let Page = "Page_446";
  let PageSize = "PageSize_446";
  let PageToken = "PageToken_446";
  let Sid = 446;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["DomainSid"] = matchAnyDomainAdded();
  let pkMap = {"AccountSid": "Sid", "DomainSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  DomainSid = captured["DomainSid"];
  createCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  // waitForCredentialListMappingAdded(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyCredentialListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyCredentialListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAccessControlListMapping:nondet:1:1
bthread("crud:IpAccessControlListMapping:nondet:1:1", function () {
  let Page = "Page_450";
  let PageSize = "PageSize_450";
  let PageToken = "PageToken_450";
  let Sid = 450;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["DomainSid"] = matchAnyDomainAdded();
  let pkMap = {"AccountSid": "Sid", "DomainSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  DomainSid = captured["DomainSid"];
  createIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  // waitForIpAccessControlListMappingAdded(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyIpAccessControlListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  updateIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  deleteIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyIpAccessControlListMappingDoesNotExist(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAccessControlListMapping:nondet:1:2
bthread("crud:IpAccessControlListMapping:nondet:1:2", function () {
  let Page = "Page_451";
  let PageSize = "PageSize_451";
  let PageToken = "PageToken_451";
  let Sid = 451;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["DomainSid"] = matchAnyDomainAdded();
  let pkMap = {"AccountSid": "Sid", "DomainSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  DomainSid = captured["DomainSid"];
  createIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  // waitForIpAccessControlListMappingAdded(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  updateIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyIpAccessControlListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  deleteIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyIpAccessControlListMappingDoesNotExist(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:IpAccessControlListMapping:nondet:negative:dup-add
bthread("crud:IpAccessControlListMapping:nondet:negative:dup-add", function () {
  let Page = "Page_456";
  let PageSize = "PageSize_456";
  let PageToken = "PageToken_456";
  let Sid = 456;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["DomainSid"] = matchAnyDomainAdded();
  let pkMap = {"AccountSid": "Sid", "DomainSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  DomainSid = captured["DomainSid"];
  createIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  // waitForIpAccessControlListMappingAdded(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyIpAccessControlListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
  verifyIpAccessControlListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:Credential:read_only
bthread("crud:Credential:read_only", function () {
  let Sid = 470;
  verifyCredentialExists(AccountSid, CredentialListSid, Sid);
});

// Story: crud:CredentialList:nondet:1:1
bthread("crud:CredentialList:nondet:1:1", function () {
  let Sid = 480;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createCredentialList(AccountSid, Sid);
  // waitForCredentialListAdded(AccountSid, Sid);
  tryToAddExistingCredentialList(AccountSid, Sid);
  verifyCredentialListExists(AccountSid, Sid);
  updateCredentialList(AccountSid, Sid);
  deleteCredentialList(AccountSid, Sid);
  tryToDeleteANonExistingCredentialList(AccountSid, Sid);
  verifyCredentialListDoesNotExist(AccountSid, Sid);
});

// Story: crud:CredentialList:nondet:1:2
bthread("crud:CredentialList:nondet:1:2", function () {
  let Sid = 481;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createCredentialList(AccountSid, Sid);
  // waitForCredentialListAdded(AccountSid, Sid);
  tryToAddExistingCredentialList(AccountSid, Sid);
  updateCredentialList(AccountSid, Sid);
  verifyCredentialListExists(AccountSid, Sid);
  deleteCredentialList(AccountSid, Sid);
  tryToDeleteANonExistingCredentialList(AccountSid, Sid);
  verifyCredentialListDoesNotExist(AccountSid, Sid);
});

// Story: crud:CredentialList:nondet:negative:dup-add
bthread("crud:CredentialList:nondet:negative:dup-add", function () {
  let Sid = 486;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createCredentialList(AccountSid, Sid);
  // waitForCredentialListAdded(AccountSid, Sid);
  verifyCredentialListExists(AccountSid, Sid);
  tryToAddExistingCredentialList(AccountSid, Sid);
  verifyCredentialListExists(AccountSid, Sid);
});

// Story: crud:Domain:nondet:1:1
bthread("crud:Domain:nondet:1:1", function () {
  let Sid = 500;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createDomain(AccountSid, Sid);
  // waitForDomainAdded(AccountSid, Sid);
  tryToAddExistingDomain(AccountSid, Sid);
  verifyDomainExists(AccountSid, Sid);
  updateDomain(AccountSid, Sid);
  deleteDomain(AccountSid, Sid);
  tryToDeleteANonExistingDomain(AccountSid, Sid);
  verifyDomainDoesNotExist(AccountSid, Sid);
});

// Story: crud:Domain:nondet:1:2
bthread("crud:Domain:nondet:1:2", function () {
  let Sid = 501;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createDomain(AccountSid, Sid);
  // waitForDomainAdded(AccountSid, Sid);
  tryToAddExistingDomain(AccountSid, Sid);
  updateDomain(AccountSid, Sid);
  verifyDomainExists(AccountSid, Sid);
  deleteDomain(AccountSid, Sid);
  tryToDeleteANonExistingDomain(AccountSid, Sid);
  verifyDomainDoesNotExist(AccountSid, Sid);
});

// Story: crud:Domain:nondet:negative:dup-add
bthread("crud:Domain:nondet:negative:dup-add", function () {
  let Sid = 506;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createDomain(AccountSid, Sid);
  // waitForDomainAdded(AccountSid, Sid);
  verifyDomainExists(AccountSid, Sid);
  tryToAddExistingDomain(AccountSid, Sid);
  verifyDomainExists(AccountSid, Sid);
});

// Story: crud:IpAccessControlList:nondet:1:1
bthread("crud:IpAccessControlList:nondet:1:1", function () {
  let Sid = 510;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIpAccessControlList(AccountSid, Sid);
  // waitForIpAccessControlListAdded(AccountSid, Sid);
  tryToAddExistingIpAccessControlList(AccountSid, Sid);
  verifyIpAccessControlListExists(AccountSid, Sid);
  updateIpAccessControlList(AccountSid, Sid);
  deleteIpAccessControlList(AccountSid, Sid);
  tryToDeleteANonExistingIpAccessControlList(AccountSid, Sid);
  verifyIpAccessControlListDoesNotExist(AccountSid, Sid);
});

// Story: crud:IpAccessControlList:nondet:1:2
bthread("crud:IpAccessControlList:nondet:1:2", function () {
  let Sid = 511;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIpAccessControlList(AccountSid, Sid);
  // waitForIpAccessControlListAdded(AccountSid, Sid);
  tryToAddExistingIpAccessControlList(AccountSid, Sid);
  updateIpAccessControlList(AccountSid, Sid);
  verifyIpAccessControlListExists(AccountSid, Sid);
  deleteIpAccessControlList(AccountSid, Sid);
  tryToDeleteANonExistingIpAccessControlList(AccountSid, Sid);
  verifyIpAccessControlListDoesNotExist(AccountSid, Sid);
});

// Story: crud:IpAccessControlList:nondet:negative:dup-add
bthread("crud:IpAccessControlList:nondet:negative:dup-add", function () {
  let Sid = 516;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIpAccessControlList(AccountSid, Sid);
  // waitForIpAccessControlListAdded(AccountSid, Sid);
  verifyIpAccessControlListExists(AccountSid, Sid);
  tryToAddExistingIpAccessControlList(AccountSid, Sid);
  verifyIpAccessControlListExists(AccountSid, Sid);
});

// Story: crud:IpAddress:nondet:1:1
bthread("crud:IpAddress:nondet:1:1", function () {
  let Sid = 520;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["IpAccessControlListSid"] = matchAnyIpAccessControlListAdded();
  let pkMap = {"AccountSid": "Sid", "IpAccessControlListSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  IpAccessControlListSid = captured["IpAccessControlListSid"];
  createIpAddress(AccountSid, IpAccessControlListSid, Sid);
  // waitForIpAddressAdded(AccountSid, IpAccessControlListSid, Sid);
  tryToAddExistingIpAddress(AccountSid, IpAccessControlListSid, Sid);
  verifyIpAddressExists(AccountSid, IpAccessControlListSid, Sid);
  updateIpAddress(AccountSid, IpAccessControlListSid, Sid);
  deleteIpAddress(AccountSid, IpAccessControlListSid, Sid);
  tryToDeleteANonExistingIpAddress(AccountSid, IpAccessControlListSid, Sid);
  verifyIpAddressDoesNotExist(AccountSid, IpAccessControlListSid, Sid);
});

// Story: crud:IpAddress:nondet:1:2
bthread("crud:IpAddress:nondet:1:2", function () {
  let Sid = 521;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["IpAccessControlListSid"] = matchAnyIpAccessControlListAdded();
  let pkMap = {"AccountSid": "Sid", "IpAccessControlListSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  IpAccessControlListSid = captured["IpAccessControlListSid"];
  createIpAddress(AccountSid, IpAccessControlListSid, Sid);
  // waitForIpAddressAdded(AccountSid, IpAccessControlListSid, Sid);
  tryToAddExistingIpAddress(AccountSid, IpAccessControlListSid, Sid);
  updateIpAddress(AccountSid, IpAccessControlListSid, Sid);
  verifyIpAddressExists(AccountSid, IpAccessControlListSid, Sid);
  deleteIpAddress(AccountSid, IpAccessControlListSid, Sid);
  tryToDeleteANonExistingIpAddress(AccountSid, IpAccessControlListSid, Sid);
  verifyIpAddressDoesNotExist(AccountSid, IpAccessControlListSid, Sid);
});

// Story: crud:IpAddress:nondet:negative:dup-add
bthread("crud:IpAddress:nondet:negative:dup-add", function () {
  let Sid = 526;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["IpAccessControlListSid"] = matchAnyIpAccessControlListAdded();
  let pkMap = {"AccountSid": "Sid", "IpAccessControlListSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  IpAccessControlListSid = captured["IpAccessControlListSid"];
  createIpAddress(AccountSid, IpAccessControlListSid, Sid);
  // waitForIpAddressAdded(AccountSid, IpAccessControlListSid, Sid);
  verifyIpAddressExists(AccountSid, IpAccessControlListSid, Sid);
  tryToAddExistingIpAddress(AccountSid, IpAccessControlListSid, Sid);
  verifyIpAddressExists(AccountSid, IpAccessControlListSid, Sid);
});

// Story: crud:Siprec:nondet:1:1
bthread("crud:Siprec:nondet:1:1", function () {

  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  createSiprec(AccountSid, CallSid);
  // waitForSiprecAdded(AccountSid, CallSid);
  tryToAddExistingSiprec(AccountSid, CallSid);
  verifySiprecExists(AccountSid, CallSid);
  updateSiprec(AccountSid, CallSid);
  deleteSiprec(AccountSid, CallSid);
  tryToDeleteANonExistingSiprec(AccountSid, CallSid);
  verifySiprecDoesNotExist(AccountSid, CallSid);
});

// Story: crud:Siprec:nondet:1:2
bthread("crud:Siprec:nondet:1:2", function () {

  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  createSiprec(AccountSid, CallSid);
  // waitForSiprecAdded(AccountSid, CallSid);
  tryToAddExistingSiprec(AccountSid, CallSid);
  updateSiprec(AccountSid, CallSid);
  verifySiprecExists(AccountSid, CallSid);
  deleteSiprec(AccountSid, CallSid);
  tryToDeleteANonExistingSiprec(AccountSid, CallSid);
  verifySiprecDoesNotExist(AccountSid, CallSid);
});

// Story: crud:Siprec:nondet:negative:dup-add
bthread("crud:Siprec:nondet:negative:dup-add", function () {

  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  createSiprec(AccountSid, CallSid);
  // waitForSiprecAdded(AccountSid, CallSid);
  verifySiprecExists(AccountSid, CallSid);
  tryToAddExistingSiprec(AccountSid, CallSid);
  verifySiprecExists(AccountSid, CallSid);
});

// Story: crud:UsageRecord:read_only
bthread("crud:UsageRecord:read_only", function () {
  let period = "period_540";
  verifyUsageRecordExists(AccountSid, period);
});

// Story: crud:UsageTrigger:read_only
bthread("crud:UsageTrigger:read_only", function () {
  let Sid = 550;
  verifyUsageTriggerExists(AccountSid, Sid);
});

// Story: crud:AvailablePhoneNumberCountry:read_only
bthread("crud:AvailablePhoneNumberCountry:read_only", function () {
  let CountryCode = "CountryCode_580";
  verifyAvailablePhoneNumberCountryExists(AccountSid, CountryCode);
});

// Story: crud:ConferenceRecordingsList:read_only
bthread("crud:ConferenceRecordingsList:read_only", function () {
  let DateCreated = "DateCreated_590";
  let DateCreated< = "DateCreated<_590";
  let DateCreated> = "DateCreated>_590";
  let Page = "Page_590";
  let PageSize = "PageSize_590";
  let PageToken = "PageToken_590";
  verifyConferenceRecordingsListExists(AccountSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, Page, PageSize, PageToken);
});

// Story: crud:IncomingPhoneNumber:nondet:1:1
bthread("crud:IncomingPhoneNumber:nondet:1:1", function () {
  let Beta = "Beta_600";
  let FriendlyName = "FriendlyName_600";
  let Origin = "Origin_600";
  let Page = "Page_600";
  let PageSize = "PageSize_600";
  let PageToken = "PageToken_600";
  let PhoneNumber = "PhoneNumber_600";
  let Sid = 600;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  // waitForIncomingPhoneNumberAdded(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  tryToAddExistingIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  verifyIncomingPhoneNumberExists(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  updateIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  deleteIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  tryToDeleteANonExistingIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  verifyIncomingPhoneNumberDoesNotExist(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
});

// Story: crud:IncomingPhoneNumber:nondet:1:2
bthread("crud:IncomingPhoneNumber:nondet:1:2", function () {
  let Beta = "Beta_601";
  let FriendlyName = "FriendlyName_601";
  let Origin = "Origin_601";
  let Page = "Page_601";
  let PageSize = "PageSize_601";
  let PageToken = "PageToken_601";
  let PhoneNumber = "PhoneNumber_601";
  let Sid = 601;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  // waitForIncomingPhoneNumberAdded(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  tryToAddExistingIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  updateIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  verifyIncomingPhoneNumberExists(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  deleteIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  tryToDeleteANonExistingIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  verifyIncomingPhoneNumberDoesNotExist(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
});

// Story: crud:IncomingPhoneNumber:nondet:negative:dup-add
bthread("crud:IncomingPhoneNumber:nondet:negative:dup-add", function () {
  let Beta = "Beta_606";
  let FriendlyName = "FriendlyName_606";
  let Origin = "Origin_606";
  let Page = "Page_606";
  let PageSize = "PageSize_606";
  let PageToken = "PageToken_606";
  let PhoneNumber = "PhoneNumber_606";
  let Sid = 606;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  // waitForIncomingPhoneNumberAdded(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  verifyIncomingPhoneNumberExists(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  tryToAddExistingIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
  verifyIncomingPhoneNumberExists(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
});

// Story: crud:IncomingPhoneNumberAssignedAddOn:nondet:1:1
bthread("crud:IncomingPhoneNumberAssignedAddOn:nondet:1:1", function () {
  let InstalledAddOnSid = 610;
  let ResourceSid = 610;
  let Sid = 610;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  // waitForIncomingPhoneNumberAssignedAddOnAdded(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  tryToAddExistingIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  verifyIncomingPhoneNumberAssignedAddOnExists(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  deleteIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  tryToDeleteANonExistingIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  verifyIncomingPhoneNumberAssignedAddOnDoesNotExist(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
});

// Story: crud:IncomingPhoneNumberAssignedAddOn:nondet:1:2
bthread("crud:IncomingPhoneNumberAssignedAddOn:nondet:1:2", function () {
  let InstalledAddOnSid = 611;
  let ResourceSid = 611;
  let Sid = 611;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  // waitForIncomingPhoneNumberAssignedAddOnAdded(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  tryToAddExistingIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  verifyIncomingPhoneNumberAssignedAddOnExists(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  deleteIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  tryToDeleteANonExistingIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  verifyIncomingPhoneNumberAssignedAddOnDoesNotExist(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
});

// Story: crud:IncomingPhoneNumberAssignedAddOn:nondet:negative:dup-add
bthread("crud:IncomingPhoneNumberAssignedAddOn:nondet:negative:dup-add", function () {
  let InstalledAddOnSid = 616;
  let ResourceSid = 616;
  let Sid = 616;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  // waitForIncomingPhoneNumberAssignedAddOnAdded(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  verifyIncomingPhoneNumberAssignedAddOnExists(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  tryToAddExistingIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
  verifyIncomingPhoneNumberAssignedAddOnExists(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
});

// Story: crud:IncomingPhoneNumberAssignedAddOnExtension:read_only
bthread("crud:IncomingPhoneNumberAssignedAddOnExtension:read_only", function () {
  let AssignedAddOnSid = 620;
  let Page = "Page_620";
  let PageSize = "PageSize_620";
  let PageToken = "PageToken_620";
  let ResourceSid = 620;
  let Sid = 620;
  verifyIncomingPhoneNumberAssignedAddOnExtensionExists(AccountSid, AssignedAddOnSid, Page, PageSize, PageToken, ResourceSid, Sid);
});

// Story: crud:Key:nondet:1:1
bthread("crud:Key:nondet:1:1", function () {
  let Page = "Page_630";
  let PageSize = "PageSize_630";
  let PageToken = "PageToken_630";
  let Sid = 630;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createKey(AccountSid, Page, PageSize, PageToken, Sid);
  // waitForKeyAdded(AccountSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingKey(AccountSid, Page, PageSize, PageToken, Sid);
  verifyKeyExists(AccountSid, Page, PageSize, PageToken, Sid);
  updateKey(AccountSid, Page, PageSize, PageToken, Sid);
  deleteKey(AccountSid, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingKey(AccountSid, Page, PageSize, PageToken, Sid);
  verifyKeyDoesNotExist(AccountSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:Key:nondet:1:2
bthread("crud:Key:nondet:1:2", function () {
  let Page = "Page_631";
  let PageSize = "PageSize_631";
  let PageToken = "PageToken_631";
  let Sid = 631;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createKey(AccountSid, Page, PageSize, PageToken, Sid);
  // waitForKeyAdded(AccountSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingKey(AccountSid, Page, PageSize, PageToken, Sid);
  updateKey(AccountSid, Page, PageSize, PageToken, Sid);
  verifyKeyExists(AccountSid, Page, PageSize, PageToken, Sid);
  deleteKey(AccountSid, Page, PageSize, PageToken, Sid);
  tryToDeleteANonExistingKey(AccountSid, Page, PageSize, PageToken, Sid);
  verifyKeyDoesNotExist(AccountSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:Key:nondet:negative:dup-add
bthread("crud:Key:nondet:negative:dup-add", function () {
  let Page = "Page_636";
  let PageSize = "PageSize_636";
  let PageToken = "PageToken_636";
  let Sid = 636;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createKey(AccountSid, Page, PageSize, PageToken, Sid);
  // waitForKeyAdded(AccountSid, Page, PageSize, PageToken, Sid);
  verifyKeyExists(AccountSid, Page, PageSize, PageToken, Sid);
  tryToAddExistingKey(AccountSid, Page, PageSize, PageToken, Sid);
  verifyKeyExists(AccountSid, Page, PageSize, PageToken, Sid);
});

// Story: crud:Member:read_only
bthread("crud:Member:read_only", function () {
  let Page = "Page_640";
  let PageSize = "PageSize_640";
  let PageToken = "PageToken_640";
  verifyMemberExists(AccountSid, CallSid, Page, PageSize, PageToken, QueueSid);
});

// Story: crud:Message:nondet:1:1
bthread("crud:Message:nondet:1:1", function () {
  let DateSent = "DateSent_650";
  let DateSent< = "DateSent<_650";
  let DateSent> = "DateSent>_650";
  let From = "From_650";
  let Page = "Page_650";
  let PageSize = "PageSize_650";
  let PageToken = "PageToken_650";
  let Sid = 650;
  let To = "To_650";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  // waitForMessageAdded(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  tryToAddExistingMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  verifyMessageExists(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  updateMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  deleteMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  tryToDeleteANonExistingMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  verifyMessageDoesNotExist(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
});

// Story: crud:Message:nondet:1:2
bthread("crud:Message:nondet:1:2", function () {
  let DateSent = "DateSent_651";
  let DateSent< = "DateSent<_651";
  let DateSent> = "DateSent>_651";
  let From = "From_651";
  let Page = "Page_651";
  let PageSize = "PageSize_651";
  let PageToken = "PageToken_651";
  let Sid = 651;
  let To = "To_651";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  // waitForMessageAdded(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  tryToAddExistingMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  updateMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  verifyMessageExists(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  deleteMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  tryToDeleteANonExistingMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  verifyMessageDoesNotExist(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
});

// Story: crud:Message:nondet:negative:dup-add
bthread("crud:Message:nondet:negative:dup-add", function () {
  let DateSent = "DateSent_656";
  let DateSent< = "DateSent<_656";
  let DateSent> = "DateSent>_656";
  let From = "From_656";
  let Page = "Page_656";
  let PageSize = "PageSize_656";
  let PageToken = "PageToken_656";
  let Sid = 656;
  let To = "To_656";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  let pkMap = {"AccountSid": "Sid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  createMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  // waitForMessageAdded(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  verifyMessageExists(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  tryToAddExistingMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
  verifyMessageExists(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let Log = "Log_660";
  let MessageDate = "MessageDate_660";
  let MessageDate< = "MessageDate<_660";
  let MessageDate> = "MessageDate>_660";
  let Page = "Page_660";
  let PageSize = "PageSize_660";
  let PageToken = "PageToken_660";
  let Sid = 660;
  verifyNotificationExists(AccountSid, Log, MessageDate, MessageDate<, MessageDate>, Page, PageSize, PageToken, Sid);
});

// Story: crud:OutgoingCallerId:read_only
bthread("crud:OutgoingCallerId:read_only", function () {
  let FriendlyName = "FriendlyName_670";
  let Page = "Page_670";
  let PageSize = "PageSize_670";
  let PageToken = "PageToken_670";
  let PhoneNumber = "PhoneNumber_670";
  let Sid = 670;
  verifyOutgoingCallerIdExists(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid);
});

// Story: crud:Participant:nondet:1:1
bthread("crud:Participant:nondet:1:1", function () {
  let Coaching = "Coaching_680";
  let Hold = "Hold_680";
  let Muted = "Muted_680";
  let Page = "Page_680";
  let PageSize = "PageSize_680";
  let PageToken = "PageToken_680";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  deps["ConferenceSid"] = matchAnyConferenceAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid", "ConferenceSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  ConferenceSid = captured["ConferenceSid"];
  createParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  // waitForParticipantAdded(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  tryToAddExistingParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  verifyParticipantExists(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  updateParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  deleteParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  tryToDeleteANonExistingParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  verifyParticipantDoesNotExist(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
});

// Story: crud:Participant:nondet:1:2
bthread("crud:Participant:nondet:1:2", function () {
  let Coaching = "Coaching_681";
  let Hold = "Hold_681";
  let Muted = "Muted_681";
  let Page = "Page_681";
  let PageSize = "PageSize_681";
  let PageToken = "PageToken_681";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  deps["ConferenceSid"] = matchAnyConferenceAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid", "ConferenceSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  ConferenceSid = captured["ConferenceSid"];
  createParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  // waitForParticipantAdded(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  tryToAddExistingParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  updateParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  verifyParticipantExists(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  deleteParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  tryToDeleteANonExistingParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  verifyParticipantDoesNotExist(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
});

// Story: crud:Participant:nondet:negative:dup-add
bthread("crud:Participant:nondet:negative:dup-add", function () {
  let Coaching = "Coaching_686";
  let Hold = "Hold_686";
  let Muted = "Muted_686";
  let Page = "Page_686";
  let PageSize = "PageSize_686";
  let PageToken = "PageToken_686";
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CallSid"] = matchAnyCallAdded();
  deps["ConferenceSid"] = matchAnyConferenceAdded();
  let pkMap = {"AccountSid": "Sid", "CallSid": "AccountSid", "ConferenceSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CallSid = captured["CallSid"];
  ConferenceSid = captured["ConferenceSid"];
  createParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  // waitForParticipantAdded(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  verifyParticipantExists(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  tryToAddExistingParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
  verifyParticipantExists(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
});

// Story: crud:RecordingAddOnResult:read_only
bthread("crud:RecordingAddOnResult:read_only", function () {
  let Page = "Page_700";
  let PageSize = "PageSize_700";
  let PageToken = "PageToken_700";
  let ReferenceSid = 700;
  let Sid = 700;
  verifyRecordingAddOnResultExists(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid);
});

// Story: crud:RecordingAddOnResultPayload:read_only
bthread("crud:RecordingAddOnResultPayload:read_only", function () {
  let ReferenceSid = 710;
  let Sid = 710;
  verifyRecordingAddOnResultPayloadExists(AccountSid, AddOnResultSid, ReferenceSid, Sid);
});

// Story: crud:RecordingAddOnResultPayloadList:read_only
bthread("crud:RecordingAddOnResultPayloadList:read_only", function () {
  let Page = "Page_720";
  let PageSize = "PageSize_720";
  let PageToken = "PageToken_720";
  let ReferenceSid = 720;
  verifyRecordingAddOnResultPayloadListExists(AccountSid, AddOnResultSid, Page, PageSize, PageToken, ReferenceSid);
});

// Story: crud:RecordingTranscription:read_only
bthread("crud:RecordingTranscription:read_only", function () {
  let Page = "Page_730";
  let PageSize = "PageSize_730";
  let PageToken = "PageToken_730";
  let Sid = 730;
  verifyRecordingTranscriptionExists(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid);
});

// Story: crud:SipCredential:nondet:1:1
bthread("crud:SipCredential:nondet:1:1", function () {
  let Sid = 740;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CredentialListSid"] = matchAnyCredentialAdded();
  deps["CredentialListSid"] = matchAnyCredentialListAdded();
  deps["CredentialListSid"] = matchAnyCredentialListsAdded();
  let pkMap = {"AccountSid": "Sid", "CredentialListSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CredentialListSid = captured["CredentialListSid"];
  CredentialListSid = captured["CredentialListSid"];
  CredentialListSid = captured["CredentialListSid"];
  createSipCredential(AccountSid, CredentialListSid, Sid);
  // waitForSipCredentialAdded(AccountSid, CredentialListSid, Sid);
  tryToAddExistingSipCredential(AccountSid, CredentialListSid, Sid);
  verifySipCredentialExists(AccountSid, CredentialListSid, Sid);
  updateSipCredential(AccountSid, CredentialListSid, Sid);
  deleteSipCredential(AccountSid, CredentialListSid, Sid);
  tryToDeleteANonExistingSipCredential(AccountSid, CredentialListSid, Sid);
  verifySipCredentialDoesNotExist(AccountSid, CredentialListSid, Sid);
});

// Story: crud:SipCredential:nondet:1:2
bthread("crud:SipCredential:nondet:1:2", function () {
  let Sid = 741;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CredentialListSid"] = matchAnyCredentialAdded();
  deps["CredentialListSid"] = matchAnyCredentialListAdded();
  deps["CredentialListSid"] = matchAnyCredentialListsAdded();
  let pkMap = {"AccountSid": "Sid", "CredentialListSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CredentialListSid = captured["CredentialListSid"];
  CredentialListSid = captured["CredentialListSid"];
  CredentialListSid = captured["CredentialListSid"];
  createSipCredential(AccountSid, CredentialListSid, Sid);
  // waitForSipCredentialAdded(AccountSid, CredentialListSid, Sid);
  tryToAddExistingSipCredential(AccountSid, CredentialListSid, Sid);
  updateSipCredential(AccountSid, CredentialListSid, Sid);
  verifySipCredentialExists(AccountSid, CredentialListSid, Sid);
  deleteSipCredential(AccountSid, CredentialListSid, Sid);
  tryToDeleteANonExistingSipCredential(AccountSid, CredentialListSid, Sid);
  verifySipCredentialDoesNotExist(AccountSid, CredentialListSid, Sid);
});

// Story: crud:SipCredential:nondet:negative:dup-add
bthread("crud:SipCredential:nondet:negative:dup-add", function () {
  let Sid = 746;
  // Dependency Barrier
  let deps = {};
  deps["AccountSid"] = matchAnyAccountAdded();
  deps["CredentialListSid"] = matchAnyCredentialAdded();
  deps["CredentialListSid"] = matchAnyCredentialListAdded();
  deps["CredentialListSid"] = matchAnyCredentialListsAdded();
  let pkMap = {"AccountSid": "Sid", "CredentialListSid": "AccountSid"};
  let captured = resolveDependencies(deps, pkMap);
  AccountSid = captured["AccountSid"];
  CredentialListSid = captured["CredentialListSid"];
  CredentialListSid = captured["CredentialListSid"];
  CredentialListSid = captured["CredentialListSid"];
  createSipCredential(AccountSid, CredentialListSid, Sid);
  // waitForSipCredentialAdded(AccountSid, CredentialListSid, Sid);
  verifySipCredentialExists(AccountSid, CredentialListSid, Sid);
  tryToAddExistingSipCredential(AccountSid, CredentialListSid, Sid);
  verifySipCredentialExists(AccountSid, CredentialListSid, Sid);
});

// Story: crud:CredentialLists:read_only
bthread("crud:CredentialLists:read_only", function () {
  let Page = "Page_750";
  let PageSize = "PageSize_750";
  let PageToken = "PageToken_750";
  verifyCredentialListsExists(AccountSid, Page, PageSize, PageToken);
});
