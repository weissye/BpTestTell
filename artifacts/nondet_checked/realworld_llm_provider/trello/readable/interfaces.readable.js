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

/** === Action Operations === */

// CREATE
function addAction(id) {
  svc.post("/actions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a action with id " + id + "" }
    });
}

// DELETE
function deleteAction(id) {
  svc.delete("/actions/" + id, {
    parameters: { description: "Delete a action with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAction(id) {
  svc.delete("/actions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a action with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAction(id) {
  svc.post("/actions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a action with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a action with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateAction(id) {
  svc.put("/actions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a action" }
    });
}

// GET one
function getAction(id) {
  svc.get("/actions/" + id, {
    parameters: { description: "Get a action" }
  });
}

// LIST all
function listActions() {
  svc.get("/actions", {
    parameters: { description: "List actions" }
  });
}

// Verify exists (by list)
function verifyActionExists(id) {
  svc.get("/actions", {
    callback: function (response) {
      action = JSON.parse(response.body);
      for (let i = 0; i < action.length; i++) {
        if (action[i].id === id) {
          return pvg.success("Action exists");
        }
      }
      return pvg.fail("Expected a action to exist but it does not");
    },
    parameters: { description: "Verify action with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyActionDoesNotExist(id) {
  svc.get("/actions", {
    callback: function (response) {
      action = JSON.parse(response.body);
      for (let i = 0; i < action.length; i++) {
        if (action[i].id === id) {
          return pvg.fail("Expected a action to not exist but it does");
        }
      }
      return pvg.success("Action does not exist");
    },
    parameters: { description: "Verify action with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAction() {
  return bp.EventSet("any-add-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a action");
  });
}
function matchAddAction(id) {
  return bp.EventSet("add-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a action with id " + id + "";
  });
}
function matchAnyDeleteAction() {
  return bp.EventSet("any-del-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a action");
  });
}
function matchDeleteAction(id) {
  return bp.EventSet("del-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a action with id " + id + "";
  });
}

// Wait helpers
function waitForAnyActionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ action\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ action\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForActionAdded(id) {
  waitFor(matchAddAction(id));
}
function waitForActionDeleted(id) {
  waitFor(matchDeleteAction(id));
}
function waitForAnyActionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ action\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ action\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Batch Operations === */

// CREATE
function addBatch(id) {
  svc.post("/batch", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a batch with id " + id + "" }
    });
}

// DELETE
function deleteBatch(id) {
  svc.delete("/batch/" + id, {
    parameters: { description: "Delete a batch with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingBatch(id) {
  svc.delete("/batch/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a batch with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingBatch(id) {
  svc.post("/batch", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a batch with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a batch with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateBatch(id) {
  svc.put("/batch/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a batch" }
    });
}

// GET one
function getBatch(id) {
  svc.get("/batch/" + id, {
    parameters: { description: "Get a batch" }
  });
}

// LIST all
function listBatch() {
  svc.get("/batch", {
    parameters: { description: "List batch" }
  });
}

// Verify exists (by list)
function verifyBatchExists(id) {
  svc.get("/batch", {
    callback: function (response) {
      batch = JSON.parse(response.body);
      for (let i = 0; i < batch.length; i++) {
        if (batch[i].id === id) {
          return pvg.success("Batch exists");
        }
      }
      return pvg.fail("Expected a batch to exist but it does not");
    },
    parameters: { description: "Verify batch with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyBatchDoesNotExist(id) {
  svc.get("/batch", {
    callback: function (response) {
      batch = JSON.parse(response.body);
      for (let i = 0; i < batch.length; i++) {
        if (batch[i].id === id) {
          return pvg.fail("Expected a batch to not exist but it does");
        }
      }
      return pvg.success("Batch does not exist");
    },
    parameters: { description: "Verify batch with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddBatch() {
  return bp.EventSet("any-add-batch", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a batch");
  });
}
function matchAddBatch(id) {
  return bp.EventSet("add-batch", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a batch with id " + id + "";
  });
}
function matchAnyDeleteBatch() {
  return bp.EventSet("any-del-batch", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a batch");
  });
}
function matchDeleteBatch(id) {
  return bp.EventSet("del-batch", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a batch with id " + id + "";
  });
}

// Wait helpers
function waitForAnyBatchAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ batch\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ batch\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForBatchAdded(id) {
  waitFor(matchAddBatch(id));
}
function waitForBatchDeleted(id) {
  waitFor(matchDeleteBatch(id));
}
function waitForAnyBatchDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ batch\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ batch\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Checklist Operations === */

// CREATE
function addChecklist(idChecklist, field, idCheckItem, filter) {
  svc.post("/checklists", {
      body: JSON.stringify({ idChecklist: idChecklist, field: field, idCheckItem: idCheckItem, filter: filter }),
      parameters: { description: "Add a checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + "" }
    });
}

// DELETE
function deleteChecklist(idChecklist, field, idCheckItem, filter) {
  svc.delete("/checklists/" + idChecklist + "/"+ field + "/"+ idCheckItem + "/"+ filter, {
    parameters: { description: "Delete a checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingChecklist(idChecklist, field, idCheckItem, filter) {
  svc.delete("/checklists/" + idChecklist + "/"+ field + "/"+ idCheckItem + "/"+ filter, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingChecklist(idChecklist, field, idCheckItem, filter) {
  svc.post("/checklists", {
      body: JSON.stringify({ idChecklist: idChecklist, field: field, idCheckItem: idCheckItem, filter: filter }),
      parameters: { description: "Add a checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateChecklist(idChecklist, field, idCheckItem, filter) {
  svc.put("/checklists/" + idChecklist + "/"+ field + "/"+ idCheckItem + "/"+ filter, {
      body: JSON.stringify({ idChecklist: idChecklist, field: field, idCheckItem: idCheckItem, filter: filter }),
      parameters: { description: "Update a checklist" }
    });
}

// GET one
function getChecklist(idChecklist, field, idCheckItem, filter) {
  svc.get("/checklists/" + idChecklist + "/"+ field + "/"+ idCheckItem + "/"+ filter, {
    parameters: { description: "Get a checklist" }
  });
}

// LIST all
function listChecklists() {
  svc.get("/checklists", {
    parameters: { description: "List checklists" }
  });
}

// Verify exists (by list)
function verifyChecklistExists(idChecklist, field, idCheckItem, filter) {
  svc.get("/checklists", {
    callback: function (response) {
      checklist = JSON.parse(response.body);
      for (let i = 0; i < checklist.length; i++) {
        if (checklist[i].idChecklist === idChecklist && checklist[i].field === field && checklist[i].idCheckItem === idCheckItem && checklist[i].filter === filter) {
          return pvg.success("Checklist exists");
        }
      }
      return pvg.fail("Expected a checklist to exist but it does not");
    },
    parameters: { description: "Verify checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyChecklistDoesNotExist(idChecklist, field, idCheckItem, filter) {
  svc.get("/checklists", {
    callback: function (response) {
      checklist = JSON.parse(response.body);
      for (let i = 0; i < checklist.length; i++) {
        if (checklist[i].idChecklist === idChecklist && checklist[i].field === field && checklist[i].idCheckItem === idCheckItem && checklist[i].filter === filter) {
          return pvg.fail("Expected a checklist to not exist but it does");
        }
      }
      return pvg.success("Checklist does not exist");
    },
    parameters: { description: "Verify checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + " does not exist" }
  });
}

// Match helpers
function matchAnyAddChecklist() {
  return bp.EventSet("any-add-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a checklist");
  });
}
function matchAddChecklist(idChecklist, field, idCheckItem, filter) {
  return bp.EventSet("add-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + "";
  });
}
function matchAnyDeleteChecklist() {
  return bp.EventSet("any-del-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a checklist");
  });
}
function matchDeleteChecklist(idChecklist, field, idCheckItem, filter) {
  return bp.EventSet("del-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a checklist with idChecklist " + idChecklist + " and field " + field + " and idCheckItem " + idCheckItem + " and filter " + filter + "";
  });
}

// Wait helpers
function waitForAnyChecklistAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ checklist\ with\ idChecklist\ (.+) and field\ (.+) and idCheckItem\ (.+) and filter\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ checklist\ with\ idChecklist\ (.+) and field\ (.+) and idCheckItem\ (.+) and filter\ (.+)$/);
    return { idChecklist: (x)=>x(m[1]), field: (x)=>x(m[2]), idCheckItem: (x)=>x(m[3]), filter: (x)=>x(m[4]) };
}
function waitForChecklistAdded(idChecklist, field, idCheckItem, filter) {
  waitFor(matchAddChecklist(idChecklist, field, idCheckItem, filter));
}
function waitForChecklistDeleted(idChecklist, field, idCheckItem, filter) {
  waitFor(matchDeleteChecklist(idChecklist, field, idCheckItem, filter));
}
function waitForAnyChecklistDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ checklist\ with\ idChecklist\ (.+) and field\ (.+) and idCheckItem\ (.+) and filter\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ checklist\ with\ idChecklist\ (.+) and field\ (.+) and idCheckItem\ (.+) and filter\ (.+)$/);
    return { idChecklist: (x)=>x(m[1]), field: (x)=>x(m[2]), idCheckItem: (x)=>x(m[3]), filter: (x)=>x(m[4]) };
}


/** === Label Operations === */

// CREATE
function addLabel(id) {
  svc.post("/labels", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a label with id " + id + "" }
    });
}

// DELETE
function deleteLabel(id) {
  svc.delete("/labels/" + id, {
    parameters: { description: "Delete a label with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLabel(id) {
  svc.delete("/labels/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a label with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLabel(id) {
  svc.post("/labels", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a label with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a label with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateLabel(id) {
  svc.put("/labels/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a label" }
    });
}

// GET one
function getLabel(id) {
  svc.get("/labels/" + id, {
    parameters: { description: "Get a label" }
  });
}

// LIST all
function listLabels() {
  svc.get("/labels", {
    parameters: { description: "List labels" }
  });
}

// Verify exists (by list)
function verifyLabelExists(id) {
  svc.get("/labels", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].id === id) {
          return pvg.success("Label exists");
        }
      }
      return pvg.fail("Expected a label to exist but it does not");
    },
    parameters: { description: "Verify label with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLabelDoesNotExist(id) {
  svc.get("/labels", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].id === id) {
          return pvg.fail("Expected a label to not exist but it does");
        }
      }
      return pvg.success("Label does not exist");
    },
    parameters: { description: "Verify label with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLabel() {
  return bp.EventSet("any-add-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a label");
  });
}
function matchAddLabel(id) {
  return bp.EventSet("add-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a label with id " + id + "";
  });
}
function matchAnyDeleteLabel() {
  return bp.EventSet("any-del-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a label");
  });
}
function matchDeleteLabel(id) {
  return bp.EventSet("del-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a label with id " + id + "";
  });
}

// Wait helpers
function waitForAnyLabelAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ label\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ label\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForLabelAdded(id) {
  waitFor(matchAddLabel(id));
}
function waitForLabelDeleted(id) {
  waitFor(matchDeleteLabel(id));
}
function waitForAnyLabelDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ label\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ label\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === List Operations === */

// CREATE
function addList(idList, field, filter) {
  svc.post("/lists", {
      body: JSON.stringify({ idList: idList, field: field, filter: filter }),
      parameters: { description: "Add a list with idList " + idList + " and field " + field + " and filter " + filter + "" }
    });
}

// DELETE
function deleteList(idList, field, filter) {
  svc.delete("/lists/" + idList + "/"+ field + "/"+ filter, {
    parameters: { description: "Delete a list with idList " + idList + " and field " + field + " and filter " + filter + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingList(idList, field, filter) {
  svc.delete("/lists/" + idList + "/"+ field + "/"+ filter, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a list with idList " + idList + " and field " + field + " and filter " + filter + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingList(idList, field, filter) {
  svc.post("/lists", {
      body: JSON.stringify({ idList: idList, field: field, filter: filter }),
      parameters: { description: "Add a list with idList " + idList + " and field " + field + " and filter " + filter + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a list with idList " + idList + " and field " + field + " and filter " + filter + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateList(idList, field, filter) {
  svc.put("/lists/" + idList + "/"+ field + "/"+ filter, {
      body: JSON.stringify({ idList: idList, field: field, filter: filter }),
      parameters: { description: "Update a list" }
    });
}

// GET one
function getList(idList, field, filter) {
  svc.get("/lists/" + idList + "/"+ field + "/"+ filter, {
    parameters: { description: "Get a list" }
  });
}

// LIST all
function listLists() {
  svc.get("/lists", {
    parameters: { description: "List lists" }
  });
}

// Verify exists (by list)
function verifyListExists(idList, field, filter) {
  svc.get("/lists", {
    callback: function (response) {
      list = JSON.parse(response.body);
      for (let i = 0; i < list.length; i++) {
        if (list[i].idList === idList && list[i].field === field && list[i].filter === filter) {
          return pvg.success("List exists");
        }
      }
      return pvg.fail("Expected a list to exist but it does not");
    },
    parameters: { description: "Verify list with idList " + idList + " and field " + field + " and filter " + filter + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyListDoesNotExist(idList, field, filter) {
  svc.get("/lists", {
    callback: function (response) {
      list = JSON.parse(response.body);
      for (let i = 0; i < list.length; i++) {
        if (list[i].idList === idList && list[i].field === field && list[i].filter === filter) {
          return pvg.fail("Expected a list to not exist but it does");
        }
      }
      return pvg.success("List does not exist");
    },
    parameters: { description: "Verify list with idList " + idList + " and field " + field + " and filter " + filter + " does not exist" }
  });
}

// Match helpers
function matchAnyAddList() {
  return bp.EventSet("any-add-list", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a list");
  });
}
function matchAddList(idList, field, filter) {
  return bp.EventSet("add-list", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a list with idList " + idList + " and field " + field + " and filter " + filter + "";
  });
}
function matchAnyDeleteList() {
  return bp.EventSet("any-del-list", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a list");
  });
}
function matchDeleteList(idList, field, filter) {
  return bp.EventSet("del-list", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a list with idList " + idList + " and field " + field + " and filter " + filter + "";
  });
}

// Wait helpers
function waitForAnyListAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ list\ with\ idList\ (.+) and field\ (.+) and filter\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ list\ with\ idList\ (.+) and field\ (.+) and filter\ (.+)$/);
    return { idList: (x)=>x(m[1]), field: (x)=>x(m[2]), filter: (x)=>x(m[3]) };
}
function waitForListAdded(idList, field, filter) {
  waitFor(matchAddList(idList, field, filter));
}
function waitForListDeleted(idList, field, filter) {
  waitFor(matchDeleteList(idList, field, filter));
}
function waitForAnyListDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ list\ with\ idList\ (.+) and field\ (.+) and filter\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ list\ with\ idList\ (.+) and field\ (.+) and filter\ (.+)$/);
    return { idList: (x)=>x(m[1]), field: (x)=>x(m[2]), filter: (x)=>x(m[3]) };
}


/** === Notification Operations === */

// CREATE
function addNotification(id) {
  svc.post("/notifications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a notification with id " + id + "" }
    });
}

// DELETE
function deleteNotification(id) {
  svc.delete("/notifications/" + id, {
    parameters: { description: "Delete a notification with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingNotification(id) {
  svc.delete("/notifications/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a notification with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingNotification(id) {
  svc.post("/notifications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a notification with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a notification with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateNotification(id) {
  svc.put("/notifications/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a notification" }
    });
}

// GET one
function getNotification(id) {
  svc.get("/notifications/" + id, {
    parameters: { description: "Get a notification" }
  });
}

// LIST all
function listNotifications() {
  svc.get("/notifications", {
    parameters: { description: "List notifications" }
  });
}

// Verify exists (by list)
function verifyNotificationExists(id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].id === id) {
          return pvg.success("Notification exists");
        }
      }
      return pvg.fail("Expected a notification to exist but it does not");
    },
    parameters: { description: "Verify notification with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyNotificationDoesNotExist(id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].id === id) {
          return pvg.fail("Expected a notification to not exist but it does");
        }
      }
      return pvg.success("Notification does not exist");
    },
    parameters: { description: "Verify notification with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddNotification() {
  return bp.EventSet("any-add-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a notification");
  });
}
function matchAddNotification(id) {
  return bp.EventSet("add-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a notification with id " + id + "";
  });
}
function matchAnyDeleteNotification() {
  return bp.EventSet("any-del-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a notification");
  });
}
function matchDeleteNotification(id) {
  return bp.EventSet("del-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a notification with id " + id + "";
  });
}

