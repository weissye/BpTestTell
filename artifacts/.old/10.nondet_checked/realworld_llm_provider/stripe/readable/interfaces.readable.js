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
function addV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  svc.post("/v1", {
      body: JSON.stringify({ account: account, id: id, customer: customer, intent: intent, charge: charge, invoice: invoice, webhook_endpoint: webhook_endpoint, reader: reader, subscription_exposed_id: subscription_exposed_id, person: person, transaction: transaction, capability: capability, payment_method: payment_method, domain: domain, refund: refund, card: card }),
      parameters: { description: "Add a v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + "" }
    });
}

// DELETE
function deleteV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  svc.delete("/v1/" + account + "/"+ id + "/"+ customer + "/"+ intent + "/"+ charge + "/"+ invoice + "/"+ webhook_endpoint + "/"+ reader + "/"+ subscription_exposed_id + "/"+ person + "/"+ transaction + "/"+ capability + "/"+ payment_method + "/"+ domain + "/"+ refund + "/"+ card, {
    parameters: { description: "Delete a v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  svc.delete("/v1/" + account + "/"+ id + "/"+ customer + "/"+ intent + "/"+ charge + "/"+ invoice + "/"+ webhook_endpoint + "/"+ reader + "/"+ subscription_exposed_id + "/"+ person + "/"+ transaction + "/"+ capability + "/"+ payment_method + "/"+ domain + "/"+ refund + "/"+ card, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  svc.post("/v1", {
      body: JSON.stringify({ account: account, id: id, customer: customer, intent: intent, charge: charge, invoice: invoice, webhook_endpoint: webhook_endpoint, reader: reader, subscription_exposed_id: subscription_exposed_id, person: person, transaction: transaction, capability: capability, payment_method: payment_method, domain: domain, refund: refund, card: card }),
      parameters: { description: "Add a v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  svc.put("/v1/" + account + "/"+ id + "/"+ customer + "/"+ intent + "/"+ charge + "/"+ invoice + "/"+ webhook_endpoint + "/"+ reader + "/"+ subscription_exposed_id + "/"+ person + "/"+ transaction + "/"+ capability + "/"+ payment_method + "/"+ domain + "/"+ refund + "/"+ card, {
      body: JSON.stringify({ account: account, id: id, customer: customer, intent: intent, charge: charge, invoice: invoice, webhook_endpoint: webhook_endpoint, reader: reader, subscription_exposed_id: subscription_exposed_id, person: person, transaction: transaction, capability: capability, payment_method: payment_method, domain: domain, refund: refund, card: card }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  svc.get("/v1/" + account + "/"+ id + "/"+ customer + "/"+ intent + "/"+ charge + "/"+ invoice + "/"+ webhook_endpoint + "/"+ reader + "/"+ subscription_exposed_id + "/"+ person + "/"+ transaction + "/"+ capability + "/"+ payment_method + "/"+ domain + "/"+ refund + "/"+ card, {
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
function verifyV1Exists(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].account === account && v1[i].id === id && v1[i].customer === customer && v1[i].intent === intent && v1[i].charge === charge && v1[i].invoice === invoice && v1[i].webhook_endpoint === webhook_endpoint && v1[i].reader === reader && v1[i].subscription_exposed_id === subscription_exposed_id && v1[i].person === person && v1[i].transaction === transaction && v1[i].capability === capability && v1[i].payment_method === payment_method && v1[i].domain === domain && v1[i].refund === refund && v1[i].card === card) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].account === account && v1[i].id === id && v1[i].customer === customer && v1[i].intent === intent && v1[i].charge === charge && v1[i].invoice === invoice && v1[i].webhook_endpoint === webhook_endpoint && v1[i].reader === reader && v1[i].subscription_exposed_id === subscription_exposed_id && v1[i].person === person && v1[i].transaction === transaction && v1[i].capability === capability && v1[i].payment_method === payment_method && v1[i].domain === domain && v1[i].refund === refund && v1[i].card === card) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with account " + account + " and id " + id + " and customer " + customer + " and intent " + intent + " and charge " + charge + " and invoice " + invoice + " and webhook_endpoint " + webhook_endpoint + " and reader " + reader + " and subscription_exposed_id " + subscription_exposed_id + " and person " + person + " and transaction " + transaction + " and capability " + capability + " and payment_method " + payment_method + " and domain " + domain + " and refund " + refund + " and card " + card + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ account\ (.+) and id\ (.+) and customer\ (.+) and intent\ (.+) and charge\ (.+) and invoice\ (.+) and webhook_endpoint\ (.+) and reader\ (.+) and subscription_exposed_id\ (.+) and person\ (.+) and transaction\ (.+) and capability\ (.+) and payment_method\ (.+) and domain\ (.+) and refund\ (.+) and card\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ account\ (.+) and id\ (.+) and customer\ (.+) and intent\ (.+) and charge\ (.+) and invoice\ (.+) and webhook_endpoint\ (.+) and reader\ (.+) and subscription_exposed_id\ (.+) and person\ (.+) and transaction\ (.+) and capability\ (.+) and payment_method\ (.+) and domain\ (.+) and refund\ (.+) and card\ (.+)$/);
    return { account: (x)=>x(m[1]), id: parseInt(m[2]), customer: (x)=>x(m[3]), intent: (x)=>x(m[4]), charge: (x)=>x(m[5]), invoice: (x)=>x(m[6]), webhook_endpoint: (x)=>x(m[7]), reader: (x)=>x(m[8]), subscription_exposed_id: parseInt(m[9]), person: (x)=>x(m[10]), transaction: (x)=>x(m[11]), capability: (x)=>x(m[12]), payment_method: (x)=>x(m[13]), domain: (x)=>x(m[14]), refund: (x)=>x(m[15]), card: (x)=>x(m[16]) };
}
function waitForV1Added(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  waitFor(matchAddV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card));
}
function waitForV1Deleted(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  waitFor(matchDeleteV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ account\ (.+) and id\ (.+) and customer\ (.+) and intent\ (.+) and charge\ (.+) and invoice\ (.+) and webhook_endpoint\ (.+) and reader\ (.+) and subscription_exposed_id\ (.+) and person\ (.+) and transaction\ (.+) and capability\ (.+) and payment_method\ (.+) and domain\ (.+) and refund\ (.+) and card\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ account\ (.+) and id\ (.+) and customer\ (.+) and intent\ (.+) and charge\ (.+) and invoice\ (.+) and webhook_endpoint\ (.+) and reader\ (.+) and subscription_exposed_id\ (.+) and person\ (.+) and transaction\ (.+) and capability\ (.+) and payment_method\ (.+) and domain\ (.+) and refund\ (.+) and card\ (.+)$/);
    return { account: (x)=>x(m[1]), id: parseInt(m[2]), customer: (x)=>x(m[3]), intent: (x)=>x(m[4]), charge: (x)=>x(m[5]), invoice: (x)=>x(m[6]), webhook_endpoint: (x)=>x(m[7]), reader: (x)=>x(m[8]), subscription_exposed_id: parseInt(m[9]), person: (x)=>x(m[10]), transaction: (x)=>x(m[11]), capability: (x)=>x(m[12]), payment_method: (x)=>x(m[13]), domain: (x)=>x(m[14]), refund: (x)=>x(m[15]), card: (x)=>x(m[16]) };
}

