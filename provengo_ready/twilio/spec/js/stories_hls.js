// Auto-generated HLS stories
//@provengo summon rest


// Story: crud:Account:read_only
bp.registerBThread("crud:Account:read_only", function () {
  let Sid = 200;
  let FriendlyName = "FriendlyName_200";
  let Status = "Status_200";
  let PageSize = "PageSize_200";
  let Page = "Page_200";
  let PageToken = "PageToken_200";
  verifyAccountExists(200, "FriendlyName_200", "Status_200", "PageSize_200", "Page_200", "PageToken_200");
});

// Story: crud:Address:nondet:1:1
bp.registerBThread("crud:Address:nondet:1:1", function () {
  let AccountSid = 210;
  let Sid = 210;
  let CustomerName = "CustomerName_210";
  let FriendlyName = "FriendlyName_210";
  let EmergencyEnabled = "EmergencyEnabled_210";
  let IsoCountry = "IsoCountry_210";
  let PageSize = "PageSize_210";
  let Page = "Page_210";
  let PageToken = "PageToken_210";
  let Street = "Street_210";
  let City = "City_210";
  let Region = "Region_210";
  let PostalCode = "PostalCode_210";
  let AutoCorrectAddress = "AutoCorrectAddress_210";
  let StreetSecondary = "StreetSecondary_210";
  createAddress(210, 210, "CustomerName_210", "FriendlyName_210", "EmergencyEnabled_210", "IsoCountry_210", "PageSize_210", "Page_210", "PageToken_210", "Street_210", "City_210", "Region_210", "PostalCode_210", "AutoCorrectAddress_210", "StreetSecondary_210");
  tryToAddExistingAddress(210, 210, "CustomerName_210", "FriendlyName_210", "EmergencyEnabled_210", "IsoCountry_210", "PageSize_210", "Page_210", "PageToken_210", "Street_210", "City_210", "Region_210", "PostalCode_210", "AutoCorrectAddress_210", "StreetSecondary_210");
  verifyAddressExists(210, 210, "CustomerName_210", "FriendlyName_210", "EmergencyEnabled_210", "IsoCountry_210", "PageSize_210", "Page_210", "PageToken_210", "Street_210", "City_210", "Region_210", "PostalCode_210", "AutoCorrectAddress_210", "StreetSecondary_210");
  updateAddress(210, 210, "CustomerName_210", "FriendlyName_210", "EmergencyEnabled_210", "IsoCountry_210", "PageSize_210", "Page_210", "PageToken_210", "Street_210", "City_210", "Region_210", "PostalCode_210", "AutoCorrectAddress_210", "StreetSecondary_210");
  deleteAddress(210, 210, "CustomerName_210", "FriendlyName_210", "EmergencyEnabled_210", "IsoCountry_210", "PageSize_210", "Page_210", "PageToken_210", "Street_210", "City_210", "Region_210", "PostalCode_210", "AutoCorrectAddress_210", "StreetSecondary_210");
  tryToDeleteANonExistingAddress(210, 210, "CustomerName_210", "FriendlyName_210", "EmergencyEnabled_210", "IsoCountry_210", "PageSize_210", "Page_210", "PageToken_210", "Street_210", "City_210", "Region_210", "PostalCode_210", "AutoCorrectAddress_210", "StreetSecondary_210");
  verifyAddressDoesNotExist(210, 210, "CustomerName_210", "FriendlyName_210", "EmergencyEnabled_210", "IsoCountry_210", "PageSize_210", "Page_210", "PageToken_210", "Street_210", "City_210", "Region_210", "PostalCode_210", "AutoCorrectAddress_210", "StreetSecondary_210");
});

// Story: crud:Address:nondet:1:2
bp.registerBThread("crud:Address:nondet:1:2", function () {
  let AccountSid = 211;
  let Sid = 211;
  let CustomerName = "CustomerName_211";
  let FriendlyName = "FriendlyName_211";
  let EmergencyEnabled = "EmergencyEnabled_211";
  let IsoCountry = "IsoCountry_211";
  let PageSize = "PageSize_211";
  let Page = "Page_211";
  let PageToken = "PageToken_211";
  let Street = "Street_211";
  let City = "City_211";
  let Region = "Region_211";
  let PostalCode = "PostalCode_211";
  let AutoCorrectAddress = "AutoCorrectAddress_211";
  let StreetSecondary = "StreetSecondary_211";
  createAddress(211, 211, "CustomerName_211", "FriendlyName_211", "EmergencyEnabled_211", "IsoCountry_211", "PageSize_211", "Page_211", "PageToken_211", "Street_211", "City_211", "Region_211", "PostalCode_211", "AutoCorrectAddress_211", "StreetSecondary_211");
  tryToAddExistingAddress(211, 211, "CustomerName_211", "FriendlyName_211", "EmergencyEnabled_211", "IsoCountry_211", "PageSize_211", "Page_211", "PageToken_211", "Street_211", "City_211", "Region_211", "PostalCode_211", "AutoCorrectAddress_211", "StreetSecondary_211");
  updateAddress(211, 211, "CustomerName_211", "FriendlyName_211", "EmergencyEnabled_211", "IsoCountry_211", "PageSize_211", "Page_211", "PageToken_211", "Street_211", "City_211", "Region_211", "PostalCode_211", "AutoCorrectAddress_211", "StreetSecondary_211");
  verifyAddressExists(211, 211, "CustomerName_211", "FriendlyName_211", "EmergencyEnabled_211", "IsoCountry_211", "PageSize_211", "Page_211", "PageToken_211", "Street_211", "City_211", "Region_211", "PostalCode_211", "AutoCorrectAddress_211", "StreetSecondary_211");
  deleteAddress(211, 211, "CustomerName_211", "FriendlyName_211", "EmergencyEnabled_211", "IsoCountry_211", "PageSize_211", "Page_211", "PageToken_211", "Street_211", "City_211", "Region_211", "PostalCode_211", "AutoCorrectAddress_211", "StreetSecondary_211");
  tryToDeleteANonExistingAddress(211, 211, "CustomerName_211", "FriendlyName_211", "EmergencyEnabled_211", "IsoCountry_211", "PageSize_211", "Page_211", "PageToken_211", "Street_211", "City_211", "Region_211", "PostalCode_211", "AutoCorrectAddress_211", "StreetSecondary_211");
  verifyAddressDoesNotExist(211, 211, "CustomerName_211", "FriendlyName_211", "EmergencyEnabled_211", "IsoCountry_211", "PageSize_211", "Page_211", "PageToken_211", "Street_211", "City_211", "Region_211", "PostalCode_211", "AutoCorrectAddress_211", "StreetSecondary_211");
});

// Story: crud:Address:nondet:negative:dup-add
bp.registerBThread("crud:Address:nondet:negative:dup-add", function () {
  let AccountSid = 216;
  let Sid = 216;
  let CustomerName = "CustomerName_216";
  let FriendlyName = "FriendlyName_216";
  let EmergencyEnabled = "EmergencyEnabled_216";
  let IsoCountry = "IsoCountry_216";
  let PageSize = "PageSize_216";
  let Page = "Page_216";
  let PageToken = "PageToken_216";
  let Street = "Street_216";
  let City = "City_216";
  let Region = "Region_216";
  let PostalCode = "PostalCode_216";
  let AutoCorrectAddress = "AutoCorrectAddress_216";
  let StreetSecondary = "StreetSecondary_216";
  createAddress(216, 216, "CustomerName_216", "FriendlyName_216", "EmergencyEnabled_216", "IsoCountry_216", "PageSize_216", "Page_216", "PageToken_216", "Street_216", "City_216", "Region_216", "PostalCode_216", "AutoCorrectAddress_216", "StreetSecondary_216");
  verifyAddressExists(216, 216, "CustomerName_216", "FriendlyName_216", "EmergencyEnabled_216", "IsoCountry_216", "PageSize_216", "Page_216", "PageToken_216", "Street_216", "City_216", "Region_216", "PostalCode_216", "AutoCorrectAddress_216", "StreetSecondary_216");
  tryToAddExistingAddress(216, 216, "CustomerName_216", "FriendlyName_216", "EmergencyEnabled_216", "IsoCountry_216", "PageSize_216", "Page_216", "PageToken_216", "Street_216", "City_216", "Region_216", "PostalCode_216", "AutoCorrectAddress_216", "StreetSecondary_216");
  verifyAddressExists(216, 216, "CustomerName_216", "FriendlyName_216", "EmergencyEnabled_216", "IsoCountry_216", "PageSize_216", "Page_216", "PageToken_216", "Street_216", "City_216", "Region_216", "PostalCode_216", "AutoCorrectAddress_216", "StreetSecondary_216");
});

// Story: crud:Address:nondet:existing:update
bp.registerBThread("crud:Address:nondet:existing:update", function () {
  let ev = waitForAnyAddressAdded();
  let args = Object.values(ev);
  block(matchDeletedAddress.apply(null, args), function () {
    verifyAddressExists.apply(null, args);
    updateAddress.apply(null, args);
    verifyAddressExists.apply(null, args);
  });
});