// Wait helpers
function waitForAnyNotificationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ notification\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ notification\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForNotificationAdded(id) {
  waitFor(matchAddNotification(id));
}
function waitForNotificationDeleted(id) {
  waitFor(matchDeleteNotification(id));
}
function waitForAnyNotificationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ notification\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ notification\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Organization Operations === */

// CREATE
function addOrganization(id) {
  svc.post("/organizations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a organization with id " + id + "" }
    });
}

// DELETE
function deleteOrganization(id) {
  svc.delete("/organizations/" + id, {
    parameters: { description: "Delete a organization with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrganization(id) {
  svc.delete("/organizations/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a organization with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrganization(id) {
  svc.post("/organizations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a organization with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a organization with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateOrganization(id) {
  svc.put("/organizations/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a organization" }
    });
}

// GET one
function getOrganization(id) {
  svc.get("/organizations/" + id, {
    parameters: { description: "Get a organization" }
  });
}

// LIST all
function listOrganizations() {
  svc.get("/organizations", {
    parameters: { description: "List organizations" }
  });
}

// Verify exists (by list)
function verifyOrganizationExists(id) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].id === id) {
          return pvg.success("Organization exists");
        }
      }
      return pvg.fail("Expected a organization to exist but it does not");
    },
    parameters: { description: "Verify organization with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrganizationDoesNotExist(id) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].id === id) {
          return pvg.fail("Expected a organization to not exist but it does");
        }
      }
      return pvg.success("Organization does not exist");
    },
    parameters: { description: "Verify organization with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrganization() {
  return bp.EventSet("any-add-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a organization");
  });
}
function matchAddOrganization(id) {
  return bp.EventSet("add-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a organization with id " + id + "";
  });
}
function matchAnyDeleteOrganization() {
  return bp.EventSet("any-del-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a organization");
  });
}
function matchDeleteOrganization(id) {
  return bp.EventSet("del-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a organization with id " + id + "";
  });
}

