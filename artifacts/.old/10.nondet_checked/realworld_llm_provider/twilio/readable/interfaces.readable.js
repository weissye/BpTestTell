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
function add2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.post("/2010_04_01", {
      body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, MessageSid: MessageSid, DomainSid: DomainSid, QueueSid: QueueSid, RecordingSid: RecordingSid, ConnectAppSid: ConnectAppSid, ReferenceSid: ReferenceSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid, AddressSid: AddressSid }),
      parameters: { description: "Add a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + "" }
    });
}

// DELETE
function delete2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.delete("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ MessageSid + "/"+ DomainSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ ConnectAppSid + "/"+ ReferenceSid + "/"+ AddOnResultSid + "/"+ PayloadSid + "/"+ AddressSid, {
    parameters: { description: "Delete a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.delete("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ MessageSid + "/"+ DomainSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ ConnectAppSid + "/"+ ReferenceSid + "/"+ AddOnResultSid + "/"+ PayloadSid + "/"+ AddressSid, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.post("/2010_04_01", {
      body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, MessageSid: MessageSid, DomainSid: DomainSid, QueueSid: QueueSid, RecordingSid: RecordingSid, ConnectAppSid: ConnectAppSid, ReferenceSid: ReferenceSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid, AddressSid: AddressSid }),
      parameters: { description: "Add a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function update2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.put("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ MessageSid + "/"+ DomainSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ ConnectAppSid + "/"+ ReferenceSid + "/"+ AddOnResultSid + "/"+ PayloadSid + "/"+ AddressSid, {
      body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, MessageSid: MessageSid, DomainSid: DomainSid, QueueSid: QueueSid, RecordingSid: RecordingSid, ConnectAppSid: ConnectAppSid, ReferenceSid: ReferenceSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid, AddressSid: AddressSid }),
      parameters: { description: "Update a 2010_04_01" }
    });
}

// GET one
function get2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.get("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ MessageSid + "/"+ DomainSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ ConnectAppSid + "/"+ ReferenceSid + "/"+ AddOnResultSid + "/"+ PayloadSid + "/"+ AddressSid, {
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
function verify2010_04_01Exists(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].RecordingSid === RecordingSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].PayloadSid === PayloadSid && 2010_04_01[i].AddressSid === AddressSid) {
          return pvg.success("2010_04_01 exists");
        }
      }
      return pvg.fail("Expected a 2010_04_01 to exist but it does not");
    },
    parameters: { description: "Verify 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + " exists" }
  });
}

// Verify NOT exists (by list)
function verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].RecordingSid === RecordingSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].PayloadSid === PayloadSid && 2010_04_01[i].AddressSid === AddressSid) {
          return pvg.fail("Expected a 2010_04_01 to not exist but it does");
        }
      }
      return pvg.success("2010_04_01 does not exist");
    },
    parameters: { description: "Verify 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd2010_04_01() {
  return bp.EventSet("any-add-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a 2010_04_01");
  });
}
function matchAdd2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  return bp.EventSet("add-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + "";
  });
}
function matchAnyDelete2010_04_01() {
  return bp.EventSet("any-del-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a 2010_04_01");
  });
}
function matchDelete2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  return bp.EventSet("del-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a 2010_04_01 with AccountSid " + AccountSid + " and Sid " + Sid + " and CallSid " + CallSid + " and ConferenceSid " + ConferenceSid + " and CountryCode " + CountryCode + " and MessageSid " + MessageSid + " and DomainSid " + DomainSid + " and QueueSid " + QueueSid + " and RecordingSid " + RecordingSid + " and ConnectAppSid " + ConnectAppSid + " and ReferenceSid " + ReferenceSid + " and AddOnResultSid " + AddOnResultSid + " and PayloadSid " + PayloadSid + " and AddressSid " + AddressSid + "";
  });
}

// Wait helpers
function waitForAny2010_04_01Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and ReferenceSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and ReferenceSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/);
    return { AccountSid: (x)=>x(m[1]), Sid: (x)=>x(m[2]), CallSid: (x)=>x(m[3]), ConferenceSid: (x)=>x(m[4]), CountryCode: (x)=>x(m[5]), MessageSid: (x)=>x(m[6]), DomainSid: (x)=>x(m[7]), QueueSid: (x)=>x(m[8]), RecordingSid: (x)=>x(m[9]), ConnectAppSid: (x)=>x(m[10]), ReferenceSid: (x)=>x(m[11]), AddOnResultSid: (x)=>x(m[12]), PayloadSid: (x)=>x(m[13]), AddressSid: (x)=>x(m[14]) };
}
function waitFor2010_04_01Added(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  waitFor(matchAdd2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid));
}
function waitFor2010_04_01Deleted(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  waitFor(matchDelete2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid));
}
function waitForAny2010_04_01Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and ReferenceSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and ReferenceSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/);
    return { AccountSid: (x)=>x(m[1]), Sid: (x)=>x(m[2]), CallSid: (x)=>x(m[3]), ConferenceSid: (x)=>x(m[4]), CountryCode: (x)=>x(m[5]), MessageSid: (x)=>x(m[6]), DomainSid: (x)=>x(m[7]), QueueSid: (x)=>x(m[8]), RecordingSid: (x)=>x(m[9]), ConnectAppSid: (x)=>x(m[10]), ReferenceSid: (x)=>x(m[11]), AddOnResultSid: (x)=>x(m[12]), PayloadSid: (x)=>x(m[13]), AddressSid: (x)=>x(m[14]) };
}