// Story: monitor:Address:add
bp.registerBThread("monitor:Address:add", function () {
  while (true) {
    let ev = waitForAnyAddressAdded();
    let args = Object.values(ev);
    block(matchDeletedAddress.apply(null, args), function () {
      verifyAddressExists.apply(null, args);
    });
  }
});

// Story: crud:Application:nondet:1:1
bp.registerBThread("crud:Application:nondet:1:1", function () {
  let AccountSid = 220;
  let Sid = 220;
  let FriendlyName = "FriendlyName_220";
  createApplication(220, 220, "FriendlyName_220");
  tryToAddExistingApplication(220, 220, "FriendlyName_220");
  verifyApplicationExists(220, 220, "FriendlyName_220");
  updateApplication(220, 220, "FriendlyName_220");
  deleteApplication(220, 220, "FriendlyName_220");
  tryToDeleteANonExistingApplication(220, 220, "FriendlyName_220");
  verifyApplicationDoesNotExist(220, 220, "FriendlyName_220");
});

// Story: crud:Application:nondet:1:2
bp.registerBThread("crud:Application:nondet:1:2", function () {
  let AccountSid = 221;
  let Sid = 221;
  let FriendlyName = "FriendlyName_221";
  createApplication(221, 221, "FriendlyName_221");
  tryToAddExistingApplication(221, 221, "FriendlyName_221");
  updateApplication(221, 221, "FriendlyName_221");
  verifyApplicationExists(221, 221, "FriendlyName_221");
  deleteApplication(221, 221, "FriendlyName_221");
  tryToDeleteANonExistingApplication(221, 221, "FriendlyName_221");
  verifyApplicationDoesNotExist(221, 221, "FriendlyName_221");
});

// Story: crud:Application:nondet:negative:dup-add
bp.registerBThread("crud:Application:nondet:negative:dup-add", function () {
  let AccountSid = 226;
  let Sid = 226;
  let FriendlyName = "FriendlyName_226";
  createApplication(226, 226, "FriendlyName_226");
  verifyApplicationExists(226, 226, "FriendlyName_226");
  tryToAddExistingApplication(226, 226, "FriendlyName_226");
  verifyApplicationExists(226, 226, "FriendlyName_226");
});

// Story: crud:Application:nondet:existing:update
bp.registerBThread("crud:Application:nondet:existing:update", function () {
  let ev = waitForAnyApplicationAdded();
  let args = Object.values(ev);
  block(matchDeletedApplication.apply(null, args), function () {
    verifyApplicationExists.apply(null, args);
    updateApplication.apply(null, args);
    verifyApplicationExists.apply(null, args);
  });
});

// Story: monitor:Application:add
bp.registerBThread("monitor:Application:add", function () {
  while (true) {
    let ev = waitForAnyApplicationAdded();
    let args = Object.values(ev);
    block(matchDeletedApplication.apply(null, args), function () {
      verifyApplicationExists.apply(null, args);
    });
  }
});

// Story: crud:AuthorizedConnectApp:read_only
bp.registerBThread("crud:AuthorizedConnectApp:read_only", function () {
  let AccountSid = 230;
  let ConnectAppSid = 230;
  let PageSize = "PageSize_230";
  let Page = "Page_230";
  let PageToken = "PageToken_230";
  verifyAuthorizedConnectAppExists(230, 230, "PageSize_230", "Page_230", "PageToken_230");
});

// Story: crud:Balance:read_only
bp.registerBThread("crud:Balance:read_only", function () {
  let AccountSid = 250;
  verifyBalanceExists(250);
});

// Story: crud:Call:nondet:1:1
bp.registerBThread("crud:Call:nondet:1:1", function () {
  let AccountSid = 260;
  let Sid = 260;
  let To = "To_260";
  let From = "From_260";
  let ParentCallSid = 260;
  let Status = "Status_260";
  let StartTime = "StartTime_260";
  let StartTime< = "StartTime<_260";
  let StartTime> = "StartTime>_260";
  let EndTime = "EndTime_260";
  let EndTime< = "EndTime<_260";
  let EndTime> = "EndTime>_260";
  let PageSize = "PageSize_260";
  let Page = "Page_260";
  let PageToken = "PageToken_260";
  createCall(260, 260, "To_260", "From_260", 260, "Status_260", "StartTime_260", "StartTime<_260", "StartTime>_260", "EndTime_260", "EndTime<_260", "EndTime>_260", "PageSize_260", "Page_260", "PageToken_260");
  tryToAddExistingCall(260, 260, "To_260", "From_260", 260, "Status_260", "StartTime_260", "StartTime<_260", "StartTime>_260", "EndTime_260", "EndTime<_260", "EndTime>_260", "PageSize_260", "Page_260", "PageToken_260");
  verifyCallExists(260, 260, "To_260", "From_260", 260, "Status_260", "StartTime_260", "StartTime<_260", "StartTime>_260", "EndTime_260", "EndTime<_260", "EndTime>_260", "PageSize_260", "Page_260", "PageToken_260");
  updateCall(260, 260, "To_260", "From_260", 260, "Status_260", "StartTime_260", "StartTime<_260", "StartTime>_260", "EndTime_260", "EndTime<_260", "EndTime>_260", "PageSize_260", "Page_260", "PageToken_260");
  deleteCall(260, 260, "To_260", "From_260", 260, "Status_260", "StartTime_260", "StartTime<_260", "StartTime>_260", "EndTime_260", "EndTime<_260", "EndTime>_260", "PageSize_260", "Page_260", "PageToken_260");
  tryToDeleteANonExistingCall(260, 260, "To_260", "From_260", 260, "Status_260", "StartTime_260", "StartTime<_260", "StartTime>_260", "EndTime_260", "EndTime<_260", "EndTime>_260", "PageSize_260", "Page_260", "PageToken_260");
  verifyCallDoesNotExist(260, 260, "To_260", "From_260", 260, "Status_260", "StartTime_260", "StartTime<_260", "StartTime>_260", "EndTime_260", "EndTime<_260", "EndTime>_260", "PageSize_260", "Page_260", "PageToken_260");
});

// Story: crud:Call:nondet:1:2
bp.registerBThread("crud:Call:nondet:1:2", function () {
  let AccountSid = 261;
  let Sid = 261;
  let To = "To_261";
  let From = "From_261";
  let ParentCallSid = 261;
  let Status = "Status_261";
  let StartTime = "StartTime_261";
  let StartTime< = "StartTime<_261";
  let StartTime> = "StartTime>_261";
  let EndTime = "EndTime_261";
  let EndTime< = "EndTime<_261";
  let EndTime> = "EndTime>_261";
  let PageSize = "PageSize_261";
  let Page = "Page_261";
  let PageToken = "PageToken_261";
  createCall(261, 261, "To_261", "From_261", 261, "Status_261", "StartTime_261", "StartTime<_261", "StartTime>_261", "EndTime_261", "EndTime<_261", "EndTime>_261", "PageSize_261", "Page_261", "PageToken_261");
  tryToAddExistingCall(261, 261, "To_261", "From_261", 261, "Status_261", "StartTime_261", "StartTime<_261", "StartTime>_261", "EndTime_261", "EndTime<_261", "EndTime>_261", "PageSize_261", "Page_261", "PageToken_261");
  updateCall(261, 261, "To_261", "From_261", 261, "Status_261", "StartTime_261", "StartTime<_261", "StartTime>_261", "EndTime_261", "EndTime<_261", "EndTime>_261", "PageSize_261", "Page_261", "PageToken_261");
  verifyCallExists(261, 261, "To_261", "From_261", 261, "Status_261", "StartTime_261", "StartTime<_261", "StartTime>_261", "EndTime_261", "EndTime<_261", "EndTime>_261", "PageSize_261", "Page_261", "PageToken_261");
  deleteCall(261, 261, "To_261", "From_261", 261, "Status_261", "StartTime_261", "StartTime<_261", "StartTime>_261", "EndTime_261", "EndTime<_261", "EndTime>_261", "PageSize_261", "Page_261", "PageToken_261");
  tryToDeleteANonExistingCall(261, 261, "To_261", "From_261", 261, "Status_261", "StartTime_261", "StartTime<_261", "StartTime>_261", "EndTime_261", "EndTime<_261", "EndTime>_261", "PageSize_261", "Page_261", "PageToken_261");
  verifyCallDoesNotExist(261, 261, "To_261", "From_261", 261, "Status_261", "StartTime_261", "StartTime<_261", "StartTime>_261", "EndTime_261", "EndTime<_261", "EndTime>_261", "PageSize_261", "Page_261", "PageToken_261");
});

