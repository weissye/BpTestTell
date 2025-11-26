// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Account:read_only
bthread("crud:Account:read_only", function () {
  let accountSid = 200;
  // Read-only check for Account
  verifyAccountExists(accountSid);
});

// Story: crud:Address:nondet:1:1
bthread("crud:Address:nondet:1:1", function () {
  let accountSid = 210;
  let friendlyName = "friendlyName_210";
  addAddress(210, "friendlyName_210");
  tryToAddExistingAddress(210, "friendlyName_210");
  verifyAddressExists(accountSid);
  updateAddress(accountSid, 210, "friendlyName_210");
  deleteAddress(accountSid);
  tryToDeleteANonExistingAddress(accountSid);
  verifyAddressDoesNotExist(accountSid);
});

// Story: crud:Address:nondet:1:2
bthread("crud:Address:nondet:1:2", function () {
  let accountSid = 211;
  let friendlyName = "friendlyName_211";
  addAddress(211, "friendlyName_211");
  tryToAddExistingAddress(211, "friendlyName_211");
  updateAddress(accountSid, 211, "friendlyName_211");
  verifyAddressExists(accountSid);
  deleteAddress(accountSid);
  tryToDeleteANonExistingAddress(accountSid);
  verifyAddressDoesNotExist(accountSid);
});

// Story: crud:Address:nondet:negative:dup-add
bthread("crud:Address:nondet:negative:dup-add", function () {
  let accountSid = 216;
  let friendlyName = "friendlyName_216";
  addAddress(216, "friendlyName_216");
  verifyAddressExists(accountSid);
  tryToAddExistingAddress(216, "friendlyName_216");
  verifyAddressExists(accountSid);
});

// Story: crud:Address:nondet:existing:update
bthread("crud:Address:nondet:existing:update", function () {
  let ev = waitForAnyAddressAdded();
  let args = Object.values(ev);
  block(matchDeletedAddress.apply(null, args), function () {
    // verifyAddressExists.apply(null, args);
    // updateAddress.apply(null, args);
  });
});

// Story: monitor:Address:add
bthread("monitor:Address:add", function () {
  while (true) {
    let ev = waitForAnyAddressAdded();
    let args = Object.values(ev);
    block(matchDeletedAddress.apply(null, args), function () {
      // verifyAddressExists.apply(null, args);
    });
  }
});

// Story: crud:Application:nondet:1:1
bthread("crud:Application:nondet:1:1", function () {
  let accountSid = 220;
  let friendlyName = "friendlyName_220";
  addApplication(220, "friendlyName_220");
  tryToAddExistingApplication(220, "friendlyName_220");
  verifyApplicationExists(accountSid);
  updateApplication(accountSid, 220, "friendlyName_220");
  deleteApplication(accountSid);
  tryToDeleteANonExistingApplication(accountSid);
  verifyApplicationDoesNotExist(accountSid);
});

// Story: crud:Application:nondet:1:2
bthread("crud:Application:nondet:1:2", function () {
  let accountSid = 221;
  let friendlyName = "friendlyName_221";
  addApplication(221, "friendlyName_221");
  tryToAddExistingApplication(221, "friendlyName_221");
  updateApplication(accountSid, 221, "friendlyName_221");
  verifyApplicationExists(accountSid);
  deleteApplication(accountSid);
  tryToDeleteANonExistingApplication(accountSid);
  verifyApplicationDoesNotExist(accountSid);
});

// Story: crud:Application:nondet:negative:dup-add
bthread("crud:Application:nondet:negative:dup-add", function () {
  let accountSid = 226;
  let friendlyName = "friendlyName_226";
  addApplication(226, "friendlyName_226");
  verifyApplicationExists(accountSid);
  tryToAddExistingApplication(226, "friendlyName_226");
  verifyApplicationExists(accountSid);
});

// Story: crud:Application:nondet:existing:update
bthread("crud:Application:nondet:existing:update", function () {
  let ev = waitForAnyApplicationAdded();
  let args = Object.values(ev);
  block(matchDeletedApplication.apply(null, args), function () {
    // verifyApplicationExists.apply(null, args);
    // updateApplication.apply(null, args);
  });
});

