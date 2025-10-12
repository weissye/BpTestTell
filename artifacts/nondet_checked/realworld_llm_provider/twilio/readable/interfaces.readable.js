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

/** === 2010_04_01 Operations === */

// CREATE
function add2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  svc.post("/2010_04_01", {
      body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, DomainSid: DomainSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ConferenceSid: ConferenceSid, MessageSid: MessageSid, QueueSid: QueueSid, ConnectAppSid: ConnectAppSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid }),
      parameters: { description: "Add a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + "" }
    });
}

// DELETE
function delete2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  svc.delete("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ DomainSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ConferenceSid + "/"+ MessageSid + "/"+ QueueSid + "/"+ ConnectAppSid + "/"+ AddOnResultSid + "/"+ PayloadSid, {
    parameters: { description: "Delete a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  svc.delete("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ DomainSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ConferenceSid + "/"+ MessageSid + "/"+ QueueSid + "/"+ ConnectAppSid + "/"+ AddOnResultSid + "/"+ PayloadSid, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  svc.post("/2010_04_01", {
      body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, DomainSid: DomainSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ConferenceSid: ConferenceSid, MessageSid: MessageSid, QueueSid: QueueSid, ConnectAppSid: ConnectAppSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid }),
      parameters: { description: "Add a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function update2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  svc.put("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ DomainSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ConferenceSid + "/"+ MessageSid + "/"+ QueueSid + "/"+ ConnectAppSid + "/"+ AddOnResultSid + "/"+ PayloadSid, {
      body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, DomainSid: DomainSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ConferenceSid: ConferenceSid, MessageSid: MessageSid, QueueSid: QueueSid, ConnectAppSid: ConnectAppSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid }),
      parameters: { description: "Update a 2010_04_01" }
    });
}

// GET one
function get2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  svc.get("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ DomainSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ConferenceSid + "/"+ MessageSid + "/"+ QueueSid + "/"+ ConnectAppSid + "/"+ AddOnResultSid + "/"+ PayloadSid, {
    parameters: { description: "Get a 2010_04_01" }
  });
}

// LIST all
function list2010_04_01() {
  svc.get("/2010_04_01", {
    parameters: { description: "List 2010_04_01" }
  });
}

// Verify exists (by list)
function verify2010_04_01Exists(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].PayloadSid === PayloadSid) {
          return pvg.success("2010_04_01 exists");
        }
      }
      return pvg.fail("Expected a 2010_04_01 to exist but it does not");
    },
    parameters: { description: "Verify 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " exists" }
  });
}

// Verify NOT exists (by list)
function verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].PayloadSid === PayloadSid) {
          return pvg.fail("Expected a 2010_04_01 to not exist but it does");
        }
      }
      return pvg.success("2010_04_01 does not exist");
    },
    parameters: { description: "Verify 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd2010_04_01() {
  return bp.EventSet("any-add-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a 2010_04_01");
  });
}
function matchAdd2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  return bp.EventSet("add-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + "";
  });
}
function matchAnyDelete2010_04_01() {
  return bp.EventSet("any-del-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a 2010_04_01");
  });
}
function matchDelete2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  return bp.EventSet("del-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and DomainSid " + DomainSid + " and CountryCode " + CountryCode + " and ReferenceSid " + ReferenceSid + " and ConferenceSid " + ConferenceSid + " and MessageSid " + MessageSid + " and QueueSid " + QueueSid + " and ConnectAppSid " + ConnectAppSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + "";
  });
}

// Wait helpers
function waitForAny2010_04_01Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ConferenceSid\ (.+) and MessageSid\ (.+) and QueueSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ConferenceSid\ (.+) and MessageSid\ (.+) and QueueSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+)$/);
    return { AccountSid: (x)=>x(m[1]), Sid: (x)=>x(m[2]), CallSid: (x)=>x(m[3]), DomainSid: (x)=>x(m[4]), CountryCode: (x)=>x(m[5]), ReferenceSid: (x)=>x(m[6]), ConferenceSid: (x)=>x(m[7]), MessageSid: (x)=>x(m[8]), QueueSid: (x)=>x(m[9]), ConnectAppSid: (x)=>x(m[10]), AddOnResultSid: (x)=>x(m[11]), PayloadSid: (x)=>x(m[12]) };
}
function waitFor2010_04_01Added(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  waitFor(matchAdd2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid));
}
function waitFor2010_04_01Deleted(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  waitFor(matchDelete2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid));
}
function waitForAny2010_04_01Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ConferenceSid\ (.+) and MessageSid\ (.+) and QueueSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ConferenceSid\ (.+) and MessageSid\ (.+) and QueueSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+)$/);
    return { AccountSid: (x)=>x(m[1]), Sid: (x)=>x(m[2]), CallSid: (x)=>x(m[3]), DomainSid: (x)=>x(m[4]), CountryCode: (x)=>x(m[5]), ReferenceSid: (x)=>x(m[6]), ConferenceSid: (x)=>x(m[7]), MessageSid: (x)=>x(m[8]), QueueSid: (x)=>x(m[9]), ConnectAppSid: (x)=>x(m[10]), AddOnResultSid: (x)=>x(m[11]), PayloadSid: (x)=>x(m[12]) };
}

