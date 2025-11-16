//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 */

var host = (typeof host !== 'undefined') ? host : '192.168.225.53';
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
function addAction(idAction, field) {
  svc.post("/actions", { body: JSON.stringify({ idAction: idAction, field: field }), parameters: { description: "Add a action with " + "idAction " + idAction + " and " + "field " + field } });
}

// DELETE
function deleteAction(idAction, field) {
  svc.delete("/actions/" + idAction + "/"+ field, {
    parameters: { description: "Delete a action with " + "idAction " + idAction + " and " + "field " + field }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingAction(idAction, field) {
  svc.delete("/actions/" + idAction + "/"+ field, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a action with " + "idAction " + idAction + " and " + "field " + field }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingAction(idAction, field) {
  svc.post("/actions", {
    body: JSON.stringify({ idAction: idAction, field: field }),
    parameters: { description: "Add a action with " + "idAction " + idAction + " and " + "field " + field },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateAction(idAction, field) {
  svc.put("/actions/" + idAction + "/"+ field, { body: JSON.stringify({ idAction: idAction, field: field }), parameters: { description: "Update a action with " + "idAction " + idAction + " and " + "field " + field } });
}

// GET one
function getAction(idAction, field) {
  svc.get("/actions/" + idAction + "/"+ field, {
    parameters: { description: "Get a action with " + "idAction " + idAction + " and " + "field " + field }
  });
}

// LIST all
function listActions() {
  svc.get("/actions", {
    parameters: { description: "List actions" }
  });
}

// Verify exists (by list)
function verifyActionExists(idAction, field) {
  svc.get("/actions", {
    callback: function (response) {
      action = JSON.parse(response.body);
      for (let i = 0; i < action.length; i++) {
        if (action[i].idAction === idAction && action[i].field === field) {
          return pvg.success("Action exists");
        }
      }
      return pvg.fail("Expected a action to exist but it does not");
    },
    parameters: { description: "Verify action with " + "idAction " + idAction + " and " + "field " + field + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyActionDoesNotExist(idAction, field) {
  svc.get("/actions", {
    callback: function (response) {
      action = JSON.parse(response.body);
      for (let i = 0; i < action.length; i++) {
        if (action[i].idAction === idAction && action[i].field === field) {
          return pvg.fail("Expected a action to not exist but it does");
        }
      }
      return pvg.success("Action does not exist");
    },
    parameters: { description: "Verify action with " + "idAction " + idAction + " and " + "field " + field + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAction() {
  return bp.EventSet("any-add-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a action");
  });
}
function matchAddAction(idAction, field) {
  return bp.EventSet("add-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a action with " + "idAction " + idAction + " and " + "field " + field;
  });
}
function matchAnyDeleteAction() {
  return bp.EventSet("any-del-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a action");
  });
}
function matchDeleteAction(idAction, field) {
  return bp.EventSet("del-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a action with " + "idAction " + idAction + " and " + "field " + field;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAction() {
  return bp.EventSet("any-update-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a action");
  });
}
function matchUpdateAction(idAction, field) {
  return bp.EventSet("update-action", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a action with " + "idAction " + idAction + " and " + "field " + field;
  });
}

// Wait helpers
function waitForAnyActionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ action\ with\ idAction\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ action\ with\ idAction\ (.+) and field\ (.+)$/);
    return { idAction: m[1], field: m[2] };
}
function waitForActionAdded(idAction, field) {
  waitFor(matchAddAction(idAction, field));
}
function waitForActionDeleted(idAction, field) {
  waitFor(matchDeleteAction(idAction, field));
}
function waitForAnyActionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ action\ with\ idAction\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ action\ with\ idAction\ (.+) and field\ (.+)$/);
    return { idAction: m[1], field: m[2] };
}
function waitForActionUpdated(idAction, field) {
  waitFor(matchUpdateAction(idAction, field));
}
function waitForAnyActionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ action\ with\ idAction\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ action\ with\ idAction\ (.+) and field\ (.+)$/);
    return { idAction: m[1], field: m[2] };
}

// Verify updated (presence-by-list)
function verifyActionUpdated(idAction, field) {
  svc.get("/actions", {
    callback: function (response) {
      action = JSON.parse(response.body);
      for (let i = 0; i < action.length; i++) {
        if (action[i].idAction === idAction && action[i].field === field) {
          return pvg.success("Action updated (present)");
        }
      }
      return pvg.fail("Expected a action to be present after update, but it is not");
    },
    parameters: { description: "Verify action with " + "idAction " + idAction + " and " + "field " + field + " exists" }
  });
}


/** === Batch Operations === */

// CREATE
function addBatch(id) {
  svc.post("/batch", { body: JSON.stringify({ id: id }), parameters: { description: "Add a batch with " + "id " + id } });
}

// DELETE
function deleteBatch(id) {
  svc.delete("/batch/" + id, {
    parameters: { description: "Delete a batch with " + "id " + id }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingBatch(id) {
  svc.delete("/batch/" + id, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a batch with " + "id " + id }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingBatch(id) {
  svc.post("/batch", {
    body: JSON.stringify({ id: id }),
    parameters: { description: "Add a batch with " + "id " + id },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateBatch(id) {
  svc.put("/batch/" + id, { body: JSON.stringify({ id: id }), parameters: { description: "Update a batch with " + "id " + id } });
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
function addBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.post("/boards", { body: JSON.stringify({ idBoard: idBoard, filter: filter, idMember: idMember, field: field, idMembership: idMembership, idCard: idCard, idLabel: idLabel, powerUp: powerUp }), parameters: { description: "Add a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp } });
}

// DELETE
function deleteBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.delete("/boards/" + idBoard + "/"+ filter + "/"+ idMember + "/"+ field + "/"+ idMembership + "/"+ idCard + "/"+ idLabel + "/"+ powerUp, {
    parameters: { description: "Delete a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.delete("/boards/" + idBoard + "/"+ filter + "/"+ idMember + "/"+ field + "/"+ idMembership + "/"+ idCard + "/"+ idLabel + "/"+ powerUp, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.post("/boards", {
    body: JSON.stringify({ idBoard: idBoard, filter: filter, idMember: idMember, field: field, idMembership: idMembership, idCard: idCard, idLabel: idLabel, powerUp: powerUp }),
    parameters: { description: "Add a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.put("/boards/" + idBoard + "/"+ filter + "/"+ idMember + "/"+ field + "/"+ idMembership + "/"+ idCard + "/"+ idLabel + "/"+ powerUp, { body: JSON.stringify({ idBoard: idBoard, filter: filter, idMember: idMember, field: field, idMembership: idMembership, idCard: idCard, idLabel: idLabel, powerUp: powerUp }), parameters: { description: "Update a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp } });
}

// GET one
function getBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.get("/boards/" + idBoard + "/"+ filter + "/"+ idMember + "/"+ field + "/"+ idMembership + "/"+ idCard + "/"+ idLabel + "/"+ powerUp, {
    parameters: { description: "Get a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp }
  });
}

// LIST all
function listBoards() {
  svc.get("/boards", {
    parameters: { description: "List boards" }
  });
}

// Verify exists (by list)
function verifyBoardExists(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.get("/boards", {
    callback: function (response) {
      board = JSON.parse(response.body);
      for (let i = 0; i < board.length; i++) {
        if (board[i].idBoard === idBoard && board[i].filter === filter && board[i].idMember === idMember && board[i].field === field && board[i].idMembership === idMembership && board[i].idCard === idCard && board[i].idLabel === idLabel && board[i].powerUp === powerUp) {
          return pvg.success("Board exists");
        }
      }
      return pvg.fail("Expected a board to exist but it does not");
    },
    parameters: { description: "Verify board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyBoardDoesNotExist(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.get("/boards", {
    callback: function (response) {
      board = JSON.parse(response.body);
      for (let i = 0; i < board.length; i++) {
        if (board[i].idBoard === idBoard && board[i].filter === filter && board[i].idMember === idMember && board[i].field === field && board[i].idMembership === idMembership && board[i].idCard === idCard && board[i].idLabel === idLabel && board[i].powerUp === powerUp) {
          return pvg.fail("Expected a board to not exist but it does");
        }
      }
      return pvg.success("Board does not exist");
    },
    parameters: { description: "Verify board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp + " does not exist" }
  });
}

// Match helpers
function matchAnyAddBoard() {
  return bp.EventSet("any-add-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a board");
  });
}
function matchAddBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  return bp.EventSet("add-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp;
  });
}
function matchAnyDeleteBoard() {
  return bp.EventSet("any-del-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a board");
  });
}
function matchDeleteBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  return bp.EventSet("del-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateBoard() {
  return bp.EventSet("any-update-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a board");
  });
}
function matchUpdateBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  return bp.EventSet("update-board", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp;
  });
}

// Wait helpers
function waitForAnyBoardAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ board\ with\ idBoard\ (.+) and filter\ (.+) and idMember\ (.+) and field\ (.+) and idMembership\ (.+) and idCard\ (.+) and idLabel\ (.+) and powerUp\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ board\ with\ idBoard\ (.+) and filter\ (.+) and idMember\ (.+) and field\ (.+) and idMembership\ (.+) and idCard\ (.+) and idLabel\ (.+) and powerUp\ (.+)$/);
    return { idBoard: m[1], filter: m[2], idMember: m[3], field: m[4], idMembership: m[5], idCard: m[6], idLabel: m[7], powerUp: m[8] };
}
function waitForBoardAdded(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  waitFor(matchAddBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp));
}
function waitForBoardDeleted(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  waitFor(matchDeleteBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp));
}
function waitForAnyBoardDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ board\ with\ idBoard\ (.+) and filter\ (.+) and idMember\ (.+) and field\ (.+) and idMembership\ (.+) and idCard\ (.+) and idLabel\ (.+) and powerUp\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ board\ with\ idBoard\ (.+) and filter\ (.+) and idMember\ (.+) and field\ (.+) and idMembership\ (.+) and idCard\ (.+) and idLabel\ (.+) and powerUp\ (.+)$/);
    return { idBoard: m[1], filter: m[2], idMember: m[3], field: m[4], idMembership: m[5], idCard: m[6], idLabel: m[7], powerUp: m[8] };
}
function waitForBoardUpdated(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  waitFor(matchUpdateBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp));
}
function waitForAnyBoardUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ board\ with\ idBoard\ (.+) and filter\ (.+) and idMember\ (.+) and field\ (.+) and idMembership\ (.+) and idCard\ (.+) and idLabel\ (.+) and powerUp\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ board\ with\ idBoard\ (.+) and filter\ (.+) and idMember\ (.+) and field\ (.+) and idMembership\ (.+) and idCard\ (.+) and idLabel\ (.+) and powerUp\ (.+)$/);
    return { idBoard: m[1], filter: m[2], idMember: m[3], field: m[4], idMembership: m[5], idCard: m[6], idLabel: m[7], powerUp: m[8] };
}