// Story: monitor:Application:add
bthread("monitor:Application:add", function () {
  while (true) {
    let ev = waitForAnyApplicationAdded();
    let args = Object.values(ev);
    block(matchDeletedApplication.apply(null, args), function () {
      // verifyApplicationExists.apply(null, args);
    });
  }
});

// Story: crud:Call:nondet:1:1
bthread("crud:Call:nondet:1:1", function () {
  let accountSid = 230;
  let to = "to_230";
  let from = "from_230";
  addCall(230, "to_230", "from_230");
  tryToAddExistingCall(230, "to_230", "from_230");
  verifyCallExists(accountSid);
  updateCall(accountSid, 230, "to_230", "from_230");
  deleteCall(accountSid);
  tryToDeleteANonExistingCall(accountSid);
  verifyCallDoesNotExist(accountSid);
});

// Story: crud:Call:nondet:1:2
bthread("crud:Call:nondet:1:2", function () {
  let accountSid = 231;
  let to = "to_231";
  let from = "from_231";
  addCall(231, "to_231", "from_231");
  tryToAddExistingCall(231, "to_231", "from_231");
  updateCall(accountSid, 231, "to_231", "from_231");
  verifyCallExists(accountSid);
  deleteCall(accountSid);
  tryToDeleteANonExistingCall(accountSid);
  verifyCallDoesNotExist(accountSid);
});

// Story: crud:Call:nondet:negative:dup-add
bthread("crud:Call:nondet:negative:dup-add", function () {
  let accountSid = 236;
  let to = "to_236";
  let from = "from_236";
  addCall(236, "to_236", "from_236");
  verifyCallExists(accountSid);
  tryToAddExistingCall(236, "to_236", "from_236");
  verifyCallExists(accountSid);
});

// Story: crud:Call:nondet:existing:update
bthread("crud:Call:nondet:existing:update", function () {
  let ev = waitForAnyCallAdded();
  let args = Object.values(ev);
  block(matchDeletedCall.apply(null, args), function () {
    // verifyCallExists.apply(null, args);
    // updateCall.apply(null, args);
  });
});

// Story: monitor:Call:add
bthread("monitor:Call:add", function () {
  while (true) {
    let ev = waitForAnyCallAdded();
    let args = Object.values(ev);
    block(matchDeletedCall.apply(null, args), function () {
      // verifyCallExists.apply(null, args);
    });
  }
});

// Story: crud:Conference:read_only
bthread("crud:Conference:read_only", function () {
  let accountSid = 240;
  let conferenceSid = 240;
  // Read-only check for Conference
  verifyConferenceExists(accountSid);
});

// Story: crud:IncomingPhoneNumber:nondet:1:1
bthread("crud:IncomingPhoneNumber:nondet:1:1", function () {
  let accountSid = 250;
  let phoneNumber = "phoneNumber_250";
  addIncomingPhoneNumber(250, "phoneNumber_250");
  tryToAddExistingIncomingPhoneNumber(250, "phoneNumber_250");
  verifyIncomingPhoneNumberExists(accountSid);
  updateIncomingPhoneNumber(accountSid, 250, "phoneNumber_250");
  deleteIncomingPhoneNumber(accountSid);
  tryToDeleteANonExistingIncomingPhoneNumber(accountSid);
  verifyIncomingPhoneNumberDoesNotExist(accountSid);
});

// Story: crud:IncomingPhoneNumber:nondet:1:2
bthread("crud:IncomingPhoneNumber:nondet:1:2", function () {
  let accountSid = 251;
  let phoneNumber = "phoneNumber_251";
  addIncomingPhoneNumber(251, "phoneNumber_251");
  tryToAddExistingIncomingPhoneNumber(251, "phoneNumber_251");
  updateIncomingPhoneNumber(accountSid, 251, "phoneNumber_251");
  verifyIncomingPhoneNumberExists(accountSid);
  deleteIncomingPhoneNumber(accountSid);
  tryToDeleteANonExistingIncomingPhoneNumber(accountSid);
  verifyIncomingPhoneNumberDoesNotExist(accountSid);
});