// Story: crud:Call:nondet:negative:dup-add
bp.registerBThread("crud:Call:nondet:negative:dup-add", function () {
  let AccountSid = 266;
  let Sid = 266;
  let To = "To_266";
  let From = "From_266";
  let ParentCallSid = 266;
  let Status = "Status_266";
  let StartTime = "StartTime_266";
  let StartTime< = "StartTime<_266";
  let StartTime> = "StartTime>_266";
  let EndTime = "EndTime_266";
  let EndTime< = "EndTime<_266";
  let EndTime> = "EndTime>_266";
  let PageSize = "PageSize_266";
  let Page = "Page_266";
  let PageToken = "PageToken_266";
  createCall(266, 266, "To_266", "From_266", 266, "Status_266", "StartTime_266", "StartTime<_266", "StartTime>_266", "EndTime_266", "EndTime<_266", "EndTime>_266", "PageSize_266", "Page_266", "PageToken_266");
  verifyCallExists(266, 266, "To_266", "From_266", 266, "Status_266", "StartTime_266", "StartTime<_266", "StartTime>_266", "EndTime_266", "EndTime<_266", "EndTime>_266", "PageSize_266", "Page_266", "PageToken_266");
  tryToAddExistingCall(266, 266, "To_266", "From_266", 266, "Status_266", "StartTime_266", "StartTime<_266", "StartTime>_266", "EndTime_266", "EndTime<_266", "EndTime>_266", "PageSize_266", "Page_266", "PageToken_266");
  verifyCallExists(266, 266, "To_266", "From_266", 266, "Status_266", "StartTime_266", "StartTime<_266", "StartTime>_266", "EndTime_266", "EndTime<_266", "EndTime>_266", "PageSize_266", "Page_266", "PageToken_266");
});

// Story: crud:Call:nondet:existing:update
bp.registerBThread("crud:Call:nondet:existing:update", function () {
  let ev = waitForAnyCallAdded();
  let args = Object.values(ev);
  block(matchDeletedCall.apply(null, args), function () {
    verifyCallExists.apply(null, args);
    updateCall.apply(null, args);
    verifyCallExists.apply(null, args);
  });
});

// Story: monitor:Call:add
bp.registerBThread("monitor:Call:add", function () {
  while (true) {
    let ev = waitForAnyCallAdded();
    let args = Object.values(ev);
    block(matchDeletedCall.apply(null, args), function () {
      verifyCallExists.apply(null, args);
    });
  }
});

// Story: crud:CallNotification:read_only
bp.registerBThread("crud:CallNotification:read_only", function () {
  let AccountSid = 280;
  let CallSid = 280;
  let Sid = 280;
  verifyCallNotificationExists(280, 280, 280);
});

// Story: crud:CallRecording:nondet:1:1
bp.registerBThread("crud:CallRecording:nondet:1:1", function () {
  let AccountSid = 290;
  let CallSid = 290;
  let Sid = 290;
  let DateCreated = "DateCreated_290";
  let DateCreated< = "DateCreated<_290";
  let DateCreated> = "DateCreated>_290";
  let PageSize = "PageSize_290";
  let Page = "Page_290";
  let PageToken = "PageToken_290";
  createCallRecording(290, 290, 290, "DateCreated_290", "DateCreated<_290", "DateCreated>_290", "PageSize_290", "Page_290", "PageToken_290");
  tryToAddExistingCallRecording(290, 290, 290, "DateCreated_290", "DateCreated<_290", "DateCreated>_290", "PageSize_290", "Page_290", "PageToken_290");
  verifyCallRecordingExists(290, 290, 290, "DateCreated_290", "DateCreated<_290", "DateCreated>_290", "PageSize_290", "Page_290", "PageToken_290");
  updateCallRecording(290, 290, 290, "DateCreated_290", "DateCreated<_290", "DateCreated>_290", "PageSize_290", "Page_290", "PageToken_290");
  deleteCallRecording(290, 290, 290, "DateCreated_290", "DateCreated<_290", "DateCreated>_290", "PageSize_290", "Page_290", "PageToken_290");
  tryToDeleteANonExistingCallRecording(290, 290, 290, "DateCreated_290", "DateCreated<_290", "DateCreated>_290", "PageSize_290", "Page_290", "PageToken_290");
  verifyCallRecordingDoesNotExist(290, 290, 290, "DateCreated_290", "DateCreated<_290", "DateCreated>_290", "PageSize_290", "Page_290", "PageToken_290");
});

// Story: crud:CallRecording:nondet:1:2
bp.registerBThread("crud:CallRecording:nondet:1:2", function () {
  let AccountSid = 291;
  let CallSid = 291;
  let Sid = 291;
  let DateCreated = "DateCreated_291";
  let DateCreated< = "DateCreated<_291";
  let DateCreated> = "DateCreated>_291";
  let PageSize = "PageSize_291";
  let Page = "Page_291";
  let PageToken = "PageToken_291";
  createCallRecording(291, 291, 291, "DateCreated_291", "DateCreated<_291", "DateCreated>_291", "PageSize_291", "Page_291", "PageToken_291");
  tryToAddExistingCallRecording(291, 291, 291, "DateCreated_291", "DateCreated<_291", "DateCreated>_291", "PageSize_291", "Page_291", "PageToken_291");
  updateCallRecording(291, 291, 291, "DateCreated_291", "DateCreated<_291", "DateCreated>_291", "PageSize_291", "Page_291", "PageToken_291");
  verifyCallRecordingExists(291, 291, 291, "DateCreated_291", "DateCreated<_291", "DateCreated>_291", "PageSize_291", "Page_291", "PageToken_291");
  deleteCallRecording(291, 291, 291, "DateCreated_291", "DateCreated<_291", "DateCreated>_291", "PageSize_291", "Page_291", "PageToken_291");
  tryToDeleteANonExistingCallRecording(291, 291, 291, "DateCreated_291", "DateCreated<_291", "DateCreated>_291", "PageSize_291", "Page_291", "PageToken_291");
  verifyCallRecordingDoesNotExist(291, 291, 291, "DateCreated_291", "DateCreated<_291", "DateCreated>_291", "PageSize_291", "Page_291", "PageToken_291");
});

// Story: crud:CallRecording:nondet:negative:dup-add
bp.registerBThread("crud:CallRecording:nondet:negative:dup-add", function () {
  let AccountSid = 296;
  let CallSid = 296;
  let Sid = 296;
  let DateCreated = "DateCreated_296";
  let DateCreated< = "DateCreated<_296";
  let DateCreated> = "DateCreated>_296";
  let PageSize = "PageSize_296";
  let Page = "Page_296";
  let PageToken = "PageToken_296";
  createCallRecording(296, 296, 296, "DateCreated_296", "DateCreated<_296", "DateCreated>_296", "PageSize_296", "Page_296", "PageToken_296");
  verifyCallRecordingExists(296, 296, 296, "DateCreated_296", "DateCreated<_296", "DateCreated>_296", "PageSize_296", "Page_296", "PageToken_296");
  tryToAddExistingCallRecording(296, 296, 296, "DateCreated_296", "DateCreated<_296", "DateCreated>_296", "PageSize_296", "Page_296", "PageToken_296");
  verifyCallRecordingExists(296, 296, 296, "DateCreated_296", "DateCreated<_296", "DateCreated>_296", "PageSize_296", "Page_296", "PageToken_296");
});

// Story: crud:CallRecording:nondet:existing:update
bp.registerBThread("crud:CallRecording:nondet:existing:update", function () {
  let ev = waitForAnyCallRecordingAdded();
  let args = Object.values(ev);
  block(matchDeletedCallRecording.apply(null, args), function () {
    verifyCallRecordingExists.apply(null, args);
    updateCallRecording.apply(null, args);
    verifyCallRecordingExists.apply(null, args);
  });
});

// Story: monitor:CallRecording:add
bp.registerBThread("monitor:CallRecording:add", function () {
  while (true) {
    let ev = waitForAnyCallRecordingAdded();
    let args = Object.values(ev);
    block(matchDeletedCallRecording.apply(null, args), function () {
      verifyCallRecordingExists.apply(null, args);
    });
  }
});

// Story: crud:Conference:read_only
bp.registerBThread("crud:Conference:read_only", function () {
  let AccountSid = 300;
  let Sid = 300;
  let FriendlyName = "FriendlyName_300";
  let Status = "Status_300";
  let DateCreated = "DateCreated_300";
  let DateCreated< = "DateCreated<_300";
  let DateCreated> = "DateCreated>_300";
  let DateUpdated = "DateUpdated_300";
  let DateUpdated< = "DateUpdated<_300";
  let DateUpdated> = "DateUpdated>_300";
  let PageSize = "PageSize_300";
  let Page = "Page_300";
  let PageToken = "PageToken_300";
  verifyConferenceExists(300, 300, "FriendlyName_300", "Status_300", "DateCreated_300", "DateCreated<_300", "DateCreated>_300", "DateUpdated_300", "DateUpdated<_300", "DateUpdated>_300", "PageSize_300", "Page_300", "PageToken_300");
});

// Story: crud:ConferenceRecording:nondet:1:1
bp.registerBThread("crud:ConferenceRecording:nondet:1:1", function () {
  let AccountSid = 310;
  let ConferenceSid = 310;
  let Sid = 310;
  let Status = "Status_310";
  let PauseBehavior = "PauseBehavior_310";
  listConferenceRecordings(310, 310, 310, "Status_310", "PauseBehavior_310");
  tryToAddExistingConferenceRecording(310, 310, 310, "Status_310", "PauseBehavior_310");
  verifyConferenceRecordingExists(310, 310, 310, "Status_310", "PauseBehavior_310");
  updateConferenceRecording(310, 310, 310, "Status_310", "PauseBehavior_310");
  deleteConferenceRecording(310, 310, 310, "Status_310", "PauseBehavior_310");
  tryToDeleteANonExistingConferenceRecording(310, 310, 310, "Status_310", "PauseBehavior_310");
  verifyConferenceRecordingDoesNotExist(310, 310, 310, "Status_310", "PauseBehavior_310");
});