// Verify updated (presence-by-list)
function verifyBoardUpdated(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  svc.get("/boards", {
    callback: function (response) {
      board = JSON.parse(response.body);
      for (let i = 0; i < board.length; i++) {
        if (board[i].idBoard === idBoard && board[i].filter === filter && board[i].idMember === idMember && board[i].field === field && board[i].idMembership === idMembership && board[i].idCard === idCard && board[i].idLabel === idLabel && board[i].powerUp === powerUp) {
          return pvg.success("Board updated (present)");
        }
      }
      return pvg.fail("Expected a board to be present after update, but it is not");
    },
    parameters: { description: "Verify board with " + "idBoard " + idBoard + " and " + "filter " + filter + " and " + "idMember " + idMember + " and " + "field " + field + " and " + "idMembership " + idMembership + " and " + "idCard " + idCard + " and " + "idLabel " + idLabel + " and " + "powerUp " + powerUp + " exists" }
  });
}


/** === Card Operations === */

// CREATE
function addCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.post("/cards", { body: JSON.stringify({ idCard: idCard, idChecklist: idChecklist, idCheckItem: idCheckItem, field: field, idSticker: idSticker, idAction: idAction, idAttachment: idAttachment, idMember: idMember, idChecklistCurrent: idChecklistCurrent, idLabel: idLabel, color: color }), parameters: { description: "Add a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color } });
}

// DELETE
function deleteCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.delete("/cards/" + idCard + "/"+ idChecklist + "/"+ idCheckItem + "/"+ field + "/"+ idSticker + "/"+ idAction + "/"+ idAttachment + "/"+ idMember + "/"+ idChecklistCurrent + "/"+ idLabel + "/"+ color, {
    parameters: { description: "Delete a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.delete("/cards/" + idCard + "/"+ idChecklist + "/"+ idCheckItem + "/"+ field + "/"+ idSticker + "/"+ idAction + "/"+ idAttachment + "/"+ idMember + "/"+ idChecklistCurrent + "/"+ idLabel + "/"+ color, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.post("/cards", {
    body: JSON.stringify({ idCard: idCard, idChecklist: idChecklist, idCheckItem: idCheckItem, field: field, idSticker: idSticker, idAction: idAction, idAttachment: idAttachment, idMember: idMember, idChecklistCurrent: idChecklistCurrent, idLabel: idLabel, color: color }),
    parameters: { description: "Add a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.put("/cards/" + idCard + "/"+ idChecklist + "/"+ idCheckItem + "/"+ field + "/"+ idSticker + "/"+ idAction + "/"+ idAttachment + "/"+ idMember + "/"+ idChecklistCurrent + "/"+ idLabel + "/"+ color, { body: JSON.stringify({ idCard: idCard, idChecklist: idChecklist, idCheckItem: idCheckItem, field: field, idSticker: idSticker, idAction: idAction, idAttachment: idAttachment, idMember: idMember, idChecklistCurrent: idChecklistCurrent, idLabel: idLabel, color: color }), parameters: { description: "Update a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color } });
}

// GET one
function getCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.get("/cards/" + idCard + "/"+ idChecklist + "/"+ idCheckItem + "/"+ field + "/"+ idSticker + "/"+ idAction + "/"+ idAttachment + "/"+ idMember + "/"+ idChecklistCurrent + "/"+ idLabel + "/"+ color, {
    parameters: { description: "Get a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color }
  });
}

// LIST all
function listCards() {
  svc.get("/cards", {
    parameters: { description: "List cards" }
  });
}

// Verify exists (by list)
function verifyCardExists(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.get("/cards", {
    callback: function (response) {
      card = JSON.parse(response.body);
      for (let i = 0; i < card.length; i++) {
        if (card[i].idCard === idCard && card[i].idChecklist === idChecklist && card[i].idCheckItem === idCheckItem && card[i].field === field && card[i].idSticker === idSticker && card[i].idAction === idAction && card[i].idAttachment === idAttachment && card[i].idMember === idMember && card[i].idChecklistCurrent === idChecklistCurrent && card[i].idLabel === idLabel && card[i].color === color) {
          return pvg.success("Card exists");
        }
      }
      return pvg.fail("Expected a card to exist but it does not");
    },
    parameters: { description: "Verify card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCardDoesNotExist(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.get("/cards", {
    callback: function (response) {
      card = JSON.parse(response.body);
      for (let i = 0; i < card.length; i++) {
        if (card[i].idCard === idCard && card[i].idChecklist === idChecklist && card[i].idCheckItem === idCheckItem && card[i].field === field && card[i].idSticker === idSticker && card[i].idAction === idAction && card[i].idAttachment === idAttachment && card[i].idMember === idMember && card[i].idChecklistCurrent === idChecklistCurrent && card[i].idLabel === idLabel && card[i].color === color) {
          return pvg.fail("Expected a card to not exist but it does");
        }
      }
      return pvg.success("Card does not exist");
    },
    parameters: { description: "Verify card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCard() {
  return bp.EventSet("any-add-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a card");
  });
}
function matchAddCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  return bp.EventSet("add-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color;
  });
}
function matchAnyDeleteCard() {
  return bp.EventSet("any-del-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a card");
  });
}
function matchDeleteCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  return bp.EventSet("del-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateCard() {
  return bp.EventSet("any-update-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a card");
  });
}
function matchUpdateCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  return bp.EventSet("update-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color;
  });
}

