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

/** === 2010_04_01 Operations === */

// CREATE
function add2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.post("/2010_04_01", { body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ResourceSid: ResourceSid, MessageSid: MessageSid, DomainSid: DomainSid, QueueSid: QueueSid, RecordingSid: RecordingSid, ConnectAppSid: ConnectAppSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid, AddressSid: AddressSid }), parameters: { description: "Add a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid } });
}

// DELETE
function delete2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.delete("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ResourceSid + "/"+ MessageSid + "/"+ DomainSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ ConnectAppSid + "/"+ AddOnResultSid + "/"+ PayloadSid + "/"+ AddressSid, {
    parameters: { description: "Delete a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.delete("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ResourceSid + "/"+ MessageSid + "/"+ DomainSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ ConnectAppSid + "/"+ AddOnResultSid + "/"+ PayloadSid + "/"+ AddressSid, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.post("/2010_04_01", {
    body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ResourceSid: ResourceSid, MessageSid: MessageSid, DomainSid: DomainSid, QueueSid: QueueSid, RecordingSid: RecordingSid, ConnectAppSid: ConnectAppSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid, AddressSid: AddressSid }),
    parameters: { description: "Add a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function update2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.put("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ResourceSid + "/"+ MessageSid + "/"+ DomainSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ ConnectAppSid + "/"+ AddOnResultSid + "/"+ PayloadSid + "/"+ AddressSid, { body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ResourceSid: ResourceSid, MessageSid: MessageSid, DomainSid: DomainSid, QueueSid: QueueSid, RecordingSid: RecordingSid, ConnectAppSid: ConnectAppSid, AddOnResultSid: AddOnResultSid, PayloadSid: PayloadSid, AddressSid: AddressSid }), parameters: { description: "Update a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid } });
}

// GET one
function get2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.get("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ResourceSid + "/"+ MessageSid + "/"+ DomainSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ ConnectAppSid + "/"+ AddOnResultSid + "/"+ PayloadSid + "/"+ AddressSid, {
    parameters: { description: "Get a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid }
  });
}

// LIST all
function list2010_04_01() {
  svc.get("/2010_04_01", {
    parameters: { description: "List 2010_04_01" }
  });
}

// Verify exists (by list)
function verify2010_04_01Exists(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].ResourceSid === ResourceSid && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].RecordingSid === RecordingSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].PayloadSid === PayloadSid && 2010_04_01[i].AddressSid === AddressSid) {
          return pvg.success("2010_04_01 exists");
        }
      }
      return pvg.fail("Expected a 2010_04_01 to exist but it does not");
    },
    parameters: { description: "Verify 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid + " exists" }
  });
}

// Verify NOT exists (by list)
function verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].ResourceSid === ResourceSid && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].RecordingSid === RecordingSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].PayloadSid === PayloadSid && 2010_04_01[i].AddressSid === AddressSid) {
          return pvg.fail("Expected a 2010_04_01 to not exist but it does");
        }
      }
      return pvg.success("2010_04_01 does not exist");
    },
    parameters: { description: "Verify 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd2010_04_01() {
  return bp.EventSet("any-add-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a 2010_04_01");
  });
}
function matchAdd2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  return bp.EventSet("add-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid;
  });
}
function matchAnyDelete2010_04_01() {
  return bp.EventSet("any-del-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a 2010_04_01");
  });
}
function matchDelete2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  return bp.EventSet("del-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdate2010_04_01() {
  return bp.EventSet("any-update-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a 2010_04_01");
  });
}
function matchUpdate2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  return bp.EventSet("update-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid;
  });
}

// Wait helpers
function waitForAny2010_04_01Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/);
    return { AccountSid: m[1], Sid: m[2], CallSid: m[3], ConferenceSid: m[4], CountryCode: m[5], ReferenceSid: m[6], ResourceSid: m[7], MessageSid: m[8], DomainSid: m[9], QueueSid: m[10], RecordingSid: m[11], ConnectAppSid: m[12], AddOnResultSid: m[13], PayloadSid: m[14], AddressSid: m[15] };
}
function waitFor2010_04_01Added(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  waitFor(matchAdd2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid));
}
function waitFor2010_04_01Deleted(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  waitFor(matchDelete2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid));
}
function waitForAny2010_04_01Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/);
    return { AccountSid: m[1], Sid: m[2], CallSid: m[3], ConferenceSid: m[4], CountryCode: m[5], ReferenceSid: m[6], ResourceSid: m[7], MessageSid: m[8], DomainSid: m[9], QueueSid: m[10], RecordingSid: m[11], ConnectAppSid: m[12], AddOnResultSid: m[13], PayloadSid: m[14], AddressSid: m[15] };
}
function waitFor2010_04_01Updated(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  waitFor(matchUpdate2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid));
}
function waitForAny2010_04_01Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and MessageSid\ (.+) and DomainSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and ConnectAppSid\ (.+) and AddOnResultSid\ (.+) and PayloadSid\ (.+) and AddressSid\ (.+)$/);
    return { AccountSid: m[1], Sid: m[2], CallSid: m[3], ConferenceSid: m[4], CountryCode: m[5], ReferenceSid: m[6], ResourceSid: m[7], MessageSid: m[8], DomainSid: m[9], QueueSid: m[10], RecordingSid: m[11], ConnectAppSid: m[12], AddOnResultSid: m[13], PayloadSid: m[14], AddressSid: m[15] };
}

// Verify updated (presence-by-list)
function verify2010_04_01Updated(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].ResourceSid === ResourceSid && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].RecordingSid === RecordingSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].PayloadSid === PayloadSid && 2010_04_01[i].AddressSid === AddressSid) {
          return pvg.success("2010_04_01 updated (present)");
        }
      }
      return pvg.fail("Expected a 2010_04_01 to be present after update, but it is not");
    },
    parameters: { description: "Verify 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "MessageSid " + MessageSid + " and " + "DomainSid " + DomainSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "PayloadSid " + PayloadSid + " and " + "AddressSid " + AddressSid + " exists" }
  });
}

