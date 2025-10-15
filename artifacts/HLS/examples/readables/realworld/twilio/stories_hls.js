// HLS (active + passive) – twilio
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("twilio: Seed PhoneNumbers", function () {
    addPhoneNumber("PH-001");
    addPhoneNumber("PH-002");
    addPhoneNumber("PH-003");
    updatePhoneNumber("PH-003", { "note": "seeded" });
  });
  
    bthread("twilio: Message lifecycle", function () {
    addMessage("ME-100");
    updateMessage("ME-100", { "status": "ready" });
    deleteMessage("ME-100");
    verifyMessageDoesNotExist("ME-100");
  });
  
    bthread("twilio: Contention on Call", function () {
    addCall("CA-200");
    tryAddCall("CA-200"); // duplicate should be blocked
    updateCall("CA-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("PhoneNumber add verification", function () {
    const ev = waitForAnyPhoneNumberAdded();
    block(matchDeletePhoneNumber(ev.phoneNumberId || ev.id || ev.key), function () {
      verifyPhoneNumberExists(ev.phoneNumberId || ev.id || ev.key);
    });
  });
  
    bthread("PhoneNumber update verification", function () {
    const ev = waitForAnyPhoneNumberUpdated();
    block(matchDeletePhoneNumber(ev.phoneNumberId || ev.id || ev.key), function () {
      verifyPhoneNumberUpdated(ev.phoneNumberId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("PhoneNumber deletion verification", function () {
    const ev = waitForAnyPhoneNumberDeleted();
    block(matchAddPhoneNumber(ev.phoneNumberId || ev.id || ev.key, ANY), function () {
      verifyPhoneNumberDoesNotExist(ev.phoneNumberId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (PhoneNumber)", function () {
    const ev = waitForAnyPhoneNumberDeleted();
    block(matchUpdatePhoneNumber(ev.phoneNumberId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Message add verification", function () {
    const ev = waitForAnyMessageAdded();
    block(matchDeleteMessage(ev.messageId || ev.id || ev.key), function () {
      verifyMessageExists(ev.messageId || ev.id || ev.key);
    });
  });
  
    bthread("Message update verification", function () {
    const ev = waitForAnyMessageUpdated();
    block(matchDeleteMessage(ev.messageId || ev.id || ev.key), function () {
      verifyMessageUpdated(ev.messageId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Message deletion verification", function () {
    const ev = waitForAnyMessageDeleted();
    block(matchAddMessage(ev.messageId || ev.id || ev.key, ANY), function () {
      verifyMessageDoesNotExist(ev.messageId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Message)", function () {
    const ev = waitForAnyMessageDeleted();
    block(matchUpdateMessage(ev.messageId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Call add verification", function () {
    const ev = waitForAnyCallAdded();
    block(matchDeleteCall(ev.callId || ev.id || ev.key), function () {
      verifyCallExists(ev.callId || ev.id || ev.key);
    });
  });
  
    bthread("Call update verification", function () {
    const ev = waitForAnyCallUpdated();
    block(matchDeleteCall(ev.callId || ev.id || ev.key), function () {
      verifyCallUpdated(ev.callId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Call deletion verification", function () {
    const ev = waitForAnyCallDeleted();
    block(matchAddCall(ev.callId || ev.id || ev.key, ANY), function () {
      verifyCallDoesNotExist(ev.callId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Call)", function () {
    const ev = waitForAnyCallDeleted();
    block(matchUpdateCall(ev.callId || ev.id || ev.key, ANY), function () {
    });
  });

} // end if MODE