// Wait helpers
function waitForAnyCardAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ card\ with\ idCard\ (.+) and idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+) and idSticker\ (.+) and idAction\ (.+) and idAttachment\ (.+) and idMember\ (.+) and idChecklistCurrent\ (.+) and idLabel\ (.+) and color\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ card\ with\ idCard\ (.+) and idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+) and idSticker\ (.+) and idAction\ (.+) and idAttachment\ (.+) and idMember\ (.+) and idChecklistCurrent\ (.+) and idLabel\ (.+) and color\ (.+)$/);
    return { idCard: m[1], idChecklist: m[2], idCheckItem: m[3], field: m[4], idSticker: m[5], idAction: m[6], idAttachment: m[7], idMember: m[8], idChecklistCurrent: m[9], idLabel: m[10], color: m[11] };
}
function waitForCardAdded(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  waitFor(matchAddCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color));
}
function waitForCardDeleted(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  waitFor(matchDeleteCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color));
}
function waitForAnyCardDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ card\ with\ idCard\ (.+) and idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+) and idSticker\ (.+) and idAction\ (.+) and idAttachment\ (.+) and idMember\ (.+) and idChecklistCurrent\ (.+) and idLabel\ (.+) and color\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ card\ with\ idCard\ (.+) and idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+) and idSticker\ (.+) and idAction\ (.+) and idAttachment\ (.+) and idMember\ (.+) and idChecklistCurrent\ (.+) and idLabel\ (.+) and color\ (.+)$/);
    return { idCard: m[1], idChecklist: m[2], idCheckItem: m[3], field: m[4], idSticker: m[5], idAction: m[6], idAttachment: m[7], idMember: m[8], idChecklistCurrent: m[9], idLabel: m[10], color: m[11] };
}
function waitForCardUpdated(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  waitFor(matchUpdateCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color));
}
function waitForAnyCardUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ card\ with\ idCard\ (.+) and idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+) and idSticker\ (.+) and idAction\ (.+) and idAttachment\ (.+) and idMember\ (.+) and idChecklistCurrent\ (.+) and idLabel\ (.+) and color\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ card\ with\ idCard\ (.+) and idChecklist\ (.+) and idCheckItem\ (.+) and field\ (.+) and idSticker\ (.+) and idAction\ (.+) and idAttachment\ (.+) and idMember\ (.+) and idChecklistCurrent\ (.+) and idLabel\ (.+) and color\ (.+)$/);
    return { idCard: m[1], idChecklist: m[2], idCheckItem: m[3], field: m[4], idSticker: m[5], idAction: m[6], idAttachment: m[7], idMember: m[8], idChecklistCurrent: m[9], idLabel: m[10], color: m[11] };
}

// Verify updated (presence-by-list)
function verifyCardUpdated(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  svc.get("/cards", {
    callback: function (response) {
      card = JSON.parse(response.body);
      for (let i = 0; i < card.length; i++) {
        if (card[i].idCard === idCard && card[i].idChecklist === idChecklist && card[i].idCheckItem === idCheckItem && card[i].field === field && card[i].idSticker === idSticker && card[i].idAction === idAction && card[i].idAttachment === idAttachment && card[i].idMember === idMember && card[i].idChecklistCurrent === idChecklistCurrent && card[i].idLabel === idLabel && card[i].color === color) {
          return pvg.success("Card updated (present)");
        }
      }
      return pvg.fail("Expected a card to be present after update, but it is not");
    },
    parameters: { description: "Verify card with " + "idCard " + idCard + " and " + "idChecklist " + idChecklist + " and " + "idCheckItem " + idCheckItem + " and " + "field " + field + " and " + "idSticker " + idSticker + " and " + "idAction " + idAction + " and " + "idAttachment " + idAttachment + " and " + "idMember " + idMember + " and " + "idChecklistCurrent " + idChecklistCurrent + " and " + "idLabel " + idLabel + " and " + "color " + color + " exists" }
  });
}


/** === Checklist Operations === */

