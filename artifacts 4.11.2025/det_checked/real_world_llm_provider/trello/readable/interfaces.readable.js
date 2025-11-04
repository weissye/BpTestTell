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

/** === Action Operations === */

// CREATE
function addAction(id) {
  svc.post("/actions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a action with " + "id " + id }
    });
}

// DELETE
function deleteAction(id) {
  svc.delete("/actions/" + id, {
    parameters: { description: "Delete a action with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAction(id) {
  svc.delete("/actions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a action with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAction(id) {
  svc.post("/actions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a action with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a action with " + "id " + id }
  });
}

// UPDATE
function updateAction(id) {
  svc.put("/actions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a action with " + "id " + id }
    });
}

// GET one
function getAction(id) {
  svc.get("/actions/" + id, {
    parameters: { description: "Get a action with " + "id " + id }
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
    parameters: { description: "Verify action with " + "id " + id + " exists" }
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
    parameters: { description: "Verify action with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a action with " + "id " + id;
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
    return e.data.parameters.description === "Delete a action with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAction() {
  return bp.EventSet("any-update-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a action");
  });
}
function matchUpdateAction(id) {
  return bp.EventSet("update-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a action with " + "id " + id;
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
function waitForActionUpdated(id) {
  waitFor(matchUpdateAction(id));
}
function waitForAnyActionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ action\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ action\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyActionUpdated(id) {
  svc.get("/actions", {
    callback: function (response) {
      action = JSON.parse(response.body);
      for (let i = 0; i < action.length; i++) {
        if (action[i].id === id) {
          return pvg.success("Action updated (present)");
        }
      }
      return pvg.fail("Expected a action to be present after update, but it is not");
    },
    parameters: { description: "Verify action with " + "id " + id + " exists" }
  });
}


/** === Batch Operations === */

// CREATE
function addBatch(id) {
  svc.post("/batch", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a batch with " + "id " + id }
    });
}

// DELETE
function deleteBatch(id) {
  svc.delete("/batch/" + id, {
    parameters: { description: "Delete a batch with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingBatch(id) {
  svc.delete("/batch/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a batch with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingBatch(id) {
  svc.post("/batch", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a batch with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a batch with " + "id " + id }
  });
}

// UPDATE
function updateBatch(id) {
  svc.put("/batch/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a batch with " + "id " + id }
    });
}

// GET one
function getBatch(id) {
  svc.get("/batch/" + id, {
    parameters: { description: "Get a batch with " + "id " + id }
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
    parameters: { description: "Verify batch with " + "id " + id + " exists" }
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
    parameters: { description: "Verify batch with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a batch with " + "id " + id;
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
    return e.data.parameters.description === "Delete a batch with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateBatch() {
  return bp.EventSet("any-update-batch", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a batch");
  });
}
function matchUpdateBatch(id) {
  return bp.EventSet("update-batch", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a batch with " + "id " + id;
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
function waitForBatchUpdated(id) {
  waitFor(matchUpdateBatch(id));
}
function waitForAnyBatchUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ batch\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ batch\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyBatchUpdated(id) {
  svc.get("/batch", {
    callback: function (response) {
      batch = JSON.parse(response.body);
      for (let i = 0; i < batch.length; i++) {
        if (batch[i].id === id) {
          return pvg.success("Batch updated (present)");
        }
      }
      return pvg.fail("Expected a batch to be present after update, but it is not");
    },
    parameters: { description: "Verify batch with " + "id " + id + " exists" }
  });
}


/** === Board Operations === */

// CREATE
function addBoard(idBoard) {
  svc.post("/boards", {
      body: JSON.stringify({ idBoard: idBoard }),
      parameters: { description: "Add a board with " + "idBoard " + idBoard }
    });
}

// DELETE
function deleteBoard(idBoard) {
  svc.delete("/boards/" + idBoard, {
    parameters: { description: "Delete a board with " + "idBoard " + idBoard }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingBoard(idBoard) {
  svc.delete("/boards/" + idBoard, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a board with " + "idBoard " + idBoard }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingBoard(idBoard) {
  svc.post("/boards", {
      body: JSON.stringify({ idBoard: idBoard }),
      parameters: { description: "Add a board with " + "idBoard " + idBoard }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a board with " + "idBoard " + idBoard }
  });
}

// UPDATE
function updateBoard(idBoard) {
  svc.put("/boards/" + idBoard, {
      body: JSON.stringify({ idBoard: idBoard }),
      parameters: { description: "Update a board with " + "idBoard " + idBoard }
    });
}

// GET one
function getBoard(idBoard) {
  svc.get("/boards/" + idBoard, {
    parameters: { description: "Get a board with " + "idBoard " + idBoard }
  });
}

// LIST all
function listBoards() {
  svc.get("/boards", {
    parameters: { description: "List boards" }
  });
}

// Verify exists (by list)
function verifyBoardExists(idBoard) {
  svc.get("/boards", {
    callback: function (response) {
      board = JSON.parse(response.body);
      for (let i = 0; i < board.length; i++) {
        if (board[i].idBoard === idBoard) {
          return pvg.success("Board exists");
        }
      }
      return pvg.fail("Expected a board to exist but it does not");
    },
    parameters: { description: "Verify board with " + "idBoard " + idBoard + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyBoardDoesNotExist(idBoard) {
  svc.get("/boards", {
    callback: function (response) {
      board = JSON.parse(response.body);
      for (let i = 0; i < board.length; i++) {
        if (board[i].idBoard === idBoard) {
          return pvg.fail("Expected a board to not exist but it does");
        }
      }
      return pvg.success("Board does not exist");
    },
    parameters: { description: "Verify board with " + "idBoard " + idBoard + " does not exist" }
  });
}

// Match helpers
function matchAnyAddBoard() {
  return bp.EventSet("any-add-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a board");
  });
}
function matchAddBoard(idBoard) {
  return bp.EventSet("add-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a board with " + "idBoard " + idBoard;
  });
}
function matchAnyDeleteBoard() {
  return bp.EventSet("any-del-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a board");
  });
}
function matchDeleteBoard(idBoard) {
  return bp.EventSet("del-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a board with " + "idBoard " + idBoard;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateBoard() {
  return bp.EventSet("any-update-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a board");
  });
}
function matchUpdateBoard(idBoard) {
  return bp.EventSet("update-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a board with " + "idBoard " + idBoard;
  });
}

// Wait helpers
function waitForAnyBoardAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ board\ with\ idBoard\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ board\ with\ idBoard\ (.+)$/);
    return { idBoard: m[1] };
}
function waitForBoardAdded(idBoard) {
  waitFor(matchAddBoard(idBoard));
}
function waitForBoardDeleted(idBoard) {
  waitFor(matchDeleteBoard(idBoard));
}
function waitForAnyBoardDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ board\ with\ idBoard\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ board\ with\ idBoard\ (.+)$/);
    return { idBoard: m[1] };
}
function waitForBoardUpdated(idBoard) {
  waitFor(matchUpdateBoard(idBoard));
}
function waitForAnyBoardUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ board\ with\ idBoard\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ board\ with\ idBoard\ (.+)$/);
    return { idBoard: m[1] };
}

// Verify updated (presence-by-list)
function verifyBoardUpdated(idBoard) {
  svc.get("/boards", {
    callback: function (response) {
      board = JSON.parse(response.body);
      for (let i = 0; i < board.length; i++) {
        if (board[i].idBoard === idBoard) {
          return pvg.success("Board updated (present)");
        }
      }
      return pvg.fail("Expected a board to be present after update, but it is not");
    },
    parameters: { description: "Verify board with " + "idBoard " + idBoard + " exists" }
  });
}


/** === Checklist Operations === */

// CREATE
function addChecklist(idChecklist, idCheckItem, field) {
  svc.post("/checklists", {
      body: JSON.stringify({ idChecklist: idChecklist, idCheckItem: idCheckItem, field: field }),
      parameters: { description: "Add a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field }
    });
}

// DELETE
function deleteChecklist(idChecklist, idCheckItem, field) {
  svc.delete("/checklists/" + idChecklist + "/"+ idCheckItem + "/"+ field, {
    parameters: { description: "Delete a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingChecklist(idChecklist, idCheckItem, field) {
  svc.delete("/checklists/" + idChecklist + "/"+ idCheckItem + "/"+ field, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingChecklist(idChecklist, idCheckItem, field) {
  svc.post("/checklists", {
      body: JSON.stringify({ idChecklist: idChecklist, idCheckItem: idCheckItem, field: field }),
      parameters: { description: "Add a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field }
  });
}

// UPDATE
function updateChecklist(idChecklist, idCheckItem, field) {
  svc.put("/checklists/" + idChecklist + "/"+ idCheckItem + "/"+ field, {
      body: JSON.stringify({ idChecklist: idChecklist, idCheckItem: idCheckItem, field: field }),
      parameters: { description: "Update a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field }
    });
}

// GET one
function getChecklist(idChecklist, idCheckItem, field) {
  svc.get("/checklists/" + idChecklist + "/"+ idCheckItem + "/"+ field, {
    parameters: { description: "Get a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field }
  });
}

// LIST all
function listChecklists() {
  svc.get("/checklists", {
    parameters: { description: "List checklists" }
  });
}

// Verify exists (by list)
function verifyChecklistExists(idChecklist, idCheckItem, field) {
  svc.get("/checklists", {
    callback: function (response) {
      checklist = JSON.parse(response.body);
      for (let i = 0; i < checklist.length; i++) {
        if (checklist[i].idChecklist === idChecklist && checklist[i].idCheckItem === idCheckItem && checklist[i].field === field) {
          return pvg.success("Checklist exists");
        }
      }
      return pvg.fail("Expected a checklist to exist but it does not");
    },
    parameters: { description: "Verify checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyChecklistDoesNotExist(idChecklist, idCheckItem, field) {
  svc.get("/checklists", {
    callback: function (response) {
      checklist = JSON.parse(response.body);
      for (let i = 0; i < checklist.length; i++) {
        if (checklist[i].idChecklist === idChecklist && checklist[i].idCheckItem === idCheckItem && checklist[i].field === field) {
          return pvg.fail("Expected a checklist to not exist but it does");
        }
      }
      return pvg.success("Checklist does not exist");
    },
    parameters: { description: "Verify checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " does not exist" }
  });
}

// Match helpers
function matchAnyAddChecklist() {
  return bp.EventSet("any-add-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a checklist");
  });
}
function matchAddChecklist(idChecklist, idCheckItem, field) {
  return bp.EventSet("add-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field;
  });
}
function matchAnyDeleteChecklist() {
  return bp.EventSet("any-del-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a checklist");
  });
}
function matchDeleteChecklist(idChecklist, idCheckItem, field) {
  return bp.EventSet("del-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateChecklist() {
  return bp.EventSet("any-update-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a checklist");
  });
}
function matchUpdateChecklist(idChecklist, idCheckItem, field) {
  return bp.EventSet("update-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field;
  });
}

// Wait helpers
function waitForAnyChecklistAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ checklist\ with\ idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ checklist\ with\ idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+)$/);
    return { idChecklist: m[1], idCheckItem: m[2], field: m[3] };
}
function waitForChecklistAdded(idChecklist, idCheckItem, field) {
  waitFor(matchAddChecklist(idChecklist, idCheckItem, field));
}
function waitForChecklistDeleted(idChecklist, idCheckItem, field) {
  waitFor(matchDeleteChecklist(idChecklist, idCheckItem, field));
}
function waitForAnyChecklistDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ checklist\ with\ idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ checklist\ with\ idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+)$/);
    return { idChecklist: m[1], idCheckItem: m[2], field: m[3] };
}
function waitForChecklistUpdated(idChecklist, idCheckItem, field) {
  waitFor(matchUpdateChecklist(idChecklist, idCheckItem, field));
}
function waitForAnyChecklistUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ checklist\ with\ idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ checklist\ with\ idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+)$/);
    return { idChecklist: m[1], idCheckItem: m[2], field: m[3] };
}

