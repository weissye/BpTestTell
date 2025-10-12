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
function addV1(account, customer, invoice, charge) {
  svc.post("/v1", {
      body: JSON.stringify({ account: account, customer: customer, invoice: invoice, charge: charge }),
      parameters: { description: "Add a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + "" }
    });
}

// DELETE
function deleteV1(account, customer, invoice, charge) {
  svc.delete("/v1/" + account + "/"+ customer + "/"+ invoice + "/"+ charge, {
    parameters: { description: "Delete a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(account, customer, invoice, charge) {
  svc.delete("/v1/" + account + "/"+ customer + "/"+ invoice + "/"+ charge, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(account, customer, invoice, charge) {
  svc.post("/v1", {
      body: JSON.stringify({ account: account, customer: customer, invoice: invoice, charge: charge }),
      parameters: { description: "Add a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(account, customer, invoice, charge) {
  svc.put("/v1/" + account + "/"+ customer + "/"+ invoice + "/"+ charge, {
      body: JSON.stringify({ account: account, customer: customer, invoice: invoice, charge: charge }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(account, customer, invoice, charge) {
  svc.get("/v1/" + account + "/"+ customer + "/"+ invoice + "/"+ charge, {
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
function verifyV1Exists(account, customer, invoice, charge) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].account === account && v1[i].customer === customer && v1[i].invoice === invoice && v1[i].charge === charge) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(account, customer, invoice, charge) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].account === account && v1[i].customer === customer && v1[i].invoice === invoice && v1[i].charge === charge) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(account, customer, invoice, charge) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(account, customer, invoice, charge) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ account\ (.+) and customer\ (.+) and invoice\ (.+) and charge\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ account\ (.+) and customer\ (.+) and invoice\ (.+) and charge\ (.+)$/);
    return { account: (x)=>x(m[1]), customer: (x)=>x(m[2]), invoice: (x)=>x(m[3]), charge: (x)=>x(m[4]) };
}
function waitForV1Added(account, customer, invoice, charge) {
  waitFor(matchAddV1(account, customer, invoice, charge));
}
function waitForV1Deleted(account, customer, invoice, charge) {
  waitFor(matchDeleteV1(account, customer, invoice, charge));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ account\ (.+) and customer\ (.+) and invoice\ (.+) and charge\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ account\ (.+) and customer\ (.+) and invoice\ (.+) and charge\ (.+)$/);
    return { account: (x)=>x(m[1]), customer: (x)=>x(m[2]), invoice: (x)=>x(m[3]), charge: (x)=>x(m[4]) };
}