// Story: crud:ConferenceRecording:nondet:1:2
bp.registerBThread("crud:ConferenceRecording:nondet:1:2", function () {
  let AccountSid = 311;
  let ConferenceSid = 311;
  let Sid = 311;
  let Status = "Status_311";
  let PauseBehavior = "PauseBehavior_311";
  listConferenceRecordings(311, 311, 311, "Status_311", "PauseBehavior_311");
  tryToAddExistingConferenceRecording(311, 311, 311, "Status_311", "PauseBehavior_311");
  updateConferenceRecording(311, 311, 311, "Status_311", "PauseBehavior_311");
  verifyConferenceRecordingExists(311, 311, 311, "Status_311", "PauseBehavior_311");
  deleteConferenceRecording(311, 311, 311, "Status_311", "PauseBehavior_311");
  tryToDeleteANonExistingConferenceRecording(311, 311, 311, "Status_311", "PauseBehavior_311");
  verifyConferenceRecordingDoesNotExist(311, 311, 311, "Status_311", "PauseBehavior_311");
});

// Story: crud:ConferenceRecording:nondet:negative:dup-add
bp.registerBThread("crud:ConferenceRecording:nondet:negative:dup-add", function () {
  let AccountSid = 316;
  let ConferenceSid = 316;
  let Sid = 316;
  let Status = "Status_316";
  let PauseBehavior = "PauseBehavior_316";
  listConferenceRecordings(316, 316, 316, "Status_316", "PauseBehavior_316");
  verifyConferenceRecordingExists(316, 316, 316, "Status_316", "PauseBehavior_316");
  tryToAddExistingConferenceRecording(316, 316, 316, "Status_316", "PauseBehavior_316");
  verifyConferenceRecordingExists(316, 316, 316, "Status_316", "PauseBehavior_316");
});

// Story: crud:ConferenceRecording:nondet:existing:update
bp.registerBThread("crud:ConferenceRecording:nondet:existing:update", function () {
  let ev = waitForAnyConferenceRecordingAdded();
  let args = Object.values(ev);
  block(matchDeletedConferenceRecording.apply(null, args), function () {
    verifyConferenceRecordingExists.apply(null, args);
    updateConferenceRecording.apply(null, args);
    verifyConferenceRecordingExists.apply(null, args);
  });
});

// Story: monitor:ConferenceRecording:add
bp.registerBThread("monitor:ConferenceRecording:add", function () {
  while (true) {
    let ev = waitForAnyConferenceRecordingAdded();
    let args = Object.values(ev);
    block(matchDeletedConferenceRecording.apply(null, args), function () {
      verifyConferenceRecordingExists.apply(null, args);
    });
  }
});

// Story: crud:ConnectApp:read_only
bp.registerBThread("crud:ConnectApp:read_only", function () {
  let AccountSid = 320;
  let Sid = 320;
  let PageSize = "PageSize_320";
  let Page = "Page_320";
  let PageToken = "PageToken_320";
  verifyConnectAppExists(320, 320, "PageSize_320", "Page_320", "PageToken_320");
});

// Story: crud:IncomingPhoneNumber:nondet:1:1
bp.registerBThread("crud:IncomingPhoneNumber:nondet:1:1", function () {
  let AccountSid = 340;
  let Sid = 340;
  let Beta = "Beta_340";
  let FriendlyName = "FriendlyName_340";
  let PhoneNumber = "PhoneNumber_340";
  let Origin = "Origin_340";
  let PageSize = "PageSize_340";
  let Page = "Page_340";
  let PageToken = "PageToken_340";
  createIncomingPhoneNumber(340, 340, "Beta_340", "FriendlyName_340", "PhoneNumber_340", "Origin_340", "PageSize_340", "Page_340", "PageToken_340");
  tryToAddExistingIncomingPhoneNumber(340, 340, "Beta_340", "FriendlyName_340", "PhoneNumber_340", "Origin_340", "PageSize_340", "Page_340", "PageToken_340");
  verifyIncomingPhoneNumberExists(340, 340, "Beta_340", "FriendlyName_340", "PhoneNumber_340", "Origin_340", "PageSize_340", "Page_340", "PageToken_340");
  updateIncomingPhoneNumber(340, 340, "Beta_340", "FriendlyName_340", "PhoneNumber_340", "Origin_340", "PageSize_340", "Page_340", "PageToken_340");
  deleteIncomingPhoneNumber(340, 340, "Beta_340", "FriendlyName_340", "PhoneNumber_340", "Origin_340", "PageSize_340", "Page_340", "PageToken_340");
  tryToDeleteANonExistingIncomingPhoneNumber(340, 340, "Beta_340", "FriendlyName_340", "PhoneNumber_340", "Origin_340", "PageSize_340", "Page_340", "PageToken_340");
  verifyIncomingPhoneNumberDoesNotExist(340, 340, "Beta_340", "FriendlyName_340", "PhoneNumber_340", "Origin_340", "PageSize_340", "Page_340", "PageToken_340");
});

// Story: crud:IncomingPhoneNumber:nondet:1:2
bp.registerBThread("crud:IncomingPhoneNumber:nondet:1:2", function () {
  let AccountSid = 341;
  let Sid = 341;
  let Beta = "Beta_341";
  let FriendlyName = "FriendlyName_341";
  let PhoneNumber = "PhoneNumber_341";
  let Origin = "Origin_341";
  let PageSize = "PageSize_341";
  let Page = "Page_341";
  let PageToken = "PageToken_341";
  createIncomingPhoneNumber(341, 341, "Beta_341", "FriendlyName_341", "PhoneNumber_341", "Origin_341", "PageSize_341", "Page_341", "PageToken_341");
  tryToAddExistingIncomingPhoneNumber(341, 341, "Beta_341", "FriendlyName_341", "PhoneNumber_341", "Origin_341", "PageSize_341", "Page_341", "PageToken_341");
  updateIncomingPhoneNumber(341, 341, "Beta_341", "FriendlyName_341", "PhoneNumber_341", "Origin_341", "PageSize_341", "Page_341", "PageToken_341");
  verifyIncomingPhoneNumberExists(341, 341, "Beta_341", "FriendlyName_341", "PhoneNumber_341", "Origin_341", "PageSize_341", "Page_341", "PageToken_341");
  deleteIncomingPhoneNumber(341, 341, "Beta_341", "FriendlyName_341", "PhoneNumber_341", "Origin_341", "PageSize_341", "Page_341", "PageToken_341");
  tryToDeleteANonExistingIncomingPhoneNumber(341, 341, "Beta_341", "FriendlyName_341", "PhoneNumber_341", "Origin_341", "PageSize_341", "Page_341", "PageToken_341");
  verifyIncomingPhoneNumberDoesNotExist(341, 341, "Beta_341", "FriendlyName_341", "PhoneNumber_341", "Origin_341", "PageSize_341", "Page_341", "PageToken_341");
});

// Story: crud:IncomingPhoneNumber:nondet:negative:dup-add
bp.registerBThread("crud:IncomingPhoneNumber:nondet:negative:dup-add", function () {
  let AccountSid = 346;
  let Sid = 346;
  let Beta = "Beta_346";
  let FriendlyName = "FriendlyName_346";
  let PhoneNumber = "PhoneNumber_346";
  let Origin = "Origin_346";
  let PageSize = "PageSize_346";
  let Page = "Page_346";
  let PageToken = "PageToken_346";
  createIncomingPhoneNumber(346, 346, "Beta_346", "FriendlyName_346", "PhoneNumber_346", "Origin_346", "PageSize_346", "Page_346", "PageToken_346");
  verifyIncomingPhoneNumberExists(346, 346, "Beta_346", "FriendlyName_346", "PhoneNumber_346", "Origin_346", "PageSize_346", "Page_346", "PageToken_346");
  tryToAddExistingIncomingPhoneNumber(346, 346, "Beta_346", "FriendlyName_346", "PhoneNumber_346", "Origin_346", "PageSize_346", "Page_346", "PageToken_346");
  verifyIncomingPhoneNumberExists(346, 346, "Beta_346", "FriendlyName_346", "PhoneNumber_346", "Origin_346", "PageSize_346", "Page_346", "PageToken_346");
});

// Story: crud:IncomingPhoneNumber:nondet:existing:update
bp.registerBThread("crud:IncomingPhoneNumber:nondet:existing:update", function () {
  let ev = waitForAnyIncomingPhoneNumberAdded();
  let args = Object.values(ev);
  block(matchDeletedIncomingPhoneNumber.apply(null, args), function () {
    verifyIncomingPhoneNumberExists.apply(null, args);
    updateIncomingPhoneNumber.apply(null, args);
    verifyIncomingPhoneNumberExists.apply(null, args);
  });
});

