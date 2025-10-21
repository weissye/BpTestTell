//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 * This approximates the "Library SUT" interface style.
 */

// CHANGE (1): add default host/port placeholders before RESTSession
var host = (typeof host !== 'undefined') ? host : '192.168.225.39';
var port = (typeof port !== 'undefined') ? port : 5014;

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

/** === Activity Operations === */

// CREATE
function addActivity(id) {
  svc.post("/activity", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a activity with id " + id + "" }
    });
}

// DELETE
function deleteActivity(id) {
  svc.delete("/activity/" + id, {
    parameters: { description: "Delete a activity with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingActivity(id) {
  svc.delete("/activity/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a activity with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingActivity(id) {
  svc.post("/activity", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a activity with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a activity with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateActivity(id) {
  svc.put("/activity/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a activity with id " + id + "" }
    });
}

// GET one
function getActivity(id) {
  svc.get("/activity/" + id, {
    parameters: { description: "Get a activity with id " + id + "" }
  });
}

// LIST all
function listActivity() {
  svc.get("/activity", {
    parameters: { description: "List activity" }
  });
}

// Verify exists (by list)
function verifyActivityExists(id) {
  svc.get("/activity", {
    callback: function (response) {
      activity = JSON.parse(response.body);
      for (let i = 0; i < activity.length; i++) {
        if (activity[i].id === id) {
          return pvg.success("Activity exists");
        }
      }
      return pvg.fail("Expected a activity to exist but it does not");
    },
    parameters: { description: "Verify activity with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyActivityDoesNotExist(id) {
  svc.get("/activity", {
    callback: function (response) {
      activity = JSON.parse(response.body);
      for (let i = 0; i < activity.length; i++) {
        if (activity[i].id === id) {
          return pvg.fail("Expected a activity to not exist but it does");
        }
      }
      return pvg.success("Activity does not exist");
    },
    parameters: { description: "Verify activity with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddActivity() {
  return bp.EventSet("any-add-activity", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a activity");
  });
}
function matchAddActivity(id) {
  return bp.EventSet("add-activity", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a activity with id " + id + "";
  });
}
function matchAnyDeleteActivity() {
  return bp.EventSet("any-del-activity", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a activity");
  });
}
function matchDeleteActivity(id) {
  return bp.EventSet("del-activity", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a activity with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateActivity() {
  return bp.EventSet("any-update-activity", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a activity");
  });
}
function matchUpdateActivity(id) {
  return bp.EventSet("update-activity", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a activity with id " + id + "";
  });
}

// Wait helpers
function waitForAnyActivityAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ activity\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ activity\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForActivityAdded(id) {
  waitFor(matchAddActivity(id));
}
function waitForActivityDeleted(id) {
  waitFor(matchDeleteActivity(id));
}
function waitForAnyActivityDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ activity\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ activity\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForActivityUpdated(id) {
  waitFor(matchUpdateActivity(id));
}
function waitForAnyActivityUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ activity\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ activity\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyActivityUpdated(id) {
  svc.get("/activity", {
    callback: function (response) {
      activity = JSON.parse(response.body);
      for (let i = 0; i < activity.length; i++) {
        if (activity[i].id === id) {
          return pvg.success("Activity updated (present)");
        }
      }
      return pvg.fail("Expected a activity to be present after update, but it is not");
    },
    parameters: { description: "Verify activity with id " + id + " exists" }
  });
}


/** === Asset Operations === */

// CREATE
function addAsset(id) {
  svc.post("/assets", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a asset with id " + id + "" }
    });
}

// DELETE
function deleteAsset(id) {
  svc.delete("/assets/" + id, {
    parameters: { description: "Delete a asset with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAsset(id) {
  svc.delete("/assets/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a asset with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAsset(id) {
  svc.post("/assets", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a asset with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a asset with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateAsset(id) {
  svc.put("/assets/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a asset with id " + id + "" }
    });
}

// GET one
function getAsset(id) {
  svc.get("/assets/" + id, {
    parameters: { description: "Get a asset with id " + id + "" }
  });
}

// LIST all
function listAssets() {
  svc.get("/assets", {
    parameters: { description: "List assets" }
  });
}

// Verify exists (by list)
function verifyAssetExists(id) {
  svc.get("/assets", {
    callback: function (response) {
      asset = JSON.parse(response.body);
      for (let i = 0; i < asset.length; i++) {
        if (asset[i].id === id) {
          return pvg.success("Asset exists");
        }
      }
      return pvg.fail("Expected a asset to exist but it does not");
    },
    parameters: { description: "Verify asset with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAssetDoesNotExist(id) {
  svc.get("/assets", {
    callback: function (response) {
      asset = JSON.parse(response.body);
      for (let i = 0; i < asset.length; i++) {
        if (asset[i].id === id) {
          return pvg.fail("Expected a asset to not exist but it does");
        }
      }
      return pvg.success("Asset does not exist");
    },
    parameters: { description: "Verify asset with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAsset() {
  return bp.EventSet("any-add-asset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a asset");
  });
}
function matchAddAsset(id) {
  return bp.EventSet("add-asset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a asset with id " + id + "";
  });
}
function matchAnyDeleteAsset() {
  return bp.EventSet("any-del-asset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a asset");
  });
}
function matchDeleteAsset(id) {
  return bp.EventSet("del-asset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a asset with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAsset() {
  return bp.EventSet("any-update-asset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a asset");
  });
}
function matchUpdateAsset(id) {
  return bp.EventSet("update-asset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a asset with id " + id + "";
  });
}

// Wait helpers
function waitForAnyAssetAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ asset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ asset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAssetAdded(id) {
  waitFor(matchAddAsset(id));
}
function waitForAssetDeleted(id) {
  waitFor(matchDeleteAsset(id));
}
function waitForAnyAssetDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ asset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ asset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAssetUpdated(id) {
  waitFor(matchUpdateAsset(id));
}
function waitForAnyAssetUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ asset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ asset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyAssetUpdated(id) {
  svc.get("/assets", {
    callback: function (response) {
      asset = JSON.parse(response.body);
      for (let i = 0; i < asset.length; i++) {
        if (asset[i].id === id) {
          return pvg.success("Asset updated (present)");
        }
      }
      return pvg.fail("Expected a asset to be present after update, but it is not");
    },
    parameters: { description: "Verify asset with id " + id + " exists" }
  });
}


/** === Auth Operations === */

// CREATE
function addAuth(provider) {
  svc.post("/auth", {
      body: JSON.stringify({ provider: provider }),
      parameters: { description: "Add a auth with provider " + provider + "" }
    });
}

// DELETE
function deleteAuth(provider) {
  svc.delete("/auth/" + provider, {
    parameters: { description: "Delete a auth with provider " + provider + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAuth(provider) {
  svc.delete("/auth/" + provider, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a auth with provider " + provider + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAuth(provider) {
  svc.post("/auth", {
      body: JSON.stringify({ provider: provider }),
      parameters: { description: "Add a auth with provider " + provider + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a auth with provider " + provider + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateAuth(provider) {
  svc.put("/auth/" + provider, {
      body: JSON.stringify({ provider: provider }),
      parameters: { description: "Update a auth with provider " + provider + "" }
    });
}

// GET one
function getAuth(provider) {
  svc.get("/auth/" + provider, {
    parameters: { description: "Get a auth with provider " + provider + "" }
  });
}

// LIST all
function listAuth() {
  svc.get("/auth", {
    parameters: { description: "List auth" }
  });
}

// Verify exists (by list)
function verifyAuthExists(provider) {
  svc.get("/auth", {
    callback: function (response) {
      auth = JSON.parse(response.body);
      for (let i = 0; i < auth.length; i++) {
        if (auth[i].provider === provider) {
          return pvg.success("Auth exists");
        }
      }
      return pvg.fail("Expected a auth to exist but it does not");
    },
    parameters: { description: "Verify auth with provider " + provider + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAuthDoesNotExist(provider) {
  svc.get("/auth", {
    callback: function (response) {
      auth = JSON.parse(response.body);
      for (let i = 0; i < auth.length; i++) {
        if (auth[i].provider === provider) {
          return pvg.fail("Expected a auth to not exist but it does");
        }
      }
      return pvg.success("Auth does not exist");
    },
    parameters: { description: "Verify auth with provider " + provider + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAuth() {
  return bp.EventSet("any-add-auth", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a auth");
  });
}
function matchAddAuth(provider) {
  return bp.EventSet("add-auth", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a auth with provider " + provider + "";
  });
}
function matchAnyDeleteAuth() {
  return bp.EventSet("any-del-auth", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a auth");
  });
}
function matchDeleteAuth(provider) {
  return bp.EventSet("del-auth", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a auth with provider " + provider + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAuth() {
  return bp.EventSet("any-update-auth", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a auth");
  });
}
function matchUpdateAuth(provider) {
  return bp.EventSet("update-auth", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a auth with provider " + provider + "";
  });
}

// Wait helpers
function waitForAnyAuthAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ auth\ with\ provider\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ auth\ with\ provider\ (.+)$/);
    return { provider: (x)=>x(m[1]) };
}
function waitForAuthAdded(provider) {
  waitFor(matchAddAuth(provider));
}
function waitForAuthDeleted(provider) {
  waitFor(matchDeleteAuth(provider));
}
function waitForAnyAuthDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ auth\ with\ provider\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ auth\ with\ provider\ (.+)$/);
    return { provider: (x)=>x(m[1]) };
}
function waitForAuthUpdated(provider) {
  waitFor(matchUpdateAuth(provider));
}
function waitForAnyAuthUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ auth\ with\ provider\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ auth\ with\ provider\ (.+)$/);
    return { provider: (x)=>x(m[1]) };
}

// Verify updated (presence-by-list)
function verifyAuthUpdated(provider) {
  svc.get("/auth", {
    callback: function (response) {
      auth = JSON.parse(response.body);
      for (let i = 0; i < auth.length; i++) {
        if (auth[i].provider === provider) {
          return pvg.success("Auth updated (present)");
        }
      }
      return pvg.fail("Expected a auth to be present after update, but it is not");
    },
    parameters: { description: "Verify auth with provider " + provider + " exists" }
  });
}


/** === Collection Operations === */

// CREATE
function addCollection(id) {
  svc.post("/collections", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a collection with id " + id + "" }
    });
}

// DELETE
function deleteCollection(id) {
  svc.delete("/collections/" + id, {
    parameters: { description: "Delete a collection with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCollection(id) {
  svc.delete("/collections/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a collection with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCollection(id) {
  svc.post("/collections", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a collection with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a collection with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCollection(id) {
  svc.put("/collections/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a collection with id " + id + "" }
    });
}

// GET one
function getCollection(id) {
  svc.get("/collections/" + id, {
    parameters: { description: "Get a collection with id " + id + "" }
  });
}

// LIST all
function listCollections() {
  svc.get("/collections", {
    parameters: { description: "List collections" }
  });
}

// Verify exists (by list)
function verifyCollectionExists(id) {
  svc.get("/collections", {
    callback: function (response) {
      collection = JSON.parse(response.body);
      for (let i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
          return pvg.success("Collection exists");
        }
      }
      return pvg.fail("Expected a collection to exist but it does not");
    },
    parameters: { description: "Verify collection with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCollectionDoesNotExist(id) {
  svc.get("/collections", {
    callback: function (response) {
      collection = JSON.parse(response.body);
      for (let i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
          return pvg.fail("Expected a collection to not exist but it does");
        }
      }
      return pvg.success("Collection does not exist");
    },
    parameters: { description: "Verify collection with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCollection() {
  return bp.EventSet("any-add-collection", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a collection");
  });
}
function matchAddCollection(id) {
  return bp.EventSet("add-collection", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a collection with id " + id + "";
  });
}
function matchAnyDeleteCollection() {
  return bp.EventSet("any-del-collection", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a collection");
  });
}
function matchDeleteCollection(id) {
  return bp.EventSet("del-collection", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a collection with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateCollection() {
  return bp.EventSet("any-update-collection", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a collection");
  });
}
function matchUpdateCollection(id) {
  return bp.EventSet("update-collection", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a collection with id " + id + "";
  });
}

// Wait helpers
function waitForAnyCollectionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ collection\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ collection\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCollectionAdded(id) {
  waitFor(matchAddCollection(id));
}
function waitForCollectionDeleted(id) {
  waitFor(matchDeleteCollection(id));
}
function waitForAnyCollectionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ collection\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ collection\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCollectionUpdated(id) {
  waitFor(matchUpdateCollection(id));
}
function waitForAnyCollectionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ collection\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ collection\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyCollectionUpdated(id) {
  svc.get("/collections", {
    callback: function (response) {
      collection = JSON.parse(response.body);
      for (let i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
          return pvg.success("Collection updated (present)");
        }
      }
      return pvg.fail("Expected a collection to be present after update, but it is not");
    },
    parameters: { description: "Verify collection with id " + id + " exists" }
  });
}


/** === Comment Operations === */

// CREATE
function addComment(id) {
  svc.post("/comments", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a comment with id " + id + "" }
    });
}

// DELETE
function deleteComment(id) {
  svc.delete("/comments/" + id, {
    parameters: { description: "Delete a comment with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingComment(id) {
  svc.delete("/comments/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a comment with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingComment(id) {
  svc.post("/comments", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a comment with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a comment with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateComment(id) {
  svc.put("/comments/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a comment with id " + id + "" }
    });
}

// GET one
function getComment(id) {
  svc.get("/comments/" + id, {
    parameters: { description: "Get a comment with id " + id + "" }
  });
}

// LIST all
function listComments() {
  svc.get("/comments", {
    parameters: { description: "List comments" }
  });
}

// Verify exists (by list)
function verifyCommentExists(id) {
  svc.get("/comments", {
    callback: function (response) {
      comment = JSON.parse(response.body);
      for (let i = 0; i < comment.length; i++) {
        if (comment[i].id === id) {
          return pvg.success("Comment exists");
        }
      }
      return pvg.fail("Expected a comment to exist but it does not");
    },
    parameters: { description: "Verify comment with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCommentDoesNotExist(id) {
  svc.get("/comments", {
    callback: function (response) {
      comment = JSON.parse(response.body);
      for (let i = 0; i < comment.length; i++) {
        if (comment[i].id === id) {
          return pvg.fail("Expected a comment to not exist but it does");
        }
      }
      return pvg.success("Comment does not exist");
    },
    parameters: { description: "Verify comment with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddComment() {
  return bp.EventSet("any-add-comment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a comment");
  });
}
function matchAddComment(id) {
  return bp.EventSet("add-comment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a comment with id " + id + "";
  });
}
function matchAnyDeleteComment() {
  return bp.EventSet("any-del-comment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a comment");
  });
}
function matchDeleteComment(id) {
  return bp.EventSet("del-comment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a comment with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateComment() {
  return bp.EventSet("any-update-comment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a comment");
  });
}
function matchUpdateComment(id) {
  return bp.EventSet("update-comment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a comment with id " + id + "";
  });
}

// Wait helpers
function waitForAnyCommentAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ comment\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ comment\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCommentAdded(id) {
  waitFor(matchAddComment(id));
}
function waitForCommentDeleted(id) {
  waitFor(matchDeleteComment(id));
}
function waitForAnyCommentDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ comment\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ comment\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCommentUpdated(id) {
  waitFor(matchUpdateComment(id));
}
function waitForAnyCommentUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ comment\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ comment\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyCommentUpdated(id) {
  svc.get("/comments", {
    callback: function (response) {
      comment = JSON.parse(response.body);
      for (let i = 0; i < comment.length; i++) {
        if (comment[i].id === id) {
          return pvg.success("Comment updated (present)");
        }
      }
      return pvg.fail("Expected a comment to be present after update, but it is not");
    },
    parameters: { description: "Verify comment with id " + id + " exists" }
  });
}


/** === Extension Operations === */

// CREATE
function addExtension(id) {
  svc.post("/extensions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a extension with id " + id + "" }
    });
}

// DELETE
function deleteExtension(id) {
  svc.delete("/extensions/" + id, {
    parameters: { description: "Delete a extension with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingExtension(id) {
  svc.delete("/extensions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a extension with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingExtension(id) {
  svc.post("/extensions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a extension with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a extension with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateExtension(id) {
  svc.put("/extensions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a extension with id " + id + "" }
    });
}

// GET one
function getExtension(id) {
  svc.get("/extensions/" + id, {
    parameters: { description: "Get a extension with id " + id + "" }
  });
}

// LIST all
function listExtensions() {
  svc.get("/extensions", {
    parameters: { description: "List extensions" }
  });
}

// Verify exists (by list)
function verifyExtensionExists(id) {
  svc.get("/extensions", {
    callback: function (response) {
      extension = JSON.parse(response.body);
      for (let i = 0; i < extension.length; i++) {
        if (extension[i].id === id) {
          return pvg.success("Extension exists");
        }
      }
      return pvg.fail("Expected a extension to exist but it does not");
    },
    parameters: { description: "Verify extension with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyExtensionDoesNotExist(id) {
  svc.get("/extensions", {
    callback: function (response) {
      extension = JSON.parse(response.body);
      for (let i = 0; i < extension.length; i++) {
        if (extension[i].id === id) {
          return pvg.fail("Expected a extension to not exist but it does");
        }
      }
      return pvg.success("Extension does not exist");
    },
    parameters: { description: "Verify extension with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddExtension() {
  return bp.EventSet("any-add-extension", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a extension");
  });
}
function matchAddExtension(id) {
  return bp.EventSet("add-extension", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a extension with id " + id + "";
  });
}
function matchAnyDeleteExtension() {
  return bp.EventSet("any-del-extension", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a extension");
  });
}
function matchDeleteExtension(id) {
  return bp.EventSet("del-extension", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a extension with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateExtension() {
  return bp.EventSet("any-update-extension", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a extension");
  });
}
function matchUpdateExtension(id) {
  return bp.EventSet("update-extension", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a extension with id " + id + "";
  });
}

// Wait helpers
function waitForAnyExtensionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ extension\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ extension\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForExtensionAdded(id) {
  waitFor(matchAddExtension(id));
}
function waitForExtensionDeleted(id) {
  waitFor(matchDeleteExtension(id));
}
function waitForAnyExtensionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ extension\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ extension\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForExtensionUpdated(id) {
  waitFor(matchUpdateExtension(id));
}
function waitForAnyExtensionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ extension\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ extension\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyExtensionUpdated(id) {
  svc.get("/extensions", {
    callback: function (response) {
      extension = JSON.parse(response.body);
      for (let i = 0; i < extension.length; i++) {
        if (extension[i].id === id) {
          return pvg.success("Extension updated (present)");
        }
      }
      return pvg.fail("Expected a extension to be present after update, but it is not");
    },
    parameters: { description: "Verify extension with id " + id + " exists" }
  });
}


/** === Field Operations === */

// CREATE
function addField(id) {
  svc.post("/fields", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a field with id " + id + "" }
    });
}

// DELETE
function deleteField(id) {
  svc.delete("/fields/" + id, {
    parameters: { description: "Delete a field with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingField(id) {
  svc.delete("/fields/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a field with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingField(id) {
  svc.post("/fields", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a field with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a field with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateField(id) {
  svc.put("/fields/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a field with id " + id + "" }
    });
}

// GET one
function getField(id) {
  svc.get("/fields/" + id, {
    parameters: { description: "Get a field with id " + id + "" }
  });
}

// LIST all
function listFields() {
  svc.get("/fields", {
    parameters: { description: "List fields" }
  });
}

// Verify exists (by list)
function verifyFieldExists(id) {
  svc.get("/fields", {
    callback: function (response) {
      field = JSON.parse(response.body);
      for (let i = 0; i < field.length; i++) {
        if (field[i].id === id) {
          return pvg.success("Field exists");
        }
      }
      return pvg.fail("Expected a field to exist but it does not");
    },
    parameters: { description: "Verify field with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyFieldDoesNotExist(id) {
  svc.get("/fields", {
    callback: function (response) {
      field = JSON.parse(response.body);
      for (let i = 0; i < field.length; i++) {
        if (field[i].id === id) {
          return pvg.fail("Expected a field to not exist but it does");
        }
      }
      return pvg.success("Field does not exist");
    },
    parameters: { description: "Verify field with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddField() {
  return bp.EventSet("any-add-field", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a field");
  });
}
function matchAddField(id) {
  return bp.EventSet("add-field", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a field with id " + id + "";
  });
}
function matchAnyDeleteField() {
  return bp.EventSet("any-del-field", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a field");
  });
}
function matchDeleteField(id) {
  return bp.EventSet("del-field", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a field with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateField() {
  return bp.EventSet("any-update-field", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a field");
  });
}
function matchUpdateField(id) {
  return bp.EventSet("update-field", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a field with id " + id + "";
  });
}

// Wait helpers
function waitForAnyFieldAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ field\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ field\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFieldAdded(id) {
  waitFor(matchAddField(id));
}
function waitForFieldDeleted(id) {
  waitFor(matchDeleteField(id));
}
function waitForAnyFieldDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ field\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ field\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFieldUpdated(id) {
  waitFor(matchUpdateField(id));
}
function waitForAnyFieldUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ field\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ field\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyFieldUpdated(id) {
  svc.get("/fields", {
    callback: function (response) {
      field = JSON.parse(response.body);
      for (let i = 0; i < field.length; i++) {
        if (field[i].id === id) {
          return pvg.success("Field updated (present)");
        }
      }
      return pvg.fail("Expected a field to be present after update, but it is not");
    },
    parameters: { description: "Verify field with id " + id + " exists" }
  });
}


/** === File Operations === */

// CREATE
function addFile(id) {
  svc.post("/files", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a file with id " + id + "" }
    });
}

// DELETE
function deleteFile(id) {
  svc.delete("/files/" + id, {
    parameters: { description: "Delete a file with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingFile(id) {
  svc.delete("/files/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a file with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingFile(id) {
  svc.post("/files", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a file with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a file with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateFile(id) {
  svc.put("/files/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a file with id " + id + "" }
    });
}

// GET one
function getFile(id) {
  svc.get("/files/" + id, {
    parameters: { description: "Get a file with id " + id + "" }
  });
}

// LIST all
function listFiles() {
  svc.get("/files", {
    parameters: { description: "List files" }
  });
}

// Verify exists (by list)
function verifyFileExists(id) {
  svc.get("/files", {
    callback: function (response) {
      file = JSON.parse(response.body);
      for (let i = 0; i < file.length; i++) {
        if (file[i].id === id) {
          return pvg.success("File exists");
        }
      }
      return pvg.fail("Expected a file to exist but it does not");
    },
    parameters: { description: "Verify file with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyFileDoesNotExist(id) {
  svc.get("/files", {
    callback: function (response) {
      file = JSON.parse(response.body);
      for (let i = 0; i < file.length; i++) {
        if (file[i].id === id) {
          return pvg.fail("Expected a file to not exist but it does");
        }
      }
      return pvg.success("File does not exist");
    },
    parameters: { description: "Verify file with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddFile() {
  return bp.EventSet("any-add-file", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a file");
  });
}
function matchAddFile(id) {
  return bp.EventSet("add-file", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a file with id " + id + "";
  });
}
function matchAnyDeleteFile() {
  return bp.EventSet("any-del-file", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a file");
  });
}
function matchDeleteFile(id) {
  return bp.EventSet("del-file", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a file with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateFile() {
  return bp.EventSet("any-update-file", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a file");
  });
}
function matchUpdateFile(id) {
  return bp.EventSet("update-file", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a file with id " + id + "";
  });
}

// Wait helpers
function waitForAnyFileAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ file\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ file\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFileAdded(id) {
  waitFor(matchAddFile(id));
}
function waitForFileDeleted(id) {
  waitFor(matchDeleteFile(id));
}
function waitForAnyFileDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ file\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ file\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFileUpdated(id) {
  waitFor(matchUpdateFile(id));
}
function waitForAnyFileUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ file\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ file\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyFileUpdated(id) {
  svc.get("/files", {
    callback: function (response) {
      file = JSON.parse(response.body);
      for (let i = 0; i < file.length; i++) {
        if (file[i].id === id) {
          return pvg.success("File updated (present)");
        }
      }
      return pvg.fail("Expected a file to be present after update, but it is not");
    },
    parameters: { description: "Verify file with id " + id + " exists" }
  });
}


/** === Flow Operations === */

// CREATE
function addFlow(id) {
  svc.post("/flows", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a flow with id " + id + "" }
    });
}

// DELETE
function deleteFlow(id) {
  svc.delete("/flows/" + id, {
    parameters: { description: "Delete a flow with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingFlow(id) {
  svc.delete("/flows/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a flow with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingFlow(id) {
  svc.post("/flows", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a flow with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a flow with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateFlow(id) {
  svc.put("/flows/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a flow with id " + id + "" }
    });
}

// GET one
function getFlow(id) {
  svc.get("/flows/" + id, {
    parameters: { description: "Get a flow with id " + id + "" }
  });
}

// LIST all
function listFlows() {
  svc.get("/flows", {
    parameters: { description: "List flows" }
  });
}

// Verify exists (by list)
function verifyFlowExists(id) {
  svc.get("/flows", {
    callback: function (response) {
      flow = JSON.parse(response.body);
      for (let i = 0; i < flow.length; i++) {
        if (flow[i].id === id) {
          return pvg.success("Flow exists");
        }
      }
      return pvg.fail("Expected a flow to exist but it does not");
    },
    parameters: { description: "Verify flow with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyFlowDoesNotExist(id) {
  svc.get("/flows", {
    callback: function (response) {
      flow = JSON.parse(response.body);
      for (let i = 0; i < flow.length; i++) {
        if (flow[i].id === id) {
          return pvg.fail("Expected a flow to not exist but it does");
        }
      }
      return pvg.success("Flow does not exist");
    },
    parameters: { description: "Verify flow with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddFlow() {
  return bp.EventSet("any-add-flow", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a flow");
  });
}
function matchAddFlow(id) {
  return bp.EventSet("add-flow", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a flow with id " + id + "";
  });
}
function matchAnyDeleteFlow() {
  return bp.EventSet("any-del-flow", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a flow");
  });
}
function matchDeleteFlow(id) {
  return bp.EventSet("del-flow", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a flow with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateFlow() {
  return bp.EventSet("any-update-flow", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a flow");
  });
}
function matchUpdateFlow(id) {
  return bp.EventSet("update-flow", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a flow with id " + id + "";
  });
}

// Wait helpers
function waitForAnyFlowAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ flow\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ flow\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFlowAdded(id) {
  waitFor(matchAddFlow(id));
}
function waitForFlowDeleted(id) {
  waitFor(matchDeleteFlow(id));
}
function waitForAnyFlowDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ flow\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ flow\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFlowUpdated(id) {
  waitFor(matchUpdateFlow(id));
}
function waitForAnyFlowUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ flow\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ flow\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyFlowUpdated(id) {
  svc.get("/flows", {
    callback: function (response) {
      flow = JSON.parse(response.body);
      for (let i = 0; i < flow.length; i++) {
        if (flow[i].id === id) {
          return pvg.success("Flow updated (present)");
        }
      }
      return pvg.fail("Expected a flow to be present after update, but it is not");
    },
    parameters: { description: "Verify flow with id " + id + " exists" }
  });
}


/** === Folder Operations === */

// CREATE
function addFolder(id) {
  svc.post("/folders", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a folder with id " + id + "" }
    });
}

// DELETE
function deleteFolder(id) {
  svc.delete("/folders/" + id, {
    parameters: { description: "Delete a folder with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingFolder(id) {
  svc.delete("/folders/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a folder with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingFolder(id) {
  svc.post("/folders", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a folder with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a folder with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateFolder(id) {
  svc.put("/folders/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a folder with id " + id + "" }
    });
}

// GET one
function getFolder(id) {
  svc.get("/folders/" + id, {
    parameters: { description: "Get a folder with id " + id + "" }
  });
}

// LIST all
function listFolders() {
  svc.get("/folders", {
    parameters: { description: "List folders" }
  });
}

// Verify exists (by list)
function verifyFolderExists(id) {
  svc.get("/folders", {
    callback: function (response) {
      folder = JSON.parse(response.body);
      for (let i = 0; i < folder.length; i++) {
        if (folder[i].id === id) {
          return pvg.success("Folder exists");
        }
      }
      return pvg.fail("Expected a folder to exist but it does not");
    },
    parameters: { description: "Verify folder with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyFolderDoesNotExist(id) {
  svc.get("/folders", {
    callback: function (response) {
      folder = JSON.parse(response.body);
      for (let i = 0; i < folder.length; i++) {
        if (folder[i].id === id) {
          return pvg.fail("Expected a folder to not exist but it does");
        }
      }
      return pvg.success("Folder does not exist");
    },
    parameters: { description: "Verify folder with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddFolder() {
  return bp.EventSet("any-add-folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a folder");
  });
}
function matchAddFolder(id) {
  return bp.EventSet("add-folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a folder with id " + id + "";
  });
}
function matchAnyDeleteFolder() {
  return bp.EventSet("any-del-folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a folder");
  });
}
function matchDeleteFolder(id) {
  return bp.EventSet("del-folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a folder with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateFolder() {
  return bp.EventSet("any-update-folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a folder");
  });
}
function matchUpdateFolder(id) {
  return bp.EventSet("update-folder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a folder with id " + id + "";
  });
}

// Wait helpers
function waitForAnyFolderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ folder\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ folder\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFolderAdded(id) {
  waitFor(matchAddFolder(id));
}
function waitForFolderDeleted(id) {
  waitFor(matchDeleteFolder(id));
}
function waitForAnyFolderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ folder\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ folder\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFolderUpdated(id) {
  waitFor(matchUpdateFolder(id));
}
function waitForAnyFolderUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ folder\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ folder\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyFolderUpdated(id) {
  svc.get("/folders", {
    callback: function (response) {
      folder = JSON.parse(response.body);
      for (let i = 0; i < folder.length; i++) {
        if (folder[i].id === id) {
          return pvg.success("Folder updated (present)");
        }
      }
      return pvg.fail("Expected a folder to be present after update, but it is not");
    },
    parameters: { description: "Verify folder with id " + id + " exists" }
  });
}


/** === Item Operations === */

// CREATE
function addItem(id) {
  svc.post("/items", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a item with id " + id + "" }
    });
}

// DELETE
function deleteItem(id) {
  svc.delete("/items/" + id, {
    parameters: { description: "Delete a item with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingItem(id) {
  svc.delete("/items/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a item with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingItem(id) {
  svc.post("/items", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a item with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a item with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateItem(id) {
  svc.put("/items/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a item with id " + id + "" }
    });
}

// GET one
function getItem(id) {
  svc.get("/items/" + id, {
    parameters: { description: "Get a item with id " + id + "" }
  });
}

// LIST all
function listItems() {
  svc.get("/items", {
    parameters: { description: "List items" }
  });
}

// Verify exists (by list)
function verifyItemExists(id) {
  svc.get("/items", {
    callback: function (response) {
      item = JSON.parse(response.body);
      for (let i = 0; i < item.length; i++) {
        if (item[i].id === id) {
          return pvg.success("Item exists");
        }
      }
      return pvg.fail("Expected a item to exist but it does not");
    },
    parameters: { description: "Verify item with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyItemDoesNotExist(id) {
  svc.get("/items", {
    callback: function (response) {
      item = JSON.parse(response.body);
      for (let i = 0; i < item.length; i++) {
        if (item[i].id === id) {
          return pvg.fail("Expected a item to not exist but it does");
        }
      }
      return pvg.success("Item does not exist");
    },
    parameters: { description: "Verify item with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddItem() {
  return bp.EventSet("any-add-item", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a item");
  });
}
function matchAddItem(id) {
  return bp.EventSet("add-item", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a item with id " + id + "";
  });
}
function matchAnyDeleteItem() {
  return bp.EventSet("any-del-item", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a item");
  });
}
function matchDeleteItem(id) {
  return bp.EventSet("del-item", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a item with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateItem() {
  return bp.EventSet("any-update-item", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a item");
  });
}
function matchUpdateItem(id) {
  return bp.EventSet("update-item", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a item with id " + id + "";
  });
}

// Wait helpers
function waitForAnyItemAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ item\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ item\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForItemAdded(id) {
  waitFor(matchAddItem(id));
}
function waitForItemDeleted(id) {
  waitFor(matchDeleteItem(id));
}
function waitForAnyItemDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ item\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ item\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForItemUpdated(id) {
  waitFor(matchUpdateItem(id));
}
function waitForAnyItemUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ item\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ item\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyItemUpdated(id) {
  svc.get("/items", {
    callback: function (response) {
      item = JSON.parse(response.body);
      for (let i = 0; i < item.length; i++) {
        if (item[i].id === id) {
          return pvg.success("Item updated (present)");
        }
      }
      return pvg.fail("Expected a item to be present after update, but it is not");
    },
    parameters: { description: "Verify item with id " + id + " exists" }
  });
}


/** === Operation Operations === */

// CREATE
function addOperation(id) {
  svc.post("/operations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a operation with id " + id + "" }
    });
}

// DELETE
function deleteOperation(id) {
  svc.delete("/operations/" + id, {
    parameters: { description: "Delete a operation with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOperation(id) {
  svc.delete("/operations/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a operation with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOperation(id) {
  svc.post("/operations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a operation with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a operation with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateOperation(id) {
  svc.put("/operations/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a operation with id " + id + "" }
    });
}

// GET one
function getOperation(id) {
  svc.get("/operations/" + id, {
    parameters: { description: "Get a operation with id " + id + "" }
  });
}

// LIST all
function listOperations() {
  svc.get("/operations", {
    parameters: { description: "List operations" }
  });
}

// Verify exists (by list)
function verifyOperationExists(id) {
  svc.get("/operations", {
    callback: function (response) {
      operation = JSON.parse(response.body);
      for (let i = 0; i < operation.length; i++) {
        if (operation[i].id === id) {
          return pvg.success("Operation exists");
        }
      }
      return pvg.fail("Expected a operation to exist but it does not");
    },
    parameters: { description: "Verify operation with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOperationDoesNotExist(id) {
  svc.get("/operations", {
    callback: function (response) {
      operation = JSON.parse(response.body);
      for (let i = 0; i < operation.length; i++) {
        if (operation[i].id === id) {
          return pvg.fail("Expected a operation to not exist but it does");
        }
      }
      return pvg.success("Operation does not exist");
    },
    parameters: { description: "Verify operation with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOperation() {
  return bp.EventSet("any-add-operation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a operation");
  });
}
function matchAddOperation(id) {
  return bp.EventSet("add-operation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a operation with id " + id + "";
  });
}
function matchAnyDeleteOperation() {
  return bp.EventSet("any-del-operation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a operation");
  });
}
function matchDeleteOperation(id) {
  return bp.EventSet("del-operation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a operation with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOperation() {
  return bp.EventSet("any-update-operation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a operation");
  });
}
function matchUpdateOperation(id) {
  return bp.EventSet("update-operation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a operation with id " + id + "";
  });
}

// Wait helpers
function waitForAnyOperationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ operation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ operation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForOperationAdded(id) {
  waitFor(matchAddOperation(id));
}
function waitForOperationDeleted(id) {
  waitFor(matchDeleteOperation(id));
}
function waitForAnyOperationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ operation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ operation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForOperationUpdated(id) {
  waitFor(matchUpdateOperation(id));
}
function waitForAnyOperationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ operation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ operation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyOperationUpdated(id) {
  svc.get("/operations", {
    callback: function (response) {
      operation = JSON.parse(response.body);
      for (let i = 0; i < operation.length; i++) {
        if (operation[i].id === id) {
          return pvg.success("Operation updated (present)");
        }
      }
      return pvg.fail("Expected a operation to be present after update, but it is not");
    },
    parameters: { description: "Verify operation with id " + id + " exists" }
  });
}


/** === Permission Operations === */

// CREATE
function addPermission(id) {
  svc.post("/permissions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a permission with id " + id + "" }
    });
}

// DELETE
function deletePermission(id) {
  svc.delete("/permissions/" + id, {
    parameters: { description: "Delete a permission with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPermission(id) {
  svc.delete("/permissions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a permission with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPermission(id) {
  svc.post("/permissions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a permission with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a permission with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePermission(id) {
  svc.put("/permissions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a permission with id " + id + "" }
    });
}

// GET one
function getPermission(id) {
  svc.get("/permissions/" + id, {
    parameters: { description: "Get a permission with id " + id + "" }
  });
}

// LIST all
function listPermissions() {
  svc.get("/permissions", {
    parameters: { description: "List permissions" }
  });
}

// Verify exists (by list)
function verifyPermissionExists(id) {
  svc.get("/permissions", {
    callback: function (response) {
      permission = JSON.parse(response.body);
      for (let i = 0; i < permission.length; i++) {
        if (permission[i].id === id) {
          return pvg.success("Permission exists");
        }
      }
      return pvg.fail("Expected a permission to exist but it does not");
    },
    parameters: { description: "Verify permission with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPermissionDoesNotExist(id) {
  svc.get("/permissions", {
    callback: function (response) {
      permission = JSON.parse(response.body);
      for (let i = 0; i < permission.length; i++) {
        if (permission[i].id === id) {
          return pvg.fail("Expected a permission to not exist but it does");
        }
      }
      return pvg.success("Permission does not exist");
    },
    parameters: { description: "Verify permission with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPermission() {
  return bp.EventSet("any-add-permission", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a permission");
  });
}
function matchAddPermission(id) {
  return bp.EventSet("add-permission", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a permission with id " + id + "";
  });
}
function matchAnyDeletePermission() {
  return bp.EventSet("any-del-permission", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a permission");
  });
}
function matchDeletePermission(id) {
  return bp.EventSet("del-permission", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a permission with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdatePermission() {
  return bp.EventSet("any-update-permission", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a permission");
  });
}
function matchUpdatePermission(id) {
  return bp.EventSet("update-permission", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a permission with id " + id + "";
  });
}

// Wait helpers
function waitForAnyPermissionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ permission\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ permission\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPermissionAdded(id) {
  waitFor(matchAddPermission(id));
}
function waitForPermissionDeleted(id) {
  waitFor(matchDeletePermission(id));
}
function waitForAnyPermissionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ permission\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ permission\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPermissionUpdated(id) {
  waitFor(matchUpdatePermission(id));
}
function waitForAnyPermissionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ permission\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ permission\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyPermissionUpdated(id) {
  svc.get("/permissions", {
    callback: function (response) {
      permission = JSON.parse(response.body);
      for (let i = 0; i < permission.length; i++) {
        if (permission[i].id === id) {
          return pvg.success("Permission updated (present)");
        }
      }
      return pvg.fail("Expected a permission to be present after update, but it is not");
    },
    parameters: { description: "Verify permission with id " + id + " exists" }
  });
}


/** === Preset Operations === */

// CREATE
function addPreset(id) {
  svc.post("/presets", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a preset with id " + id + "" }
    });
}

// DELETE
function deletePreset(id) {
  svc.delete("/presets/" + id, {
    parameters: { description: "Delete a preset with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPreset(id) {
  svc.delete("/presets/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a preset with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPreset(id) {
  svc.post("/presets", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a preset with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a preset with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePreset(id) {
  svc.put("/presets/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a preset with id " + id + "" }
    });
}

// GET one
function getPreset(id) {
  svc.get("/presets/" + id, {
    parameters: { description: "Get a preset with id " + id + "" }
  });
}

// LIST all
function listPresets() {
  svc.get("/presets", {
    parameters: { description: "List presets" }
  });
}

// Verify exists (by list)
function verifyPresetExists(id) {
  svc.get("/presets", {
    callback: function (response) {
      preset = JSON.parse(response.body);
      for (let i = 0; i < preset.length; i++) {
        if (preset[i].id === id) {
          return pvg.success("Preset exists");
        }
      }
      return pvg.fail("Expected a preset to exist but it does not");
    },
    parameters: { description: "Verify preset with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPresetDoesNotExist(id) {
  svc.get("/presets", {
    callback: function (response) {
      preset = JSON.parse(response.body);
      for (let i = 0; i < preset.length; i++) {
        if (preset[i].id === id) {
          return pvg.fail("Expected a preset to not exist but it does");
        }
      }
      return pvg.success("Preset does not exist");
    },
    parameters: { description: "Verify preset with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPreset() {
  return bp.EventSet("any-add-preset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a preset");
  });
}
function matchAddPreset(id) {
  return bp.EventSet("add-preset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a preset with id " + id + "";
  });
}
function matchAnyDeletePreset() {
  return bp.EventSet("any-del-preset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a preset");
  });
}
function matchDeletePreset(id) {
  return bp.EventSet("del-preset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a preset with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdatePreset() {
  return bp.EventSet("any-update-preset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a preset");
  });
}
function matchUpdatePreset(id) {
  return bp.EventSet("update-preset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a preset with id " + id + "";
  });
}

// Wait helpers
function waitForAnyPresetAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ preset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ preset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPresetAdded(id) {
  waitFor(matchAddPreset(id));
}
function waitForPresetDeleted(id) {
  waitFor(matchDeletePreset(id));
}
function waitForAnyPresetDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ preset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ preset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPresetUpdated(id) {
  waitFor(matchUpdatePreset(id));
}
function waitForAnyPresetUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ preset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ preset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyPresetUpdated(id) {
  svc.get("/presets", {
    callback: function (response) {
      preset = JSON.parse(response.body);
      for (let i = 0; i < preset.length; i++) {
        if (preset[i].id === id) {
          return pvg.success("Preset updated (present)");
        }
      }
      return pvg.fail("Expected a preset to be present after update, but it is not");
    },
    parameters: { description: "Verify preset with id " + id + " exists" }
  });
}


/** === Relation Operations === */

// CREATE
function addRelation(id) {
  svc.post("/relations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a relation with id " + id + "" }
    });
}

// DELETE
function deleteRelation(id) {
  svc.delete("/relations/" + id, {
    parameters: { description: "Delete a relation with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRelation(id) {
  svc.delete("/relations/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a relation with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRelation(id) {
  svc.post("/relations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a relation with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a relation with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRelation(id) {
  svc.put("/relations/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a relation with id " + id + "" }
    });
}

// GET one
function getRelation(id) {
  svc.get("/relations/" + id, {
    parameters: { description: "Get a relation with id " + id + "" }
  });
}

// LIST all
function listRelations() {
  svc.get("/relations", {
    parameters: { description: "List relations" }
  });
}

// Verify exists (by list)
function verifyRelationExists(id) {
  svc.get("/relations", {
    callback: function (response) {
      relation = JSON.parse(response.body);
      for (let i = 0; i < relation.length; i++) {
        if (relation[i].id === id) {
          return pvg.success("Relation exists");
        }
      }
      return pvg.fail("Expected a relation to exist but it does not");
    },
    parameters: { description: "Verify relation with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRelationDoesNotExist(id) {
  svc.get("/relations", {
    callback: function (response) {
      relation = JSON.parse(response.body);
      for (let i = 0; i < relation.length; i++) {
        if (relation[i].id === id) {
          return pvg.fail("Expected a relation to not exist but it does");
        }
      }
      return pvg.success("Relation does not exist");
    },
    parameters: { description: "Verify relation with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRelation() {
  return bp.EventSet("any-add-relation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a relation");
  });
}
function matchAddRelation(id) {
  return bp.EventSet("add-relation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a relation with id " + id + "";
  });
}
function matchAnyDeleteRelation() {
  return bp.EventSet("any-del-relation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a relation");
  });
}
function matchDeleteRelation(id) {
  return bp.EventSet("del-relation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a relation with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRelation() {
  return bp.EventSet("any-update-relation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a relation");
  });
}
function matchUpdateRelation(id) {
  return bp.EventSet("update-relation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a relation with id " + id + "";
  });
}

// Wait helpers
function waitForAnyRelationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ relation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ relation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRelationAdded(id) {
  waitFor(matchAddRelation(id));
}
function waitForRelationDeleted(id) {
  waitFor(matchDeleteRelation(id));
}
function waitForAnyRelationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ relation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ relation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRelationUpdated(id) {
  waitFor(matchUpdateRelation(id));
}
function waitForAnyRelationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ relation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ relation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyRelationUpdated(id) {
  svc.get("/relations", {
    callback: function (response) {
      relation = JSON.parse(response.body);
      for (let i = 0; i < relation.length; i++) {
        if (relation[i].id === id) {
          return pvg.success("Relation updated (present)");
        }
      }
      return pvg.fail("Expected a relation to be present after update, but it is not");
    },
    parameters: { description: "Verify relation with id " + id + " exists" }
  });
}


/** === Revision Operations === */

// CREATE
function addRevision(id) {
  svc.post("/revisions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a revision with id " + id + "" }
    });
}

// DELETE
function deleteRevision(id) {
  svc.delete("/revisions/" + id, {
    parameters: { description: "Delete a revision with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRevision(id) {
  svc.delete("/revisions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a revision with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRevision(id) {
  svc.post("/revisions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a revision with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a revision with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRevision(id) {
  svc.put("/revisions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a revision with id " + id + "" }
    });
}

// GET one
function getRevision(id) {
  svc.get("/revisions/" + id, {
    parameters: { description: "Get a revision with id " + id + "" }
  });
}

// LIST all
function listRevisions() {
  svc.get("/revisions", {
    parameters: { description: "List revisions" }
  });
}

// Verify exists (by list)
function verifyRevisionExists(id) {
  svc.get("/revisions", {
    callback: function (response) {
      revision = JSON.parse(response.body);
      for (let i = 0; i < revision.length; i++) {
        if (revision[i].id === id) {
          return pvg.success("Revision exists");
        }
      }
      return pvg.fail("Expected a revision to exist but it does not");
    },
    parameters: { description: "Verify revision with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRevisionDoesNotExist(id) {
  svc.get("/revisions", {
    callback: function (response) {
      revision = JSON.parse(response.body);
      for (let i = 0; i < revision.length; i++) {
        if (revision[i].id === id) {
          return pvg.fail("Expected a revision to not exist but it does");
        }
      }
      return pvg.success("Revision does not exist");
    },
    parameters: { description: "Verify revision with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRevision() {
  return bp.EventSet("any-add-revision", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a revision");
  });
}
function matchAddRevision(id) {
  return bp.EventSet("add-revision", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a revision with id " + id + "";
  });
}
function matchAnyDeleteRevision() {
  return bp.EventSet("any-del-revision", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a revision");
  });
}
function matchDeleteRevision(id) {
  return bp.EventSet("del-revision", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a revision with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRevision() {
  return bp.EventSet("any-update-revision", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a revision");
  });
}
function matchUpdateRevision(id) {
  return bp.EventSet("update-revision", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a revision with id " + id + "";
  });
}

// Wait helpers
function waitForAnyRevisionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ revision\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ revision\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRevisionAdded(id) {
  waitFor(matchAddRevision(id));
}
function waitForRevisionDeleted(id) {
  waitFor(matchDeleteRevision(id));
}
function waitForAnyRevisionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ revision\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ revision\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRevisionUpdated(id) {
  waitFor(matchUpdateRevision(id));
}
function waitForAnyRevisionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ revision\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ revision\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyRevisionUpdated(id) {
  svc.get("/revisions", {
    callback: function (response) {
      revision = JSON.parse(response.body);
      for (let i = 0; i < revision.length; i++) {
        if (revision[i].id === id) {
          return pvg.success("Revision updated (present)");
        }
      }
      return pvg.fail("Expected a revision to be present after update, but it is not");
    },
    parameters: { description: "Verify revision with id " + id + " exists" }
  });
}


/** === Role Operations === */

// CREATE
function addRole(id) {
  svc.post("/roles", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a role with id " + id + "" }
    });
}

// DELETE
function deleteRole(id) {
  svc.delete("/roles/" + id, {
    parameters: { description: "Delete a role with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRole(id) {
  svc.delete("/roles/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a role with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRole(id) {
  svc.post("/roles", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a role with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a role with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRole(id) {
  svc.put("/roles/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a role with id " + id + "" }
    });
}

// GET one
function getRole(id) {
  svc.get("/roles/" + id, {
    parameters: { description: "Get a role with id " + id + "" }
  });
}

// LIST all
function listRoles() {
  svc.get("/roles", {
    parameters: { description: "List roles" }
  });
}

// Verify exists (by list)
function verifyRoleExists(id) {
  svc.get("/roles", {
    callback: function (response) {
      role = JSON.parse(response.body);
      for (let i = 0; i < role.length; i++) {
        if (role[i].id === id) {
          return pvg.success("Role exists");
        }
      }
      return pvg.fail("Expected a role to exist but it does not");
    },
    parameters: { description: "Verify role with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRoleDoesNotExist(id) {
  svc.get("/roles", {
    callback: function (response) {
      role = JSON.parse(response.body);
      for (let i = 0; i < role.length; i++) {
        if (role[i].id === id) {
          return pvg.fail("Expected a role to not exist but it does");
        }
      }
      return pvg.success("Role does not exist");
    },
    parameters: { description: "Verify role with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRole() {
  return bp.EventSet("any-add-role", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a role");
  });
}
function matchAddRole(id) {
  return bp.EventSet("add-role", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a role with id " + id + "";
  });
}
function matchAnyDeleteRole() {
  return bp.EventSet("any-del-role", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a role");
  });
}
function matchDeleteRole(id) {
  return bp.EventSet("del-role", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a role with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRole() {
  return bp.EventSet("any-update-role", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a role");
  });
}
function matchUpdateRole(id) {
  return bp.EventSet("update-role", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a role with id " + id + "";
  });
}

// Wait helpers
function waitForAnyRoleAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ role\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ role\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRoleAdded(id) {
  waitFor(matchAddRole(id));
}
function waitForRoleDeleted(id) {
  waitFor(matchDeleteRole(id));
}
function waitForAnyRoleDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ role\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ role\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRoleUpdated(id) {
  waitFor(matchUpdateRole(id));
}
function waitForAnyRoleUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ role\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ role\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyRoleUpdated(id) {
  svc.get("/roles", {
    callback: function (response) {
      role = JSON.parse(response.body);
      for (let i = 0; i < role.length; i++) {
        if (role[i].id === id) {
          return pvg.success("Role updated (present)");
        }
      }
      return pvg.fail("Expected a role to be present after update, but it is not");
    },
    parameters: { description: "Verify role with id " + id + " exists" }
  });
}


/** === Schema Operations === */

// CREATE
function addSchema(id) {
  svc.post("/schema", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a schema with id " + id + "" }
    });
}

// DELETE
function deleteSchema(id) {
  svc.delete("/schema/" + id, {
    parameters: { description: "Delete a schema with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSchema(id) {
  svc.delete("/schema/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a schema with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSchema(id) {
  svc.post("/schema", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a schema with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a schema with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateSchema(id) {
  svc.put("/schema/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a schema with id " + id + "" }
    });
}

// GET one
function getSchema(id) {
  svc.get("/schema/" + id, {
    parameters: { description: "Get a schema with id " + id + "" }
  });
}

// LIST all
function listSchema() {
  svc.get("/schema", {
    parameters: { description: "List schema" }
  });
}

// Verify exists (by list)
function verifySchemaExists(id) {
  svc.get("/schema", {
    callback: function (response) {
      schema = JSON.parse(response.body);
      for (let i = 0; i < schema.length; i++) {
        if (schema[i].id === id) {
          return pvg.success("Schema exists");
        }
      }
      return pvg.fail("Expected a schema to exist but it does not");
    },
    parameters: { description: "Verify schema with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySchemaDoesNotExist(id) {
  svc.get("/schema", {
    callback: function (response) {
      schema = JSON.parse(response.body);
      for (let i = 0; i < schema.length; i++) {
        if (schema[i].id === id) {
          return pvg.fail("Expected a schema to not exist but it does");
        }
      }
      return pvg.success("Schema does not exist");
    },
    parameters: { description: "Verify schema with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSchema() {
  return bp.EventSet("any-add-schema", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a schema");
  });
}
function matchAddSchema(id) {
  return bp.EventSet("add-schema", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a schema with id " + id + "";
  });
}
function matchAnyDeleteSchema() {
  return bp.EventSet("any-del-schema", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a schema");
  });
}
function matchDeleteSchema(id) {
  return bp.EventSet("del-schema", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a schema with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSchema() {
  return bp.EventSet("any-update-schema", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a schema");
  });
}
function matchUpdateSchema(id) {
  return bp.EventSet("update-schema", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a schema with id " + id + "";
  });
}

// Wait helpers
function waitForAnySchemaAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ schema\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ schema\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSchemaAdded(id) {
  waitFor(matchAddSchema(id));
}
function waitForSchemaDeleted(id) {
  waitFor(matchDeleteSchema(id));
}
function waitForAnySchemaDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ schema\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ schema\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSchemaUpdated(id) {
  waitFor(matchUpdateSchema(id));
}
function waitForAnySchemaUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ schema\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ schema\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySchemaUpdated(id) {
  svc.get("/schema", {
    callback: function (response) {
      schema = JSON.parse(response.body);
      for (let i = 0; i < schema.length; i++) {
        if (schema[i].id === id) {
          return pvg.success("Schema updated (present)");
        }
      }
      return pvg.fail("Expected a schema to be present after update, but it is not");
    },
    parameters: { description: "Verify schema with id " + id + " exists" }
  });
}


/** === Server Operations === */

// CREATE
function addServer(id) {
  svc.post("/server", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a server with id " + id + "" }
    });
}

// DELETE
function deleteServer(id) {
  svc.delete("/server/" + id, {
    parameters: { description: "Delete a server with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingServer(id) {
  svc.delete("/server/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a server with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingServer(id) {
  svc.post("/server", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a server with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a server with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateServer(id) {
  svc.put("/server/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a server with id " + id + "" }
    });
}

// GET one
function getServer(id) {
  svc.get("/server/" + id, {
    parameters: { description: "Get a server with id " + id + "" }
  });
}

// LIST all
function listServer() {
  svc.get("/server", {
    parameters: { description: "List server" }
  });
}

// Verify exists (by list)
function verifyServerExists(id) {
  svc.get("/server", {
    callback: function (response) {
      server = JSON.parse(response.body);
      for (let i = 0; i < server.length; i++) {
        if (server[i].id === id) {
          return pvg.success("Server exists");
        }
      }
      return pvg.fail("Expected a server to exist but it does not");
    },
    parameters: { description: "Verify server with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyServerDoesNotExist(id) {
  svc.get("/server", {
    callback: function (response) {
      server = JSON.parse(response.body);
      for (let i = 0; i < server.length; i++) {
        if (server[i].id === id) {
          return pvg.fail("Expected a server to not exist but it does");
        }
      }
      return pvg.success("Server does not exist");
    },
    parameters: { description: "Verify server with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddServer() {
  return bp.EventSet("any-add-server", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a server");
  });
}
function matchAddServer(id) {
  return bp.EventSet("add-server", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a server with id " + id + "";
  });
}
function matchAnyDeleteServer() {
  return bp.EventSet("any-del-server", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a server");
  });
}
function matchDeleteServer(id) {
  return bp.EventSet("del-server", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a server with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateServer() {
  return bp.EventSet("any-update-server", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a server");
  });
}
function matchUpdateServer(id) {
  return bp.EventSet("update-server", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a server with id " + id + "";
  });
}

// Wait helpers
function waitForAnyServerAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ server\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ server\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForServerAdded(id) {
  waitFor(matchAddServer(id));
}
function waitForServerDeleted(id) {
  waitFor(matchDeleteServer(id));
}
function waitForAnyServerDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ server\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ server\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForServerUpdated(id) {
  waitFor(matchUpdateServer(id));
}
function waitForAnyServerUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ server\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ server\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyServerUpdated(id) {
  svc.get("/server", {
    callback: function (response) {
      server = JSON.parse(response.body);
      for (let i = 0; i < server.length; i++) {
        if (server[i].id === id) {
          return pvg.success("Server updated (present)");
        }
      }
      return pvg.fail("Expected a server to be present after update, but it is not");
    },
    parameters: { description: "Verify server with id " + id + " exists" }
  });
}


/** === Setting Operations === */

// CREATE
function addSetting(id) {
  svc.post("/settings", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a setting with id " + id + "" }
    });
}

// DELETE
function deleteSetting(id) {
  svc.delete("/settings/" + id, {
    parameters: { description: "Delete a setting with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSetting(id) {
  svc.delete("/settings/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a setting with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSetting(id) {
  svc.post("/settings", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a setting with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a setting with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateSetting(id) {
  svc.put("/settings/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a setting with id " + id + "" }
    });
}

// GET one
function getSetting(id) {
  svc.get("/settings/" + id, {
    parameters: { description: "Get a setting with id " + id + "" }
  });
}

// LIST all
function listSettings() {
  svc.get("/settings", {
    parameters: { description: "List settings" }
  });
}

// Verify exists (by list)
function verifySettingExists(id) {
  svc.get("/settings", {
    callback: function (response) {
      setting = JSON.parse(response.body);
      for (let i = 0; i < setting.length; i++) {
        if (setting[i].id === id) {
          return pvg.success("Setting exists");
        }
      }
      return pvg.fail("Expected a setting to exist but it does not");
    },
    parameters: { description: "Verify setting with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySettingDoesNotExist(id) {
  svc.get("/settings", {
    callback: function (response) {
      setting = JSON.parse(response.body);
      for (let i = 0; i < setting.length; i++) {
        if (setting[i].id === id) {
          return pvg.fail("Expected a setting to not exist but it does");
        }
      }
      return pvg.success("Setting does not exist");
    },
    parameters: { description: "Verify setting with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSetting() {
  return bp.EventSet("any-add-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a setting");
  });
}
function matchAddSetting(id) {
  return bp.EventSet("add-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a setting with id " + id + "";
  });
}
function matchAnyDeleteSetting() {
  return bp.EventSet("any-del-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a setting");
  });
}
function matchDeleteSetting(id) {
  return bp.EventSet("del-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a setting with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSetting() {
  return bp.EventSet("any-update-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a setting");
  });
}
function matchUpdateSetting(id) {
  return bp.EventSet("update-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a setting with id " + id + "";
  });
}

// Wait helpers
function waitForAnySettingAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ setting\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ setting\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSettingAdded(id) {
  waitFor(matchAddSetting(id));
}
function waitForSettingDeleted(id) {
  waitFor(matchDeleteSetting(id));
}
function waitForAnySettingDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ setting\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ setting\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSettingUpdated(id) {
  waitFor(matchUpdateSetting(id));
}
function waitForAnySettingUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ setting\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ setting\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySettingUpdated(id) {
  svc.get("/settings", {
    callback: function (response) {
      setting = JSON.parse(response.body);
      for (let i = 0; i < setting.length; i++) {
        if (setting[i].id === id) {
          return pvg.success("Setting updated (present)");
        }
      }
      return pvg.fail("Expected a setting to be present after update, but it is not");
    },
    parameters: { description: "Verify setting with id " + id + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(id) {
  svc.post("/users", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with id " + id + "" }
    });
}

// DELETE
function deleteUser(id) {
  svc.delete("/users/" + id, {
    parameters: { description: "Delete a user with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(id) {
  svc.delete("/users/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(id) {
  svc.post("/users", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser(id) {
  svc.put("/users/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a user with id " + id + "" }
    });
}

// GET one
function getUser(id) {
  svc.get("/users/" + id, {
    parameters: { description: "Get a user with id " + id + "" }
  });
}

// LIST all
function listUsers() {
  svc.get("/users", {
    parameters: { description: "List users" }
  });
}

// Verify exists (by list)
function verifyUserExists(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with id " + id + "";
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(id) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with id " + id + "";
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserAdded(id) {
  waitFor(matchAddUser(id));
}
function waitForUserDeleted(id) {
  waitFor(matchDeleteUser(id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserUpdated(id) {
  waitFor(matchUpdateUser(id));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with id " + id + " exists" }
  });
}


/** === Util Operations === */

// CREATE
function addUtil(id) {
  svc.post("/utils", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a util with id " + id + "" }
    });
}

// DELETE
function deleteUtil(id) {
  svc.delete("/utils/" + id, {
    parameters: { description: "Delete a util with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUtil(id) {
  svc.delete("/utils/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a util with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUtil(id) {
  svc.post("/utils", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a util with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a util with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUtil(id) {
  svc.put("/utils/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a util with id " + id + "" }
    });
}

// GET one
function getUtil(id) {
  svc.get("/utils/" + id, {
    parameters: { description: "Get a util with id " + id + "" }
  });
}

// LIST all
function listUtils() {
  svc.get("/utils", {
    parameters: { description: "List utils" }
  });
}

// Verify exists (by list)
function verifyUtilExists(id) {
  svc.get("/utils", {
    callback: function (response) {
      util = JSON.parse(response.body);
      for (let i = 0; i < util.length; i++) {
        if (util[i].id === id) {
          return pvg.success("Util exists");
        }
      }
      return pvg.fail("Expected a util to exist but it does not");
    },
    parameters: { description: "Verify util with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUtilDoesNotExist(id) {
  svc.get("/utils", {
    callback: function (response) {
      util = JSON.parse(response.body);
      for (let i = 0; i < util.length; i++) {
        if (util[i].id === id) {
          return pvg.fail("Expected a util to not exist but it does");
        }
      }
      return pvg.success("Util does not exist");
    },
    parameters: { description: "Verify util with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUtil() {
  return bp.EventSet("any-add-util", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a util");
  });
}
function matchAddUtil(id) {
  return bp.EventSet("add-util", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a util with id " + id + "";
  });
}
function matchAnyDeleteUtil() {
  return bp.EventSet("any-del-util", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a util");
  });
}
function matchDeleteUtil(id) {
  return bp.EventSet("del-util", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a util with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUtil() {
  return bp.EventSet("any-update-util", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a util");
  });
}
function matchUpdateUtil(id) {
  return bp.EventSet("update-util", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a util with id " + id + "";
  });
}

// Wait helpers
function waitForAnyUtilAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ util\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ util\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUtilAdded(id) {
  waitFor(matchAddUtil(id));
}
function waitForUtilDeleted(id) {
  waitFor(matchDeleteUtil(id));
}
function waitForAnyUtilDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ util\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ util\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUtilUpdated(id) {
  waitFor(matchUpdateUtil(id));
}
function waitForAnyUtilUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ util\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ util\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyUtilUpdated(id) {
  svc.get("/utils", {
    callback: function (response) {
      util = JSON.parse(response.body);
      for (let i = 0; i < util.length; i++) {
        if (util[i].id === id) {
          return pvg.success("Util updated (present)");
        }
      }
      return pvg.fail("Expected a util to be present after update, but it is not");
    },
    parameters: { description: "Verify util with id " + id + " exists" }
  });
}


/** === Version Operations === */

// CREATE
function addVersion(id) {
  svc.post("/versions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a version with id " + id + "" }
    });
}

// DELETE
function deleteVersion(id) {
  svc.delete("/versions/" + id, {
    parameters: { description: "Delete a version with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingVersion(id) {
  svc.delete("/versions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a version with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingVersion(id) {
  svc.post("/versions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a version with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a version with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateVersion(id) {
  svc.put("/versions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a version with id " + id + "" }
    });
}

// GET one
function getVersion(id) {
  svc.get("/versions/" + id, {
    parameters: { description: "Get a version with id " + id + "" }
  });
}

// LIST all
function listVersions() {
  svc.get("/versions", {
    parameters: { description: "List versions" }
  });
}

// Verify exists (by list)
function verifyVersionExists(id) {
  svc.get("/versions", {
    callback: function (response) {
      version = JSON.parse(response.body);
      for (let i = 0; i < version.length; i++) {
        if (version[i].id === id) {
          return pvg.success("Version exists");
        }
      }
      return pvg.fail("Expected a version to exist but it does not");
    },
    parameters: { description: "Verify version with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyVersionDoesNotExist(id) {
  svc.get("/versions", {
    callback: function (response) {
      version = JSON.parse(response.body);
      for (let i = 0; i < version.length; i++) {
        if (version[i].id === id) {
          return pvg.fail("Expected a version to not exist but it does");
        }
      }
      return pvg.success("Version does not exist");
    },
    parameters: { description: "Verify version with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddVersion() {
  return bp.EventSet("any-add-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a version");
  });
}
function matchAddVersion(id) {
  return bp.EventSet("add-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a version with id " + id + "";
  });
}
function matchAnyDeleteVersion() {
  return bp.EventSet("any-del-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a version");
  });
}
function matchDeleteVersion(id) {
  return bp.EventSet("del-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a version with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateVersion() {
  return bp.EventSet("any-update-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a version");
  });
}
function matchUpdateVersion(id) {
  return bp.EventSet("update-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a version with id " + id + "";
  });
}

// Wait helpers
function waitForAnyVersionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ version\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ version\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForVersionAdded(id) {
  waitFor(matchAddVersion(id));
}
function waitForVersionDeleted(id) {
  waitFor(matchDeleteVersion(id));
}
function waitForAnyVersionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ version\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ version\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForVersionUpdated(id) {
  waitFor(matchUpdateVersion(id));
}
function waitForAnyVersionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ version\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ version\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyVersionUpdated(id) {
  svc.get("/versions", {
    callback: function (response) {
      version = JSON.parse(response.body);
      for (let i = 0; i < version.length; i++) {
        if (version[i].id === id) {
          return pvg.success("Version updated (present)");
        }
      }
      return pvg.fail("Expected a version to be present after update, but it is not");
    },
    parameters: { description: "Verify version with id " + id + " exists" }
  });
}


/** === Webhook Operations === */

// CREATE
function addWebhook(id) {
  svc.post("/webhooks", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a webhook with id " + id + "" }
    });
}

// DELETE
function deleteWebhook(id) {
  svc.delete("/webhooks/" + id, {
    parameters: { description: "Delete a webhook with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingWebhook(id) {
  svc.delete("/webhooks/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a webhook with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingWebhook(id) {
  svc.post("/webhooks", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a webhook with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a webhook with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateWebhook(id) {
  svc.put("/webhooks/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a webhook with id " + id + "" }
    });
}

// GET one
function getWebhook(id) {
  svc.get("/webhooks/" + id, {
    parameters: { description: "Get a webhook with id " + id + "" }
  });
}

// LIST all
function listWebhooks() {
  svc.get("/webhooks", {
    parameters: { description: "List webhooks" }
  });
}

// Verify exists (by list)
function verifyWebhookExists(id) {
  svc.get("/webhooks", {
    callback: function (response) {
      webhook = JSON.parse(response.body);
      for (let i = 0; i < webhook.length; i++) {
        if (webhook[i].id === id) {
          return pvg.success("Webhook exists");
        }
      }
      return pvg.fail("Expected a webhook to exist but it does not");
    },
    parameters: { description: "Verify webhook with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyWebhookDoesNotExist(id) {
  svc.get("/webhooks", {
    callback: function (response) {
      webhook = JSON.parse(response.body);
      for (let i = 0; i < webhook.length; i++) {
        if (webhook[i].id === id) {
          return pvg.fail("Expected a webhook to not exist but it does");
        }
      }
      return pvg.success("Webhook does not exist");
    },
    parameters: { description: "Verify webhook with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddWebhook() {
  return bp.EventSet("any-add-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a webhook");
  });
}
function matchAddWebhook(id) {
  return bp.EventSet("add-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a webhook with id " + id + "";
  });
}
function matchAnyDeleteWebhook() {
  return bp.EventSet("any-del-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a webhook");
  });
}
function matchDeleteWebhook(id) {
  return bp.EventSet("del-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a webhook with id " + id + "";
  });
}

// CHANGE (3): UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateWebhook() {
  return bp.EventSet("any-update-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a webhook");
  });
}
function matchUpdateWebhook(id) {
  return bp.EventSet("update-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a webhook with id " + id + "";
  });
}

// Wait helpers
function waitForAnyWebhookAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ webhook\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ webhook\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForWebhookAdded(id) {
  waitFor(matchAddWebhook(id));
}
function waitForWebhookDeleted(id) {
  waitFor(matchDeleteWebhook(id));
}
function waitForAnyWebhookDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ webhook\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ webhook\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForWebhookUpdated(id) {
  waitFor(matchUpdateWebhook(id));
}
function waitForAnyWebhookUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ webhook\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ webhook\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyWebhookUpdated(id) {
  svc.get("/webhooks", {
    callback: function (response) {
      webhook = JSON.parse(response.body);
      for (let i = 0; i < webhook.length; i++) {
        if (webhook[i].id === id) {
          return pvg.success("Webhook updated (present)");
        }
      }
      return pvg.fail("Expected a webhook to be present after update, but it is not");
    },
    parameters: { description: "Verify webhook with id " + id + " exists" }
  });
}

