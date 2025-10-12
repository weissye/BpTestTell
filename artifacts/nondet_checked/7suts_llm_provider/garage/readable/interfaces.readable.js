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

/** === V1 Operations === */

// CREATE
function addV1(chainId, garageId, customerId, vin, roId) {
  svc.post("/v1", {
      body: JSON.stringify({ chainId: chainId, garageId: garageId, customerId: customerId, vin: vin, roId: roId }),
      parameters: { description: "Add a v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + "" }
    });
}

// DELETE
function deleteV1(chainId, garageId, customerId, vin, roId) {
  svc.delete("/v1/" + chainId + "/"+ garageId + "/"+ customerId + "/"+ vin + "/"+ roId, {
    parameters: { description: "Delete a v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(chainId, garageId, customerId, vin, roId) {
  svc.delete("/v1/" + chainId + "/"+ garageId + "/"+ customerId + "/"+ vin + "/"+ roId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(chainId, garageId, customerId, vin, roId) {
  svc.post("/v1", {
      body: JSON.stringify({ chainId: chainId, garageId: garageId, customerId: customerId, vin: vin, roId: roId }),
      parameters: { description: "Add a v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(chainId, garageId, customerId, vin, roId) {
  svc.put("/v1/" + chainId + "/"+ garageId + "/"+ customerId + "/"+ vin + "/"+ roId, {
      body: JSON.stringify({ chainId: chainId, garageId: garageId, customerId: customerId, vin: vin, roId: roId }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(chainId, garageId, customerId, vin, roId) {
  svc.get("/v1/" + chainId + "/"+ garageId + "/"+ customerId + "/"+ vin + "/"+ roId, {
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
function verifyV1Exists(chainId, garageId, customerId, vin, roId) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].chainId === chainId && v1[i].garageId === garageId && v1[i].customerId === customerId && v1[i].vin === vin && v1[i].roId === roId) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(chainId, garageId, customerId, vin, roId) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].chainId === chainId && v1[i].garageId === garageId && v1[i].customerId === customerId && v1[i].vin === vin && v1[i].roId === roId) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(chainId, garageId, customerId, vin, roId) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(chainId, garageId, customerId, vin, roId) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and roId " + roId + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ chainId\ (.+) and garageId\ (.+) and customerId\ (.+) and vin\ (.+) and roId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ chainId\ (.+) and garageId\ (.+) and customerId\ (.+) and vin\ (.+) and roId\ (.+)$/);
    return { chainId: (x)=>x(m[1]), garageId: (x)=>x(m[2]), customerId: (x)=>x(m[3]), vin: (x)=>x(m[4]), roId: (x)=>x(m[5]) };
}
function waitForV1Added(chainId, garageId, customerId, vin, roId) {
  waitFor(matchAddV1(chainId, garageId, customerId, vin, roId));
}
function waitForV1Deleted(chainId, garageId, customerId, vin, roId) {
  waitFor(matchDeleteV1(chainId, garageId, customerId, vin, roId));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ chainId\ (.+) and garageId\ (.+) and customerId\ (.+) and vin\ (.+) and roId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ chainId\ (.+) and garageId\ (.+) and customerId\ (.+) and vin\ (.+) and roId\ (.+)$/);
    return { chainId: (x)=>x(m[1]), garageId: (x)=>x(m[2]), customerId: (x)=>x(m[3]), vin: (x)=>x(m[4]), roId: (x)=>x(m[5]) };
}