// Wait helpers
function waitForAnyOrganizationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ organization\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ organization\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForOrganizationAdded(id) {
  waitFor(matchAddOrganization(id));
}
function waitForOrganizationDeleted(id) {
  waitFor(matchDeleteOrganization(id));
}
function waitForAnyOrganizationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ organization\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ organization\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Search Operations === */

// CREATE
function addSearch(id) {
  svc.post("/search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a search with id " + id + "" }
    });
}

// DELETE
function deleteSearch(id) {
  svc.delete("/search/" + id, {
    parameters: { description: "Delete a search with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSearch(id) {
  svc.delete("/search/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a search with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSearch(id) {
  svc.post("/search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a search with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a search with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateSearch(id) {
  svc.put("/search/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a search" }
    });
}

// GET one
function getSearch(id) {
  svc.get("/search/" + id, {
    parameters: { description: "Get a search" }
  });
}

// LIST all
function listSearch() {
  svc.get("/search", {
    parameters: { description: "List search" }
  });
}

// Verify exists (by list)
function verifySearchExists(id) {
  svc.get("/search", {
    callback: function (response) {
      search = JSON.parse(response.body);
      for (let i = 0; i < search.length; i++) {
        if (search[i].id === id) {
          return pvg.success("Search exists");
        }
      }
      return pvg.fail("Expected a search to exist but it does not");
    },
    parameters: { description: "Verify search with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySearchDoesNotExist(id) {
  svc.get("/search", {
    callback: function (response) {
      search = JSON.parse(response.body);
      for (let i = 0; i < search.length; i++) {
        if (search[i].id === id) {
          return pvg.fail("Expected a search to not exist but it does");
        }
      }
      return pvg.success("Search does not exist");
    },
    parameters: { description: "Verify search with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSearch() {
  return bp.EventSet("any-add-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a search");
  });
}
function matchAddSearch(id) {
  return bp.EventSet("add-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a search with id " + id + "";
  });
}
function matchAnyDeleteSearch() {
  return bp.EventSet("any-del-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a search");
  });
}
function matchDeleteSearch(id) {
  return bp.EventSet("del-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a search with id " + id + "";
  });
}

// Wait helpers
function waitForAnySearchAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSearchAdded(id) {
  waitFor(matchAddSearch(id));
}
function waitForSearchDeleted(id) {
  waitFor(matchDeleteSearch(id));
}
function waitForAnySearchDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Session Operations === */

// CREATE
function addSession(id) {
  svc.post("/sessions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a session with id " + id + "" }
    });
}

// DELETE
function deleteSession(id) {
  svc.delete("/sessions/" + id, {
    parameters: { description: "Delete a session with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSession(id) {
  svc.delete("/sessions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a session with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSession(id) {
  svc.post("/sessions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a session with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a session with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateSession(id) {
  svc.put("/sessions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a session" }
    });
}

// GET one
function getSession(id) {
  svc.get("/sessions/" + id, {
    parameters: { description: "Get a session" }
  });
}

// LIST all
function listSessions() {
  svc.get("/sessions", {
    parameters: { description: "List sessions" }
  });
}

// Verify exists (by list)
function verifySessionExists(id) {
  svc.get("/sessions", {
    callback: function (response) {
      session = JSON.parse(response.body);
      for (let i = 0; i < session.length; i++) {
        if (session[i].id === id) {
          return pvg.success("Session exists");
        }
      }
      return pvg.fail("Expected a session to exist but it does not");
    },
    parameters: { description: "Verify session with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySessionDoesNotExist(id) {
  svc.get("/sessions", {
    callback: function (response) {
      session = JSON.parse(response.body);
      for (let i = 0; i < session.length; i++) {
        if (session[i].id === id) {
          return pvg.fail("Expected a session to not exist but it does");
        }
      }
      return pvg.success("Session does not exist");
    },
    parameters: { description: "Verify session with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSession() {
  return bp.EventSet("any-add-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a session");
  });
}
function matchAddSession(id) {
  return bp.EventSet("add-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a session with id " + id + "";
  });
}
function matchAnyDeleteSession() {
  return bp.EventSet("any-del-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a session");
  });
}
function matchDeleteSession(id) {
  return bp.EventSet("del-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a session with id " + id + "";
  });
}

// Wait helpers
function waitForAnySessionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ session\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ session\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSessionAdded(id) {
  waitFor(matchAddSession(id));
}
function waitForSessionDeleted(id) {
  waitFor(matchDeleteSession(id));
}
function waitForAnySessionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ session\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ session\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Type Operations === */

// CREATE
function addType(id) {
  svc.post("/types", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a type with id " + id + "" }
    });
}

// DELETE
function deleteType(id) {
  svc.delete("/types/" + id, {
    parameters: { description: "Delete a type with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingType(id) {
  svc.delete("/types/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a type with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingType(id) {
  svc.post("/types", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a type with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a type with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateType(id) {
  svc.put("/types/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a type" }
    });
}

// GET one
function getType(id) {
  svc.get("/types/" + id, {
    parameters: { description: "Get a type" }
  });
}

// LIST all
function listTypes() {
  svc.get("/types", {
    parameters: { description: "List types" }
  });
}

// Verify exists (by list)
function verifyTypeExists(id) {
  svc.get("/types", {
    callback: function (response) {
      type = JSON.parse(response.body);
      for (let i = 0; i < type.length; i++) {
        if (type[i].id === id) {
          return pvg.success("Type exists");
        }
      }
      return pvg.fail("Expected a type to exist but it does not");
    },
    parameters: { description: "Verify type with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTypeDoesNotExist(id) {
  svc.get("/types", {
    callback: function (response) {
      type = JSON.parse(response.body);
      for (let i = 0; i < type.length; i++) {
        if (type[i].id === id) {
          return pvg.fail("Expected a type to not exist but it does");
        }
      }
      return pvg.success("Type does not exist");
    },
    parameters: { description: "Verify type with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddType() {
  return bp.EventSet("any-add-type", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a type");
  });
}
function matchAddType(id) {
  return bp.EventSet("add-type", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a type with id " + id + "";
  });
}
function matchAnyDeleteType() {
  return bp.EventSet("any-del-type", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a type");
  });
}
function matchDeleteType(id) {
  return bp.EventSet("del-type", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a type with id " + id + "";
  });
}

// Wait helpers
function waitForAnyTypeAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ type\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ type\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTypeAdded(id) {
  waitFor(matchAddType(id));
}
function waitForTypeDeleted(id) {
  waitFor(matchDeleteType(id));
}
function waitForAnyTypeDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ type\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ type\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === V1 Operations === */

// CREATE
function addV1(idBoard) {
  svc.post("/v1", {
      body: JSON.stringify({ idBoard: idBoard }),
      parameters: { description: "Add a v1 with idBoard " + idBoard + "" }
    });
}

// DELETE
function deleteV1(idBoard) {
  svc.delete("/v1/" + idBoard, {
    parameters: { description: "Delete a v1 with idBoard " + idBoard + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(idBoard) {
  svc.delete("/v1/" + idBoard, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with idBoard " + idBoard + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(idBoard) {
  svc.post("/v1", {
      body: JSON.stringify({ idBoard: idBoard }),
      parameters: { description: "Add a v1 with idBoard " + idBoard + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with idBoard " + idBoard + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(idBoard) {
  svc.put("/v1/" + idBoard, {
      body: JSON.stringify({ idBoard: idBoard }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(idBoard) {
  svc.get("/v1/" + idBoard, {
    parameters: { description: "Get a v1" }
  });
}

// LIST all
function listV1() {
  svc.get("/v1", {
    parameters: { description: "List v1" }
  });
}

// Verify exists (by list)
function verifyV1Exists(idBoard) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].idBoard === idBoard) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with idBoard " + idBoard + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(idBoard) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].idBoard === idBoard) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with idBoard " + idBoard + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(idBoard) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with idBoard " + idBoard + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(idBoard) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with idBoard " + idBoard + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ idBoard\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ idBoard\ (.+)$/);
    return { idBoard: (x)=>x(m[1]) };
}
function waitForV1Added(idBoard) {
  waitFor(matchAddV1(idBoard));
}
function waitForV1Deleted(idBoard) {
  waitFor(matchDeleteV1(idBoard));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ idBoard\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ idBoard\ (.+)$/);
    return { idBoard: (x)=>x(m[1]) };
}


/** === Webhook Operations === */

// CREATE
function addWebhook(idWebhook, field) {
  svc.post("/webhooks", {
      body: JSON.stringify({ idWebhook: idWebhook, field: field }),
      parameters: { description: "Add a webhook with idWebhook " + idWebhook + " and field " + field + "" }
    });
}

// DELETE
function deleteWebhook(idWebhook, field) {
  svc.delete("/webhooks/" + idWebhook + "/"+ field, {
    parameters: { description: "Delete a webhook with idWebhook " + idWebhook + " and field " + field + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingWebhook(idWebhook, field) {
  svc.delete("/webhooks/" + idWebhook + "/"+ field, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a webhook with idWebhook " + idWebhook + " and field " + field + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingWebhook(idWebhook, field) {
  svc.post("/webhooks", {
      body: JSON.stringify({ idWebhook: idWebhook, field: field }),
      parameters: { description: "Add a webhook with idWebhook " + idWebhook + " and field " + field + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a webhook with idWebhook " + idWebhook + " and field " + field + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateWebhook(idWebhook, field) {
  svc.put("/webhooks/" + idWebhook + "/"+ field, {
      body: JSON.stringify({ idWebhook: idWebhook, field: field }),
      parameters: { description: "Update a webhook" }
    });
}

// GET one
function getWebhook(idWebhook, field) {
  svc.get("/webhooks/" + idWebhook + "/"+ field, {
    parameters: { description: "Get a webhook" }
  });
}

// LIST all
function listWebhooks() {
  svc.get("/webhooks", {
    parameters: { description: "List webhooks" }
  });
}

// Verify exists (by list)
function verifyWebhookExists(idWebhook, field) {
  svc.get("/webhooks", {
    callback: function (response) {
      webhook = JSON.parse(response.body);
      for (let i = 0; i < webhook.length; i++) {
        if (webhook[i].idWebhook === idWebhook && webhook[i].field === field) {
          return pvg.success("Webhook exists");
        }
      }
      return pvg.fail("Expected a webhook to exist but it does not");
    },
    parameters: { description: "Verify webhook with idWebhook " + idWebhook + " and field " + field + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyWebhookDoesNotExist(idWebhook, field) {
  svc.get("/webhooks", {
    callback: function (response) {
      webhook = JSON.parse(response.body);
      for (let i = 0; i < webhook.length; i++) {
        if (webhook[i].idWebhook === idWebhook && webhook[i].field === field) {
          return pvg.fail("Expected a webhook to not exist but it does");
        }
      }
      return pvg.success("Webhook does not exist");
    },
    parameters: { description: "Verify webhook with idWebhook " + idWebhook + " and field " + field + " does not exist" }
  });
}

// Match helpers
function matchAnyAddWebhook() {
  return bp.EventSet("any-add-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a webhook");
  });
}
function matchAddWebhook(idWebhook, field) {
  return bp.EventSet("add-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a webhook with idWebhook " + idWebhook + " and field " + field + "";
  });
}
function matchAnyDeleteWebhook() {
  return bp.EventSet("any-del-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a webhook");
  });
}
function matchDeleteWebhook(idWebhook, field) {
  return bp.EventSet("del-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a webhook with idWebhook " + idWebhook + " and field " + field + "";
  });
}

// Wait helpers
function waitForAnyWebhookAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ webhook\ with\ idWebhook\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ webhook\ with\ idWebhook\ (.+) and field\ (.+)$/);
    return { idWebhook: (x)=>x(m[1]), field: (x)=>x(m[2]) };
}
function waitForWebhookAdded(idWebhook, field) {
  waitFor(matchAddWebhook(idWebhook, field));
}
function waitForWebhookDeleted(idWebhook, field) {
  waitFor(matchDeleteWebhook(idWebhook, field));
}
function waitForAnyWebhookDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ webhook\ with\ idWebhook\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ webhook\ with\ idWebhook\ (.+) and field\ (.+)$/);
    return { idWebhook: (x)=>x(m[1]), field: (x)=>x(m[2]) };
}

