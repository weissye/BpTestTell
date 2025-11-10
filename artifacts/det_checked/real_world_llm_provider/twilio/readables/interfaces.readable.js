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
function add2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.post("/2010_04_01", { body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, DomainSid: DomainSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ResourceSid: ResourceSid, CredentialListSid: CredentialListSid, IpAccessControlListSid: IpAccessControlListSid, MessageSid: MessageSid, AddOnResultSid: AddOnResultSid, QueueSid: QueueSid, RecordingSid: RecordingSid, AssignedAddOnSid: AssignedAddOnSid, AddressSid: AddressSid, ConnectAppSid: ConnectAppSid, PayloadSid: PayloadSid }), parameters: { description: "Add a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid } });
}

// DELETE
function delete2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.delete("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ DomainSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ResourceSid + "/"+ CredentialListSid + "/"+ IpAccessControlListSid + "/"+ MessageSid + "/"+ AddOnResultSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ AssignedAddOnSid + "/"+ AddressSid + "/"+ ConnectAppSid + "/"+ PayloadSid, {
    parameters: { description: "Delete a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.delete("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ DomainSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ResourceSid + "/"+ CredentialListSid + "/"+ IpAccessControlListSid + "/"+ MessageSid + "/"+ AddOnResultSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ AssignedAddOnSid + "/"+ AddressSid + "/"+ ConnectAppSid + "/"+ PayloadSid, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.post("/2010_04_01", {
    body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, DomainSid: DomainSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ResourceSid: ResourceSid, CredentialListSid: CredentialListSid, IpAccessControlListSid: IpAccessControlListSid, MessageSid: MessageSid, AddOnResultSid: AddOnResultSid, QueueSid: QueueSid, RecordingSid: RecordingSid, AssignedAddOnSid: AssignedAddOnSid, AddressSid: AddressSid, ConnectAppSid: ConnectAppSid, PayloadSid: PayloadSid }),
    parameters: { description: "Add a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function update2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.put("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ DomainSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ResourceSid + "/"+ CredentialListSid + "/"+ IpAccessControlListSid + "/"+ MessageSid + "/"+ AddOnResultSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ AssignedAddOnSid + "/"+ AddressSid + "/"+ ConnectAppSid + "/"+ PayloadSid, { body: JSON.stringify({ AccountSid: AccountSid, Sid: Sid, CallSid: CallSid, DomainSid: DomainSid, ConferenceSid: ConferenceSid, CountryCode: CountryCode, ReferenceSid: ReferenceSid, ResourceSid: ResourceSid, CredentialListSid: CredentialListSid, IpAccessControlListSid: IpAccessControlListSid, MessageSid: MessageSid, AddOnResultSid: AddOnResultSid, QueueSid: QueueSid, RecordingSid: RecordingSid, AssignedAddOnSid: AssignedAddOnSid, AddressSid: AddressSid, ConnectAppSid: ConnectAppSid, PayloadSid: PayloadSid }), parameters: { description: "Update a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid } });
}

// GET one
function get2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.get("/2010_04_01/" + AccountSid + "/"+ Sid + "/"+ CallSid + "/"+ DomainSid + "/"+ ConferenceSid + "/"+ CountryCode + "/"+ ReferenceSid + "/"+ ResourceSid + "/"+ CredentialListSid + "/"+ IpAccessControlListSid + "/"+ MessageSid + "/"+ AddOnResultSid + "/"+ QueueSid + "/"+ RecordingSid + "/"+ AssignedAddOnSid + "/"+ AddressSid + "/"+ ConnectAppSid + "/"+ PayloadSid, {
    parameters: { description: "Get a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid }
  });
}

// LIST all
function list2010_04_01() {
  svc.get("/2010_04_01", {
    parameters: { description: "List 2010_04_01" }
  });
}

// Verify exists (by list)
function verify2010_04_01Exists(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].ResourceSid === ResourceSid && 2010_04_01[i].CredentialListSid === CredentialListSid && 2010_04_01[i].IpAccessControlListSid === IpAccessControlListSid && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].RecordingSid === RecordingSid && 2010_04_01[i].AssignedAddOnSid === AssignedAddOnSid && 2010_04_01[i].AddressSid === AddressSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].PayloadSid === PayloadSid) {
          return pvg.success("2010_04_01 exists");
        }
      }
      return pvg.fail("Expected a 2010_04_01 to exist but it does not");
    },
    parameters: { description: "Verify 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid + " exists" }
  });
}