// CREATE
function addChecklist(idChecklist, field, idCheckItem, filter) {
  svc.post("/checklists", { body: JSON.stringify({ idChecklist: idChecklist, field: field, idCheckItem: idCheckItem, filter: filter }), parameters: { description: "Add a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter } });
}

// DELETE
function deleteChecklist(idChecklist, field, idCheckItem, filter) {
  svc.delete("/checklists/" + idChecklist + "/"+ field + "/"+ idCheckItem + "/"+ filter, {
    parameters: { description: "Delete a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingChecklist(idChecklist, field, idCheckItem, filter) {
  svc.delete("/checklists/" + idChecklist + "/"+ field + "/"+ idCheckItem + "/"+ filter, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingChecklist(idChecklist, field, idCheckItem, filter) {
  svc.post("/checklists", {
    body: JSON.stringify({ idChecklist: idChecklist, field: field, idCheckItem: idCheckItem, filter: filter }),
    parameters: { description: "Add a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateChecklist(idChecklist, field, idCheckItem, filter) {
  svc.put("/checklists/" + idChecklist + "/"+ field + "/"+ idCheckItem + "/"+ filter, { body: JSON.stringify({ idChecklist: idChecklist, field: field, idCheckItem: idCheckItem, filter: filter }), parameters: { description: "Update a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter } });
}

// GET one
function getChecklist(idChecklist, field, idCheckItem, filter) {
  svc.get("/checklists/" + idChecklist + "/"+ field + "/"+ idCheckItem + "/"+ filter, {
    parameters: { description: "Get a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter }
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
    parameters: { description: "Verify checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter + " exists" }
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
    parameters: { description: "Verify checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter + " does not exist" }
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
    return e.data.parameters.description === "Add a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter;
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
    return e.data.parameters.description === "Delete a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateChecklist() {
  return bp.EventSet("any-update-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a checklist");
  });
}
function matchUpdateChecklist(idChecklist, field, idCheckItem, filter) {
  return bp.EventSet("update-checklist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter;
  });
}

// Wait helpers
function waitForAnyChecklistAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ checklist\ with\ idChecklist\ (.+) and field\ (.+) and idCheckItem\ (.+) and filter\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ checklist\ with\ idChecklist\ (.+) and field\ (.+) and idCheckItem\ (.+) and filter\ (.+)$/);
    return { idChecklist: m[1], field: m[2], idCheckItem: m[3], filter: m[4] };
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
    return { idChecklist: m[1], field: m[2], idCheckItem: m[3], filter: m[4] };
}
function waitForChecklistUpdated(idChecklist, field, idCheckItem, filter) {
  waitFor(matchUpdateChecklist(idChecklist, field, idCheckItem, filter));
}
function waitForAnyChecklistUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ checklist\ with\ idChecklist\ (.+) and field\ (.+) and idCheckItem\ (.+) and filter\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ checklist\ with\ idChecklist\ (.+) and field\ (.+) and idCheckItem\ (.+) and filter\ (.+)$/);
    return { idChecklist: m[1], field: m[2], idCheckItem: m[3], filter: m[4] };
}

// Verify updated (presence-by-list)
function verifyChecklistUpdated(idChecklist, field, idCheckItem, filter) {
  svc.get("/checklists", {
    callback: function (response) {
      checklist = JSON.parse(response.body);
      for (let i = 0; i < checklist.length; i++) {
        if (checklist[i].idChecklist === idChecklist && checklist[i].field === field && checklist[i].idCheckItem === idCheckItem && checklist[i].filter === filter) {
          return pvg.success("Checklist updated (present)");
        }
      }
      return pvg.fail("Expected a checklist to be present after update, but it is not");
    },
    parameters: { description: "Verify checklist with " + "idChecklist " + idChecklist + " and " + "field " + field + " and " + "idCheckItem " + idCheckItem + " and " + "filter " + filter + " exists" }
  });
}


/** === Label Operations === */

// CREATE
function addLabel(idLabel, field) {
  svc.post("/labels", { body: JSON.stringify({ idLabel: idLabel, field: field }), parameters: { description: "Add a label with " + "idLabel " + idLabel + " and " + "field " + field } });
}

// DELETE
function deleteLabel(idLabel, field) {
  svc.delete("/labels/" + idLabel + "/"+ field, {
    parameters: { description: "Delete a label with " + "idLabel " + idLabel + " and " + "field " + field }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingLabel(idLabel, field) {
  svc.delete("/labels/" + idLabel + "/"+ field, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a label with " + "idLabel " + idLabel + " and " + "field " + field }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingLabel(idLabel, field) {
  svc.post("/labels", {
    body: JSON.stringify({ idLabel: idLabel, field: field }),
    parameters: { description: "Add a label with " + "idLabel " + idLabel + " and " + "field " + field },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateLabel(idLabel, field) {
  svc.put("/labels/" + idLabel + "/"+ field, { body: JSON.stringify({ idLabel: idLabel, field: field }), parameters: { description: "Update a label with " + "idLabel " + idLabel + " and " + "field " + field } });
}

// GET one
function getLabel(idLabel, field) {
  svc.get("/labels/" + idLabel + "/"+ field, {
    parameters: { description: "Get a label with " + "idLabel " + idLabel + " and " + "field " + field }
  });
}

// LIST all
function listLabels() {
  svc.get("/labels", {
    parameters: { description: "List labels" }
  });
}

// Verify exists (by list)
function verifyLabelExists(idLabel, field) {
  svc.get("/labels", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].idLabel === idLabel && label[i].field === field) {
          return pvg.success("Label exists");
        }
      }
      return pvg.fail("Expected a label to exist but it does not");
    },
    parameters: { description: "Verify label with " + "idLabel " + idLabel + " and " + "field " + field + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLabelDoesNotExist(idLabel, field) {
  svc.get("/labels", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].idLabel === idLabel && label[i].field === field) {
          return pvg.fail("Expected a label to not exist but it does");
        }
      }
      return pvg.success("Label does not exist");
    },
    parameters: { description: "Verify label with " + "idLabel " + idLabel + " and " + "field " + field + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLabel() {
  return bp.EventSet("any-add-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a label");
  });
}
function matchAddLabel(idLabel, field) {
  return bp.EventSet("add-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a label with " + "idLabel " + idLabel + " and " + "field " + field;
  });
}
function matchAnyDeleteLabel() {
  return bp.EventSet("any-del-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a label");
  });
}
function matchDeleteLabel(idLabel, field) {
  return bp.EventSet("del-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a label with " + "idLabel " + idLabel + " and " + "field " + field;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateLabel() {
  return bp.EventSet("any-update-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a label");
  });
}
function matchUpdateLabel(idLabel, field) {
  return bp.EventSet("update-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a label with " + "idLabel " + idLabel + " and " + "field " + field;
  });
}

// Wait helpers
function waitForAnyLabelAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ label\ with\ idLabel\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ label\ with\ idLabel\ (.+) and field\ (.+)$/);
    return { idLabel: m[1], field: m[2] };
}
function waitForLabelAdded(idLabel, field) {
  waitFor(matchAddLabel(idLabel, field));
}
function waitForLabelDeleted(idLabel, field) {
  waitFor(matchDeleteLabel(idLabel, field));
}
function waitForAnyLabelDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ label\ with\ idLabel\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ label\ with\ idLabel\ (.+) and field\ (.+)$/);
    return { idLabel: m[1], field: m[2] };
}
function waitForLabelUpdated(idLabel, field) {
  waitFor(matchUpdateLabel(idLabel, field));
}
function waitForAnyLabelUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ label\ with\ idLabel\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ label\ with\ idLabel\ (.+) and field\ (.+)$/);
    return { idLabel: m[1], field: m[2] };
}

// Verify updated (presence-by-list)
function verifyLabelUpdated(idLabel, field) {
  svc.get("/labels", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].idLabel === idLabel && label[i].field === field) {
          return pvg.success("Label updated (present)");
        }
      }
      return pvg.fail("Expected a label to be present after update, but it is not");
    },
    parameters: { description: "Verify label with " + "idLabel " + idLabel + " and " + "field " + field + " exists" }
  });
}


/** === List Operations === */