// Story: monitor:IncomingPhoneNumber:add
bp.registerBThread("monitor:IncomingPhoneNumber:add", function () {
  while (true) {
    let ev = waitForAnyIncomingPhoneNumberAdded();
    let args = Object.values(ev);
    block(matchDeletedIncomingPhoneNumber.apply(null, args), function () {
      verifyIncomingPhoneNumberExists.apply(null, args);
    });
  }
});

// Story: crud:AssignedAddOn:read_only
bp.registerBThread("crud:AssignedAddOn:read_only", function () {
  let AccountSid = 350;
  let ResourceSid = 350;
  let Sid = 350;
  verifyAssignedAddOnExists(350, 350, 350);
});

// Story: crud:Extension:read_only
bp.registerBThread("crud:Extension:read_only", function () {
  let AccountSid = 360;
  let ResourceSid = 360;
  let AssignedAddOnSid = 360;
  let Sid = 360;
  verifyExtensionExists(360, 360, 360, 360);
});

// Story: crud:Key:read_only
bp.registerBThread("crud:Key:read_only", function () {
  let AccountSid = 370;
  let Sid = 370;
  verifyKeyExists(370, 370);
});

// Story: crud:MessageMedia:read_only
bp.registerBThread("crud:MessageMedia:read_only", function () {
  let AccountSid = 380;
  let MessageSid = 380;
  let Sid = 380;
  verifyMessageMediaExists(380, 380, 380);
});

// Story: crud:QueueMember:read_only
bp.registerBThread("crud:QueueMember:read_only", function () {
  let AccountSid = 390;
  let QueueSid = 390;
  let CallSid = 390;
  verifyQueueMemberExists(390, 390, 390);
});

// Story: crud:Message:nondet:1:1
bp.registerBThread("crud:Message:nondet:1:1", function () {
  let AccountSid = 400;
  let Sid = 400;
  let To = "To_400";
  let From = "From_400";
  let DateSent = "DateSent_400";
  let DateSent< = "DateSent<_400";
  let DateSent> = "DateSent>_400";
  let PageSize = "PageSize_400";
  let Page = "Page_400";
  let PageToken = "PageToken_400";
  createMessage(400, 400, "To_400", "From_400", "DateSent_400", "DateSent<_400", "DateSent>_400", "PageSize_400", "Page_400", "PageToken_400");
  tryToAddExistingMessage(400, 400, "To_400", "From_400", "DateSent_400", "DateSent<_400", "DateSent>_400", "PageSize_400", "Page_400", "PageToken_400");
  verifyMessageExists(400, 400, "To_400", "From_400", "DateSent_400", "DateSent<_400", "DateSent>_400", "PageSize_400", "Page_400", "PageToken_400");
  updateMessage(400, 400, "To_400", "From_400", "DateSent_400", "DateSent<_400", "DateSent>_400", "PageSize_400", "Page_400", "PageToken_400");
  deleteMessage(400, 400, "To_400", "From_400", "DateSent_400", "DateSent<_400", "DateSent>_400", "PageSize_400", "Page_400", "PageToken_400");
  tryToDeleteANonExistingMessage(400, 400, "To_400", "From_400", "DateSent_400", "DateSent<_400", "DateSent>_400", "PageSize_400", "Page_400", "PageToken_400");
  verifyMessageDoesNotExist(400, 400, "To_400", "From_400", "DateSent_400", "DateSent<_400", "DateSent>_400", "PageSize_400", "Page_400", "PageToken_400");
});

// Story: crud:Message:nondet:1:2
bp.registerBThread("crud:Message:nondet:1:2", function () {
  let AccountSid = 401;
  let Sid = 401;
  let To = "To_401";
  let From = "From_401";
  let DateSent = "DateSent_401";
  let DateSent< = "DateSent<_401";
  let DateSent> = "DateSent>_401";
  let PageSize = "PageSize_401";
  let Page = "Page_401";
  let PageToken = "PageToken_401";
  createMessage(401, 401, "To_401", "From_401", "DateSent_401", "DateSent<_401", "DateSent>_401", "PageSize_401", "Page_401", "PageToken_401");
  tryToAddExistingMessage(401, 401, "To_401", "From_401", "DateSent_401", "DateSent<_401", "DateSent>_401", "PageSize_401", "Page_401", "PageToken_401");
  updateMessage(401, 401, "To_401", "From_401", "DateSent_401", "DateSent<_401", "DateSent>_401", "PageSize_401", "Page_401", "PageToken_401");
  verifyMessageExists(401, 401, "To_401", "From_401", "DateSent_401", "DateSent<_401", "DateSent>_401", "PageSize_401", "Page_401", "PageToken_401");
  deleteMessage(401, 401, "To_401", "From_401", "DateSent_401", "DateSent<_401", "DateSent>_401", "PageSize_401", "Page_401", "PageToken_401");
  tryToDeleteANonExistingMessage(401, 401, "To_401", "From_401", "DateSent_401", "DateSent<_401", "DateSent>_401", "PageSize_401", "Page_401", "PageToken_401");
  verifyMessageDoesNotExist(401, 401, "To_401", "From_401", "DateSent_401", "DateSent<_401", "DateSent>_401", "PageSize_401", "Page_401", "PageToken_401");
});

// Story: crud:Message:nondet:negative:dup-add
bp.registerBThread("crud:Message:nondet:negative:dup-add", function () {
  let AccountSid = 406;
  let Sid = 406;
  let To = "To_406";
  let From = "From_406";
  let DateSent = "DateSent_406";
  let DateSent< = "DateSent<_406";
  let DateSent> = "DateSent>_406";
  let PageSize = "PageSize_406";
  let Page = "Page_406";
  let PageToken = "PageToken_406";
  createMessage(406, 406, "To_406", "From_406", "DateSent_406", "DateSent<_406", "DateSent>_406", "PageSize_406", "Page_406", "PageToken_406");
  verifyMessageExists(406, 406, "To_406", "From_406", "DateSent_406", "DateSent<_406", "DateSent>_406", "PageSize_406", "Page_406", "PageToken_406");
  tryToAddExistingMessage(406, 406, "To_406", "From_406", "DateSent_406", "DateSent<_406", "DateSent>_406", "PageSize_406", "Page_406", "PageToken_406");
  verifyMessageExists(406, 406, "To_406", "From_406", "DateSent_406", "DateSent<_406", "DateSent>_406", "PageSize_406", "Page_406", "PageToken_406");
});

// Story: crud:Message:nondet:existing:update
bp.registerBThread("crud:Message:nondet:existing:update", function () {
  let ev = waitForAnyMessageAdded();
  let args = Object.values(ev);
  block(matchDeletedMessage.apply(null, args), function () {
    verifyMessageExists.apply(null, args);
    updateMessage.apply(null, args);
    verifyMessageExists.apply(null, args);
  });
});

// Story: monitor:Message:add
bp.registerBThread("monitor:Message:add", function () {
  while (true) {
    let ev = waitForAnyMessageAdded();
    let args = Object.values(ev);
    block(matchDeletedMessage.apply(null, args), function () {
      verifyMessageExists.apply(null, args);
    });
  }
});

// Story: crud:SigningKey:read_only
bp.registerBThread("crud:SigningKey:read_only", function () {
  let AccountSid = 420;
  let Sid = 420;
  let FriendlyName = "FriendlyName_420";
  verifySigningKeyExists(420, 420, "FriendlyName_420");
});

// Story: crud:Notification:read_only
bp.registerBThread("crud:Notification:read_only", function () {
  let AccountSid = 430;
  let Sid = 430;
  let Log = "Log_430";
  let MessageDate = "MessageDate_430";
  let MessageDate< = "MessageDate<_430";
  let MessageDate> = "MessageDate>_430";
  let PageSize = "PageSize_430";
  let Page = "Page_430";
  let PageToken = "PageToken_430";
  verifyNotificationExists(430, 430, "Log_430", "MessageDate_430", "MessageDate<_430", "MessageDate>_430", "PageSize_430", "Page_430", "PageToken_430");
});

// Story: crud:OutgoingCallerId:read_only
bp.registerBThread("crud:OutgoingCallerId:read_only", function () {
  let AccountSid = 440;
  let Sid = 440;
  let FriendlyName = "FriendlyName_440";
  verifyOutgoingCallerIdExists(440, 440, "FriendlyName_440");
});

// Story: crud:ConferenceParticipant:read_only
bp.registerBThread("crud:ConferenceParticipant:read_only", function () {
  let AccountSid = 450;
  let ConferenceSid = 450;
  let CallSid = 450;
  verifyConferenceParticipantExists(450, 450, 450);
});

// Story: crud:CallPayment:read_only
bp.registerBThread("crud:CallPayment:read_only", function () {
  let AccountSid = 460;
  let CallSid = 460;
  let Sid = 460;
  verifyCallPaymentExists(460, 460, 460);
});

// Story: crud:Queue:nondet:1:1
bp.registerBThread("crud:Queue:nondet:1:1", function () {
  let AccountSid = 470;
  let Sid = 470;
  createQueue(470, 470);
  tryToAddExistingQueue(470, 470);
  verifyQueueExists(470, 470);
  updateQueue(470, 470);
  deleteQueue(470, 470);
  tryToDeleteANonExistingQueue(470, 470);
  verifyQueueDoesNotExist(470, 470);
});