// Verify NOT exists (by list)
function verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].ResourceSid === ResourceSid && 2010_04_01[i].CredentialListSid === CredentialListSid && 2010_04_01[i].IpAccessControlListSid === IpAccessControlListSid && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].RecordingSid === RecordingSid && 2010_04_01[i].AssignedAddOnSid === AssignedAddOnSid && 2010_04_01[i].AddressSid === AddressSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].PayloadSid === PayloadSid) {
          return pvg.fail("Expected a 2010_04_01 to not exist but it does");
        }
      }
      return pvg.success("2010_04_01 does not exist");
    },
    parameters: { description: "Verify 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd2010_04_01() {
  return bp.EventSet("any-add-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a 2010_04_01");
  });
}
function matchAdd2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  return bp.EventSet("add-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid;
  });
}
function matchAnyDelete2010_04_01() {
  return bp.EventSet("any-del-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a 2010_04_01");
  });
}
function matchDelete2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  return bp.EventSet("del-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdate2010_04_01() {
  return bp.EventSet("any-update-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a 2010_04_01");
  });
}
function matchUpdate2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  return bp.EventSet("update-2010_04_01", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid;
  });
}

// Wait helpers
function waitForAny2010_04_01Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and CredentialListSid\ (.+) and IpAccessControlListSid\ (.+) and MessageSid\ (.+) and AddOnResultSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and AssignedAddOnSid\ (.+) and AddressSid\ (.+) and ConnectAppSid\ (.+) and PayloadSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and CredentialListSid\ (.+) and IpAccessControlListSid\ (.+) and MessageSid\ (.+) and AddOnResultSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and AssignedAddOnSid\ (.+) and AddressSid\ (.+) and ConnectAppSid\ (.+) and PayloadSid\ (.+)$/);
    return { AccountSid: m[1], Sid: m[2], CallSid: m[3], DomainSid: m[4], ConferenceSid: m[5], CountryCode: m[6], ReferenceSid: m[7], ResourceSid: m[8], CredentialListSid: m[9], IpAccessControlListSid: m[10], MessageSid: m[11], AddOnResultSid: m[12], QueueSid: m[13], RecordingSid: m[14], AssignedAddOnSid: m[15], AddressSid: m[16], ConnectAppSid: m[17], PayloadSid: m[18] };
}
function waitFor2010_04_01Added(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  waitFor(matchAdd2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid));
}
function waitFor2010_04_01Deleted(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  waitFor(matchDelete2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid));
}
function waitForAny2010_04_01Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and CredentialListSid\ (.+) and IpAccessControlListSid\ (.+) and MessageSid\ (.+) and AddOnResultSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and AssignedAddOnSid\ (.+) and AddressSid\ (.+) and ConnectAppSid\ (.+) and PayloadSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and CredentialListSid\ (.+) and IpAccessControlListSid\ (.+) and MessageSid\ (.+) and AddOnResultSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and AssignedAddOnSid\ (.+) and AddressSid\ (.+) and ConnectAppSid\ (.+) and PayloadSid\ (.+)$/);
    return { AccountSid: m[1], Sid: m[2], CallSid: m[3], DomainSid: m[4], ConferenceSid: m[5], CountryCode: m[6], ReferenceSid: m[7], ResourceSid: m[8], CredentialListSid: m[9], IpAccessControlListSid: m[10], MessageSid: m[11], AddOnResultSid: m[12], QueueSid: m[13], RecordingSid: m[14], AssignedAddOnSid: m[15], AddressSid: m[16], ConnectAppSid: m[17], PayloadSid: m[18] };
}
function waitFor2010_04_01Updated(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  waitFor(matchUpdate2010_04_01(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid));
}
function waitForAny2010_04_01Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and CredentialListSid\ (.+) and IpAccessControlListSid\ (.+) and MessageSid\ (.+) and AddOnResultSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and AssignedAddOnSid\ (.+) and AddressSid\ (.+) and ConnectAppSid\ (.+) and PayloadSid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ 2010_04_01\ with\ AccountSid\ (.+) and Sid\ (.+) and CallSid\ (.+) and DomainSid\ (.+) and ConferenceSid\ (.+) and CountryCode\ (.+) and ReferenceSid\ (.+) and ResourceSid\ (.+) and CredentialListSid\ (.+) and IpAccessControlListSid\ (.+) and MessageSid\ (.+) and AddOnResultSid\ (.+) and QueueSid\ (.+) and RecordingSid\ (.+) and AssignedAddOnSid\ (.+) and AddressSid\ (.+) and ConnectAppSid\ (.+) and PayloadSid\ (.+)$/);
    return { AccountSid: m[1], Sid: m[2], CallSid: m[3], DomainSid: m[4], ConferenceSid: m[5], CountryCode: m[6], ReferenceSid: m[7], ResourceSid: m[8], CredentialListSid: m[9], IpAccessControlListSid: m[10], MessageSid: m[11], AddOnResultSid: m[12], QueueSid: m[13], RecordingSid: m[14], AssignedAddOnSid: m[15], AddressSid: m[16], ConnectAppSid: m[17], PayloadSid: m[18] };
}