// CREATE
function addList(idList, field, filter) {
  svc.post("/lists", { body: JSON.stringify({ idList: idList, field: field, filter: filter }), parameters: { description: "Add a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter } });
}

// DELETE
function deleteList(idList, field, filter) {
  svc.delete("/lists/" + idList + "/"+ field + "/"+ filter, {
    parameters: { description: "Delete a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingList(idList, field, filter) {
  svc.delete("/lists/" + idList + "/"+ field + "/"+ filter, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingList(idList, field, filter) {
  svc.post("/lists", {
    body: JSON.stringify({ idList: idList, field: field, filter: filter }),
    parameters: { description: "Add a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateList(idList, field, filter) {
  svc.put("/lists/" + idList + "/"+ field + "/"+ filter, { body: JSON.stringify({ idList: idList, field: field, filter: filter }), parameters: { description: "Update a list with " + "idList " + idList + " and " + "field " + field + " and " + "filter " + filter } });
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
function addMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.post("/members", { body: JSON.stringify({ idMember: idMember, idBoardBackground: idBoardBackground, idSavedSearch: idSavedSearch, idBoardStar: idBoardStar, filter: filter, field: field, idCustomSticker: idCustomSticker, idCustomEmoji: idCustomEmoji }), parameters: { description: "Add a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji } });
}

// DELETE
function deleteMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.delete("/members/" + idMember + "/"+ idBoardBackground + "/"+ idSavedSearch + "/"+ idBoardStar + "/"+ filter + "/"+ field + "/"+ idCustomSticker + "/"+ idCustomEmoji, {
    parameters: { description: "Delete a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.delete("/members/" + idMember + "/"+ idBoardBackground + "/"+ idSavedSearch + "/"+ idBoardStar + "/"+ filter + "/"+ field + "/"+ idCustomSticker + "/"+ idCustomEmoji, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.post("/members", {
    body: JSON.stringify({ idMember: idMember, idBoardBackground: idBoardBackground, idSavedSearch: idSavedSearch, idBoardStar: idBoardStar, filter: filter, field: field, idCustomSticker: idCustomSticker, idCustomEmoji: idCustomEmoji }),
    parameters: { description: "Add a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.put("/members/" + idMember + "/"+ idBoardBackground + "/"+ idSavedSearch + "/"+ idBoardStar + "/"+ filter + "/"+ field + "/"+ idCustomSticker + "/"+ idCustomEmoji, { body: JSON.stringify({ idMember: idMember, idBoardBackground: idBoardBackground, idSavedSearch: idSavedSearch, idBoardStar: idBoardStar, filter: filter, field: field, idCustomSticker: idCustomSticker, idCustomEmoji: idCustomEmoji }), parameters: { description: "Update a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji } });
}

// GET one
function getMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.get("/members/" + idMember + "/"+ idBoardBackground + "/"+ idSavedSearch + "/"+ idBoardStar + "/"+ filter + "/"+ field + "/"+ idCustomSticker + "/"+ idCustomEmoji, {
    parameters: { description: "Get a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji }
  });
}

// LIST all
function listMembers() {
  svc.get("/members", {
    parameters: { description: "List members" }
  });
}

// Verify exists (by list)
function verifyMemberExists(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.get("/members", {
    callback: function (response) {
      member = JSON.parse(response.body);
      for (let i = 0; i < member.length; i++) {
        if (member[i].idMember === idMember && member[i].idBoardBackground === idBoardBackground && member[i].idSavedSearch === idSavedSearch && member[i].idBoardStar === idBoardStar && member[i].filter === filter && member[i].field === field && member[i].idCustomSticker === idCustomSticker && member[i].idCustomEmoji === idCustomEmoji) {
          return pvg.success("Member exists");
        }
      }
      return pvg.fail("Expected a member to exist but it does not");
    },
    parameters: { description: "Verify member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMemberDoesNotExist(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.get("/members", {
    callback: function (response) {
      member = JSON.parse(response.body);
      for (let i = 0; i < member.length; i++) {
        if (member[i].idMember === idMember && member[i].idBoardBackground === idBoardBackground && member[i].idSavedSearch === idSavedSearch && member[i].idBoardStar === idBoardStar && member[i].filter === filter && member[i].field === field && member[i].idCustomSticker === idCustomSticker && member[i].idCustomEmoji === idCustomEmoji) {
          return pvg.fail("Expected a member to not exist but it does");
        }
      }
      return pvg.success("Member does not exist");
    },
    parameters: { description: "Verify member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMember() {
  return bp.EventSet("any-add-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a member");
  });
}
function matchAddMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  return bp.EventSet("add-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji;
  });
}
function matchAnyDeleteMember() {
  return bp.EventSet("any-del-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a member");
  });
}
function matchDeleteMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  return bp.EventSet("del-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMember() {
  return bp.EventSet("any-update-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a member");
  });
}
function matchUpdateMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  return bp.EventSet("update-member", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji;
  });
}

// Wait helpers
function waitForAnyMemberAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ member\ with\ idMember\ (.+) and idBoardBackground\ (.+) and idSavedSearch\ (.+) and idBoardStar\ (.+) and filter\ (.+) and field\ (.+) and idCustomSticker\ (.+) and idCustomEmoji\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ member\ with\ idMember\ (.+) and idBoardBackground\ (.+) and idSavedSearch\ (.+) and idBoardStar\ (.+) and filter\ (.+) and field\ (.+) and idCustomSticker\ (.+) and idCustomEmoji\ (.+)$/);
    return { idMember: m[1], idBoardBackground: m[2], idSavedSearch: m[3], idBoardStar: m[4], filter: m[5], field: m[6], idCustomSticker: m[7], idCustomEmoji: m[8] };
}
function waitForMemberAdded(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  waitFor(matchAddMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji));
}
function waitForMemberDeleted(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  waitFor(matchDeleteMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji));
}
function waitForAnyMemberDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ member\ with\ idMember\ (.+) and idBoardBackground\ (.+) and idSavedSearch\ (.+) and idBoardStar\ (.+) and filter\ (.+) and field\ (.+) and idCustomSticker\ (.+) and idCustomEmoji\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ member\ with\ idMember\ (.+) and idBoardBackground\ (.+) and idSavedSearch\ (.+) and idBoardStar\ (.+) and filter\ (.+) and field\ (.+) and idCustomSticker\ (.+) and idCustomEmoji\ (.+)$/);
    return { idMember: m[1], idBoardBackground: m[2], idSavedSearch: m[3], idBoardStar: m[4], filter: m[5], field: m[6], idCustomSticker: m[7], idCustomEmoji: m[8] };
}
function waitForMemberUpdated(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  waitFor(matchUpdateMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji));
}
function waitForAnyMemberUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ member\ with\ idMember\ (.+) and idBoardBackground\ (.+) and idSavedSearch\ (.+) and idBoardStar\ (.+) and filter\ (.+) and field\ (.+) and idCustomSticker\ (.+) and idCustomEmoji\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ member\ with\ idMember\ (.+) and idBoardBackground\ (.+) and idSavedSearch\ (.+) and idBoardStar\ (.+) and filter\ (.+) and field\ (.+) and idCustomSticker\ (.+) and idCustomEmoji\ (.+)$/);
    return { idMember: m[1], idBoardBackground: m[2], idSavedSearch: m[3], idBoardStar: m[4], filter: m[5], field: m[6], idCustomSticker: m[7], idCustomEmoji: m[8] };
}

