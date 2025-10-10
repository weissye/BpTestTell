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
function addV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  svc.post("/v1", {
      body: JSON.stringify({ account: account, customer: customer, invoice: invoice, charge: charge, intent: intent, token: token, subscription_exposed_id: subscription_exposed_id, webhook_endpoint: webhook_endpoint }),
      parameters: { description: "Add a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + "" }
    });
}

// DELETE
function deleteV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  svc.delete("/v1/" + account + "/"+ customer + "/"+ invoice + "/"+ charge + "/"+ intent + "/"+ token + "/"+ subscription_exposed_id + "/"+ webhook_endpoint, {
    parameters: { description: "Delete a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  svc.delete("/v1/" + account + "/"+ customer + "/"+ invoice + "/"+ charge + "/"+ intent + "/"+ token + "/"+ subscription_exposed_id + "/"+ webhook_endpoint, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  svc.post("/v1", {
      body: JSON.stringify({ account: account, customer: customer, invoice: invoice, charge: charge, intent: intent, token: token, subscription_exposed_id: subscription_exposed_id, webhook_endpoint: webhook_endpoint }),
      parameters: { description: "Add a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  svc.put("/v1/" + account + "/"+ customer + "/"+ invoice + "/"+ charge + "/"+ intent + "/"+ token + "/"+ subscription_exposed_id + "/"+ webhook_endpoint, {
      body: JSON.stringify({ account: account, customer: customer, invoice: invoice, charge: charge, intent: intent, token: token, subscription_exposed_id: subscription_exposed_id, webhook_endpoint: webhook_endpoint }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  svc.get("/v1/" + account + "/"+ customer + "/"+ invoice + "/"+ charge + "/"+ intent + "/"+ token + "/"+ subscription_exposed_id + "/"+ webhook_endpoint, {
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
function verifyV1Exists(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].account === account && v1[i].customer === customer && v1[i].invoice === invoice && v1[i].charge === charge && v1[i].intent === intent && v1[i].token === token && v1[i].subscription_exposed_id === subscription_exposed_id && v1[i].webhook_endpoint === webhook_endpoint) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].account === account && v1[i].customer === customer && v1[i].invoice === invoice && v1[i].charge === charge && v1[i].intent === intent && v1[i].token === token && v1[i].subscription_exposed_id === subscription_exposed_id && v1[i].webhook_endpoint === webhook_endpoint) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with account " + account + " and customer " + customer + " and invoice " + invoice + " and charge " + charge + " and intent " + intent + " and token " + token + " and subscription_exposed_id " + subscription_exposed_id + " and webhook_endpoint " + webhook_endpoint + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ account\ (.+) and customer\ (.+) and invoice\ (.+) and charge\ (.+) and intent\ (.+) and token\ (.+) and subscription_exposed_id\ (.+) and webhook_endpoint\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ account\ (.+) and customer\ (.+) and invoice\ (.+) and charge\ (.+) and intent\ (.+) and token\ (.+) and subscription_exposed_id\ (.+) and webhook_endpoint\ (.+)$/);
    return { account: (x)=>x(m[1]), customer: (x)=>x(m[2]), invoice: (x)=>x(m[3]), charge: (x)=>x(m[4]), intent: (x)=>x(m[5]), token: (x)=>x(m[6]), subscription_exposed_id: parseInt(m[7]), webhook_endpoint: (x)=>x(m[8]) };
}
function waitForV1Added(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  waitFor(matchAddV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint));
}
function waitForV1Deleted(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  waitFor(matchDeleteV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ account\ (.+) and customer\ (.+) and invoice\ (.+) and charge\ (.+) and intent\ (.+) and token\ (.+) and subscription_exposed_id\ (.+) and webhook_endpoint\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ account\ (.+) and customer\ (.+) and invoice\ (.+) and charge\ (.+) and intent\ (.+) and token\ (.+) and subscription_exposed_id\ (.+) and webhook_endpoint\ (.+)$/);
    return { account: (x)=>x(m[1]), customer: (x)=>x(m[2]), invoice: (x)=>x(m[3]), charge: (x)=>x(m[4]), intent: (x)=>x(m[5]), token: (x)=>x(m[6]), subscription_exposed_id: parseInt(m[7]), webhook_endpoint: (x)=>x(m[8]) };
}