// Story: crud:IncomingPhoneNumber:nondet:negative:dup-add
bthread("crud:IncomingPhoneNumber:nondet:negative:dup-add", function () {
  let accountSid = 256;
  let phoneNumber = "phoneNumber_256";
  addIncomingPhoneNumber(256, "phoneNumber_256");
  verifyIncomingPhoneNumberExists(accountSid);
  tryToAddExistingIncomingPhoneNumber(256, "phoneNumber_256");
  verifyIncomingPhoneNumberExists(accountSid);
});

// Story: crud:IncomingPhoneNumber:nondet:existing:update
bthread("crud:IncomingPhoneNumber:nondet:existing:update", function () {
  let ev = waitForAnyIncomingPhoneNumberAdded();
  let args = Object.values(ev);
  block(matchDeletedIncomingPhoneNumber.apply(null, args), function () {
    // verifyIncomingPhoneNumberExists.apply(null, args);
    // updateIncomingPhoneNumber.apply(null, args);
  });
});

// Story: monitor:IncomingPhoneNumber:add
bthread("monitor:IncomingPhoneNumber:add", function () {
  while (true) {
    let ev = waitForAnyIncomingPhoneNumberAdded();
    let args = Object.values(ev);
    block(matchDeletedIncomingPhoneNumber.apply(null, args), function () {
      // verifyIncomingPhoneNumberExists.apply(null, args);
    });
  }
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let accountSid = 260;
  let identity = 260;
  addUser(260, 260);
  tryToAddExistingUser(260, 260);
  verifyUserExists(accountSid);
  updateUser(accountSid, 260, 260);
  deleteUser(accountSid);
  tryToDeleteANonExistingUser(accountSid);
  verifyUserDoesNotExist(accountSid);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let accountSid = 261;
  let identity = 261;
  addUser(261, 261);
  tryToAddExistingUser(261, 261);
  updateUser(accountSid, 261, 261);
  verifyUserExists(accountSid);
  deleteUser(accountSid);
  tryToDeleteANonExistingUser(accountSid);
  verifyUserDoesNotExist(accountSid);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let accountSid = 266;
  let identity = 266;
  addUser(266, 266);
  verifyUserExists(accountSid);
  tryToAddExistingUser(266, 266);
  verifyUserExists(accountSid);
});

// Story: crud:User:nondet:existing:update
bthread("crud:User:nondet:existing:update", function () {
  let ev = waitForAnyUserAdded();
  let args = Object.values(ev);
  block(matchDeletedUser.apply(null, args), function () {
    // verifyUserExists.apply(null, args);
    // updateUser.apply(null, args);
  });
});

// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      // verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let accountSid = 270;
  let url = "url_270";
  addWebhook(270, "url_270");
  tryToAddExistingWebhook(270, "url_270");
  verifyWebhookExists(accountSid);
  updateWebhook(accountSid, 270, "url_270");
  deleteWebhook(accountSid);
  tryToDeleteANonExistingWebhook(accountSid);
  verifyWebhookDoesNotExist(accountSid);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let accountSid = 271;
  let url = "url_271";
  addWebhook(271, "url_271");
  tryToAddExistingWebhook(271, "url_271");
  updateWebhook(accountSid, 271, "url_271");
  verifyWebhookExists(accountSid);
  deleteWebhook(accountSid);
  tryToDeleteANonExistingWebhook(accountSid);
  verifyWebhookDoesNotExist(accountSid);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let accountSid = 276;
  let url = "url_276";
  addWebhook(276, "url_276");
  verifyWebhookExists(accountSid);
  tryToAddExistingWebhook(276, "url_276");
  verifyWebhookExists(accountSid);
});

// Story: crud:Webhook:nondet:existing:update
bthread("crud:Webhook:nondet:existing:update", function () {
  let ev = waitForAnyWebhookAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhook.apply(null, args), function () {
    // verifyWebhookExists.apply(null, args);
    // updateWebhook.apply(null, args);
  });
});

// Story: monitor:Webhook:add
bthread("monitor:Webhook:add", function () {
  while (true) {
    let ev = waitForAnyWebhookAdded();
    let args = Object.values(ev);
    block(matchDeletedWebhook.apply(null, args), function () {
      // verifyWebhookExists.apply(null, args);
    });
  }
});