// Verify updated (presence-by-list)
function verifyChecklistUpdated(idChecklist, idCheckItem, field) {
  svc.get("/checklists", {
    callback: function (response) {
      checklist = JSON.parse(response.body);
      for (let i = 0; i < checklist.length; i++) {
        if (checklist[i].idChecklist === idChecklist && checklist[i].idCheckItem === idCheckItem && checklist[i].field === field) {
          return pvg.success("Checklist updated (present)");
        }
      }
      return pvg.fail("Expected a checklist to be present after update, but it is not");
    },
    parameters: { description: "Verify checklist with " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " exists" }
  });
}


/** === Label Operations === */

// CREATE
function addLabel(id) {
  svc.post("/labels", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a label with " + "id " + id }
    });
}

// DELETE
function deleteLabel(id) {
  svc.delete("/labels/" + id, {
    parameters: { description: "Delete a label with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLabel(id) {
  svc.delete("/labels/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a label with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLabel(id) {
  svc.post("/labels", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a label with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a label with " + "id " + id }
  });
}

// UPDATE
function updateLabel(id) {
  svc.put("/labels/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a label with " + "id " + id }
    });
}

// GET one
function getLabel(id) {
  svc.get("/labels/" + id, {
    parameters: { description: "Get a label with " + "id " + id }
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
    parameters: { description: "Verify label with " + "id " + id + " exists" }
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
    parameters: { description: "Verify label with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a label with " + "id " + id;
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
    return e.data.parameters.description === "Delete a label with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateLabel() {
  return bp.EventSet("any-update-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a label");
  });
}
function matchUpdateLabel(id) {
  return bp.EventSet("update-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a label with " + "id " + id;
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
function waitForLabelUpdated(id) {
  waitFor(matchUpdateLabel(id));
}
function waitForAnyLabelUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ label\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ label\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyLabelUpdated(id) {
  svc.get("/labels", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].id === id) {
          return pvg.success("Label updated (present)");
        }
      }
      return pvg.fail("Expected a label to be present after update, but it is not");
    },
    parameters: { description: "Verify label with " + "id " + id + " exists" }
  });
}


