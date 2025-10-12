//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 * This approximates the "Library SUT" interface style.
 */

const svc = new RESTSession("http://" + host + ":" + port, "provengo basedclient", {
  headers: { "Content-Type": "application/json" },
});

// Common helpers
function matchesDescription(text) {
  return bp.EventSet("desc-eq", function(e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === text);
  });
}
function matchesDescriptionRegex(rx) {
  return bp.EventSet("desc-rx", function(e) {
    if (!e || !e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return rx.test(e.data.parameters.description);
  });
}

/** === Call Operations === */

// CREATE
function addCall(id) {
  svc.post("/calls", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a call with id " + id + "" }
    });
}

// DELETE
function deleteCall(id) {
  svc.delete("/calls/" + id, {
    parameters: { description: "Delete a call with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCall(id) {
  svc.delete("/calls/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a call with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCall(id) {
  svc.post("/calls", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a call with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a call with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCall(id) {
  svc.put("/calls/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a call" }
    });
}

// GET one
function getCall(id) {
  svc.get("/calls/" + id, {
    parameters: { description: "Get a call" }
  });
}

// LIST all
function listCalls() {
  svc.get("/calls", {
    parameters: { description: "List calls" }
  });
}

// Verify exists (by list)
function verifyCallExists(id) {
  svc.get("/calls", {
    callback: function (response) {
      call = JSON.parse(response.body);
      for (let i = 0; i < call.length; i++) {
        if (call[i].id === id) {
          return pvg.success("Call exists");
        }
      }
      return pvg.fail("Expected a call to exist but it does not");
    },
    parameters: { description: "Verify call with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCallDoesNotExist(id) {
  svc.get("/calls", {
    callback: function (response) {
      call = JSON.parse(response.body);
      for (let i = 0; i < call.length; i++) {
        if (call[i].id === id) {
          return pvg.fail("Expected a call to not exist but it does");
        }
      }
      return pvg.success("Call does not exist");
    },
    parameters: { description: "Verify call with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCall() {
  return bp.EventSet("any-add-call", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a call");
  });
}
function matchAddCall(id) {
  return bp.EventSet("add-call", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a call with id " + id + "";
  });
}
function matchAnyDeleteCall() {
  return bp.EventSet("any-del-call", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a call");
  });
}
function matchDeleteCall(id) {
  return bp.EventSet("del-call", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a call with id " + id + "";
  });
}

// Wait helpers
function waitForAnyCallAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ call\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ call\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCallAdded(id) {
  waitFor(matchAddCall(id));
}
function waitForCallDeleted(id) {
  waitFor(matchDeleteCall(id));
}
function waitForAnyCallDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ call\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ call\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Channel_folder Operations === */

// CREATE
function addChannel_folder(channel_folder_id) {
  svc.post("/channel_folders", {
      body: JSON.stringify({ channel_folder_id: channel_folder_id }),
      parameters: { description: "Add a channel_folder with channel_folder_id " + channel_folder_id + "" }
    });
}

// DELETE
function deleteChannel_folder(channel_folder_id) {
  svc.delete("/channel_folders/" + channel_folder_id, {
    parameters: { description: "Delete a channel_folder with channel_folder_id " + channel_folder_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingChannel_folder(channel_folder_id) {
  svc.delete("/channel_folders/" + channel_folder_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a channel_folder with channel_folder_id " + channel_folder_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingChannel_folder(channel_folder_id) {
  svc.post("/channel_folders", {
      body: JSON.stringify({ channel_folder_id: channel_folder_id }),
      parameters: { description: "Add a channel_folder with channel_folder_id " + channel_folder_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a channel_folder with channel_folder_id " + channel_folder_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateChannel_folder(channel_folder_id) {
  svc.put("/channel_folders/" + channel_folder_id, {
      body: JSON.stringify({ channel_folder_id: channel_folder_id }),
      parameters: { description: "Update a channel_folder" }
    });
}

// GET one
function getChannel_folder(channel_folder_id) {
  svc.get("/channel_folders/" + channel_folder_id, {
    parameters: { description: "Get a channel_folder" }
  });
}

// LIST all
function listChannel_folders() {
  svc.get("/channel_folders", {
    parameters: { description: "List channel_folders" }
  });
}

// Verify exists (by list)
function verifyChannel_folderExists(channel_folder_id) {
  svc.get("/channel_folders", {
    callback: function (response) {
      channel_folder = JSON.parse(response.body);
      for (let i = 0; i < channel_folder.length; i++) {
        if (channel_folder[i].channel_folder_id === channel_folder_id) {
          return pvg.success("Channel_folder exists");
        }
      }
      return pvg.fail("Expected a channel_folder to exist but it does not");
    },
    parameters: { description: "Verify channel_folder with channel_folder_id " + channel_folder_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyChannel_folderDoesNotExist(channel_folder_id) {
  svc.get("/channel_folders", {
    callback: function (response) {
      channel_folder = JSON.parse(response.body);
      for (let i = 0; i < channel_folder.length; i++) {
        if (channel_folder[i].channel_folder_id === channel_folder_id) {
          return pvg.fail("Expected a channel_folder to not exist but it does");
        }
      }
      return pvg.success("Channel_folder does not exist");
    },
    parameters: { description: "Verify channel_folder with channel_folder_id " + channel_folder_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddChannel_folder() {
  return bp.EventSet("any-add-channel_folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a channel_folder");
  });
}
function matchAddChannel_folder(channel_folder_id) {
  return bp.EventSet("add-channel_folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a channel_folder with channel_folder_id " + channel_folder_id + "";
  });
}
function matchAnyDeleteChannel_folder() {
  return bp.EventSet("any-del-channel_folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a channel_folder");
  });
}
function matchDeleteChannel_folder(channel_folder_id) {
  return bp.EventSet("del-channel_folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a channel_folder with channel_folder_id " + channel_folder_id + "";
  });
}

// Wait helpers
function waitForAnyChannel_folderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ channel_folder\ with\ channel_folder_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ channel_folder\ with\ channel_folder_id\ (.+)$/);
    return { channel_folder_id: parseInt(m[1]) };
}
function waitForChannel_folderAdded(channel_folder_id) {
  waitFor(matchAddChannel_folder(channel_folder_id));
}
function waitForChannel_folderDeleted(channel_folder_id) {
  waitFor(matchDeleteChannel_folder(channel_folder_id));
}
function waitForAnyChannel_folderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ channel_folder\ with\ channel_folder_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ channel_folder\ with\ channel_folder_id\ (.+)$/);
    return { channel_folder_id: parseInt(m[1]) };
}


/** === Channel Operations === */

// CREATE
function addChannel(id) {
  svc.post("/channels", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a channel with id " + id + "" }
    });
}

// DELETE
function deleteChannel(id) {
  svc.delete("/channels/" + id, {
    parameters: { description: "Delete a channel with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingChannel(id) {
  svc.delete("/channels/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a channel with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingChannel(id) {
  svc.post("/channels", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a channel with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a channel with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateChannel(id) {
  svc.put("/channels/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a channel" }
    });
}

// GET one
function getChannel(id) {
  svc.get("/channels/" + id, {
    parameters: { description: "Get a channel" }
  });
}

// LIST all
function listChannels() {
  svc.get("/channels", {
    parameters: { description: "List channels" }
  });
}

// Verify exists (by list)
function verifyChannelExists(id) {
  svc.get("/channels", {
    callback: function (response) {
      channel = JSON.parse(response.body);
      for (let i = 0; i < channel.length; i++) {
        if (channel[i].id === id) {
          return pvg.success("Channel exists");
        }
      }
      return pvg.fail("Expected a channel to exist but it does not");
    },
    parameters: { description: "Verify channel with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyChannelDoesNotExist(id) {
  svc.get("/channels", {
    callback: function (response) {
      channel = JSON.parse(response.body);
      for (let i = 0; i < channel.length; i++) {
        if (channel[i].id === id) {
          return pvg.fail("Expected a channel to not exist but it does");
        }
      }
      return pvg.success("Channel does not exist");
    },
    parameters: { description: "Verify channel with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddChannel() {
  return bp.EventSet("any-add-channel", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a channel");
  });
}
function matchAddChannel(id) {
  return bp.EventSet("add-channel", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a channel with id " + id + "";
  });
}
function matchAnyDeleteChannel() {
  return bp.EventSet("any-del-channel", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a channel");
  });
}
function matchDeleteChannel(id) {
  return bp.EventSet("del-channel", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a channel with id " + id + "";
  });
}

// Wait helpers
function waitForAnyChannelAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ channel\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ channel\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForChannelAdded(id) {
  waitFor(matchAddChannel(id));
}
function waitForChannelDeleted(id) {
  waitFor(matchDeleteChannel(id));
}
function waitForAnyChannelDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ channel\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ channel\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Default_stream Operations === */

// CREATE
function addDefault_stream(id) {
  svc.post("/default_streams", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a default_stream with id " + id + "" }
    });
}

// DELETE
function deleteDefault_stream(id) {
  svc.delete("/default_streams/" + id, {
    parameters: { description: "Delete a default_stream with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingDefault_stream(id) {
  svc.delete("/default_streams/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a default_stream with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingDefault_stream(id) {
  svc.post("/default_streams", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a default_stream with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a default_stream with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateDefault_stream(id) {
  svc.put("/default_streams/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a default_stream" }
    });
}

// GET one
function getDefault_stream(id) {
  svc.get("/default_streams/" + id, {
    parameters: { description: "Get a default_stream" }
  });
}

// LIST all
function listDefault_streams() {
  svc.get("/default_streams", {
    parameters: { description: "List default_streams" }
  });
}

// Verify exists (by list)
function verifyDefault_streamExists(id) {
  svc.get("/default_streams", {
    callback: function (response) {
      default_stream = JSON.parse(response.body);
      for (let i = 0; i < default_stream.length; i++) {
        if (default_stream[i].id === id) {
          return pvg.success("Default_stream exists");
        }
      }
      return pvg.fail("Expected a default_stream to exist but it does not");
    },
    parameters: { description: "Verify default_stream with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyDefault_streamDoesNotExist(id) {
  svc.get("/default_streams", {
    callback: function (response) {
      default_stream = JSON.parse(response.body);
      for (let i = 0; i < default_stream.length; i++) {
        if (default_stream[i].id === id) {
          return pvg.fail("Expected a default_stream to not exist but it does");
        }
      }
      return pvg.success("Default_stream does not exist");
    },
    parameters: { description: "Verify default_stream with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddDefault_stream() {
  return bp.EventSet("any-add-default_stream", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a default_stream");
  });
}
function matchAddDefault_stream(id) {
  return bp.EventSet("add-default_stream", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a default_stream with id " + id + "";
  });
}
function matchAnyDeleteDefault_stream() {
  return bp.EventSet("any-del-default_stream", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a default_stream");
  });
}
function matchDeleteDefault_stream(id) {
  return bp.EventSet("del-default_stream", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a default_stream with id " + id + "";
  });
}

// Wait helpers
function waitForAnyDefault_streamAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ default_stream\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ default_stream\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForDefault_streamAdded(id) {
  waitFor(matchAddDefault_stream(id));
}
function waitForDefault_streamDeleted(id) {
  waitFor(matchDeleteDefault_stream(id));
}
function waitForAnyDefault_streamDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ default_stream\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ default_stream\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Dev_fetch_api_key Operations === */

// CREATE
function addDev_fetch_api_key(id) {
  svc.post("/dev_fetch_api_key", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a dev_fetch_api_key with id " + id + "" }
    });
}

// DELETE
function deleteDev_fetch_api_key(id) {
  svc.delete("/dev_fetch_api_key/" + id, {
    parameters: { description: "Delete a dev_fetch_api_key with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingDev_fetch_api_key(id) {
  svc.delete("/dev_fetch_api_key/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a dev_fetch_api_key with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingDev_fetch_api_key(id) {
  svc.post("/dev_fetch_api_key", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a dev_fetch_api_key with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a dev_fetch_api_key with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateDev_fetch_api_key(id) {
  svc.put("/dev_fetch_api_key/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a dev_fetch_api_key" }
    });
}

// GET one
function getDev_fetch_api_key(id) {
  svc.get("/dev_fetch_api_key/" + id, {
    parameters: { description: "Get a dev_fetch_api_key" }
  });
}

// LIST all
function listDev_fetch_api_key() {
  svc.get("/dev_fetch_api_key", {
    parameters: { description: "List dev_fetch_api_key" }
  });
}

// Verify exists (by list)
function verifyDev_fetch_api_keyExists(id) {
  svc.get("/dev_fetch_api_key", {
    callback: function (response) {
      dev_fetch_api_key = JSON.parse(response.body);
      for (let i = 0; i < dev_fetch_api_key.length; i++) {
        if (dev_fetch_api_key[i].id === id) {
          return pvg.success("Dev_fetch_api_key exists");
        }
      }
      return pvg.fail("Expected a dev_fetch_api_key to exist but it does not");
    },
    parameters: { description: "Verify dev_fetch_api_key with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyDev_fetch_api_keyDoesNotExist(id) {
  svc.get("/dev_fetch_api_key", {
    callback: function (response) {
      dev_fetch_api_key = JSON.parse(response.body);
      for (let i = 0; i < dev_fetch_api_key.length; i++) {
        if (dev_fetch_api_key[i].id === id) {
          return pvg.fail("Expected a dev_fetch_api_key to not exist but it does");
        }
      }
      return pvg.success("Dev_fetch_api_key does not exist");
    },
    parameters: { description: "Verify dev_fetch_api_key with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddDev_fetch_api_key() {
  return bp.EventSet("any-add-dev_fetch_api_key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a dev_fetch_api_key");
  });
}
function matchAddDev_fetch_api_key(id) {
  return bp.EventSet("add-dev_fetch_api_key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a dev_fetch_api_key with id " + id + "";
  });
}
function matchAnyDeleteDev_fetch_api_key() {
  return bp.EventSet("any-del-dev_fetch_api_key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a dev_fetch_api_key");
  });
}
function matchDeleteDev_fetch_api_key(id) {
  return bp.EventSet("del-dev_fetch_api_key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a dev_fetch_api_key with id " + id + "";
  });
}

// Wait helpers
function waitForAnyDev_fetch_api_keyAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ dev_fetch_api_key\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ dev_fetch_api_key\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForDev_fetch_api_keyAdded(id) {
  waitFor(matchAddDev_fetch_api_key(id));
}
function waitForDev_fetch_api_keyDeleted(id) {
  waitFor(matchDeleteDev_fetch_api_key(id));
}
function waitForAnyDev_fetch_api_keyDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ dev_fetch_api_key\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ dev_fetch_api_key\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Draft Operations === */

// CREATE
function addDraft(id) {
  svc.post("/drafts", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a draft with id " + id + "" }
    });
}

// DELETE
function deleteDraft(id) {
  svc.delete("/drafts/" + id, {
    parameters: { description: "Delete a draft with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingDraft(id) {
  svc.delete("/drafts/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a draft with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingDraft(id) {
  svc.post("/drafts", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a draft with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a draft with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateDraft(id) {
  svc.put("/drafts/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a draft" }
    });
}

// GET one
function getDraft(id) {
  svc.get("/drafts/" + id, {
    parameters: { description: "Get a draft" }
  });
}

// LIST all
function listDrafts() {
  svc.get("/drafts", {
    parameters: { description: "List drafts" }
  });
}

// Verify exists (by list)
function verifyDraftExists(id) {
  svc.get("/drafts", {
    callback: function (response) {
      draft = JSON.parse(response.body);
      for (let i = 0; i < draft.length; i++) {
        if (draft[i].id === id) {
          return pvg.success("Draft exists");
        }
      }
      return pvg.fail("Expected a draft to exist but it does not");
    },
    parameters: { description: "Verify draft with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyDraftDoesNotExist(id) {
  svc.get("/drafts", {
    callback: function (response) {
      draft = JSON.parse(response.body);
      for (let i = 0; i < draft.length; i++) {
        if (draft[i].id === id) {
          return pvg.fail("Expected a draft to not exist but it does");
        }
      }
      return pvg.success("Draft does not exist");
    },
    parameters: { description: "Verify draft with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddDraft() {
  return bp.EventSet("any-add-draft", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a draft");
  });
}
function matchAddDraft(id) {
  return bp.EventSet("add-draft", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a draft with id " + id + "";
  });
}
function matchAnyDeleteDraft() {
  return bp.EventSet("any-del-draft", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a draft");
  });
}
function matchDeleteDraft(id) {
  return bp.EventSet("del-draft", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a draft with id " + id + "";
  });
}

// Wait helpers
function waitForAnyDraftAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ draft\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ draft\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForDraftAdded(id) {
  waitFor(matchAddDraft(id));
}
function waitForDraftDeleted(id) {
  waitFor(matchDeleteDraft(id));
}
function waitForAnyDraftDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ draft\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ draft\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Event Operations === */

// CREATE
function addEvent(id) {
  svc.post("/events", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a event with id " + id + "" }
    });
}

// DELETE
function deleteEvent(id) {
  svc.delete("/events/" + id, {
    parameters: { description: "Delete a event with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEvent(id) {
  svc.delete("/events/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a event with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEvent(id) {
  svc.post("/events", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a event with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a event with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateEvent(id) {
  svc.put("/events/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a event" }
    });
}

// GET one
function getEvent(id) {
  svc.get("/events/" + id, {
    parameters: { description: "Get a event" }
  });
}

// LIST all
function listEvents() {
  svc.get("/events", {
    parameters: { description: "List events" }
  });
}

// Verify exists (by list)
function verifyEventExists(id) {
  svc.get("/events", {
    callback: function (response) {
      event = JSON.parse(response.body);
      for (let i = 0; i < event.length; i++) {
        if (event[i].id === id) {
          return pvg.success("Event exists");
        }
      }
      return pvg.fail("Expected a event to exist but it does not");
    },
    parameters: { description: "Verify event with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyEventDoesNotExist(id) {
  svc.get("/events", {
    callback: function (response) {
      event = JSON.parse(response.body);
      for (let i = 0; i < event.length; i++) {
        if (event[i].id === id) {
          return pvg.fail("Expected a event to not exist but it does");
        }
      }
      return pvg.success("Event does not exist");
    },
    parameters: { description: "Verify event with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddEvent() {
  return bp.EventSet("any-add-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a event");
  });
}
function matchAddEvent(id) {
  return bp.EventSet("add-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a event with id " + id + "";
  });
}
function matchAnyDeleteEvent() {
  return bp.EventSet("any-del-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a event");
  });
}
function matchDeleteEvent(id) {
  return bp.EventSet("del-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a event with id " + id + "";
  });
}

// Wait helpers
function waitForAnyEventAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ event\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ event\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForEventAdded(id) {
  waitFor(matchAddEvent(id));
}
function waitForEventDeleted(id) {
  waitFor(matchDeleteEvent(id));
}
function waitForAnyEventDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ event\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ event\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Export Operations === */

// CREATE
function addExport(id) {
  svc.post("/export", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a export with id " + id + "" }
    });
}

// DELETE
function deleteExport(id) {
  svc.delete("/export/" + id, {
    parameters: { description: "Delete a export with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingExport(id) {
  svc.delete("/export/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a export with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingExport(id) {
  svc.post("/export", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a export with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a export with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateExport(id) {
  svc.put("/export/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a export" }
    });
}

// GET one
function getExport(id) {
  svc.get("/export/" + id, {
    parameters: { description: "Get a export" }
  });
}

// LIST all
function listExport() {
  svc.get("/export", {
    parameters: { description: "List export" }
  });
}

// Verify exists (by list)
function verifyExportExists(id) {
  svc.get("/export", {
    callback: function (response) {
      export = JSON.parse(response.body);
      for (let i = 0; i < export.length; i++) {
        if (export[i].id === id) {
          return pvg.success("Export exists");
        }
      }
      return pvg.fail("Expected a export to exist but it does not");
    },
    parameters: { description: "Verify export with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyExportDoesNotExist(id) {
  svc.get("/export", {
    callback: function (response) {
      export = JSON.parse(response.body);
      for (let i = 0; i < export.length; i++) {
        if (export[i].id === id) {
          return pvg.fail("Expected a export to not exist but it does");
        }
      }
      return pvg.success("Export does not exist");
    },
    parameters: { description: "Verify export with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddExport() {
  return bp.EventSet("any-add-export", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a export");
  });
}
function matchAddExport(id) {
  return bp.EventSet("add-export", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a export with id " + id + "";
  });
}
function matchAnyDeleteExport() {
  return bp.EventSet("any-del-export", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a export");
  });
}
function matchDeleteExport(id) {
  return bp.EventSet("del-export", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a export with id " + id + "";
  });
}

// Wait helpers
function waitForAnyExportAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ export\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ export\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForExportAdded(id) {
  waitFor(matchAddExport(id));
}
function waitForExportDeleted(id) {
  waitFor(matchDeleteExport(id));
}
function waitForAnyExportDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ export\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ export\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Fetch_api_key Operations === */

// CREATE
function addFetch_api_key(id) {
  svc.post("/fetch_api_key", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a fetch_api_key with id " + id + "" }
    });
}

// DELETE
function deleteFetch_api_key(id) {
  svc.delete("/fetch_api_key/" + id, {
    parameters: { description: "Delete a fetch_api_key with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingFetch_api_key(id) {
  svc.delete("/fetch_api_key/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a fetch_api_key with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingFetch_api_key(id) {
  svc.post("/fetch_api_key", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a fetch_api_key with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a fetch_api_key with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateFetch_api_key(id) {
  svc.put("/fetch_api_key/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a fetch_api_key" }
    });
}

// GET one
function getFetch_api_key(id) {
  svc.get("/fetch_api_key/" + id, {
    parameters: { description: "Get a fetch_api_key" }
  });
}

// LIST all
function listFetch_api_key() {
  svc.get("/fetch_api_key", {
    parameters: { description: "List fetch_api_key" }
  });
}

// Verify exists (by list)
function verifyFetch_api_keyExists(id) {
  svc.get("/fetch_api_key", {
    callback: function (response) {
      fetch_api_key = JSON.parse(response.body);
      for (let i = 0; i < fetch_api_key.length; i++) {
        if (fetch_api_key[i].id === id) {
          return pvg.success("Fetch_api_key exists");
        }
      }
      return pvg.fail("Expected a fetch_api_key to exist but it does not");
    },
    parameters: { description: "Verify fetch_api_key with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyFetch_api_keyDoesNotExist(id) {
  svc.get("/fetch_api_key", {
    callback: function (response) {
      fetch_api_key = JSON.parse(response.body);
      for (let i = 0; i < fetch_api_key.length; i++) {
        if (fetch_api_key[i].id === id) {
          return pvg.fail("Expected a fetch_api_key to not exist but it does");
        }
      }
      return pvg.success("Fetch_api_key does not exist");
    },
    parameters: { description: "Verify fetch_api_key with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddFetch_api_key() {
  return bp.EventSet("any-add-fetch_api_key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a fetch_api_key");
  });
}
function matchAddFetch_api_key(id) {
  return bp.EventSet("add-fetch_api_key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a fetch_api_key with id " + id + "";
  });
}
function matchAnyDeleteFetch_api_key() {
  return bp.EventSet("any-del-fetch_api_key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a fetch_api_key");
  });
}
function matchDeleteFetch_api_key(id) {
  return bp.EventSet("del-fetch_api_key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a fetch_api_key with id " + id + "";
  });
}

// Wait helpers
function waitForAnyFetch_api_keyAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ fetch_api_key\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ fetch_api_key\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFetch_api_keyAdded(id) {
  waitFor(matchAddFetch_api_key(id));
}
function waitForFetch_api_keyDeleted(id) {
  waitFor(matchDeleteFetch_api_key(id));
}
function waitForAnyFetch_api_keyDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ fetch_api_key\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ fetch_api_key\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Get_stream_id Operations === */

// CREATE
function addGet_stream_id(id) {
  svc.post("/get_stream_id", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a get_stream_id with id " + id + "" }
    });
}

// DELETE
function deleteGet_stream_id(id) {
  svc.delete("/get_stream_id/" + id, {
    parameters: { description: "Delete a get_stream_id with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGet_stream_id(id) {
  svc.delete("/get_stream_id/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a get_stream_id with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGet_stream_id(id) {
  svc.post("/get_stream_id", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a get_stream_id with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a get_stream_id with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateGet_stream_id(id) {
  svc.put("/get_stream_id/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a get_stream_id" }
    });
}

// GET one
function getGet_stream_id(id) {
  svc.get("/get_stream_id/" + id, {
    parameters: { description: "Get a get_stream_id" }
  });
}

// LIST all
function listGet_stream_id() {
  svc.get("/get_stream_id", {
    parameters: { description: "List get_stream_id" }
  });
}

// Verify exists (by list)
function verifyGet_stream_idExists(id) {
  svc.get("/get_stream_id", {
    callback: function (response) {
      get_stream_id = JSON.parse(response.body);
      for (let i = 0; i < get_stream_id.length; i++) {
        if (get_stream_id[i].id === id) {
          return pvg.success("Get_stream_id exists");
        }
      }
      return pvg.fail("Expected a get_stream_id to exist but it does not");
    },
    parameters: { description: "Verify get_stream_id with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyGet_stream_idDoesNotExist(id) {
  svc.get("/get_stream_id", {
    callback: function (response) {
      get_stream_id = JSON.parse(response.body);
      for (let i = 0; i < get_stream_id.length; i++) {
        if (get_stream_id[i].id === id) {
          return pvg.fail("Expected a get_stream_id to not exist but it does");
        }
      }
      return pvg.success("Get_stream_id does not exist");
    },
    parameters: { description: "Verify get_stream_id with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddGet_stream_id() {
  return bp.EventSet("any-add-get_stream_id", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a get_stream_id");
  });
}
function matchAddGet_stream_id(id) {
  return bp.EventSet("add-get_stream_id", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a get_stream_id with id " + id + "";
  });
}
function matchAnyDeleteGet_stream_id() {
  return bp.EventSet("any-del-get_stream_id", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a get_stream_id");
  });
}
function matchDeleteGet_stream_id(id) {
  return bp.EventSet("del-get_stream_id", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a get_stream_id with id " + id + "";
  });
}

// Wait helpers
function waitForAnyGet_stream_idAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ get_stream_id\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ get_stream_id\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForGet_stream_idAdded(id) {
  waitFor(matchAddGet_stream_id(id));
}
function waitForGet_stream_idDeleted(id) {
  waitFor(matchDeleteGet_stream_id(id));
}
function waitForAnyGet_stream_idDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ get_stream_id\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ get_stream_id\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Invite Operations === */

// CREATE
function addInvite(invite_id) {
  svc.post("/invites", {
      body: JSON.stringify({ invite_id: invite_id }),
      parameters: { description: "Add a invite with invite_id " + invite_id + "" }
    });
}

// DELETE
function deleteInvite(invite_id) {
  svc.delete("/invites/" + invite_id, {
    parameters: { description: "Delete a invite with invite_id " + invite_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingInvite(invite_id) {
  svc.delete("/invites/" + invite_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a invite with invite_id " + invite_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingInvite(invite_id) {
  svc.post("/invites", {
      body: JSON.stringify({ invite_id: invite_id }),
      parameters: { description: "Add a invite with invite_id " + invite_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a invite with invite_id " + invite_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateInvite(invite_id) {
  svc.put("/invites/" + invite_id, {
      body: JSON.stringify({ invite_id: invite_id }),
      parameters: { description: "Update a invite" }
    });
}

// GET one
function getInvite(invite_id) {
  svc.get("/invites/" + invite_id, {
    parameters: { description: "Get a invite" }
  });
}

// LIST all
function listInvites() {
  svc.get("/invites", {
    parameters: { description: "List invites" }
  });
}

// Verify exists (by list)
function verifyInviteExists(invite_id) {
  svc.get("/invites", {
    callback: function (response) {
      invite = JSON.parse(response.body);
      for (let i = 0; i < invite.length; i++) {
        if (invite[i].invite_id === invite_id) {
          return pvg.success("Invite exists");
        }
      }
      return pvg.fail("Expected a invite to exist but it does not");
    },
    parameters: { description: "Verify invite with invite_id " + invite_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyInviteDoesNotExist(invite_id) {
  svc.get("/invites", {
    callback: function (response) {
      invite = JSON.parse(response.body);
      for (let i = 0; i < invite.length; i++) {
        if (invite[i].invite_id === invite_id) {
          return pvg.fail("Expected a invite to not exist but it does");
        }
      }
      return pvg.success("Invite does not exist");
    },
    parameters: { description: "Verify invite with invite_id " + invite_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddInvite() {
  return bp.EventSet("any-add-invite", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a invite");
  });
}
function matchAddInvite(invite_id) {
  return bp.EventSet("add-invite", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a invite with invite_id " + invite_id + "";
  });
}
function matchAnyDeleteInvite() {
  return bp.EventSet("any-del-invite", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a invite");
  });
}
function matchDeleteInvite(invite_id) {
  return bp.EventSet("del-invite", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a invite with invite_id " + invite_id + "";
  });
}

// Wait helpers
function waitForAnyInviteAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ invite\ with\ invite_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ invite\ with\ invite_id\ (.+)$/);
    return { invite_id: parseInt(m[1]) };
}
function waitForInviteAdded(invite_id) {
  waitFor(matchAddInvite(invite_id));
}
function waitForInviteDeleted(invite_id) {
  waitFor(matchDeleteInvite(invite_id));
}
function waitForAnyInviteDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ invite\ with\ invite_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ invite\ with\ invite_id\ (.+)$/);
    return { invite_id: parseInt(m[1]) };
}


/** === Mark_all_as_read Operations === */

// CREATE
function addMark_all_as_read(id) {
  svc.post("/mark_all_as_read", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a mark_all_as_read with id " + id + "" }
    });
}

// DELETE
function deleteMark_all_as_read(id) {
  svc.delete("/mark_all_as_read/" + id, {
    parameters: { description: "Delete a mark_all_as_read with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMark_all_as_read(id) {
  svc.delete("/mark_all_as_read/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a mark_all_as_read with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMark_all_as_read(id) {
  svc.post("/mark_all_as_read", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a mark_all_as_read with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a mark_all_as_read with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMark_all_as_read(id) {
  svc.put("/mark_all_as_read/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a mark_all_as_read" }
    });
}

// GET one
function getMark_all_as_read(id) {
  svc.get("/mark_all_as_read/" + id, {
    parameters: { description: "Get a mark_all_as_read" }
  });
}

// LIST all
function listMark_all_as_read() {
  svc.get("/mark_all_as_read", {
    parameters: { description: "List mark_all_as_read" }
  });
}

// Verify exists (by list)
function verifyMark_all_as_readExists(id) {
  svc.get("/mark_all_as_read", {
    callback: function (response) {
      mark_all_as_read = JSON.parse(response.body);
      for (let i = 0; i < mark_all_as_read.length; i++) {
        if (mark_all_as_read[i].id === id) {
          return pvg.success("Mark_all_as_read exists");
        }
      }
      return pvg.fail("Expected a mark_all_as_read to exist but it does not");
    },
    parameters: { description: "Verify mark_all_as_read with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMark_all_as_readDoesNotExist(id) {
  svc.get("/mark_all_as_read", {
    callback: function (response) {
      mark_all_as_read = JSON.parse(response.body);
      for (let i = 0; i < mark_all_as_read.length; i++) {
        if (mark_all_as_read[i].id === id) {
          return pvg.fail("Expected a mark_all_as_read to not exist but it does");
        }
      }
      return pvg.success("Mark_all_as_read does not exist");
    },
    parameters: { description: "Verify mark_all_as_read with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMark_all_as_read() {
  return bp.EventSet("any-add-mark_all_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a mark_all_as_read");
  });
}
function matchAddMark_all_as_read(id) {
  return bp.EventSet("add-mark_all_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a mark_all_as_read with id " + id + "";
  });
}
function matchAnyDeleteMark_all_as_read() {
  return bp.EventSet("any-del-mark_all_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a mark_all_as_read");
  });
}
function matchDeleteMark_all_as_read(id) {
  return bp.EventSet("del-mark_all_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a mark_all_as_read with id " + id + "";
  });
}

// Wait helpers
function waitForAnyMark_all_as_readAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ mark_all_as_read\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ mark_all_as_read\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMark_all_as_readAdded(id) {
  waitFor(matchAddMark_all_as_read(id));
}
function waitForMark_all_as_readDeleted(id) {
  waitFor(matchDeleteMark_all_as_read(id));
}
function waitForAnyMark_all_as_readDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ mark_all_as_read\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ mark_all_as_read\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Mark_stream_as_read Operations === */

// CREATE
function addMark_stream_as_read(id) {
  svc.post("/mark_stream_as_read", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a mark_stream_as_read with id " + id + "" }
    });
}

// DELETE
function deleteMark_stream_as_read(id) {
  svc.delete("/mark_stream_as_read/" + id, {
    parameters: { description: "Delete a mark_stream_as_read with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMark_stream_as_read(id) {
  svc.delete("/mark_stream_as_read/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a mark_stream_as_read with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMark_stream_as_read(id) {
  svc.post("/mark_stream_as_read", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a mark_stream_as_read with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a mark_stream_as_read with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMark_stream_as_read(id) {
  svc.put("/mark_stream_as_read/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a mark_stream_as_read" }
    });
}

// GET one
function getMark_stream_as_read(id) {
  svc.get("/mark_stream_as_read/" + id, {
    parameters: { description: "Get a mark_stream_as_read" }
  });
}

// LIST all
function listMark_stream_as_read() {
  svc.get("/mark_stream_as_read", {
    parameters: { description: "List mark_stream_as_read" }
  });
}

// Verify exists (by list)
function verifyMark_stream_as_readExists(id) {
  svc.get("/mark_stream_as_read", {
    callback: function (response) {
      mark_stream_as_read = JSON.parse(response.body);
      for (let i = 0; i < mark_stream_as_read.length; i++) {
        if (mark_stream_as_read[i].id === id) {
          return pvg.success("Mark_stream_as_read exists");
        }
      }
      return pvg.fail("Expected a mark_stream_as_read to exist but it does not");
    },
    parameters: { description: "Verify mark_stream_as_read with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMark_stream_as_readDoesNotExist(id) {
  svc.get("/mark_stream_as_read", {
    callback: function (response) {
      mark_stream_as_read = JSON.parse(response.body);
      for (let i = 0; i < mark_stream_as_read.length; i++) {
        if (mark_stream_as_read[i].id === id) {
          return pvg.fail("Expected a mark_stream_as_read to not exist but it does");
        }
      }
      return pvg.success("Mark_stream_as_read does not exist");
    },
    parameters: { description: "Verify mark_stream_as_read with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMark_stream_as_read() {
  return bp.EventSet("any-add-mark_stream_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a mark_stream_as_read");
  });
}
function matchAddMark_stream_as_read(id) {
  return bp.EventSet("add-mark_stream_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a mark_stream_as_read with id " + id + "";
  });
}
function matchAnyDeleteMark_stream_as_read() {
  return bp.EventSet("any-del-mark_stream_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a mark_stream_as_read");
  });
}
function matchDeleteMark_stream_as_read(id) {
  return bp.EventSet("del-mark_stream_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a mark_stream_as_read with id " + id + "";
  });
}

// Wait helpers
function waitForAnyMark_stream_as_readAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ mark_stream_as_read\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ mark_stream_as_read\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMark_stream_as_readAdded(id) {
  waitFor(matchAddMark_stream_as_read(id));
}
function waitForMark_stream_as_readDeleted(id) {
  waitFor(matchDeleteMark_stream_as_read(id));
}
function waitForAnyMark_stream_as_readDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ mark_stream_as_read\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ mark_stream_as_read\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Mark_topic_as_read Operations === */

// CREATE
function addMark_topic_as_read(id) {
  svc.post("/mark_topic_as_read", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a mark_topic_as_read with id " + id + "" }
    });
}

// DELETE
function deleteMark_topic_as_read(id) {
  svc.delete("/mark_topic_as_read/" + id, {
    parameters: { description: "Delete a mark_topic_as_read with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMark_topic_as_read(id) {
  svc.delete("/mark_topic_as_read/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a mark_topic_as_read with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMark_topic_as_read(id) {
  svc.post("/mark_topic_as_read", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a mark_topic_as_read with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a mark_topic_as_read with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMark_topic_as_read(id) {
  svc.put("/mark_topic_as_read/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a mark_topic_as_read" }
    });
}

// GET one
function getMark_topic_as_read(id) {
  svc.get("/mark_topic_as_read/" + id, {
    parameters: { description: "Get a mark_topic_as_read" }
  });
}

// LIST all
function listMark_topic_as_read() {
  svc.get("/mark_topic_as_read", {
    parameters: { description: "List mark_topic_as_read" }
  });
}

// Verify exists (by list)
function verifyMark_topic_as_readExists(id) {
  svc.get("/mark_topic_as_read", {
    callback: function (response) {
      mark_topic_as_read = JSON.parse(response.body);
      for (let i = 0; i < mark_topic_as_read.length; i++) {
        if (mark_topic_as_read[i].id === id) {
          return pvg.success("Mark_topic_as_read exists");
        }
      }
      return pvg.fail("Expected a mark_topic_as_read to exist but it does not");
    },
    parameters: { description: "Verify mark_topic_as_read with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMark_topic_as_readDoesNotExist(id) {
  svc.get("/mark_topic_as_read", {
    callback: function (response) {
      mark_topic_as_read = JSON.parse(response.body);
      for (let i = 0; i < mark_topic_as_read.length; i++) {
        if (mark_topic_as_read[i].id === id) {
          return pvg.fail("Expected a mark_topic_as_read to not exist but it does");
        }
      }
      return pvg.success("Mark_topic_as_read does not exist");
    },
    parameters: { description: "Verify mark_topic_as_read with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMark_topic_as_read() {
  return bp.EventSet("any-add-mark_topic_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a mark_topic_as_read");
  });
}
function matchAddMark_topic_as_read(id) {
  return bp.EventSet("add-mark_topic_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a mark_topic_as_read with id " + id + "";
  });
}
function matchAnyDeleteMark_topic_as_read() {
  return bp.EventSet("any-del-mark_topic_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a mark_topic_as_read");
  });
}
function matchDeleteMark_topic_as_read(id) {
  return bp.EventSet("del-mark_topic_as_read", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a mark_topic_as_read with id " + id + "";
  });
}

// Wait helpers
function waitForAnyMark_topic_as_readAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ mark_topic_as_read\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ mark_topic_as_read\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMark_topic_as_readAdded(id) {
  waitFor(matchAddMark_topic_as_read(id));
}
function waitForMark_topic_as_readDeleted(id) {
  waitFor(matchDeleteMark_topic_as_read(id));
}
function waitForAnyMark_topic_as_readDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ mark_topic_as_read\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ mark_topic_as_read\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Message Operations === */

// CREATE
function addMessage(message_id) {
  svc.post("/messages", {
      body: JSON.stringify({ message_id: message_id }),
      parameters: { description: "Add a message with message_id " + message_id + "" }
    });
}

// DELETE
function deleteMessage(message_id) {
  svc.delete("/messages/" + message_id, {
    parameters: { description: "Delete a message with message_id " + message_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMessage(message_id) {
  svc.delete("/messages/" + message_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a message with message_id " + message_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMessage(message_id) {
  svc.post("/messages", {
      body: JSON.stringify({ message_id: message_id }),
      parameters: { description: "Add a message with message_id " + message_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a message with message_id " + message_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMessage(message_id) {
  svc.put("/messages/" + message_id, {
      body: JSON.stringify({ message_id: message_id }),
      parameters: { description: "Update a message" }
    });
}

// GET one
function getMessage(message_id) {
  svc.get("/messages/" + message_id, {
    parameters: { description: "Get a message" }
  });
}

// LIST all
function listMessages() {
  svc.get("/messages", {
    parameters: { description: "List messages" }
  });
}

// Verify exists (by list)
function verifyMessageExists(message_id) {
  svc.get("/messages", {
    callback: function (response) {
      message = JSON.parse(response.body);
      for (let i = 0; i < message.length; i++) {
        if (message[i].message_id === message_id) {
          return pvg.success("Message exists");
        }
      }
      return pvg.fail("Expected a message to exist but it does not");
    },
    parameters: { description: "Verify message with message_id " + message_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMessageDoesNotExist(message_id) {
  svc.get("/messages", {
    callback: function (response) {
      message = JSON.parse(response.body);
      for (let i = 0; i < message.length; i++) {
        if (message[i].message_id === message_id) {
          return pvg.fail("Expected a message to not exist but it does");
        }
      }
      return pvg.success("Message does not exist");
    },
    parameters: { description: "Verify message with message_id " + message_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMessage() {
  return bp.EventSet("any-add-message", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a message");
  });
}
function matchAddMessage(message_id) {
  return bp.EventSet("add-message", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a message with message_id " + message_id + "";
  });
}
function matchAnyDeleteMessage() {
  return bp.EventSet("any-del-message", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a message");
  });
}
function matchDeleteMessage(message_id) {
  return bp.EventSet("del-message", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a message with message_id " + message_id + "";
  });
}

// Wait helpers
function waitForAnyMessageAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ message\ with\ message_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ message\ with\ message_id\ (.+)$/);
    return { message_id: parseInt(m[1]) };
}
function waitForMessageAdded(message_id) {
  waitFor(matchAddMessage(message_id));
}
function waitForMessageDeleted(message_id) {
  waitFor(matchDeleteMessage(message_id));
}
function waitForAnyMessageDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ message\ with\ message_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ message\ with\ message_id\ (.+)$/);
    return { message_id: parseInt(m[1]) };
}


/** === Mobile_push Operations === */

// CREATE
function addMobile_push(id) {
  svc.post("/mobile_push", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a mobile_push with id " + id + "" }
    });
}

// DELETE
function deleteMobile_push(id) {
  svc.delete("/mobile_push/" + id, {
    parameters: { description: "Delete a mobile_push with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMobile_push(id) {
  svc.delete("/mobile_push/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a mobile_push with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMobile_push(id) {
  svc.post("/mobile_push", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a mobile_push with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a mobile_push with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMobile_push(id) {
  svc.put("/mobile_push/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a mobile_push" }
    });
}

// GET one
function getMobile_push(id) {
  svc.get("/mobile_push/" + id, {
    parameters: { description: "Get a mobile_push" }
  });
}

// LIST all
function listMobile_push() {
  svc.get("/mobile_push", {
    parameters: { description: "List mobile_push" }
  });
}

// Verify exists (by list)
function verifyMobile_pushExists(id) {
  svc.get("/mobile_push", {
    callback: function (response) {
      mobile_push = JSON.parse(response.body);
      for (let i = 0; i < mobile_push.length; i++) {
        if (mobile_push[i].id === id) {
          return pvg.success("Mobile_push exists");
        }
      }
      return pvg.fail("Expected a mobile_push to exist but it does not");
    },
    parameters: { description: "Verify mobile_push with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMobile_pushDoesNotExist(id) {
  svc.get("/mobile_push", {
    callback: function (response) {
      mobile_push = JSON.parse(response.body);
      for (let i = 0; i < mobile_push.length; i++) {
        if (mobile_push[i].id === id) {
          return pvg.fail("Expected a mobile_push to not exist but it does");
        }
      }
      return pvg.success("Mobile_push does not exist");
    },
    parameters: { description: "Verify mobile_push with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMobile_push() {
  return bp.EventSet("any-add-mobile_push", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a mobile_push");
  });
}
function matchAddMobile_push(id) {
  return bp.EventSet("add-mobile_push", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a mobile_push with id " + id + "";
  });
}
function matchAnyDeleteMobile_push() {
  return bp.EventSet("any-del-mobile_push", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a mobile_push");
  });
}
function matchDeleteMobile_push(id) {
  return bp.EventSet("del-mobile_push", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a mobile_push with id " + id + "";
  });
}

// Wait helpers
function waitForAnyMobile_pushAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ mobile_push\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ mobile_push\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMobile_pushAdded(id) {
  waitFor(matchAddMobile_push(id));
}
function waitForMobile_pushDeleted(id) {
  waitFor(matchDeleteMobile_push(id));
}
function waitForAnyMobile_pushDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ mobile_push\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ mobile_push\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Navigation_view Operations === */

// CREATE
function addNavigation_view(fragment) {
  svc.post("/navigation_views", {
      body: JSON.stringify({ fragment: fragment }),
      parameters: { description: "Add a navigation_view with fragment " + fragment + "" }
    });
}

// DELETE
function deleteNavigation_view(fragment) {
  svc.delete("/navigation_views/" + fragment, {
    parameters: { description: "Delete a navigation_view with fragment " + fragment + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingNavigation_view(fragment) {
  svc.delete("/navigation_views/" + fragment, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a navigation_view with fragment " + fragment + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingNavigation_view(fragment) {
  svc.post("/navigation_views", {
      body: JSON.stringify({ fragment: fragment }),
      parameters: { description: "Add a navigation_view with fragment " + fragment + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a navigation_view with fragment " + fragment + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateNavigation_view(fragment) {
  svc.put("/navigation_views/" + fragment, {
      body: JSON.stringify({ fragment: fragment }),
      parameters: { description: "Update a navigation_view" }
    });
}

// GET one
function getNavigation_view(fragment) {
  svc.get("/navigation_views/" + fragment, {
    parameters: { description: "Get a navigation_view" }
  });
}

// LIST all
function listNavigation_views() {
  svc.get("/navigation_views", {
    parameters: { description: "List navigation_views" }
  });
}

// Verify exists (by list)
function verifyNavigation_viewExists(fragment) {
  svc.get("/navigation_views", {
    callback: function (response) {
      navigation_view = JSON.parse(response.body);
      for (let i = 0; i < navigation_view.length; i++) {
        if (navigation_view[i].fragment === fragment) {
          return pvg.success("Navigation_view exists");
        }
      }
      return pvg.fail("Expected a navigation_view to exist but it does not");
    },
    parameters: { description: "Verify navigation_view with fragment " + fragment + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyNavigation_viewDoesNotExist(fragment) {
  svc.get("/navigation_views", {
    callback: function (response) {
      navigation_view = JSON.parse(response.body);
      for (let i = 0; i < navigation_view.length; i++) {
        if (navigation_view[i].fragment === fragment) {
          return pvg.fail("Expected a navigation_view to not exist but it does");
        }
      }
      return pvg.success("Navigation_view does not exist");
    },
    parameters: { description: "Verify navigation_view with fragment " + fragment + " does not exist" }
  });
}

// Match helpers
function matchAnyAddNavigation_view() {
  return bp.EventSet("any-add-navigation_view", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a navigation_view");
  });
}
function matchAddNavigation_view(fragment) {
  return bp.EventSet("add-navigation_view", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a navigation_view with fragment " + fragment + "";
  });
}
function matchAnyDeleteNavigation_view() {
  return bp.EventSet("any-del-navigation_view", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a navigation_view");
  });
}
function matchDeleteNavigation_view(fragment) {
  return bp.EventSet("del-navigation_view", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a navigation_view with fragment " + fragment + "";
  });
}

// Wait helpers
function waitForAnyNavigation_viewAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ navigation_view\ with\ fragment\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ navigation_view\ with\ fragment\ (.+)$/);
    return { fragment: (x)=>x(m[1]) };
}
function waitForNavigation_viewAdded(fragment) {
  waitFor(matchAddNavigation_view(fragment));
}
function waitForNavigation_viewDeleted(fragment) {
  waitFor(matchDeleteNavigation_view(fragment));
}
function waitForAnyNavigation_viewDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ navigation_view\ with\ fragment\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ navigation_view\ with\ fragment\ (.+)$/);
    return { fragment: (x)=>x(m[1]) };
}


/** === Real_time Operations === */

// CREATE
function addReal_time(id) {
  svc.post("/real_time", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a real_time with id " + id + "" }
    });
}

// DELETE
function deleteReal_time(id) {
  svc.delete("/real_time/" + id, {
    parameters: { description: "Delete a real_time with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingReal_time(id) {
  svc.delete("/real_time/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a real_time with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingReal_time(id) {
  svc.post("/real_time", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a real_time with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a real_time with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateReal_time(id) {
  svc.put("/real_time/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a real_time" }
    });
}

// GET one
function getReal_time(id) {
  svc.get("/real_time/" + id, {
    parameters: { description: "Get a real_time" }
  });
}

// LIST all
function listReal_time() {
  svc.get("/real_time", {
    parameters: { description: "List real_time" }
  });
}

// Verify exists (by list)
function verifyReal_timeExists(id) {
  svc.get("/real_time", {
    callback: function (response) {
      real_time = JSON.parse(response.body);
      for (let i = 0; i < real_time.length; i++) {
        if (real_time[i].id === id) {
          return pvg.success("Real_time exists");
        }
      }
      return pvg.fail("Expected a real_time to exist but it does not");
    },
    parameters: { description: "Verify real_time with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyReal_timeDoesNotExist(id) {
  svc.get("/real_time", {
    callback: function (response) {
      real_time = JSON.parse(response.body);
      for (let i = 0; i < real_time.length; i++) {
        if (real_time[i].id === id) {
          return pvg.fail("Expected a real_time to not exist but it does");
        }
      }
      return pvg.success("Real_time does not exist");
    },
    parameters: { description: "Verify real_time with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddReal_time() {
  return bp.EventSet("any-add-real_time", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a real_time");
  });
}
function matchAddReal_time(id) {
  return bp.EventSet("add-real_time", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a real_time with id " + id + "";
  });
}
function matchAnyDeleteReal_time() {
  return bp.EventSet("any-del-real_time", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a real_time");
  });
}
function matchDeleteReal_time(id) {
  return bp.EventSet("del-real_time", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a real_time with id " + id + "";
  });
}

// Wait helpers
function waitForAnyReal_timeAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ real_time\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ real_time\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForReal_timeAdded(id) {
  waitFor(matchAddReal_time(id));
}
function waitForReal_timeDeleted(id) {
  waitFor(matchDeleteReal_time(id));
}
function waitForAnyReal_timeDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ real_time\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ real_time\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Realm Operations === */

// CREATE
function addRealm(id) {
  svc.post("/realm", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a realm with id " + id + "" }
    });
}

// DELETE
function deleteRealm(id) {
  svc.delete("/realm/" + id, {
    parameters: { description: "Delete a realm with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRealm(id) {
  svc.delete("/realm/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a realm with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRealm(id) {
  svc.post("/realm", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a realm with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a realm with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRealm(id) {
  svc.put("/realm/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a realm" }
    });
}

// GET one
function getRealm(id) {
  svc.get("/realm/" + id, {
    parameters: { description: "Get a realm" }
  });
}

// LIST all
function listRealm() {
  svc.get("/realm", {
    parameters: { description: "List realm" }
  });
}

// Verify exists (by list)
function verifyRealmExists(id) {
  svc.get("/realm", {
    callback: function (response) {
      realm = JSON.parse(response.body);
      for (let i = 0; i < realm.length; i++) {
        if (realm[i].id === id) {
          return pvg.success("Realm exists");
        }
      }
      return pvg.fail("Expected a realm to exist but it does not");
    },
    parameters: { description: "Verify realm with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRealmDoesNotExist(id) {
  svc.get("/realm", {
    callback: function (response) {
      realm = JSON.parse(response.body);
      for (let i = 0; i < realm.length; i++) {
        if (realm[i].id === id) {
          return pvg.fail("Expected a realm to not exist but it does");
        }
      }
      return pvg.success("Realm does not exist");
    },
    parameters: { description: "Verify realm with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRealm() {
  return bp.EventSet("any-add-realm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a realm");
  });
}
function matchAddRealm(id) {
  return bp.EventSet("add-realm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a realm with id " + id + "";
  });
}
function matchAnyDeleteRealm() {
  return bp.EventSet("any-del-realm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a realm");
  });
}
function matchDeleteRealm(id) {
  return bp.EventSet("del-realm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a realm with id " + id + "";
  });
}

// Wait helpers
function waitForAnyRealmAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ realm\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ realm\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRealmAdded(id) {
  waitFor(matchAddRealm(id));
}
function waitForRealmDeleted(id) {
  waitFor(matchDeleteRealm(id));
}
function waitForAnyRealmDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ realm\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ realm\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Register Operations === */

// CREATE
function addRegister(id) {
  svc.post("/register", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a register with id " + id + "" }
    });
}

// DELETE
function deleteRegister(id) {
  svc.delete("/register/" + id, {
    parameters: { description: "Delete a register with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRegister(id) {
  svc.delete("/register/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a register with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRegister(id) {
  svc.post("/register", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a register with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a register with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRegister(id) {
  svc.put("/register/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a register" }
    });
}

// GET one
function getRegister(id) {
  svc.get("/register/" + id, {
    parameters: { description: "Get a register" }
  });
}

// LIST all
function listRegister() {
  svc.get("/register", {
    parameters: { description: "List register" }
  });
}

// Verify exists (by list)
function verifyRegisterExists(id) {
  svc.get("/register", {
    callback: function (response) {
      register = JSON.parse(response.body);
      for (let i = 0; i < register.length; i++) {
        if (register[i].id === id) {
          return pvg.success("Register exists");
        }
      }
      return pvg.fail("Expected a register to exist but it does not");
    },
    parameters: { description: "Verify register with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRegisterDoesNotExist(id) {
  svc.get("/register", {
    callback: function (response) {
      register = JSON.parse(response.body);
      for (let i = 0; i < register.length; i++) {
        if (register[i].id === id) {
          return pvg.fail("Expected a register to not exist but it does");
        }
      }
      return pvg.success("Register does not exist");
    },
    parameters: { description: "Verify register with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRegister() {
  return bp.EventSet("any-add-register", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a register");
  });
}
function matchAddRegister(id) {
  return bp.EventSet("add-register", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a register with id " + id + "";
  });
}
function matchAnyDeleteRegister() {
  return bp.EventSet("any-del-register", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a register");
  });
}
function matchDeleteRegister(id) {
  return bp.EventSet("del-register", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a register with id " + id + "";
  });
}

// Wait helpers
function waitForAnyRegisterAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ register\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ register\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRegisterAdded(id) {
  waitFor(matchAddRegister(id));
}
function waitForRegisterDeleted(id) {
  waitFor(matchDeleteRegister(id));
}
function waitForAnyRegisterDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ register\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ register\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Reminder Operations === */

// CREATE
function addReminder(reminder_id) {
  svc.post("/reminders", {
      body: JSON.stringify({ reminder_id: reminder_id }),
      parameters: { description: "Add a reminder with reminder_id " + reminder_id + "" }
    });
}

// DELETE
function deleteReminder(reminder_id) {
  svc.delete("/reminders/" + reminder_id, {
    parameters: { description: "Delete a reminder with reminder_id " + reminder_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingReminder(reminder_id) {
  svc.delete("/reminders/" + reminder_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a reminder with reminder_id " + reminder_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingReminder(reminder_id) {
  svc.post("/reminders", {
      body: JSON.stringify({ reminder_id: reminder_id }),
      parameters: { description: "Add a reminder with reminder_id " + reminder_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a reminder with reminder_id " + reminder_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateReminder(reminder_id) {
  svc.put("/reminders/" + reminder_id, {
      body: JSON.stringify({ reminder_id: reminder_id }),
      parameters: { description: "Update a reminder" }
    });
}

// GET one
function getReminder(reminder_id) {
  svc.get("/reminders/" + reminder_id, {
    parameters: { description: "Get a reminder" }
  });
}

// LIST all
function listReminders() {
  svc.get("/reminders", {
    parameters: { description: "List reminders" }
  });
}

// Verify exists (by list)
function verifyReminderExists(reminder_id) {
  svc.get("/reminders", {
    callback: function (response) {
      reminder = JSON.parse(response.body);
      for (let i = 0; i < reminder.length; i++) {
        if (reminder[i].reminder_id === reminder_id) {
          return pvg.success("Reminder exists");
        }
      }
      return pvg.fail("Expected a reminder to exist but it does not");
    },
    parameters: { description: "Verify reminder with reminder_id " + reminder_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyReminderDoesNotExist(reminder_id) {
  svc.get("/reminders", {
    callback: function (response) {
      reminder = JSON.parse(response.body);
      for (let i = 0; i < reminder.length; i++) {
        if (reminder[i].reminder_id === reminder_id) {
          return pvg.fail("Expected a reminder to not exist but it does");
        }
      }
      return pvg.success("Reminder does not exist");
    },
    parameters: { description: "Verify reminder with reminder_id " + reminder_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddReminder() {
  return bp.EventSet("any-add-reminder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a reminder");
  });
}
function matchAddReminder(reminder_id) {
  return bp.EventSet("add-reminder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a reminder with reminder_id " + reminder_id + "";
  });
}
function matchAnyDeleteReminder() {
  return bp.EventSet("any-del-reminder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a reminder");
  });
}
function matchDeleteReminder(reminder_id) {
  return bp.EventSet("del-reminder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a reminder with reminder_id " + reminder_id + "";
  });
}

// Wait helpers
function waitForAnyReminderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ reminder\ with\ reminder_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ reminder\ with\ reminder_id\ (.+)$/);
    return { reminder_id: parseInt(m[1]) };
}
function waitForReminderAdded(reminder_id) {
  waitFor(matchAddReminder(reminder_id));
}
function waitForReminderDeleted(reminder_id) {
  waitFor(matchDeleteReminder(reminder_id));
}
function waitForAnyReminderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ reminder\ with\ reminder_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ reminder\ with\ reminder_id\ (.+)$/);
    return { reminder_id: parseInt(m[1]) };
}


/** === Remote Operations === */

// CREATE
function addRemote(id) {
  svc.post("/remotes", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a remote with id " + id + "" }
    });
}

// DELETE
function deleteRemote(id) {
  svc.delete("/remotes/" + id, {
    parameters: { description: "Delete a remote with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRemote(id) {
  svc.delete("/remotes/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a remote with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRemote(id) {
  svc.post("/remotes", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a remote with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a remote with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRemote(id) {
  svc.put("/remotes/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a remote" }
    });
}

// GET one
function getRemote(id) {
  svc.get("/remotes/" + id, {
    parameters: { description: "Get a remote" }
  });
}

// LIST all
function listRemotes() {
  svc.get("/remotes", {
    parameters: { description: "List remotes" }
  });
}

// Verify exists (by list)
function verifyRemoteExists(id) {
  svc.get("/remotes", {
    callback: function (response) {
      remote = JSON.parse(response.body);
      for (let i = 0; i < remote.length; i++) {
        if (remote[i].id === id) {
          return pvg.success("Remote exists");
        }
      }
      return pvg.fail("Expected a remote to exist but it does not");
    },
    parameters: { description: "Verify remote with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRemoteDoesNotExist(id) {
  svc.get("/remotes", {
    callback: function (response) {
      remote = JSON.parse(response.body);
      for (let i = 0; i < remote.length; i++) {
        if (remote[i].id === id) {
          return pvg.fail("Expected a remote to not exist but it does");
        }
      }
      return pvg.success("Remote does not exist");
    },
    parameters: { description: "Verify remote with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRemote() {
  return bp.EventSet("any-add-remote", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a remote");
  });
}
function matchAddRemote(id) {
  return bp.EventSet("add-remote", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a remote with id " + id + "";
  });
}
function matchAnyDeleteRemote() {
  return bp.EventSet("any-del-remote", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a remote");
  });
}
function matchDeleteRemote(id) {
  return bp.EventSet("del-remote", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a remote with id " + id + "";
  });
}

// Wait helpers
function waitForAnyRemoteAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ remote\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ remote\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRemoteAdded(id) {
  waitFor(matchAddRemote(id));
}
function waitForRemoteDeleted(id) {
  waitFor(matchDeleteRemote(id));
}
function waitForAnyRemoteDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ remote\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ remote\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Rest_error_handling Operations === */

// CREATE
function addRest_error_handling(id) {
  svc.post("/rest_error_handling", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a rest_error_handling with id " + id + "" }
    });
}

// DELETE
function deleteRest_error_handling(id) {
  svc.delete("/rest_error_handling/" + id, {
    parameters: { description: "Delete a rest_error_handling with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRest_error_handling(id) {
  svc.delete("/rest_error_handling/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a rest_error_handling with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRest_error_handling(id) {
  svc.post("/rest_error_handling", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a rest_error_handling with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a rest_error_handling with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRest_error_handling(id) {
  svc.put("/rest_error_handling/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a rest_error_handling" }
    });
}

// GET one
function getRest_error_handling(id) {
  svc.get("/rest_error_handling/" + id, {
    parameters: { description: "Get a rest_error_handling" }
  });
}

// LIST all
function listRest_error_handling() {
  svc.get("/rest_error_handling", {
    parameters: { description: "List rest_error_handling" }
  });
}

// Verify exists (by list)
function verifyRest_error_handlingExists(id) {
  svc.get("/rest_error_handling", {
    callback: function (response) {
      rest_error_handling = JSON.parse(response.body);
      for (let i = 0; i < rest_error_handling.length; i++) {
        if (rest_error_handling[i].id === id) {
          return pvg.success("Rest_error_handling exists");
        }
      }
      return pvg.fail("Expected a rest_error_handling to exist but it does not");
    },
    parameters: { description: "Verify rest_error_handling with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRest_error_handlingDoesNotExist(id) {
  svc.get("/rest_error_handling", {
    callback: function (response) {
      rest_error_handling = JSON.parse(response.body);
      for (let i = 0; i < rest_error_handling.length; i++) {
        if (rest_error_handling[i].id === id) {
          return pvg.fail("Expected a rest_error_handling to not exist but it does");
        }
      }
      return pvg.success("Rest_error_handling does not exist");
    },
    parameters: { description: "Verify rest_error_handling with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRest_error_handling() {
  return bp.EventSet("any-add-rest_error_handling", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a rest_error_handling");
  });
}
function matchAddRest_error_handling(id) {
  return bp.EventSet("add-rest_error_handling", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a rest_error_handling with id " + id + "";
  });
}
function matchAnyDeleteRest_error_handling() {
  return bp.EventSet("any-del-rest_error_handling", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a rest_error_handling");
  });
}
function matchDeleteRest_error_handling(id) {
  return bp.EventSet("del-rest_error_handling", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a rest_error_handling with id " + id + "";
  });
}

// Wait helpers
function waitForAnyRest_error_handlingAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ rest_error_handling\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ rest_error_handling\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRest_error_handlingAdded(id) {
  waitFor(matchAddRest_error_handling(id));
}
function waitForRest_error_handlingDeleted(id) {
  waitFor(matchDeleteRest_error_handling(id));
}
function waitForAnyRest_error_handlingDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ rest_error_handling\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ rest_error_handling\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Saved_snippet Operations === */

// CREATE
function addSaved_snippet(id) {
  svc.post("/saved_snippets", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a saved_snippet with id " + id + "" }
    });
}

// DELETE
function deleteSaved_snippet(id) {
  svc.delete("/saved_snippets/" + id, {
    parameters: { description: "Delete a saved_snippet with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSaved_snippet(id) {
  svc.delete("/saved_snippets/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a saved_snippet with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSaved_snippet(id) {
  svc.post("/saved_snippets", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a saved_snippet with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a saved_snippet with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateSaved_snippet(id) {
  svc.put("/saved_snippets/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a saved_snippet" }
    });
}

// GET one
function getSaved_snippet(id) {
  svc.get("/saved_snippets/" + id, {
    parameters: { description: "Get a saved_snippet" }
  });
}

// LIST all
function listSaved_snippets() {
  svc.get("/saved_snippets", {
    parameters: { description: "List saved_snippets" }
  });
}

// Verify exists (by list)
function verifySaved_snippetExists(id) {
  svc.get("/saved_snippets", {
    callback: function (response) {
      saved_snippet = JSON.parse(response.body);
      for (let i = 0; i < saved_snippet.length; i++) {
        if (saved_snippet[i].id === id) {
          return pvg.success("Saved_snippet exists");
        }
      }
      return pvg.fail("Expected a saved_snippet to exist but it does not");
    },
    parameters: { description: "Verify saved_snippet with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySaved_snippetDoesNotExist(id) {
  svc.get("/saved_snippets", {
    callback: function (response) {
      saved_snippet = JSON.parse(response.body);
      for (let i = 0; i < saved_snippet.length; i++) {
        if (saved_snippet[i].id === id) {
          return pvg.fail("Expected a saved_snippet to not exist but it does");
        }
      }
      return pvg.success("Saved_snippet does not exist");
    },
    parameters: { description: "Verify saved_snippet with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSaved_snippet() {
  return bp.EventSet("any-add-saved_snippet", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a saved_snippet");
  });
}
function matchAddSaved_snippet(id) {
  return bp.EventSet("add-saved_snippet", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a saved_snippet with id " + id + "";
  });
}
function matchAnyDeleteSaved_snippet() {
  return bp.EventSet("any-del-saved_snippet", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a saved_snippet");
  });
}
function matchDeleteSaved_snippet(id) {
  return bp.EventSet("del-saved_snippet", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a saved_snippet with id " + id + "";
  });
}

// Wait helpers
function waitForAnySaved_snippetAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ saved_snippet\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ saved_snippet\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSaved_snippetAdded(id) {
  waitFor(matchAddSaved_snippet(id));
}
function waitForSaved_snippetDeleted(id) {
  waitFor(matchDeleteSaved_snippet(id));
}
function waitForAnySaved_snippetDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ saved_snippet\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ saved_snippet\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Scheduled_message Operations === */

// CREATE
function addScheduled_message(scheduled_message_id) {
  svc.post("/scheduled_messages", {
      body: JSON.stringify({ scheduled_message_id: scheduled_message_id }),
      parameters: { description: "Add a scheduled_message with scheduled_message_id " + scheduled_message_id + "" }
    });
}

// DELETE
function deleteScheduled_message(scheduled_message_id) {
  svc.delete("/scheduled_messages/" + scheduled_message_id, {
    parameters: { description: "Delete a scheduled_message with scheduled_message_id " + scheduled_message_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingScheduled_message(scheduled_message_id) {
  svc.delete("/scheduled_messages/" + scheduled_message_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a scheduled_message with scheduled_message_id " + scheduled_message_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingScheduled_message(scheduled_message_id) {
  svc.post("/scheduled_messages", {
      body: JSON.stringify({ scheduled_message_id: scheduled_message_id }),
      parameters: { description: "Add a scheduled_message with scheduled_message_id " + scheduled_message_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a scheduled_message with scheduled_message_id " + scheduled_message_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateScheduled_message(scheduled_message_id) {
  svc.put("/scheduled_messages/" + scheduled_message_id, {
      body: JSON.stringify({ scheduled_message_id: scheduled_message_id }),
      parameters: { description: "Update a scheduled_message" }
    });
}

// GET one
function getScheduled_message(scheduled_message_id) {
  svc.get("/scheduled_messages/" + scheduled_message_id, {
    parameters: { description: "Get a scheduled_message" }
  });
}

// LIST all
function listScheduled_messages() {
  svc.get("/scheduled_messages", {
    parameters: { description: "List scheduled_messages" }
  });
}

// Verify exists (by list)
function verifyScheduled_messageExists(scheduled_message_id) {
  svc.get("/scheduled_messages", {
    callback: function (response) {
      scheduled_message = JSON.parse(response.body);
      for (let i = 0; i < scheduled_message.length; i++) {
        if (scheduled_message[i].scheduled_message_id === scheduled_message_id) {
          return pvg.success("Scheduled_message exists");
        }
      }
      return pvg.fail("Expected a scheduled_message to exist but it does not");
    },
    parameters: { description: "Verify scheduled_message with scheduled_message_id " + scheduled_message_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyScheduled_messageDoesNotExist(scheduled_message_id) {
  svc.get("/scheduled_messages", {
    callback: function (response) {
      scheduled_message = JSON.parse(response.body);
      for (let i = 0; i < scheduled_message.length; i++) {
        if (scheduled_message[i].scheduled_message_id === scheduled_message_id) {
          return pvg.fail("Expected a scheduled_message to not exist but it does");
        }
      }
      return pvg.success("Scheduled_message does not exist");
    },
    parameters: { description: "Verify scheduled_message with scheduled_message_id " + scheduled_message_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddScheduled_message() {
  return bp.EventSet("any-add-scheduled_message", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a scheduled_message");
  });
}
function matchAddScheduled_message(scheduled_message_id) {
  return bp.EventSet("add-scheduled_message", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a scheduled_message with scheduled_message_id " + scheduled_message_id + "";
  });
}
function matchAnyDeleteScheduled_message() {
  return bp.EventSet("any-del-scheduled_message", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a scheduled_message");
  });
}
function matchDeleteScheduled_message(scheduled_message_id) {
  return bp.EventSet("del-scheduled_message", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a scheduled_message with scheduled_message_id " + scheduled_message_id + "";
  });
}

// Wait helpers
function waitForAnyScheduled_messageAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ scheduled_message\ with\ scheduled_message_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ scheduled_message\ with\ scheduled_message_id\ (.+)$/);
    return { scheduled_message_id: parseInt(m[1]) };
}
function waitForScheduled_messageAdded(scheduled_message_id) {
  waitFor(matchAddScheduled_message(scheduled_message_id));
}
function waitForScheduled_messageDeleted(scheduled_message_id) {
  waitFor(matchDeleteScheduled_message(scheduled_message_id));
}
function waitForAnyScheduled_messageDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ scheduled_message\ with\ scheduled_message_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ scheduled_message\ with\ scheduled_message_id\ (.+)$/);
    return { scheduled_message_id: parseInt(m[1]) };
}


/** === Server_setting Operations === */

// CREATE
function addServer_setting(id) {
  svc.post("/server_settings", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a server_setting with id " + id + "" }
    });
}

// DELETE
function deleteServer_setting(id) {
  svc.delete("/server_settings/" + id, {
    parameters: { description: "Delete a server_setting with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingServer_setting(id) {
  svc.delete("/server_settings/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a server_setting with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingServer_setting(id) {
  svc.post("/server_settings", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a server_setting with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a server_setting with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateServer_setting(id) {
  svc.put("/server_settings/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a server_setting" }
    });
}

// GET one
function getServer_setting(id) {
  svc.get("/server_settings/" + id, {
    parameters: { description: "Get a server_setting" }
  });
}

// LIST all
function listServer_settings() {
  svc.get("/server_settings", {
    parameters: { description: "List server_settings" }
  });
}

// Verify exists (by list)
function verifyServer_settingExists(id) {
  svc.get("/server_settings", {
    callback: function (response) {
      server_setting = JSON.parse(response.body);
      for (let i = 0; i < server_setting.length; i++) {
        if (server_setting[i].id === id) {
          return pvg.success("Server_setting exists");
        }
      }
      return pvg.fail("Expected a server_setting to exist but it does not");
    },
    parameters: { description: "Verify server_setting with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyServer_settingDoesNotExist(id) {
  svc.get("/server_settings", {
    callback: function (response) {
      server_setting = JSON.parse(response.body);
      for (let i = 0; i < server_setting.length; i++) {
        if (server_setting[i].id === id) {
          return pvg.fail("Expected a server_setting to not exist but it does");
        }
      }
      return pvg.success("Server_setting does not exist");
    },
    parameters: { description: "Verify server_setting with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddServer_setting() {
  return bp.EventSet("any-add-server_setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a server_setting");
  });
}
function matchAddServer_setting(id) {
  return bp.EventSet("add-server_setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a server_setting with id " + id + "";
  });
}
function matchAnyDeleteServer_setting() {
  return bp.EventSet("any-del-server_setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a server_setting");
  });
}
function matchDeleteServer_setting(id) {
  return bp.EventSet("del-server_setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a server_setting with id " + id + "";
  });
}

// Wait helpers
function waitForAnyServer_settingAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ server_setting\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ server_setting\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForServer_settingAdded(id) {
  waitFor(matchAddServer_setting(id));
}
function waitForServer_settingDeleted(id) {
  waitFor(matchDeleteServer_setting(id));
}
function waitForAnyServer_settingDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ server_setting\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ server_setting\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Stream Operations === */

// CREATE
function addStream(stream_id) {
  svc.post("/streams", {
      body: JSON.stringify({ stream_id: stream_id }),
      parameters: { description: "Add a stream with stream_id " + stream_id + "" }
    });
}

// DELETE
function deleteStream(stream_id) {
  svc.delete("/streams/" + stream_id, {
    parameters: { description: "Delete a stream with stream_id " + stream_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingStream(stream_id) {
  svc.delete("/streams/" + stream_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a stream with stream_id " + stream_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingStream(stream_id) {
  svc.post("/streams", {
      body: JSON.stringify({ stream_id: stream_id }),
      parameters: { description: "Add a stream with stream_id " + stream_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a stream with stream_id " + stream_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateStream(stream_id) {
  svc.put("/streams/" + stream_id, {
      body: JSON.stringify({ stream_id: stream_id }),
      parameters: { description: "Update a stream" }
    });
}

// GET one
function getStream(stream_id) {
  svc.get("/streams/" + stream_id, {
    parameters: { description: "Get a stream" }
  });
}

// LIST all
function listStreams() {
  svc.get("/streams", {
    parameters: { description: "List streams" }
  });
}

// Verify exists (by list)
function verifyStreamExists(stream_id) {
  svc.get("/streams", {
    callback: function (response) {
      stream = JSON.parse(response.body);
      for (let i = 0; i < stream.length; i++) {
        if (stream[i].stream_id === stream_id) {
          return pvg.success("Stream exists");
        }
      }
      return pvg.fail("Expected a stream to exist but it does not");
    },
    parameters: { description: "Verify stream with stream_id " + stream_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyStreamDoesNotExist(stream_id) {
  svc.get("/streams", {
    callback: function (response) {
      stream = JSON.parse(response.body);
      for (let i = 0; i < stream.length; i++) {
        if (stream[i].stream_id === stream_id) {
          return pvg.fail("Expected a stream to not exist but it does");
        }
      }
      return pvg.success("Stream does not exist");
    },
    parameters: { description: "Verify stream with stream_id " + stream_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddStream() {
  return bp.EventSet("any-add-stream", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a stream");
  });
}
function matchAddStream(stream_id) {
  return bp.EventSet("add-stream", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a stream with stream_id " + stream_id + "";
  });
}
function matchAnyDeleteStream() {
  return bp.EventSet("any-del-stream", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a stream");
  });
}
function matchDeleteStream(stream_id) {
  return bp.EventSet("del-stream", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a stream with stream_id " + stream_id + "";
  });
}

// Wait helpers
function waitForAnyStreamAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ stream\ with\ stream_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ stream\ with\ stream_id\ (.+)$/);
    return { stream_id: parseInt(m[1]) };
}
function waitForStreamAdded(stream_id) {
  waitFor(matchAddStream(stream_id));
}
function waitForStreamDeleted(stream_id) {
  waitFor(matchDeleteStream(stream_id));
}
function waitForAnyStreamDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ stream\ with\ stream_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ stream\ with\ stream_id\ (.+)$/);
    return { stream_id: parseInt(m[1]) };
}


/** === User_group Operations === */

// CREATE
function addUser_group(user_group_id) {
  svc.post("/user_groups", {
      body: JSON.stringify({ user_group_id: user_group_id }),
      parameters: { description: "Add a user_group with user_group_id " + user_group_id + "" }
    });
}

// DELETE
function deleteUser_group(user_group_id) {
  svc.delete("/user_groups/" + user_group_id, {
    parameters: { description: "Delete a user_group with user_group_id " + user_group_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser_group(user_group_id) {
  svc.delete("/user_groups/" + user_group_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user_group with user_group_id " + user_group_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser_group(user_group_id) {
  svc.post("/user_groups", {
      body: JSON.stringify({ user_group_id: user_group_id }),
      parameters: { description: "Add a user_group with user_group_id " + user_group_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user_group with user_group_id " + user_group_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser_group(user_group_id) {
  svc.put("/user_groups/" + user_group_id, {
      body: JSON.stringify({ user_group_id: user_group_id }),
      parameters: { description: "Update a user_group" }
    });
}

// GET one
function getUser_group(user_group_id) {
  svc.get("/user_groups/" + user_group_id, {
    parameters: { description: "Get a user_group" }
  });
}

// LIST all
function listUser_groups() {
  svc.get("/user_groups", {
    parameters: { description: "List user_groups" }
  });
}

// Verify exists (by list)
function verifyUser_groupExists(user_group_id) {
  svc.get("/user_groups", {
    callback: function (response) {
      user_group = JSON.parse(response.body);
      for (let i = 0; i < user_group.length; i++) {
        if (user_group[i].user_group_id === user_group_id) {
          return pvg.success("User_group exists");
        }
      }
      return pvg.fail("Expected a user_group to exist but it does not");
    },
    parameters: { description: "Verify user_group with user_group_id " + user_group_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUser_groupDoesNotExist(user_group_id) {
  svc.get("/user_groups", {
    callback: function (response) {
      user_group = JSON.parse(response.body);
      for (let i = 0; i < user_group.length; i++) {
        if (user_group[i].user_group_id === user_group_id) {
          return pvg.fail("Expected a user_group to not exist but it does");
        }
      }
      return pvg.success("User_group does not exist");
    },
    parameters: { description: "Verify user_group with user_group_id " + user_group_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser_group() {
  return bp.EventSet("any-add-user_group", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user_group");
  });
}
function matchAddUser_group(user_group_id) {
  return bp.EventSet("add-user_group", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user_group with user_group_id " + user_group_id + "";
  });
}
function matchAnyDeleteUser_group() {
  return bp.EventSet("any-del-user_group", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user_group");
  });
}
function matchDeleteUser_group(user_group_id) {
  return bp.EventSet("del-user_group", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user_group with user_group_id " + user_group_id + "";
  });
}

// Wait helpers
function waitForAnyUser_groupAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user_group\ with\ user_group_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user_group\ with\ user_group_id\ (.+)$/);
    return { user_group_id: parseInt(m[1]) };
}
function waitForUser_groupAdded(user_group_id) {
  waitFor(matchAddUser_group(user_group_id));
}
function waitForUser_groupDeleted(user_group_id) {
  waitFor(matchDeleteUser_group(user_group_id));
}
function waitForAnyUser_groupDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user_group\ with\ user_group_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user_group\ with\ user_group_id\ (.+)$/);
    return { user_group_id: parseInt(m[1]) };
}


/** === User_topic Operations === */

// CREATE
function addUser_topic(id) {
  svc.post("/user_topics", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user_topic with id " + id + "" }
    });
}

// DELETE
function deleteUser_topic(id) {
  svc.delete("/user_topics/" + id, {
    parameters: { description: "Delete a user_topic with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser_topic(id) {
  svc.delete("/user_topics/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user_topic with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser_topic(id) {
  svc.post("/user_topics", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user_topic with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user_topic with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser_topic(id) {
  svc.put("/user_topics/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a user_topic" }
    });
}

// GET one
function getUser_topic(id) {
  svc.get("/user_topics/" + id, {
    parameters: { description: "Get a user_topic" }
  });
}

// LIST all
function listUser_topics() {
  svc.get("/user_topics", {
    parameters: { description: "List user_topics" }
  });
}

// Verify exists (by list)
function verifyUser_topicExists(id) {
  svc.get("/user_topics", {
    callback: function (response) {
      user_topic = JSON.parse(response.body);
      for (let i = 0; i < user_topic.length; i++) {
        if (user_topic[i].id === id) {
          return pvg.success("User_topic exists");
        }
      }
      return pvg.fail("Expected a user_topic to exist but it does not");
    },
    parameters: { description: "Verify user_topic with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUser_topicDoesNotExist(id) {
  svc.get("/user_topics", {
    callback: function (response) {
      user_topic = JSON.parse(response.body);
      for (let i = 0; i < user_topic.length; i++) {
        if (user_topic[i].id === id) {
          return pvg.fail("Expected a user_topic to not exist but it does");
        }
      }
      return pvg.success("User_topic does not exist");
    },
    parameters: { description: "Verify user_topic with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser_topic() {
  return bp.EventSet("any-add-user_topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user_topic");
  });
}
function matchAddUser_topic(id) {
  return bp.EventSet("add-user_topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user_topic with id " + id + "";
  });
}
function matchAnyDeleteUser_topic() {
  return bp.EventSet("any-del-user_topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user_topic");
  });
}
function matchDeleteUser_topic(id) {
  return bp.EventSet("del-user_topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user_topic with id " + id + "";
  });
}

// Wait helpers
function waitForAnyUser_topicAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user_topic\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user_topic\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUser_topicAdded(id) {
  waitFor(matchAddUser_topic(id));
}
function waitForUser_topicDeleted(id) {
  waitFor(matchDeleteUser_topic(id));
}
function waitForAnyUser_topicDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user_topic\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user_topic\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === User_upload Operations === */

// CREATE
function addUser_upload(realm_id_str, filename) {
  svc.post("/user_uploads", {
      body: JSON.stringify({ realm_id_str: realm_id_str, filename: filename }),
      parameters: { description: "Add a user_upload with realm_id_str " + realm_id_str + " and filename " + filename + "" }
    });
}

// DELETE
function deleteUser_upload(realm_id_str, filename) {
  svc.delete("/user_uploads/" + realm_id_str + "/"+ filename, {
    parameters: { description: "Delete a user_upload with realm_id_str " + realm_id_str + " and filename " + filename + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser_upload(realm_id_str, filename) {
  svc.delete("/user_uploads/" + realm_id_str + "/"+ filename, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user_upload with realm_id_str " + realm_id_str + " and filename " + filename + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser_upload(realm_id_str, filename) {
  svc.post("/user_uploads", {
      body: JSON.stringify({ realm_id_str: realm_id_str, filename: filename }),
      parameters: { description: "Add a user_upload with realm_id_str " + realm_id_str + " and filename " + filename + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user_upload with realm_id_str " + realm_id_str + " and filename " + filename + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser_upload(realm_id_str, filename) {
  svc.put("/user_uploads/" + realm_id_str + "/"+ filename, {
      body: JSON.stringify({ realm_id_str: realm_id_str, filename: filename }),
      parameters: { description: "Update a user_upload" }
    });
}

// GET one
function getUser_upload(realm_id_str, filename) {
  svc.get("/user_uploads/" + realm_id_str + "/"+ filename, {
    parameters: { description: "Get a user_upload" }
  });
}

// LIST all
function listUser_uploads() {
  svc.get("/user_uploads", {
    parameters: { description: "List user_uploads" }
  });
}

// Verify exists (by list)
function verifyUser_uploadExists(realm_id_str, filename) {
  svc.get("/user_uploads", {
    callback: function (response) {
      user_upload = JSON.parse(response.body);
      for (let i = 0; i < user_upload.length; i++) {
        if (user_upload[i].realm_id_str === realm_id_str && user_upload[i].filename === filename) {
          return pvg.success("User_upload exists");
        }
      }
      return pvg.fail("Expected a user_upload to exist but it does not");
    },
    parameters: { description: "Verify user_upload with realm_id_str " + realm_id_str + " and filename " + filename + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUser_uploadDoesNotExist(realm_id_str, filename) {
  svc.get("/user_uploads", {
    callback: function (response) {
      user_upload = JSON.parse(response.body);
      for (let i = 0; i < user_upload.length; i++) {
        if (user_upload[i].realm_id_str === realm_id_str && user_upload[i].filename === filename) {
          return pvg.fail("Expected a user_upload to not exist but it does");
        }
      }
      return pvg.success("User_upload does not exist");
    },
    parameters: { description: "Verify user_upload with realm_id_str " + realm_id_str + " and filename " + filename + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser_upload() {
  return bp.EventSet("any-add-user_upload", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user_upload");
  });
}
function matchAddUser_upload(realm_id_str, filename) {
  return bp.EventSet("add-user_upload", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user_upload with realm_id_str " + realm_id_str + " and filename " + filename + "";
  });
}
function matchAnyDeleteUser_upload() {
  return bp.EventSet("any-del-user_upload", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user_upload");
  });
}
function matchDeleteUser_upload(realm_id_str, filename) {
  return bp.EventSet("del-user_upload", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user_upload with realm_id_str " + realm_id_str + " and filename " + filename + "";
  });
}

// Wait helpers
function waitForAnyUser_uploadAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user_upload\ with\ realm_id_str\ (.+) and filename\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user_upload\ with\ realm_id_str\ (.+) and filename\ (.+)$/);
    return { realm_id_str: parseInt(m[1]), filename: (x)=>x(m[2]) };
}
function waitForUser_uploadAdded(realm_id_str, filename) {
  waitFor(matchAddUser_upload(realm_id_str, filename));
}
function waitForUser_uploadDeleted(realm_id_str, filename) {
  waitFor(matchDeleteUser_upload(realm_id_str, filename));
}
function waitForAnyUser_uploadDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user_upload\ with\ realm_id_str\ (.+) and filename\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user_upload\ with\ realm_id_str\ (.+) and filename\ (.+)$/);
    return { realm_id_str: parseInt(m[1]), filename: (x)=>x(m[2]) };
}


/** === User Operations === */

// CREATE
function addUser(user_id, stream_id) {
  svc.post("/users", {
      body: JSON.stringify({ user_id: user_id, stream_id: stream_id }),
      parameters: { description: "Add a user with user_id " + user_id + " and stream_id " + stream_id + "" }
    });
}

// DELETE
function deleteUser(user_id, stream_id) {
  svc.delete("/users/" + user_id + "/"+ stream_id, {
    parameters: { description: "Delete a user with user_id " + user_id + " and stream_id " + stream_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(user_id, stream_id) {
  svc.delete("/users/" + user_id + "/"+ stream_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with user_id " + user_id + " and stream_id " + stream_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(user_id, stream_id) {
  svc.post("/users", {
      body: JSON.stringify({ user_id: user_id, stream_id: stream_id }),
      parameters: { description: "Add a user with user_id " + user_id + " and stream_id " + stream_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with user_id " + user_id + " and stream_id " + stream_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser(user_id, stream_id) {
  svc.put("/users/" + user_id + "/"+ stream_id, {
      body: JSON.stringify({ user_id: user_id, stream_id: stream_id }),
      parameters: { description: "Update a user" }
    });
}

// GET one
function getUser(user_id, stream_id) {
  svc.get("/users/" + user_id + "/"+ stream_id, {
    parameters: { description: "Get a user" }
  });
}

// LIST all
function listUsers() {
  svc.get("/users", {
    parameters: { description: "List users" }
  });
}

// Verify exists (by list)
function verifyUserExists(user_id, stream_id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].user_id === user_id && user[i].stream_id === stream_id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with user_id " + user_id + " and stream_id " + stream_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(user_id, stream_id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].user_id === user_id && user[i].stream_id === stream_id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with user_id " + user_id + " and stream_id " + stream_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(user_id, stream_id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with user_id " + user_id + " and stream_id " + stream_id + "";
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(user_id, stream_id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with user_id " + user_id + " and stream_id " + stream_id + "";
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ user_id\ (.+) and stream_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ user_id\ (.+) and stream_id\ (.+)$/);
    return { user_id: parseInt(m[1]), stream_id: parseInt(m[2]) };
}
function waitForUserAdded(user_id, stream_id) {
  waitFor(matchAddUser(user_id, stream_id));
}
function waitForUserDeleted(user_id, stream_id) {
  waitFor(matchDeleteUser(user_id, stream_id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ user_id\ (.+) and stream_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ user_id\ (.+) and stream_id\ (.+)$/);
    return { user_id: parseInt(m[1]), stream_id: parseInt(m[2]) };
}


/** === Zulip_outgoing_webhook Operations === */

// CREATE
function addZulip_outgoing_webhook(id) {
  svc.post("/zulip_outgoing_webhook", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a zulip_outgoing_webhook with id " + id + "" }
    });
}

// DELETE
function deleteZulip_outgoing_webhook(id) {
  svc.delete("/zulip_outgoing_webhook/" + id, {
    parameters: { description: "Delete a zulip_outgoing_webhook with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingZulip_outgoing_webhook(id) {
  svc.delete("/zulip_outgoing_webhook/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a zulip_outgoing_webhook with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingZulip_outgoing_webhook(id) {
  svc.post("/zulip_outgoing_webhook", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a zulip_outgoing_webhook with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a zulip_outgoing_webhook with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateZulip_outgoing_webhook(id) {
  svc.put("/zulip_outgoing_webhook/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a zulip_outgoing_webhook" }
    });
}

// GET one
function getZulip_outgoing_webhook(id) {
  svc.get("/zulip_outgoing_webhook/" + id, {
    parameters: { description: "Get a zulip_outgoing_webhook" }
  });
}

// LIST all
function listZulip_outgoing_webhook() {
  svc.get("/zulip_outgoing_webhook", {
    parameters: { description: "List zulip_outgoing_webhook" }
  });
}

// Verify exists (by list)
function verifyZulip_outgoing_webhookExists(id) {
  svc.get("/zulip_outgoing_webhook", {
    callback: function (response) {
      zulip_outgoing_webhook = JSON.parse(response.body);
      for (let i = 0; i < zulip_outgoing_webhook.length; i++) {
        if (zulip_outgoing_webhook[i].id === id) {
          return pvg.success("Zulip_outgoing_webhook exists");
        }
      }
      return pvg.fail("Expected a zulip_outgoing_webhook to exist but it does not");
    },
    parameters: { description: "Verify zulip_outgoing_webhook with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyZulip_outgoing_webhookDoesNotExist(id) {
  svc.get("/zulip_outgoing_webhook", {
    callback: function (response) {
      zulip_outgoing_webhook = JSON.parse(response.body);
      for (let i = 0; i < zulip_outgoing_webhook.length; i++) {
        if (zulip_outgoing_webhook[i].id === id) {
          return pvg.fail("Expected a zulip_outgoing_webhook to not exist but it does");
        }
      }
      return pvg.success("Zulip_outgoing_webhook does not exist");
    },
    parameters: { description: "Verify zulip_outgoing_webhook with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddZulip_outgoing_webhook() {
  return bp.EventSet("any-add-zulip_outgoing_webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a zulip_outgoing_webhook");
  });
}
function matchAddZulip_outgoing_webhook(id) {
  return bp.EventSet("add-zulip_outgoing_webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a zulip_outgoing_webhook with id " + id + "";
  });
}
function matchAnyDeleteZulip_outgoing_webhook() {
  return bp.EventSet("any-del-zulip_outgoing_webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a zulip_outgoing_webhook");
  });
}
function matchDeleteZulip_outgoing_webhook(id) {
  return bp.EventSet("del-zulip_outgoing_webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a zulip_outgoing_webhook with id " + id + "";
  });
}

// Wait helpers
function waitForAnyZulip_outgoing_webhookAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ zulip_outgoing_webhook\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ zulip_outgoing_webhook\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForZulip_outgoing_webhookAdded(id) {
  waitFor(matchAddZulip_outgoing_webhook(id));
}
function waitForZulip_outgoing_webhookDeleted(id) {
  waitFor(matchDeleteZulip_outgoing_webhook(id));
}
function waitForAnyZulip_outgoing_webhookDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ zulip_outgoing_webhook\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ zulip_outgoing_webhook\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