// Verify updated (presence-by-list)
function verifyMemberUpdated(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  svc.get("/members", {
    callback: function (response) {
      member = JSON.parse(response.body);
      for (let i = 0; i < member.length; i++) {
        if (member[i].idMember === idMember && member[i].idBoardBackground === idBoardBackground && member[i].idSavedSearch === idSavedSearch && member[i].idBoardStar === idBoardStar && member[i].filter === filter && member[i].field === field && member[i].idCustomSticker === idCustomSticker && member[i].idCustomEmoji === idCustomEmoji) {
          return pvg.success("Member updated (present)");
        }
      }
      return pvg.fail("Expected a member to be present after update, but it is not");
    },
    parameters: { description: "Verify member with " + "idMember " + idMember + " and " + "idBoardBackground " + idBoardBackground + " and " + "idSavedSearch " + idSavedSearch + " and " + "idBoardStar " + idBoardStar + " and " + "filter " + filter + " and " + "field " + field + " and " + "idCustomSticker " + idCustomSticker + " and " + "idCustomEmoji " + idCustomEmoji + " exists" }
  });
}


/** === Notification Operations === */

// CREATE
function addNotification(idNotification, field) {
  svc.post("/notifications", { body: JSON.stringify({ idNotification: idNotification, field: field }), parameters: { description: "Add a notification with " + "idNotification " + idNotification + " and " + "field " + field } });
}

// DELETE
function deleteNotification(idNotification, field) {
  svc.delete("/notifications/" + idNotification + "/"+ field, {
    parameters: { description: "Delete a notification with " + "idNotification " + idNotification + " and " + "field " + field }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingNotification(idNotification, field) {
  svc.delete("/notifications/" + idNotification + "/"+ field, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a notification with " + "idNotification " + idNotification + " and " + "field " + field }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingNotification(idNotification, field) {
  svc.post("/notifications", {
    body: JSON.stringify({ idNotification: idNotification, field: field }),
    parameters: { description: "Add a notification with " + "idNotification " + idNotification + " and " + "field " + field },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateNotification(idNotification, field) {
  svc.put("/notifications/" + idNotification + "/"+ field, { body: JSON.stringify({ idNotification: idNotification, field: field }), parameters: { description: "Update a notification with " + "idNotification " + idNotification + " and " + "field " + field } });
}

// GET one
function getNotification(idNotification, field) {
  svc.get("/notifications/" + idNotification + "/"+ field, {
    parameters: { description: "Get a notification with " + "idNotification " + idNotification + " and " + "field " + field }
  });
}

// LIST all
function listNotifications() {
  svc.get("/notifications", {
    parameters: { description: "List notifications" }
  });
}

// Verify exists (by list)
function verifyNotificationExists(idNotification, field) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].idNotification === idNotification && notification[i].field === field) {
          return pvg.success("Notification exists");
        }
      }
      return pvg.fail("Expected a notification to exist but it does not");
    },
    parameters: { description: "Verify notification with " + "idNotification " + idNotification + " and " + "field " + field + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyNotificationDoesNotExist(idNotification, field) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].idNotification === idNotification && notification[i].field === field) {
          return pvg.fail("Expected a notification to not exist but it does");
        }
      }
      return pvg.success("Notification does not exist");
    },
    parameters: { description: "Verify notification with " + "idNotification " + idNotification + " and " + "field " + field + " does not exist" }
  });
}

// Match helpers
function matchAnyAddNotification() {
  return bp.EventSet("any-add-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a notification");
  });
}
function matchAddNotification(idNotification, field) {
  return bp.EventSet("add-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a notification with " + "idNotification " + idNotification + " and " + "field " + field;
  });
}
function matchAnyDeleteNotification() {
  return bp.EventSet("any-del-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a notification");
  });
}
function matchDeleteNotification(idNotification, field) {
  return bp.EventSet("del-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a notification with " + "idNotification " + idNotification + " and " + "field " + field;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateNotification() {
  return bp.EventSet("any-update-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a notification");
  });
}
function matchUpdateNotification(idNotification, field) {
  return bp.EventSet("update-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a notification with " + "idNotification " + idNotification + " and " + "field " + field;
  });
}

// Wait helpers
function waitForAnyNotificationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ notification\ with\ idNotification\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ notification\ with\ idNotification\ (.+) and field\ (.+)$/);
    return { idNotification: m[1], field: m[2] };
}
function waitForNotificationAdded(idNotification, field) {
  waitFor(matchAddNotification(idNotification, field));
}
function waitForNotificationDeleted(idNotification, field) {
  waitFor(matchDeleteNotification(idNotification, field));
}
function waitForAnyNotificationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ notification\ with\ idNotification\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ notification\ with\ idNotification\ (.+) and field\ (.+)$/);
    return { idNotification: m[1], field: m[2] };
}
function waitForNotificationUpdated(idNotification, field) {
  waitFor(matchUpdateNotification(idNotification, field));
}
function waitForAnyNotificationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ notification\ with\ idNotification\ (.+) and field\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ notification\ with\ idNotification\ (.+) and field\ (.+)$/);
    return { idNotification: m[1], field: m[2] };
}

// Verify updated (presence-by-list)
function verifyNotificationUpdated(idNotification, field) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].idNotification === idNotification && notification[i].field === field) {
          return pvg.success("Notification updated (present)");
        }
      }
      return pvg.fail("Expected a notification to be present after update, but it is not");
    },
    parameters: { description: "Verify notification with " + "idNotification " + idNotification + " and " + "field " + field + " exists" }
  });
}


/** === Organization Operations === */