/** === List Operations === */

// CREATE
function addList(idList, field, filter) {
  svc.post("/lists", {
      body: JSON.stringify({ idList: idList, field: field, filter: filter }),
      parameters: { description: "Add a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
    });
}

// DELETE
function deleteList(idList, field, filter) {
  svc.delete("/lists/" + idList + "/"+ field + "/"+ filter, {
    parameters: { description: "Delete a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingList(idList, field, filter) {
  svc.delete("/lists/" + idList + "/"+ field + "/"+ filter, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingList(idList, field, filter) {
  svc.post("/lists", {
      body: JSON.stringify({ idList: idList, field: field, filter: filter }),
      parameters: { description: "Add a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
  });
}

// UPDATE
function updateList(idList, field, filter) {
  svc.put("/lists/" + idList + "/"+ field + "/"+ filter, {
      body: JSON.stringify({ idList: idList, field: field, filter: filter }),
      parameters: { description: "Update a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
    });
}

// GET one
function getList(idList, field, filter) {
  svc.get("/lists/" + idList + "/"+ field + "/"+ filter, {
    parameters: { description: "Get a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
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
    parameters: { description: "Verify list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter + " exists" }
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
    parameters: { description: "Verify list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter + " does not exist" }
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
    return e.data.parameters.description === "Add a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter;
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
    return e.data.parameters.description === "Delete a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateList() {
  return bp.EventSet("any-update-list", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a list");
  });
}
function matchUpdateList(idList, field, filter) {
  return bp.EventSet("update-list", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter;
  });
}

// Wait helpers
function waitForAnyListAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ list\ with\ idList\ (.+) and field\ (.+) and filter\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ list\ with\ idList\ (.+) and field\ (.+) and filter\ (.+)$/);
    return { idList: m[1], field: m[2], filter: m[3] };
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
    return { idList: m[1], field: m[2], filter: m[3] };
}
function waitForListUpdated(idList, field, filter) {
  waitFor(matchUpdateList(idList, field, filter));
}
function waitForAnyListUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ list\ with\ idList\ (.+) and field\ (.+) and filter\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ list\ with\ idList\ (.+) and field\ (.+) and filter\ (.+)$/);
    return { idList: m[1], field: m[2], filter: m[3] };
}

// Verify updated (presence-by-list)
function verifyListUpdated(idList, field, filter) {
  svc.get("/lists", {
    callback: function (response) {
      list = JSON.parse(response.body);
      for (let i = 0; i < list.length; i++) {
        if (list[i].idList === idList && list[i].field === field && list[i].filter === filter) {
          return pvg.success("List updated (present)");
        }
      }
      return pvg.fail("Expected a list to be present after update, but it is not");
    },
    parameters: { description: "Verify list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter + " exists" }
  });
}


/** === Member Operations === */

// CREATE
function addMember(id) {
  svc.post("/members", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a member with " + "id " + id }
    });
}

// DELETE
function deleteMember(id) {
  svc.delete("/members/" + id, {
    parameters: { description: "Delete a member with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMember(id) {
  svc.delete("/members/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a member with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMember(id) {
  svc.post("/members", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a member with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a member with " + "id " + id }
  });
}

// UPDATE
function updateMember(id) {
  svc.put("/members/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a member with " + "id " + id }
    });
}

// GET one
function getMember(id) {
  svc.get("/members/" + id, {
    parameters: { description: "Get a member with " + "id " + id }
  });
}

// LIST all
function listMembers() {
  svc.get("/members", {
    parameters: { description: "List members" }
  });
}

// Verify exists (by list)
function verifyMemberExists(id) {
  svc.get("/members", {
    callback: function (response) {
      member = JSON.parse(response.body);
      for (let i = 0; i < member.length; i++) {
        if (member[i].id === id) {
          return pvg.success("Member exists");
        }
      }
      return pvg.fail("Expected a member to exist but it does not");
    },
    parameters: { description: "Verify member with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMemberDoesNotExist(id) {
  svc.get("/members", {
    callback: function (response) {
      member = JSON.parse(response.body);
      for (let i = 0; i < member.length; i++) {
        if (member[i].id === id) {
          return pvg.fail("Expected a member to not exist but it does");
        }
      }
      return pvg.success("Member does not exist");
    },
    parameters: { description: "Verify member with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMember() {
  return bp.EventSet("any-add-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a member");
  });
}
function matchAddMember(id) {
  return bp.EventSet("add-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a member with " + "id " + id;
  });
}
function matchAnyDeleteMember() {
  return bp.EventSet("any-del-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a member");
  });
}
function matchDeleteMember(id) {
  return bp.EventSet("del-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a member with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMember() {
  return bp.EventSet("any-update-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a member");
  });
}
function matchUpdateMember(id) {
  return bp.EventSet("update-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a member with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyMemberAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ member\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ member\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMemberAdded(id) {
  waitFor(matchAddMember(id));
}
function waitForMemberDeleted(id) {
  waitFor(matchDeleteMember(id));
}
function waitForAnyMemberDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ member\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ member\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMemberUpdated(id) {
  waitFor(matchUpdateMember(id));
}
function waitForAnyMemberUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ member\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ member\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyMemberUpdated(id) {
  svc.get("/members", {
    callback: function (response) {
      member = JSON.parse(response.body);
      for (let i = 0; i < member.length; i++) {
        if (member[i].id === id) {
          return pvg.success("Member updated (present)");
        }
      }
      return pvg.fail("Expected a member to be present after update, but it is not");
    },
    parameters: { description: "Verify member with " + "id " + id + " exists" }
  });
}


/** === Notification Operations === */

// CREATE
function addNotification(id) {
  svc.post("/notifications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a notification with " + "id " + id }
    });
}

// DELETE
function deleteNotification(id) {
  svc.delete("/notifications/" + id, {
    parameters: { description: "Delete a notification with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingNotification(id) {
  svc.delete("/notifications/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a notification with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingNotification(id) {
  svc.post("/notifications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a notification with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a notification with " + "id " + id }
  });
}

// UPDATE
function updateNotification(id) {
  svc.put("/notifications/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a notification with " + "id " + id }
    });
}

// GET one
function getNotification(id) {
  svc.get("/notifications/" + id, {
    parameters: { description: "Get a notification with " + "id " + id }
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
    parameters: { description: "Verify notification with " + "id " + id + " exists" }
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
    parameters: { description: "Verify notification with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a notification with " + "id " + id;
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
    return e.data.parameters.description === "Delete a notification with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateNotification() {
  return bp.EventSet("any-update-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a notification");
  });
}
function matchUpdateNotification(id) {
  return bp.EventSet("update-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a notification with " + "id " + id;
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
function waitForNotificationUpdated(id) {
  waitFor(matchUpdateNotification(id));
}
function waitForAnyNotificationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ notification\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ notification\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyNotificationUpdated(id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].id === id) {
          return pvg.success("Notification updated (present)");
        }
      }
      return pvg.fail("Expected a notification to be present after update, but it is not");
    },
    parameters: { description: "Verify notification with " + "id " + id + " exists" }
  });
}


/** === Organization Operations === */

// CREATE
function addOrganization(id) {
  svc.post("/organizations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a organization with " + "id " + id }
    });
}

// DELETE
function deleteOrganization(id) {
  svc.delete("/organizations/" + id, {
    parameters: { description: "Delete a organization with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrganization(id) {
  svc.delete("/organizations/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a organization with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrganization(id) {
  svc.post("/organizations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a organization with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a organization with " + "id " + id }
  });
}

// UPDATE
function updateOrganization(id) {
  svc.put("/organizations/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a organization with " + "id " + id }
    });
}

// GET one
function getOrganization(id) {
  svc.get("/organizations/" + id, {
    parameters: { description: "Get a organization with " + "id " + id }
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
    parameters: { description: "Verify organization with " + "id " + id + " exists" }
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
    parameters: { description: "Verify organization with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a organization with " + "id " + id;
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
    return e.data.parameters.description === "Delete a organization with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOrganization() {
  return bp.EventSet("any-update-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a organization");
  });
}
function matchUpdateOrganization(id) {
  return bp.EventSet("update-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a organization with " + "id " + id;
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
function waitForOrganizationUpdated(id) {
  waitFor(matchUpdateOrganization(id));
}
function waitForAnyOrganizationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ organization\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ organization\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyOrganizationUpdated(id) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].id === id) {
          return pvg.success("Organization updated (present)");
        }
      }
      return pvg.fail("Expected a organization to be present after update, but it is not");
    },
    parameters: { description: "Verify organization with " + "id " + id + " exists" }
  });
}