// Story: crud:Queue:nondet:1:2
bp.registerBThread("crud:Queue:nondet:1:2", function () {
  let AccountSid = 471;
  let Sid = 471;
  createQueue(471, 471);
  tryToAddExistingQueue(471, 471);
  updateQueue(471, 471);
  verifyQueueExists(471, 471);
  deleteQueue(471, 471);
  tryToDeleteANonExistingQueue(471, 471);
  verifyQueueDoesNotExist(471, 471);
});

// Story: crud:Queue:nondet:negative:dup-add
bp.registerBThread("crud:Queue:nondet:negative:dup-add", function () {
  let AccountSid = 476;
  let Sid = 476;
  createQueue(476, 476);
  verifyQueueExists(476, 476);
  tryToAddExistingQueue(476, 476);
  verifyQueueExists(476, 476);
});

// Story: crud:Queue:nondet:existing:update
bp.registerBThread("crud:Queue:nondet:existing:update", function () {
  let ev = waitForAnyQueueAdded();
  let args = Object.values(ev);
  block(matchDeletedQueue.apply(null, args), function () {
    verifyQueueExists.apply(null, args);
    updateQueue.apply(null, args);
    verifyQueueExists.apply(null, args);
  });
});

// Story: monitor:Queue:add
bp.registerBThread("monitor:Queue:add", function () {
  while (true) {
    let ev = waitForAnyQueueAdded();
    let args = Object.values(ev);
    block(matchDeletedQueue.apply(null, args), function () {
      verifyQueueExists.apply(null, args);
    });
  }
});

// Story: crud:CallTranscription:read_only
bp.registerBThread("crud:CallTranscription:read_only", function () {
  let AccountSid = 480;
  let CallSid = 480;
  let Sid = 480;
  verifyCallTranscriptionExists(480, 480, 480);
});

// Story: crud:Recording:read_only
bp.registerBThread("crud:Recording:read_only", function () {
  let AccountSid = 490;
  let Sid = 490;
  verifyRecordingExists(490, 490);
});

// Story: crud:AddOnResult:read_only
bp.registerBThread("crud:AddOnResult:read_only", function () {
  let AccountSid = 500;
  let ReferenceSid = 500;
  let Sid = 500;
  verifyAddOnResultExists(500, 500, 500);
});

// Story: crud:Payload:read_only
bp.registerBThread("crud:Payload:read_only", function () {
  let AccountSid = 510;
  let ReferenceSid = 510;
  let AddOnResultSid = 510;
  let Sid = 510;
  verifyPayloadExists(510, 510, 510, 510);
});

// Story: crud:PayloadData:read_only
bp.registerBThread("crud:PayloadData:read_only", function () {
  let AccountSid = 520;
  let ReferenceSid = 520;
  let AddOnResultSid = 520;
  let PayloadSid = 520;
  verifyPayloadDataExists(520, 520, 520, 520);
});

// Story: crud:RecordingTranscription:read_only
bp.registerBThread("crud:RecordingTranscription:read_only", function () {
  let AccountSid = 530;
  let RecordingSid = 530;
  let Sid = 530;
  let PageSize = "PageSize_530";
  let Page = "Page_530";
  let PageToken = "PageToken_530";
  verifyRecordingTranscriptionExists(530, 530, 530, "PageSize_530", "Page_530", "PageToken_530");
});

// Story: crud:ShortCode:read_only
bp.registerBThread("crud:ShortCode:read_only", function () {
  let AccountSid = 540;
  let Sid = 540;
  let FriendlyName = "FriendlyName_540";
  let ShortCode = "ShortCode_540";
  let PageSize = "PageSize_540";
  let Page = "Page_540";
  let PageToken = "PageToken_540";
  verifyShortCodeExists(540, 540, "FriendlyName_540", "ShortCode_540", "PageSize_540", "Page_540", "PageToken_540");
});

// Story: crud:SIP:read_only
bp.registerBThread("crud:SIP:read_only", function () {
  let AccountSid = 550;
  verifySIPExists(550);
});

// Story: crud:SIPDomainAuth:read_only
bp.registerBThread("crud:SIPDomainAuth:read_only", function () {
  let AccountSid = 560;
  let DomainSid = 560;
  verifySIPDomainAuthExists(560, 560);
});

// Story: crud:CredentialListMapping:nondet:1:1
bp.registerBThread("crud:CredentialListMapping:nondet:1:1", function () {
  let AccountSid = 580;
  let DomainSid = 580;
  let Sid = 580;
  let PageSize = "PageSize_580";
  let Page = "Page_580";
  let PageToken = "PageToken_580";
  createCredentialListMapping(580, 580, 580, "PageSize_580", "Page_580", "PageToken_580");
  tryToAddExistingCredentialListMapping(580, 580, 580, "PageSize_580", "Page_580", "PageToken_580");
  verifyCredentialListMappingExists(580, 580, 580, "PageSize_580", "Page_580", "PageToken_580");
  deleteCredentialListMapping(580, 580, 580, "PageSize_580", "Page_580", "PageToken_580");
  tryToDeleteANonExistingCredentialListMapping(580, 580, 580, "PageSize_580", "Page_580", "PageToken_580");
  verifyCredentialListMappingDoesNotExist(580, 580, 580, "PageSize_580", "Page_580", "PageToken_580");
});

// Story: crud:CredentialListMapping:nondet:1:2
bp.registerBThread("crud:CredentialListMapping:nondet:1:2", function () {
  let AccountSid = 581;
  let DomainSid = 581;
  let Sid = 581;
  let PageSize = "PageSize_581";
  let Page = "Page_581";
  let PageToken = "PageToken_581";
  createCredentialListMapping(581, 581, 581, "PageSize_581", "Page_581", "PageToken_581");
  tryToAddExistingCredentialListMapping(581, 581, 581, "PageSize_581", "Page_581", "PageToken_581");
  verifyCredentialListMappingExists(581, 581, 581, "PageSize_581", "Page_581", "PageToken_581");
  deleteCredentialListMapping(581, 581, 581, "PageSize_581", "Page_581", "PageToken_581");
  tryToDeleteANonExistingCredentialListMapping(581, 581, 581, "PageSize_581", "Page_581", "PageToken_581");
  verifyCredentialListMappingDoesNotExist(581, 581, 581, "PageSize_581", "Page_581", "PageToken_581");
});

// Story: crud:CredentialListMapping:nondet:negative:dup-add
bp.registerBThread("crud:CredentialListMapping:nondet:negative:dup-add", function () {
  let AccountSid = 586;
  let DomainSid = 586;
  let Sid = 586;
  let PageSize = "PageSize_586";
  let Page = "Page_586";
  let PageToken = "PageToken_586";
  createCredentialListMapping(586, 586, 586, "PageSize_586", "Page_586", "PageToken_586");
  verifyCredentialListMappingExists(586, 586, 586, "PageSize_586", "Page_586", "PageToken_586");
  tryToAddExistingCredentialListMapping(586, 586, 586, "PageSize_586", "Page_586", "PageToken_586");
  verifyCredentialListMappingExists(586, 586, 586, "PageSize_586", "Page_586", "PageToken_586");
});

// Story: monitor:CredentialListMapping:add
bp.registerBThread("monitor:CredentialListMapping:add", function () {
  while (true) {
    let ev = waitForAnyCredentialListMappingAdded();
    let args = Object.values(ev);
    block(matchDeletedCredentialListMapping.apply(null, args), function () {
      verifyCredentialListMappingExists.apply(null, args);
    });
  }
});

// Story: crud:IpAccessControlListMapping:nondet:1:1
bp.registerBThread("crud:IpAccessControlListMapping:nondet:1:1", function () {
  let AccountSid = 590;
  let DomainSid = 590;
  let Sid = 590;
  let PageSize = "PageSize_590";
  let Page = "Page_590";
  let PageToken = "PageToken_590";
  createIpAccessControlListMapping(590, 590, 590, "PageSize_590", "Page_590", "PageToken_590");
  tryToAddExistingIpAccessControlListMapping(590, 590, 590, "PageSize_590", "Page_590", "PageToken_590");
  verifyIpAccessControlListMappingExists(590, 590, 590, "PageSize_590", "Page_590", "PageToken_590");
  deleteIpAccessControlListMapping(590, 590, 590, "PageSize_590", "Page_590", "PageToken_590");
  tryToDeleteANonExistingIpAccessControlListMapping(590, 590, 590, "PageSize_590", "Page_590", "PageToken_590");
  verifyIpAccessControlListMappingDoesNotExist(590, 590, 590, "PageSize_590", "Page_590", "PageToken_590");
});

