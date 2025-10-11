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
function addV1(roId, chainId, garageId, customerId, vin, pmId) {
  svc.post("/v1", {
      body: JSON.stringify({ roId: roId, chainId: chainId, garageId: garageId, customerId: customerId, vin: vin, pmId: pmId }),
      parameters: { description: "Add a v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + "" }
    });
}

// DELETE
function deleteV1(roId, chainId, garageId, customerId, vin, pmId) {
  svc.delete("/v1/" + roId + "/"+ chainId + "/"+ garageId + "/"+ customerId + "/"+ vin + "/"+ pmId, {
    parameters: { description: "Delete a v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(roId, chainId, garageId, customerId, vin, pmId) {
  svc.delete("/v1/" + roId + "/"+ chainId + "/"+ garageId + "/"+ customerId + "/"+ vin + "/"+ pmId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(roId, chainId, garageId, customerId, vin, pmId) {
  svc.post("/v1", {
      body: JSON.stringify({ roId: roId, chainId: chainId, garageId: garageId, customerId: customerId, vin: vin, pmId: pmId }),
      parameters: { description: "Add a v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(roId, chainId, garageId, customerId, vin, pmId) {
  svc.put("/v1/" + roId + "/"+ chainId + "/"+ garageId + "/"+ customerId + "/"+ vin + "/"+ pmId, {
      body: JSON.stringify({ roId: roId, chainId: chainId, garageId: garageId, customerId: customerId, vin: vin, pmId: pmId }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(roId, chainId, garageId, customerId, vin, pmId) {
  svc.get("/v1/" + roId + "/"+ chainId + "/"+ garageId + "/"+ customerId + "/"+ vin + "/"+ pmId, {
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
function verifyV1Exists(roId, chainId, garageId, customerId, vin, pmId) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].roId === roId && v1[i].chainId === chainId && v1[i].garageId === garageId && v1[i].customerId === customerId && v1[i].vin === vin && v1[i].pmId === pmId) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(roId, chainId, garageId, customerId, vin, pmId) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].roId === roId && v1[i].chainId === chainId && v1[i].garageId === garageId && v1[i].customerId === customerId && v1[i].vin === vin && v1[i].pmId === pmId) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(roId, chainId, garageId, customerId, vin, pmId) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(roId, chainId, garageId, customerId, vin, pmId) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with roId " + roId + " and chainId " + chainId + " and garageId " + garageId + " and customerId " + customerId + " and vin " + vin + " and pmId " + pmId + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ roId\ (.+) and chainId\ (.+) and garageId\ (.+) and customerId\ (.+) and vin\ (.+) and pmId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ roId\ (.+) and chainId\ (.+) and garageId\ (.+) and customerId\ (.+) and vin\ (.+) and pmId\ (.+)$/);
    return { roId: (x)=>x(m[1]), chainId: (x)=>x(m[2]), garageId: (x)=>x(m[3]), customerId: (x)=>x(m[4]), vin: (x)=>x(m[5]), pmId: (x)=>x(m[6]) };
}
function waitForV1Added(roId, chainId, garageId, customerId, vin, pmId) {
  waitFor(matchAddV1(roId, chainId, garageId, customerId, vin, pmId));
}
function waitForV1Deleted(roId, chainId, garageId, customerId, vin, pmId) {
  waitFor(matchDeleteV1(roId, chainId, garageId, customerId, vin, pmId));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ roId\ (.+) and chainId\ (.+) and garageId\ (.+) and customerId\ (.+) and vin\ (.+) and pmId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ roId\ (.+) and chainId\ (.+) and garageId\ (.+) and customerId\ (.+) and vin\ (.+) and pmId\ (.+)$/);
    return { roId: (x)=>x(m[1]), chainId: (x)=>x(m[2]), garageId: (x)=>x(m[3]), customerId: (x)=>x(m[4]), vin: (x)=>x(m[5]), pmId: (x)=>x(m[6]) };
}