/** === Search Operations === */

// CREATE
function addSearch(id) {
  svc.post("/search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a search with " + "id " + id }
    });
}

// DELETE
function deleteSearch(id) {
  svc.delete("/search/" + id, {
    parameters: { description: "Delete a search with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSearch(id) {
  svc.delete("/search/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a search with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSearch(id) {
  svc.post("/search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a search with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a search with " + "id " + id }
  });
}

// UPDATE
function updateSearch(id) {
  svc.put("/search/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a search with " + "id " + id }
    });
}

// GET one
function getSearch(id) {
  svc.get("/search/" + id, {
    parameters: { description: "Get a search with " + "id " + id }
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
    parameters: { description: "Verify search with " + "id " + id + " exists" }
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
    parameters: { description: "Verify search with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a search with " + "id " + id;
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
    return e.data.parameters.description === "Delete a search with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSearch() {
  return bp.EventSet("any-update-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a search");
  });
}
function matchUpdateSearch(id) {
  return bp.EventSet("update-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a search with " + "id " + id;
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
function waitForSearchUpdated(id) {
  waitFor(matchUpdateSearch(id));
}
function waitForAnySearchUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySearchUpdated(id) {
  svc.get("/search", {
    callback: function (response) {
      search = JSON.parse(response.body);
      for (let i = 0; i < search.length; i++) {
        if (search[i].id === id) {
          return pvg.success("Search updated (present)");
        }
      }
      return pvg.fail("Expected a search to be present after update, but it is not");
    },
    parameters: { description: "Verify search with " + "id " + id + " exists" }
  });
}


/** === Session Operations === */

// CREATE
function addSession(id) {
  svc.post("/sessions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a session with " + "id " + id }
    });
}

// DELETE
function deleteSession(id) {
  svc.delete("/sessions/" + id, {
    parameters: { description: "Delete a session with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSession(id) {
  svc.delete("/sessions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a session with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSession(id) {
  svc.post("/sessions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a session with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a session with " + "id " + id }
  });
}

// UPDATE
function updateSession(id) {
  svc.put("/sessions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a session with " + "id " + id }
    });
}

// GET one
function getSession(id) {
  svc.get("/sessions/" + id, {
    parameters: { description: "Get a session with " + "id " + id }
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
    parameters: { description: "Verify session with " + "id " + id + " exists" }
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
    parameters: { description: "Verify session with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a session with " + "id " + id;
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
    return e.data.parameters.description === "Delete a session with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSession() {
  return bp.EventSet("any-update-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a session");
  });
}
function matchUpdateSession(id) {
  return bp.EventSet("update-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a session with " + "id " + id;
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
function waitForSessionUpdated(id) {
  waitFor(matchUpdateSession(id));
}
function waitForAnySessionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ session\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ session\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySessionUpdated(id) {
  svc.get("/sessions", {
    callback: function (response) {
      session = JSON.parse(response.body);
      for (let i = 0; i < session.length; i++) {
        if (session[i].id === id) {
          return pvg.success("Session updated (present)");
        }
      }
      return pvg.fail("Expected a session to be present after update, but it is not");
    },
    parameters: { description: "Verify session with " + "id " + id + " exists" }
  });
}


/** === Token Operations === */

// CREATE
function addToken(id) {
  svc.post("/tokens", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a token with " + "id " + id }
    });
}

// DELETE
function deleteToken(id) {
  svc.delete("/tokens/" + id, {
    parameters: { description: "Delete a token with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingToken(id) {
  svc.delete("/tokens/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a token with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingToken(id) {
  svc.post("/tokens", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a token with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a token with " + "id " + id }
  });
}

// UPDATE
function updateToken(id) {
  svc.put("/tokens/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a token with " + "id " + id }
    });
}

// GET one
function getToken(id) {
  svc.get("/tokens/" + id, {
    parameters: { description: "Get a token with " + "id " + id }
  });
}

// LIST all
function listTokens() {
  svc.get("/tokens", {
    parameters: { description: "List tokens" }
  });
}

// Verify exists (by list)
function verifyTokenExists(id) {
  svc.get("/tokens", {
    callback: function (response) {
      token = JSON.parse(response.body);
      for (let i = 0; i < token.length; i++) {
        if (token[i].id === id) {
          return pvg.success("Token exists");
        }
      }
      return pvg.fail("Expected a token to exist but it does not");
    },
    parameters: { description: "Verify token with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTokenDoesNotExist(id) {
  svc.get("/tokens", {
    callback: function (response) {
      token = JSON.parse(response.body);
      for (let i = 0; i < token.length; i++) {
        if (token[i].id === id) {
          return pvg.fail("Expected a token to not exist but it does");
        }
      }
      return pvg.success("Token does not exist");
    },
    parameters: { description: "Verify token with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddToken() {
  return bp.EventSet("any-add-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a token");
  });
}
function matchAddToken(id) {
  return bp.EventSet("add-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a token with " + "id " + id;
  });
}
function matchAnyDeleteToken() {
  return bp.EventSet("any-del-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a token");
  });
}
function matchDeleteToken(id) {
  return bp.EventSet("del-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a token with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateToken() {
  return bp.EventSet("any-update-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a token");
  });
}
function matchUpdateToken(id) {
  return bp.EventSet("update-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a token with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyTokenAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ token\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ token\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTokenAdded(id) {
  waitFor(matchAddToken(id));
}
function waitForTokenDeleted(id) {
  waitFor(matchDeleteToken(id));
}
function waitForAnyTokenDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ token\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ token\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTokenUpdated(id) {
  waitFor(matchUpdateToken(id));
}
function waitForAnyTokenUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ token\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ token\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyTokenUpdated(id) {
  svc.get("/tokens", {
    callback: function (response) {
      token = JSON.parse(response.body);
      for (let i = 0; i < token.length; i++) {
        if (token[i].id === id) {
          return pvg.success("Token updated (present)");
        }
      }
      return pvg.fail("Expected a token to be present after update, but it is not");
    },
    parameters: { description: "Verify token with " + "id " + id + " exists" }
  });
}


/** === Type Operations === */

// CREATE
function addType(id) {
  svc.post("/types", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a type with " + "id " + id }
    });
}

// DELETE
function deleteType(id) {
  svc.delete("/types/" + id, {
    parameters: { description: "Delete a type with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingType(id) {
  svc.delete("/types/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a type with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingType(id) {
  svc.post("/types", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a type with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a type with " + "id " + id }
  });
}

// UPDATE
function updateType(id) {
  svc.put("/types/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a type with " + "id " + id }
    });
}

// GET one
function getType(id) {
  svc.get("/types/" + id, {
    parameters: { description: "Get a type with " + "id " + id }
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
    parameters: { description: "Verify type with " + "id " + id + " exists" }
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
    parameters: { description: "Verify type with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a type with " + "id " + id;
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
    return e.data.parameters.description === "Delete a type with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateType() {
  return bp.EventSet("any-update-type", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a type");
  });
}
function matchUpdateType(id) {
  return bp.EventSet("update-type", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a type with " + "id " + id;
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
function waitForTypeUpdated(id) {
  waitFor(matchUpdateType(id));
}
function waitForAnyTypeUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ type\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ type\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyTypeUpdated(id) {
  svc.get("/types", {
    callback: function (response) {
      type = JSON.parse(response.body);
      for (let i = 0; i < type.length; i++) {
        if (type[i].id === id) {
          return pvg.success("Type updated (present)");
        }
      }
      return pvg.fail("Expected a type to be present after update, but it is not");
    },
    parameters: { description: "Verify type with " + "id " + id + " exists" }
  });
}


/** === V1 Operations === */

// CREATE
function addV1(id) {
  svc.post("/v1", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a v1 with " + "id " + id }
    });
}

// DELETE
function deleteV1(id) {
  svc.delete("/v1/" + id, {
    parameters: { description: "Delete a v1 with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(id) {
  svc.delete("/v1/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(id) {
  svc.post("/v1", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a v1 with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with " + "id " + id }
  });
}

// UPDATE
function updateV1(id) {
  svc.put("/v1/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a v1 with " + "id " + id }
    });
}

// GET one
function getV1(id) {
  svc.get("/v1/" + id, {
    parameters: { description: "Get a v1 with " + "id " + id }
  });
}

// LIST all
function listV1() {
  svc.get("/v1", {
    parameters: { description: "List v1" }
  });
}

// Verify exists (by list)
function verifyV1Exists(id) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].id === id) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(id) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].id === id) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(id) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with " + "id " + id;
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(id) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateV1() {
  return bp.EventSet("any-update-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a v1");
  });
}
function matchUpdateV1(id) {
  return bp.EventSet("update-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a v1 with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForV1Added(id) {
  waitFor(matchAddV1(id));
}
function waitForV1Deleted(id) {
  waitFor(matchDeleteV1(id));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForV1Updated(id) {
  waitFor(matchUpdateV1(id));
}
function waitForAnyV1Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ v1\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ v1\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyV1Updated(id) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].id === id) {
          return pvg.success("V1 updated (present)");
        }
      }
      return pvg.fail("Expected a v1 to be present after update, but it is not");
    },
    parameters: { description: "Verify v1 with " + "id " + id + " exists" }
  });
}