// Story: crud:IpAccessControlListMapping:nondet:1:2
bp.registerBThread("crud:IpAccessControlListMapping:nondet:1:2", function () {
  let AccountSid = 591;
  let DomainSid = 591;
  let Sid = 591;
  let PageSize = "PageSize_591";
  let Page = "Page_591";
  let PageToken = "PageToken_591";
  createIpAccessControlListMapping(591, 591, 591, "PageSize_591", "Page_591", "PageToken_591");
  tryToAddExistingIpAccessControlListMapping(591, 591, 591, "PageSize_591", "Page_591", "PageToken_591");
  verifyIpAccessControlListMappingExists(591, 591, 591, "PageSize_591", "Page_591", "PageToken_591");
  deleteIpAccessControlListMapping(591, 591, 591, "PageSize_591", "Page_591", "PageToken_591");
  tryToDeleteANonExistingIpAccessControlListMapping(591, 591, 591, "PageSize_591", "Page_591", "PageToken_591");
  verifyIpAccessControlListMappingDoesNotExist(591, 591, 591, "PageSize_591", "Page_591", "PageToken_591");
});

// Story: crud:IpAccessControlListMapping:nondet:negative:dup-add
bp.registerBThread("crud:IpAccessControlListMapping:nondet:negative:dup-add", function () {
  let AccountSid = 596;
  let DomainSid = 596;
  let Sid = 596;
  let PageSize = "PageSize_596";
  let Page = "Page_596";
  let PageToken = "PageToken_596";
  createIpAccessControlListMapping(596, 596, 596, "PageSize_596", "Page_596", "PageToken_596");
  verifyIpAccessControlListMappingExists(596, 596, 596, "PageSize_596", "Page_596", "PageToken_596");
  tryToAddExistingIpAccessControlListMapping(596, 596, 596, "PageSize_596", "Page_596", "PageToken_596");
  verifyIpAccessControlListMappingExists(596, 596, 596, "PageSize_596", "Page_596", "PageToken_596");
});

// Story: monitor:IpAccessControlListMapping:add
bp.registerBThread("monitor:IpAccessControlListMapping:add", function () {
  while (true) {
    let ev = waitForAnyIpAccessControlListMappingAdded();
    let args = Object.values(ev);
    block(matchDeletedIpAccessControlListMapping.apply(null, args), function () {
      verifyIpAccessControlListMappingExists.apply(null, args);
    });
  }
});

// Story: crud:CredentialList:nondet:1:1
bp.registerBThread("crud:CredentialList:nondet:1:1", function () {
  let AccountSid = 610;
  let Sid = 610;
  let FriendlyName = "FriendlyName_610";
  createCredentialList(610, 610, "FriendlyName_610");
  tryToAddExistingCredentialList(610, 610, "FriendlyName_610");
  verifyCredentialListExists(610, 610, "FriendlyName_610");
  updateCredentialList(610, 610, "FriendlyName_610");
  deleteCredentialList(610, 610, "FriendlyName_610");
  tryToDeleteANonExistingCredentialList(610, 610, "FriendlyName_610");
  verifyCredentialListDoesNotExist(610, 610, "FriendlyName_610");
});

// Story: crud:CredentialList:nondet:1:2
bp.registerBThread("crud:CredentialList:nondet:1:2", function () {
  let AccountSid = 611;
  let Sid = 611;
  let FriendlyName = "FriendlyName_611";
  createCredentialList(611, 611, "FriendlyName_611");
  tryToAddExistingCredentialList(611, 611, "FriendlyName_611");
  updateCredentialList(611, 611, "FriendlyName_611");
  verifyCredentialListExists(611, 611, "FriendlyName_611");
  deleteCredentialList(611, 611, "FriendlyName_611");
  tryToDeleteANonExistingCredentialList(611, 611, "FriendlyName_611");
  verifyCredentialListDoesNotExist(611, 611, "FriendlyName_611");
});

// Story: crud:CredentialList:nondet:negative:dup-add
bp.registerBThread("crud:CredentialList:nondet:negative:dup-add", function () {
  let AccountSid = 616;
  let Sid = 616;
  let FriendlyName = "FriendlyName_616";
  createCredentialList(616, 616, "FriendlyName_616");
  verifyCredentialListExists(616, 616, "FriendlyName_616");
  tryToAddExistingCredentialList(616, 616, "FriendlyName_616");
  verifyCredentialListExists(616, 616, "FriendlyName_616");
});

// Story: crud:CredentialList:nondet:existing:update
bp.registerBThread("crud:CredentialList:nondet:existing:update", function () {
  let ev = waitForAnyCredentialListAdded();
  let args = Object.values(ev);
  block(matchDeletedCredentialList.apply(null, args), function () {
    verifyCredentialListExists.apply(null, args);
    updateCredentialList.apply(null, args);
    verifyCredentialListExists.apply(null, args);
  });
});

// Story: monitor:CredentialList:add
bp.registerBThread("monitor:CredentialList:add", function () {
  while (true) {
    let ev = waitForAnyCredentialListAdded();
    let args = Object.values(ev);
    block(matchDeletedCredentialList.apply(null, args), function () {
      verifyCredentialListExists.apply(null, args);
    });
  }
});

// Story: crud:CredentialListEntity:read_only
bp.registerBThread("crud:CredentialListEntity:read_only", function () {
  let AccountSid = 620;
  let Sid = 620;
  verifyCredentialListEntityExists(620, 620);
});

// Story: crud:DomainCredentialListMapping:read_only
bp.registerBThread("crud:DomainCredentialListMapping:read_only", function () {
  let AccountSid = 630;
  let DomainSid = 630;
  let Sid = 630;
  verifyDomainCredentialListMappingExists(630, 630, 630);
});

// Story: crud:SIPDomain:read_only
bp.registerBThread("crud:SIPDomain:read_only", function () {
  let AccountSid = 640;
  let Sid = 640;
  verifySIPDomainExists(640, 640);
});

// Story: crud:IpAccessControlList:read_only
bp.registerBThread("crud:IpAccessControlList:read_only", function () {
  let AccountSid = 650;
  let Sid = 650;
  verifyIpAccessControlListExists(650, 650);
});

// Story: crud:IpAddress:read_only
bp.registerBThread("crud:IpAddress:read_only", function () {
  let AccountSid = 660;
  let IpAccessControlListSid = 660;
  let Sid = 660;
  verifyIpAddressExists(660, 660, 660);
});

// Story: crud:CallSiprec:read_only
bp.registerBThread("crud:CallSiprec:read_only", function () {
  let AccountSid = 670;
  let CallSid = 670;
  let Sid = 670;
  verifyCallSiprecExists(670, 670, 670);
});

// Story: crud:CallStream:read_only
bp.registerBThread("crud:CallStream:read_only", function () {
  let AccountSid = 680;
  let CallSid = 680;
  let Sid = 680;
  verifyCallStreamExists(680, 680, 680);
});

// Story: crud:Transcription:read_only
bp.registerBThread("crud:Transcription:read_only", function () {
  let AccountSid = 700;
  let Sid = 700;
  let CallSid = 700;
  let Status = "Status_700";
  verifyTranscriptionExists(700, 700, 700, "Status_700");
});

// Story: crud:Usage:read_only
bp.registerBThread("crud:Usage:read_only", function () {
  let AccountSid = 710;
  verifyUsageExists(710);
});

// Story: crud:UsageTrigger:read_only
bp.registerBThread("crud:UsageTrigger:read_only", function () {
  let AccountSid = 730;
  let Sid = 730;
  verifyUsageTriggerExists(730, 730);
});

// Story: crud:UserDefinedMessageSubscription:read_only
bp.registerBThread("crud:UserDefinedMessageSubscription:read_only", function () {
  let AccountSid = 750;
  let CallSid = 750;
  let Sid = 750;
  verifyUserDefinedMessageSubscriptionExists(750, 750, 750);
});

// Story: crud:AvailablePhoneNumberCountry:read_only
bp.registerBThread("crud:AvailablePhoneNumberCountry:read_only", function () {
  let AccountSid = 760;
  let CountryCode = "CountryCode_760";
  let PageSize = "PageSize_760";
  let Page = "Page_760";
  let PageToken = "PageToken_760";
  verifyAvailablePhoneNumberCountryExists(760, "CountryCode_760", "PageSize_760", "Page_760", "PageToken_760");
});

// Story: crud:IncomingPhoneNumberAssignedAddOn:nondet:1:1
bp.registerBThread("crud:IncomingPhoneNumberAssignedAddOn:nondet:1:1", function () {
  let AccountSid = 770;
  let ResourceSid = 770;
  let Sid = 770;
  let InstalledAddOnSid = 770;
  createIncomingPhoneNumberAssignedAddOn(770, 770, 770, 770);
  tryToAddExistingIncomingPhoneNumberAssignedAddOn(770, 770, 770, 770);
  verifyIncomingPhoneNumberAssignedAddOnExists(770, 770, 770, 770);
  deleteIncomingPhoneNumberAssignedAddOn(770, 770, 770, 770);
  tryToDeleteANonExistingIncomingPhoneNumberAssignedAddOn(770, 770, 770, 770);
  verifyIncomingPhoneNumberAssignedAddOnDoesNotExist(770, 770, 770, 770);
});