// CREATE
function addOrganization(idOrg, idMember, filter, field, idMembership) {
  svc.post("/organizations", { body: JSON.stringify({ idOrg: idOrg, idMember: idMember, filter: filter, field: field, idMembership: idMembership }), parameters: { description: "Add a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership } });
}

// DELETE
function deleteOrganization(idOrg, idMember, filter, field, idMembership) {
  svc.delete("/organizations/" + idOrg + "/"+ idMember + "/"+ filter + "/"+ field + "/"+ idMembership, {
    parameters: { description: "Delete a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingOrganization(idOrg, idMember, filter, field, idMembership) {
  svc.delete("/organizations/" + idOrg + "/"+ idMember + "/"+ filter + "/"+ field + "/"+ idMembership, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingOrganization(idOrg, idMember, filter, field, idMembership) {
  svc.post("/organizations", {
    body: JSON.stringify({ idOrg: idOrg, idMember: idMember, filter: filter, field: field, idMembership: idMembership }),
    parameters: { description: "Add a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateOrganization(idOrg, idMember, filter, field, idMembership) {
  svc.put("/organizations/" + idOrg + "/"+ idMember + "/"+ filter + "/"+ field + "/"+ idMembership, { body: JSON.stringify({ idOrg: idOrg, idMember: idMember, filter: filter, field: field, idMembership: idMembership }), parameters: { description: "Update a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership } });
}

// GET one
function getOrganization(idOrg, idMember, filter, field, idMembership) {
  svc.get("/organizations/" + idOrg + "/"+ idMember + "/"+ filter + "/"+ field + "/"+ idMembership, {
    parameters: { description: "Get a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership }
  });
}

// LIST all
function listOrganizations() {
  svc.get("/organizations", {
    parameters: { description: "List organizations" }
  });
}

// Verify exists (by list)
function verifyOrganizationExists(idOrg, idMember, filter, field, idMembership) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].idOrg === idOrg && organization[i].idMember === idMember && organization[i].filter === filter && organization[i].field === field && organization[i].idMembership === idMembership) {
          return pvg.success("Organization exists");
        }
      }
      return pvg.fail("Expected a organization to exist but it does not");
    },
    parameters: { description: "Verify organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrganizationDoesNotExist(idOrg, idMember, filter, field, idMembership) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].idOrg === idOrg && organization[i].idMember === idMember && organization[i].filter === filter && organization[i].field === field && organization[i].idMembership === idMembership) {
          return pvg.fail("Expected a organization to not exist but it does");
        }
      }
      return pvg.success("Organization does not exist");
    },
    parameters: { description: "Verify organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrganization() {
  return bp.EventSet("any-add-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a organization");
  });
}
function matchAddOrganization(idOrg, idMember, filter, field, idMembership) {
  return bp.EventSet("add-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership;
  });
}
function matchAnyDeleteOrganization() {
  return bp.EventSet("any-del-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a organization");
  });
}
function matchDeleteOrganization(idOrg, idMember, filter, field, idMembership) {
  return bp.EventSet("del-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOrganization() {
  return bp.EventSet("any-update-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a organization");
  });
}
function matchUpdateOrganization(idOrg, idMember, filter, field, idMembership) {
  return bp.EventSet("update-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership;
  });
}

// Wait helpers
function waitForAnyOrganizationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ organization\ with\ idOrg\ (.+) and idMember\ (.+) and filter\ (.+) and field\ (.+) and idMembership\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ organization\ with\ idOrg\ (.+) and idMember\ (.+) and filter\ (.+) and field\ (.+) and idMembership\ (.+)$/);
    return { idOrg: m[1], idMember: m[2], filter: m[3], field: m[4], idMembership: m[5] };
}
function waitForOrganizationAdded(idOrg, idMember, filter, field, idMembership) {
  waitFor(matchAddOrganization(idOrg, idMember, filter, field, idMembership));
}
function waitForOrganizationDeleted(idOrg, idMember, filter, field, idMembership) {
  waitFor(matchDeleteOrganization(idOrg, idMember, filter, field, idMembership));
}
function waitForAnyOrganizationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ organization\ with\ idOrg\ (.+) and idMember\ (.+) and filter\ (.+) and field\ (.+) and idMembership\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ organization\ with\ idOrg\ (.+) and idMember\ (.+) and filter\ (.+) and field\ (.+) and idMembership\ (.+)$/);
    return { idOrg: m[1], idMember: m[2], filter: m[3], field: m[4], idMembership: m[5] };
}
function waitForOrganizationUpdated(idOrg, idMember, filter, field, idMembership) {
  waitFor(matchUpdateOrganization(idOrg, idMember, filter, field, idMembership));
}
function waitForAnyOrganizationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ organization\ with\ idOrg\ (.+) and idMember\ (.+) and filter\ (.+) and field\ (.+) and idMembership\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ organization\ with\ idOrg\ (.+) and idMember\ (.+) and filter\ (.+) and field\ (.+) and idMembership\ (.+)$/);
    return { idOrg: m[1], idMember: m[2], filter: m[3], field: m[4], idMembership: m[5] };
}

// Verify updated (presence-by-list)
function verifyOrganizationUpdated(idOrg, idMember, filter, field, idMembership) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].idOrg === idOrg && organization[i].idMember === idMember && organization[i].filter === filter && organization[i].field === field && organization[i].idMembership === idMembership) {
          return pvg.success("Organization updated (present)");
        }
      }
      return pvg.fail("Expected a organization to be present after update, but it is not");
    },
    parameters: { description: "Verify organization with " + "idOrg " + idOrg + " and " + "idMember " + idMember + " and " + "filter " + filter + " and " + "field " + field + " and " + "idMembership " + idMembership + " exists" }
  });
}


/** === Search Operations === */

// CREATE
function addSearch(id) {
  svc.post("/search", { body: JSON.stringify({ id: id }), parameters: { description: "Add a search with " + "id " + id } });
}