/** === Webhook Operations === */

// CREATE
function addWebhook(idWebhook, field) {
  svc.post("/webhooks", {
      body: JSON.stringify({ idWebhook: idWebhook, field: field }),
      parameters: { description: "Add a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
    });
}

// DELETE
function deleteWebhook(idWebhook, field) {
  svc.delete("/webhooks/" + idWebhook + "/"+ field, {
    parameters: { description: "Delete a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingWebhook(idWebhook, field) {
  svc.delete("/webhooks/" + idWebhook + "/"+ field, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingWebhook(idWebhook, field) {
  svc.post("/webhooks", {
      body: JSON.stringify({ idWebhook: idWebhook, field: field }),
      parameters: { description: "Add a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
  });
}

// UPDATE
function updateWebhook(idWebhook, field) {
  svc.put("/webhooks/" + idWebhook + "/"+ field, {
      body: JSON.stringify({ idWebhook: idWebhook, field: field }),
      parameters: { description: "Update a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
    });
}

// GET one
function getWebhook(idWebhook, field) {
  svc.get("/webhooks/" + idWebhook + "/"+ field, {
    parameters: { description: "Get a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
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
    parameters: { description: "Verify webhook with " + "idWebhook " + idWebhook + " and " + "field " + field + " exists" }
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
    parameters: { description: "Verify webhook with " + "idWebhook " + idWebhook + " and " + "field " + field + " does not exist" }
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
    return e.data.parameters.description === "Add a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field;
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
    return e.data.parameters.description === "Delete a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateWebhook() {
  return bp.EventSet("any-update-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a webhook");
  });
}
function matchUpdateWebhook(idWebhook, field) {
  return bp.EventSet("update-webhook", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field;
  });
}

// Wait helpers
function waitForAnyWebhookAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ webhook\ with\ idWebhook\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ webhook\ with\ idWebhook\ (.+) and field\ (.+)$/);
    return { idWebhook: m[1], field: m[2] };
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
    return { idWebhook: m[1], field: m[2] };
}
function waitForWebhookUpdated(idWebhook, field) {
  waitFor(matchUpdateWebhook(idWebhook, field));
}
function waitForAnyWebhookUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ webhook\ with\ idWebhook\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ webhook\ with\ idWebhook\ (.+) and field\ (.+)$/);
    return { idWebhook: m[1], field: m[2] };
}

// Verify updated (presence-by-list)
function verifyWebhookUpdated(idWebhook, field) {
  svc.get("/webhooks", {
    callback: function (response) {
      webhook = JSON.parse(response.body);
      for (let i = 0; i < webhook.length; i++) {
        if (webhook[i].idWebhook === idWebhook && webhook[i].field === field) {
          return pvg.success("Webhook updated (present)");
        }
      }
      return pvg.fail("Expected a webhook to be present after update, but it is not");
    },
    parameters: { description: "Verify webhook with " + "idWebhook " + idWebhook + " and " + "field " + field + " exists" }
  });
}