// Story: crud:IncomingPhoneNumberAssignedAddOn:nondet:1:2
bp.registerBThread("crud:IncomingPhoneNumberAssignedAddOn:nondet:1:2", function () {
  let AccountSid = 771;
  let ResourceSid = 771;
  let Sid = 771;
  let InstalledAddOnSid = 771;
  createIncomingPhoneNumberAssignedAddOn(771, 771, 771, 771);
  tryToAddExistingIncomingPhoneNumberAssignedAddOn(771, 771, 771, 771);
  verifyIncomingPhoneNumberAssignedAddOnExists(771, 771, 771, 771);
  deleteIncomingPhoneNumberAssignedAddOn(771, 771, 771, 771);
  tryToDeleteANonExistingIncomingPhoneNumberAssignedAddOn(771, 771, 771, 771);
  verifyIncomingPhoneNumberAssignedAddOnDoesNotExist(771, 771, 771, 771);
});

// Story: crud:IncomingPhoneNumberAssignedAddOn:nondet:negative:dup-add
bp.registerBThread("crud:IncomingPhoneNumberAssignedAddOn:nondet:negative:dup-add", function () {
  let AccountSid = 776;
  let ResourceSid = 776;
  let Sid = 776;
  let InstalledAddOnSid = 776;
  createIncomingPhoneNumberAssignedAddOn(776, 776, 776, 776);
  verifyIncomingPhoneNumberAssignedAddOnExists(776, 776, 776, 776);
  tryToAddExistingIncomingPhoneNumberAssignedAddOn(776, 776, 776, 776);
  verifyIncomingPhoneNumberAssignedAddOnExists(776, 776, 776, 776);
});

// Story: monitor:IncomingPhoneNumberAssignedAddOn:add
bp.registerBThread("monitor:IncomingPhoneNumberAssignedAddOn:add", function () {
  while (true) {
    let ev = waitForAnyIncomingPhoneNumberAssignedAddOnAdded();
    let args = Object.values(ev);
    block(matchDeletedIncomingPhoneNumberAssignedAddOn.apply(null, args), function () {
      verifyIncomingPhoneNumberAssignedAddOnExists.apply(null, args);
    });
  }
});

// Story: crud:AssignedAddOnExtension:read_only
bp.registerBThread("crud:AssignedAddOnExtension:read_only", function () {
  let AccountSid = 780;
  let ResourceSid = 780;
  let AssignedAddOnSid = 780;
  let Sid = 780;
  let PageSize = "PageSize_780";
  let Page = "Page_780";
  let PageToken = "PageToken_780";
  verifyAssignedAddOnExtensionExists(780, 780, 780, 780, "PageSize_780", "Page_780", "PageToken_780");
});

// Story: crud:Member:read_only
bp.registerBThread("crud:Member:read_only", function () {
  let AccountSid = 790;
  let QueueSid = 790;
  let CallSid = 790;
  let Url = "Url_790";
  let Method = "Method_790";
  let PageSize = "PageSize_790";
  let Page = "Page_790";
  let PageToken = "PageToken_790";
  verifyMemberExists(790, 790, 790, "Url_790", "Method_790", "PageSize_790", "Page_790", "PageToken_790");
});

// Story: crud:SigningKeyList:read_only
bp.registerBThread("crud:SigningKeyList:read_only", function () {
  let AccountSid = 800;
  let PageSize = "PageSize_800";
  let Page = "Page_800";
  let PageToken = "PageToken_800";
  verifySigningKeyListExists(800, "PageSize_800", "Page_800", "PageToken_800");
});

// Story: crud:Participant:nondet:1:1
bp.registerBThread("crud:Participant:nondet:1:1", function () {
  let AccountSid = 810;
  let ConferenceSid = 810;
  let CallSid = 810;
  createParticipant(810, 810, 810);
  tryToAddExistingParticipant(810, 810, 810);
  verifyParticipantExists(810, 810, 810);
  updateParticipant(810, 810, 810);
  deleteParticipant(810, 810, 810);
  tryToDeleteANonExistingParticipant(810, 810, 810);
  verifyParticipantDoesNotExist(810, 810, 810);
});

// Story: crud:Participant:nondet:1:2
bp.registerBThread("crud:Participant:nondet:1:2", function () {
  let AccountSid = 811;
  let ConferenceSid = 811;
  let CallSid = 811;
  createParticipant(811, 811, 811);
  tryToAddExistingParticipant(811, 811, 811);
  updateParticipant(811, 811, 811);
  verifyParticipantExists(811, 811, 811);
  deleteParticipant(811, 811, 811);
  tryToDeleteANonExistingParticipant(811, 811, 811);
  verifyParticipantDoesNotExist(811, 811, 811);
});

// Story: crud:Participant:nondet:negative:dup-add
bp.registerBThread("crud:Participant:nondet:negative:dup-add", function () {
  let AccountSid = 816;
  let ConferenceSid = 816;
  let CallSid = 816;
  createParticipant(816, 816, 816);
  verifyParticipantExists(816, 816, 816);
  tryToAddExistingParticipant(816, 816, 816);
  verifyParticipantExists(816, 816, 816);
});

// Story: crud:Participant:nondet:existing:update
bp.registerBThread("crud:Participant:nondet:existing:update", function () {
  let ev = waitForAnyParticipantAdded();
  let args = Object.values(ev);
  block(matchDeletedParticipant.apply(null, args), function () {
    verifyParticipantExists.apply(null, args);
    updateParticipant.apply(null, args);
    verifyParticipantExists.apply(null, args);
  });
});

// Story: monitor:Participant:add
bp.registerBThread("monitor:Participant:add", function () {
  while (true) {
    let ev = waitForAnyParticipantAdded();
    let args = Object.values(ev);
    block(matchDeletedParticipant.apply(null, args), function () {
      verifyParticipantExists.apply(null, args);
    });
  }
});

// Story: crud:RecordingAddOnResult:read_only
bp.registerBThread("crud:RecordingAddOnResult:read_only", function () {
  let AccountSid = 830;
  let ReferenceSid = 830;
  let Sid = 830;
  let PageSize = "PageSize_830";
  let Page = "Page_830";
  let PageToken = "PageToken_830";
  verifyRecordingAddOnResultExists(830, 830, 830, "PageSize_830", "Page_830", "PageToken_830");
});

// Story: crud:RecordingAddOnResultPayload:read_only
bp.registerBThread("crud:RecordingAddOnResultPayload:read_only", function () {
  let AccountSid = 840;
  let ReferenceSid = 840;
  let AddOnResultSid = 840;
  let Sid = 840;
  verifyRecordingAddOnResultPayloadExists(840, 840, 840, 840);
});

// Story: crud:RecordingAddOnResultPayloadList:read_only
bp.registerBThread("crud:RecordingAddOnResultPayloadList:read_only", function () {
  let AccountSid = 850;
  let ReferenceSid = 850;
  let AddOnResultSid = 850;
  let PageSize = "PageSize_850";
  let Page = "Page_850";
  let PageToken = "PageToken_850";
  verifyRecordingAddOnResultPayloadListExists(850, 850, 850, "PageSize_850", "Page_850", "PageToken_850");
});

// Story: crud:SipCredential:nondet:1:1
bp.registerBThread("crud:SipCredential:nondet:1:1", function () {
  let AccountSid = 860;
  let CredentialListSid = 860;
  let Sid = 860;
  createSipCredential(860, 860, 860);
  tryToAddExistingSipCredential(860, 860, 860);
  verifySipCredentialExists(860, 860, 860);
  updateSipCredential(860, 860, 860);
  deleteSipCredential(860, 860, 860);
  tryToDeleteANonExistingSipCredential(860, 860, 860);
  verifySipCredentialDoesNotExist(860, 860, 860);
});

// Story: crud:SipCredential:nondet:1:2
bp.registerBThread("crud:SipCredential:nondet:1:2", function () {
  let AccountSid = 861;
  let CredentialListSid = 861;
  let Sid = 861;
  createSipCredential(861, 861, 861);
  tryToAddExistingSipCredential(861, 861, 861);
  updateSipCredential(861, 861, 861);
  verifySipCredentialExists(861, 861, 861);
  deleteSipCredential(861, 861, 861);
  tryToDeleteANonExistingSipCredential(861, 861, 861);
  verifySipCredentialDoesNotExist(861, 861, 861);
});

// Story: crud:SipCredential:nondet:negative:dup-add
bp.registerBThread("crud:SipCredential:nondet:negative:dup-add", function () {
  let AccountSid = 866;
  let CredentialListSid = 866;
  let Sid = 866;
  createSipCredential(866, 866, 866);
  verifySipCredentialExists(866, 866, 866);
  tryToAddExistingSipCredential(866, 866, 866);
  verifySipCredentialExists(866, 866, 866);
});

// Story: crud:SipCredential:nondet:existing:update
bp.registerBThread("crud:SipCredential:nondet:existing:update", function () {
  let ev = waitForAnySipCredentialAdded();
  let args = Object.values(ev);
  block(matchDeletedSipCredential.apply(null, args), function () {
    verifySipCredentialExists.apply(null, args);
    updateSipCredential.apply(null, args);
    verifySipCredentialExists.apply(null, args);
  });
});

// Story: monitor:SipCredential:add
bp.registerBThread("monitor:SipCredential:add", function () {
  while (true) {
    let ev = waitForAnySipCredentialAdded();
    let args = Object.values(ev);
    block(matchDeletedSipCredential.apply(null, args), function () {
      verifySipCredentialExists.apply(null, args);
    });
  }
});