// DELETE
function deleteSearch(id) {
  svc.delete("/search/" + id, {
    parameters: { description: "Delete a search with " + "id " + id }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingSearch(id) {
  svc.delete("/search/" + id, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a search with " + "id " + id }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingSearch(id) {
  svc.post("/search", {
    body: JSON.stringify({ id: id }),
    parameters: { description: "Add a search with " + "id " + id },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateSearch(id) {
  svc.put("/search/" + id, { body: JSON.stringify({ id: id }), parameters: { description: "Update a search with " + "id " + id } });
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
function addSession(idSession) {
  svc.post("/sessions", { body: JSON.stringify({ idSession: idSession }), parameters: { description: "Add a session with " + "idSession " + idSession } });
}

// DELETE
function deleteSession(idSession) {
  svc.delete("/sessions/" + idSession, {
    parameters: { description: "Delete a session with " + "idSession " + idSession }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingSession(idSession) {
  svc.delete("/sessions/" + idSession, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a session with " + "idSession " + idSession }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingSession(idSession) {
  svc.post("/sessions", {
    body: JSON.stringify({ idSession: idSession }),
    parameters: { description: "Add a session with " + "idSession " + idSession },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateSession(idSession) {
  svc.put("/sessions/" + idSession, { body: JSON.stringify({ idSession: idSession }), parameters: { description: "Update a session with " + "idSession " + idSession } });
}

// GET one
function getSession(idSession) {
  svc.get("/sessions/" + idSession, {
    parameters: { description: "Get a session with " + "idSession " + idSession }
  });
}

// LIST all
function listSessions() {
  svc.get("/sessions", {
    parameters: { description: "List sessions" }
  });
}

// Verify exists (by list)
function verifySessionExists(idSession) {
  svc.get("/sessions", {
    callback: function (response) {
      session = JSON.parse(response.body);
      for (let i = 0; i < session.length; i++) {
        if (session[i].idSession === idSession) {
          return pvg.success("Session exists");
        }
      }
      return pvg.fail("Expected a session to exist but it does not");
    },
    parameters: { description: "Verify session with " + "idSession " + idSession + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySessionDoesNotExist(idSession) {
  svc.get("/sessions", {
    callback: function (response) {
      session = JSON.parse(response.body);
      for (let i = 0; i < session.length; i++) {
        if (session[i].idSession === idSession) {
          return pvg.fail("Expected a session to not exist but it does");
        }
      }
      return pvg.success("Session does not exist");
    },
    parameters: { description: "Verify session with " + "idSession " + idSession + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSession() {
  return bp.EventSet("any-add-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a session");
  });
}
function matchAddSession(idSession) {
  return bp.EventSet("add-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a session with " + "idSession " + idSession;
  });
}
function matchAnyDeleteSession() {
  return bp.EventSet("any-del-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a session");
  });
}
function matchDeleteSession(idSession) {
  return bp.EventSet("del-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a session with " + "idSession " + idSession;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSession() {
  return bp.EventSet("any-update-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a session");
  });
}
function matchUpdateSession(idSession) {
  return bp.EventSet("update-session", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a session with " + "idSession " + idSession;
  });
}

// Wait helpers
function waitForAnySessionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ session\ with\ idSession\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ session\ with\ idSession\ (.+)$/);
    return { idSession: m[1] };
}
function waitForSessionAdded(idSession) {
  waitFor(matchAddSession(idSession));
}
function waitForSessionDeleted(idSession) {
  waitFor(matchDeleteSession(idSession));
}
function waitForAnySessionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ session\ with\ idSession\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ session\ with\ idSession\ (.+)$/);
    return { idSession: m[1] };
}
function waitForSessionUpdated(idSession) {
  waitFor(matchUpdateSession(idSession));
}
function waitForAnySessionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ session\ with\ idSession\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ session\ with\ idSession\ (.+)$/);
    return { idSession: m[1] };
}

// Verify updated (presence-by-list)
function verifySessionUpdated(idSession) {
  svc.get("/sessions", {
    callback: function (response) {
      session = JSON.parse(response.body);
      for (let i = 0; i < session.length; i++) {
        if (session[i].idSession === idSession) {
          return pvg.success("Session updated (present)");
        }
      }
      return pvg.fail("Expected a session to be present after update, but it is not");
    },
    parameters: { description: "Verify session with " + "idSession " + idSession + " exists" }
  });
}


/** === Token Operations === */

// CREATE
function addToken(token, field, idWebhook) {
  svc.post("/tokens", { body: JSON.stringify({ token: token, field: field, idWebhook: idWebhook }), parameters: { description: "Add a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook } });
}

// DELETE
function deleteToken(token, field, idWebhook) {
  svc.delete("/tokens/" + token + "/"+ field + "/"+ idWebhook, {
    parameters: { description: "Delete a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingToken(token, field, idWebhook) {
  svc.delete("/tokens/" + token + "/"+ field + "/"+ idWebhook, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingToken(token, field, idWebhook) {
  svc.post("/tokens", {
    body: JSON.stringify({ token: token, field: field, idWebhook: idWebhook }),
    parameters: { description: "Add a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateToken(token, field, idWebhook) {
  svc.put("/tokens/" + token + "/"+ field + "/"+ idWebhook, { body: JSON.stringify({ token: token, field: field, idWebhook: idWebhook }), parameters: { description: "Update a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook } });
}

// GET one
function getToken(token, field, idWebhook) {
  svc.get("/tokens/" + token + "/"+ field + "/"+ idWebhook, {
    parameters: { description: "Get a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook }
  });
}

// LIST all
function listTokens() {
  svc.get("/tokens", {
    parameters: { description: "List tokens" }
  });
}

// Verify exists (by list)
function verifyTokenExists(token, field, idWebhook) {
  svc.get("/tokens", {
    callback: function (response) {
      token = JSON.parse(response.body);
      for (let i = 0; i < token.length; i++) {
        if (token[i].token === token && token[i].field === field && token[i].idWebhook === idWebhook) {
          return pvg.success("Token exists");
        }
      }
      return pvg.fail("Expected a token to exist but it does not");
    },
    parameters: { description: "Verify token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTokenDoesNotExist(token, field, idWebhook) {
  svc.get("/tokens", {
    callback: function (response) {
      token = JSON.parse(response.body);
      for (let i = 0; i < token.length; i++) {
        if (token[i].token === token && token[i].field === field && token[i].idWebhook === idWebhook) {
          return pvg.fail("Expected a token to not exist but it does");
        }
      }
      return pvg.success("Token does not exist");
    },
    parameters: { description: "Verify token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook + " does not exist" }
  });
}

// Match helpers
function matchAnyAddToken() {
  return bp.EventSet("any-add-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a token");
  });
}
function matchAddToken(token, field, idWebhook) {
  return bp.EventSet("add-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook;
  });
}
function matchAnyDeleteToken() {
  return bp.EventSet("any-del-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a token");
  });
}
function matchDeleteToken(token, field, idWebhook) {
  return bp.EventSet("del-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateToken() {
  return bp.EventSet("any-update-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a token");
  });
}
function matchUpdateToken(token, field, idWebhook) {
  return bp.EventSet("update-token", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook;
  });
}

// Wait helpers
function waitForAnyTokenAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ token\ with\ token\ (.+) and field\ (.+) and idWebhook\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ token\ with\ token\ (.+) and field\ (.+) and idWebhook\ (.+)$/);
    return { token: m[1], field: m[2], idWebhook: m[3] };
}
function waitForTokenAdded(token, field, idWebhook) {
  waitFor(matchAddToken(token, field, idWebhook));
}
function waitForTokenDeleted(token, field, idWebhook) {
  waitFor(matchDeleteToken(token, field, idWebhook));
}
function waitForAnyTokenDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ token\ with\ token\ (.+) and field\ (.+) and idWebhook\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ token\ with\ token\ (.+) and field\ (.+) and idWebhook\ (.+)$/);
    return { token: m[1], field: m[2], idWebhook: m[3] };
}
function waitForTokenUpdated(token, field, idWebhook) {
  waitFor(matchUpdateToken(token, field, idWebhook));
}
function waitForAnyTokenUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ token\ with\ token\ (.+) and field\ (.+) and idWebhook\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ token\ with\ token\ (.+) and field\ (.+) and idWebhook\ (.+)$/);
    return { token: m[1], field: m[2], idWebhook: m[3] };
}

// Verify updated (presence-by-list)
function verifyTokenUpdated(token, field, idWebhook) {
  svc.get("/tokens", {
    callback: function (response) {
      token = JSON.parse(response.body);
      for (let i = 0; i < token.length; i++) {
        if (token[i].token === token && token[i].field === field && token[i].idWebhook === idWebhook) {
          return pvg.success("Token updated (present)");
        }
      }
      return pvg.fail("Expected a token to be present after update, but it is not");
    },
    parameters: { description: "Verify token with " + "token " + token + " and " + "field " + field + " and " + "idWebhook " + idWebhook + " exists" }
  });
}


/** === Type Operations === */

// CREATE
function addType(id) {
  svc.post("/types", { body: JSON.stringify({ id: id }), parameters: { description: "Add a type with " + "id " + id } });
}

// DELETE
function deleteType(id) {
  svc.delete("/types/" + id, {
    parameters: { description: "Delete a type with " + "id " + id }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingType(id) {
  svc.delete("/types/" + id, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a type with " + "id " + id }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingType(id) {
  svc.post("/types", {
    body: JSON.stringify({ id: id }),
    parameters: { description: "Add a type with " + "id " + id },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateType(id) {
  svc.put("/types/" + id, { body: JSON.stringify({ id: id }), parameters: { description: "Update a type with " + "id " + id } });
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


/** === Webhook Operations === */

// CREATE
function addWebhook(idWebhook, field) {
  svc.post("/webhooks", { body: JSON.stringify({ idWebhook: idWebhook, field: field }), parameters: { description: "Add a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field } });
}

// DELETE
function deleteWebhook(idWebhook, field) {
  svc.delete("/webhooks/" + idWebhook + "/"+ field, {
    parameters: { description: "Delete a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingWebhook(idWebhook, field) {
  svc.delete("/webhooks/" + idWebhook + "/"+ field, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingWebhook(idWebhook, field) {
  svc.post("/webhooks", {
    body: JSON.stringify({ idWebhook: idWebhook, field: field }),
    parameters: { description: "Add a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateWebhook(idWebhook, field) {
  svc.put("/webhooks/" + idWebhook + "/"+ field, { body: JSON.stringify({ idWebhook: idWebhook, field: field }), parameters: { description: "Update a webhook with " + "idWebhook " + idWebhook + " and " + "field " + field } });
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