// Verify updated (presence-by-list)
function verify2010_04_01Updated(AccountSid, Sid, CallSid, DomainSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, CredentialListSid, IpAccessControlListSid, MessageSid, AddOnResultSid, QueueSid, RecordingSid, AssignedAddOnSid, AddressSid, ConnectAppSid, PayloadSid) {
  svc.get("/2010_04_01", {
    callback: function (response) {
      2010_04_01 = JSON.parse(response.body);
      for (let i = 0; i < 2010_04_01.length; i++) {
        if (2010_04_01[i].AccountSid === AccountSid && 2010_04_01[i].Sid === Sid && 2010_04_01[i].CallSid === CallSid && 2010_04_01[i].DomainSid === DomainSid && 2010_04_01[i].ConferenceSid === ConferenceSid && 2010_04_01[i].CountryCode === CountryCode && 2010_04_01[i].ReferenceSid === ReferenceSid && 2010_04_01[i].ResourceSid === ResourceSid && 2010_04_01[i].CredentialListSid === CredentialListSid && 2010_04_01[i].IpAccessControlListSid === IpAccessControlListSid && 2010_04_01[i].MessageSid === MessageSid && 2010_04_01[i].AddOnResultSid === AddOnResultSid && 2010_04_01[i].QueueSid === QueueSid && 2010_04_01[i].RecordingSid === RecordingSid && 2010_04_01[i].AssignedAddOnSid === AssignedAddOnSid && 2010_04_01[i].AddressSid === AddressSid && 2010_04_01[i].ConnectAppSid === ConnectAppSid && 2010_04_01[i].PayloadSid === PayloadSid) {
          return pvg.success("2010_04_01 updated (present)");
        }
      }
      return pvg.fail("Expected a 2010_04_01 to be present after update, but it is not");
    },
    parameters: { description: "Verify 2010_04_01 with " + "AccountSid " + AccountSid + " and " + "Sid " + Sid + " and " + "CallSid " + CallSid + " and " + "DomainSid " + DomainSid + " and " + "ConferenceSid " + ConferenceSid + " and " + "CountryCode " + CountryCode + " and " + "ReferenceSid " + ReferenceSid + " and " + "ResourceSid " + ResourceSid + " and " + "CredentialListSid " + CredentialListSid + " and " + "IpAccessControlListSid " + IpAccessControlListSid + " and " + "MessageSid " + MessageSid + " and " + "AddOnResultSid " + AddOnResultSid + " and " + "QueueSid " + QueueSid + " and " + "RecordingSid " + RecordingSid + " and " + "AssignedAddOnSid " + AssignedAddOnSid + " and " + "AddressSid " + AddressSid + " and " + "ConnectAppSid " + ConnectAppSid + " and " + "PayloadSid " + PayloadSid + " exists" }
  });
}

