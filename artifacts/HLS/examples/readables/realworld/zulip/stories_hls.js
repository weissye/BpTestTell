// HLS (active + passive) – zulip
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("zulip: Seed Streams", function () {
    addStream("ST-001");
    addStream("ST-002");
    addStream("ST-003");
    updateStream("ST-003", { "note": "seeded" });
  });
  
    bthread("zulip: Topic lifecycle", function () {
    addTopic("TO-100");
    updateTopic("TO-100", { "status": "ready" });
    deleteTopic("TO-100");
    verifyTopicDoesNotExist("TO-100");
  });
  
    bthread("zulip: Contention on Message", function () {
    addMessage("ME-200");
    tryAddMessage("ME-200"); // duplicate should be blocked
    updateMessage("ME-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Stream add verification", function () {
    const ev = waitForAnyStreamAdded();
    block(matchDeleteStream(ev.streamId || ev.id || ev.key), function () {
      verifyStreamExists(ev.streamId || ev.id || ev.key);
    });
  });
  
    bthread("Stream update verification", function () {
    const ev = waitForAnyStreamUpdated();
    block(matchDeleteStream(ev.streamId || ev.id || ev.key), function () {
      verifyStreamUpdated(ev.streamId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Stream deletion verification", function () {
    const ev = waitForAnyStreamDeleted();
    block(matchAddStream(ev.streamId || ev.id || ev.key, ANY), function () {
      verifyStreamDoesNotExist(ev.streamId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Stream)", function () {
    const ev = waitForAnyStreamDeleted();
    block(matchUpdateStream(ev.streamId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Topic add verification", function () {
    const ev = waitForAnyTopicAdded();
    block(matchDeleteTopic(ev.topicId || ev.id || ev.key), function () {
      verifyTopicExists(ev.topicId || ev.id || ev.key);
    });
  });
  
    bthread("Topic update verification", function () {
    const ev = waitForAnyTopicUpdated();
    block(matchDeleteTopic(ev.topicId || ev.id || ev.key), function () {
      verifyTopicUpdated(ev.topicId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Topic deletion verification", function () {
    const ev = waitForAnyTopicDeleted();
    block(matchAddTopic(ev.topicId || ev.id || ev.key, ANY), function () {
      verifyTopicDoesNotExist(ev.topicId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Topic)", function () {
    const ev = waitForAnyTopicDeleted();
    block(matchUpdateTopic(ev.topicId || ev.id || ev.key, ANY), function () {
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

} // end if MODE
