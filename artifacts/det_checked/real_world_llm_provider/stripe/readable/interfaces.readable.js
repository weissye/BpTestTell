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

/** === V1 Operations === */

// CREATE
function addV1(invoice, charge, customer) {
  svc.post("/v1", {
      body: JSON.stringify({ invoice: invoice, charge: charge, customer: customer }),
      parameters: { description: "Add a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer }
    });
}

// DELETE
function deleteV1(invoice, charge, customer) {
  svc.delete("/v1/" + invoice + "/"+ charge + "/"+ customer, {
    parameters: { description: "Delete a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(invoice, charge, customer) {
  svc.delete("/v1/" + invoice + "/"+ charge + "/"+ customer, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(invoice, charge, customer) {
  svc.post("/v1", {
      body: JSON.stringify({ invoice: invoice, charge: charge, customer: customer }),
      parameters: { description: "Add a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer }
  });
}

// UPDATE
function updateV1(invoice, charge, customer) {
  svc.put("/v1/" + invoice + "/"+ charge + "/"+ customer, {
      body: JSON.stringify({ invoice: invoice, charge: charge, customer: customer }),
      parameters: { description: "Update a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer }
    });
}

// GET one
function getV1(invoice, charge, customer) {
  svc.get("/v1/" + invoice + "/"+ charge + "/"+ customer, {
    parameters: { description: "Get a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer }
  });
}

// LIST all
function listV1() {
  svc.get("/v1", {
    parameters: { description: "List v1" }
  });
}

// Verify exists (by list)
function verifyV1Exists(invoice, charge, customer) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].invoice === invoice && v1[i].charge === charge && v1[i].customer === customer) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(invoice, charge, customer) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].invoice === invoice && v1[i].charge === charge && v1[i].customer === customer) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(invoice, charge, customer) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer;
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(invoice, charge, customer) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateV1() {
  return bp.EventSet("any-update-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a v1");
  });
}
function matchUpdateV1(invoice, charge, customer) {
  return bp.EventSet("update-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer;
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ invoice\ (.+) and charge\ (.+) and customer\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ invoice\ (.+) and charge\ (.+) and customer\ (.+)$/);
    return { invoice: m[1], charge: m[2], customer: m[3] };
}
function waitForV1Added(invoice, charge, customer) {
  waitFor(matchAddV1(invoice, charge, customer));
}
function waitForV1Deleted(invoice, charge, customer) {
  waitFor(matchDeleteV1(invoice, charge, customer));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ invoice\ (.+) and charge\ (.+) and customer\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ invoice\ (.+) and charge\ (.+) and customer\ (.+)$/);
    return { invoice: m[1], charge: m[2], customer: m[3] };
}
function waitForV1Updated(invoice, charge, customer) {
  waitFor(matchUpdateV1(invoice, charge, customer));
}
function waitForAnyV1Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ v1\ with\ invoice\ (.+) and charge\ (.+) and customer\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ v1\ with\ invoice\ (.+) and charge\ (.+) and customer\ (.+)$/);
    return { invoice: m[1], charge: m[2], customer: m[3] };
}

// Verify updated (presence-by-list)
function verifyV1Updated(invoice, charge, customer) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].invoice === invoice && v1[i].charge === charge && v1[i].customer === customer) {
          return pvg.success("V1 updated (present)");
        }
      }
      return pvg.fail("Expected a v1 to be present after update, but it is not");
    },
    parameters: { description: "Verify v1 with " + "invoice " + invoice + " and " + "charge " + charge + " and " + "customer " + customer + " exists" }
  });
}

